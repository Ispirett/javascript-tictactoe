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

  return {
    Player,
    selectPlayer,
  };
})();
export default playerManager;