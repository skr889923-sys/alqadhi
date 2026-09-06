/* ==========================================================================
   Fragrance Concierge Quiz & Olfactory Pyramid: دار القاضي
   ========================================================================== */

import { addToCart } from './cart.js';
import { productsData } from './products.js';

export function initConciergeQuiz() {
  const steps = document.querySelectorAll('.quiz-step');
  const resultBox = document.querySelector('.quiz-result-box');
  let currentStep = 1;
  let userAnswers = {};

  document.querySelectorAll('.quiz-choice-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const stepNum = parseInt(btn.getAttribute('data-step'), 10);
      const val = btn.getAttribute('data-val');
      userAnswers[`step${stepNum}`] = val;

      if (stepNum === 1) {
        goToStep(2);
      } else if (stepNum === 2) {
        showResult();
      }
    });
  });

  function goToStep(num) {
    steps.forEach(s => s.classList.remove('active'));
    const nextStep = document.getElementById(`quiz-step-${num}`);
    if (nextStep) nextStep.classList.add('active');
  }

  function showResult() {
    steps.forEach(s => s.classList.remove('active'));
    if (!resultBox) return;

    let recId = 'taif-rose-oil';
    if (userAnswers.step1 === 'daily' || userAnswers.step2 === 'water') {
      recId = 'taif-rose-water';
    } else if (userAnswers.step1 === 'formal' || userAnswers.step2 === 'perfume') {
      recId = 'sultan-perfume';
    } else if (userAnswers.step1 === 'gift') {
      recId = 'royal-gift-box';
    }

    const recProduct = productsData.find(p => p.id === recId) || productsData[0];

    resultBox.innerHTML = `
      <div style="display:flex;align-items:center;gap:1rem;justify-content:center;margin-bottom:1.5rem;">
        <span style="color:var(--gold-primary);font-size:1.5rem;">♦</span>
        <h4 style="font-size:1.6rem;color:var(--gold-light);font-family:var(--font-serif)">مقتناكم الملكي الموصى به</h4>
        <span style="color:var(--gold-primary);font-size:1.5rem;">♦</span>
      </div>
      <div style="display:grid;grid-template-columns:120px 1fr;gap:2rem;align-items:center;text-align:right;max-width:550px;margin:0 auto 2rem auto;">
        <img src="${recProduct.image}" alt="${recProduct.title}" style="width:120px;height:120px;object-fit:cover;border-radius:var(--radius-md);border:1px solid var(--gold-border);" />
        <div>
          <h5 style="font-size:1.25rem;color:var(--text-ivory);margin-bottom:0.4rem;">${recProduct.title}</h5>
          <p style="font-size:0.88rem;color:var(--text-muted);line-height:1.6;margin-bottom:0.75rem;">${recProduct.notes}</p>
          <div style="font-family:var(--font-accent);font-size:1.3rem;color:var(--gold-light);font-weight:700;">
            ${recProduct.price.toLocaleString('ar-SA')} <span style="font-size:0.85rem;color:var(--gold-primary)">ر.س</span>
          </div>
        </div>
      </div>
      <div style="display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;">
        <button class="btn btn-gold-primary btn-quiz-add">
          <i data-lucide="shopping-bag"></i>
          <span>إضافة إلى الحقيبة</span>
        </button>
        <button class="btn btn-gold-ghost btn-quiz-restart">
          <span>إعادة الاستشارة</span>
        </button>
      </div>
    `;

    resultBox.classList.add('active');
    if (window.lucide) window.lucide.createIcons();

    resultBox.querySelector('.btn-quiz-add').onclick = () => {
      addToCart(recProduct, 1);
    };

    resultBox.querySelector('.btn-quiz-restart').onclick = () => {
      resultBox.classList.remove('active');
      userAnswers = {};
      goToStep(1);
    };
  }

  // Olfactory Pyramid Interactive Switches
  const pyramidBtns = document.querySelectorAll('.pyramid-layer-btn');
  const pyramidDetailCard = document.querySelector('.pyramid-detail-card');

  const pyramidData = {
    top: {
      title: 'قمة الهرم: إشراقة الندى الفجرية',
      time: 'الثواني الأولى إلى 30 دقيقة',
      desc: 'نفحات نقية مستوحاة من قطاف الورد عند الفجر الأول قبل شروق شمس جبال الهدا، حيث تمتزج حبات الندى الباردة برائحة البتلات الخضراء الغضة.',
      chips: [
        { icon: '🌸', title: 'بتلات الورد الغضة', desc: 'نضارة فطرية منعشة' },
        { icon: '💧', title: 'قطرات ندى الفجر', desc: 'انتعاش مائي بلوري' },
        { icon: '🍃', title: 'أوراق الشجر الجبلية', desc: 'لمسة عشبية ندية' },
        { icon: '☀️', title: 'أثير الصباح النقي', desc: 'نفحة جبال الهدا الباردة' }
      ]
    },
    heart: {
      title: 'قلب الهرم: سيادة الورد الطائفي الخالص',
      time: 'ساعتين إلى 6 ساعات',
      desc: 'جوهر العطر النابض بأندر وأثمن أنواع الورد الجوري الطائفي (35 بتلة)، عبير مكثف غني يحمل توقيع الفخامة السعودية والتقطير النحاسي الأصيل.',
      chips: [
        { icon: '🌹', title: 'ورد الطائف العروس', desc: 'عبير ملكي طاغٍ' },
        { icon: '🍯', title: 'رحيق العسل الجبلي', desc: 'حلاوة دافئة ناعمة' },
        { icon: '✨', title: 'زهر البرتقال العطري', desc: 'توازن زهري متكامل' },
        { icon: '🏺', title: 'خلاصة التقطير الأول', desc: 'عمق أرستقراطي نادر' }
      ]
    },
    base: {
      title: 'قاعدة الهرم: ثبات الملوك والأصالة',
      time: 'فوق 24 إلى 48 ساعة',
      desc: 'قاعدة دافئة راسخة تجمع دهن الورد العتيق بنفحات العنبر الشمسي الملكي وخشب الصندل ودهن العود النقي لثبات يدوم طويلاً على الأقمشة.',
      chips: [
        { icon: '🪵', title: 'خشب الصندل العطري', desc: 'دفء شرقي مهيب' },
        { icon: '👑', title: 'عنبر ملكي معتق', desc: 'فوحان فخم ثابت' },
        { icon: '🪔', title: 'دهن عود كلمنتان نقي', desc: 'عمق تراثي مهيب' },
        { icon: '🌿', title: 'مسك الغزال الأبيض', desc: 'نقاء يدوم لأيام' }
      ]
    }
  };

  pyramidBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      pyramidBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const layer = btn.getAttribute('data-layer');
      const data = pyramidData[layer];
      if (!data || !pyramidDetailCard) return;

      pyramidDetailCard.querySelector('h3').textContent = data.title;
      pyramidDetailCard.querySelector('.pyramid-detail-desc').textContent = data.desc;

      const chipsGrid = pyramidDetailCard.querySelector('.ingredient-chips-grid');
      chipsGrid.innerHTML = data.chips.map(c => `
        <div class="ingredient-chip">
          <div class="chip-icon">${c.icon}</div>
          <div class="chip-info">
            <h5>${c.title}</h5>
            <p>${c.desc}</p>
          </div>
        </div>
      `).join('');
    });
  });
}
