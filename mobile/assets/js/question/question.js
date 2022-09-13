$(function () {
    $(".question__category li").click(function () {
        var idx = $(this).index();
        var prevAll = $(this)
            .parents()
            .find(".question__list")
            .eq(idx)
            .prevAll();
        var nextAll = $(this)
            .parents()
            .find(".question__list")
            .eq(idx)
            .nextAll();
        var tabLink = $(this).parents().find(".question__list").eq(idx);

        if (tabLink.css("display", "none")) {
            prevAll.css("display", "none");
            tabLink.css("display", "block");
        }
        nextAll.css("display", "none");
    });

    $(".question__list >ul>li").click(function () {
        var idx = $(this).index();
        var prevAll = $(this)
            .parents()
            .find(".question__contents")
            .eq(idx)
            .prevAll();
        var nextAll = $(this)
            .parents()
            .find(".question__contents")
            .eq(idx)
            .nextAll();
        var tabCtn = $(this).parents().find(".question__contents").eq(idx);

        if (tabCtn.css("display", "none")) {
            prevAll.css("display", "none");
            tabCtn.css("display", "block");
        }
        nextAll.css("display", "none");
    });

    $(".question__btn").click(function () {
        $(this).toggleClass("on");
        $(this).prev().toggle();
    });
});
