var arrayEnglishSounds =  ['A','I','U','E','O','Ka','Ki','Ku','Ke','Ko','Sa','Shi','Su','Se','So','Ta','Chi','Tsu','Te','To','Na','Ni','Nu','Ne','No'];
var arrayJapaneseHiraganaSounds = ['あ','い','う','え','お','か','き','く','け','こ','さ','し','す','せ','そ','た','ち','つ','て','と','な','に','ぬ','ね','の'];
var arrayJapaneseKatakanaSounds = ['ア','イ','ウ','エ','オ','カ','キ','ク','ケ','コ','サ','シ','ス','セ','ソ','タ','チ','ツ','テ','ト','ナ','ニ','ヌ','ネ','ノ'];

// We take 8 of each array, to create 8 card matches on a total of 16 card grid.
var cutEnglishArray = arrayEnglishSounds.slice(0, 8);
var cutJapaneseArray = arrayJapaneseHiraganaSounds.slice(0, 8);

var memoryFlippedCards = [];
var turn1 = [];
var turn2 = [];
var tilesFlipped = 0;

//Creating a board of 8 EN sounds and 8 JAP sounds
for (var i=0; i < 8; i++) {
    $('<div class="match2-tiles match2-tile' + i + '"' + '/>').appendTo('#match2-board');
    $('<h3 class="match2-values" id="match2-value' + i + '"' + '/>').text(cutEnglishArray[i]).appendTo('.match2-tile' + i);
}

for (var i=0; i < 8; i++) {
    $('<div class="match2-tiles match2-tile' + (i + 8) + '"' + '/>').appendTo('#match2-board');
    $('<h3 class="match2-values" id="match2-value' + i + '"' + '/>').text(cutJapaneseArray[i]).appendTo('.match2-tile' + (i + 8));
}

//Shuffles the Grid of cards
function shuffle_letters() {
    var parent = $("#match2-board");

    var children = parent.children();

    while (children.length) {
        parent.append(children.splice(Math.floor(Math.random() * children.length), 1));
    }
}

var allTiles = document.querySelectorAll('.match2-values');

for (var i=0; i < 16; i++) {
    allTiles[i].addEventListener('click', idk, false);
}
// Plan was to make the board reset once tilesFlipped are equal to 16 (max board size)
function newBoard() {
var tilesFlipped = 0;
}
// The mess of a functionality that was supposed to "flip" the cards and deal with their matching
function idk() {
    var tile_color = $(this).css('color');

    console.log(tile_color);
    if (tile_color == "rgb(255, 255, 255)" && memoryFlippedCards.length < 2) {
        var tile = $(this);
        tile.css('color', 'black');
        if (memoryFlippedCards.length == 0) {
            //Pushes the text value of clicked Tile into an array
            memoryFlippedCards.push(tile.text());
            //Get the ID of the element clicked and stores it, so it could be changed "flipped" back in case it doesnt match
            turn1.push(tile.attr('id'));
        } else if (memoryFlippedCards.length == 1) {
            memoryFlippedCards.push(tile.text());
            turn2.push(tile.attr('id'));
            var ea1 = cutEnglishArray.indexOf(memoryFlippedCards[0]);
            var ja1 = cutJapaneseArray.indexOf(memoryFlippedCards[1]);
            var ea2 = cutEnglishArray.indexOf(memoryFlippedCards[1]);
            var ja2 = cutJapaneseArray.indexOf(memoryFlippedCards[0]);
            //Using the array with values stored previously and checks its values against the 2 arrays that hold EN and JAP sounds
                if ( ea1 > 0 && ea1 == ja1 || ea2 > 0 && ea2 == ja2 ) {
                    // Adds 2 to the tiles counter
                    tilesFlipped += 2;
                    turn1 = [];
                    turn2 = [];
                    memoryFlippedCards = [];
                    console.log(tilesFlipped);
                //This section should deal with tiles IF they dont match. Doesnt work properly, cant find the problem probably the sequence of processes is wrong
                } else {
                        var firstTurn = "#" + turn1[0];
                        var secondTurn = "#" + turn2[0];
                        $(firstTurn).css('color', 'rgb(255, 255, 255)');
                        $(secondTurn).css('color', 'rgb(255, 255, 255)');
                        turn1 = [];
                        turn2 = [];
                        memoryFlippedCards = [];
                    }
        }
    }
}

//Shuffles the board on load
shuffle_letters();
