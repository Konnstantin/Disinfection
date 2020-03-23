$(function(){
  $('.slider').slick({
    arrows: false,
    fade: true,
    autoplay: 3000,
    dots: true
  });


  $('input[type="file"], select, input[type="checkbox"]').styler();

  $('.information__item-title').click(function(event) {
    if($('.information__block').hasClass('one')){
       $('.information__item-title').not($(this)).removeClass('active');
       $('.information__item-text').not($(this).next()).slideUp(300);
    }
    $(this).toggleClass('active').next().slideToggle(300);
  });


  $('.slider__reviews').slick({
    arrows: true,
    dots: false,
    prevArrow: '<button class="slick-arrow slick-prev"><img src="../images/left.svg" alt=""></button>',
    nextArrow: '<button class="slick-arrow slick-next"><img src="../images/right.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 995,
        settings: {
          arrows: false,
          dots: true
        }
      },
    ]
  });

  $('.header__btn').on('click',function(){
    $('.menu').addClass('active');
    
  });


  $('.close-btn').on('click',function(){
    $('.menu').removeClass('active');
  });

  $("#phone,#phone_2").mask("+7 (999) 999-99-99");



});
