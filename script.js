// script.js

// Fade in elements on scroll
document.addEventListener('DOMContentLoaded', () => {
    const faders = document.querySelectorAll('.fade-in');
  
    const appearOptions = {
      threshold: 0.3,
      rootMargin: "0px 0px -50px 0px"
    };
  
    const appearOnScroll = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      });
    }, appearOptions);
  
    faders.forEach(fader => {
      appearOnScroll.observe(fader);
    });
  });
  
  // Email quote form handler
  const form = document.getElementById('quoteForm');
  const message = document.getElementById('formMessage');
  
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = form.email.value.trim();
  
      if (email) {
        message.style.color = '#a7f3d0'; // soft green
        message.textContent = `Thanks! We'll send a quote to ${email} soon.`;
        form.reset();
      } else {
        message.style.color = '#f87171'; // pinkish red
        message.textContent = 'Please enter a valid email.';
      }
    });
  }
  
  // Optional: Smooth scroll for nav links
  document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  