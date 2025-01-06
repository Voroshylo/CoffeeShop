import Swiper from "swiper";
import "swiper/css";

document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper-container", {
    slidesPerView: 2, // Відображати два слайди одночасно
    spaceBetween: 10, // Відстань між слайдами
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
