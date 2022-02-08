const campaignCarousel = {
  container: document.querySelector('.campaign-carousel'),
  leftBtn: document.querySelector('.campaign-carousel__scroll-btn--left'),
  rightBtn: document.querySelector('.campaign-carousel__scroll-btn--right'),
  firstCarouselItem: document.querySelector('.campaign-item:first-of-type'),
  lastCarouselItem: document.querySelector('.campaign-item:last-of-type'),
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
    this.leftBtn.classList.add('campaign-carousel__scroll-btn--visible');
    this.rightBtn.classList.add('campaign-carousel__scroll-btn--visible');
  },
  handleContainerMouseLeave: function() {
    this.leftBtn.classList.remove('campaign-carousel__scroll-btn--visible');
    this.rightBtn.classList.remove('campaign-carousel__scroll-btn--visible');
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

campaignCarousel.bindEvents();
