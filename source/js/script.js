const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

const map = L.map('map')
.on('load', () => {
  console.log('Карта инициализирована');
})
.setView({
  lat: 59.92749,
  lng: 30.31127,
}, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const marker = L.marker(
  {
    lat: 59.96831,
    lng: 30.31748,
  },
);

marker.addTo(map);

const buttonMenu = document.querySelector('.main-nav-button');
const menu = document.querySelector('.main-nav__list');

buttonMenu.addEventListener('click', function () {
  menu.classList.toggle('main-nav__list--active');
  buttonMenu.classList.toggle('main-nav-button--active');
});
