// 상품 불러오기
$(function () {
  var $container = $('.home-layout__list'),
    $addItemCount = 4,
    $added = 12,
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
        '<a href="javascript:void(0);" title="새창열림" target="_blank">' +
        '<div class="home-item__thumnail"> ' +
        ' <img src=" ' +
        item.thumnail +
        ' " alt=" ' +
        '탁상시계_고속무선충전_라이언' +
        '">' +
        ' </div> ' +
        ' <div class="home-item__info"> ' +
        ' <span class="item-tag">' +
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
        '<button type="button" class="item-pick">' +
        '<span class="offscreen">상품 찜하기</span>' +
        '</button>' +
        '</a>' +
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

// 별표시js
$(function () {
  var rating = $('.review .rating');
  rating.each(function () {
    var $this = $(this);
    var targetScore = $this.attr('data-rate');
    var firstdigit = targetScore.split('.');
    // $this.find(".star").css({ border: "1px solid black" });
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

  var condition =
    itemWrap.hasClass('original') ||
    itemWrap.hasClass('two') ||
    itemWrap.hasClass('list');

  $('.layout-button .original').click(function () {
    if (condition) {
      itemWrap.removeClass('two four list').addClass('original');
    }
    return false;
  });

  $('.layout-button .two').click(function () {
    if (condition) {
      itemWrap.removeClass('original four list').addClass('two');
    }
    return false;
  });

  $('.layout-button .four').click(function () {
    if (condition) {
      itemWrap.removeClass('original two list').addClass('four');
    }
    return false;
  });

  $('.layout-button .list').click(function () {
    if (condition) {
      itemWrap.removeClass('original two four').addClass('list');
    }
    return false;
  });
});
