!sudo apt install tesseract-ocr
!sudo apt install tesseract-ocr-jpn
!pip install pytesseract
!pip install pillow
!pip install requests
!pip install matplotlib

from PIL import Image, ImageEnhance, ImageFilter
import pytesseract
import requests
from io import BytesIO
import matplotlib.pyplot as plt

today = input("今日の日付を入力(例:2024年05月12日)\n> ")
today_y = int(today[:4])
today_m = int(today[5:7])
today_d = int(today[8:10])
# print(today_y, today_m, today_d)

# Tesseractのパスを設定（Colabでのデフォルトパス）
pytesseract.pytesseract.tesseract_cmd = (r'/usr/bin/tesseract')

# 画像を選択
print("1:消費期限(内)\n2:消費期限(切)\n3:外枠記載\n4:関係ない文字列")
image_dore = int(input("> "))
if image_dore == 1:
  image_url = 'https://pp-pixel.github.io/data/ocr/ocrtext_12.png'
elif image_dore == 2:
  image_url = 'https://pp-pixel.github.io/data/ocr/ocrtext_11.png'
elif image_dore == 3:
  image_url = 'https://pp-pixel.github.io/data/ocr/ocrtext_8.png'
elif image_dore == 4:
  image_url = 'https://pp-pixel.github.io/data/ocr/ocrtext_9.png'
# 1:12.png: 消費期限(内)
# 1:11.png: 消費期限(外)
# 2: 8.png: 消費期限 外枠に記載
# 3: 9.png: 関係ない文字列

# URLから画像を読み込む
response = requests.get(image_url)
image = Image.open(BytesIO(response.content))

# グレースケールに変換
gray_image = image.convert('L')

# コントラストを強化する
enhancer = ImageEnhance.Contrast(gray_image)
enhanced_image = enhancer.enhance(2.0) # この値は実験的に調整する

# 強化された画像でOCRを実行
text = pytesseract.image_to_string(enhanced_image, lang='jpn')
# print(text)

# コントラスト強化後の画像を表示

plt.subplot(1, 3, 3)
plt.imshow(enhanced_image, cmap='gray')
plt.title('Enhanced Contrast Grayscale Image')
plt.axis('off')
plt.show()

# OCR 結果の表示
print("\nOCR Results:\n" + text + "\n--=--=--=--\n")
index_kigen = text.find("期限")
found_kigen = text[index_kigen:index_kigen+2]

kigen = text[index_kigen-2:index_kigen+20]
index_sotowaku = kigen.find("記載")
found_sotowaku = kigen[index_sotowaku:index_sotowaku+2]

I = False
if found_kigen == "期限":
  print("Expiration:\n" + kigen)
  if found_sotowaku != "記載":
    I = True
  else:
    I = False
    print("外枠に記載されている為読み取れません。\n")
else:
  I = False
  print("消費･賞味期限は記載されていません。\n")

if I == True:
  found_kigen_2 = text[index_kigen+3:index_kigen+20]
  expiry_y = int(found_kigen_2[:4])
  expiry_m = int(found_kigen_2[5:7])
  expiry_d = int(found_kigen_2[8:10])
  # 日付テスト
  # expiry_d=int(12)
  # print(expiry_y, expiry_m, expiry_d)
  if today_y <= expiry_y and today_m <= expiry_m and today_d <= expiry_d:
    print("消費･賞味期限は過ぎていません。\n")
    if today_y <= expiry_y and today_m <= expiry_m and today_d == expiry_d:
      print("消費･賞味期限は今日です。\n")
  else:
    print("消費･賞味期限が過ぎています。\n")
