// toogle menu section
const navbar = document.querySelector(".header-list");
const humburger = document.querySelector(".humburger");
const close = document.querySelector(".close");
humburger.addEventListener("click", function () {
  navbar.classList.add("active");
});
close.addEventListener("click", function () {
  navbar.classList.remove("active");
});

// swiper slider  scripting section

// hero section
var swiper = new Swiper(".heroSwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  keyboard: {
    enabled: true,
  },
  autoplay: {
    delay: 2000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
});
// shop  section
var swiper = new Swiper(".shopSwiper", {
  spaceBetween: 57,
  slidesPerView: 3,
  autoplay: {
    delay: 2500000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is <= 499px
    0: {
      slidesPerView: 1,
      spaceBetweenSlides: 0,
    },
    480: {
      slidesPerView: 2,
      spaceBetweenSlides: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetweenSlides: 30,
    },
  },
});

// fewless section
var swiper = new Swiper(".fewlessSwiper", {
  slidesPerView: 2,
  spaceBetween: 12,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      spaceBetween: 6,
    },
    480: {
      spaceBetween: 8,
    },
    768: {
      spaceBetween: 12,
    },
  },
});
// <!-- service section scripting  -->
var swiper = new Swiper(".serviceSwiper", {
  spaceBetween: 69,
  slidesPerView: 4,
  slidesPerView: "auto",
  centeredSlides: true,
  roundLengths: true,
  loop: true,
  autoplay: {
    delay: 2000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      if (this.slides.length > 3) {
        return index < 3 ? `<span class="${className}"></span>` : "";
      }
      return `<span class="${className}"></span>`;
    },
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 0,
      centeredSlides: false,
    },
    480: {
      slidesPerView: 2,
      spaceBetweenSlides: 20,
      spaceBetween: 20,
      centeredSlides: false,
    },
    768: {
      slidesPerView: 3,
      spaceBetweenSlides: 30,
      spaceBetween: 30,
      centeredSlides: false,
    },
    998: {
      slidesPerView: 4,
      spaceBetweenSlides: 69,
    },
  },
});
//  Brand  section

var swiper = new Swiper(".brandSwiper", {
  slidesPerView: 5,
  spaceBetween: 71,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 500,
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetweenSlides: 0,
    },
    480: {
      slidesPerView: 3,
      spaceBetweenSlides: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetweenSlides: 30,
    },
    998: {
      slidesPerView: 5,
      spaceBetweenSlides: 71,
    },
  },
});


// about product section

var swiper = new Swiper(".productmySwiper", {
  slidesPerView: 4,
  spaceBetween: 90,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
