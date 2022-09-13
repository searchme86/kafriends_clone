$(document).ready(function () {
    $(".check-area .certification-num").click(function () {
        alert("000님의 인증번호는 254861 입니다.");
    });

    $(".check-area .fill-certification-num").on("keyup", function () {
        $(this).val(
            $(this)
                .val()
                .replace(/[^0-9]/g, "")
        );
    });

    // 비밀번호 보이기/안보이기
    $(".input-area img").click(function () {
        $("input").toggleClass("active");

        if ($("input").hasClass("active")) {
            $(this).prev().attr("type", "text");
        } else {
            $(this).prev().val("");
            $(this).prev().attr("type", "password");
        }
    });
});
