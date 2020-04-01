$('.btn-box').mouseenter(function () {
  $(this).siblings().attr("style", "display:block;");
})
$('.dropdown-menu').mouseenter(function () {
  $(this).attr("style", "display:block;");
})
$('.dropdown-menu').mouseleave(function () {
  $(this).attr("style", "display:none;");
})
$('.btn-box').mouseleave(function () {
  $(this).siblings().attr("style", "display:none;");
})

// 划入导航
