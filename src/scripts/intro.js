/* ==========================================================================
   Advanced Unified Intro & Hero Experience: القاضي
   The Logo is ONE AND THE SAME: Permanent, unmoving, never disappearing.
   ========================================================================== */

import gsap from 'gsap';

export function initCinematicIntro() {
  const crystalVeil = document.getElementById('intro-crystal-veil');
  const particlesCanvas = document.getElementById('intro-particles-canvas');
  const unifiedSeal = document.getElementById('unified-hero-seal');
  const specularSweep = document.getElementById('intro-specular-sweep');
  const introTypography = document.getElementById('intro-typography');
  const skipBtn = document.getElementById('intro-skip-btn');
  const progressBar = document.querySelector('.skip-progress-bar');
  const scrollIndicator = document.getElementById('hero-scroll-indicator');
  const royalHeader = document.getElementById('royal-header');
  const heroVideo = document.getElementById('hero-video');

  if (!unifiedSeal) return;

  // 1. Ensure background hero video starts playing smoothly
  if (heroVideo) {
    heroVideo.play().catch(() => {});
  }

  // 2. Initialize Stardust Particles Canvas
  let animFrameId = null;
  let particlesRunning = true;

  if (particlesCanvas) {
    const ctx = particlesCanvas.getContext('2d');
    let width = (particlesCanvas.width = window.innerWidth);
    let height = (particlesCanvas.height = window.innerHeight);

    const handleResize = () => {
      if (!particlesCanvas) return;
      width = particlesCanvas.width = window.innerWidth;
      height = particlesCanvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const particleCount = window.innerWidth < 768 ? 24 : 45;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2.4 + 0.8,
      speedY: Math.random() * 0.4 + 0.15,
      speedX: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.7 + 0.2,
      pulseSpeed: Math.random() * 0.02 + 0.01,
      color: Math.random() > 0.35 ? '212, 175, 55' : '250, 238, 205'
    }));

    function renderParticles() {
      if (!particlesRunning) return;
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.y -= p.speedY;
        p.x += p.speedX;
        p.opacity += Math.sin(Date.now() * p.pulseSpeed) * 0.006;

        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        ctx.fillStyle = `rgba(${p.color}, ${Math.max(0.12, Math.min(0.9, p.opacity))})`;
        ctx.shadowColor = 'rgba(212, 175, 55, 0.5)';
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animFrameId = requestAnimationFrame(renderParticles);
    }
    renderParticles();
  }

  // 3. Master GSAP Cinematic Sequence
  // CRITICAL REQUIREMENT: THE LOGO NEVER DISAPPEARS, BLINKS, OR SHIFTS.
  // It is 100% visible from line 1 of page load and permanently centered.
  const INTRO_DURATION = 4.2; // seconds
  let isIntroFinished = false;

  const tl = gsap.timeline({
    defaults: { ease: 'power3.out' },
    onComplete: finishIntro
  });

  // Initial States:
  // LOGO: Stays 100% visible, fully solid, zero coordinate changes
  if (introTypography) gsap.set(introTypography, { opacity: 0, y: 15 });
  if (skipBtn) gsap.set(skipBtn, { opacity: 0, y: 10 });
  if (progressBar) gsap.set(progressBar, { strokeDashoffset: 100 });
  if (scrollIndicator) gsap.set(scrollIndicator, { opacity: 0 });

  // Sequence Choreography:
  // Step A: Specular Gold Light Sweep across the logo calligraphy (0.3s)
  if (specularSweep) {
    tl.fromTo(
      specularSweep.querySelector('::after') || specularSweep,
      { css: { '--sweep-x': '-150%' } },
      { css: { '--sweep-x': '150%' }, duration: 1.8, ease: 'power1.inOut' },
      0.3
    );
  }

  // Step B: Royal Typography floats in gracefully below the logo (0.6s)
  if (introTypography) {
    tl.to(
      introTypography,
      {
        opacity: 1,
        y: 0,
        duration: 1.3,
        ease: 'power2.out'
      },
      0.6
    );
  }

  // Step C: Show skip pill with synchronized circular progress (0.8s)
  if (skipBtn) {
    tl.to(
      skipBtn,
      {
        opacity: 1,
        y: 0,
        duration: 0.8
      },
      0.8
    );
  }

  if (progressBar) {
    tl.to(
      progressBar,
      {
        strokeDashoffset: 0,
        duration: INTRO_DURATION,
        ease: 'linear'
      },
      0.8
    );
  }

  // Step D: Golden pause to absorb the prestige and calligraphy (hold state)
  tl.to({}, { duration: 1.5 });

  // Step E: Grand Unveiling - The velvet/crystal blur veil dissolves, revealing the sharp video
  // The typography dissolves upwards gracefully
  if (introTypography) {
    tl.to(introTypography, {
      opacity: 0,
      y: -15,
      duration: 0.8,
      ease: 'power2.inOut'
    });
  }

  if (skipBtn) {
    tl.to(
      skipBtn,
      {
        opacity: 0,
        duration: 0.4
      },
      '<'
    );
  }

  if (crystalVeil) {
    tl.to(
      crystalVeil,
      {
        backdropFilter: 'blur(0px) brightness(1) saturate(1)',
        opacity: 0,
        duration: 1.4,
        ease: 'power3.inOut'
      },
      '-=0.4'
    );
  }

  if (particlesCanvas) {
    tl.to(
      particlesCanvas,
      {
        opacity: 0,
        duration: 0.9
      },
      '<'
    );
  }

  // Header & Scroll prompt fade into view smoothly
  tl.add(() => {
    if (royalHeader) {
      royalHeader.classList.add('header-visible');
    }
    if (scrollIndicator) {
      scrollIndicator.classList.add('visible');
    }
    unifiedSeal.classList.add('floating');
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
    if (isIntroFinished) return;
    isIntroFinished = true;

    if (introTypography) {
      introTypography.style.display = 'none';
    }
    if (skipBtn) {
      skipBtn.style.display = 'none';
    }
    if (crystalVeil) {
      crystalVeil.style.display = 'none';
    }
    if (particlesCanvas) {
      particlesCanvas.style.display = 'none';
    }
    particlesRunning = false;
    if (animFrameId) cancelAnimationFrame(animFrameId);

    // The single logo stays floating as the permanent hero centerpiece
    unifiedSeal.classList.add('floating');
    if (royalHeader) {
      royalHeader.classList.add('header-visible');
    }
    if (scrollIndicator) {
      scrollIndicator.classList.add('visible');
    }

    if (heroVideo) {
      heroVideo.play().catch(() => {});
    }
  }

  // Expose Replay Function Globally (e.g. from Header sparkles button)
  window.replayCinematicIntro = function () {
    isIntroFinished = false;
    unifiedSeal.classList.remove('floating');
    if (royalHeader) royalHeader.classList.remove('header-visible');
    if (scrollIndicator) scrollIndicator.classList.remove('visible');

    if (crystalVeil) {
      crystalVeil.style.display = 'block';
      crystalVeil.style.opacity = '1';
      crystalVeil.style.backdropFilter = 'blur(28px) brightness(0.55) saturate(1.3)';
    }
    if (particlesCanvas) {
      particlesCanvas.style.display = 'block';
      particlesCanvas.style.opacity = '0.85';
    }
    if (introTypography) {
      introTypography.style.display = 'flex';
      introTypography.style.opacity = '0';
      gsap.set(introTypography, { y: 15 });
    }
    if (skipBtn) {
      skipBtn.style.display = 'flex';
      skipBtn.style.opacity = '0';
    }
    if (progressBar) {
      gsap.set(progressBar, { strokeDashoffset: 100 });
    }

    particlesRunning = true;
    if (particlesCanvas) {
      const ctx = particlesCanvas.getContext('2d');
      ctx.clearRect(0, 0, particlesCanvas.width, particlesCanvas.height);
      renderParticles();
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
    tl.restart();
  };
}
