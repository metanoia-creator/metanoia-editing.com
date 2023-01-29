let burgerBtn = document.getElementById("burgerBtn"),
  burgerMenu = document.getElementById("burger-menu-b");

let aboutPage = document.getElementById("aboutPage"),
  brandsPage = document.getElementById("brandsPage"),
  metanoiaPage = document.getElementById("metanoiaPage"),
  missionPage = document.getElementById("missionPage"),
  entranceLogo = document.querySelector(".entrance-logo"),
  logoLinkBrands = document.querySelector(".logo-link--brands");

function goToMission() {
  aboutPage.style.display = "none";
  brandsPage.style.display = "none";
  metanoiaPage.style.display = "none";
  missionPage.style.display = "block";
  entranceLogo.style.display = "flex";
  logoLinkBrands.style.display = "none";
}

function goToBrands() {
  aboutPage.style.display = "none";
  brandsPage.style.display = "block";
  metanoiaPage.style.display = "none";
  missionPage.style.display = "none";
  entranceLogo.style.display = "none";
  logoLinkBrands.style.display = "block";
}

function goToAbout() {
  aboutPage.style.display = "none";
  brandsPage.style.display = "none";
  metanoiaPage.style.display = "block";
  missionPage.style.display = "none";
  entranceLogo.style.display = "flex";
  logoLinkBrands.style.display = "none";
}

function goToSlide(nr) {
  $(".slider-mob-container").slick("slickGoTo", nr);
}

function breakpointChecker(breakpoint) {
  if (breakpoint.matches === false) {
    aboutPage.style.display = "block";
    brandsPage.style.display = "none";
    metanoiaPage.style.display = "none";
    missionPage.style.display = "none";
    entranceLogo.style.display = "flex";
  } else if (breakpoint.matches === true) {
    aboutPage.style.display = "block";
    brandsPage.style.display = "block";
    metanoiaPage.style.display = "block";
    missionPage.style.display = "block";
    entranceLogo.style.display = "flex";
  }
}

$(window).on("load orientationchange", function () {
  $(".slider-mob-container").on("init", function (event, slick) {
    $(".entrance").addClass("animated fadeIn");
  });
  $(".slider-mob-container").each(function () {
    var $carousel = $(this);
    /* Initializes a slick carousel only on mobile screens */
    // slick on mobile

    if ($(window).width() < 992) {
      burgerMenu.style.display = "block";
      burgerBtn.style.display = "block";
      document.querySelectorAll(".logo-link--mobile").forEach((item) => {
        item.style.display = "block";
      });
    }
    if ($(window).width() > 530) {
      document.querySelectorAll(".entrance-logo__img").forEach((item) => {
        if (!item.classList.contains("entrance-logo__img--mobile"))
          item.style.display = "block";
      });
    }
    if ($(window).width() > 991) {
      if ($carousel.hasClass("slick-initialized")) {
        $carousel.slick("unslick");
      }
    } else {
      if (!$carousel.hasClass("slick-initialized")) {
        $carousel.slick({
          verticalSwiping: true,
          touchThreshold: 20,
          arrows: false,
          dots: false,
          infinite: false,
          autoplay: false,
          draggable: false,
          speed: 400,
          fade: true,
          cssEase: "ease-in-out",
          slidesToShow: 1,
          slidesToScroll: 1,
          mobileFirst: true,
        });
      }
    }
  });

  //Swiper Slider
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    effect: "cards",
    // grabCursor: true,
    noSwiping: true,
    slidesPerView: "auto",
    centeredSlides: true,
    speed: 500,
    slidesPerView: 1,
    loop: true,

    // slideShadows: true,
    cardsEffect: {
      rotate: false,
      slideShadows: false,
      onlyExternal: true,
    },
    //arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        noSwiping: false,
        grabCursor: true,
      },
      // when window width is >= 480px
      480: {
        noSwiping: false,
        grabCursor: true,
      },
      // when window width is >= 640px
      576: {
        noSwiping: false,
        grabCursor: true,
      },
      // when window width is >= 640px
      768: {
        noSwiping: false,
        grabCursor: true,
      },
    },
  });

  document.querySelectorAll(".brand-link").forEach((item) => {
    item.addEventListener("click", () => {
      if (item.id === "missionTab") goToMission();
      if (item.id === "brandsTab") goToBrands();
      if (item.id === "metanoiaTab") goToAbout();
    });
  });

  document.querySelectorAll(".aboutTab").forEach((item) => {
    item.addEventListener("click", () => {
      if (
        item.classList.contains("logo-link--mobile") ||
        item.classList.contains("entrance-logo__img--mobile")
      ) {
        $(".slick-active").attr("data-slick-index") !== 0 &&
          $(".slider-mob-container").slick("slickGoTo", 0);
      } else {
        aboutPage.style.display = "block";
        brandsPage.style.display = "none";
        metanoiaPage.style.display = "none";
        missionPage.style.display = "none";
        entranceLogo.style.display = "flex";
        logoLinkBrands.style.display = "none";
      }
    });
  });

  document.querySelectorAll(".btn-nav-link").forEach((item) => {
    item.addEventListener("click", () => {
      let id = item.getAttribute("id");
      id === "aboutSlick" && goToSlide(1);
      id === "missionSlick" && goToSlide(2);
      id === "brandsSlick" && goToSlide(3);
      id === "metanoiaSlick" && goToSlide(4);
      burgerBtn.classList.toggle("opened");
      burgerMenu.classList.toggle("active");
    });
  });

  const breakpoint = window.matchMedia("(max-width: 992px)");

  burgerBtn.addEventListener("click", () => {
    burgerBtn.classList.toggle("opened");
    burgerMenu.classList.toggle("active");
  });
  breakpointChecker(breakpoint);
});

$(window).on("load ", function () {
  if (window.location.hash === "#mission") goToMission();
  if (window.location.hash === "#brands") goToBrands();
  if (window.location.hash === "#about") goToAbout();
});
