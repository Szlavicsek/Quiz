const $documentBody = document.querySelector('body');

export const renderNewGame = preloaded => {
  $documentBody.innerHTML = `
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
      <header>
        <h1 class="title">Quizzit</h1>
        <img class="circles" src="src/assets/header-circles-res.png" alt="">
        <img src="src/assets/1x/ribbon-yellow.png" class="ribbon">
      </header>
      <main class="button-group">
        <button class="button-difficulty">Medium</button>
        <button class="button-category">All Categories</button>
        <button class="button-quantity">10 Questions</button>
        <button class="button-play">Play</button>
        <button class="button-back button-back--newGame">Back</button>
      </main>
    </div>
    <footer class="footer">
      <p>Doncimacko 2018 &copy;</p>
    </footer>
  </div>
  `
}

export const renderSettings = () => {
  $documentBody.innerHTML = `
  <div class="menu-wrapper">
    <div class="menu-content">
      <header>
        <h1 class="title">Quizzit</h1>
        <img class="circles" src="src/assets/header-circles-res.png" alt="">
        <img src="src/assets/1x/ribbon-yellow.png" class="ribbon">
      </header>
      <main class="button-group">
        <button class="button-theme">Theme: Coral</button>
        <button class="button-sound">Sound: </button>
        <button class="button-back button-back--settings">Back</button>
      </main>
    </div>
    <footer class="footer">
      <p>Doncimacko 2018 &copy;</p>
    </footer>
  </div>
  `
};

export const renderMain = () => {
  $documentBody.innerHTML = `
    <div class="menu-wrapper">
      <div class="menu-content">
        <header>
          <h1 class="title">Quizzit</h1>
          <img class="circles" src="src/assets/header-circles-res.png" alt="">
          <img src="src/assets/1x/ribbon-yellow.png" class="ribbon">
        </header>
        <main class="button-group">
          <button class="button-new-game">New Game</button>
          <button class="button-about">About</button>
          <button class="button-settings">Settings</button>
        </main>
      </div>
      <footer class="footer">
        <p>Doncimacko 2018 &copy;</p>
      </footer>
    </div>
    `
};

// export const renderAbout = () => {
//
// }