$(function () {

  $('.renew').on('mouseover', function() {
    $(this).animate({
      opacity: 1,
    },100);
  });

  $('.renew').on('mouseout', function() {
    $(this).animate({
      opacity: 0.8,
    },100);
  });

 $('.carousel').slick({
   slidesToShow: 2,
   slidesToScroll: 1,
   autoplay: true,
   dots: true,
   arrows: true,
   infinite: true,
   speed: 800,
   autoplaySpeed: 2500,
   pauseOnHover: true,
 });
 
})
  