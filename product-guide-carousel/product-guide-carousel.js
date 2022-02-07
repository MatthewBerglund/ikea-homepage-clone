const guideCarousel = {
  container: document.querySelector('.product-guide-carousel'),
  leftBtn: document.querySelector('.product-guide-carousel__scroll-btn--left'),
  rightBtn: document.querySelector('.product-guide-carousel__scroll-btn--right'),
  firstCarouselItem: document.querySelector('.product-guide-item:first-of-type'),
  lastCarouselItem: document.querySelector('.product-guide-item:last-of-type'),
  bindEvents: function() {
    this.container.addEventListener('mouseenter', this.handleContainerMouseEnter.bind(this));
    this.container.addEventListener('mouseleave', this.handleContainerMouseLeave.bind(this));
    this.leftBtn.addEventListener('click', this.scrollLeft.bind(this));
    this.rightBtn.addEventListener('click', this.scrollRight.bind(this));

    const observer = new IntersectionObserver(this.handleIntersection.bind(this), {
      root: this.container,
      threshold: 1.0
    });

    observer.observe(this.firstCarouselItem);
    observer.observe(this.lastCarouselItem);
  },
  handleContainerMouseEnter: function() {
    this.leftBtn.classList.add('product-guide-carousel__scroll-btn--visible');
    this.rightBtn.classList.add('product-guide-carousel__scroll-btn--visible');
  },
  handleContainerMouseLeave: function() {
    this.leftBtn.classList.remove('product-guide-carousel__scroll-btn--visible');
    this.rightBtn.classList.remove('product-guide-carousel__scroll-btn--visible');
  },
  handleIntersection: function (entries) {
    entries.forEach(entry => {
      if (entry.target === this.firstCarouselItem) {
        if (entry.isIntersecting) {
          this.leftBtn.style.display = 'none';
        } else {
          this.leftBtn.style.display = 'flex';
        }
      }

      if (entry.target === this.lastCarouselItem) {
        if (entry.isIntersecting) {
          this.rightBtn.style.display = 'none';
        } else {
          this.rightBtn.style.display = 'flex';
        }
      }
    });
  },
  scrollRight: function() {
    const options = {
      top: 0,
      left: this.container.scrollWidth / 3,
      behavior: 'smooth'
    };

    this.container.scrollBy(options);
  },
  scrollLeft: function() {
    const options = {
      top: 0,
      left: -(this.container.scrollWidth / 3),
      behavior: 'smooth'
    };

    this.container.scrollBy(options);
  }
};

const something = 'something';

guideCarousel.bindEvents();

// const container = document.querySelector('.product-guide-carousel');
// const leftBtn = document.querySelector('.product-guide-carousel__scroll-btn--left');
// const rightBtn = document.querySelector('.product-guide-carousel__scroll-btn--right');
// const firstCarouselItem = document.querySelector('.product-guide-item:first-of-type');
// const lastCarouselItem = document.querySelector('.product-guide-item-item:last-of-type');

// const scrollWidth = container.scrollWidth;

// function bindEvents() {
//   container.addEventListener('mouseenter', handleContainerMouseEnter);
//   container.addEventListener('mouseleave', handleContainerMouseLeave);
//   leftBtn.addEventListener('click', scrollLeft);
//   rightBtn.addEventListener('click', scrollRight);

//   const observer = new IntersectionObserver(handleIntersection, {
//     root: container,
//     threshold: 1.0
//   });

//   observer.observe(firstCarouselItem);
//   observer.observe(lastCarouselItem);
// }

// function handleContainerMouseEnter() {
//   leftBtn.classList.add('product-guide-carousel__scroll-btn--visible');
//   rightBtn.classList.add('product-guide-carousel__scroll-btn--visible');
// }

// function handleContainerMouseLeave() {
//   leftBtn.classList.remove('product-guide-carousel__scroll-btn--visible');
//   rightBtn.classList.remove('product-guide-carousel__scroll-btn--visible');
// }

// function handleIntersection(entries) {
//   entries.forEach(entry => {
//     if (entry.target === firstCarouselItem) {
//       if (entry.isIntersecting) {
//         leftBtn.style.display = 'none';
//       } else {
//         leftBtn.style.display = 'flex';
//       }
//     }

//     if (entry.target === lastCarouselItem) {
//       if (entry.isIntersecting) {
//         rightBtn.style.display = 'none';
//       } else {
//         rightBtn.style.display = 'flex';
//       }
//     }
//   });
// }

// function scrollRight() {
//   const options = {
//     top: 0,
//     left: scrollWidth / 3,
//     behavior: 'smooth'
//   };

//   container.scrollBy(options);
// }

// function scrollLeft() {
//   const options = {
//     top: 0,
//     left: -(scrollWidth / 3),
//     behavior: 'smooth'
//   };

//   container.scrollBy(options);
// }
