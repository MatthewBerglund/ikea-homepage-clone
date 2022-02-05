const container = document.querySelector('.carousel');
const leftBtn = document.querySelector('.carousel__scroll-btn--left');
const rightBtn = document.querySelector('.carousel__scroll-btn--right');
const firstCarouselItem = document.querySelector('.item:first-of-type');
const lastCarouselItem = document.querySelector('.item:last-of-type');

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
  leftBtn.classList.add('carousel__scroll-btn--visible');
  rightBtn.classList.add('carousel__scroll-btn--visible');
}

function handleContainerMouseLeave() {
  leftBtn.classList.remove('carousel__scroll-btn--visible');
  rightBtn.classList.remove('carousel__scroll-btn--visible');
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
