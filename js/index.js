var homeImages = document.querySelectorAll('.main-buttons');

for (var i=0; i<homeImages.length; i++) {
    homeImages[i].addEventListener('click', btnAnimation, false);
}

function btnAnimation() {
        $(this).animate({width: '103%', opacity: '0.4'}, "fast");
        $(this).animate({width: '100%', opacity: '1'}, "fast");
    }