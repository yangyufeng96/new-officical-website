$('.btnBox').mouseenter(function () {
  $(this).children().attr("style", "display:block;");
})
$('.btnBox').mouseleave(function () {
  $(this).children().eq(1).attr("style", "display:none;");
})

window.onload = function () {
  var arr = $('.dropdown').find('a')
  var selId = ''
  for (var index = 0; index < arr.length; index++) {
    const element = arr[index];
    const ele = element.href.split('/');
    const newele = '/' + ele[ele.length - 1];
    if (newele == window.location.pathname) {
      selId = index;
    }
  }
  $('.dropdown').find('a').removeClass('navActive');
  $('.dropdown').find('a').eq(selId).addClass('navActive');

  var arrf = $('.footer-down').find('a')
  var selIdf = ''
  for (var indexf = 0; indexf < arrf.length; indexf++) {
    const elementf = arrf[indexf];
    const elef = elementf.href.split('/');
    const newelef = '/' + elef[elef.length - 1];
    if (newelef == window.location.pathname) {
      selIdf = indexf;
    }
  }
  $('.footer-down').find('a').find('li').removeClass('li-active');
  $('.footer-down').find('a').eq(selIdf).children('li').addClass('li-active');
}

