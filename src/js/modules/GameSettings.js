import QuizLogic from "./QuizLogic.js"
import MainMenu from "./MainMenu.js"
import * as UI from "./UI.js"

const GameSettings = (() => {

  const settings = {
    difficulty: "medium",
    quantity: 10,
    category: null,
    overlayIsOpen: false,
    desiredQuantity: 10,
    maxAvailable: 50
  }

  const restoreSettings = () => {
    settings.difficulty = "medium";
    settings.quantity = 10;
    settings.category = null;
    settings.overlayIsOpen = false;
    settings.desiredQuantity = 10;
    settings.maxAvailable = 50;
  }

  const checkAvailableQuantity = async (cat, e) => {
    let response;
    try {
      e.target.classList.toggle("loading-item");
      UI.$loader.style.marginTop = "0px";
      const res = await fetch(`https://opentdb.com/api_count.php?category=${cat}`);
      response = res.json();
    } catch (e) {
      return e;
    } finally {
      e.target.classList.toggle("loading-item");
      UI.$loader.style.marginTop = "-3px";
    }
    return response;
  }

  const setDifficulty = e => {
    let difficulty;
    switch (e.target.getAttribute("data-difficulty")) {
      case "1":
        difficulty = "easy"
        break;
      case "2":
        difficulty = "medium"
        break;
      case "3":
        difficulty = "hard"
        break;
    }
    // if category isn't "any category", checks and adjusts quantity
    settings.difficulty = difficulty;
    if (settings.category !== null) {
      checkAvailableQuantity(settings.category, e)
        .then(res => {
          adjustQuantity(res);
        })
        .catch(err => {
          const message = "Sorry, we couldn't reach the server. Please retry later."
          UI.showErrorMessage(message);
        })
    }
    document.querySelector('.button-difficulty').innerText = e.target.innerText;
    UI.closeOverlay(e.target.parentElement.parentElement);
  }

  const setCategory = e => {
    settings.category = e.target.getAttribute("data-id");
    // if category isn't "any category", checks and adjusts the available quantity.
    if (settings.category !== "0") {
      checkAvailableQuantity(settings.category, e)
        .then(res => {
          adjustQuantity(res);
          document.querySelector('.button-category').innerText = e.target.innerText;
          UI.closeOverlay(e.target.parentElement.parentElement);
        })
        .catch(err => {
          const message = "Sorry, we couldn't reach the server. Please retry later.";
          UI.closeOverlay(e.target.parentElement.parentElement);
          UI.showErrorMessage(message);
        })
      // else the available quantity defaults to 50
    } else {
      document.querySelector('.button-category').innerText = e.target.innerText;
      settings.maxAvailable = 50;
      settings.quantity = settings.desiredQuantity;
      refreshQuantityButtons();
      UI.closeOverlay(e.target.parentElement.parentElement);
    }
  }

  const setQuantity = e => {
    if (!e.target.classList.contains("disabled")) {
      settings.quantity = e.target.innerText;
      if (settings.quantity >= 20) {
        settings.desiredQuantity = settings.quantity;
      }
      refreshQuantityButtons();
      UI.closeOverlay(e.target.parentElement.parentElement);
    }
  }

  const adjustQuantity = res => {
    const difficulty = `total_${settings.difficulty}_question_count`;
    settings.maxAvailable = res.category_question_count[difficulty];
    if (settings.maxAvailable < 10) {
      settings.quantity = settings.maxAvailable;
    } else if (settings.maxAvailable > settings.desiredQuantity) {
      settings.quantity = settings.desiredQuantity;
    } else if (settings.maxAvailable <= 50) {
      settings.quantity = Math.floor(settings.maxAvailable / 10) * 10;
    } else {
      settings.quantity = 50;
    }
    refreshQuantityButtons();
  }

  const refreshQuantityButtons = () => {
    // Refresh question quantity button accordingly
    document.querySelector('.button-quantity').innerText = `${settings.quantity} Questions`;
    const $quantityOptions = Array.from(document.querySelectorAll('.option-item[data-quantity]'));
    // Refresh possible quantity options accordingly on the overlay screen.
    // If it's less than 10, max quantity is set to the max available number of questions
    if (settings.quantity < 10) {
      $quantityOptions.forEach(option => {
        if (option.getAttribute("data-quantity") === "10") {
          option.innerText = settings.quantity;
        } else {
          option.className = "option-item disabled";
        }
      })
      // Else if it's more than 10, max quantity is rounded to 10
    } else {
      $quantityOptions.forEach(option => {
        option.innerText = option.getAttribute("data-quantity");
        if (option.getAttribute("data-quantity") <= settings.maxAvailable) {
          option.className = "option-item";
        } else {
          option.className = "option-item disabled";
        }
      })
    }
  }

  // Event functions

  const difficultyClickEvent = () => {
    const $difficultyOverlay = document.querySelector('.options-overlay--difficulty');
    $difficultyOverlay.style.display = "block";
    setTimeout(function() {
      $difficultyOverlay.style.opacity = "1";
    }, 1);
    settings.overlayIsOpen = true;
  }

  const categoryClickEvent = () => {
    const $categoriesOverlay = document.querySelector('.options-overlay--category');
    $categoriesOverlay.style.display = "block";
    setTimeout(function() {
      $categoriesOverlay.style.opacity = "1";
    }, 1);
    settings.overlayIsOpen = true;
  }

  const quantityClickEvent = () => {
    const $quantityOverlay = document.querySelector('.options-overlay--quantity');
    $quantityOverlay.style.display = "block";
    setTimeout(function() {
      $quantityOverlay.style.opacity = "1";
    }, 1);
    settings.overlayIsOpen = true;
  }

  const playClickEvent = () => {
    QuizLogic.initNewGame(settings);
    restoreSettings();
  }

  const selectFromOverlay = e => {
    if (e.target.matches(".overlay") && !e.target.matches(".overlay--game-end")) {
      UI.closeOverlay(e.target);
      settings.overlayIsOpen = false;
    } else if (e.target.matches(".option-container")) {
      UI.closeOverlay(e.target.parentElement);
      settings.overlayIsOpen = false;
    } else if (e.target.matches(".option-item")) {
      if (e.target.parentElement.parentElement.matches(".options-overlay--difficulty")) {
        setDifficulty(e);
      } else if (e.target.parentElement.parentElement.matches(".options-overlay--category")) {
        setCategory(e);
      } else if (e.target.parentElement.parentElement.matches(".options-overlay--quantity")) {
        setQuantity(e);
      }
    }
  }

  // Event listeners

  const eventListeners = () => {
    window.addEventListener("click", function(e) {
      if (e.target.matches(".button-difficulty")) {
        difficultyClickEvent();
      } else if (e.target.matches(".button-category")) {
        categoryClickEvent();
      } else if (e.target.matches(".button-quantity")) {
        quantityClickEvent();
      } else if (e.target.matches(".button-play")) {
        playClickEvent();
      } else if (e.target.matches(".button-main-menu")) {
        UI.renderMenuDisplay(UI.buttonGroup_mainMenu);
      } else {
        selectFromOverlay(e);
      }
    })
  }

  const init = () => {
    eventListeners();
  }

  return {
    init,
    settings
  }
})()

export default GameSettings