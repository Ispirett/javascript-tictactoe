const displayMessage = (message) => {
    let msg = document.getElementById('msg');
    msg.innerText = message;
    setTimeout(() => {
        msg.innerText = ''
    }, 4000)
};

export {
    displayMessage
}