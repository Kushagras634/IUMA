import requests
from bs4 import BeautifulSoup

query = "doctor portrait"
url = f"https://www.google.com/search?q={query}&tbm=isch"

response = requests.get(url)
soup = BeautifulSoup(response.text, 'html.parser')
img_tags = soup.find_all('img', class_='rg_i')

urls = []
for img in img_tags:
    try:
        urls.append(img['data-src'])
    except KeyError:
        pass
print(urls)
# for i, url in enumerate(urls[:100]):
#     try:
#         response = requests.get(url)
#         with open(f"image_{i}.jpg", "wb") as f:
#             f.write(response.content)
#     except:
#         pass