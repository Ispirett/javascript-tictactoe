/* global document */
import playerManager from './player';
import { board } from './board';
import utilities from './utilties';
import { setupAnimEvents } from './animation';
import GameManager from './gameManager';

function gameSetup() {

  const mainContainer = document.querySelector('.container');
  const pageTitle = document.querySelector('.page-title');
  const form = document.querySelector('.form-names');

  setupAnimEvents(mainContainer, pageTitle, form);

  form.onsubmit = element => {
    element.preventDefault();

    const nameOne = document.getElementById('player1').value;
    const nameTwo = document.getElementById('player2').value;

    form.classList.add('form-gone');
    pageTitle.classList.add('title-gone');

    titTacToe(nameOne, nameTwo);
  }
}

function titTacToe(nameOne, nameTwo) {
  const gameManager = new GameManager(9, 'X', 'O', false, ' Won the game.');

  let { turn } = gameManager;
  const { icon, iconTwo, GameOver, winningMessage } = gameManager;

  const playerOne = playerManager.Player(nameOne, icon);
  const playerTwo = playerManager.Player(nameTwo, iconTwo);

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

gameSetup();

