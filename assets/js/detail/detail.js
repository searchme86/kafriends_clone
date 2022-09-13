$(document).ready(function () {
  // chart
  activeScene2();
  function activeScene2() {
    var $content = $('.item__charts'),
      $charts = $content.find('.chart');
    $charts.each(function () {
      var $chart = $(this),
        $circleLeft = $chart
          .find('.left .circle-mask-inner')
          .css({ transform: 'rotate(0)' }),
        $circleRight = $chart
          .find('.right .circle-mask-inner')
          .css({ transform: 'rotate(0)' }),
        $percentNumber = $chart.find('.percent-number'),
        percentData = $percentNumber.text();

      $percentNumber.text(0);
      $({ percent: 0 })
        .delay(1000)
        .animate(
          {
            percent: percentData,
          },
          {
            duration: 1500,
            progress: function () {
              var now = this.percent,
                deg = (now * 360) / 100,
                degRight = Math.min(Math.max(deg, 0), 180),
                degLeft = Math.min(Math.max(deg - 180, 0), 180);
              $circleRight.css({
                transform: 'rotate(' + degRight + 'deg)',
              });
              $circleLeft.css({
                transform: 'rotate(' + degLeft + 'deg)',
              });
              $percentNumber.text(Math.floor(now));
            },
          }
        );
    });
  }
});

$(function () {
  $('.upper-section .show__more').click(function () {
    $('.lower-section').toggle();
    return false;
  });
});

$(document).ready(function () {
  // 공유버튼
  $('.item__share button').click(function () {
    $('.item__social').toggle();
    return false;
  });

  // 공유버튼 누르면 나오는
  $('.item__specification button').click(function () {
    $('.item__spec-content').toggle();
    return false;
  });

  // 배송
  $('.item__delivery button').click(function () {
    $('.item__delivery-content').toggle();
    $('.item__delivery-tabCont').toggle();
    return false;
  });

  // 탭
  $('.item__delivery').each(function () {
    var $tabList = $(this).find('.item__tab-nav');
    var $tab = $tabList.find('li');
    var $tabPanels = $(this).find('.tabpannel');

    $('.item__tab-nav li').click(function (event) {
      var $this = $(this);
      var $index = $(this).index();

      if ($this.hasClass('on')) {
        return;
      }

      $tab.removeClass('on');
      $this
        .addClass('on')
        .attr('aria-selected', 'true')
        .focus()
        .siblings()
        .attr('aria-selected', 'false');

      $tabPanels.hide();
      $tabPanels
        .eq($index)
        .attr('tabindex', '0')
        .show()
        .siblings()
        .attr('tabindex', '-1');
    });

    $tab.eq(0).trigger('click');
  });
});

// 새로수정
// 댓글처리

$(document).ready(function () {
  // 좋아요,최신순 구분
  $('.opinion').each(function () {
    var $tabList = $(this).find('.opinion-tablist');
    var $tab = $tabList.find('li');
    var $tabPanels = $(this).find('.item__opinion-content');

    $('.opinion-tablist li').click(function () {
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

      $tabPanels.hide();
      $tabPanels
        .eq($index)
        .attr('tabindex', '0')
        .show()
        .siblings()
        .attr('tabindex', '-1');
    });

    $tab.eq(0).trigger('click');
    return false;
  });

  // 더보기 버튼 클릭
  $('.btn-review-more').click(function () {
    $('.review-more').toggle();
    $('.btn-review-more').hide();
  });

  // 스크롤에 따른 더보기 버튼 클릭 보이고 사라지기
  $(window).scroll(function () {
    var like_treshhold = $('.like-list').children().eq(1).offset().top;
    var new_treshhold = $('.new-list').children().eq(1).offset().top;
    var yoffset = window.pageYOffset;

    if (like_treshhold > yoffset) {
      $('.btn-review-more').show();
      $('.review-more').hide();
    }

    if (new_treshhold > yoffset) {
      $('.btn-review-more').show();
      $('.review-more').hide();
    }
  });

  $('.family-site .family-site__header').click(function () {
    $('.family-site__contents').toggle();
  });
});

// purchasing-bar
$(function () {
  // purchasing-bar 추가차감수량 및 가격js
  var price = 0;
  var clickNum = 0;
  var addBtn = $('.purchasing-bar__calculation .add');
  var minusBtn = $('.purchasing-bar__calculation .minus');

  var itemName = $('.item__overview .item__title').text();
  var itemCount = $('.purchasing-bar__calculation .calc_result');

  var itemPrice = Number(
    $('.item__overview .item__price')
      .text()
      .replace(/[^0-9]/g, '')
  );

  var list = $('.purchasing-bar__info .review');
  var info = $('.purchasing-bar__info .info');
  var delivery = $('.purchasing-bar__info .delivery');

  itemCount.on('propertychange change keyup paste input', function () {
    var value = $(this).val();
    var calcuated = numberWithCommas(value * itemPrice);
    $('.purchasing-bar__amount .number').html(
      calcuated + '<span class="price-unit">원</span>'
    );
    itemCount.attr('value', value);
    itemCount.text(value);
  });

  function inputValue(value) {
    return itemCount.val(value);
  }

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  var totalAdd = numberWithCommas(itemPrice);
  $('.purchasing-bar__amount .number').html(
    totalAdd + '<span class="price-unit">원</span>'
  );

  minusBtn.click(function () {
    if (
      (clickNum <= 1 && itemCount.val() == 0) ||
      clickNum <= 1 ||
      itemCount.val() == 0 ||
      itemPrice == 0
    ) {
      return;
    }
    clickNum = itemCount.val();
    --clickNum;
    price = itemPrice * clickNum;
    itemCount.attr('value', clickNum);
    var numberWithComma = numberWithCommas(price);
    calc(clickNum, numberWithComma);
    inputValue(clickNum);
  });

  addBtn.click(function () {
    clickNum = itemCount.val();
    ++clickNum;
    price = itemPrice * clickNum;
    itemCount.attr('value', clickNum);
    var numberWithComma = numberWithCommas(price);
    calc(clickNum, numberWithComma);
    inputValue(clickNum);
    return false;
  });

  function calc(clickNum, numberWithComma) {
    $('.purchasing-bar__amount .number').html(
      numberWithComma + '<span class="price-unit">원</span>'
    );
    itemCount.text(clickNum);
  }

  // purchasing-bar 버튼 기능
  list.click(function () {
    $('.item__opinion .write-reply').toggle();
    return false;
  });

  info.click(function () {
    $('body,html').animate(
      { scrollTop: $('.item__warning').offset().top },
      500
    );
    return false;
  });

  delivery.click(function () {
    $('body,html').animate(
      { scrollTop: $('.item__delivery').offset().top },
      500
    );
    $('.item__delivery .lower-section').toggle();
    return false;
  });
});

// 리뷰 좋아요 최신순 탭
$(function () {
  $('.opinion').each(function () {
    var $tabList = $(this).find('.opinion-tablist');
    var $tab = $tabList.find('li');
    var $tabPanels = $(this).find('.item__opinion-content');

    $('.opinion-tablist li').click(function () {
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

      $tabPanels.hide();
      $tabPanels
        .eq($index)
        .attr('tabindex', '0')
        .show()
        .siblings()
        .attr('tabindex', '-1');
    });

    $tab.eq(0).trigger('click');
    return false;
  });

  // 더보기 버튼 클릭
  $('.btn-review-more').click(function () {
    $('.review-more').toggle();
    $('.btn-review-more').hide();
  });

  // 스크롤에 따른 더보기 버튼 클릭 보이고 사라지기
  $(window).scroll(function () {
    var like_treshhold = $('.like-list').children().eq(1).offset().top;
    var new_treshhold = $('.new-list').children().eq(1).offset().top;
    var yoffset = window.pageYOffset;

    if (like_treshhold > yoffset) {
      $('.btn-review-more').show();
      $('.review-more').hide();
    }

    if (new_treshhold > yoffset) {
      $('.btn-review-more').show();
      $('.review-more').hide();
    }
  });
});
