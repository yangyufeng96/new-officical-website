$('.btnBox').mouseenter(function () {
  $(this).children().attr("style", "display:block;");
})
// $('.dropdown-menu').mouseenter(function () {
//   $(this).attr("style", "display:block;");
// })
// $('.dropdown-menu').mouseleave(function () {
//   $(this).attr("style", "display:none;");
// })
$('.btnBox').mouseleave(function () {
  $(this).children().eq(1).attr("style", "display:none;");
})

// 划入导航
