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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   btnRegister: () => (/* binding */ btnRegister),\n/* harmony export */   initializeTogglePassword: () => (/* binding */ initializeTogglePassword),\n/* harmony export */   registerEmail: () => (/* binding */ registerEmail),\n/* harmony export */   registerFirstName: () => (/* binding */ registerFirstName),\n/* harmony export */   registerLastName: () => (/* binding */ registerLastName),\n/* harmony export */   registerPassword: () => (/* binding */ registerPassword)\n/* harmony export */ });\nwindow.onload = function () {\n  document.body.style.visibility = 'visible';\n  document.body.style.opacity = '1';\n};\nconst registerEmail = document.querySelector('#txtEmail');\nconst registerPassword = document.querySelector('#txtPassword');\nconst registerFirstName = document.querySelector('#txtFirstName');\nconst registerLastName = document.querySelector('#txtLastName');\nconst btnRegister = document.querySelector('#btnRegister');\n\n// export const divAuthState = document.querySelector('#divAuthState')\n// export const lblAuthState = document.querySelector('#lblAuthState')\n\n// export const divRegisterError = document.querySelector('#divRegisterError')\n// export const lblRegisterErrorMessage = document.querySelector('#lblRegisterErrorMessage')\n\n// export const hideRegisterError = () => {\n//   divRegisterError.style.display = 'none'\n//   lblRegisterErrorMessage.innerHTML = ''\n// }\n\n// export const showRegisterError = (error) => {\n//   divRegisterError.style.display = 'block'\n//   lblRegisterErrorMessage.innerHTML = `Error: ${error.message}`   \n//   console.log('called show register error')\n//   console.log(divRegisterError, lblRegisterErrorMessage)\n// }\n\n// export const showLoginState = (user) => {\n//   lblAuthState.innerHTML = `You're logged in as ${user.displayName} (uid: ${user.uid}, email: ${user.email}) `\n// }\n\n// password toggle\nfunction initializeTogglePassword() {\n  const showPasswordButton = document.querySelector('#show-password');\n  const hidePasswordButton = document.querySelector('#hide-password');\n  const passwordField = document.querySelector('#txtPassword');\n  showPasswordButton.addEventListener('click', function () {\n    passwordField.type = 'text';\n    showPasswordButton.style.display = 'none';\n    hidePasswordButton.style.display = 'inline-flex';\n  });\n  hidePasswordButton.addEventListener('click', function () {\n    passwordField.type = 'password';\n    hidePasswordButton.style.display = 'none';\n    showPasswordButton.style.display = 'inline-flex';\n  });\n}\ninitializeTogglePassword();\n\n// hideRegisterError();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvcmVnaXN0ZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUFBLE1BQU0sQ0FBQ0MsTUFBTSxHQUFHLFlBQVc7RUFDekJDLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDQyxLQUFLLENBQUNDLFVBQVUsR0FBRyxTQUFTO0VBQzFDSCxRQUFRLENBQUNDLElBQUksQ0FBQ0MsS0FBSyxDQUFDRSxPQUFPLEdBQUcsR0FBRztBQUNuQyxDQUFDO0FBR00sTUFBTUMsYUFBYSxHQUFHTCxRQUFRLENBQUNNLGFBQWEsQ0FBQyxXQUFXLENBQUM7QUFDekQsTUFBTUMsZ0JBQWdCLEdBQUdQLFFBQVEsQ0FBQ00sYUFBYSxDQUFDLGNBQWMsQ0FBQztBQUMvRCxNQUFNRSxpQkFBaUIsR0FBR1IsUUFBUSxDQUFDTSxhQUFhLENBQUMsZUFBZSxDQUFDO0FBQ2pFLE1BQU1HLGdCQUFnQixHQUFHVCxRQUFRLENBQUNNLGFBQWEsQ0FBQyxjQUFjLENBQUM7QUFFL0QsTUFBTUksV0FBVyxHQUFHVixRQUFRLENBQUNNLGFBQWEsQ0FBQyxjQUFjLENBQUM7O0FBRWpFO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ08sU0FBU0ssd0JBQXdCQSxDQUFBLEVBQUc7RUFDekMsTUFBTUMsa0JBQWtCLEdBQUdaLFFBQVEsQ0FBQ00sYUFBYSxDQUFDLGdCQUFnQixDQUFDO0VBQ25FLE1BQU1PLGtCQUFrQixHQUFHYixRQUFRLENBQUNNLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztFQUNuRSxNQUFNUSxhQUFhLEdBQUdkLFFBQVEsQ0FBQ00sYUFBYSxDQUFDLGNBQWMsQ0FBQztFQUU1RE0sa0JBQWtCLENBQUNHLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFXO0lBQ3RERCxhQUFhLENBQUNFLElBQUksR0FBRyxNQUFNO0lBQzNCSixrQkFBa0IsQ0FBQ1YsS0FBSyxDQUFDZSxPQUFPLEdBQUcsTUFBTTtJQUN6Q0osa0JBQWtCLENBQUNYLEtBQUssQ0FBQ2UsT0FBTyxHQUFHLGFBQWE7RUFDbEQsQ0FBQyxDQUFDO0VBRUZKLGtCQUFrQixDQUFDRSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBVztJQUN0REQsYUFBYSxDQUFDRSxJQUFJLEdBQUcsVUFBVTtJQUMvQkgsa0JBQWtCLENBQUNYLEtBQUssQ0FBQ2UsT0FBTyxHQUFHLE1BQU07SUFDekNMLGtCQUFrQixDQUFDVixLQUFLLENBQUNlLE9BQU8sR0FBRyxhQUFhO0VBQ2xELENBQUMsQ0FBQztBQUNKO0FBRUFOLHdCQUF3QixDQUFDLENBQUM7O0FBRTFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcm9zZXdlbGwvLi9zcmMvanMvcmVnaXN0ZXIuanM/NmZhNCJdLCJzb3VyY2VzQ29udGVudCI6WyJ3aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gIGRvY3VtZW50LmJvZHkuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgZG9jdW1lbnQuYm9keS5zdHlsZS5vcGFjaXR5ID0gJzEnO1xufTtcblxuXG5leHBvcnQgY29uc3QgcmVnaXN0ZXJFbWFpbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0eHRFbWFpbCcpXG5leHBvcnQgY29uc3QgcmVnaXN0ZXJQYXNzd29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0eHRQYXNzd29yZCcpXG5leHBvcnQgY29uc3QgcmVnaXN0ZXJGaXJzdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHh0Rmlyc3ROYW1lJylcbmV4cG9ydCBjb25zdCByZWdpc3Rlckxhc3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3R4dExhc3ROYW1lJylcblxuZXhwb3J0IGNvbnN0IGJ0blJlZ2lzdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0blJlZ2lzdGVyJylcblxuLy8gZXhwb3J0IGNvbnN0IGRpdkF1dGhTdGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkaXZBdXRoU3RhdGUnKVxuLy8gZXhwb3J0IGNvbnN0IGxibEF1dGhTdGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsYmxBdXRoU3RhdGUnKVxuXG4vLyBleHBvcnQgY29uc3QgZGl2UmVnaXN0ZXJFcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkaXZSZWdpc3RlckVycm9yJylcbi8vIGV4cG9ydCBjb25zdCBsYmxSZWdpc3RlckVycm9yTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsYmxSZWdpc3RlckVycm9yTWVzc2FnZScpXG5cbi8vIGV4cG9ydCBjb25zdCBoaWRlUmVnaXN0ZXJFcnJvciA9ICgpID0+IHtcbi8vICAgZGl2UmVnaXN0ZXJFcnJvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4vLyAgIGxibFJlZ2lzdGVyRXJyb3JNZXNzYWdlLmlubmVySFRNTCA9ICcnXG4vLyB9XG5cbi8vIGV4cG9ydCBjb25zdCBzaG93UmVnaXN0ZXJFcnJvciA9IChlcnJvcikgPT4ge1xuLy8gICBkaXZSZWdpc3RlckVycm9yLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4vLyAgIGxibFJlZ2lzdGVyRXJyb3JNZXNzYWdlLmlubmVySFRNTCA9IGBFcnJvcjogJHtlcnJvci5tZXNzYWdlfWAgICBcbi8vICAgY29uc29sZS5sb2coJ2NhbGxlZCBzaG93IHJlZ2lzdGVyIGVycm9yJylcbi8vICAgY29uc29sZS5sb2coZGl2UmVnaXN0ZXJFcnJvciwgbGJsUmVnaXN0ZXJFcnJvck1lc3NhZ2UpXG4vLyB9XG5cbi8vIGV4cG9ydCBjb25zdCBzaG93TG9naW5TdGF0ZSA9ICh1c2VyKSA9PiB7XG4vLyAgIGxibEF1dGhTdGF0ZS5pbm5lckhUTUwgPSBgWW91J3JlIGxvZ2dlZCBpbiBhcyAke3VzZXIuZGlzcGxheU5hbWV9ICh1aWQ6ICR7dXNlci51aWR9LCBlbWFpbDogJHt1c2VyLmVtYWlsfSkgYFxuLy8gfVxuXG4vLyBwYXNzd29yZCB0b2dnbGVcbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplVG9nZ2xlUGFzc3dvcmQoKSB7XG4gIGNvbnN0IHNob3dQYXNzd29yZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaG93LXBhc3N3b3JkJyk7XG4gIGNvbnN0IGhpZGVQYXNzd29yZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNoaWRlLXBhc3N3b3JkJyk7XG4gIGNvbnN0IHBhc3N3b3JkRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHh0UGFzc3dvcmQnKTtcblxuICBzaG93UGFzc3dvcmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBwYXNzd29yZEZpZWxkLnR5cGUgPSAndGV4dCc7XG4gICAgc2hvd1Bhc3N3b3JkQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgaGlkZVBhc3N3b3JkQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWZsZXgnO1xuICB9KTtcblxuICBoaWRlUGFzc3dvcmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBwYXNzd29yZEZpZWxkLnR5cGUgPSAncGFzc3dvcmQnO1xuICAgIGhpZGVQYXNzd29yZEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIHNob3dQYXNzd29yZEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1mbGV4JztcbiAgfSk7XG59XG5cbmluaXRpYWxpemVUb2dnbGVQYXNzd29yZCgpO1xuXG4vLyBoaWRlUmVnaXN0ZXJFcnJvcigpOyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJvbmxvYWQiLCJkb2N1bWVudCIsImJvZHkiLCJzdHlsZSIsInZpc2liaWxpdHkiLCJvcGFjaXR5IiwicmVnaXN0ZXJFbWFpbCIsInF1ZXJ5U2VsZWN0b3IiLCJyZWdpc3RlclBhc3N3b3JkIiwicmVnaXN0ZXJGaXJzdE5hbWUiLCJyZWdpc3Rlckxhc3ROYW1lIiwiYnRuUmVnaXN0ZXIiLCJpbml0aWFsaXplVG9nZ2xlUGFzc3dvcmQiLCJzaG93UGFzc3dvcmRCdXR0b24iLCJoaWRlUGFzc3dvcmRCdXR0b24iLCJwYXNzd29yZEZpZWxkIiwiYWRkRXZlbnRMaXN0ZW5lciIsInR5cGUiLCJkaXNwbGF5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/register.js\n");

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