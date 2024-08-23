
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
  dots : true,

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
