$(function (){

    'use strict'
    // banner slider js start
    $('#banner_part').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        prevArrow: '<i class="fas fa-chevron-left prev_arrow"></i>',
        nextArrow: '<i class="fas fa-chevron-right next_arrow"></i>',
        speed: 500,
        fade: true,
        cssEase: 'linear'
        
      });

    // service slider
    $('.service_slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
      arrows: false,
      dots: true,
      responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
    ]
    });

    // car for rent js start
    $('.rent_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        prevArrow: '<i class="fas fa-chevron-left prev_arrow"></i>',
        nextArrow: '<i class="fas fa-chevron-right next_arrow"></i>',
        arrows: true,
        dots: false,
        responsive: [
          {
              breakpoint: 992,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
              }
          },
          {
              breakpoint: 768,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
              }
          },
          {
              breakpoint: 576,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
              }
          },
      ]
      });

// testimonial slider js start

$('.test_slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
    responsive: [
      {
          breakpoint: 992,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
          }
      },
      {
          breakpoint: 768,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
          }
      },
      {
          breakpoint: 576,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
          }
      },
  ]
  });

// blog slider
$('.blog_slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false,
    responsive: [
      {
          breakpoint: 992,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
          }
      },
      {
          breakpoint: 768,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
          }
      },
      {
          breakpoint: 576,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
          }
      },
  ]
  });


});