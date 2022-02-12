const serviceNav = {
  clickableArea: document.querySelector('#service-nav-top'),
  linkContainer: document.querySelector('#service-nav-bottom'),
  links: document.querySelector('#service-links'),
  icon: document.querySelector('#service-menu-icon')
};

const supportNav = {
  clickableArea: document.querySelector('#support-nav-top'),
  linkContainer: document.querySelector('#support-nav-bottom'),
  links: document.querySelector('#support-links'),
  icon: document.querySelector('#support-menu-icon')
};

const aboutNav = {
  clickableArea: document.querySelector('#about-nav-top'),
  linkContainer: document.querySelector('#about-nav-bottom'),
  links: document.querySelector('#about-links'),
  icon: document.querySelector('#about-menu-icon')
};

bindEvents();

function bindEvents() {
  serviceNav.clickableArea.addEventListener('click', toggleClosed.bind(serviceNav));
  supportNav.clickableArea.addEventListener('click', toggleClosed.bind(supportNav));
  aboutNav.clickableArea.addEventListener('click', toggleClosed.bind(aboutNav));
}

function toggleClosed() {
  this.linkContainer.classList.toggle('list-nav__bottom--closed');
  this.links.classList.toggle('list-nav__list--hidden');
  this.icon.classList.toggle('list-nav__icon--reversed');
}
