$(function() {
  var distance = $('.page-content').offset().top;

  $(window).scroll(function() {
    if($(window).scrollTop() > distance) {
      $('#header').slideUp("slow");
      $('#fixed-header').slideDown("slow");
    }
    else if($(window).scrollTop() == 0) {
      $('#fixed-header').slideUp("slow");
      $('#header').slideDown("slow");
    }
  });
});
