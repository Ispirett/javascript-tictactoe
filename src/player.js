// Player

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
      const nameOne = window.prompt('PlayerOne name');
      if (nameOne === '') return playerOneName();
      return nameOne;
    };

    const playerTwoName = () => {
      const nameTwo = window.prompt('PlayerTwo name');
      if (nameTwo === '') return playerTwoName();
      return nameTwo;
    };
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