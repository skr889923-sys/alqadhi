import urllib.request, urllib.parse, re, json, os, time
from concurrent.futures import ThreadPoolExecutor
import xml.etree.ElementTree as ET

headers = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

os.makedirs('public/products/real', exist_ok=True)

# 1. Fetch URLs from sitemap
sitemap_url = 'https://diwan-alward.com/sitemap-2.xml'
print("Fetching sitemap...")
req = urllib.request.Request(sitemap_url, headers=headers)
with urllib.request.urlopen(req, timeout=10) as resp:
    data = resp.read().decode('utf-8')

root = ET.fromstring(data)
urls = []
for child in root:
    for elem in child:
        if elem.tag.endswith('loc'):
            u = elem.text.replace('https://salla.sa/al-gadhi.com', 'https://diwan-alward.com')
            urls.append(u)

print(f"Total product pages to process: {len(urls)}")

def fetch_product(url):
    try:
        pid = url.split('/')[-1]
        slug = urllib.parse.unquote(url.split('/')[-2])
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=12) as resp:
            html = resp.read().decode('utf-8', errors='ignore')

        # Title
        title_m = re.search(r'<meta property=\"og:title\" content=\"(.*?)\"', html)
        if title_m:
            title = title_m.group(1).split('|')[0].strip()
        else:
            title = slug.replace('-', ' ')

        # Price
        price_m = re.search(r'<meta property=\"product:price:amount\" content=\"(.*?)\"', html)
        price = float(price_m.group(1)) if price_m else None

        # Image
        img_m = re.search(r'<meta property=\"og:image\" content=\"(.*?)\"', html)
        img_url = img_m.group(1) if img_m else None

        # Description
        desc_m = re.search(r'<meta property=\"og:description\" content=\"(.*?)\"', html)
        desc = desc_m.group(1).strip() if desc_m else ''

        # Determine Category
        cat = 'perfume'
        cat_name = 'عطور خاصة'
        if any(w in slug for w in ['ماء-الورد', 'ماء-عروس', 'ماء-الزهر', 'ماء-الكادي']):
            cat = 'water'
            cat_name = 'مياه الورد الطبيعية'
        elif any(w in slug for w in ['زيت-الورد', 'دهن', 'عود-ورد', 'عنبر-ورد', 'هيل-ورد', 'فانيلا-ورد']):
            cat = 'oil'
            cat_name = 'أدهان وزيوت الورد'
        elif any(w in slug for w in ['بخور', 'معمول', 'البخور-الذكي']):
            cat = 'incense'
            cat_name = 'البخور والمعمول'
        elif any(w in slug for w in ['مجموعة', 'بكج', 'صندوق']):
            cat = 'gifts'
            cat_name = 'مجموعات الإهداء'
        elif any(w in slug for w in ['معطر', 'كولونيا', 'فازلين', 'ورد-مجفف']):
            cat = 'freshener'
            cat_name = 'معطرات وعناية'

        # Download image if available
        local_img_path = None
        if img_url:
            ext = 'jpg'
            if '.png' in img_url: ext = 'png'
            elif '.jpeg' in img_url: ext = 'jpeg'
            elif '.webp' in img_url: ext = 'webp'
            local_filename = f"{pid}.{ext}"
            local_dest = os.path.join('public/products/real', local_filename)
            
            try:
                img_req = urllib.request.Request(img_url, headers=headers)
                with urllib.request.urlopen(img_req, timeout=10) as img_resp:
                    with open(local_dest, 'wb') as f:
                        f.write(img_resp.read())
                local_img_path = f"/products/real/{local_filename}"
            except Exception as ie:
                print(f"Failed to download image for {slug}: {ie}")

        return {
            'id': pid,
            'slug': slug,
            'title': title,
            'price': price,
            'image': local_img_path or img_url,
            'original_image_url': img_url,
            'category': cat,
            'categoryName': cat_name,
            'description': desc,
            'url': url
        }
    except Exception as e:
        print(f"Error fetching {url}: {e}")
        return None

# Execute in parallel
print("Extracting products and downloading imagery...")
products = []
with ThreadPoolExecutor(max_workers=8) as executor:
    results = executor.map(fetch_product, urls)
    for res in results:
        if res and res.get('price') is not None:
            products.append(res)
            print(f"✓ [{res['id']}] {res['title']} - {res['price']} SAR")

print(f"\nSuccessfully processed {len(products)} products with prices and images!")

# Save to json
with open('public/products/real_products.json', 'w', encoding='utf-8') as f:
    json.dump(products, f, ensure_ascii=False, indent=2)

print("Saved to public/products/real_products.json")
