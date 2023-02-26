"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkhomepage"] = self["webpackChunkhomepage"] || []).push([["bootstrap_js"],{

/***/ "./bootstrap.js":
/*!**********************!*\
  !*** ./bootstrap.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"webpack/sharing/consume/default/react-dom/react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_Homepage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/Homepage */ \"./src/Homepage.js\");\n\n\n\nconst App = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src_Homepage__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null);\n};\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default().render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null), document.getElementById('app'));\n\n//# sourceURL=webpack://homepage/./bootstrap.js?");

/***/ }),

/***/ "./src/Homepage.js":
/*!*************************!*\
  !*** ./src/Homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var uicomponents_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uicomponents/Button */ \"webpack/container/remote/uicomponents/Button\");\n/* harmony import */ var uicomponents_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uicomponents_Button__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Homepage = ({\n  children\n}) => {\n  // create a homepage component that has a heading and description\n  // about module federation with webpack 5\n  // and a button that says \"Sign in\" that take you to a login page\n  // return (\n  // <>\n  //   <button>{children}</button>\n  //   <Button>Sign in</Button>\n  // </>\n  // );\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, \"Module Federation with Webpack 5\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Module Federation is a new feature in Webpack 5 that allows you to dynamically load code from other webpack bundles at runtime.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((uicomponents_Button__WEBPACK_IMPORTED_MODULE_1___default()), null, \"Sign in\"));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Homepage);\n\n//# sourceURL=webpack://homepage/./src/Homepage.js?");

/***/ })

}]);