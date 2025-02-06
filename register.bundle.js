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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   btnRegister: () => (/* binding */ btnRegister),\n/* harmony export */   divAuthState: () => (/* binding */ divAuthState),\n/* harmony export */   initializeTogglePassword: () => (/* binding */ initializeTogglePassword),\n/* harmony export */   lblAuthState: () => (/* binding */ lblAuthState),\n/* harmony export */   registerEmail: () => (/* binding */ registerEmail),\n/* harmony export */   registerFirstName: () => (/* binding */ registerFirstName),\n/* harmony export */   registerLastName: () => (/* binding */ registerLastName),\n/* harmony export */   registerPassword: () => (/* binding */ registerPassword)\n/* harmony export */ });\nwindow.onload = function () {\n  document.body.style.visibility = 'visible';\n  document.body.style.opacity = '1';\n};\nconst registerEmail = document.querySelector('#txtEmail');\nconst registerPassword = document.querySelector('#txtPassword');\nconst registerFirstName = document.querySelector('#txtFirstName');\nconst registerLastName = document.querySelector('#txtLastName');\nconst btnRegister = document.querySelector('#btnRegister');\nconst divAuthState = document.querySelector('#divAuthState');\nconst lblAuthState = document.querySelector('#lblAuthState');\n\n// export const divRegisterError = document.querySelector('#divRegisterError')\n// export const lblRegisterErrorMessage = document.querySelector('#lblRegisterErrorMessage')\n\n// export const hideRegisterError = () => {\n//   divRegisterError.style.display = 'none'\n//   lblRegisterErrorMessage.innerHTML = ''\n// }\n\n// export const showRegisterError = (error) => {\n//   divRegisterError.style.display = 'block'\n//   lblRegisterErrorMessage.innerHTML = `Error: ${error.message}`   \n//   console.log('called show register error')\n//   console.log(divRegisterError, lblRegisterErrorMessage)\n// }\n\n// export const showLoginState = (user) => {\n//   lblAuthState.innerHTML = `You're logged in as ${user.displayName} (uid: ${user.uid}, email: ${user.email}) `\n// }\n\n// password toggle\nfunction initializeTogglePassword() {\n  const showPasswordButton = document.querySelector('#show-password');\n  const hidePasswordButton = document.querySelector('#hide-password');\n  const passwordField = document.querySelector('#txtPassword');\n  showPasswordButton.addEventListener('click', function () {\n    passwordField.type = 'text';\n    showPasswordButton.style.display = 'none';\n    hidePasswordButton.style.display = 'inline-flex';\n  });\n  hidePasswordButton.addEventListener('click', function () {\n    passwordField.type = 'password';\n    hidePasswordButton.style.display = 'none';\n    showPasswordButton.style.display = 'inline-flex';\n  });\n}\ninitializeTogglePassword();\n\n// hideRegisterError();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvcmVnaXN0ZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQUEsTUFBTSxDQUFDQyxNQUFNLEdBQUcsWUFBVztFQUN6QkMsUUFBUSxDQUFDQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsVUFBVSxHQUFHLFNBQVM7RUFDMUNILFFBQVEsQ0FBQ0MsSUFBSSxDQUFDQyxLQUFLLENBQUNFLE9BQU8sR0FBRyxHQUFHO0FBQ25DLENBQUM7QUFHTSxNQUFNQyxhQUFhLEdBQUdMLFFBQVEsQ0FBQ00sYUFBYSxDQUFDLFdBQVcsQ0FBQztBQUN6RCxNQUFNQyxnQkFBZ0IsR0FBR1AsUUFBUSxDQUFDTSxhQUFhLENBQUMsY0FBYyxDQUFDO0FBQy9ELE1BQU1FLGlCQUFpQixHQUFHUixRQUFRLENBQUNNLGFBQWEsQ0FBQyxlQUFlLENBQUM7QUFDakUsTUFBTUcsZ0JBQWdCLEdBQUdULFFBQVEsQ0FBQ00sYUFBYSxDQUFDLGNBQWMsQ0FBQztBQUUvRCxNQUFNSSxXQUFXLEdBQUdWLFFBQVEsQ0FBQ00sYUFBYSxDQUFDLGNBQWMsQ0FBQztBQUUxRCxNQUFNSyxZQUFZLEdBQUdYLFFBQVEsQ0FBQ00sYUFBYSxDQUFDLGVBQWUsQ0FBQztBQUM1RCxNQUFNTSxZQUFZLEdBQUdaLFFBQVEsQ0FBQ00sYUFBYSxDQUFDLGVBQWUsQ0FBQzs7QUFFbkU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ08sU0FBU08sd0JBQXdCQSxDQUFBLEVBQUc7RUFDekMsTUFBTUMsa0JBQWtCLEdBQUdkLFFBQVEsQ0FBQ00sYUFBYSxDQUFDLGdCQUFnQixDQUFDO0VBQ25FLE1BQU1TLGtCQUFrQixHQUFHZixRQUFRLENBQUNNLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztFQUNuRSxNQUFNVSxhQUFhLEdBQUdoQixRQUFRLENBQUNNLGFBQWEsQ0FBQyxjQUFjLENBQUM7RUFFNURRLGtCQUFrQixDQUFDRyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBVztJQUN0REQsYUFBYSxDQUFDRSxJQUFJLEdBQUcsTUFBTTtJQUMzQkosa0JBQWtCLENBQUNaLEtBQUssQ0FBQ2lCLE9BQU8sR0FBRyxNQUFNO0lBQ3pDSixrQkFBa0IsQ0FBQ2IsS0FBSyxDQUFDaUIsT0FBTyxHQUFHLGFBQWE7RUFDbEQsQ0FBQyxDQUFDO0VBRUZKLGtCQUFrQixDQUFDRSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBVztJQUN0REQsYUFBYSxDQUFDRSxJQUFJLEdBQUcsVUFBVTtJQUMvQkgsa0JBQWtCLENBQUNiLEtBQUssQ0FBQ2lCLE9BQU8sR0FBRyxNQUFNO0lBQ3pDTCxrQkFBa0IsQ0FBQ1osS0FBSyxDQUFDaUIsT0FBTyxHQUFHLGFBQWE7RUFDbEQsQ0FBQyxDQUFDO0FBQ0o7QUFFQU4sd0JBQXdCLENBQUMsQ0FBQzs7QUFFMUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yb3Nld2VsbC8uL3NyYy9qcy9yZWdpc3Rlci5qcz82ZmE0Il0sInNvdXJjZXNDb250ZW50IjpbIndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgZG9jdW1lbnQuYm9keS5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICBkb2N1bWVudC5ib2R5LnN0eWxlLm9wYWNpdHkgPSAnMSc7XG59O1xuXG5cbmV4cG9ydCBjb25zdCByZWdpc3RlckVtYWlsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3R4dEVtYWlsJylcbmV4cG9ydCBjb25zdCByZWdpc3RlclBhc3N3b3JkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3R4dFBhc3N3b3JkJylcbmV4cG9ydCBjb25zdCByZWdpc3RlckZpcnN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0eHRGaXJzdE5hbWUnKVxuZXhwb3J0IGNvbnN0IHJlZ2lzdGVyTGFzdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHh0TGFzdE5hbWUnKVxuXG5leHBvcnQgY29uc3QgYnRuUmVnaXN0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuUmVnaXN0ZXInKVxuXG5leHBvcnQgY29uc3QgZGl2QXV0aFN0YXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RpdkF1dGhTdGF0ZScpXG5leHBvcnQgY29uc3QgbGJsQXV0aFN0YXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xibEF1dGhTdGF0ZScpXG5cbi8vIGV4cG9ydCBjb25zdCBkaXZSZWdpc3RlckVycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RpdlJlZ2lzdGVyRXJyb3InKVxuLy8gZXhwb3J0IGNvbnN0IGxibFJlZ2lzdGVyRXJyb3JNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xibFJlZ2lzdGVyRXJyb3JNZXNzYWdlJylcblxuLy8gZXhwb3J0IGNvbnN0IGhpZGVSZWdpc3RlckVycm9yID0gKCkgPT4ge1xuLy8gICBkaXZSZWdpc3RlckVycm9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbi8vICAgbGJsUmVnaXN0ZXJFcnJvck1lc3NhZ2UuaW5uZXJIVE1MID0gJydcbi8vIH1cblxuLy8gZXhwb3J0IGNvbnN0IHNob3dSZWdpc3RlckVycm9yID0gKGVycm9yKSA9PiB7XG4vLyAgIGRpdlJlZ2lzdGVyRXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbi8vICAgbGJsUmVnaXN0ZXJFcnJvck1lc3NhZ2UuaW5uZXJIVE1MID0gYEVycm9yOiAke2Vycm9yLm1lc3NhZ2V9YCAgIFxuLy8gICBjb25zb2xlLmxvZygnY2FsbGVkIHNob3cgcmVnaXN0ZXIgZXJyb3InKVxuLy8gICBjb25zb2xlLmxvZyhkaXZSZWdpc3RlckVycm9yLCBsYmxSZWdpc3RlckVycm9yTWVzc2FnZSlcbi8vIH1cblxuLy8gZXhwb3J0IGNvbnN0IHNob3dMb2dpblN0YXRlID0gKHVzZXIpID0+IHtcbi8vICAgbGJsQXV0aFN0YXRlLmlubmVySFRNTCA9IGBZb3UncmUgbG9nZ2VkIGluIGFzICR7dXNlci5kaXNwbGF5TmFtZX0gKHVpZDogJHt1c2VyLnVpZH0sIGVtYWlsOiAke3VzZXIuZW1haWx9KSBgXG4vLyB9XG5cbi8vIHBhc3N3b3JkIHRvZ2dsZVxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVUb2dnbGVQYXNzd29yZCgpIHtcbiAgY29uc3Qgc2hvd1Bhc3N3b3JkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Nob3ctcGFzc3dvcmQnKTtcbiAgY29uc3QgaGlkZVBhc3N3b3JkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hpZGUtcGFzc3dvcmQnKTtcbiAgY29uc3QgcGFzc3dvcmRGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0eHRQYXNzd29yZCcpO1xuXG4gIHNob3dQYXNzd29yZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIHBhc3N3b3JkRmllbGQudHlwZSA9ICd0ZXh0JztcbiAgICBzaG93UGFzc3dvcmRCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBoaWRlUGFzc3dvcmRCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtZmxleCc7XG4gIH0pO1xuXG4gIGhpZGVQYXNzd29yZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIHBhc3N3b3JkRmllbGQudHlwZSA9ICdwYXNzd29yZCc7XG4gICAgaGlkZVBhc3N3b3JkQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgc2hvd1Bhc3N3b3JkQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWZsZXgnO1xuICB9KTtcbn1cblxuaW5pdGlhbGl6ZVRvZ2dsZVBhc3N3b3JkKCk7XG5cbi8vIGhpZGVSZWdpc3RlckVycm9yKCk7Il0sIm5hbWVzIjpbIndpbmRvdyIsIm9ubG9hZCIsImRvY3VtZW50IiwiYm9keSIsInN0eWxlIiwidmlzaWJpbGl0eSIsIm9wYWNpdHkiLCJyZWdpc3RlckVtYWlsIiwicXVlcnlTZWxlY3RvciIsInJlZ2lzdGVyUGFzc3dvcmQiLCJyZWdpc3RlckZpcnN0TmFtZSIsInJlZ2lzdGVyTGFzdE5hbWUiLCJidG5SZWdpc3RlciIsImRpdkF1dGhTdGF0ZSIsImxibEF1dGhTdGF0ZSIsImluaXRpYWxpemVUb2dnbGVQYXNzd29yZCIsInNob3dQYXNzd29yZEJ1dHRvbiIsImhpZGVQYXNzd29yZEJ1dHRvbiIsInBhc3N3b3JkRmllbGQiLCJhZGRFdmVudExpc3RlbmVyIiwidHlwZSIsImRpc3BsYXkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/register.js\n");

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