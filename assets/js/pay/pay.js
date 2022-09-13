$(function () {
  $('.credit').each(function () {
    var $tabList = $(this).find('.credit-tablist');
    var $tab = $tabList.find('li');
    var $tabPanels = $(this).find('.credit-content');
    var $credit = $(this).find('.btn-credit');
    var $btnka = $(this).find('.btn-kakao');
    var $tabKakao = false;
    var $tabCredit = false;

    $('.credit-tablist li').click(function () {
      var $this = $(this);
      var $index = $(this).index();

      if ($this.hasClass('on')) {
        return;
      }

      $tab.removeClass('on');
      $this
        .addClass('on')
        .attr('aria-selected', 'true')
        .siblings()
        .attr('aria-selected', 'false');

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
