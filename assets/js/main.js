$(".solution-slider").slick({
  slidesToShow: 3,
  infinite: false,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: false,
  arrows: true,
  prevArrow: $('.prev'),
  nextArrow: $('.next'),
});


$(".review-slider").slick({
  slidesToShow: 3,
  infinite: false,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,


});




$(".partner-slider").slick({
  slidesToShow: 3,
  infinite: false,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
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