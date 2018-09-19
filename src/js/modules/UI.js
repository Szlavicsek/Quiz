import {
  getStarCount,
  paintStars,
  animateRibbon
} from './EndScreen.js'

const $documentBody = document.querySelector('body');
const $errorContainer = document.querySelector('.error-container');
const $errorMessage = document.querySelector('.error-message');
const $newGameButton = document.querySelector('.button-new-game');
const $contentWrapper = document.querySelector('.content-wrapper')

export const $loader = document.querySelector('.header-strap')

const animateButtons = () => {
  const $buttons = Array.from(document.querySelectorAll('.button'))
  $buttons.forEach(button => button.style.opacity = "0")
  $buttons.forEach((button, i, arr) => {
    setTimeout(function() {
      button.style.opacity = "1"
    }, i * 50)
  })
}

const renderScoreInfo = (newGame) => {
  return `
    <p class="result-info score">Score: ${newGame.totalGotRight}/${newGame.questions.length}</p>
    <p class="result-info points">+${newGame.totalScore} Points</p>
    <p class="result-info message">${getStarCount(newGame).message}</p>
  `
}

export const closeOverlay = overlay => {
  overlay.style.opacity = "0";
  setTimeout(function() {
    overlay.style.display = "none";
  }, 300);
}

// Components to be parsed into other markup later on
const footer = `
  <footer class="footer">
    <p>Doncimacko 2018 &copy;</p>
  </footer>
`

export const buttonGroup_mainMenu = `
  <button class="button button-new-game">New Game</button>
  <button class="button button-about">About</button>
  <button class="button button-settings">Settings</button>
`

export const buttonGroup_generalSettings = (volume) => {
  return `
    <button class="button button-setSound">Sound: ${volume}</button>
    <button class="button button-main-menu">Back</button>
  `
}

export const buttonGroup_about = `
  <p class="aboutText">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A inventore illo maxime, fugiat enim numquam facilis beatae, earum doloremque, veniam id consequuntur aliquam temporibus quo, autem ea impedit. Ipsam, asperiores ea eos cumque autem ut dolorum delectus nesciunt tempore ab <a href="https://loremipsum.io/">more lorem ipsum</a></p>
  <button class="button button-main-menu">Back</button>
`

export const multipleAnswers = answers => {
  return `
  <div class="answers-container multiple">
    <div class="answer-group-container">
      <div class="answer-box">
        ${answers[0]}
      </div>
      <div class="answer-box">
        ${answers[1]}
      </div>
    </div>
    <div class="answer-group-container">
      <div class="answer-box">
        ${answers[2]}
      </div>
      <div class="answer-box">
        ${answers[3]}
      </div>
    </div>
  </div>
  `
}

export const boolAnswers = answers => {
  return `
  <div class="answers-container truefalse">
    <div class="answer-group-container">
      <div class="answer-box">
        ${answers[0]}
      </div>
      <div class="answer-box">
        ${answers[1]}
      </div>
    </div>
  </div>
  `
}

export const renderMenuDisplay = buttongroup => {
  $contentWrapper.innerHTML = `
  <div class="menu-content">
    <div class="big-background-logo-container">
      <h1 class="title">Quizzit</h1>
      <img class="circles" src="src/assets/header-circles-res.png" alt="">
      <img class="ribbon" src="src/assets/1x/ribbon-yellow.png">
    </div>
    <div class="button-group">
      ${buttongroup}
    </div>
  </div>
  ${footer}
  `
  animateButtons()
};

export const renderNewGameSettings = preloaded => {
  $contentWrapper.innerHTML = `
  <div class="overlay options-overlay--difficulty">
    <div class="option-container fully-centered vertical">
      <div class="option-item" data-difficulty="1">Easy</div>
      <div class="option-item" data-difficulty="2">Medium</div>
      <div class="option-item" data-difficulty="3">Hard</div>
    </div>
  </div>
  <div class="overlay options-overlay--quantity">
    <div class="option-container fully-centered vertical">
      <div class="option-item" data-quantity="10">10</div>
      <div class="option-item" data-quantity="20">20</div>
      <div class="option-item" data-quantity="30">30</div>
      <div class="option-item" data-quantity="40">40</div>
      <div class="option-item" data-quantity="50">50</div>
    </div>
  </div>
  <div class="overlay options-overlay--category">
    <div class="option-container fully-centered">
      <div class="option-item" data-id="0">All Categories</div>
      ${preloaded}
    </div>
  </div>
  <div class="menu-content">
    <div class="big-background-logo-container">
      <h1 class="title">Quizzit</h1>
      <img class="circles" src="src/assets/header-circles-res.png" alt="">
      <img class="ribbon" src="src/assets/1x/ribbon-yellow.png">
    </div>
    <div class="button-group">
      <button class="button button-difficulty">Medium</button>
      <button class="button button-category">All Categories</button>
      <button class="button button-quantity">10 Questions</button>
      <button class="button button-play">Play</button>
      <button class="button button-main-menu">Back</button>
    </div>
  </div>
  ${footer}
  `
  animateButtons()
}

export const renderQuestion = (answers_markup, question, answers, newGame) => {
  $contentWrapper.innerHTML = `
  <div class="overlay overlay--game-end"></div>
  <div class="overlay overlay--in-game">
    <div class="quit-option-container fully-centered">
      <p>Do you want to quit the game?</p>
      <div class="button-box">
        <button class="button button-stay-here">No</button>
        <button class="button button-main-menu">Yes</button>
      </div>
    </div>
  </div>
  <div class="game-content">
    <div class="background-container">
      <img class="fully-centered" src="src/assets/header-circles-res.png" alt="">
      <h1 class="title">Quizzit</h1>
    </div>
    <div class="question-container">
      <p class="question">${question}</p>
    </div>
    ${answers_markup(answers)}
    <p class="question-tracker">${newGame.currQuestionIndex+1}/${newGame.quizLength}</p>
    <button class="button button-quit-game">Quit game</button>
  </div>
  ${footer}
  `
};

export const renderGameEndScreen = newGame => {
  const $overlay_gameEnd = document.querySelector('.overlay--game-end')
  $overlay_gameEnd.innerHTML = `
  <div class="game-end-screen-content">
    <div class="ribbon-container">
      <?xml version="1.0" encoding="utf-8"?>
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="205 138 435 95" style="enable-background:new 0 0 841.9 595.3;" xml:space="preserve">
        <g>
          <path class="st13" d="M235.8,179.7c-11.5,3-21.9,6.2-31.2,9.4l14.4,16.3L204.6,232c9.2-3.2,19.7-6.3,31.2-9.4l0,0V179.7z"/>
        </g>
        <g>
          <path class="st13" d="M607.8,179.7c11.5,3,21.9,6.2,31.2,9.4l-14.4,16.3l14.4,26.6c-9.2-3.2-19.7-6.3-31.2-9.4l0,0V179.7z"/>
        </g>
        <g>
          <path class="st14" d="M421.8,139.8c-78.8,1.4-152.4,16.7-197.2,32.1v42.9c44.8-15.4,118.3-30.7,197.2-32.1
            c78.8,1.4,152.4,16.7,197.2,32.1v-42.9C574.2,156.6,500.6,141.2,421.8,139.8z"/>
        </g>
        <path d="M224.6,214.9"/>
        <g>
          <path class="st15" d="M235.8,222.6v-11.4c-3.9,1.2-7.6,2.4-11.2,3.6L235.8,222.6z"/>
        </g>
        <path class="st12" d="M619,214.9"/>
        <polygon class="star star-1" points="261.5,167.6 267.3,174.6 276.4,173.9 271.5,181.6 275.1,190 266.2,187.7 259.3,193.6 258.8,184.5
          250.9,179.8 259.4,176.5 "/>
        <polygon class="star star-2" points="341.8,154.1 346.7,161.8 355.8,162.1 350,169.2 352.5,177.9 344,174.6 336.4,179.7 337,170.6
          329.8,164.9 338.6,162.6 "/>
        <polygon class="star star-3" points="423.5,148.7 427.5,156.9 436.6,158.3 430,164.6 431.6,173.6 423.5,169.4 415.4,173.6 417,164.6
          410.4,158.3 419.5,156.9 "/>
        <polygon class="star star-4" points="503,154.8 506.2,163.4 515,165.7 507.8,171.3 508.4,180.5 500.8,175.4 492.3,178.8 494.8,170
          489,162.9 498.1,162.6 "/>
        <polygon class="star star-5" points="576.7,167.5 579,176.3 587.6,179.4 579.9,184.4 579.6,193.5 572.5,187.7 563.7,190.3 567.1,181.7
          561.9,174.2 571.1,174.7 "/>
      </svg>
    </div>
    <div class="result-container">
      ${renderScoreInfo(newGame)}
    </div>
    <div class="button-container">
      <button class="button button-new-game">New game</button>
      <button class="button button-main-menu">Main menu</button>
    </div>
  </div>
  `

  $overlay_gameEnd.style.display = "block";
  setTimeout(function() {
    $overlay_gameEnd.style.opacity = "1";
  }, 15)
  setTimeout(function() {
    animateRibbon();
  }, 100)
  setTimeout(function() {
    paintStars(newGame)
  }, 500)
};

export const showErrorMessage = (msg, retryCb) => {
  if (retryCb) {
    retryCb()
  }
  $errorMessage.innerText = msg;
  $errorContainer.style.display = "block";
  setTimeout(function() {
    $errorContainer.style.transform = "translateY(0%)";
  }, 15);
  setTimeout(function() {
    $errorContainer.style.transform = "translateY(-100%)"
  }, 4000);
}