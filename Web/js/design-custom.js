$(function() {

    // 控制手機選單的開關
    $('#hamberger').on('click tap', function() {
        $('#hamberNav').slideToggle();
        $('#hamberger, #jadEmperor').toggleClass("on");
        $('.pmall #siteName').toggleClass("on");
        changeSiteName();
        if (window.navHide) {
            clearTimeout(window.navHide)
            window.navHide = undefined;
        }

        window.navHide = setTimeout(function() {
            $('#hamberNav').slideUp();
            $('#hamberger, #jadEmperor, .pmall #siteName').removeClass("on");
            changeSiteName();
        }, 3000);

    });

    function changeSiteName() {
        const siteName = $('.pmall #siteName');
        if (siteName.hasClass('on')) {
            siteName.text('龍傳文創');
            siteName.attr('href','../index.html')
        } else {
            siteName.text('天界直購');
        }
    };

    $('#openStory, #close').on('click tap', function() {
        $('#boxOpenStory').slideToggle();
    });

    $('.blk--sort').on('click tap', function() {
        $('.ul--sort').slideToggle();
    });

    $('#openJadeMagic').on('click tap', function() {
        $('#boxJadeMagic').slideToggle();
        $('#openJadeMagic').toggleClass("on");
    });

    $('#openSocial').on('click tap', function() {
        $('#boxSocialMedia').slideToggle();
    });

    $('.i--favorite').on('click tap', function() {
        $(this).toggleClass('selected');
    });

    $('#boxClose').on('click tap', function() {
        $('#boxReceiverDate').slideToggle();
    });
    $('#openReceiverDate').on('click tap', function() {
        $('#boxReceiverDate').slideToggle();
    });

    $('#goNext').on('click tap', function() {
        $('.ul--storeInfoA').css('left', '0');
        $('.ul--storeInfoB').css('left', '0');
    });
    $('#goBack').on('click tap', function() {
        $('.ul--storeInfoA').css('left', '-720px').css('order', '1');
        $('.ul--storeInfoB').css('left', '-720px').css('order', '2');
    });

    // Store
    $('.lnk--findStore').on('click tap', function() {
        $('#openStore').slideToggle();
    });



    // Scrolling

    var $scrollTopBtn = $('#goTop');
    $(window).scroll(function() {
        // console.log($(this).scrollTop());
        if ($(this).scrollTop() >= 450) {
            $scrollTopBtn.fadeIn();
        } else {
            $scrollTopBtn.fadeOut();
        }
    });
    $scrollTopBtn.on('click tap', function() {
        $('html,body').animate({
            scrollTop: 0
        }, 'slow');
    });

    // 購物車訂單中的數量+-功能
    $('.qty-input i').click(function() {
        val = parseInt($('.qty-input input').val());

        if ($(this).hasClass('less')) {
            val = val - 1;
        } else if ($(this).hasClass('more')) {
            val = val + 1;
        }

        if (val < 1) {
            val = 1;
        }

        $('.qty-input input').val(val);
    })
});