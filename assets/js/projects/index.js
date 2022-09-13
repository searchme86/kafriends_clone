$(function () {
    var myvideo = $(".video  .myvideo");
    $(".control .video__play").click(function () {
        myvideo.get(0).play();
        return false;
    });
    $(".control .video__stop").click(function () {
        myvideo.get(0).pause();
        return false;
    });
});
