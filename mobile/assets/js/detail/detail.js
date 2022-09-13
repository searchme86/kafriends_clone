$(function () {
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
      $this.addClass('on').focus();

      $tabPanels.hide();
      $tabPanels.eq($index).show();
    });

    $tab.eq(0).trigger('click');
  });
});

$(function () {
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
    return false;
  });
});

$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > $('.item__hash').offset().top) {
      $('.btn-top').fadeIn(400);
    } else {
      $('.btn-top').fadeOut(400);
    }
  });

  $('.click-to-top .btn-top').click(function () {
    $('html, body').animate({ scrollTop: '0px' }, 2000);
    return false;
  });
});
