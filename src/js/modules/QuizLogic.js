import * as UI from "./UI.js"

const QuizLogic = (() => {
  class Game {
    constructor(questions) {
      this.questions = questions;
      this.currQuestionIndex = 0;
      this.currQuestion = this.questions[this.currQuestionIndex];
      this.score = 0;
      this.gameHasEnded = false;
    }
  }

  async function fetchQuestions(quantity, category, difficulty) {
    const $loader = document.querySelector('.header-background-strap')
    let json;
    try {
      $loader.style.marginTop = "0"
      const resp = await fetch(`https://opentdb.com/api.php?amount=${quantity}${category === null ? "" : "&category=" + category}&difficulty=${difficulty}`);
      json = resp.json();
    } catch (e) {
      console.log(e);
    } finally {
      $loader.style.marginTop = "-3px"
    }
    return json;
  }

  const initNewGame = (state) => {
    const quantity = state.quantity;
    const category = state.category;
    const difficulty = state.difficulty;
    fetchQuestions(quantity, category, difficulty)
      .then(res => {
        const newGame = new Game(res.results);
        console.log(newGame);
        loadNewQuestion(newGame.currQuestion)
      })
      .catch(err => console.log(err))
  }

  const loadNewQuestion = newQuestion => {
    const question = newQuestion.question;
    let answers = [...newQuestion.incorrect_answers];
    if (answers.length === 1) {
      answers = ["true", "false"]
    } else {
      answers.splice(Math.floor(Math.random() * 4), 0, newQuestion.correct_answer);
    }
    if (newQuestion.type === "multiple") {
      UI.renderQuestion(UI.answers_markup_multiple, question, answers)
    } else {
      UI.renderQuestion(UI.answers_markup_bool, question, answers)
    }
  }

  const init = () => {

  }

  return {
    init,
    initNewGame
  }
})()

export default QuizLogic