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

});
