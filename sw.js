const CACHE_NAME = "mrdental-static-v1";
const PRECACHE_ASSETS = [
  "./static/images/Logo-01.webp",
  "./static/icons/icon-192.png",
  "./static/icons/icon-512.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_ASSETS)),
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key !== CACHE_NAME)
            .map((key) => caches.delete(key)),
        ),
      ),
  );
  self.clients.claim();
});

// Cache-first for static images/fonts (safe to reuse across visits).
// Network-first for HTML/JSON so clinic info (hours, offers) never goes stale.
self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  const isStaticAsset = /\.(?:png|jpe?g|webp|svg|avif|woff2?|ico)$/i.test(
    new URL(request.url).pathname,
  );

  if (isStaticAsset) {
    event.respondWith(
      caches.match(request).then(
        (cached) =>
          cached ||
          fetch(request)
            .then((response) => {
              const clone = response.clone();
              caches
                .open(CACHE_NAME)
                .then((cache) => cache.put(request, clone));
              return response;
            })
            .catch(() => cached),
      ),
    );
    return;
  }

  event.respondWith(
    fetch(request).catch(() => caches.match(request)),
  );
});
