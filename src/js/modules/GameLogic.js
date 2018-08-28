const GameLogic = (() => {

  class Game {
    constructor(questions) {
      this.questions = questions;
      this.currentQuestionIndex = 0;
      this.score = 0;
      this.gameHasEnded = false;
    }
  }

  const init = () => {}

  return {
    init,
  }
})()

export default GameLogic