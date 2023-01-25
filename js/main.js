$(window).on('load resize orientationchange', function () {
  $('.slider-mob-container')
    .on('init', function (event, slick) {
      $('.entrance').addClass('animated fadeIn')
    });
  $('.slider-mob-container').each(function () {
    var $carousel = $(this);
    /* Initializes a slick carousel only on mobile screens */
    // slick on mobile
    if ($(window).width() > 991) {
      if ($carousel.hasClass('slick-initialized')) {
        $carousel.slick('unslick');
      }
    } else {
      if (!$carousel.hasClass('slick-initialized')) {
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
          cssEase: 'ease-in-out',
          slidesToShow: 1,
          slidesToScroll: 1,
          mobileFirst: true,
        });
      }
    }
  });

  //Swiper Slider
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    effect: 'cards',
    // grabCursor: true,
    noSwiping: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    speed: 500,

    // slideShadows: true,
    cardsEffect: {
      rotate: false,
      slideShadows: false,
      onlyExternal: true,
    },
    //arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
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

      }
    }
  });

});


          

 

    
   
