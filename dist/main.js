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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/animation.js":
/*!**************************!*\
  !*** ./src/animation.js ***!
  \**************************/
/*! exports provided: setupAnimEvents, addAnimation, addBadInputAnim */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setupAnimEvents\", function() { return setupAnimEvents; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addAnimation\", function() { return addAnimation; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addBadInputAnim\", function() { return addBadInputAnim; });\n/* global document */\nconst setupAnimEvents = (container, title, form) => {\n  container.addEventListener('animationend', event => {\n    if (event.animationName === 'arriving') {\n      container.classList.remove('cross-arriving');\n    }\n    if (event.animationName === 'nope') {\n      container.classList.remove('wrong-input');\n    }\n  });\n\n  form.addEventListener('animationend', event => {\n    if (event.animationName === 'form-disapearing') {\n      form.style.display = 'none';\n      title.style.display = 'none';\n      container.style.display = 'grid';\n    }\n  });\n};\n\nconst addAnimation = (target, player) => {\n  target.classList.add(`${player.icon()}-mark`, 'background');\n};\n\nconst addBadInputAnim = () => {\n  const container = document.querySelector('.container');\n  container.classList.add('wrong-input');\n};\n\n\n\n\n//# sourceURL=webpack:///./src/animation.js?");

/***/ }),

/***/ "./src/board.js":
/*!**********************!*\
  !*** ./src/board.js ***!
  \**********************/
/*! exports provided: board */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"board\", function() { return board; });\n/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation */ \"./src/animation.js\");\n/* harmony import */ var _utilties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilties */ \"./src/utilties.js\");\n/* global window, confirm */\n\n\n\nconst board = (() => {\n  const winningCases = (array, params) => {\n    const { currentPlayer, GameOver, icon, iconTwo, winningMessage } = params;\n    const positions = winningPositions(array);\n    const winner = currentPlayer.name() + winningMessage;\n    positions.flat().forEach((boxArray) => {\n      if (boxArray.every(e => e.innerHTML === icon)) {\n        gameOver(winner, true, GameOver);\n      }\n      if (boxArray.every(e => e.innerHTML === iconTwo)) {\n        gameOver(winner, true, GameOver);\n      }\n    });\n  };\n\n  const winningPositions = (b) => {\n    const horizontal = [\n      [b[0], b[1], b[2]],\n      [b[3], b[4], b[5]],\n      [b[6], b[7], b[8]],\n    ];\n    const vertical = [\n      [b[0], b[3], b[6]],\n      [b[1], b[4], b[7]],\n      [b[2], b[5], b[8]],\n    ];\n    const diagonal = [\n      [b[0], b[4], b[8]],\n      [b[2], b[4], b[6]],\n    ];\n\n\n    return [horizontal, vertical, diagonal];\n  };\n\n  const isPositionTaken = (element) => {\n    if (element.target.innerText !== '') {\n      _utilties__WEBPACK_IMPORTED_MODULE_1__[\"default\"].displayMessage('Illegal move, position already taken Dont do it again!!');\n      Object(_animation__WEBPACK_IMPORTED_MODULE_0__[\"addBadInputAnim\"])();\n      return true;\n    }\n  };\n\n  const setPosition = (element, currentPlayer) => {\n    element.target.innerHTML = currentPlayer.icon();\n    Object(_animation__WEBPACK_IMPORTED_MODULE_0__[\"addAnimation\"])(element.target, currentPlayer);\n  };\n\n  const drawGame = (turn, GameOver) => {\n    if (turn === 0 && !GameOver) {\n      gameOver(\"Too bad, it's a draw!\", true, GameOver);\n    }\n  };\n\n  const gameOver = (playerName, over = false, GameOver) => {\n    GameOver = over;\n    if (GameOver) {\n      if (confirm(playerName + ' Do you want to play again?')) window.location.reload();\n      else window.close();\n    }\n  };\n\n  return {\n    winningCases,\n    isPositionTaken,\n    setPosition,\n    drawGame,\n  }\n})();\n\n\n//# sourceURL=webpack:///./src/board.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./board */ \"./src/board.js\");\n/* harmony import */ var _utilties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utilties */ \"./src/utilties.js\");\n/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animation */ \"./src/animation.js\");\n/* harmony import */ var _gameManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gameManager */ \"./src/gameManager.js\");\n/* global document */\n\n\n\n\n\n\nfunction something() {\n\n  const mainContainer = document.querySelector('.container');\n  const pageTitle = document.querySelector('.page-title');\n  const form = document.querySelector('.form-names');\n\n  Object(_animation__WEBPACK_IMPORTED_MODULE_3__[\"setupAnimEvents\"])(mainContainer, pageTitle, form);\n\n  form.onsubmit = element => {\n    element.preventDefault();\n\n    const nameOne = document.getElementById('player1').value;\n    const nameTwo = document.getElementById('player2').value;\n\n    form.classList.add('form-gone');\n    pageTitle.classList.add('title-gone');\n\n    titTacToe(nameOne, nameTwo);\n  }\n}\n\nfunction titTacToe(nameOne, nameTwo) {\n  const gameManager = new _gameManager__WEBPACK_IMPORTED_MODULE_4__[\"default\"](9, 'X', 'O', false, ' Won the game.');\n\n  let { turn } = gameManager;\n  const { icon, iconTwo, GameOver, winningMessage } = gameManager;\n\n  // let nameOne = playerManager.getPlayerNames.playerOneName();\n  // let nameTwo = playerManager.getPlayerNames.playerTwoName();\n\n  const playerOne = _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Player(nameOne, icon);\n  const playerTwo = _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Player(nameTwo, iconTwo);\n\n  const switchTurn = element => {\n    const currentPlayer = _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"].selectPlayer(\n      turn,\n      playerOne,\n      playerTwo\n    );\n    if (_board__WEBPACK_IMPORTED_MODULE_1__[\"board\"].isPositionTaken(element)) return switchTurn;\n    _board__WEBPACK_IMPORTED_MODULE_1__[\"board\"].setPosition(element, currentPlayer);\n\n    _board__WEBPACK_IMPORTED_MODULE_1__[\"board\"].winningCases(boxes, {\n      turn,\n      currentPlayer,\n      icon,\n      iconTwo,\n      winningMessage\n    });\n    turn -= 1;\n    _board__WEBPACK_IMPORTED_MODULE_1__[\"board\"].drawGame(turn, GameOver);\n    return currentPlayer;\n  };\n\n  const boxes = document.querySelectorAll(\".box\");\n  boxes.forEach(box => {\n    box.onclick = element => {\n      _utilties__WEBPACK_IMPORTED_MODULE_2__[\"default\"].displayMessage(`It's ${switchTurn(element).name()} turn`);\n    };\n  });\n}\n\nsomething();\n\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/gameManager.js":
/*!****************************!*\
  !*** ./src/gameManager.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GameManager; });\nclass GameManager {\n  constructor(turn, icon, iconTwo, gameOver, winningMessage) {\n    this.turn = turn;\n    this.icon = icon;\n    this.iconTwo = iconTwo;\n    this.gameOver = gameOver;\n    this.winningMessage = winningMessage;\n  }\n\n  get turn() {\n    return this._turn;\n  }\n  set turn(value) {\n    this._turn = value;\n  }\n  get icon() {\n    return this._icon;\n  }\n  set icon(value) {\n    return this._icon = value;\n  }\n  get iconTwo() {\n    return this._iconTwo;\n  }\n  set iconTwo(value) {\n    return this._iconTwo = value;\n  }\n  get gameOver() {\n    return this._gameOver;\n  }\n  set gameOver(value) {\n    return this._gameOver = value;\n  }\n  get winningMessage() {\n    return this._winningMessage;\n  }\n  set winningMessage(value) {\n    return this._winningMessage = value;\n  }\n}\n\n//# sourceURL=webpack:///./src/gameManager.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* global window */\nconst playerManager = (() => {\n  const Player = (playerName, playerIcon) => {\n    const name = () => playerName;\n    const icon = () => playerIcon;\n    return { name, icon };\n  };\n  const selectPlayer = (turn, playerOne, playerTwo) => {\n    if (turn % 2 !== 0) return playerOne;\n    return playerTwo;\n  };\n\n  return {\n    Player,\n    selectPlayer,\n  };\n})();\n/* harmony default export */ __webpack_exports__[\"default\"] = (playerManager);\n\n//# sourceURL=webpack:///./src/player.js?");

/***/ }),

/***/ "./src/utilties.js":
/*!*************************!*\
  !*** ./src/utilties.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* global document */\nconst utilities = (() => {\n  const displayMessage = (message) => {\n    const msg = document.getElementById('msg');\n    msg.innerText = message;\n  };\n  return {\n    displayMessage,\n  };\n})();\n/* harmony default export */ __webpack_exports__[\"default\"] = (utilities);\n\n//# sourceURL=webpack:///./src/utilties.js?");

/***/ })

/******/ });