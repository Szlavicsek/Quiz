import * as UI from "./UI.js"
import QuizLogic from "./QuizLogic.js"
import GameSettings from "./GameSettings.js"
import {
  sounds
} from './sounds.js'
import GeneralSettings from "./GeneralSettings.js"

export const getStarCount = (newGame) => {
  const percentage = newGame.totalGotRight / newGame.questions.length.toFixed(2) * 100;
  const messages = ["I want your brain.", "Marvelous!", "Wow.", "Unstoppable.", "Hat's off.", "Now that's an ace."]
  let starCount,
    message;
  switch (true) {
    case percentage <= 20:
      starCount = 1;
      message = "No worries. You're gonna kill it next time."
      break;
    case percentage <= 40:
      starCount = 2;
      message = "You're getting there."
      break;
    case percentage <= 60:
      starCount = 3;
      message = "Not bad!"
      break;
    case percentage <= 80:
      starCount = 4;
      message = "You're feeling it."
      break;
    case percentage === 100:
      starCount = 5;
      message = messages[Math.floor(Math.random() * 6)];
      break;
    case percentage > 80:
      starCount = 5;
      message = "Nice one! You totally nailed it."
      break;
  }
  return {
    starCount,
    message
  }
}

export const paintStars = newGame => {
  const $stars = Array.from(document.querySelectorAll('.star'))
  //reset basic star color
  $stars.forEach(star => star.style.fill = "#EF7667")
  //paint white stars
  $stars.forEach((star, i) => {
    if (i < getStarCount(newGame).starCount) {
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