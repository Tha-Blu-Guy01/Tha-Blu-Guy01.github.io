const BORED = document.getElementById('Game')
let playAGAIN = document.getElementById('REPLAY')
let CoolInformation = document.getElementById('WhosTurnIsIt?');
let square = [];
let Multiply = "TwoLinePlayer"


for (let i =0; i<9; i++){
    let newSquare = document.getElementById("" + (i+1) + "EMPTI");
    console.log(newSquare)
    newSquare.addEventListener('click', GamePlay)
    square.push(newSquare);
}
console.log(square);



function GamePlay(e) {
    const ShapeInsert = document.createElement('div');
    ShapeInsert.classList.add(Multiply)
    e.target.append(ShapeInsert);
    Multiply = Multiply === "TwoLinePlayer" ? "RoundPlayer" : "TwoLinePlayer"
    CoolInformation.textContent= "" + Multiply + ", Shoot!"
    e.target.removeEventListener('click', GamePlay)
    didIwin()
}

function didIwin() {
    const BoardButSquare = document.querySelectorAll('.EMPTI')
    const HowWinMe = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
]
        //How Circle can win
    HowWinMe.forEach(array => {
        const WinningRound = array.every(cell => BoardButSquare[cell].firstChild?.classList.contains('RoundPlayer'))

    if (WinningRound) {
        CoolInformation.textContent= "RoundPlayer Won!"
        BoardButSquare.forEach(square => square.replaceWith(square.cloneNode(true)))
        document.getElementById('REPLAY').innerHTML = "<button onclick=\"window.location.reload();\">Replay?</button>";
        return    
    }
})
        //How X can win
    HowWinMe.forEach(array => {
        const WinningNotRound = array.every(cell => BoardButSquare[cell].firstChild?.classList.contains('TwoLinePlayer'))

    if (WinningNotRound) {
        CoolInformation.textContent= "TwoLinePlayer Won!"
        BoardButSquare.forEach(square => square.replaceWith(square.cloneNode(true)))
        document.getElementById('REPLAY').innerHTML = "<button onclick=\"window.location.reload();\">Replay?</button>";
            
        return
    }
})
}