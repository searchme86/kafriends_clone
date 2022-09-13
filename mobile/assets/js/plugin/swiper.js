$(document).ready(function () {
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
});
