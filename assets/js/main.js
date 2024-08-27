
$(".review-slider").slick({
  slidesToShow: 3,
  infinite: false,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024, // screen width up to 1024px
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768, // screen width up to 768px
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false // Hides arrows on smaller screens
      }
    }
  ]

});







$.fn.jQuerySimpleCounter = function (options) {
  var settings = $.extend({
    start: 0,
    end: 100,
    easing: 'swing',
    duration: 400,
    complete: ''
  }, options);

  var thisElement = $(this);

  $({ count: settings.start }).animate({ count: settings.end }, {
    duration: settings.duration,
    easing: settings.easing,
    step: function () {
      var mathCount = Math.ceil(this.count);
      thisElement.text(mathCount);
    },
    complete: settings.complete
  });
};


$('#number1').jQuerySimpleCounter({ end: 250, duration: 3000 });
$('#number2').jQuerySimpleCounter({ end: 150, duration: 3000 });
$('#number3').jQuerySimpleCounter({ end: 100, duration: 2000 });
$('#number4').jQuerySimpleCounter({ end: 30, duration: 2500 });



// $(document).ready(function () {
//   $(".img-carousal").slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: true,
//     infinite: false,
//     autoplay: false
//   });
// });






$(".listing-carousal").slick({
  slidesToShow: 1,
  infinite: true,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  dots: true,

});
$(".solution-slider").slick({
  slidesToShow: 3,
  infinite: false,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
  arrows: true,
  prevArrow: $('.prev'),
  nextArrow: $('.next'),
  responsive: [
    {
      breakpoint: 1024, // screen width up to 1024px
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768, // screen width up to 768px
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false // Hides arrows on smaller screens
      }
    }
  ]
});


$(".partner-slider").slick({
  slidesToShow: 3,
  infinite: false,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  dots: true,

  responsive: [
    {
      breakpoint: 1024, // screen width up to 1024px
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768, // screen width up to 768px
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false // Hides arrows on smaller screens
      }
    }
  ]
});





$('.gallery-images').magnificPopup({
  delegate: '.gallery-img a',
  type: 'image',
  fixedContentPos: true,
  closeOnBgClick: true,
  alignTop: false,
  tLoading: 'Loading image #%curr%...',
  mainClass: 'mfp-img-mobile',
  gallery: {
    enabled: true,
    navigateByImgClick: true,
    preload: [0, 1]
  }
});