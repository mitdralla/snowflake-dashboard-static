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

        // Set current filter to active
        $(this).addClass("active");

        // Get the current group filter
        var group = $(this).attr("data-group");

        // Show all dapps in this filter and hide everything else
        if($(this).attr("data-group") == "all") {
            $('.dApp_row').removeClass('hidden');
            $('.dapp_category_header').removeClass('hidden');

        } else {
            if ($(this).attr("data-group") === group) {
                console.log(group);
                $('.dapp_category_header').addClass('hidden');
                $('.dApp_row').addClass('hidden');
                $('.dapp_category_header[data-group~='+group+']').removeClass('hidden');
                $('.dApp_row[data-group~='+group+']').removeClass('hidden');
            }
        }

        e.preventDefault();
    });

    $('.dappSidebarCategoryNav li').on('click', function(e) {
        $('.dappSidebarCategoryNav li').removeClass("active");

        // Reset all dapps visibility
        $('.dapp').removeClass('hidden');

        // Set current filter to active
        $(this).addClass("active");

        // Get the current filter
        var category = $(this).attr("data-category");

        // Show all dapps in this filter and hide everything else
        if($(this).attr("data-category") == "all") {
            $('.dapp').removeClass('hidden');

        } else {
            if ($(this).attr("data-category") === category) {
                console.log(category);
                $('.dapp').addClass('hidden');
                $('.dapp[data-category~='+category+']').removeClass('hidden');
            }
        }

        e.preventDefault();
    });

    /*
    $('.dAppCarouselItem').on('mouseover', function(e) {
        $(this).find('.dapp_hero_meta_wrapper').toggleClass('hidden');
    });

    $('.dAppCarouselItem').on('mouseout', function(e) {
        $(this).find('.dapp_hero_meta_wrapper').addClass('hidden');
    });
    */


});
