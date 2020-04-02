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
// 导航点击时的变化
$('.dropdown-toggle').bind('click', function () {
	if ($(this).find('span').is('.glyphicon-menu-down') == true) {
		$(this).find('span').removeClass('glyphicon-menu-down')
		$(this).find('span').addClass('glyphicon-menu-up')
		$(this).find('span').css('color', '#1890FF')
	} else {
		$(this).find('span').removeClass('glyphicon-menu-up')
		$(this).find('span').addClass('glyphicon-menu-down')
		$(this).find('span').css('color', '#000000')
	}
})
