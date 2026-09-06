import json

with open('public/products/real_products.json', 'r', encoding='utf-8') as f:
    products = json.load(f)

# Sort priority
priority_ids = ['p781045737', 'p965362523', 'p471689423', 'p1897719084', 'p1150881236', 'p319156863', 'p705634831', 'p179147640', 'p1576253037', 'p516241893', 'p1210005577', 'p1252442049', 'p853838875', 'p463635230']

def sort_key(p):
    if p['id'] in priority_ids:
        return (0, priority_ids.index(p['id']))
    return (1, -p.get('price', 0))

products.sort(key=sort_key)

for p in products:
    if p['id'] == 'p781045737':
        p['badge'] = 'تاج الفخامة'
        p['badgeClass'] = 'gold'
    elif p['id'] == 'p965362523':
        p['badge'] = 'إهداء ملكي'
        p['badgeClass'] = 'gold'
    elif p['id'] == 'p179147640':
        p['badge'] = 'ماء العروس النخب الأول'
        p['badgeClass'] = 'gold'
    elif p['id'] == 'p1576253037':
        p['badge'] = 'ورد طائفي بيور'
        p['badgeClass'] = 'gold'
    elif p['id'] == 'p516241893':
        p['badge'] = 'الأكثر طلباً'
        p['badgeClass'] = 'gold'
    elif p['price'] >= 100:
        p['badge'] = 'إصدار فاخر'
        p['badgeClass'] = 'gold'
    else:
        p['badge'] = 'أصلي 100%'
        p['badgeClass'] = ''

header_code = """/* ==========================================================================
   Product Catalog & Real Products from diwan-alward.com: دار القاضي
   ========================================================================== */

import { addToCart } from './cart.js';

export const productsData = """

footer_code = """;

export function initProducts() {
  const grid = document.querySelector('.products-grid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const modalBackdrop = document.querySelector('.modal-backdrop');
  const modalClose = document.querySelector('.modal-close-btn');
  const searchInput = document.getElementById('product-search-input');

  if (!grid) return;

  let currentCategory = 'all';
  let searchQuery = '';

  renderProducts();

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-filter');
      renderProducts();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      renderProducts();
    });
  }

  function renderProducts() {
    grid.innerHTML = '';
    let filtered = productsData;

    if (currentCategory !== 'all') {
      filtered = filtered.filter(p => p.category === currentCategory);
    }

    if (searchQuery) {
      filtered = filtered.filter(p => 
        p.title.toLowerCase().includes(searchQuery) ||
        p.categoryName.toLowerCase().includes(searchQuery)
      );
    }

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 2rem; color: var(--text-muted);">
          <p style="font-size: 1.2rem; margin-bottom: 0.5rem;">لم يتم العثور على منتجات مطابقة للبحث.</p>
          <small>جرب البحث بكلمة أخرى مثل: ورد، بخور، عود، معطر، كولونيا</small>
        </div>
      `;
      return;
    }

    filtered.forEach(p => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `
        <div class="product-card-visual">
          <img src="${p.image}" alt="${p.title}" loading="lazy" onerror="this.src='/products/taif-rose-water.jpg'" />
          <div class="card-badge-container">
            <span class="card-badge ${p.badgeClass}">${p.badge}</span>
          </div>
          <div class="card-action-overlay">
            <button class="btn-card-action btn-quick-view" data-id="${p.id}">
              <i data-lucide="eye" style="width:16px;height:16px;"></i>
              <span>نظرة سريعة</span>
            </button>
          </div>
        </div>
        <div class="product-card-body">
          <span class="product-card-category">${p.categoryName}</span>
          <h3 class="product-card-title">${p.title}</h3>
          <p class="product-card-notes">منتج أصيل موثق من متجر ديوان الورد (القاضي لمنتجات الورد الطائفي)، مقطر ومصنوع بمقاييس الجودة السعودية.</p>
          <div class="product-card-footer">
            <div class="product-price-group">
              <span class="price-label">السعر يشمل الضريبة</span>
              <span class="price-value">${p.price.toLocaleString('ar-SA')} <span class="price-currency">ر.س</span></span>
            </div>
            <button class="btn-add-cart" data-id="${p.id}" title="إضافة للحقيبة">
              <i data-lucide="shopping-bag" style="width:18px;height:18px;"></i>
            </button>
          </div>
        </div>
      `;
      grid.appendChild(card);
    });

    if (window.lucide) {
      window.lucide.createIcons();
    }

    attachCardEvents();
  }

  function attachCardEvents() {
    document.querySelectorAll('.btn-quick-view').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-id');
        openQuickView(id);
      });
    });

    document.querySelectorAll('.btn-add-cart').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-id');
        const prod = productsData.find(p => p.id === id);
        if (prod) {
          addToCart(prod, 1);
        }
      });
    });
  }

  function openQuickView(id) {
    const p = productsData.find(prod => prod.id === id);
    if (!p || !modalBackdrop) return;

    modalBackdrop.querySelector('.modal-gallery').innerHTML = `
      <img src="${p.image}" alt="${p.title}" onerror="this.src='/products/taif-rose-water.jpg'" />
    `;
    modalBackdrop.querySelector('.modal-category').textContent = p.categoryName;
    modalBackdrop.querySelector('.modal-title').textContent = p.title;
    modalBackdrop.querySelector('.modal-price-tag').innerHTML = `
      ${p.price.toLocaleString('ar-SA')} <span>ر.س</span>
    `;
    modalBackdrop.querySelector('.modal-description').textContent = 
      'منتج أصيل موثق من مزارع ومعامل دار القاضي لورد الطائف (ديوان الورد)، مستخلص من خيرات جبال الهدا والشفا ومقطر بنقاء عالي.';

    const specs = {
      'اسم المنتج': p.title,
      'التصنيف': p.categoryName,
      'السعر الرسمي': `${p.price} ريال سعودي`,
      'الضمان': 'منتج أصلي ومضمون 100%',
      'المنشأ': 'الطائف - المملكة العربية السعودية'
    };

    let specsHtml = '';
    for (const [key, val] of Object.entries(specs)) {
      specsHtml += `
        <div class="spec-row">
          <span class="spec-name">${key}:</span>
          <span class="spec-val">${val}</span>
        </div>
      `;
    }
    modalBackdrop.querySelector('.modal-specs-list').innerHTML = specsHtml;

    const qtyInput = modalBackdrop.querySelector('.qty-input');
    qtyInput.value = '1';

    const modalAddBtn = modalBackdrop.querySelector('.btn-modal-add');
    modalAddBtn.onclick = () => {
      const qty = parseInt(qtyInput.value, 10) || 1;
      addToCart(p, qty);
      closeQuickView();
    };

    modalBackdrop.classList.add('open');
  }

  function closeQuickView() {
    if (modalBackdrop) {
      modalBackdrop.classList.remove('open');
    }
  }

  if (modalClose) {
    modalClose.addEventListener('click', closeQuickView);
  }
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) closeQuickView();
    });
  }

  const plusBtn = document.querySelector('.qty-btn.plus');
  const minusBtn = document.querySelector('.qty-btn.minus');
  const qtyInput = document.querySelector('.qty-input');
  if (plusBtn && minusBtn && qtyInput) {
    plusBtn.addEventListener('click', () => {
      qtyInput.value = (parseInt(qtyInput.value, 10) || 1) + 1;
    });
    minusBtn.addEventListener('click', () => {
      const cur = parseInt(qtyInput.value, 10) || 1;
      if (cur > 1) qtyInput.value = cur - 1;
    });
  }
}
"""

with open('src/scripts/products.js', 'w', encoding='utf-8') as f:
    f.write(header_code + json.dumps(products, ensure_ascii=False, indent=2) + footer_code)

print("src/scripts/products.js generated successfully with all 76 real products!")
