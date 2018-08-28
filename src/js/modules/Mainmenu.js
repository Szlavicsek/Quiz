import {
  renderNewGame,
  renderSettings
} from "./UI.js"

const MainMenu = (() => {
  const $errorContainer = document.querySelector('.error-container');
  const $newGameButton = document.querySelector('.button-new-game');
  let preloadedCategories;

  // Preload and pre-render every category for future "New Game" overlay
  const preloadCategories = () => {
    let rendered = ``;
    getCategories()
      .then(res => {
        const response = res.trivia_categories;
        response.forEach(category => {
          rendered += `
            <div class="option-item" data-id="${category.id}">${category.name.replace(/^(Entertainment:\s|Science:\s)/, "")}</div>
          `
          preloadedCategories = rendered
        })
      })
      .catch(err => preloadedCategories = "error")
  }

  // const renderNewGame = (preloaded) => {
  //   if (event.target.matches(".button-new-game")) {
  //     $documentBody.innerHTML = `
  //     <div class="menu-wrapper">
  //       <div class="overlay options-overlay--difficulty">
  //         <div class="option-container fully-centered vertical">
  //           <div class="option-item" data-difficulty="1">Easy</div>
  //           <div class="option-item" data-difficulty="2">Medium</div>
  //           <div class="option-item" data-difficulty="3">Hard</div>
  //         </div>
  //       </div>
  //       <div class="overlay options-overlay--quantity">
  //         <div class="option-container fully-centered vertical">
  //           <div class="option-item" data-quantity="10">10</div>
  //           <div class="option-item" data-quantity="20">20</div>
  //           <div class="option-item" data-quantity="30">30</div>
  //           <div class="option-item" data-quantity="40">40</div>
  //           <div class="option-item" data-quantity="50">50</div>
  //         </div>
  //       </div>
  //       <div class="overlay options-overlay--category">
  //         <div class="option-container fully-centered">
  //           <div class="option-item" data-id="0">All Categories</div>
  //           ${preloaded}
  //         </div>
  //       </div>
  //       <div class="menu-content">
  //         <header>
  //           <h1 class="title">Quizzit</h1>
  //           <img class="circles" src="src/assets/header-circles-res.png" alt="">
  //           <img src="src/assets/1x/ribbon-yellow.png" class="ribbon">
  //         </header>
  //         <main class="button-group">
  //           <button class="button-difficulty">Medium</button>
  //           <button class="button-category">All Categories</button>
  //           <button class="button-quantity">10 Questions</button>
  //           <button class="button-play">Play</button>
  //           <button class="button-back button-back--newGame">Back</button>
  //         </main>
  //       </div>
  //       <footer class="footer">
  //         <p>Doncimacko 2018 &copy;</p>
  //       </footer>
  //     </div>
  //     `
  //   }
  // }
  //
  // const renderSettings = event => {
  //   if (event.target.matches(".button-settings")) {
  //     $documentBody.innerHTML = `
  //     <div class="menu-wrapper">
  //       <div class="menu-content">
  //         <header>
  //           <h1 class="title">Quizzit</h1>
  //           <img class="circles" src="src/assets/header-circles-res.png" alt="">
  //           <img src="src/assets/1x/ribbon-yellow.png" class="ribbon">
  //         </header>
  //         <main class="button-group">
  //           <button class="button-theme">Theme: Coral</button>
  //           <button class="button-sound">Sound: </button>
  //           <button class="button-back button-back--settings">Back</button>
  //         </main>
  //       </div>
  //       <footer class="footer">
  //         <p>Doncimacko 2018 &copy;</p>
  //       </footer>
  //     </div>
  //     `
  //   }
  // };

  const renderAbout = () => {

  }

  async function getCategories() {
    const res = await fetch("https://opentdb.com/api_category.php")
    const json = res.json()
    return json
  }

  const eventListeners = () => {
    window.addEventListener("click", function() {
      if (preloadedCategories && preloadedCategories !== "error") {
        renderNewGame(preloadedCategories);
      } else if (preloadedCategories === "error") {
        showErrorMessage();
      }
    });
    window.addEventListener("click", renderSettings);
  }

  const showErrorMessage = () => {
    $errorContainer.style.display = "block";
    setTimeout(function() {
      $errorContainer.style.transform = "translateY(0%)";
      $newGameButton.style.borderColor = "#E94E38";
    }, 15);
    setTimeout(function() {
      $errorContainer.style.transform = "translateY(-100%)"
      $newGameButton.style.borderColor = "whitesmoke"
    }, 2000);
    preloadCategories()
  }

  const init = () => {
    preloadCategories();
    eventListeners();
  }

  return {
    init,
  }
})()

export default MainMenu