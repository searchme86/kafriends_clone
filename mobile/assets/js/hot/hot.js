$(function () {
  var $container = $('.living-list'),
    $loadMoreBtn = $('.hot__more'),
    $addItemCount = 4,
    $added = 0,
    $allData = [];

  $.getJSON('/assets/data/living.json', initGallery);

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
        '<li class="section__item">' +
        '<a href="blank.html">' +
        '<div class="section__item-thumnail">' +
        '<img src="' +
        item.thumnail +
        '" alt="' +
        item.title +
        '">' +
        ' </div>' +
        '<div class="section__item-info">' +
        '<span class="section__item-rank">' +
        item.rank +
        '</span> ' +
        '<strong class="section__item-title">' +
        item.title +
        '</strong>' +
        '<span class="section__item-price">' +
        item.price.original +
        '<span class="price-unit">원</span></span>' +
        '</div>' +
        '</a>' +
        '</li>';

      elements.push($(itemHtml).get(0));
    });

    $container.append(elements);
    $added += slicedData.length;

    if ($added < $allData.length) {
      $loadMoreBtn.show();
    } else {
      $loadMoreBtn.hide();
    }
  }
});

$(function () {
  var $container = $('.mix-list'),
    $loadMoreBtn = $('.mix__more'),
    $addItemCount = 4,
    $added = 0,
    $allData = [];

  $.getJSON('/assets/data/mix.json', initGallery);

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
        '<li class="section__item">' +
        '<a href="blank.html">' +
        '<div class="section__item-thumnail">' +
        '<img src="' +
        item.thumnail +
        '" alt="' +
        item.title +
        '">' +
        ' </div>' +
        '<div class="section__item-info">' +
        '<span class="section__item-rank">' +
        item.rank +
        '</span> ' +
        '<strong class="section__item-title">' +
        item.title +
        '</strong>' +
        '<span class="section__item-price">' +
        item.price.original +
        '<span class="price-unit">원</span></span>' +
        '</div>' +
        '</a>' +
        '</li>';

      elements.push($(itemHtml).get(0));
    });

    $container.append(elements);
    $added += slicedData.length;

    if ($added < $allData.length) {
      $loadMoreBtn.show();
    } else {
      $loadMoreBtn.hide();
    }
  }
});

$(function () {
  var $container = $('.fancy-list'),
    $loadMoreBtn = $('.fancy__more'),
    $addItemCount = 4,
    $added = 0,
    $allData = [];

  $.getJSON('/assets/data/fancy.json', initGallery);

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
        '<li class="section__item">' +
        '<a href="blank.html">' +
        '<div class="section__item-thumnail">' +
        '<img src="' +
        item.thumnail +
        '" alt="' +
        item.title +
        '">' +
        ' </div>' +
        '<div class="section__item-info">' +
        '<span class="section__item-rank">' +
        item.rank +
        '</span> ' +
        '<strong class="section__item-title">' +
        item.title +
        '</strong>' +
        '<span class="section__item-price">' +
        item.price.original +
        '<span class="price-unit">원</span></span>' +
        '</div>' +
        '</a>' +
        '</li>';

      elements.push($(itemHtml).get(0));
    });

    $container.append(elements);
    $added += slicedData.length;

    if ($added < $allData.length) {
      $loadMoreBtn.show();
    } else {
      $loadMoreBtn.hide();
    }
  }
});

$(function () {
  var $container = $('.toy-list'),
    $loadMoreBtn = $('.toy__more'),
    $addItemCount = 4,
    $added = 0,
    $allData = [];

  $.getJSON('/assets/data/toy.json', initGallery);

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
        '<li class="section__item">' +
        '<a href="blank.html">' +
        '<div class="section__item-thumnail">' +
        '<img src="' +
        item.thumnail +
        '" alt="' +
        item.title +
        '">' +
        ' </div>' +
        '<div class="section__item-info">' +
        '<span class="section__item-rank">' +
        item.rank +
        '</span> ' +
        '<strong class="section__item-title">' +
        item.title +
        '</strong>' +
        '<span class="section__item-price">' +
        item.price.original +
        '<span class="price-unit">원</span></span>' +
        '</div>' +
        '</a>' +
        '</li>';

      elements.push($(itemHtml).get(0));
    });

    $container.append(elements);
    $added += slicedData.length;

    if ($added < $allData.length) {
      $loadMoreBtn.show();
    } else {
      $loadMoreBtn.hide();
    }
  }
});

$(function () {
  var $container = $('.tech-list'),
    $loadMoreBtn = $('.tech__more'),
    $addItemCount = 4,
    $added = 0,
    $allData = [];

  $.getJSON('/assets/data/tech.json', initGallery);

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
        '<li class="section__item">' +
        '<a href="blank.html"> <div class="section__item-thumnail">' +
        '<img src="' +
        item.thumnail +
        '" alt="' +
        item.title +
        '">' +
        ' </div>' +
        '<div class="section__item-info">' +
        '<span class="section__item-rank">' +
        item.rank +
        '</span> ' +
        '<strong class="section__item-title">' +
        item.title +
        '</strong>' +
        '<span class="section__item-price">' +
        item.price.original +
        '<span class="price-unit">원</span></span>' +
        '</div>' +
        '</a>' +
        '</li>';

      elements.push($(itemHtml).get(0));
    });

    $container.append(elements);
    $added += slicedData.length;

    if ($added < $allData.length) {
      $loadMoreBtn.show();
    } else {
      $loadMoreBtn.hide();
    }
  }
});

$(function () {
  var $container = $('.theme-list'),
    $loadMoreBtn = $('.theme__more'),
    $addItemCount = 4,
    $added = 0,
    $allData = [];

  $.getJSON('/assets/data/theme.json', initGallery);

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
        '<li class="section__item">' +
        '<a href="blank.html"> <div class="section__item-thumnail">' +
        '<img src="' +
        item.thumnail +
        '" alt="' +
        item.title +
        '">' +
        ' </div>' +
        '<div class="section__item-info">' +
        '<span class="section__item-rank">' +
        item.rank +
        '</span> ' +
        '<strong class="section__item-title">' +
        item.title +
        '</strong>' +
        '<span class="section__item-price">' +
        item.price.original +
        '<span class="price-unit">원</span></span>' +
        '</div>' +
        '</a>' +
        '</li>';

      elements.push($(itemHtml).get(0));
    });

    $container.append(elements);
    $added += slicedData.length;

    if ($added < $allData.length) {
      $loadMoreBtn.show();
    } else {
      $loadMoreBtn.hide();
    }
  }
});

$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > $('.content__inner').offset().top) {
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
