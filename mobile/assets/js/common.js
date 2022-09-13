$(function () {
    var $container = $(".header__left .main");
    var $target = $container.find(".banner-btn");
    var $pannel = $container.find(".home");
    var $closeBtn = $pannel.find(".btn--close");

    $target.click(function () {
        $pannel.css("display", "block");
        $pannel.animate({ left: "0" }, 300);
        return false;
    });

    $closeBtn.click(function () {
        var width = $(window).width();
        if (width == 320) {
            // $pannel.show();
            $pannel.animate({ left: "-320" }, 300);
        }
        if (width == 360) {
            // $pannel.show();
            $pannel.animate({ left: "-360" }, 300);
        }
        if (width == 375) {
            // $pannel.show();
            $pannel.animate({ left: "-375" }, 300);
        }
        if (width == 414) {
            // $pannel.show();
            $pannel.animate({ left: "-414" }, 300);
        }
        if (width == 667) {
            // $pannel.show();
            $pannel.animate({ left: "-667" }, 300);
        }
        if (width == 736) {
            $pannel.show();
            $pannel.animate({ left: "-736" }, 300);
        }
        if (width == 768) {
            $pannel.show();
            $pannel.animate({ left: "-768" }, 300);
        }
        return false;
    });

    $(".family-site .family-site__header").click(function () {
        $(".family-site__contents").toggle();
    });
});
