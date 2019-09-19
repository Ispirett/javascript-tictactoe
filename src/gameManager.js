export default class GameManager {

    constructor(turn, icon, iconTwo, gameOver, winningMessage){
        this.turn = turn;
        this.icon = icon;
        this.iconTwo = iconTwo;
        this.gameOver = gameOver;
        this.winningMessage =  winningMessage;
    }

    get turn(){
        return this._turn
    }
    set turn(value) {

        this._turn = value
    }

    get icon(){
        return this._icon
    }

    set icon(value){
        return this._icon = value
    }
    get iconTwo()
    {
        return this._iconTwo
    }
    set iconTwo(value){
        return this._iconTwo = value
    }

    get gameOver(){
        return this._gameOver
    }
    set gameOver(value){
        return this._gameOver = value
    }

    get winningMessage(){
        return this._winningMessage
    }

    set winningMessage(value){
        return this._winningMessage  = value
    }

}