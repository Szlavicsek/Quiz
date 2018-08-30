const $documentBody = document.querySelector('body');
const $errorContainer = document.querySelector('.error-container');
const $errorMessage = document.querySelector('.error-message');
const $newGameButton = document.querySelector('.button-new-game');
const $contentWrapper = document.querySelector('.content-wrapper')

export const $loader = document.querySelector('.header-strap')

// Components to be parsed into other markup later on

export const buttonGroup_mainMenu = `
  <button class="button button-new-game">New Game</button>
  <button class="button button-about">About</button>
  <button class="button button-settings">Settings</button>
`

export const buttonGroup_generalSettings = `
  <button class="button button-theme">Theme: Coral</button>
  <button class="button button-sound">Sound: </button>
  <button class="button button-back button-back--settings">Back</button>
`

export const multipleAnswers = answers => {
  return `
    <div class="answers-container multiple">
      <div class="answer-group-container">
        <div class="answer-box">
          <input class="answer-input" id="answer-0" type="radio" name="choice">
          <label class="answer-label" for="answer-0"><span class="label-text fully-centered">${answers[0]}</span></label>
        </div>
        <div class="answer-box">
          <input class="answer-input" id="answer-1" type="radio" name="choice">
          <label class="answer-label" for="answer-1"><span class="label-text fully-centered">${answers[1]}</span></label>
        </div>
      </div>
      <div class="answer-group-container">
        <div class="answer-box">
          <input class="answer-input" id="answer-2" type="radio" name="choice">
          <label class="answer-label" for="answer-2"><span class="label-text fully-centered">${answers[2]}</span></label>
        </div>
        <div class="answer-box">
          <input class="answer-input" id="answer-3" type="radio" name="choice">
          <label class="answer-label" for="answer-3"><span class="label-text fully-centered">${answers[3]}</span></label>
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
          <input class="answer-input" id="answer-0" type="radio" name="choice">
          <label class="answer-label" for="answer-0"><span class="label-text fully-centered">${answers[0]}</span></label>
        </div>
        <div class="answer-box">
          <input class="answer-input" id="answer-1" type="radio" name="choice">
          <label class="answer-label" for="answer-1"><span class="label-text fully-centered">${answers[1]}</span></label>
        </div>
      </div>
    </div>
  `
}

export const renderMenuDisplay = buttongroup => {
  $contentWrapper.innerHTML = `
  <div class="menu-wrapper">
    <div class="menu-content">
      <div class="big-background-logo-container">
        <h1 class="title">Quizzit</h1>
        <img class="circles" src="src/assets/header-circles-res.png" alt="">
        <img src="src/assets/1x/ribbon-yellow.png" class="ribbon">
      </div>
      <main class="button-group">
        ${buttongroup}
      </main>
    </div>
    <footer class="footer">
      <p>Doncimacko 2018 &copy;</p>
    </footer>
  </div>
  `
};

export const renderNewGameSettings = preloaded => {
  $contentWrapper.innerHTML = `
  <div class="menu-wrapper">
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
        <img src="src/assets/1x/ribbon-yellow.png" class="ribbon">
      </div>
      <main class="button-group">
        <button class="button button-difficulty">Medium</button>
        <button class="button button-category">All Categories</button>
        <button class="button button-quantity">10 Questions</button>
        <button class="button button-play">Play</button>
        <button class="button button-back button-back--newGame">Back</button>
      </main>
    </div>
    <footer class="footer">
      <p>Doncimacko 2018 &copy;</p>
    </footer>
  </div>
  `
}

export const renderQuestion = (answers_markup, question, answers, game) => {
  $contentWrapper.innerHTML = `
  <div class="new-game-wrapper">
    <div class="game-content">
      <main>
        <div class="background-container">
          <img class="fully-centered" src="src/assets/header-circles-res.png" alt="">
          <h1 class="title">Quizzit</h1>
        </div>
        <div class="question-container">
          <p class="question">${question}</p>
        </div>
        ${answers_markup(answers)}
        <div class="question-tracker-container">
          <p>${game.currQuestionIndex+1}/${game.length}</p>
        </div>
        <button class="button button-quit-game">Quit game</button>
      </main>
    </div>
    <footer class="footer">
      <p>Doncimacko 2018 &copy;</p>
    </footer>
  </div>
    `
};

export const renderGameEndScreen = () => {
  $contentWrapper.innerHTML = `
  <div class="game-end-wrapper">
    <div class="game-end-content">
      <img class="circles" src="src/assets/header-circles-res.png" alt="">
      <nav>
        <div class="logo-container">
          <p class="logo">Quizzit</p>
        </div>
        <img class="avatar-image" src="src/assets/user-avatar-default.jpg" alt="">
      </nav>
      <main>
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
            <polygon class="star-5" points="576.7,167.5 579,176.3 587.6,179.4 579.9,184.4 579.6,193.5 572.5,187.7 563.7,190.3 567.1,181.7
              561.9,174.2 571.1,174.7 "/>
            <polygon class="star-1" points="261.5,167.6 267.3,174.6 276.4,173.9 271.5,181.6 275.1,190 266.2,187.7 259.3,193.6 258.8,184.5
              250.9,179.8 259.4,176.5 "/>
            <polygon class="star-3" points="423.5,148.7 427.5,156.9 436.6,158.3 430,164.6 431.6,173.6 423.5,169.4 415.4,173.6 417,164.6
              410.4,158.3 419.5,156.9 "/>
            <polygon class="star-2" points="341.8,154.1 346.7,161.8 355.8,162.1 350,169.2 352.5,177.9 344,174.6 336.4,179.7 337,170.6
              329.8,164.9 338.6,162.6 "/>
            <polygon class="star-4" points="503,154.8 506.2,163.4 515,165.7 507.8,171.3 508.4,180.5 500.8,175.4 492.3,178.8 494.8,170
              489,162.9 498.1,162.6 "/>
          </svg>
        </div>
        <div class="result-container">
          <p class="score">Score: 17/20</p>
          <p class="points">+27 Points</p>
          <p class="message">Awesome!</p>
        </div>
        <div class="button-container">
          <button class="button-new-game">New game</button>
          <button class="button-main-menu">Main menu</button>
        </div>
      </main>
    </div>
    <footer class="footer">
      <p>Doncimacko 2018 &copy;</p>
    </footer>
  </div>
    `
};

export const showErrorMessage = (msg, retryCb) => {
  if (retryCb) {
    retryCb()
  }
  $errorMessage.innerText = msg;
  $errorContainer.style.display = "block";
  setTimeout(function() {
    $errorContainer.style.transform = "translateY(0%)";
    $newGameButton.style.borderColor = "#E94E38";
  }, 15);
  setTimeout(function() {
    $errorContainer.style.transform = "translateY(-100%)"
    $newGameButton.style.borderColor = "whitesmoke"
  }, 4000);
}