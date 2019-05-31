$(function () {
    // model close
    $('.model.closed, .model-close').click(function () {
        modelHide();
    });

    // prevent close
    $('.model .model-area').click(function (e) {
        e.stopPropagation();
    });
});

// model顯示
function modelShow(objId) {
    var id = '#' + objId;
    $('body').css('overflow', 'hidden');
    $(id).fadeIn('fast');
    $(id + ' .model-area').addClass('show');
}

// model隱藏
function modelHide() {
    $('body').removeAttr('style');
    $('.model .model-area').removeClass('show');
    $('.model').fadeOut();
}
function modelObjHide(objId) {
    var id = '#' + objId;
    $('body').removeAttr('style');
    $(id + ' .model-area').removeClass('show');
    $(id).fadeOut();
}