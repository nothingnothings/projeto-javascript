/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + chunkId + ".app.js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	__webpack_require__.p = "/assets/scripts";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/lodash/lodash.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/lodash.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvd2VicGFjay9idWlsZGluL2dsb2JhbC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanM/Y2QwMCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/webpack/buildin/global.js\n");

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(module) {\n\tif (!module.webpackPolyfill) {\n\t\tmodule.deprecate = function() {};\n\t\tmodule.paths = [];\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvd2VicGFjay9idWlsZGluL21vZHVsZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanM/Y2VkMiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRpZiAoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/webpack/buildin/module.js\n");

/***/ }),

/***/ "./src/App/ProjectItem.js":
/*!********************************!*\
  !*** ./src/App/ProjectItem.js ***!
  \********************************/
/*! exports provided: ProjectItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProjectItem\", function() { return ProjectItem; });\n/* harmony import */ var _Utility_DOMHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Utility/DOMHelper */ \"./src/Utility/DOMHelper.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n // import { Tooltip } from './Tooltip.js';\n\nconsole.log('Project Item created!');\nvar ProjectItem = /*#__PURE__*/function () {\n  // hasActiveTooltip = false;\n  function ProjectItem(id, updateProjectListsFunction, type) {\n    _classCallCheck(this, ProjectItem);\n\n    this.id = id;\n    this.hasActiveTooltip = false;\n    this.updateProjectListsHandler = updateProjectListsFunction;\n    this.connectMoreInfoButton();\n    this.connectSwitchButton(type);\n    this.connectDrag();\n  }\n\n  _createClass(ProjectItem, [{\n    key: \"showMoreInfoHandler\",\n    value: function showMoreInfoHandler() {\n      var _this = this;\n\n      if (this.hasActiveTooltip) {\n        return;\n      }\n\n      var projectElement = document.getElementById(this.id);\n      var tooltipText = projectElement.dataset.extraInfo;\n      __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./Tooltip */ \"./src/App/Tooltip.js\")).then(function (module) {\n        var tooltip = new module.Tooltip(function () {\n          _this.hasActiveTooltip = false;\n        }, tooltipText, _this.id);\n        tooltip.attach();\n        _this.hasActiveTooltip = true;\n      });\n    }\n  }, {\n    key: \"connectDrag\",\n    value: function connectDrag() {\n      var _this2 = this;\n\n      var item = document.getElementById(this.id);\n      item.addEventListener('dragstart', function (event) {\n        event.dataTransfer.setData('text/plain', _this2.id);\n        event.dataTransfer.effectAllowed = 'move';\n      });\n      item.addEventListener('dragend', function (event) {\n        console.log(event);\n      });\n    }\n  }, {\n    key: \"connectMoreInfoButton\",\n    value: function connectMoreInfoButton() {\n      var projectItemElement = document.getElementById(this.id);\n      var moreInfoBtn = projectItemElement.querySelector('button:first-of-type');\n      moreInfoBtn.addEventListener('click', this.showMoreInfoHandler.bind(this));\n    }\n  }, {\n    key: \"connectSwitchButton\",\n    value: function connectSwitchButton(type) {\n      var projectItemElement = document.getElementById(this.id);\n      var switchBtn = projectItemElement.querySelector('button:last-of-type');\n      switchBtn = _Utility_DOMHelper__WEBPACK_IMPORTED_MODULE_0__[\"DOMHelper\"].clearEventListeners(switchBtn);\n      switchBtn.textContent = type === 'active' ? 'Finish' : 'Activate';\n      switchBtn.addEventListener('click', this.updateProjectListsHandler.bind(null, this.id));\n    }\n  }, {\n    key: \"update\",\n    value: function update(updateProjectListsFn, type) {\n      this.updateProjectListsHandler = updateProjectListsFn;\n      this.connectSwitchButton(type);\n    }\n  }]);\n\n  return ProjectItem;\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQXBwL1Byb2plY3RJdGVtLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC9Qcm9qZWN0SXRlbS5qcz8yZTYwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERPTUhlbHBlciB9IGZyb20gJy4uL1V0aWxpdHkvRE9NSGVscGVyJztcbi8vIGltcG9ydCB7IFRvb2x0aXAgfSBmcm9tICcuL1Rvb2x0aXAuanMnO1xuXG5jb25zb2xlLmxvZygnUHJvamVjdCBJdGVtIGNyZWF0ZWQhJyk7XG5cbmV4cG9ydCBjbGFzcyBQcm9qZWN0SXRlbSB7XG4gIC8vIGhhc0FjdGl2ZVRvb2x0aXAgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihpZCwgdXBkYXRlUHJvamVjdExpc3RzRnVuY3Rpb24sIHR5cGUpIHtcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgdGhpcy5oYXNBY3RpdmVUb29sdGlwID0gZmFsc2U7XG4gICAgdGhpcy51cGRhdGVQcm9qZWN0TGlzdHNIYW5kbGVyID0gdXBkYXRlUHJvamVjdExpc3RzRnVuY3Rpb247XG4gICAgdGhpcy5jb25uZWN0TW9yZUluZm9CdXR0b24oKTtcbiAgICB0aGlzLmNvbm5lY3RTd2l0Y2hCdXR0b24odHlwZSk7XG4gICAgdGhpcy5jb25uZWN0RHJhZygpO1xuICB9XG5cbiAgc2hvd01vcmVJbmZvSGFuZGxlcigpIHtcbiAgICBpZiAodGhpcy5oYXNBY3RpdmVUb29sdGlwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHByb2plY3RFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCk7XG4gICAgY29uc3QgdG9vbHRpcFRleHQgPSBwcm9qZWN0RWxlbWVudC5kYXRhc2V0LmV4dHJhSW5mbztcbiAgICBpbXBvcnQoJy4vVG9vbHRpcCcpLnRoZW4obW9kdWxlID0+IHtcbiAgICAgIGNvbnN0IHRvb2x0aXAgPSBuZXcgbW9kdWxlLlRvb2x0aXAoXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICB0aGlzLmhhc0FjdGl2ZVRvb2x0aXAgPSBmYWxzZTtcbiAgICAgICAgfSxcbiAgICAgICAgdG9vbHRpcFRleHQsXG4gICAgICAgIHRoaXMuaWRcbiAgICAgICk7XG4gICAgICB0b29sdGlwLmF0dGFjaCgpO1xuICAgICAgdGhpcy5oYXNBY3RpdmVUb29sdGlwID0gdHJ1ZTtcbiAgICB9KTtcbiAgIFxuICB9XG5cbiAgY29ubmVjdERyYWcoKSB7XG4gICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpO1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgZXZlbnQgPT4ge1xuICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3RleHQvcGxhaW4nLCB0aGlzLmlkKTtcbiAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkID0gJ21vdmUnO1xuICAgIH0pO1xuXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgZXZlbnQgPT4ge1xuICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xuICAgIH0pO1xuICB9XG5cbiAgY29ubmVjdE1vcmVJbmZvQnV0dG9uKCkge1xuICAgIGNvbnN0IHByb2plY3RJdGVtRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpO1xuICAgIGNvbnN0IG1vcmVJbmZvQnRuID0gcHJvamVjdEl0ZW1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnYnV0dG9uOmZpcnN0LW9mLXR5cGUnXG4gICAgKTtcbiAgICBtb3JlSW5mb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuc2hvd01vcmVJbmZvSGFuZGxlci5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGNvbm5lY3RTd2l0Y2hCdXR0b24odHlwZSkge1xuICAgIGNvbnN0IHByb2plY3RJdGVtRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpO1xuICAgIGxldCBzd2l0Y2hCdG4gPSBwcm9qZWN0SXRlbUVsZW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uOmxhc3Qtb2YtdHlwZScpO1xuICAgIHN3aXRjaEJ0biA9IERPTUhlbHBlci5jbGVhckV2ZW50TGlzdGVuZXJzKHN3aXRjaEJ0bik7XG4gICAgc3dpdGNoQnRuLnRleHRDb250ZW50ID0gdHlwZSA9PT0gJ2FjdGl2ZScgPyAnRmluaXNoJyA6ICdBY3RpdmF0ZSc7XG4gICAgc3dpdGNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAnY2xpY2snLFxuICAgICAgdGhpcy51cGRhdGVQcm9qZWN0TGlzdHNIYW5kbGVyLmJpbmQobnVsbCwgdGhpcy5pZClcbiAgICApO1xuICB9XG5cbiAgdXBkYXRlKHVwZGF0ZVByb2plY3RMaXN0c0ZuLCB0eXBlKSB7XG4gICAgdGhpcy51cGRhdGVQcm9qZWN0TGlzdHNIYW5kbGVyID0gdXBkYXRlUHJvamVjdExpc3RzRm47XG4gICAgdGhpcy5jb25uZWN0U3dpdGNoQnV0dG9uKHR5cGUpO1xuICB9XG59Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVhBO0FBQUE7QUFBQTtBQVlBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBOUJBO0FBQUE7QUFBQTtBQWdDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBMUNBO0FBQUE7QUFBQTtBQTZDQTtBQUNBO0FBR0E7QUFDQTtBQWxEQTtBQUFBO0FBQUE7QUFxREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBN0RBO0FBQUE7QUFBQTtBQWdFQTtBQUNBO0FBQ0E7QUFsRUE7QUFDQTtBQURBO0FBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/App/ProjectItem.js\n");

/***/ }),

/***/ "./src/App/ProjectList.js":
/*!********************************!*\
  !*** ./src/App/ProjectList.js ***!
  \********************************/
/*! exports provided: ProjectList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProjectList\", function() { return ProjectList; });\n/* harmony import */ var _ProjectItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectItem */ \"./src/App/ProjectItem.js\");\n/* harmony import */ var _Utility_DOMHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utility/DOMHelper */ \"./src/Utility/DOMHelper.js\");\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n // const ProjectItem = 'abc';\n// console.log(DEFAULT_VALUE);\n\nvar ProjectList = /*#__PURE__*/function () {\n  // projects = [];\n  function ProjectList(type) {\n    _classCallCheck(this, ProjectList);\n\n    this.type = type;\n    this.projects = [];\n    var prjItems = document.querySelectorAll(\"#\".concat(type, \"-projects li\"));\n\n    var _iterator = _createForOfIteratorHelper(prjItems),\n        _step;\n\n    try {\n      for (_iterator.s(); !(_step = _iterator.n()).done;) {\n        var prjItem = _step.value;\n        this.projects.push(new _ProjectItem__WEBPACK_IMPORTED_MODULE_0__[\"ProjectItem\"](prjItem.id, this.switchProject.bind(this), this.type));\n      }\n    } catch (err) {\n      _iterator.e(err);\n    } finally {\n      _iterator.f();\n    }\n\n    console.log(this.projects);\n    this.connectDroppable();\n  }\n\n  _createClass(ProjectList, [{\n    key: \"connectDroppable\",\n    value: function connectDroppable() {\n      var _this = this;\n\n      // console.log(globalThis);\n      var list = document.querySelector(\"#\".concat(this.type, \"-projects ul\"));\n      list.addEventListener('dragenter', function (event) {\n        if (event.dataTransfer.types[0] === 'text/plain') {\n          list.parentElement.classList.add('droppable');\n          event.preventDefault();\n        }\n      });\n      list.addEventListener('dragover', function (event) {\n        if (event.dataTransfer.types[0] === 'text/plain') {\n          event.preventDefault();\n        }\n      });\n      list.addEventListener('dragleave', function (event) {\n        if (event.relatedTarget.closest(\"#\".concat(_this.type, \"-projects ul\")) !== list) {\n          list.parentElement.classList.remove('droppable');\n        }\n      });\n      list.addEventListener('drop', function (event) {\n        var prjId = event.dataTransfer.getData('text/plain');\n\n        if (_this.projects.find(function (p) {\n          return p.id === prjId;\n        })) {\n          return;\n        }\n\n        document.getElementById(prjId).querySelector('button:last-of-type').click();\n        list.parentElement.classList.remove('droppable'); // event.preventDefault(); // not required\n      });\n    }\n  }, {\n    key: \"setSwitchHandlerFunction\",\n    value: function setSwitchHandlerFunction(switchHandlerFunction) {\n      this.switchHandler = switchHandlerFunction;\n    }\n  }, {\n    key: \"addProject\",\n    value: function addProject(project) {\n      this.projects.push(project);\n      _Utility_DOMHelper__WEBPACK_IMPORTED_MODULE_1__[\"moveElement\"](project.id, \"#\".concat(this.type, \"-projects ul\"));\n      project.update(this.switchProject.bind(this), this.type);\n    }\n  }, {\n    key: \"switchProject\",\n    value: function switchProject(projectId) {\n      // const projectIndex = this.projects.findIndex(p => p.id === projectId);\n      // this.projects.splice(projectIndex, 1);\n      this.switchHandler(this.projects.find(function (p) {\n        return p.id === projectId;\n      }));\n      this.projects = this.projects.filter(function (p) {\n        return p.id !== projectId;\n      });\n    }\n  }]);\n\n  return ProjectList;\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQXBwL1Byb2plY3RMaXN0LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC9Qcm9qZWN0TGlzdC5qcz8wZGNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb2plY3RJdGVtIGFzIFByakl0ZW0gfSBmcm9tICcuL1Byb2plY3RJdGVtJztcbmltcG9ydCAqIGFzIERPTUggZnJvbSAnLi4vVXRpbGl0eS9ET01IZWxwZXInO1xuXG4vLyBjb25zdCBQcm9qZWN0SXRlbSA9ICdhYmMnO1xuXG4vLyBjb25zb2xlLmxvZyhERUZBVUxUX1ZBTFVFKTtcblxuZXhwb3J0IGNsYXNzIFByb2plY3RMaXN0IHtcbiAgLy8gcHJvamVjdHMgPSBbXTtcblxuICBjb25zdHJ1Y3Rvcih0eXBlKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLnByb2plY3RzID0gW107XG4gICAgY29uc3QgcHJqSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAjJHt0eXBlfS1wcm9qZWN0cyBsaWApO1xuICAgIGZvciAoY29uc3QgcHJqSXRlbSBvZiBwcmpJdGVtcykge1xuICAgICAgdGhpcy5wcm9qZWN0cy5wdXNoKFxuICAgICAgICBuZXcgUHJqSXRlbShwcmpJdGVtLmlkLCB0aGlzLnN3aXRjaFByb2plY3QuYmluZCh0aGlzKSwgdGhpcy50eXBlKVxuICAgICAgKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2codGhpcy5wcm9qZWN0cyk7XG4gICAgdGhpcy5jb25uZWN0RHJvcHBhYmxlKCk7XG4gIH1cblxuICBjb25uZWN0RHJvcHBhYmxlKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKGdsb2JhbFRoaXMpO1xuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHt0aGlzLnR5cGV9LXByb2plY3RzIHVsYCk7XG5cbiAgICBsaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbnRlcicsIGV2ZW50ID0+IHtcbiAgICAgIGlmIChldmVudC5kYXRhVHJhbnNmZXIudHlwZXNbMF0gPT09ICd0ZXh0L3BsYWluJykge1xuICAgICAgICBsaXN0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZHJvcHBhYmxlJyk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBsaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgZXZlbnQgPT4ge1xuICAgICAgaWYgKGV2ZW50LmRhdGFUcmFuc2Zlci50eXBlc1swXSA9PT0gJ3RleHQvcGxhaW4nKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBsaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIGV2ZW50ID0+IHtcbiAgICAgIGlmIChldmVudC5yZWxhdGVkVGFyZ2V0LmNsb3Nlc3QoYCMke3RoaXMudHlwZX0tcHJvamVjdHMgdWxgKSAhPT0gbGlzdCkge1xuICAgICAgICBsaXN0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZHJvcHBhYmxlJyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBsaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBldmVudCA9PiB7XG4gICAgICBjb25zdCBwcmpJZCA9IGV2ZW50LmRhdGFUcmFuc2Zlci5nZXREYXRhKCd0ZXh0L3BsYWluJyk7XG4gICAgICBpZiAodGhpcy5wcm9qZWN0cy5maW5kKHAgPT4gcC5pZCA9PT0gcHJqSWQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGRvY3VtZW50XG4gICAgICAgIC5nZXRFbGVtZW50QnlJZChwcmpJZClcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbjpsYXN0LW9mLXR5cGUnKVxuICAgICAgICAuY2xpY2soKTtcbiAgICAgIGxpc3QucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkcm9wcGFibGUnKTtcbiAgICAgIC8vIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IC8vIG5vdCByZXF1aXJlZFxuICAgIH0pO1xuICB9XG5cbiAgc2V0U3dpdGNoSGFuZGxlckZ1bmN0aW9uKHN3aXRjaEhhbmRsZXJGdW5jdGlvbikge1xuICAgIHRoaXMuc3dpdGNoSGFuZGxlciA9IHN3aXRjaEhhbmRsZXJGdW5jdGlvbjtcbiAgfVxuXG4gIGFkZFByb2plY3QocHJvamVjdCkge1xuICAgIHRoaXMucHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgICBET01ILm1vdmVFbGVtZW50KHByb2plY3QuaWQsIGAjJHt0aGlzLnR5cGV9LXByb2plY3RzIHVsYCk7XG4gICAgcHJvamVjdC51cGRhdGUodGhpcy5zd2l0Y2hQcm9qZWN0LmJpbmQodGhpcyksIHRoaXMudHlwZSk7XG4gIH1cblxuICBzd2l0Y2hQcm9qZWN0KHByb2plY3RJZCkge1xuICAgIC8vIGNvbnN0IHByb2plY3RJbmRleCA9IHRoaXMucHJvamVjdHMuZmluZEluZGV4KHAgPT4gcC5pZCA9PT0gcHJvamVjdElkKTtcbiAgICAvLyB0aGlzLnByb2plY3RzLnNwbGljZShwcm9qZWN0SW5kZXgsIDEpO1xuICAgIHRoaXMuc3dpdGNoSGFuZGxlcih0aGlzLnByb2plY3RzLmZpbmQocCA9PiBwLmlkID09PSBwcm9qZWN0SWQpKTtcbiAgICB0aGlzLnByb2plY3RzID0gdGhpcy5wcm9qZWN0cy5maWx0ZXIocCA9PiBwLmlkICE9PSBwcm9qZWN0SWQpO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFBQTtBQUNBO0FBR0E7QUFSQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQWZBO0FBQUE7QUFBQTtBQWdCQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUVBO0FBQ0E7QUFuREE7QUFBQTtBQUFBO0FBc0RBO0FBQ0E7QUF2REE7QUFBQTtBQUFBO0FBMERBO0FBQ0E7QUFDQTtBQUNBO0FBN0RBO0FBQUE7QUFBQTtBQWdFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFwRUE7QUFDQTtBQURBO0FBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/App/ProjectList.js\n");

/***/ }),

/***/ "./src/Utility/DOMHelper.js":
/*!**********************************!*\
  !*** ./src/Utility/DOMHelper.js ***!
  \**********************************/
/*! exports provided: DOMHelper, clearEventListeners, moveElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DOMHelper\", function() { return DOMHelper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearEventListeners\", function() { return clearEventListeners; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"moveElement\", function() { return moveElement; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nconsole.log('DOM Helper executing!');\nvar DOMHelper = /*#__PURE__*/function () {\n  function DOMHelper() {\n    _classCallCheck(this, DOMHelper);\n  }\n\n  _createClass(DOMHelper, null, [{\n    key: \"clearEventListeners\",\n    value: function clearEventListeners(element) {\n      var clonedElement = element.cloneNode(true);\n      element.replaceWith(clonedElement);\n      return clonedElement;\n    }\n  }, {\n    key: \"moveElement\",\n    value: function moveElement(elementId, newDestinationSelector) {\n      var element = document.getElementById(elementId);\n      var destinationElement = document.querySelector(newDestinationSelector);\n      destinationElement.append(element);\n      element.scrollIntoView({\n        behavior: 'smooth'\n      });\n    }\n  }]);\n\n  return DOMHelper;\n}();\nfunction clearEventListeners(element) {\n  var clonedElement = element.cloneNode(true);\n  element.replaceWith(clonedElement);\n  return clonedElement;\n}\nfunction moveElement(elementId, newDestinationSelector) {\n  var element = document.getElementById(elementId);\n  var destinationElement = document.querySelector(newDestinationSelector);\n  destinationElement.append(element);\n  element.scrollIntoView({\n    behavior: 'smooth'\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvVXRpbGl0eS9ET01IZWxwZXIuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvVXRpbGl0eS9ET01IZWxwZXIuanM/NTkyNiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zb2xlLmxvZygnRE9NIEhlbHBlciBleGVjdXRpbmchJyk7XG5cbmV4cG9ydCBjbGFzcyBET01IZWxwZXIge1xuICBzdGF0aWMgY2xlYXJFdmVudExpc3RlbmVycyhlbGVtZW50KSB7XG4gICAgY29uc3QgY2xvbmVkRWxlbWVudCA9IGVsZW1lbnQuY2xvbmVOb2RlKHRydWUpO1xuXG4gICAgZWxlbWVudC5yZXBsYWNlV2l0aChjbG9uZWRFbGVtZW50KTtcblxuICAgIHJldHVybiBjbG9uZWRFbGVtZW50O1xuICB9XG5cbiAgc3RhdGljIG1vdmVFbGVtZW50KGVsZW1lbnRJZCwgbmV3RGVzdGluYXRpb25TZWxlY3Rvcikge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50SWQpO1xuICAgIGNvbnN0IGRlc3RpbmF0aW9uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobmV3RGVzdGluYXRpb25TZWxlY3Rvcik7XG5cbiAgICBkZXN0aW5hdGlvbkVsZW1lbnQuYXBwZW5kKGVsZW1lbnQpO1xuICAgIGVsZW1lbnQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyRXZlbnRMaXN0ZW5lcnMoZWxlbWVudCkge1xuICBjb25zdCBjbG9uZWRFbGVtZW50ID0gZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSk7XG5cbiAgZWxlbWVudC5yZXBsYWNlV2l0aChjbG9uZWRFbGVtZW50KTtcblxuICByZXR1cm4gY2xvbmVkRWxlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1vdmVFbGVtZW50KGVsZW1lbnRJZCwgbmV3RGVzdGluYXRpb25TZWxlY3Rvcikge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudElkKTtcbiAgY29uc3QgZGVzdGluYXRpb25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihuZXdEZXN0aW5hdGlvblNlbGVjdG9yKTtcblxuICBkZXN0aW5hdGlvbkVsZW1lbnQuYXBwZW5kKGVsZW1lbnQpO1xuICBlbGVtZW50LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFQQTtBQUFBO0FBQUE7QUFVQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQWZBO0FBQ0E7QUFEQTtBQUFBO0FBa0JBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Utility/DOMHelper.js\n");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _App_ProjectList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App/ProjectList */ \"./src/App/ProjectList.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/* eslint-disable no-unused-vars */\n\n // eslint-disable-next-line no-undef\n\nglobalThis.DEFAULT_VALUE = 'MAX';\nconsole.log(lodash__WEBPACK_IMPORTED_MODULE_0__[\"difference\"]([0, 1], [1, 2]));\n\nvar App = /*#__PURE__*/function () {\n  function App() {\n    _classCallCheck(this, App);\n  }\n\n  _createClass(App, null, [{\n    key: \"init\",\n    value: function init() {\n      var activeProjectsList = new _App_ProjectList__WEBPACK_IMPORTED_MODULE_1__[\"ProjectList\"]('active');\n      var finishedProjectsList = new _App_ProjectList__WEBPACK_IMPORTED_MODULE_1__[\"ProjectList\"]('finished');\n      activeProjectsList.setSwitchHandlerFunction(finishedProjectsList.addProject.bind(finishedProjectsList));\n      finishedProjectsList.setSwitchHandlerFunction(activeProjectsList.addProject.bind(activeProjectsList)); // const timerId = setTimeout(this.startAnalytics, 3000);\n      // document.getElementById('stop-analytics-btn').addEventListener('click', () => {\n      //   clearTimeout(timerId);\n      // });\n    }\n  }, {\n    key: \"startAnalytics\",\n    value: function startAnalytics() {\n      var analyticsScript = document.createElement('script');\n      analyticsScript.src = 'assets/scripts/Utility/Analytics.js';\n      analyticsScript.defer = true;\n      document.head.append(analyticsScript);\n    }\n  }]);\n\n  return App;\n}();\n\nApp.init();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcz8xMTEyIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBQcm9qZWN0TGlzdCB9IGZyb20gJy4vQXBwL1Byb2plY3RMaXN0JztcblxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbmdsb2JhbFRoaXMuREVGQVVMVF9WQUxVRSA9ICdNQVgnO1xuXG5jb25zb2xlLmxvZyhfLmRpZmZlcmVuY2UoWzAsIDFdLCBbMSwyXSkpO1xuXG5cbmNsYXNzIEFwcCB7XG4gIHN0YXRpYyBpbml0KCkge1xuICAgIGNvbnN0IGFjdGl2ZVByb2plY3RzTGlzdCA9IG5ldyBQcm9qZWN0TGlzdCgnYWN0aXZlJyk7XG4gICAgY29uc3QgZmluaXNoZWRQcm9qZWN0c0xpc3QgPSBuZXcgUHJvamVjdExpc3QoJ2ZpbmlzaGVkJyk7XG5cbiAgICBhY3RpdmVQcm9qZWN0c0xpc3Quc2V0U3dpdGNoSGFuZGxlckZ1bmN0aW9uKFxuICAgICAgZmluaXNoZWRQcm9qZWN0c0xpc3QuYWRkUHJvamVjdC5iaW5kKGZpbmlzaGVkUHJvamVjdHNMaXN0KVxuICAgICk7XG4gICAgZmluaXNoZWRQcm9qZWN0c0xpc3Quc2V0U3dpdGNoSGFuZGxlckZ1bmN0aW9uKFxuICAgICAgYWN0aXZlUHJvamVjdHNMaXN0LmFkZFByb2plY3QuYmluZChhY3RpdmVQcm9qZWN0c0xpc3QpXG4gICAgKTtcblxuICAgIC8vIGNvbnN0IHRpbWVySWQgPSBzZXRUaW1lb3V0KHRoaXMuc3RhcnRBbmFseXRpY3MsIDMwMDApO1xuXG4gICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0b3AtYW5hbHl0aWNzLWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIC8vICAgY2xlYXJUaW1lb3V0KHRpbWVySWQpO1xuICAgIC8vIH0pO1xuICB9XG5cbiAgc3RhdGljIHN0YXJ0QW5hbHl0aWNzKCkge1xuICAgIGNvbnN0IGFuYWx5dGljc1NjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuXG4gICAgYW5hbHl0aWNzU2NyaXB0LnNyYyA9ICdhc3NldHMvc2NyaXB0cy9VdGlsaXR5L0FuYWx5dGljcy5qcyc7XG4gICAgYW5hbHl0aWNzU2NyaXB0LmRlZmVyID0gdHJ1ZTtcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZChhbmFseXRpY3NTY3JpcHQpO1xuICB9XG59XG5cbkFwcC5pbml0KCk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQU1BO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQUdBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/app.js\n");

/***/ })

/******/ });