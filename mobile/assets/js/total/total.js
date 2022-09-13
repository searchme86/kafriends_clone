$(function () {
  var $container = $('.home-layout__list'),
    $addItemCount = 4,
    $added = 0,
    $allData = [],
    $winTop,
    $onTop,
    $slicedData = [],
    $elements = [];

  $.getJSON('../assets/data/all.json', initGallery);

  function initGallery(data) {
    $allData = data;
  }

  function addItem() {
    $slicedData = $allData.slice($added, $added + $addItemCount);

    $.each($slicedData, function (idx, item) {
      var itemHtml =
        '<li class="home-item">' +
        '<a href="blank.html"><div class="home-item__thumnail"><img src=" ' +
        item.thumnail +
        '"alt="' +
        item.alt +
        '"></div><div class="home-item__info"><span class="item-tag">' +
        item.tag +
        '</span>' +
        ' <strong class="item-title">' +
        item.title +
        '</strong>' +
        ' <span class="item-category">' +
        item.category +
        ' </span> ' +
        ' <span class="item-price">' +
        item.price +
        '<span class="price-unit">원</span></span>' +
        ' <div class="review">' +
        ' <div class="rating" data-rate="' +
        item.rating +
        '">' +
        '<div class="star-wrap"><div class="star"><i class="fas fa-star"></i></div></div>' +
        '<div class="star-wrap"><div class="star"><i class="fas fa-star"></i></div></div>' +
        '<div class="star-wrap"><div class="star"><i class="fas fa-star"></i></div></div>' +
        '<div class="star-wrap"><div class="star"><i class="fas fa-star"></i></div></div>' +
        '<div class="star-wrap"><div class="star"><i class="fas fa-star"></i></div></div>' +
        '</div>' +
        '<span class="voter">(<span>' +
        item.voter +
        '</span>명)</span>' +
        '</div>' +
        '</div>' +
        '</a>' +
        '<button type="button" class="item-pick">' +
        '<span class="offscreen">상품 찜하기</span>' +
        '</button>' +
        '</li>';

      $elements.push($(itemHtml).get(0));
      $container.append($elements);
      return $slicedData;
    });
  }

  function listCall() {
    $winTop = $(window).scrollTop();
    $onTop = $(document).height() - $(window).height() - $('.footer').height();

    if ($winTop >= $onTop) {
      if ($added > $allData.length) {
        return;
      } else if ($added < $allData.length) {
        addItem();
        $added += $slicedData.length;
      }
    }
  }
  $(window).scroll(function () {
    listCall();
  });
});

$(function () {
  var rating = $('.review .rating');
  rating.each(function () {
    var $this = $(this);
    var targetScore = $this.attr('data-rate');
    var firstdigit = targetScore.split('.');
    for (var i = 0; i < firstdigit[0]; i++) {
      $this.find('.star').eq(i).css({ width: '100%' });
    }
    $this
      .find('.star')
      .eq(firstdigit[0])
      .css({ width: firstdigit[1] + '0%' });
  });
});

// 홈 아이템 레이아웃 변경 js
$(function () {
  var itemWrap = $('.home-layout').children();
  var condition = itemWrap.hasClass('original') || itemWrap.hasClass('list');
  $('.layout-button .original').click(function () {
    if (condition) {
      itemWrap.removeClass('four list').addClass('original');
    }
    return false;
  });

  $('.layout-button .four').click(function () {
    if (condition) {
      itemWrap.removeClass('original list').addClass('four');
    }
    return false;
  });

  $('.layout-button .list').click(function () {
    if (condition) {
      itemWrap.removeClass('original four').addClass('list');
    }
    return false;
  });
});

// 페이지상단 js
$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
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
