import playerManager from './player'
import { board } from './board'
import utilities from "./utilties";
import { removeAnimation } from './animation'
import GameManager from './gameManager'

function titTacToe() {

  const gameManager = new GameManager(
    9,
    'X',
    'O',
    false,
    ' Won the game.');

  let { turn, icon, iconTwo, GameOver, winningMessage } = gameManager;

  let nameOne = playerManager.getPlayerNames.playerOneName();
  let nameTwo = playerManager.getPlayerNames.playerTwoName();

  const playerOne = playerManager.Player(nameOne, icon);
  const playerTwo = playerManager.Player(nameTwo, iconTwo);

  removeAnimation();

  const switchTurn = (element) => {
    const currentPlayer = playerManager.selectPlayer(turn, playerOne, playerTwo);
    if (board.isPositionTaken(element)) return switchTurn;
    board.setPosition(element, currentPlayer);

    board.winningCases(boxes, {
      turn,
      currentPlayer,
      icon,
      iconTwo,
      winningMessage
    });
    turn -= 1;
    board.drawGame(turn, GameOver);
  };

  const boxes = document.querySelectorAll('.box');
  boxes.forEach((box, index) => {
    box.onclick = (element) => {
      switchTurn(element);
      const playerName = playerManager.selectPlayer(turn, playerOne, playerTwo).name();
      utilities.displayMessage(`It's ${playerName} turn`);
    }

  })


}

titTacToe();