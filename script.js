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
    const size = Math.random() * 40 + 20;
    shape.style.width = `${size}px`;
    shape.style.height = `${size}px`;
    shape.style.left = Math.random() * 100 + '%';
    shape.style.top = Math.random() * 100 + '%';
    shape.style.animationDuration = 10 + Math.random() * 10 + 's';
    shape.style.animationDelay = Math.random() * 5 + 's';
    container.appendChild(shape);
  }
}

createStars();
createFloatingElements();
