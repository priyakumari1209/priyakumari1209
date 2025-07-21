<script>
  // Create floating stars
  function createStars() {
    const starsContainer = document.getElementById('stars');
    for (let i = 0; i < 100; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = Math.random() * 100 + '%';
      star.style.top = Math.random() * 100 + '%';
      star.style.animationDelay = Math.random() * 2 + 's';
      starsContainer.appendChild(star);
    }
  }

  // Create floating shapes
  function createFloatingElements() {
    const container = document.getElementById('floatingElements');
    for (let i = 0; i < 20; i++) {
      const shape = document.createElement('div');
      shape.className = 'floating-shape';
      const size = Math.random() * 100 + 50;
      shape.style.width = size + 'px';
      shape.style.height = size + 'px';
      shape.style.left = Math.random() * 100 + '%';
      shape.style.top = Math.random() * 100 + '%';
      shape.style.animationDelay = Math.random() * 6 + 's';
      shape.style.animationDuration = (Math.random() * 4 + 4) + 's';
      container.appendChild(shape);
    }
  }

  // Store each element's base transform once
  function storeBaseTransforms() {
    const cards = document.querySelectorAll('.profile-card, .stat-card, .tech-category');
    cards.forEach(card => {
      // Save base transform if any
      card.dataset.baseTransform = getComputedStyle(card).transform === 'none' ? '' : getComputedStyle(card).transform;
    });
  }

  // Apply parallax effect
  document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.profile-card, .stat-card, .tech-category');
    const x = (e.clientX / window.innerWidth) - 0.5;
    const y = (e.clientY / window.innerHeight) - 0.5;

    cards.forEach((card, index) => {
      const speed = (index % 3 + 1) * 5;
      const rotateX = y * speed;
      const rotateY = x * speed;

      const base = card.dataset.baseTransform || '';
      card.style.transform = `${base} rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
  });

  // Scroll reveal
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  function initScrollReveal() {
    document.querySelectorAll('.stat-card, .tech-category, .achievement').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'all 0.6s ease';
      observer.observe(el);
    });
  }

  // Init
  createStars();
  createFloatingElements();
  storeBaseTransforms();
  initScrollReveal();
</script>
