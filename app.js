var lastScrollTop = 0;

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});

    var divContent = document.getElementById('divContent');
    divContent.addEventListener('scroll', handleScroll);
});

function handleScroll() {
    var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    if (st > lastScrollTop) {
        // downscroll code
        console.log('scroll down');
    } else if (st < lastScrollTop) {
        // upscroll code
        console.log('scroll up');
    } // else was horizontal scroll
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}
