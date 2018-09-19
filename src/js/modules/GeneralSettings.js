import * as UI from "./UI.js"
import {
  Howl,
  Howler
} from 'howler';

const GeneralSettings = (() => {

  const $soundButton = document.querySelector('.button-sound');

  const state = {
    sound: true
  }

  const eventListeners = function() {
    window.addEventListener("click", function(e) {
      if (e.target.matches(".button-setSound")) {
        if (state.sound) {
          e.target.innerText = "Sound: Off";
          Howler.volume(0);
          state.sound = false;
        } else {
          e.target.innerText = "Sound: On";
          Howler.volume(1);
          state.sound = true;
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

export default GeneralSettings