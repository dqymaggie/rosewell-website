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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   btnLogin: () => (/* binding */ btnLogin),\n/* harmony export */   btnRegister: () => (/* binding */ btnRegister),\n/* harmony export */   initializeTogglePassword: () => (/* binding */ initializeTogglePassword),\n/* harmony export */   txtEmail: () => (/* binding */ txtEmail),\n/* harmony export */   txtPassword: () => (/* binding */ txtPassword)\n/* harmony export */ });\nconst txtEmail = document.querySelector('#txtEmail');\nconst txtPassword = document.querySelector('#txtPassword');\nconst btnLogin = document.querySelector('#btnLogin');\nconst btnRegister = document.querySelector('#btnRegister');\n\n// export const btnLogout = document.querySelector('#btnLogout')\n\n// export const divAuthState = document.querySelector('#divAuthState')\n// export const lblAuthState = document.querySelector('#lblAuthState')\n\n// export const divLoginError = document.querySelector('#divLoginError')\n// export const lblLoginErrorMessage = document.querySelector('#lblLoginErrorMessage')\n\n// export const hideLoginError = () => {\n//   divLoginError.style.display = 'none'\n//   lblLoginErrorMessage.innerHTML = ''\n// }\n\n// export const showLoginError = (error) => {\n//   const divLoginError = document.getElementById('divLoginError')\n//   const lblLoginErrorMessage = document.getElementById('lblLoginErrorMessage')\n\n//   if (!divLoginError || !lblLoginErrorMessage) {\n//     console.error('Login error elements not found in DOM')\n//     return\n//   }\n\n//   divLoginError.style.display = 'block';\n\n//   if (typeof error === 'string') {\n//     lblLoginErrorMessage.innerHTML = error;\n//   } else if (error.code === AuthErrorCodes.INVALID_PASSWORD) {\n//     lblLoginErrorMessage.innerHTML = `Wrong Password, please try again.`;\n//   } else if (error.code === 'auth/invalid-email') {\n//     lblLoginErrorMessage.innerHTML = `Invalid email!`;\n//   } else {\n//     lblLoginErrorMessage.innerHTML = `Error: ${error.message}`;\n//   }\n// };\n\n// export const showLoginError = (error) => {\n//   divLoginError.style.display = 'block'\n\n//   if (typeof error === 'string') {\n//     lblLoginErrorMessage.innerHTML = error;\n//   } else if (error.code === AuthErrorCodes.INVALID_PASSWORD) {\n//     lblLoginErrorMessage.innerHTML = `Wrong Password, please try again.`;\n//   } else if (error.code === 'auth/invalid-email') {\n//     lblLoginErrorMessage.innerHTML = `Invalid email!`;\n//   } else {\n//     lblLoginErrorMessage.innerHTML = `Error: ${error.message}`      \n//   }\n// }\n\n// export const showLoginState = (user) => {\n//   lblAuthState.innerHTML = `You're logged in as ${user.displayName} (uid: ${user.uid}, email: ${user.email}) `\n// }\n\n// password toggle\nfunction initializeTogglePassword() {\n  const showPasswordButton = document.querySelector('#show-password');\n  const hidePasswordButton = document.querySelector('#hide-password');\n  const passwordField = document.querySelector('#txtPassword');\n  showPasswordButton.addEventListener('click', function () {\n    passwordField.type = 'text';\n    showPasswordButton.style.display = 'none';\n    hidePasswordButton.style.display = 'inline-flex';\n  });\n  hidePasswordButton.addEventListener('click', function () {\n    passwordField.type = 'password';\n    hidePasswordButton.style.display = 'none';\n    showPasswordButton.style.display = 'inline-flex';\n  });\n}\ninitializeTogglePassword();\n\n// hideLoginError();\n// showLoginError('test error');\n\nconsole.log(\"login.js loaded\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvbG9naW4uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDTyxNQUFNQSxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFdBQVcsQ0FBQztBQUNwRCxNQUFNQyxXQUFXLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGNBQWMsQ0FBQztBQUUxRCxNQUFNRSxRQUFRLEdBQUdILFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFdBQVcsQ0FBQztBQUNwRCxNQUFNRyxXQUFXLEdBQUdKLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGNBQWMsQ0FBQzs7QUFFakU7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNPLFNBQVNJLHdCQUF3QkEsQ0FBQSxFQUFHO0VBQ3pDLE1BQU1DLGtCQUFrQixHQUFHTixRQUFRLENBQUNDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztFQUNuRSxNQUFNTSxrQkFBa0IsR0FBR1AsUUFBUSxDQUFDQyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7RUFDbkUsTUFBTU8sYUFBYSxHQUFHUixRQUFRLENBQUNDLGFBQWEsQ0FBQyxjQUFjLENBQUM7RUFFNURLLGtCQUFrQixDQUFDRyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBVztJQUN0REQsYUFBYSxDQUFDRSxJQUFJLEdBQUcsTUFBTTtJQUMzQkosa0JBQWtCLENBQUNLLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLE1BQU07SUFDekNMLGtCQUFrQixDQUFDSSxLQUFLLENBQUNDLE9BQU8sR0FBRyxhQUFhO0VBQ2xELENBQUMsQ0FBQztFQUVGTCxrQkFBa0IsQ0FBQ0UsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQVc7SUFDdERELGFBQWEsQ0FBQ0UsSUFBSSxHQUFHLFVBQVU7SUFDL0JILGtCQUFrQixDQUFDSSxLQUFLLENBQUNDLE9BQU8sR0FBRyxNQUFNO0lBQ3pDTixrQkFBa0IsQ0FBQ0ssS0FBSyxDQUFDQyxPQUFPLEdBQUcsYUFBYTtFQUNsRCxDQUFDLENBQUM7QUFDSjtBQUVBUCx3QkFBd0IsQ0FBQyxDQUFDOztBQUUxQjtBQUNBOztBQUVBUSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jvc2V3ZWxsLy4vc3JjL2pzL2xvZ2luLmpzP2RkNDgiXSwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgY29uc3QgdHh0RW1haWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHh0RW1haWwnKVxuZXhwb3J0IGNvbnN0IHR4dFBhc3N3b3JkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3R4dFBhc3N3b3JkJylcblxuZXhwb3J0IGNvbnN0IGJ0bkxvZ2luID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bkxvZ2luJylcbmV4cG9ydCBjb25zdCBidG5SZWdpc3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG5SZWdpc3RlcicpXG5cbi8vIGV4cG9ydCBjb25zdCBidG5Mb2dvdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuTG9nb3V0JylcblxuLy8gZXhwb3J0IGNvbnN0IGRpdkF1dGhTdGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkaXZBdXRoU3RhdGUnKVxuLy8gZXhwb3J0IGNvbnN0IGxibEF1dGhTdGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsYmxBdXRoU3RhdGUnKVxuXG4vLyBleHBvcnQgY29uc3QgZGl2TG9naW5FcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkaXZMb2dpbkVycm9yJylcbi8vIGV4cG9ydCBjb25zdCBsYmxMb2dpbkVycm9yTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsYmxMb2dpbkVycm9yTWVzc2FnZScpXG5cbi8vIGV4cG9ydCBjb25zdCBoaWRlTG9naW5FcnJvciA9ICgpID0+IHtcbi8vICAgZGl2TG9naW5FcnJvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4vLyAgIGxibExvZ2luRXJyb3JNZXNzYWdlLmlubmVySFRNTCA9ICcnXG4vLyB9XG5cbi8vIGV4cG9ydCBjb25zdCBzaG93TG9naW5FcnJvciA9IChlcnJvcikgPT4ge1xuLy8gICBjb25zdCBkaXZMb2dpbkVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpdkxvZ2luRXJyb3InKVxuLy8gICBjb25zdCBsYmxMb2dpbkVycm9yTWVzc2FnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsYmxMb2dpbkVycm9yTWVzc2FnZScpXG5cbi8vICAgaWYgKCFkaXZMb2dpbkVycm9yIHx8ICFsYmxMb2dpbkVycm9yTWVzc2FnZSkge1xuLy8gICAgIGNvbnNvbGUuZXJyb3IoJ0xvZ2luIGVycm9yIGVsZW1lbnRzIG5vdCBmb3VuZCBpbiBET00nKVxuLy8gICAgIHJldHVyblxuLy8gICB9XG5cbi8vICAgZGl2TG9naW5FcnJvci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblxuLy8gICBpZiAodHlwZW9mIGVycm9yID09PSAnc3RyaW5nJykge1xuLy8gICAgIGxibExvZ2luRXJyb3JNZXNzYWdlLmlubmVySFRNTCA9IGVycm9yO1xuLy8gICB9IGVsc2UgaWYgKGVycm9yLmNvZGUgPT09IEF1dGhFcnJvckNvZGVzLklOVkFMSURfUEFTU1dPUkQpIHtcbi8vICAgICBsYmxMb2dpbkVycm9yTWVzc2FnZS5pbm5lckhUTUwgPSBgV3JvbmcgUGFzc3dvcmQsIHBsZWFzZSB0cnkgYWdhaW4uYDtcbi8vICAgfSBlbHNlIGlmIChlcnJvci5jb2RlID09PSAnYXV0aC9pbnZhbGlkLWVtYWlsJykge1xuLy8gICAgIGxibExvZ2luRXJyb3JNZXNzYWdlLmlubmVySFRNTCA9IGBJbnZhbGlkIGVtYWlsIWA7XG4vLyAgIH0gZWxzZSB7XG4vLyAgICAgbGJsTG9naW5FcnJvck1lc3NhZ2UuaW5uZXJIVE1MID0gYEVycm9yOiAke2Vycm9yLm1lc3NhZ2V9YDtcbi8vICAgfVxuLy8gfTtcblxuXG4vLyBleHBvcnQgY29uc3Qgc2hvd0xvZ2luRXJyb3IgPSAoZXJyb3IpID0+IHtcbi8vICAgZGl2TG9naW5FcnJvci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuXG4vLyAgIGlmICh0eXBlb2YgZXJyb3IgPT09ICdzdHJpbmcnKSB7XG4vLyAgICAgbGJsTG9naW5FcnJvck1lc3NhZ2UuaW5uZXJIVE1MID0gZXJyb3I7XG4vLyAgIH0gZWxzZSBpZiAoZXJyb3IuY29kZSA9PT0gQXV0aEVycm9yQ29kZXMuSU5WQUxJRF9QQVNTV09SRCkge1xuLy8gICAgIGxibExvZ2luRXJyb3JNZXNzYWdlLmlubmVySFRNTCA9IGBXcm9uZyBQYXNzd29yZCwgcGxlYXNlIHRyeSBhZ2Fpbi5gO1xuLy8gICB9IGVsc2UgaWYgKGVycm9yLmNvZGUgPT09ICdhdXRoL2ludmFsaWQtZW1haWwnKSB7XG4vLyAgICAgbGJsTG9naW5FcnJvck1lc3NhZ2UuaW5uZXJIVE1MID0gYEludmFsaWQgZW1haWwhYDtcbi8vICAgfSBlbHNlIHtcbi8vICAgICBsYmxMb2dpbkVycm9yTWVzc2FnZS5pbm5lckhUTUwgPSBgRXJyb3I6ICR7ZXJyb3IubWVzc2FnZX1gICAgICAgXG4vLyAgIH1cbi8vIH1cblxuLy8gZXhwb3J0IGNvbnN0IHNob3dMb2dpblN0YXRlID0gKHVzZXIpID0+IHtcbi8vICAgbGJsQXV0aFN0YXRlLmlubmVySFRNTCA9IGBZb3UncmUgbG9nZ2VkIGluIGFzICR7dXNlci5kaXNwbGF5TmFtZX0gKHVpZDogJHt1c2VyLnVpZH0sIGVtYWlsOiAke3VzZXIuZW1haWx9KSBgXG4vLyB9XG5cbi8vIHBhc3N3b3JkIHRvZ2dsZVxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVUb2dnbGVQYXNzd29yZCgpIHtcbiAgY29uc3Qgc2hvd1Bhc3N3b3JkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Nob3ctcGFzc3dvcmQnKTtcbiAgY29uc3QgaGlkZVBhc3N3b3JkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hpZGUtcGFzc3dvcmQnKTtcbiAgY29uc3QgcGFzc3dvcmRGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0eHRQYXNzd29yZCcpO1xuXG4gIHNob3dQYXNzd29yZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIHBhc3N3b3JkRmllbGQudHlwZSA9ICd0ZXh0JztcbiAgICBzaG93UGFzc3dvcmRCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBoaWRlUGFzc3dvcmRCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtZmxleCc7XG4gIH0pO1xuXG4gIGhpZGVQYXNzd29yZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIHBhc3N3b3JkRmllbGQudHlwZSA9ICdwYXNzd29yZCc7XG4gICAgaGlkZVBhc3N3b3JkQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgc2hvd1Bhc3N3b3JkQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWZsZXgnO1xuICB9KTtcbn1cblxuaW5pdGlhbGl6ZVRvZ2dsZVBhc3N3b3JkKCk7XG5cbi8vIGhpZGVMb2dpbkVycm9yKCk7XG4vLyBzaG93TG9naW5FcnJvcigndGVzdCBlcnJvcicpO1xuXG5jb25zb2xlLmxvZyhcImxvZ2luLmpzIGxvYWRlZFwiKTsiXSwibmFtZXMiOlsidHh0RW1haWwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0eHRQYXNzd29yZCIsImJ0bkxvZ2luIiwiYnRuUmVnaXN0ZXIiLCJpbml0aWFsaXplVG9nZ2xlUGFzc3dvcmQiLCJzaG93UGFzc3dvcmRCdXR0b24iLCJoaWRlUGFzc3dvcmRCdXR0b24iLCJwYXNzd29yZEZpZWxkIiwiYWRkRXZlbnRMaXN0ZW5lciIsInR5cGUiLCJzdHlsZSIsImRpc3BsYXkiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/login.js\n");

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