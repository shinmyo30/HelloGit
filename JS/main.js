$(function(){
    var bartop = $('#fixed_top');
    var pagetop = $('#page_top');
    // 1.バー非表示
    bartop.hide();
    // 2.ボタン非表示
    pagetop.hide();
    // 1.バー非表示  200px スクロールしたら
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            bartop.fadeIn();
        } else {
            bartop.fadeOut();
        }
     });

    // 2.ボタン表示  200px スクロールしたら
    $(window).scroll(function () {
       if ($(this).scrollTop() > 200) {
            pagetop.fadeIn();
       } else {
            pagetop.fadeOut();
       }
    });
    pagetop.click(function () {
       $('body, html').animate({ scrollTop: 0 }, 500);
       return false;
    });
  });