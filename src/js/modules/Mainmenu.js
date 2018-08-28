import {
  renderNewGame,
  renderSettings
} from "./UI.js"

const MainMenu = (() => {
  const $errorContainer = document.querySelector('.error-container');
  const $newGameButton = document.querySelector('.button-new-game');
  let preloadedCategories;

  async function getCategories() {
    const res = await fetch("https://opentdb.com/api_category.php")
    const json = res.json()
    return json
  }

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

  const eventListeners = () => {
    window.addEventListener("click", function(e) {
      if (e.target.matches(".button-new-game")) {
        if (preloadedCategories && preloadedCategories !== "error") {
          renderNewGame(preloadedCategories);
        } else if (preloadedCategories === "error") {
          showErrorMessage();
        }
      } else if (e.target.matches(".button-settings")) {
        renderSettings()
      }
    });
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