import sys
from PIL import Image, ExifTags

for path in ['photos/DSC_7854.jpg', 'photos/PXL_20260718_164545895.jpg']:
    try:
        img = Image.open(path)
        exif_data = img._getexif()
        tags = {ExifTags.TAGS[k]: v for k, v in exif_data.items() if k in ExifTags.TAGS}
        exp = tags.get('ExposureTime')
        fnum = tags.get('FNumber')
        print(f"--- {path} ---")
        if exp:
            print("Exp:", exp.numerator, "/", exp.denominator, float(exp))
        if fnum:
            print("Fnum:", float(fnum))
    except Exception as e:
        print(f"Error on {path}: {e}")
