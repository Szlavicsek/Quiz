import * as UI from "./UI.js"
import {
  sounds
} from "./sounds.js"

const MainMenu = (() => {
  let preloadedCategories;

  async function getCategories() {
    let json;
    try {
      UI.$loader.style.transition = "margin-top 0.3s";
      UI.$loader.style.marginTop = "0";
      const resp = await fetch("https://opentdb.com/api_category.php");
      json = resp.json();
    } catch (e) {
      return e;
    } finally {
      UI.$loader.style.marginTop = "-3px";
    }
    return json;
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
          `;
          preloadedCategories = rendered;
        })
      })
      .catch(err => {
        if (err.type = "TypeError") {
          const message = "Sorry, we couldn't reach the server. Please retry later."
          UI.showErrorMessage(message);
        } else {
          preloadedCategories = "error";
        }
      })
  }

  const eventListeners = () => {
    window.addEventListener("click", function(e) {
      if (e.target.matches(".button-new-game")) {
        if (preloadedCategories && preloadedCategories !== "error") {
          UI.renderNewGameSettings(preloadedCategories);
        } else if (preloadedCategories === "error") {
          const message = "Sorry, it seems like the server is down. Please retr later."
          UI.showErrorMessage(message, preloadCategories);
        }
      } else if (e.target.matches(".button-settings")) {
        UI.renderMenuDisplay(UI.buttonGroup_generalSettings);
      } else if (e.target.matches(".button-about")) {
        UI.renderMenuDisplay(UI.buttonGroup_about);
      } else if (e.target.matches(".button-playright")) {
        sounds.correct.play();
      } else if (e.target.matches(".button-playwrong")) {
        sounds.wrong.play();
      } else if (e.target.matches(".button-playstar")) {
        sounds.star.play();
      }
    })
  };

  const init = () => {
    preloadCategories();
    eventListeners();
  }

  return {
    init
  }
})()

export default MainMenu