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

/***/ "./src/js/login.js":
/*!*************************!*\
  !*** ./src/js/login.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   btnLogin: () => (/* binding */ btnLogin),\n/* harmony export */   btnRegister: () => (/* binding */ btnRegister),\n/* harmony export */   initializeTogglePassword: () => (/* binding */ initializeTogglePassword),\n/* harmony export */   txtEmail: () => (/* binding */ txtEmail),\n/* harmony export */   txtPassword: () => (/* binding */ txtPassword)\n/* harmony export */ });\nconst txtEmail = document.querySelector('#txtEmail');\nconst txtPassword = document.querySelector('#txtPassword');\nconst btnLogin = document.querySelector('#btnLogin');\nconst btnRegister = document.querySelector('#btnRegister');\n\n// password toggle\nfunction initializeTogglePassword() {\n  const showPasswordButton = document.querySelector('#show-password');\n  const hidePasswordButton = document.querySelector('#hide-password');\n  const passwordField = document.querySelector('#txtPassword');\n  showPasswordButton.addEventListener('click', function () {\n    passwordField.type = 'text';\n    showPasswordButton.style.display = 'none';\n    hidePasswordButton.style.display = 'inline-flex';\n  });\n  hidePasswordButton.addEventListener('click', function () {\n    passwordField.type = 'password';\n    hidePasswordButton.style.display = 'none';\n    showPasswordButton.style.display = 'inline-flex';\n  });\n}\ninitializeTogglePassword();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvbG9naW4uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDTyxNQUFNQSxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFdBQVcsQ0FBQztBQUNwRCxNQUFNQyxXQUFXLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGNBQWMsQ0FBQztBQUUxRCxNQUFNRSxRQUFRLEdBQUdILFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFdBQVcsQ0FBQztBQUNwRCxNQUFNRyxXQUFXLEdBQUdKLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGNBQWMsQ0FBQzs7QUFHakU7QUFDTyxTQUFTSSx3QkFBd0JBLENBQUEsRUFBRztFQUN6QyxNQUFNQyxrQkFBa0IsR0FBR04sUUFBUSxDQUFDQyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7RUFDbkUsTUFBTU0sa0JBQWtCLEdBQUdQLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGdCQUFnQixDQUFDO0VBQ25FLE1BQU1PLGFBQWEsR0FBR1IsUUFBUSxDQUFDQyxhQUFhLENBQUMsY0FBYyxDQUFDO0VBRTVESyxrQkFBa0IsQ0FBQ0csZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQVc7SUFDdERELGFBQWEsQ0FBQ0UsSUFBSSxHQUFHLE1BQU07SUFDM0JKLGtCQUFrQixDQUFDSyxLQUFLLENBQUNDLE9BQU8sR0FBRyxNQUFNO0lBQ3pDTCxrQkFBa0IsQ0FBQ0ksS0FBSyxDQUFDQyxPQUFPLEdBQUcsYUFBYTtFQUNsRCxDQUFDLENBQUM7RUFFRkwsa0JBQWtCLENBQUNFLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFXO0lBQ3RERCxhQUFhLENBQUNFLElBQUksR0FBRyxVQUFVO0lBQy9CSCxrQkFBa0IsQ0FBQ0ksS0FBSyxDQUFDQyxPQUFPLEdBQUcsTUFBTTtJQUN6Q04sa0JBQWtCLENBQUNLLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLGFBQWE7RUFDbEQsQ0FBQyxDQUFDO0FBQ0o7QUFFQVAsd0JBQXdCLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jvc2V3ZWxsLy4vc3JjL2pzL2xvZ2luLmpzP2RkNDgiXSwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgY29uc3QgdHh0RW1haWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHh0RW1haWwnKVxuZXhwb3J0IGNvbnN0IHR4dFBhc3N3b3JkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3R4dFBhc3N3b3JkJylcblxuZXhwb3J0IGNvbnN0IGJ0bkxvZ2luID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bkxvZ2luJylcbmV4cG9ydCBjb25zdCBidG5SZWdpc3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG5SZWdpc3RlcicpXG5cblxuLy8gcGFzc3dvcmQgdG9nZ2xlXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZVRvZ2dsZVBhc3N3b3JkKCkge1xuICBjb25zdCBzaG93UGFzc3dvcmRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2hvdy1wYXNzd29yZCcpO1xuICBjb25zdCBoaWRlUGFzc3dvcmRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGlkZS1wYXNzd29yZCcpO1xuICBjb25zdCBwYXNzd29yZEZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3R4dFBhc3N3b3JkJyk7XG5cbiAgc2hvd1Bhc3N3b3JkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgcGFzc3dvcmRGaWVsZC50eXBlID0gJ3RleHQnO1xuICAgIHNob3dQYXNzd29yZEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGhpZGVQYXNzd29yZEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1mbGV4JztcbiAgfSk7XG5cbiAgaGlkZVBhc3N3b3JkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgcGFzc3dvcmRGaWVsZC50eXBlID0gJ3Bhc3N3b3JkJztcbiAgICBoaWRlUGFzc3dvcmRCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBzaG93UGFzc3dvcmRCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtZmxleCc7XG4gIH0pO1xufVxuXG5pbml0aWFsaXplVG9nZ2xlUGFzc3dvcmQoKTsiXSwibmFtZXMiOlsidHh0RW1haWwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0eHRQYXNzd29yZCIsImJ0bkxvZ2luIiwiYnRuUmVnaXN0ZXIiLCJpbml0aWFsaXplVG9nZ2xlUGFzc3dvcmQiLCJzaG93UGFzc3dvcmRCdXR0b24iLCJoaWRlUGFzc3dvcmRCdXR0b24iLCJwYXNzd29yZEZpZWxkIiwiYWRkRXZlbnRMaXN0ZW5lciIsInR5cGUiLCJzdHlsZSIsImRpc3BsYXkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/login.js\n");

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
/******/ 	__webpack_modules__["./src/js/login.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;