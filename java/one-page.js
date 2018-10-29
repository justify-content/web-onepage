// 網頁被捲動的長度到達一定才會顯示backtotop圖示
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
        document.getElementById("backtotop").style.display = "block";
    } else {
        document.getElementById("backtotop").style.display = "none";
    }
}
//靠click事件回到頂端
var backtotop = document.querySelector("#backtotop");
backtotop.onclick = function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
//滾輪向下nav2消失   向上nav出現
var nav = document.querySelector("#navbar2-container")
        var lastScrollTop = 0;
        window.onload = function () {

            // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
            window.addEventListener("scroll", function () { // or window.addEventListener("scroll"....
                var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
                if (st > lastScrollTop) {
                    // downscroll code
                    nav.style.display = ("block");
                } else {
                    // upscroll code
                    nav.style.display = ("none");

                }
                lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
            }, false);
        }
        