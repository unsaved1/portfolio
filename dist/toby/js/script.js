$(document).ready(function(){
    $('.carousel').slick({
        infinite: true,
        speed: 900,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev slick__arrow"><img src="assets/icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next slick__arrow"><img src="assets/icons/right.svg"></button>'
      });
});


