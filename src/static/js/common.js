$(document).ready(function() {
    // font-family: 'Ubuntu';
    // font-family: 'Roboto';

    $('.burger').click(function() {
        $('.main-nav').fadeToggle();
    });

    $(window).resize(function() {
        if (window.matchMedia("(min-width: 992px)").matches) {
            $('.main-nav').removeAttr('style');
        }
    });

    $('.cat-btn').click(function() {
        $('.cat-btn__list').fadeToggle();
    });

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

var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
    slidesPerView: 4,
    loop: true,
    freeMode: true,
    loopedSlides: 5, //looped slides should be the same
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
});
var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    loop: true,
    loopedSlides: 5, //looped slides should be the same
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    thumbs: {
        swiper: galleryThumbs,
    },
});
