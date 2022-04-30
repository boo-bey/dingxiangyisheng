(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWith = docEl.clientWidth;
            if (!clientWith) return;
            if (clientWith >= 750) { //宽度》750，平板或者是pc
                docEl.style.fontSize = '100px' //根元素
            } else {
                docEl.style.fontSize = (clientWith / 750) * 100 + 'px';
            }
        };
    if (!doc.activeElement) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false)
})(document, window)