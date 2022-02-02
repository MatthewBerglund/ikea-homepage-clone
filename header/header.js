const photoLink = document.querySelector('.photo-search');

photoLink.addEventListener('mouseenter', () => {
  document.querySelector('.search__tooltip').classList.toggle('search__tooltip--visible');;
});

photoLink.addEventListener('mouseleave', () => {
  document.querySelector('.search__tooltip').classList.toggle('search__tooltip--visible');;
});