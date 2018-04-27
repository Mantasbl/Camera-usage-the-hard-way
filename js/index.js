var homeImages = document.querySelectorAll('.main-buttons');

for (var i=0; i<homeImages.length; i++) {
    homeImages[i].addEventListener('click', btnAnimation, false);
}

function btnAnimation() {
        $(this).animate({opacity: '0.4'}, "fast");
        $(this).animate({opacity: '1'}, "fast");
    }


// Nav bar, for switching between Hiragana and Katakana
document.getElementById("hiragana-switch").addEventListener("click",hiraganaSwitch, false);
document.getElementById("katakana-switch").addEventListener("click",katakanaSwitch, false);


function hiraganaSwitch() {
    if ($("#katakana-content").css("display") != "none") {
        $("#katakana-content").css("display", "none");
        $("#hiragana-content").css("display", "block");
    }
};

function katakanaSwitch() {
    if ($("#hiragana-content").css("display") != "none") {
        $("#hiragana-content").css("display", "none");
        $("#katakana-content").css("display", "block");
    }
};

