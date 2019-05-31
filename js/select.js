$(function () {
    // select
    $('.form-select').click(function (e) {
        var idx = $('.form-select').index(this);
        var id = $(this).attr('id');
        if ($(this).hasClass('actived')) {
            $(this).removeClass('actived');
            $('.form-select-area:eq(' + idx + ')').stop(true).slideUp();
        } else {
            $('.form-select').removeClass('actived');
            $(this).addClass('actived');
            $('.form-select-area').slideUp();
            $('.form-select-area:eq(' + idx + ')').stop(true).slideDown();
        }

        e.stopPropagation();
    });

    // select option 
    $('.form-select-option').click(function () {
        $(this).parent().siblings().children('.form-select-option').removeClass('selected');
        $(this).addClass('selected');
        $(this).parents('.form-select-area').stop(true).slideUp();
        $(this).parents('.form-select-area').siblings('.form-select').addClass('selected').children('span').text($(this).text());
    });

    // close select area
    $('html').click(function () {
        $('.form-select').removeClass('actived');
        $('.form-select-area').stop(true).slideUp();
    });
});