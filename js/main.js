// main.js file
// Author: Andrew Narolskii
// Email: kickerwrk@gmail.com
// 2018


$(document).ready(function() {

  $("#owlone").owlCarousel({
    items: 1,
    loop: true,
    dots: false,
    nav: true,
    navText: ["<img src='img/prevarrow.png'>", "<img src='img/nextarrow.png'>"],
    mouseDrag: false,
    URLhashListener: true,
    merge: false
  });

  $("#owl2").owlCarousel({
    items: 1,
    loop: true,
    dots: false,
    nav: true,
    navText: ["<img src='img/prevarrow.png'>", "<img src='img/nextarrow.png'>"],
    mouseDrag: true,
    merge: false
  });

  $("#owlthree").owlCarousel({
    items: 1,
    loop: true,
    dots: false,
    nav: true,
    navText: ["<img src='img/prevarrow.png'>", "<img src='img/nextarrow.png'>"],
    mouseDrag: true,
    merge: false
  });

  $('a[href*=\\#]:not([href=\\#])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.selector == '#modality') return;
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top + 50
        }, 1000);
        return false;
      }
    }
  });
  // slide Changer
  $('a.prod').click(function() {
    var target = $("#buy");
    $('html,body').animate({
      scrollTop: target.offset().top +100
    }, 1000);


  });
  // Thumbs Changer
  $('.thumbs>div').click(function() {
    var th = this;
    if (!$(this).hasClass('activ')) {
      $(this).closest('.thumbs').find('div').removeClass('activ');
      var thisSrc = $(th).find('img').attr('src');
      $(th).closest('.buy__leftone').find('.main__img').fadeOut(500);
      $(th).addClass('activ');
      setTimeout(function() {
        $(th).closest('.buy__leftone').find('.main__img').fadeIn(500).attr('src', thisSrc);

      }, 500);
    }
  });

  // PopUp changer
  $('a[data-target="#modality"]').click(function() {
    var imgSrc = $('#owlone .active').find('.main__img').attr('src');
    var nameSrc = $('#owlone .active').find('.buy__header').text();
    $('#modality img').attr('src', imgSrc);
    $('#modality modal__text').text(nameSrc);


  });

if($(window).width() < 600) {
  $('.navbar-toggler').show();
  $('#navb1').addClass('collapse');
}


});
