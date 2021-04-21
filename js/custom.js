// Custom Function Start Here

$(function () {

  //  About Slider Jquery Code Start Here
  $('.about_slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
  //  About Slider Jquery Code End Here

  //  Our Skills ProgressBar Jquery Code Start Here
  $('#design').LineProgressbar({
    percentage: 90,
    radius: '2px',
    height: '12px',
    fillBackgroundColor: '#177bbb',
    backgroundColor: '#177cbb21'

  });
  $('#research').LineProgressbar({
    percentage: 80,
    radius: '2px',
    height: '12px',
    fillBackgroundColor: '#177bbb',
    backgroundColor: '#177cbb21'
  });
  $('#marketing').LineProgressbar({
    percentage: 70,
    radius: '2px',
    height: '12px',
    fillBackgroundColor: '#177bbb',
    backgroundColor: '#177cbb21'
  });
  $('#strategy').LineProgressbar({
    percentage: 80,
    radius: '2px',
    height: '12px',
    fillBackgroundColor: '#177bbb',
    backgroundColor: '#177cbb21'
  });
  //  Our Skills ProgressBar Jquery Code End Here

  //  Mixitup Jquery Code Start Here
  var containerEl = document.querySelector('.portfolio_slide');
  var mixer = mixitup(containerEl);
  //  Mixitup Jquery Code End Here

  //  Sticky Header Jquery Code Start Here
  $(window).scroll(function () {
    let scrolling = $(this).scrollTop();
    if (scrolling > 30) {
      $('.header').addClass('header-bg');
    } else {
      $('.header').removeClass('header-bg');
    }
  });
  //  Sticky Header Jquery Code End Here

  //  Common Jquery Code Start Here

  //  Common Jquery Code End Here

});
// Custom Function End Here