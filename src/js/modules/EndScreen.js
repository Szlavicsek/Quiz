import * as UI from "./UI.js"
import QuizLogic from "./QuizLogic.js"
import GameSettings from "./GameSettings.js"
import {
  sounds
} from './sounds.js'
import GeneralSettings from "./GeneralSettings.js"

export const paintStars = newGame => {
  const percentage = newGame.totalGotRight / newGame.questions.length.toFixed(2) * 100;
  let starCount;
  switch (true) {
    case percentage <= 20:
      starCount = 1;
      break;
    case percentage <= 40:
      starCount = 2;
      break;
    case percentage <= 60:
      starCount = 3;
      break;
    case percentage <= 80:
      starCount = 4;
      break;
    case percentage > 80:
      starCount = 5;
      break;
  }

  const $stars = Array.from(document.querySelectorAll('.star'))
  //reset basic star color
  $stars.forEach(star => star.style.fill = "#EF7667")
  //paint white stars
  $stars.forEach((star, i) => {
    if (i < starCount) {
      setTimeout(function() {
        if (GeneralSettings.state.sound) {
          sounds.star.play();
        }
        star.style.fill = "whitesmoke";
      }, i * 300)
    }
  })
}

export const animateRibbon = () => {
  const $ribbonContainer = document.querySelector('.ribbon-container');
  $ribbonContainer.style.opacity = "1";
  $ribbonContainer.style.transform = "translateY(0px) scale(1)"
}