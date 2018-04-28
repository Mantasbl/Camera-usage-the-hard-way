var arrayEnglishSounds =  ['A','I','U','E','O','Ka','Ki','Ku','Ke','Ko','Sa','Shi','Su','Se','So','Ta','Chi','Tsu','Te','To','Na','Ni','Nu','Ne','No'];
var arrayJapaneseHiraganaSounds = ['あ','い','う','え','お','か','き','く','け','こ','さ','し','す','せ','そ','た','ち','つ','て','と','な','に','ぬ','ね','の'];
var arrayJapaneseKatakanaSounds = ['ア','イ','ウ','エ','オ','カ','キ','ク','ケ','コ','サ','シ','ス','セ','ソ','タ','チ','ツ','テ','ト','ナ','ニ','ヌ','ネ','ノ'];

var match2Selections = arrayEnglishSounds.slice(0, 8).concat(arrayJapaneseHiraganaSounds.slice(0, 8));
shuffle(match2Selections);
for (var i=0; i < 16; i++) {
    $('<div class="match2-tiles match2-tile' + i + '"' + '/>').appendTo('#match2-board');
    $('<h3 class="match2-values match2-value' + i + '"' + '/>').text(match2Selections[i]).appendTo('.match2-tile' + i);
}

var allTiles = document.querySelectorAll('.match2-tiles');


for (var i=0; i < 16; i++) {
    allTiles[i].addEventListener('click', onTileClick, false);
}

// Modern version of the Fisher–Yates shuffle algorithm
// https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

function onTileClick() {
    $(this).children("h3").css('color', 'black');
}
