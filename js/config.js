$(function () {
    // menu
    $('.navbar-menu').click(function () {
        if ($(this).hasClass('closed')) {
            $('body').removeAttr('style');
            // 按鈕
            $(this).removeClass('closed');
            // 選單區塊
            $('.navbar-area').removeClass('open');
        } else {
            $('body').css('overflow', 'hidden');
            // 按鈕
            $(this).addClass('closed');
            // 選單區塊
            $('.navbar-area').addClass('open');
        }

        return false;
    });

    // menu resize
    $(window).resize(function () {
        resizeMenu();
    });

    // login
    $('.navbar-login').click(function () {
        // model show
        modelShow('loginModel');
    });
});

// menu縮放
function resizeMenu() {
    var windowWidth = 768;
    if ($(window).width() > 768) {
        $('.navbar-menu').removeClass('closed');
        $('.navbar-area').removeClass('open');
    }
}