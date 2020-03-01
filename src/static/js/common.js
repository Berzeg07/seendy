$(document).ready(function() {

    $('.tab a').click(function(e) {
        e.preventDefault();
        $('a').removeClass('active');
        $(this).addClass('active');
        var tab = $(this).attr('href');
        $('.tab__box').not(tab).css({
            'display': 'none'
        });
        $(tab).fadeIn(400);
    });
    $('.tab a:first').click();

    $('.tabs-link a').click(function(e) {
        e.preventDefault();
        $('.tabs-link a').removeClass('is-active');
        $(this).addClass('is-active');
        var tab = $(this).attr('href');
        $('.tab-cont').not(tab).css({
            'display': 'none'
        });
        $(tab).fadeIn(400);
    });
    $('.tabs-link a:first').click();

    $('.check-color__item').click(function() {
        $('.check-color__item').removeClass('is-active');
        $(this).addClass('is-active');
    });

    $('.product-option__size li').click(function() {
        $('.product-option__size li').removeClass('is-active');
        $(this).addClass('is-active');
    });

    // font-family: 'Ubuntu';
    // font-family: 'Roboto';

    $('.deliv-comp .deliv-comp__item').click(function(e) {
        e.preventDefault();
        $('.deliv-comp__item').removeClass('is-active');
        $(this).addClass('is-active');
        var img = $(this).find('.deliv-comp__img img');
        var imgSrc = $(img).attr('src');
        var compName = $(this).find('.deliv-comp__title').text();
        var days = $(this).find('.deliv-comp__days').text();
        var sum = $(this).find('.deliv-comp__price').text();
        var tableImg = $('.deliv-current__img img');
        $(tableImg).attr('src', imgSrc);
        $('.deliv-current__title').html(compName);
        $('.deliv-current__days').html(days);
        $('.deliv-current__price').html(sum);
    });
    $('.deliv-comp .deliv-comp__item:first').click();

    var itemprice = $('#productPrice').text();
    $('#quantity').val('1');
    $(".switch-number .switch-button").on("click", function() {
        var $button = $(this);
        var oldValue = $button.parent().find("input").val();
        if ($button.text() == "+") {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            if (oldValue > 1) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 1;
            }
        }
        $button.parent().find("input").val(newVal);

        var quantity = $('#quantity').val();
        var total = Number(itemprice) * quantity;
        console.log(total);
        $('#productPrice').html(total);
    });

    $('.burger').click(function() {
        $('.main-nav').fadeToggle();
    });

    $('.fotorama').fotorama();

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

    if (window.matchMedia("(min-width: 992px)").matches) {
        $('.main-nav').removeClass('nav');
    }

    $(window).resize(function() {
        if (window.matchMedia("(min-width: 992px)").matches) {
            $('.main-nav').removeAttr('style');
            $('.main-nav').removeClass('nav');
        } else {
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

    $(function() {
        $('.calc-range').slider({
            min: 0.5,
            max: 10,
            step: 0.5,
            value: 3,
            slide: function(event, ui) {
                $(".range-val").val(ui.value);
            }
        });
        $(".range-val").val($(".calc-range").slider("value"));
    });

    $(function() {
        $(".price-range").slider({
            range: true,
            min: 100,
            max: 100000,
            step: 100,
            values: [1500, 40000],
            slide: function(event, ui) {
                $(".price-inp__left").val(ui.values[0]);
                $(".price-inp__right").val(ui.values[1]);

            }
        });
        $(".price-inp__left").val($(".price-range").slider("values", 0));
        $(".price-inp__right").val($(".price-range").slider("values", 1));
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

    var mainSlider = new Swiper('.recom-slider', {
        spaceBetween: 0,
        slidesPerView: 4,
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
                slidesPerView: 1,
                spaceBetweenSlides: 30
            },
            767: {
                slidesPerView: 2,
                spaceBetweenSlides: 40
            },
            800: {
                slidesPerView: 3,
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

let buttonBasket = document.querySelectorAll('.basket__button');

    buttonBasket.forEach(function(item) {
        item.addEventListener('click', function() {
           this.parentElement.parentElement.remove()
        });
    });

/*Map*/

// ymaps.ready(init);
//
// function init() {
//     // Creating the map.
//     var myMap = new ymaps.Map("map", {
//         // The map center coordinates.
//         // Default order: “latitude, longitude”.
//         // To not manually determine the map center coordinates,
//         // use the Coordinate detection tool.
//         center: [55.734222, 37.573824],
//
//         // Zoom level. Acceptable values:
//         // from 0 (the entire world) to 19.
//         zoom: 17,
//         controls: ['zoomControl']
//     });
//     myMap.behaviors.disable('scrollZoom');
// }


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
