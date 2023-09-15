window.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".swiper", {
    loop: true,
    initialSlide: 1,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    parallax: true,
    breakpoints: {
      320: {
        slidesPerView: 1.1,
        spaceBetween: 20,
        centeredSlides: false,
      },
      450: {
        slidesPerView: 1.4,
        spaceBetween: 30,
        centeredSlides: true,
      },
      1920: {
        spaceBetween: 50,
        slidesPerView: 3,
        autoplay: {
          delay: 4000,
        },
      },
    },
  });
});
