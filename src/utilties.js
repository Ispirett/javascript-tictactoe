
const utilities = (() => {

    const displayMessage = (message) => {
        let msg = document.getElementById('msg');
        msg.innerText = message;
    };

    return{
        displayMessage
    }

})();

export default utilities