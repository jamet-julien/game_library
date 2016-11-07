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

	var _vector = __webpack_require__(9);

	var _vector2 = _interopRequireDefault(_vector);

	var _effect = __webpack_require__(10);

	var _effect2 = _interopRequireDefault(_effect);

	var _geometry = __webpack_require__(11);

	var _geometry2 = _interopRequireDefault(_geometry);

	var _Perlin = __webpack_require__(12);

	var _Perlin2 = _interopRequireDefault(_Perlin);

	var _utility = __webpack_require__(6);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(function (context) {

	    context.Canvas = _canvas2.default;
	    context.Spritesheet = _spritesheet2.default;
	    context.Sprite = _sprite2.default;
	    context.Phase = _phase2.default;
	    context.Timer = _timer2.default;
	    context.Effect = _effect2.default;
	    context.Vector = _vector2.default;
	    context.Geometry = _geometry2.default;
	    context.Perlin = _Perlin2.default;
	    context.contrain = _utility.contrain;
	    context.map = _utility.map;
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
	      this.canvas.setAttribute('height', this.height);

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
	    key: 'drawImage',
	    value: function drawImage() {
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
	    key: 'getPixel',
	    value: function getPixel() {
	      var oImageData = this.context.getImageData(0, 0, this.width, this.height);
	      return oImageData;
	    }

	    /**
	     *
	     */

	  }, {
	    key: 'setPixel',
	    value: function setPixel(oImageData) {
	      this.context.putImageData(oImageData, 0, 0);
	      return this;
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
	      this.drawImage(oImage, -(iWidth / 2), -(iHeight / 2));
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

	      this.drawImage(oImage, //
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

	    this.grid = grid || 1;
	    this.width = width || 32;
	    this.height = height || 32;
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
	    this.cadence = iCadence || 3;

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
	          iCurrentFrame = void 0;

	      if (Number.isInteger(mVarious)) {

	        aRes = (0, _utility.indexToXY)(Math.abs(mVarious), this.grid);

	        oCtx.drawImage(this.image, aRes[0] * this.width, aRes[1] * this.height, this.width, this.height, iX, iY, this.width, this.height);
	      } else if (Array.isArray(mVarious)) {

	        iCurrentFrame = _animeFrame.call(this, mVarious);

	        aRes = (0, _utility.indexToXY)(Math.abs(iCurrentFrame), this.grid);

	        oCtx.drawImage(this.image, aRes[0] * this.width, aRes[1] * this.height, this.width, this.height, iX, iY, this.width, this.height);
	      } else {
	        oCtx.drawImage(this.image, iX, iY, this.width, this.height);
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

	  this.delay = iDelay || 0;
	  this.indexCounter = iIndexCounter || 0;
	  this.currentFrame = iCurrentFrame || 0;
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
	exports.contrain = contrain;
	exports.map = map;
	exports.shuffle = shuffle;
	function indexToXY(index, mapWidth) {
	    var x = index % mapWidth;
	    var y = Math.floor(index / mapWidth);
	    return [x, y];
	}

	function XYToIndex(x, y, mapWidth) {
	    return y * mapWidth + x;
	}

	function contrain(iValue, iMin, iMax) {
	    return Math.max(Math.min(iValue, iMax), iMin);
	}

	function map(iValue, repereMin, repereMax, scopeMin, scopeMax) {
	    return (iValue - repereMin) / (repereMax - repereMin) * (scopeMax - scopeMin) + scopeMin;
	}

	function shuffle(a) {
	    for (var i = a.length; i; i--) {
	        var j = Math.floor(Math.random() * i);
	        var _ref = [a[j], a[i - 1]];
	        a[i - 1] = _ref[0];
	        a[j] = _ref[1];
	    }
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

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function radToDeg(iAngle) {
	  return iAngle * 180 / Math.PI;
	}

	var Vector = function () {

	  /**
	   *
	   */
	  function Vector(iX, iY) {
	    _classCallCheck(this, Vector);

	    this.x = iX || 0;
	    this.y = iY || 0;
	  }

	  /**
	   *
	   */


	  _createClass(Vector, [{
	    key: "add",
	    value: function add(oVector) {
	      this.x += oVector.x;
	      this.y += oVector.y;

	      return this;
	    }

	    /**
	     *
	     */

	  }, {
	    key: "sub",
	    value: function sub(oVector) {
	      this.x -= oVector.x;
	      this.y -= oVector.y;

	      return this;
	    }

	    /**
	     *
	     */

	  }, {
	    key: "mult",
	    value: function mult(iMult) {
	      this.x *= iMult;
	      this.y *= iMult;

	      return this;
	    }

	    /**
	     *
	     */

	  }, {
	    key: "div",


	    /**
	     *
	     */
	    value: function div(iMult) {
	      this.x /= iMult;
	      this.y /= iMult;

	      return this;
	    }

	    /**
	     *
	     */

	  }, {
	    key: "limit",


	    /**
	     *
	     **/
	    value: function limit(iMag) {
	      var iMagCurrent = this.magnetude;

	      if (iMagCurrent > iMag) {
	        this.magnetude = iMag;
	      }

	      return this;
	    }

	    /**
	     *
	     */

	  }, {
	    key: "normalize",
	    value: function normalize() {
	      return this.magnetude === 0 ? this : this.div(this.magnetude);
	    }

	    /**
	     *
	     */

	  }, {
	    key: "copy",
	    value: function copy() {
	      return new Vector(this.x, this.y);
	    }

	    /**
	     *
	     */

	  }, {
	    key: "angle",
	    get: function get() {
	      var iAngleR = Math.atan2(this.y, this.x);
	      return radToDeg(iAngleR);
	    }

	    /**
	     *
	     */
	    ,
	    set: function set(iAngle) {

	      var iHeading = this.angle + iAngle,
	          iMag = this.magnetude;

	      this.x = Math.cos(iHeading) * iMag;
	      this.y = Math.sin(iHeading) * iMag;

	      return this;
	    }
	  }, {
	    key: "magnetude",
	    set: function set(iMag) {
	      return this.normalize().mult(iMag);
	    }

	    /**
	     *
	     */
	    ,
	    get: function get() {
	      return Math.sqrt(this.x * this.x + this.y * this.y);
	    }
	  }], [{
	    key: "div",
	    value: function div(oVec1, mValue) {
	      var target = oVec1.copy();
	      target.div(mValue);
	      return target;
	    }

	    /**
	     *
	     */

	  }, {
	    key: "mult",
	    value: function mult(oVec1, mValue) {
	      var target = oVec1.copy();
	      target.mult(mValue);
	      return target;
	    }

	    /**
	     *
	     */

	  }, {
	    key: "sub",
	    value: function sub(oVec1, oVec2) {
	      var target = oVec1.copy();
	      target.sub(oVec2);
	      return target;
	    }

	    /**
	     *
	     */

	  }, {
	    key: "add",
	    value: function add(oVec1, oVec2) {
	      var target = oVec1.copy();
	      target.add(oVec2);
	      return target;
	    }
	  }]);

	  return Vector;
	}();

	exports.default = Vector;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _utility = __webpack_require__(6);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Effect = function () {

	  /**
	   *
	   */
	  function Effect(oCallback) {
	    _classCallCheck(this, Effect);

	    this.x = 0;
	    this.y = 0;
	    this.callBack = oCallback || function (R, G, B, A) {
	      return [R, G, B, A];
	    };
	  }

	  /**
	   *
	   */


	  _createClass(Effect, [{
	    key: 'apply',
	    value: function apply(oCtx) {
	      var oImageData = oCtx.getPixel(),
	          iLength = oImageData.data.length,
	          j = 0,
	          i = 0,
	          iWidth = oCtx.width,
	          aResult = [];

	      for (; j < iLength; i++, j += 4) {
	        var _indexToXY = (0, _utility.indexToXY)(i, iWidth);

	        var _indexToXY2 = _slicedToArray(_indexToXY, 2);

	        var x = _indexToXY2[0];
	        var y = _indexToXY2[1];


	        this.x = x;
	        this.y = y;

	        aResult = this.callBack(oImageData.data[j + 0], //R
	        oImageData.data[j + 1], //V
	        oImageData.data[j + 2], //B
	        oImageData.data[j + 3] //A
	        );

	        oImageData.data.set(aResult, j);
	      }

	      oCtx.setPixel(oImageData);
	    }
	  }]);

	  return Effect;
	}();

	exports.default = Effect;

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Geometry = function () {
	  function Geometry(oContext) {
	    _classCallCheck(this, Geometry);

	    this.context = oContext.context;
	    this.begin = false;
	  }

	  /**
	   *
	   */


	  _createClass(Geometry, [{
	    key: "beginPath",
	    value: function beginPath() {

	      if (!this.begin) {
	        this.context.beginPath();
	        this.begin = true;
	      } else {
	        this.closePath().beginPath();
	      }

	      return this;
	    }

	    /**
	     *
	     */

	  }, {
	    key: "closePath",
	    value: function closePath() {

	      this.context.closePath();
	      this.begin = false;

	      return this;
	    }

	    /**
	     *
	     */

	  }, {
	    key: "moveTo",
	    value: function moveTo(iX, iY) {
	      this.context.moveTo(iX, iY);
	      return this;
	    }

	    /**
	     *
	     */

	  }, {
	    key: "pattern",
	    value: function pattern(oSprite, _sMode) {

	      var sMode = _sMode || "repeat",
	          mValue = this.context.createPattern(oSprite.image, sMode);

	      return this.fill(mValue);
	    }

	    /**
	     * [fillStyle description]
	     * @param  {[type]} mValue [description]
	     * @return {[type]}        [description]
	     */

	  }, {
	    key: "fill",
	    value: function fill(mValue) {

	      this.context.fillStyle = mValue;
	      this.context.fill();

	      return this;
	    }

	    /**
	     *
	     */

	  }, {
	    key: "stroke",
	    value: function stroke(mValue, iSize) {

	      if (iSize) {
	        this.context.lineWidth = iSize;
	      }

	      if (mValue) {
	        this.context.strokeStyle = mValue;
	      }

	      this.context.stroke();

	      return this;
	    }

	    /**
	     *
	     */

	  }, {
	    key: "rectangle",
	    value: function rectangle(iX, iY, iWidth, iHeight) {

	      this.beginPath();
	      this.context.rect(iX, iY, iWidth, iHeight);

	      return this;
	    }

	    /**
	     *
	     */

	  }, {
	    key: "circle",
	    value: function circle(iX, iY, iSize) {

	      this.beginPath();
	      this.context.arc(iX, iY, iSize, 0, 2 * Math.PI, false);

	      return this;
	    }
	  }, {
	    key: "polygon",
	    value: function polygon(aPoint) {
	      var i = 1,
	          iLenght = aPoint.length;

	      this.beginPath().moveTo(aPoint[0][0], aPoint[0][1]);

	      for (; i < iLenght; i++) {
	        this.lineTo(aPoint[i][0], aPoint[i][1]);
	      }

	      this.closePath();

	      return this;
	    }

	    /**
	     *
	     */

	  }, {
	    key: "line",
	    value: function line(iX, iY, iX2, iY2) {

	      this.beginPath().moveTo(iX, iY).lineTo(iX2, iY2);

	      this.closePath();

	      this.stroke('#000', 1);

	      return this;
	    }

	    /**
	     *
	     */

	  }, {
	    key: "point",
	    value: function point(iX, iY) {
	      return this.rectangle(iX, iY, 1, 1);
	    }

	    /**
	     *
	     */

	  }, {
	    key: "lineTo",
	    value: function lineTo(iX, iY) {
	      this.context.lineTo(iX, iY);
	      return this;
	    }
	  }]);

	  return Geometry;
	}();

	exports.default = Geometry;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _utility = __webpack_require__(6);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Perlin = function () {
	  function Perlin() {
	    _classCallCheck(this, Perlin);

	    var iUnit = 1.74,
	        i = 0; //;

	    this.res = 50;
	    this.permutable = [];

	    this.perm = [151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180];

	    for (; i < 511; i++) {
	      this.permutable.push(this.perm[i % 255]);
	    }

	    (0, _utility.shuffle)(this.permutable);

	    this.vecteur = [[iUnit, iUnit], [-iUnit, iUnit], [iUnit, -iUnit], [-iUnit, -iUnit], [1, 1], [-1, 1], [1, -1], [-1, -1]];
	  }

	  /**
	   * [resolution description]
	   * @param  {[type]} iValue [description]
	   * @return {[type]}        [description]
	   */


	  _createClass(Perlin, [{
	    key: 'value',


	    /**
	     *
	     */
	    value: function value(iX, iY) {

	      var iMask, jMask, x0, y0, indexA, indexB, indexC, indexD, tempX, tempY;
	      var s, t, u, v;
	      var tmp, cx, cy, li1, li2;

	      iX /= this.res;
	      iY /= this.res;

	      // tmp
	      x0 = Math.floor(iX);
	      y0 = Math.floor(iY);

	      //masquage
	      iMask = x0 % 511;
	      jMask = y0 % 511;

	      //index au angle
	      indexA = this.permutable[iMask + this.permutable[jMask]] % 8;
	      indexB = this.permutable[iMask + 1 + this.permutable[jMask]] % 8;
	      indexC = this.permutable[iMask + this.permutable[jMask + 1]] % 8;
	      indexD = this.permutable[iMask + 1 + this.permutable[jMask + 1]] % 8;

	      tempX = iX - x0;
	      tempY = iY - y0;
	      s = this.vecteur[indexA][0] * tempX + this.vecteur[indexA][1] * tempY;

	      tempX = iX - (x0 + 1);
	      tempY = iY - y0;
	      t = this.vecteur[indexB][0] * tempX + this.vecteur[indexB][1] * tempY;

	      tempX = iX - x0;
	      tempY = iY - (y0 + 1);
	      u = this.vecteur[indexC][0] * tempX + this.vecteur[indexC][1] * tempY;

	      tempX = iX - (x0 + 1);
	      tempY = iY - (y0 + 1);
	      v = this.vecteur[indexD][0] * tempX + this.vecteur[indexD][1] * tempY;

	      //interpolation
	      tmp = iX - x0;
	      cx = 3 * tmp * tmp - 2 * tmp * tmp * tmp;

	      tmp = iY - y0;
	      cy = 3 * tmp * tmp - 2 * tmp * tmp * tmp;

	      li1 = s + cx * (t - s);
	      li2 = u + cx * (v - u);

	      return li1 + cy * (li2 - li1);
	    }
	  }, {
	    key: 'resolution',
	    set: function set(iValue) {
	      this.res = iValue; //contrain( iValue, 30, 600);
	    }
	  }]);

	  return Perlin;
	}();

	exports.default = new Perlin();

/***/ }
/******/ ]);