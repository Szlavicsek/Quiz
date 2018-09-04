import * as UI from "./UI.js"
import {
  sounds
} from './sounds.js'

const QuizLogic = (() => {

  const decodeHTML = html => {
    const text = document.createElement('textarea');
    text.innerHTML = html;
    return text.value;
  };

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
      return this.currQuestionIndex === this.quizLength
    }

    isCorrect(guess) {
      return guess === decodeHTML(this.getCurrQuestion().correct_answer)
    }

    updateScore(guess) {
      if (guess === decodeHTML(this.getCurrQuestion().correct_answer)) {
        sounds.correct.play();
        this.totalGotRight++;
        this.totalScore += this.scoring()
      } else {
        sounds.wrong.play();
      }
    }

    canClick() {
      return Array.from(document.querySelectorAll('.answer-box')).every(x => !x.matches(".disable"))
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

    changeBorderColor(guess, $guessBox, $correctAnswerBox, waitTime) {
      if (this.isCorrect(guess)) {
        $guessBox.style.borderColor = "green";
      } else {
        $guessBox.style.borderColor = "red";
        $correctAnswerBox.style.borderColor = "green";
      }
      $correctAnswerBox.classList.toggle("disable")
      setTimeout(function() {
        $guessBox.style.borderColor = "whitesmoke"
        $correctAnswerBox.style.borderColor = "whitesmoke"
        $correctAnswerBox.classList.toggle("disable")
      }, waitTime)
    }
  }

  const fetchQuestions = async (quantity, category, difficulty) => {
    let json;
    try {
      UI.$loader.style.marginTop = "0"
      const resp = await fetch(`https://opentdb.com/api.php?amount=${quantity}${category === null ? "" : "&category=" + category}&difficulty=${difficulty}`);
      json = resp.json();
    } catch (e) {
      return e
    } finally {
      UI.$loader.style.marginTop = "-3px"
    }
    return json;
  }

  const initNewGame = (settings) => {
    const quantity = settings.quantity;
    const category = settings.category;
    const difficulty = settings.difficulty;
    fetchQuestions(quantity, category, difficulty)
      .then(res => {
        newGame = new Game(res.results);
        loadNewQuestion(newGame.getCurrQuestion())
      })
      .catch(err => console.log(err))
  }

  const loadNewQuestion = currQuestion => {
    const question = currQuestion.question;
    let answers = [...currQuestion.incorrect_answers];
    if (answers.length === 1) {
      answers = ["True", "False"]
    } else {
      answers.splice(Math.floor(Math.random() * 4), 0, currQuestion.correct_answer);
    }
    if (currQuestion.type === "multiple") {
      UI.renderQuestion(UI.multipleAnswers, question, answers, newGame)
    } else {
      UI.renderQuestion(UI.boolAnswers, question, answers, newGame)
    }
  }

  const guessClickEvent = (guess, $guessBox, $correctAnswerBox) => {
    const waitTime = 1500;
    newGame.updateScore(guess);
    newGame.changeBorderColor(guess, $guessBox, $correctAnswerBox, waitTime);
    newGame.currQuestionIndex++;
    setTimeout(function() {
      if (!newGame.gameHasEnded()) {
        loadNewQuestion(newGame.getCurrQuestion());
      } else {
        UI.renderGameEndScreen(newGame)
      }
    }, waitTime)
  }

  const quitGame = () => {
    const $overlay = document.querySelector('.overlay--in-game')
    $overlay.style.display = "block";
    setTimeout(function() {
      $overlay.style.opacity = "1";
    }, 15)
  }

  const eventListeners = () => {
    window.addEventListener("click", function(e) {
      if (e.target.matches(".guess") && newGame.canClick()) {
        const $correctAnswerBox = Array.from(document.querySelectorAll('.answer-box')).find(box => {
          // to deal with occasional whitespace
          const regex = /\s$/
          const boxText = box.firstElementChild.innerText
          const correctAnswerText = decodeHTML(newGame.getCurrQuestion().correct_answer).replace(regex, "");
          return boxText === correctAnswerText
        })
        let $guessBox,
          guess;
        if (e.target.matches(".answer-box")) {
          $guessBox = e.target
          guess = e.target.firstElementChild.innerText
        } else {
          $guessBox = e.target.parentElement
          guess = e.target.innerText;
        }
        guessClickEvent(guess, $guessBox, $correctAnswerBox)
      } else if (e.target.matches(".button-quit-game")) {
        quitGame()
      }
    })
  }

  const init = () => {
    eventListeners()
  }

  return {
    init,
    initNewGame
  }
})()

export default QuizLogic