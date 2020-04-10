//Owl Carousel
$(document).ready(function () {
    'use strict';

    //Owl Carousel
    $('.owl-carousel').owlCarousel({
        //Responsive
        loop:true,
        margin:10,
        nav: false,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    });

    // //CounterUp
    // $('.num').counterUp({
    //     delay: 50,
    //     time: 3000
    // });

    //Loading page animation
    $('.overlay').fadeOut(2000, function () {

        $('body, html').css('overflow-y', 'visible');
    });

    //Scroll btn effect
    $('.scroll-btn').click( function () {

        $('body, html').animate({scrollTop: 0}, 1200);
    });

    
    $(window).scroll(function () {
        
        //Progress bar animation At DESCKTOP SCREEN
        var winScroll = $(this).scrollTop();

        $('.progress-bar').each(function () {

            //Desktop Screen

            if (winScroll >= ($(this).offset().top - 780)) {

                console.log('Large SCREEN');
                $(this).css('width', $(this).attr('data-width'));
            }
            
            //MEDUIM SCREEN
            if($(window).innerWidth() >= 992 && $(window).innerWidth() < 1200 ) {

                console.log('MEDUIM SCREEN');
            }

        });

        //Show scroll btn
        var secOff = $('.my-story').offset().top;

        if ($(this).scrollTop() >= secOff) {

            $('.scroll-btn').fadeIn(500);
        } else {
            $('.scroll-btn').fadeOut(500);
        }

    });

    //Show Links Badge on hovering
    $('.header-links .nav-link').each(function () {

        $(this).mouseenter(function () {

            $(this).addClass('special').parent().siblings('li').find('a').removeClass('special');
        });

        $(this).mouseleave(function () {

            $(this).removeClass('special');
        })
    });

    //Scroll to Portofolio section on clicking action button
    $('.home-banner .btn, .about-us  .btn').click(function () {

        const portofoliOff = $('#work').offset().top;

        $('html, body').animate({scrollTop: portofoliOff}, 1200)
    });

    //Magnific
    $('.my-work .body-icons').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open

        type: 'image'
        // other options
      });

      $('.popup-youtube').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

        fixedContentPos: false,
        gallery:{
            enabled:true
          }
    });
    
    //test
    $('.my-contact .btn').click(function (e) {
        e.preventDefault();

        //creat Div
        $('body').append('<div style="width: 100%; height: 100%; position: fixed; top: 0; left: 0; z-index:9999; background: rgba(0,0,0,.5)"><iframe style="position: absolute; top: 30%; left: 30%" width="560" height="315" src="https://www.youtube.com/embed/Brdnkc3rQmk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>');
        
    })

});

const toggleBtn = document.querySelector('.toggler-menu');
const headerMenu = document.querySelector('.header-menu');
const headerListItems = document.querySelectorAll('.header-links li');
const navBarBrand = document.querySelector('.header-style .logo .navbar-brand');
const toggleSpan = document.querySelectorAll('.toggler-menu span');
const portofolioBtn = document.querySelector('.portofolio');


//[ 1 ] show menu link
toggleBtn.addEventListener('click', function () {

    headerMenu.classList.toggle('rise');
    
    headerListItems.forEach(function (e) {

        e.classList.toggle('show');
    });

    navBarBrand.classList.toggle('hide');

    //add class open to toggler-menu spans
    toggleSpan.forEach(function (e) {

        e.classList.toggle('open');
    });

    //Add besude element to toggler-menu
    this.classList.toggle('pesude');
    this.classList.toggle('rotate');

    //Get Computed Style
    
});

//[ 2 ]Scroll to work section
$('.portofolio').click( function (e) {

    const x = `#${$(e.target).attr('data-scroll')}`;
    console.log(x);

    $('html, body').animate({scrollTop: $(x).offset().top}, 1200);
})

//[ 2 ] window scroll on clicking menu links  
//Finaly i gave up and use jQuery
$('.header-links .nav-link').each(function () {

    $(this).on('click', function (e) {

        let x = `#${$(this).attr('data-scroll')}`;

        $('body, html').animate({scrollTop: $(x).offset().top}, 1200);

        //if i aim the link
        if($(e.target).hasClass('nav-link')) {

            $(e.target).addClass('active');
            $(e.target).parent().siblings().find('a').removeClass('active');

        } else {
            
            $(e.target).parent().addClass('active');
            $(e.target).parent().parent().siblings().find('a').removeClass('active')
        }


    });
});

//Synscing links while scrolling
$(window).scroll(function () {

    
    $('section').each(function () {

      if($(window).scrollTop() >= $(this).offset().top - 1)
      {

        var bId = $(this).attr('id');

        $('.header-links a').removeClass('active');

        $('.header-links  a[data-scroll="' + bId + '"]').addClass('active');
      }

    });

  });
