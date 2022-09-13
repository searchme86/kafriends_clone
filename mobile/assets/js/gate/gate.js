$(function () {
  $('.inputArea__input--email input').on(
    'propertychange change keyup paste input',
    function () {
      var emaillabel = $('.inputArea__input--email .label--email');
      var emailinput = $('.inputArea__input--email input');
      var infoBtn = $(this)
        .parents()
        .children('.inputArea__input--email')
        .find('.infoHelp__infoBtn');
      var delBtn = $(this)
        .parents()
        .children('.inputArea__input--email')
        .find('.infoHelp__inputDel');

      emaillabel.hide();
      delBtn.show();
      infoBtn.hide();

      if (emailinput.val() === '') {
        emaillabel.attr('style', 'display:block;');
        delBtn.css('display', 'none');
        infoBtn.css('display', 'block');
      }
      delBtn.click(function () {
        emailinput.val('');
        emaillabel.show();
        delBtn.hide();
        infoBtn.attr('style', 'display:block');
        return false;
      });
    }
  );

  $('.inputArea__input--email input').click(function () {
    $('.inputArea__input--email input').css('border-bottom', '2px solid #000');
    $('.inputArea__input--pwd input[type=password]').css(
      'border-bottom',
      '2px solid #ebebeb'
    );
  });

  function popup() {
    var questionBtn = $(
      '.inputArea__input--email .infoHelp .infoHelp__infoBtn'
    );
    if (questionBtn.attr('display') === 'none') {
      infoBtn.show();
    }
    $('.infoHelp__infoTxt--visible').toggle();
    if ($('.inputArea__status--visible').attr('style', 'display') == 'block') {
      $('.inputArea__status--visible').attr('style', 'display:none;');
    }
    return false;
  }

  $('.inputArea__input--pwd input[type=password]').focus(function () {
    $('.infoHelp__infoTxt--visible').css('display', 'none');
    return false;
  });

  $('.btnArea .btnArea__qr-btn').mouseenter(function () {
    $(this).css('background', '#e7e7e7');
    return false;
  });
  $('.btnArea .btnArea__qr-btn').mouseleave(function () {
    $(this).css('background', '#f6f6f6');
    return false;
  });

  $('.inputArea__input--pwd input[type=password]').on(
    'propertychange change keyup paste input',
    function () {
      var pwdInput = $(this);
      var pwdLabel = $(this).prev();
      var pwdBtn = $(this).parents().next().find('button').eq(0);
      pwdLabel.hide();
      pwdBtn.css('display', 'block');
      pwdBtn.click(function () {
        pwdInput.val('');
        pwdLabel.show();
        pwdBtn.hide();
        return false;
      });

      if (!pwdInput.val()) {
        pwdLabel.attr('style', 'display:block');
        pwdBtn.attr('style', 'display:none');
      }
    }
  );

  $('.inputArea__input--pwd input[type=password]').click(function () {
    $('.inputArea__input--pwd input[type=password]').css(
      'border-bottom',
      '2px solid #000'
    );
    $('.inputArea__input--email input').css(
      'border-bottom',
      '2px solid #ebebeb'
    );
  });

  $('.policy-list .language-checked > a').click(function () {
    var box = $(this)
      .parents()
      .find('.policy')
      .children()
      .eq(1)
      .addClass('policy-language--up');

    box.find('.language').css('display', 'block');
    $(this).css('visibility', 'hidden');

    $('.language > li').mouseenter(function () {
      $(this).removeClass('language-selected');
      $(this).css('background', '#eeeeee');
      $(this).siblings().css('background', '#ffffff');
      return false;
    });

    $('.policy-list').mouseleave(function () {
      box.find('.language').hide();
      $(this).parent().removeClass('policy-language--up');
      $('.policy-list .language-checked > a').css('visibility', 'visible');
    });
    return false;
  });

  $('.infoHelp .infoHelp__infoBtn').on('click', popup);
});
