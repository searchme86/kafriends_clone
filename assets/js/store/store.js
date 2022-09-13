// 슬라이더
$(function () {
  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    adaptiveHeight: true,
    infinite: true,
    variableWidth: true,
    centerMode: true,
  });
});

// click to top
$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > $('.flagship--apeach').offset().top) {
      $('.btn-top').fadeIn(400);
    } else {
      $('.btn-top').fadeOut(400);
    }

    if ($(this).scrollTop() > $('.store__finder').offset().top) {
      $('.btn_goto-finder').fadeIn(400);
    } else {
      $('.btn_goto-finder').fadeOut(400);
    }

    if ($(this).scrollTop() > $('.store__adv').offset().top) {
      $('.btn_goto-finder').fadeOut(400);
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

// 메뉴탭 js
$(document).ready(function () {
  // [동작 - 버튼] local 버튼 클릭시 ul이 보이고 않보이게 설정
  $('.store__location button').click(function () {
    $(this).next().toggle();
  });
  // [동작 - 버튼] japan 버튼 클릭시 ul이 보이고 않보이게 설정
  $('.store__location--japan button').click(function () {
    $(this).next().toggle();
  });

  // [동작 - 버튼 내 ul> li] 버튼 클릭 시 해당 인덱스 배경화면
  $('.store__location li').click(function () {
    $(this).css('background', '#f7f7f7');
    $(this).css('color', '#000');
    $(this).prevAll().find('img').remove();
    $(this).nextAll().find('img').remove();
    $(this).prevAll().css('background', 'white');
    $(this).nextAll().css('background', 'white');
  });

  // [동작 - 버튼 내 ul> li] 해당 인덱스에 체크드 이미지 추가
  $('.store__location li').click(function () {
    var clicked = $(this).text();
    var idx = $(this).index(this);

    $(this).parents().find('.store__location button').text(clicked);
    $(this).eq(idx).css('background', '#f7f7f7');
    $(this).prevAll().find('img').remove();
    $(this).nextAll().find('img').remove();

    $(this)
      .eq(idx)
      .append(
        "<img src='../assets/img/pages/store/this.png' style='position:absolute; top:16px;right:18px;' alt='현재선택 이미지'>"
      );
    $(this).closest('ul').toggle();
  });

  // [동작 - 탭(스토어 전체/한국/일본)] 탭(스토어 전체, 한국, 일본) 클릭시 아래 아이템 변경
  $('.store__tab li').click(function () {
    // [핵심] 기존에 클릭된 아이템들을 삭제해 상태를 초기화함
    for (var i = 0; i < $('.store__area').children().length; i++) {
      if ($('.store__area').children().eq(i).css('visibility', 'visible')) {
        $('.store__area').children().eq(i).hide();
      }
    }

    var local = $('.local > ul > li ').children();
    var localSize = $('.local > ul > li ').children().length;

    var idx = $(this).index();
    var tab_Items_idx = $('.store__area').children().eq(idx).index();

    if (idx == 1 && tab_Items_idx == 1) {
      $('.store__location').show();
    } else {
      $('.store__location').hide();
    }

    if (idx == 2 && tab_Items_idx == 2) {
      $('.store__location--japan').show();
    } else {
      $('.store__location--japan').hide();
    }

    // [핵심]클릭한 탭의 인덱스에 따라 보여질 컨텐츠 체크
    if (idx === tab_Items_idx) {
      $('.store__area').children().eq(idx).show();
      $('.store__area')
        .children()
        .eq(idx - 1)
        .hide();
    } else {
      $('.store__area').children().eq(idx).hide();
    }
  });

  // 메뉴버튼 클릭하면 지역 인덱스에 맞게 컨텐츠 보이게 하기
  // 오른쪽 상단 버튼 부분
  $('.store__location li').click(function () {
    // global은 default 임으로 .local을 control함
    $('.local > ul >li').css('display', 'none');
    var idx = $(this).index();
    $('.local > ul >li').css({
      'margin-right': '0',
      'margin-left': '10px',
    });

    var all = [
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
    ];
    var seoul = [1, 2, 5, 6, 8, 10, 11, 12, 13, 14, 16, 18, 20, 33];
    var kyunggi = [3, 9, 15, 21, 23, 26, 27, 28, 29];
    var inchon = [0, 32];
    var daegu = [7, 19];
    var daejeon = [24];
    var pusan = [4, 17, 34];
    var jeju = [22, 25, 31];
    var jeonju = [30];

    var menu = {
      0: all,
      1: seoul,
      2: kyunggi,
      3: inchon,
      4: daegu,
      5: daejeon,
      6: pusan,
      7: jeju,
      8: jeonju,
    };
    var current = menu[idx];

    $.each(current, function (i, item) {
      $('.local>ul>li').eq(item).css('display', 'block');
    });

    return false;
  });
});
