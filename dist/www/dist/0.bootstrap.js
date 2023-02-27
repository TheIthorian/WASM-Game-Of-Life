(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../pkg/wasm_game_of_life.js":
/*!***********************************!*\
  !*** ../pkg/wasm_game_of_life.js ***!
  \***********************************/
/*! exports provided: __wbg_set_wasm, Cell, Universe, __wbg_random_afb3265527cf67c8, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wasm_game_of_life_bg.wasm */ \"../pkg/wasm_game_of_life_bg.wasm\");\n/* harmony import */ var _wasm_game_of_life_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wasm_game_of_life_bg.js */ \"../pkg/wasm_game_of_life_bg.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_set_wasm\", function() { return _wasm_game_of_life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_set_wasm\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Cell\", function() { return _wasm_game_of_life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"Cell\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Universe\", function() { return _wasm_game_of_life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"Universe\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_random_afb3265527cf67c8\", function() { return _wasm_game_of_life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_random_afb3265527cf67c8\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return _wasm_game_of_life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_throw\"]; });\n\n\n\nObject(_wasm_game_of_life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_set_wasm\"])(_wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\n//# sourceURL=webpack:///../pkg/wasm_game_of_life.js?");

/***/ }),

/***/ "../pkg/wasm_game_of_life_bg.js":
/*!**************************************!*\
  !*** ../pkg/wasm_game_of_life_bg.js ***!
  \**************************************/
/*! exports provided: __wbg_set_wasm, Cell, Universe, __wbg_random_afb3265527cf67c8, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_set_wasm\", function() { return __wbg_set_wasm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Cell\", function() { return Cell; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Universe\", function() { return Universe; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_random_afb3265527cf67c8\", function() { return __wbg_random_afb3265527cf67c8; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\nlet wasm;\nfunction __wbg_set_wasm(val) {\n    wasm = val;\n}\n\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachedUint8Memory0 = null;\n\nfunction getUint8Memory0() {\n    if (cachedUint8Memory0 === null || cachedUint8Memory0.byteLength === 0) {\n        cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);\n    }\n    return cachedUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n\nlet cachedInt32Memory0 = null;\n\nfunction getInt32Memory0() {\n    if (cachedInt32Memory0 === null || cachedInt32Memory0.byteLength === 0) {\n        cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);\n    }\n    return cachedInt32Memory0;\n}\n\nfunction notDefined(what) { return () => { throw new Error(`${what} is not defined`); }; }\n/**\n*/\nconst Cell = Object.freeze({ Dead:0,\"0\":\"Dead\",Alive:1,\"1\":\"Alive\", });\n/**\n*/\nclass Universe {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Universe.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        wasm.__wbg_universe_free(ptr);\n    }\n    /**\n    * @returns {number}\n    */\n    width() {\n        const ret = wasm.universe_width(this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @returns {number}\n    */\n    height() {\n        const ret = wasm.universe_height(this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @returns {number}\n    */\n    cells() {\n        const ret = wasm.universe_cells(this.ptr);\n        return ret;\n    }\n    /**\n    */\n    tick() {\n        wasm.universe_tick(this.ptr);\n    }\n    /**\n    * @param {number} width\n    * @param {number} height\n    * @returns {Universe}\n    */\n    static new(width, height) {\n        const ret = wasm.universe_new(width, height);\n        return Universe.__wrap(ret);\n    }\n    /**\n    * @returns {string}\n    */\n    render() {\n        try {\n            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);\n            wasm.universe_render(retptr, this.ptr);\n            var r0 = getInt32Memory0()[retptr / 4 + 0];\n            var r1 = getInt32Memory0()[retptr / 4 + 1];\n            return getStringFromWasm0(r0, r1);\n        } finally {\n            wasm.__wbindgen_add_to_stack_pointer(16);\n            wasm.__wbindgen_free(r0, r1);\n        }\n    }\n}\n\nconst __wbg_random_afb3265527cf67c8 = typeof Math.random == 'function' ? Math.random : notDefined('Math.random');\n\nfunction __wbindgen_throw(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../www/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///../pkg/wasm_game_of_life_bg.js?");

/***/ }),

/***/ "../pkg/wasm_game_of_life_bg.wasm":
/*!****************************************!*\
  !*** ../pkg/wasm_game_of_life_bg.wasm ***!
  \****************************************/
/*! exports provided: memory, __wbg_universe_free, universe_width, universe_height, universe_cells, universe_tick, universe_new, universe_render, __wbindgen_add_to_stack_pointer, __wbindgen_free */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./wasm_game_of_life_bg.js */ \"../pkg/wasm_game_of_life_bg.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///../pkg/wasm_game_of_life_bg.wasm?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/constants */ \"./src/constants.js\");\n/* harmony import */ var _src_fps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/fps */ \"./src/fps.js\");\n/* harmony import */ var _src_gameController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/gameController */ \"./src/gameController.js\");\n/* harmony import */ var _src_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/renderer */ \"./src/renderer.js\");\n\n\n\n\n\n// Give the canvas room for all of our cells and a 1px border\n// around each of them.\nconst canvas = document.getElementById('game-of-life-canvas');\nconst fpsDiv = document.getElementById('fps');\n\nconst fps = new _src_fps__WEBPACK_IMPORTED_MODULE_1__[\"FPS\"](fpsDiv);\nconst renderer = new _src_renderer__WEBPACK_IMPORTED_MODULE_3__[\"Renderer\"](canvas, fps);\n\nconst gameController = new _src_gameController__WEBPACK_IMPORTED_MODULE_2__[\"GameController\"](renderer, { width: _src_constants__WEBPACK_IMPORTED_MODULE_0__[\"WIDTH\"], height: _src_constants__WEBPACK_IMPORTED_MODULE_0__[\"HEIGHT\"] });\ngameController.start();\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! exports provided: WIDTH, HEIGHT, CELL_SIZE, GRID_COLOR, DEAD_COLOR, ALIVE_COLOR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"WIDTH\", function() { return WIDTH; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HEIGHT\", function() { return HEIGHT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CELL_SIZE\", function() { return CELL_SIZE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GRID_COLOR\", function() { return GRID_COLOR; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DEAD_COLOR\", function() { return DEAD_COLOR; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ALIVE_COLOR\", function() { return ALIVE_COLOR; });\nconst WIDTH = 100;\r\nconst HEIGHT = 100;\r\n\r\nconst CELL_SIZE = 5; // px\r\nconst GRID_COLOR = '#CCCCCC';\r\nconst DEAD_COLOR = '#FFFFFF';\r\nconst ALIVE_COLOR = '#000000';\r\n\n\n//# sourceURL=webpack:///./src/constants.js?");

/***/ }),

/***/ "./src/fps.js":
/*!********************!*\
  !*** ./src/fps.js ***!
  \********************/
/*! exports provided: FPS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FPS\", function() { return FPS; });\nclass FPS {\r\n    // fpsDiv;\r\n\r\n    constructor(fpsDiv) {\r\n        this.fpsDiv = fpsDiv;\r\n        this.frames = [];\r\n        this.lastFrameTimeStamp = performance.now();\r\n    }\r\n\r\n    render() {\r\n        // Convert the delta time since the last frame render into a measure\r\n        // of frames per second.\r\n        const now = performance.now();\r\n        const delta = now - this.lastFrameTimeStamp;\r\n        this.lastFrameTimeStamp = now;\r\n        const fps = (1 / delta) * 1000;\r\n\r\n        // Save only the latest 100 timings.\r\n        this.frames.push(fps);\r\n        if (this.frames.length > 100) {\r\n            this.frames.shift();\r\n        }\r\n\r\n        // Find the max, min, and mean of our 100 latest timings.\r\n        let min = Infinity;\r\n        let max = -Infinity;\r\n        let sum = 0;\r\n        for (let i = 0; i < this.frames.length; i++) {\r\n            sum += this.frames[i];\r\n            min = Math.min(this.frames[i], min);\r\n            max = Math.max(this.frames[i], max);\r\n        }\r\n        let mean = sum / this.frames.length;\r\n\r\n        // Render the statistics.\r\n        this.fpsDiv.textContent = `\r\n  Frames per Second:\r\n           latest = ${Math.round(fps)}\r\n  avg of last 100 = ${Math.round(mean)}\r\n  min of last 100 = ${Math.round(min)}\r\n  max of last 100 = ${Math.round(max)}\r\n  `.trim();\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/fps.js?");

/***/ }),

/***/ "./src/gameController.js":
/*!*******************************!*\
  !*** ./src/gameController.js ***!
  \*******************************/
/*! exports provided: GameController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GameController\", function() { return GameController; });\n/* harmony import */ var wasm_game_of_life__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wasm-game-of-life */ \"../pkg/wasm_game_of_life.js\");\n/* harmony import */ var wasm_game_of_life_wasm_game_of_life_bg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! wasm-game-of-life/wasm_game_of_life_bg */ \"../pkg/wasm_game_of_life_bg.wasm\");\n\r\n\r\n\r\nclass GameController {\r\n    /**\r\n    universe;\r\n    width;\r\n    height;\r\n    renderer;\r\n    play = false;\r\n    */\r\n\r\n    constructor(renderer, { width, height }) {\r\n        this.universe = wasm_game_of_life__WEBPACK_IMPORTED_MODULE_0__[\"Universe\"].new(width, height);\r\n\r\n        this.width = this.universe.width();\r\n        this.height = this.universe.height();\r\n\r\n        this.renderer = renderer;\r\n        this.renderer.setDimensions({ width: this.width, height: this.height });\r\n    }\r\n\r\n    start() {\r\n        this.play = true;\r\n        const gameLoop = () => {\r\n            this.renderer.drawFps();\r\n            this.universe.tick();\r\n\r\n            this.renderer.drawGrid();\r\n\r\n            const cellsPtr = this.universe.cells();\r\n            const cells = new Uint8Array(wasm_game_of_life_wasm_game_of_life_bg__WEBPACK_IMPORTED_MODULE_1__[\"memory\"].buffer, cellsPtr, this.width * this.height);\r\n            console.log({ memory: wasm_game_of_life_wasm_game_of_life_bg__WEBPACK_IMPORTED_MODULE_1__[\"memory\"], cellsPtr, cells, size: this.width * this.height });\r\n            this.renderer.drawCells(cells);\r\n\r\n            console.log('render');\r\n\r\n            requestAnimationFrame(gameLoop);\r\n        };\r\n\r\n        requestAnimationFrame(gameLoop);\r\n    }\r\n\r\n    stop() {\r\n        this.play = false;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/gameController.js?");

/***/ }),

/***/ "./src/renderer.js":
/*!*************************!*\
  !*** ./src/renderer.js ***!
  \*************************/
/*! exports provided: Renderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Renderer\", function() { return Renderer; });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n/* harmony import */ var wasm_game_of_life__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wasm-game-of-life */ \"../pkg/wasm_game_of_life.js\");\n\r\n\r\n\r\n\r\nclass Renderer {\r\n    /**\r\n    canvas;\r\n    ctx;\r\n    fps;\r\n\r\n    height;\r\n    width;\r\n     */\r\n\r\n    constructor(canvas, fps) {\r\n        this.canvas = canvas;\r\n        this.ctx = this.canvas.getContext('2d');\r\n\r\n        this.fps = fps;\r\n    }\r\n\r\n    setDimensions({ width, height }) {\r\n        this.width = width;\r\n        this.height = height;\r\n\r\n        this.canvas.height = (_constants__WEBPACK_IMPORTED_MODULE_0__[\"CELL_SIZE\"] + 1) * height + 1;\r\n        this.canvas.width = (_constants__WEBPACK_IMPORTED_MODULE_0__[\"CELL_SIZE\"] + 1) * width + 1;\r\n    }\r\n\r\n    drawGrid() {\r\n        this.checkDimensions();\r\n\r\n        this.ctx.beginPath();\r\n        this.ctx.strokeStyle = _constants__WEBPACK_IMPORTED_MODULE_0__[\"GRID_COLOR\"];\r\n\r\n        // Vertical lines.\r\n        for (let i = 0; i <= this.width; i++) {\r\n            this.ctx.moveTo(i * (_constants__WEBPACK_IMPORTED_MODULE_0__[\"CELL_SIZE\"] + 1) + 1, 0);\r\n            this.ctx.lineTo(i * (_constants__WEBPACK_IMPORTED_MODULE_0__[\"CELL_SIZE\"] + 1) + 1, (_constants__WEBPACK_IMPORTED_MODULE_0__[\"CELL_SIZE\"] + 1) * this.height + 1);\r\n        }\r\n\r\n        // Horizontal lines.\r\n        for (let j = 0; j <= this.height; j++) {\r\n            this.ctx.moveTo(0, j * (_constants__WEBPACK_IMPORTED_MODULE_0__[\"CELL_SIZE\"] + 1) + 1);\r\n            this.ctx.lineTo((_constants__WEBPACK_IMPORTED_MODULE_0__[\"CELL_SIZE\"] + 1) * this.width + 1, j * (_constants__WEBPACK_IMPORTED_MODULE_0__[\"CELL_SIZE\"] + 1) + 1);\r\n        }\r\n\r\n        this.ctx.stroke();\r\n    }\r\n\r\n    drawCells(cells) {\r\n        this.checkDimensions();\r\n\r\n        this.ctx.beginPath();\r\n\r\n        // Alive cells.\r\n        this.ctx.fillStyle = _constants__WEBPACK_IMPORTED_MODULE_0__[\"DEAD_COLOR\"];\r\n        this.ctx.fillRect(\r\n            0,\r\n            0,\r\n            this.width * _constants__WEBPACK_IMPORTED_MODULE_0__[\"CELL_SIZE\"] + this.width,\r\n            this.height * _constants__WEBPACK_IMPORTED_MODULE_0__[\"CELL_SIZE\"] * this.height\r\n        );\r\n        this.ctx.fillStyle = _constants__WEBPACK_IMPORTED_MODULE_0__[\"ALIVE_COLOR\"];\r\n\r\n        console.log({\r\n            width: this.width,\r\n            height: this.height,\r\n            cells,\r\n        });\r\n\r\n        // Dead cells\r\n        for (let row = 0; row < this.height; row++) {\r\n            for (let col = 0; col < this.width; col++) {\r\n                const idx = Object(_util__WEBPACK_IMPORTED_MODULE_1__[\"getIndex\"])(row, col, this.width);\r\n\r\n                if (cells[idx] !== wasm_game_of_life__WEBPACK_IMPORTED_MODULE_2__[\"Cell\"].Alive) {\r\n                    continue;\r\n                }\r\n\r\n                this.ctx.fillRect(\r\n                    col * (_constants__WEBPACK_IMPORTED_MODULE_0__[\"CELL_SIZE\"] + 1) + 1,\r\n                    row * (_constants__WEBPACK_IMPORTED_MODULE_0__[\"CELL_SIZE\"] + 1) + 1,\r\n                    _constants__WEBPACK_IMPORTED_MODULE_0__[\"CELL_SIZE\"],\r\n                    _constants__WEBPACK_IMPORTED_MODULE_0__[\"CELL_SIZE\"]\r\n                );\r\n            }\r\n        }\r\n\r\n        this.ctx.stroke();\r\n    }\r\n\r\n    drawFps() {\r\n        this.fps.render();\r\n    }\r\n\r\n    checkDimensions() {\r\n        if (!this.width || !this.height) {\r\n            throw new Error('Dimensions must be defined before rendering');\r\n        }\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/renderer.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: getIndex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getIndex\", function() { return getIndex; });\nfunction getIndex(row, column, width) {\r\n    return row * width + column;\r\n}\r\n\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

}]);