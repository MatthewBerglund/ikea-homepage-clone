const serviceNavBtn = document.querySelector('#service-nav-top');
const serviceLinkContainer = document.querySelector('#service-nav-bottom');
const serviceLinks = document.querySelector('#service-links');
const serviceMenuIcon = document.querySelector('#service-menu-icon');

serviceNavBtn.addEventListener('click', () => {
  serviceLinkContainer.classList.toggle('list-nav__bottom--closed');
  serviceLinks.classList.toggle('list-nav__list--hidden');
  serviceMenuIcon.classList.toggle('list-nav__icon--reversed');
});

const supportNavBtn = document.querySelector('#support-nav-top');
const supportLinkContainer = document.querySelector('#support-nav-bottom');
const supportLinks = document.querySelector('#support-links');
const supportMenuIcon = document.querySelector('#support-menu-icon');

supportNavBtn.addEventListener('click', () => {
  supportLinkContainer.classList.toggle('list-nav__bottom--closed');
  supportLinks.classList.toggle('list-nav__list--hidden');
  supportMenuIcon.classList.toggle('list-nav__icon--reversed');
});

const aboutNavBtn = document.querySelector('#about-nav-top');
const aboutLinkContainer = document.querySelector('#about-nav-bottom');
const aboutLinks = document.querySelector('#about-links');
const aboutMenuIcon = document.querySelector('#about-menu-icon');

aboutNavBtn.addEventListener('click', () => {
  aboutLinkContainer.classList.toggle('list-nav__bottom--closed');
  aboutLinks.classList.toggle('list-nav__list--hidden');
  aboutMenuIcon.classList.toggle('list-nav__icon--reversed');
});
