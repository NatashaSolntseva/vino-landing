window.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".swiper", {
    loop: true,
    initialSlide: 1,
    parallax: true,
    slidesPerView: 1.4,
    centeredSlides: true,
    spaceBetween: 30,
    autoplay: {
      delay: 2000,
    },
    breakpoints: {
      576: {
        slidesPerView: 1.1,
        centeredSlides: true,
        spaceBetween: 20,
        autoplay: {
          delay: 2000,
        },
      },
      768: {
        slidesPerView: 1.4,
        centeredSlides: true,
        spaceBetween: 30,
        autoplay: {
          delay: 2000,
        },
      },
      1024: {
        slidesPerView: 1.4,
        centeredSlides: true,
        spaceBetween: 30,
        autoplay: {
          delay: 2000,
        },
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
