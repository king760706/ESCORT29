$(function () {
    // tel
    $('.tel').click(function () {
        var tel = $('input#tel').val();
        $.ajax({
            type: 'post',
            url: '/',
            async: false,
            data: {},
            headers: {},
            success: function () {

            },
            error: function (data) {
                console.log(data.responseText);
                return false;
            },
            complete: function () {
                window.location.href = 'tel:' + tel;
            }
        });
    });

    // email
    $('.email').click(function () {
        // model show
        modelShow('emailModel');
    });

    // favourite
    $('.favourite').click(function () {
        $.ajax({
            type: 'post',
            url: '/',
            async: false,
            data: {},
            headers: {},
            success: function () {

            },
            error: function (data) {
                console.log(data.responseText);
                return false;
            },
            complete: function () {
                alert('The escort has joined my favourite!');
            }
        });
    });

    // share
    $('.share').click(function () {
        $(this).off('click');
        var clipboard = new ClipboardJS('.share', {
            text: function (trigger) {
                return window.location.href;
            }
        });

        clipboard.on('success', function (e) {
            alert("URL has been copied!");

            e.clearSelection();
        });

        clipboard.on('error', function (e) {
            console.error('Action:', e.action);
            console.error('Trigger:', e.trigger);
        });
    });

    // report
    $('.report').click(function () {
        alert('The escort has reported!');
    });

    // lightgallery
    $('#lightgallery').lightGallery({
        pager: false,
        mousewheel: false,
        controls: true,
        enableDrag: true,
        enableSwipe: true,
        share: false,
        autoplay: false,
        autoplayControls: false,
        download: false,
        counter: false,
        thumbnail: false
    });

    // owl carousel
    $('.owl-carousel').owlCarousel({
        loop: false,
        margin: 20,
        nav: true,
        dots: false,
        animateOut: 'slideOutDown',
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoHeight: true,
        responsive: {
            0: {
                items: 3
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    });

    // tel init and scroll
    scrollTelShow();

    $(window).scroll(function () {
        scrollTelShow();
    });
});

// tel顯示
function scrollTelShow() {
    var windowWidth = 768;
    if ($(window).width() <= 768) {
        if ($(this).scrollTop() >= $('.my-area').offset().top - $('.my-area').height() + 70) { // 顯示
            $('.report-area').addClass('show');
        } else { // 隱藏
            $('.report-area').removeClass('show');
        }
    } else {
        $('.report-area').removeClass('show');
    }
}