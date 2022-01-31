const photoLink = document.querySelector('.search-container__icon-wrapper');

photoLink.addEventListener('mouseenter', () => {
  document.querySelector('.search-container__tooltip').classList.toggle('search-container__tooltip--visible');;
});

photoLink.addEventListener('mouseleave', () => {
  document.querySelector('.search-container__tooltip').classList.toggle('search-container__tooltip--visible');;
});