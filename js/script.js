console.log('It works!');

$('.burger').click(function () {
  $(this).toggleClass('active');
  $('.nav').toggleClass('active');
});

$('.popup').click(function () {
  $('.popup-wrapper').addClass('active');
})

$('.popup-window .close, .popup-wrapper').click(function (event) {
  if (event.target === this) {
    $('.popup-wrapper').removeClass('active');
  }
})