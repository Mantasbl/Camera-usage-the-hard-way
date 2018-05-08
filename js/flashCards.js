
var arrayEnglishSounds =  ['A','I','U','E','O','Ka','Ki','Ku','Ke','Ko','Sa','Shi','Su','Se','So','Ta','Chi','Tsu','Te','To','Na','Ni','Nu','Ne','No'];
var arrayJapaneseHiraganaSounds = ['あ','い','う','え','お','か','き','く','け','こ','さ','し','す','せ','そ','た','ち','つ','て','と','な','に','ぬ','ね','の'];
var arrayJapaneseKatakanaSounds = ['ア','イ','ウ','エ','オ','カ','キ','ク','ケ','コ','サ','シ','ス','セ','ソ','タ','チ','ツ','テ','ト','ナ','ニ','ヌ','ネ','ノ'];


var wrong_guess = document.getElementById("wrong-guess");
var correct_guess = document.getElementById("correct-guess");
var answer = document.getElementById("answer");
wrong_guess.addEventListener('click', wrong, false);
correct_guess.addEventListener('click', correct, false);

function wrong() {
    navigator.notification.beep(2);
    alert("Try again!");
}

function correct() {
    navigator.notification.beep(1);
    alert("Correct!");
    fillIn();
    shuffle_answers();
}

function fillIn() {
    var random = Math.floor(Math.random()*25);
    var random2 = Math.floor(Math.random()*25);
    document.getElementById("answer-flashCard").innerHTML = arrayJapaneseHiraganaSounds[random];
    document.getElementById("correct-guess").innerHTML = arrayEnglishSounds[random];
    // Checks if both random number are the same, if they are, second number is re-rolled
    // to make sure the Guesses dont come up with same values
    if (random2 != random) {
        document.getElementById("wrong-guess").innerHTML = arrayEnglishSounds[random2];
    } else {
        random2 = Math.floor(Math.random()*25);
        document.getElementById("wrong-guess").innerHTML = arrayEnglishSounds[random2];
    }
}

//Shuffles the places of answers
function shuffle_answers() {
    var parent = $("#guesses");

    var children = parent.children();

    while (children.length) {
        parent.append(children.splice(Math.floor(Math.random() * children.length), 1));
    }
}
shuffle_answers();
fillIn();