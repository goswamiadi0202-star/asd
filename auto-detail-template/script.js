// ============================================
// AUTO DETAILING TEMPLATE — PREMIUM SCRIPTS
// ============================================

document.addEventListener('DOMContentLoaded', () => {

  // --- Mobile Menu ---
  const menuBtn = document.getElementById('menu-btn');
  const nav = document.getElementById('nav');
  const overlay = document.getElementById('nav-overlay');

  function toggleMenu() {
    menuBtn.classList.toggle('active');
    nav.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
  }

  menuBtn.addEventListener('click', toggleMenu);
  overlay.addEventListener('click', toggleMenu);

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (nav.classList.contains('active')) toggleMenu();
    });
  });

  // --- Header scroll state ---
  const header = document.getElementById('header');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    header.classList.toggle('scrolled', y > 60);
    lastScroll = y;
  }, { passive: true });

  // --- Parallax hero background ---
  const heroBg = document.querySelector('[data-parallax]');
  if (heroBg && window.matchMedia('(min-width: 768px)').matches) {
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      if (y < window.innerHeight) {
        heroBg.style.transform = 'translate3d(0,' + (y * 0.25) + 'px,0)';
      }
    }, { passive: true });
  }

  // --- Scroll Reveal (Intersection Observer) ---
  const revealEls = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -40px 0px'
  });

  revealEls.forEach(el => revealObserver.observe(el));

  // --- Count-up Animation ---
  const statNumbers = document.querySelectorAll('[data-count]');

  function animateCount(el) {
    const target = parseInt(el.getAttribute('data-count'), 10);
    const decimal = el.getAttribute('data-decimal');
    const duration = 1800;
    const start = performance.now();

    function tick(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease out quad
      const ease = 1 - (1 - progress) * (1 - progress);
      const current = Math.floor(ease * target);

      if (decimal !== null && decimal !== undefined) {
        el.textContent = (ease * target).toFixed(1);
      } else {
        el.textContent = current;
      }

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        if (decimal !== null && decimal !== undefined) {
          el.textContent = target + '.0';
        } else {
          el.textContent = target;
        }
      }
    }

    requestAnimationFrame(tick);
  }

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const nums = entry.target.querySelectorAll('[data-count]');
        nums.forEach(n => animateCount(n));
        statsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  const statsSection = document.querySelector('.stats');
  if (statsSection) statsObserver.observe(statsSection);

  // --- Reviews Carousel ---
  const track = document.getElementById('reviews-track');
  const dots = document.querySelectorAll('.reviews__dot');
  const prevBtn = document.getElementById('review-prev');
  const nextBtn = document.getElementById('review-next');
  let currentSlide = 0;
  let totalSlides = dots.length;
  let autoplayTimer;

  function goToSlide(index) {
    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;
    currentSlide = index;
    track.style.transform = 'translateX(-' + (currentSlide * 100) + '%)';
    dots.forEach((d, i) => d.classList.toggle('active', i === currentSlide));
  }

  function startAutoplay() {
    autoplayTimer = setInterval(() => goToSlide(currentSlide + 1), 5000);
  }

  function resetAutoplay() {
    clearInterval(autoplayTimer);
    startAutoplay();
  }

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => { goToSlide(currentSlide - 1); resetAutoplay(); });
    nextBtn.addEventListener('click', () => { goToSlide(currentSlide + 1); resetAutoplay(); });
  }

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      goToSlide(parseInt(dot.getAttribute('data-index'), 10));
      resetAutoplay();
    });
  });

  // Touch/swipe support for carousel
  if (track) {
    let touchStartX = 0;
    let touchEndX = 0;

    track.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    track.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) goToSlide(currentSlide + 1);
        else goToSlide(currentSlide - 1);
        resetAutoplay();
      }
    }, { passive: true });
  }

  startAutoplay();

  // --- Contact Form (demo) ---
  const form = document.getElementById('contact-form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const honeypot = form.querySelector('input[name="website"]');
    if (honeypot && honeypot.value) return;

    const btn = form.querySelector('button[type="submit"]');
    const btnSpan = btn.querySelector('span');
    const btnSvg = btn.querySelector('svg');
    if (btnSpan) btnSpan.textContent = 'Message Sent!';
    if (btnSvg) btnSvg.style.display = 'none';
    form.classList.add('submitted');

    setTimeout(() => {
      if (btnSpan) btnSpan.textContent = 'Book Your Detail';
      if (btnSvg) btnSvg.style.display = '';
      form.classList.remove('submitted');
      form.reset();
    }, 3000);
  });

  // --- Back to Top ---
  const backToTop = document.getElementById('back-to-top');
  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // --- Smooth scroll for anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

});