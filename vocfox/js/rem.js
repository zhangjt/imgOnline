// rem自适应设置
var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
var reCalc = function() {
    //设置根字体大小
    var docEl = document.documentElement;
    docEl.style.fontSize = 20 * (docEl.clientWidth / 375) + 'px';

}
document.addEventListener("DOMContentLoaded", function() {
    reCalc();
}, false)

window.addEventListener(resizeEvt, reCalc, false);