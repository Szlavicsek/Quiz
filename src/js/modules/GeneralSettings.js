import * as UI from "./UI.js"

const Settings = (() => {
  const $themeButton = document.querySelector('.button-theme');
  const $soundButton = document.querySelector('.button-sound');

  const eventListeners = function() {
    window.addEventListener("click", function(e) {})
  }

  const init = () => {
    eventListeners();
  }

  return {
    init,
  }
})()

export default Settings