/* ==========================================================================
   Advanced Cinematic Intro Experience: دار القاضي
   ========================================================================== */

import gsap from 'gsap';

export function initCinematicIntro() {
  const introEl = document.getElementById('cinematic-intro');
  const crystalVeil = document.querySelector('.intro-crystal-veil');
  const sealWrapper = document.querySelector('.intro-seal-hero-wrapper');
  const specularSweep = document.querySelector('.intro-specular-sweep');
  const typography = document.querySelector('.intro-typography');
  const skipBtn = document.getElementById('intro-skip-btn');
  const progressBar = document.querySelector('.skip-progress-bar');
  const heroVideo = document.getElementById('hero-video');
  const particlesCanvas = document.getElementById('intro-particles-canvas');

  if (!introEl || !sealWrapper) return;

  // Ensure background hero video starts playing smoothly
  if (heroVideo) {
    heroVideo.play().catch(() => {});
  }

  // 1. Initialize Gold Stardust Particle Canvas
  let animFrameId = null;
  let particlesRunning = true;

  if (particlesCanvas) {
    const ctx = particlesCanvas.getContext('2d');
    let width = (particlesCanvas.width = window.innerWidth);
    let height = (particlesCanvas.height = window.innerHeight);

    const handleResize = () => {
      width = particlesCanvas.width = window.innerWidth;
      height = particlesCanvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const particleCount = window.innerWidth < 768 ? 24 : 40;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2.2 + 0.8,
      speedY: Math.random() * 0.45 + 0.2,
      speedX: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.6 + 0.2,
      pulseSpeed: Math.random() * 0.02 + 0.01,
      color: Math.random() > 0.4 ? '212, 175, 55' : '246, 232, 199'
    }));

    function renderParticles() {
      if (!particlesRunning) return;
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.y -= p.speedY;
        p.x += p.speedX;
        p.opacity += Math.sin(Date.now() * p.pulseSpeed) * 0.005;

        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        ctx.fillStyle = `rgba(${p.color}, ${Math.max(0.1, Math.min(0.85, p.opacity))})`;
        ctx.shadowColor = 'rgba(212, 175, 55, 0.4)';
        ctx.shadowBlur = 6;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animFrameId = requestAnimationFrame(renderParticles);
    }
    renderParticles();
  }

  // 2. Master GSAP Cinematic Sequence
  const INTRO_DURATION = 4.4; // seconds
  const tl = gsap.timeline({
    defaults: { ease: 'power3.out' },
    onComplete: finishIntro
  });

  // Initial States
  gsap.set(sealWrapper, { opacity: 0, scale: 0.88, y: 15 });
  gsap.set(typography, { opacity: 0, y: 25 });
  gsap.set(skipBtn, { opacity: 0, y: 10 });
  if (progressBar) {
    gsap.set(progressBar, { strokeDashoffset: 100 });
  }

  // Sequence Choreography:
  // Step A: Logo emerges with dignified authority (0.2s)
  tl.to(sealWrapper, {
    opacity: 1,
    scale: 1,
    y: 0,
    duration: 1.5,
    ease: 'power2.out'
  }, 0.3);

  // Step B: Specular Gold Light Sweep across the logo calligraphy (1.1s)
  if (specularSweep) {
    tl.to(specularSweep, {
      opacity: 1,
      duration: 0.1
    }, 1.1);
    tl.fromTo(
      specularSweep.querySelector('::after') || specularSweep,
      { css: { '--sweep-x': '-150%' } },
      { css: { '--sweep-x': '150%' }, duration: 1.6, ease: 'power1.inOut' },
      1.1
    );
  }

  // Step C: Royal Typography floats in (1.3s)
  tl.to(typography, {
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: 'power2.out'
  }, 1.3);

  // Step D: Show skip pill with synchronized circular progress
  tl.to(skipBtn, {
    opacity: 1,
    y: 0,
    duration: 0.8
  }, 0.8);

  if (progressBar) {
    tl.to(progressBar, {
      strokeDashoffset: 0,
      duration: INTRO_DURATION,
      ease: 'linear'
    }, 0.8);
  }

  // Step E: Pause to absorb the brand poetry (hold state)
  tl.to({}, { duration: 1.4 });

  // Step F: Grand Bloom - Dissolve crystal blur veil & fade out typography
  tl.to(typography, {
    opacity: 0,
    y: -15,
    duration: 0.7,
    ease: 'power2.in'
  });

  tl.to(skipBtn, {
    opacity: 0,
    duration: 0.4
  }, '<');

  tl.to(crystalVeil, {
    backdropFilter: 'blur(0px) brightness(1) saturate(1)',
    opacity: 0,
    duration: 1.3,
    ease: 'power3.inOut'
  }, '-=0.3');

  tl.to(introEl, {
    opacity: 0,
    duration: 0.8,
    ease: 'power2.inOut',
    onComplete: () => {
      introEl.classList.add('intro-complete');
    }
  }, '-=0.5');

  // Skip Button Click Event
  if (skipBtn) {
    skipBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      tl.progress(1);
      finishIntro();
    });
  }

  function finishIntro() {
    introEl.classList.add('intro-complete');
    particlesRunning = false;
    if (animFrameId) cancelAnimationFrame(animFrameId);
    document.body.style.overflow = 'auto';

    if (heroVideo) {
      heroVideo.play().catch(() => {});
    }
  }

  // Expose Replay Function Globally
  window.replayCinematicIntro = function () {
    introEl.classList.remove('intro-complete');
    introEl.style.opacity = '1';
    introEl.style.visibility = 'visible';
    introEl.style.pointerEvents = 'all';

    if (crystalVeil) {
      crystalVeil.style.opacity = '1';
      crystalVeil.style.backdropFilter = 'blur(26px) brightness(0.55) saturate(1.3)';
    }

    particlesRunning = true;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    tl.restart();
  };
}
