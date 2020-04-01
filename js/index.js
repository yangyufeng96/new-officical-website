$(document).ready(function () {
  windowDom()
  var mySwiper = new Swiper('#case-show', {
    // autoplay: 5000,//可选选项，自动滑动
    // loop:true
  })
})
// 移动端自动轮播
function windowDom() {
  var d = 0;
  var c = 0
  var timer;
  $('.lunbo-one').eq(0).show().siblings('.lunbo-one').hide();
  $('.card-content2').eq(0).show().siblings('.card-content2').hide();
  var timed = null
  var cardLunbo = null
  //创建一个showTime函数
  function showTime() {
    c++;
    if (c == 2) {
      c = 0;
    }
    for (var i = 0; i < $('.lunbo-one').length; i++) {
      $('.lunbo-one').eq(i).hide()
      $('.dotLi').eq(i).removeClass('dotActice')
    }
    $('.lunbo-one').eq(c).show()
    $('.dotLi').eq(c).addClass('dotActice')
  }
  timed = setInterval(showTime, 2000)

  function cardTime() {
    d++;
    if (d == 3) {
      d = 0;
    }
    for (var i = 0; i < $('.card-content2').length; i++) {
      $('.card-content2').eq(i).hide()
      $('.card-li ul li').eq(i).removeClass('dotActice')
    }
    $('.card-content2').eq(d).show()
    $('.card-li ul li').eq(d).addClass('dotActice')
  }
  cardLunbo = setInterval(cardTime, 2000)
}