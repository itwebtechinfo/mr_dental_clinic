import os

# Folder path
FOLDER_PATH = "/Users/rdxvinay/Downloads/MR_Dentel_Clinic/images/pediatricDentistry"

# Supported image extensions
IMAGE_EXTENSIONS = (".jpg", ".jpeg", ".png", ".webp", ".gif")

# Get all image files
files = [
    f for f in os.listdir(FOLDER_PATH)
    if f.lower().endswith(IMAGE_EXTENSIONS)
]

# Sort files
files.sort()

# List to store filename and path
image_list = []

# Rename files
for index, filename in enumerate(files, start=1):
    old_path = os.path.join(FOLDER_PATH, filename)

    extension = os.path.splitext(filename)[1]
    new_name = f"img_{index:02d}{extension}"
    new_path = os.path.join(FOLDER_PATH, new_name)

    os.rename(old_path, new_path)

    # Store in list
    image_list.append({
        "filename": new_name,
        "path": new_path
    })

# Print list
print("\n📂 Image List:")
for item in image_list:
    print(item)

print("\n✅ Renaming & listing done!")
