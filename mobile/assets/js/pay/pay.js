$(function () {
  $("<p class='alert'>배송지를 입력해주세요</p>").insertAfter(
    $('.address .pay-title')
  );
  $('.pay-title + .alert').css({
    display: 'block',
    position: 'absolute',
    width: '137px',
    'font-size': '13px',
    top: '35px',
    right: '17px',
    color: '#ff0032',
  });

  $('.item .pay-title').click(function () {
    $('.item .inner-container').toggleClass('on');
    $('.item .pay-title').toggleClass('on');
    return false;
  });

  $('.address .pay-title').click(function () {
    $('.address .inner-container').toggleClass('on');
    $('.address .pay-title').toggleClass('on');
    return false;
  });

  $('.address .pay-title').click(function () {
    if ($(this).hasClass('on')) {
      $('.address').find('.alert').hide();
    } else if ($(this).hasClass('on') == false) {
      $('.address').find('.alert').show();
    }
  });

  $('.receiver .person-checkout > label').click(function () {
    $('.address .sender').toggleClass('on');
  });

  $('.money .pay-title').click(function () {
    $('.money .inner-container').toggleClass('on');
    $('.money .pay-title').toggleClass('on');
    return false;
  });
});

$(function () {
  var dt = new Date();
  var month = String(dt.getMonth() + 1);
  var day = String(dt.getDate());

  var weekday = new Array(7);
  weekday[0] = '일요일';
  weekday[1] = '월요일';
  weekday[2] = '화요일';
  weekday[3] = '수요일';
  weekday[4] = '목요일';
  weekday[5] = '금요일';
  weekday[6] = '토요일';

  var today = weekday[dt.getDay()].slice(0, 1);
  $('.address').find('.form-notice .month').html(month);
  $('.address').find('.form-notice .day').html(day);
  $('.address').find('.form-notice .todays').html(today);

  $('.btn-pay-for').on('click', function () {
    var moneyTop = $('.money').offset().top;
    $('html , body').animate(
      {
        scrollTop: moneyTop,
      },
      200
    );
    $('.popup').show();
    $('body').css({
      overflow: 'hidden',
      height: '100%',
    });
  });
  $('.btn-close').on('click', function () {
    $('.popup').hide();
    $('body').css({
      overflow: 'auto',
      height: 'auto',
    });
  });

  $('.credit').each(function () {
    var $tabList = $(this).find('.credit-tab .credit-tablist');
    var $tab = $tabList.find('li');
    var $tabPanels = $(this).find('.credit-content');
    var $credit = $(this).find('.btn-credit');
    var $btnka = $(this).find('.btn-kakao');
    var $tabKakao = false;
    var $tabCredit = false;

    $('.credit-tablist li').click(function () {
      $('.credit-tab').removeAttr('aria-selected');
      var $this = $(this);
      var $index = $(this).index();

      if ($this.hasClass('on')) {
        return;
      }

      $tab.removeClass('on');
      $this.addClass('on');

      $tabPanels.hide();
      $tabPanels.eq($index).show();

      if ($this.index() == 0) {
        $tabKakao = true;

        $btnka.css({
          background:
            "url('../../assets/img/pages/pay/credit__kako_selected.png') top 37px center no-repeat",
        });
        $credit.css({
          background:
            "url('../../assets/img/pages/pay/credit__card_unselected.png') top 37px center no-repeat",
        });
      }

      if ($this.index() == 1) {
        $tabCredit = true;
        $btnka.css({
          background:
            "url('../../assets/img/pages/pay/credit__kako_unselected.png') top 37px center no-repeat",
        });
        $credit.css({
          background:
            "url('../../assets/img/pages/pay/credit__card_selected.png') top 37px center no-repeat",
        });
      }
    });

    $tab.eq(0).trigger('click');
    return false;
  });

  function formCheck() {
    $('input[type=checkbox]').click(function () {
      if ($('input:checked').length == 3) {
        $('.pay .btn-pay-for').css('background', '#3c404b');
      } else {
        $('.pay .btn-pay-for').css('background', '#d4d7e1');
      }
    });
  }

  formCheck();
});
