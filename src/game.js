import { Player, selectPlayer } from './player'
import { winningCases, winningPositions, isPositionTaken,setPosition,drawGame } from './board'
import { displayMessage } from "./utilties";
import { removeAnimation } from "./animation"
import GameManager from "./gameManager"

function titTacToe() {

    const  gameManager = new GameManager(
        9,
        'X',
        "O",
        false,
        " Won the game.");

    let { turn, icon, iconTwo, GameOver, winningMessage } = gameManager;

    let nameOne = window.prompt("PlayerOne name");
    let nameTwo = window.prompt("PlayerTwo name");
    const playerOne = Player(nameOne, icon);
    const playerTwo = Player(nameTwo, iconTwo);
    
    removeAnimation();
    
    const switchTurn = (element) => {
        const currentPlayer = selectPlayer(turn, playerOne, playerTwo);
        if(isPositionTaken(element)) return switchTurn;
        setPosition(element,currentPlayer);

        const positions = winningPositions(boxes);
        winningCases(positions, { turn,
            currentPlayer,
            gameOver, icon,
            iconTwo,
            winningMessage });

        turn -= 1;
        drawGame(turn,GameOver, gameOver);
        console.log(turn)
    };

    const gameOver = (playerName, over = false) => {
        GameOver = over;
        if (GameOver) {
            if (confirm(playerName + " Do you want to play again?")) window.location.reload();
            else window.close()
        }
    };

    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box, index) => {
        box.onclick = (element) => {
            switchTurn(element);
            const playerName = selectPlayer(turn, playerOne, playerTwo).name();
            displayMessage(`It's ${playerName} turn`);
        }

    })


}

titTacToe();