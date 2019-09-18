

function titTacToe () {

   const GameManager = {
        turn: 9,
        icon: "X",
        iconTwo: "O",
        GameOver: false,
   };

   let {turn, icon, iconTwo, GameOver} =  GameManager;

   // Player
   const Player = (playerName,playerIcon)=>{
       const name = () => playerName;
       const icon = () => playerIcon;
       return{name, icon}
   };

   let nameOne = "hi";//window.prompt("PlayerOne name");
   let nameTWo = "bye" ;//window.prompt("PlayerTwo name ");
   const playerOne = Player(nameOne,icon );
   const playerTwo = Player(nameOne,iconTwo );


    const winningCases = (array) => {

        array.flat().forEach(boxArray=>{
            console.log(array.flat());
            if(boxArray.every(e => e.innerHTML === 'X')){

                alert('Winner' + selectPlayer().name())
            }

            if(boxArray.every(e => e.innerHTML === 'O')){
                alert('Winner' + selectPlayer().name())

            }

        })

    };

    const winningPositions = (b) =>{
        const horizontal = [[b[0],b[1],b[2]],
                            [b[3],b[4],b[5]],
                            [b[6],b[7],b[8]]
                           ];
        const vertical = [[b[0],b[3],b[6]],
                          [b[1],b[4],b[7]],
                          [b[2],b[5],b[8]]
                         ];
        const diagonal =  [[b[0],b[4],b[8]],
                          [b[2],b[4],b[6]]

                        ];


        return [horizontal, vertical, diagonal]
    };


   const selectPlayer = () => {
        if(turn % 2 !== 0) return playerOne;
        else return playerTwo;
   };

   const playerTurn = (element) => {
       
       element.target.innerHTML =  selectPlayer().icon();
       turn -= 1;
      /// gameOver(selectPlayer().name());
       console.log(turn)
   };

   const displayMessage = (message) => {
       let msg = document.getElementById('msg');
       msg.innerText = message;
       setTimeout(() => {
            msg.innerText = ''
       }, 4000)
   };

   const gameOver = (playerName, over) => {
       GameOver = over;
        if(turn === 0) {
            alert("It's a draw")
        }

        alert(playerName + " won the game");
   };

   const boxes = document.querySelectorAll('.box');

    boxes.forEach((box, index)=>{
        box.onclick = (element) =>{
            playerTurn(element);
            displayMessage(element.target.innerText);

            // Checking winning positions
            const positions = winningPositions(boxes);
            winningCases(positions);
        }

    })


}

titTacToe();