import * as UI from "./UI.js"
import {
  sounds
} from './sounds.js'
import GeneralSettings from "./GeneralSettings.js"

const QuizLogic = (() => {

  let newGame;

  class Game {
    constructor(questions) {
      this.questions = questions;
      this.quizLength = this.questions.length;
      this.currQuestionIndex = 0;
      this.totalScore = 0;
      this.totalGotRight = 0
    }

    getCurrQuestion() {
      return this.questions[this.currQuestionIndex]
    }

    gameHasEnded() {
      return this.currQuestionIndex === this.quizLength;
    }

    isCorrect(guessedIndex) {
      return this.getCurrQuestion().correct_answer_index === guessedIndex
    }

    updateScore(isCorrect, guessedIndex, waitTime) {
      const correctAnswerIndex = this.getCurrQuestion().correct_answer_index;
      const $guessBox = Array.from(document.querySelectorAll('.answer-box'))[guessedIndex];
      const $correctBox = Array.from(document.querySelectorAll('.answer-box'))[correctAnswerIndex];
      if (isCorrect) {
        if (GeneralSettings.state.sound) {
          sounds.correct.play();
        }
        this.totalGotRight++;
        this.totalScore += this.scoring();
        $guessBox.classList.add("correct")
      } else {
        if (GeneralSettings.state.sound) {
          sounds.wrong.play();
        }
        $guessBox.classList.add("wrong")
        $correctBox.classList.add("correct")
      }
      $correctBox.classList.toggle("disable");
      this.currQuestionIndex++;
    }

    canClick() {
      return Array.from(document.querySelectorAll('.answer-box')).every(x => !x.matches(".disable"));
    }

    scoring() {
      switch (this.getCurrQuestion().difficulty) {
        case "easy":
          return 1
          break;
        case "medium":
          return 2
          break;
        case "hard":
          return 3
          break;
      }
    }
  }

  const fetchQuestions = async (quantity, category, difficulty) => {
    let json;
    try {
      UI.$loader.style.marginTop = "0";
      const resp = await fetch(`https://opentdb.com/api.php?amount=${quantity}${category === null ? "" : "&category=" + category}&difficulty=${difficulty}`);
      json = resp.json();
    } catch (e) {
      return e
    } finally {
      UI.$loader.style.marginTop = "-3px";
    }
    return json;
  }

  const initNewGame = (settings) => {
    const quantity = settings.quantity;
    const category = settings.category;
    const difficulty = settings.difficulty;
    fetchQuestions(quantity, category, difficulty)
      .then(res => {
        const questions = [...res.results];
        questions.map(q => {
          const randomizedCorrectIndex = Math.floor(Math.random() * 4);
          const incorrectAnswers = [...q.incorrect_answers]; // either consists of 1 or 3
          if (incorrectAnswers.length === 1) {
            q.mixed_answers = ["True", "False"];
            q.correct_answer_index = q.mixed_answers.indexOf(q.correct_answer);
          } else {
            q.mixed_answers = [...incorrectAnswers];
            q.mixed_answers.splice(randomizedCorrectIndex, 0, q.correct_answer);
            q.correct_answer_index = randomizedCorrectIndex;
          }
        })
        newGame = new Game(questions);
        loadNewQuestion(newGame.getCurrQuestion());
      })
      .catch(err => console.log(err))
  }

  const loadNewQuestion = currQuestion => {
    if (currQuestion.type === "multiple") {
      UI.renderQuestion(UI.multipleAnswers, currQuestion.question, currQuestion.mixed_answers, newGame);
    } else {
      UI.renderQuestion(UI.boolAnswers, currQuestion.question, currQuestion.mixed_answers, newGame);
    }
  }

  const guessClickEvent = (guessedIndex) => {
    const waitTime = 1500;
    const isCorrect = newGame.isCorrect(guessedIndex);
    newGame.updateScore(isCorrect, guessedIndex, waitTime);
    setTimeout(function() {
      if (!newGame.gameHasEnded()) {
        loadNewQuestion(newGame.getCurrQuestion());
      } else {
        UI.renderGameEndScreen(newGame);
        setTimeout(function() {
          document.querySelector('.message').style.opacity = 1;
        }, 1000)
      }
    }, waitTime);
  }

  const quitGame = () => {
    const $overlay = document.querySelector('.overlay--in-game');
    $overlay.style.display = "block";
    setTimeout(function() {
      $overlay.style.opacity = "1";
    }, 15)
  }

  const eventListeners = () => { // check
    window.addEventListener("click", function(e) {
      if (e.target.matches(".answer-box") && newGame.canClick()) {
        const guessedIndex = Array.from(document.querySelectorAll('.answer-box')).indexOf(e.target);
        guessClickEvent(guessedIndex);
      } else if (e.target.matches(".button-quit-game")) {
        quitGame();
      } else if (e.target.matches(".button-stay-here") || e.target.matches(".button-box")) {
        UI.closeOverlay(document.querySelector('.overlay--in-game'))
      }
    })
  }

  const init = () => {
    eventListeners();
  }

  return {
    init,
    initNewGame
  }
})()

export default QuizLogic