/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/register.js":
/*!****************************!*\
  !*** ./src/js/register.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   btnRegister: () => (/* binding */ btnRegister),\n/* harmony export */   initializeTogglePassword: () => (/* binding */ initializeTogglePassword),\n/* harmony export */   registerEmail: () => (/* binding */ registerEmail),\n/* harmony export */   registerFirstName: () => (/* binding */ registerFirstName),\n/* harmony export */   registerLastName: () => (/* binding */ registerLastName),\n/* harmony export */   registerPassword: () => (/* binding */ registerPassword)\n/* harmony export */ });\nconst registerEmail = document.querySelector('#txtEmail');\nconst registerPassword = document.querySelector('#txtPassword');\nconst registerFirstName = document.querySelector('#txtFirstName');\nconst registerLastName = document.querySelector('#txtLastName');\nconst btnRegister = document.querySelector('#btnRegister');\n\n// password toggle\nfunction initializeTogglePassword() {\n  const showPasswordButton = document.querySelector('#show-password');\n  const hidePasswordButton = document.querySelector('#hide-password');\n  const passwordField = document.querySelector('#txtPassword');\n  showPasswordButton.addEventListener('click', function () {\n    passwordField.type = 'text';\n    showPasswordButton.style.display = 'none';\n    hidePasswordButton.style.display = 'inline-flex';\n  });\n  hidePasswordButton.addEventListener('click', function () {\n    passwordField.type = 'password';\n    hidePasswordButton.style.display = 'none';\n    showPasswordButton.style.display = 'inline-flex';\n  });\n}\ninitializeTogglePassword();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvcmVnaXN0ZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQU8sTUFBTUEsYUFBYSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxXQUFXLENBQUM7QUFDekQsTUFBTUMsZ0JBQWdCLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGNBQWMsQ0FBQztBQUMvRCxNQUFNRSxpQkFBaUIsR0FBR0gsUUFBUSxDQUFDQyxhQUFhLENBQUMsZUFBZSxDQUFDO0FBQ2pFLE1BQU1HLGdCQUFnQixHQUFHSixRQUFRLENBQUNDLGFBQWEsQ0FBQyxjQUFjLENBQUM7QUFDL0QsTUFBTUksV0FBVyxHQUFHTCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxjQUFjLENBQUM7O0FBR2pFO0FBQ08sU0FBU0ssd0JBQXdCQSxDQUFBLEVBQUc7RUFDekMsTUFBTUMsa0JBQWtCLEdBQUdQLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGdCQUFnQixDQUFDO0VBQ25FLE1BQU1PLGtCQUFrQixHQUFHUixRQUFRLENBQUNDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztFQUNuRSxNQUFNUSxhQUFhLEdBQUdULFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGNBQWMsQ0FBQztFQUU1RE0sa0JBQWtCLENBQUNHLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFXO0lBQ3RERCxhQUFhLENBQUNFLElBQUksR0FBRyxNQUFNO0lBQzNCSixrQkFBa0IsQ0FBQ0ssS0FBSyxDQUFDQyxPQUFPLEdBQUcsTUFBTTtJQUN6Q0wsa0JBQWtCLENBQUNJLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLGFBQWE7RUFDbEQsQ0FBQyxDQUFDO0VBRUZMLGtCQUFrQixDQUFDRSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBVztJQUN0REQsYUFBYSxDQUFDRSxJQUFJLEdBQUcsVUFBVTtJQUMvQkgsa0JBQWtCLENBQUNJLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLE1BQU07SUFDekNOLGtCQUFrQixDQUFDSyxLQUFLLENBQUNDLE9BQU8sR0FBRyxhQUFhO0VBQ2xELENBQUMsQ0FBQztBQUNKO0FBRUFQLHdCQUF3QixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yb3Nld2VsbC8uL3NyYy9qcy9yZWdpc3Rlci5qcz82ZmE0Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCByZWdpc3RlckVtYWlsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3R4dEVtYWlsJylcbmV4cG9ydCBjb25zdCByZWdpc3RlclBhc3N3b3JkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3R4dFBhc3N3b3JkJylcbmV4cG9ydCBjb25zdCByZWdpc3RlckZpcnN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0eHRGaXJzdE5hbWUnKVxuZXhwb3J0IGNvbnN0IHJlZ2lzdGVyTGFzdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHh0TGFzdE5hbWUnKVxuZXhwb3J0IGNvbnN0IGJ0blJlZ2lzdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0blJlZ2lzdGVyJylcblxuXG4vLyBwYXNzd29yZCB0b2dnbGVcbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplVG9nZ2xlUGFzc3dvcmQoKSB7XG4gIGNvbnN0IHNob3dQYXNzd29yZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaG93LXBhc3N3b3JkJyk7XG4gIGNvbnN0IGhpZGVQYXNzd29yZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNoaWRlLXBhc3N3b3JkJyk7XG4gIGNvbnN0IHBhc3N3b3JkRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHh0UGFzc3dvcmQnKTtcblxuICBzaG93UGFzc3dvcmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBwYXNzd29yZEZpZWxkLnR5cGUgPSAndGV4dCc7XG4gICAgc2hvd1Bhc3N3b3JkQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgaGlkZVBhc3N3b3JkQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWZsZXgnO1xuICB9KTtcblxuICBoaWRlUGFzc3dvcmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBwYXNzd29yZEZpZWxkLnR5cGUgPSAncGFzc3dvcmQnO1xuICAgIGhpZGVQYXNzd29yZEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIHNob3dQYXNzd29yZEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1mbGV4JztcbiAgfSk7XG59XG5cbmluaXRpYWxpemVUb2dnbGVQYXNzd29yZCgpOyJdLCJuYW1lcyI6WyJyZWdpc3RlckVtYWlsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicmVnaXN0ZXJQYXNzd29yZCIsInJlZ2lzdGVyRmlyc3ROYW1lIiwicmVnaXN0ZXJMYXN0TmFtZSIsImJ0blJlZ2lzdGVyIiwiaW5pdGlhbGl6ZVRvZ2dsZVBhc3N3b3JkIiwic2hvd1Bhc3N3b3JkQnV0dG9uIiwiaGlkZVBhc3N3b3JkQnV0dG9uIiwicGFzc3dvcmRGaWVsZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0eXBlIiwic3R5bGUiLCJkaXNwbGF5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/register.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/register.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;