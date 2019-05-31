$(function () {
    // escorts filter
    $('.escorts-filter .escorts-filter-btn').click(function () {
        var idx = $('.escorts-filter .escorts-filter-btn').index(this);
        switch (idx) {
            case 0: // Available Now
                if ($(this).hasClass('actived')) {
                    $(this).removeClass('actived');
                } else {
                    $(this).addClass('actived');
                }
                break;
            case 1: // Grid
                $('.escorts-filter .escorts-filter-btn:eq(2)').removeClass('actived');
                $(this).addClass('actived');
                $('.escorts-area .escorts-item').removeClass('list');
                break;
            case 2: // List
                $('.escorts-filter .escorts-filter-btn:eq(1)').removeClass('actived');
                $(this).addClass('actived');
                $('.escorts-area .escorts-item').addClass('list');
                break;
        }
    });
});