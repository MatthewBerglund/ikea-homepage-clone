const container = document.querySelector('.product-guide-carousel');
const leftBtn = document.querySelector('.product-guide-carousel__scroll-btn--left');
const rightBtn = document.querySelector('.product-guide-carousel__scroll-btn--right');
const firstCarouselItem = document.querySelector('.product-guide-item:first-of-type');
const lastCarouselItem = document.querySelector('.product-guide-item-item:last-of-type');

const scrollWidth = container.scrollWidth;
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
  leftBtn.classList.add('product-guide-carousel__scroll-btn--visible');
  rightBtn.classList.add('product-guide-carousel__scroll-btn--visible');
}

function handleContainerMouseLeave() {
  leftBtn.classList.remove('product-guide-carousel__scroll-btn--visible');
  rightBtn.classList.remove('product-guide-carousel__scroll-btn--visible');
}

function handleIntersection(entries) {
  entries.forEach(entry => {
    if (entry.target === firstCarouselItem) {
      if (entry.isIntersecting) {
        leftBtn.style.display = 'none';
      } else {
        leftBtn.style.display = 'flex';
      }
    }

    if (entry.target === lastCarouselItem) {
      if (entry.isIntersecting) {
        rightBtn.style.display = 'none';
      } else {
        rightBtn.style.display = 'flex';
      }
    }
  });
}

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
