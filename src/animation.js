/* global document */
const setupAnimEvents = (container, title, form) => {
  container.addEventListener('animationend', event => {
    if (event.animationName === 'arriving') {
      container.classList.remove('cross-arriving');
    }
    if (event.animationName === 'nope') {
      container.classList.remove('wrong-input');
    }
  });

  form.addEventListener('animationend', event => {
    if (event.animationName === 'form-disapearing') {
      form.style.display = 'none';
      title.style.display = 'none';
      container.style.display = 'grid';
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
  setupAnimEvents,
  addAnimation,
  addBadInputAnim,
};