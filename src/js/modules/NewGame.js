import QuizLogic from "./QuizLogic.js"
import MainMenu from "./Mainmenu.js"
import * as UI from "./UI.js"

const NewGame = (() => {

  const state = {
    difficulty: "medium",
    quantity: 10,
    category: null,
    overlayIsOpen: false,
    desiredQuantity: 10,
    maxAvaliable: undefined
  }

  const closeOverlay = (overlay) => {
    overlay.style.opacity = "0";
    setTimeout(function() {
      overlay.style.display = "none";
    }, 300);
  }

  const setDifficulty = (e) => {
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
    state.difficulty = difficulty;
    if (state.category !== null) {
      checkAvailableQuantity(state.category)
        .then(res => {
          adjustQuantity(res);
        })
        .catch(err => console.log(err))
    }
    document.querySelector('.button-difficulty').innerText = e.target.innerText
    closeOverlay(e.target.parentElement.parentElement)
  }

  const setCategory = (e) => {
    state.category = e.target.getAttribute("data-id")
    document.querySelector('.button-category').innerText = e.target.innerText;
    if (state.category !== "0") {
      checkAvailableQuantity(state.category, e)
        .then(res => {
          adjustQuantity(res);
          closeOverlay(e.target.parentElement.parentElement);
        })
        .catch(err => console.log(err))
    } else {
      state.availableQuantity = 50;
      state.quantity = state.desiredQuantity;
      refreshQuantityButtons();
      closeOverlay(e.target.parentElement.parentElement);
    }
  }

  const setQuantity = (e) => {
    if (!e.target.classList.contains("disabled")) {
      state.quantity = e.target.innerText;
      if (state.quantity >= 20) {
        state.desiredQuantity = state.quantity
      }
      refreshQuantityButtons();
      closeOverlay(e.target.parentElement.parentElement)
    }
  }

  const adjustQuantity = (res) => {
    const difficulty = `total_${state.difficulty}_question_count`;
    state.maxAvailable = res.category_question_count[difficulty];
    if (state.maxAvailable < 10) {
      state.quantity = state.maxAvailable
    } else if (state.maxAvailable > state.desiredQuantity) {
      state.quantity = state.desiredQuantity;
    } else if (state.maxAvailable <= 50) {
      state.quantity = Math.floor(state.maxAvailable / 10) * 10
    } else {
      state.quantity = 50;
    }
    refreshQuantityButtons()
  }

  const refreshQuantityButtons = () => {

    // Refresh main "n Questions" button accordingly
    document.querySelector('.button-quantity').innerText = `${state.quantity} Questions`;
    const $quantityOptions = Array.from(document.querySelectorAll('.option-item[data-quantity]'));

    // Refresh possible quantity options accordingly on the overlay screen
    if (state.quantity < 10) {
      $quantityOptions.forEach(option => {
        if (option.getAttribute("data-quantity") === "10") {
          option.innerText = state.quantity;
        } else {
          option.className = "option-item disabled";
        }
      });

    } else {
      $quantityOptions.forEach(option => {
        option.innerText = option.getAttribute("data-quantity");
        if (option.getAttribute("data-quantity") <= state.maxAvailable) {
          option.className = "option-item"
        } else {
          option.className = "option-item disabled"
        }
      });
    }
  }

  async function checkAvailableQuantity(cat, e) {
    let response;
    try {
      console.log("ljljljljl");
      e.target.style.backgroundColor = "#92BA3F"
      document.querySelector('.header-background-strap').style.marginTop = "0px"
      const res = await fetch(`https://opentdb.com/api_count.php?category=${cat}`);
      response = res.json()
    } catch (e) {
      console.log(e);
    } finally {
      e.target.style.backgroundColor = "#F69085"
      document.querySelector('.header-background-strap').style.marginTop = "-3px"
    }
    return response
    const resp = await fetch(`https://opentdb.com/api_count.php?category=${cat}`);
    const json = resp.json();
    return json
  }

  // Event functions

  const difficultyClickEvent = () => {
    const $difficultyOverlay = document.querySelector('.options-overlay--difficulty');
    $difficultyOverlay.style.display = "block";
    setTimeout(function() {
      $difficultyOverlay.style.opacity = "1";
    }, 1);
    state.overlayIsOpen = true;
  }

  const categoryClickEvent = () => {
    const $categoriesOverlay = document.querySelector('.options-overlay--category');
    $categoriesOverlay.style.display = "block";
    setTimeout(function() {
      $categoriesOverlay.style.opacity = "1";
    }, 1);
    state.overlayIsOpen = true;
  }

  const quantityClickEvent = () => {
    const $quantityOverlay = document.querySelector('.options-overlay--quantity');
    $quantityOverlay.style.display = "block";
    setTimeout(function() {
      $quantityOverlay.style.opacity = "1";
    }, 1);
    state.overlayIsOpen = true;
  }

  const playClickEvent = () => {
    QuizLogic.initNewGame(state)
  }

  const selectFromOverlay = (e) => {
    if (e.target.matches(".overlay")) {
      closeOverlay(e.target);
      state.overlayIsOpen = false;
    } else if (e.target.matches(".option-container")) {
      closeOverlay(e.target.parentElement);
      state.overlayIsOpen = false;
    } else if (e.target.matches(".option-item")) {
      if (e.target.parentElement.parentElement.matches(".options-overlay--difficulty")) {
        setDifficulty(e)
      } else if (e.target.parentElement.parentElement.matches(".options-overlay--category")) {
        setCategory(e)
      } else if (e.target.parentElement.parentElement.matches(".options-overlay--quantity")) {
        setQuantity(e)
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
      } else if (e.target.matches(".button-back--newGame")) {
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
    init
  }
})()

export default NewGame