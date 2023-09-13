console.log("Welcome to Tic Tac Toe")

let music = new Audio("./video/music.mp3")
let audioTurn = new Audio("./video/ting.mp3")
let gameOver = new Audio("./video/gameover.mp3")
let turn = 'X';
let game_Over = false;

// Function to change Turn
const ChangeTurn = () => {
    // return turn === "X"// agar turn ===x hai tab return 0 warna X
    if (turn === 'X') return 'O';
    else return 'X';
}

// Function to Check For win
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [ // this is array
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    wins.forEach((e) => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = "Congratulations " + boxtext[e[0]].innerText + " Won"
            game_Over = true;
            document.getElementsByTagName('img')[0].style.width = "200px";
            gameOver.play()
        }
    })

}

// Game Logic
music.play()
let boxes = document.getElementsByClassName("box");
// boxes will return HTML collection so we make it array using Array.from() so that we can use array methods on it
Array.from(boxes).forEach((element) => {
    let boxtext = element.querySelector('.boxtext')
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = ChangeTurn();
            audioTurn.play();
            checkWin();
            if (!game_Over) {
                document.getElementsByClassName('info')[0].innerText = 'Turn for ' + turn;/*If you want to access the innerText property of all eents with the "info" class, you'll need to loop through the collection and access the property for each eent separately*/
            }

        }
    })
})

// Add onclick Event listener to reset button
let reset = document.getElementById("reset");

reset.addEventListener("click", () => {
    let boxtext = document.getElementsByClassName('boxtext');
    Array.from(boxtext).forEach((element) => {
        element.innerText = " ";
    })
    turn = "X";
    game_Over = false;
    document.getElementsByClassName('info')[0].innerText = 'Turn for ' + turn;
    document.getElementsByTagName('img')[0].style.width = "0px";
})