const addAnimation = (target, player) => {
    target.classList.add(`mark-${player.icon()}`);
};

export {
    addAnimation
}