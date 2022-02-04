const container = document.querySelector('.carousel');
const scrollWidth = container.scrollWidth;

const leftBtn = document.querySelector('.carousel__scroll-btn--left');
leftBtn.addEventListener('click', scrollLeft);

const rightBtn = document.querySelector('.carousel__scroll-btn--right');
rightBtn.addEventListener('click', scrollRight);

let currentPosition = 0;

function scrollRight() {
  const options = {
    top: 0,
    left: scrollWidth / 3,
    behavior: 'smooth'
  };

  if (currentPosition === 0) {
    leftBtn.style.display = 'flex';
  }

  container.scrollBy(options);
  currentPosition += scrollWidth / 3;

  if (currentPosition === (scrollWidth / 3) * 2) {
    rightBtn.style.display = 'none';
  }
}

function scrollLeft() {
  const options = {
    top: 0,
    left: -(scrollWidth / 3),
    behavior: 'smooth'
  };

  if (currentPosition < (scrollWidth / 3) * 2) {
    rightBtn.style.display = 'flex';
  }

  container.scrollBy(options);
  currentPosition -= scrollWidth / 3;

  if (currentPosition === 0) {
    leftBtn.style.display = 'none';
  }
}