/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_Mainmenu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Mainmenu.js */ \"./src/js/modules/Mainmenu.js\");\n/* harmony import */ var _modules_Settings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Settings.js */ \"./src/js/modules/Settings.js\");\n/* harmony import */ var _modules_NewGame_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/NewGame.js */ \"./src/js/modules/NewGame.js\");\n/* harmony import */ var _modules_GameLogic_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/GameLogic.js */ \"./src/js/modules/GameLogic.js\");\n\r\n\r\n\r\n\r\n\r\n_modules_Settings_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].init();\r\n// Settings.eventListeners();\r\n_modules_Mainmenu_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].init();\r\n_modules_NewGame_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].init();\r\n_modules_GameLogic_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].init();\r\n// MainMenu.eventListeners();\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/modules/GameLogic.js":
/*!*************************************!*\
  !*** ./src/js/modules/GameLogic.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst GameLogic = (() => {\r\n\r\n  class Game {\r\n    constructor(questions) {\r\n      this.questions = questions;\r\n      this.currentQuestionIndex = 0;\r\n      this.score = 0;\r\n      this.gameHasEnded = false;\r\n    }\r\n  }\r\n\r\n  const init = () => {}\r\n\r\n  return {\r\n    init,\r\n  }\r\n})()\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameLogic);\n\n//# sourceURL=webpack:///./src/js/modules/GameLogic.js?");

/***/ }),

/***/ "./src/js/modules/Mainmenu.js":
/*!************************************!*\
  !*** ./src/js/modules/Mainmenu.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _UI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI.js */ \"./src/js/modules/UI.js\");\n\r\n\r\nconst MainMenu = (() => {\r\n  const $errorContainer = document.querySelector('.error-container');\r\n  const $newGameButton = document.querySelector('.button-new-game');\r\n  let preloadedCategories;\r\n\r\n  async function getCategories() {\r\n    const res = await fetch(\"https://opentdb.com/api_category.php\")\r\n    const json = res.json()\r\n    return json\r\n  }\r\n\r\n  // Preload and pre-render every category for future \"New Game\" overlay\r\n  const preloadCategories = () => {\r\n    let rendered = ``;\r\n    getCategories()\r\n      .then(res => {\r\n        const response = res.trivia_categories;\r\n        response.forEach(category => {\r\n          rendered += `\r\n            <div class=\"option-item\" data-id=\"${category.id}\">${category.name.replace(/^(Entertainment:\\s|Science:\\s)/, \"\")}</div>\r\n          `\r\n          preloadedCategories = rendered\r\n        })\r\n      })\r\n      .catch(err => preloadedCategories = \"error\")\r\n  }\r\n\r\n  const showErrorMessage = () => {\r\n    $errorContainer.style.display = \"block\";\r\n    setTimeout(function() {\r\n      $errorContainer.style.transform = \"translateY(0%)\";\r\n      $newGameButton.style.borderColor = \"#E94E38\";\r\n    }, 15);\r\n    setTimeout(function() {\r\n      $errorContainer.style.transform = \"translateY(-100%)\"\r\n      $newGameButton.style.borderColor = \"whitesmoke\"\r\n    }, 2000);\r\n    preloadCategories()\r\n  }\r\n\r\n  const eventListeners = () => {\r\n    window.addEventListener(\"click\", function(e) {\r\n      if (e.target.matches(\".button-new-game\")) {\r\n        if (preloadedCategories && preloadedCategories !== \"error\") {\r\n          Object(_UI_js__WEBPACK_IMPORTED_MODULE_0__[\"renderNewGame\"])(preloadedCategories);\r\n        } else if (preloadedCategories === \"error\") {\r\n          showErrorMessage();\r\n        }\r\n      } else if (e.target.matches(\".button-settings\")) {\r\n        Object(_UI_js__WEBPACK_IMPORTED_MODULE_0__[\"renderSettings\"])()\r\n      }\r\n    });\r\n  }\r\n\r\n  const init = () => {\r\n    preloadCategories();\r\n    eventListeners();\r\n  }\r\n\r\n  return {\r\n    init,\r\n  }\r\n})()\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainMenu);\n\n//# sourceURL=webpack:///./src/js/modules/Mainmenu.js?");

/***/ }),

/***/ "./src/js/modules/NewGame.js":
/*!***********************************!*\
  !*** ./src/js/modules/NewGame.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _GameLogic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameLogic.js */ \"./src/js/modules/GameLogic.js\");\n/* harmony import */ var _Mainmenu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Mainmenu.js */ \"./src/js/modules/Mainmenu.js\");\n/* harmony import */ var _UI_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UI.js */ \"./src/js/modules/UI.js\");\n\r\n\r\n\r\n\r\nconst NewGame = (() => {\r\n\r\n  const state = {\r\n    difficulty: \"medium\",\r\n    quantity: 10,\r\n    category: null,\r\n    overlayIsOpen: false,\r\n    desiredQuantity: 10,\r\n    maxAvaliable: undefined\r\n  }\r\n\r\n  const difficultyClickEvent = () => {\r\n    const $difficultyOverlay = document.querySelector('.options-overlay--difficulty');\r\n    $difficultyOverlay.style.display = \"block\";\r\n    setTimeout(function() {\r\n      $difficultyOverlay.style.opacity = \"1\";\r\n    }, 1);\r\n    state.overlayIsOpen = true;\r\n  }\r\n\r\n  const categoryClickEvent = () => {\r\n    const $categoriesOverlay = document.querySelector('.options-overlay--category');\r\n    $categoriesOverlay.style.display = \"block\";\r\n    setTimeout(function() {\r\n      $categoriesOverlay.style.opacity = \"1\";\r\n    }, 1);\r\n    state.overlayIsOpen = true;\r\n  }\r\n\r\n  const quantityClickEvent = () => {\r\n    const $quantityOverlay = document.querySelector('.options-overlay--quantity');\r\n    $quantityOverlay.style.display = \"block\";\r\n    setTimeout(function() {\r\n      $quantityOverlay.style.opacity = \"1\";\r\n    }, 1);\r\n    state.overlayIsOpen = true;\r\n  }\r\n\r\n  const closeOverlay = (overlay) => {\r\n    overlay.style.opacity = \"0\";\r\n    setTimeout(function() {\r\n      overlay.style.display = \"none\";\r\n    }, 300);\r\n  }\r\n\r\n  const selectFromOverlay = (e) => {\r\n    if (e.target.matches(\".overlay\")) {\r\n      closeOverlay(e.target);\r\n      state.overlayIsOpen = false;\r\n    } else if (e.target.matches(\".option-container\")) {\r\n      closeOverlay(e.target.parentElement);\r\n      state.overlayIsOpen = false;\r\n    } else if (e.target.matches(\".option-item\")) {\r\n      if (e.target.parentElement.parentElement.matches(\".options-overlay--difficulty\")) {\r\n        setDifficulty(e)\r\n      } else if (e.target.parentElement.parentElement.matches(\".options-overlay--category\")) {\r\n        setCategory(e)\r\n      } else if (e.target.parentElement.parentElement.matches(\".options-overlay--quantity\")) {\r\n        setQuantity(e)\r\n      }\r\n    }\r\n  }\r\n\r\n  const setDifficulty = (e) => {\r\n    let difficulty;\r\n    switch (e.target.getAttribute(\"data-difficulty\")) {\r\n      case \"1\":\r\n        difficulty = \"easy\"\r\n        break;\r\n      case \"2\":\r\n        difficulty = \"medium\"\r\n        break;\r\n      case \"3\":\r\n        difficulty = \"hard\"\r\n        break;\r\n    }\r\n    state.difficulty = difficulty;\r\n    if (state.category !== null) {\r\n      checkAvailableQuantity(state.category)\r\n        .then(res => {\r\n          adjustQuantity(res);\r\n        })\r\n        .catch(err => console.log(err))\r\n    }\r\n    console.log(\"the difficulty is \" + state.difficulty);\r\n    document.querySelector('.button-difficulty').innerText = e.target.innerText\r\n    closeOverlay(e.target.parentElement.parentElement)\r\n  }\r\n\r\n  const setCategory = (e) => {\r\n    state.category = e.target.getAttribute(\"data-id\")\r\n    document.querySelector('.button-category').innerText = e.target.innerText;\r\n    if (state.category !== \"0\") {\r\n      checkAvailableQuantity(state.category)\r\n        .then(res => {\r\n          adjustQuantity(res);\r\n          closeOverlay(e.target.parentElement.parentElement);\r\n          // refresh quantity button and overlay options accordingly\r\n          // refreshQuantityButtons(maxAvailable)\r\n        })\r\n        .catch(err => console.log(err))\r\n    } else {\r\n      state.availableQuantity = 50;\r\n      state.quantity = state.desiredQuantity;\r\n      closeOverlay(e.target.parentElement.parentElement);\r\n    }\r\n  }\r\n\r\n  const setQuantity = (e) => {\r\n    if (!e.target.classList.contains(\"disabled\")) {\r\n      state.quantity = e.target.innerText;\r\n      if (state.quantity >= 20) {\r\n        state.desiredQuantity = state.quantity\r\n      }\r\n      console.log(Math.floor(Math.random() * 10) + \"the quantity is \" + state.quantity);\r\n      refreshQuantityButtons();\r\n      closeOverlay(e.target.parentElement.parentElement)\r\n    }\r\n  }\r\n\r\n  const adjustQuantity = (res) => {\r\n    const difficulty = `total_${state.difficulty}_question_count`;\r\n    state.maxAvailable = res.category_question_count[difficulty];\r\n    if (state.maxAvailable < 10) {\r\n      state.quantity = state.maxAvailable\r\n    } else if (state.maxAvailable > state.desiredQuantity) {\r\n      console.log('new log');\r\n      state.quantity = state.desiredQuantity;\r\n    } else if (state.maxAvailable <= 50) {\r\n      console.log('called');\r\n      state.quantity = Math.floor(state.maxAvailable / 10) * 10\r\n    } else {\r\n      console.log(state.desiredQuantity);\r\n      state.quantity = 50;\r\n    }\r\n    refreshQuantityButtons()\r\n    console.log(\"the category id is \" + state.category + \", max is \" + state.maxAvailable + \", quantity adjusted to \" + state.quantity);\r\n  }\r\n\r\n  const refreshQuantityButtons = () => {\r\n    // Refresh main \"n Questions\" button accordingly\r\n    document.querySelector('.button-quantity').innerText = `${state.quantity} Questions`;\r\n\r\n    const $quantityOptions = Array.from(document.querySelectorAll('.option-item[data-quantity]'));\r\n    // Refresh possible quantity options accordingly on the overlay screen\r\n    if (state.quantity < 10) {\r\n      $quantityOptions.forEach(option => {\r\n        if (option.getAttribute(\"data-quantity\") === \"10\") {\r\n          option.innerText = state.quantity;\r\n        } else {\r\n          option.className = \"option-item disabled\";\r\n        }\r\n      });\r\n    } else {\r\n      $quantityOptions.forEach(option => {\r\n        option.innerText = option.getAttribute(\"data-quantity\");\r\n        if (option.getAttribute(\"data-quantity\") <= state.maxAvailable) {\r\n          option.className = \"option-item\"\r\n        } else {\r\n          option.className = \"option-item disabled\"\r\n        }\r\n      });\r\n    }\r\n  }\r\n\r\n  async function checkAvailableQuantity(cat) {\r\n    const resp = await fetch(`https://opentdb.com/api_count.php?category=${cat}`);\r\n    const json = resp.json();\r\n    return json\r\n  }\r\n\r\n  const initNewGame = (e) => {}\r\n\r\n  const eventListeners = () => {\r\n    window.addEventListener(\"click\", function(e) {\r\n      if (e.target.matches(\".button-difficulty\")) {\r\n        difficultyClickEvent();\r\n      } else if (e.target.matches(\".button-category\")) {\r\n        categoryClickEvent();\r\n      } else if (e.target.matches(\".button-quantity\")) {\r\n        quantityClickEvent();\r\n      } else if (e.target.matches(\".button-back--newGame\")) {\r\n        Object(_UI_js__WEBPACK_IMPORTED_MODULE_2__[\"renderMain\"])();\r\n      } else {\r\n        selectFromOverlay(e);\r\n      }\r\n    })\r\n  }\r\n\r\n  const init = () => {\r\n    eventListeners();\r\n  }\r\n\r\n  return {\r\n    init\r\n  }\r\n})()\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewGame);\n\n//# sourceURL=webpack:///./src/js/modules/NewGame.js?");

/***/ }),

/***/ "./src/js/modules/Settings.js":
/*!************************************!*\
  !*** ./src/js/modules/Settings.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Settings = (() => {\r\n  const $themeButton = document.querySelector('.button-theme');\r\n  const $soundButton = document.querySelector('.button-sound');\r\n  const $backButton = document.querySelector('.button-back');\r\n  const $documentBody = document.querySelector('body');\r\n\r\n  const renderMain = event => {\r\n    if (event.target.matches(\".button-back--settings\")) {\r\n      console.log(\"backfromsettings\");\r\n      $documentBody.innerHTML = `\r\n      <div class=\"menu-wrapper\">\r\n        <div class=\"menu-content\">\r\n          <header>\r\n            <h1 class=\"title\">Quizzit</h1>\r\n            <img class=\"circles\" src=\"assets/header-circles-res.png\" alt=\"\">\r\n            <img src=\"assets/1x/ribbon-yellow.png\" class=\"ribbon\">\r\n          </header>\r\n          <main class=\"button-group\">\r\n            <button class=\"button-new-game\">New Game</button>\r\n            <button class=\"button-about\">About</button>\r\n            <button class=\"button-settings\">Settings</button>\r\n          </main>\r\n        </div>\r\n        <footer class=\"footer\">\r\n          <p>Doncimacko 2018 &copy;</p>\r\n        </footer>\r\n      </div>\r\n      `\r\n    }\r\n  };\r\n\r\n  const eventListeners = function() {\r\n    // themeButton.addEventListener(\"click\",)\r\n    window.addEventListener(\"click\", renderMain)\r\n  }\r\n\r\n  const init = () => {\r\n    eventListeners();\r\n  }\r\n\r\n  return {\r\n    init,\r\n  }\r\n})()\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Settings);\n\n//# sourceURL=webpack:///./src/js/modules/Settings.js?");

/***/ }),

/***/ "./src/js/modules/UI.js":
/*!******************************!*\
  !*** ./src/js/modules/UI.js ***!
  \******************************/
/*! exports provided: renderNewGame, renderSettings, renderMain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderNewGame\", function() { return renderNewGame; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderSettings\", function() { return renderSettings; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderMain\", function() { return renderMain; });\nconst $documentBody = document.querySelector('body');\r\n\r\nconst renderNewGame = preloaded => {\r\n  $documentBody.innerHTML = `\r\n  <div class=\"menu-wrapper\">\r\n    <div class=\"overlay options-overlay--difficulty\">\r\n      <div class=\"option-container fully-centered vertical\">\r\n        <div class=\"option-item\" data-difficulty=\"1\">Easy</div>\r\n        <div class=\"option-item\" data-difficulty=\"2\">Medium</div>\r\n        <div class=\"option-item\" data-difficulty=\"3\">Hard</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"overlay options-overlay--quantity\">\r\n      <div class=\"option-container fully-centered vertical\">\r\n        <div class=\"option-item\" data-quantity=\"10\">10</div>\r\n        <div class=\"option-item\" data-quantity=\"20\">20</div>\r\n        <div class=\"option-item\" data-quantity=\"30\">30</div>\r\n        <div class=\"option-item\" data-quantity=\"40\">40</div>\r\n        <div class=\"option-item\" data-quantity=\"50\">50</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"overlay options-overlay--category\">\r\n      <div class=\"option-container fully-centered\">\r\n        <div class=\"option-item\" data-id=\"0\">All Categories</div>\r\n        ${preloaded}\r\n      </div>\r\n    </div>\r\n    <div class=\"menu-content\">\r\n      <header>\r\n        <h1 class=\"title\">Quizzit</h1>\r\n        <img class=\"circles\" src=\"src/assets/header-circles-res.png\" alt=\"\">\r\n        <img src=\"src/assets/1x/ribbon-yellow.png\" class=\"ribbon\">\r\n      </header>\r\n      <main class=\"button-group\">\r\n        <button class=\"button-difficulty\">Medium</button>\r\n        <button class=\"button-category\">All Categories</button>\r\n        <button class=\"button-quantity\">10 Questions</button>\r\n        <button class=\"button-play\">Play</button>\r\n        <button class=\"button-back button-back--newGame\">Back</button>\r\n      </main>\r\n    </div>\r\n    <footer class=\"footer\">\r\n      <p>Doncimacko 2018 &copy;</p>\r\n    </footer>\r\n  </div>\r\n  `\r\n}\r\n\r\nconst renderSettings = () => {\r\n  $documentBody.innerHTML = `\r\n  <div class=\"menu-wrapper\">\r\n    <div class=\"menu-content\">\r\n      <header>\r\n        <h1 class=\"title\">Quizzit</h1>\r\n        <img class=\"circles\" src=\"src/assets/header-circles-res.png\" alt=\"\">\r\n        <img src=\"src/assets/1x/ribbon-yellow.png\" class=\"ribbon\">\r\n      </header>\r\n      <main class=\"button-group\">\r\n        <button class=\"button-theme\">Theme: Coral</button>\r\n        <button class=\"button-sound\">Sound: </button>\r\n        <button class=\"button-back button-back--settings\">Back</button>\r\n      </main>\r\n    </div>\r\n    <footer class=\"footer\">\r\n      <p>Doncimacko 2018 &copy;</p>\r\n    </footer>\r\n  </div>\r\n  `\r\n};\r\n\r\nconst renderMain = () => {\r\n  $documentBody.innerHTML = `\r\n    <div class=\"menu-wrapper\">\r\n      <div class=\"menu-content\">\r\n        <header>\r\n          <h1 class=\"title\">Quizzit</h1>\r\n          <img class=\"circles\" src=\"src/assets/header-circles-res.png\" alt=\"\">\r\n          <img src=\"src/assets/1x/ribbon-yellow.png\" class=\"ribbon\">\r\n        </header>\r\n        <main class=\"button-group\">\r\n          <button class=\"button-new-game\">New Game</button>\r\n          <button class=\"button-about\">About</button>\r\n          <button class=\"button-settings\">Settings</button>\r\n        </main>\r\n      </div>\r\n      <footer class=\"footer\">\r\n        <p>Doncimacko 2018 &copy;</p>\r\n      </footer>\r\n    </div>\r\n    `\r\n};\r\n\r\n// export const renderAbout = () => {\r\n//\r\n// }\n\n//# sourceURL=webpack:///./src/js/modules/UI.js?");

/***/ })

/******/ });