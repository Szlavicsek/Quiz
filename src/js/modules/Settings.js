import * as UI from "./UI.js"

const Settings = (() => {
  const $themeButton = document.querySelector('.button-theme');
  const $soundButton = document.querySelector('.button-sound');
  const $backButton = document.querySelector('.button-back');

  const eventListeners = function() {
    window.addEventListener("click", function(e) {
      if (e.target.matches(".button-back--settings")) {
        UI.renderMenuDisplay(UI.buttonGroup_mainMenu)
      }
    })
  }

  const init = () => {
    eventListeners();
  }

  return {
    init,
  }
})()

export default Settings