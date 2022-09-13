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
        if (required_checked[0].checked && required_checked[1].checked) {
          $('.content .btn-submit').css('background', '#ffe500');
        } else if (
          !required_checked[0].checked ||
          !required_checked[1].checked
        ) {
          $('.content .btn-submit').css('background', '');
        } else if (
          !required_checked[0].checked &&
          !required_checked[1].checked
        ) {
          $('.content .btn-submit').css('background', '');
        }
      }

      if (
        chkBox[1].checked &&
        chkBox[2].checked &&
        chkBox[3].checked &&
        chkBox[4].checked
      ) {
        chkBox[0].checked = true;
        $('.content .btn-submit').css('background', '#ffe500');
      }

      if (
        !chkBox[1].checked &&
        chkBox[2].checked &&
        chkBox[3].checked &&
        chkBox[4].checked
      ) {
        chkBox[0].checked = false;
        $('.content .btn-submit').css('background', '#ffe500');
      }

      if (
        chkBox[1].checked &&
        chkBox[2].checked &&
        chkBox[3].checked &&
        !chkBox[4].checked
      ) {
        chkBox[0].checked = false;
        $('.content .btn-submit').css('background', '#ffe500');
      }

      if (chkBox[3].checked && chkBox[4].checked && chkBox[5].checked) {
        chkBox[0].checked = false;
        $('.content .btn-submit').css('background', '#ffe500');
      }

      if (
        (!chkBox[1].checked &&
          !chkBox[2].checked &&
          !chkBox[3].checked &&
          !chkBox[4].checked) ||
        (!chkBox[1].checked &&
          chkBox[2].checked &&
          chkBox[3].checked &&
          chkBox[4].checked)
      ) {
        chkBox[0].checked = false;
        $('.content .btn-submit').css('background', '');
      }
    });
  }

  formCheck();
});

$(function () {
  $('.form__checkall input[name=agree_all]').click(function () {
    $('.form__checkbox').toggleClass('on');
    $('.btn-submit').toggleClass('on');
  });
});

$('.policy-list .language-checked > a').click(function () {
  var box = $(this)
    .parents()
    .find('.policy')
    .children()
    .eq(1)
    .addClass('policy-language--up');

  box.find('ul').css('display', 'block');
  $(this).css('visibility', 'hidden');

  $('.policy-language ul>li').mouseenter(function () {
    $('.policy-language ul>li').removeClass('language-selected');
    $(this).css('background', '#eeeeee');
    $(this).siblings().css('background', '#ffffff');
  });

  $('.policy-language ul').mouseleave(function () {
    box.find('ul').hide();
    $(this).parent().removeClass('policy-language--up');
    $('.policy-list .language-checked > a').css('visibility', 'visible');
  });
});
