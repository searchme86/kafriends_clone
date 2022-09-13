$(function () {
    var mySwiper = new Swiper(".swiper-container", {
        direction: "horizontal",
        loop: true,
        autoHeight: true,
        effect: "slide",
        allowTouchMove: true,
        setWrapperSize: true,
        centeredSlides: true,
        calculateHeight: true,
        pagination: {
            el: ".swiper-pagination",
            type: "bullets",
            clickable: true,
        },
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > $(".friends-category").offset().top) {
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
