const container = document.querySelector('.carousel');
const scrollWidth = container.scrollWidth;

const leftBtn = document.querySelector('.carousel__scroll-btn--left');
leftBtn.addEventListener('click', scrollLeft);

const rightBtn = document.querySelector('.carousel__scroll-btn--right');
rightBtn.addEventListener('click', scrollRight);

function scrollRight() {
  const options = {
    top: 0,
    left: scrollWidth / 3,
    behavior: 'smooth'
  };

  container.scrollBy(options);
}

function scrollLeft() {
  const options = {
    top: 0,
    left: -(scrollWidth / 3),
    behavior: 'smooth'
  };

  container.scrollBy(options);
}