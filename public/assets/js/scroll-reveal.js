document.addEventListener("DOMContentLoaded", () => {
    // Check if user prefers reduced motion for accessibility
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
          observer.unobserve(entry.target); // Only animate once
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    });
  
    // Select sections, cards, and video boxes to animate
    const hiddenElements = document.querySelectorAll('.dtr-section, .dtr-feature-top, .dtr-video-box, .dtr-case');
    hiddenElements.forEach((el) => {
      el.classList.add('reveal-hidden');
      observer.observe(el);
    });
  });
