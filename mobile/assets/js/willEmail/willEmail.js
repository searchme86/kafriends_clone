$(function () {
  var input = $('input[type=checkbox]');

  function formCheck() {
    $('input[type=checkbox]').click(function () {
      var chkholder = [];
      var chkCnt = 0;
      var chkBox = $('.checkItem');
      var required_checked = chkBox
        .not('input[name=agree_all]')
        .not('input[name=normal]');
      var exceptAll = chkBox.not('input[name=agree_all]');

      for (var i = 0; i < chkBox.length; i++) {
        if (chkBox[i].checked === true) {
          chkholder[chkCnt] = chkBox[i].value;
          chkCnt++;
        }
      }

      for (i = 0; i < required_checked.length; i++) {
        if (
          required_checked[0].checked &&
          required_checked[1].checked &&
          required_checked[2].checked
        ) {
          $('.content .agree__btn').css('background', '#ffe500');
        } else if (
          !required_checked[0].checked ||
          !required_checked[1].checked ||
          !required_checked[2].checked
        ) {
          $('.content .agree__btn').css('background', '');
        } else if (
          !required_checked[0].checked &&
          !required_checked[1].checked &&
          !required_checked[2].checked
        ) {
          $('.content .agree__btn').css('background', '');
        }
      }

      if (
        chkBox[1].checked &&
        chkBox[2].checked &&
        chkBox[3].checked &&
        chkBox[5].checked &&
        chkBox[6].checked &&
        chkBox[7].checked
      ) {
        chkBox[0].checked = true;
        $('.content .agree__btn').css('background', '#ffe500');
      }
    });
  }

  formCheck();

  $('.form__checkall input[name=agree_all]').click(function () {
    $('.agree__btn').toggleClass('on');
  });
});
