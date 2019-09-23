const displayMessage = (player) => {
    let msg = document.getElementById('msg');
    msg.innerText = `It's ${player.name()} turn`;
};

export {
    displayMessage
}