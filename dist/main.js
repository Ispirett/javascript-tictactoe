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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\nfunction titTacToe () {\n\n   const GameManager = {\n        turn: 9,\n        icon: \"X\",\n        iconTwo: \"O\",\n        GameOver: false,\n   };\n\n   let {turn, icon, iconTwo, GameOver} =  GameManager;\n\n   // Player\n   const Player = (playerName,playerIcon)=>{\n       const name = () => playerName;\n       const icon = () => playerIcon;\n       return{name, icon}\n   };\n\n   let nameOne = \"hi\";//window.prompt(\"PlayerOne name\");\n   let nameTWo = \"bye\" ;//window.prompt(\"PlayerTwo name \");\n   const playerOne = Player(nameOne,icon );\n   const playerTwo = Player(nameOne,iconTwo );\n\n\n    const winningCases = (array) => {\n\n        array.flat().forEach(boxArray=>{\n            console.log(array.flat());\n            if(boxArray.every(e => e.innerHTML === 'X')){\n\n                alert('Winner' + selectPlayer().name())\n            }\n\n            if(boxArray.every(e => e.innerHTML === 'O')){\n                alert('Winner' + selectPlayer().name())\n\n            }\n\n        })\n\n    };\n\n    const winningPositions = (b) =>{\n        const horizontal = [[b[0],b[1],b[2]],\n                            [b[3],b[4],b[5]],\n                            [b[6],b[7],b[8]]\n                           ];\n        const vertical = [[b[0],b[3],b[6]],\n                          [b[1],b[4],b[7]],\n                          [b[2],b[5],b[8]]\n                         ];\n        const diagonal =  [[b[0],b[4],b[8]],\n                          [b[2],b[4],b[6]]\n\n                        ];\n\n\n        return [horizontal, vertical, diagonal]\n    };\n\n\n   const selectPlayer = () => {\n        if(turn % 2 !== 0) return playerOne;\n        else return playerTwo;\n   };\n\n   const playerTurn = (element) => {\n       \n       element.target.innerHTML =  selectPlayer().icon();\n       turn -= 1;\n      /// gameOver(selectPlayer().name());\n       console.log(turn)\n   };\n\n   const displayMessage = (message) => {\n       let msg = document.getElementById('msg');\n       msg.innerText = message;\n       setTimeout(() => {\n            msg.innerText = ''\n       }, 4000)\n   };\n\n   const gameOver = (playerName, over) => {\n       GameOver = over;\n        if(turn === 0) {\n            alert(\"It's a draw\")\n        }\n\n        alert(playerName + \" won the game\");\n   };\n\n   const boxes = document.querySelectorAll('.box');\n\n    boxes.forEach((box, index)=>{\n        box.onclick = (element) =>{\n            playerTurn(element);\n            displayMessage(element.target.innerText);\n\n            // Checking winning positions\n            const positions = winningPositions(boxes);\n            winningCases(positions);\n        }\n\n    })\n\n\n}\n\ntitTacToe();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });