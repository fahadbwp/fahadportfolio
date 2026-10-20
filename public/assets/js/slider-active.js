/***************************************************
==================== JS INDEX ======================
****************************************************

01. Brand Js
02. Marquee Js
03. Testimonial Three Js

****************************************************/

(function ($) {
  "use strict";

  function initLazySwiper(selector, options) {
    var el = document.querySelector(selector);
    if (!el) return;
    if ("IntersectionObserver" in window) {
      var observer = new IntersectionObserver(function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            new Swiper(selector, options);
            obs.unobserve(entry.target);
          }
        });
      }, { rootMargin: "300px" });
      observer.observe(el);
    } else {
      new Swiper(selector, options);
    }
  }

  ////////////////////////////////////////////////////
  // 01. Brand Js
  if ($(".brand-active").length) {
    initLazySwiper(".brand-active", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      speed: 2500,
      autoplay: true,
      breakpoints: {
        380: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 5,
        },
        1600: {
          slidesPerView: 6,
        },
      },
    });
  }

  ////////////////////////////////////////////////////
  // 02. Marquee Js
  if ($(".marquee_left").length) {
    $(".marquee_left").marquee({
      speed: 50,
      gap: 0,
      delayBeforeStart: 0,
      direction: $("html").attr("dir") === "rtl" ? "right" : "left",
      duplicated: true,
      pauseOnHover: true,
      startVisible: true,
      loop: -1,
    });
  }

  ////////////////////////////////////////////////////
  // 03. Testimonial Three Js
  if ($(".testimonial-three-active").length) {
    initLazySwiper(".testimonial-three-active", {
      slidesPerView: 2,
      spaceBetween: 10,
      autoplay: true,
      speed: 1500,
      loop: true,
      breakpoints: {
        1200: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 1,
        },
        0: {
          slidesPerView: 1,
        },
      },
      navigation: {
        nextEl: ".slider-next",
        prevEl: ".slider-prev",
      },
    });
  }
})(jQuery);
