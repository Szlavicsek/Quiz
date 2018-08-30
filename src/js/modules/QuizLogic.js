import * as UI from "./UI.js"

const QuizLogic = (() => {

  let newGame;

  class Game {
    constructor(questions) {
      this.questions = questions;
      this.length = this.questions.length;
      this.currQuestionIndex = 0;
      this.currQuestion = this.questions[this.currQuestionIndex];
      this.score = 0;
      this.gameHasEnded = false;
    }
  }

  async function fetchQuestions(quantity, category, difficulty) {
    let json;
    try {
      UI.$loader.style.marginTop = "0"
      const resp = await fetch(`https://opentdb.com/api.php?amount=${quantity}${category === null ? "" : "&category=" + category}&difficulty=${difficulty}`);
      json = resp.json();
    } catch (e) {
      console.log(e);
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
        console.log(newGame);
        loadNewQuestion(newGame.currQuestion)
      })
      .catch(err => console.log(err))
  }

  const loadNewQuestion = currQuestion => {
    const question = currQuestion.question;
    let answers = [...currQuestion.incorrect_answers];
    if (answers.length === 1) {
      answers = ["true", "false"]
    } else {
      answers.splice(Math.floor(Math.random() * 4), 0, currQuestion.correct_answer);
    }
    if (currQuestion.type === "multiple") {
      UI.renderQuestion(UI.multipleAnswers, question, answers, newGame)
    } else {
      UI.renderQuestion(UI.boolAnswers, question, answers, newGame)
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