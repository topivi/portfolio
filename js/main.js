/**
 * Topi Virkki — Portfolio Main Script
 * Handles theme switching, mobile navigation, active section tracking,
 * email copy, and retro easter egg modal.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Dynamic Copyright Year
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // 2. Theme Switching Logic (Dark / Light)
  const themeToggle = document.getElementById('theme-toggle');
  const htmlElement = document.documentElement;

  // Retrieve saved preference or check system preference
  const savedTheme = localStorage.getItem('portfolio-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
  htmlElement.setAttribute('data-theme', initialTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = htmlElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      htmlElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('portfolio-theme', newTheme);
    });
  }

  // Listen for system theme changes if user hasn't set explicit preference
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('portfolio-theme')) {
      htmlElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
    }
  });

  // 3. Mobile Navigation Menu
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close mobile menu on navigation click
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 4. Active Navigation Link Highlighting via IntersectionObserver
  const sections = document.querySelectorAll('section[id]');
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));

  // 5. Copy Email to Clipboard with Toast
  const copyEmailBtn = document.getElementById('copy-email-btn');
  const toast = document.getElementById('toast');
  const emailAddress = 'topi.virkki@gmail.com';

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(emailAddress);
        showToast(`Copied ${emailAddress} to clipboard!`);
        const badge = document.getElementById('copy-badge');
        if (badge) {
          const original = badge.textContent;
          badge.textContent = '✓ Copied!';
          setTimeout(() => { badge.textContent = original; }, 2000);
        }
      } catch (err) {
        // Fallback: mailto
        window.location.href = `mailto:${emailAddress}`;
      }
    });

    copyEmailBtn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        copyEmailBtn.click();
      }
    });
  }

  // 6. Retro Terminal Easter Egg Modal
  const retroBtn = document.getElementById('retro-btn');
  const heroRetroTrigger = document.getElementById('hero-retro-trigger');
  const footerTerminalBtn = document.getElementById('footer-terminal-btn');
  const retroModal = document.getElementById('retro-modal');
  const retroClose = document.getElementById('retro-close');

  function openRetroModal() {
    if (retroModal) {
      retroModal.classList.add('active');
      retroModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeRetroModal() {
    if (retroModal) {
      retroModal.classList.remove('active');
      retroModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }

  if (retroBtn) retroBtn.addEventListener('click', openRetroModal);
  if (heroRetroTrigger) heroRetroTrigger.addEventListener('click', openRetroModal);
  if (footerTerminalBtn) footerTerminalBtn.addEventListener('click', openRetroModal);
  if (retroClose) retroClose.addEventListener('click', closeRetroModal);

  if (retroModal) {
    retroModal.addEventListener('click', (e) => {
      if (e.target === retroModal) closeRetroModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && retroModal && retroModal.classList.contains('active')) {
      closeRetroModal();
    }
  });
});
