$(document).ready(function(){

    // Main dApp Slider
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:5,
                nav:true,
                loop:false
            }
        },
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:false,
        width: 200,
        navigation: false
    })
});
