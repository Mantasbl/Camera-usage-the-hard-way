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
        $("#hiragana-content").css("display", "grid");
    }
};

function katakanaSwitch() {
    if ($("#hiragana-content").css("display") != "none") {
        $("#hiragana-content").css("display", "none");
        $("#katakana-content").css("display", "grid");
    }
};

var arrayEnglishSounds =  ['A','I','U','E','O','Ka','Ki','Ku','Ke','Ko','Sa','Shi','Su','Se','So','Ta','Chi','Tsu','Te','To','Na','Ni','Nu','Ne','No']
var arrayJapaneseHiraganaSounds = ['あ','い','う','え','お','か','き','く','け','こ','さ','し','す','せ','そ','た','ち','つ','て','と','な','に','ぬ','ね','の']

for (i = 0; i < arrayEnglishSounds.length; i++) {
    $('<div class="learn-sound hiragana' + i + '"' + '/>').appendTo('#hiragana-content');
    $('<h3 class="learn-sound-hiragana-japanese" />').text(arrayJapaneseHiraganaSounds[i]).appendTo('.hiragana' + i);
    $('<p class="learn-sound-english" />').text(arrayEnglishSounds[i]).appendTo('.hiragana' + i);
}