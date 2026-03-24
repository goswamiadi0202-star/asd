// ===========================
// Mobile Menu
// ===========================
const mobileToggle = document.getElementById('mobile-toggle');
const nav = document.getElementById('nav');
const navOverlay = document.getElementById('nav-overlay');

function openMenu() {
  mobileToggle.classList.add('active');
  nav.classList.add('open');
  navOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  mobileToggle.classList.remove('active');
  nav.classList.remove('open');
  navOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

mobileToggle.addEventListener('click', () => {
  nav.classList.contains('open') ? closeMenu() : openMenu();
});

navOverlay.addEventListener('click', closeMenu);

nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeMenu);
});

// ===========================
// Sticky Header
// ===========================
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// ===========================
// Parallax Hero
// ===========================
const heroBg = document.getElementById('hero-bg');
let ticking = false;

window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      const scrolled = window.scrollY;
      if (scrolled < window.innerHeight) {
        heroBg.style.transform = `translateY(${scrolled * 0.3}px)`;
      }
      ticking = false;
    });
    ticking = true;
  }
}, { passive: true });

// ===========================
// Scroll Animations (IntersectionObserver)
// ===========================
const animItems = document.querySelectorAll('.anim-item');

if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  let revealQueue = [];
  let revealTimer = null;

  function processQueue() {
    revealQueue.forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), i * 80);
    });
    revealQueue = [];
  }

  const animObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        revealQueue.push(entry.target);
        animObserver.unobserve(entry.target);
      }
    });
    // Batch process all entries that came in at once
    clearTimeout(revealTimer);
    revealTimer = setTimeout(processQueue, 30);
  }, { threshold: 0.05, rootMargin: '0px 0px -20px 0px' });

  animItems.forEach(el => animObserver.observe(el));

  // Immediately reveal hero items (above the fold)
  document.querySelectorAll('.hero .anim-item').forEach((el, i) => {
    setTimeout(() => el.classList.add('visible'), 150 + i * 120);
  });
} else {
  animItems.forEach(el => el.classList.add('visible'));
}

// ===========================
// Count-Up Animation
// ===========================
const statNumbers = document.querySelectorAll('.stat-number[data-target]');

function animateCount(el) {
  const target = parseInt(el.getAttribute('data-target'), 10);
  const duration = 1800;
  const start = performance.now();

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // Ease out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target);
    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }
  requestAnimationFrame(update);
}

if ('IntersectionObserver' in window) {
  const countObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        countObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  statNumbers.forEach(el => countObserver.observe(el));
} else {
  statNumbers.forEach(el => {
    el.textContent = el.getAttribute('data-target');
  });
}

// ===========================
// Reviews Carousel (Mobile)
// ===========================
const track = document.getElementById('reviews-track');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;
let autoSlideTimer;

function goToSlide(index) {
  currentSlide = index;
  if (track) {
    track.style.transform = `translateX(-${index * 100}%)`;
  }
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

function startAutoSlide() {
  // Only auto-slide on mobile (single column view)
  if (window.innerWidth >= 768) return;
  autoSlideTimer = setInterval(() => {
    const next = (currentSlide + 1) % 3;
    goToSlide(next);
  }, 5000);
}

function stopAutoSlide() {
  clearInterval(autoSlideTimer);
}

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    stopAutoSlide();
    goToSlide(parseInt(dot.getAttribute('data-index'), 10));
    startAutoSlide();
  });
});

// Touch swipe for carousel
let touchStartX = 0;
let touchEndX = 0;

if (track) {
  track.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    stopAutoSlide();
  }, { passive: true });

  track.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) {
      if (diff > 0 && currentSlide < 2) {
        goToSlide(currentSlide + 1);
      } else if (diff < 0 && currentSlide > 0) {
        goToSlide(currentSlide - 1);
      }
    }
    startAutoSlide();
  }, { passive: true });
}

startAutoSlide();

// Reset carousel on resize
window.addEventListener('resize', () => {
  stopAutoSlide();
  if (window.innerWidth >= 768) {
    track.style.transform = '';
  } else {
    goToSlide(0);
    startAutoSlide();
  }
});

// ===========================
// Back to Top
// ===========================
const backToTop = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  backToTop.classList.toggle('visible', window.scrollY > 600);
}, { passive: true });

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===========================
// Contact Form Demo
// ===========================
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Check honeypot
  const honeypot = document.getElementById('website');
  if (honeypot && honeypot.value) return;

  contactForm.innerHTML = `
    <div class="form-success">
      <div class="success-check">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
      </div>
      <h3>Request Received!</h3>
      <p>We'll get back to you within the hour.<br>For immediate assistance, call <a href="tel:6020000000">(602) 000-0000</a>.</p>
    </div>
  `;
});

// ===========================
// Smooth Scroll (anchor links)
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
