$(document).ready(function() {
    // font-family: 'Ubuntu';
    // font-family: 'Roboto';

    $('.burger').click(function() {
        $('.main-nav').fadeToggle();
    });



    $(function($) {
        $(document).click(function(event) {
            if ($(event.target).closest(".cat-btn").length)
                return;
            if ($(event.target).closest(".cat-btn__list").length)
                return;
            $(".cat-btn__list").fadeOut();
            event.stopPropagation();
        });
    });

    $(function($) {
        $(document).click(function(event) {
            if ($(event.target).closest(".burger").length)
                return;
            if ($(event.target).closest(".nav").length)
                return;
            $(".nav").fadeOut();
            event.stopPropagation();
        });
    });

    $(window).resize(function() {
        if (window.matchMedia("(min-width: 992px)").matches) {
            $('.main-nav').removeAttr('style');
            $('.main-nav').removeClass('nav');
        }else{
            $('.main-nav').addClass('nav');
        }
    });

    $('.cat-btn').click(function() {
        $('.cat-btn__list').fadeToggle();
    });

    $('.js-example-basic-single').select2();

    $('.favor').click(function() {
        $(this).toggleClass('active');
    });

    var mainSlider = new Swiper('.brends-slider', {
        spaceBetween: 0,
        slidesPerView: 6,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            499: {
                slidesPerView: 2,
                spaceBetweenSlides: 30
            },
            767: {
                slidesPerView: 3,
                spaceBetweenSlides: 40
            },
            800: {
                slidesPerView: 5,
                spaceBetweenSlides: 40
            }
        }
    });

    var mainSlider = new Swiper('.main-slider', {
        spaceBetween: 0,
        slidesPerView: 1,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        effect: 'fade'
    });



});

/*Map*/

ymaps.ready(init);

function init(){ 
        // Creating the map.    
        var myMap = new ymaps.Map("map", {
            // The map center coordinates.
            // Default order: “latitude, longitude”.
            // To not manually determine the map center coordinates,
            // use the Coordinate detection tool.
            center: [55.734222, 37.573824],

            // Zoom level. Acceptable values:
            // from 0 (the entire world) to 19.
            zoom: 17,
             controls: []
        });

    }

// var galleryThumbs = new Swiper('.gallery-thumbs', {
//     spaceBetween: 10,
//     slidesPerView: 4,
//     loop: true,
//     freeMode: true,
//     loopedSlides: 5, //looped slides should be the same
//     watchSlidesVisibility: true,
//     watchSlidesProgress: true,
// });
// var galleryTop = new Swiper('.gallery-top', {
//     spaceBetween: 10,
//     loop: true,
//     loopedSlides: 5, //looped slides should be the same
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
//     thumbs: {
//         swiper: galleryThumbs,
//     },
// });
