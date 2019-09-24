const utilities = (() => {
  const displayMessage = (message) => {
    const msg = document.getElementById('msg');
    msg.innerText = message;
  };

  return {
    displayMessage,
  };
})();

export default utilities;