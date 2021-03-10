// Scrolling
$(document).ready(function() {
    var $scrollTopBtn = $('#goTop');
    $(window).scroll(function() {
        // console.log($(this).scrollTop());
        if ($(this).scrollTop() >= 450) {
            $scrollTopBtn.fadeIn();
        } else {
            $scrollTopBtn.fadeOut();
        }
    });

});