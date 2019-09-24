// Player

const playerManager = (() => {
    const Player = (playerName, playerIcon) => {
        const name = () => playerName;
        const icon = () => playerIcon;
        return {name, icon}
    };

    const selectPlayer = (turn, playerOne, playerTwo) => {
        if (turn % 2 !== 0) return playerOne;
        else return playerTwo;
    };

    const getPlayerNames = (() =>{
        const playerOneName = () => {
            let nameOne = window.prompt("PlayerOne name");
            if (nameOne === '') return playerOneName();
            else if (nameOne === null) {
                return 'Greatest-loser-ever'
            }
            return nameOne

        };

        const playerTwoName = (callback) => {
            let nameTwo = window.prompt("PlayerTwo name");
            if (nameTwo === '') return playerTwoName();

            else if (nameTwo === null) {
                try{callback();}
                catch (e) {}
                return 'Loser-For-Sure';

            }
            try{callback();}
            catch (e) {}
            return nameTwo
        };


        return{
            playerOneName,
            playerTwoName
        }
    })();

    return{
        Player,
        selectPlayer,
        getPlayerNames
    }
})();
export default playerManager