// 헤더
// 카테고리 창 호버 및 변경
// 검색버튼박스
// 로그인 박스
$(function () {
  var category_pannel = false;
  var keyword_pannel = false;
  var login_pannel = false;
  var popular_pannel = false;

  // 헤더 카테고리 버튼 js
  // 텍스트 카테고리 하단 패널 js
  var category = function () {
    return function pannel() {
      $('.popular .slide_shortcut').hide();
      //카테고리 팝업 창
      var items = $('.category__oneDepth > li');

      //선택한 아이템의 인덱스
      var i = items.index($(this));
      // 현재 선택한 인덱스

      if ($(this).index() === i) {
        unSelected();
        $(this).children('.category__twoDepth').show().addClass('on');
        $(this).children('a').css('font-weight', 'bold');
      }

      function unSelected() {
        items.children('.category__twoDepth ').removeClass('on').hide();
        items.children('a').css('font-weight', 'normal');
        var result;
        result = items
          .children('category__twoDepth')
          .find('a')
          .css('font-weight', 'bold');
      }
    };
  };

  // 검색패널
  function keyword() {
    $('.gnb__finder').click(function () {
      var $slider = $(this).parents().find('.slider-wrap');
      if (category_pannel == true) {
        return;
      }
      keyword_pannel = true;
      $('.gnb__userData').hide();
      $('.popular .slide_shortcut').hide();
      $slider.css('margin-top', '147px');

      $('.search-keyword').stop().slideDown('fast');
      $('#totSearchkeyword').focus();
    });

    $('.search-keyword__keyword-list li').click(function () {
      var keyword = $(this).find('.frequent').text();
      $('#totSearchkeyword').val(keyword);
      $('.search-keyword__btn-search').focus();
    });

    $('.search-keyword .search-keyword__btn-cancel').click(function () {
      var $slider = $(this).parents().find('.slider-wrap');
      keyword_pannel = false;
      $('.search-keyword').stop().slideUp(500);
      $slider.css('margin-top', '0');
      $('.gnb__finder').focus();
    });
  }

  keyword();

  // 로그인 패널
  $('.gnb-right .gnb__login').mouseover(function () {
    if (keyword_pannel == true || category_pannel == true) {
      $('.gnb__userData').hide();
      return;
    }
    $('.gnb__userData').show();
    login_pannel = true;
  });

  $('.gnb__userData').mouseleave(function () {
    $('.gnb__userData').hide();
    login_pannel = false;
  });

  // 카테고리 팝업창 뜨고 없애기
  $('.gnb-left .category__btn').mouseover(function () {
    if (keyword_pannel == true) {
      return;
    }
    category_pannel = true;
    $('.category').show();
  });
  $('.category').mouseleave(function () {
    category_pannel = false;
    $('.category').hide();
  });

  $('.category__oneDepth > li').on('mouseover', category());

  // 카카오 캐릭터 마우스 호버시 이미지 사진 변경
  $('.category__adv li > a > img').hover(
    function () {
      $(this).attr('src', $(this).attr('src').replace('.png', '_checked.png'));
      $(this).parent().css('font-weight', 'bold');
    },
    function () {
      $(this).attr('src', $(this).attr('src').replace('_checked.png', '.png'));
      $(this).parent().css('font-weight', 'normal');
    }
  );

  // footer
  var familyBtn = $('.contact__familySite > button');
  familyBtn.click(function () {
    $('.contact__familySite ul').toggle();
    return false;
  });
});

// 헤더
// 자동슬라이더
$(function () {
  var position = 0; //최초위치
  var movesize = 18; //이미지 하나의 너비, 이동 폭
  var timeonoff;
  // 자동 넘어가기
  function moveNitice() {
    position -= movesize; // 17씩 감소
    $('.popular .slide')
      .stop()
      .animate({ top: position }, 'slow', function () {
        if (position == -90) {
          $('.slide').css('top', 0);
          position = 0;
        }
      });
  }

  timeonoff = setInterval(moveNitice, 3000);
  $('.popular .slide ul').after($('.popular .slide ul').clone()); // a의 뒤에 b를 복사해서 넣기
  //슬라이드 겔러리를 한번 복제
  $('.slide ul').hover(
    function () {
      clearInterval(timeonoff);
    },
    function () {
      timeonoff = setInterval(moveNitice, 1000);
    }
  );

  $('.popular .slide_start').click(function () {
    timeonoff = setInterval(moveNitice, 3000);
    return false;
  });
  $('.popular .slide_stop').click(function () {
    clearInterval(timeonoff);
    return false;
  });

  // 인기상품 배너
  $('.popular .popular_title').mouseover(function () {
    $('.popular .slide_shortcut').show();
    $('.gnb__userData').hide();
    return false;
  });

  $('.popular .slide_shortcut').mouseleave(function () {
    $('.popular .slide_shortcut').hide();
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
