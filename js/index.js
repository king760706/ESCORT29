var delaySpeed = 6000;

$(function () {
    // model show
    modelShow('noticeModel');

    //model leave
    $('.leave').one('click', function () {
        // website leave
        window.location.href = 'https://www.google.com';
    });

    //model website
    $('.website').one('click', function () {
        // model hide
        modelHide();
    });

    // Notification
    if (!Notification) {
        alert('Desktop notifications not available in your browser. Try Chromium.');
        return;
    }

    if (Notification.permission !== "granted" || Notification.permission === 'default' || Notification.permission ===
        'undefined')
        Notification.requestPermission();
    else {
        notifyMsg();
    }
});

// Notification設定
function notifyMsg() {
    var notification = new Notification("notify", {
        icon: 'img/logo.png',
        body: "Hello, this is your notify",
        tag: 'newArrival'
    });

    notification.onclick = function () {
        window.open("index.html");
    };

    setTimeout(function () {
        notification.close();
    }, delaySpeed);
}