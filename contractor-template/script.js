// ========== MOBILE NAV ==========
const menuBtn = document.getElementById('menuBtn');
const mobileNav = document.getElementById('mobileNav');
const mobileOverlay = document.getElementById('mobileOverlay');
const mobileClose = document.getElementById('mobileClose');

function openNav() {
  mobileNav.classList.add('active');
  mobileOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeNav() {
  mobileNav.classList.remove('active');
  mobileOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

menuBtn.addEventListener('click', openNav);
mobileClose.addEventListener('click', closeNav);
mobileOverlay.addEventListener('click', closeNav);

mobileNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeNav);
});

// ========== HEADER SCROLL ==========
const header = document.getElementById('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  if (scrollY > 80) {
    header.classList.add('header--scrolled');
  } else {
    header.classList.remove('header--scrolled');
  }
  lastScroll = scrollY;
}, { passive: true });

// ========== PARALLAX HERO ==========
const heroBg = document.getElementById('heroBg');

if (heroBg) {
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        if (scrollY < window.innerHeight) {
          heroBg.style.transform = `translateY(${scrollY * 0.3}px)`;
        }
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

// ========== SCROLL INDICATOR ==========
const heroScroll = document.getElementById('heroScroll');
if (heroScroll) {
  heroScroll.addEventListener('click', () => {
    const services = document.getElementById('services');
    if (services) {
      services.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

// ========== SCROLL REVEAL (Intersection Observer) ==========
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
});

document.querySelectorAll('.reveal').forEach(el => {
  revealObserver.observe(el);
});

// ========== STAGGERED REVEAL ==========
const staggerObserver = new IntersectionObserver((entries) => {
  const visible = [];
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      visible.push(entry.target);
      staggerObserver.unobserve(entry.target);
    }
  });

  visible.forEach((el, i) => {
    el.style.transitionDelay = `${i * 80}ms`;
    el.classList.add('visible');
    // Clean up delay after animation
    setTimeout(() => {
      el.style.transitionDelay = '';
    }, 600 + i * 80);
  });
}, {
  threshold: 0.05,
  rootMargin: '0px 0px -30px 0px'
});

document.querySelectorAll('.reveal-stagger').forEach(el => {
  staggerObserver.observe(el);
});

// ========== COUNT-UP ANIMATION ==========
const countObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const numbers = entry.target.querySelectorAll('[data-target]');
      numbers.forEach(num => {
        const target = parseInt(num.getAttribute('data-target'));
        const duration = 1800;
        const start = performance.now();

        function updateCount(now) {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          // Ease out cubic
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = Math.round(eased * target);
          num.textContent = current;

          if (progress < 1) {
            requestAnimationFrame(updateCount);
          }
        }

        requestAnimationFrame(updateCount);
      });
      countObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.3
});

const statsSection = document.getElementById('stats');
if (statsSection) {
  countObserver.observe(statsSection);
}

// ========== REVIEWS CAROUSEL ==========
const reviewsTrack = document.getElementById('reviewsTrack');
const reviewsDots = document.getElementById('reviewsDots');
let currentReview = 0;
let reviewAutoplay;

function goToReview(index) {
  const cards = reviewsTrack.children;
  if (index < 0) index = cards.length - 1;
  if (index >= cards.length) index = 0;
  currentReview = index;

  reviewsTrack.style.transform = `translateX(-${index * 100}%)`;

  reviewsDots.querySelectorAll('.reviews__dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

function startAutoplay() {
  reviewAutoplay = setInterval(() => {
    goToReview(currentReview + 1);
  }, 5000);
}

function stopAutoplay() {
  clearInterval(reviewAutoplay);
}

if (reviewsDots) {
  reviewsDots.querySelectorAll('.reviews__dot').forEach(dot => {
    dot.addEventListener('click', () => {
      stopAutoplay();
      goToReview(parseInt(dot.getAttribute('data-index')));
      startAutoplay();
    });
  });
}

// Touch/swipe support for carousel
if (reviewsTrack) {
  let touchStartX = 0;
  let touchEndX = 0;

  reviewsTrack.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    stopAutoplay();
  }, { passive: true });

  reviewsTrack.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        goToReview(currentReview + 1);
      } else {
        goToReview(currentReview - 1);
      }
    }
    startAutoplay();
  }, { passive: true });

  startAutoplay();
}

// ========== CONTACT FORM (Demo) ==========
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Honeypot check
    const hp = document.getElementById('website');
    if (hp && hp.value) return;

    const btn = contactForm.querySelector('button[type="submit"]');
    const originalHTML = btn.innerHTML;
    btn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Message Sent!';
    btn.style.background = '#16a34a';
    btn.style.borderColor = '#16a34a';
    btn.disabled = true;

    setTimeout(() => {
      btn.innerHTML = originalHTML;
      btn.style.background = '';
      btn.style.borderColor = '';
      btn.disabled = false;
      contactForm.reset();
    }, 3000);
  });
}

// ========== SMOOTH SCROLL ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ========== BACK TO TOP ==========
const backToTop = document.getElementById('backToTop');
if (backToTop) {
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
