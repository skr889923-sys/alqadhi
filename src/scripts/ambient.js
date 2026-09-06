/* ==========================================================================
   Ambient Atmosphere: Floating Petals, Light Sheen & Botanical Audio
   ========================================================================== */

export function initAmbientEffects() {
  const canvas = document.getElementById('ambient-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  // Soft Floating Rose Petals & Golden Dew Particles
  const particles = [];
  const PARTICLE_COUNT = 24;

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 9 + 5,
      speedX: (Math.random() - 0.5) * 0.45,
      speedY: Math.random() * 0.65 + 0.35,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.02,
      opacity: Math.random() * 0.45 + 0.15,
      isGold: Math.random() > 0.75, // Some are gold dewdrops, others are pink rose petals
      petalAspect: Math.random() * 0.4 + 0.6
    });
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach(p => {
      p.x += p.speedX;
      p.y += p.speedY;
      p.rotation += p.rotationSpeed;

      // Wrap around edges
      if (p.y > height + 20) {
        p.y = -20;
        p.x = Math.random() * width;
      }
      if (p.x > width + 20) p.x = -20;
      if (p.x < -20) p.x = width + 20;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.globalAlpha = p.opacity;

      if (p.isGold) {
        // Glowing gold dew droplet
        const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, p.size * 0.6);
        grad.addColorStop(0, 'rgba(246, 232, 199, 0.9)');
        grad.addColorStop(0.5, 'rgba(212, 175, 55, 0.5)');
        grad.addColorStop(1, 'transparent');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(0, 0, p.size * 0.6, 0, Math.PI * 2);
        ctx.fill();
      } else {
        // Stylized soft Taif rose petal
        ctx.fillStyle = 'rgba(214, 125, 145, 0.4)';
        ctx.strokeStyle = 'rgba(242, 211, 219, 0.3)';
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.ellipse(0, 0, p.size * p.petalAspect, p.size, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
      }

      ctx.restore();
    });

    requestAnimationFrame(render);
  }

  render();

  // Subtle Mouse Light Follower
  window.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    document.documentElement.style.setProperty('--mouse-x', `${x}`);
    document.documentElement.style.setProperty('--mouse-y', `${y}`);
  });

  // Botanical Garden Audio Ambiance using Web Audio API (Soft mountain breeze + subtle harmonic chimes)
  initAmbianceAudio();
}

function initAmbianceAudio() {
  const soundToggleBtn = document.querySelector('.btn-sound-toggle');
  if (!soundToggleBtn) return;

  let audioCtx = null;
  let isPlaying = false;
  let noiseNode = null;
  let filterNode = null;
  let gainNode = null;

  soundToggleBtn.addEventListener('click', () => {
    if (!isPlaying) {
      startAmbiance();
      soundToggleBtn.classList.add('playing');
      soundToggleBtn.setAttribute('title', 'كتم الصوت');
      soundToggleBtn.innerHTML = `<i data-lucide="volume-2" style="width:20px;height:20px;"></i>`;
    } else {
      stopAmbiance();
      soundToggleBtn.classList.remove('playing');
      soundToggleBtn.setAttribute('title', 'تشغيل نسيم بساتين الطائف');
      soundToggleBtn.innerHTML = `<i data-lucide="volume-x" style="width:20px;height:20px;"></i>`;
    }
    if (window.lucide) window.lucide.createIcons();
  });

  function startAmbiance() {
    try {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      
      // Generate soothing mountain breeze pink noise
      const bufferSize = audioCtx.sampleRate * 3;
      const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
      const data = buffer.getChannelData(0);
      let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
      
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        data[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.04;
        b6 = white * 0.115926;
      }

      noiseNode = audioCtx.createBufferSource();
      noiseNode.buffer = buffer;
      noiseNode.loop = true;

      filterNode = audioCtx.createBiquadFilter();
      filterNode.type = 'lowpass';
      filterNode.frequency.setValueAtTime(380, audioCtx.currentTime);

      gainNode = audioCtx.createGain();
      gainNode.gain.setValueAtTime(0.01, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.3, audioCtx.currentTime + 3);

      noiseNode.connect(filterNode);
      filterNode.connect(gainNode);
      gainNode.connect(audioCtx.destination);

      noiseNode.start();
      isPlaying = true;
    } catch (err) {
      console.warn('Web Audio error:', err);
    }
  }

  function stopAmbiance() {
    if (gainNode && audioCtx) {
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 1);
      setTimeout(() => {
        if (noiseNode) {
          try { noiseNode.stop(); } catch(e){}
        }
        if (audioCtx) {
          audioCtx.close();
        }
        isPlaying = false;
      }, 1000);
    } else {
      isPlaying = false;
    }
  }
}
