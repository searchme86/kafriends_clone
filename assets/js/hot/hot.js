$(function () {
  var $container = $('.hot__living-list'),
    $loadMoreBtn = $('.hot__more'),
    $addItemCount = 4,
    $added = 0,
    $allData = [];

  $.getJSON('../assets/data/living.json', initGallery);

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
        '<a href="../components/blank.html">' +
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
  var $container = $('.hot__mix-list'),
    $loadMoreBtn = $('.mix__more'),
    $addItemCount = 4,
    $added = 0,
    $allData = [];

  $.getJSON('../assets/data/mix.json', initGallery);

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
        '<a href="../components/blank.html">' +
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
  var $container = $('.hot__fancy-list'),
    $loadMoreBtn = $('.fancy__more'),
    $addItemCount = 4,
    $added = 0,
    $allData = [];

  $.getJSON('../assets/data/fancy.json', initGallery);

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
        '<a href="../components/blank.html">' +
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
  var $container = $('.hot__toy-list'),
    $loadMoreBtn = $('.toy__more'),
    $addItemCount = 4,
    $added = 0,
    $allData = [];

  $.getJSON('../assets/data/toy.json', initGallery);

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
        '<a href="../components/blank.html">' +
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
  var $container = $('.hot__tech-list'),
    $loadMoreBtn = $('.tech__more'),
    $addItemCount = 4,
    $added = 0,
    $allData = [];

  $.getJSON('../assets/data/tech.json', initGallery);

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
        '<a href="../components/blank.html">' +
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
  var $container = $('.hot__theme-list'),
    $loadMoreBtn = $('.theme__more'),
    $addItemCount = 4,
    $added = 0,
    $allData = [];

  $.getJSON('../assets/data/theme.json', initGallery);

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
        '<a href="../components/blank.html">' +
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
