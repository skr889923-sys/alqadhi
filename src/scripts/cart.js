/* ==========================================================================
   Reactive Shopping Bag & Toast System: القاضي
   ========================================================================== */

let cart = [
  // Start with a signature item in bag for instant luxury presentation
  {
    id: 'taif-rose-oil',
    title: 'دهن الورد الطائفي الملكي - النخب الأول',
    price: 1850,
    size: 'تولة كاملة (11.7 غرام)',
    image: '/products/taif-rose-oil.jpg',
    qty: 1
  }
];

export function initCart() {
  const openCartBtns = document.querySelectorAll('.btn-open-cart');
  const closeCartBtn = document.querySelector('.cart-close-btn');
  const overlay = document.querySelector('.cart-drawer-overlay');
  const checkoutBtn = document.querySelector('.btn-checkout');
  const giftWrapCheckbox = document.getElementById('gift-wrap-check');

  openCartBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openCart();
    });
  });

  if (closeCartBtn) {
    closeCartBtn.addEventListener('click', closeCart);
  }

  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeCart();
    });
  }

  if (giftWrapCheckbox) {
    giftWrapCheckbox.addEventListener('change', () => {
      showToast(giftWrapCheckbox.checked ? 'تمت إضافة التغليف الملكي الفاخر مجاناً' : 'تم إلغاء التغليف الإضافي');
    });
  }

  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      if (cart.length === 0) return;
      checkoutBtn.disabled = true;
      checkoutBtn.innerHTML = 'جاري إعداد طلبكم الملكي...';
      
      setTimeout(() => {
        showToast('بارك الله لكم، تم تسجيل طلبكم الملكي برقم رفيع #TK-9824!');
        cart = [];
        updateCartUI();
        closeCart();
        checkoutBtn.disabled = false;
        checkoutBtn.innerHTML = `<span>إتمام الطلب الملكي</span><i data-lucide="arrow-left"></i>`;
        if (window.lucide) window.lucide.createIcons();
      }, 1500);
    });
  }

  updateCartUI();
}

export function openCart() {
  const overlay = document.querySelector('.cart-drawer-overlay');
  if (overlay) {
    overlay.classList.add('open');
    updateCartUI();
  }
}

export function closeCart() {
  const overlay = document.querySelector('.cart-drawer-overlay');
  if (overlay) {
    overlay.classList.remove('open');
  }
}

export function addToCart(product, quantity = 1) {
  const existing = cart.find(item => item.id === product.id);
  if (existing) {
    existing.qty += quantity;
  } else {
    cart.push({
      id: product.id,
      title: product.title,
      price: product.price,
      size: product.size,
      image: product.image,
      qty: quantity
    });
  }

  updateCartUI();
  showToast(`تمت إضافة "${product.title}" إلى حقيبة المقتنيات`);
}

export function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  updateCartUI();
  showToast('تم تحديث حقيبة المقتنيات');
}

export function updateQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(id);
  } else {
    updateCartUI();
  }
}

function updateCartUI() {
  const listEl = document.querySelector('.cart-items-list');
  const badgeEl = document.querySelector('.bag-badge');
  const subtotalEl = document.querySelector('.subtotal-amount');

  // Update badge counter
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  if (badgeEl) {
    badgeEl.textContent = totalItems.toLocaleString('ar-SA');
    badgeEl.style.display = totalItems > 0 ? 'flex' : 'none';
  }

  // Calculate subtotal
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  if (subtotalEl) {
    subtotalEl.innerHTML = `${subtotal.toLocaleString('ar-SA')} <span>ر.س</span>`;
  }

  // Render items
  if (!listEl) return;

  if (cart.length === 0) {
    listEl.innerHTML = `
      <div class="cart-empty-state">
        <i data-lucide="shopping-bag" class="empty-icon"></i>
        <h4 class="empty-title">حقيبة المقتنيات فارغة</h4>
        <p class="empty-desc">استكشف نفحات الورد الطائفي الخالص واختر ما يناسب ذائقتكم الملكية.</p>
        <button class="btn btn-gold-ghost" onclick="window.closeCart && window.closeCart(); window.location.href='#products';">
          <span>تصفح المقتنيات الملكية</span>
        </button>
      </div>
    `;
  } else {
    listEl.innerHTML = cart.map(item => `
      <div class="cart-item">
        <div class="cart-item-thumb">
          <img src="${item.image}" alt="${item.title}" />
        </div>
        <div class="cart-item-info">
          <h5>${item.title}</h5>
          <div class="item-size">${item.size}</div>
          <div class="cart-item-qty">
            <button class="btn-qty-minus" data-id="${item.id}">-</button>
            <span>${item.qty.toLocaleString('ar-SA')}</span>
            <button class="btn-qty-plus" data-id="${item.id}">+</button>
          </div>
        </div>
        <div class="cart-item-price">
          <div>${(item.price * item.qty).toLocaleString('ar-SA')} <small style="font-size:0.75rem;color:var(--gold-primary)">ر.س</small></div>
          <button class="cart-item-remove" data-id="${item.id}">حذف</button>
        </div>
      </div>
    `).join('');
  }

  // Re-bind Lucide icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Attach quantity / remove events
  listEl.querySelectorAll('.btn-qty-plus').forEach(btn => {
    btn.onclick = () => updateQty(btn.getAttribute('data-id'), 1);
  });
  listEl.querySelectorAll('.btn-qty-minus').forEach(btn => {
    btn.onclick = () => updateQty(btn.getAttribute('data-id'), -1);
  });
  listEl.querySelectorAll('.cart-item-remove').forEach(btn => {
    btn.onclick = () => removeFromCart(btn.getAttribute('data-id'));
  });
}

// Toast notification helper
export function showToast(message) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <span style="color:var(--gold-primary);font-size:1.2rem;">♦</span>
    <span>${message}</span>
  `;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.4s ease';
    setTimeout(() => toast.remove(), 400);
  }, 3500);
}

// Expose closeCart to window
window.closeCart = closeCart;
