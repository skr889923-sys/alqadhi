/* ==========================================================================
   Main Application Entry Point: القاضي
   ========================================================================== */

import { createIcons, icons } from 'lucide';
import { initCinematicIntro } from './intro.js';
import { initProducts } from './products.js';
import { initCart } from './cart.js';
import { initAmbientEffects } from './ambient.js';
import { initConciergeQuiz } from './quiz.js';
import { initGiftCustomizer } from './customizer.js';

// Expose Lucide icons globally for dynamic components
window.lucide = {
  createIcons: () => createIcons({ icons })
};

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Lucide Icons
  window.lucide.createIcons();

  // 2. Initialize Ambient Atmosphere (Floating petals, audio)
  initAmbientEffects();

  // 3. Initialize Products Catalog & Modal
  initProducts();

  // 4. Initialize Shopping Bag & Checkout
  initCart();

  // 5. Initialize Concierge & Fragrance Notes
  initConciergeQuiz();

  // 6. Initialize Bespoke Gift Customizer
  initGiftCustomizer();

  // 7. Initialize Cinematic Intro
  initCinematicIntro();

  // 8. Sticky Header Scroll Effect
  const header = document.getElementById('royal-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Replay Intro Button in Header
  const replayBtn = document.querySelector('.btn-replay-intro');
  if (replayBtn) {
    replayBtn.addEventListener('click', () => {
      if (window.replayCinematicIntro) {
        window.replayCinematicIntro();
      }
    });
  }

  // Smooth Navigation Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
