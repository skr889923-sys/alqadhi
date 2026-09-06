/* ==========================================================================
   Cinematic Logo Reveal & Masked Expansion: دار القاضي
   ========================================================================== */

import gsap from 'gsap';

export function initCinematicIntro() {
  const introEl = document.getElementById('cinematic-intro');
  const videoPortal = document.querySelector('.intro-video-portal');
  const logoSeal = document.querySelector('.intro-logo-seal');
  const goldAura = document.querySelector('.intro-gold-aura');
  const narrative = document.querySelector('.intro-narrative');
  const skipBtn = document.querySelector('.intro-skip-btn');
  const logoDock = document.querySelector('.brand-logo-dock');
  const heroVideo = document.getElementById('hero-video');
  const introVideo = document.getElementById('intro-portal-video');
  const heroElements = document.querySelectorAll('.hero-animate-in');

  if (!introEl || !videoPortal || !logoSeal) return;

  // Ensure videos are playing
  if (introVideo) {
    introVideo.play().catch(() => {});
  }
  if (heroVideo) {
    heroVideo.play().catch(() => {});
  }

  // Create Master GSAP Timeline
  const tl = gsap.timeline({
    defaults: { ease: 'power3.inOut' },
    onComplete: finishIntro
  });

  // 1. Initial State
  gsap.set(logoSeal, { opacity: 0, scale: 0.9 });
  gsap.set(videoPortal, { opacity: 0, scale: 0.85, borderRadius: '50%' });
  gsap.set(goldAura, { opacity: 0, scale: 0.7 });
  gsap.set(narrative, { opacity: 0, y: 15 });
  gsap.set(skipBtn, { opacity: 0 });
  gsap.set(heroElements, { opacity: 0, y: 25 });

  // 2. Step 1: Deep emerald stillness -> Warm Golden Glow & Aura emerges
  tl.to(goldAura, {
    opacity: 0.65,
    scale: 1.15,
    duration: 1.6,
    ease: 'power2.out'
  }, 0.3);

  // 3. Step 2: Hollow Logo Reveal with video playing through the hollow cutout
  tl.to(videoPortal, {
    opacity: 1,
    scale: 1,
    duration: 1.4,
    ease: 'expo.out'
  }, 0.8);

  tl.to(logoSeal, {
    opacity: 1,
    scale: 1,
    filter: 'drop-shadow(0 0 35px rgba(212, 175, 55, 0.75))',
    duration: 1.5,
    ease: 'expo.out'
  }, 0.8);

  tl.to(narrative, {
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: 'power2.out'
  }, 1.2);

  tl.to(skipBtn, {
    opacity: 1,
    duration: 0.8
  }, 1.4);

  // 4. Step 3: Video pauses inside logo to let user savor the dew & rose visuals
  tl.to({}, { duration: 1.2 });

  // 5. Step 4: The video portal dramatically blooms and expands to fill the entire hero section!
  tl.to(narrative, {
    opacity: 0,
    y: -15,
    duration: 0.8
  });

  tl.to(skipBtn, {
    opacity: 0,
    duration: 0.4
  }, '<');

  tl.to(videoPortal, {
    scale: 12,
    boxShadow: 'none',
    duration: 1.9,
    ease: 'power4.inOut',
    onStart: () => {
      if (heroVideo && introVideo) {
        try {
          heroVideo.currentTime = introVideo.currentTime;
          heroVideo.play().catch(() => {});
        } catch (e) {}
      }
    }
  }, '-=0.4');

  tl.to(goldAura, {
    opacity: 0,
    scale: 2,
    duration: 1.2
  }, '<');

  // 6. Step 5: Master logo floats and settles into header dock
  tl.to(logoSeal, {
    scale: 0.16,
    opacity: 0,
    duration: 1.4,
    ease: 'expo.inOut'
  }, '-=1.4');

  // 7. Step 6: Fade out intro overlay and stagger in hero content
  tl.to(introEl, {
    opacity: 0,
    duration: 0.8,
    onComplete: () => {
      introEl.classList.add('intro-complete');
    }
  }, '-=0.5');

  tl.to(heroElements, {
    opacity: 1,
    y: 0,
    stagger: 0.15,
    duration: 1.1,
    ease: 'power3.out'
  }, '-=0.3');

  // Skip button click handler
  if (skipBtn) {
    skipBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      tl.progress(1);
      finishIntro();
    });
  }

  function finishIntro() {
    introEl.classList.add('intro-complete');
    document.body.style.overflow = 'auto';
    gsap.to(heroElements, { opacity: 1, y: 0, duration: 0.4, stagger: 0.05, overwrite: true });
    if (heroVideo) {
      heroVideo.play().catch(() => {});
    }
  }

  // Expose replay function
  window.replayCinematicIntro = function() {
    introEl.classList.remove('intro-complete');
    introEl.style.opacity = '1';
    introEl.style.pointerEvents = 'all';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    tl.restart();
  };
}
