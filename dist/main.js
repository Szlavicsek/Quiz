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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_MainMenu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/MainMenu.js */ \"./src/js/modules/MainMenu.js\");\n/* harmony import */ var _modules_GeneralSettings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/GeneralSettings.js */ \"./src/js/modules/GeneralSettings.js\");\n/* harmony import */ var _modules_GameSettings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/GameSettings.js */ \"./src/js/modules/GameSettings.js\");\n/* harmony import */ var _modules_QuizLogic_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/QuizLogic.js */ \"./src/js/modules/QuizLogic.js\");\n\r\n\r\n\r\n\r\n\r\n// GeneralSettings.init();\r\n_modules_MainMenu_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].init();\r\n_modules_GameSettings_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].init();\r\n_modules_QuizLogic_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].init();\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/modules/EndScreen.js":
/*!*************************************!*\
  !*** ./src/js/modules/EndScreen.js ***!
  \*************************************/
/*! exports provided: paintStars, animateRibbon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"paintStars\", function() { return paintStars; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"animateRibbon\", function() { return animateRibbon; });\n/* harmony import */ var _UI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI.js */ \"./src/js/modules/UI.js\");\n/* harmony import */ var _QuizLogic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuizLogic.js */ \"./src/js/modules/QuizLogic.js\");\n/* harmony import */ var _GameSettings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GameSettings.js */ \"./src/js/modules/GameSettings.js\");\n/* harmony import */ var _sounds_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sounds.js */ \"./src/js/modules/sounds.js\");\n\r\n\r\n\r\n\r\n\r\nconst paintStars = newGame => {\r\n  const percentage = newGame.totalGotRight / newGame.questions.length.toFixed(2) * 100;\r\n  let starCount;\r\n  switch (true) {\r\n    case percentage <= 20:\r\n      starCount = 1;\r\n      break;\r\n    case percentage <= 40:\r\n      starCount = 2;\r\n      break;\r\n    case percentage <= 60:\r\n      starCount = 3;\r\n      break;\r\n    case percentage <= 80:\r\n      starCount = 4;\r\n      break;\r\n    case percentage > 80:\r\n      starCount = 5;\r\n      break;\r\n  }\r\n\r\n  const $stars = Array.from(document.querySelectorAll('.star'))\r\n  //reset basic star color\r\n  $stars.forEach(star => star.style.fill = \"#EF7667\")\r\n  //paint white stars\r\n  $stars.forEach((star, i) => {\r\n    if (i < starCount) {\r\n      setTimeout(function() {\r\n        _sounds_js__WEBPACK_IMPORTED_MODULE_3__[\"sounds\"].star.play();\r\n        star.style.fill = \"whitesmoke\";\r\n        console.log(`starring. index ${i}, starcount ${starCount}`);\r\n      }, i * 300)\r\n    }\r\n  })\r\n}\r\n\r\nconst animateRibbon = () => {\r\n  const $ribbonContainer = document.querySelector('.ribbon-container');\r\n  $ribbonContainer.style.opacity = \"1\";\r\n  $ribbonContainer.style.transform = \"translateY(0px) scale(1)\"\r\n}\n\n//# sourceURL=webpack:///./src/js/modules/EndScreen.js?");

/***/ }),

/***/ "./src/js/modules/GameSettings.js":
/*!****************************************!*\
  !*** ./src/js/modules/GameSettings.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _QuizLogic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuizLogic.js */ \"./src/js/modules/QuizLogic.js\");\n/* harmony import */ var _MainMenu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainMenu.js */ \"./src/js/modules/MainMenu.js\");\n/* harmony import */ var _UI_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UI.js */ \"./src/js/modules/UI.js\");\n\r\n\r\n\r\n\r\nconst GameSettings = (() => {\r\n\r\n  const settings = {\r\n    difficulty: \"medium\",\r\n    quantity: 10,\r\n    category: null,\r\n    overlayIsOpen: false,\r\n    desiredQuantity: 10,\r\n    maxAvailable: 50\r\n  }\r\n\r\n  const restoreSettings = () => {\r\n    settings.difficulty = \"medium\";\r\n    settings.quantity = 10;\r\n    settings.category = null;\r\n    settings.overlayIsOpen = false;\r\n    settings.desiredQuantity = 10;\r\n    settings.maxAvailable = 50;\r\n  }\r\n\r\n  const setDifficulty = e => {\r\n    let difficulty;\r\n    switch (e.target.getAttribute(\"data-difficulty\")) {\r\n      case \"1\":\r\n        difficulty = \"easy\"\r\n        break;\r\n      case \"2\":\r\n        difficulty = \"medium\"\r\n        break;\r\n      case \"3\":\r\n        difficulty = \"hard\"\r\n        break;\r\n    }\r\n    settings.difficulty = difficulty;\r\n    if (settings.category !== null) {\r\n      checkAvailableQuantity(settings.category, e)\r\n        .then(res => {\r\n          adjustQuantity(res);\r\n        })\r\n        .catch(err => console.log(err))\r\n    }\r\n    document.querySelector('.button-difficulty').innerText = e.target.innerText\r\n    _UI_js__WEBPACK_IMPORTED_MODULE_2__[\"closeOverlay\"](e.target.parentElement.parentElement)\r\n  }\r\n\r\n  const setCategory = e => {\r\n    settings.category = e.target.getAttribute(\"data-id\")\r\n    if (settings.category !== \"0\") {\r\n      checkAvailableQuantity(settings.category, e)\r\n        .then(res => {\r\n          adjustQuantity(res);\r\n          document.querySelector('.button-category').innerText = e.target.innerText;\r\n          _UI_js__WEBPACK_IMPORTED_MODULE_2__[\"closeOverlay\"](e.target.parentElement.parentElement);\r\n        })\r\n        .catch(err => console.log(err))\r\n    } else {\r\n      document.querySelector('.button-category').innerText = e.target.innerText;\r\n      settings.maxAvailable = 50;\r\n      settings.quantity = settings.desiredQuantity;\r\n      refreshQuantityButtons();\r\n      _UI_js__WEBPACK_IMPORTED_MODULE_2__[\"closeOverlay\"](e.target.parentElement.parentElement);\r\n    }\r\n  }\r\n\r\n  const setQuantity = e => {\r\n    if (!e.target.classList.contains(\"disabled\")) {\r\n      settings.quantity = e.target.innerText;\r\n      if (settings.quantity >= 20) {\r\n        settings.desiredQuantity = settings.quantity\r\n      }\r\n      refreshQuantityButtons();\r\n      _UI_js__WEBPACK_IMPORTED_MODULE_2__[\"closeOverlay\"](e.target.parentElement.parentElement)\r\n    }\r\n  }\r\n\r\n  const adjustQuantity = res => {\r\n    const difficulty = `total_${settings.difficulty}_question_count`;\r\n    settings.maxAvailable = res.category_question_count[difficulty];\r\n    if (settings.maxAvailable < 10) {\r\n      settings.quantity = settings.maxAvailable\r\n    } else if (settings.maxAvailable > settings.desiredQuantity) {\r\n      settings.quantity = settings.desiredQuantity;\r\n    } else if (settings.maxAvailable <= 50) {\r\n      settings.quantity = Math.floor(settings.maxAvailable / 10) * 10\r\n    } else {\r\n      settings.quantity = 50;\r\n    }\r\n    refreshQuantityButtons()\r\n  }\r\n\r\n  const refreshQuantityButtons = () => {\r\n    // Refresh main \"n Questions\" button accordingly\r\n    document.querySelector('.button-quantity').innerText = `${settings.quantity} Questions`;\r\n    const $quantityOptions = Array.from(document.querySelectorAll('.option-item[data-quantity]'));\r\n\r\n    // Refresh possible quantity options accordingly on the overlay screen\r\n    if (settings.quantity < 10) {\r\n      $quantityOptions.forEach(option => {\r\n        if (option.getAttribute(\"data-quantity\") === \"10\") {\r\n          option.innerText = settings.quantity;\r\n        } else {\r\n          option.className = \"option-item disabled\";\r\n        }\r\n      })\r\n    } else {\r\n      $quantityOptions.forEach(option => {\r\n        option.innerText = option.getAttribute(\"data-quantity\");\r\n        if (option.getAttribute(\"data-quantity\") <= settings.maxAvailable) {\r\n          option.className = \"option-item\"\r\n        } else {\r\n          option.className = \"option-item disabled\"\r\n        }\r\n      })\r\n    }\r\n  }\r\n\r\n  const checkAvailableQuantity = async (cat, e) => {\r\n    let response;\r\n    try {\r\n      e.target.classList.toggle(\"loading-item\");\r\n      _UI_js__WEBPACK_IMPORTED_MODULE_2__[\"$loader\"].style.marginTop = \"0px\"\r\n      const res = await fetch(`https://opentdb.com/api_count.php?category=${cat}`);\r\n      response = res.json()\r\n    } catch (e) {\r\n      console.log(e);\r\n    } finally {\r\n      e.target.classList.toggle(\"loading-item\");\r\n      _UI_js__WEBPACK_IMPORTED_MODULE_2__[\"$loader\"].style.marginTop = \"-3px\"\r\n    }\r\n    return response\r\n  }\r\n\r\n  // Event functions\r\n\r\n  const difficultyClickEvent = () => {\r\n    const $difficultyOverlay = document.querySelector('.options-overlay--difficulty');\r\n    $difficultyOverlay.style.display = \"block\";\r\n    setTimeout(function() {\r\n      $difficultyOverlay.style.opacity = \"1\";\r\n    }, 1);\r\n    settings.overlayIsOpen = true;\r\n  }\r\n\r\n  const categoryClickEvent = () => {\r\n    const $categoriesOverlay = document.querySelector('.options-overlay--category');\r\n    $categoriesOverlay.style.display = \"block\";\r\n    setTimeout(function() {\r\n      $categoriesOverlay.style.opacity = \"1\";\r\n    }, 1);\r\n    settings.overlayIsOpen = true;\r\n  }\r\n\r\n  const quantityClickEvent = () => {\r\n    const $quantityOverlay = document.querySelector('.options-overlay--quantity');\r\n    $quantityOverlay.style.display = \"block\";\r\n    setTimeout(function() {\r\n      $quantityOverlay.style.opacity = \"1\";\r\n    }, 1);\r\n    settings.overlayIsOpen = true;\r\n  }\r\n\r\n  const playClickEvent = () => {\r\n    _QuizLogic_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].initNewGame(settings);\r\n    restoreSettings();\r\n  }\r\n\r\n  const selectFromOverlay = e => {\r\n    if (e.target.matches(\".overlay\") && !e.target.matches(\".overlay--game-end\")) {\r\n      _UI_js__WEBPACK_IMPORTED_MODULE_2__[\"closeOverlay\"](e.target);\r\n      settings.overlayIsOpen = false;\r\n    } else if (e.target.matches(\".option-container\")) {\r\n      _UI_js__WEBPACK_IMPORTED_MODULE_2__[\"closeOverlay\"](e.target.parentElement);\r\n      settings.overlayIsOpen = false;\r\n    } else if (e.target.matches(\".option-item\")) {\r\n      if (e.target.parentElement.parentElement.matches(\".options-overlay--difficulty\")) {\r\n        setDifficulty(e)\r\n      } else if (e.target.parentElement.parentElement.matches(\".options-overlay--category\")) {\r\n        setCategory(e)\r\n      } else if (e.target.parentElement.parentElement.matches(\".options-overlay--quantity\")) {\r\n        setQuantity(e)\r\n      }\r\n    }\r\n  }\r\n\r\n  // Event listeners\r\n\r\n  const eventListeners = () => {\r\n    window.addEventListener(\"click\", function(e) {\r\n      if (e.target.matches(\".button-difficulty\")) {\r\n        difficultyClickEvent();\r\n      } else if (e.target.matches(\".button-category\")) {\r\n        categoryClickEvent();\r\n      } else if (e.target.matches(\".button-quantity\")) {\r\n        quantityClickEvent();\r\n      } else if (e.target.matches(\".button-play\")) {\r\n        playClickEvent();\r\n      } else if (e.target.matches(\".button-main-menu\")) {\r\n        _UI_js__WEBPACK_IMPORTED_MODULE_2__[\"renderMenuDisplay\"](_UI_js__WEBPACK_IMPORTED_MODULE_2__[\"buttonGroup_mainMenu\"]);\r\n      } else {\r\n        selectFromOverlay(e);\r\n      }\r\n    })\r\n  }\r\n\r\n  const init = () => {\r\n    eventListeners();\r\n  }\r\n\r\n  return {\r\n    init,\r\n    settings\r\n  }\r\n})()\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameSettings);\n\n//# sourceURL=webpack:///./src/js/modules/GameSettings.js?");

/***/ }),

/***/ "./src/js/modules/GeneralSettings.js":
/*!*******************************************!*\
  !*** ./src/js/modules/GeneralSettings.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _UI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI.js */ \"./src/js/modules/UI.js\");\n\r\n\r\nconst Settings = (() => {\r\n  const $themeButton = document.querySelector('.button-theme');\r\n  const $soundButton = document.querySelector('.button-sound');\r\n\r\n  const eventListeners = function() {\r\n    window.addEventListener(\"click\", function(e) {})\r\n  }\r\n\r\n  const init = () => {\r\n    eventListeners();\r\n  }\r\n\r\n  return {\r\n    init,\r\n  }\r\n})()\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Settings);\n\n//# sourceURL=webpack:///./src/js/modules/GeneralSettings.js?");

/***/ }),

/***/ "./src/js/modules/MainMenu.js":
/*!************************************!*\
  !*** ./src/js/modules/MainMenu.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _UI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI.js */ \"./src/js/modules/UI.js\");\n\r\n\r\nconst MainMenu = (() => {\r\n  let preloadedCategories;\r\n\r\n  async function getCategories() {\r\n    let json;\r\n    try {\r\n      _UI_js__WEBPACK_IMPORTED_MODULE_0__[\"$loader\"].style.transition = \"margin-top 0.3s\";\r\n      _UI_js__WEBPACK_IMPORTED_MODULE_0__[\"$loader\"].style.marginTop = \"0\";\r\n      const resp = await fetch(\"https://opentdb.com/api_category.php\");\r\n      json = resp.json();\r\n    } catch (e) {\r\n      return e;\r\n    } finally {\r\n      _UI_js__WEBPACK_IMPORTED_MODULE_0__[\"$loader\"].style.marginTop = \"-3px\";\r\n    }\r\n    return json;\r\n  }\r\n\r\n  // Preload and pre-render every category for future \"New Game\" overlay\r\n  const preloadCategories = () => {\r\n    let rendered = ``;\r\n    getCategories()\r\n      .then(res => {\r\n        const response = res.trivia_categories;\r\n        response.forEach(category => {\r\n          rendered += `\r\n            <div class=\"option-item\" data-id=\"${category.id}\">${category.name.replace(/^(Entertainment:\\s|Science:\\s)/, \"\")}</div>\r\n          `;\r\n          preloadedCategories = rendered;\r\n        })\r\n      })\r\n      .catch(err => {\r\n        if (err.type = \"TypeError\") {\r\n          const message = \"Sorry, we couldn't reach the server. Please retry later.\"\r\n          _UI_js__WEBPACK_IMPORTED_MODULE_0__[\"showErrorMessage\"](message);\r\n        } else {\r\n          preloadedCategories = \"error\";\r\n        }\r\n      })\r\n  }\r\n\r\n  const eventListeners = () => {\r\n    window.addEventListener(\"click\", function(e) {\r\n      if (e.target.matches(\".button-new-game\")) {\r\n        if (preloadedCategories && preloadedCategories !== \"error\") {\r\n          _UI_js__WEBPACK_IMPORTED_MODULE_0__[\"renderNewGameSettings\"](preloadedCategories);\r\n        } else if (preloadedCategories === \"error\") {\r\n          const message = \"Sorry, it seems like the server is down. Please retr later.\"\r\n          _UI_js__WEBPACK_IMPORTED_MODULE_0__[\"showErrorMessage\"](message, preloadCategories);\r\n        }\r\n      } else if (e.target.matches(\".button-settings\")) {\r\n        _UI_js__WEBPACK_IMPORTED_MODULE_0__[\"renderMenuDisplay\"](_UI_js__WEBPACK_IMPORTED_MODULE_0__[\"buttonGroup_generalSettings\"]);\r\n      };\r\n    });\r\n  };\r\n\r\n  const init = () => {\r\n    preloadCategories();\r\n    eventListeners();\r\n  }\r\n\r\n  return {\r\n    init\r\n  }\r\n})()\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainMenu);\n\n//# sourceURL=webpack:///./src/js/modules/MainMenu.js?");

/***/ }),

/***/ "./src/js/modules/QuizLogic.js":
/*!*************************************!*\
  !*** ./src/js/modules/QuizLogic.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _UI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI.js */ \"./src/js/modules/UI.js\");\n/* harmony import */ var _sounds_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sounds.js */ \"./src/js/modules/sounds.js\");\n\r\n\r\n\r\nconst QuizLogic = (() => {\r\n\r\n  let newGame;\r\n\r\n  class Game {\r\n    constructor(questions) {\r\n      this.questions = questions;\r\n      this.quizLength = this.questions.length;\r\n      this.currQuestionIndex = 0;\r\n      this.totalScore = 0;\r\n      this.totalGotRight = 0\r\n    }\r\n\r\n    getCurrQuestion() {\r\n      return this.questions[this.currQuestionIndex]\r\n    }\r\n\r\n    gameHasEnded() {\r\n      return this.currQuestionIndex === this.quizLength;\r\n    }\r\n\r\n    isCorrect(guessedIndex) {\r\n      return this.getCurrQuestion().correct_answer_index === guessedIndex\r\n    }\r\n\r\n    updateScore(isCorrect, guessedIndex, waitTime) {\r\n      const correctAnswerIndex = this.getCurrQuestion().correct_answer_index;\r\n      const $guessBox = Array.from(document.querySelectorAll('.answer-box'))[guessedIndex];\r\n      const $correctBox = Array.from(document.querySelectorAll('.answer-box'))[correctAnswerIndex];\r\n      if (isCorrect) {\r\n        _sounds_js__WEBPACK_IMPORTED_MODULE_1__[\"sounds\"].correct.play();\r\n        this.totalGotRight++;\r\n        this.totalScore += this.scoring();\r\n        $guessBox.style.backgroundColor = \"#50B848\";\r\n      } else {\r\n        _sounds_js__WEBPACK_IMPORTED_MODULE_1__[\"sounds\"].wrong.play();\r\n        $guessBox.style.backgroundColor = \"#FE4042\";\r\n        $correctBox.style.backgroundColor = \"#50B848\";\r\n      }\r\n      $correctBox.classList.toggle(\"disable\");\r\n      this.currQuestionIndex++;\r\n    }\r\n\r\n    canClick() {\r\n      return Array.from(document.querySelectorAll('.answer-box')).every(x => !x.matches(\".disable\"));\r\n    }\r\n\r\n    scoring() {\r\n      switch (this.getCurrQuestion().difficulty) {\r\n        case \"easy\":\r\n          return 1\r\n          break;\r\n        case \"medium\":\r\n          return 2\r\n          break;\r\n        case \"hard\":\r\n          return 3\r\n          break;\r\n      }\r\n    }\r\n  }\r\n\r\n  const fetchQuestions = async (quantity, category, difficulty) => {\r\n    let json;\r\n    try {\r\n      _UI_js__WEBPACK_IMPORTED_MODULE_0__[\"$loader\"].style.marginTop = \"0\";\r\n      const resp = await fetch(`https://opentdb.com/api.php?amount=${quantity}${category === null ? \"\" : \"&category=\" + category}&difficulty=${difficulty}`);\r\n      json = resp.json();\r\n    } catch (e) {\r\n      return e\r\n    } finally {\r\n      _UI_js__WEBPACK_IMPORTED_MODULE_0__[\"$loader\"].style.marginTop = \"-3px\";\r\n    }\r\n    return json;\r\n  }\r\n\r\n  const initNewGame = (settings) => {\r\n    const quantity = settings.quantity;\r\n    const category = settings.category;\r\n    const difficulty = settings.difficulty;\r\n    fetchQuestions(quantity, category, difficulty)\r\n      .then(res => {\r\n        const questions = [...res.results];\r\n        questions.map(q => {\r\n          const randomizedCorrectIndex = Math.floor(Math.random() * 4);\r\n          const incorrectAnswers = [...q.incorrect_answers]; // either consists of 1 or 3\r\n          if (incorrectAnswers.length === 1) {\r\n            q.mixed_answers = [\"True\", \"False\"];\r\n            q.correct_answer_index = q.mixed_answers.indexOf(q.correct_answer);\r\n          } else {\r\n            q.mixed_answers = [...incorrectAnswers];\r\n            q.mixed_answers.splice(randomizedCorrectIndex, 0, q.correct_answer);\r\n            q.correct_answer_index = randomizedCorrectIndex;\r\n          }\r\n        })\r\n        newGame = new Game(questions);\r\n        loadNewQuestion(newGame.getCurrQuestion());\r\n      })\r\n      .catch(err => console.log(err))\r\n  }\r\n\r\n  const loadNewQuestion = currQuestion => {\r\n    if (currQuestion.type === \"multiple\") {\r\n      _UI_js__WEBPACK_IMPORTED_MODULE_0__[\"renderQuestion\"](_UI_js__WEBPACK_IMPORTED_MODULE_0__[\"multipleAnswers\"], currQuestion.question, currQuestion.mixed_answers, newGame);\r\n    } else {\r\n      _UI_js__WEBPACK_IMPORTED_MODULE_0__[\"renderQuestion\"](_UI_js__WEBPACK_IMPORTED_MODULE_0__[\"boolAnswers\"], currQuestion.question, currQuestion.mixed_answers, newGame);\r\n    }\r\n  }\r\n\r\n  const guessClickEvent = (guessedIndex) => {\r\n    const waitTime = 1500;\r\n    const isCorrect = newGame.isCorrect(guessedIndex);\r\n    newGame.updateScore(isCorrect, guessedIndex, waitTime);\r\n    setTimeout(function() {\r\n      if (!newGame.gameHasEnded()) {\r\n        loadNewQuestion(newGame.getCurrQuestion());\r\n      } else {\r\n        _UI_js__WEBPACK_IMPORTED_MODULE_0__[\"renderGameEndScreen\"](newGame);\r\n      }\r\n    }, waitTime);\r\n  }\r\n\r\n  const quitGame = () => {\r\n    const $overlay = document.querySelector('.overlay--in-game');\r\n    $overlay.style.display = \"block\";\r\n    setTimeout(function() {\r\n      $overlay.style.opacity = \"1\";\r\n    }, 15)\r\n  }\r\n\r\n  const eventListeners = () => { // check\r\n    window.addEventListener(\"click\", function(e) {\r\n      if (e.target.matches(\".answer-box\") && newGame.canClick()) {\r\n        const guessedIndex = Array.from(document.querySelectorAll('.answer-box')).indexOf(e.target);\r\n        guessClickEvent(guessedIndex);\r\n      } else if (e.target.matches(\".button-quit-game\")) {\r\n        quitGame();\r\n      } else if (e.target.matches(\".button-stay-here\") || e.target.matches(\".button-box\")) {\r\n        _UI_js__WEBPACK_IMPORTED_MODULE_0__[\"closeOverlay\"](document.querySelector('.overlay--in-game'))\r\n      }\r\n    })\r\n  }\r\n\r\n  const init = () => {\r\n    eventListeners();\r\n  }\r\n\r\n  return {\r\n    init,\r\n    initNewGame\r\n  }\r\n})()\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (QuizLogic);\n\n//# sourceURL=webpack:///./src/js/modules/QuizLogic.js?");

/***/ }),

/***/ "./src/js/modules/UI.js":
/*!******************************!*\
  !*** ./src/js/modules/UI.js ***!
  \******************************/
/*! exports provided: $loader, closeOverlay, buttonGroup_mainMenu, buttonGroup_generalSettings, multipleAnswers, boolAnswers, renderMenuDisplay, renderNewGameSettings, renderQuestion, renderGameEndScreen, showErrorMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"$loader\", function() { return $loader; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"closeOverlay\", function() { return closeOverlay; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"buttonGroup_mainMenu\", function() { return buttonGroup_mainMenu; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"buttonGroup_generalSettings\", function() { return buttonGroup_generalSettings; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"multipleAnswers\", function() { return multipleAnswers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"boolAnswers\", function() { return boolAnswers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderMenuDisplay\", function() { return renderMenuDisplay; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderNewGameSettings\", function() { return renderNewGameSettings; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderQuestion\", function() { return renderQuestion; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderGameEndScreen\", function() { return renderGameEndScreen; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showErrorMessage\", function() { return showErrorMessage; });\n/* harmony import */ var _EndScreen_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EndScreen.js */ \"./src/js/modules/EndScreen.js\");\n\r\n\r\nconst $documentBody = document.querySelector('body');\r\nconst $errorContainer = document.querySelector('.error-container');\r\nconst $errorMessage = document.querySelector('.error-message');\r\nconst $newGameButton = document.querySelector('.button-new-game');\r\nconst $contentWrapper = document.querySelector('.content-wrapper')\r\n\r\nconst $loader = document.querySelector('.header-strap')\r\n\r\nconst animateButtons = () => {\r\n  const $buttons = Array.from(document.querySelectorAll('.button'))\r\n  $buttons.forEach(button => button.style.opacity = \"0\")\r\n  $buttons.forEach((button, i, arr) => {\r\n    setTimeout(function() {\r\n      button.style.opacity = \"1\"\r\n    }, i * 50)\r\n  })\r\n}\r\n\r\nconst renderScoreInfo = (newGame) => {\r\n  return `\r\n    <p class=\"result-info score\">Score: ${newGame.totalGotRight}/${newGame.questions.length}</p>\r\n    <p class=\"result-info points\">+${newGame.totalScore} Points</p>\r\n    <p class=\"result-info message\"></p>\r\n  `\r\n}\r\n\r\nconst closeOverlay = overlay => {\r\n  overlay.style.opacity = \"0\";\r\n  setTimeout(function() {\r\n    overlay.style.display = \"none\";\r\n  }, 300);\r\n}\r\n\r\n// Components to be parsed into other markup later on\r\nconst footer = `\r\n  <footer class=\"footer\">\r\n    <p>Doncimacko 2018 &copy;</p>\r\n  </footer>\r\n`\r\n\r\nconst buttonGroup_mainMenu = `\r\n  <button class=\"button button-new-game\">New Game</button>\r\n  <button class=\"button button-about\">About</button>\r\n  <button class=\"button button-settings\">Settings</button>\r\n`\r\n\r\nconst buttonGroup_generalSettings = `\r\n  <button class=\"button button-theme\">Theme: Coral</button>\r\n  <button class=\"button button-sound\">Sound: On</button>\r\n  <button class=\"button button-main-menu\">Back</button>\r\n`\r\n\r\nconst multipleAnswers = answers => {\r\n  return `\r\n  <div class=\"answers-container multiple\">\r\n    <div class=\"answer-group-container\">\r\n      <div class=\"answer-box\">\r\n        ${answers[0]}\r\n      </div>\r\n      <div class=\"answer-box\">\r\n        ${answers[1]}\r\n      </div>\r\n    </div>\r\n    <div class=\"answer-group-container\">\r\n      <div class=\"answer-box\">\r\n        ${answers[2]}\r\n      </div>\r\n      <div class=\"answer-box\">\r\n        ${answers[3]}\r\n      </div>\r\n    </div>\r\n  </div>\r\n  `\r\n}\r\n\r\nconst boolAnswers = answers => {\r\n  return `\r\n  <div class=\"answers-container truefalse\">\r\n    <div class=\"answer-group-container\">\r\n      <div class=\"answer-box\">\r\n        ${answers[0]}\r\n      </div>\r\n      <div class=\"answer-box\">\r\n        ${answers[1]}\r\n      </div>\r\n    </div>\r\n  </div>\r\n  `\r\n}\r\n\r\nconst renderMenuDisplay = buttongroup => {\r\n  $contentWrapper.innerHTML = `\r\n  <div class=\"menu-content\">\r\n    <div class=\"big-background-logo-container\">\r\n      <h1 class=\"title\">Quizzit</h1>\r\n      <img class=\"circles\" src=\"src/assets/header-circles-res.png\" alt=\"\">\r\n      <img class=\"ribbon\" src=\"src/assets/1x/ribbon-yellow.png\">\r\n    </div>\r\n    <div class=\"button-group\">\r\n      ${buttongroup}\r\n    </div>\r\n  </div>\r\n  ${footer}\r\n  `\r\n  animateButtons()\r\n};\r\n\r\nconst renderNewGameSettings = preloaded => {\r\n  $contentWrapper.innerHTML = `\r\n  <div class=\"overlay options-overlay--difficulty\">\r\n    <div class=\"option-container fully-centered vertical\">\r\n      <div class=\"option-item\" data-difficulty=\"1\">Easy</div>\r\n      <div class=\"option-item\" data-difficulty=\"2\">Medium</div>\r\n      <div class=\"option-item\" data-difficulty=\"3\">Hard</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"overlay options-overlay--quantity\">\r\n    <div class=\"option-container fully-centered vertical\">\r\n      <div class=\"option-item\" data-quantity=\"10\">10</div>\r\n      <div class=\"option-item\" data-quantity=\"20\">20</div>\r\n      <div class=\"option-item\" data-quantity=\"30\">30</div>\r\n      <div class=\"option-item\" data-quantity=\"40\">40</div>\r\n      <div class=\"option-item\" data-quantity=\"50\">50</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"overlay options-overlay--category\">\r\n    <div class=\"option-container fully-centered\">\r\n      <div class=\"option-item\" data-id=\"0\">All Categories</div>\r\n      ${preloaded}\r\n    </div>\r\n  </div>\r\n  <div class=\"menu-content\">\r\n    <div class=\"big-background-logo-container\">\r\n      <h1 class=\"title\">Quizzit</h1>\r\n      <img class=\"circles\" src=\"src/assets/header-circles-res.png\" alt=\"\">\r\n      <img class=\"ribbon\" src=\"src/assets/1x/ribbon-yellow.png\">\r\n    </div>\r\n    <div class=\"button-group\">\r\n      <button class=\"button button-difficulty\">Medium</button>\r\n      <button class=\"button button-category\">All Categories</button>\r\n      <button class=\"button button-quantity\">10 Questions</button>\r\n      <button class=\"button button-play\">Play</button>\r\n      <button class=\"button button-main-menu\">Back</button>\r\n    </div>\r\n  </div>\r\n  ${footer}\r\n  `\r\n  animateButtons()\r\n}\r\n\r\nconst renderQuestion = (answers_markup, question, answers, newGame) => {\r\n  $contentWrapper.innerHTML = `\r\n  <div class=\"overlay overlay--game-end\"></div>\r\n  <div class=\"overlay overlay--in-game\">\r\n    <div class=\"quit-option-container fully-centered\">\r\n      <p>Do you want to quit the game?</p>\r\n      <div class=\"button-box\">\r\n        <button class=\"button-stay-here\">No</button>\r\n        <button class=\"button-main-menu\">Yes</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"game-content\">\r\n    <div class=\"background-container\">\r\n      <img class=\"fully-centered\" src=\"src/assets/header-circles-res.png\" alt=\"\">\r\n      <h1 class=\"title\">Quizzit</h1>\r\n    </div>\r\n    <div class=\"question-container\">\r\n      <p class=\"question\">${question}</p>\r\n    </div>\r\n    ${answers_markup(answers)}\r\n    <p class=\"question-tracker\">${newGame.currQuestionIndex+1}/${newGame.quizLength}</p>\r\n    <button class=\"button button-quit-game\">Quit game</button>\r\n  </div>\r\n  ${footer}\r\n  `\r\n};\r\n\r\nconst renderGameEndScreen = newGame => {\r\n  const $overlay_gameEnd = document.querySelector('.overlay--game-end')\r\n  $overlay_gameEnd.innerHTML = `\r\n  <div class=\"game-end-screen-content\">\r\n    <div class=\"ribbon-container\">\r\n      <?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n      <svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"205 138 435 95\" style=\"enable-background:new 0 0 841.9 595.3;\" xml:space=\"preserve\">\r\n        <g>\r\n          <path class=\"st13\" d=\"M235.8,179.7c-11.5,3-21.9,6.2-31.2,9.4l14.4,16.3L204.6,232c9.2-3.2,19.7-6.3,31.2-9.4l0,0V179.7z\"/>\r\n        </g>\r\n        <g>\r\n          <path class=\"st13\" d=\"M607.8,179.7c11.5,3,21.9,6.2,31.2,9.4l-14.4,16.3l14.4,26.6c-9.2-3.2-19.7-6.3-31.2-9.4l0,0V179.7z\"/>\r\n        </g>\r\n        <g>\r\n          <path class=\"st14\" d=\"M421.8,139.8c-78.8,1.4-152.4,16.7-197.2,32.1v42.9c44.8-15.4,118.3-30.7,197.2-32.1\r\n            c78.8,1.4,152.4,16.7,197.2,32.1v-42.9C574.2,156.6,500.6,141.2,421.8,139.8z\"/>\r\n        </g>\r\n        <path d=\"M224.6,214.9\"/>\r\n        <g>\r\n          <path class=\"st15\" d=\"M235.8,222.6v-11.4c-3.9,1.2-7.6,2.4-11.2,3.6L235.8,222.6z\"/>\r\n        </g>\r\n        <path class=\"st12\" d=\"M619,214.9\"/>\r\n        <polygon class=\"star star-1\" points=\"261.5,167.6 267.3,174.6 276.4,173.9 271.5,181.6 275.1,190 266.2,187.7 259.3,193.6 258.8,184.5\r\n          250.9,179.8 259.4,176.5 \"/>\r\n        <polygon class=\"star star-2\" points=\"341.8,154.1 346.7,161.8 355.8,162.1 350,169.2 352.5,177.9 344,174.6 336.4,179.7 337,170.6\r\n          329.8,164.9 338.6,162.6 \"/>\r\n        <polygon class=\"star star-3\" points=\"423.5,148.7 427.5,156.9 436.6,158.3 430,164.6 431.6,173.6 423.5,169.4 415.4,173.6 417,164.6\r\n          410.4,158.3 419.5,156.9 \"/>\r\n        <polygon class=\"star star-4\" points=\"503,154.8 506.2,163.4 515,165.7 507.8,171.3 508.4,180.5 500.8,175.4 492.3,178.8 494.8,170\r\n          489,162.9 498.1,162.6 \"/>\r\n        <polygon class=\"star star-5\" points=\"576.7,167.5 579,176.3 587.6,179.4 579.9,184.4 579.6,193.5 572.5,187.7 563.7,190.3 567.1,181.7\r\n          561.9,174.2 571.1,174.7 \"/>\r\n      </svg>\r\n    </div>\r\n    <div class=\"result-container\">\r\n      ${renderScoreInfo(newGame)}\r\n    </div>\r\n    <div class=\"button-container\">\r\n      <button class=\"button button-new-game\">New game</button>\r\n      <button class=\"button button-main-menu\">Main menu</button>\r\n    </div>\r\n  </div>\r\n  `\r\n\r\n  $overlay_gameEnd.style.display = \"block\";\r\n  setTimeout(function() {\r\n    $overlay_gameEnd.style.opacity = \"1\";\r\n  }, 15)\r\n  setTimeout(function() {\r\n    Object(_EndScreen_js__WEBPACK_IMPORTED_MODULE_0__[\"animateRibbon\"])();\r\n  }, 100)\r\n  setTimeout(function() {\r\n    Object(_EndScreen_js__WEBPACK_IMPORTED_MODULE_0__[\"paintStars\"])(newGame)\r\n  }, 500)\r\n};\r\n\r\nconst showErrorMessage = (msg, retryCb) => {\r\n  if (retryCb) {\r\n    retryCb()\r\n  }\r\n  $errorMessage.innerText = msg;\r\n  $errorContainer.style.display = \"block\";\r\n  setTimeout(function() {\r\n    $errorContainer.style.transform = \"translateY(0%)\";\r\n  }, 15);\r\n  setTimeout(function() {\r\n    $errorContainer.style.transform = \"translateY(-100%)\"\r\n  }, 4000);\r\n}\n\n//# sourceURL=webpack:///./src/js/modules/UI.js?");

/***/ }),

/***/ "./src/js/modules/sounds.js":
/*!**********************************!*\
  !*** ./src/js/modules/sounds.js ***!
  \**********************************/
/*! exports provided: sounds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sounds\", function() { return sounds; });\nconst sounds = {\r\n  star: new Audio('./src/assets/sounds/star.mp3'),\r\n  click: new Audio('./src/assets/sounds/click.mp3'),\r\n  correct: new Audio('./src/assets/sounds/correct.mp3'),\r\n  wrong: new Audio('./src/assets/sounds/wrong.mp3'),\r\n}\n\n//# sourceURL=webpack:///./src/js/modules/sounds.js?");

/***/ })

/******/ });