window.addEventListener('scroll', function () {
    var headerItem = document.getElementById('header-item');
    var coverWrapper = document.getElementById('coverWrapper');
    var appearingTitle = document.getElementById('appearing-title');
    if (window.pageYOffset > (coverWrapper.offsetTop + coverWrapper.offsetHeight - headerItem.offsetHeight - 40)) {
        appearingTitle.setAttribute('style', 'display: block');
        appearingTitle.setAttribute('style', 'position: fixed');
    } else {
        console.log('on');
        appearingTitle.setAttribute('style', 'display: none');
    }
});