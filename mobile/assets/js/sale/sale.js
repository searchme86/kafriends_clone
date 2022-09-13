$(function () {
  $('.size-big').click(function () {
    $(this).toggleClass('on');
    $('.layout li').removeClass('on');
    $('.layout li').find('button').css({
      right: '4px',
      bottom: '8px',
    });
    $('.size-small .unit').removeClass('on');
    $('.size-small .unit').find('button').css({
      right: '-2px',
      bottom: '8px',
    });
  });
  $('.size-small .unit').click(function () {
    $('.size-big').removeClass('on');
    $('.layout li').removeClass('on');
    $('.layout li').find('button').css({
      right: '4px',
      bottom: '8px',
    });
    $(this).toggleClass('on');
    $(this).find('button').css({
      right: '-2px',
      bottom: '23px',
    });
    $(this).siblings().removeClass('on');
  });
  $('.layout li').click(function () {
    $('.layout li').siblings().removeClass('on');
    $('.size-small .unit').removeClass('on');
    $('.size-small .unit').find('button').css({
      right: '-2px',
      bottom: '8px',
    });
    $('.size-big').removeClass('on');
    $(this).addClass('on');
    $(this).find('button').css({
      right: '-2px',
      bottom: '22px',
    });
  });
});

$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > $('.layout').offset().top) {
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

$(function () {
  var rating = $('.review .rating');
  rating.each(function () {
    var $this = $(this);
    var targetScore = $this.attr('data-rate');
    var firstdigit = targetScore.split('.');
    for (var i = 0; i < firstdigit[0]; i++) {
      $this.find('.star').eq(i).css({ width: '100%' });
    }
    $(this)
      .find('.star')
      .eq(firstdigit[0])
      .css({ width: firstdigit[1] + '0%' });
  });
});
