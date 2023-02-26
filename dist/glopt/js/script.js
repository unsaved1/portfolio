const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('menu__active');
});
const slider = tns({
  container: '.carousel',
  items: 1,
  autoplay: false,
  nav: false,
  controls: false
});

document.querySelector('.carousel__prev').addEventListener('click', function () {
    slider.goTo('prev');
});

document.querySelector('.carousel__next').addEventListener('click', function () {
    slider.goTo('next');
});

