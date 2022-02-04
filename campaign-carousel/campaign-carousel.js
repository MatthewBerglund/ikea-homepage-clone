const container = document.querySelector('.carousel');
const leftBtn = document.querySelector('.carousel__scroll-btn--left');
const rightBtn = document.querySelector('.carousel__scroll-btn--right');
const firstCarouselItem = document.querySelector('.item:first-of-type');
const lastCarouselItem = document.querySelector('.item:last-of-type');

const scrollWidth = container.scrollWidth;
let currentPosition = 0;
bindEvents();

function bindEvents() {
  container.addEventListener('mouseenter', handleContainerMouseEnter);
  container.addEventListener('mouseleave', handleContainerMouseLeave);
  leftBtn.addEventListener('click', scrollLeft);
  rightBtn.addEventListener('click', scrollRight);

  const observer = new IntersectionObserver(handleIntersection, {
    root: container,
    threshold: 1.0
  });

  observer.observe(firstCarouselItem);
  observer.observe(lastCarouselItem);
}

function handleContainerMouseEnter() {
  leftBtn.classList.add('carousel__scroll-btn--visible');
  rightBtn.classList.add('carousel__scroll-btn--visible');
}

function handleContainerMouseLeave() {
  leftBtn.classList.remove('carousel__scroll-btn--visible');
  rightBtn.classList.remove('carousel__scroll-btn--visible');
}

function handleIntersection(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting && entry.target === firstCarouselItem) {
      leftBtn.style.display = 'none';
    } else if (entry.isIntersecting && entry.target === lastCarouselItem) {
      rightBtn.style.display = 'none';
    }
  });
}

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
}
