var homeImages = document.querySelectorAll('.main-buttons');

for (var i=0; i<homeImages.length; i++) {
    homeImages[i].addEventListener('click', btnAnimation, false);
}

function btnAnimation() {
        $(this).animate({opacity: '0.4'}, "fast");
        $(this).animate({opacity: '1'}, "fast");
    }