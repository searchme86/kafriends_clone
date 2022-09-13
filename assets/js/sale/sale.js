$(function () {
    $(".size-big").click(function () {
        $(this).toggleClass("on");
        $(".layout li").removeClass("on");
    });
    $(".size-small .unit").click(function () {
        $(".size-big").removeClass("on");
        $(".layout li").removeClass("on");
        $(this).siblings().removeClass("on");
    });
    $(".layout li").click(function () {
        $(".layout li").siblings().removeClass("on");
        $(".size-small .unit").removeClass("on");
        $(".size-big").removeClass("on");
        $(this).addClass("on");
    });
});

$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > $(".layout").offset().top) {
            $(".btn-top").fadeIn(400);
        } else {
            $(".btn-top").fadeOut(400);
        }
    });

    $(".click-to-top .btn-top").click(function () {
        $("html, body").animate({ scrollTop: "0px" }, 2000);
        return false;
    });
});
