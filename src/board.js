/* global window, confirm */
import { addAnimation, addBadInputAnim } from './animation';
import utilities from './utilties';

const board = (() => {
  const winningCases = (array, params) => {
    const { currentPlayer, GameOver, icon, iconTwo, winningMessage } = params;
    const positions = winningPositions(array);
    const winner = currentPlayer.name() + winningMessage;
    positions.flat().forEach((boxArray) => {
      if (boxArray.every(e => e.innerHTML === icon)) {
        gameOver(winner, true, GameOver);
      }
      if (boxArray.every(e => e.innerHTML === iconTwo)) {
        gameOver(winner, true, GameOver);
      }
    });
  };

  const winningPositions = (b) => {
    const horizontal = [
      [b[0], b[1], b[2]],
      [b[3], b[4], b[5]],
      [b[6], b[7], b[8]],
    ];
    const vertical = [
      [b[0], b[3], b[6]],
      [b[1], b[4], b[7]],
      [b[2], b[5], b[8]],
    ];
    const diagonal = [
      [b[0], b[4], b[8]],
      [b[2], b[4], b[6]],
    ];


    return [horizontal, vertical, diagonal];
  };

  const isPositionTaken = (element) => {
    if (element.target.innerText !== '') {
      utilities.displayMessage('Illegal move, position already taken Dont do it again!!');
      addBadInputAnim();
      return true;
    }
  };

  const setPosition = (element, currentPlayer) => {
    element.target.innerHTML = currentPlayer.icon();
    addAnimation(element.target, currentPlayer);
  };

  const drawGame = (turn, GameOver) => {
    if (turn === 0 && !GameOver) {
      gameOver("Too bad, it's a draw!", true, GameOver);
    }
  };

  const gameOver = (playerName, over = false, GameOver) => {
    GameOver = over;
    if (GameOver) {
      if (confirm(playerName + ' Do you want to play again?')) window.location.reload();
      else window.close();
    }
  };

  return {
    winningCases,
    isPositionTaken,
    setPosition,
    drawGame,
  }
})();
export {
  board,

};