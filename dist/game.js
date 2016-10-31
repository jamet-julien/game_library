/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _canvas = __webpack_require__(2);

	var _canvas2 = _interopRequireDefault(_canvas);

	var _spritesheet = __webpack_require__(3);

	var _spritesheet2 = _interopRequireDefault(_spritesheet);

	var _sprite = __webpack_require__(4);

	var _sprite2 = _interopRequireDefault(_sprite);

	var _phase = __webpack_require__(7);

	var _phase2 = _interopRequireDefault(_phase);

	var _timer = __webpack_require__(8);

	var _timer2 = _interopRequireDefault(_timer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(function (context) {

	    context.Canvas = _canvas2.default;
	    context.Spritesheet = _spritesheet2.default;
	    context.Sprite = _sprite2.default;
	    context.Phase = _phase2.default;
	    context.Timer = _timer2.default;
	})(window);

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Canvas = function () {

	  /**
	   *
	   */
	  function Canvas(sCanvasId, iWidth, iHeight) {
	    _classCallCheck(this, Canvas);

	    this.TO_RADIANS = Math.PI / 180;

	    this.width = iWidth;
	    this.height = iHeight;
	    this.canvasId = sCanvasId;

	    this.canvas = null;
	    this.context = null;
	  }

	  /**
	   *
	   */


	  _createClass(Canvas, [{
	    key: 'init',
	    value: function init() {

	      this.canvas = document.getElementById(this.canvasId);
	      this.context = this.canvas.getContext('2d');

	      this.canvas.setAttribute('width', this.width);
	      this.canvas.setAttribute('height', this.width);

	      this.canvas.style.width = this.width + 'px';
	      this.canvas.style.height = this.height + 'px';
	    }

	    /**
	     *
	     */

	  }, {
	    key: 'clear',
	    value: function clear() {
	      this.context.clearRect(0, 0, this.width, this.height);
	    }

	    /**
	     *
	     */

	  }, {
	    key: 'draw',
	    value: function draw() {
	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }

	      this.context.drawImage.apply(this.context, args);
	      // list args : image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight
	    }

	    /**
	     *
	     */

	  }, {
	    key: 'rotate',
	    value: function rotate(oImage, iX, iY, iWidth, iHeight, iAngle) {

	      this.context.save();
	      this.context.translate(iX, iY);
	      this.context.rotate(iAngle * this.TO_RADIANS);
	      this.draw(oImage, -(iWidth / 2), -(iHeight / 2));
	      this.context.restore();
	    }

	    /**
	     *
	     */

	  }, {
	    key: 'rotateAnime',
	    value: function rotateAnime(oImage, iX, iY, iWidth, iHeight, iAngle, aCoor) {

	      this.context.save();

	      this.context.translate(iX + iWidth / 2, iY + iHeight / 2);

	      this.context.rotate(iAngle * this.TO_RADIANS);

	      this.draw(oImage, //
	      aCoor[0] * iWidth, //
	      aCoor[1] * iHeight, //
	      iWidth, //
	      iHeight, //
	      -(iWidth / 2), -(iHeight / 2), iWidth, iHeight);

	      this.context.restore();
	    }
	  }]);

	  return Canvas;
	}();

	exports.default = Canvas;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var BUFFER_SPRITESHEET = {};

	var Spritesheet = function () {
	  function Spritesheet(sFilename, _ref) {
	    var grid = _ref.grid;
	    var width = _ref.width;
	    var height = _ref.height;

	    _classCallCheck(this, Spritesheet);

	    this.image = new Image();
	    this.image.src = sFilename;

	    this.image.addEventListener('load', function () {});

	    this.grid = grid ? grid : 1;
	    this.width = width ? width : 32;
	    this.height = height ? height : 32;
	  }

	  _createClass(Spritesheet, null, [{
	    key: "getInstance",
	    value: function getInstance(sFilename, _ref2) {
	      var grid = _ref2.grid;
	      var width = _ref2.width;
	      var height = _ref2.height;

	      var oSpriteSheet = void 0,
	          sId = sFilename + ":" + grid + ":" + width + ":" + height;

	      if (BUFFER_SPRITESHEET[sId]) {

	        oSpriteSheet = BUFFER_SPRITESHEET[sId];
	      } else {
	        oSpriteSheet = new Spritesheet(sFilename, { grid: grid, width: width, height: height });
	        BUFFER_SPRITESHEET[sId] = oSpriteSheet;
	      }

	      return oSpriteSheet;
	    }
	  }]);

	  return Spritesheet;
	}();

	exports.default = Spritesheet;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _spritesheet = __webpack_require__(3);

	var _spritesheet2 = _interopRequireDefault(_spritesheet);

	var _animate = __webpack_require__(5);

	var _animate2 = _interopRequireDefault(_animate);

	var _utility = __webpack_require__(6);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * [_treatVariable description]
	 * @param  {[type]} mVar [description]
	 * @return {[type]}      [description]
	 */
	function _treatVariable(mVarious) {

	  if (mVarious instanceof _spritesheet2.default) {
	    this.spritesheet = mVarious;
	  } else {
	    this.load(mVarious);
	  }

	  return this;
	}

	/**
	 * [_animeFrame description]
	 * @return {[type]} [description]
	 */
	function _animeFrame(mVarious) {
	  var iCurrentFrame = 0;

	  if (this.anim.delay++ >= this.cadence) {

	    this.anim.delay = 0;
	    this.anim.indexCounter++;

	    if (this.anim.indexCounter >= mVarious.length) {
	      this.anim.indexCounter = 0;
	    }

	    iCurrentFrame = this.anim.indexCounter;
	    this.anim.currentFrame = mVarious[iCurrentFrame];
	  }

	  return this.anim.currentFrame;
	}

	var Sprite = function () {

	  /**
	   *
	   */
	  function Sprite(mVarious, iCadence) {
	    _classCallCheck(this, Sprite);

	    this.spritesheet = null;
	    this.is_pattern = false;
	    this.pattern = null;
	    this.pattern_x_times = 0;
	    this.cadence = iCadence ? iCadence : 3;

	    this._tmp = {};
	    this.anim = new _animate2.default(0, 0, 0);
	    this.ctx = null;

	    _treatVariable.call(this, mVarious);
	  }

	  /**
	   *
	   */


	  _createClass(Sprite, [{
	    key: 'load',
	    value: function load(sFilename) {
	      this.spritesheet = _spritesheet2.default.getInstance(sFilename);
	      return this;
	    }

	    /**
	     *
	     */

	  }, {
	    key: 'draw',
	    value: function draw(oCtx, iX, iY, mVarious) {

	      var aRes = [],
	          iCurrentFrame = void 0,
	          oAnimCurrent = void 0;

	      if (Number.isInteger(mVarious)) {

	        aRes = (0, _utility.indexToXY)(Math.abs(mVarious), this.grid);

	        oCtx.draw(this.image, aRes[0] * this.width, aRes[1] * this.height, this.width, this.height, iX, iY, this.width, this.height);
	      } else if (Array.isArray(mVarious)) {

	        iCurrentFrame = _animeFrame.call(this, mVarious);

	        aRes = (0, _utility.indexToXY)(Math.abs(iCurrentFrame), this.grid);

	        oCtx.draw(this.image, aRes[0] * this.width, aRes[1] * this.height, this.width, this.height, iX, iY, this.width, this.height);
	      } else {
	        oCtx.draw(this.image, iX, iY, this.width, this.height);
	      }
	    }

	    /**
	     *
	     */

	  }, {
	    key: 'rot',
	    value: function rot(oCtx, iX, iY, iAngle) {

	      oCtx.rotate(this.image, iX, iY, this.width, this.height, iAngle);
	    }

	    /**
	     *
	     */

	  }, {
	    key: 'rotAnim',
	    value: function rotAnim(oCtx, iX, iY, iAngle, aSequence) {
	      var iCurrentFrame = _animeFrame.call(this, aSequence);
	      var aRes = (0, _utility.indexToXY)(Math.abs(iCurrentFrame), this.grid);
	      oCtx.rotateAnime(this.image, iX, iY, this.width, this.height, iAngle, aRes);
	    }
	  }, {
	    key: 'image',


	    /**
	     * [image description]
	     * @return {[type]} [description]
	     */
	    get: function get() {
	      return this.spritesheet.image;
	    }

	    /**
	     * [width description]
	     * @return {[type]} [description]
	     */

	  }, {
	    key: 'width',
	    get: function get() {
	      return this.spritesheet.width;
	    }

	    /**
	     * [width description]
	     * @return {[type]} [description]
	     */

	  }, {
	    key: 'grid',
	    get: function get() {
	      return this.spritesheet.grid;
	    }

	    /**
	     * [height description]
	     * @return {[type]} [description]
	     */

	  }, {
	    key: 'height',
	    get: function get() {
	      return this.spritesheet.height;
	    }
	  }]);

	  return Sprite;
	}();

	exports.default = Sprite;

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Animate = function Animate(iDelay, iIndexCounter, iCurrentFrame) {
	  _classCallCheck(this, Animate);

	  this.delay = iDelay ? iDelay : 0;
	  this.indexCounter = iIndexCounter ? iIndexCounter : 0;
	  this.currentFrame = iCurrentFrame ? iCurrentFrame : 0;
	};

	exports.default = Animate;

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.indexToXY = indexToXY;
	exports.XYToIndex = XYToIndex;
	function indexToXY(index, mapWidth) {
	    var x = index % mapWidth;
	    var y = Math.floor(index / mapWidth);
	    return [x, y];
	}

	function XYToIndex(x, y, mapWidth) {
	    return y * mapWidth + x;
	}

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Phase = function () {

	  /**
	   *
	   *
	   */
	  function Phase(sPhase) {
	    _classCallCheck(this, Phase);

	    this.sPhaseName = sPhase;
	    this.oPhase = {};
	    this.oPhaseCurrent = null;
	  }

	  /**
	   *
	   *
	   */


	  _createClass(Phase, [{
	    key: "setPhase",
	    value: function setPhase(sName) {
	      this.sPhaseName = sName;

	      if (this.oPhase[this.sPhaseName]) {
	        this.oPhaseCurrent = this.oPhase[this.sPhaseName];
	      }
	    }

	    /**
	     *
	     *
	     */

	  }, {
	    key: "computePhase",
	    value: function computePhase(oPhase) {

	      this.oPhase = oPhase;
	      this.setPhase(this.sPhaseName);

	      return this;
	    }

	    /**
	     *
	     *
	     */

	  }, {
	    key: "run",
	    value: function run() {

	      this.oPhaseCurrent.apply(this, arguments);
	      return this;
	    }
	  }]);

	  return Phase;
	}();

	exports.default = Phase;

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	window.requestAnimFrame = function () {
	  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
	    window.setTimeout(callback, 1000 / 60);
	  };
	}();

	var _fCallBack = function _fCallBack(iTime) {},
	    _iThen = 0,
	    _iInterval = 10,
	    _bPlay = true,
	    _iBegin = null,
	    _oCounter = null;

	var Timer = function () {
	  function Timer() {
	    _classCallCheck(this, Timer);
	  }

	  _createClass(Timer, null, [{
	    key: "setCounter",


	    /*
	      constructor() {
	        this.out = false;
	      }
	    */

	    /**
	     *
	     */
	    value: function setCounter(oCounter) {
	      _oCounter = oCounter;
	      return Timer;
	    }

	    /**
	     *
	     *
	     */

	  }, {
	    key: "restart",
	    value: function restart() {
	      _iBegin = null;
	      return Timer;
	    }

	    /**
	     *
	     *
	     */

	  }, {
	    key: "setCadence",
	    value: function setCadence(iCadence) {
	      Timer.restart();
	      _iInterval = iCadence;
	      return Timer;
	    }

	    /**
	     *
	     *
	     */

	  }, {
	    key: "run",
	    value: function run(fCallBack) {
	      _fCallBack = fCallBack;
	      return Timer;
	    }

	    /**
	     *
	     *
	     */

	  }, {
	    key: "start",
	    value: function start() {

	      if (_bPlay) {
	        requestAnimationFrame(Timer.start);
	      }

	      var iNow = Date.now();
	      var iDelta = iNow - _iThen;

	      if (_oCounter) {
	        _oCounter.run(iNow);
	      }

	      if (iDelta > _iInterval && _bPlay) {
	        _iThen = iNow - iDelta % _iInterval;

	        if (_iBegin == null) {
	          _iBegin = _iThen;
	        }

	        _fCallBack.call(null, _iThen - _iBegin);
	      }
	    }
	  }, {
	    key: "play",
	    value: function play() {
	      _bPlay = true;
	    }
	  }, {
	    key: "stop",
	    value: function stop() {
	      _bPlay = false;
	    }

	    /**
	     *
	     *
	     */

	  }, {
	    key: "togglePlay",
	    value: function togglePlay() {
	      _bPlay = !_bPlay;
	    }
	  }]);

	  return Timer;
	}();

	exports.default = Timer;

/***/ }
/******/ ]);