/* global window */
const playerManager = (() => {
  const Player = (playerName, playerIcon) => {
    const name = () => playerName;
    const icon = () => playerIcon;
    return { name, icon };
  };
  const selectPlayer = (turn, playerOne, playerTwo) => {
    if (turn % 2 !== 0) return playerOne;
    return playerTwo;
  };
  const getPlayerNames = (() => {
    const playerOneName = () => {
      const nameOne = 'a' //window.prompt('PlayerOne name');
      if (nameOne === '') return playerOneName();
      else if (nameOne === null) {
        return 'Player-1';
      }
      return nameOne;
    };
    const playerTwoName = (() => {
      const nameTwo = 'b' //window.prompt('PlayerTwo name');
      if (nameTwo === "") return playerTwoName();
      else if (nameTwo === null) {
        return 'Player-2';
      }
      return nameTwo;
    });
    return {
      playerOneName,
      playerTwoName,
    };
  })();
  return {
    Player,
    selectPlayer,
    getPlayerNames,
  };
})();
export default playerManager;