const photoLink = document.querySelector('.header-search__link');

photoLink.addEventListener('mouseenter', () => {
  document.querySelector('.header-search__tooltip').classList.toggle('header-search__tooltip--visible');;
});

photoLink.addEventListener('mouseleave', () => {
  document.querySelector('.header-search__tooltip').classList.toggle('header-search__tooltip--visible');;
});