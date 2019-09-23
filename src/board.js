import {selectPlayer} from "./player";

const winningCases = (array, params) => {
    let { turn, currentPlayer, gameOver, icon, iconTwo, winningMessage } = params;

    const winner = currentPlayer.name() + winningMessage;
    array.flat().forEach(boxArray => {
        if (boxArray.every(e => e.innerHTML === icon)) {
            gameOver(winner, true)
        }

        if (boxArray.every(e => e.innerHTML === iconTwo)) {
            gameOver(winner, true)
        }

    })

};

const winningPositions = (b) => {
    const horizontal = [
        [b[0], b[1], b[2]],
        [b[3], b[4], b[5]],
        [b[6], b[7], b[8]]
    ];
    const vertical = [
        [b[0], b[3], b[6]],
        [b[1], b[4], b[7]],
        [b[2], b[5], b[8]]
    ];
    const diagonal = [
        [b[0], b[4], b[8]],
        [b[2], b[4], b[6]]

    ];


    return [horizontal, vertical, diagonal]
};

const isPositionTaken = (element, switchTurn) =>{
    if (element.target.innerText !== '') {
        alert('Illegal move, position already taken Dont do it again!!');
        return switchTurn
    }
};

const setPosition = (element, currentPlayer) =>{
    element.target.innerHTML = currentPlayer.icon();
};

const drawGame = (turn,GameOver, gameOver) =>{
    if (turn === 0 && !GameOver) {
        gameOver("Draw, losers", true)
    }
};


export {
    winningCases,
    winningPositions,
    isPositionTaken,
    setPosition,
    drawGame
}