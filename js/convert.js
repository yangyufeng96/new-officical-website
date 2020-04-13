// (function(doc, win) {
// 	var docEl = doc.documentElement,
// 		resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
// 		recalc = function() {
// 			var clientWidth = docEl.clientWidth;
// 			if (!clientWidth) return;
// 			if (clientWidth >= 640) {
// 				docEl.style.fontSize = '100px';
// 			} else {
// 				docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
// 			}
// 		};

// 	if (!doc.addEventListener) return;
// 	win.addEventListener(resizeEvt, recalc, false);
// 	doc.addEventListener('DOMContentLoaded', recalc, false);
// })(document, window);
$(document).ready(function () {
	drop()
});
window.οnresize = function () {
	drop()
}
function drop() {
	if ($(window).width() > 768) {
		$('.btnBox').mouseover(function () {
			$(this).addClass('open')
		}).mouseout(function () {
			$(this).removeClass('open')
		})
	}
}
// 手机端导航点击
$('.dropdown').bind('click', function () {
	if ($(this).hasClass("open")) {
		$(this).children().eq(1).css("display", "none")
	} else {
		$(this).children().eq(1).css("display", "block")
	}
})
