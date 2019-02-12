$(document).ready(function(){

    // Main dApp Slider
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive:{
            0:{
                items: 1,
                nav: true,
                loop: true
            },
            600:{
                items: 3,
                nav: false,
                loop: true
            },
            1000:{
                items: 5,
                nav: true,
                loop: true
            }
        },
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: false,
        autoWidth: true,
        navigation: false
    });

    $('.dappNavigation ul li').on('click', function(e) {
        $('.dappNavigation ul li').removeClass("active");
        $(this).addClass("active");
        e.preventDefault();
    });

    $('.dappSidebarCategoryNav li').on('click', function(e) {
        $('.dappSidebarCategoryNav li').removeClass("active");
        $(this).addClass("active");
        e.preventDefault();
    });
});
