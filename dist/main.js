"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwebpack_repo"] = self["webpackChunkwebpack_repo"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/images/loading.png */ \"./src/images/loading.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/images/enter-icon.png */ \"./src/images/enter-icon.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/images/dots-icon.png */ \"./src/images/dots-icon.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/images/trash.png */ \"./src/images/trash.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  font-family: \\\"Open Sans\\\", \\\"Lucida Grande\\\", tahoma, verdana, arial, sans-serif;\\n  background-color: rgb(241, 238, 233);\\n  font-weight: 300;\\n}\\n\\ninput,\\ntextarea {\\n  outline: none;\\n}\\n\\nul,\\nol {\\n  list-style: none;\\n  margin: 0;\\n  padding: 0;\\n}\\n\\n.tasks-container {\\n  display: flex;\\n  flex-direction: column;\\n  border-radius: 3px;\\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\\n  background-color: #fff;\\n  max-width: 500px;\\n  width: 100%;\\n}\\n\\n.row {\\n  display: flex;\\n  justify-content: space-between;\\n  padding: 15px 20px;\\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\\n  align-items: center;\\n}\\n.row h2 {\\n  color: #545862;\\n  font-size: 15px;\\n  font-weight: 400;\\n  line-height: 20px;\\n  margin: 0;\\n  width: 100%;\\n}\\n\\n.refresh {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-repeat: no-repeat;\\n  cursor: pointer;\\n  background-size: 13px;\\n  width: 20px;\\n  height: 20px;\\n  opacity: 0.5;\\n}\\n\\n#input-row {\\n  display: flex;\\n  justify-content: space-between;\\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\\n  align-items: center;\\n  padding-right: 24px;\\n}\\n#input-row #add-new-item {\\n  border: none;\\n  height: 50px;\\n  padding-left: 20px;\\n  line-height: 50px;\\n  font-style: italic;\\n  width: 100%;\\n}\\n#input-row #submit-new-item {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n  background-repeat: no-repeat;\\n  background-color: transparent;\\n  border: none;\\n  cursor: pointer;\\n}\\n\\n.item-icon {\\n  cursor: move;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\n  background-size: 20px;\\n  background-repeat: no-repeat;\\n  width: 20px;\\n  height: 20px;\\n  opacity: 0.2;\\n}\\n\\n.delete {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \");\\n  cursor: pointer;\\n}\\n\\n.checkbox {\\n  margin-right: 10px;\\n}\\n\\n#clear-btn {\\n  width: 100%;\\n  height: 50px;\\n  border: none;\\n  display: block;\\n  cursor: pointer;\\n  opacity: 0.5;\\n}\\n\\n.input-edit-text {\\n  border: none;\\n  background: transparent;\\n}\\n\\n.hidden {\\n  display: none;\\n}\\n\\n.editing {\\n  background-color: #fffeca;\\n}\\n\\n.completed {\\n  text-decoration: line-through;\\n  opacity: 0.5;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-repo/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack-repo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://webpack-repo/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-repo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-repo/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-repo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-repo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-repo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-repo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-repo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-repo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_Task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Task.js */ \"./src/modules/Task.js\");\n/* harmony import */ var _modules_TaskList_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/TaskList.js */ \"./src/modules/TaskList.js\");\n/* harmony import */ var _modules_TaskDone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/TaskDone */ \"./src/modules/TaskDone.js\");\n\n\n\n\n\nconst tasksList = new _modules_TaskList_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\nconst generatedElements = document.querySelector('.tasks-container');\n\nconst renderTitle = () => {\n  const title = document.createElement('div');\n  title.classList.add('row');\n  title.innerHTML = `\n  <h2>Demo</h2>\n  <div class=\"refresh\"></div>`;\n  return title;\n};\n\nconst renderAddItem = () => {\n  const addElementInput = document.createElement('div');\n  addElementInput.id = 'input-row';\n  addElementInput.innerHTML = `\n  <input type=\"text\" id='add-new-item' class=\"input-new-item\" placeholder=\"Add to your list...\">\n  <input type=\"submit\" id=\"submit-new-item\" value title=\"click this or press enter to submit\">\n  `;\n  return addElementInput;\n};\n\nconst renderItemRows = () => {\n  const item = document.createElement('ul');\n  item.id = 'list-content';\n  const list = tasksList.getTask();\n  list.forEach((task) => {\n    item.appendChild(task);\n  });\n  return item;\n};\n\nconst renderBtn = () => {\n  const btn = document.createElement('div');\n  btn.innerHTML = '<button class=\\'row\\' id=\"clear-btn\">Clear all completed</button>';\n  return btn;\n};\n\nconst refresh = () => {\n  generatedElements.replaceChild(renderItemRows(), generatedElements.childNodes[2]);\n};\n\ngeneratedElements.appendChild(renderTitle());\ngeneratedElements.appendChild(renderAddItem());\ngeneratedElements.appendChild(renderItemRows());\ngeneratedElements.appendChild(renderBtn());\n\nconst inputSubmitTaskBtn = generatedElements.querySelector('#submit-new-item');\nconst inputSubmitTaskText = generatedElements.querySelector('#add-new-item');\n//  const listContent = generatedElements.querySelector('#list-content');\n\nfunction Listener() {\n  const editBtns = document.querySelectorAll('.edit');\n  editBtns.forEach((element) => {\n    element.addEventListener('click', (e) => {\n      const { id } = e.target;\n      const index = id.substring(id.indexOf('-') + 1, id.length);\n      const row = document.querySelector(`#task-${index}`);\n      row.classList.add('editing');\n      const rowText = document.querySelector(`#editItem-${index}`);\n      const rowLbl = document.querySelector(`#lbl-${index}`);\n      const rowEditIcon = document.querySelector(`#edit-${index}`);\n      const rowDeleteIcon = document.querySelector(`#delete-${index}`);\n      rowText.classList.toggle('hidden');\n      rowLbl.classList.toggle('hidden');\n      rowEditIcon.classList.toggle('hidden');\n      rowDeleteIcon.classList.toggle('hidden');\n    });\n  });\n\n  const deleteBtns = document.querySelectorAll('.delete');\n  deleteBtns.forEach((button) => {\n    button.addEventListener('click', (e) => {\n      const { id } = e.target;\n      const index = id.substring(id.indexOf('-') + 1, id.length);\n      tasksList.delete(index);\n      tasksList.newIndex();\n      refresh();\n      Listener();\n    });\n  });\n\n  const listElements = generatedElements.querySelectorAll('li');\n  listElements.forEach((element) => {\n    element.addEventListener('dblclick', (e) => { //  dblclick\n      const { id } = e.target;\n      const index = id.substring(id.indexOf('-') + 1, id.length);\n      const rowTask = document.querySelector(`#task-${index}`);\n      if (!rowTask.classList.contains('editing')) {\n        rowTask.classList.add('editing');\n        const rowText = document.querySelector(`#editItem-${index}`);\n        const rowLbl = document.querySelector(`#lbl-${index}`);\n        const rowEditIcon = document.querySelector(`#edit-${index}`);\n        const rowDeleteIcon = document.querySelector(`#delete-${index}`);\n        rowText.classList.toggle('hidden');\n        rowLbl.classList.toggle('hidden');\n        rowEditIcon.classList.toggle('hidden');\n        rowDeleteIcon.classList.toggle('hidden');\n        rowText.select();\n      }\n    });\n  });\n\n  const inputEditText = document.querySelectorAll('.input-edit-text');\n  inputEditText.forEach((element) => {\n    element.addEventListener('blur', (e) => {\n      const { id, value } = e.target;\n      const index = id.substring(id.indexOf('-') + 1, id.length);\n      const rowTask = document.querySelector(`#task-${index}`);\n      rowTask.classList.remove('.editing');\n      const rowText = document.querySelector(`#editItem-${index}`);\n      const rowLbl = document.querySelector(`#lbl-${index}`);\n      const rowEditIcon = document.querySelector(`#edit-${index}`);\n      const rowDeleteIcon = document.querySelector(`#delete-${index}`);\n      rowText.classList.toggle('hidden');\n      rowLbl.classList.toggle('hidden');\n      rowEditIcon.classList.toggle('hidden');\n      rowDeleteIcon.classList.toggle('hidden');\n      const data = {\n        description: value,\n        index,\n      };\n      tasksList.edit(data);\n      tasksList.newIndex();\n      refresh();\n      Listener();\n    });\n\n    element.addEventListener('keypress', (e) => {\n      if (e.keyCode === 13) {\n        const { id } = e.target;\n        const index = id.substring(id.indexOf('-') + 1, id.length);\n        const rowText = document.querySelector(`#editItem-${index}`);\n        rowText.blur();\n      }\n    });\n  });\n  const checkboxes = generatedElements.querySelectorAll('.checkbox');\n  checkboxes.forEach((checkbox) => {\n    checkbox.addEventListener('change', (e) => {\n      const { id } = e.target;\n      const index = id.substring(id.indexOf('-') + 1, id.length);\n      const completed = new _modules_TaskDone__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n      completed.changeState(index);\n      refresh();\n      Listener();\n    });\n  });\n}// END LISTENER\n\n//  ENTER AT ADD TO YOUR LIST\ninputSubmitTaskText.addEventListener('keypress', (e) => {\n  if (e.keyCode === 13) {\n    const data = new _modules_Task_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](inputSubmitTaskText.value);\n    tasksList.add(data);\n    inputSubmitTaskText.value = '';\n    tasksList.newIndex();\n    refresh();\n    Listener();\n  }\n});\n\ninputSubmitTaskBtn.addEventListener('click', () => {\n  const data = new _modules_Task_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](inputSubmitTaskText.value);\n  tasksList.add(data);\n  inputSubmitTaskText.value = '';\n  tasksList.newIndex();\n  refresh();\n  Listener();\n  //  generatedElements.replaceChild(renderItemRows(), listContent);\n});\n\nconst clearAllBtn = document.querySelector('#clear-btn');\nclearAllBtn.addEventListener('click', () => {\n  tasksList.clearCompletedTasks();\n  tasksList.newIndex();\n  refresh();\n  Listener();\n});\nListener();\n\n\n//# sourceURL=webpack://webpack-repo/./src/index.js?");

/***/ }),

/***/ "./src/modules/Task.js":
/*!*****************************!*\
  !*** ./src/modules/Task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\n  constructor(description, completed = false, index) {\n    this.description = description;\n    this.completed = completed;\n    this.index = index;\n    //  this.count = this.getTasks().length;\n  }\n}\n\n//# sourceURL=webpack://webpack-repo/./src/modules/Task.js?");

/***/ }),

/***/ "./src/modules/TaskDone.js":
/*!*********************************!*\
  !*** ./src/modules/TaskDone.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TaskDone)\n/* harmony export */ });\n/* harmony import */ var _TaskList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaskList.js */ \"./src/modules/TaskList.js\");\n\n\nclass TaskDone {\n  constructor() {\n    this.TaskList = new _TaskList_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  }\n\n  changeState(index) {\n    this.TaskList.list[index - 1].completed = !this.TaskList.list[index - 1].completed;\n    localStorage.setItem('data', JSON.stringify(this.TaskList.list));\n  }\n}\n\n//# sourceURL=webpack://webpack-repo/./src/modules/TaskDone.js?");

/***/ }),

/***/ "./src/modules/TaskList.js":
/*!*********************************!*\
  !*** ./src/modules/TaskList.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TaskList)\n/* harmony export */ });\nclass TaskList {\n  constructor() {\n    this.list = JSON.parse(localStorage.getItem('data')) || [];\n  }\n\n  add(data) {\n    const index = this.list.length + 1;\n    data.index = index;\n    this.list.push(data);\n    localStorage.setItem('data', JSON.stringify(this.list));\n  }\n\n  newIndex() {\n    let count = 1;\n    this.list.forEach((task) => {\n      task.index = count;\n      count += 1;\n    });\n    localStorage.setItem('data', JSON.stringify(this.list));\n  }\n\n  delete(index) {\n    this.list.splice(index - 1, 1);\n    localStorage.setItem('data', JSON.stringify(this.list));\n  }\n\n  edit(data) {\n    const { index, description } = data;\n    this.list.forEach((element) => {\n      if (element.index === parseInt(index, 10)) {\n        element.description = description;\n      }\n    });\n    localStorage.setItem('data', JSON.stringify(this.list));\n  }\n\n  getTask() {\n    const data = [];\n    this.list = JSON.parse(localStorage.getItem('data')) || [];\n    this.list.forEach((task) => {\n      const li = document.createElement('li');\n      li.classList.add('row');\n      li.classList.add('input');\n      li.id = `task-${task.index}`;\n      li.innerHTML = `\n        <div class=\"task-content\">\n          <input id=\"cb-${task.index}\" type=\"checkbox\" class=\"checkbox\" ${task.completed ? 'checked' : ''}>\n          <label id=\"lbl-${task.index}\" for=\"cb-${task.index}\" class=\"${task.completed ? 'completed' : ''}\">${task.description}</label>\n          <input type=\"text\" class=\"input-edit-text hidden\" id='editItem-${task.index}' value='${task.description}'>\n        </div>\n        <div class=\"item-icon edit\" id='edit-${task.index}'></div>\n        <div class=\"delete item-icon hidden\" id='delete-${task.index}'></div>\n        `;\n      data.push(li);\n      //  console.log(data);\n    });\n    return data;\n  }\n\n  clearCompletedTasks() {\n    const newList = this.list.filter((element) => element.completed !== true);\n    this.list = newList;\n    localStorage.setItem('data', JSON.stringify(this.list));\n  }\n}\n\n//# sourceURL=webpack://webpack-repo/./src/modules/TaskList.js?");

/***/ }),

/***/ "./src/images/dots-icon.png":
/*!**********************************!*\
  !*** ./src/images/dots-icon.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f587c2b8be786d80be09.png\";\n\n//# sourceURL=webpack://webpack-repo/./src/images/dots-icon.png?");

/***/ }),

/***/ "./src/images/enter-icon.png":
/*!***********************************!*\
  !*** ./src/images/enter-icon.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fa544f635765db738d2e.png\";\n\n//# sourceURL=webpack://webpack-repo/./src/images/enter-icon.png?");

/***/ }),

/***/ "./src/images/loading.png":
/*!********************************!*\
  !*** ./src/images/loading.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"204a20a60164e05c120a.png\";\n\n//# sourceURL=webpack://webpack-repo/./src/images/loading.png?");

/***/ }),

/***/ "./src/images/trash.png":
/*!******************************!*\
  !*** ./src/images/trash.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7499808abbe2b50f8c4c.png\";\n\n//# sourceURL=webpack://webpack-repo/./src/images/trash.png?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);