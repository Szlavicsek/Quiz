import GameLogic from "./GameLogic.js"
import MainMenu from "./Mainmenu.js"
const $documentBody = document.querySelector('body');

const NewGame = (() => {

  // let overlayIsOpen = false;

  const state = {
    difficulty: "medium",
    quantity: 10,
    category: null,
    overlayIsOpen: false,
    desiredQuantity: 10,
    maxAvaliable: undefined
  }

  const renderMain = (e) => {
    if (event.target.matches(".button-back--newGame")) {
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

  const difficultyClickEvent = (e) => {
    if (e.target.matches(".button-difficulty")) {
      const $difficultyOverlay = document.querySelector('.options-overlay--difficulty');
      $difficultyOverlay.style.display = "block";
      setTimeout(function() {
        $difficultyOverlay.style.opacity = "1";
      }, 1);
      state.overlayIsOpen = true;
    }
  }

  const categoryClickEvent = (e) => {
    if (e.target.matches(".button-category")) {
      const $categoriesOverlay = document.querySelector('.options-overlay--category');
      $categoriesOverlay.style.display = "block";
      setTimeout(function() {
        $categoriesOverlay.style.opacity = "1";
      }, 1);
      state.overlayIsOpen = true;
    }
  }

  const quantityClickEvent = (e) => {
    if (e.target.matches(".button-quantity")) {
      const $quantityOverlay = document.querySelector('.options-overlay--quantity');
      $quantityOverlay.style.display = "block";
      setTimeout(function() {
        $quantityOverlay.style.opacity = "1";
      }, 1);
      state.overlayIsOpen = true;
    }
  }

  const closeOverlay = (overlay) => {
    overlay.style.opacity = "0";
    setTimeout(function() {
      overlay.style.display = "none";
    }, 300);
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
    console.log("the difficulty is " + state.difficulty);
    document.querySelector('.button-difficulty').innerText = e.target.innerText
    closeOverlay(e.target.parentElement.parentElement)
  }

  const setCategory = (e) => {
    state.category = e.target.getAttribute("data-id")
    document.querySelector('.button-category').innerText = e.target.innerText;
    if (state.category !== "0") {
      checkAvailableQuantity(state.category)
        .then(res => {
          adjustQuantity(res);
          closeOverlay(e.target.parentElement.parentElement);
          // refresh quantity button and overlay options accordingly
          // refreshQuantityButtons(maxAvailable)
        })
        .catch(err => console.log(err))
    } else {
      state.availableQuantity = 50;
      state.quantity = state.desiredQuantity;
      closeOverlay(e.target.parentElement.parentElement);
    }
  }

  const setQuantity = (e) => {
    if (!e.target.classList.contains("disabled")) {
      state.quantity = e.target.innerText;
      if (state.quantity >= 20) {
        state.desiredQuantity = state.quantity
      }
      console.log(Math.floor(Math.random() * 10) + "the quantity is " + state.quantity);
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
      console.log('new log');
      state.quantity = state.desiredQuantity;
    } else if (state.maxAvailable <= 50) {
      console.log('called');
      state.quantity = Math.floor(state.maxAvailable / 10) * 10
    } else {
      console.log(state.desiredQuantity);
      state.quantity = 50;
    }
    refreshQuantityButtons()
    console.log("the category id is " + state.category + ", max is " + state.maxAvailable + ", quantity adjusted to " + state.quantity);
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

  async function checkAvailableQuantity(cat) {
    const resp = await fetch(`https://opentdb.com/api_count.php?category=${cat}`);
    const json = resp.json();
    return json
  }

  const initNewGame = (e) => {
    if (e.target.matches(".button-play")) {

    }
  }

  const eventListeners = () => {
    window.addEventListener("click", difficultyClickEvent);
    window.addEventListener("click", categoryClickEvent);
    window.addEventListener("click", quantityClickEvent);
    window.addEventListener("click", selectFromOverlay);
    window.addEventListener("click", renderMain);
    window.addEventListener("click", initNewGame);
  }

  const init = () => {
    eventListeners();
  }

  return {
    init
  }
})()

export default NewGame