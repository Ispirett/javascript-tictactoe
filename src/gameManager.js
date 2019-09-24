export default class GameManager {
  constructor(turn, icon, iconTwo, gameOver, winningMessage) {
    this.turn = turn;
    this.icon = icon;
    this.iconTwo = iconTwo;
    this.gameOver = gameOver;
    this.winningMessage = winningMessage;
  }

  get turn() {
    return this.turn;
  }
  set turn(value) {
    this.turn = value;
  }
  get icon() {
    return this.icon;
  }
  set icon(value) {
    return this.icon = value;
  }
  get iconTwo() {
    return this.iconTwo;
  }
  set iconTwo(value) {
    return this.iconTwo = value;
  }
  get gameOver() {
    return this.gameOver;
  }
  set gameOver(value) {
    return this.gameOver = value;
  }
  get winningMessage() {
    return this.winningMessage;
  }
  set winningMessage(value) {
    return this.winningMessage = value;
  }
}