// script.js

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
    shape.style.width = Math.random() * 50 + 20 + 'px';
    shape.style.height = shape.style.width;
    shape.style.left = Math.random() * 100 + '%';
    shape.style.top = Math.random() * 100 + '%';
    shape.style.animationDelay = Math.random() * 5 + 's';
    container.appendChild(shape);
  }
}

createStars();
createFloatingElements();
