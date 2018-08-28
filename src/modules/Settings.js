const Settings = (() => {
  const $themeButton = document.querySelector('.button-theme');
  const $soundButton = document.querySelector('.button-sound');
  const $backButton = document.querySelector('.button-back');
  const $documentBody = document.querySelector('body');

  const renderMain = event => {
    if (event.target.matches(".button-back--settings")) {
      console.log("backfromsettings");
      $documentBody.innerHTML = `
      <div class="menu-wrapper">
        <div class="menu-content">
          <header>
            <h1 class="title">Quizzit</h1>
            <img class="circles" src="assets/header-circles-res.png" alt="">
            <img src="assets/1x/ribbon-yellow.png" class="ribbon">
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
    }
  };

  const eventListeners = function() {
    // themeButton.addEventListener("click",)
    window.addEventListener("click", renderMain)
  }

  const init = () => {
    eventListeners();
  }

  return {
    init,
  }
})()

export default Settings