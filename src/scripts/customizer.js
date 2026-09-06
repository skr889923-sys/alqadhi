/* ==========================================================================
   Bespoke Royal Gift Box Customizer: دار القاضي
   ========================================================================== */

import { addToCart } from './cart.js';
import { productsData } from './products.js';

export function initGiftCustomizer() {
  const colorBtns = document.querySelectorAll('.color-option-btn');
  const previewImg = document.querySelector('.customizer-preview-box img');
  const recipientInput = document.getElementById('card-recipient');
  const messageInput = document.getElementById('card-message');
  const liveToText = document.querySelector('.live-card-to');
  const liveMsgText = document.querySelector('.live-card-message');
  const addCustomGiftBtn = document.querySelector('.btn-add-custom-gift');

  // Box Color Switcher
  colorBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      colorBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const color = btn.getAttribute('data-color');
      
      if (previewImg) {
        if (color === 'emerald') {
          previewImg.style.filter = 'none';
        } else if (color === 'noir') {
          previewImg.style.filter = 'brightness(0.7) contrast(1.2) hue-rotate(180deg)';
        } else if (color === 'ivory') {
          previewImg.style.filter = 'brightness(1.2) sepia(0.3) saturate(1.1)';
        }
      }
    });
  });

  // Live Calligraphy Message Typing
  if (recipientInput && liveToText) {
    recipientInput.addEventListener('input', (e) => {
      liveToText.textContent = e.target.value.trim() ? `إلى: ${e.target.value}` : 'إلى: صاحب السمو والرفعة';
    });
  }

  if (messageInput && liveMsgText) {
    messageInput.addEventListener('input', (e) => {
      liveMsgText.textContent = e.target.value.trim() ? `"${e.target.value}"` : '"أدام الله عزكم وطيب أوقاتكم بأريج ورد الطائف الملكي"';
    });
  }

  // Add customized gift to bag
  if (addCustomGiftBtn) {
    addCustomGiftBtn.addEventListener('click', () => {
      const giftProduct = productsData.find(p => p.id === 'royal-gift-box');
      if (giftProduct) {
        const customItem = {
          ...giftProduct,
          title: `صندوق الإهداء الملكي المخصص (${recipientInput ? recipientInput.value || 'إهداء خاص' : 'إهداء خاص'})`
        };
        addToCart(customItem, 1);
      }
    });
  }
}
