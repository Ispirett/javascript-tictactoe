

function titTacToe () {

   const GameManager = {
        turn: 9,
        icon: "X",
        iconTwo: "O",
        GameOver: false,
   };

   let {turn, icon, iconTwo} =  GameManager;

   // Player
   const Player = (playerName,playerIcon)=>{
       const name = () => playerName;
       const icon = () => playerIcon;
       return{name, icon}
   };

   let nameOne = window.prompt("PlayerOne name");
   let nameTWo = window.prompt("PlayerTwo name ");
   const playerOne = Player(nameOne,icon );
    const playerTwo = Player(nameOne,iconTwo );

   const selectPlayer = () => {
        if(turn % 2 !== 0) return playerOne;
        else return playerTwo;
   };

   const playerTurn = (element) => {
       element.target.innerHTML =  selectPlayer().icon();
       turn -= 1
   };


   const boxes = document.querySelectorAll('.box');

    boxes.forEach((box, index)=>{
        box.onclick = (element) =>{
            playerTurn(element)
        }

    })


}

titTacToe();