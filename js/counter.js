document.addEventListener('DOMContentLoaded', function () {
  const targets = [
    { element: document.getElementById('starsCount'), count: 5, suffix: '' },
    { element: document.getElementById('downloadsCount'), count: 35, suffix: '' },
    { element: document.getElementById('sponsorsCount'), count: 100, suffix: 'K' } // Updated to pure number
  ];

  // Function to animate count-up effect
  function animateCountUp(target, duration) {
    if (!target.element) return;

    let currentCount = 0;
    const increment = Math.ceil(target.count / (duration / 20));

    const interval = setInterval(() => {
      currentCount += increment;
      if (currentCount >= target.count) {
        clearInterval(interval);
        currentCount = target.count;
      }

      // Format the number if needed
      target.element.textContent = currentCount.toLocaleString() + target.suffix;
    }, 20);
  }

  // Intersection Observer to detect when counting section is in view
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          targets.forEach(target => {
            animateCountUp(target, 4000); // 2 seconds duration
          });
          observer.unobserve(entry.target); // Stop observing after animation
        }
      });
    },
    {
      threshold: 0.5 // Trigger when 50% of the section is visible
    }
  );

  // Observe the counting section
  const countingSection = document.getElementById('countingSection');
  if (countingSection) {
    observer.observe(countingSection);
  }
});

