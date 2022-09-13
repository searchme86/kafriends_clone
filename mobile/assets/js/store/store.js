$(function () {
  var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    autoHeight: true,
    effect: 'slide',
    allowTouchMove: true,
    setWrapperSize: true,
    centeredSlides: true,
    calculateHeight: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
  });
});

$(function () {
  var $container = $('.store__resources'),
    $loadMoreBtn = $('.btn-store-more'),
    $addItemCount = 10,
    $added = 0,
    $allData = [];

  $.getJSON('../assets/data/global.json', initGallery);

  function initGallery(data) {
    $allData = data;
    $loadMoreBtn.click(addItem);
  }

  function addItem() {
    var slicedData;
    var elements = [];
    slicedData = $allData.slice($added, $added + $addItemCount);

    $.each(slicedData, function (idx, item) {
      var itemHtml =
        '<li> <div class="store"><div class="store__bg store__bg--t2">' +
        '<img src="' +
        item.thumnail +
        '"' +
        'alt="' +
        item.alt +
        '"' +
        '/>' +
        '</div>' +
        '<strong class="store__title">' +
        item.title +
        '</strong><div class="store__info"><ul>' +
        '<li class="store__telNum">' +
        '<span class="offscreen">매장번호</span>' +
        '<a href="tel:' +
        item.phoneNum +
        '">' +
        item.phoneNum +
        '</a>' +
        '</li>' +
        '<li class="store__busiHour"><span class="offscreen">운영시간</span><p class="store__txt"> ' +
        item.hours +
        '</p></li><li class="store__address"><span class="offscreen">매장주소</span>' +
        '<p class="store__txt">' +
        item.address +
        '</p></li></ul><a href=" ' +
        item.link +
        '" class="store__map" title="새창열림" target="_blank">지도 자세히 보기</a></div></div></li>';

      elements.push($(itemHtml).get(0));
    });

    $container.append(elements);
    $added += slicedData.length;
  }
});

$(function () {
  $('.store__finder ').each(function () {
    var $tabList = $(this).find('.store-tablist');
    var $tab = $tabList.find('li');
    var $tabPanels = $(this).find('.tabpannel');

    $('.store__tab li').click(function (event) {
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

$(function () {
  $('.local').each(function () {
    var $tabList = $(this).find('.store__location');
    var $tab = $tabList.find('li');
    var $tabPanels = $(this).find('.store-pannel');

    $('.store__location li').click(function (event) {
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

$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > $('.flagship--apeach').offset().top) {
      $('.btn-top').fadeIn(400);
    } else {
      $('.btn-top').fadeOut(400);
    }

    if ($(this).scrollTop() > $('.store__finder').offset().top) {
      $('.btn_goto-finder').show();
    } else {
      $('.btn_goto-finder').hide();
    }

    if ($(this).scrollTop() > $('.btn-store-more').offset().top) {
      $('.btn_goto-finder').hide();
    }
  });

  $('.click-to-top .btn-top').click(function () {
    $('html, body').animate({ scrollTop: '0px' }, 2000);
    return false;
  });

  $('.back-to-finder .btn_goto-finder').click(function () {
    $('html, body').animate(
      { scrollTop: $('.store__finder').offset().top },
      2000
    );
    return false;
  });
});
