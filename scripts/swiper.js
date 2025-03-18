document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.hero-slider', {
    loop: true,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    effect: 'slide',
    speed: 800,
  });

  const sliderContainer = document.querySelector('.hero-slider');
  sliderContainer.addEventListener('click', function () {
    swiper.autoplay.stop();
  });
});
