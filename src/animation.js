const addAnimation = (target, player) => {
    target.classList.add(`${player.icon()}-mark`, 'background');
};

export {
    addAnimation
}