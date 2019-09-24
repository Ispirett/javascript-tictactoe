 /*global document*/
const removeAnimation = () => {
  const container = document.querySelector('.container');
  container.addEventListener('animationend', (event) => {
    if (event.animationName === 'arriving') {
      container.classList.remove('cross-animation');
    }
    if (event.animationName === 'nope') {
      container.classList.remove('wrong-input');
    }
  });
};

const addAnimation = (target, player) => {
  target.classList.add(`${player.icon()}-mark`, 'background');
};

const addBadInputAnim = () => {
  const container = document.querySelector('.container');
  container.classList.add('wrong-input');
};


export {
  removeAnimation,
  addAnimation,
  addBadInputAnim,
};