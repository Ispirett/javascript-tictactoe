import { Player, selectPlayer } from './player'
import { winningCases, winningPositions } from './board'
import { displayMessage } from "./utilties";
import GameManager from "./gameManager"

function titTacToe() {

    const  gameManager = new GameManager(
        9,
        'X',
        "O",
        false,
        " Won the game");


    let { turn, icon, iconTwo, GameOver, winningMessage } = gameManager;

    let nameOne = 'x' //window.prompt("PlayerOne name");
    let nameTwo = 'o'  //window.prompt("PlayerTwo name");
    const playerOne = Player(nameOne, icon);
    const playerTwo = Player(nameTwo, iconTwo);


    const switchTurn = (element) => {
        if (element.target.innerText !== '') {
            alert('Illegal move, position already taken Dont do it again!!');
            return switchTurn
        }
        element.target.innerText = " ";
        turn -= 1;
        if (turn === 0 && !GameOver) {
            gameOver("Draw, losers", true)
        }
        // console.log(turn)
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
            const currentPlayer = selectPlayer(turn, playerOne, playerTwo);
            box.classList.add(`mark-${currentPlayer.icon()}`);

            switchTurn(element);
            displayMessage(element.target.innerText);

            const positions = winningPositions(boxes);
            winningCases(positions, { turn,
                currentPlayer,
                gameOver, icon,
                iconTwo,
                winningMessage });
        }

    })


}

titTacToe();