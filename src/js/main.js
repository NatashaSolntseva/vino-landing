window.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".swiper", {
    loop: true,
    slidesPerView: 1.4,
    centeredSlides: true,
    spaceBetween: 30,
    initialSlide: 1,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    parallax: true,
  });
});
