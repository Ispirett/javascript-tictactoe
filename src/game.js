 /* global document */
import playerManager from './player';
import { board } from './board';
import utilities from './utilties';
import { removeAnimation } from './animation';
import GameManager from './gameManager';

function titTacToe() {
  const gameManager = new GameManager(9, 'X', 'O', false, ' Won the game.');

  let { turn } = gameManager;
  const { icon, iconTwo, GameOver, winningMessage } = gameManager;

  let nameOne = playerManager.getPlayerNames.playerOneName();
  let nameTwo = playerManager.getPlayerNames.playerTwoName();

  const playerOne = playerManager.Player(nameOne, icon);
  const playerTwo = playerManager.Player(nameTwo, iconTwo);

  removeAnimation();

  const switchTurn = element => {
    const currentPlayer = playerManager.selectPlayer(
      turn,
      playerOne,
      playerTwo
    );
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
    return currentPlayer;
  };

  const boxes = document.querySelectorAll(".box");
  boxes.forEach(box => {
    box.onclick = element => {
      utilities.displayMessage(`It's ${switchTurn(element).name()} turn`);
    };
  });
}

titTacToe();