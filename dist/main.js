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
/*! exports provided: addAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addAnimation\", function() { return addAnimation; });\nconst addAnimation = (target, player) => {\n    target.classList.add(`mark-${player.icon()}`);\n};\n\n\n\n//# sourceURL=webpack:///./src/animation.js?");

/***/ }),

/***/ "./src/board.js":
/*!**********************!*\
  !*** ./src/board.js ***!
  \**********************/
/*! exports provided: winningCases, winningPositions, isPositionTaken, setPosition, drawGame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"winningCases\", function() { return winningCases; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"winningPositions\", function() { return winningPositions; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isPositionTaken\", function() { return isPositionTaken; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setPosition\", function() { return setPosition; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawGame\", function() { return drawGame; });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animation */ \"./src/animation.js\");\n\n\n\nconst winningCases = (array, params) => {\n    let { turn, currentPlayer, gameOver, icon, iconTwo, winningMessage } = params;\n\n    const winner = currentPlayer.name() + winningMessage;\n    array.flat().forEach(boxArray => {\n        if (boxArray.every(e => e.innerHTML === icon)) {\n            gameOver(winner, true)\n        }\n\n        if (boxArray.every(e => e.innerHTML === iconTwo)) {\n            gameOver(winner, true)\n        }\n\n    })\n\n};\n\nconst winningPositions = (b) => {\n    const horizontal = [\n        [b[0], b[1], b[2]],\n        [b[3], b[4], b[5]],\n        [b[6], b[7], b[8]]\n    ];\n    const vertical = [\n        [b[0], b[3], b[6]],\n        [b[1], b[4], b[7]],\n        [b[2], b[5], b[8]]\n    ];\n    const diagonal = [\n        [b[0], b[4], b[8]],\n        [b[2], b[4], b[6]]\n\n    ];\n\n\n    return [horizontal, vertical, diagonal]\n};\n\nconst isPositionTaken = (element, switchTurn) =>{\n    if (element.target.innerText !== '') {\n        alert('Illegal move, position already taken Dont do it again!!');\n        return switchTurn\n    }\n};\n\nconst setPosition = (element, currentPlayer) =>{\n    element.target.innerHTML = currentPlayer.icon();\n    Object(_animation__WEBPACK_IMPORTED_MODULE_1__[\"addAnimation\"])(element.target, currentPlayer);\n};\n\nconst drawGame = (turn,GameOver, gameOver) =>{\n    if (turn === 0 && !GameOver) {\n        gameOver(\"Draw, losers\", true)\n    }\n};\n\n\n\n\n//# sourceURL=webpack:///./src/board.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./board */ \"./src/board.js\");\n/* harmony import */ var _utilties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utilties */ \"./src/utilties.js\");\n/* harmony import */ var _gameManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gameManager */ \"./src/gameManager.js\");\n\n\n\n\n\nfunction titTacToe() {\n\n    const  gameManager = new _gameManager__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\n        9,\n        'X',\n        \"O\",\n        false,\n        \" Won the game\");\n\n\n    let { turn, icon, iconTwo, GameOver, winningMessage } = gameManager;\n\n    let nameOne = 'x' //window.prompt(\"PlayerOne name\");\n    let nameTwo = 'o'  //window.prompt(\"PlayerTwo name\");\n    const playerOne = Object(_player__WEBPACK_IMPORTED_MODULE_0__[\"Player\"])(nameOne, icon);\n    const playerTwo = Object(_player__WEBPACK_IMPORTED_MODULE_0__[\"Player\"])(nameTwo, iconTwo);\n\n    const switchTurn = (element) => {\n        const currentPlayer = Object(_player__WEBPACK_IMPORTED_MODULE_0__[\"selectPlayer\"])(turn, playerOne, playerTwo);\n        Object(_board__WEBPACK_IMPORTED_MODULE_1__[\"isPositionTaken\"])(element, switchTurn);\n        Object(_board__WEBPACK_IMPORTED_MODULE_1__[\"setPosition\"])(element,currentPlayer);\n\n        const positions = Object(_board__WEBPACK_IMPORTED_MODULE_1__[\"winningPositions\"])(boxes);\n        Object(_board__WEBPACK_IMPORTED_MODULE_1__[\"winningCases\"])(positions, { turn,\n            currentPlayer,\n            gameOver, icon,\n            iconTwo,\n            winningMessage });\n\n        turn -= 1;\n        Object(_board__WEBPACK_IMPORTED_MODULE_1__[\"drawGame\"])(turn,GameOver, gameOver());\n        console.log(turn)\n    };\n\n    const gameOver = (playerName, over = false) => {\n        GameOver = over;\n        if (GameOver) {\n            if (confirm(playerName + \" Do you want to play again?\")) window.location.reload();\n            else window.close()\n        }\n    };\n\n    const boxes = document.querySelectorAll('.box');\n    boxes.forEach((box, index) => {\n        box.onclick = (element) => {\n            switchTurn(element);\n            Object(_utilties__WEBPACK_IMPORTED_MODULE_2__[\"displayMessage\"])(Object(_player__WEBPACK_IMPORTED_MODULE_0__[\"selectPlayer\"])(turn, playerOne, playerTwo));\n        }\n\n    })\n\n\n}\n\n\ntitTacToe();\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/gameManager.js":
/*!****************************!*\
  !*** ./src/gameManager.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GameManager; });\nclass GameManager {\n\n    constructor(turn, icon, iconTwo, gameOver, winningMessage) {\n        this.turn = turn;\n        this.icon = icon;\n        this.iconTwo = iconTwo;\n        this.gameOver = gameOver;\n        this.winningMessage = winningMessage;\n    }\n\n    get turn() {\n        return this._turn\n    }\n    set turn(value) {\n        this._turn = value\n    }\n\n    get icon() {\n        return this._icon\n    }\n\n    set icon(value) {\n        return this._icon = value\n    }\n    get iconTwo() {\n        return this._iconTwo\n    }\n    set iconTwo(value) {\n        return this._iconTwo = value\n    }\n\n    get gameOver() {\n        return this._gameOver\n    }\n    set gameOver(value) {\n        return this._gameOver = value\n    }\n\n    get winningMessage() {\n        return this._winningMessage\n    }\n\n    set winningMessage(value) {\n        return this._winningMessage = value\n    }\n\n}\n\n//# sourceURL=webpack:///./src/gameManager.js?");

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
/*! exports provided: Player, selectPlayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Player\", function() { return Player; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selectPlayer\", function() { return selectPlayer; });\n// Player\nconst Player = (playerName, playerIcon) => {\n    const name = () => playerName;\n    const icon = () => playerIcon;\n    return { name, icon }\n};\n\nconst selectPlayer = (turn, playerOne, playerTwo) => {\n    if (turn % 2 !== 0) return playerOne;\n    else return playerTwo;\n};\n\n\n\n//# sourceURL=webpack:///./src/player.js?");

/***/ }),

/***/ "./src/utilties.js":
/*!*************************!*\
  !*** ./src/utilties.js ***!
  \*************************/
/*! exports provided: displayMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayMessage\", function() { return displayMessage; });\nconst displayMessage = (player) => {\n    let msg = document.getElementById('msg');\n    msg.innerText = `It's ${player.name()} turn`;\n};\n\n\n\n//# sourceURL=webpack:///./src/utilties.js?");

/***/ })

/******/ });