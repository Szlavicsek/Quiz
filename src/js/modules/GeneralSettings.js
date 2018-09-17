import * as UI from "./UI.js"

const Settings = (() => {
  const $themeButton = document.querySelector('.button-theme');
  const $soundButton = document.querySelector('.button-sound');

  const state = {
    sound: true
  }

  const eventListeners = function() {
    window.addEventListener("click", function(e) {
      if (e.target.matches(".button-setSound")) {
        if (state.sound) {
          e.target.innerText = "Sound: Off";
          state.sound = false
        } else {
          e.target.innerText = "Sound: On";
          state.sound = true
        }
      }
    })
  }

  const init = () => {
    eventListeners();
  }

  return {
    init,
    state
  }
})()

export default Settings