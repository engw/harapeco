/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 47);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Detect Electron renderer process, which is node, but we should
 * treat as a browser.
 */

if (typeof process !== 'undefined' && process.type === 'renderer') {
  module.exports = __webpack_require__(18);
} else {
  module.exports = __webpack_require__(19);
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// a duplex stream is just a stream that is both readable and writable.
// Since JS doesn't have multiple prototypal inheritance, this class
// prototypally inherits from Readable, and then parasitically from
// Writable.



/*<replacement>*/

var objectKeys = Object.keys || function (obj) {
  var keys = [];
  for (var key in obj) {
    keys.push(key);
  }return keys;
};
/*</replacement>*/

module.exports = Duplex;

/*<replacement>*/
var processNextTick = __webpack_require__(8);
/*</replacement>*/

/*<replacement>*/
var util = __webpack_require__(4);
util.inherits = __webpack_require__(5);
/*</replacement>*/

var Readable = __webpack_require__(32);
var Writable = __webpack_require__(34);

util.inherits(Duplex, Readable);

var keys = objectKeys(Writable.prototype);
for (var v = 0; v < keys.length; v++) {
  var method = keys[v];
  if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
}

function Duplex(options) {
  if (!(this instanceof Duplex)) return new Duplex(options);

  Readable.call(this, options);
  Writable.call(this, options);

  if (options && options.readable === false) this.readable = false;

  if (options && options.writable === false) this.writable = false;

  this.allowHalfOpen = true;
  if (options && options.allowHalfOpen === false) this.allowHalfOpen = false;

  this.once('end', onend);
}

// the no-half-open enforcer
function onend() {
  // if we allow half-open state, or if the writable side ended,
  // then we're ok.
  if (this.allowHalfOpen || this._writableState.ended) return;

  // no more data can be written.
  // But allow more writes to happen in this tick.
  processNextTick(onEndNT, this);
}

function onEndNT(self) {
  self.end();
}

function forEach(xs, f) {
  for (var i = 0, l = xs.length; i < l; i++) {
    f(xs[i], i);
  }
}

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("buffer");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.

function isArray(arg) {
  if (Array.isArray) {
    return Array.isArray(arg);
  }
  return objectToString(arg) === '[object Array]';
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = Buffer.isBuffer;

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

try {
  var util = __webpack_require__(3);
  if (typeof util.inherits !== 'function') throw '';
  module.exports = util.inherits;
} catch (e) {
  module.exports = __webpack_require__(23);
}


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("events");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var buffer = __webpack_require__(2);
var Buffer = buffer.Buffer;
var SlowBuffer = buffer.SlowBuffer;
var MAX_LEN = buffer.kMaxLength || 2147483647;
exports.alloc = function alloc(size, fill, encoding) {
  if (typeof Buffer.alloc === 'function') {
    return Buffer.alloc(size, fill, encoding);
  }
  if (typeof encoding === 'number') {
    throw new TypeError('encoding must not be number');
  }
  if (typeof size !== 'number') {
    throw new TypeError('size must be a number');
  }
  if (size > MAX_LEN) {
    throw new RangeError('size is too large');
  }
  var enc = encoding;
  var _fill = fill;
  if (_fill === undefined) {
    enc = undefined;
    _fill = 0;
  }
  var buf = new Buffer(size);
  if (typeof _fill === 'string') {
    var fillBuf = new Buffer(_fill, enc);
    var flen = fillBuf.length;
    var i = -1;
    while (++i < size) {
      buf[i] = fillBuf[i % flen];
    }
  } else {
    buf.fill(_fill);
  }
  return buf;
}
exports.allocUnsafe = function allocUnsafe(size) {
  if (typeof Buffer.allocUnsafe === 'function') {
    return Buffer.allocUnsafe(size);
  }
  if (typeof size !== 'number') {
    throw new TypeError('size must be a number');
  }
  if (size > MAX_LEN) {
    throw new RangeError('size is too large');
  }
  return new Buffer(size);
}
exports.from = function from(value, encodingOrOffset, length) {
  if (typeof Buffer.from === 'function' && (!global.Uint8Array || Uint8Array.from !== Buffer.from)) {
    return Buffer.from(value, encodingOrOffset, length);
  }
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number');
  }
  if (typeof value === 'string') {
    return new Buffer(value, encodingOrOffset);
  }
  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    var offset = encodingOrOffset;
    if (arguments.length === 1) {
      return new Buffer(value);
    }
    if (typeof offset === 'undefined') {
      offset = 0;
    }
    var len = length;
    if (typeof len === 'undefined') {
      len = value.byteLength - offset;
    }
    if (offset >= value.byteLength) {
      throw new RangeError('\'offset\' is out of bounds');
    }
    if (len > value.byteLength - offset) {
      throw new RangeError('\'length\' is out of bounds');
    }
    return new Buffer(value.slice(offset, offset + len));
  }
  if (Buffer.isBuffer(value)) {
    var out = new Buffer(value.length);
    value.copy(out, 0, 0, value.length);
    return out;
  }
  if (value) {
    if (Array.isArray(value) || (typeof ArrayBuffer !== 'undefined' && value.buffer instanceof ArrayBuffer) || 'length' in value) {
      return new Buffer(value);
    }
    if (value.type === 'Buffer' && Array.isArray(value.data)) {
      return new Buffer(value.data);
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ' + 'ArrayBuffer, Array, or array-like object.');
}
exports.allocUnsafeSlow = function allocUnsafeSlow(size) {
  if (typeof Buffer.allocUnsafeSlow === 'function') {
    return Buffer.allocUnsafeSlow(size);
  }
  if (typeof size !== 'number') {
    throw new TypeError('size must be a number');
  }
  if (size >= MAX_LEN) {
    throw new RangeError('size is too large');
  }
  return new SlowBuffer(size);
}


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (!process.version ||
    process.version.indexOf('v0.') === 0 ||
    process.version.indexOf('v1.') === 0 && process.version.indexOf('v1.8.') !== 0) {
  module.exports = nextTick;
} else {
  module.exports = process.nextTick;
}

function nextTick(fn, arg1, arg2, arg3) {
  if (typeof fn !== 'function') {
    throw new TypeError('"callback" argument must be a function');
  }
  var len = arguments.length;
  var args, i;
  switch (len) {
  case 0:
  case 1:
    return process.nextTick(fn);
  case 2:
    return process.nextTick(function afterTickOne() {
      fn.call(null, arg1);
    });
  case 3:
    return process.nextTick(function afterTickTwo() {
      fn.call(null, arg1, arg2);
    });
  case 4:
    return process.nextTick(function afterTickThree() {
      fn.call(null, arg1, arg2, arg3);
    });
  default:
    args = new Array(len - 1);
    i = 0;
    while (i < args.length) {
      args[i++] = arguments[i];
    }
    return process.nextTick(function afterTick() {
      fn.apply(null, args);
    });
  }
}


/***/ }),
/* 9 */
/***/ (function(module, exports) {


/**
 * An Array.prototype.slice.call(arguments) alternative
 *
 * @param {Object} args something with a length
 * @param {Number} slice
 * @param {Number} sliceEnd
 * @api public
 */

module.exports = function (args, slice, sliceEnd) {
  var ret = [];
  var len = args.length;

  if (0 === len) return ret;

  var start = slice < 0
    ? Math.max(0, slice + len)
    : slice || 0;

  if (sliceEnd !== undefined) {
    len = sliceEnd < 0
      ? sliceEnd + len
      : sliceEnd
  }

  while (len-- > start) {
    ret[len - start] = args[len];
  }

  return ret;
}



/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = __webpack_require__(27);

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};

/**
 * Previous log timestamp.
 */

var prevTime;

/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0, i;

  for (i in namespace) {
    hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function createDebug(namespace) {

  function debug() {
    // disabled?
    if (!debug.enabled) return;

    var self = debug;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // turn the `arguments` into a proper Array
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    // apply env-specific formatting (colors, etc.)
    exports.formatArgs.call(self, args);

    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);

  // env-specific initialization logic for debug instances
  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  return debug;
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  exports.names = [];
  exports.skips = [];

  var split = (namespaces || '').split(/[\s,]+/);
  var len = split.length;

  for (var i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var wrappy = __webpack_require__(41)
module.exports = wrappy(once)
module.exports.strict = wrappy(onceStrict)

once.proto = once(function () {
  Object.defineProperty(Function.prototype, 'once', {
    value: function () {
      return once(this)
    },
    configurable: true
  })

  Object.defineProperty(Function.prototype, 'onceStrict', {
    value: function () {
      return onceStrict(this)
    },
    configurable: true
  })
})

function once (fn) {
  var f = function () {
    if (f.called) return f.value
    f.called = true
    return f.value = fn.apply(this, arguments)
  }
  f.called = false
  return f
}

function onceStrict (fn) {
  var f = function () {
    if (f.called)
      throw new Error(f.onceError)
    f.called = true
    return f.value = fn.apply(this, arguments)
  }
  var name = fn.name || 'Function wrapped with `once`'
  f.onceError = name + " shouldn't be called more than once"
  f.called = false
  return f
}


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var Buffer = __webpack_require__(2).Buffer;

var isBufferEncoding = Buffer.isEncoding
  || function(encoding) {
       switch (encoding && encoding.toLowerCase()) {
         case 'hex': case 'utf8': case 'utf-8': case 'ascii': case 'binary': case 'base64': case 'ucs2': case 'ucs-2': case 'utf16le': case 'utf-16le': case 'raw': return true;
         default: return false;
       }
     }


function assertEncoding(encoding) {
  if (encoding && !isBufferEncoding(encoding)) {
    throw new Error('Unknown encoding: ' + encoding);
  }
}

// StringDecoder provides an interface for efficiently splitting a series of
// buffers into a series of JS strings without breaking apart multi-byte
// characters. CESU-8 is handled as part of the UTF-8 encoding.
//
// @TODO Handling all encodings inside a single object makes it very difficult
// to reason about this code, so it should be split up in the future.
// @TODO There should be a utf8-strict encoding that rejects invalid UTF-8 code
// points as used by CESU-8.
var StringDecoder = exports.StringDecoder = function(encoding) {
  this.encoding = (encoding || 'utf8').toLowerCase().replace(/[-_]/, '');
  assertEncoding(encoding);
  switch (this.encoding) {
    case 'utf8':
      // CESU-8 represents each of Surrogate Pair by 3-bytes
      this.surrogateSize = 3;
      break;
    case 'ucs2':
    case 'utf16le':
      // UTF-16 represents each of Surrogate Pair by 2-bytes
      this.surrogateSize = 2;
      this.detectIncompleteChar = utf16DetectIncompleteChar;
      break;
    case 'base64':
      // Base-64 stores 3 bytes in 4 chars, and pads the remainder.
      this.surrogateSize = 3;
      this.detectIncompleteChar = base64DetectIncompleteChar;
      break;
    default:
      this.write = passThroughWrite;
      return;
  }

  // Enough space to store all bytes of a single character. UTF-8 needs 4
  // bytes, but CESU-8 may require up to 6 (3 bytes per surrogate).
  this.charBuffer = new Buffer(6);
  // Number of bytes received for the current incomplete multi-byte character.
  this.charReceived = 0;
  // Number of bytes expected for the current incomplete multi-byte character.
  this.charLength = 0;
};


// write decodes the given buffer and returns it as JS string that is
// guaranteed to not contain any partial multi-byte characters. Any partial
// character found at the end of the buffer is buffered up, and will be
// returned when calling write again with the remaining bytes.
//
// Note: Converting a Buffer containing an orphan surrogate to a String
// currently works, but converting a String to a Buffer (via `new Buffer`, or
// Buffer#write) will replace incomplete surrogates with the unicode
// replacement character. See https://codereview.chromium.org/121173009/ .
StringDecoder.prototype.write = function(buffer) {
  var charStr = '';
  // if our last write ended with an incomplete multibyte character
  while (this.charLength) {
    // determine how many remaining bytes this buffer has to offer for this char
    var available = (buffer.length >= this.charLength - this.charReceived) ?
        this.charLength - this.charReceived :
        buffer.length;

    // add the new bytes to the char buffer
    buffer.copy(this.charBuffer, this.charReceived, 0, available);
    this.charReceived += available;

    if (this.charReceived < this.charLength) {
      // still not enough chars in this buffer? wait for more ...
      return '';
    }

    // remove bytes belonging to the current character from the buffer
    buffer = buffer.slice(available, buffer.length);

    // get the character that was split
    charStr = this.charBuffer.slice(0, this.charLength).toString(this.encoding);

    // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
    var charCode = charStr.charCodeAt(charStr.length - 1);
    if (charCode >= 0xD800 && charCode <= 0xDBFF) {
      this.charLength += this.surrogateSize;
      charStr = '';
      continue;
    }
    this.charReceived = this.charLength = 0;

    // if there are no more bytes in this buffer, just emit our char
    if (buffer.length === 0) {
      return charStr;
    }
    break;
  }

  // determine and set charLength / charReceived
  this.detectIncompleteChar(buffer);

  var end = buffer.length;
  if (this.charLength) {
    // buffer the incomplete character bytes we got
    buffer.copy(this.charBuffer, 0, buffer.length - this.charReceived, end);
    end -= this.charReceived;
  }

  charStr += buffer.toString(this.encoding, 0, end);

  var end = charStr.length - 1;
  var charCode = charStr.charCodeAt(end);
  // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
  if (charCode >= 0xD800 && charCode <= 0xDBFF) {
    var size = this.surrogateSize;
    this.charLength += size;
    this.charReceived += size;
    this.charBuffer.copy(this.charBuffer, size, 0, size);
    buffer.copy(this.charBuffer, 0, 0, size);
    return charStr.substring(0, end);
  }

  // or just emit the charStr
  return charStr;
};

// detectIncompleteChar determines if there is an incomplete UTF-8 character at
// the end of the given buffer. If so, it sets this.charLength to the byte
// length that character, and sets this.charReceived to the number of bytes
// that are available for this character.
StringDecoder.prototype.detectIncompleteChar = function(buffer) {
  // determine how many bytes we have to check at the end of this buffer
  var i = (buffer.length >= 3) ? 3 : buffer.length;

  // Figure out if one of the last i bytes of our buffer announces an
  // incomplete char.
  for (; i > 0; i--) {
    var c = buffer[buffer.length - i];

    // See http://en.wikipedia.org/wiki/UTF-8#Description

    // 110XXXXX
    if (i == 1 && c >> 5 == 0x06) {
      this.charLength = 2;
      break;
    }

    // 1110XXXX
    if (i <= 2 && c >> 4 == 0x0E) {
      this.charLength = 3;
      break;
    }

    // 11110XXX
    if (i <= 3 && c >> 3 == 0x1E) {
      this.charLength = 4;
      break;
    }
  }
  this.charReceived = i;
};

StringDecoder.prototype.end = function(buffer) {
  var res = '';
  if (buffer && buffer.length)
    res = this.write(buffer);

  if (this.charReceived) {
    var cr = this.charReceived;
    var buf = this.charBuffer;
    var enc = this.encoding;
    res += buf.slice(0, cr).toString(enc);
  }

  return res;
};

function passThroughWrite(buffer) {
  return buffer.toString(this.encoding);
}

function utf16DetectIncompleteChar(buffer) {
  this.charReceived = buffer.length % 2;
  this.charLength = this.charReceived ? 2 : 0;
}

function base64DetectIncompleteChar(buffer) {
  this.charReceived = buffer.length % 3;
  this.charLength = this.charReceived ? 3 : 0;
}


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("stream");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__dirname) {/**
 * DEBUG=nightmare*
 */

var log = __webpack_require__(0)('nightmare:log');
var debug = __webpack_require__(0)('nightmare');
var electronLog = {
  stdout: __webpack_require__(0)('electron:stdout'),
  stderr: __webpack_require__(0)('electron:stderr')
};

/**
 * Module dependencies
 */

var default_electron_path = __webpack_require__(21);
var source = __webpack_require__(22);
var proc = __webpack_require__(43);
var actions = __webpack_require__(29);
var path = __webpack_require__(14);
var sliced = __webpack_require__(9);
var child = __webpack_require__(30);
var once = __webpack_require__(12);
var split2 = __webpack_require__(37);
var defaults = __webpack_require__(20);
var noop = function() {};
var keys = Object.keys;

// Standard timeout for loading URLs
const DEFAULT_GOTO_TIMEOUT = 30 * 1000;
// Standard timeout for wait(ms)
const DEFAULT_WAIT_TIMEOUT = 30 * 1000;
// Timeout between keystrokes for `.type()`
const DEFAULT_TYPE_INTERVAL = 100;
// timeout between `wait` polls
const DEFAULT_POLL_INTERVAL = 250;
// max retry for authentication
const MAX_AUTH_RETRIES = 3;
// max execution time for `.evaluate()`
const DEFAULT_EXECUTION_TIMEOUT = 30 * 1000
// Error message when halted
const DEFAULT_HALT_MESSAGE = 'Nightmare Halted';
// Non-persistent partition to use by defaults
const DEFAULT_PARTITION = 'nightmare';

/**
 * Export `Nightmare`
 */

module.exports = Nightmare;

/**
 * runner script
 */

var runner = path.join(__dirname, 'runner.js');

/**
 * Template
 */

var template = __webpack_require__(31);

/**
 * Initialize `Nightmare`
 *
 * @param {Object} options
 */

function Nightmare(options) {
  if (!(this instanceof Nightmare)) return new Nightmare(options);
  options = options || {};
  var electronArgs = {};
  var self = this;

  options.waitTimeout = options.waitTimeout || DEFAULT_WAIT_TIMEOUT;
  options.gotoTimeout = options.gotoTimeout || DEFAULT_GOTO_TIMEOUT;
  options.pollInterval = options.pollInterval || DEFAULT_POLL_INTERVAL;

  options.typeInterval = options.typeInterval || DEFAULT_TYPE_INTERVAL;
  options.executionTimeout = options.executionTimeout || DEFAULT_EXECUTION_TIMEOUT;
  options.webPreferences = options.webPreferences || {};

  // null is a valid value, which will result in the use of the electron default behavior, which is to persist storage.
  // The default behavior for nightmare will be to use non-persistent storage.
  // http://electron.atom.io/docs/api/browser-window/#new-browserwindowoptions
  options.webPreferences.partition = options.webPreferences.partition !== undefined ? options.webPreferences.partition : DEFAULT_PARTITION;

  options.Promise = options.Promise || Nightmare.Promise || Promise;

  var electron_path = options.electronPath || default_electron_path

  if (options.paths) {
    electronArgs.paths = options.paths;
  }

  if (options.switches) {
    electronArgs.switches = options.switches;
  }
  options.maxAuthRetries = options.maxAuthRetries || MAX_AUTH_RETRIES;

  electronArgs.loadTimeout = options.loadTimeout;
  if(options.loadTimeout && options.gotoTimeout && options.loadTimeout < options.gotoTimeout){
    debug(`WARNING:  load timeout of ${options.loadTimeout} is shorter than goto timeout of ${options.gotoTimeout}`);
  }

  electronArgs.dock = options.dock || false;

  attachToProcess(this);

  // initial state
  this.state = 'initial';
  this.running = false;
  this.ending = false;
  this.ended = false;
  this._queue = [];
  this._headers = {};
  this.options = options;

  debug('queuing process start');
  this.queue((done) => {

    this.proc = proc.spawn(electron_path, [runner].concat(JSON.stringify(electronArgs)), {
      stdio: [null, null, null, 'ipc'],
      env: defaults(options.env || {}, process.env)
    });

    this.proc.stdout.pipe(split2()).on('data', (data) => {
      electronLog.stdout(data);
    });

    this.proc.stderr.pipe(split2()).on('data', (data) => {
      electronLog.stderr(data);
    });

    this.proc.on('close', (code) => {
      if(!self.ended){
        handleExit(code, self, noop);
      }
    });

    this.child = child(this.proc);

    this.child.once('die', function(err){
      debug('dying: ' + err);
      self.die = err;
    });

    // propagate console.log(...) through
    this.child.on('log', function() {
      log.apply(log, arguments);
    });

    this.child.on('uncaughtException', function(stack) {
      console.error('Nightmare runner error:\n\n%s\n', '\t' + stack.replace(/\n/g, '\n\t'));
      endInstance(self, noop);
      process.exit(1);
    });

    this.child.on('page', function(type) {
      log.apply(null, ['page-' + type].concat(sliced(arguments, 1)));
    });

    // propogate events through to debugging
    this.child.on('did-finish-load', function () { log('did-finish-load', JSON.stringify(Array.prototype.slice.call(arguments))); });
    this.child.on('did-fail-load', function () { log('did-fail-load', JSON.stringify(Array.prototype.slice.call(arguments))); });
    this.child.on('did-fail-provisional-load', function () { log('did-fail-provisional-load', JSON.stringify(Array.prototype.slice.call(arguments))); });
    this.child.on('did-frame-finish-load', function () { log('did-frame-finish-load', JSON.stringify(Array.prototype.slice.call(arguments))); });
    this.child.on('did-start-loading', function () { log('did-start-loading', JSON.stringify(Array.prototype.slice.call(arguments))); });
    this.child.on('did-stop-loading', function () { log('did-stop-loading', JSON.stringify(Array.prototype.slice.call(arguments))); });
    this.child.on('did-get-response-details', function () { log('did-get-response-details', JSON.stringify(Array.prototype.slice.call(arguments))); });
    this.child.on('did-get-redirect-request', function () { log('did-get-redirect-request', JSON.stringify(Array.prototype.slice.call(arguments))); });
    this.child.on('dom-ready', function () { log('dom-ready', JSON.stringify(Array.prototype.slice.call(arguments))); });
    this.child.on('page-favicon-updated', function () { log('page-favicon-updated', JSON.stringify(Array.prototype.slice.call(arguments))); });
    this.child.on('new-window', function () { log('new-window', JSON.stringify(Array.prototype.slice.call(arguments))); });
    this.child.on('will-navigate', function () { log('will-navigate', JSON.stringify(Array.prototype.slice.call(arguments))); });
    this.child.on('crashed', function () { log('crashed', JSON.stringify(Array.prototype.slice.call(arguments))); });
    this.child.on('plugin-crashed', function () { log('plugin-crashed', JSON.stringify(Array.prototype.slice.call(arguments))); });
    this.child.on('destroyed', function () { log('destroyed', JSON.stringify(Array.prototype.slice.call(arguments))); });
    this.child.on('media-started-playing', function () { log('media-started-playing', JSON.stringify(Array.prototype.slice.call(arguments))); });
    this.child.on('media-paused', function () { log('media-paused', JSON.stringify(Array.prototype.slice.call(arguments))); });

    this.child.once('ready', (versions) => {
      this.engineVersions = versions;
      this.child.call('browser-initialize', options, function() {
        self.state = 'ready';
        done();
      });
    });
  });

  // initialize namespaces
  Nightmare.namespaces.forEach(function (name) {
    if ('function' === typeof this[name]) {
      this[name] = this[name]()
    }
  }, this)

  //prepend adding child actions to the queue
  Object.keys(Nightmare.childActions).forEach(function(key){
    debug('queueing child action addition for "%s"', key);
    this.queue(function(done){
      this.child.call('action', key, String(Nightmare.childActions[key]), done);
    });
  }, this);
}

function handleExit(code, instance, cb){
  var help = {
    127: 'command not found - you may not have electron installed correctly',
    126: 'permission problem or command is not an executable - you may not have all the necessary dependencies for electron',
    1: 'general error - you may need xvfb',
    0: 'success!'
  };

  debug('electron child process exited with code ' + code + ': ' + help[code]);
  instance.proc.removeAllListeners();
  cb();
};

function endInstance(instance, cb, forceKill) {
  instance.ended = true;
  detachFromProcess(instance);
  if (instance.proc && instance.proc.connected) {
    instance.proc.on('close', (code) => {
      handleExit(code, instance, cb);
    });
    instance.child.call('quit', () => {
      instance.child.removeAllListeners();
      if (forceKill) {
        instance.proc.kill('SIGINT');
      }
    });
  } else {
    debug('electron child process not started yet, skipping kill.');
    cb();
  }
}

/**
 * Attach any instance-specific process-level events.
 */
function attachToProcess(instance) {
  instance._endNow = endInstance.bind(null, instance, noop);
  process.setMaxListeners(Infinity);
  process.on('exit', instance._endNow);
  process.on('SIGINT', instance._endNow);
  process.on('SIGTERM', instance._endNow);
  process.on('SIGQUIT', instance._endNow);
  process.on('SIGHUP', instance._endNow);
  process.on('SIGBREAK', instance._endNow);
}

function detachFromProcess(instance) {
  process.removeListener('exit', instance._endNow);
  process.removeListener('SIGINT', instance._endNow);
  process.removeListener('SIGTERM', instance._endNow);
  process.removeListener('SIGQUIT', instance._endNow);
  process.removeListener('SIGHUP', instance._endNow);
  process.removeListener('SIGBREAK', instance._endNow);
}

/**
 * Namespaces to initialize
 */

Nightmare.namespaces = [];

/**
 * Child actions to create
 */

Nightmare.childActions = {};

/**
 * Version
 */
Nightmare.version = !(function webpackMissingModule() { var e = new Error("Cannot find module \".\""); e.code = 'MODULE_NOT_FOUND';; throw e; }()).version;

/**
 * Promise library (can override)
 */

Nightmare.Promise = Promise;

/**
 * Override headers for all HTTP requests
 */

Nightmare.prototype.header = function(header, value) {
  if (header && typeof value !== 'undefined') {
    this._headers[header] = value;
  } else {
    this._headers = header || {};
  }

  return this;
};

/**
 * Go to a `url`
 */

Nightmare.prototype.goto = function(url, headers) {
  debug('queueing action "goto" for %s', url);
  var self = this;

  headers = headers || {};
  for (var key in this._headers) {
    headers[key] = headers[key] || this._headers[key];
  }

  this.queue(function(fn) {
    self.child.call('goto', url, headers, this.options.gotoTimeout, fn);
  });
  return this;
};

/**
 * run
 */

Nightmare.prototype.run = function(fn) {
  debug('running')
  var steps = this.queue();
  this.running = true;
  this._queue = [];
  var self = this;

  // kick us off
  next();

  // next function
  function next (err, res) {
    var item = steps.shift();
    // Immediately halt execution if an error has been thrown, or we have no more queued up steps.
    if (err || !item) return done.apply(self, arguments);
    var args = item[1] || [];
    var method = item[0];
    args.push(once(after));
    method.apply(self, args);
  }

  function after (err, res) {
    err = err || self.die;
    var args = sliced(arguments);

    if(self.child){
      self.child.call('continue', () => next.apply(self, args));
    } else {
      next.apply(self, args);
    }
  }

  function done () {
    var doneargs = arguments;
    self.running = false;
    if (self.ending) {
      return endInstance(self, () => fn.apply(self, doneargs));
    }
    return fn.apply(self, doneargs);
  }

  return this;
};

/**
 * run the code now (do not queue it)
 *
 * you should not use this, unless you know what you're doing
 * it should be used for plugins and custom actions, not for
 * normal API usage
 */

Nightmare.prototype.evaluate_now = function(js_fn, done) {
  var args = Array.prototype.slice.call(arguments).slice(2).map(a=> {
    return { argument: JSON.stringify(a) };
  });
  var source = template.execute({ src: String(js_fn), args: args});
  this.child.call('javascript', source, done);
  return this;
};

/**
 * inject javascript
 */

Nightmare.prototype._inject = function(js, done) {
  this.child.call('javascript', template.inject({ src: js }), done);
  return this;
};

/**
 * end
 */

Nightmare.prototype.end = function(done) {
  this.ending = true;

  if (done && !this.running && !this.ended) {
    return this.then(done);
  }

  return this;
};


/**
 * Halt - Force kills the electron process immediately and empties the queue
 *
 * @param  {Error|String} error (Optional: defaults to 'Nightmare Halted'.) Error to pass to rejected promise
 * @param  {Function} done (Optional: defaults to no operation) callback when the child process exits
 * @return {Nightmare}       returns self
 */
Nightmare.prototype.halt = function (error, done) {
  this.ending = true;
  var queue = this.queue(); // empty the queue
  queue.splice(0);
  if (!this.ended) {
    var message = error;
    if (error instanceof Error) {
      message = error.message;
    }
    this.die = message || DEFAULT_HALT_MESSAGE;
    if (typeof this._rejectActivePromise === 'function') {
      this._rejectActivePromise(error || DEFAULT_HALT_MESSAGE);
    }
    var callback = done;
    if (!callback || typeof callback !== 'function') {
      callback = noop;
    }
    endInstance(this, callback, true);
  }

  return this;
};

/**
 * on
 */

Nightmare.prototype.on = function(event, handler) {
  this.queue(function(done){
    this.child.on(event, handler);
    done();
  });
  return this;
};

/**
 * once
 */

Nightmare.prototype.once = function(event, handler) {
  this.queue(function(done){
    this.child.once(event, handler);
    done();
  })
  return this;
};

/**
 * removeEventListener
 */

Nightmare.prototype.removeListener = function(event, handler) {
  this.child.removeListener(event, handler);
  return this;
};

/**
 * Queue
 */

Nightmare.prototype.queue = function(done) {
  if (!arguments.length) return this._queue;
  var args = sliced(arguments);
  var fn = args.pop();
  this._queue.push([fn, args]);
};


/**
 * then
 */

Nightmare.prototype.then = function(fulfill, reject) {
  var self = this;

  return new this.options.Promise(function (success, failure) {
    self._rejectActivePromise = failure;
    self.run(function(err, result) {
      if (err) failure(err);
      else success(result);
    })
  })
  .then(fulfill, reject);
};

/**
 * catch
 */

Nightmare.prototype.catch = function(reject) {
  this._rejectActivePromise = reject;
  return this.then(undefined, reject);
};

/**
 * use
 */

Nightmare.prototype.use = function(fn) {
  fn(this)
  return this
};

// wrap all the functions in the queueing function
function queued (name, fn) {
  return function action () {
    debug('queueing action "' + name + '"');
    var args = [].slice.call(arguments);
    this._queue.push([fn, args]);
    return this;
  }
}

/**
 * Static: Support attaching custom actions
 *
 * @param {String} name - method name
 * @param {Function|Object} [childfn] - Electron implementation
 * @param {Function|Object} parentfn - Nightmare implementation
 * @return {Nightmare}
 */

Nightmare.action = function() {
  var name = arguments[0], childfn, parentfn;
  if(arguments.length === 2) {
    parentfn = arguments[1];
  } else {
    parentfn = arguments[2];
    childfn = arguments[1];
  }

  // support functions and objects
  // if it's an object, wrap it's
  // properties in the queue function

  if(parentfn) {
    if (typeof parentfn === 'function') {
      Nightmare.prototype[name] = queued(name, parentfn);
    } else {
      if (!~Nightmare.namespaces.indexOf(name)) {
        Nightmare.namespaces.push(name);
      }
      Nightmare.prototype[name] = function() {
        var self = this;
        return keys(parentfn).reduce(function (obj, key) {
          obj[key] = queued(name, parentfn[key]).bind(self)
        return obj;
        }, {});
      }
    }
  }

  if(childfn) {
    if (typeof childfn === 'function') {
     Nightmare.childActions[name] = childfn;
    } else {
      for(var key in childfn){
        Nightmare.childActions[name+'.'+key] = childfn;
      }
    }
  }
}

/**
 * Attach all the actions.
 */

Object.keys(actions).forEach(function (name) {
  var fn = actions[name];
  Nightmare.action(name, fn);
});

/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 17 */
/***/ (function(module, exports) {

var clone = (function() {
'use strict';

/**
 * Clones (copies) an Object using deep copying.
 *
 * This function supports circular references by default, but if you are certain
 * there are no circular references in your object, you can save some CPU time
 * by calling clone(obj, false).
 *
 * Caution: if `circular` is false and `parent` contains circular references,
 * your program may enter an infinite loop and crash.
 *
 * @param `parent` - the object to be cloned
 * @param `circular` - set to true if the object to be cloned may contain
 *    circular references. (optional - true by default)
 * @param `depth` - set to a number if the object is only to be cloned to
 *    a particular depth. (optional - defaults to Infinity)
 * @param `prototype` - sets the prototype to be used when cloning an object.
 *    (optional - defaults to parent prototype).
*/
function clone(parent, circular, depth, prototype) {
  var filter;
  if (typeof circular === 'object') {
    depth = circular.depth;
    prototype = circular.prototype;
    filter = circular.filter;
    circular = circular.circular
  }
  // maintain two arrays for circular references, where corresponding parents
  // and children have the same index
  var allParents = [];
  var allChildren = [];

  var useBuffer = typeof Buffer != 'undefined';

  if (typeof circular == 'undefined')
    circular = true;

  if (typeof depth == 'undefined')
    depth = Infinity;

  // recurse this function so we don't reset allParents and allChildren
  function _clone(parent, depth) {
    // cloning null always returns null
    if (parent === null)
      return null;

    if (depth == 0)
      return parent;

    var child;
    var proto;
    if (typeof parent != 'object') {
      return parent;
    }

    if (clone.__isArray(parent)) {
      child = [];
    } else if (clone.__isRegExp(parent)) {
      child = new RegExp(parent.source, __getRegExpFlags(parent));
      if (parent.lastIndex) child.lastIndex = parent.lastIndex;
    } else if (clone.__isDate(parent)) {
      child = new Date(parent.getTime());
    } else if (useBuffer && Buffer.isBuffer(parent)) {
      child = new Buffer(parent.length);
      parent.copy(child);
      return child;
    } else {
      if (typeof prototype == 'undefined') {
        proto = Object.getPrototypeOf(parent);
        child = Object.create(proto);
      }
      else {
        child = Object.create(prototype);
        proto = prototype;
      }
    }

    if (circular) {
      var index = allParents.indexOf(parent);

      if (index != -1) {
        return allChildren[index];
      }
      allParents.push(parent);
      allChildren.push(child);
    }

    for (var i in parent) {
      var attrs;
      if (proto) {
        attrs = Object.getOwnPropertyDescriptor(proto, i);
      }

      if (attrs && attrs.set == null) {
        continue;
      }
      child[i] = _clone(parent[i], depth - 1);
    }

    return child;
  }

  return _clone(parent, depth);
}

/**
 * Simple flat clone using prototype, accepts only objects, usefull for property
 * override on FLAT configuration object (no nested props).
 *
 * USE WITH CAUTION! This may not behave as you wish if you do not know how this
 * works.
 */
clone.clonePrototype = function clonePrototype(parent) {
  if (parent === null)
    return null;

  var c = function () {};
  c.prototype = parent;
  return new c();
};

// private utility functions

function __objToStr(o) {
  return Object.prototype.toString.call(o);
};
clone.__objToStr = __objToStr;

function __isDate(o) {
  return typeof o === 'object' && __objToStr(o) === '[object Date]';
};
clone.__isDate = __isDate;

function __isArray(o) {
  return typeof o === 'object' && __objToStr(o) === '[object Array]';
};
clone.__isArray = __isArray;

function __isRegExp(o) {
  return typeof o === 'object' && __objToStr(o) === '[object RegExp]';
};
clone.__isRegExp = __isRegExp;

function __getRegExpFlags(re) {
  var flags = '';
  if (re.global) flags += 'g';
  if (re.ignoreCase) flags += 'i';
  if (re.multiline) flags += 'm';
  return flags;
};
clone.__getRegExpFlags = __getRegExpFlags;

return clone;
})();

if (typeof module === 'object' && module.exports) {
  module.exports = clone;
}


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__(11);
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome
               && 'undefined' != typeof chrome.storage
                  ? chrome.storage.local
                  : localstorage();

/**
 * Colors.
 */

exports.colors = [
  'lightseagreen',
  'forestgreen',
  'goldenrod',
  'dodgerblue',
  'darkorchid',
  'crimson'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window && typeof window.process !== 'undefined' && window.process.type === 'renderer') {
    return true;
  }

  // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  return (typeof document !== 'undefined' && document && 'WebkitAppearance' in document.documentElement.style) ||
    // is firebug? http://stackoverflow.com/a/398120/376773
    (typeof window !== 'undefined' && window && window.console && (console.firebug || (console.exception && console.table))) ||
    // is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    (typeof navigator !== 'undefined' && navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
    // double check webkit in userAgent just in case we are in a worker
    (typeof navigator !== 'undefined' && navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function(v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};


/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '')
    + this.namespace
    + (useColors ? ' %c' : ' ')
    + args[0]
    + (useColors ? '%c ' : ' ')
    + '+' + exports.humanize(this.diff);

  if (!useColors) return;

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit')

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function(match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console
    && console.log
    && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch(e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  try {
    return exports.storage.debug;
  } catch(e) {}

  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  if (typeof process !== 'undefined' && 'env' in process) {
    return process.env.DEBUG;
  }
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

exports.enable(load());

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */

var tty = __webpack_require__(46);
var util = __webpack_require__(3);

/**
 * This is the Node.js implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__(11);
exports.init = init;
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;

/**
 * Colors.
 */

exports.colors = [6, 2, 3, 4, 5, 1];

/**
 * Build up the default `inspectOpts` object from the environment variables.
 *
 *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
 */

exports.inspectOpts = Object.keys(process.env).filter(function (key) {
  return /^debug_/i.test(key);
}).reduce(function (obj, key) {
  // camel-case
  var prop = key
    .substring(6)
    .toLowerCase()
    .replace(/_([a-z])/, function (_, k) { return k.toUpperCase() });

  // coerce string value into JS value
  var val = process.env[key];
  if (/^(yes|on|true|enabled)$/i.test(val)) val = true;
  else if (/^(no|off|false|disabled)$/i.test(val)) val = false;
  else if (val === 'null') val = null;
  else val = Number(val);

  obj[prop] = val;
  return obj;
}, {});

/**
 * The file descriptor to write the `debug()` calls to.
 * Set the `DEBUG_FD` env variable to override with another value. i.e.:
 *
 *   $ DEBUG_FD=3 node script.js 3>debug.log
 */

var fd = parseInt(process.env.DEBUG_FD, 10) || 2;

if (1 !== fd && 2 !== fd) {
  util.deprecate(function(){}, 'except for stderr(2) and stdout(1), any other usage of DEBUG_FD is deprecated. Override debug.log if you want to use a different log function (https://git.io/debug_fd)')()
}

var stream = 1 === fd ? process.stdout :
             2 === fd ? process.stderr :
             createWritableStdioStream(fd);

/**
 * Is stdout a TTY? Colored output is enabled when `true`.
 */

function useColors() {
  return 'colors' in exports.inspectOpts
    ? Boolean(exports.inspectOpts.colors)
    : tty.isatty(fd);
}

/**
 * Map %o to `util.inspect()`, all on a single line.
 */

exports.formatters.o = function(v) {
  this.inspectOpts.colors = this.useColors;
  return util.inspect(v, this.inspectOpts)
    .replace(/\s*\n\s*/g, ' ');
};

/**
 * Map %o to `util.inspect()`, allowing multiple lines if needed.
 */

exports.formatters.O = function(v) {
  this.inspectOpts.colors = this.useColors;
  return util.inspect(v, this.inspectOpts);
};

/**
 * Adds ANSI color escape codes if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var name = this.namespace;
  var useColors = this.useColors;

  if (useColors) {
    var c = this.color;
    var prefix = '  \u001b[3' + c + ';1m' + name + ' ' + '\u001b[0m';

    args[0] = prefix + args[0].split('\n').join('\n' + prefix);
    args.push('\u001b[3' + c + 'm+' + exports.humanize(this.diff) + '\u001b[0m');
  } else {
    args[0] = new Date().toUTCString()
      + ' ' + name + ' ' + args[0];
  }
}

/**
 * Invokes `util.format()` with the specified arguments and writes to `stream`.
 */

function log() {
  return stream.write(util.format.apply(util, arguments) + '\n');
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  if (null == namespaces) {
    // If you set a process.env field to null or undefined, it gets cast to the
    // string 'null' or 'undefined'. Just delete instead.
    delete process.env.DEBUG;
  } else {
    process.env.DEBUG = namespaces;
  }
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  return process.env.DEBUG;
}

/**
 * Copied from `node/src/node.js`.
 *
 * XXX: It's lame that node doesn't expose this API out-of-the-box. It also
 * relies on the undocumented `tty_wrap.guessHandleType()` which is also lame.
 */

function createWritableStdioStream (fd) {
  var stream;
  var tty_wrap = process.binding('tty_wrap');

  // Note stream._type is used for test-module-load-list.js

  switch (tty_wrap.guessHandleType(fd)) {
    case 'TTY':
      stream = new tty.WriteStream(fd);
      stream._type = 'tty';

      // Hack to have stream not keep the event loop alive.
      // See https://github.com/joyent/node/issues/1726
      if (stream._handle && stream._handle.unref) {
        stream._handle.unref();
      }
      break;

    case 'FILE':
      var fs = __webpack_require__(10);
      stream = new fs.SyncWriteStream(fd, { autoClose: false });
      stream._type = 'fs';
      break;

    case 'PIPE':
    case 'TCP':
      var net = __webpack_require__(44);
      stream = new net.Socket({
        fd: fd,
        readable: false,
        writable: true
      });

      // FIXME Should probably have an option in net.Socket to create a
      // stream from an existing fd which is writable only. But for now
      // we'll just add this hack and set the `readable` member to false.
      // Test: ./node test/fixtures/echo.js < /etc/passwd
      stream.readable = false;
      stream.read = null;
      stream._type = 'pipe';

      // FIXME Hack to have stream not keep the event loop alive.
      // See https://github.com/joyent/node/issues/1726
      if (stream._handle && stream._handle.unref) {
        stream._handle.unref();
      }
      break;

    default:
      // Probably an error on in uv_guess_handle()
      throw new Error('Implement me. Unknown stream file type!');
  }

  // For supporting legacy API we put the FD here.
  stream.fd = fd;

  stream._isStdio = true;

  return stream;
}

/**
 * Init logic for `debug` instances.
 *
 * Create a new `inspectOpts` object in case `useColors` is set
 * differently for a particular `debug` instance.
 */

function init (debug) {
  debug.inspectOpts = util._extend({}, exports.inspectOpts);
}

/**
 * Enable namespaces listed in `process.env.DEBUG` initially.
 */

exports.enable(load());


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var clone = __webpack_require__(17);

module.exports = function(options, defaults) {
  options = options || {};

  Object.keys(defaults).forEach(function(key) {
    if (typeof options[key] === 'undefined') {
      options[key] = clone(defaults[key]);
    }
  });

  return options;
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__dirname) {var fs = __webpack_require__(10)
var path = __webpack_require__(14)

var pathFile = path.join(__dirname, 'path.txt')

if (fs.existsSync(pathFile)) {
  module.exports = path.join(__dirname, fs.readFileSync(pathFile, 'utf-8'))
} else {
  throw new Error('Electron failed to install correctly, please delete node_modules/' + path.basename(__dirname) + ' and try installing again')
}

/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 22 */
/***/ (function(module, exports) {


/**
 * Export `source`
 */

module.exports = source;

/**
 * Get inner `fn` source.
 *
 * @param {Function|String} fn
 * @return {String}
 * @api public
 */

function source(fn){
  var match = /^function *\S*? *\([^)]*\) *{([\S\s]*)}$/.exec(String(fn))
  if (!match) return '';
  var space = /^\n*(\s*)/.exec(match[1])[1];
  var expr = new RegExp('^' + space, 'gm');
  return match[1].replace(expr, '');
}


/***/ }),
/* 23 */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),
/* 24 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;/*! http://mths.be/jsesc v0.5.0 by @mathias */
;(function(root) {

	// Detect free variables `exports`
	var freeExports = typeof exports == 'object' && exports;

	// Detect free variable `module`
	var freeModule = typeof module == 'object' && module &&
		module.exports == freeExports && module;

	// Detect free variable `global`, from Node.js or Browserified code,
	// and use it as `root`
	var freeGlobal = typeof global == 'object' && global;
	if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
		root = freeGlobal;
	}

	/*--------------------------------------------------------------------------*/

	var object = {};
	var hasOwnProperty = object.hasOwnProperty;
	var forOwn = function(object, callback) {
		var key;
		for (key in object) {
			if (hasOwnProperty.call(object, key)) {
				callback(key, object[key]);
			}
		}
	};

	var extend = function(destination, source) {
		if (!source) {
			return destination;
		}
		forOwn(source, function(key, value) {
			destination[key] = value;
		});
		return destination;
	};

	var forEach = function(array, callback) {
		var length = array.length;
		var index = -1;
		while (++index < length) {
			callback(array[index]);
		}
	};

	var toString = object.toString;
	var isArray = function(value) {
		return toString.call(value) == '[object Array]';
	};
	var isObject = function(value) {
		// This is a very simple check, but it’s good enough for what we need.
		return toString.call(value) == '[object Object]';
	};
	var isString = function(value) {
		return typeof value == 'string' ||
			toString.call(value) == '[object String]';
	};
	var isFunction = function(value) {
		// In a perfect world, the `typeof` check would be sufficient. However,
		// in Chrome 1–12, `typeof /x/ == 'object'`, and in IE 6–8
		// `typeof alert == 'object'` and similar for other host objects.
		return typeof value == 'function' ||
			toString.call(value) == '[object Function]';
	};

	/*--------------------------------------------------------------------------*/

	// http://mathiasbynens.be/notes/javascript-escapes#single
	var singleEscapes = {
		'"': '\\"',
		'\'': '\\\'',
		'\\': '\\\\',
		'\b': '\\b',
		'\f': '\\f',
		'\n': '\\n',
		'\r': '\\r',
		'\t': '\\t'
		// `\v` is omitted intentionally, because in IE < 9, '\v' == 'v'.
		// '\v': '\\x0B'
	};
	var regexSingleEscape = /["'\\\b\f\n\r\t]/;

	var regexDigit = /[0-9]/;
	var regexWhitelist = /[ !#-&\(-\[\]-~]/;

	var jsesc = function(argument, options) {
		// Handle options
		var defaults = {
			'escapeEverything': false,
			'quotes': 'single',
			'wrap': false,
			'es6': false,
			'json': false,
			'compact': true,
			'indent': '\t',
			'__indent__': ''
		};
		var json = options && options.json;
		if (json) {
			defaults.quotes = 'double';
			defaults.wrap = true;
		}
		options = extend(defaults, options);
		if (options.quotes != 'single' && options.quotes != 'double') {
			options.quotes = 'single';
		}
		var quote = options.quotes == 'double' ? '"' : '\'';
		var compact = options.compact;
		var indent = options.indent;
		var oldIndent;
		var newLine = compact ? '' : '\n';
		var result;
		var isEmpty = true;

		if (json && argument && isFunction(argument.toJSON)) {
			argument = argument.toJSON();
		}

		if (!isString(argument)) {
			if (isArray(argument)) {
				result = [];
				options.wrap = true;
				oldIndent = options.__indent__;
				indent += oldIndent;
				options.__indent__ = indent;
				forEach(argument, function(value) {
					isEmpty = false;
					result.push(
						(compact ? '' : indent) +
						jsesc(value, options)
					);
				});
				if (isEmpty) {
					return '[]';
				}
				return '[' + newLine + result.join(',' + newLine) + newLine +
					(compact ? '' : oldIndent) + ']';
			} else if (!isObject(argument)) {
				if (json) {
					// For some values (e.g. `undefined`, `function` objects),
					// `JSON.stringify(value)` returns `undefined` (which isn’t valid
					// JSON) instead of `'null'`.
					return JSON.stringify(argument) || 'null';
				}
				return String(argument);
			} else { // it’s an object
				result = [];
				options.wrap = true;
				oldIndent = options.__indent__;
				indent += oldIndent;
				options.__indent__ = indent;
				forOwn(argument, function(key, value) {
					isEmpty = false;
					result.push(
						(compact ? '' : indent) +
						jsesc(key, options) + ':' +
						(compact ? '' : ' ') +
						jsesc(value, options)
					);
				});
				if (isEmpty) {
					return '{}';
				}
				return '{' + newLine + result.join(',' + newLine) + newLine +
					(compact ? '' : oldIndent) + '}';
			}
		}

		var string = argument;
		// Loop over each code unit in the string and escape it
		var index = -1;
		var length = string.length;
		var first;
		var second;
		var codePoint;
		result = '';
		while (++index < length) {
			var character = string.charAt(index);
			if (options.es6) {
				first = string.charCodeAt(index);
				if ( // check if it’s the start of a surrogate pair
					first >= 0xD800 && first <= 0xDBFF && // high surrogate
					length > index + 1 // there is a next code unit
				) {
					second = string.charCodeAt(index + 1);
					if (second >= 0xDC00 && second <= 0xDFFF) { // low surrogate
						// http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
						codePoint = (first - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
						result += '\\u{' + codePoint.toString(16).toUpperCase() + '}';
						index++;
						continue;
					}
				}
			}
			if (!options.escapeEverything) {
				if (regexWhitelist.test(character)) {
					// It’s a printable ASCII character that is not `"`, `'` or `\`,
					// so don’t escape it.
					result += character;
					continue;
				}
				if (character == '"') {
					result += quote == character ? '\\"' : character;
					continue;
				}
				if (character == '\'') {
					result += quote == character ? '\\\'' : character;
					continue;
				}
			}
			if (
				character == '\0' &&
				!json &&
				!regexDigit.test(string.charAt(index + 1))
			) {
				result += '\\0';
				continue;
			}
			if (regexSingleEscape.test(character)) {
				// no need for a `hasOwnProperty` check here
				result += singleEscapes[character];
				continue;
			}
			var charCode = character.charCodeAt(0);
			var hexadecimal = charCode.toString(16).toUpperCase();
			var longhand = hexadecimal.length > 2 || json;
			var escaped = '\\' + (longhand ? 'u' : 'x') +
				('0000' + hexadecimal).slice(longhand ? -4 : -2);
			result += escaped;
			continue;
		}
		if (options.wrap) {
			result = quote + result + quote;
		}
		return result;
	};

	jsesc.version = '0.5.0';

	/*--------------------------------------------------------------------------*/

	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		true
	) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return jsesc;
		}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}	else if (freeExports && !freeExports.nodeType) {
		if (freeModule) { // in Node.js or RingoJS v0.8.0+
			freeModule.exports = jsesc;
		} else { // in Narwhal or RingoJS v0.7.0-
			freeExports.jsesc = jsesc;
		}
	} else { // in Rhino or a web browser
		root.jsesc = jsesc;
	}

}(this));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(40)(module)))

/***/ }),
/* 26 */
/***/ (function(module, exports) {


/**
 * Expose `render()`.`
 */

exports = module.exports = render;

/**
 * Expose `compile()`.
 */

exports.compile = compile;

/**
 * Render the given mustache `str` with `obj`.
 *
 * @param {String} str
 * @param {Object} obj
 * @return {String}
 * @api public
 */

function render(str, obj) {
  obj = obj || {};
  var fn = compile(str);
  return fn(obj);
}

/**
 * Compile the given `str` to a `Function`.
 *
 * @param {String} str
 * @return {Function}
 * @api public
 */

function compile(str) {
  var js = [];
  var toks = parse(str);
  var tok;

  for (var i = 0; i < toks.length; ++i) {
    tok = toks[i];
    if (i % 2 == 0) {
      js.push('"' + tok.replace(/"/g, '\\"') + '"');
    } else {
      switch (tok[0]) {
        case '/':
          tok = tok.slice(1);
          js.push(' }) + ');
          break;
        case '^':
          tok = tok.slice(1);
          assertProperty(tok);
          js.push(' + section(obj, "' + tok + '", true, function(obj){ return ');
          break;
        case '#':
          tok = tok.slice(1);
          assertProperty(tok);
          js.push(' + section(obj, "' + tok + '", false, function(obj){ return ');
          break;
        case '!':
          tok = tok.slice(1);
          assertProperty(tok);
          js.push(' + obj.' + tok + ' + ');
          break;
        default:
          assertProperty(tok);
          js.push(' + escape(obj.' + tok + ') + ');
      }
    }
  }

  js = '\n'
    + indent(escape.toString()) + ';\n\n'
    + indent(section.toString()) + ';\n\n'
    + '  return ' + js.join('').replace(/\n/g, '\\n');

  return new Function('obj', js);
}

/**
 * Assert that `prop` is a valid property.
 *
 * @param {String} prop
 * @api private
 */

function assertProperty(prop) {
  if (!prop.match(/^[\w.]+$/)) throw new Error('invalid property "' + prop + '"');
}

/**
 * Parse `str`.
 *
 * @param {String} str
 * @return {Array}
 * @api private
 */

function parse(str) {
  return str.split(/\{\{|\}\}/);
}

/**
 * Indent `str`.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */

function indent(str) {
  return str.replace(/^/gm, '  ');
}

/**
 * Section handler.
 *
 * @param {Object} context obj
 * @param {String} prop
 * @param {Function} thunk
 * @param {Boolean} negate
 * @api private
 */

function section(obj, prop, negate, thunk) {
  var val = obj[prop];
  if (Array.isArray(val)) return val.map(thunk).join('');
  if ('function' == typeof val) return val.call(obj, thunk(obj));
  if (negate) val = !val;
  if (val) return thunk(obj);
  return '';
}

/**
 * Escape the given `html`.
 *
 * @param {String} html
 * @return {String}
 * @api private
 */

function escape(html) {
  return String(html)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}


/***/ }),
/* 27 */
/***/ (function(module, exports) {

/**
 * Helpers.
 */

var s = 1000
var m = s * 60
var h = m * 60
var d = h * 24
var y = d * 365.25

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} options
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function (val, options) {
  options = options || {}
  var type = typeof val
  if (type === 'string' && val.length > 0) {
    return parse(val)
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ?
			fmtLong(val) :
			fmtShort(val)
  }
  throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val))
}

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str)
  if (str.length > 10000) {
    return
  }
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str)
  if (!match) {
    return
  }
  var n = parseFloat(match[1])
  var type = (match[2] || 'ms').toLowerCase()
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y
    case 'days':
    case 'day':
    case 'd':
      return n * d
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n
    default:
      return undefined
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  if (ms >= d) {
    return Math.round(ms / d) + 'd'
  }
  if (ms >= h) {
    return Math.round(ms / h) + 'h'
  }
  if (ms >= m) {
    return Math.round(ms / m) + 'm'
  }
  if (ms >= s) {
    return Math.round(ms / s) + 's'
  }
  return ms + 'ms'
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  return plural(ms, d, 'day') ||
    plural(ms, h, 'hour') ||
    plural(ms, m, 'minute') ||
    plural(ms, s, 'second') ||
    ms + ' ms'
}

/**
 * Pluralization helper.
 */

function plural(ms, n, name) {
  if (ms < n) {
    return
  }
  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name
  }
  return Math.ceil(ms / n) + ' ' + name + 's'
}


/***/ }),
/* 28 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 28;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module Dependencies
 */

var debug = __webpack_require__(0)('nightmare:actions');
var sliced = __webpack_require__(9);
var jsesc = __webpack_require__(25);
var isArray = Array.isArray;
var once = __webpack_require__(12);
var fs = __webpack_require__(10);
var keys = Object.keys;

/**
 * Get the version info for Nightmare, Electron and Chromium.
 * @param {Function} done
 */
exports.engineVersions = function(done){
  debug('.engineVersions()');
  done(null, this.engineVersions);
};

/**
 * Get the title of the page.
 *
 * @param {Function} done
 */

exports.title = function(done) {
  debug('.title() getting it');
  this.evaluate_now(function() {
    return document.title;
  }, done);
};

/**
 * Get the url of the page.
 *
 * @param {Function} done
 */

exports.url = function(done) {
  debug('.url() getting it');
  this.evaluate_now(function() {
    return document.location.href;
  }, done);
};

/**
 * Get the path of the page.
 *
 * @param {Function} done
 */

exports.path = function(done) {
  debug('.path() getting it');
  this.evaluate_now(function() {
    return document.location.pathname;
  }, done);
};

/**
 * Determine if a selector is visible on a page.
 *
 * @param {String} selector
 * @param {Function} done
 */

exports.visible = function(selector, done) {
  debug('.visible() for ' + selector);
  this.evaluate_now(function(selector) {
    var elem = document.querySelector(selector);
    if (elem) return (elem.offsetWidth > 0 && elem.offsetHeight > 0);
    else return false;
  }, done, selector);
};

/**
 * Determine if a selector exists on a page.
 *
 * @param {String} selector
 * @param {Function} done
 */

exports.exists = function(selector, done) {
  debug('.exists() for ' + selector);
  this.evaluate_now(function(selector) {
    return (document.querySelector(selector)!==null);
  }, done, selector);
};

/**
 * Click an element.
 *
 * @param {String} selector
 * @param {Function} done
 */

exports.click = function(selector, done) {
  debug('.click() on ' + selector);
  this.evaluate_now(function (selector) {
    document.activeElement.blur();
    var element = document.querySelector(selector);
    if (!element) {
      throw new Error('Unable to find element by selector: ' + selector);
    }
    var event = document.createEvent('MouseEvent');
    event.initEvent('click', true, true);
    element.dispatchEvent(event);
  }, done, selector);
};

/**
 * Mousedown on an element.
 *
 * @param {String} selector
 * @param {Function} done
 */

exports.mousedown = function(selector, done) {
  debug('.mousedown() on ' + selector);
  this.evaluate_now(function (selector) {
    var element = document.querySelector(selector);
    if (!element) {
      throw new Error('Unable to find element by selector: ' + selector);
    }
    var event = document.createEvent('MouseEvent');
    event.initEvent('mousedown', true, true);
    element.dispatchEvent(event);
  }, done, selector);
};

/**
 * Mouseup on an element.
 *
 * @param {String} selector
 * @param {Function} done
 */

exports.mouseup = function(selector, done) {
  debug('.mouseup() on ' + selector);
  this.evaluate_now(function (selector) {
    var element = document.querySelector(selector);
    if (!element) {
      throw new Error('Unable to find element by selector: ' + selector);
    }
    var event = document.createEvent('MouseEvent');
    event.initEvent('mouseup', true, true);
    element.dispatchEvent(event);
  }, done, selector);
};

/**
 * Hover over an element.
 *
 * @param {String} selector
 * @param {Function} done
 */

exports.mouseover = function(selector, done) {
  debug('.mouseover() on ' + selector);
  this.evaluate_now(function (selector) {
    var element = document.querySelector(selector);
    if (!element) {
      throw new Error('Unable to find element by selector: ' + selector);
    }
    var event = document.createEvent('MouseEvent');
    event.initMouseEvent('mouseover', true, true);
    element.dispatchEvent(event);
  }, done, selector);
};

/**
 * Helper functions for type() and insert() to focus/blur
 * so that we trigger DOM events.
 */

var focusSelector = function(done, selector) {
  return this.evaluate_now(function(selector) {
    document.querySelector(selector).focus();
  }, done.bind(this), selector);
};

var blurSelector = function(done, selector) {
  return this.evaluate_now(function(selector) {
    //it is possible the element has been removed from the DOM
    //between the action and the call to blur the element
    var element = document.querySelector(selector);
    if(element) {
      element.blur()
    }
  }, done.bind(this), selector);
};

/**
 * Type into an element.
 *
 * @param {String} selector
 * @param {String} text
 * @param {Function} done
 */

exports.type = function() {
  var selector = arguments[0], text, done;
  if(arguments.length == 2) {
    done = arguments[1];
  } else {
    text = arguments[1];
    done = arguments[2];
  }

  debug('.type() %s into %s', text, selector);
  var self = this;

  focusSelector.bind(this)(function(err) {
    if(err) {
      debug('Unable to .type() into non-existent selector %s', selector);
      return done(err);
    }

    var blurDone = blurSelector.bind(this, done, selector);
    if ((text || '') == '') {
      this.evaluate_now(function(selector) {
        document.querySelector(selector).value = '';
      }, blurDone, selector);
    } else {
      self.child.call('type', text, blurDone);
    }
  }, selector);
};

/**
 * Insert text
 *
 * @param {String} selector
 * @param {String} text
 * @param {Function} done
 */

exports.insert = function(selector, text, done) {
  if (arguments.length === 2) {
    done = text
    text = null
  }

  debug('.insert() %s into %s', text, selector);
  var child = this.child;

  focusSelector.bind(this)(function(err) {
    if(err) {
      debug('Unable to .insert() into non-existent selector %s', selector);
      return done(err);
    }
    
    var blurDone = blurSelector.bind(this, done, selector);
    if ((text || '') == '') {
      this.evaluate_now(function(selector) {
        document.querySelector(selector).value = '';
      }, blurDone, selector);
    } else {
      child.call('insert', text, blurDone);
    }
  }, selector);
}

/**
 * Check a checkbox, fire change event
 *
 * @param {String} selector
 * @param {Function} done
 */

exports.check = function(selector, done) {
  debug('.check() ' + selector);
  this.evaluate_now(function(selector) {
    var element = document.querySelector(selector);
    var event = document.createEvent('HTMLEvents');
    element.checked = true;
    event.initEvent('change', true, true);
    element.dispatchEvent(event);
  }, done, selector);
};

/*
 * Uncheck a checkbox, fire change event
 *
 * @param {String} selector
 * @param {Function} done
 */

exports.uncheck = function(selector, done){
  debug('.uncheck() ' + selector);
  this.evaluate_now(function(selector) {
      var element = document.querySelector(selector);
      var event = document.createEvent('HTMLEvents');
      element.checked = null;
      event.initEvent('change', true, true);
      element.dispatchEvent(event);
    }, done, selector);
};

/**
 * Choose an option from a select dropdown
 *
 *
 *
 * @param {String} selector
 * @param {String} option value
 * @param {Function} done
 */

exports.select = function(selector, option, done) {
  debug('.select() ' + selector);
  this.evaluate_now(function(selector, option) {
    var element = document.querySelector(selector);
    var event = document.createEvent('HTMLEvents');
    element.value = option;
    event.initEvent('change', true, true);
    element.dispatchEvent(event);
  }, done, selector, option);
};

/**
 * Go back to previous url.
 *
 * @param {Function} done
 */

exports.back = function(done) {
  debug('.back()');
  this.evaluate_now(function() {
    window.history.back();
  }, done);
};

/**
 * Go forward to previous url.
 *
 * @param {Function} done
 */

exports.forward = function(done) {
  debug('.forward()');
  this.evaluate_now(function() {
    window.history.forward();
  }, done);
};

/**
 * Refresh the current page.
 *
 * @param {Function} done
 */

exports.refresh = function(done) {
  debug('.refresh()');
  this.evaluate_now(function() {
    window.location.reload();
  }, done);
};

/**
 * Wait
 *
 * @param {...} args
 */

exports.wait = function () {
  var args = sliced(arguments);
  var done = args[args.length-1];
  if (args.length < 2) {
    debug('Not enough arguments for .wait()');
    return done();
  }

  var arg = args[0];
  if (typeof arg === 'number') {
    debug('.wait() for ' + arg + 'ms');
    if(arg < this.options.waitTimeout){
      waitms(arg, done);
    } else {
      waitms(this.options.waitTimeout, function(){
        done(new Error('.wait() timed out after '+this.options.waitTimeout+'msec'));
      }.bind(this));
    }
  }
  else if (typeof arg === 'string') {
    var timeout = null;
    if (typeof args[1] === 'number') {
      timeout = args[1];
    }
    debug('.wait() for '+arg+' element'+(timeout ? ' or '+timeout+'msec' : ''));
    waitelem.apply({ timeout: timeout }, [this, arg, done]);
  }
  else if (typeof arg === 'function') {
    debug('.wait() for fn');
    args.unshift(this);
    waitfn.apply(this, args);
  }
  else {
    done();
  }
};

/**
 * Wait for a specififed amount of time.
 *
 * @param {Number} ms
 * @param {Function} done
 */

function waitms (ms, done) {
  setTimeout(done, ms);
}

/**
 * Wait for a specified selector to exist.
 *
 * @param {Nightmare} self
 * @param {String} selector
 * @param {Function} done
 */

function waitelem (self, selector, done) {
  var elementPresent;
  eval("elementPresent = function() {"+
      "  var element = document.querySelector('"+jsesc(selector)+"');"+
      "  return (element ? true : false);" +
      "};");
  waitfn.apply(this, [self, elementPresent, done]);
}

/**
 * Wait until evaluated function returns true.
 *
 * @param {Nightmare} self
 * @param {Function} fn
 * @param {...} args
 * @param {Function} done
 */

function waitfn() {
  var softTimeout = this.timeout || null;
  var executionTimer;
  var softTimeoutTimer;
  var self = arguments[0];
  
  var args = sliced(arguments);
  var done = args[args.length-1];
  
  var timeoutTimer = setTimeout(function(){
    clearTimeout(executionTimer);
    clearTimeout(softTimeoutTimer);
    done(new Error(`.wait() timed out after ${self.options.waitTimeout}msec`));
  }, self.options.waitTimeout);
  return tick.apply(this, arguments)

  function tick (self, fn/**, arg1, arg2..., done**/) {
    if(softTimeout){
      softTimeoutTimer = setTimeout(function(){
        clearTimeout(executionTimer);
        clearTimeout(timeoutTimer);
        done();
      }, softTimeout)
    }

    var waitDone = function (err, result) {
      if (result) {
        clearTimeout(timeoutTimer);
        clearTimeout(softTimeoutTimer);
        return done();
      } else if(err) {
        clearTimeout(timeoutTimer);
        clearTimeout(softTimeoutTimer);
        return done(err);
      }
      else {
        executionTimer = setTimeout(function () {
          tick.apply(self, args);
        }, self.options.pollInterval);
      }
    };
    var newArgs = [fn, waitDone].concat(args.slice(2,-1));
    self.evaluate_now.apply(self, newArgs);
  }
}

/**
 * Execute a function on the page.
 *
 * @param {Function} fn
 * @param {...} args
 * @param {Function} done
 */

exports.evaluate = function (fn/**, arg1, arg2..., done**/) {
  var args = sliced(arguments);
  var done = args[args.length-1];
  var self = this;
  var newDone = function(){
    clearTimeout(timeoutTimer);
    done.apply(self, arguments);
  };
  var newArgs = [fn, newDone].concat(args.slice(1,-1));
  if (typeof fn !== 'function') {
    return done(new Error('.evaluate() fn should be a function'));
  }
  debug('.evaluate() fn on the page');
  var timeoutTimer = setTimeout(function(){
    done(new Error(`Evaluation timed out after ${self.options.executionTimeout}msec.  Are you calling done() or resolving your promises?`));
  }, self.options.executionTimeout);
  this.evaluate_now.apply(this, newArgs);
};

/**
 * Inject a JavaScript or CSS file onto the page
 *
 * @param {String} type
 * @param {String} file
 * @param {Function} done
 */

exports.inject = function (type, file, done) {
  debug('.inject()-ing a file');
  if (type === 'js') {
    var js = fs.readFileSync(file, { encoding: 'utf-8' });
    this._inject(js, done);
  }
  else if (type === 'css') {
    var css = fs.readFileSync(file, { encoding: 'utf-8' });
    this.child.call('css', css, done);
  }
  else {
    debug('unsupported file type in .inject()');
    done();
  }
};

/**
 * Set the viewport.
 *
 * @param {Number} width
 * @param {Number} height
 * @param {Function} done
 */

exports.viewport = function (width, height, done) {
  debug('.viewport()');
  this.child.call('size', width, height, done);
};

/**
 * Set the useragent.
 *
 * @param {String} useragent
 * @param {Function} done
 */

exports.useragent = function(useragent, done) {
  debug('.useragent() to ' + useragent);
  this.child.call('useragent', useragent, done);
};

/**
 * Set the scroll position.
 *
 * @param {Number} x
 * @param {Number} y
 * @param {Function} done
 */

exports.scrollTo = function (y, x, done) {
  debug('.scrollTo()');
  this.evaluate_now(function (y, x) {
    window.scrollTo(x, y);
  }, done, y, x);
};

/**
 * Take a screenshot.
 *
 * @param {String} path
 * @param {Object} clip
 * @param {Function} done
 */

exports.screenshot = function (path, clip, done) {
  debug('.screenshot()');
  if (typeof path === 'function') {
    done = path;
    clip = undefined;
    path = undefined;
  } else if (typeof clip === 'function') {
    done = clip;
    clip = (typeof path === 'string') ? undefined : path;
    path = (typeof path === 'string') ? path : undefined;
  }
  this.child.call('screenshot', path, clip, function (error, img) {
    var buf = new Buffer(img.data);
    debug('.screenshot() captured with length %s', buf.length);
    path ? fs.writeFile(path, buf, done) : done(null, buf);
  });
};

/**
 * Save the current file as html to disk.
 *
 * @param {String} path the full path to the file to save to
 * @param {String} saveType
 * @param {Function} done
 */

exports.html = function (path, saveType, done) {
  debug('.html()');
  if (typeof path === 'function' && !saveType && !done) {
    done = path;
    saveType = undefined;
    path = undefined;
  } else if (typeof path === 'object' && typeof saveType === 'function' && !done) {
    done = saveType;
    saveType = path;
    path = undefined;
  } else if (typeof saveType === 'function' && !done) {
    done = saveType;
    saveType = undefined;
  }
  this.child.call('html', path, saveType, function (error) {
    if (error) debug(error);
    done(error);
  });
}

/**
 * Take a pdf.
 *
 * @param {String} path
 * @param {Function} done
 */

exports.pdf = function (path, options, done) {
  debug('.pdf()');
  if (typeof path === 'function' && !options && !done) {
    done = path;
    options = undefined;
    path = undefined;
  } else if (typeof path === 'object' && typeof options === 'function' && !done){
    done = options;
    options = path;
    path = undefined;
  } else if (typeof options === 'function' && !done) {
    done = options;
    options = undefined;
  }
  this.child.call('pdf', path, options, function (error, pdf) {
    if (error) debug(error);
    var buf = new Buffer(pdf.data);
    debug('.pdf() captured with length %s', buf.length);
    path ? fs.writeFile(path, buf, done) : done(null, buf);
  });
};

/**
 * Get and set cookies
 *
 * @param {String} name
 * @param {Mixed} value (optional)
 * @param {Function} done
 */

exports.cookies = {};

/**
 * Get a cookie
 */

exports.cookies.get = function (name, done) {
  debug('cookies.get()')
  var query = {}

  switch (arguments.length) {
    case 2:
      query = typeof name === 'string'
        ? { name: name }
        : name
      break;
    case 1:
      done = name
      break;
  }

  this.child.call('cookie.get', query, done);
};

/**
 * Set a cookie
 */

exports.cookies.set = function (name, value, done) {
  debug('cookies.set()')
  var cookies = []

  switch (arguments.length) {
    case 3:
      cookies.push({
        name: name,
        value: value
      })
      break;
    case 2:
      cookies = [].concat(name)
      done = value
      break;
    case 1:
      done = name
      break;
  }

  this.child.call('cookie.set', cookies, done);
};

/**
 * Clear a cookie
 */

exports.cookies.clear = function (name, done) {
  debug('cookies.clear()')
  var cookies = []

  switch (arguments.length) {
    case 2:
      cookies = [].concat(name);
      break;
    case 1:
      done = name;
      break;
  }

  this.child.call('cookie.clear', cookies, done);
};

/**
 * Clear all cookies
 */

exports.cookies.clearAll = function(done){
  this.child.call('cookie.clearAll', done);
};

/**
 * Authentication
 */

 exports.authentication = function (login, password, done) {
   debug('.authentication()');
   this.child.call('authentication', login, password, done);
 };


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Module dependencies
 */

var Emitter = __webpack_require__(6).EventEmitter;
var sliced = __webpack_require__(9);
var debug = __webpack_require__(0)('nightmare:ipc');

// If this process has a parent, redirect debug logs to it
if (process.send) {
  debug = function() {
    process.send(['nightmare:ipc:debug'].concat(sliced(arguments)));
  };
}

/**
 * Export `IPC`
 */

module.exports = IPC;

/**
 * Initialize `IPC`
 */

var instance = Symbol();
function IPC(process) {
  if (process[instance]) {
    return process[instance];
  }

  var emitter = process[instance] = new Emitter();
  var emit = emitter.emit;
  var callId = 0;
  var responders = {};

  // no parent
  if (!process.send) {
    return emitter;
  }

  process.on('message', function(data) {
    // handle debug logging specially
    if (data[0] === 'nightmare:ipc:debug') {
      debug.apply(null, sliced(data, 1));
    }
    emit.apply(emitter, sliced(data));
  });

  emitter.emit = function() {
    if(process.connected){
      process.send(sliced(arguments));
    }
  };

  /**
   * Call a responder function in the associated process. (In the process,
   * responders can be registered with `ipc.respondTo()`.) The last argument
   * should be a callback function, which will called with the results of the
   * responder.
   * This returns an event emitter. You can listen for the results of the
   * responder using the `end` event (this is the same as passing a callback).
   * Additionally, you can listen for `data` events, which the responder may
   * send to indicate some sort of progress.
   * @param  {String} name Name of the responder function to call
   * @param  {...Objects} [arguments] Any number of arguments to send
   * @param  {Function} [callback] A callback function that handles the results
   * @return {Emitter}
   */
  emitter.call = function(name) {
    var args = sliced(arguments, 1);
    var callback = args.pop();
    if (typeof callback !== 'function') {
      args.push(callback);
      callback = undefined;
    }

    var id = callId++;
    var progress = new Emitter();

    emitter.on(`CALL_DATA_${id}`, function() {
      progress.emit.apply(progress, ['data'].concat(sliced(arguments)));
    });

    emitter.once(`CALL_RESULT_${id}`, function() {
      progress.emit.apply(progress, ['end'].concat(sliced(arguments)));
      emitter.removeAllListeners(`CALL_DATA_${id}`);
      progress.removeAllListeners();
      progress = undefined;
      if (callback) {
        callback.apply(null, arguments);
      }
    });

    emitter.emit.apply(emitter, ['CALL', id, name].concat(args));
    return progress;
  };

  /**
   * Register a responder to be called from other processes with `ipc.call()`.
   * The responder should be a function that accepts any number of arguments,
   * where the last argument is a callback function. When the responder has
   * finished its work, it MUST call the callback. The first argument should be
   * an error, if any, and the second should be the results.
   * Only one responder can be registered for a given name.
   * @param {String} name The name to register the responder under.
   * @param {Function} responder
   */
  emitter.respondTo = function(name, responder) {
    if (responders[name]) {
      debug(`Replacing responder named "${name}"`);
    }
    responders[name] = responder;
  };

  emitter.on('CALL', function(id, name) {
    var args = sliced(arguments, 2);
    var responder = responders[name];
    var done = function() {
      emitter.emit.apply(
        emitter, [`CALL_RESULT_${id}`].concat(sliced(arguments)));
    };
    done.progress = function() {
      emitter.emit.apply(
        emitter, [`CALL_DATA_${id}`].concat(sliced(arguments)));
    };
    if (!responder) {
      return done(`Nothing responds to "${name}"`);
    }
    try {
      responder.apply(null, sliced(arguments, 2).concat([done]));
    }
    catch (error) {
      done(error);
    }
  });

  return emitter;
}


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module Dependencies
 */

var minstache = __webpack_require__(26);

/**
 * Run the `src` function on the client-side, capture
 * the response and logs, and send back via
 * ipc to electron's main process
 */

var execute = `
(function javascript () {
  var ipc = (window.__nightmare ? __nightmare.ipc : window[''].nightmare.ipc);
  try {
    var fn = ({{!src}}), 
      response, 
      args = [];

    {{#args}}args.push({{!argument}});{{/args}}

    if(fn.length - 1 == args.length) {
      args.push(((err, v) => {
          if(err) {
            ipc.send('error', err.message || err.toString());
          }
          ipc.send('response', v);
        }));
      fn.apply(null, args);
    } 
    else {
      response = fn.apply(null, args);
      if(response && response.then) {
        response.then((v) => {
          ipc.send('response', v);
        })
        .catch((err) => {
          ipc.send('error', err)
        });
      } else {
        ipc.send('response', response);
      }
    }
  } catch (err) {
    ipc.send('error', err.message);
  }
})()
`;

/**
 * Inject the `src` on the client-side, capture
 * the response and logs, and send back via
 * ipc to electron's main process
 */

var inject = `
(function javascript () {
  var ipc = (window.__nightmare ? __nightmare.ipc : window[''].nightmare.ipc);
  try {
    var response = (function () { {{!src}} \n})()
    ipc.send('response', response);
  } catch (e) {
    ipc.send('error', e.message);
  }
})()
`;

/**
 * Export the templates
 */

exports.execute = minstache.compile(execute);
exports.inject = minstache.compile(inject);


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = Readable;

/*<replacement>*/
var processNextTick = __webpack_require__(8);
/*</replacement>*/

/*<replacement>*/
var isArray = __webpack_require__(24);
/*</replacement>*/

/*<replacement>*/
var Duplex;
/*</replacement>*/

Readable.ReadableState = ReadableState;

/*<replacement>*/
var EE = __webpack_require__(6).EventEmitter;

var EElistenerCount = function (emitter, type) {
  return emitter.listeners(type).length;
};
/*</replacement>*/

/*<replacement>*/
var Stream;
(function () {
  try {
    Stream = __webpack_require__(15);
  } catch (_) {} finally {
    if (!Stream) Stream = __webpack_require__(6).EventEmitter;
  }
})();
/*</replacement>*/

var Buffer = __webpack_require__(2).Buffer;
/*<replacement>*/
var bufferShim = __webpack_require__(7);
/*</replacement>*/

/*<replacement>*/
var util = __webpack_require__(4);
util.inherits = __webpack_require__(5);
/*</replacement>*/

/*<replacement>*/
var debugUtil = __webpack_require__(3);
var debug = void 0;
if (debugUtil && debugUtil.debuglog) {
  debug = debugUtil.debuglog('stream');
} else {
  debug = function () {};
}
/*</replacement>*/

var BufferList = __webpack_require__(35);
var StringDecoder;

util.inherits(Readable, Stream);

function prependListener(emitter, event, fn) {
  // Sadly this is not cacheable as some libraries bundle their own
  // event emitter implementation with them.
  if (typeof emitter.prependListener === 'function') {
    return emitter.prependListener(event, fn);
  } else {
    // This is a hack to make sure that our error handler is attached before any
    // userland ones.  NEVER DO THIS. This is here only because this code needs
    // to continue to work with older versions of Node.js that do not include
    // the prependListener() method. The goal is to eventually remove this hack.
    if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);else if (isArray(emitter._events[event])) emitter._events[event].unshift(fn);else emitter._events[event] = [fn, emitter._events[event]];
  }
}

function ReadableState(options, stream) {
  Duplex = Duplex || __webpack_require__(1);

  options = options || {};

  // object stream flag. Used to make read(n) ignore n and to
  // make all the buffer merging and length checks go away
  this.objectMode = !!options.objectMode;

  if (stream instanceof Duplex) this.objectMode = this.objectMode || !!options.readableObjectMode;

  // the point at which it stops calling _read() to fill the buffer
  // Note: 0 is a valid value, means "don't call _read preemptively ever"
  var hwm = options.highWaterMark;
  var defaultHwm = this.objectMode ? 16 : 16 * 1024;
  this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;

  // cast to ints.
  this.highWaterMark = ~ ~this.highWaterMark;

  // A linked list is used to store data chunks instead of an array because the
  // linked list can remove elements from the beginning faster than
  // array.shift()
  this.buffer = new BufferList();
  this.length = 0;
  this.pipes = null;
  this.pipesCount = 0;
  this.flowing = null;
  this.ended = false;
  this.endEmitted = false;
  this.reading = false;

  // a flag to be able to tell if the onwrite cb is called immediately,
  // or on a later tick.  We set this to true at first, because any
  // actions that shouldn't happen until "later" should generally also
  // not happen before the first write call.
  this.sync = true;

  // whenever we return null, then we set a flag to say
  // that we're awaiting a 'readable' event emission.
  this.needReadable = false;
  this.emittedReadable = false;
  this.readableListening = false;
  this.resumeScheduled = false;

  // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.
  this.defaultEncoding = options.defaultEncoding || 'utf8';

  // when piping, we only care about 'readable' events that happen
  // after read()ing all the bytes and not getting any pushback.
  this.ranOut = false;

  // the number of writers that are awaiting a drain event in .pipe()s
  this.awaitDrain = 0;

  // if true, a maybeReadMore has been scheduled
  this.readingMore = false;

  this.decoder = null;
  this.encoding = null;
  if (options.encoding) {
    if (!StringDecoder) StringDecoder = __webpack_require__(13).StringDecoder;
    this.decoder = new StringDecoder(options.encoding);
    this.encoding = options.encoding;
  }
}

function Readable(options) {
  Duplex = Duplex || __webpack_require__(1);

  if (!(this instanceof Readable)) return new Readable(options);

  this._readableState = new ReadableState(options, this);

  // legacy
  this.readable = true;

  if (options && typeof options.read === 'function') this._read = options.read;

  Stream.call(this);
}

// Manually shove something into the read() buffer.
// This returns true if the highWaterMark has not been hit yet,
// similar to how Writable.write() returns true if you should
// write() some more.
Readable.prototype.push = function (chunk, encoding) {
  var state = this._readableState;

  if (!state.objectMode && typeof chunk === 'string') {
    encoding = encoding || state.defaultEncoding;
    if (encoding !== state.encoding) {
      chunk = bufferShim.from(chunk, encoding);
      encoding = '';
    }
  }

  return readableAddChunk(this, state, chunk, encoding, false);
};

// Unshift should *always* be something directly out of read()
Readable.prototype.unshift = function (chunk) {
  var state = this._readableState;
  return readableAddChunk(this, state, chunk, '', true);
};

Readable.prototype.isPaused = function () {
  return this._readableState.flowing === false;
};

function readableAddChunk(stream, state, chunk, encoding, addToFront) {
  var er = chunkInvalid(state, chunk);
  if (er) {
    stream.emit('error', er);
  } else if (chunk === null) {
    state.reading = false;
    onEofChunk(stream, state);
  } else if (state.objectMode || chunk && chunk.length > 0) {
    if (state.ended && !addToFront) {
      var e = new Error('stream.push() after EOF');
      stream.emit('error', e);
    } else if (state.endEmitted && addToFront) {
      var _e = new Error('stream.unshift() after end event');
      stream.emit('error', _e);
    } else {
      var skipAdd;
      if (state.decoder && !addToFront && !encoding) {
        chunk = state.decoder.write(chunk);
        skipAdd = !state.objectMode && chunk.length === 0;
      }

      if (!addToFront) state.reading = false;

      // Don't add to the buffer if we've decoded to an empty string chunk and
      // we're not in object mode
      if (!skipAdd) {
        // if we want the data now, just emit it.
        if (state.flowing && state.length === 0 && !state.sync) {
          stream.emit('data', chunk);
          stream.read(0);
        } else {
          // update the buffer info.
          state.length += state.objectMode ? 1 : chunk.length;
          if (addToFront) state.buffer.unshift(chunk);else state.buffer.push(chunk);

          if (state.needReadable) emitReadable(stream);
        }
      }

      maybeReadMore(stream, state);
    }
  } else if (!addToFront) {
    state.reading = false;
  }

  return needMoreData(state);
}

// if it's past the high water mark, we can push in some more.
// Also, if we have no data yet, we can stand some
// more bytes.  This is to work around cases where hwm=0,
// such as the repl.  Also, if the push() triggered a
// readable event, and the user called read(largeNumber) such that
// needReadable was set, then we ought to push more, so that another
// 'readable' event will be triggered.
function needMoreData(state) {
  return !state.ended && (state.needReadable || state.length < state.highWaterMark || state.length === 0);
}

// backwards compatibility.
Readable.prototype.setEncoding = function (enc) {
  if (!StringDecoder) StringDecoder = __webpack_require__(13).StringDecoder;
  this._readableState.decoder = new StringDecoder(enc);
  this._readableState.encoding = enc;
  return this;
};

// Don't raise the hwm > 8MB
var MAX_HWM = 0x800000;
function computeNewHighWaterMark(n) {
  if (n >= MAX_HWM) {
    n = MAX_HWM;
  } else {
    // Get the next highest power of 2 to prevent increasing hwm excessively in
    // tiny amounts
    n--;
    n |= n >>> 1;
    n |= n >>> 2;
    n |= n >>> 4;
    n |= n >>> 8;
    n |= n >>> 16;
    n++;
  }
  return n;
}

// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function howMuchToRead(n, state) {
  if (n <= 0 || state.length === 0 && state.ended) return 0;
  if (state.objectMode) return 1;
  if (n !== n) {
    // Only flow one buffer at a time
    if (state.flowing && state.length) return state.buffer.head.data.length;else return state.length;
  }
  // If we're asking for more than the current hwm, then raise the hwm.
  if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
  if (n <= state.length) return n;
  // Don't have enough
  if (!state.ended) {
    state.needReadable = true;
    return 0;
  }
  return state.length;
}

// you can override either this method, or the async _read(n) below.
Readable.prototype.read = function (n) {
  debug('read', n);
  n = parseInt(n, 10);
  var state = this._readableState;
  var nOrig = n;

  if (n !== 0) state.emittedReadable = false;

  // if we're doing read(0) to trigger a readable event, but we
  // already have a bunch of data in the buffer, then just trigger
  // the 'readable' event and move on.
  if (n === 0 && state.needReadable && (state.length >= state.highWaterMark || state.ended)) {
    debug('read: emitReadable', state.length, state.ended);
    if (state.length === 0 && state.ended) endReadable(this);else emitReadable(this);
    return null;
  }

  n = howMuchToRead(n, state);

  // if we've ended, and we're now clear, then finish it up.
  if (n === 0 && state.ended) {
    if (state.length === 0) endReadable(this);
    return null;
  }

  // All the actual chunk generation logic needs to be
  // *below* the call to _read.  The reason is that in certain
  // synthetic stream cases, such as passthrough streams, _read
  // may be a completely synchronous operation which may change
  // the state of the read buffer, providing enough data when
  // before there was *not* enough.
  //
  // So, the steps are:
  // 1. Figure out what the state of things will be after we do
  // a read from the buffer.
  //
  // 2. If that resulting state will trigger a _read, then call _read.
  // Note that this may be asynchronous, or synchronous.  Yes, it is
  // deeply ugly to write APIs this way, but that still doesn't mean
  // that the Readable class should behave improperly, as streams are
  // designed to be sync/async agnostic.
  // Take note if the _read call is sync or async (ie, if the read call
  // has returned yet), so that we know whether or not it's safe to emit
  // 'readable' etc.
  //
  // 3. Actually pull the requested chunks out of the buffer and return.

  // if we need a readable event, then we need to do some reading.
  var doRead = state.needReadable;
  debug('need readable', doRead);

  // if we currently have less than the highWaterMark, then also read some
  if (state.length === 0 || state.length - n < state.highWaterMark) {
    doRead = true;
    debug('length less than watermark', doRead);
  }

  // however, if we've ended, then there's no point, and if we're already
  // reading, then it's unnecessary.
  if (state.ended || state.reading) {
    doRead = false;
    debug('reading or ended', doRead);
  } else if (doRead) {
    debug('do read');
    state.reading = true;
    state.sync = true;
    // if the length is currently zero, then we *need* a readable event.
    if (state.length === 0) state.needReadable = true;
    // call internal read method
    this._read(state.highWaterMark);
    state.sync = false;
    // If _read pushed data synchronously, then `reading` will be false,
    // and we need to re-evaluate how much data we can return to the user.
    if (!state.reading) n = howMuchToRead(nOrig, state);
  }

  var ret;
  if (n > 0) ret = fromList(n, state);else ret = null;

  if (ret === null) {
    state.needReadable = true;
    n = 0;
  } else {
    state.length -= n;
  }

  if (state.length === 0) {
    // If we have nothing in the buffer, then we want to know
    // as soon as we *do* get something into the buffer.
    if (!state.ended) state.needReadable = true;

    // If we tried to read() past the EOF, then emit end on the next tick.
    if (nOrig !== n && state.ended) endReadable(this);
  }

  if (ret !== null) this.emit('data', ret);

  return ret;
};

function chunkInvalid(state, chunk) {
  var er = null;
  if (!Buffer.isBuffer(chunk) && typeof chunk !== 'string' && chunk !== null && chunk !== undefined && !state.objectMode) {
    er = new TypeError('Invalid non-string/buffer chunk');
  }
  return er;
}

function onEofChunk(stream, state) {
  if (state.ended) return;
  if (state.decoder) {
    var chunk = state.decoder.end();
    if (chunk && chunk.length) {
      state.buffer.push(chunk);
      state.length += state.objectMode ? 1 : chunk.length;
    }
  }
  state.ended = true;

  // emit 'readable' now to make sure it gets picked up.
  emitReadable(stream);
}

// Don't emit readable right away in sync mode, because this can trigger
// another read() call => stack overflow.  This way, it might trigger
// a nextTick recursion warning, but that's not so bad.
function emitReadable(stream) {
  var state = stream._readableState;
  state.needReadable = false;
  if (!state.emittedReadable) {
    debug('emitReadable', state.flowing);
    state.emittedReadable = true;
    if (state.sync) processNextTick(emitReadable_, stream);else emitReadable_(stream);
  }
}

function emitReadable_(stream) {
  debug('emit readable');
  stream.emit('readable');
  flow(stream);
}

// at this point, the user has presumably seen the 'readable' event,
// and called read() to consume some data.  that may have triggered
// in turn another _read(n) call, in which case reading = true if
// it's in progress.
// However, if we're not ended, or reading, and the length < hwm,
// then go ahead and try to read some more preemptively.
function maybeReadMore(stream, state) {
  if (!state.readingMore) {
    state.readingMore = true;
    processNextTick(maybeReadMore_, stream, state);
  }
}

function maybeReadMore_(stream, state) {
  var len = state.length;
  while (!state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark) {
    debug('maybeReadMore read 0');
    stream.read(0);
    if (len === state.length)
      // didn't get any data, stop spinning.
      break;else len = state.length;
  }
  state.readingMore = false;
}

// abstract method.  to be overridden in specific implementation classes.
// call cb(er, data) where data is <= n in length.
// for virtual (non-string, non-buffer) streams, "length" is somewhat
// arbitrary, and perhaps not very meaningful.
Readable.prototype._read = function (n) {
  this.emit('error', new Error('_read() is not implemented'));
};

Readable.prototype.pipe = function (dest, pipeOpts) {
  var src = this;
  var state = this._readableState;

  switch (state.pipesCount) {
    case 0:
      state.pipes = dest;
      break;
    case 1:
      state.pipes = [state.pipes, dest];
      break;
    default:
      state.pipes.push(dest);
      break;
  }
  state.pipesCount += 1;
  debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);

  var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;

  var endFn = doEnd ? onend : cleanup;
  if (state.endEmitted) processNextTick(endFn);else src.once('end', endFn);

  dest.on('unpipe', onunpipe);
  function onunpipe(readable) {
    debug('onunpipe');
    if (readable === src) {
      cleanup();
    }
  }

  function onend() {
    debug('onend');
    dest.end();
  }

  // when the dest drains, it reduces the awaitDrain counter
  // on the source.  This would be more elegant with a .once()
  // handler in flow(), but adding and removing repeatedly is
  // too slow.
  var ondrain = pipeOnDrain(src);
  dest.on('drain', ondrain);

  var cleanedUp = false;
  function cleanup() {
    debug('cleanup');
    // cleanup event handlers once the pipe is broken
    dest.removeListener('close', onclose);
    dest.removeListener('finish', onfinish);
    dest.removeListener('drain', ondrain);
    dest.removeListener('error', onerror);
    dest.removeListener('unpipe', onunpipe);
    src.removeListener('end', onend);
    src.removeListener('end', cleanup);
    src.removeListener('data', ondata);

    cleanedUp = true;

    // if the reader is waiting for a drain event from this
    // specific writer, then it would cause it to never start
    // flowing again.
    // So, if this is awaiting a drain, then we just call it now.
    // If we don't know, then assume that we are waiting for one.
    if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
  }

  // If the user pushes more data while we're writing to dest then we'll end up
  // in ondata again. However, we only want to increase awaitDrain once because
  // dest will only emit one 'drain' event for the multiple writes.
  // => Introduce a guard on increasing awaitDrain.
  var increasedAwaitDrain = false;
  src.on('data', ondata);
  function ondata(chunk) {
    debug('ondata');
    increasedAwaitDrain = false;
    var ret = dest.write(chunk);
    if (false === ret && !increasedAwaitDrain) {
      // If the user unpiped during `dest.write()`, it is possible
      // to get stuck in a permanently paused state if that write
      // also returned false.
      // => Check whether `dest` is still a piping destination.
      if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
        debug('false write response, pause', src._readableState.awaitDrain);
        src._readableState.awaitDrain++;
        increasedAwaitDrain = true;
      }
      src.pause();
    }
  }

  // if the dest has an error, then stop piping into it.
  // however, don't suppress the throwing behavior for this.
  function onerror(er) {
    debug('onerror', er);
    unpipe();
    dest.removeListener('error', onerror);
    if (EElistenerCount(dest, 'error') === 0) dest.emit('error', er);
  }

  // Make sure our error handler is attached before userland ones.
  prependListener(dest, 'error', onerror);

  // Both close and finish should trigger unpipe, but only once.
  function onclose() {
    dest.removeListener('finish', onfinish);
    unpipe();
  }
  dest.once('close', onclose);
  function onfinish() {
    debug('onfinish');
    dest.removeListener('close', onclose);
    unpipe();
  }
  dest.once('finish', onfinish);

  function unpipe() {
    debug('unpipe');
    src.unpipe(dest);
  }

  // tell the dest that it's being piped to
  dest.emit('pipe', src);

  // start the flow if it hasn't been started already.
  if (!state.flowing) {
    debug('pipe resume');
    src.resume();
  }

  return dest;
};

function pipeOnDrain(src) {
  return function () {
    var state = src._readableState;
    debug('pipeOnDrain', state.awaitDrain);
    if (state.awaitDrain) state.awaitDrain--;
    if (state.awaitDrain === 0 && EElistenerCount(src, 'data')) {
      state.flowing = true;
      flow(src);
    }
  };
}

Readable.prototype.unpipe = function (dest) {
  var state = this._readableState;

  // if we're not piping anywhere, then do nothing.
  if (state.pipesCount === 0) return this;

  // just one destination.  most common case.
  if (state.pipesCount === 1) {
    // passed in one, but it's not the right one.
    if (dest && dest !== state.pipes) return this;

    if (!dest) dest = state.pipes;

    // got a match.
    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;
    if (dest) dest.emit('unpipe', this);
    return this;
  }

  // slow case. multiple pipe destinations.

  if (!dest) {
    // remove all.
    var dests = state.pipes;
    var len = state.pipesCount;
    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;

    for (var i = 0; i < len; i++) {
      dests[i].emit('unpipe', this);
    }return this;
  }

  // try to find the right one.
  var index = indexOf(state.pipes, dest);
  if (index === -1) return this;

  state.pipes.splice(index, 1);
  state.pipesCount -= 1;
  if (state.pipesCount === 1) state.pipes = state.pipes[0];

  dest.emit('unpipe', this);

  return this;
};

// set up data events if they are asked for
// Ensure readable listeners eventually get something
Readable.prototype.on = function (ev, fn) {
  var res = Stream.prototype.on.call(this, ev, fn);

  if (ev === 'data') {
    // Start flowing on next tick if stream isn't explicitly paused
    if (this._readableState.flowing !== false) this.resume();
  } else if (ev === 'readable') {
    var state = this._readableState;
    if (!state.endEmitted && !state.readableListening) {
      state.readableListening = state.needReadable = true;
      state.emittedReadable = false;
      if (!state.reading) {
        processNextTick(nReadingNextTick, this);
      } else if (state.length) {
        emitReadable(this, state);
      }
    }
  }

  return res;
};
Readable.prototype.addListener = Readable.prototype.on;

function nReadingNextTick(self) {
  debug('readable nexttick read 0');
  self.read(0);
}

// pause() and resume() are remnants of the legacy readable stream API
// If the user uses them, then switch into old mode.
Readable.prototype.resume = function () {
  var state = this._readableState;
  if (!state.flowing) {
    debug('resume');
    state.flowing = true;
    resume(this, state);
  }
  return this;
};

function resume(stream, state) {
  if (!state.resumeScheduled) {
    state.resumeScheduled = true;
    processNextTick(resume_, stream, state);
  }
}

function resume_(stream, state) {
  if (!state.reading) {
    debug('resume read 0');
    stream.read(0);
  }

  state.resumeScheduled = false;
  state.awaitDrain = 0;
  stream.emit('resume');
  flow(stream);
  if (state.flowing && !state.reading) stream.read(0);
}

Readable.prototype.pause = function () {
  debug('call pause flowing=%j', this._readableState.flowing);
  if (false !== this._readableState.flowing) {
    debug('pause');
    this._readableState.flowing = false;
    this.emit('pause');
  }
  return this;
};

function flow(stream) {
  var state = stream._readableState;
  debug('flow', state.flowing);
  while (state.flowing && stream.read() !== null) {}
}

// wrap an old-style stream as the async data source.
// This is *not* part of the readable stream interface.
// It is an ugly unfortunate mess of history.
Readable.prototype.wrap = function (stream) {
  var state = this._readableState;
  var paused = false;

  var self = this;
  stream.on('end', function () {
    debug('wrapped end');
    if (state.decoder && !state.ended) {
      var chunk = state.decoder.end();
      if (chunk && chunk.length) self.push(chunk);
    }

    self.push(null);
  });

  stream.on('data', function (chunk) {
    debug('wrapped data');
    if (state.decoder) chunk = state.decoder.write(chunk);

    // don't skip over falsy values in objectMode
    if (state.objectMode && (chunk === null || chunk === undefined)) return;else if (!state.objectMode && (!chunk || !chunk.length)) return;

    var ret = self.push(chunk);
    if (!ret) {
      paused = true;
      stream.pause();
    }
  });

  // proxy all the other methods.
  // important when wrapping filters and duplexes.
  for (var i in stream) {
    if (this[i] === undefined && typeof stream[i] === 'function') {
      this[i] = function (method) {
        return function () {
          return stream[method].apply(stream, arguments);
        };
      }(i);
    }
  }

  // proxy certain important events.
  var events = ['error', 'close', 'destroy', 'pause', 'resume'];
  forEach(events, function (ev) {
    stream.on(ev, self.emit.bind(self, ev));
  });

  // when we try to consume some more bytes, simply unpause the
  // underlying stream.
  self._read = function (n) {
    debug('wrapped _read', n);
    if (paused) {
      paused = false;
      stream.resume();
    }
  };

  return self;
};

// exposed for testing purposes only.
Readable._fromList = fromList;

// Pluck off n bytes from an array of buffers.
// Length is the combined lengths of all the buffers in the list.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function fromList(n, state) {
  // nothing buffered
  if (state.length === 0) return null;

  var ret;
  if (state.objectMode) ret = state.buffer.shift();else if (!n || n >= state.length) {
    // read it all, truncate the list
    if (state.decoder) ret = state.buffer.join('');else if (state.buffer.length === 1) ret = state.buffer.head.data;else ret = state.buffer.concat(state.length);
    state.buffer.clear();
  } else {
    // read part of list
    ret = fromListPartial(n, state.buffer, state.decoder);
  }

  return ret;
}

// Extracts only enough buffered data to satisfy the amount requested.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function fromListPartial(n, list, hasStrings) {
  var ret;
  if (n < list.head.data.length) {
    // slice is the same for buffers and strings
    ret = list.head.data.slice(0, n);
    list.head.data = list.head.data.slice(n);
  } else if (n === list.head.data.length) {
    // first chunk is a perfect match
    ret = list.shift();
  } else {
    // result spans more than one buffer
    ret = hasStrings ? copyFromBufferString(n, list) : copyFromBuffer(n, list);
  }
  return ret;
}

// Copies a specified amount of characters from the list of buffered data
// chunks.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function copyFromBufferString(n, list) {
  var p = list.head;
  var c = 1;
  var ret = p.data;
  n -= ret.length;
  while (p = p.next) {
    var str = p.data;
    var nb = n > str.length ? str.length : n;
    if (nb === str.length) ret += str;else ret += str.slice(0, n);
    n -= nb;
    if (n === 0) {
      if (nb === str.length) {
        ++c;
        if (p.next) list.head = p.next;else list.head = list.tail = null;
      } else {
        list.head = p;
        p.data = str.slice(nb);
      }
      break;
    }
    ++c;
  }
  list.length -= c;
  return ret;
}

// Copies a specified amount of bytes from the list of buffered data chunks.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function copyFromBuffer(n, list) {
  var ret = bufferShim.allocUnsafe(n);
  var p = list.head;
  var c = 1;
  p.data.copy(ret);
  n -= p.data.length;
  while (p = p.next) {
    var buf = p.data;
    var nb = n > buf.length ? buf.length : n;
    buf.copy(ret, ret.length - n, 0, nb);
    n -= nb;
    if (n === 0) {
      if (nb === buf.length) {
        ++c;
        if (p.next) list.head = p.next;else list.head = list.tail = null;
      } else {
        list.head = p;
        p.data = buf.slice(nb);
      }
      break;
    }
    ++c;
  }
  list.length -= c;
  return ret;
}

function endReadable(stream) {
  var state = stream._readableState;

  // If we get here before consuming all the bytes, then that is a
  // bug in node.  Should never happen.
  if (state.length > 0) throw new Error('"endReadable()" called on non-empty stream');

  if (!state.endEmitted) {
    state.ended = true;
    processNextTick(endReadableNT, state, stream);
  }
}

function endReadableNT(state, stream) {
  // Check that we didn't get one last unshift.
  if (!state.endEmitted && state.length === 0) {
    state.endEmitted = true;
    stream.readable = false;
    stream.emit('end');
  }
}

function forEach(xs, f) {
  for (var i = 0, l = xs.length; i < l; i++) {
    f(xs[i], i);
  }
}

function indexOf(xs, x) {
  for (var i = 0, l = xs.length; i < l; i++) {
    if (xs[i] === x) return i;
  }
  return -1;
}

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// a transform stream is a readable/writable stream where you do
// something with the data.  Sometimes it's called a "filter",
// but that's not a great name for it, since that implies a thing where
// some bits pass through, and others are simply ignored.  (That would
// be a valid example of a transform, of course.)
//
// While the output is causally related to the input, it's not a
// necessarily symmetric or synchronous transformation.  For example,
// a zlib stream might take multiple plain-text writes(), and then
// emit a single compressed chunk some time in the future.
//
// Here's how this works:
//
// The Transform stream has all the aspects of the readable and writable
// stream classes.  When you write(chunk), that calls _write(chunk,cb)
// internally, and returns false if there's a lot of pending writes
// buffered up.  When you call read(), that calls _read(n) until
// there's enough pending readable data buffered up.
//
// In a transform stream, the written data is placed in a buffer.  When
// _read(n) is called, it transforms the queued up data, calling the
// buffered _write cb's as it consumes chunks.  If consuming a single
// written chunk would result in multiple output chunks, then the first
// outputted bit calls the readcb, and subsequent chunks just go into
// the read buffer, and will cause it to emit 'readable' if necessary.
//
// This way, back-pressure is actually determined by the reading side,
// since _read has to be called to start processing a new chunk.  However,
// a pathological inflate type of transform can cause excessive buffering
// here.  For example, imagine a stream where every byte of input is
// interpreted as an integer from 0-255, and then results in that many
// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
// 1kb of data being output.  In this case, you could write a very small
// amount of input, and end up with a very large amount of output.  In
// such a pathological inflating mechanism, there'd be no way to tell
// the system to stop doing the transform.  A single 4MB write could
// cause the system to run out of memory.
//
// However, even in such a pathological case, only a single written chunk
// would be consumed, and then the rest would wait (un-transformed) until
// the results of the previous transformed chunk were consumed.



module.exports = Transform;

var Duplex = __webpack_require__(1);

/*<replacement>*/
var util = __webpack_require__(4);
util.inherits = __webpack_require__(5);
/*</replacement>*/

util.inherits(Transform, Duplex);

function TransformState(stream) {
  this.afterTransform = function (er, data) {
    return afterTransform(stream, er, data);
  };

  this.needTransform = false;
  this.transforming = false;
  this.writecb = null;
  this.writechunk = null;
  this.writeencoding = null;
}

function afterTransform(stream, er, data) {
  var ts = stream._transformState;
  ts.transforming = false;

  var cb = ts.writecb;

  if (!cb) return stream.emit('error', new Error('no writecb in Transform class'));

  ts.writechunk = null;
  ts.writecb = null;

  if (data !== null && data !== undefined) stream.push(data);

  cb(er);

  var rs = stream._readableState;
  rs.reading = false;
  if (rs.needReadable || rs.length < rs.highWaterMark) {
    stream._read(rs.highWaterMark);
  }
}

function Transform(options) {
  if (!(this instanceof Transform)) return new Transform(options);

  Duplex.call(this, options);

  this._transformState = new TransformState(this);

  var stream = this;

  // start out asking for a readable event once data is transformed.
  this._readableState.needReadable = true;

  // we have implemented the _read method, and done the other things
  // that Readable wants before the first _read call, so unset the
  // sync guard flag.
  this._readableState.sync = false;

  if (options) {
    if (typeof options.transform === 'function') this._transform = options.transform;

    if (typeof options.flush === 'function') this._flush = options.flush;
  }

  // When the writable side finishes, then flush out anything remaining.
  this.once('prefinish', function () {
    if (typeof this._flush === 'function') this._flush(function (er, data) {
      done(stream, er, data);
    });else done(stream);
  });
}

Transform.prototype.push = function (chunk, encoding) {
  this._transformState.needTransform = false;
  return Duplex.prototype.push.call(this, chunk, encoding);
};

// This is the part where you do stuff!
// override this function in implementation classes.
// 'chunk' is an input chunk.
//
// Call `push(newChunk)` to pass along transformed output
// to the readable side.  You may call 'push' zero or more times.
//
// Call `cb(err)` when you are done with this chunk.  If you pass
// an error, then that'll put the hurt on the whole operation.  If you
// never call cb(), then you'll never get another chunk.
Transform.prototype._transform = function (chunk, encoding, cb) {
  throw new Error('_transform() is not implemented');
};

Transform.prototype._write = function (chunk, encoding, cb) {
  var ts = this._transformState;
  ts.writecb = cb;
  ts.writechunk = chunk;
  ts.writeencoding = encoding;
  if (!ts.transforming) {
    var rs = this._readableState;
    if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
  }
};

// Doesn't matter what the args are here.
// _transform does all the work.
// That we got here means that the readable side wants more data.
Transform.prototype._read = function (n) {
  var ts = this._transformState;

  if (ts.writechunk !== null && ts.writecb && !ts.transforming) {
    ts.transforming = true;
    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
  } else {
    // mark that we need a transform, so that any data that comes in
    // will get processed, now that we've asked for it.
    ts.needTransform = true;
  }
};

function done(stream, er, data) {
  if (er) return stream.emit('error', er);

  if (data !== null && data !== undefined) stream.push(data);

  // if there's nothing in the write buffer, then that means
  // that nothing more will ever be provided
  var ws = stream._writableState;
  var ts = stream._transformState;

  if (ws.length) throw new Error('Calling transform done when ws.length != 0');

  if (ts.transforming) throw new Error('Calling transform done when still transforming');

  return stream.push(null);
}

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// A bit simpler than readable streams.
// Implement an async ._write(chunk, encoding, cb), and it'll handle all
// the drain event emission and buffering.



module.exports = Writable;

/*<replacement>*/
var processNextTick = __webpack_require__(8);
/*</replacement>*/

/*<replacement>*/
var asyncWrite = !process.browser && ['v0.10', 'v0.9.'].indexOf(process.version.slice(0, 5)) > -1 ? setImmediate : processNextTick;
/*</replacement>*/

/*<replacement>*/
var Duplex;
/*</replacement>*/

Writable.WritableState = WritableState;

/*<replacement>*/
var util = __webpack_require__(4);
util.inherits = __webpack_require__(5);
/*</replacement>*/

/*<replacement>*/
var internalUtil = {
  deprecate: __webpack_require__(39)
};
/*</replacement>*/

/*<replacement>*/
var Stream;
(function () {
  try {
    Stream = __webpack_require__(15);
  } catch (_) {} finally {
    if (!Stream) Stream = __webpack_require__(6).EventEmitter;
  }
})();
/*</replacement>*/

var Buffer = __webpack_require__(2).Buffer;
/*<replacement>*/
var bufferShim = __webpack_require__(7);
/*</replacement>*/

util.inherits(Writable, Stream);

function nop() {}

function WriteReq(chunk, encoding, cb) {
  this.chunk = chunk;
  this.encoding = encoding;
  this.callback = cb;
  this.next = null;
}

function WritableState(options, stream) {
  Duplex = Duplex || __webpack_require__(1);

  options = options || {};

  // object stream flag to indicate whether or not this stream
  // contains buffers or objects.
  this.objectMode = !!options.objectMode;

  if (stream instanceof Duplex) this.objectMode = this.objectMode || !!options.writableObjectMode;

  // the point at which write() starts returning false
  // Note: 0 is a valid value, means that we always return false if
  // the entire buffer is not flushed immediately on write()
  var hwm = options.highWaterMark;
  var defaultHwm = this.objectMode ? 16 : 16 * 1024;
  this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;

  // cast to ints.
  this.highWaterMark = ~ ~this.highWaterMark;

  // drain event flag.
  this.needDrain = false;
  // at the start of calling end()
  this.ending = false;
  // when end() has been called, and returned
  this.ended = false;
  // when 'finish' is emitted
  this.finished = false;

  // should we decode strings into buffers before passing to _write?
  // this is here so that some node-core streams can optimize string
  // handling at a lower level.
  var noDecode = options.decodeStrings === false;
  this.decodeStrings = !noDecode;

  // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.
  this.defaultEncoding = options.defaultEncoding || 'utf8';

  // not an actual buffer we keep track of, but a measurement
  // of how much we're waiting to get pushed to some underlying
  // socket or file.
  this.length = 0;

  // a flag to see when we're in the middle of a write.
  this.writing = false;

  // when true all writes will be buffered until .uncork() call
  this.corked = 0;

  // a flag to be able to tell if the onwrite cb is called immediately,
  // or on a later tick.  We set this to true at first, because any
  // actions that shouldn't happen until "later" should generally also
  // not happen before the first write call.
  this.sync = true;

  // a flag to know if we're processing previously buffered items, which
  // may call the _write() callback in the same tick, so that we don't
  // end up in an overlapped onwrite situation.
  this.bufferProcessing = false;

  // the callback that's passed to _write(chunk,cb)
  this.onwrite = function (er) {
    onwrite(stream, er);
  };

  // the callback that the user supplies to write(chunk,encoding,cb)
  this.writecb = null;

  // the amount that is being written when _write is called.
  this.writelen = 0;

  this.bufferedRequest = null;
  this.lastBufferedRequest = null;

  // number of pending user-supplied write callbacks
  // this must be 0 before 'finish' can be emitted
  this.pendingcb = 0;

  // emit prefinish if the only thing we're waiting for is _write cbs
  // This is relevant for synchronous Transform streams
  this.prefinished = false;

  // True if the error was already emitted and should not be thrown again
  this.errorEmitted = false;

  // count buffered requests
  this.bufferedRequestCount = 0;

  // allocate the first CorkedRequest, there is always
  // one allocated and free to use, and we maintain at most two
  this.corkedRequestsFree = new CorkedRequest(this);
}

WritableState.prototype.getBuffer = function getBuffer() {
  var current = this.bufferedRequest;
  var out = [];
  while (current) {
    out.push(current);
    current = current.next;
  }
  return out;
};

(function () {
  try {
    Object.defineProperty(WritableState.prototype, 'buffer', {
      get: internalUtil.deprecate(function () {
        return this.getBuffer();
      }, '_writableState.buffer is deprecated. Use _writableState.getBuffer ' + 'instead.')
    });
  } catch (_) {}
})();

// Test _writableState for inheritance to account for Duplex streams,
// whose prototype chain only points to Readable.
var realHasInstance;
if (typeof Symbol === 'function' && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === 'function') {
  realHasInstance = Function.prototype[Symbol.hasInstance];
  Object.defineProperty(Writable, Symbol.hasInstance, {
    value: function (object) {
      if (realHasInstance.call(this, object)) return true;

      return object && object._writableState instanceof WritableState;
    }
  });
} else {
  realHasInstance = function (object) {
    return object instanceof this;
  };
}

function Writable(options) {
  Duplex = Duplex || __webpack_require__(1);

  // Writable ctor is applied to Duplexes, too.
  // `realHasInstance` is necessary because using plain `instanceof`
  // would return false, as no `_writableState` property is attached.

  // Trying to use the custom `instanceof` for Writable here will also break the
  // Node.js LazyTransform implementation, which has a non-trivial getter for
  // `_writableState` that would lead to infinite recursion.
  if (!realHasInstance.call(Writable, this) && !(this instanceof Duplex)) {
    return new Writable(options);
  }

  this._writableState = new WritableState(options, this);

  // legacy.
  this.writable = true;

  if (options) {
    if (typeof options.write === 'function') this._write = options.write;

    if (typeof options.writev === 'function') this._writev = options.writev;
  }

  Stream.call(this);
}

// Otherwise people can pipe Writable streams, which is just wrong.
Writable.prototype.pipe = function () {
  this.emit('error', new Error('Cannot pipe, not readable'));
};

function writeAfterEnd(stream, cb) {
  var er = new Error('write after end');
  // TODO: defer error events consistently everywhere, not just the cb
  stream.emit('error', er);
  processNextTick(cb, er);
}

// If we get something that is not a buffer, string, null, or undefined,
// and we're not in objectMode, then that's an error.
// Otherwise stream chunks are all considered to be of length=1, and the
// watermarks determine how many objects to keep in the buffer, rather than
// how many bytes or characters.
function validChunk(stream, state, chunk, cb) {
  var valid = true;
  var er = false;
  // Always throw error if a null is written
  // if we are not in object mode then throw
  // if it is not a buffer, string, or undefined.
  if (chunk === null) {
    er = new TypeError('May not write null values to stream');
  } else if (!Buffer.isBuffer(chunk) && typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
    er = new TypeError('Invalid non-string/buffer chunk');
  }
  if (er) {
    stream.emit('error', er);
    processNextTick(cb, er);
    valid = false;
  }
  return valid;
}

Writable.prototype.write = function (chunk, encoding, cb) {
  var state = this._writableState;
  var ret = false;

  if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (Buffer.isBuffer(chunk)) encoding = 'buffer';else if (!encoding) encoding = state.defaultEncoding;

  if (typeof cb !== 'function') cb = nop;

  if (state.ended) writeAfterEnd(this, cb);else if (validChunk(this, state, chunk, cb)) {
    state.pendingcb++;
    ret = writeOrBuffer(this, state, chunk, encoding, cb);
  }

  return ret;
};

Writable.prototype.cork = function () {
  var state = this._writableState;

  state.corked++;
};

Writable.prototype.uncork = function () {
  var state = this._writableState;

  if (state.corked) {
    state.corked--;

    if (!state.writing && !state.corked && !state.finished && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
  }
};

Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
  // node::ParseEncoding() requires lower case.
  if (typeof encoding === 'string') encoding = encoding.toLowerCase();
  if (!(['hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le', 'raw'].indexOf((encoding + '').toLowerCase()) > -1)) throw new TypeError('Unknown encoding: ' + encoding);
  this._writableState.defaultEncoding = encoding;
  return this;
};

function decodeChunk(state, chunk, encoding) {
  if (!state.objectMode && state.decodeStrings !== false && typeof chunk === 'string') {
    chunk = bufferShim.from(chunk, encoding);
  }
  return chunk;
}

// if we're already writing something, then just put this
// in the queue, and wait our turn.  Otherwise, call _write
// If we return false, then we need a drain event, so set that flag.
function writeOrBuffer(stream, state, chunk, encoding, cb) {
  chunk = decodeChunk(state, chunk, encoding);

  if (Buffer.isBuffer(chunk)) encoding = 'buffer';
  var len = state.objectMode ? 1 : chunk.length;

  state.length += len;

  var ret = state.length < state.highWaterMark;
  // we must ensure that previous needDrain will not be reset to false.
  if (!ret) state.needDrain = true;

  if (state.writing || state.corked) {
    var last = state.lastBufferedRequest;
    state.lastBufferedRequest = new WriteReq(chunk, encoding, cb);
    if (last) {
      last.next = state.lastBufferedRequest;
    } else {
      state.bufferedRequest = state.lastBufferedRequest;
    }
    state.bufferedRequestCount += 1;
  } else {
    doWrite(stream, state, false, len, chunk, encoding, cb);
  }

  return ret;
}

function doWrite(stream, state, writev, len, chunk, encoding, cb) {
  state.writelen = len;
  state.writecb = cb;
  state.writing = true;
  state.sync = true;
  if (writev) stream._writev(chunk, state.onwrite);else stream._write(chunk, encoding, state.onwrite);
  state.sync = false;
}

function onwriteError(stream, state, sync, er, cb) {
  --state.pendingcb;
  if (sync) processNextTick(cb, er);else cb(er);

  stream._writableState.errorEmitted = true;
  stream.emit('error', er);
}

function onwriteStateUpdate(state) {
  state.writing = false;
  state.writecb = null;
  state.length -= state.writelen;
  state.writelen = 0;
}

function onwrite(stream, er) {
  var state = stream._writableState;
  var sync = state.sync;
  var cb = state.writecb;

  onwriteStateUpdate(state);

  if (er) onwriteError(stream, state, sync, er, cb);else {
    // Check if we're actually ready to finish, but don't emit yet
    var finished = needFinish(state);

    if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
      clearBuffer(stream, state);
    }

    if (sync) {
      /*<replacement>*/
      asyncWrite(afterWrite, stream, state, finished, cb);
      /*</replacement>*/
    } else {
        afterWrite(stream, state, finished, cb);
      }
  }
}

function afterWrite(stream, state, finished, cb) {
  if (!finished) onwriteDrain(stream, state);
  state.pendingcb--;
  cb();
  finishMaybe(stream, state);
}

// Must force callback to be called on nextTick, so that we don't
// emit 'drain' before the write() consumer gets the 'false' return
// value, and has a chance to attach a 'drain' listener.
function onwriteDrain(stream, state) {
  if (state.length === 0 && state.needDrain) {
    state.needDrain = false;
    stream.emit('drain');
  }
}

// if there's something in the buffer waiting, then process it
function clearBuffer(stream, state) {
  state.bufferProcessing = true;
  var entry = state.bufferedRequest;

  if (stream._writev && entry && entry.next) {
    // Fast case, write everything using _writev()
    var l = state.bufferedRequestCount;
    var buffer = new Array(l);
    var holder = state.corkedRequestsFree;
    holder.entry = entry;

    var count = 0;
    while (entry) {
      buffer[count] = entry;
      entry = entry.next;
      count += 1;
    }

    doWrite(stream, state, true, state.length, buffer, '', holder.finish);

    // doWrite is almost always async, defer these to save a bit of time
    // as the hot path ends with doWrite
    state.pendingcb++;
    state.lastBufferedRequest = null;
    if (holder.next) {
      state.corkedRequestsFree = holder.next;
      holder.next = null;
    } else {
      state.corkedRequestsFree = new CorkedRequest(state);
    }
  } else {
    // Slow case, write chunks one-by-one
    while (entry) {
      var chunk = entry.chunk;
      var encoding = entry.encoding;
      var cb = entry.callback;
      var len = state.objectMode ? 1 : chunk.length;

      doWrite(stream, state, false, len, chunk, encoding, cb);
      entry = entry.next;
      // if we didn't call the onwrite immediately, then
      // it means that we need to wait until it does.
      // also, that means that the chunk and cb are currently
      // being processed, so move the buffer counter past them.
      if (state.writing) {
        break;
      }
    }

    if (entry === null) state.lastBufferedRequest = null;
  }

  state.bufferedRequestCount = 0;
  state.bufferedRequest = entry;
  state.bufferProcessing = false;
}

Writable.prototype._write = function (chunk, encoding, cb) {
  cb(new Error('_write() is not implemented'));
};

Writable.prototype._writev = null;

Writable.prototype.end = function (chunk, encoding, cb) {
  var state = this._writableState;

  if (typeof chunk === 'function') {
    cb = chunk;
    chunk = null;
    encoding = null;
  } else if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (chunk !== null && chunk !== undefined) this.write(chunk, encoding);

  // .end() fully uncorks
  if (state.corked) {
    state.corked = 1;
    this.uncork();
  }

  // ignore unnecessary end() calls.
  if (!state.ending && !state.finished) endWritable(this, state, cb);
};

function needFinish(state) {
  return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
}

function prefinish(stream, state) {
  if (!state.prefinished) {
    state.prefinished = true;
    stream.emit('prefinish');
  }
}

function finishMaybe(stream, state) {
  var need = needFinish(state);
  if (need) {
    if (state.pendingcb === 0) {
      prefinish(stream, state);
      state.finished = true;
      stream.emit('finish');
    } else {
      prefinish(stream, state);
    }
  }
  return need;
}

function endWritable(stream, state, cb) {
  state.ending = true;
  finishMaybe(stream, state);
  if (cb) {
    if (state.finished) processNextTick(cb);else stream.once('finish', cb);
  }
  state.ended = true;
  stream.writable = false;
}

// It seems a linked list but it is not
// there will be only 2 of these for each stream
function CorkedRequest(state) {
  var _this = this;

  this.next = null;
  this.entry = null;

  this.finish = function (err) {
    var entry = _this.entry;
    _this.entry = null;
    while (entry) {
      var cb = entry.callback;
      state.pendingcb--;
      cb(err);
      entry = entry.next;
    }
    if (state.corkedRequestsFree) {
      state.corkedRequestsFree.next = _this;
    } else {
      state.corkedRequestsFree = _this;
    }
  };
}

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Buffer = __webpack_require__(2).Buffer;
/*<replacement>*/
var bufferShim = __webpack_require__(7);
/*</replacement>*/

module.exports = BufferList;

function BufferList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

BufferList.prototype.push = function (v) {
  var entry = { data: v, next: null };
  if (this.length > 0) this.tail.next = entry;else this.head = entry;
  this.tail = entry;
  ++this.length;
};

BufferList.prototype.unshift = function (v) {
  var entry = { data: v, next: this.head };
  if (this.length === 0) this.tail = entry;
  this.head = entry;
  ++this.length;
};

BufferList.prototype.shift = function () {
  if (this.length === 0) return;
  var ret = this.head.data;
  if (this.length === 1) this.head = this.tail = null;else this.head = this.head.next;
  --this.length;
  return ret;
};

BufferList.prototype.clear = function () {
  this.head = this.tail = null;
  this.length = 0;
};

BufferList.prototype.join = function (s) {
  if (this.length === 0) return '';
  var p = this.head;
  var ret = '' + p.data;
  while (p = p.next) {
    ret += s + p.data;
  }return ret;
};

BufferList.prototype.concat = function (n) {
  if (this.length === 0) return bufferShim.alloc(0);
  if (this.length === 1) return this.head.data;
  var ret = bufferShim.allocUnsafe(n >>> 0);
  var p = this.head;
  var i = 0;
  while (p) {
    p.data.copy(ret, i);
    i += p.data.length;
    p = p.next;
  }
  return ret;
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(33)


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
Copyright (c) 2014-2016, Matteo Collina <hello@matteocollina.com>

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR
IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
*/



var through = __webpack_require__(38)
var StringDecoder = __webpack_require__(45).StringDecoder

function transform (chunk, enc, cb) {
  this._last += this._decoder.write(chunk)
  if (this._last.length > this.maxLength) {
    return cb(new Error('maximum buffer reached'))
  }

  var list = this._last.split(this.matcher)

  this._last = list.pop()

  for (var i = 0; i < list.length; i++) {
    push(this, this.mapper(list[i]))
  }

  cb()
}

function flush (cb) {
  // forward any gibberish left in there
  this._last += this._decoder.end()

  if (this._last) {
    push(this, this.mapper(this._last))
  }

  cb()
}

function push (self, val) {
  if (val !== undefined) {
    self.push(val)
  }
}

function noop (incoming) {
  return incoming
}

function split (matcher, mapper, options) {
  // Set defaults for any arguments not supplied.
  matcher = matcher || /\r?\n/
  mapper = mapper || noop
  options = options || {}

  // Test arguments explicitly.
  switch (arguments.length) {
    case 1:
      // If mapper is only argument.
      if (typeof matcher === 'function') {
        mapper = matcher
        matcher = /\r?\n/
      // If options is only argument.
      } else if (typeof matcher === 'object' && !(matcher instanceof RegExp)) {
        options = matcher
        matcher = /\r?\n/
      }
      break

    case 2:
      // If mapper and options are arguments.
      if (typeof matcher === 'function') {
        options = mapper
        mapper = matcher
        matcher = /\r?\n/
      // If matcher and options are arguments.
      } else if (typeof mapper === 'object') {
        options = mapper
        mapper = noop
      }
  }

  var stream = through(options, transform, flush)

  // this stream is in objectMode only in the readable part
  stream._readableState.objectMode = true

  stream._last = ''
  stream._decoder = new StringDecoder('utf8')
  stream.matcher = matcher
  stream.mapper = mapper
  stream.maxLength = options.maxLength

  return stream
}

module.exports = split


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var Transform = __webpack_require__(36)
  , inherits  = __webpack_require__(3).inherits
  , xtend     = __webpack_require__(42)

function DestroyableTransform(opts) {
  Transform.call(this, opts)
  this._destroyed = false
}

inherits(DestroyableTransform, Transform)

DestroyableTransform.prototype.destroy = function(err) {
  if (this._destroyed) return
  this._destroyed = true
  
  var self = this
  process.nextTick(function() {
    if (err)
      self.emit('error', err)
    self.emit('close')
  })
}

// a noop _transform function
function noop (chunk, enc, callback) {
  callback(null, chunk)
}


// create a new export function, used by both the main export and
// the .ctor export, contains common logic for dealing with arguments
function through2 (construct) {
  return function (options, transform, flush) {
    if (typeof options == 'function') {
      flush     = transform
      transform = options
      options   = {}
    }

    if (typeof transform != 'function')
      transform = noop

    if (typeof flush != 'function')
      flush = null

    return construct(options, transform, flush)
  }
}


// main export, just make me a transform stream!
module.exports = through2(function (options, transform, flush) {
  var t2 = new DestroyableTransform(options)

  t2._transform = transform

  if (flush)
    t2._flush = flush

  return t2
})


// make me a reusable prototype that I can `new`, or implicitly `new`
// with a constructor call
module.exports.ctor = through2(function (options, transform, flush) {
  function Through2 (override) {
    if (!(this instanceof Through2))
      return new Through2(override)

    this.options = xtend(options, override)

    DestroyableTransform.call(this, this.options)
  }

  inherits(Through2, DestroyableTransform)

  Through2.prototype._transform = transform

  if (flush)
    Through2.prototype._flush = flush

  return Through2
})


module.exports.obj = through2(function (options, transform, flush) {
  var t2 = new DestroyableTransform(xtend({ objectMode: true, highWaterMark: 16 }, options))

  t2._transform = transform

  if (flush)
    t2._flush = flush

  return t2
})


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {


/**
 * For Node.js, simply re-export the core `util.deprecate` function.
 */

module.exports = __webpack_require__(3).deprecate;


/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 41 */
/***/ (function(module, exports) {

// Returns a wrapper function that returns a wrapped callback
// The wrapper function should do some stuff, and return a
// presumably different callback function.
// This makes sure that own properties are retained, so that
// decorations and such are not lost along the way.
module.exports = wrappy
function wrappy (fn, cb) {
  if (fn && cb) return wrappy(fn)(cb)

  if (typeof fn !== 'function')
    throw new TypeError('need wrapper function')

  Object.keys(fn).forEach(function (k) {
    wrapper[k] = fn[k]
  })

  return wrapper

  function wrapper() {
    var args = new Array(arguments.length)
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i]
    }
    var ret = fn.apply(this, args)
    var cb = args[args.length-1]
    if (typeof ret === 'function' && ret !== cb) {
      Object.keys(cb).forEach(function (k) {
        ret[k] = cb[k]
      })
    }
    return ret
  }
}


/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = extend

var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend() {
    var target = {}

    for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i]

        for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
                target[key] = source[key]
            }
        }
    }

    return target
}


/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("child_process");

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("net");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("string_decoder");

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("tty");

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _nightmare = __webpack_require__(16);

var _nightmare2 = _interopRequireDefault(_nightmare);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var nightmare = (0, _nightmare2.default)({ show: true });

nightmare.goto('https://duckduckgo.com').type('#search_form_input_homepage', 'github nightmare').click('#search_button_homepage').wait('#zero_click_wrapper .c-info__title a').evaluate(function () {
    return document.querySelector('#zero_click_wrapper .c-info__title a').href;
}).end().then(function (result) {
    return console.log(result);
}).catch(function (error) {
    return console.error('Search failed:', error);
});

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOWNiMDYwZWJhODhkODQ4ZDg5OTciLCJ3ZWJwYWNrOi8vLy4vfi9kZWJ1Zy9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFkYWJsZS1zdHJlYW0vbGliL19zdHJlYW1fZHVwbGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImJ1ZmZlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInV0aWxcIiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtdXRpbC1pcy9saWIvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2luaGVyaXRzL2luaGVyaXRzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImV2ZW50c1wiIiwid2VicGFjazovLy8uL34vYnVmZmVyLXNoaW1zL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vcHJvY2Vzcy1uZXh0aWNrLWFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9zbGljZWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnNcIiIsIndlYnBhY2s6Ly8vLi9+L2RlYnVnL3NyYy9kZWJ1Zy5qcyIsIndlYnBhY2s6Ly8vLi9+L29uY2Uvb25jZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3N0cmluZ19kZWNvZGVyL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHJlYW1cIiIsIndlYnBhY2s6Ly8vLi9+L25pZ2h0bWFyZS9saWIvbmlnaHRtYXJlLmpzIiwid2VicGFjazovLy8uL34vY2xvbmUvY2xvbmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kZWJ1Zy9zcmMvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2RlYnVnL3NyYy9ub2RlLmpzIiwid2VicGFjazovLy8uL34vZGVmYXVsdHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9lbGVjdHJvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2Z1bmN0aW9uLXNvdXJjZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2luaGVyaXRzL2luaGVyaXRzX2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9pc2FycmF5L2luZGV4LmpzIiwid2VicGFjazovLy8uL34vanNlc2MvanNlc2MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9taW5zdGFjaGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9tcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L25pZ2h0bWFyZS9saWIiLCJ3ZWJwYWNrOi8vLy4vfi9uaWdodG1hcmUvbGliL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9uaWdodG1hcmUvbGliL2lwYy5qcyIsIndlYnBhY2s6Ly8vLi9+L25pZ2h0bWFyZS9saWIvamF2YXNjcmlwdC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWRhYmxlLXN0cmVhbS9saWIvX3N0cmVhbV9yZWFkYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWRhYmxlLXN0cmVhbS9saWIvX3N0cmVhbV90cmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFkYWJsZS1zdHJlYW0vbGliL19zdHJlYW1fd3JpdGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFkYWJsZS1zdHJlYW0vbGliL2ludGVybmFsL3N0cmVhbXMvQnVmZmVyTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWRhYmxlLXN0cmVhbS90cmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vfi9zcGxpdDIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi90aHJvdWdoMi90aHJvdWdoMi5qcyIsIndlYnBhY2s6Ly8vLi9+L3V0aWwtZGVwcmVjYXRlL25vZGUuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3dyYXBweS93cmFwcHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi94dGVuZC9pbW11dGFibGUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2hpbGRfcHJvY2Vzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5ldFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0cmluZ19kZWNvZGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidHR5XCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uanMiXSwibmFtZXMiOlsibmlnaHRtYXJlIiwic2hvdyIsImdvdG8iLCJ0eXBlIiwiY2xpY2siLCJ3YWl0IiwiZXZhbHVhdGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJocmVmIiwiZW5kIiwidGhlbiIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImVycm9yIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ2hFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7Ozs7Ozs7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGVBQWUsaUJBQWlCO0FBQ2hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0NBQWdDLE9BQU87QUFDdkM7QUFDQTtBQUNBLEM7Ozs7OztBQzFFQSxtQzs7Ozs7O0FDQUEsaUM7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7O0FDMUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7Ozs7Ozs7QUNOQSxtQzs7Ozs7OztBQ0FBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMzR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDL0JBLCtCOzs7Ozs7O0FDQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWM7QUFDZDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZO0FBQ1o7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQixpQkFBaUI7QUFDcEM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLFNBQVM7QUFDMUIsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlDQUF5QyxTQUFTO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLFNBQVM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3pNQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVEsT0FBTztBQUNmOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQzVOQSxpQzs7Ozs7O0FDQUEsbUM7Ozs7OztBQ0FBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUNBQXVDLG9CQUFvQixtQ0FBbUMsb0JBQW9CO0FBQ2xIOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxrREFBa0QsK0VBQStFLEVBQUU7QUFDbkksZ0RBQWdELDZFQUE2RSxFQUFFO0FBQy9ILDREQUE0RCx5RkFBeUYsRUFBRTtBQUN2Six3REFBd0QscUZBQXFGLEVBQUU7QUFDL0ksb0RBQW9ELGlGQUFpRixFQUFFO0FBQ3ZJLG1EQUFtRCxnRkFBZ0YsRUFBRTtBQUNySSwyREFBMkQsd0ZBQXdGLEVBQUU7QUFDckosMkRBQTJELHdGQUF3RixFQUFFO0FBQ3JKLDRDQUE0Qyx5RUFBeUUsRUFBRTtBQUN2SCx1REFBdUQsb0ZBQW9GLEVBQUU7QUFDN0ksNkNBQTZDLDBFQUEwRSxFQUFFO0FBQ3pILGdEQUFnRCw2RUFBNkUsRUFBRTtBQUMvSCwwQ0FBMEMsdUVBQXVFLEVBQUU7QUFDbkgsaURBQWlELDhFQUE4RSxFQUFFO0FBQ2pJLDRDQUE0Qyx5RUFBeUUsRUFBRTtBQUN2SCx3REFBd0QscUZBQXFGLEVBQUU7QUFDL0ksK0NBQStDLDRFQUE0RSxFQUFFOztBQUU3SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZO0FBQ1osR0FBRztBQUNILGlDQUFpQyxnQ0FBZ0M7QUFDakU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlEQUFpRCxVQUFVO0FBQzNEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLFlBQVksYUFBYTtBQUN6QixZQUFZLFNBQVM7QUFDckIsWUFBWSxVQUFVO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLGdCQUFnQjtBQUMzQixXQUFXLGdCQUFnQjtBQUMzQixZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsSUFBSTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7OztBQ3hrQkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOzs7Ozs7O0FDL0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7QUNyTEE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLHlCQUF5Qjs7QUFFbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLElBQUk7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsNkJBQTZCO0FBQzdCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNDQUFzQzs7QUFFdEM7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkNBQTJDLG1CQUFtQjtBQUM5RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFDQUFxQztBQUNyQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNoUEE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxFOzs7Ozs7QUNaQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsZ0JBQWdCO0FBQzNCLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0EsNENBQTRDLFVBQVU7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3RCQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTs7Ozs7Ozs4Q0NKQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksT0FBTztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsZUFBZTtBQUNmO0FBQ0EsYUFBYTtBQUNiLG9DQUFvQztBQUNwQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFCQUFxQiw2Q0FBNkM7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUFBO0FBQ0gsRUFBRTtBQUNGLG1CQUFtQjtBQUNuQjtBQUNBLEdBQUcsT0FBTztBQUNWO0FBQ0E7QUFDQSxFQUFFLE9BQU87QUFDVDtBQUNBOztBQUVBLENBQUM7Ozs7Ozs7OztBQ3ZRRDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLGlCQUFpQjtBQUNsQztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0VBQXNFO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUVBQXVFO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQztBQUNwQyxxQ0FBcUM7QUFDckM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLEVBQUUsR0FBRyxFQUFFO0FBQzdCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLFNBQVM7QUFDcEIsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QiwwQkFBMEI7QUFDMUIsd0JBQXdCO0FBQ3hCLHdCQUF3QjtBQUN4Qjs7Ozs7OztBQ3JKQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsY0FBYztBQUN6QixXQUFXLE9BQU87QUFDbEIsWUFBWSxNQUFNO0FBQ2xCLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNwSkE7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLFdBQVc7QUFDbEQ7QUFDQTtBQUNBOzs7Ozs7O0FDTkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxTQUFTO0FBQ3BCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxTQUFTO0FBQ3BCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLFNBQVM7QUFDcEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxTQUFTO0FBQ3BCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLFNBQVM7QUFDcEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsU0FBUztBQUNwQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsU0FBUztBQUNwQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxTQUFTO0FBQ3BCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLFNBQVM7QUFDcEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxTQUFTO0FBQ3BCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxTQUFTO0FBQ3BCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxJQUFJO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsbUJBQW1CO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLFNBQVM7QUFDcEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsVUFBVTtBQUNyQixXQUFXLE9BQU87QUFDbEIsV0FBVyxTQUFTO0FBQ3BCOztBQUVBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckMscUVBQXFFO0FBQ3JFLHlDQUF5QztBQUN6QyxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFVBQVU7QUFDckIsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsSUFBSTtBQUNmLFdBQVcsU0FBUztBQUNwQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsOENBQThDLHlCQUF5QjtBQUN2RSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQixXQUFXLElBQUk7QUFDZixXQUFXLFNBQVM7QUFDcEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCw4QkFBOEI7QUFDL0UsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLFNBQVM7QUFDcEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLG9CQUFvQjtBQUN4RDtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsb0JBQW9CO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxTQUFTO0FBQ3BCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLFNBQVM7QUFDcEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLFNBQVM7QUFDcEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLFNBQVM7QUFDcEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLFNBQVM7QUFDcEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsU0FBUztBQUNwQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsTUFBTTtBQUNqQixXQUFXLFNBQVM7QUFDcEI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2x2QkE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsY0FBYyxXQUFXO0FBQ3pCLGNBQWMsU0FBUztBQUN2QixjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDRCQUE0QixHQUFHO0FBQy9CO0FBQ0EsS0FBSzs7QUFFTCxnQ0FBZ0MsR0FBRztBQUNuQztBQUNBLDhDQUE4QyxHQUFHO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLEtBQUs7QUFDL0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsR0FBRztBQUNwQztBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsR0FBRztBQUNsQztBQUNBO0FBQ0EsMENBQTBDLEtBQUs7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7Ozs7Ozs7QUM1SUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsTUFBTTtBQUN0QjtBQUNBOztBQUVBLE1BQU0sT0FBTyxZQUFZLFdBQVcsSUFBSTs7QUFFeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsSztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxHQUFHLE1BQU0sSUFBSTtBQUM5QztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQ3pFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLGFBQWE7QUFDaEI7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRUFBMkUsNkVBQTZFO0FBQ3hKO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0RUFBNEU7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RDtBQUM3RDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0NBQXNDOztBQUV0QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJEO0FBQzNEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLCtDQUErQzs7QUFFL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLFNBQVM7QUFDNUI7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEVBQTRFOztBQUU1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtREFBbUQ7QUFDbkQ7QUFDQSxtREFBbUQsaUVBQWlFO0FBQ3BIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQ0FBZ0MsT0FBTztBQUN2QztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQ0FBZ0MsT0FBTztBQUN2QztBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDNTZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxZQUFZO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLEVBQUU7QUFDUCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsQzs7Ozs7OztBQ3JMQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxhQUFhO0FBQ2hCO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrREFBa0Q7O0FBRWxEOztBQUVBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRDtBQUNuRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQ0FBb0M7O0FBRXBDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsb0RBQW9EO0FBQ3BEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUN6aUJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlO0FBQ2YsOENBQThDO0FBQzlDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0Q7QUFDdEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7QUMvREE7Ozs7Ozs7O0FDQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsaUJBQWlCLGlCQUFpQjtBQUNsQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7OztBQzFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOzs7QUFHRDtBQUNBLDJDQUEyQyxzQ0FBc0M7O0FBRWpGOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOzs7Ozs7OztBQzlGRDtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsaUJBQWlCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDaENBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsbUJBQW1CLHNCQUFzQjtBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ2xCQSwwQzs7Ozs7O0FDQUEsZ0M7Ozs7OztBQ0FBLDJDOzs7Ozs7QUNBQSxnQzs7Ozs7Ozs7O0FDQUE7Ozs7OztBQUVBLElBQU1BLFlBQVkseUJBQVUsRUFBQ0MsTUFBTSxJQUFQLEVBQVYsQ0FBbEI7O0FBRUFELFVBQ0tFLElBREwsQ0FDVSx3QkFEVixFQUVLQyxJQUZMLENBRVUsNkJBRlYsRUFFeUMsa0JBRnpDLEVBR0tDLEtBSEwsQ0FHVyx5QkFIWCxFQUlLQyxJQUpMLENBSVUsc0NBSlYsRUFLS0MsUUFMTCxDQUtjO0FBQUEsV0FBTUMsU0FBU0MsYUFBVCxDQUF1QixzQ0FBdkIsRUFBK0RDLElBQXJFO0FBQUEsQ0FMZCxFQU1LQyxHQU5MLEdBT0tDLElBUEwsQ0FPVSxVQUFDQyxNQUFEO0FBQUEsV0FBWUMsUUFBUUMsR0FBUixDQUFZRixNQUFaLENBQVo7QUFBQSxDQVBWLEVBUUtHLEtBUkwsQ0FRVyxVQUFDQyxLQUFEO0FBQUEsV0FBV0gsUUFBUUcsS0FBUixDQUFjLGdCQUFkLEVBQWdDQSxLQUFoQyxDQUFYO0FBQUEsQ0FSWCxFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0Nyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgOWNiMDYwZWJhODhkODQ4ZDg5OTciLCIvKipcbiAqIERldGVjdCBFbGVjdHJvbiByZW5kZXJlciBwcm9jZXNzLCB3aGljaCBpcyBub2RlLCBidXQgd2Ugc2hvdWxkXG4gKiB0cmVhdCBhcyBhIGJyb3dzZXIuXG4gKi9cblxuaWYgKHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiBwcm9jZXNzLnR5cGUgPT09ICdyZW5kZXJlcicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Jyb3dzZXIuanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9ub2RlLmpzJyk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZGVidWcvc3JjL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGEgZHVwbGV4IHN0cmVhbSBpcyBqdXN0IGEgc3RyZWFtIHRoYXQgaXMgYm90aCByZWFkYWJsZSBhbmQgd3JpdGFibGUuXG4vLyBTaW5jZSBKUyBkb2Vzbid0IGhhdmUgbXVsdGlwbGUgcHJvdG90eXBhbCBpbmhlcml0YW5jZSwgdGhpcyBjbGFzc1xuLy8gcHJvdG90eXBhbGx5IGluaGVyaXRzIGZyb20gUmVhZGFibGUsIGFuZCB0aGVuIHBhcmFzaXRpY2FsbHkgZnJvbVxuLy8gV3JpdGFibGUuXG5cbid1c2Ugc3RyaWN0JztcblxuLyo8cmVwbGFjZW1lbnQ+Ki9cblxudmFyIG9iamVjdEtleXMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiAob2JqKSB7XG4gIHZhciBrZXlzID0gW107XG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBrZXlzLnB1c2goa2V5KTtcbiAgfXJldHVybiBrZXlzO1xufTtcbi8qPC9yZXBsYWNlbWVudD4qL1xuXG5tb2R1bGUuZXhwb3J0cyA9IER1cGxleDtcblxuLyo8cmVwbGFjZW1lbnQ+Ki9cbnZhciBwcm9jZXNzTmV4dFRpY2sgPSByZXF1aXJlKCdwcm9jZXNzLW5leHRpY2stYXJncycpO1xuLyo8L3JlcGxhY2VtZW50PiovXG5cbi8qPHJlcGxhY2VtZW50PiovXG52YXIgdXRpbCA9IHJlcXVpcmUoJ2NvcmUtdXRpbC1pcycpO1xudXRpbC5pbmhlcml0cyA9IHJlcXVpcmUoJ2luaGVyaXRzJyk7XG4vKjwvcmVwbGFjZW1lbnQ+Ki9cblxudmFyIFJlYWRhYmxlID0gcmVxdWlyZSgnLi9fc3RyZWFtX3JlYWRhYmxlJyk7XG52YXIgV3JpdGFibGUgPSByZXF1aXJlKCcuL19zdHJlYW1fd3JpdGFibGUnKTtcblxudXRpbC5pbmhlcml0cyhEdXBsZXgsIFJlYWRhYmxlKTtcblxudmFyIGtleXMgPSBvYmplY3RLZXlzKFdyaXRhYmxlLnByb3RvdHlwZSk7XG5mb3IgKHZhciB2ID0gMDsgdiA8IGtleXMubGVuZ3RoOyB2KyspIHtcbiAgdmFyIG1ldGhvZCA9IGtleXNbdl07XG4gIGlmICghRHVwbGV4LnByb3RvdHlwZVttZXRob2RdKSBEdXBsZXgucHJvdG90eXBlW21ldGhvZF0gPSBXcml0YWJsZS5wcm90b3R5cGVbbWV0aG9kXTtcbn1cblxuZnVuY3Rpb24gRHVwbGV4KG9wdGlvbnMpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIER1cGxleCkpIHJldHVybiBuZXcgRHVwbGV4KG9wdGlvbnMpO1xuXG4gIFJlYWRhYmxlLmNhbGwodGhpcywgb3B0aW9ucyk7XG4gIFdyaXRhYmxlLmNhbGwodGhpcywgb3B0aW9ucyk7XG5cbiAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5yZWFkYWJsZSA9PT0gZmFsc2UpIHRoaXMucmVhZGFibGUgPSBmYWxzZTtcblxuICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLndyaXRhYmxlID09PSBmYWxzZSkgdGhpcy53cml0YWJsZSA9IGZhbHNlO1xuXG4gIHRoaXMuYWxsb3dIYWxmT3BlbiA9IHRydWU7XG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMuYWxsb3dIYWxmT3BlbiA9PT0gZmFsc2UpIHRoaXMuYWxsb3dIYWxmT3BlbiA9IGZhbHNlO1xuXG4gIHRoaXMub25jZSgnZW5kJywgb25lbmQpO1xufVxuXG4vLyB0aGUgbm8taGFsZi1vcGVuIGVuZm9yY2VyXG5mdW5jdGlvbiBvbmVuZCgpIHtcbiAgLy8gaWYgd2UgYWxsb3cgaGFsZi1vcGVuIHN0YXRlLCBvciBpZiB0aGUgd3JpdGFibGUgc2lkZSBlbmRlZCxcbiAgLy8gdGhlbiB3ZSdyZSBvay5cbiAgaWYgKHRoaXMuYWxsb3dIYWxmT3BlbiB8fCB0aGlzLl93cml0YWJsZVN0YXRlLmVuZGVkKSByZXR1cm47XG5cbiAgLy8gbm8gbW9yZSBkYXRhIGNhbiBiZSB3cml0dGVuLlxuICAvLyBCdXQgYWxsb3cgbW9yZSB3cml0ZXMgdG8gaGFwcGVuIGluIHRoaXMgdGljay5cbiAgcHJvY2Vzc05leHRUaWNrKG9uRW5kTlQsIHRoaXMpO1xufVxuXG5mdW5jdGlvbiBvbkVuZE5UKHNlbGYpIHtcbiAgc2VsZi5lbmQoKTtcbn1cblxuZnVuY3Rpb24gZm9yRWFjaCh4cywgZikge1xuICBmb3IgKHZhciBpID0gMCwgbCA9IHhzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGYoeHNbaV0sIGkpO1xuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWRhYmxlLXN0cmVhbS9saWIvX3N0cmVhbV9kdXBsZXguanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYnVmZmVyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYnVmZmVyXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXRpbFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInV0aWxcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuLy8gTk9URTogVGhlc2UgdHlwZSBjaGVja2luZyBmdW5jdGlvbnMgaW50ZW50aW9uYWxseSBkb24ndCB1c2UgYGluc3RhbmNlb2ZgXG4vLyBiZWNhdXNlIGl0IGlzIGZyYWdpbGUgYW5kIGNhbiBiZSBlYXNpbHkgZmFrZWQgd2l0aCBgT2JqZWN0LmNyZWF0ZSgpYC5cblxuZnVuY3Rpb24gaXNBcnJheShhcmcpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkpIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShhcmcpO1xuICB9XG4gIHJldHVybiBvYmplY3RUb1N0cmluZyhhcmcpID09PSAnW29iamVjdCBBcnJheV0nO1xufVxuZXhwb3J0cy5pc0FycmF5ID0gaXNBcnJheTtcblxuZnVuY3Rpb24gaXNCb29sZWFuKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ2Jvb2xlYW4nO1xufVxuZXhwb3J0cy5pc0Jvb2xlYW4gPSBpc0Jvb2xlYW47XG5cbmZ1bmN0aW9uIGlzTnVsbChhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gbnVsbDtcbn1cbmV4cG9ydHMuaXNOdWxsID0gaXNOdWxsO1xuXG5mdW5jdGlvbiBpc051bGxPclVuZGVmaW5lZChhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PSBudWxsO1xufVxuZXhwb3J0cy5pc051bGxPclVuZGVmaW5lZCA9IGlzTnVsbE9yVW5kZWZpbmVkO1xuXG5mdW5jdGlvbiBpc051bWJlcihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdudW1iZXInO1xufVxuZXhwb3J0cy5pc051bWJlciA9IGlzTnVtYmVyO1xuXG5mdW5jdGlvbiBpc1N0cmluZyhhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdzdHJpbmcnO1xufVxuZXhwb3J0cy5pc1N0cmluZyA9IGlzU3RyaW5nO1xuXG5mdW5jdGlvbiBpc1N5bWJvbChhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdzeW1ib2wnO1xufVxuZXhwb3J0cy5pc1N5bWJvbCA9IGlzU3ltYm9sO1xuXG5mdW5jdGlvbiBpc1VuZGVmaW5lZChhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gdm9pZCAwO1xufVxuZXhwb3J0cy5pc1VuZGVmaW5lZCA9IGlzVW5kZWZpbmVkO1xuXG5mdW5jdGlvbiBpc1JlZ0V4cChyZSkge1xuICByZXR1cm4gb2JqZWN0VG9TdHJpbmcocmUpID09PSAnW29iamVjdCBSZWdFeHBdJztcbn1cbmV4cG9ydHMuaXNSZWdFeHAgPSBpc1JlZ0V4cDtcblxuZnVuY3Rpb24gaXNPYmplY3QoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnb2JqZWN0JyAmJiBhcmcgIT09IG51bGw7XG59XG5leHBvcnRzLmlzT2JqZWN0ID0gaXNPYmplY3Q7XG5cbmZ1bmN0aW9uIGlzRGF0ZShkKSB7XG4gIHJldHVybiBvYmplY3RUb1N0cmluZyhkKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufVxuZXhwb3J0cy5pc0RhdGUgPSBpc0RhdGU7XG5cbmZ1bmN0aW9uIGlzRXJyb3IoZSkge1xuICByZXR1cm4gKG9iamVjdFRvU3RyaW5nKGUpID09PSAnW29iamVjdCBFcnJvcl0nIHx8IGUgaW5zdGFuY2VvZiBFcnJvcik7XG59XG5leHBvcnRzLmlzRXJyb3IgPSBpc0Vycm9yO1xuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ2Z1bmN0aW9uJztcbn1cbmV4cG9ydHMuaXNGdW5jdGlvbiA9IGlzRnVuY3Rpb247XG5cbmZ1bmN0aW9uIGlzUHJpbWl0aXZlKGFyZykge1xuICByZXR1cm4gYXJnID09PSBudWxsIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnYm9vbGVhbicgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdudW1iZXInIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnc3RyaW5nJyB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ3N5bWJvbCcgfHwgIC8vIEVTNiBzeW1ib2xcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICd1bmRlZmluZWQnO1xufVxuZXhwb3J0cy5pc1ByaW1pdGl2ZSA9IGlzUHJpbWl0aXZlO1xuXG5leHBvcnRzLmlzQnVmZmVyID0gQnVmZmVyLmlzQnVmZmVyO1xuXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyhvKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobyk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS11dGlsLWlzL2xpYi91dGlsLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInRyeSB7XG4gIHZhciB1dGlsID0gcmVxdWlyZSgndXRpbCcpO1xuICBpZiAodHlwZW9mIHV0aWwuaW5oZXJpdHMgIT09ICdmdW5jdGlvbicpIHRocm93ICcnO1xuICBtb2R1bGUuZXhwb3J0cyA9IHV0aWwuaW5oZXJpdHM7XG59IGNhdGNoIChlKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9pbmhlcml0c19icm93c2VyLmpzJyk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaW5oZXJpdHMvaW5oZXJpdHMuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXZlbnRzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZXZlbnRzXCJcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYnVmZmVyID0gcmVxdWlyZSgnYnVmZmVyJyk7XG52YXIgQnVmZmVyID0gYnVmZmVyLkJ1ZmZlcjtcbnZhciBTbG93QnVmZmVyID0gYnVmZmVyLlNsb3dCdWZmZXI7XG52YXIgTUFYX0xFTiA9IGJ1ZmZlci5rTWF4TGVuZ3RoIHx8IDIxNDc0ODM2NDc7XG5leHBvcnRzLmFsbG9jID0gZnVuY3Rpb24gYWxsb2Moc2l6ZSwgZmlsbCwgZW5jb2RpbmcpIHtcbiAgaWYgKHR5cGVvZiBCdWZmZXIuYWxsb2MgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gQnVmZmVyLmFsbG9jKHNpemUsIGZpbGwsIGVuY29kaW5nKTtcbiAgfVxuICBpZiAodHlwZW9mIGVuY29kaW5nID09PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2VuY29kaW5nIG11c3Qgbm90IGJlIG51bWJlcicpO1xuICB9XG4gIGlmICh0eXBlb2Ygc2l6ZSAhPT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdzaXplIG11c3QgYmUgYSBudW1iZXInKTtcbiAgfVxuICBpZiAoc2l6ZSA+IE1BWF9MRU4pIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignc2l6ZSBpcyB0b28gbGFyZ2UnKTtcbiAgfVxuICB2YXIgZW5jID0gZW5jb2Rpbmc7XG4gIHZhciBfZmlsbCA9IGZpbGw7XG4gIGlmIChfZmlsbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZW5jID0gdW5kZWZpbmVkO1xuICAgIF9maWxsID0gMDtcbiAgfVxuICB2YXIgYnVmID0gbmV3IEJ1ZmZlcihzaXplKTtcbiAgaWYgKHR5cGVvZiBfZmlsbCA9PT0gJ3N0cmluZycpIHtcbiAgICB2YXIgZmlsbEJ1ZiA9IG5ldyBCdWZmZXIoX2ZpbGwsIGVuYyk7XG4gICAgdmFyIGZsZW4gPSBmaWxsQnVmLmxlbmd0aDtcbiAgICB2YXIgaSA9IC0xO1xuICAgIHdoaWxlICgrK2kgPCBzaXplKSB7XG4gICAgICBidWZbaV0gPSBmaWxsQnVmW2kgJSBmbGVuXTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgYnVmLmZpbGwoX2ZpbGwpO1xuICB9XG4gIHJldHVybiBidWY7XG59XG5leHBvcnRzLmFsbG9jVW5zYWZlID0gZnVuY3Rpb24gYWxsb2NVbnNhZmUoc2l6ZSkge1xuICBpZiAodHlwZW9mIEJ1ZmZlci5hbGxvY1Vuc2FmZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBCdWZmZXIuYWxsb2NVbnNhZmUoc2l6ZSk7XG4gIH1cbiAgaWYgKHR5cGVvZiBzaXplICE9PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3NpemUgbXVzdCBiZSBhIG51bWJlcicpO1xuICB9XG4gIGlmIChzaXplID4gTUFYX0xFTikge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdzaXplIGlzIHRvbyBsYXJnZScpO1xuICB9XG4gIHJldHVybiBuZXcgQnVmZmVyKHNpemUpO1xufVxuZXhwb3J0cy5mcm9tID0gZnVuY3Rpb24gZnJvbSh2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKSB7XG4gIGlmICh0eXBlb2YgQnVmZmVyLmZyb20gPT09ICdmdW5jdGlvbicgJiYgKCFnbG9iYWwuVWludDhBcnJheSB8fCBVaW50OEFycmF5LmZyb20gIT09IEJ1ZmZlci5mcm9tKSkge1xuICAgIHJldHVybiBCdWZmZXIuZnJvbSh2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKTtcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1widmFsdWVcIiBhcmd1bWVudCBtdXN0IG5vdCBiZSBhIG51bWJlcicpO1xuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIG5ldyBCdWZmZXIodmFsdWUsIGVuY29kaW5nT3JPZmZzZXQpO1xuICB9XG4gIGlmICh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnICYmIHZhbHVlIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcbiAgICB2YXIgb2Zmc2V0ID0gZW5jb2RpbmdPck9mZnNldDtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgcmV0dXJuIG5ldyBCdWZmZXIodmFsdWUpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG9mZnNldCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIG9mZnNldCA9IDA7XG4gICAgfVxuICAgIHZhciBsZW4gPSBsZW5ndGg7XG4gICAgaWYgKHR5cGVvZiBsZW4gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBsZW4gPSB2YWx1ZS5ieXRlTGVuZ3RoIC0gb2Zmc2V0O1xuICAgIH1cbiAgICBpZiAob2Zmc2V0ID49IHZhbHVlLmJ5dGVMZW5ndGgpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdcXCdvZmZzZXRcXCcgaXMgb3V0IG9mIGJvdW5kcycpO1xuICAgIH1cbiAgICBpZiAobGVuID4gdmFsdWUuYnl0ZUxlbmd0aCAtIG9mZnNldCkge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1xcJ2xlbmd0aFxcJyBpcyBvdXQgb2YgYm91bmRzJyk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgQnVmZmVyKHZhbHVlLnNsaWNlKG9mZnNldCwgb2Zmc2V0ICsgbGVuKSk7XG4gIH1cbiAgaWYgKEJ1ZmZlci5pc0J1ZmZlcih2YWx1ZSkpIHtcbiAgICB2YXIgb3V0ID0gbmV3IEJ1ZmZlcih2YWx1ZS5sZW5ndGgpO1xuICAgIHZhbHVlLmNvcHkob3V0LCAwLCAwLCB2YWx1ZS5sZW5ndGgpO1xuICAgIHJldHVybiBvdXQ7XG4gIH1cbiAgaWYgKHZhbHVlKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpIHx8ICh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnICYmIHZhbHVlLmJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB8fCAnbGVuZ3RoJyBpbiB2YWx1ZSkge1xuICAgICAgcmV0dXJuIG5ldyBCdWZmZXIodmFsdWUpO1xuICAgIH1cbiAgICBpZiAodmFsdWUudHlwZSA9PT0gJ0J1ZmZlcicgJiYgQXJyYXkuaXNBcnJheSh2YWx1ZS5kYXRhKSkge1xuICAgICAgcmV0dXJuIG5ldyBCdWZmZXIodmFsdWUuZGF0YSk7XG4gICAgfVxuICB9XG5cbiAgdGhyb3cgbmV3IFR5cGVFcnJvcignRmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIHN0cmluZywgQnVmZmVyLCAnICsgJ0FycmF5QnVmZmVyLCBBcnJheSwgb3IgYXJyYXktbGlrZSBvYmplY3QuJyk7XG59XG5leHBvcnRzLmFsbG9jVW5zYWZlU2xvdyA9IGZ1bmN0aW9uIGFsbG9jVW5zYWZlU2xvdyhzaXplKSB7XG4gIGlmICh0eXBlb2YgQnVmZmVyLmFsbG9jVW5zYWZlU2xvdyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBCdWZmZXIuYWxsb2NVbnNhZmVTbG93KHNpemUpO1xuICB9XG4gIGlmICh0eXBlb2Ygc2l6ZSAhPT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdzaXplIG11c3QgYmUgYSBudW1iZXInKTtcbiAgfVxuICBpZiAoc2l6ZSA+PSBNQVhfTEVOKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3NpemUgaXMgdG9vIGxhcmdlJyk7XG4gIH1cbiAgcmV0dXJuIG5ldyBTbG93QnVmZmVyKHNpemUpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1ZmZlci1zaGltcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbmlmICghcHJvY2Vzcy52ZXJzaW9uIHx8XG4gICAgcHJvY2Vzcy52ZXJzaW9uLmluZGV4T2YoJ3YwLicpID09PSAwIHx8XG4gICAgcHJvY2Vzcy52ZXJzaW9uLmluZGV4T2YoJ3YxLicpID09PSAwICYmIHByb2Nlc3MudmVyc2lvbi5pbmRleE9mKCd2MS44LicpICE9PSAwKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gbmV4dFRpY2s7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHByb2Nlc3MubmV4dFRpY2s7XG59XG5cbmZ1bmN0aW9uIG5leHRUaWNrKGZuLCBhcmcxLCBhcmcyLCBhcmczKSB7XG4gIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImNhbGxiYWNrXCIgYXJndW1lbnQgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG4gIH1cbiAgdmFyIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gIHZhciBhcmdzLCBpO1xuICBzd2l0Y2ggKGxlbikge1xuICBjYXNlIDA6XG4gIGNhc2UgMTpcbiAgICByZXR1cm4gcHJvY2Vzcy5uZXh0VGljayhmbik7XG4gIGNhc2UgMjpcbiAgICByZXR1cm4gcHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbiBhZnRlclRpY2tPbmUoKSB7XG4gICAgICBmbi5jYWxsKG51bGwsIGFyZzEpO1xuICAgIH0pO1xuICBjYXNlIDM6XG4gICAgcmV0dXJuIHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24gYWZ0ZXJUaWNrVHdvKCkge1xuICAgICAgZm4uY2FsbChudWxsLCBhcmcxLCBhcmcyKTtcbiAgICB9KTtcbiAgY2FzZSA0OlxuICAgIHJldHVybiBwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uIGFmdGVyVGlja1RocmVlKCkge1xuICAgICAgZm4uY2FsbChudWxsLCBhcmcxLCBhcmcyLCBhcmczKTtcbiAgICB9KTtcbiAgZGVmYXVsdDpcbiAgICBhcmdzID0gbmV3IEFycmF5KGxlbiAtIDEpO1xuICAgIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgYXJncy5sZW5ndGgpIHtcbiAgICAgIGFyZ3NbaSsrXSA9IGFyZ3VtZW50c1tpXTtcbiAgICB9XG4gICAgcmV0dXJuIHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24gYWZ0ZXJUaWNrKCkge1xuICAgICAgZm4uYXBwbHkobnVsbCwgYXJncyk7XG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9wcm9jZXNzLW5leHRpY2stYXJncy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbi8qKlxuICogQW4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSBhbHRlcm5hdGl2ZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBhcmdzIHNvbWV0aGluZyB3aXRoIGEgbGVuZ3RoXG4gKiBAcGFyYW0ge051bWJlcn0gc2xpY2VcbiAqIEBwYXJhbSB7TnVtYmVyfSBzbGljZUVuZFxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmdzLCBzbGljZSwgc2xpY2VFbmQpIHtcbiAgdmFyIHJldCA9IFtdO1xuICB2YXIgbGVuID0gYXJncy5sZW5ndGg7XG5cbiAgaWYgKDAgPT09IGxlbikgcmV0dXJuIHJldDtcblxuICB2YXIgc3RhcnQgPSBzbGljZSA8IDBcbiAgICA/IE1hdGgubWF4KDAsIHNsaWNlICsgbGVuKVxuICAgIDogc2xpY2UgfHwgMDtcblxuICBpZiAoc2xpY2VFbmQgIT09IHVuZGVmaW5lZCkge1xuICAgIGxlbiA9IHNsaWNlRW5kIDwgMFxuICAgICAgPyBzbGljZUVuZCArIGxlblxuICAgICAgOiBzbGljZUVuZFxuICB9XG5cbiAgd2hpbGUgKGxlbi0tID4gc3RhcnQpIHtcbiAgICByZXRbbGVuIC0gc3RhcnRdID0gYXJnc1tsZW5dO1xuICB9XG5cbiAgcmV0dXJuIHJldDtcbn1cblxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3NsaWNlZC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImZzXCJcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuLyoqXG4gKiBUaGlzIGlzIHRoZSBjb21tb24gbG9naWMgZm9yIGJvdGggdGhlIE5vZGUuanMgYW5kIHdlYiBicm93c2VyXG4gKiBpbXBsZW1lbnRhdGlvbnMgb2YgYGRlYnVnKClgLlxuICpcbiAqIEV4cG9zZSBgZGVidWcoKWAgYXMgdGhlIG1vZHVsZS5cbiAqL1xuXG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVEZWJ1Zy5kZWJ1ZyA9IGNyZWF0ZURlYnVnWydkZWZhdWx0J10gPSBjcmVhdGVEZWJ1ZztcbmV4cG9ydHMuY29lcmNlID0gY29lcmNlO1xuZXhwb3J0cy5kaXNhYmxlID0gZGlzYWJsZTtcbmV4cG9ydHMuZW5hYmxlID0gZW5hYmxlO1xuZXhwb3J0cy5lbmFibGVkID0gZW5hYmxlZDtcbmV4cG9ydHMuaHVtYW5pemUgPSByZXF1aXJlKCdtcycpO1xuXG4vKipcbiAqIFRoZSBjdXJyZW50bHkgYWN0aXZlIGRlYnVnIG1vZGUgbmFtZXMsIGFuZCBuYW1lcyB0byBza2lwLlxuICovXG5cbmV4cG9ydHMubmFtZXMgPSBbXTtcbmV4cG9ydHMuc2tpcHMgPSBbXTtcblxuLyoqXG4gKiBNYXAgb2Ygc3BlY2lhbCBcIiVuXCIgaGFuZGxpbmcgZnVuY3Rpb25zLCBmb3IgdGhlIGRlYnVnIFwiZm9ybWF0XCIgYXJndW1lbnQuXG4gKlxuICogVmFsaWQga2V5IG5hbWVzIGFyZSBhIHNpbmdsZSwgbG93ZXIgb3IgdXBwZXItY2FzZSBsZXR0ZXIsIGkuZS4gXCJuXCIgYW5kIFwiTlwiLlxuICovXG5cbmV4cG9ydHMuZm9ybWF0dGVycyA9IHt9O1xuXG4vKipcbiAqIFByZXZpb3VzIGxvZyB0aW1lc3RhbXAuXG4gKi9cblxudmFyIHByZXZUaW1lO1xuXG4vKipcbiAqIFNlbGVjdCBhIGNvbG9yLlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZVxuICogQHJldHVybiB7TnVtYmVyfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gc2VsZWN0Q29sb3IobmFtZXNwYWNlKSB7XG4gIHZhciBoYXNoID0gMCwgaTtcblxuICBmb3IgKGkgaW4gbmFtZXNwYWNlKSB7XG4gICAgaGFzaCAgPSAoKGhhc2ggPDwgNSkgLSBoYXNoKSArIG5hbWVzcGFjZS5jaGFyQ29kZUF0KGkpO1xuICAgIGhhc2ggfD0gMDsgLy8gQ29udmVydCB0byAzMmJpdCBpbnRlZ2VyXG4gIH1cblxuICByZXR1cm4gZXhwb3J0cy5jb2xvcnNbTWF0aC5hYnMoaGFzaCkgJSBleHBvcnRzLmNvbG9ycy5sZW5ndGhdO1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIGRlYnVnZ2VyIHdpdGggdGhlIGdpdmVuIGBuYW1lc3BhY2VgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVEZWJ1ZyhuYW1lc3BhY2UpIHtcblxuICBmdW5jdGlvbiBkZWJ1ZygpIHtcbiAgICAvLyBkaXNhYmxlZD9cbiAgICBpZiAoIWRlYnVnLmVuYWJsZWQpIHJldHVybjtcblxuICAgIHZhciBzZWxmID0gZGVidWc7XG5cbiAgICAvLyBzZXQgYGRpZmZgIHRpbWVzdGFtcFxuICAgIHZhciBjdXJyID0gK25ldyBEYXRlKCk7XG4gICAgdmFyIG1zID0gY3VyciAtIChwcmV2VGltZSB8fCBjdXJyKTtcbiAgICBzZWxmLmRpZmYgPSBtcztcbiAgICBzZWxmLnByZXYgPSBwcmV2VGltZTtcbiAgICBzZWxmLmN1cnIgPSBjdXJyO1xuICAgIHByZXZUaW1lID0gY3VycjtcblxuICAgIC8vIHR1cm4gdGhlIGBhcmd1bWVudHNgIGludG8gYSBwcm9wZXIgQXJyYXlcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaV07XG4gICAgfVxuXG4gICAgYXJnc1swXSA9IGV4cG9ydHMuY29lcmNlKGFyZ3NbMF0pO1xuXG4gICAgaWYgKCdzdHJpbmcnICE9PSB0eXBlb2YgYXJnc1swXSkge1xuICAgICAgLy8gYW55dGhpbmcgZWxzZSBsZXQncyBpbnNwZWN0IHdpdGggJU9cbiAgICAgIGFyZ3MudW5zaGlmdCgnJU8nKTtcbiAgICB9XG5cbiAgICAvLyBhcHBseSBhbnkgYGZvcm1hdHRlcnNgIHRyYW5zZm9ybWF0aW9uc1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgYXJnc1swXSA9IGFyZ3NbMF0ucmVwbGFjZSgvJShbYS16QS1aJV0pL2csIGZ1bmN0aW9uKG1hdGNoLCBmb3JtYXQpIHtcbiAgICAgIC8vIGlmIHdlIGVuY291bnRlciBhbiBlc2NhcGVkICUgdGhlbiBkb24ndCBpbmNyZWFzZSB0aGUgYXJyYXkgaW5kZXhcbiAgICAgIGlmIChtYXRjaCA9PT0gJyUlJykgcmV0dXJuIG1hdGNoO1xuICAgICAgaW5kZXgrKztcbiAgICAgIHZhciBmb3JtYXR0ZXIgPSBleHBvcnRzLmZvcm1hdHRlcnNbZm9ybWF0XTtcbiAgICAgIGlmICgnZnVuY3Rpb24nID09PSB0eXBlb2YgZm9ybWF0dGVyKSB7XG4gICAgICAgIHZhciB2YWwgPSBhcmdzW2luZGV4XTtcbiAgICAgICAgbWF0Y2ggPSBmb3JtYXR0ZXIuY2FsbChzZWxmLCB2YWwpO1xuXG4gICAgICAgIC8vIG5vdyB3ZSBuZWVkIHRvIHJlbW92ZSBgYXJnc1tpbmRleF1gIHNpbmNlIGl0J3MgaW5saW5lZCBpbiB0aGUgYGZvcm1hdGBcbiAgICAgICAgYXJncy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICBpbmRleC0tO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG1hdGNoO1xuICAgIH0pO1xuXG4gICAgLy8gYXBwbHkgZW52LXNwZWNpZmljIGZvcm1hdHRpbmcgKGNvbG9ycywgZXRjLilcbiAgICBleHBvcnRzLmZvcm1hdEFyZ3MuY2FsbChzZWxmLCBhcmdzKTtcblxuICAgIHZhciBsb2dGbiA9IGRlYnVnLmxvZyB8fCBleHBvcnRzLmxvZyB8fCBjb25zb2xlLmxvZy5iaW5kKGNvbnNvbGUpO1xuICAgIGxvZ0ZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICB9XG5cbiAgZGVidWcubmFtZXNwYWNlID0gbmFtZXNwYWNlO1xuICBkZWJ1Zy5lbmFibGVkID0gZXhwb3J0cy5lbmFibGVkKG5hbWVzcGFjZSk7XG4gIGRlYnVnLnVzZUNvbG9ycyA9IGV4cG9ydHMudXNlQ29sb3JzKCk7XG4gIGRlYnVnLmNvbG9yID0gc2VsZWN0Q29sb3IobmFtZXNwYWNlKTtcblxuICAvLyBlbnYtc3BlY2lmaWMgaW5pdGlhbGl6YXRpb24gbG9naWMgZm9yIGRlYnVnIGluc3RhbmNlc1xuICBpZiAoJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIGV4cG9ydHMuaW5pdCkge1xuICAgIGV4cG9ydHMuaW5pdChkZWJ1Zyk7XG4gIH1cblxuICByZXR1cm4gZGVidWc7XG59XG5cbi8qKlxuICogRW5hYmxlcyBhIGRlYnVnIG1vZGUgYnkgbmFtZXNwYWNlcy4gVGhpcyBjYW4gaW5jbHVkZSBtb2Rlc1xuICogc2VwYXJhdGVkIGJ5IGEgY29sb24gYW5kIHdpbGRjYXJkcy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlc1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBlbmFibGUobmFtZXNwYWNlcykge1xuICBleHBvcnRzLnNhdmUobmFtZXNwYWNlcyk7XG5cbiAgZXhwb3J0cy5uYW1lcyA9IFtdO1xuICBleHBvcnRzLnNraXBzID0gW107XG5cbiAgdmFyIHNwbGl0ID0gKG5hbWVzcGFjZXMgfHwgJycpLnNwbGl0KC9bXFxzLF0rLyk7XG4gIHZhciBsZW4gPSBzcGxpdC5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIGlmICghc3BsaXRbaV0pIGNvbnRpbnVlOyAvLyBpZ25vcmUgZW1wdHkgc3RyaW5nc1xuICAgIG5hbWVzcGFjZXMgPSBzcGxpdFtpXS5yZXBsYWNlKC9cXCovZywgJy4qPycpO1xuICAgIGlmIChuYW1lc3BhY2VzWzBdID09PSAnLScpIHtcbiAgICAgIGV4cG9ydHMuc2tpcHMucHVzaChuZXcgUmVnRXhwKCdeJyArIG5hbWVzcGFjZXMuc3Vic3RyKDEpICsgJyQnKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV4cG9ydHMubmFtZXMucHVzaChuZXcgUmVnRXhwKCdeJyArIG5hbWVzcGFjZXMgKyAnJCcpKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBEaXNhYmxlIGRlYnVnIG91dHB1dC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGRpc2FibGUoKSB7XG4gIGV4cG9ydHMuZW5hYmxlKCcnKTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIG1vZGUgbmFtZSBpcyBlbmFibGVkLCBmYWxzZSBvdGhlcndpc2UuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGVuYWJsZWQobmFtZSkge1xuICB2YXIgaSwgbGVuO1xuICBmb3IgKGkgPSAwLCBsZW4gPSBleHBvcnRzLnNraXBzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKGV4cG9ydHMuc2tpcHNbaV0udGVzdChuYW1lKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBmb3IgKGkgPSAwLCBsZW4gPSBleHBvcnRzLm5hbWVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKGV4cG9ydHMubmFtZXNbaV0udGVzdChuYW1lKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuLyoqXG4gKiBDb2VyY2UgYHZhbGAuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsXG4gKiBAcmV0dXJuIHtNaXhlZH1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGNvZXJjZSh2YWwpIHtcbiAgaWYgKHZhbCBpbnN0YW5jZW9mIEVycm9yKSByZXR1cm4gdmFsLnN0YWNrIHx8IHZhbC5tZXNzYWdlO1xuICByZXR1cm4gdmFsO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2RlYnVnL3NyYy9kZWJ1Zy5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHdyYXBweSA9IHJlcXVpcmUoJ3dyYXBweScpXG5tb2R1bGUuZXhwb3J0cyA9IHdyYXBweShvbmNlKVxubW9kdWxlLmV4cG9ydHMuc3RyaWN0ID0gd3JhcHB5KG9uY2VTdHJpY3QpXG5cbm9uY2UucHJvdG8gPSBvbmNlKGZ1bmN0aW9uICgpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZ1bmN0aW9uLnByb3RvdHlwZSwgJ29uY2UnLCB7XG4gICAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBvbmNlKHRoaXMpXG4gICAgfSxcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSlcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRnVuY3Rpb24ucHJvdG90eXBlLCAnb25jZVN0cmljdCcsIHtcbiAgICB2YWx1ZTogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIG9uY2VTdHJpY3QodGhpcylcbiAgICB9LFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KVxufSlcblxuZnVuY3Rpb24gb25jZSAoZm4pIHtcbiAgdmFyIGYgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGYuY2FsbGVkKSByZXR1cm4gZi52YWx1ZVxuICAgIGYuY2FsbGVkID0gdHJ1ZVxuICAgIHJldHVybiBmLnZhbHVlID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKVxuICB9XG4gIGYuY2FsbGVkID0gZmFsc2VcbiAgcmV0dXJuIGZcbn1cblxuZnVuY3Rpb24gb25jZVN0cmljdCAoZm4pIHtcbiAgdmFyIGYgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGYuY2FsbGVkKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGYub25jZUVycm9yKVxuICAgIGYuY2FsbGVkID0gdHJ1ZVxuICAgIHJldHVybiBmLnZhbHVlID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKVxuICB9XG4gIHZhciBuYW1lID0gZm4ubmFtZSB8fCAnRnVuY3Rpb24gd3JhcHBlZCB3aXRoIGBvbmNlYCdcbiAgZi5vbmNlRXJyb3IgPSBuYW1lICsgXCIgc2hvdWxkbid0IGJlIGNhbGxlZCBtb3JlIHRoYW4gb25jZVwiXG4gIGYuY2FsbGVkID0gZmFsc2VcbiAgcmV0dXJuIGZcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9vbmNlL29uY2UuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG52YXIgQnVmZmVyID0gcmVxdWlyZSgnYnVmZmVyJykuQnVmZmVyO1xuXG52YXIgaXNCdWZmZXJFbmNvZGluZyA9IEJ1ZmZlci5pc0VuY29kaW5nXG4gIHx8IGZ1bmN0aW9uKGVuY29kaW5nKSB7XG4gICAgICAgc3dpdGNoIChlbmNvZGluZyAmJiBlbmNvZGluZy50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgICBjYXNlICdoZXgnOiBjYXNlICd1dGY4JzogY2FzZSAndXRmLTgnOiBjYXNlICdhc2NpaSc6IGNhc2UgJ2JpbmFyeSc6IGNhc2UgJ2Jhc2U2NCc6IGNhc2UgJ3VjczInOiBjYXNlICd1Y3MtMic6IGNhc2UgJ3V0ZjE2bGUnOiBjYXNlICd1dGYtMTZsZSc6IGNhc2UgJ3Jhdyc6IHJldHVybiB0cnVlO1xuICAgICAgICAgZGVmYXVsdDogcmV0dXJuIGZhbHNlO1xuICAgICAgIH1cbiAgICAgfVxuXG5cbmZ1bmN0aW9uIGFzc2VydEVuY29kaW5nKGVuY29kaW5nKSB7XG4gIGlmIChlbmNvZGluZyAmJiAhaXNCdWZmZXJFbmNvZGluZyhlbmNvZGluZykpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZyk7XG4gIH1cbn1cblxuLy8gU3RyaW5nRGVjb2RlciBwcm92aWRlcyBhbiBpbnRlcmZhY2UgZm9yIGVmZmljaWVudGx5IHNwbGl0dGluZyBhIHNlcmllcyBvZlxuLy8gYnVmZmVycyBpbnRvIGEgc2VyaWVzIG9mIEpTIHN0cmluZ3Mgd2l0aG91dCBicmVha2luZyBhcGFydCBtdWx0aS1ieXRlXG4vLyBjaGFyYWN0ZXJzLiBDRVNVLTggaXMgaGFuZGxlZCBhcyBwYXJ0IG9mIHRoZSBVVEYtOCBlbmNvZGluZy5cbi8vXG4vLyBAVE9ETyBIYW5kbGluZyBhbGwgZW5jb2RpbmdzIGluc2lkZSBhIHNpbmdsZSBvYmplY3QgbWFrZXMgaXQgdmVyeSBkaWZmaWN1bHRcbi8vIHRvIHJlYXNvbiBhYm91dCB0aGlzIGNvZGUsIHNvIGl0IHNob3VsZCBiZSBzcGxpdCB1cCBpbiB0aGUgZnV0dXJlLlxuLy8gQFRPRE8gVGhlcmUgc2hvdWxkIGJlIGEgdXRmOC1zdHJpY3QgZW5jb2RpbmcgdGhhdCByZWplY3RzIGludmFsaWQgVVRGLTggY29kZVxuLy8gcG9pbnRzIGFzIHVzZWQgYnkgQ0VTVS04LlxudmFyIFN0cmluZ0RlY29kZXIgPSBleHBvcnRzLlN0cmluZ0RlY29kZXIgPSBmdW5jdGlvbihlbmNvZGluZykge1xuICB0aGlzLmVuY29kaW5nID0gKGVuY29kaW5nIHx8ICd1dGY4JykudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9bLV9dLywgJycpO1xuICBhc3NlcnRFbmNvZGluZyhlbmNvZGluZyk7XG4gIHN3aXRjaCAodGhpcy5lbmNvZGluZykge1xuICAgIGNhc2UgJ3V0ZjgnOlxuICAgICAgLy8gQ0VTVS04IHJlcHJlc2VudHMgZWFjaCBvZiBTdXJyb2dhdGUgUGFpciBieSAzLWJ5dGVzXG4gICAgICB0aGlzLnN1cnJvZ2F0ZVNpemUgPSAzO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAndWNzMic6XG4gICAgY2FzZSAndXRmMTZsZSc6XG4gICAgICAvLyBVVEYtMTYgcmVwcmVzZW50cyBlYWNoIG9mIFN1cnJvZ2F0ZSBQYWlyIGJ5IDItYnl0ZXNcbiAgICAgIHRoaXMuc3Vycm9nYXRlU2l6ZSA9IDI7XG4gICAgICB0aGlzLmRldGVjdEluY29tcGxldGVDaGFyID0gdXRmMTZEZXRlY3RJbmNvbXBsZXRlQ2hhcjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICAvLyBCYXNlLTY0IHN0b3JlcyAzIGJ5dGVzIGluIDQgY2hhcnMsIGFuZCBwYWRzIHRoZSByZW1haW5kZXIuXG4gICAgICB0aGlzLnN1cnJvZ2F0ZVNpemUgPSAzO1xuICAgICAgdGhpcy5kZXRlY3RJbmNvbXBsZXRlQ2hhciA9IGJhc2U2NERldGVjdEluY29tcGxldGVDaGFyO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRoaXMud3JpdGUgPSBwYXNzVGhyb3VnaFdyaXRlO1xuICAgICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRW5vdWdoIHNwYWNlIHRvIHN0b3JlIGFsbCBieXRlcyBvZiBhIHNpbmdsZSBjaGFyYWN0ZXIuIFVURi04IG5lZWRzIDRcbiAgLy8gYnl0ZXMsIGJ1dCBDRVNVLTggbWF5IHJlcXVpcmUgdXAgdG8gNiAoMyBieXRlcyBwZXIgc3Vycm9nYXRlKS5cbiAgdGhpcy5jaGFyQnVmZmVyID0gbmV3IEJ1ZmZlcig2KTtcbiAgLy8gTnVtYmVyIG9mIGJ5dGVzIHJlY2VpdmVkIGZvciB0aGUgY3VycmVudCBpbmNvbXBsZXRlIG11bHRpLWJ5dGUgY2hhcmFjdGVyLlxuICB0aGlzLmNoYXJSZWNlaXZlZCA9IDA7XG4gIC8vIE51bWJlciBvZiBieXRlcyBleHBlY3RlZCBmb3IgdGhlIGN1cnJlbnQgaW5jb21wbGV0ZSBtdWx0aS1ieXRlIGNoYXJhY3Rlci5cbiAgdGhpcy5jaGFyTGVuZ3RoID0gMDtcbn07XG5cblxuLy8gd3JpdGUgZGVjb2RlcyB0aGUgZ2l2ZW4gYnVmZmVyIGFuZCByZXR1cm5zIGl0IGFzIEpTIHN0cmluZyB0aGF0IGlzXG4vLyBndWFyYW50ZWVkIHRvIG5vdCBjb250YWluIGFueSBwYXJ0aWFsIG11bHRpLWJ5dGUgY2hhcmFjdGVycy4gQW55IHBhcnRpYWxcbi8vIGNoYXJhY3RlciBmb3VuZCBhdCB0aGUgZW5kIG9mIHRoZSBidWZmZXIgaXMgYnVmZmVyZWQgdXAsIGFuZCB3aWxsIGJlXG4vLyByZXR1cm5lZCB3aGVuIGNhbGxpbmcgd3JpdGUgYWdhaW4gd2l0aCB0aGUgcmVtYWluaW5nIGJ5dGVzLlxuLy9cbi8vIE5vdGU6IENvbnZlcnRpbmcgYSBCdWZmZXIgY29udGFpbmluZyBhbiBvcnBoYW4gc3Vycm9nYXRlIHRvIGEgU3RyaW5nXG4vLyBjdXJyZW50bHkgd29ya3MsIGJ1dCBjb252ZXJ0aW5nIGEgU3RyaW5nIHRvIGEgQnVmZmVyICh2aWEgYG5ldyBCdWZmZXJgLCBvclxuLy8gQnVmZmVyI3dyaXRlKSB3aWxsIHJlcGxhY2UgaW5jb21wbGV0ZSBzdXJyb2dhdGVzIHdpdGggdGhlIHVuaWNvZGVcbi8vIHJlcGxhY2VtZW50IGNoYXJhY3Rlci4gU2VlIGh0dHBzOi8vY29kZXJldmlldy5jaHJvbWl1bS5vcmcvMTIxMTczMDA5LyAuXG5TdHJpbmdEZWNvZGVyLnByb3RvdHlwZS53cml0ZSA9IGZ1bmN0aW9uKGJ1ZmZlcikge1xuICB2YXIgY2hhclN0ciA9ICcnO1xuICAvLyBpZiBvdXIgbGFzdCB3cml0ZSBlbmRlZCB3aXRoIGFuIGluY29tcGxldGUgbXVsdGlieXRlIGNoYXJhY3RlclxuICB3aGlsZSAodGhpcy5jaGFyTGVuZ3RoKSB7XG4gICAgLy8gZGV0ZXJtaW5lIGhvdyBtYW55IHJlbWFpbmluZyBieXRlcyB0aGlzIGJ1ZmZlciBoYXMgdG8gb2ZmZXIgZm9yIHRoaXMgY2hhclxuICAgIHZhciBhdmFpbGFibGUgPSAoYnVmZmVyLmxlbmd0aCA+PSB0aGlzLmNoYXJMZW5ndGggLSB0aGlzLmNoYXJSZWNlaXZlZCkgP1xuICAgICAgICB0aGlzLmNoYXJMZW5ndGggLSB0aGlzLmNoYXJSZWNlaXZlZCA6XG4gICAgICAgIGJ1ZmZlci5sZW5ndGg7XG5cbiAgICAvLyBhZGQgdGhlIG5ldyBieXRlcyB0byB0aGUgY2hhciBidWZmZXJcbiAgICBidWZmZXIuY29weSh0aGlzLmNoYXJCdWZmZXIsIHRoaXMuY2hhclJlY2VpdmVkLCAwLCBhdmFpbGFibGUpO1xuICAgIHRoaXMuY2hhclJlY2VpdmVkICs9IGF2YWlsYWJsZTtcblxuICAgIGlmICh0aGlzLmNoYXJSZWNlaXZlZCA8IHRoaXMuY2hhckxlbmd0aCkge1xuICAgICAgLy8gc3RpbGwgbm90IGVub3VnaCBjaGFycyBpbiB0aGlzIGJ1ZmZlcj8gd2FpdCBmb3IgbW9yZSAuLi5cbiAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICAvLyByZW1vdmUgYnl0ZXMgYmVsb25naW5nIHRvIHRoZSBjdXJyZW50IGNoYXJhY3RlciBmcm9tIHRoZSBidWZmZXJcbiAgICBidWZmZXIgPSBidWZmZXIuc2xpY2UoYXZhaWxhYmxlLCBidWZmZXIubGVuZ3RoKTtcblxuICAgIC8vIGdldCB0aGUgY2hhcmFjdGVyIHRoYXQgd2FzIHNwbGl0XG4gICAgY2hhclN0ciA9IHRoaXMuY2hhckJ1ZmZlci5zbGljZSgwLCB0aGlzLmNoYXJMZW5ndGgpLnRvU3RyaW5nKHRoaXMuZW5jb2RpbmcpO1xuXG4gICAgLy8gQ0VTVS04OiBsZWFkIHN1cnJvZ2F0ZSAoRDgwMC1EQkZGKSBpcyBhbHNvIHRoZSBpbmNvbXBsZXRlIGNoYXJhY3RlclxuICAgIHZhciBjaGFyQ29kZSA9IGNoYXJTdHIuY2hhckNvZGVBdChjaGFyU3RyLmxlbmd0aCAtIDEpO1xuICAgIGlmIChjaGFyQ29kZSA+PSAweEQ4MDAgJiYgY2hhckNvZGUgPD0gMHhEQkZGKSB7XG4gICAgICB0aGlzLmNoYXJMZW5ndGggKz0gdGhpcy5zdXJyb2dhdGVTaXplO1xuICAgICAgY2hhclN0ciA9ICcnO1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIHRoaXMuY2hhclJlY2VpdmVkID0gdGhpcy5jaGFyTGVuZ3RoID0gMDtcblxuICAgIC8vIGlmIHRoZXJlIGFyZSBubyBtb3JlIGJ5dGVzIGluIHRoaXMgYnVmZmVyLCBqdXN0IGVtaXQgb3VyIGNoYXJcbiAgICBpZiAoYnVmZmVyLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIGNoYXJTdHI7XG4gICAgfVxuICAgIGJyZWFrO1xuICB9XG5cbiAgLy8gZGV0ZXJtaW5lIGFuZCBzZXQgY2hhckxlbmd0aCAvIGNoYXJSZWNlaXZlZFxuICB0aGlzLmRldGVjdEluY29tcGxldGVDaGFyKGJ1ZmZlcik7XG5cbiAgdmFyIGVuZCA9IGJ1ZmZlci5sZW5ndGg7XG4gIGlmICh0aGlzLmNoYXJMZW5ndGgpIHtcbiAgICAvLyBidWZmZXIgdGhlIGluY29tcGxldGUgY2hhcmFjdGVyIGJ5dGVzIHdlIGdvdFxuICAgIGJ1ZmZlci5jb3B5KHRoaXMuY2hhckJ1ZmZlciwgMCwgYnVmZmVyLmxlbmd0aCAtIHRoaXMuY2hhclJlY2VpdmVkLCBlbmQpO1xuICAgIGVuZCAtPSB0aGlzLmNoYXJSZWNlaXZlZDtcbiAgfVxuXG4gIGNoYXJTdHIgKz0gYnVmZmVyLnRvU3RyaW5nKHRoaXMuZW5jb2RpbmcsIDAsIGVuZCk7XG5cbiAgdmFyIGVuZCA9IGNoYXJTdHIubGVuZ3RoIC0gMTtcbiAgdmFyIGNoYXJDb2RlID0gY2hhclN0ci5jaGFyQ29kZUF0KGVuZCk7XG4gIC8vIENFU1UtODogbGVhZCBzdXJyb2dhdGUgKEQ4MDAtREJGRikgaXMgYWxzbyB0aGUgaW5jb21wbGV0ZSBjaGFyYWN0ZXJcbiAgaWYgKGNoYXJDb2RlID49IDB4RDgwMCAmJiBjaGFyQ29kZSA8PSAweERCRkYpIHtcbiAgICB2YXIgc2l6ZSA9IHRoaXMuc3Vycm9nYXRlU2l6ZTtcbiAgICB0aGlzLmNoYXJMZW5ndGggKz0gc2l6ZTtcbiAgICB0aGlzLmNoYXJSZWNlaXZlZCArPSBzaXplO1xuICAgIHRoaXMuY2hhckJ1ZmZlci5jb3B5KHRoaXMuY2hhckJ1ZmZlciwgc2l6ZSwgMCwgc2l6ZSk7XG4gICAgYnVmZmVyLmNvcHkodGhpcy5jaGFyQnVmZmVyLCAwLCAwLCBzaXplKTtcbiAgICByZXR1cm4gY2hhclN0ci5zdWJzdHJpbmcoMCwgZW5kKTtcbiAgfVxuXG4gIC8vIG9yIGp1c3QgZW1pdCB0aGUgY2hhclN0clxuICByZXR1cm4gY2hhclN0cjtcbn07XG5cbi8vIGRldGVjdEluY29tcGxldGVDaGFyIGRldGVybWluZXMgaWYgdGhlcmUgaXMgYW4gaW5jb21wbGV0ZSBVVEYtOCBjaGFyYWN0ZXIgYXRcbi8vIHRoZSBlbmQgb2YgdGhlIGdpdmVuIGJ1ZmZlci4gSWYgc28sIGl0IHNldHMgdGhpcy5jaGFyTGVuZ3RoIHRvIHRoZSBieXRlXG4vLyBsZW5ndGggdGhhdCBjaGFyYWN0ZXIsIGFuZCBzZXRzIHRoaXMuY2hhclJlY2VpdmVkIHRvIHRoZSBudW1iZXIgb2YgYnl0ZXNcbi8vIHRoYXQgYXJlIGF2YWlsYWJsZSBmb3IgdGhpcyBjaGFyYWN0ZXIuXG5TdHJpbmdEZWNvZGVyLnByb3RvdHlwZS5kZXRlY3RJbmNvbXBsZXRlQ2hhciA9IGZ1bmN0aW9uKGJ1ZmZlcikge1xuICAvLyBkZXRlcm1pbmUgaG93IG1hbnkgYnl0ZXMgd2UgaGF2ZSB0byBjaGVjayBhdCB0aGUgZW5kIG9mIHRoaXMgYnVmZmVyXG4gIHZhciBpID0gKGJ1ZmZlci5sZW5ndGggPj0gMykgPyAzIDogYnVmZmVyLmxlbmd0aDtcblxuICAvLyBGaWd1cmUgb3V0IGlmIG9uZSBvZiB0aGUgbGFzdCBpIGJ5dGVzIG9mIG91ciBidWZmZXIgYW5ub3VuY2VzIGFuXG4gIC8vIGluY29tcGxldGUgY2hhci5cbiAgZm9yICg7IGkgPiAwOyBpLS0pIHtcbiAgICB2YXIgYyA9IGJ1ZmZlcltidWZmZXIubGVuZ3RoIC0gaV07XG5cbiAgICAvLyBTZWUgaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9VVEYtOCNEZXNjcmlwdGlvblxuXG4gICAgLy8gMTEwWFhYWFhcbiAgICBpZiAoaSA9PSAxICYmIGMgPj4gNSA9PSAweDA2KSB7XG4gICAgICB0aGlzLmNoYXJMZW5ndGggPSAyO1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgLy8gMTExMFhYWFhcbiAgICBpZiAoaSA8PSAyICYmIGMgPj4gNCA9PSAweDBFKSB7XG4gICAgICB0aGlzLmNoYXJMZW5ndGggPSAzO1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgLy8gMTExMTBYWFhcbiAgICBpZiAoaSA8PSAzICYmIGMgPj4gMyA9PSAweDFFKSB7XG4gICAgICB0aGlzLmNoYXJMZW5ndGggPSA0O1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHRoaXMuY2hhclJlY2VpdmVkID0gaTtcbn07XG5cblN0cmluZ0RlY29kZXIucHJvdG90eXBlLmVuZCA9IGZ1bmN0aW9uKGJ1ZmZlcikge1xuICB2YXIgcmVzID0gJyc7XG4gIGlmIChidWZmZXIgJiYgYnVmZmVyLmxlbmd0aClcbiAgICByZXMgPSB0aGlzLndyaXRlKGJ1ZmZlcik7XG5cbiAgaWYgKHRoaXMuY2hhclJlY2VpdmVkKSB7XG4gICAgdmFyIGNyID0gdGhpcy5jaGFyUmVjZWl2ZWQ7XG4gICAgdmFyIGJ1ZiA9IHRoaXMuY2hhckJ1ZmZlcjtcbiAgICB2YXIgZW5jID0gdGhpcy5lbmNvZGluZztcbiAgICByZXMgKz0gYnVmLnNsaWNlKDAsIGNyKS50b1N0cmluZyhlbmMpO1xuICB9XG5cbiAgcmV0dXJuIHJlcztcbn07XG5cbmZ1bmN0aW9uIHBhc3NUaHJvdWdoV3JpdGUoYnVmZmVyKSB7XG4gIHJldHVybiBidWZmZXIudG9TdHJpbmcodGhpcy5lbmNvZGluZyk7XG59XG5cbmZ1bmN0aW9uIHV0ZjE2RGV0ZWN0SW5jb21wbGV0ZUNoYXIoYnVmZmVyKSB7XG4gIHRoaXMuY2hhclJlY2VpdmVkID0gYnVmZmVyLmxlbmd0aCAlIDI7XG4gIHRoaXMuY2hhckxlbmd0aCA9IHRoaXMuY2hhclJlY2VpdmVkID8gMiA6IDA7XG59XG5cbmZ1bmN0aW9uIGJhc2U2NERldGVjdEluY29tcGxldGVDaGFyKGJ1ZmZlcikge1xuICB0aGlzLmNoYXJSZWNlaXZlZCA9IGJ1ZmZlci5sZW5ndGggJSAzO1xuICB0aGlzLmNoYXJMZW5ndGggPSB0aGlzLmNoYXJSZWNlaXZlZCA/IDMgOiAwO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3N0cmluZ19kZWNvZGVyL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicGF0aFwiXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHJlYW1cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJzdHJlYW1cIlxuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBERUJVRz1uaWdodG1hcmUqXG4gKi9cblxudmFyIGxvZyA9IHJlcXVpcmUoJ2RlYnVnJykoJ25pZ2h0bWFyZTpsb2cnKTtcbnZhciBkZWJ1ZyA9IHJlcXVpcmUoJ2RlYnVnJykoJ25pZ2h0bWFyZScpO1xudmFyIGVsZWN0cm9uTG9nID0ge1xuICBzdGRvdXQ6IHJlcXVpcmUoJ2RlYnVnJykoJ2VsZWN0cm9uOnN0ZG91dCcpLFxuICBzdGRlcnI6IHJlcXVpcmUoJ2RlYnVnJykoJ2VsZWN0cm9uOnN0ZGVycicpXG59O1xuXG4vKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXNcbiAqL1xuXG52YXIgZGVmYXVsdF9lbGVjdHJvbl9wYXRoID0gcmVxdWlyZSgnZWxlY3Ryb24nKTtcbnZhciBzb3VyY2UgPSByZXF1aXJlKCdmdW5jdGlvbi1zb3VyY2UnKTtcbnZhciBwcm9jID0gcmVxdWlyZSgnY2hpbGRfcHJvY2VzcycpO1xudmFyIGFjdGlvbnMgPSByZXF1aXJlKCcuL2FjdGlvbnMnKTtcbnZhciBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xudmFyIHNsaWNlZCA9IHJlcXVpcmUoJ3NsaWNlZCcpO1xudmFyIGNoaWxkID0gcmVxdWlyZSgnLi9pcGMnKTtcbnZhciBvbmNlID0gcmVxdWlyZSgnb25jZScpO1xudmFyIHNwbGl0MiA9IHJlcXVpcmUoJ3NwbGl0MicpO1xudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnZGVmYXVsdHMnKTtcbnZhciBub29wID0gZnVuY3Rpb24oKSB7fTtcbnZhciBrZXlzID0gT2JqZWN0LmtleXM7XG5cbi8vIFN0YW5kYXJkIHRpbWVvdXQgZm9yIGxvYWRpbmcgVVJMc1xuY29uc3QgREVGQVVMVF9HT1RPX1RJTUVPVVQgPSAzMCAqIDEwMDA7XG4vLyBTdGFuZGFyZCB0aW1lb3V0IGZvciB3YWl0KG1zKVxuY29uc3QgREVGQVVMVF9XQUlUX1RJTUVPVVQgPSAzMCAqIDEwMDA7XG4vLyBUaW1lb3V0IGJldHdlZW4ga2V5c3Ryb2tlcyBmb3IgYC50eXBlKClgXG5jb25zdCBERUZBVUxUX1RZUEVfSU5URVJWQUwgPSAxMDA7XG4vLyB0aW1lb3V0IGJldHdlZW4gYHdhaXRgIHBvbGxzXG5jb25zdCBERUZBVUxUX1BPTExfSU5URVJWQUwgPSAyNTA7XG4vLyBtYXggcmV0cnkgZm9yIGF1dGhlbnRpY2F0aW9uXG5jb25zdCBNQVhfQVVUSF9SRVRSSUVTID0gMztcbi8vIG1heCBleGVjdXRpb24gdGltZSBmb3IgYC5ldmFsdWF0ZSgpYFxuY29uc3QgREVGQVVMVF9FWEVDVVRJT05fVElNRU9VVCA9IDMwICogMTAwMFxuLy8gRXJyb3IgbWVzc2FnZSB3aGVuIGhhbHRlZFxuY29uc3QgREVGQVVMVF9IQUxUX01FU1NBR0UgPSAnTmlnaHRtYXJlIEhhbHRlZCc7XG4vLyBOb24tcGVyc2lzdGVudCBwYXJ0aXRpb24gdG8gdXNlIGJ5IGRlZmF1bHRzXG5jb25zdCBERUZBVUxUX1BBUlRJVElPTiA9ICduaWdodG1hcmUnO1xuXG4vKipcbiAqIEV4cG9ydCBgTmlnaHRtYXJlYFxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gTmlnaHRtYXJlO1xuXG4vKipcbiAqIHJ1bm5lciBzY3JpcHRcbiAqL1xuXG52YXIgcnVubmVyID0gcGF0aC5qb2luKF9fZGlybmFtZSwgJ3J1bm5lci5qcycpO1xuXG4vKipcbiAqIFRlbXBsYXRlXG4gKi9cblxudmFyIHRlbXBsYXRlID0gcmVxdWlyZSgnLi9qYXZhc2NyaXB0Jyk7XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBgTmlnaHRtYXJlYFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKi9cblxuZnVuY3Rpb24gTmlnaHRtYXJlKG9wdGlvbnMpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIE5pZ2h0bWFyZSkpIHJldHVybiBuZXcgTmlnaHRtYXJlKG9wdGlvbnMpO1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIGVsZWN0cm9uQXJncyA9IHt9O1xuICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgb3B0aW9ucy53YWl0VGltZW91dCA9IG9wdGlvbnMud2FpdFRpbWVvdXQgfHwgREVGQVVMVF9XQUlUX1RJTUVPVVQ7XG4gIG9wdGlvbnMuZ290b1RpbWVvdXQgPSBvcHRpb25zLmdvdG9UaW1lb3V0IHx8IERFRkFVTFRfR09UT19USU1FT1VUO1xuICBvcHRpb25zLnBvbGxJbnRlcnZhbCA9IG9wdGlvbnMucG9sbEludGVydmFsIHx8IERFRkFVTFRfUE9MTF9JTlRFUlZBTDtcblxuICBvcHRpb25zLnR5cGVJbnRlcnZhbCA9IG9wdGlvbnMudHlwZUludGVydmFsIHx8IERFRkFVTFRfVFlQRV9JTlRFUlZBTDtcbiAgb3B0aW9ucy5leGVjdXRpb25UaW1lb3V0ID0gb3B0aW9ucy5leGVjdXRpb25UaW1lb3V0IHx8IERFRkFVTFRfRVhFQ1VUSU9OX1RJTUVPVVQ7XG4gIG9wdGlvbnMud2ViUHJlZmVyZW5jZXMgPSBvcHRpb25zLndlYlByZWZlcmVuY2VzIHx8IHt9O1xuXG4gIC8vIG51bGwgaXMgYSB2YWxpZCB2YWx1ZSwgd2hpY2ggd2lsbCByZXN1bHQgaW4gdGhlIHVzZSBvZiB0aGUgZWxlY3Ryb24gZGVmYXVsdCBiZWhhdmlvciwgd2hpY2ggaXMgdG8gcGVyc2lzdCBzdG9yYWdlLlxuICAvLyBUaGUgZGVmYXVsdCBiZWhhdmlvciBmb3IgbmlnaHRtYXJlIHdpbGwgYmUgdG8gdXNlIG5vbi1wZXJzaXN0ZW50IHN0b3JhZ2UuXG4gIC8vIGh0dHA6Ly9lbGVjdHJvbi5hdG9tLmlvL2RvY3MvYXBpL2Jyb3dzZXItd2luZG93LyNuZXctYnJvd3NlcndpbmRvd29wdGlvbnNcbiAgb3B0aW9ucy53ZWJQcmVmZXJlbmNlcy5wYXJ0aXRpb24gPSBvcHRpb25zLndlYlByZWZlcmVuY2VzLnBhcnRpdGlvbiAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy53ZWJQcmVmZXJlbmNlcy5wYXJ0aXRpb24gOiBERUZBVUxUX1BBUlRJVElPTjtcblxuICBvcHRpb25zLlByb21pc2UgPSBvcHRpb25zLlByb21pc2UgfHwgTmlnaHRtYXJlLlByb21pc2UgfHwgUHJvbWlzZTtcblxuICB2YXIgZWxlY3Ryb25fcGF0aCA9IG9wdGlvbnMuZWxlY3Ryb25QYXRoIHx8IGRlZmF1bHRfZWxlY3Ryb25fcGF0aFxuXG4gIGlmIChvcHRpb25zLnBhdGhzKSB7XG4gICAgZWxlY3Ryb25BcmdzLnBhdGhzID0gb3B0aW9ucy5wYXRocztcbiAgfVxuXG4gIGlmIChvcHRpb25zLnN3aXRjaGVzKSB7XG4gICAgZWxlY3Ryb25BcmdzLnN3aXRjaGVzID0gb3B0aW9ucy5zd2l0Y2hlcztcbiAgfVxuICBvcHRpb25zLm1heEF1dGhSZXRyaWVzID0gb3B0aW9ucy5tYXhBdXRoUmV0cmllcyB8fCBNQVhfQVVUSF9SRVRSSUVTO1xuXG4gIGVsZWN0cm9uQXJncy5sb2FkVGltZW91dCA9IG9wdGlvbnMubG9hZFRpbWVvdXQ7XG4gIGlmKG9wdGlvbnMubG9hZFRpbWVvdXQgJiYgb3B0aW9ucy5nb3RvVGltZW91dCAmJiBvcHRpb25zLmxvYWRUaW1lb3V0IDwgb3B0aW9ucy5nb3RvVGltZW91dCl7XG4gICAgZGVidWcoYFdBUk5JTkc6ICBsb2FkIHRpbWVvdXQgb2YgJHtvcHRpb25zLmxvYWRUaW1lb3V0fSBpcyBzaG9ydGVyIHRoYW4gZ290byB0aW1lb3V0IG9mICR7b3B0aW9ucy5nb3RvVGltZW91dH1gKTtcbiAgfVxuXG4gIGVsZWN0cm9uQXJncy5kb2NrID0gb3B0aW9ucy5kb2NrIHx8IGZhbHNlO1xuXG4gIGF0dGFjaFRvUHJvY2Vzcyh0aGlzKTtcblxuICAvLyBpbml0aWFsIHN0YXRlXG4gIHRoaXMuc3RhdGUgPSAnaW5pdGlhbCc7XG4gIHRoaXMucnVubmluZyA9IGZhbHNlO1xuICB0aGlzLmVuZGluZyA9IGZhbHNlO1xuICB0aGlzLmVuZGVkID0gZmFsc2U7XG4gIHRoaXMuX3F1ZXVlID0gW107XG4gIHRoaXMuX2hlYWRlcnMgPSB7fTtcbiAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcblxuICBkZWJ1ZygncXVldWluZyBwcm9jZXNzIHN0YXJ0Jyk7XG4gIHRoaXMucXVldWUoKGRvbmUpID0+IHtcblxuICAgIHRoaXMucHJvYyA9IHByb2Muc3Bhd24oZWxlY3Ryb25fcGF0aCwgW3J1bm5lcl0uY29uY2F0KEpTT04uc3RyaW5naWZ5KGVsZWN0cm9uQXJncykpLCB7XG4gICAgICBzdGRpbzogW251bGwsIG51bGwsIG51bGwsICdpcGMnXSxcbiAgICAgIGVudjogZGVmYXVsdHMob3B0aW9ucy5lbnYgfHwge30sIHByb2Nlc3MuZW52KVxuICAgIH0pO1xuXG4gICAgdGhpcy5wcm9jLnN0ZG91dC5waXBlKHNwbGl0MigpKS5vbignZGF0YScsIChkYXRhKSA9PiB7XG4gICAgICBlbGVjdHJvbkxvZy5zdGRvdXQoZGF0YSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnByb2Muc3RkZXJyLnBpcGUoc3BsaXQyKCkpLm9uKCdkYXRhJywgKGRhdGEpID0+IHtcbiAgICAgIGVsZWN0cm9uTG9nLnN0ZGVycihkYXRhKTtcbiAgICB9KTtcblxuICAgIHRoaXMucHJvYy5vbignY2xvc2UnLCAoY29kZSkgPT4ge1xuICAgICAgaWYoIXNlbGYuZW5kZWQpe1xuICAgICAgICBoYW5kbGVFeGl0KGNvZGUsIHNlbGYsIG5vb3ApO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5jaGlsZCA9IGNoaWxkKHRoaXMucHJvYyk7XG5cbiAgICB0aGlzLmNoaWxkLm9uY2UoJ2RpZScsIGZ1bmN0aW9uKGVycil7XG4gICAgICBkZWJ1ZygnZHlpbmc6ICcgKyBlcnIpO1xuICAgICAgc2VsZi5kaWUgPSBlcnI7XG4gICAgfSk7XG5cbiAgICAvLyBwcm9wYWdhdGUgY29uc29sZS5sb2coLi4uKSB0aHJvdWdoXG4gICAgdGhpcy5jaGlsZC5vbignbG9nJywgZnVuY3Rpb24oKSB7XG4gICAgICBsb2cuYXBwbHkobG9nLCBhcmd1bWVudHMpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5jaGlsZC5vbigndW5jYXVnaHRFeGNlcHRpb24nLCBmdW5jdGlvbihzdGFjaykge1xuICAgICAgY29uc29sZS5lcnJvcignTmlnaHRtYXJlIHJ1bm5lciBlcnJvcjpcXG5cXG4lc1xcbicsICdcXHQnICsgc3RhY2sucmVwbGFjZSgvXFxuL2csICdcXG5cXHQnKSk7XG4gICAgICBlbmRJbnN0YW5jZShzZWxmLCBub29wKTtcbiAgICAgIHByb2Nlc3MuZXhpdCgxKTtcbiAgICB9KTtcblxuICAgIHRoaXMuY2hpbGQub24oJ3BhZ2UnLCBmdW5jdGlvbih0eXBlKSB7XG4gICAgICBsb2cuYXBwbHkobnVsbCwgWydwYWdlLScgKyB0eXBlXS5jb25jYXQoc2xpY2VkKGFyZ3VtZW50cywgMSkpKTtcbiAgICB9KTtcblxuICAgIC8vIHByb3BvZ2F0ZSBldmVudHMgdGhyb3VnaCB0byBkZWJ1Z2dpbmdcbiAgICB0aGlzLmNoaWxkLm9uKCdkaWQtZmluaXNoLWxvYWQnLCBmdW5jdGlvbiAoKSB7IGxvZygnZGlkLWZpbmlzaC1sb2FkJywgSlNPTi5zdHJpbmdpZnkoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSkpOyB9KTtcbiAgICB0aGlzLmNoaWxkLm9uKCdkaWQtZmFpbC1sb2FkJywgZnVuY3Rpb24gKCkgeyBsb2coJ2RpZC1mYWlsLWxvYWQnLCBKU09OLnN0cmluZ2lmeShBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpKSk7IH0pO1xuICAgIHRoaXMuY2hpbGQub24oJ2RpZC1mYWlsLXByb3Zpc2lvbmFsLWxvYWQnLCBmdW5jdGlvbiAoKSB7IGxvZygnZGlkLWZhaWwtcHJvdmlzaW9uYWwtbG9hZCcsIEpTT04uc3RyaW5naWZ5KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpKTsgfSk7XG4gICAgdGhpcy5jaGlsZC5vbignZGlkLWZyYW1lLWZpbmlzaC1sb2FkJywgZnVuY3Rpb24gKCkgeyBsb2coJ2RpZC1mcmFtZS1maW5pc2gtbG9hZCcsIEpTT04uc3RyaW5naWZ5KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpKTsgfSk7XG4gICAgdGhpcy5jaGlsZC5vbignZGlkLXN0YXJ0LWxvYWRpbmcnLCBmdW5jdGlvbiAoKSB7IGxvZygnZGlkLXN0YXJ0LWxvYWRpbmcnLCBKU09OLnN0cmluZ2lmeShBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpKSk7IH0pO1xuICAgIHRoaXMuY2hpbGQub24oJ2RpZC1zdG9wLWxvYWRpbmcnLCBmdW5jdGlvbiAoKSB7IGxvZygnZGlkLXN0b3AtbG9hZGluZycsIEpTT04uc3RyaW5naWZ5KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpKTsgfSk7XG4gICAgdGhpcy5jaGlsZC5vbignZGlkLWdldC1yZXNwb25zZS1kZXRhaWxzJywgZnVuY3Rpb24gKCkgeyBsb2coJ2RpZC1nZXQtcmVzcG9uc2UtZGV0YWlscycsIEpTT04uc3RyaW5naWZ5KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpKTsgfSk7XG4gICAgdGhpcy5jaGlsZC5vbignZGlkLWdldC1yZWRpcmVjdC1yZXF1ZXN0JywgZnVuY3Rpb24gKCkgeyBsb2coJ2RpZC1nZXQtcmVkaXJlY3QtcmVxdWVzdCcsIEpTT04uc3RyaW5naWZ5KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpKTsgfSk7XG4gICAgdGhpcy5jaGlsZC5vbignZG9tLXJlYWR5JywgZnVuY3Rpb24gKCkgeyBsb2coJ2RvbS1yZWFkeScsIEpTT04uc3RyaW5naWZ5KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpKTsgfSk7XG4gICAgdGhpcy5jaGlsZC5vbigncGFnZS1mYXZpY29uLXVwZGF0ZWQnLCBmdW5jdGlvbiAoKSB7IGxvZygncGFnZS1mYXZpY29uLXVwZGF0ZWQnLCBKU09OLnN0cmluZ2lmeShBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpKSk7IH0pO1xuICAgIHRoaXMuY2hpbGQub24oJ25ldy13aW5kb3cnLCBmdW5jdGlvbiAoKSB7IGxvZygnbmV3LXdpbmRvdycsIEpTT04uc3RyaW5naWZ5KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpKTsgfSk7XG4gICAgdGhpcy5jaGlsZC5vbignd2lsbC1uYXZpZ2F0ZScsIGZ1bmN0aW9uICgpIHsgbG9nKCd3aWxsLW5hdmlnYXRlJywgSlNPTi5zdHJpbmdpZnkoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSkpOyB9KTtcbiAgICB0aGlzLmNoaWxkLm9uKCdjcmFzaGVkJywgZnVuY3Rpb24gKCkgeyBsb2coJ2NyYXNoZWQnLCBKU09OLnN0cmluZ2lmeShBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpKSk7IH0pO1xuICAgIHRoaXMuY2hpbGQub24oJ3BsdWdpbi1jcmFzaGVkJywgZnVuY3Rpb24gKCkgeyBsb2coJ3BsdWdpbi1jcmFzaGVkJywgSlNPTi5zdHJpbmdpZnkoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSkpOyB9KTtcbiAgICB0aGlzLmNoaWxkLm9uKCdkZXN0cm95ZWQnLCBmdW5jdGlvbiAoKSB7IGxvZygnZGVzdHJveWVkJywgSlNPTi5zdHJpbmdpZnkoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSkpOyB9KTtcbiAgICB0aGlzLmNoaWxkLm9uKCdtZWRpYS1zdGFydGVkLXBsYXlpbmcnLCBmdW5jdGlvbiAoKSB7IGxvZygnbWVkaWEtc3RhcnRlZC1wbGF5aW5nJywgSlNPTi5zdHJpbmdpZnkoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSkpOyB9KTtcbiAgICB0aGlzLmNoaWxkLm9uKCdtZWRpYS1wYXVzZWQnLCBmdW5jdGlvbiAoKSB7IGxvZygnbWVkaWEtcGF1c2VkJywgSlNPTi5zdHJpbmdpZnkoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSkpOyB9KTtcblxuICAgIHRoaXMuY2hpbGQub25jZSgncmVhZHknLCAodmVyc2lvbnMpID0+IHtcbiAgICAgIHRoaXMuZW5naW5lVmVyc2lvbnMgPSB2ZXJzaW9ucztcbiAgICAgIHRoaXMuY2hpbGQuY2FsbCgnYnJvd3Nlci1pbml0aWFsaXplJywgb3B0aW9ucywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHNlbGYuc3RhdGUgPSAncmVhZHknO1xuICAgICAgICBkb25lKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgLy8gaW5pdGlhbGl6ZSBuYW1lc3BhY2VzXG4gIE5pZ2h0bWFyZS5uYW1lc3BhY2VzLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICBpZiAoJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIHRoaXNbbmFtZV0pIHtcbiAgICAgIHRoaXNbbmFtZV0gPSB0aGlzW25hbWVdKClcbiAgICB9XG4gIH0sIHRoaXMpXG5cbiAgLy9wcmVwZW5kIGFkZGluZyBjaGlsZCBhY3Rpb25zIHRvIHRoZSBxdWV1ZVxuICBPYmplY3Qua2V5cyhOaWdodG1hcmUuY2hpbGRBY3Rpb25zKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSl7XG4gICAgZGVidWcoJ3F1ZXVlaW5nIGNoaWxkIGFjdGlvbiBhZGRpdGlvbiBmb3IgXCIlc1wiJywga2V5KTtcbiAgICB0aGlzLnF1ZXVlKGZ1bmN0aW9uKGRvbmUpe1xuICAgICAgdGhpcy5jaGlsZC5jYWxsKCdhY3Rpb24nLCBrZXksIFN0cmluZyhOaWdodG1hcmUuY2hpbGRBY3Rpb25zW2tleV0pLCBkb25lKTtcbiAgICB9KTtcbiAgfSwgdGhpcyk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUV4aXQoY29kZSwgaW5zdGFuY2UsIGNiKXtcbiAgdmFyIGhlbHAgPSB7XG4gICAgMTI3OiAnY29tbWFuZCBub3QgZm91bmQgLSB5b3UgbWF5IG5vdCBoYXZlIGVsZWN0cm9uIGluc3RhbGxlZCBjb3JyZWN0bHknLFxuICAgIDEyNjogJ3Blcm1pc3Npb24gcHJvYmxlbSBvciBjb21tYW5kIGlzIG5vdCBhbiBleGVjdXRhYmxlIC0geW91IG1heSBub3QgaGF2ZSBhbGwgdGhlIG5lY2Vzc2FyeSBkZXBlbmRlbmNpZXMgZm9yIGVsZWN0cm9uJyxcbiAgICAxOiAnZ2VuZXJhbCBlcnJvciAtIHlvdSBtYXkgbmVlZCB4dmZiJyxcbiAgICAwOiAnc3VjY2VzcyEnXG4gIH07XG5cbiAgZGVidWcoJ2VsZWN0cm9uIGNoaWxkIHByb2Nlc3MgZXhpdGVkIHdpdGggY29kZSAnICsgY29kZSArICc6ICcgKyBoZWxwW2NvZGVdKTtcbiAgaW5zdGFuY2UucHJvYy5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcbiAgY2IoKTtcbn07XG5cbmZ1bmN0aW9uIGVuZEluc3RhbmNlKGluc3RhbmNlLCBjYiwgZm9yY2VLaWxsKSB7XG4gIGluc3RhbmNlLmVuZGVkID0gdHJ1ZTtcbiAgZGV0YWNoRnJvbVByb2Nlc3MoaW5zdGFuY2UpO1xuICBpZiAoaW5zdGFuY2UucHJvYyAmJiBpbnN0YW5jZS5wcm9jLmNvbm5lY3RlZCkge1xuICAgIGluc3RhbmNlLnByb2Mub24oJ2Nsb3NlJywgKGNvZGUpID0+IHtcbiAgICAgIGhhbmRsZUV4aXQoY29kZSwgaW5zdGFuY2UsIGNiKTtcbiAgICB9KTtcbiAgICBpbnN0YW5jZS5jaGlsZC5jYWxsKCdxdWl0JywgKCkgPT4ge1xuICAgICAgaW5zdGFuY2UuY2hpbGQucmVtb3ZlQWxsTGlzdGVuZXJzKCk7XG4gICAgICBpZiAoZm9yY2VLaWxsKSB7XG4gICAgICAgIGluc3RhbmNlLnByb2Mua2lsbCgnU0lHSU5UJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgZGVidWcoJ2VsZWN0cm9uIGNoaWxkIHByb2Nlc3Mgbm90IHN0YXJ0ZWQgeWV0LCBza2lwcGluZyBraWxsLicpO1xuICAgIGNiKCk7XG4gIH1cbn1cblxuLyoqXG4gKiBBdHRhY2ggYW55IGluc3RhbmNlLXNwZWNpZmljIHByb2Nlc3MtbGV2ZWwgZXZlbnRzLlxuICovXG5mdW5jdGlvbiBhdHRhY2hUb1Byb2Nlc3MoaW5zdGFuY2UpIHtcbiAgaW5zdGFuY2UuX2VuZE5vdyA9IGVuZEluc3RhbmNlLmJpbmQobnVsbCwgaW5zdGFuY2UsIG5vb3ApO1xuICBwcm9jZXNzLnNldE1heExpc3RlbmVycyhJbmZpbml0eSk7XG4gIHByb2Nlc3Mub24oJ2V4aXQnLCBpbnN0YW5jZS5fZW5kTm93KTtcbiAgcHJvY2Vzcy5vbignU0lHSU5UJywgaW5zdGFuY2UuX2VuZE5vdyk7XG4gIHByb2Nlc3Mub24oJ1NJR1RFUk0nLCBpbnN0YW5jZS5fZW5kTm93KTtcbiAgcHJvY2Vzcy5vbignU0lHUVVJVCcsIGluc3RhbmNlLl9lbmROb3cpO1xuICBwcm9jZXNzLm9uKCdTSUdIVVAnLCBpbnN0YW5jZS5fZW5kTm93KTtcbiAgcHJvY2Vzcy5vbignU0lHQlJFQUsnLCBpbnN0YW5jZS5fZW5kTm93KTtcbn1cblxuZnVuY3Rpb24gZGV0YWNoRnJvbVByb2Nlc3MoaW5zdGFuY2UpIHtcbiAgcHJvY2Vzcy5yZW1vdmVMaXN0ZW5lcignZXhpdCcsIGluc3RhbmNlLl9lbmROb3cpO1xuICBwcm9jZXNzLnJlbW92ZUxpc3RlbmVyKCdTSUdJTlQnLCBpbnN0YW5jZS5fZW5kTm93KTtcbiAgcHJvY2Vzcy5yZW1vdmVMaXN0ZW5lcignU0lHVEVSTScsIGluc3RhbmNlLl9lbmROb3cpO1xuICBwcm9jZXNzLnJlbW92ZUxpc3RlbmVyKCdTSUdRVUlUJywgaW5zdGFuY2UuX2VuZE5vdyk7XG4gIHByb2Nlc3MucmVtb3ZlTGlzdGVuZXIoJ1NJR0hVUCcsIGluc3RhbmNlLl9lbmROb3cpO1xuICBwcm9jZXNzLnJlbW92ZUxpc3RlbmVyKCdTSUdCUkVBSycsIGluc3RhbmNlLl9lbmROb3cpO1xufVxuXG4vKipcbiAqIE5hbWVzcGFjZXMgdG8gaW5pdGlhbGl6ZVxuICovXG5cbk5pZ2h0bWFyZS5uYW1lc3BhY2VzID0gW107XG5cbi8qKlxuICogQ2hpbGQgYWN0aW9ucyB0byBjcmVhdGVcbiAqL1xuXG5OaWdodG1hcmUuY2hpbGRBY3Rpb25zID0ge307XG5cbi8qKlxuICogVmVyc2lvblxuICovXG5OaWdodG1hcmUudmVyc2lvbiA9IHJlcXVpcmUocGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uJywgJ3BhY2thZ2UuanNvbicpKS52ZXJzaW9uO1xuXG4vKipcbiAqIFByb21pc2UgbGlicmFyeSAoY2FuIG92ZXJyaWRlKVxuICovXG5cbk5pZ2h0bWFyZS5Qcm9taXNlID0gUHJvbWlzZTtcblxuLyoqXG4gKiBPdmVycmlkZSBoZWFkZXJzIGZvciBhbGwgSFRUUCByZXF1ZXN0c1xuICovXG5cbk5pZ2h0bWFyZS5wcm90b3R5cGUuaGVhZGVyID0gZnVuY3Rpb24oaGVhZGVyLCB2YWx1ZSkge1xuICBpZiAoaGVhZGVyICYmIHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB0aGlzLl9oZWFkZXJzW2hlYWRlcl0gPSB2YWx1ZTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLl9oZWFkZXJzID0gaGVhZGVyIHx8IHt9O1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIEdvIHRvIGEgYHVybGBcbiAqL1xuXG5OaWdodG1hcmUucHJvdG90eXBlLmdvdG8gPSBmdW5jdGlvbih1cmwsIGhlYWRlcnMpIHtcbiAgZGVidWcoJ3F1ZXVlaW5nIGFjdGlvbiBcImdvdG9cIiBmb3IgJXMnLCB1cmwpO1xuICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgaGVhZGVycyA9IGhlYWRlcnMgfHwge307XG4gIGZvciAodmFyIGtleSBpbiB0aGlzLl9oZWFkZXJzKSB7XG4gICAgaGVhZGVyc1trZXldID0gaGVhZGVyc1trZXldIHx8IHRoaXMuX2hlYWRlcnNba2V5XTtcbiAgfVxuXG4gIHRoaXMucXVldWUoZnVuY3Rpb24oZm4pIHtcbiAgICBzZWxmLmNoaWxkLmNhbGwoJ2dvdG8nLCB1cmwsIGhlYWRlcnMsIHRoaXMub3B0aW9ucy5nb3RvVGltZW91dCwgZm4pO1xuICB9KTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIHJ1blxuICovXG5cbk5pZ2h0bWFyZS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24oZm4pIHtcbiAgZGVidWcoJ3J1bm5pbmcnKVxuICB2YXIgc3RlcHMgPSB0aGlzLnF1ZXVlKCk7XG4gIHRoaXMucnVubmluZyA9IHRydWU7XG4gIHRoaXMuX3F1ZXVlID0gW107XG4gIHZhciBzZWxmID0gdGhpcztcblxuICAvLyBraWNrIHVzIG9mZlxuICBuZXh0KCk7XG5cbiAgLy8gbmV4dCBmdW5jdGlvblxuICBmdW5jdGlvbiBuZXh0IChlcnIsIHJlcykge1xuICAgIHZhciBpdGVtID0gc3RlcHMuc2hpZnQoKTtcbiAgICAvLyBJbW1lZGlhdGVseSBoYWx0IGV4ZWN1dGlvbiBpZiBhbiBlcnJvciBoYXMgYmVlbiB0aHJvd24sIG9yIHdlIGhhdmUgbm8gbW9yZSBxdWV1ZWQgdXAgc3RlcHMuXG4gICAgaWYgKGVyciB8fCAhaXRlbSkgcmV0dXJuIGRvbmUuYXBwbHkoc2VsZiwgYXJndW1lbnRzKTtcbiAgICB2YXIgYXJncyA9IGl0ZW1bMV0gfHwgW107XG4gICAgdmFyIG1ldGhvZCA9IGl0ZW1bMF07XG4gICAgYXJncy5wdXNoKG9uY2UoYWZ0ZXIpKTtcbiAgICBtZXRob2QuYXBwbHkoc2VsZiwgYXJncyk7XG4gIH1cblxuICBmdW5jdGlvbiBhZnRlciAoZXJyLCByZXMpIHtcbiAgICBlcnIgPSBlcnIgfHwgc2VsZi5kaWU7XG4gICAgdmFyIGFyZ3MgPSBzbGljZWQoYXJndW1lbnRzKTtcblxuICAgIGlmKHNlbGYuY2hpbGQpe1xuICAgICAgc2VsZi5jaGlsZC5jYWxsKCdjb250aW51ZScsICgpID0+IG5leHQuYXBwbHkoc2VsZiwgYXJncykpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXh0LmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRvbmUgKCkge1xuICAgIHZhciBkb25lYXJncyA9IGFyZ3VtZW50cztcbiAgICBzZWxmLnJ1bm5pbmcgPSBmYWxzZTtcbiAgICBpZiAoc2VsZi5lbmRpbmcpIHtcbiAgICAgIHJldHVybiBlbmRJbnN0YW5jZShzZWxmLCAoKSA9PiBmbi5hcHBseShzZWxmLCBkb25lYXJncykpO1xuICAgIH1cbiAgICByZXR1cm4gZm4uYXBwbHkoc2VsZiwgZG9uZWFyZ3MpO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIHJ1biB0aGUgY29kZSBub3cgKGRvIG5vdCBxdWV1ZSBpdClcbiAqXG4gKiB5b3Ugc2hvdWxkIG5vdCB1c2UgdGhpcywgdW5sZXNzIHlvdSBrbm93IHdoYXQgeW91J3JlIGRvaW5nXG4gKiBpdCBzaG91bGQgYmUgdXNlZCBmb3IgcGx1Z2lucyBhbmQgY3VzdG9tIGFjdGlvbnMsIG5vdCBmb3JcbiAqIG5vcm1hbCBBUEkgdXNhZ2VcbiAqL1xuXG5OaWdodG1hcmUucHJvdG90eXBlLmV2YWx1YXRlX25vdyA9IGZ1bmN0aW9uKGpzX2ZuLCBkb25lKSB7XG4gIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKS5zbGljZSgyKS5tYXAoYT0+IHtcbiAgICByZXR1cm4geyBhcmd1bWVudDogSlNPTi5zdHJpbmdpZnkoYSkgfTtcbiAgfSk7XG4gIHZhciBzb3VyY2UgPSB0ZW1wbGF0ZS5leGVjdXRlKHsgc3JjOiBTdHJpbmcoanNfZm4pLCBhcmdzOiBhcmdzfSk7XG4gIHRoaXMuY2hpbGQuY2FsbCgnamF2YXNjcmlwdCcsIHNvdXJjZSwgZG9uZSk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBpbmplY3QgamF2YXNjcmlwdFxuICovXG5cbk5pZ2h0bWFyZS5wcm90b3R5cGUuX2luamVjdCA9IGZ1bmN0aW9uKGpzLCBkb25lKSB7XG4gIHRoaXMuY2hpbGQuY2FsbCgnamF2YXNjcmlwdCcsIHRlbXBsYXRlLmluamVjdCh7IHNyYzoganMgfSksIGRvbmUpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogZW5kXG4gKi9cblxuTmlnaHRtYXJlLnByb3RvdHlwZS5lbmQgPSBmdW5jdGlvbihkb25lKSB7XG4gIHRoaXMuZW5kaW5nID0gdHJ1ZTtcblxuICBpZiAoZG9uZSAmJiAhdGhpcy5ydW5uaW5nICYmICF0aGlzLmVuZGVkKSB7XG4gICAgcmV0dXJuIHRoaXMudGhlbihkb25lKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuXG4vKipcbiAqIEhhbHQgLSBGb3JjZSBraWxscyB0aGUgZWxlY3Ryb24gcHJvY2VzcyBpbW1lZGlhdGVseSBhbmQgZW1wdGllcyB0aGUgcXVldWVcbiAqXG4gKiBAcGFyYW0gIHtFcnJvcnxTdHJpbmd9IGVycm9yIChPcHRpb25hbDogZGVmYXVsdHMgdG8gJ05pZ2h0bWFyZSBIYWx0ZWQnLikgRXJyb3IgdG8gcGFzcyB0byByZWplY3RlZCBwcm9taXNlXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gZG9uZSAoT3B0aW9uYWw6IGRlZmF1bHRzIHRvIG5vIG9wZXJhdGlvbikgY2FsbGJhY2sgd2hlbiB0aGUgY2hpbGQgcHJvY2VzcyBleGl0c1xuICogQHJldHVybiB7TmlnaHRtYXJlfSAgICAgICByZXR1cm5zIHNlbGZcbiAqL1xuTmlnaHRtYXJlLnByb3RvdHlwZS5oYWx0ID0gZnVuY3Rpb24gKGVycm9yLCBkb25lKSB7XG4gIHRoaXMuZW5kaW5nID0gdHJ1ZTtcbiAgdmFyIHF1ZXVlID0gdGhpcy5xdWV1ZSgpOyAvLyBlbXB0eSB0aGUgcXVldWVcbiAgcXVldWUuc3BsaWNlKDApO1xuICBpZiAoIXRoaXMuZW5kZWQpIHtcbiAgICB2YXIgbWVzc2FnZSA9IGVycm9yO1xuICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICBtZXNzYWdlID0gZXJyb3IubWVzc2FnZTtcbiAgICB9XG4gICAgdGhpcy5kaWUgPSBtZXNzYWdlIHx8IERFRkFVTFRfSEFMVF9NRVNTQUdFO1xuICAgIGlmICh0eXBlb2YgdGhpcy5fcmVqZWN0QWN0aXZlUHJvbWlzZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpcy5fcmVqZWN0QWN0aXZlUHJvbWlzZShlcnJvciB8fCBERUZBVUxUX0hBTFRfTUVTU0FHRSk7XG4gICAgfVxuICAgIHZhciBjYWxsYmFjayA9IGRvbmU7XG4gICAgaWYgKCFjYWxsYmFjayB8fCB0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNhbGxiYWNrID0gbm9vcDtcbiAgICB9XG4gICAgZW5kSW5zdGFuY2UodGhpcywgY2FsbGJhY2ssIHRydWUpO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIG9uXG4gKi9cblxuTmlnaHRtYXJlLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uKGV2ZW50LCBoYW5kbGVyKSB7XG4gIHRoaXMucXVldWUoZnVuY3Rpb24oZG9uZSl7XG4gICAgdGhpcy5jaGlsZC5vbihldmVudCwgaGFuZGxlcik7XG4gICAgZG9uZSgpO1xuICB9KTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIG9uY2VcbiAqL1xuXG5OaWdodG1hcmUucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbihldmVudCwgaGFuZGxlcikge1xuICB0aGlzLnF1ZXVlKGZ1bmN0aW9uKGRvbmUpe1xuICAgIHRoaXMuY2hpbGQub25jZShldmVudCwgaGFuZGxlcik7XG4gICAgZG9uZSgpO1xuICB9KVxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogcmVtb3ZlRXZlbnRMaXN0ZW5lclxuICovXG5cbk5pZ2h0bWFyZS5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPSBmdW5jdGlvbihldmVudCwgaGFuZGxlcikge1xuICB0aGlzLmNoaWxkLnJlbW92ZUxpc3RlbmVyKGV2ZW50LCBoYW5kbGVyKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFF1ZXVlXG4gKi9cblxuTmlnaHRtYXJlLnByb3RvdHlwZS5xdWV1ZSA9IGZ1bmN0aW9uKGRvbmUpIHtcbiAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gdGhpcy5fcXVldWU7XG4gIHZhciBhcmdzID0gc2xpY2VkKGFyZ3VtZW50cyk7XG4gIHZhciBmbiA9IGFyZ3MucG9wKCk7XG4gIHRoaXMuX3F1ZXVlLnB1c2goW2ZuLCBhcmdzXSk7XG59O1xuXG5cbi8qKlxuICogdGhlblxuICovXG5cbk5pZ2h0bWFyZS5wcm90b3R5cGUudGhlbiA9IGZ1bmN0aW9uKGZ1bGZpbGwsIHJlamVjdCkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgcmV0dXJuIG5ldyB0aGlzLm9wdGlvbnMuUHJvbWlzZShmdW5jdGlvbiAoc3VjY2VzcywgZmFpbHVyZSkge1xuICAgIHNlbGYuX3JlamVjdEFjdGl2ZVByb21pc2UgPSBmYWlsdXJlO1xuICAgIHNlbGYucnVuKGZ1bmN0aW9uKGVyciwgcmVzdWx0KSB7XG4gICAgICBpZiAoZXJyKSBmYWlsdXJlKGVycik7XG4gICAgICBlbHNlIHN1Y2Nlc3MocmVzdWx0KTtcbiAgICB9KVxuICB9KVxuICAudGhlbihmdWxmaWxsLCByZWplY3QpO1xufTtcblxuLyoqXG4gKiBjYXRjaFxuICovXG5cbk5pZ2h0bWFyZS5wcm90b3R5cGUuY2F0Y2ggPSBmdW5jdGlvbihyZWplY3QpIHtcbiAgdGhpcy5fcmVqZWN0QWN0aXZlUHJvbWlzZSA9IHJlamVjdDtcbiAgcmV0dXJuIHRoaXMudGhlbih1bmRlZmluZWQsIHJlamVjdCk7XG59O1xuXG4vKipcbiAqIHVzZVxuICovXG5cbk5pZ2h0bWFyZS5wcm90b3R5cGUudXNlID0gZnVuY3Rpb24oZm4pIHtcbiAgZm4odGhpcylcbiAgcmV0dXJuIHRoaXNcbn07XG5cbi8vIHdyYXAgYWxsIHRoZSBmdW5jdGlvbnMgaW4gdGhlIHF1ZXVlaW5nIGZ1bmN0aW9uXG5mdW5jdGlvbiBxdWV1ZWQgKG5hbWUsIGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiBhY3Rpb24gKCkge1xuICAgIGRlYnVnKCdxdWV1ZWluZyBhY3Rpb24gXCInICsgbmFtZSArICdcIicpO1xuICAgIHZhciBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICAgIHRoaXMuX3F1ZXVlLnB1c2goW2ZuLCBhcmdzXSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuLyoqXG4gKiBTdGF0aWM6IFN1cHBvcnQgYXR0YWNoaW5nIGN1c3RvbSBhY3Rpb25zXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgLSBtZXRob2QgbmFtZVxuICogQHBhcmFtIHtGdW5jdGlvbnxPYmplY3R9IFtjaGlsZGZuXSAtIEVsZWN0cm9uIGltcGxlbWVudGF0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufE9iamVjdH0gcGFyZW50Zm4gLSBOaWdodG1hcmUgaW1wbGVtZW50YXRpb25cbiAqIEByZXR1cm4ge05pZ2h0bWFyZX1cbiAqL1xuXG5OaWdodG1hcmUuYWN0aW9uID0gZnVuY3Rpb24oKSB7XG4gIHZhciBuYW1lID0gYXJndW1lbnRzWzBdLCBjaGlsZGZuLCBwYXJlbnRmbjtcbiAgaWYoYXJndW1lbnRzLmxlbmd0aCA9PT0gMikge1xuICAgIHBhcmVudGZuID0gYXJndW1lbnRzWzFdO1xuICB9IGVsc2Uge1xuICAgIHBhcmVudGZuID0gYXJndW1lbnRzWzJdO1xuICAgIGNoaWxkZm4gPSBhcmd1bWVudHNbMV07XG4gIH1cblxuICAvLyBzdXBwb3J0IGZ1bmN0aW9ucyBhbmQgb2JqZWN0c1xuICAvLyBpZiBpdCdzIGFuIG9iamVjdCwgd3JhcCBpdCdzXG4gIC8vIHByb3BlcnRpZXMgaW4gdGhlIHF1ZXVlIGZ1bmN0aW9uXG5cbiAgaWYocGFyZW50Zm4pIHtcbiAgICBpZiAodHlwZW9mIHBhcmVudGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBOaWdodG1hcmUucHJvdG90eXBlW25hbWVdID0gcXVldWVkKG5hbWUsIHBhcmVudGZuKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCF+TmlnaHRtYXJlLm5hbWVzcGFjZXMuaW5kZXhPZihuYW1lKSkge1xuICAgICAgICBOaWdodG1hcmUubmFtZXNwYWNlcy5wdXNoKG5hbWUpO1xuICAgICAgfVxuICAgICAgTmlnaHRtYXJlLnByb3RvdHlwZVtuYW1lXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHJldHVybiBrZXlzKHBhcmVudGZuKS5yZWR1Y2UoZnVuY3Rpb24gKG9iaiwga2V5KSB7XG4gICAgICAgICAgb2JqW2tleV0gPSBxdWV1ZWQobmFtZSwgcGFyZW50Zm5ba2V5XSkuYmluZChzZWxmKVxuICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgICB9LCB7fSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYoY2hpbGRmbikge1xuICAgIGlmICh0eXBlb2YgY2hpbGRmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICBOaWdodG1hcmUuY2hpbGRBY3Rpb25zW25hbWVdID0gY2hpbGRmbjtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yKHZhciBrZXkgaW4gY2hpbGRmbil7XG4gICAgICAgIE5pZ2h0bWFyZS5jaGlsZEFjdGlvbnNbbmFtZSsnLicra2V5XSA9IGNoaWxkZm47XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQXR0YWNoIGFsbCB0aGUgYWN0aW9ucy5cbiAqL1xuXG5PYmplY3Qua2V5cyhhY3Rpb25zKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gIHZhciBmbiA9IGFjdGlvbnNbbmFtZV07XG4gIE5pZ2h0bWFyZS5hY3Rpb24obmFtZSwgZm4pO1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbmlnaHRtYXJlL2xpYi9uaWdodG1hcmUuanNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjbG9uZSA9IChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBDbG9uZXMgKGNvcGllcykgYW4gT2JqZWN0IHVzaW5nIGRlZXAgY29weWluZy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHN1cHBvcnRzIGNpcmN1bGFyIHJlZmVyZW5jZXMgYnkgZGVmYXVsdCwgYnV0IGlmIHlvdSBhcmUgY2VydGFpblxuICogdGhlcmUgYXJlIG5vIGNpcmN1bGFyIHJlZmVyZW5jZXMgaW4geW91ciBvYmplY3QsIHlvdSBjYW4gc2F2ZSBzb21lIENQVSB0aW1lXG4gKiBieSBjYWxsaW5nIGNsb25lKG9iaiwgZmFsc2UpLlxuICpcbiAqIENhdXRpb246IGlmIGBjaXJjdWxhcmAgaXMgZmFsc2UgYW5kIGBwYXJlbnRgIGNvbnRhaW5zIGNpcmN1bGFyIHJlZmVyZW5jZXMsXG4gKiB5b3VyIHByb2dyYW0gbWF5IGVudGVyIGFuIGluZmluaXRlIGxvb3AgYW5kIGNyYXNoLlxuICpcbiAqIEBwYXJhbSBgcGFyZW50YCAtIHRoZSBvYmplY3QgdG8gYmUgY2xvbmVkXG4gKiBAcGFyYW0gYGNpcmN1bGFyYCAtIHNldCB0byB0cnVlIGlmIHRoZSBvYmplY3QgdG8gYmUgY2xvbmVkIG1heSBjb250YWluXG4gKiAgICBjaXJjdWxhciByZWZlcmVuY2VzLiAob3B0aW9uYWwgLSB0cnVlIGJ5IGRlZmF1bHQpXG4gKiBAcGFyYW0gYGRlcHRoYCAtIHNldCB0byBhIG51bWJlciBpZiB0aGUgb2JqZWN0IGlzIG9ubHkgdG8gYmUgY2xvbmVkIHRvXG4gKiAgICBhIHBhcnRpY3VsYXIgZGVwdGguIChvcHRpb25hbCAtIGRlZmF1bHRzIHRvIEluZmluaXR5KVxuICogQHBhcmFtIGBwcm90b3R5cGVgIC0gc2V0cyB0aGUgcHJvdG90eXBlIHRvIGJlIHVzZWQgd2hlbiBjbG9uaW5nIGFuIG9iamVjdC5cbiAqICAgIChvcHRpb25hbCAtIGRlZmF1bHRzIHRvIHBhcmVudCBwcm90b3R5cGUpLlxuKi9cbmZ1bmN0aW9uIGNsb25lKHBhcmVudCwgY2lyY3VsYXIsIGRlcHRoLCBwcm90b3R5cGUpIHtcbiAgdmFyIGZpbHRlcjtcbiAgaWYgKHR5cGVvZiBjaXJjdWxhciA9PT0gJ29iamVjdCcpIHtcbiAgICBkZXB0aCA9IGNpcmN1bGFyLmRlcHRoO1xuICAgIHByb3RvdHlwZSA9IGNpcmN1bGFyLnByb3RvdHlwZTtcbiAgICBmaWx0ZXIgPSBjaXJjdWxhci5maWx0ZXI7XG4gICAgY2lyY3VsYXIgPSBjaXJjdWxhci5jaXJjdWxhclxuICB9XG4gIC8vIG1haW50YWluIHR3byBhcnJheXMgZm9yIGNpcmN1bGFyIHJlZmVyZW5jZXMsIHdoZXJlIGNvcnJlc3BvbmRpbmcgcGFyZW50c1xuICAvLyBhbmQgY2hpbGRyZW4gaGF2ZSB0aGUgc2FtZSBpbmRleFxuICB2YXIgYWxsUGFyZW50cyA9IFtdO1xuICB2YXIgYWxsQ2hpbGRyZW4gPSBbXTtcblxuICB2YXIgdXNlQnVmZmVyID0gdHlwZW9mIEJ1ZmZlciAhPSAndW5kZWZpbmVkJztcblxuICBpZiAodHlwZW9mIGNpcmN1bGFyID09ICd1bmRlZmluZWQnKVxuICAgIGNpcmN1bGFyID0gdHJ1ZTtcblxuICBpZiAodHlwZW9mIGRlcHRoID09ICd1bmRlZmluZWQnKVxuICAgIGRlcHRoID0gSW5maW5pdHk7XG5cbiAgLy8gcmVjdXJzZSB0aGlzIGZ1bmN0aW9uIHNvIHdlIGRvbid0IHJlc2V0IGFsbFBhcmVudHMgYW5kIGFsbENoaWxkcmVuXG4gIGZ1bmN0aW9uIF9jbG9uZShwYXJlbnQsIGRlcHRoKSB7XG4gICAgLy8gY2xvbmluZyBudWxsIGFsd2F5cyByZXR1cm5zIG51bGxcbiAgICBpZiAocGFyZW50ID09PSBudWxsKVxuICAgICAgcmV0dXJuIG51bGw7XG5cbiAgICBpZiAoZGVwdGggPT0gMClcbiAgICAgIHJldHVybiBwYXJlbnQ7XG5cbiAgICB2YXIgY2hpbGQ7XG4gICAgdmFyIHByb3RvO1xuICAgIGlmICh0eXBlb2YgcGFyZW50ICE9ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gcGFyZW50O1xuICAgIH1cblxuICAgIGlmIChjbG9uZS5fX2lzQXJyYXkocGFyZW50KSkge1xuICAgICAgY2hpbGQgPSBbXTtcbiAgICB9IGVsc2UgaWYgKGNsb25lLl9faXNSZWdFeHAocGFyZW50KSkge1xuICAgICAgY2hpbGQgPSBuZXcgUmVnRXhwKHBhcmVudC5zb3VyY2UsIF9fZ2V0UmVnRXhwRmxhZ3MocGFyZW50KSk7XG4gICAgICBpZiAocGFyZW50Lmxhc3RJbmRleCkgY2hpbGQubGFzdEluZGV4ID0gcGFyZW50Lmxhc3RJbmRleDtcbiAgICB9IGVsc2UgaWYgKGNsb25lLl9faXNEYXRlKHBhcmVudCkpIHtcbiAgICAgIGNoaWxkID0gbmV3IERhdGUocGFyZW50LmdldFRpbWUoKSk7XG4gICAgfSBlbHNlIGlmICh1c2VCdWZmZXIgJiYgQnVmZmVyLmlzQnVmZmVyKHBhcmVudCkpIHtcbiAgICAgIGNoaWxkID0gbmV3IEJ1ZmZlcihwYXJlbnQubGVuZ3RoKTtcbiAgICAgIHBhcmVudC5jb3B5KGNoaWxkKTtcbiAgICAgIHJldHVybiBjaGlsZDtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHR5cGVvZiBwcm90b3R5cGUgPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YocGFyZW50KTtcbiAgICAgICAgY2hpbGQgPSBPYmplY3QuY3JlYXRlKHByb3RvKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjaGlsZCA9IE9iamVjdC5jcmVhdGUocHJvdG90eXBlKTtcbiAgICAgICAgcHJvdG8gPSBwcm90b3R5cGU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNpcmN1bGFyKSB7XG4gICAgICB2YXIgaW5kZXggPSBhbGxQYXJlbnRzLmluZGV4T2YocGFyZW50KTtcblxuICAgICAgaWYgKGluZGV4ICE9IC0xKSB7XG4gICAgICAgIHJldHVybiBhbGxDaGlsZHJlbltpbmRleF07XG4gICAgICB9XG4gICAgICBhbGxQYXJlbnRzLnB1c2gocGFyZW50KTtcbiAgICAgIGFsbENoaWxkcmVuLnB1c2goY2hpbGQpO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgaW4gcGFyZW50KSB7XG4gICAgICB2YXIgYXR0cnM7XG4gICAgICBpZiAocHJvdG8pIHtcbiAgICAgICAgYXR0cnMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHByb3RvLCBpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGF0dHJzICYmIGF0dHJzLnNldCA9PSBudWxsKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgY2hpbGRbaV0gPSBfY2xvbmUocGFyZW50W2ldLCBkZXB0aCAtIDEpO1xuICAgIH1cblxuICAgIHJldHVybiBjaGlsZDtcbiAgfVxuXG4gIHJldHVybiBfY2xvbmUocGFyZW50LCBkZXB0aCk7XG59XG5cbi8qKlxuICogU2ltcGxlIGZsYXQgY2xvbmUgdXNpbmcgcHJvdG90eXBlLCBhY2NlcHRzIG9ubHkgb2JqZWN0cywgdXNlZnVsbCBmb3IgcHJvcGVydHlcbiAqIG92ZXJyaWRlIG9uIEZMQVQgY29uZmlndXJhdGlvbiBvYmplY3QgKG5vIG5lc3RlZCBwcm9wcykuXG4gKlxuICogVVNFIFdJVEggQ0FVVElPTiEgVGhpcyBtYXkgbm90IGJlaGF2ZSBhcyB5b3Ugd2lzaCBpZiB5b3UgZG8gbm90IGtub3cgaG93IHRoaXNcbiAqIHdvcmtzLlxuICovXG5jbG9uZS5jbG9uZVByb3RvdHlwZSA9IGZ1bmN0aW9uIGNsb25lUHJvdG90eXBlKHBhcmVudCkge1xuICBpZiAocGFyZW50ID09PSBudWxsKVxuICAgIHJldHVybiBudWxsO1xuXG4gIHZhciBjID0gZnVuY3Rpb24gKCkge307XG4gIGMucHJvdG90eXBlID0gcGFyZW50O1xuICByZXR1cm4gbmV3IGMoKTtcbn07XG5cbi8vIHByaXZhdGUgdXRpbGl0eSBmdW5jdGlvbnNcblxuZnVuY3Rpb24gX19vYmpUb1N0cihvKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobyk7XG59O1xuY2xvbmUuX19vYmpUb1N0ciA9IF9fb2JqVG9TdHI7XG5cbmZ1bmN0aW9uIF9faXNEYXRlKG8pIHtcbiAgcmV0dXJuIHR5cGVvZiBvID09PSAnb2JqZWN0JyAmJiBfX29ialRvU3RyKG8pID09PSAnW29iamVjdCBEYXRlXSc7XG59O1xuY2xvbmUuX19pc0RhdGUgPSBfX2lzRGF0ZTtcblxuZnVuY3Rpb24gX19pc0FycmF5KG8pIHtcbiAgcmV0dXJuIHR5cGVvZiBvID09PSAnb2JqZWN0JyAmJiBfX29ialRvU3RyKG8pID09PSAnW29iamVjdCBBcnJheV0nO1xufTtcbmNsb25lLl9faXNBcnJheSA9IF9faXNBcnJheTtcblxuZnVuY3Rpb24gX19pc1JlZ0V4cChvKSB7XG4gIHJldHVybiB0eXBlb2YgbyA9PT0gJ29iamVjdCcgJiYgX19vYmpUb1N0cihvKSA9PT0gJ1tvYmplY3QgUmVnRXhwXSc7XG59O1xuY2xvbmUuX19pc1JlZ0V4cCA9IF9faXNSZWdFeHA7XG5cbmZ1bmN0aW9uIF9fZ2V0UmVnRXhwRmxhZ3MocmUpIHtcbiAgdmFyIGZsYWdzID0gJyc7XG4gIGlmIChyZS5nbG9iYWwpIGZsYWdzICs9ICdnJztcbiAgaWYgKHJlLmlnbm9yZUNhc2UpIGZsYWdzICs9ICdpJztcbiAgaWYgKHJlLm11bHRpbGluZSkgZmxhZ3MgKz0gJ20nO1xuICByZXR1cm4gZmxhZ3M7XG59O1xuY2xvbmUuX19nZXRSZWdFeHBGbGFncyA9IF9fZ2V0UmVnRXhwRmxhZ3M7XG5cbnJldHVybiBjbG9uZTtcbn0pKCk7XG5cbmlmICh0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICBtb2R1bGUuZXhwb3J0cyA9IGNsb25lO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nsb25lL2Nsb25lLmpzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIFRoaXMgaXMgdGhlIHdlYiBicm93c2VyIGltcGxlbWVudGF0aW9uIG9mIGBkZWJ1ZygpYC5cbiAqXG4gKiBFeHBvc2UgYGRlYnVnKClgIGFzIHRoZSBtb2R1bGUuXG4gKi9cblxuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kZWJ1ZycpO1xuZXhwb3J0cy5sb2cgPSBsb2c7XG5leHBvcnRzLmZvcm1hdEFyZ3MgPSBmb3JtYXRBcmdzO1xuZXhwb3J0cy5zYXZlID0gc2F2ZTtcbmV4cG9ydHMubG9hZCA9IGxvYWQ7XG5leHBvcnRzLnVzZUNvbG9ycyA9IHVzZUNvbG9ycztcbmV4cG9ydHMuc3RvcmFnZSA9ICd1bmRlZmluZWQnICE9IHR5cGVvZiBjaHJvbWVcbiAgICAgICAgICAgICAgICYmICd1bmRlZmluZWQnICE9IHR5cGVvZiBjaHJvbWUuc3RvcmFnZVxuICAgICAgICAgICAgICAgICAgPyBjaHJvbWUuc3RvcmFnZS5sb2NhbFxuICAgICAgICAgICAgICAgICAgOiBsb2NhbHN0b3JhZ2UoKTtcblxuLyoqXG4gKiBDb2xvcnMuXG4gKi9cblxuZXhwb3J0cy5jb2xvcnMgPSBbXG4gICdsaWdodHNlYWdyZWVuJyxcbiAgJ2ZvcmVzdGdyZWVuJyxcbiAgJ2dvbGRlbnJvZCcsXG4gICdkb2RnZXJibHVlJyxcbiAgJ2RhcmtvcmNoaWQnLFxuICAnY3JpbXNvbidcbl07XG5cbi8qKlxuICogQ3VycmVudGx5IG9ubHkgV2ViS2l0LWJhc2VkIFdlYiBJbnNwZWN0b3JzLCBGaXJlZm94ID49IHYzMSxcbiAqIGFuZCB0aGUgRmlyZWJ1ZyBleHRlbnNpb24gKGFueSBGaXJlZm94IHZlcnNpb24pIGFyZSBrbm93blxuICogdG8gc3VwcG9ydCBcIiVjXCIgQ1NTIGN1c3RvbWl6YXRpb25zLlxuICpcbiAqIFRPRE86IGFkZCBhIGBsb2NhbFN0b3JhZ2VgIHZhcmlhYmxlIHRvIGV4cGxpY2l0bHkgZW5hYmxlL2Rpc2FibGUgY29sb3JzXG4gKi9cblxuZnVuY3Rpb24gdXNlQ29sb3JzKCkge1xuICAvLyBOQjogSW4gYW4gRWxlY3Ryb24gcHJlbG9hZCBzY3JpcHQsIGRvY3VtZW50IHdpbGwgYmUgZGVmaW5lZCBidXQgbm90IGZ1bGx5XG4gIC8vIGluaXRpYWxpemVkLiBTaW5jZSB3ZSBrbm93IHdlJ3JlIGluIENocm9tZSwgd2UnbGwganVzdCBkZXRlY3QgdGhpcyBjYXNlXG4gIC8vIGV4cGxpY2l0bHlcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdyAmJiB0eXBlb2Ygd2luZG93LnByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5wcm9jZXNzLnR5cGUgPT09ICdyZW5kZXJlcicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8vIGlzIHdlYmtpdD8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTY0NTk2MDYvMzc2NzczXG4gIC8vIGRvY3VtZW50IGlzIHVuZGVmaW5lZCBpbiByZWFjdC1uYXRpdmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC1uYXRpdmUvcHVsbC8xNjMyXG4gIHJldHVybiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudCAmJiAnV2Via2l0QXBwZWFyYW5jZScgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlKSB8fFxuICAgIC8vIGlzIGZpcmVidWc/IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzM5ODEyMC8zNzY3NzNcbiAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93ICYmIHdpbmRvdy5jb25zb2xlICYmIChjb25zb2xlLmZpcmVidWcgfHwgKGNvbnNvbGUuZXhjZXB0aW9uICYmIGNvbnNvbGUudGFibGUpKSkgfHxcbiAgICAvLyBpcyBmaXJlZm94ID49IHYzMT9cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1Rvb2xzL1dlYl9Db25zb2xlI1N0eWxpbmdfbWVzc2FnZXNcbiAgICAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yICYmIG5hdmlnYXRvci51c2VyQWdlbnQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC9maXJlZm94XFwvKFxcZCspLykgJiYgcGFyc2VJbnQoUmVnRXhwLiQxLCAxMCkgPj0gMzEpIHx8XG4gICAgLy8gZG91YmxlIGNoZWNrIHdlYmtpdCBpbiB1c2VyQWdlbnQganVzdCBpbiBjYXNlIHdlIGFyZSBpbiBhIHdvcmtlclxuICAgICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCAmJiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkubWF0Y2goL2FwcGxld2Via2l0XFwvKFxcZCspLykpO1xufVxuXG4vKipcbiAqIE1hcCAlaiB0byBgSlNPTi5zdHJpbmdpZnkoKWAsIHNpbmNlIG5vIFdlYiBJbnNwZWN0b3JzIGRvIHRoYXQgYnkgZGVmYXVsdC5cbiAqL1xuXG5leHBvcnRzLmZvcm1hdHRlcnMuaiA9IGZ1bmN0aW9uKHYpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiAnW1VuZXhwZWN0ZWRKU09OUGFyc2VFcnJvcl06ICcgKyBlcnIubWVzc2FnZTtcbiAgfVxufTtcblxuXG4vKipcbiAqIENvbG9yaXplIGxvZyBhcmd1bWVudHMgaWYgZW5hYmxlZC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGZvcm1hdEFyZ3MoYXJncykge1xuICB2YXIgdXNlQ29sb3JzID0gdGhpcy51c2VDb2xvcnM7XG5cbiAgYXJnc1swXSA9ICh1c2VDb2xvcnMgPyAnJWMnIDogJycpXG4gICAgKyB0aGlzLm5hbWVzcGFjZVxuICAgICsgKHVzZUNvbG9ycyA/ICcgJWMnIDogJyAnKVxuICAgICsgYXJnc1swXVxuICAgICsgKHVzZUNvbG9ycyA/ICclYyAnIDogJyAnKVxuICAgICsgJysnICsgZXhwb3J0cy5odW1hbml6ZSh0aGlzLmRpZmYpO1xuXG4gIGlmICghdXNlQ29sb3JzKSByZXR1cm47XG5cbiAgdmFyIGMgPSAnY29sb3I6ICcgKyB0aGlzLmNvbG9yO1xuICBhcmdzLnNwbGljZSgxLCAwLCBjLCAnY29sb3I6IGluaGVyaXQnKVxuXG4gIC8vIHRoZSBmaW5hbCBcIiVjXCIgaXMgc29tZXdoYXQgdHJpY2t5LCBiZWNhdXNlIHRoZXJlIGNvdWxkIGJlIG90aGVyXG4gIC8vIGFyZ3VtZW50cyBwYXNzZWQgZWl0aGVyIGJlZm9yZSBvciBhZnRlciB0aGUgJWMsIHNvIHdlIG5lZWQgdG9cbiAgLy8gZmlndXJlIG91dCB0aGUgY29ycmVjdCBpbmRleCB0byBpbnNlcnQgdGhlIENTUyBpbnRvXG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBsYXN0QyA9IDA7XG4gIGFyZ3NbMF0ucmVwbGFjZSgvJVthLXpBLVolXS9nLCBmdW5jdGlvbihtYXRjaCkge1xuICAgIGlmICgnJSUnID09PSBtYXRjaCkgcmV0dXJuO1xuICAgIGluZGV4Kys7XG4gICAgaWYgKCclYycgPT09IG1hdGNoKSB7XG4gICAgICAvLyB3ZSBvbmx5IGFyZSBpbnRlcmVzdGVkIGluIHRoZSAqbGFzdCogJWNcbiAgICAgIC8vICh0aGUgdXNlciBtYXkgaGF2ZSBwcm92aWRlZCB0aGVpciBvd24pXG4gICAgICBsYXN0QyA9IGluZGV4O1xuICAgIH1cbiAgfSk7XG5cbiAgYXJncy5zcGxpY2UobGFzdEMsIDAsIGMpO1xufVxuXG4vKipcbiAqIEludm9rZXMgYGNvbnNvbGUubG9nKClgIHdoZW4gYXZhaWxhYmxlLlxuICogTm8tb3Agd2hlbiBgY29uc29sZS5sb2dgIGlzIG5vdCBhIFwiZnVuY3Rpb25cIi5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGxvZygpIHtcbiAgLy8gdGhpcyBoYWNrZXJ5IGlzIHJlcXVpcmVkIGZvciBJRTgvOSwgd2hlcmVcbiAgLy8gdGhlIGBjb25zb2xlLmxvZ2AgZnVuY3Rpb24gZG9lc24ndCBoYXZlICdhcHBseSdcbiAgcmV0dXJuICdvYmplY3QnID09PSB0eXBlb2YgY29uc29sZVxuICAgICYmIGNvbnNvbGUubG9nXG4gICAgJiYgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwoY29uc29sZS5sb2csIGNvbnNvbGUsIGFyZ3VtZW50cyk7XG59XG5cbi8qKlxuICogU2F2ZSBgbmFtZXNwYWNlc2AuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHNhdmUobmFtZXNwYWNlcykge1xuICB0cnkge1xuICAgIGlmIChudWxsID09IG5hbWVzcGFjZXMpIHtcbiAgICAgIGV4cG9ydHMuc3RvcmFnZS5yZW1vdmVJdGVtKCdkZWJ1ZycpO1xuICAgIH0gZWxzZSB7XG4gICAgICBleHBvcnRzLnN0b3JhZ2UuZGVidWcgPSBuYW1lc3BhY2VzO1xuICAgIH1cbiAgfSBjYXRjaChlKSB7fVxufVxuXG4vKipcbiAqIExvYWQgYG5hbWVzcGFjZXNgLlxuICpcbiAqIEByZXR1cm4ge1N0cmluZ30gcmV0dXJucyB0aGUgcHJldmlvdXNseSBwZXJzaXN0ZWQgZGVidWcgbW9kZXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGxvYWQoKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGV4cG9ydHMuc3RvcmFnZS5kZWJ1ZztcbiAgfSBjYXRjaChlKSB7fVxuXG4gIC8vIElmIGRlYnVnIGlzbid0IHNldCBpbiBMUywgYW5kIHdlJ3JlIGluIEVsZWN0cm9uLCB0cnkgdG8gbG9hZCAkREVCVUdcbiAgaWYgKHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiAnZW52JyBpbiBwcm9jZXNzKSB7XG4gICAgcmV0dXJuIHByb2Nlc3MuZW52LkRFQlVHO1xuICB9XG59XG5cbi8qKlxuICogRW5hYmxlIG5hbWVzcGFjZXMgbGlzdGVkIGluIGBsb2NhbFN0b3JhZ2UuZGVidWdgIGluaXRpYWxseS5cbiAqL1xuXG5leHBvcnRzLmVuYWJsZShsb2FkKCkpO1xuXG4vKipcbiAqIExvY2Fsc3RvcmFnZSBhdHRlbXB0cyB0byByZXR1cm4gdGhlIGxvY2Fsc3RvcmFnZS5cbiAqXG4gKiBUaGlzIGlzIG5lY2Vzc2FyeSBiZWNhdXNlIHNhZmFyaSB0aHJvd3NcbiAqIHdoZW4gYSB1c2VyIGRpc2FibGVzIGNvb2tpZXMvbG9jYWxzdG9yYWdlXG4gKiBhbmQgeW91IGF0dGVtcHQgdG8gYWNjZXNzIGl0LlxuICpcbiAqIEByZXR1cm4ge0xvY2FsU3RvcmFnZX1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGxvY2Fsc3RvcmFnZSgpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gd2luZG93LmxvY2FsU3RvcmFnZTtcbiAgfSBjYXRjaCAoZSkge31cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kZWJ1Zy9zcmMvYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzLlxuICovXG5cbnZhciB0dHkgPSByZXF1aXJlKCd0dHknKTtcbnZhciB1dGlsID0gcmVxdWlyZSgndXRpbCcpO1xuXG4vKipcbiAqIFRoaXMgaXMgdGhlIE5vZGUuanMgaW1wbGVtZW50YXRpb24gb2YgYGRlYnVnKClgLlxuICpcbiAqIEV4cG9zZSBgZGVidWcoKWAgYXMgdGhlIG1vZHVsZS5cbiAqL1xuXG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2RlYnVnJyk7XG5leHBvcnRzLmluaXQgPSBpbml0O1xuZXhwb3J0cy5sb2cgPSBsb2c7XG5leHBvcnRzLmZvcm1hdEFyZ3MgPSBmb3JtYXRBcmdzO1xuZXhwb3J0cy5zYXZlID0gc2F2ZTtcbmV4cG9ydHMubG9hZCA9IGxvYWQ7XG5leHBvcnRzLnVzZUNvbG9ycyA9IHVzZUNvbG9ycztcblxuLyoqXG4gKiBDb2xvcnMuXG4gKi9cblxuZXhwb3J0cy5jb2xvcnMgPSBbNiwgMiwgMywgNCwgNSwgMV07XG5cbi8qKlxuICogQnVpbGQgdXAgdGhlIGRlZmF1bHQgYGluc3BlY3RPcHRzYCBvYmplY3QgZnJvbSB0aGUgZW52aXJvbm1lbnQgdmFyaWFibGVzLlxuICpcbiAqICAgJCBERUJVR19DT0xPUlM9bm8gREVCVUdfREVQVEg9MTAgREVCVUdfU0hPV19ISURERU49ZW5hYmxlZCBub2RlIHNjcmlwdC5qc1xuICovXG5cbmV4cG9ydHMuaW5zcGVjdE9wdHMgPSBPYmplY3Qua2V5cyhwcm9jZXNzLmVudikuZmlsdGVyKGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIC9eZGVidWdfL2kudGVzdChrZXkpO1xufSkucmVkdWNlKGZ1bmN0aW9uIChvYmosIGtleSkge1xuICAvLyBjYW1lbC1jYXNlXG4gIHZhciBwcm9wID0ga2V5XG4gICAgLnN1YnN0cmluZyg2KVxuICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgLnJlcGxhY2UoL18oW2Etel0pLywgZnVuY3Rpb24gKF8sIGspIHsgcmV0dXJuIGsudG9VcHBlckNhc2UoKSB9KTtcblxuICAvLyBjb2VyY2Ugc3RyaW5nIHZhbHVlIGludG8gSlMgdmFsdWVcbiAgdmFyIHZhbCA9IHByb2Nlc3MuZW52W2tleV07XG4gIGlmICgvXih5ZXN8b258dHJ1ZXxlbmFibGVkKSQvaS50ZXN0KHZhbCkpIHZhbCA9IHRydWU7XG4gIGVsc2UgaWYgKC9eKG5vfG9mZnxmYWxzZXxkaXNhYmxlZCkkL2kudGVzdCh2YWwpKSB2YWwgPSBmYWxzZTtcbiAgZWxzZSBpZiAodmFsID09PSAnbnVsbCcpIHZhbCA9IG51bGw7XG4gIGVsc2UgdmFsID0gTnVtYmVyKHZhbCk7XG5cbiAgb2JqW3Byb3BdID0gdmFsO1xuICByZXR1cm4gb2JqO1xufSwge30pO1xuXG4vKipcbiAqIFRoZSBmaWxlIGRlc2NyaXB0b3IgdG8gd3JpdGUgdGhlIGBkZWJ1ZygpYCBjYWxscyB0by5cbiAqIFNldCB0aGUgYERFQlVHX0ZEYCBlbnYgdmFyaWFibGUgdG8gb3ZlcnJpZGUgd2l0aCBhbm90aGVyIHZhbHVlLiBpLmUuOlxuICpcbiAqICAgJCBERUJVR19GRD0zIG5vZGUgc2NyaXB0LmpzIDM+ZGVidWcubG9nXG4gKi9cblxudmFyIGZkID0gcGFyc2VJbnQocHJvY2Vzcy5lbnYuREVCVUdfRkQsIDEwKSB8fCAyO1xuXG5pZiAoMSAhPT0gZmQgJiYgMiAhPT0gZmQpIHtcbiAgdXRpbC5kZXByZWNhdGUoZnVuY3Rpb24oKXt9LCAnZXhjZXB0IGZvciBzdGRlcnIoMikgYW5kIHN0ZG91dCgxKSwgYW55IG90aGVyIHVzYWdlIG9mIERFQlVHX0ZEIGlzIGRlcHJlY2F0ZWQuIE92ZXJyaWRlIGRlYnVnLmxvZyBpZiB5b3Ugd2FudCB0byB1c2UgYSBkaWZmZXJlbnQgbG9nIGZ1bmN0aW9uIChodHRwczovL2dpdC5pby9kZWJ1Z19mZCknKSgpXG59XG5cbnZhciBzdHJlYW0gPSAxID09PSBmZCA/IHByb2Nlc3Muc3Rkb3V0IDpcbiAgICAgICAgICAgICAyID09PSBmZCA/IHByb2Nlc3Muc3RkZXJyIDpcbiAgICAgICAgICAgICBjcmVhdGVXcml0YWJsZVN0ZGlvU3RyZWFtKGZkKTtcblxuLyoqXG4gKiBJcyBzdGRvdXQgYSBUVFk/IENvbG9yZWQgb3V0cHV0IGlzIGVuYWJsZWQgd2hlbiBgdHJ1ZWAuXG4gKi9cblxuZnVuY3Rpb24gdXNlQ29sb3JzKCkge1xuICByZXR1cm4gJ2NvbG9ycycgaW4gZXhwb3J0cy5pbnNwZWN0T3B0c1xuICAgID8gQm9vbGVhbihleHBvcnRzLmluc3BlY3RPcHRzLmNvbG9ycylcbiAgICA6IHR0eS5pc2F0dHkoZmQpO1xufVxuXG4vKipcbiAqIE1hcCAlbyB0byBgdXRpbC5pbnNwZWN0KClgLCBhbGwgb24gYSBzaW5nbGUgbGluZS5cbiAqL1xuXG5leHBvcnRzLmZvcm1hdHRlcnMubyA9IGZ1bmN0aW9uKHYpIHtcbiAgdGhpcy5pbnNwZWN0T3B0cy5jb2xvcnMgPSB0aGlzLnVzZUNvbG9ycztcbiAgcmV0dXJuIHV0aWwuaW5zcGVjdCh2LCB0aGlzLmluc3BlY3RPcHRzKVxuICAgIC5yZXBsYWNlKC9cXHMqXFxuXFxzKi9nLCAnICcpO1xufTtcblxuLyoqXG4gKiBNYXAgJW8gdG8gYHV0aWwuaW5zcGVjdCgpYCwgYWxsb3dpbmcgbXVsdGlwbGUgbGluZXMgaWYgbmVlZGVkLlxuICovXG5cbmV4cG9ydHMuZm9ybWF0dGVycy5PID0gZnVuY3Rpb24odikge1xuICB0aGlzLmluc3BlY3RPcHRzLmNvbG9ycyA9IHRoaXMudXNlQ29sb3JzO1xuICByZXR1cm4gdXRpbC5pbnNwZWN0KHYsIHRoaXMuaW5zcGVjdE9wdHMpO1xufTtcblxuLyoqXG4gKiBBZGRzIEFOU0kgY29sb3IgZXNjYXBlIGNvZGVzIGlmIGVuYWJsZWQuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBmb3JtYXRBcmdzKGFyZ3MpIHtcbiAgdmFyIG5hbWUgPSB0aGlzLm5hbWVzcGFjZTtcbiAgdmFyIHVzZUNvbG9ycyA9IHRoaXMudXNlQ29sb3JzO1xuXG4gIGlmICh1c2VDb2xvcnMpIHtcbiAgICB2YXIgYyA9IHRoaXMuY29sb3I7XG4gICAgdmFyIHByZWZpeCA9ICcgIFxcdTAwMWJbMycgKyBjICsgJzsxbScgKyBuYW1lICsgJyAnICsgJ1xcdTAwMWJbMG0nO1xuXG4gICAgYXJnc1swXSA9IHByZWZpeCArIGFyZ3NbMF0uc3BsaXQoJ1xcbicpLmpvaW4oJ1xcbicgKyBwcmVmaXgpO1xuICAgIGFyZ3MucHVzaCgnXFx1MDAxYlszJyArIGMgKyAnbSsnICsgZXhwb3J0cy5odW1hbml6ZSh0aGlzLmRpZmYpICsgJ1xcdTAwMWJbMG0nKTtcbiAgfSBlbHNlIHtcbiAgICBhcmdzWzBdID0gbmV3IERhdGUoKS50b1VUQ1N0cmluZygpXG4gICAgICArICcgJyArIG5hbWUgKyAnICcgKyBhcmdzWzBdO1xuICB9XG59XG5cbi8qKlxuICogSW52b2tlcyBgdXRpbC5mb3JtYXQoKWAgd2l0aCB0aGUgc3BlY2lmaWVkIGFyZ3VtZW50cyBhbmQgd3JpdGVzIHRvIGBzdHJlYW1gLlxuICovXG5cbmZ1bmN0aW9uIGxvZygpIHtcbiAgcmV0dXJuIHN0cmVhbS53cml0ZSh1dGlsLmZvcm1hdC5hcHBseSh1dGlsLCBhcmd1bWVudHMpICsgJ1xcbicpO1xufVxuXG4vKipcbiAqIFNhdmUgYG5hbWVzcGFjZXNgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBzYXZlKG5hbWVzcGFjZXMpIHtcbiAgaWYgKG51bGwgPT0gbmFtZXNwYWNlcykge1xuICAgIC8vIElmIHlvdSBzZXQgYSBwcm9jZXNzLmVudiBmaWVsZCB0byBudWxsIG9yIHVuZGVmaW5lZCwgaXQgZ2V0cyBjYXN0IHRvIHRoZVxuICAgIC8vIHN0cmluZyAnbnVsbCcgb3IgJ3VuZGVmaW5lZCcuIEp1c3QgZGVsZXRlIGluc3RlYWQuXG4gICAgZGVsZXRlIHByb2Nlc3MuZW52LkRFQlVHO1xuICB9IGVsc2Uge1xuICAgIHByb2Nlc3MuZW52LkRFQlVHID0gbmFtZXNwYWNlcztcbiAgfVxufVxuXG4vKipcbiAqIExvYWQgYG5hbWVzcGFjZXNgLlxuICpcbiAqIEByZXR1cm4ge1N0cmluZ30gcmV0dXJucyB0aGUgcHJldmlvdXNseSBwZXJzaXN0ZWQgZGVidWcgbW9kZXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGxvYWQoKSB7XG4gIHJldHVybiBwcm9jZXNzLmVudi5ERUJVRztcbn1cblxuLyoqXG4gKiBDb3BpZWQgZnJvbSBgbm9kZS9zcmMvbm9kZS5qc2AuXG4gKlxuICogWFhYOiBJdCdzIGxhbWUgdGhhdCBub2RlIGRvZXNuJ3QgZXhwb3NlIHRoaXMgQVBJIG91dC1vZi10aGUtYm94LiBJdCBhbHNvXG4gKiByZWxpZXMgb24gdGhlIHVuZG9jdW1lbnRlZCBgdHR5X3dyYXAuZ3Vlc3NIYW5kbGVUeXBlKClgIHdoaWNoIGlzIGFsc28gbGFtZS5cbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVXcml0YWJsZVN0ZGlvU3RyZWFtIChmZCkge1xuICB2YXIgc3RyZWFtO1xuICB2YXIgdHR5X3dyYXAgPSBwcm9jZXNzLmJpbmRpbmcoJ3R0eV93cmFwJyk7XG5cbiAgLy8gTm90ZSBzdHJlYW0uX3R5cGUgaXMgdXNlZCBmb3IgdGVzdC1tb2R1bGUtbG9hZC1saXN0LmpzXG5cbiAgc3dpdGNoICh0dHlfd3JhcC5ndWVzc0hhbmRsZVR5cGUoZmQpKSB7XG4gICAgY2FzZSAnVFRZJzpcbiAgICAgIHN0cmVhbSA9IG5ldyB0dHkuV3JpdGVTdHJlYW0oZmQpO1xuICAgICAgc3RyZWFtLl90eXBlID0gJ3R0eSc7XG5cbiAgICAgIC8vIEhhY2sgdG8gaGF2ZSBzdHJlYW0gbm90IGtlZXAgdGhlIGV2ZW50IGxvb3AgYWxpdmUuXG4gICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2pveWVudC9ub2RlL2lzc3Vlcy8xNzI2XG4gICAgICBpZiAoc3RyZWFtLl9oYW5kbGUgJiYgc3RyZWFtLl9oYW5kbGUudW5yZWYpIHtcbiAgICAgICAgc3RyZWFtLl9oYW5kbGUudW5yZWYoKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnRklMRSc6XG4gICAgICB2YXIgZnMgPSByZXF1aXJlKCdmcycpO1xuICAgICAgc3RyZWFtID0gbmV3IGZzLlN5bmNXcml0ZVN0cmVhbShmZCwgeyBhdXRvQ2xvc2U6IGZhbHNlIH0pO1xuICAgICAgc3RyZWFtLl90eXBlID0gJ2ZzJztcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnUElQRSc6XG4gICAgY2FzZSAnVENQJzpcbiAgICAgIHZhciBuZXQgPSByZXF1aXJlKCduZXQnKTtcbiAgICAgIHN0cmVhbSA9IG5ldyBuZXQuU29ja2V0KHtcbiAgICAgICAgZmQ6IGZkLFxuICAgICAgICByZWFkYWJsZTogZmFsc2UsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9KTtcblxuICAgICAgLy8gRklYTUUgU2hvdWxkIHByb2JhYmx5IGhhdmUgYW4gb3B0aW9uIGluIG5ldC5Tb2NrZXQgdG8gY3JlYXRlIGFcbiAgICAgIC8vIHN0cmVhbSBmcm9tIGFuIGV4aXN0aW5nIGZkIHdoaWNoIGlzIHdyaXRhYmxlIG9ubHkuIEJ1dCBmb3Igbm93XG4gICAgICAvLyB3ZSdsbCBqdXN0IGFkZCB0aGlzIGhhY2sgYW5kIHNldCB0aGUgYHJlYWRhYmxlYCBtZW1iZXIgdG8gZmFsc2UuXG4gICAgICAvLyBUZXN0OiAuL25vZGUgdGVzdC9maXh0dXJlcy9lY2hvLmpzIDwgL2V0Yy9wYXNzd2RcbiAgICAgIHN0cmVhbS5yZWFkYWJsZSA9IGZhbHNlO1xuICAgICAgc3RyZWFtLnJlYWQgPSBudWxsO1xuICAgICAgc3RyZWFtLl90eXBlID0gJ3BpcGUnO1xuXG4gICAgICAvLyBGSVhNRSBIYWNrIHRvIGhhdmUgc3RyZWFtIG5vdCBrZWVwIHRoZSBldmVudCBsb29wIGFsaXZlLlxuICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9qb3llbnQvbm9kZS9pc3N1ZXMvMTcyNlxuICAgICAgaWYgKHN0cmVhbS5faGFuZGxlICYmIHN0cmVhbS5faGFuZGxlLnVucmVmKSB7XG4gICAgICAgIHN0cmVhbS5faGFuZGxlLnVucmVmKCk7XG4gICAgICB9XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICAvLyBQcm9iYWJseSBhbiBlcnJvciBvbiBpbiB1dl9ndWVzc19oYW5kbGUoKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbXBsZW1lbnQgbWUuIFVua25vd24gc3RyZWFtIGZpbGUgdHlwZSEnKTtcbiAgfVxuXG4gIC8vIEZvciBzdXBwb3J0aW5nIGxlZ2FjeSBBUEkgd2UgcHV0IHRoZSBGRCBoZXJlLlxuICBzdHJlYW0uZmQgPSBmZDtcblxuICBzdHJlYW0uX2lzU3RkaW8gPSB0cnVlO1xuXG4gIHJldHVybiBzdHJlYW07XG59XG5cbi8qKlxuICogSW5pdCBsb2dpYyBmb3IgYGRlYnVnYCBpbnN0YW5jZXMuXG4gKlxuICogQ3JlYXRlIGEgbmV3IGBpbnNwZWN0T3B0c2Agb2JqZWN0IGluIGNhc2UgYHVzZUNvbG9yc2AgaXMgc2V0XG4gKiBkaWZmZXJlbnRseSBmb3IgYSBwYXJ0aWN1bGFyIGBkZWJ1Z2AgaW5zdGFuY2UuXG4gKi9cblxuZnVuY3Rpb24gaW5pdCAoZGVidWcpIHtcbiAgZGVidWcuaW5zcGVjdE9wdHMgPSB1dGlsLl9leHRlbmQoe30sIGV4cG9ydHMuaW5zcGVjdE9wdHMpO1xufVxuXG4vKipcbiAqIEVuYWJsZSBuYW1lc3BhY2VzIGxpc3RlZCBpbiBgcHJvY2Vzcy5lbnYuREVCVUdgIGluaXRpYWxseS5cbiAqL1xuXG5leHBvcnRzLmVuYWJsZShsb2FkKCkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2RlYnVnL3NyYy9ub2RlLmpzXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY2xvbmUgPSByZXF1aXJlKCdjbG9uZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9wdGlvbnMsIGRlZmF1bHRzKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIE9iamVjdC5rZXlzKGRlZmF1bHRzKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgIGlmICh0eXBlb2Ygb3B0aW9uc1trZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgb3B0aW9uc1trZXldID0gY2xvbmUoZGVmYXVsdHNba2V5XSk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gb3B0aW9ucztcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2RlZmF1bHRzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZnMgPSByZXF1aXJlKCdmcycpXG52YXIgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKVxuXG52YXIgcGF0aEZpbGUgPSBwYXRoLmpvaW4oX19kaXJuYW1lLCAncGF0aC50eHQnKVxuXG5pZiAoZnMuZXhpc3RzU3luYyhwYXRoRmlsZSkpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBwYXRoLmpvaW4oX19kaXJuYW1lLCBmcy5yZWFkRmlsZVN5bmMocGF0aEZpbGUsICd1dGYtOCcpKVxufSBlbHNlIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdFbGVjdHJvbiBmYWlsZWQgdG8gaW5zdGFsbCBjb3JyZWN0bHksIHBsZWFzZSBkZWxldGUgbm9kZV9tb2R1bGVzLycgKyBwYXRoLmJhc2VuYW1lKF9fZGlybmFtZSkgKyAnIGFuZCB0cnkgaW5zdGFsbGluZyBhZ2FpbicpXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZWxlY3Ryb24vaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuLyoqXG4gKiBFeHBvcnQgYHNvdXJjZWBcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHNvdXJjZTtcblxuLyoqXG4gKiBHZXQgaW5uZXIgYGZuYCBzb3VyY2UuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbnxTdHJpbmd9IGZuXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIHNvdXJjZShmbil7XG4gIHZhciBtYXRjaCA9IC9eZnVuY3Rpb24gKlxcUyo/ICpcXChbXildKlxcKSAqeyhbXFxTXFxzXSopfSQvLmV4ZWMoU3RyaW5nKGZuKSlcbiAgaWYgKCFtYXRjaCkgcmV0dXJuICcnO1xuICB2YXIgc3BhY2UgPSAvXlxcbiooXFxzKikvLmV4ZWMobWF0Y2hbMV0pWzFdO1xuICB2YXIgZXhwciA9IG5ldyBSZWdFeHAoJ14nICsgc3BhY2UsICdnbScpO1xuICByZXR1cm4gbWF0Y2hbMV0ucmVwbGFjZShleHByLCAnJyk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZnVuY3Rpb24tc291cmNlL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpZiAodHlwZW9mIE9iamVjdC5jcmVhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgLy8gaW1wbGVtZW50YXRpb24gZnJvbSBzdGFuZGFyZCBub2RlLmpzICd1dGlsJyBtb2R1bGVcbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbmhlcml0cyhjdG9yLCBzdXBlckN0b3IpIHtcbiAgICBjdG9yLnN1cGVyXyA9IHN1cGVyQ3RvclxuICAgIGN0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckN0b3IucHJvdG90eXBlLCB7XG4gICAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgICB2YWx1ZTogY3RvcixcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbn0gZWxzZSB7XG4gIC8vIG9sZCBzY2hvb2wgc2hpbSBmb3Igb2xkIGJyb3dzZXJzXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaW5oZXJpdHMoY3Rvciwgc3VwZXJDdG9yKSB7XG4gICAgY3Rvci5zdXBlcl8gPSBzdXBlckN0b3JcbiAgICB2YXIgVGVtcEN0b3IgPSBmdW5jdGlvbiAoKSB7fVxuICAgIFRlbXBDdG9yLnByb3RvdHlwZSA9IHN1cGVyQ3Rvci5wcm90b3R5cGVcbiAgICBjdG9yLnByb3RvdHlwZSA9IG5ldyBUZW1wQ3RvcigpXG4gICAgY3Rvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBjdG9yXG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9pbmhlcml0cy9pbmhlcml0c19icm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIChhcnIpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoYXJyKSA9PSAnW29iamVjdCBBcnJheV0nO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9pc2FycmF5L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiEgaHR0cDovL210aHMuYmUvanNlc2MgdjAuNS4wIGJ5IEBtYXRoaWFzICovXG47KGZ1bmN0aW9uKHJvb3QpIHtcblxuXHQvLyBEZXRlY3QgZnJlZSB2YXJpYWJsZXMgYGV4cG9ydHNgXG5cdHZhciBmcmVlRXhwb3J0cyA9IHR5cGVvZiBleHBvcnRzID09ICdvYmplY3QnICYmIGV4cG9ydHM7XG5cblx0Ly8gRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWBcblx0dmFyIGZyZWVNb2R1bGUgPSB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZSAmJlxuXHRcdG1vZHVsZS5leHBvcnRzID09IGZyZWVFeHBvcnRzICYmIG1vZHVsZTtcblxuXHQvLyBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCwgZnJvbSBOb2RlLmpzIG9yIEJyb3dzZXJpZmllZCBjb2RlLFxuXHQvLyBhbmQgdXNlIGl0IGFzIGByb290YFxuXHR2YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsO1xuXHRpZiAoZnJlZUdsb2JhbC5nbG9iYWwgPT09IGZyZWVHbG9iYWwgfHwgZnJlZUdsb2JhbC53aW5kb3cgPT09IGZyZWVHbG9iYWwpIHtcblx0XHRyb290ID0gZnJlZUdsb2JhbDtcblx0fVxuXG5cdC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5cdHZhciBvYmplY3QgPSB7fTtcblx0dmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0Lmhhc093blByb3BlcnR5O1xuXHR2YXIgZm9yT3duID0gZnVuY3Rpb24ob2JqZWN0LCBjYWxsYmFjaykge1xuXHRcdHZhciBrZXk7XG5cdFx0Zm9yIChrZXkgaW4gb2JqZWN0KSB7XG5cdFx0XHRpZiAoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkpIHtcblx0XHRcdFx0Y2FsbGJhY2soa2V5LCBvYmplY3Rba2V5XSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXG5cdHZhciBleHRlbmQgPSBmdW5jdGlvbihkZXN0aW5hdGlvbiwgc291cmNlKSB7XG5cdFx0aWYgKCFzb3VyY2UpIHtcblx0XHRcdHJldHVybiBkZXN0aW5hdGlvbjtcblx0XHR9XG5cdFx0Zm9yT3duKHNvdXJjZSwgZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuXHRcdFx0ZGVzdGluYXRpb25ba2V5XSA9IHZhbHVlO1xuXHRcdH0pO1xuXHRcdHJldHVybiBkZXN0aW5hdGlvbjtcblx0fTtcblxuXHR2YXIgZm9yRWFjaCA9IGZ1bmN0aW9uKGFycmF5LCBjYWxsYmFjaykge1xuXHRcdHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cdFx0dmFyIGluZGV4ID0gLTE7XG5cdFx0d2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcblx0XHRcdGNhbGxiYWNrKGFycmF5W2luZGV4XSk7XG5cdFx0fVxuXHR9O1xuXG5cdHZhciB0b1N0cmluZyA9IG9iamVjdC50b1N0cmluZztcblx0dmFyIGlzQXJyYXkgPSBmdW5jdGlvbih2YWx1ZSkge1xuXHRcdHJldHVybiB0b1N0cmluZy5jYWxsKHZhbHVlKSA9PSAnW29iamVjdCBBcnJheV0nO1xuXHR9O1xuXHR2YXIgaXNPYmplY3QgPSBmdW5jdGlvbih2YWx1ZSkge1xuXHRcdC8vIFRoaXMgaXMgYSB2ZXJ5IHNpbXBsZSBjaGVjaywgYnV0IGl04oCZcyBnb29kIGVub3VnaCBmb3Igd2hhdCB3ZSBuZWVkLlxuXHRcdHJldHVybiB0b1N0cmluZy5jYWxsKHZhbHVlKSA9PSAnW29iamVjdCBPYmplY3RdJztcblx0fTtcblx0dmFyIGlzU3RyaW5nID0gZnVuY3Rpb24odmFsdWUpIHtcblx0XHRyZXR1cm4gdHlwZW9mIHZhbHVlID09ICdzdHJpbmcnIHx8XG5cdFx0XHR0b1N0cmluZy5jYWxsKHZhbHVlKSA9PSAnW29iamVjdCBTdHJpbmddJztcblx0fTtcblx0dmFyIGlzRnVuY3Rpb24gPSBmdW5jdGlvbih2YWx1ZSkge1xuXHRcdC8vIEluIGEgcGVyZmVjdCB3b3JsZCwgdGhlIGB0eXBlb2ZgIGNoZWNrIHdvdWxkIGJlIHN1ZmZpY2llbnQuIEhvd2V2ZXIsXG5cdFx0Ly8gaW4gQ2hyb21lIDHigJMxMiwgYHR5cGVvZiAveC8gPT0gJ29iamVjdCdgLCBhbmQgaW4gSUUgNuKAkzhcblx0XHQvLyBgdHlwZW9mIGFsZXJ0ID09ICdvYmplY3QnYCBhbmQgc2ltaWxhciBmb3Igb3RoZXIgaG9zdCBvYmplY3RzLlxuXHRcdHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ2Z1bmN0aW9uJyB8fFxuXHRcdFx0dG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcblx0fTtcblxuXHQvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuXHQvLyBodHRwOi8vbWF0aGlhc2J5bmVucy5iZS9ub3Rlcy9qYXZhc2NyaXB0LWVzY2FwZXMjc2luZ2xlXG5cdHZhciBzaW5nbGVFc2NhcGVzID0ge1xuXHRcdCdcIic6ICdcXFxcXCInLFxuXHRcdCdcXCcnOiAnXFxcXFxcJycsXG5cdFx0J1xcXFwnOiAnXFxcXFxcXFwnLFxuXHRcdCdcXGInOiAnXFxcXGInLFxuXHRcdCdcXGYnOiAnXFxcXGYnLFxuXHRcdCdcXG4nOiAnXFxcXG4nLFxuXHRcdCdcXHInOiAnXFxcXHInLFxuXHRcdCdcXHQnOiAnXFxcXHQnXG5cdFx0Ly8gYFxcdmAgaXMgb21pdHRlZCBpbnRlbnRpb25hbGx5LCBiZWNhdXNlIGluIElFIDwgOSwgJ1xcdicgPT0gJ3YnLlxuXHRcdC8vICdcXHYnOiAnXFxcXHgwQidcblx0fTtcblx0dmFyIHJlZ2V4U2luZ2xlRXNjYXBlID0gL1tcIidcXFxcXFxiXFxmXFxuXFxyXFx0XS87XG5cblx0dmFyIHJlZ2V4RGlnaXQgPSAvWzAtOV0vO1xuXHR2YXIgcmVnZXhXaGl0ZWxpc3QgPSAvWyAhIy0mXFwoLVxcW1xcXS1+XS87XG5cblx0dmFyIGpzZXNjID0gZnVuY3Rpb24oYXJndW1lbnQsIG9wdGlvbnMpIHtcblx0XHQvLyBIYW5kbGUgb3B0aW9uc1xuXHRcdHZhciBkZWZhdWx0cyA9IHtcblx0XHRcdCdlc2NhcGVFdmVyeXRoaW5nJzogZmFsc2UsXG5cdFx0XHQncXVvdGVzJzogJ3NpbmdsZScsXG5cdFx0XHQnd3JhcCc6IGZhbHNlLFxuXHRcdFx0J2VzNic6IGZhbHNlLFxuXHRcdFx0J2pzb24nOiBmYWxzZSxcblx0XHRcdCdjb21wYWN0JzogdHJ1ZSxcblx0XHRcdCdpbmRlbnQnOiAnXFx0Jyxcblx0XHRcdCdfX2luZGVudF9fJzogJydcblx0XHR9O1xuXHRcdHZhciBqc29uID0gb3B0aW9ucyAmJiBvcHRpb25zLmpzb247XG5cdFx0aWYgKGpzb24pIHtcblx0XHRcdGRlZmF1bHRzLnF1b3RlcyA9ICdkb3VibGUnO1xuXHRcdFx0ZGVmYXVsdHMud3JhcCA9IHRydWU7XG5cdFx0fVxuXHRcdG9wdGlvbnMgPSBleHRlbmQoZGVmYXVsdHMsIG9wdGlvbnMpO1xuXHRcdGlmIChvcHRpb25zLnF1b3RlcyAhPSAnc2luZ2xlJyAmJiBvcHRpb25zLnF1b3RlcyAhPSAnZG91YmxlJykge1xuXHRcdFx0b3B0aW9ucy5xdW90ZXMgPSAnc2luZ2xlJztcblx0XHR9XG5cdFx0dmFyIHF1b3RlID0gb3B0aW9ucy5xdW90ZXMgPT0gJ2RvdWJsZScgPyAnXCInIDogJ1xcJyc7XG5cdFx0dmFyIGNvbXBhY3QgPSBvcHRpb25zLmNvbXBhY3Q7XG5cdFx0dmFyIGluZGVudCA9IG9wdGlvbnMuaW5kZW50O1xuXHRcdHZhciBvbGRJbmRlbnQ7XG5cdFx0dmFyIG5ld0xpbmUgPSBjb21wYWN0ID8gJycgOiAnXFxuJztcblx0XHR2YXIgcmVzdWx0O1xuXHRcdHZhciBpc0VtcHR5ID0gdHJ1ZTtcblxuXHRcdGlmIChqc29uICYmIGFyZ3VtZW50ICYmIGlzRnVuY3Rpb24oYXJndW1lbnQudG9KU09OKSkge1xuXHRcdFx0YXJndW1lbnQgPSBhcmd1bWVudC50b0pTT04oKTtcblx0XHR9XG5cblx0XHRpZiAoIWlzU3RyaW5nKGFyZ3VtZW50KSkge1xuXHRcdFx0aWYgKGlzQXJyYXkoYXJndW1lbnQpKSB7XG5cdFx0XHRcdHJlc3VsdCA9IFtdO1xuXHRcdFx0XHRvcHRpb25zLndyYXAgPSB0cnVlO1xuXHRcdFx0XHRvbGRJbmRlbnQgPSBvcHRpb25zLl9faW5kZW50X187XG5cdFx0XHRcdGluZGVudCArPSBvbGRJbmRlbnQ7XG5cdFx0XHRcdG9wdGlvbnMuX19pbmRlbnRfXyA9IGluZGVudDtcblx0XHRcdFx0Zm9yRWFjaChhcmd1bWVudCwgZnVuY3Rpb24odmFsdWUpIHtcblx0XHRcdFx0XHRpc0VtcHR5ID0gZmFsc2U7XG5cdFx0XHRcdFx0cmVzdWx0LnB1c2goXG5cdFx0XHRcdFx0XHQoY29tcGFjdCA/ICcnIDogaW5kZW50KSArXG5cdFx0XHRcdFx0XHRqc2VzYyh2YWx1ZSwgb3B0aW9ucylcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0aWYgKGlzRW1wdHkpIHtcblx0XHRcdFx0XHRyZXR1cm4gJ1tdJztcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gJ1snICsgbmV3TGluZSArIHJlc3VsdC5qb2luKCcsJyArIG5ld0xpbmUpICsgbmV3TGluZSArXG5cdFx0XHRcdFx0KGNvbXBhY3QgPyAnJyA6IG9sZEluZGVudCkgKyAnXSc7XG5cdFx0XHR9IGVsc2UgaWYgKCFpc09iamVjdChhcmd1bWVudCkpIHtcblx0XHRcdFx0aWYgKGpzb24pIHtcblx0XHRcdFx0XHQvLyBGb3Igc29tZSB2YWx1ZXMgKGUuZy4gYHVuZGVmaW5lZGAsIGBmdW5jdGlvbmAgb2JqZWN0cyksXG5cdFx0XHRcdFx0Ly8gYEpTT04uc3RyaW5naWZ5KHZhbHVlKWAgcmV0dXJucyBgdW5kZWZpbmVkYCAod2hpY2ggaXNu4oCZdCB2YWxpZFxuXHRcdFx0XHRcdC8vIEpTT04pIGluc3RlYWQgb2YgYCdudWxsJ2AuXG5cdFx0XHRcdFx0cmV0dXJuIEpTT04uc3RyaW5naWZ5KGFyZ3VtZW50KSB8fCAnbnVsbCc7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIFN0cmluZyhhcmd1bWVudCk7XG5cdFx0XHR9IGVsc2UgeyAvLyBpdOKAmXMgYW4gb2JqZWN0XG5cdFx0XHRcdHJlc3VsdCA9IFtdO1xuXHRcdFx0XHRvcHRpb25zLndyYXAgPSB0cnVlO1xuXHRcdFx0XHRvbGRJbmRlbnQgPSBvcHRpb25zLl9faW5kZW50X187XG5cdFx0XHRcdGluZGVudCArPSBvbGRJbmRlbnQ7XG5cdFx0XHRcdG9wdGlvbnMuX19pbmRlbnRfXyA9IGluZGVudDtcblx0XHRcdFx0Zm9yT3duKGFyZ3VtZW50LCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG5cdFx0XHRcdFx0aXNFbXB0eSA9IGZhbHNlO1xuXHRcdFx0XHRcdHJlc3VsdC5wdXNoKFxuXHRcdFx0XHRcdFx0KGNvbXBhY3QgPyAnJyA6IGluZGVudCkgK1xuXHRcdFx0XHRcdFx0anNlc2Moa2V5LCBvcHRpb25zKSArICc6JyArXG5cdFx0XHRcdFx0XHQoY29tcGFjdCA/ICcnIDogJyAnKSArXG5cdFx0XHRcdFx0XHRqc2VzYyh2YWx1ZSwgb3B0aW9ucylcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0aWYgKGlzRW1wdHkpIHtcblx0XHRcdFx0XHRyZXR1cm4gJ3t9Jztcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gJ3snICsgbmV3TGluZSArIHJlc3VsdC5qb2luKCcsJyArIG5ld0xpbmUpICsgbmV3TGluZSArXG5cdFx0XHRcdFx0KGNvbXBhY3QgPyAnJyA6IG9sZEluZGVudCkgKyAnfSc7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dmFyIHN0cmluZyA9IGFyZ3VtZW50O1xuXHRcdC8vIExvb3Agb3ZlciBlYWNoIGNvZGUgdW5pdCBpbiB0aGUgc3RyaW5nIGFuZCBlc2NhcGUgaXRcblx0XHR2YXIgaW5kZXggPSAtMTtcblx0XHR2YXIgbGVuZ3RoID0gc3RyaW5nLmxlbmd0aDtcblx0XHR2YXIgZmlyc3Q7XG5cdFx0dmFyIHNlY29uZDtcblx0XHR2YXIgY29kZVBvaW50O1xuXHRcdHJlc3VsdCA9ICcnO1xuXHRcdHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG5cdFx0XHR2YXIgY2hhcmFjdGVyID0gc3RyaW5nLmNoYXJBdChpbmRleCk7XG5cdFx0XHRpZiAob3B0aW9ucy5lczYpIHtcblx0XHRcdFx0Zmlyc3QgPSBzdHJpbmcuY2hhckNvZGVBdChpbmRleCk7XG5cdFx0XHRcdGlmICggLy8gY2hlY2sgaWYgaXTigJlzIHRoZSBzdGFydCBvZiBhIHN1cnJvZ2F0ZSBwYWlyXG5cdFx0XHRcdFx0Zmlyc3QgPj0gMHhEODAwICYmIGZpcnN0IDw9IDB4REJGRiAmJiAvLyBoaWdoIHN1cnJvZ2F0ZVxuXHRcdFx0XHRcdGxlbmd0aCA+IGluZGV4ICsgMSAvLyB0aGVyZSBpcyBhIG5leHQgY29kZSB1bml0XG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdHNlY29uZCA9IHN0cmluZy5jaGFyQ29kZUF0KGluZGV4ICsgMSk7XG5cdFx0XHRcdFx0aWYgKHNlY29uZCA+PSAweERDMDAgJiYgc2Vjb25kIDw9IDB4REZGRikgeyAvLyBsb3cgc3Vycm9nYXRlXG5cdFx0XHRcdFx0XHQvLyBodHRwOi8vbWF0aGlhc2J5bmVucy5iZS9ub3Rlcy9qYXZhc2NyaXB0LWVuY29kaW5nI3N1cnJvZ2F0ZS1mb3JtdWxhZVxuXHRcdFx0XHRcdFx0Y29kZVBvaW50ID0gKGZpcnN0IC0gMHhEODAwKSAqIDB4NDAwICsgc2Vjb25kIC0gMHhEQzAwICsgMHgxMDAwMDtcblx0XHRcdFx0XHRcdHJlc3VsdCArPSAnXFxcXHV7JyArIGNvZGVQb2ludC50b1N0cmluZygxNikudG9VcHBlckNhc2UoKSArICd9Jztcblx0XHRcdFx0XHRcdGluZGV4Kys7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmICghb3B0aW9ucy5lc2NhcGVFdmVyeXRoaW5nKSB7XG5cdFx0XHRcdGlmIChyZWdleFdoaXRlbGlzdC50ZXN0KGNoYXJhY3RlcikpIHtcblx0XHRcdFx0XHQvLyBJdOKAmXMgYSBwcmludGFibGUgQVNDSUkgY2hhcmFjdGVyIHRoYXQgaXMgbm90IGBcImAsIGAnYCBvciBgXFxgLFxuXHRcdFx0XHRcdC8vIHNvIGRvbuKAmXQgZXNjYXBlIGl0LlxuXHRcdFx0XHRcdHJlc3VsdCArPSBjaGFyYWN0ZXI7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGNoYXJhY3RlciA9PSAnXCInKSB7XG5cdFx0XHRcdFx0cmVzdWx0ICs9IHF1b3RlID09IGNoYXJhY3RlciA/ICdcXFxcXCInIDogY2hhcmFjdGVyO1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChjaGFyYWN0ZXIgPT0gJ1xcJycpIHtcblx0XHRcdFx0XHRyZXN1bHQgKz0gcXVvdGUgPT0gY2hhcmFjdGVyID8gJ1xcXFxcXCcnIDogY2hhcmFjdGVyO1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoXG5cdFx0XHRcdGNoYXJhY3RlciA9PSAnXFwwJyAmJlxuXHRcdFx0XHQhanNvbiAmJlxuXHRcdFx0XHQhcmVnZXhEaWdpdC50ZXN0KHN0cmluZy5jaGFyQXQoaW5kZXggKyAxKSlcblx0XHRcdCkge1xuXHRcdFx0XHRyZXN1bHQgKz0gJ1xcXFwwJztcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRpZiAocmVnZXhTaW5nbGVFc2NhcGUudGVzdChjaGFyYWN0ZXIpKSB7XG5cdFx0XHRcdC8vIG5vIG5lZWQgZm9yIGEgYGhhc093blByb3BlcnR5YCBjaGVjayBoZXJlXG5cdFx0XHRcdHJlc3VsdCArPSBzaW5nbGVFc2NhcGVzW2NoYXJhY3Rlcl07XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0dmFyIGNoYXJDb2RlID0gY2hhcmFjdGVyLmNoYXJDb2RlQXQoMCk7XG5cdFx0XHR2YXIgaGV4YWRlY2ltYWwgPSBjaGFyQ29kZS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKTtcblx0XHRcdHZhciBsb25naGFuZCA9IGhleGFkZWNpbWFsLmxlbmd0aCA+IDIgfHwganNvbjtcblx0XHRcdHZhciBlc2NhcGVkID0gJ1xcXFwnICsgKGxvbmdoYW5kID8gJ3UnIDogJ3gnKSArXG5cdFx0XHRcdCgnMDAwMCcgKyBoZXhhZGVjaW1hbCkuc2xpY2UobG9uZ2hhbmQgPyAtNCA6IC0yKTtcblx0XHRcdHJlc3VsdCArPSBlc2NhcGVkO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdGlmIChvcHRpb25zLndyYXApIHtcblx0XHRcdHJlc3VsdCA9IHF1b3RlICsgcmVzdWx0ICsgcXVvdGU7XG5cdFx0fVxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH07XG5cblx0anNlc2MudmVyc2lvbiA9ICcwLjUuMCc7XG5cblx0LyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cblx0Ly8gU29tZSBBTUQgYnVpbGQgb3B0aW1pemVycywgbGlrZSByLmpzLCBjaGVjayBmb3Igc3BlY2lmaWMgY29uZGl0aW9uIHBhdHRlcm5zXG5cdC8vIGxpa2UgdGhlIGZvbGxvd2luZzpcblx0aWYgKFxuXHRcdHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJlxuXHRcdHR5cGVvZiBkZWZpbmUuYW1kID09ICdvYmplY3QnICYmXG5cdFx0ZGVmaW5lLmFtZFxuXHQpIHtcblx0XHRkZWZpbmUoZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4ganNlc2M7XG5cdFx0fSk7XG5cdH1cdGVsc2UgaWYgKGZyZWVFeHBvcnRzICYmICFmcmVlRXhwb3J0cy5ub2RlVHlwZSkge1xuXHRcdGlmIChmcmVlTW9kdWxlKSB7IC8vIGluIE5vZGUuanMgb3IgUmluZ29KUyB2MC44LjArXG5cdFx0XHRmcmVlTW9kdWxlLmV4cG9ydHMgPSBqc2VzYztcblx0XHR9IGVsc2UgeyAvLyBpbiBOYXJ3aGFsIG9yIFJpbmdvSlMgdjAuNy4wLVxuXHRcdFx0ZnJlZUV4cG9ydHMuanNlc2MgPSBqc2VzYztcblx0XHR9XG5cdH0gZWxzZSB7IC8vIGluIFJoaW5vIG9yIGEgd2ViIGJyb3dzZXJcblx0XHRyb290LmpzZXNjID0ganNlc2M7XG5cdH1cblxufSh0aGlzKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vanNlc2MvanNlc2MuanNcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuLyoqXG4gKiBFeHBvc2UgYHJlbmRlcigpYC5gXG4gKi9cblxuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVuZGVyO1xuXG4vKipcbiAqIEV4cG9zZSBgY29tcGlsZSgpYC5cbiAqL1xuXG5leHBvcnRzLmNvbXBpbGUgPSBjb21waWxlO1xuXG4vKipcbiAqIFJlbmRlciB0aGUgZ2l2ZW4gbXVzdGFjaGUgYHN0cmAgd2l0aCBgb2JqYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIHJlbmRlcihzdHIsIG9iaikge1xuICBvYmogPSBvYmogfHwge307XG4gIHZhciBmbiA9IGNvbXBpbGUoc3RyKTtcbiAgcmV0dXJuIGZuKG9iaik7XG59XG5cbi8qKlxuICogQ29tcGlsZSB0aGUgZ2l2ZW4gYHN0cmAgdG8gYSBgRnVuY3Rpb25gLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBjb21waWxlKHN0cikge1xuICB2YXIganMgPSBbXTtcbiAgdmFyIHRva3MgPSBwYXJzZShzdHIpO1xuICB2YXIgdG9rO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rcy5sZW5ndGg7ICsraSkge1xuICAgIHRvayA9IHRva3NbaV07XG4gICAgaWYgKGkgJSAyID09IDApIHtcbiAgICAgIGpzLnB1c2goJ1wiJyArIHRvay5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykgKyAnXCInKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3dpdGNoICh0b2tbMF0pIHtcbiAgICAgICAgY2FzZSAnLyc6XG4gICAgICAgICAgdG9rID0gdG9rLnNsaWNlKDEpO1xuICAgICAgICAgIGpzLnB1c2goJyB9KSArICcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdeJzpcbiAgICAgICAgICB0b2sgPSB0b2suc2xpY2UoMSk7XG4gICAgICAgICAgYXNzZXJ0UHJvcGVydHkodG9rKTtcbiAgICAgICAgICBqcy5wdXNoKCcgKyBzZWN0aW9uKG9iaiwgXCInICsgdG9rICsgJ1wiLCB0cnVlLCBmdW5jdGlvbihvYmopeyByZXR1cm4gJyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJyMnOlxuICAgICAgICAgIHRvayA9IHRvay5zbGljZSgxKTtcbiAgICAgICAgICBhc3NlcnRQcm9wZXJ0eSh0b2spO1xuICAgICAgICAgIGpzLnB1c2goJyArIHNlY3Rpb24ob2JqLCBcIicgKyB0b2sgKyAnXCIsIGZhbHNlLCBmdW5jdGlvbihvYmopeyByZXR1cm4gJyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJyEnOlxuICAgICAgICAgIHRvayA9IHRvay5zbGljZSgxKTtcbiAgICAgICAgICBhc3NlcnRQcm9wZXJ0eSh0b2spO1xuICAgICAgICAgIGpzLnB1c2goJyArIG9iai4nICsgdG9rICsgJyArICcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGFzc2VydFByb3BlcnR5KHRvayk7XG4gICAgICAgICAganMucHVzaCgnICsgZXNjYXBlKG9iai4nICsgdG9rICsgJykgKyAnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBqcyA9ICdcXG4nXG4gICAgKyBpbmRlbnQoZXNjYXBlLnRvU3RyaW5nKCkpICsgJztcXG5cXG4nXG4gICAgKyBpbmRlbnQoc2VjdGlvbi50b1N0cmluZygpKSArICc7XFxuXFxuJ1xuICAgICsgJyAgcmV0dXJuICcgKyBqcy5qb2luKCcnKS5yZXBsYWNlKC9cXG4vZywgJ1xcXFxuJyk7XG5cbiAgcmV0dXJuIG5ldyBGdW5jdGlvbignb2JqJywganMpO1xufVxuXG4vKipcbiAqIEFzc2VydCB0aGF0IGBwcm9wYCBpcyBhIHZhbGlkIHByb3BlcnR5LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBhc3NlcnRQcm9wZXJ0eShwcm9wKSB7XG4gIGlmICghcHJvcC5tYXRjaCgvXltcXHcuXSskLykpIHRocm93IG5ldyBFcnJvcignaW52YWxpZCBwcm9wZXJ0eSBcIicgKyBwcm9wICsgJ1wiJyk7XG59XG5cbi8qKlxuICogUGFyc2UgYHN0cmAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7QXJyYXl9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBwYXJzZShzdHIpIHtcbiAgcmV0dXJuIHN0ci5zcGxpdCgvXFx7XFx7fFxcfVxcfS8pO1xufVxuXG4vKipcbiAqIEluZGVudCBgc3RyYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBpbmRlbnQoc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvXi9nbSwgJyAgJyk7XG59XG5cbi8qKlxuICogU2VjdGlvbiBoYW5kbGVyLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb250ZXh0IG9ialxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHRodW5rXG4gKiBAcGFyYW0ge0Jvb2xlYW59IG5lZ2F0ZVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gc2VjdGlvbihvYmosIHByb3AsIG5lZ2F0ZSwgdGh1bmspIHtcbiAgdmFyIHZhbCA9IG9ialtwcm9wXTtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkgcmV0dXJuIHZhbC5tYXAodGh1bmspLmpvaW4oJycpO1xuICBpZiAoJ2Z1bmN0aW9uJyA9PSB0eXBlb2YgdmFsKSByZXR1cm4gdmFsLmNhbGwob2JqLCB0aHVuayhvYmopKTtcbiAgaWYgKG5lZ2F0ZSkgdmFsID0gIXZhbDtcbiAgaWYgKHZhbCkgcmV0dXJuIHRodW5rKG9iaik7XG4gIHJldHVybiAnJztcbn1cblxuLyoqXG4gKiBFc2NhcGUgdGhlIGdpdmVuIGBodG1sYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaHRtbFxuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gZXNjYXBlKGh0bWwpIHtcbiAgcmV0dXJuIFN0cmluZyhodG1sKVxuICAgIC5yZXBsYWNlKC8mL2csICcmYW1wOycpXG4gICAgLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKVxuICAgIC5yZXBsYWNlKC88L2csICcmbHQ7JylcbiAgICAucmVwbGFjZSgvPi9nLCAnJmd0OycpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L21pbnN0YWNoZS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBIZWxwZXJzLlxuICovXG5cbnZhciBzID0gMTAwMFxudmFyIG0gPSBzICogNjBcbnZhciBoID0gbSAqIDYwXG52YXIgZCA9IGggKiAyNFxudmFyIHkgPSBkICogMzY1LjI1XG5cbi8qKlxuICogUGFyc2Ugb3IgZm9ybWF0IHRoZSBnaXZlbiBgdmFsYC5cbiAqXG4gKiBPcHRpb25zOlxuICpcbiAqICAtIGBsb25nYCB2ZXJib3NlIGZvcm1hdHRpbmcgW2ZhbHNlXVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfE51bWJlcn0gdmFsXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQHRocm93cyB7RXJyb3J9IHRocm93IGFuIGVycm9yIGlmIHZhbCBpcyBub3QgYSBub24tZW1wdHkgc3RyaW5nIG9yIGEgbnVtYmVyXG4gKiBAcmV0dXJuIHtTdHJpbmd8TnVtYmVyfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWwsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge31cbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsXG4gIGlmICh0eXBlID09PSAnc3RyaW5nJyAmJiB2YWwubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiBwYXJzZSh2YWwpXG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ251bWJlcicgJiYgaXNOYU4odmFsKSA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gb3B0aW9ucy5sb25nID9cblx0XHRcdGZtdExvbmcodmFsKSA6XG5cdFx0XHRmbXRTaG9ydCh2YWwpXG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKCd2YWwgaXMgbm90IGEgbm9uLWVtcHR5IHN0cmluZyBvciBhIHZhbGlkIG51bWJlci4gdmFsPScgKyBKU09OLnN0cmluZ2lmeSh2YWwpKVxufVxuXG4vKipcbiAqIFBhcnNlIHRoZSBnaXZlbiBgc3RyYCBhbmQgcmV0dXJuIG1pbGxpc2Vjb25kcy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBwYXJzZShzdHIpIHtcbiAgc3RyID0gU3RyaW5nKHN0cilcbiAgaWYgKHN0ci5sZW5ndGggPiAxMDAwMCkge1xuICAgIHJldHVyblxuICB9XG4gIHZhciBtYXRjaCA9IC9eKCg/OlxcZCspP1xcLj9cXGQrKSAqKG1pbGxpc2Vjb25kcz98bXNlY3M/fG1zfHNlY29uZHM/fHNlY3M/fHN8bWludXRlcz98bWlucz98bXxob3Vycz98aHJzP3xofGRheXM/fGR8eWVhcnM/fHlycz98eSk/JC9pLmV4ZWMoc3RyKVxuICBpZiAoIW1hdGNoKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgdmFyIG4gPSBwYXJzZUZsb2F0KG1hdGNoWzFdKVxuICB2YXIgdHlwZSA9IChtYXRjaFsyXSB8fCAnbXMnKS50b0xvd2VyQ2FzZSgpXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgJ3llYXJzJzpcbiAgICBjYXNlICd5ZWFyJzpcbiAgICBjYXNlICd5cnMnOlxuICAgIGNhc2UgJ3lyJzpcbiAgICBjYXNlICd5JzpcbiAgICAgIHJldHVybiBuICogeVxuICAgIGNhc2UgJ2RheXMnOlxuICAgIGNhc2UgJ2RheSc6XG4gICAgY2FzZSAnZCc6XG4gICAgICByZXR1cm4gbiAqIGRcbiAgICBjYXNlICdob3Vycyc6XG4gICAgY2FzZSAnaG91cic6XG4gICAgY2FzZSAnaHJzJzpcbiAgICBjYXNlICdocic6XG4gICAgY2FzZSAnaCc6XG4gICAgICByZXR1cm4gbiAqIGhcbiAgICBjYXNlICdtaW51dGVzJzpcbiAgICBjYXNlICdtaW51dGUnOlxuICAgIGNhc2UgJ21pbnMnOlxuICAgIGNhc2UgJ21pbic6XG4gICAgY2FzZSAnbSc6XG4gICAgICByZXR1cm4gbiAqIG1cbiAgICBjYXNlICdzZWNvbmRzJzpcbiAgICBjYXNlICdzZWNvbmQnOlxuICAgIGNhc2UgJ3NlY3MnOlxuICAgIGNhc2UgJ3NlYyc6XG4gICAgY2FzZSAncyc6XG4gICAgICByZXR1cm4gbiAqIHNcbiAgICBjYXNlICdtaWxsaXNlY29uZHMnOlxuICAgIGNhc2UgJ21pbGxpc2Vjb25kJzpcbiAgICBjYXNlICdtc2Vjcyc6XG4gICAgY2FzZSAnbXNlYyc6XG4gICAgY2FzZSAnbXMnOlxuICAgICAgcmV0dXJuIG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG59XG5cbi8qKlxuICogU2hvcnQgZm9ybWF0IGZvciBgbXNgLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBtc1xuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gZm10U2hvcnQobXMpIHtcbiAgaWYgKG1zID49IGQpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIGQpICsgJ2QnXG4gIH1cbiAgaWYgKG1zID49IGgpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIGgpICsgJ2gnXG4gIH1cbiAgaWYgKG1zID49IG0pIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIG0pICsgJ20nXG4gIH1cbiAgaWYgKG1zID49IHMpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIHMpICsgJ3MnXG4gIH1cbiAgcmV0dXJuIG1zICsgJ21zJ1xufVxuXG4vKipcbiAqIExvbmcgZm9ybWF0IGZvciBgbXNgLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBtc1xuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gZm10TG9uZyhtcykge1xuICByZXR1cm4gcGx1cmFsKG1zLCBkLCAnZGF5JykgfHxcbiAgICBwbHVyYWwobXMsIGgsICdob3VyJykgfHxcbiAgICBwbHVyYWwobXMsIG0sICdtaW51dGUnKSB8fFxuICAgIHBsdXJhbChtcywgcywgJ3NlY29uZCcpIHx8XG4gICAgbXMgKyAnIG1zJ1xufVxuXG4vKipcbiAqIFBsdXJhbGl6YXRpb24gaGVscGVyLlxuICovXG5cbmZ1bmN0aW9uIHBsdXJhbChtcywgbiwgbmFtZSkge1xuICBpZiAobXMgPCBuKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgaWYgKG1zIDwgbiAqIDEuNSkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKG1zIC8gbikgKyAnICcgKyBuYW1lXG4gIH1cbiAgcmV0dXJuIE1hdGguY2VpbChtcyAvIG4pICsgJyAnICsgbmFtZSArICdzJ1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L21zL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJmdW5jdGlvbiB3ZWJwYWNrRW1wdHlDb250ZXh0KHJlcSkge1xuXHR0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInLlwiKTtcbn1cbndlYnBhY2tFbXB0eUNvbnRleHQua2V5cyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gW107IH07XG53ZWJwYWNrRW1wdHlDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrRW1wdHlDb250ZXh0O1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrRW1wdHlDb250ZXh0O1xud2VicGFja0VtcHR5Q29udGV4dC5pZCA9IDI4O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L25pZ2h0bWFyZS9saWJcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogTW9kdWxlIERlcGVuZGVuY2llc1xuICovXG5cbnZhciBkZWJ1ZyA9IHJlcXVpcmUoJ2RlYnVnJykoJ25pZ2h0bWFyZTphY3Rpb25zJyk7XG52YXIgc2xpY2VkID0gcmVxdWlyZSgnc2xpY2VkJyk7XG52YXIganNlc2MgPSByZXF1aXJlKCdqc2VzYycpO1xudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xudmFyIG9uY2UgPSByZXF1aXJlKCdvbmNlJyk7XG52YXIgZnMgPSByZXF1aXJlKCdmcycpO1xudmFyIGtleXMgPSBPYmplY3Qua2V5cztcblxuLyoqXG4gKiBHZXQgdGhlIHZlcnNpb24gaW5mbyBmb3IgTmlnaHRtYXJlLCBFbGVjdHJvbiBhbmQgQ2hyb21pdW0uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBkb25lXG4gKi9cbmV4cG9ydHMuZW5naW5lVmVyc2lvbnMgPSBmdW5jdGlvbihkb25lKXtcbiAgZGVidWcoJy5lbmdpbmVWZXJzaW9ucygpJyk7XG4gIGRvbmUobnVsbCwgdGhpcy5lbmdpbmVWZXJzaW9ucyk7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgdGl0bGUgb2YgdGhlIHBhZ2UuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZG9uZVxuICovXG5cbmV4cG9ydHMudGl0bGUgPSBmdW5jdGlvbihkb25lKSB7XG4gIGRlYnVnKCcudGl0bGUoKSBnZXR0aW5nIGl0Jyk7XG4gIHRoaXMuZXZhbHVhdGVfbm93KGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBkb2N1bWVudC50aXRsZTtcbiAgfSwgZG9uZSk7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgdXJsIG9mIHRoZSBwYWdlLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGRvbmVcbiAqL1xuXG5leHBvcnRzLnVybCA9IGZ1bmN0aW9uKGRvbmUpIHtcbiAgZGVidWcoJy51cmwoKSBnZXR0aW5nIGl0Jyk7XG4gIHRoaXMuZXZhbHVhdGVfbm93KGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5sb2NhdGlvbi5ocmVmO1xuICB9LCBkb25lKTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBwYXRoIG9mIHRoZSBwYWdlLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGRvbmVcbiAqL1xuXG5leHBvcnRzLnBhdGggPSBmdW5jdGlvbihkb25lKSB7XG4gIGRlYnVnKCcucGF0aCgpIGdldHRpbmcgaXQnKTtcbiAgdGhpcy5ldmFsdWF0ZV9ub3coZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lO1xuICB9LCBkb25lKTtcbn07XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgc2VsZWN0b3IgaXMgdmlzaWJsZSBvbiBhIHBhZ2UuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHNlbGVjdG9yXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBkb25lXG4gKi9cblxuZXhwb3J0cy52aXNpYmxlID0gZnVuY3Rpb24oc2VsZWN0b3IsIGRvbmUpIHtcbiAgZGVidWcoJy52aXNpYmxlKCkgZm9yICcgKyBzZWxlY3Rvcik7XG4gIHRoaXMuZXZhbHVhdGVfbm93KGZ1bmN0aW9uKHNlbGVjdG9yKSB7XG4gICAgdmFyIGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICBpZiAoZWxlbSkgcmV0dXJuIChlbGVtLm9mZnNldFdpZHRoID4gMCAmJiBlbGVtLm9mZnNldEhlaWdodCA+IDApO1xuICAgIGVsc2UgcmV0dXJuIGZhbHNlO1xuICB9LCBkb25lLCBzZWxlY3Rvcik7XG59O1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHNlbGVjdG9yIGV4aXN0cyBvbiBhIHBhZ2UuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHNlbGVjdG9yXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBkb25lXG4gKi9cblxuZXhwb3J0cy5leGlzdHMgPSBmdW5jdGlvbihzZWxlY3RvciwgZG9uZSkge1xuICBkZWJ1ZygnLmV4aXN0cygpIGZvciAnICsgc2VsZWN0b3IpO1xuICB0aGlzLmV2YWx1YXRlX25vdyhmdW5jdGlvbihzZWxlY3Rvcikge1xuICAgIHJldHVybiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikhPT1udWxsKTtcbiAgfSwgZG9uZSwgc2VsZWN0b3IpO1xufTtcblxuLyoqXG4gKiBDbGljayBhbiBlbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzZWxlY3RvclxuICogQHBhcmFtIHtGdW5jdGlvbn0gZG9uZVxuICovXG5cbmV4cG9ydHMuY2xpY2sgPSBmdW5jdGlvbihzZWxlY3RvciwgZG9uZSkge1xuICBkZWJ1ZygnLmNsaWNrKCkgb24gJyArIHNlbGVjdG9yKTtcbiAgdGhpcy5ldmFsdWF0ZV9ub3coZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG4gICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVW5hYmxlIHRvIGZpbmQgZWxlbWVudCBieSBzZWxlY3RvcjogJyArIHNlbGVjdG9yKTtcbiAgICB9XG4gICAgdmFyIGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ01vdXNlRXZlbnQnKTtcbiAgICBldmVudC5pbml0RXZlbnQoJ2NsaWNrJywgdHJ1ZSwgdHJ1ZSk7XG4gICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgfSwgZG9uZSwgc2VsZWN0b3IpO1xufTtcblxuLyoqXG4gKiBNb3VzZWRvd24gb24gYW4gZWxlbWVudC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0b3JcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGRvbmVcbiAqL1xuXG5leHBvcnRzLm1vdXNlZG93biA9IGZ1bmN0aW9uKHNlbGVjdG9yLCBkb25lKSB7XG4gIGRlYnVnKCcubW91c2Vkb3duKCkgb24gJyArIHNlbGVjdG9yKTtcbiAgdGhpcy5ldmFsdWF0ZV9ub3coZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG4gICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVW5hYmxlIHRvIGZpbmQgZWxlbWVudCBieSBzZWxlY3RvcjogJyArIHNlbGVjdG9yKTtcbiAgICB9XG4gICAgdmFyIGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ01vdXNlRXZlbnQnKTtcbiAgICBldmVudC5pbml0RXZlbnQoJ21vdXNlZG93bicsIHRydWUsIHRydWUpO1xuICAgIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gIH0sIGRvbmUsIHNlbGVjdG9yKTtcbn07XG5cbi8qKlxuICogTW91c2V1cCBvbiBhbiBlbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzZWxlY3RvclxuICogQHBhcmFtIHtGdW5jdGlvbn0gZG9uZVxuICovXG5cbmV4cG9ydHMubW91c2V1cCA9IGZ1bmN0aW9uKHNlbGVjdG9yLCBkb25lKSB7XG4gIGRlYnVnKCcubW91c2V1cCgpIG9uICcgKyBzZWxlY3Rvcik7XG4gIHRoaXMuZXZhbHVhdGVfbm93KGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuYWJsZSB0byBmaW5kIGVsZW1lbnQgYnkgc2VsZWN0b3I6ICcgKyBzZWxlY3Rvcik7XG4gICAgfVxuICAgIHZhciBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdNb3VzZUV2ZW50Jyk7XG4gICAgZXZlbnQuaW5pdEV2ZW50KCdtb3VzZXVwJywgdHJ1ZSwgdHJ1ZSk7XG4gICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgfSwgZG9uZSwgc2VsZWN0b3IpO1xufTtcblxuLyoqXG4gKiBIb3ZlciBvdmVyIGFuIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHNlbGVjdG9yXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBkb25lXG4gKi9cblxuZXhwb3J0cy5tb3VzZW92ZXIgPSBmdW5jdGlvbihzZWxlY3RvciwgZG9uZSkge1xuICBkZWJ1ZygnLm1vdXNlb3ZlcigpIG9uICcgKyBzZWxlY3Rvcik7XG4gIHRoaXMuZXZhbHVhdGVfbm93KGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuYWJsZSB0byBmaW5kIGVsZW1lbnQgYnkgc2VsZWN0b3I6ICcgKyBzZWxlY3Rvcik7XG4gICAgfVxuICAgIHZhciBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdNb3VzZUV2ZW50Jyk7XG4gICAgZXZlbnQuaW5pdE1vdXNlRXZlbnQoJ21vdXNlb3ZlcicsIHRydWUsIHRydWUpO1xuICAgIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gIH0sIGRvbmUsIHNlbGVjdG9yKTtcbn07XG5cbi8qKlxuICogSGVscGVyIGZ1bmN0aW9ucyBmb3IgdHlwZSgpIGFuZCBpbnNlcnQoKSB0byBmb2N1cy9ibHVyXG4gKiBzbyB0aGF0IHdlIHRyaWdnZXIgRE9NIGV2ZW50cy5cbiAqL1xuXG52YXIgZm9jdXNTZWxlY3RvciA9IGZ1bmN0aW9uKGRvbmUsIHNlbGVjdG9yKSB7XG4gIHJldHVybiB0aGlzLmV2YWx1YXRlX25vdyhmdW5jdGlvbihzZWxlY3Rvcikge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpLmZvY3VzKCk7XG4gIH0sIGRvbmUuYmluZCh0aGlzKSwgc2VsZWN0b3IpO1xufTtcblxudmFyIGJsdXJTZWxlY3RvciA9IGZ1bmN0aW9uKGRvbmUsIHNlbGVjdG9yKSB7XG4gIHJldHVybiB0aGlzLmV2YWx1YXRlX25vdyhmdW5jdGlvbihzZWxlY3Rvcikge1xuICAgIC8vaXQgaXMgcG9zc2libGUgdGhlIGVsZW1lbnQgaGFzIGJlZW4gcmVtb3ZlZCBmcm9tIHRoZSBET01cbiAgICAvL2JldHdlZW4gdGhlIGFjdGlvbiBhbmQgdGhlIGNhbGwgdG8gYmx1ciB0aGUgZWxlbWVudFxuICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgaWYoZWxlbWVudCkge1xuICAgICAgZWxlbWVudC5ibHVyKClcbiAgICB9XG4gIH0sIGRvbmUuYmluZCh0aGlzKSwgc2VsZWN0b3IpO1xufTtcblxuLyoqXG4gKiBUeXBlIGludG8gYW4gZWxlbWVudC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0b3JcbiAqIEBwYXJhbSB7U3RyaW5nfSB0ZXh0XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBkb25lXG4gKi9cblxuZXhwb3J0cy50eXBlID0gZnVuY3Rpb24oKSB7XG4gIHZhciBzZWxlY3RvciA9IGFyZ3VtZW50c1swXSwgdGV4dCwgZG9uZTtcbiAgaWYoYXJndW1lbnRzLmxlbmd0aCA9PSAyKSB7XG4gICAgZG9uZSA9IGFyZ3VtZW50c1sxXTtcbiAgfSBlbHNlIHtcbiAgICB0ZXh0ID0gYXJndW1lbnRzWzFdO1xuICAgIGRvbmUgPSBhcmd1bWVudHNbMl07XG4gIH1cblxuICBkZWJ1ZygnLnR5cGUoKSAlcyBpbnRvICVzJywgdGV4dCwgc2VsZWN0b3IpO1xuICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgZm9jdXNTZWxlY3Rvci5iaW5kKHRoaXMpKGZ1bmN0aW9uKGVycikge1xuICAgIGlmKGVycikge1xuICAgICAgZGVidWcoJ1VuYWJsZSB0byAudHlwZSgpIGludG8gbm9uLWV4aXN0ZW50IHNlbGVjdG9yICVzJywgc2VsZWN0b3IpO1xuICAgICAgcmV0dXJuIGRvbmUoZXJyKTtcbiAgICB9XG5cbiAgICB2YXIgYmx1ckRvbmUgPSBibHVyU2VsZWN0b3IuYmluZCh0aGlzLCBkb25lLCBzZWxlY3Rvcik7XG4gICAgaWYgKCh0ZXh0IHx8ICcnKSA9PSAnJykge1xuICAgICAgdGhpcy5ldmFsdWF0ZV9ub3coZnVuY3Rpb24oc2VsZWN0b3IpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikudmFsdWUgPSAnJztcbiAgICAgIH0sIGJsdXJEb25lLCBzZWxlY3Rvcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlbGYuY2hpbGQuY2FsbCgndHlwZScsIHRleHQsIGJsdXJEb25lKTtcbiAgICB9XG4gIH0sIHNlbGVjdG9yKTtcbn07XG5cbi8qKlxuICogSW5zZXJ0IHRleHRcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0b3JcbiAqIEBwYXJhbSB7U3RyaW5nfSB0ZXh0XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBkb25lXG4gKi9cblxuZXhwb3J0cy5pbnNlcnQgPSBmdW5jdGlvbihzZWxlY3RvciwgdGV4dCwgZG9uZSkge1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMikge1xuICAgIGRvbmUgPSB0ZXh0XG4gICAgdGV4dCA9IG51bGxcbiAgfVxuXG4gIGRlYnVnKCcuaW5zZXJ0KCkgJXMgaW50byAlcycsIHRleHQsIHNlbGVjdG9yKTtcbiAgdmFyIGNoaWxkID0gdGhpcy5jaGlsZDtcblxuICBmb2N1c1NlbGVjdG9yLmJpbmQodGhpcykoZnVuY3Rpb24oZXJyKSB7XG4gICAgaWYoZXJyKSB7XG4gICAgICBkZWJ1ZygnVW5hYmxlIHRvIC5pbnNlcnQoKSBpbnRvIG5vbi1leGlzdGVudCBzZWxlY3RvciAlcycsIHNlbGVjdG9yKTtcbiAgICAgIHJldHVybiBkb25lKGVycik7XG4gICAgfVxuICAgIFxuICAgIHZhciBibHVyRG9uZSA9IGJsdXJTZWxlY3Rvci5iaW5kKHRoaXMsIGRvbmUsIHNlbGVjdG9yKTtcbiAgICBpZiAoKHRleHQgfHwgJycpID09ICcnKSB7XG4gICAgICB0aGlzLmV2YWx1YXRlX25vdyhmdW5jdGlvbihzZWxlY3Rvcikge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKS52YWx1ZSA9ICcnO1xuICAgICAgfSwgYmx1ckRvbmUsIHNlbGVjdG9yKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2hpbGQuY2FsbCgnaW5zZXJ0JywgdGV4dCwgYmx1ckRvbmUpO1xuICAgIH1cbiAgfSwgc2VsZWN0b3IpO1xufVxuXG4vKipcbiAqIENoZWNrIGEgY2hlY2tib3gsIGZpcmUgY2hhbmdlIGV2ZW50XG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHNlbGVjdG9yXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBkb25lXG4gKi9cblxuZXhwb3J0cy5jaGVjayA9IGZ1bmN0aW9uKHNlbGVjdG9yLCBkb25lKSB7XG4gIGRlYnVnKCcuY2hlY2soKSAnICsgc2VsZWN0b3IpO1xuICB0aGlzLmV2YWx1YXRlX25vdyhmdW5jdGlvbihzZWxlY3Rvcikge1xuICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgdmFyIGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0hUTUxFdmVudHMnKTtcbiAgICBlbGVtZW50LmNoZWNrZWQgPSB0cnVlO1xuICAgIGV2ZW50LmluaXRFdmVudCgnY2hhbmdlJywgdHJ1ZSwgdHJ1ZSk7XG4gICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgfSwgZG9uZSwgc2VsZWN0b3IpO1xufTtcblxuLypcbiAqIFVuY2hlY2sgYSBjaGVja2JveCwgZmlyZSBjaGFuZ2UgZXZlbnRcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0b3JcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGRvbmVcbiAqL1xuXG5leHBvcnRzLnVuY2hlY2sgPSBmdW5jdGlvbihzZWxlY3RvciwgZG9uZSl7XG4gIGRlYnVnKCcudW5jaGVjaygpICcgKyBzZWxlY3Rvcik7XG4gIHRoaXMuZXZhbHVhdGVfbm93KGZ1bmN0aW9uKHNlbGVjdG9yKSB7XG4gICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgICAgdmFyIGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0hUTUxFdmVudHMnKTtcbiAgICAgIGVsZW1lbnQuY2hlY2tlZCA9IG51bGw7XG4gICAgICBldmVudC5pbml0RXZlbnQoJ2NoYW5nZScsIHRydWUsIHRydWUpO1xuICAgICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICB9LCBkb25lLCBzZWxlY3Rvcik7XG59O1xuXG4vKipcbiAqIENob29zZSBhbiBvcHRpb24gZnJvbSBhIHNlbGVjdCBkcm9wZG93blxuICpcbiAqXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHNlbGVjdG9yXG4gKiBAcGFyYW0ge1N0cmluZ30gb3B0aW9uIHZhbHVlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBkb25lXG4gKi9cblxuZXhwb3J0cy5zZWxlY3QgPSBmdW5jdGlvbihzZWxlY3Rvciwgb3B0aW9uLCBkb25lKSB7XG4gIGRlYnVnKCcuc2VsZWN0KCkgJyArIHNlbGVjdG9yKTtcbiAgdGhpcy5ldmFsdWF0ZV9ub3coZnVuY3Rpb24oc2VsZWN0b3IsIG9wdGlvbikge1xuICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgdmFyIGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0hUTUxFdmVudHMnKTtcbiAgICBlbGVtZW50LnZhbHVlID0gb3B0aW9uO1xuICAgIGV2ZW50LmluaXRFdmVudCgnY2hhbmdlJywgdHJ1ZSwgdHJ1ZSk7XG4gICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgfSwgZG9uZSwgc2VsZWN0b3IsIG9wdGlvbik7XG59O1xuXG4vKipcbiAqIEdvIGJhY2sgdG8gcHJldmlvdXMgdXJsLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGRvbmVcbiAqL1xuXG5leHBvcnRzLmJhY2sgPSBmdW5jdGlvbihkb25lKSB7XG4gIGRlYnVnKCcuYmFjaygpJyk7XG4gIHRoaXMuZXZhbHVhdGVfbm93KGZ1bmN0aW9uKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcbiAgfSwgZG9uZSk7XG59O1xuXG4vKipcbiAqIEdvIGZvcndhcmQgdG8gcHJldmlvdXMgdXJsLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGRvbmVcbiAqL1xuXG5leHBvcnRzLmZvcndhcmQgPSBmdW5jdGlvbihkb25lKSB7XG4gIGRlYnVnKCcuZm9yd2FyZCgpJyk7XG4gIHRoaXMuZXZhbHVhdGVfbm93KGZ1bmN0aW9uKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmZvcndhcmQoKTtcbiAgfSwgZG9uZSk7XG59O1xuXG4vKipcbiAqIFJlZnJlc2ggdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBkb25lXG4gKi9cblxuZXhwb3J0cy5yZWZyZXNoID0gZnVuY3Rpb24oZG9uZSkge1xuICBkZWJ1ZygnLnJlZnJlc2goKScpO1xuICB0aGlzLmV2YWx1YXRlX25vdyhmdW5jdGlvbigpIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gIH0sIGRvbmUpO1xufTtcblxuLyoqXG4gKiBXYWl0XG4gKlxuICogQHBhcmFtIHsuLi59IGFyZ3NcbiAqL1xuXG5leHBvcnRzLndhaXQgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBhcmdzID0gc2xpY2VkKGFyZ3VtZW50cyk7XG4gIHZhciBkb25lID0gYXJnc1thcmdzLmxlbmd0aC0xXTtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgMikge1xuICAgIGRlYnVnKCdOb3QgZW5vdWdoIGFyZ3VtZW50cyBmb3IgLndhaXQoKScpO1xuICAgIHJldHVybiBkb25lKCk7XG4gIH1cblxuICB2YXIgYXJnID0gYXJnc1swXTtcbiAgaWYgKHR5cGVvZiBhcmcgPT09ICdudW1iZXInKSB7XG4gICAgZGVidWcoJy53YWl0KCkgZm9yICcgKyBhcmcgKyAnbXMnKTtcbiAgICBpZihhcmcgPCB0aGlzLm9wdGlvbnMud2FpdFRpbWVvdXQpe1xuICAgICAgd2FpdG1zKGFyZywgZG9uZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdhaXRtcyh0aGlzLm9wdGlvbnMud2FpdFRpbWVvdXQsIGZ1bmN0aW9uKCl7XG4gICAgICAgIGRvbmUobmV3IEVycm9yKCcud2FpdCgpIHRpbWVkIG91dCBhZnRlciAnK3RoaXMub3B0aW9ucy53YWl0VGltZW91dCsnbXNlYycpKTtcbiAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgfVxuICB9XG4gIGVsc2UgaWYgKHR5cGVvZiBhcmcgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFyIHRpbWVvdXQgPSBudWxsO1xuICAgIGlmICh0eXBlb2YgYXJnc1sxXSA9PT0gJ251bWJlcicpIHtcbiAgICAgIHRpbWVvdXQgPSBhcmdzWzFdO1xuICAgIH1cbiAgICBkZWJ1ZygnLndhaXQoKSBmb3IgJythcmcrJyBlbGVtZW50JysodGltZW91dCA/ICcgb3IgJyt0aW1lb3V0Kydtc2VjJyA6ICcnKSk7XG4gICAgd2FpdGVsZW0uYXBwbHkoeyB0aW1lb3V0OiB0aW1lb3V0IH0sIFt0aGlzLCBhcmcsIGRvbmVdKTtcbiAgfVxuICBlbHNlIGlmICh0eXBlb2YgYXJnID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZGVidWcoJy53YWl0KCkgZm9yIGZuJyk7XG4gICAgYXJncy51bnNoaWZ0KHRoaXMpO1xuICAgIHdhaXRmbi5hcHBseSh0aGlzLCBhcmdzKTtcbiAgfVxuICBlbHNlIHtcbiAgICBkb25lKCk7XG4gIH1cbn07XG5cbi8qKlxuICogV2FpdCBmb3IgYSBzcGVjaWZpZmVkIGFtb3VudCBvZiB0aW1lLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBtc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gZG9uZVxuICovXG5cbmZ1bmN0aW9uIHdhaXRtcyAobXMsIGRvbmUpIHtcbiAgc2V0VGltZW91dChkb25lLCBtcyk7XG59XG5cbi8qKlxuICogV2FpdCBmb3IgYSBzcGVjaWZpZWQgc2VsZWN0b3IgdG8gZXhpc3QuXG4gKlxuICogQHBhcmFtIHtOaWdodG1hcmV9IHNlbGZcbiAqIEBwYXJhbSB7U3RyaW5nfSBzZWxlY3RvclxuICogQHBhcmFtIHtGdW5jdGlvbn0gZG9uZVxuICovXG5cbmZ1bmN0aW9uIHdhaXRlbGVtIChzZWxmLCBzZWxlY3RvciwgZG9uZSkge1xuICB2YXIgZWxlbWVudFByZXNlbnQ7XG4gIGV2YWwoXCJlbGVtZW50UHJlc2VudCA9IGZ1bmN0aW9uKCkge1wiK1xuICAgICAgXCIgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignXCIranNlc2Moc2VsZWN0b3IpK1wiJyk7XCIrXG4gICAgICBcIiAgcmV0dXJuIChlbGVtZW50ID8gdHJ1ZSA6IGZhbHNlKTtcIiArXG4gICAgICBcIn07XCIpO1xuICB3YWl0Zm4uYXBwbHkodGhpcywgW3NlbGYsIGVsZW1lbnRQcmVzZW50LCBkb25lXSk7XG59XG5cbi8qKlxuICogV2FpdCB1bnRpbCBldmFsdWF0ZWQgZnVuY3Rpb24gcmV0dXJucyB0cnVlLlxuICpcbiAqIEBwYXJhbSB7TmlnaHRtYXJlfSBzZWxmXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHBhcmFtIHsuLi59IGFyZ3NcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGRvbmVcbiAqL1xuXG5mdW5jdGlvbiB3YWl0Zm4oKSB7XG4gIHZhciBzb2Z0VGltZW91dCA9IHRoaXMudGltZW91dCB8fCBudWxsO1xuICB2YXIgZXhlY3V0aW9uVGltZXI7XG4gIHZhciBzb2Z0VGltZW91dFRpbWVyO1xuICB2YXIgc2VsZiA9IGFyZ3VtZW50c1swXTtcbiAgXG4gIHZhciBhcmdzID0gc2xpY2VkKGFyZ3VtZW50cyk7XG4gIHZhciBkb25lID0gYXJnc1thcmdzLmxlbmd0aC0xXTtcbiAgXG4gIHZhciB0aW1lb3V0VGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgY2xlYXJUaW1lb3V0KGV4ZWN1dGlvblRpbWVyKTtcbiAgICBjbGVhclRpbWVvdXQoc29mdFRpbWVvdXRUaW1lcik7XG4gICAgZG9uZShuZXcgRXJyb3IoYC53YWl0KCkgdGltZWQgb3V0IGFmdGVyICR7c2VsZi5vcHRpb25zLndhaXRUaW1lb3V0fW1zZWNgKSk7XG4gIH0sIHNlbGYub3B0aW9ucy53YWl0VGltZW91dCk7XG4gIHJldHVybiB0aWNrLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcblxuICBmdW5jdGlvbiB0aWNrIChzZWxmLCBmbi8qKiwgYXJnMSwgYXJnMi4uLiwgZG9uZSoqLykge1xuICAgIGlmKHNvZnRUaW1lb3V0KXtcbiAgICAgIHNvZnRUaW1lb3V0VGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgIGNsZWFyVGltZW91dChleGVjdXRpb25UaW1lcik7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0VGltZXIpO1xuICAgICAgICBkb25lKCk7XG4gICAgICB9LCBzb2Z0VGltZW91dClcbiAgICB9XG5cbiAgICB2YXIgd2FpdERvbmUgPSBmdW5jdGlvbiAoZXJyLCByZXN1bHQpIHtcbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRUaW1lcik7XG4gICAgICAgIGNsZWFyVGltZW91dChzb2Z0VGltZW91dFRpbWVyKTtcbiAgICAgICAgcmV0dXJuIGRvbmUoKTtcbiAgICAgIH0gZWxzZSBpZihlcnIpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRUaW1lcik7XG4gICAgICAgIGNsZWFyVGltZW91dChzb2Z0VGltZW91dFRpbWVyKTtcbiAgICAgICAgcmV0dXJuIGRvbmUoZXJyKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBleGVjdXRpb25UaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHRpY2suYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgICAgIH0sIHNlbGYub3B0aW9ucy5wb2xsSW50ZXJ2YWwpO1xuICAgICAgfVxuICAgIH07XG4gICAgdmFyIG5ld0FyZ3MgPSBbZm4sIHdhaXREb25lXS5jb25jYXQoYXJncy5zbGljZSgyLC0xKSk7XG4gICAgc2VsZi5ldmFsdWF0ZV9ub3cuYXBwbHkoc2VsZiwgbmV3QXJncyk7XG4gIH1cbn1cblxuLyoqXG4gKiBFeGVjdXRlIGEgZnVuY3Rpb24gb24gdGhlIHBhZ2UuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEBwYXJhbSB7Li4ufSBhcmdzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBkb25lXG4gKi9cblxuZXhwb3J0cy5ldmFsdWF0ZSA9IGZ1bmN0aW9uIChmbi8qKiwgYXJnMSwgYXJnMi4uLiwgZG9uZSoqLykge1xuICB2YXIgYXJncyA9IHNsaWNlZChhcmd1bWVudHMpO1xuICB2YXIgZG9uZSA9IGFyZ3NbYXJncy5sZW5ndGgtMV07XG4gIHZhciBzZWxmID0gdGhpcztcbiAgdmFyIG5ld0RvbmUgPSBmdW5jdGlvbigpe1xuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0VGltZXIpO1xuICAgIGRvbmUuYXBwbHkoc2VsZiwgYXJndW1lbnRzKTtcbiAgfTtcbiAgdmFyIG5ld0FyZ3MgPSBbZm4sIG5ld0RvbmVdLmNvbmNhdChhcmdzLnNsaWNlKDEsLTEpKTtcbiAgaWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBkb25lKG5ldyBFcnJvcignLmV2YWx1YXRlKCkgZm4gc2hvdWxkIGJlIGEgZnVuY3Rpb24nKSk7XG4gIH1cbiAgZGVidWcoJy5ldmFsdWF0ZSgpIGZuIG9uIHRoZSBwYWdlJyk7XG4gIHZhciB0aW1lb3V0VGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgZG9uZShuZXcgRXJyb3IoYEV2YWx1YXRpb24gdGltZWQgb3V0IGFmdGVyICR7c2VsZi5vcHRpb25zLmV4ZWN1dGlvblRpbWVvdXR9bXNlYy4gIEFyZSB5b3UgY2FsbGluZyBkb25lKCkgb3IgcmVzb2x2aW5nIHlvdXIgcHJvbWlzZXM/YCkpO1xuICB9LCBzZWxmLm9wdGlvbnMuZXhlY3V0aW9uVGltZW91dCk7XG4gIHRoaXMuZXZhbHVhdGVfbm93LmFwcGx5KHRoaXMsIG5ld0FyZ3MpO1xufTtcblxuLyoqXG4gKiBJbmplY3QgYSBKYXZhU2NyaXB0IG9yIENTUyBmaWxlIG9udG8gdGhlIHBhZ2VcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICogQHBhcmFtIHtTdHJpbmd9IGZpbGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGRvbmVcbiAqL1xuXG5leHBvcnRzLmluamVjdCA9IGZ1bmN0aW9uICh0eXBlLCBmaWxlLCBkb25lKSB7XG4gIGRlYnVnKCcuaW5qZWN0KCktaW5nIGEgZmlsZScpO1xuICBpZiAodHlwZSA9PT0gJ2pzJykge1xuICAgIHZhciBqcyA9IGZzLnJlYWRGaWxlU3luYyhmaWxlLCB7IGVuY29kaW5nOiAndXRmLTgnIH0pO1xuICAgIHRoaXMuX2luamVjdChqcywgZG9uZSk7XG4gIH1cbiAgZWxzZSBpZiAodHlwZSA9PT0gJ2NzcycpIHtcbiAgICB2YXIgY3NzID0gZnMucmVhZEZpbGVTeW5jKGZpbGUsIHsgZW5jb2Rpbmc6ICd1dGYtOCcgfSk7XG4gICAgdGhpcy5jaGlsZC5jYWxsKCdjc3MnLCBjc3MsIGRvbmUpO1xuICB9XG4gIGVsc2Uge1xuICAgIGRlYnVnKCd1bnN1cHBvcnRlZCBmaWxlIHR5cGUgaW4gLmluamVjdCgpJyk7XG4gICAgZG9uZSgpO1xuICB9XG59O1xuXG4vKipcbiAqIFNldCB0aGUgdmlld3BvcnQuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHdpZHRoXG4gKiBAcGFyYW0ge051bWJlcn0gaGVpZ2h0XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBkb25lXG4gKi9cblxuZXhwb3J0cy52aWV3cG9ydCA9IGZ1bmN0aW9uICh3aWR0aCwgaGVpZ2h0LCBkb25lKSB7XG4gIGRlYnVnKCcudmlld3BvcnQoKScpO1xuICB0aGlzLmNoaWxkLmNhbGwoJ3NpemUnLCB3aWR0aCwgaGVpZ2h0LCBkb25lKTtcbn07XG5cbi8qKlxuICogU2V0IHRoZSB1c2VyYWdlbnQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHVzZXJhZ2VudFxuICogQHBhcmFtIHtGdW5jdGlvbn0gZG9uZVxuICovXG5cbmV4cG9ydHMudXNlcmFnZW50ID0gZnVuY3Rpb24odXNlcmFnZW50LCBkb25lKSB7XG4gIGRlYnVnKCcudXNlcmFnZW50KCkgdG8gJyArIHVzZXJhZ2VudCk7XG4gIHRoaXMuY2hpbGQuY2FsbCgndXNlcmFnZW50JywgdXNlcmFnZW50LCBkb25lKTtcbn07XG5cbi8qKlxuICogU2V0IHRoZSBzY3JvbGwgcG9zaXRpb24uXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHhcbiAqIEBwYXJhbSB7TnVtYmVyfSB5XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBkb25lXG4gKi9cblxuZXhwb3J0cy5zY3JvbGxUbyA9IGZ1bmN0aW9uICh5LCB4LCBkb25lKSB7XG4gIGRlYnVnKCcuc2Nyb2xsVG8oKScpO1xuICB0aGlzLmV2YWx1YXRlX25vdyhmdW5jdGlvbiAoeSwgeCkge1xuICAgIHdpbmRvdy5zY3JvbGxUbyh4LCB5KTtcbiAgfSwgZG9uZSwgeSwgeCk7XG59O1xuXG4vKipcbiAqIFRha2UgYSBzY3JlZW5zaG90LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXRoXG4gKiBAcGFyYW0ge09iamVjdH0gY2xpcFxuICogQHBhcmFtIHtGdW5jdGlvbn0gZG9uZVxuICovXG5cbmV4cG9ydHMuc2NyZWVuc2hvdCA9IGZ1bmN0aW9uIChwYXRoLCBjbGlwLCBkb25lKSB7XG4gIGRlYnVnKCcuc2NyZWVuc2hvdCgpJyk7XG4gIGlmICh0eXBlb2YgcGF0aCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGRvbmUgPSBwYXRoO1xuICAgIGNsaXAgPSB1bmRlZmluZWQ7XG4gICAgcGF0aCA9IHVuZGVmaW5lZDtcbiAgfSBlbHNlIGlmICh0eXBlb2YgY2xpcCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGRvbmUgPSBjbGlwO1xuICAgIGNsaXAgPSAodHlwZW9mIHBhdGggPT09ICdzdHJpbmcnKSA/IHVuZGVmaW5lZCA6IHBhdGg7XG4gICAgcGF0aCA9ICh0eXBlb2YgcGF0aCA9PT0gJ3N0cmluZycpID8gcGF0aCA6IHVuZGVmaW5lZDtcbiAgfVxuICB0aGlzLmNoaWxkLmNhbGwoJ3NjcmVlbnNob3QnLCBwYXRoLCBjbGlwLCBmdW5jdGlvbiAoZXJyb3IsIGltZykge1xuICAgIHZhciBidWYgPSBuZXcgQnVmZmVyKGltZy5kYXRhKTtcbiAgICBkZWJ1ZygnLnNjcmVlbnNob3QoKSBjYXB0dXJlZCB3aXRoIGxlbmd0aCAlcycsIGJ1Zi5sZW5ndGgpO1xuICAgIHBhdGggPyBmcy53cml0ZUZpbGUocGF0aCwgYnVmLCBkb25lKSA6IGRvbmUobnVsbCwgYnVmKTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIFNhdmUgdGhlIGN1cnJlbnQgZmlsZSBhcyBodG1sIHRvIGRpc2suXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHBhdGggdGhlIGZ1bGwgcGF0aCB0byB0aGUgZmlsZSB0byBzYXZlIHRvXG4gKiBAcGFyYW0ge1N0cmluZ30gc2F2ZVR5cGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGRvbmVcbiAqL1xuXG5leHBvcnRzLmh0bWwgPSBmdW5jdGlvbiAocGF0aCwgc2F2ZVR5cGUsIGRvbmUpIHtcbiAgZGVidWcoJy5odG1sKCknKTtcbiAgaWYgKHR5cGVvZiBwYXRoID09PSAnZnVuY3Rpb24nICYmICFzYXZlVHlwZSAmJiAhZG9uZSkge1xuICAgIGRvbmUgPSBwYXRoO1xuICAgIHNhdmVUeXBlID0gdW5kZWZpbmVkO1xuICAgIHBhdGggPSB1bmRlZmluZWQ7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHBhdGggPT09ICdvYmplY3QnICYmIHR5cGVvZiBzYXZlVHlwZSA9PT0gJ2Z1bmN0aW9uJyAmJiAhZG9uZSkge1xuICAgIGRvbmUgPSBzYXZlVHlwZTtcbiAgICBzYXZlVHlwZSA9IHBhdGg7XG4gICAgcGF0aCA9IHVuZGVmaW5lZDtcbiAgfSBlbHNlIGlmICh0eXBlb2Ygc2F2ZVR5cGUgPT09ICdmdW5jdGlvbicgJiYgIWRvbmUpIHtcbiAgICBkb25lID0gc2F2ZVR5cGU7XG4gICAgc2F2ZVR5cGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgdGhpcy5jaGlsZC5jYWxsKCdodG1sJywgcGF0aCwgc2F2ZVR5cGUsIGZ1bmN0aW9uIChlcnJvcikge1xuICAgIGlmIChlcnJvcikgZGVidWcoZXJyb3IpO1xuICAgIGRvbmUoZXJyb3IpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBUYWtlIGEgcGRmLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXRoXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBkb25lXG4gKi9cblxuZXhwb3J0cy5wZGYgPSBmdW5jdGlvbiAocGF0aCwgb3B0aW9ucywgZG9uZSkge1xuICBkZWJ1ZygnLnBkZigpJyk7XG4gIGlmICh0eXBlb2YgcGF0aCA9PT0gJ2Z1bmN0aW9uJyAmJiAhb3B0aW9ucyAmJiAhZG9uZSkge1xuICAgIGRvbmUgPSBwYXRoO1xuICAgIG9wdGlvbnMgPSB1bmRlZmluZWQ7XG4gICAgcGF0aCA9IHVuZGVmaW5lZDtcbiAgfSBlbHNlIGlmICh0eXBlb2YgcGF0aCA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG9wdGlvbnMgPT09ICdmdW5jdGlvbicgJiYgIWRvbmUpe1xuICAgIGRvbmUgPSBvcHRpb25zO1xuICAgIG9wdGlvbnMgPSBwYXRoO1xuICAgIHBhdGggPSB1bmRlZmluZWQ7XG4gIH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdmdW5jdGlvbicgJiYgIWRvbmUpIHtcbiAgICBkb25lID0gb3B0aW9ucztcbiAgICBvcHRpb25zID0gdW5kZWZpbmVkO1xuICB9XG4gIHRoaXMuY2hpbGQuY2FsbCgncGRmJywgcGF0aCwgb3B0aW9ucywgZnVuY3Rpb24gKGVycm9yLCBwZGYpIHtcbiAgICBpZiAoZXJyb3IpIGRlYnVnKGVycm9yKTtcbiAgICB2YXIgYnVmID0gbmV3IEJ1ZmZlcihwZGYuZGF0YSk7XG4gICAgZGVidWcoJy5wZGYoKSBjYXB0dXJlZCB3aXRoIGxlbmd0aCAlcycsIGJ1Zi5sZW5ndGgpO1xuICAgIHBhdGggPyBmcy53cml0ZUZpbGUocGF0aCwgYnVmLCBkb25lKSA6IGRvbmUobnVsbCwgYnVmKTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIEdldCBhbmQgc2V0IGNvb2tpZXNcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgKG9wdGlvbmFsKVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZG9uZVxuICovXG5cbmV4cG9ydHMuY29va2llcyA9IHt9O1xuXG4vKipcbiAqIEdldCBhIGNvb2tpZVxuICovXG5cbmV4cG9ydHMuY29va2llcy5nZXQgPSBmdW5jdGlvbiAobmFtZSwgZG9uZSkge1xuICBkZWJ1ZygnY29va2llcy5nZXQoKScpXG4gIHZhciBxdWVyeSA9IHt9XG5cbiAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgY2FzZSAyOlxuICAgICAgcXVlcnkgPSB0eXBlb2YgbmFtZSA9PT0gJ3N0cmluZydcbiAgICAgICAgPyB7IG5hbWU6IG5hbWUgfVxuICAgICAgICA6IG5hbWVcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMTpcbiAgICAgIGRvbmUgPSBuYW1lXG4gICAgICBicmVhaztcbiAgfVxuXG4gIHRoaXMuY2hpbGQuY2FsbCgnY29va2llLmdldCcsIHF1ZXJ5LCBkb25lKTtcbn07XG5cbi8qKlxuICogU2V0IGEgY29va2llXG4gKi9cblxuZXhwb3J0cy5jb29raWVzLnNldCA9IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSwgZG9uZSkge1xuICBkZWJ1ZygnY29va2llcy5zZXQoKScpXG4gIHZhciBjb29raWVzID0gW11cblxuICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICBjYXNlIDM6XG4gICAgICBjb29raWVzLnB1c2goe1xuICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgIH0pXG4gICAgICBicmVhaztcbiAgICBjYXNlIDI6XG4gICAgICBjb29raWVzID0gW10uY29uY2F0KG5hbWUpXG4gICAgICBkb25lID0gdmFsdWVcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMTpcbiAgICAgIGRvbmUgPSBuYW1lXG4gICAgICBicmVhaztcbiAgfVxuXG4gIHRoaXMuY2hpbGQuY2FsbCgnY29va2llLnNldCcsIGNvb2tpZXMsIGRvbmUpO1xufTtcblxuLyoqXG4gKiBDbGVhciBhIGNvb2tpZVxuICovXG5cbmV4cG9ydHMuY29va2llcy5jbGVhciA9IGZ1bmN0aW9uIChuYW1lLCBkb25lKSB7XG4gIGRlYnVnKCdjb29raWVzLmNsZWFyKCknKVxuICB2YXIgY29va2llcyA9IFtdXG5cbiAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgY2FzZSAyOlxuICAgICAgY29va2llcyA9IFtdLmNvbmNhdChuYW1lKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMTpcbiAgICAgIGRvbmUgPSBuYW1lO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICB0aGlzLmNoaWxkLmNhbGwoJ2Nvb2tpZS5jbGVhcicsIGNvb2tpZXMsIGRvbmUpO1xufTtcblxuLyoqXG4gKiBDbGVhciBhbGwgY29va2llc1xuICovXG5cbmV4cG9ydHMuY29va2llcy5jbGVhckFsbCA9IGZ1bmN0aW9uKGRvbmUpe1xuICB0aGlzLmNoaWxkLmNhbGwoJ2Nvb2tpZS5jbGVhckFsbCcsIGRvbmUpO1xufTtcblxuLyoqXG4gKiBBdXRoZW50aWNhdGlvblxuICovXG5cbiBleHBvcnRzLmF1dGhlbnRpY2F0aW9uID0gZnVuY3Rpb24gKGxvZ2luLCBwYXNzd29yZCwgZG9uZSkge1xuICAgZGVidWcoJy5hdXRoZW50aWNhdGlvbigpJyk7XG4gICB0aGlzLmNoaWxkLmNhbGwoJ2F1dGhlbnRpY2F0aW9uJywgbG9naW4sIHBhc3N3b3JkLCBkb25lKTtcbiB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L25pZ2h0bWFyZS9saWIvYWN0aW9ucy5qc1xuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXNcbiAqL1xuXG52YXIgRW1pdHRlciA9IHJlcXVpcmUoJ2V2ZW50cycpLkV2ZW50RW1pdHRlcjtcbnZhciBzbGljZWQgPSByZXF1aXJlKCdzbGljZWQnKTtcbnZhciBkZWJ1ZyA9IHJlcXVpcmUoJ2RlYnVnJykoJ25pZ2h0bWFyZTppcGMnKTtcblxuLy8gSWYgdGhpcyBwcm9jZXNzIGhhcyBhIHBhcmVudCwgcmVkaXJlY3QgZGVidWcgbG9ncyB0byBpdFxuaWYgKHByb2Nlc3Muc2VuZCkge1xuICBkZWJ1ZyA9IGZ1bmN0aW9uKCkge1xuICAgIHByb2Nlc3Muc2VuZChbJ25pZ2h0bWFyZTppcGM6ZGVidWcnXS5jb25jYXQoc2xpY2VkKGFyZ3VtZW50cykpKTtcbiAgfTtcbn1cblxuLyoqXG4gKiBFeHBvcnQgYElQQ2BcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IElQQztcblxuLyoqXG4gKiBJbml0aWFsaXplIGBJUENgXG4gKi9cblxudmFyIGluc3RhbmNlID0gU3ltYm9sKCk7XG5mdW5jdGlvbiBJUEMocHJvY2Vzcykge1xuICBpZiAocHJvY2Vzc1tpbnN0YW5jZV0pIHtcbiAgICByZXR1cm4gcHJvY2Vzc1tpbnN0YW5jZV07XG4gIH1cblxuICB2YXIgZW1pdHRlciA9IHByb2Nlc3NbaW5zdGFuY2VdID0gbmV3IEVtaXR0ZXIoKTtcbiAgdmFyIGVtaXQgPSBlbWl0dGVyLmVtaXQ7XG4gIHZhciBjYWxsSWQgPSAwO1xuICB2YXIgcmVzcG9uZGVycyA9IHt9O1xuXG4gIC8vIG5vIHBhcmVudFxuICBpZiAoIXByb2Nlc3Muc2VuZCkge1xuICAgIHJldHVybiBlbWl0dGVyO1xuICB9XG5cbiAgcHJvY2Vzcy5vbignbWVzc2FnZScsIGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAvLyBoYW5kbGUgZGVidWcgbG9nZ2luZyBzcGVjaWFsbHlcbiAgICBpZiAoZGF0YVswXSA9PT0gJ25pZ2h0bWFyZTppcGM6ZGVidWcnKSB7XG4gICAgICBkZWJ1Zy5hcHBseShudWxsLCBzbGljZWQoZGF0YSwgMSkpO1xuICAgIH1cbiAgICBlbWl0LmFwcGx5KGVtaXR0ZXIsIHNsaWNlZChkYXRhKSk7XG4gIH0pO1xuXG4gIGVtaXR0ZXIuZW1pdCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmKHByb2Nlc3MuY29ubmVjdGVkKXtcbiAgICAgIHByb2Nlc3Muc2VuZChzbGljZWQoYXJndW1lbnRzKSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBDYWxsIGEgcmVzcG9uZGVyIGZ1bmN0aW9uIGluIHRoZSBhc3NvY2lhdGVkIHByb2Nlc3MuIChJbiB0aGUgcHJvY2VzcyxcbiAgICogcmVzcG9uZGVycyBjYW4gYmUgcmVnaXN0ZXJlZCB3aXRoIGBpcGMucmVzcG9uZFRvKClgLikgVGhlIGxhc3QgYXJndW1lbnRcbiAgICogc2hvdWxkIGJlIGEgY2FsbGJhY2sgZnVuY3Rpb24sIHdoaWNoIHdpbGwgY2FsbGVkIHdpdGggdGhlIHJlc3VsdHMgb2YgdGhlXG4gICAqIHJlc3BvbmRlci5cbiAgICogVGhpcyByZXR1cm5zIGFuIGV2ZW50IGVtaXR0ZXIuIFlvdSBjYW4gbGlzdGVuIGZvciB0aGUgcmVzdWx0cyBvZiB0aGVcbiAgICogcmVzcG9uZGVyIHVzaW5nIHRoZSBgZW5kYCBldmVudCAodGhpcyBpcyB0aGUgc2FtZSBhcyBwYXNzaW5nIGEgY2FsbGJhY2spLlxuICAgKiBBZGRpdGlvbmFsbHksIHlvdSBjYW4gbGlzdGVuIGZvciBgZGF0YWAgZXZlbnRzLCB3aGljaCB0aGUgcmVzcG9uZGVyIG1heVxuICAgKiBzZW5kIHRvIGluZGljYXRlIHNvbWUgc29ydCBvZiBwcm9ncmVzcy5cbiAgICogQHBhcmFtICB7U3RyaW5nfSBuYW1lIE5hbWUgb2YgdGhlIHJlc3BvbmRlciBmdW5jdGlvbiB0byBjYWxsXG4gICAqIEBwYXJhbSAgey4uLk9iamVjdHN9IFthcmd1bWVudHNdIEFueSBudW1iZXIgb2YgYXJndW1lbnRzIHRvIHNlbmRcbiAgICogQHBhcmFtICB7RnVuY3Rpb259IFtjYWxsYmFja10gQSBjYWxsYmFjayBmdW5jdGlvbiB0aGF0IGhhbmRsZXMgdGhlIHJlc3VsdHNcbiAgICogQHJldHVybiB7RW1pdHRlcn1cbiAgICovXG4gIGVtaXR0ZXIuY2FsbCA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICB2YXIgYXJncyA9IHNsaWNlZChhcmd1bWVudHMsIDEpO1xuICAgIHZhciBjYWxsYmFjayA9IGFyZ3MucG9wKCk7XG4gICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYXJncy5wdXNoKGNhbGxiYWNrKTtcbiAgICAgIGNhbGxiYWNrID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHZhciBpZCA9IGNhbGxJZCsrO1xuICAgIHZhciBwcm9ncmVzcyA9IG5ldyBFbWl0dGVyKCk7XG5cbiAgICBlbWl0dGVyLm9uKGBDQUxMX0RBVEFfJHtpZH1gLCBmdW5jdGlvbigpIHtcbiAgICAgIHByb2dyZXNzLmVtaXQuYXBwbHkocHJvZ3Jlc3MsIFsnZGF0YSddLmNvbmNhdChzbGljZWQoYXJndW1lbnRzKSkpO1xuICAgIH0pO1xuXG4gICAgZW1pdHRlci5vbmNlKGBDQUxMX1JFU1VMVF8ke2lkfWAsIGZ1bmN0aW9uKCkge1xuICAgICAgcHJvZ3Jlc3MuZW1pdC5hcHBseShwcm9ncmVzcywgWydlbmQnXS5jb25jYXQoc2xpY2VkKGFyZ3VtZW50cykpKTtcbiAgICAgIGVtaXR0ZXIucmVtb3ZlQWxsTGlzdGVuZXJzKGBDQUxMX0RBVEFfJHtpZH1gKTtcbiAgICAgIHByb2dyZXNzLnJlbW92ZUFsbExpc3RlbmVycygpO1xuICAgICAgcHJvZ3Jlc3MgPSB1bmRlZmluZWQ7XG4gICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2suYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGVtaXR0ZXIuZW1pdC5hcHBseShlbWl0dGVyLCBbJ0NBTEwnLCBpZCwgbmFtZV0uY29uY2F0KGFyZ3MpKTtcbiAgICByZXR1cm4gcHJvZ3Jlc3M7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIGEgcmVzcG9uZGVyIHRvIGJlIGNhbGxlZCBmcm9tIG90aGVyIHByb2Nlc3NlcyB3aXRoIGBpcGMuY2FsbCgpYC5cbiAgICogVGhlIHJlc3BvbmRlciBzaG91bGQgYmUgYSBmdW5jdGlvbiB0aGF0IGFjY2VwdHMgYW55IG51bWJlciBvZiBhcmd1bWVudHMsXG4gICAqIHdoZXJlIHRoZSBsYXN0IGFyZ3VtZW50IGlzIGEgY2FsbGJhY2sgZnVuY3Rpb24uIFdoZW4gdGhlIHJlc3BvbmRlciBoYXNcbiAgICogZmluaXNoZWQgaXRzIHdvcmssIGl0IE1VU1QgY2FsbCB0aGUgY2FsbGJhY2suIFRoZSBmaXJzdCBhcmd1bWVudCBzaG91bGQgYmVcbiAgICogYW4gZXJyb3IsIGlmIGFueSwgYW5kIHRoZSBzZWNvbmQgc2hvdWxkIGJlIHRoZSByZXN1bHRzLlxuICAgKiBPbmx5IG9uZSByZXNwb25kZXIgY2FuIGJlIHJlZ2lzdGVyZWQgZm9yIGEgZ2l2ZW4gbmFtZS5cbiAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgVGhlIG5hbWUgdG8gcmVnaXN0ZXIgdGhlIHJlc3BvbmRlciB1bmRlci5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gcmVzcG9uZGVyXG4gICAqL1xuICBlbWl0dGVyLnJlc3BvbmRUbyA9IGZ1bmN0aW9uKG5hbWUsIHJlc3BvbmRlcikge1xuICAgIGlmIChyZXNwb25kZXJzW25hbWVdKSB7XG4gICAgICBkZWJ1ZyhgUmVwbGFjaW5nIHJlc3BvbmRlciBuYW1lZCBcIiR7bmFtZX1cImApO1xuICAgIH1cbiAgICByZXNwb25kZXJzW25hbWVdID0gcmVzcG9uZGVyO1xuICB9O1xuXG4gIGVtaXR0ZXIub24oJ0NBTEwnLCBmdW5jdGlvbihpZCwgbmFtZSkge1xuICAgIHZhciBhcmdzID0gc2xpY2VkKGFyZ3VtZW50cywgMik7XG4gICAgdmFyIHJlc3BvbmRlciA9IHJlc3BvbmRlcnNbbmFtZV07XG4gICAgdmFyIGRvbmUgPSBmdW5jdGlvbigpIHtcbiAgICAgIGVtaXR0ZXIuZW1pdC5hcHBseShcbiAgICAgICAgZW1pdHRlciwgW2BDQUxMX1JFU1VMVF8ke2lkfWBdLmNvbmNhdChzbGljZWQoYXJndW1lbnRzKSkpO1xuICAgIH07XG4gICAgZG9uZS5wcm9ncmVzcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgZW1pdHRlci5lbWl0LmFwcGx5KFxuICAgICAgICBlbWl0dGVyLCBbYENBTExfREFUQV8ke2lkfWBdLmNvbmNhdChzbGljZWQoYXJndW1lbnRzKSkpO1xuICAgIH07XG4gICAgaWYgKCFyZXNwb25kZXIpIHtcbiAgICAgIHJldHVybiBkb25lKGBOb3RoaW5nIHJlc3BvbmRzIHRvIFwiJHtuYW1lfVwiYCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICByZXNwb25kZXIuYXBwbHkobnVsbCwgc2xpY2VkKGFyZ3VtZW50cywgMikuY29uY2F0KFtkb25lXSkpO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGRvbmUoZXJyb3IpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGVtaXR0ZXI7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbmlnaHRtYXJlL2xpYi9pcGMuanNcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogTW9kdWxlIERlcGVuZGVuY2llc1xuICovXG5cbnZhciBtaW5zdGFjaGUgPSByZXF1aXJlKCdtaW5zdGFjaGUnKTtcblxuLyoqXG4gKiBSdW4gdGhlIGBzcmNgIGZ1bmN0aW9uIG9uIHRoZSBjbGllbnQtc2lkZSwgY2FwdHVyZVxuICogdGhlIHJlc3BvbnNlIGFuZCBsb2dzLCBhbmQgc2VuZCBiYWNrIHZpYVxuICogaXBjIHRvIGVsZWN0cm9uJ3MgbWFpbiBwcm9jZXNzXG4gKi9cblxudmFyIGV4ZWN1dGUgPSBgXG4oZnVuY3Rpb24gamF2YXNjcmlwdCAoKSB7XG4gIHZhciBpcGMgPSAod2luZG93Ll9fbmlnaHRtYXJlID8gX19uaWdodG1hcmUuaXBjIDogd2luZG93WycnXS5uaWdodG1hcmUuaXBjKTtcbiAgdHJ5IHtcbiAgICB2YXIgZm4gPSAoe3shc3JjfX0pLCBcbiAgICAgIHJlc3BvbnNlLCBcbiAgICAgIGFyZ3MgPSBbXTtcblxuICAgIHt7I2FyZ3N9fWFyZ3MucHVzaCh7eyFhcmd1bWVudH19KTt7ey9hcmdzfX1cblxuICAgIGlmKGZuLmxlbmd0aCAtIDEgPT0gYXJncy5sZW5ndGgpIHtcbiAgICAgIGFyZ3MucHVzaCgoKGVyciwgdikgPT4ge1xuICAgICAgICAgIGlmKGVycikge1xuICAgICAgICAgICAgaXBjLnNlbmQoJ2Vycm9yJywgZXJyLm1lc3NhZ2UgfHwgZXJyLnRvU3RyaW5nKCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpcGMuc2VuZCgncmVzcG9uc2UnLCB2KTtcbiAgICAgICAgfSkpO1xuICAgICAgZm4uYXBwbHkobnVsbCwgYXJncyk7XG4gICAgfSBcbiAgICBlbHNlIHtcbiAgICAgIHJlc3BvbnNlID0gZm4uYXBwbHkobnVsbCwgYXJncyk7XG4gICAgICBpZihyZXNwb25zZSAmJiByZXNwb25zZS50aGVuKSB7XG4gICAgICAgIHJlc3BvbnNlLnRoZW4oKHYpID0+IHtcbiAgICAgICAgICBpcGMuc2VuZCgncmVzcG9uc2UnLCB2KTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICBpcGMuc2VuZCgnZXJyb3InLCBlcnIpXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXBjLnNlbmQoJ3Jlc3BvbnNlJywgcmVzcG9uc2UpO1xuICAgICAgfVxuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgaXBjLnNlbmQoJ2Vycm9yJywgZXJyLm1lc3NhZ2UpO1xuICB9XG59KSgpXG5gO1xuXG4vKipcbiAqIEluamVjdCB0aGUgYHNyY2Agb24gdGhlIGNsaWVudC1zaWRlLCBjYXB0dXJlXG4gKiB0aGUgcmVzcG9uc2UgYW5kIGxvZ3MsIGFuZCBzZW5kIGJhY2sgdmlhXG4gKiBpcGMgdG8gZWxlY3Ryb24ncyBtYWluIHByb2Nlc3NcbiAqL1xuXG52YXIgaW5qZWN0ID0gYFxuKGZ1bmN0aW9uIGphdmFzY3JpcHQgKCkge1xuICB2YXIgaXBjID0gKHdpbmRvdy5fX25pZ2h0bWFyZSA/IF9fbmlnaHRtYXJlLmlwYyA6IHdpbmRvd1snJ10ubmlnaHRtYXJlLmlwYyk7XG4gIHRyeSB7XG4gICAgdmFyIHJlc3BvbnNlID0gKGZ1bmN0aW9uICgpIHsge3shc3JjfX0gXFxufSkoKVxuICAgIGlwYy5zZW5kKCdyZXNwb25zZScsIHJlc3BvbnNlKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGlwYy5zZW5kKCdlcnJvcicsIGUubWVzc2FnZSk7XG4gIH1cbn0pKClcbmA7XG5cbi8qKlxuICogRXhwb3J0IHRoZSB0ZW1wbGF0ZXNcbiAqL1xuXG5leHBvcnRzLmV4ZWN1dGUgPSBtaW5zdGFjaGUuY29tcGlsZShleGVjdXRlKTtcbmV4cG9ydHMuaW5qZWN0ID0gbWluc3RhY2hlLmNvbXBpbGUoaW5qZWN0KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9uaWdodG1hcmUvbGliL2phdmFzY3JpcHQuanNcbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFkYWJsZTtcblxuLyo8cmVwbGFjZW1lbnQ+Ki9cbnZhciBwcm9jZXNzTmV4dFRpY2sgPSByZXF1aXJlKCdwcm9jZXNzLW5leHRpY2stYXJncycpO1xuLyo8L3JlcGxhY2VtZW50PiovXG5cbi8qPHJlcGxhY2VtZW50PiovXG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJ2lzYXJyYXknKTtcbi8qPC9yZXBsYWNlbWVudD4qL1xuXG4vKjxyZXBsYWNlbWVudD4qL1xudmFyIER1cGxleDtcbi8qPC9yZXBsYWNlbWVudD4qL1xuXG5SZWFkYWJsZS5SZWFkYWJsZVN0YXRlID0gUmVhZGFibGVTdGF0ZTtcblxuLyo8cmVwbGFjZW1lbnQ+Ki9cbnZhciBFRSA9IHJlcXVpcmUoJ2V2ZW50cycpLkV2ZW50RW1pdHRlcjtcblxudmFyIEVFbGlzdGVuZXJDb3VudCA9IGZ1bmN0aW9uIChlbWl0dGVyLCB0eXBlKSB7XG4gIHJldHVybiBlbWl0dGVyLmxpc3RlbmVycyh0eXBlKS5sZW5ndGg7XG59O1xuLyo8L3JlcGxhY2VtZW50PiovXG5cbi8qPHJlcGxhY2VtZW50PiovXG52YXIgU3RyZWFtO1xuKGZ1bmN0aW9uICgpIHtcbiAgdHJ5IHtcbiAgICBTdHJlYW0gPSByZXF1aXJlKCdzdCcgKyAncmVhbScpO1xuICB9IGNhdGNoIChfKSB7fSBmaW5hbGx5IHtcbiAgICBpZiAoIVN0cmVhbSkgU3RyZWFtID0gcmVxdWlyZSgnZXZlbnRzJykuRXZlbnRFbWl0dGVyO1xuICB9XG59KSgpO1xuLyo8L3JlcGxhY2VtZW50PiovXG5cbnZhciBCdWZmZXIgPSByZXF1aXJlKCdidWZmZXInKS5CdWZmZXI7XG4vKjxyZXBsYWNlbWVudD4qL1xudmFyIGJ1ZmZlclNoaW0gPSByZXF1aXJlKCdidWZmZXItc2hpbXMnKTtcbi8qPC9yZXBsYWNlbWVudD4qL1xuXG4vKjxyZXBsYWNlbWVudD4qL1xudmFyIHV0aWwgPSByZXF1aXJlKCdjb3JlLXV0aWwtaXMnKTtcbnV0aWwuaW5oZXJpdHMgPSByZXF1aXJlKCdpbmhlcml0cycpO1xuLyo8L3JlcGxhY2VtZW50PiovXG5cbi8qPHJlcGxhY2VtZW50PiovXG52YXIgZGVidWdVdGlsID0gcmVxdWlyZSgndXRpbCcpO1xudmFyIGRlYnVnID0gdm9pZCAwO1xuaWYgKGRlYnVnVXRpbCAmJiBkZWJ1Z1V0aWwuZGVidWdsb2cpIHtcbiAgZGVidWcgPSBkZWJ1Z1V0aWwuZGVidWdsb2coJ3N0cmVhbScpO1xufSBlbHNlIHtcbiAgZGVidWcgPSBmdW5jdGlvbiAoKSB7fTtcbn1cbi8qPC9yZXBsYWNlbWVudD4qL1xuXG52YXIgQnVmZmVyTGlzdCA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvc3RyZWFtcy9CdWZmZXJMaXN0Jyk7XG52YXIgU3RyaW5nRGVjb2RlcjtcblxudXRpbC5pbmhlcml0cyhSZWFkYWJsZSwgU3RyZWFtKTtcblxuZnVuY3Rpb24gcHJlcGVuZExpc3RlbmVyKGVtaXR0ZXIsIGV2ZW50LCBmbikge1xuICAvLyBTYWRseSB0aGlzIGlzIG5vdCBjYWNoZWFibGUgYXMgc29tZSBsaWJyYXJpZXMgYnVuZGxlIHRoZWlyIG93blxuICAvLyBldmVudCBlbWl0dGVyIGltcGxlbWVudGF0aW9uIHdpdGggdGhlbS5cbiAgaWYgKHR5cGVvZiBlbWl0dGVyLnByZXBlbmRMaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBlbWl0dGVyLnByZXBlbmRMaXN0ZW5lcihldmVudCwgZm4pO1xuICB9IGVsc2Uge1xuICAgIC8vIFRoaXMgaXMgYSBoYWNrIHRvIG1ha2Ugc3VyZSB0aGF0IG91ciBlcnJvciBoYW5kbGVyIGlzIGF0dGFjaGVkIGJlZm9yZSBhbnlcbiAgICAvLyB1c2VybGFuZCBvbmVzLiAgTkVWRVIgRE8gVEhJUy4gVGhpcyBpcyBoZXJlIG9ubHkgYmVjYXVzZSB0aGlzIGNvZGUgbmVlZHNcbiAgICAvLyB0byBjb250aW51ZSB0byB3b3JrIHdpdGggb2xkZXIgdmVyc2lvbnMgb2YgTm9kZS5qcyB0aGF0IGRvIG5vdCBpbmNsdWRlXG4gICAgLy8gdGhlIHByZXBlbmRMaXN0ZW5lcigpIG1ldGhvZC4gVGhlIGdvYWwgaXMgdG8gZXZlbnR1YWxseSByZW1vdmUgdGhpcyBoYWNrLlxuICAgIGlmICghZW1pdHRlci5fZXZlbnRzIHx8ICFlbWl0dGVyLl9ldmVudHNbZXZlbnRdKSBlbWl0dGVyLm9uKGV2ZW50LCBmbik7ZWxzZSBpZiAoaXNBcnJheShlbWl0dGVyLl9ldmVudHNbZXZlbnRdKSkgZW1pdHRlci5fZXZlbnRzW2V2ZW50XS51bnNoaWZ0KGZuKTtlbHNlIGVtaXR0ZXIuX2V2ZW50c1tldmVudF0gPSBbZm4sIGVtaXR0ZXIuX2V2ZW50c1tldmVudF1dO1xuICB9XG59XG5cbmZ1bmN0aW9uIFJlYWRhYmxlU3RhdGUob3B0aW9ucywgc3RyZWFtKSB7XG4gIER1cGxleCA9IER1cGxleCB8fCByZXF1aXJlKCcuL19zdHJlYW1fZHVwbGV4Jyk7XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgLy8gb2JqZWN0IHN0cmVhbSBmbGFnLiBVc2VkIHRvIG1ha2UgcmVhZChuKSBpZ25vcmUgbiBhbmQgdG9cbiAgLy8gbWFrZSBhbGwgdGhlIGJ1ZmZlciBtZXJnaW5nIGFuZCBsZW5ndGggY2hlY2tzIGdvIGF3YXlcbiAgdGhpcy5vYmplY3RNb2RlID0gISFvcHRpb25zLm9iamVjdE1vZGU7XG5cbiAgaWYgKHN0cmVhbSBpbnN0YW5jZW9mIER1cGxleCkgdGhpcy5vYmplY3RNb2RlID0gdGhpcy5vYmplY3RNb2RlIHx8ICEhb3B0aW9ucy5yZWFkYWJsZU9iamVjdE1vZGU7XG5cbiAgLy8gdGhlIHBvaW50IGF0IHdoaWNoIGl0IHN0b3BzIGNhbGxpbmcgX3JlYWQoKSB0byBmaWxsIHRoZSBidWZmZXJcbiAgLy8gTm90ZTogMCBpcyBhIHZhbGlkIHZhbHVlLCBtZWFucyBcImRvbid0IGNhbGwgX3JlYWQgcHJlZW1wdGl2ZWx5IGV2ZXJcIlxuICB2YXIgaHdtID0gb3B0aW9ucy5oaWdoV2F0ZXJNYXJrO1xuICB2YXIgZGVmYXVsdEh3bSA9IHRoaXMub2JqZWN0TW9kZSA/IDE2IDogMTYgKiAxMDI0O1xuICB0aGlzLmhpZ2hXYXRlck1hcmsgPSBod20gfHwgaHdtID09PSAwID8gaHdtIDogZGVmYXVsdEh3bTtcblxuICAvLyBjYXN0IHRvIGludHMuXG4gIHRoaXMuaGlnaFdhdGVyTWFyayA9IH4gfnRoaXMuaGlnaFdhdGVyTWFyaztcblxuICAvLyBBIGxpbmtlZCBsaXN0IGlzIHVzZWQgdG8gc3RvcmUgZGF0YSBjaHVua3MgaW5zdGVhZCBvZiBhbiBhcnJheSBiZWNhdXNlIHRoZVxuICAvLyBsaW5rZWQgbGlzdCBjYW4gcmVtb3ZlIGVsZW1lbnRzIGZyb20gdGhlIGJlZ2lubmluZyBmYXN0ZXIgdGhhblxuICAvLyBhcnJheS5zaGlmdCgpXG4gIHRoaXMuYnVmZmVyID0gbmV3IEJ1ZmZlckxpc3QoKTtcbiAgdGhpcy5sZW5ndGggPSAwO1xuICB0aGlzLnBpcGVzID0gbnVsbDtcbiAgdGhpcy5waXBlc0NvdW50ID0gMDtcbiAgdGhpcy5mbG93aW5nID0gbnVsbDtcbiAgdGhpcy5lbmRlZCA9IGZhbHNlO1xuICB0aGlzLmVuZEVtaXR0ZWQgPSBmYWxzZTtcbiAgdGhpcy5yZWFkaW5nID0gZmFsc2U7XG5cbiAgLy8gYSBmbGFnIHRvIGJlIGFibGUgdG8gdGVsbCBpZiB0aGUgb253cml0ZSBjYiBpcyBjYWxsZWQgaW1tZWRpYXRlbHksXG4gIC8vIG9yIG9uIGEgbGF0ZXIgdGljay4gIFdlIHNldCB0aGlzIHRvIHRydWUgYXQgZmlyc3QsIGJlY2F1c2UgYW55XG4gIC8vIGFjdGlvbnMgdGhhdCBzaG91bGRuJ3QgaGFwcGVuIHVudGlsIFwibGF0ZXJcIiBzaG91bGQgZ2VuZXJhbGx5IGFsc29cbiAgLy8gbm90IGhhcHBlbiBiZWZvcmUgdGhlIGZpcnN0IHdyaXRlIGNhbGwuXG4gIHRoaXMuc3luYyA9IHRydWU7XG5cbiAgLy8gd2hlbmV2ZXIgd2UgcmV0dXJuIG51bGwsIHRoZW4gd2Ugc2V0IGEgZmxhZyB0byBzYXlcbiAgLy8gdGhhdCB3ZSdyZSBhd2FpdGluZyBhICdyZWFkYWJsZScgZXZlbnQgZW1pc3Npb24uXG4gIHRoaXMubmVlZFJlYWRhYmxlID0gZmFsc2U7XG4gIHRoaXMuZW1pdHRlZFJlYWRhYmxlID0gZmFsc2U7XG4gIHRoaXMucmVhZGFibGVMaXN0ZW5pbmcgPSBmYWxzZTtcbiAgdGhpcy5yZXN1bWVTY2hlZHVsZWQgPSBmYWxzZTtcblxuICAvLyBDcnlwdG8gaXMga2luZCBvZiBvbGQgYW5kIGNydXN0eS4gIEhpc3RvcmljYWxseSwgaXRzIGRlZmF1bHQgc3RyaW5nXG4gIC8vIGVuY29kaW5nIGlzICdiaW5hcnknIHNvIHdlIGhhdmUgdG8gbWFrZSB0aGlzIGNvbmZpZ3VyYWJsZS5cbiAgLy8gRXZlcnl0aGluZyBlbHNlIGluIHRoZSB1bml2ZXJzZSB1c2VzICd1dGY4JywgdGhvdWdoLlxuICB0aGlzLmRlZmF1bHRFbmNvZGluZyA9IG9wdGlvbnMuZGVmYXVsdEVuY29kaW5nIHx8ICd1dGY4JztcblxuICAvLyB3aGVuIHBpcGluZywgd2Ugb25seSBjYXJlIGFib3V0ICdyZWFkYWJsZScgZXZlbnRzIHRoYXQgaGFwcGVuXG4gIC8vIGFmdGVyIHJlYWQoKWluZyBhbGwgdGhlIGJ5dGVzIGFuZCBub3QgZ2V0dGluZyBhbnkgcHVzaGJhY2suXG4gIHRoaXMucmFuT3V0ID0gZmFsc2U7XG5cbiAgLy8gdGhlIG51bWJlciBvZiB3cml0ZXJzIHRoYXQgYXJlIGF3YWl0aW5nIGEgZHJhaW4gZXZlbnQgaW4gLnBpcGUoKXNcbiAgdGhpcy5hd2FpdERyYWluID0gMDtcblxuICAvLyBpZiB0cnVlLCBhIG1heWJlUmVhZE1vcmUgaGFzIGJlZW4gc2NoZWR1bGVkXG4gIHRoaXMucmVhZGluZ01vcmUgPSBmYWxzZTtcblxuICB0aGlzLmRlY29kZXIgPSBudWxsO1xuICB0aGlzLmVuY29kaW5nID0gbnVsbDtcbiAgaWYgKG9wdGlvbnMuZW5jb2RpbmcpIHtcbiAgICBpZiAoIVN0cmluZ0RlY29kZXIpIFN0cmluZ0RlY29kZXIgPSByZXF1aXJlKCdzdHJpbmdfZGVjb2Rlci8nKS5TdHJpbmdEZWNvZGVyO1xuICAgIHRoaXMuZGVjb2RlciA9IG5ldyBTdHJpbmdEZWNvZGVyKG9wdGlvbnMuZW5jb2RpbmcpO1xuICAgIHRoaXMuZW5jb2RpbmcgPSBvcHRpb25zLmVuY29kaW5nO1xuICB9XG59XG5cbmZ1bmN0aW9uIFJlYWRhYmxlKG9wdGlvbnMpIHtcbiAgRHVwbGV4ID0gRHVwbGV4IHx8IHJlcXVpcmUoJy4vX3N0cmVhbV9kdXBsZXgnKTtcblxuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgUmVhZGFibGUpKSByZXR1cm4gbmV3IFJlYWRhYmxlKG9wdGlvbnMpO1xuXG4gIHRoaXMuX3JlYWRhYmxlU3RhdGUgPSBuZXcgUmVhZGFibGVTdGF0ZShvcHRpb25zLCB0aGlzKTtcblxuICAvLyBsZWdhY3lcbiAgdGhpcy5yZWFkYWJsZSA9IHRydWU7XG5cbiAgaWYgKG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMucmVhZCA9PT0gJ2Z1bmN0aW9uJykgdGhpcy5fcmVhZCA9IG9wdGlvbnMucmVhZDtcblxuICBTdHJlYW0uY2FsbCh0aGlzKTtcbn1cblxuLy8gTWFudWFsbHkgc2hvdmUgc29tZXRoaW5nIGludG8gdGhlIHJlYWQoKSBidWZmZXIuXG4vLyBUaGlzIHJldHVybnMgdHJ1ZSBpZiB0aGUgaGlnaFdhdGVyTWFyayBoYXMgbm90IGJlZW4gaGl0IHlldCxcbi8vIHNpbWlsYXIgdG8gaG93IFdyaXRhYmxlLndyaXRlKCkgcmV0dXJucyB0cnVlIGlmIHlvdSBzaG91bGRcbi8vIHdyaXRlKCkgc29tZSBtb3JlLlxuUmVhZGFibGUucHJvdG90eXBlLnB1c2ggPSBmdW5jdGlvbiAoY2h1bmssIGVuY29kaW5nKSB7XG4gIHZhciBzdGF0ZSA9IHRoaXMuX3JlYWRhYmxlU3RhdGU7XG5cbiAgaWYgKCFzdGF0ZS5vYmplY3RNb2RlICYmIHR5cGVvZiBjaHVuayA9PT0gJ3N0cmluZycpIHtcbiAgICBlbmNvZGluZyA9IGVuY29kaW5nIHx8IHN0YXRlLmRlZmF1bHRFbmNvZGluZztcbiAgICBpZiAoZW5jb2RpbmcgIT09IHN0YXRlLmVuY29kaW5nKSB7XG4gICAgICBjaHVuayA9IGJ1ZmZlclNoaW0uZnJvbShjaHVuaywgZW5jb2RpbmcpO1xuICAgICAgZW5jb2RpbmcgPSAnJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVhZGFibGVBZGRDaHVuayh0aGlzLCBzdGF0ZSwgY2h1bmssIGVuY29kaW5nLCBmYWxzZSk7XG59O1xuXG4vLyBVbnNoaWZ0IHNob3VsZCAqYWx3YXlzKiBiZSBzb21ldGhpbmcgZGlyZWN0bHkgb3V0IG9mIHJlYWQoKVxuUmVhZGFibGUucHJvdG90eXBlLnVuc2hpZnQgPSBmdW5jdGlvbiAoY2h1bmspIHtcbiAgdmFyIHN0YXRlID0gdGhpcy5fcmVhZGFibGVTdGF0ZTtcbiAgcmV0dXJuIHJlYWRhYmxlQWRkQ2h1bmsodGhpcywgc3RhdGUsIGNodW5rLCAnJywgdHJ1ZSk7XG59O1xuXG5SZWFkYWJsZS5wcm90b3R5cGUuaXNQYXVzZWQgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLl9yZWFkYWJsZVN0YXRlLmZsb3dpbmcgPT09IGZhbHNlO1xufTtcblxuZnVuY3Rpb24gcmVhZGFibGVBZGRDaHVuayhzdHJlYW0sIHN0YXRlLCBjaHVuaywgZW5jb2RpbmcsIGFkZFRvRnJvbnQpIHtcbiAgdmFyIGVyID0gY2h1bmtJbnZhbGlkKHN0YXRlLCBjaHVuayk7XG4gIGlmIChlcikge1xuICAgIHN0cmVhbS5lbWl0KCdlcnJvcicsIGVyKTtcbiAgfSBlbHNlIGlmIChjaHVuayA9PT0gbnVsbCkge1xuICAgIHN0YXRlLnJlYWRpbmcgPSBmYWxzZTtcbiAgICBvbkVvZkNodW5rKHN0cmVhbSwgc3RhdGUpO1xuICB9IGVsc2UgaWYgKHN0YXRlLm9iamVjdE1vZGUgfHwgY2h1bmsgJiYgY2h1bmsubGVuZ3RoID4gMCkge1xuICAgIGlmIChzdGF0ZS5lbmRlZCAmJiAhYWRkVG9Gcm9udCkge1xuICAgICAgdmFyIGUgPSBuZXcgRXJyb3IoJ3N0cmVhbS5wdXNoKCkgYWZ0ZXIgRU9GJyk7XG4gICAgICBzdHJlYW0uZW1pdCgnZXJyb3InLCBlKTtcbiAgICB9IGVsc2UgaWYgKHN0YXRlLmVuZEVtaXR0ZWQgJiYgYWRkVG9Gcm9udCkge1xuICAgICAgdmFyIF9lID0gbmV3IEVycm9yKCdzdHJlYW0udW5zaGlmdCgpIGFmdGVyIGVuZCBldmVudCcpO1xuICAgICAgc3RyZWFtLmVtaXQoJ2Vycm9yJywgX2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgc2tpcEFkZDtcbiAgICAgIGlmIChzdGF0ZS5kZWNvZGVyICYmICFhZGRUb0Zyb250ICYmICFlbmNvZGluZykge1xuICAgICAgICBjaHVuayA9IHN0YXRlLmRlY29kZXIud3JpdGUoY2h1bmspO1xuICAgICAgICBza2lwQWRkID0gIXN0YXRlLm9iamVjdE1vZGUgJiYgY2h1bmsubGVuZ3RoID09PSAwO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWFkZFRvRnJvbnQpIHN0YXRlLnJlYWRpbmcgPSBmYWxzZTtcblxuICAgICAgLy8gRG9uJ3QgYWRkIHRvIHRoZSBidWZmZXIgaWYgd2UndmUgZGVjb2RlZCB0byBhbiBlbXB0eSBzdHJpbmcgY2h1bmsgYW5kXG4gICAgICAvLyB3ZSdyZSBub3QgaW4gb2JqZWN0IG1vZGVcbiAgICAgIGlmICghc2tpcEFkZCkge1xuICAgICAgICAvLyBpZiB3ZSB3YW50IHRoZSBkYXRhIG5vdywganVzdCBlbWl0IGl0LlxuICAgICAgICBpZiAoc3RhdGUuZmxvd2luZyAmJiBzdGF0ZS5sZW5ndGggPT09IDAgJiYgIXN0YXRlLnN5bmMpIHtcbiAgICAgICAgICBzdHJlYW0uZW1pdCgnZGF0YScsIGNodW5rKTtcbiAgICAgICAgICBzdHJlYW0ucmVhZCgwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyB1cGRhdGUgdGhlIGJ1ZmZlciBpbmZvLlxuICAgICAgICAgIHN0YXRlLmxlbmd0aCArPSBzdGF0ZS5vYmplY3RNb2RlID8gMSA6IGNodW5rLmxlbmd0aDtcbiAgICAgICAgICBpZiAoYWRkVG9Gcm9udCkgc3RhdGUuYnVmZmVyLnVuc2hpZnQoY2h1bmspO2Vsc2Ugc3RhdGUuYnVmZmVyLnB1c2goY2h1bmspO1xuXG4gICAgICAgICAgaWYgKHN0YXRlLm5lZWRSZWFkYWJsZSkgZW1pdFJlYWRhYmxlKHN0cmVhbSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWF5YmVSZWFkTW9yZShzdHJlYW0sIHN0YXRlKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoIWFkZFRvRnJvbnQpIHtcbiAgICBzdGF0ZS5yZWFkaW5nID0gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gbmVlZE1vcmVEYXRhKHN0YXRlKTtcbn1cblxuLy8gaWYgaXQncyBwYXN0IHRoZSBoaWdoIHdhdGVyIG1hcmssIHdlIGNhbiBwdXNoIGluIHNvbWUgbW9yZS5cbi8vIEFsc28sIGlmIHdlIGhhdmUgbm8gZGF0YSB5ZXQsIHdlIGNhbiBzdGFuZCBzb21lXG4vLyBtb3JlIGJ5dGVzLiAgVGhpcyBpcyB0byB3b3JrIGFyb3VuZCBjYXNlcyB3aGVyZSBod209MCxcbi8vIHN1Y2ggYXMgdGhlIHJlcGwuICBBbHNvLCBpZiB0aGUgcHVzaCgpIHRyaWdnZXJlZCBhXG4vLyByZWFkYWJsZSBldmVudCwgYW5kIHRoZSB1c2VyIGNhbGxlZCByZWFkKGxhcmdlTnVtYmVyKSBzdWNoIHRoYXRcbi8vIG5lZWRSZWFkYWJsZSB3YXMgc2V0LCB0aGVuIHdlIG91Z2h0IHRvIHB1c2ggbW9yZSwgc28gdGhhdCBhbm90aGVyXG4vLyAncmVhZGFibGUnIGV2ZW50IHdpbGwgYmUgdHJpZ2dlcmVkLlxuZnVuY3Rpb24gbmVlZE1vcmVEYXRhKHN0YXRlKSB7XG4gIHJldHVybiAhc3RhdGUuZW5kZWQgJiYgKHN0YXRlLm5lZWRSZWFkYWJsZSB8fCBzdGF0ZS5sZW5ndGggPCBzdGF0ZS5oaWdoV2F0ZXJNYXJrIHx8IHN0YXRlLmxlbmd0aCA9PT0gMCk7XG59XG5cbi8vIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LlxuUmVhZGFibGUucHJvdG90eXBlLnNldEVuY29kaW5nID0gZnVuY3Rpb24gKGVuYykge1xuICBpZiAoIVN0cmluZ0RlY29kZXIpIFN0cmluZ0RlY29kZXIgPSByZXF1aXJlKCdzdHJpbmdfZGVjb2Rlci8nKS5TdHJpbmdEZWNvZGVyO1xuICB0aGlzLl9yZWFkYWJsZVN0YXRlLmRlY29kZXIgPSBuZXcgU3RyaW5nRGVjb2RlcihlbmMpO1xuICB0aGlzLl9yZWFkYWJsZVN0YXRlLmVuY29kaW5nID0gZW5jO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8vIERvbid0IHJhaXNlIHRoZSBod20gPiA4TUJcbnZhciBNQVhfSFdNID0gMHg4MDAwMDA7XG5mdW5jdGlvbiBjb21wdXRlTmV3SGlnaFdhdGVyTWFyayhuKSB7XG4gIGlmIChuID49IE1BWF9IV00pIHtcbiAgICBuID0gTUFYX0hXTTtcbiAgfSBlbHNlIHtcbiAgICAvLyBHZXQgdGhlIG5leHQgaGlnaGVzdCBwb3dlciBvZiAyIHRvIHByZXZlbnQgaW5jcmVhc2luZyBod20gZXhjZXNzaXZlbHkgaW5cbiAgICAvLyB0aW55IGFtb3VudHNcbiAgICBuLS07XG4gICAgbiB8PSBuID4+PiAxO1xuICAgIG4gfD0gbiA+Pj4gMjtcbiAgICBuIHw9IG4gPj4+IDQ7XG4gICAgbiB8PSBuID4+PiA4O1xuICAgIG4gfD0gbiA+Pj4gMTY7XG4gICAgbisrO1xuICB9XG4gIHJldHVybiBuO1xufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIGRlc2lnbmVkIHRvIGJlIGlubGluYWJsZSwgc28gcGxlYXNlIHRha2UgY2FyZSB3aGVuIG1ha2luZ1xuLy8gY2hhbmdlcyB0byB0aGUgZnVuY3Rpb24gYm9keS5cbmZ1bmN0aW9uIGhvd011Y2hUb1JlYWQobiwgc3RhdGUpIHtcbiAgaWYgKG4gPD0gMCB8fCBzdGF0ZS5sZW5ndGggPT09IDAgJiYgc3RhdGUuZW5kZWQpIHJldHVybiAwO1xuICBpZiAoc3RhdGUub2JqZWN0TW9kZSkgcmV0dXJuIDE7XG4gIGlmIChuICE9PSBuKSB7XG4gICAgLy8gT25seSBmbG93IG9uZSBidWZmZXIgYXQgYSB0aW1lXG4gICAgaWYgKHN0YXRlLmZsb3dpbmcgJiYgc3RhdGUubGVuZ3RoKSByZXR1cm4gc3RhdGUuYnVmZmVyLmhlYWQuZGF0YS5sZW5ndGg7ZWxzZSByZXR1cm4gc3RhdGUubGVuZ3RoO1xuICB9XG4gIC8vIElmIHdlJ3JlIGFza2luZyBmb3IgbW9yZSB0aGFuIHRoZSBjdXJyZW50IGh3bSwgdGhlbiByYWlzZSB0aGUgaHdtLlxuICBpZiAobiA+IHN0YXRlLmhpZ2hXYXRlck1hcmspIHN0YXRlLmhpZ2hXYXRlck1hcmsgPSBjb21wdXRlTmV3SGlnaFdhdGVyTWFyayhuKTtcbiAgaWYgKG4gPD0gc3RhdGUubGVuZ3RoKSByZXR1cm4gbjtcbiAgLy8gRG9uJ3QgaGF2ZSBlbm91Z2hcbiAgaWYgKCFzdGF0ZS5lbmRlZCkge1xuICAgIHN0YXRlLm5lZWRSZWFkYWJsZSA9IHRydWU7XG4gICAgcmV0dXJuIDA7XG4gIH1cbiAgcmV0dXJuIHN0YXRlLmxlbmd0aDtcbn1cblxuLy8geW91IGNhbiBvdmVycmlkZSBlaXRoZXIgdGhpcyBtZXRob2QsIG9yIHRoZSBhc3luYyBfcmVhZChuKSBiZWxvdy5cblJlYWRhYmxlLnByb3RvdHlwZS5yZWFkID0gZnVuY3Rpb24gKG4pIHtcbiAgZGVidWcoJ3JlYWQnLCBuKTtcbiAgbiA9IHBhcnNlSW50KG4sIDEwKTtcbiAgdmFyIHN0YXRlID0gdGhpcy5fcmVhZGFibGVTdGF0ZTtcbiAgdmFyIG5PcmlnID0gbjtcblxuICBpZiAobiAhPT0gMCkgc3RhdGUuZW1pdHRlZFJlYWRhYmxlID0gZmFsc2U7XG5cbiAgLy8gaWYgd2UncmUgZG9pbmcgcmVhZCgwKSB0byB0cmlnZ2VyIGEgcmVhZGFibGUgZXZlbnQsIGJ1dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYSBidW5jaCBvZiBkYXRhIGluIHRoZSBidWZmZXIsIHRoZW4ganVzdCB0cmlnZ2VyXG4gIC8vIHRoZSAncmVhZGFibGUnIGV2ZW50IGFuZCBtb3ZlIG9uLlxuICBpZiAobiA9PT0gMCAmJiBzdGF0ZS5uZWVkUmVhZGFibGUgJiYgKHN0YXRlLmxlbmd0aCA+PSBzdGF0ZS5oaWdoV2F0ZXJNYXJrIHx8IHN0YXRlLmVuZGVkKSkge1xuICAgIGRlYnVnKCdyZWFkOiBlbWl0UmVhZGFibGUnLCBzdGF0ZS5sZW5ndGgsIHN0YXRlLmVuZGVkKTtcbiAgICBpZiAoc3RhdGUubGVuZ3RoID09PSAwICYmIHN0YXRlLmVuZGVkKSBlbmRSZWFkYWJsZSh0aGlzKTtlbHNlIGVtaXRSZWFkYWJsZSh0aGlzKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIG4gPSBob3dNdWNoVG9SZWFkKG4sIHN0YXRlKTtcblxuICAvLyBpZiB3ZSd2ZSBlbmRlZCwgYW5kIHdlJ3JlIG5vdyBjbGVhciwgdGhlbiBmaW5pc2ggaXQgdXAuXG4gIGlmIChuID09PSAwICYmIHN0YXRlLmVuZGVkKSB7XG4gICAgaWYgKHN0YXRlLmxlbmd0aCA9PT0gMCkgZW5kUmVhZGFibGUodGhpcyk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvLyBBbGwgdGhlIGFjdHVhbCBjaHVuayBnZW5lcmF0aW9uIGxvZ2ljIG5lZWRzIHRvIGJlXG4gIC8vICpiZWxvdyogdGhlIGNhbGwgdG8gX3JlYWQuICBUaGUgcmVhc29uIGlzIHRoYXQgaW4gY2VydGFpblxuICAvLyBzeW50aGV0aWMgc3RyZWFtIGNhc2VzLCBzdWNoIGFzIHBhc3N0aHJvdWdoIHN0cmVhbXMsIF9yZWFkXG4gIC8vIG1heSBiZSBhIGNvbXBsZXRlbHkgc3luY2hyb25vdXMgb3BlcmF0aW9uIHdoaWNoIG1heSBjaGFuZ2VcbiAgLy8gdGhlIHN0YXRlIG9mIHRoZSByZWFkIGJ1ZmZlciwgcHJvdmlkaW5nIGVub3VnaCBkYXRhIHdoZW5cbiAgLy8gYmVmb3JlIHRoZXJlIHdhcyAqbm90KiBlbm91Z2guXG4gIC8vXG4gIC8vIFNvLCB0aGUgc3RlcHMgYXJlOlxuICAvLyAxLiBGaWd1cmUgb3V0IHdoYXQgdGhlIHN0YXRlIG9mIHRoaW5ncyB3aWxsIGJlIGFmdGVyIHdlIGRvXG4gIC8vIGEgcmVhZCBmcm9tIHRoZSBidWZmZXIuXG4gIC8vXG4gIC8vIDIuIElmIHRoYXQgcmVzdWx0aW5nIHN0YXRlIHdpbGwgdHJpZ2dlciBhIF9yZWFkLCB0aGVuIGNhbGwgX3JlYWQuXG4gIC8vIE5vdGUgdGhhdCB0aGlzIG1heSBiZSBhc3luY2hyb25vdXMsIG9yIHN5bmNocm9ub3VzLiAgWWVzLCBpdCBpc1xuICAvLyBkZWVwbHkgdWdseSB0byB3cml0ZSBBUElzIHRoaXMgd2F5LCBidXQgdGhhdCBzdGlsbCBkb2Vzbid0IG1lYW5cbiAgLy8gdGhhdCB0aGUgUmVhZGFibGUgY2xhc3Mgc2hvdWxkIGJlaGF2ZSBpbXByb3Blcmx5LCBhcyBzdHJlYW1zIGFyZVxuICAvLyBkZXNpZ25lZCB0byBiZSBzeW5jL2FzeW5jIGFnbm9zdGljLlxuICAvLyBUYWtlIG5vdGUgaWYgdGhlIF9yZWFkIGNhbGwgaXMgc3luYyBvciBhc3luYyAoaWUsIGlmIHRoZSByZWFkIGNhbGxcbiAgLy8gaGFzIHJldHVybmVkIHlldCksIHNvIHRoYXQgd2Uga25vdyB3aGV0aGVyIG9yIG5vdCBpdCdzIHNhZmUgdG8gZW1pdFxuICAvLyAncmVhZGFibGUnIGV0Yy5cbiAgLy9cbiAgLy8gMy4gQWN0dWFsbHkgcHVsbCB0aGUgcmVxdWVzdGVkIGNodW5rcyBvdXQgb2YgdGhlIGJ1ZmZlciBhbmQgcmV0dXJuLlxuXG4gIC8vIGlmIHdlIG5lZWQgYSByZWFkYWJsZSBldmVudCwgdGhlbiB3ZSBuZWVkIHRvIGRvIHNvbWUgcmVhZGluZy5cbiAgdmFyIGRvUmVhZCA9IHN0YXRlLm5lZWRSZWFkYWJsZTtcbiAgZGVidWcoJ25lZWQgcmVhZGFibGUnLCBkb1JlYWQpO1xuXG4gIC8vIGlmIHdlIGN1cnJlbnRseSBoYXZlIGxlc3MgdGhhbiB0aGUgaGlnaFdhdGVyTWFyaywgdGhlbiBhbHNvIHJlYWQgc29tZVxuICBpZiAoc3RhdGUubGVuZ3RoID09PSAwIHx8IHN0YXRlLmxlbmd0aCAtIG4gPCBzdGF0ZS5oaWdoV2F0ZXJNYXJrKSB7XG4gICAgZG9SZWFkID0gdHJ1ZTtcbiAgICBkZWJ1ZygnbGVuZ3RoIGxlc3MgdGhhbiB3YXRlcm1hcmsnLCBkb1JlYWQpO1xuICB9XG5cbiAgLy8gaG93ZXZlciwgaWYgd2UndmUgZW5kZWQsIHRoZW4gdGhlcmUncyBubyBwb2ludCwgYW5kIGlmIHdlJ3JlIGFscmVhZHlcbiAgLy8gcmVhZGluZywgdGhlbiBpdCdzIHVubmVjZXNzYXJ5LlxuICBpZiAoc3RhdGUuZW5kZWQgfHwgc3RhdGUucmVhZGluZykge1xuICAgIGRvUmVhZCA9IGZhbHNlO1xuICAgIGRlYnVnKCdyZWFkaW5nIG9yIGVuZGVkJywgZG9SZWFkKTtcbiAgfSBlbHNlIGlmIChkb1JlYWQpIHtcbiAgICBkZWJ1ZygnZG8gcmVhZCcpO1xuICAgIHN0YXRlLnJlYWRpbmcgPSB0cnVlO1xuICAgIHN0YXRlLnN5bmMgPSB0cnVlO1xuICAgIC8vIGlmIHRoZSBsZW5ndGggaXMgY3VycmVudGx5IHplcm8sIHRoZW4gd2UgKm5lZWQqIGEgcmVhZGFibGUgZXZlbnQuXG4gICAgaWYgKHN0YXRlLmxlbmd0aCA9PT0gMCkgc3RhdGUubmVlZFJlYWRhYmxlID0gdHJ1ZTtcbiAgICAvLyBjYWxsIGludGVybmFsIHJlYWQgbWV0aG9kXG4gICAgdGhpcy5fcmVhZChzdGF0ZS5oaWdoV2F0ZXJNYXJrKTtcbiAgICBzdGF0ZS5zeW5jID0gZmFsc2U7XG4gICAgLy8gSWYgX3JlYWQgcHVzaGVkIGRhdGEgc3luY2hyb25vdXNseSwgdGhlbiBgcmVhZGluZ2Agd2lsbCBiZSBmYWxzZSxcbiAgICAvLyBhbmQgd2UgbmVlZCB0byByZS1ldmFsdWF0ZSBob3cgbXVjaCBkYXRhIHdlIGNhbiByZXR1cm4gdG8gdGhlIHVzZXIuXG4gICAgaWYgKCFzdGF0ZS5yZWFkaW5nKSBuID0gaG93TXVjaFRvUmVhZChuT3JpZywgc3RhdGUpO1xuICB9XG5cbiAgdmFyIHJldDtcbiAgaWYgKG4gPiAwKSByZXQgPSBmcm9tTGlzdChuLCBzdGF0ZSk7ZWxzZSByZXQgPSBudWxsO1xuXG4gIGlmIChyZXQgPT09IG51bGwpIHtcbiAgICBzdGF0ZS5uZWVkUmVhZGFibGUgPSB0cnVlO1xuICAgIG4gPSAwO1xuICB9IGVsc2Uge1xuICAgIHN0YXRlLmxlbmd0aCAtPSBuO1xuICB9XG5cbiAgaWYgKHN0YXRlLmxlbmd0aCA9PT0gMCkge1xuICAgIC8vIElmIHdlIGhhdmUgbm90aGluZyBpbiB0aGUgYnVmZmVyLCB0aGVuIHdlIHdhbnQgdG8ga25vd1xuICAgIC8vIGFzIHNvb24gYXMgd2UgKmRvKiBnZXQgc29tZXRoaW5nIGludG8gdGhlIGJ1ZmZlci5cbiAgICBpZiAoIXN0YXRlLmVuZGVkKSBzdGF0ZS5uZWVkUmVhZGFibGUgPSB0cnVlO1xuXG4gICAgLy8gSWYgd2UgdHJpZWQgdG8gcmVhZCgpIHBhc3QgdGhlIEVPRiwgdGhlbiBlbWl0IGVuZCBvbiB0aGUgbmV4dCB0aWNrLlxuICAgIGlmIChuT3JpZyAhPT0gbiAmJiBzdGF0ZS5lbmRlZCkgZW5kUmVhZGFibGUodGhpcyk7XG4gIH1cblxuICBpZiAocmV0ICE9PSBudWxsKSB0aGlzLmVtaXQoJ2RhdGEnLCByZXQpO1xuXG4gIHJldHVybiByZXQ7XG59O1xuXG5mdW5jdGlvbiBjaHVua0ludmFsaWQoc3RhdGUsIGNodW5rKSB7XG4gIHZhciBlciA9IG51bGw7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKGNodW5rKSAmJiB0eXBlb2YgY2h1bmsgIT09ICdzdHJpbmcnICYmIGNodW5rICE9PSBudWxsICYmIGNodW5rICE9PSB1bmRlZmluZWQgJiYgIXN0YXRlLm9iamVjdE1vZGUpIHtcbiAgICBlciA9IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgbm9uLXN0cmluZy9idWZmZXIgY2h1bmsnKTtcbiAgfVxuICByZXR1cm4gZXI7XG59XG5cbmZ1bmN0aW9uIG9uRW9mQ2h1bmsoc3RyZWFtLCBzdGF0ZSkge1xuICBpZiAoc3RhdGUuZW5kZWQpIHJldHVybjtcbiAgaWYgKHN0YXRlLmRlY29kZXIpIHtcbiAgICB2YXIgY2h1bmsgPSBzdGF0ZS5kZWNvZGVyLmVuZCgpO1xuICAgIGlmIChjaHVuayAmJiBjaHVuay5sZW5ndGgpIHtcbiAgICAgIHN0YXRlLmJ1ZmZlci5wdXNoKGNodW5rKTtcbiAgICAgIHN0YXRlLmxlbmd0aCArPSBzdGF0ZS5vYmplY3RNb2RlID8gMSA6IGNodW5rLmxlbmd0aDtcbiAgICB9XG4gIH1cbiAgc3RhdGUuZW5kZWQgPSB0cnVlO1xuXG4gIC8vIGVtaXQgJ3JlYWRhYmxlJyBub3cgdG8gbWFrZSBzdXJlIGl0IGdldHMgcGlja2VkIHVwLlxuICBlbWl0UmVhZGFibGUoc3RyZWFtKTtcbn1cblxuLy8gRG9uJ3QgZW1pdCByZWFkYWJsZSByaWdodCBhd2F5IGluIHN5bmMgbW9kZSwgYmVjYXVzZSB0aGlzIGNhbiB0cmlnZ2VyXG4vLyBhbm90aGVyIHJlYWQoKSBjYWxsID0+IHN0YWNrIG92ZXJmbG93LiAgVGhpcyB3YXksIGl0IG1pZ2h0IHRyaWdnZXJcbi8vIGEgbmV4dFRpY2sgcmVjdXJzaW9uIHdhcm5pbmcsIGJ1dCB0aGF0J3Mgbm90IHNvIGJhZC5cbmZ1bmN0aW9uIGVtaXRSZWFkYWJsZShzdHJlYW0pIHtcbiAgdmFyIHN0YXRlID0gc3RyZWFtLl9yZWFkYWJsZVN0YXRlO1xuICBzdGF0ZS5uZWVkUmVhZGFibGUgPSBmYWxzZTtcbiAgaWYgKCFzdGF0ZS5lbWl0dGVkUmVhZGFibGUpIHtcbiAgICBkZWJ1ZygnZW1pdFJlYWRhYmxlJywgc3RhdGUuZmxvd2luZyk7XG4gICAgc3RhdGUuZW1pdHRlZFJlYWRhYmxlID0gdHJ1ZTtcbiAgICBpZiAoc3RhdGUuc3luYykgcHJvY2Vzc05leHRUaWNrKGVtaXRSZWFkYWJsZV8sIHN0cmVhbSk7ZWxzZSBlbWl0UmVhZGFibGVfKHN0cmVhbSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZW1pdFJlYWRhYmxlXyhzdHJlYW0pIHtcbiAgZGVidWcoJ2VtaXQgcmVhZGFibGUnKTtcbiAgc3RyZWFtLmVtaXQoJ3JlYWRhYmxlJyk7XG4gIGZsb3coc3RyZWFtKTtcbn1cblxuLy8gYXQgdGhpcyBwb2ludCwgdGhlIHVzZXIgaGFzIHByZXN1bWFibHkgc2VlbiB0aGUgJ3JlYWRhYmxlJyBldmVudCxcbi8vIGFuZCBjYWxsZWQgcmVhZCgpIHRvIGNvbnN1bWUgc29tZSBkYXRhLiAgdGhhdCBtYXkgaGF2ZSB0cmlnZ2VyZWRcbi8vIGluIHR1cm4gYW5vdGhlciBfcmVhZChuKSBjYWxsLCBpbiB3aGljaCBjYXNlIHJlYWRpbmcgPSB0cnVlIGlmXG4vLyBpdCdzIGluIHByb2dyZXNzLlxuLy8gSG93ZXZlciwgaWYgd2UncmUgbm90IGVuZGVkLCBvciByZWFkaW5nLCBhbmQgdGhlIGxlbmd0aCA8IGh3bSxcbi8vIHRoZW4gZ28gYWhlYWQgYW5kIHRyeSB0byByZWFkIHNvbWUgbW9yZSBwcmVlbXB0aXZlbHkuXG5mdW5jdGlvbiBtYXliZVJlYWRNb3JlKHN0cmVhbSwgc3RhdGUpIHtcbiAgaWYgKCFzdGF0ZS5yZWFkaW5nTW9yZSkge1xuICAgIHN0YXRlLnJlYWRpbmdNb3JlID0gdHJ1ZTtcbiAgICBwcm9jZXNzTmV4dFRpY2sobWF5YmVSZWFkTW9yZV8sIHN0cmVhbSwgc3RhdGUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1heWJlUmVhZE1vcmVfKHN0cmVhbSwgc3RhdGUpIHtcbiAgdmFyIGxlbiA9IHN0YXRlLmxlbmd0aDtcbiAgd2hpbGUgKCFzdGF0ZS5yZWFkaW5nICYmICFzdGF0ZS5mbG93aW5nICYmICFzdGF0ZS5lbmRlZCAmJiBzdGF0ZS5sZW5ndGggPCBzdGF0ZS5oaWdoV2F0ZXJNYXJrKSB7XG4gICAgZGVidWcoJ21heWJlUmVhZE1vcmUgcmVhZCAwJyk7XG4gICAgc3RyZWFtLnJlYWQoMCk7XG4gICAgaWYgKGxlbiA9PT0gc3RhdGUubGVuZ3RoKVxuICAgICAgLy8gZGlkbid0IGdldCBhbnkgZGF0YSwgc3RvcCBzcGlubmluZy5cbiAgICAgIGJyZWFrO2Vsc2UgbGVuID0gc3RhdGUubGVuZ3RoO1xuICB9XG4gIHN0YXRlLnJlYWRpbmdNb3JlID0gZmFsc2U7XG59XG5cbi8vIGFic3RyYWN0IG1ldGhvZC4gIHRvIGJlIG92ZXJyaWRkZW4gaW4gc3BlY2lmaWMgaW1wbGVtZW50YXRpb24gY2xhc3Nlcy5cbi8vIGNhbGwgY2IoZXIsIGRhdGEpIHdoZXJlIGRhdGEgaXMgPD0gbiBpbiBsZW5ndGguXG4vLyBmb3IgdmlydHVhbCAobm9uLXN0cmluZywgbm9uLWJ1ZmZlcikgc3RyZWFtcywgXCJsZW5ndGhcIiBpcyBzb21ld2hhdFxuLy8gYXJiaXRyYXJ5LCBhbmQgcGVyaGFwcyBub3QgdmVyeSBtZWFuaW5nZnVsLlxuUmVhZGFibGUucHJvdG90eXBlLl9yZWFkID0gZnVuY3Rpb24gKG4pIHtcbiAgdGhpcy5lbWl0KCdlcnJvcicsIG5ldyBFcnJvcignX3JlYWQoKSBpcyBub3QgaW1wbGVtZW50ZWQnKSk7XG59O1xuXG5SZWFkYWJsZS5wcm90b3R5cGUucGlwZSA9IGZ1bmN0aW9uIChkZXN0LCBwaXBlT3B0cykge1xuICB2YXIgc3JjID0gdGhpcztcbiAgdmFyIHN0YXRlID0gdGhpcy5fcmVhZGFibGVTdGF0ZTtcblxuICBzd2l0Y2ggKHN0YXRlLnBpcGVzQ291bnQpIHtcbiAgICBjYXNlIDA6XG4gICAgICBzdGF0ZS5waXBlcyA9IGRlc3Q7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDE6XG4gICAgICBzdGF0ZS5waXBlcyA9IFtzdGF0ZS5waXBlcywgZGVzdF07XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgc3RhdGUucGlwZXMucHVzaChkZXN0KTtcbiAgICAgIGJyZWFrO1xuICB9XG4gIHN0YXRlLnBpcGVzQ291bnQgKz0gMTtcbiAgZGVidWcoJ3BpcGUgY291bnQ9JWQgb3B0cz0laicsIHN0YXRlLnBpcGVzQ291bnQsIHBpcGVPcHRzKTtcblxuICB2YXIgZG9FbmQgPSAoIXBpcGVPcHRzIHx8IHBpcGVPcHRzLmVuZCAhPT0gZmFsc2UpICYmIGRlc3QgIT09IHByb2Nlc3Muc3Rkb3V0ICYmIGRlc3QgIT09IHByb2Nlc3Muc3RkZXJyO1xuXG4gIHZhciBlbmRGbiA9IGRvRW5kID8gb25lbmQgOiBjbGVhbnVwO1xuICBpZiAoc3RhdGUuZW5kRW1pdHRlZCkgcHJvY2Vzc05leHRUaWNrKGVuZEZuKTtlbHNlIHNyYy5vbmNlKCdlbmQnLCBlbmRGbik7XG5cbiAgZGVzdC5vbigndW5waXBlJywgb251bnBpcGUpO1xuICBmdW5jdGlvbiBvbnVucGlwZShyZWFkYWJsZSkge1xuICAgIGRlYnVnKCdvbnVucGlwZScpO1xuICAgIGlmIChyZWFkYWJsZSA9PT0gc3JjKSB7XG4gICAgICBjbGVhbnVwKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb25lbmQoKSB7XG4gICAgZGVidWcoJ29uZW5kJyk7XG4gICAgZGVzdC5lbmQoKTtcbiAgfVxuXG4gIC8vIHdoZW4gdGhlIGRlc3QgZHJhaW5zLCBpdCByZWR1Y2VzIHRoZSBhd2FpdERyYWluIGNvdW50ZXJcbiAgLy8gb24gdGhlIHNvdXJjZS4gIFRoaXMgd291bGQgYmUgbW9yZSBlbGVnYW50IHdpdGggYSAub25jZSgpXG4gIC8vIGhhbmRsZXIgaW4gZmxvdygpLCBidXQgYWRkaW5nIGFuZCByZW1vdmluZyByZXBlYXRlZGx5IGlzXG4gIC8vIHRvbyBzbG93LlxuICB2YXIgb25kcmFpbiA9IHBpcGVPbkRyYWluKHNyYyk7XG4gIGRlc3Qub24oJ2RyYWluJywgb25kcmFpbik7XG5cbiAgdmFyIGNsZWFuZWRVcCA9IGZhbHNlO1xuICBmdW5jdGlvbiBjbGVhbnVwKCkge1xuICAgIGRlYnVnKCdjbGVhbnVwJyk7XG4gICAgLy8gY2xlYW51cCBldmVudCBoYW5kbGVycyBvbmNlIHRoZSBwaXBlIGlzIGJyb2tlblxuICAgIGRlc3QucmVtb3ZlTGlzdGVuZXIoJ2Nsb3NlJywgb25jbG9zZSk7XG4gICAgZGVzdC5yZW1vdmVMaXN0ZW5lcignZmluaXNoJywgb25maW5pc2gpO1xuICAgIGRlc3QucmVtb3ZlTGlzdGVuZXIoJ2RyYWluJywgb25kcmFpbik7XG4gICAgZGVzdC5yZW1vdmVMaXN0ZW5lcignZXJyb3InLCBvbmVycm9yKTtcbiAgICBkZXN0LnJlbW92ZUxpc3RlbmVyKCd1bnBpcGUnLCBvbnVucGlwZSk7XG4gICAgc3JjLnJlbW92ZUxpc3RlbmVyKCdlbmQnLCBvbmVuZCk7XG4gICAgc3JjLnJlbW92ZUxpc3RlbmVyKCdlbmQnLCBjbGVhbnVwKTtcbiAgICBzcmMucmVtb3ZlTGlzdGVuZXIoJ2RhdGEnLCBvbmRhdGEpO1xuXG4gICAgY2xlYW5lZFVwID0gdHJ1ZTtcblxuICAgIC8vIGlmIHRoZSByZWFkZXIgaXMgd2FpdGluZyBmb3IgYSBkcmFpbiBldmVudCBmcm9tIHRoaXNcbiAgICAvLyBzcGVjaWZpYyB3cml0ZXIsIHRoZW4gaXQgd291bGQgY2F1c2UgaXQgdG8gbmV2ZXIgc3RhcnRcbiAgICAvLyBmbG93aW5nIGFnYWluLlxuICAgIC8vIFNvLCBpZiB0aGlzIGlzIGF3YWl0aW5nIGEgZHJhaW4sIHRoZW4gd2UganVzdCBjYWxsIGl0IG5vdy5cbiAgICAvLyBJZiB3ZSBkb24ndCBrbm93LCB0aGVuIGFzc3VtZSB0aGF0IHdlIGFyZSB3YWl0aW5nIGZvciBvbmUuXG4gICAgaWYgKHN0YXRlLmF3YWl0RHJhaW4gJiYgKCFkZXN0Ll93cml0YWJsZVN0YXRlIHx8IGRlc3QuX3dyaXRhYmxlU3RhdGUubmVlZERyYWluKSkgb25kcmFpbigpO1xuICB9XG5cbiAgLy8gSWYgdGhlIHVzZXIgcHVzaGVzIG1vcmUgZGF0YSB3aGlsZSB3ZSdyZSB3cml0aW5nIHRvIGRlc3QgdGhlbiB3ZSdsbCBlbmQgdXBcbiAgLy8gaW4gb25kYXRhIGFnYWluLiBIb3dldmVyLCB3ZSBvbmx5IHdhbnQgdG8gaW5jcmVhc2UgYXdhaXREcmFpbiBvbmNlIGJlY2F1c2VcbiAgLy8gZGVzdCB3aWxsIG9ubHkgZW1pdCBvbmUgJ2RyYWluJyBldmVudCBmb3IgdGhlIG11bHRpcGxlIHdyaXRlcy5cbiAgLy8gPT4gSW50cm9kdWNlIGEgZ3VhcmQgb24gaW5jcmVhc2luZyBhd2FpdERyYWluLlxuICB2YXIgaW5jcmVhc2VkQXdhaXREcmFpbiA9IGZhbHNlO1xuICBzcmMub24oJ2RhdGEnLCBvbmRhdGEpO1xuICBmdW5jdGlvbiBvbmRhdGEoY2h1bmspIHtcbiAgICBkZWJ1Zygnb25kYXRhJyk7XG4gICAgaW5jcmVhc2VkQXdhaXREcmFpbiA9IGZhbHNlO1xuICAgIHZhciByZXQgPSBkZXN0LndyaXRlKGNodW5rKTtcbiAgICBpZiAoZmFsc2UgPT09IHJldCAmJiAhaW5jcmVhc2VkQXdhaXREcmFpbikge1xuICAgICAgLy8gSWYgdGhlIHVzZXIgdW5waXBlZCBkdXJpbmcgYGRlc3Qud3JpdGUoKWAsIGl0IGlzIHBvc3NpYmxlXG4gICAgICAvLyB0byBnZXQgc3R1Y2sgaW4gYSBwZXJtYW5lbnRseSBwYXVzZWQgc3RhdGUgaWYgdGhhdCB3cml0ZVxuICAgICAgLy8gYWxzbyByZXR1cm5lZCBmYWxzZS5cbiAgICAgIC8vID0+IENoZWNrIHdoZXRoZXIgYGRlc3RgIGlzIHN0aWxsIGEgcGlwaW5nIGRlc3RpbmF0aW9uLlxuICAgICAgaWYgKChzdGF0ZS5waXBlc0NvdW50ID09PSAxICYmIHN0YXRlLnBpcGVzID09PSBkZXN0IHx8IHN0YXRlLnBpcGVzQ291bnQgPiAxICYmIGluZGV4T2Yoc3RhdGUucGlwZXMsIGRlc3QpICE9PSAtMSkgJiYgIWNsZWFuZWRVcCkge1xuICAgICAgICBkZWJ1ZygnZmFsc2Ugd3JpdGUgcmVzcG9uc2UsIHBhdXNlJywgc3JjLl9yZWFkYWJsZVN0YXRlLmF3YWl0RHJhaW4pO1xuICAgICAgICBzcmMuX3JlYWRhYmxlU3RhdGUuYXdhaXREcmFpbisrO1xuICAgICAgICBpbmNyZWFzZWRBd2FpdERyYWluID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHNyYy5wYXVzZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGlmIHRoZSBkZXN0IGhhcyBhbiBlcnJvciwgdGhlbiBzdG9wIHBpcGluZyBpbnRvIGl0LlxuICAvLyBob3dldmVyLCBkb24ndCBzdXBwcmVzcyB0aGUgdGhyb3dpbmcgYmVoYXZpb3IgZm9yIHRoaXMuXG4gIGZ1bmN0aW9uIG9uZXJyb3IoZXIpIHtcbiAgICBkZWJ1Zygnb25lcnJvcicsIGVyKTtcbiAgICB1bnBpcGUoKTtcbiAgICBkZXN0LnJlbW92ZUxpc3RlbmVyKCdlcnJvcicsIG9uZXJyb3IpO1xuICAgIGlmIChFRWxpc3RlbmVyQ291bnQoZGVzdCwgJ2Vycm9yJykgPT09IDApIGRlc3QuZW1pdCgnZXJyb3InLCBlcik7XG4gIH1cblxuICAvLyBNYWtlIHN1cmUgb3VyIGVycm9yIGhhbmRsZXIgaXMgYXR0YWNoZWQgYmVmb3JlIHVzZXJsYW5kIG9uZXMuXG4gIHByZXBlbmRMaXN0ZW5lcihkZXN0LCAnZXJyb3InLCBvbmVycm9yKTtcblxuICAvLyBCb3RoIGNsb3NlIGFuZCBmaW5pc2ggc2hvdWxkIHRyaWdnZXIgdW5waXBlLCBidXQgb25seSBvbmNlLlxuICBmdW5jdGlvbiBvbmNsb3NlKCkge1xuICAgIGRlc3QucmVtb3ZlTGlzdGVuZXIoJ2ZpbmlzaCcsIG9uZmluaXNoKTtcbiAgICB1bnBpcGUoKTtcbiAgfVxuICBkZXN0Lm9uY2UoJ2Nsb3NlJywgb25jbG9zZSk7XG4gIGZ1bmN0aW9uIG9uZmluaXNoKCkge1xuICAgIGRlYnVnKCdvbmZpbmlzaCcpO1xuICAgIGRlc3QucmVtb3ZlTGlzdGVuZXIoJ2Nsb3NlJywgb25jbG9zZSk7XG4gICAgdW5waXBlKCk7XG4gIH1cbiAgZGVzdC5vbmNlKCdmaW5pc2gnLCBvbmZpbmlzaCk7XG5cbiAgZnVuY3Rpb24gdW5waXBlKCkge1xuICAgIGRlYnVnKCd1bnBpcGUnKTtcbiAgICBzcmMudW5waXBlKGRlc3QpO1xuICB9XG5cbiAgLy8gdGVsbCB0aGUgZGVzdCB0aGF0IGl0J3MgYmVpbmcgcGlwZWQgdG9cbiAgZGVzdC5lbWl0KCdwaXBlJywgc3JjKTtcblxuICAvLyBzdGFydCB0aGUgZmxvdyBpZiBpdCBoYXNuJ3QgYmVlbiBzdGFydGVkIGFscmVhZHkuXG4gIGlmICghc3RhdGUuZmxvd2luZykge1xuICAgIGRlYnVnKCdwaXBlIHJlc3VtZScpO1xuICAgIHNyYy5yZXN1bWUoKTtcbiAgfVxuXG4gIHJldHVybiBkZXN0O1xufTtcblxuZnVuY3Rpb24gcGlwZU9uRHJhaW4oc3JjKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN0YXRlID0gc3JjLl9yZWFkYWJsZVN0YXRlO1xuICAgIGRlYnVnKCdwaXBlT25EcmFpbicsIHN0YXRlLmF3YWl0RHJhaW4pO1xuICAgIGlmIChzdGF0ZS5hd2FpdERyYWluKSBzdGF0ZS5hd2FpdERyYWluLS07XG4gICAgaWYgKHN0YXRlLmF3YWl0RHJhaW4gPT09IDAgJiYgRUVsaXN0ZW5lckNvdW50KHNyYywgJ2RhdGEnKSkge1xuICAgICAgc3RhdGUuZmxvd2luZyA9IHRydWU7XG4gICAgICBmbG93KHNyYyk7XG4gICAgfVxuICB9O1xufVxuXG5SZWFkYWJsZS5wcm90b3R5cGUudW5waXBlID0gZnVuY3Rpb24gKGRlc3QpIHtcbiAgdmFyIHN0YXRlID0gdGhpcy5fcmVhZGFibGVTdGF0ZTtcblxuICAvLyBpZiB3ZSdyZSBub3QgcGlwaW5nIGFueXdoZXJlLCB0aGVuIGRvIG5vdGhpbmcuXG4gIGlmIChzdGF0ZS5waXBlc0NvdW50ID09PSAwKSByZXR1cm4gdGhpcztcblxuICAvLyBqdXN0IG9uZSBkZXN0aW5hdGlvbi4gIG1vc3QgY29tbW9uIGNhc2UuXG4gIGlmIChzdGF0ZS5waXBlc0NvdW50ID09PSAxKSB7XG4gICAgLy8gcGFzc2VkIGluIG9uZSwgYnV0IGl0J3Mgbm90IHRoZSByaWdodCBvbmUuXG4gICAgaWYgKGRlc3QgJiYgZGVzdCAhPT0gc3RhdGUucGlwZXMpIHJldHVybiB0aGlzO1xuXG4gICAgaWYgKCFkZXN0KSBkZXN0ID0gc3RhdGUucGlwZXM7XG5cbiAgICAvLyBnb3QgYSBtYXRjaC5cbiAgICBzdGF0ZS5waXBlcyA9IG51bGw7XG4gICAgc3RhdGUucGlwZXNDb3VudCA9IDA7XG4gICAgc3RhdGUuZmxvd2luZyA9IGZhbHNlO1xuICAgIGlmIChkZXN0KSBkZXN0LmVtaXQoJ3VucGlwZScsIHRoaXMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gc2xvdyBjYXNlLiBtdWx0aXBsZSBwaXBlIGRlc3RpbmF0aW9ucy5cblxuICBpZiAoIWRlc3QpIHtcbiAgICAvLyByZW1vdmUgYWxsLlxuICAgIHZhciBkZXN0cyA9IHN0YXRlLnBpcGVzO1xuICAgIHZhciBsZW4gPSBzdGF0ZS5waXBlc0NvdW50O1xuICAgIHN0YXRlLnBpcGVzID0gbnVsbDtcbiAgICBzdGF0ZS5waXBlc0NvdW50ID0gMDtcbiAgICBzdGF0ZS5mbG93aW5nID0gZmFsc2U7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBkZXN0c1tpXS5lbWl0KCd1bnBpcGUnLCB0aGlzKTtcbiAgICB9cmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyB0cnkgdG8gZmluZCB0aGUgcmlnaHQgb25lLlxuICB2YXIgaW5kZXggPSBpbmRleE9mKHN0YXRlLnBpcGVzLCBkZXN0KTtcbiAgaWYgKGluZGV4ID09PSAtMSkgcmV0dXJuIHRoaXM7XG5cbiAgc3RhdGUucGlwZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgc3RhdGUucGlwZXNDb3VudCAtPSAxO1xuICBpZiAoc3RhdGUucGlwZXNDb3VudCA9PT0gMSkgc3RhdGUucGlwZXMgPSBzdGF0ZS5waXBlc1swXTtcblxuICBkZXN0LmVtaXQoJ3VucGlwZScsIHRoaXMpO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLy8gc2V0IHVwIGRhdGEgZXZlbnRzIGlmIHRoZXkgYXJlIGFza2VkIGZvclxuLy8gRW5zdXJlIHJlYWRhYmxlIGxpc3RlbmVycyBldmVudHVhbGx5IGdldCBzb21ldGhpbmdcblJlYWRhYmxlLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uIChldiwgZm4pIHtcbiAgdmFyIHJlcyA9IFN0cmVhbS5wcm90b3R5cGUub24uY2FsbCh0aGlzLCBldiwgZm4pO1xuXG4gIGlmIChldiA9PT0gJ2RhdGEnKSB7XG4gICAgLy8gU3RhcnQgZmxvd2luZyBvbiBuZXh0IHRpY2sgaWYgc3RyZWFtIGlzbid0IGV4cGxpY2l0bHkgcGF1c2VkXG4gICAgaWYgKHRoaXMuX3JlYWRhYmxlU3RhdGUuZmxvd2luZyAhPT0gZmFsc2UpIHRoaXMucmVzdW1lKCk7XG4gIH0gZWxzZSBpZiAoZXYgPT09ICdyZWFkYWJsZScpIHtcbiAgICB2YXIgc3RhdGUgPSB0aGlzLl9yZWFkYWJsZVN0YXRlO1xuICAgIGlmICghc3RhdGUuZW5kRW1pdHRlZCAmJiAhc3RhdGUucmVhZGFibGVMaXN0ZW5pbmcpIHtcbiAgICAgIHN0YXRlLnJlYWRhYmxlTGlzdGVuaW5nID0gc3RhdGUubmVlZFJlYWRhYmxlID0gdHJ1ZTtcbiAgICAgIHN0YXRlLmVtaXR0ZWRSZWFkYWJsZSA9IGZhbHNlO1xuICAgICAgaWYgKCFzdGF0ZS5yZWFkaW5nKSB7XG4gICAgICAgIHByb2Nlc3NOZXh0VGljayhuUmVhZGluZ05leHRUaWNrLCB0aGlzKTtcbiAgICAgIH0gZWxzZSBpZiAoc3RhdGUubGVuZ3RoKSB7XG4gICAgICAgIGVtaXRSZWFkYWJsZSh0aGlzLCBzdGF0ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlcztcbn07XG5SZWFkYWJsZS5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBSZWFkYWJsZS5wcm90b3R5cGUub247XG5cbmZ1bmN0aW9uIG5SZWFkaW5nTmV4dFRpY2soc2VsZikge1xuICBkZWJ1ZygncmVhZGFibGUgbmV4dHRpY2sgcmVhZCAwJyk7XG4gIHNlbGYucmVhZCgwKTtcbn1cblxuLy8gcGF1c2UoKSBhbmQgcmVzdW1lKCkgYXJlIHJlbW5hbnRzIG9mIHRoZSBsZWdhY3kgcmVhZGFibGUgc3RyZWFtIEFQSVxuLy8gSWYgdGhlIHVzZXIgdXNlcyB0aGVtLCB0aGVuIHN3aXRjaCBpbnRvIG9sZCBtb2RlLlxuUmVhZGFibGUucHJvdG90eXBlLnJlc3VtZSA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHN0YXRlID0gdGhpcy5fcmVhZGFibGVTdGF0ZTtcbiAgaWYgKCFzdGF0ZS5mbG93aW5nKSB7XG4gICAgZGVidWcoJ3Jlc3VtZScpO1xuICAgIHN0YXRlLmZsb3dpbmcgPSB0cnVlO1xuICAgIHJlc3VtZSh0aGlzLCBzdGF0ZSk7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5mdW5jdGlvbiByZXN1bWUoc3RyZWFtLCBzdGF0ZSkge1xuICBpZiAoIXN0YXRlLnJlc3VtZVNjaGVkdWxlZCkge1xuICAgIHN0YXRlLnJlc3VtZVNjaGVkdWxlZCA9IHRydWU7XG4gICAgcHJvY2Vzc05leHRUaWNrKHJlc3VtZV8sIHN0cmVhbSwgc3RhdGUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlc3VtZV8oc3RyZWFtLCBzdGF0ZSkge1xuICBpZiAoIXN0YXRlLnJlYWRpbmcpIHtcbiAgICBkZWJ1ZygncmVzdW1lIHJlYWQgMCcpO1xuICAgIHN0cmVhbS5yZWFkKDApO1xuICB9XG5cbiAgc3RhdGUucmVzdW1lU2NoZWR1bGVkID0gZmFsc2U7XG4gIHN0YXRlLmF3YWl0RHJhaW4gPSAwO1xuICBzdHJlYW0uZW1pdCgncmVzdW1lJyk7XG4gIGZsb3coc3RyZWFtKTtcbiAgaWYgKHN0YXRlLmZsb3dpbmcgJiYgIXN0YXRlLnJlYWRpbmcpIHN0cmVhbS5yZWFkKDApO1xufVxuXG5SZWFkYWJsZS5wcm90b3R5cGUucGF1c2UgPSBmdW5jdGlvbiAoKSB7XG4gIGRlYnVnKCdjYWxsIHBhdXNlIGZsb3dpbmc9JWonLCB0aGlzLl9yZWFkYWJsZVN0YXRlLmZsb3dpbmcpO1xuICBpZiAoZmFsc2UgIT09IHRoaXMuX3JlYWRhYmxlU3RhdGUuZmxvd2luZykge1xuICAgIGRlYnVnKCdwYXVzZScpO1xuICAgIHRoaXMuX3JlYWRhYmxlU3RhdGUuZmxvd2luZyA9IGZhbHNlO1xuICAgIHRoaXMuZW1pdCgncGF1c2UnKTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn07XG5cbmZ1bmN0aW9uIGZsb3coc3RyZWFtKSB7XG4gIHZhciBzdGF0ZSA9IHN0cmVhbS5fcmVhZGFibGVTdGF0ZTtcbiAgZGVidWcoJ2Zsb3cnLCBzdGF0ZS5mbG93aW5nKTtcbiAgd2hpbGUgKHN0YXRlLmZsb3dpbmcgJiYgc3RyZWFtLnJlYWQoKSAhPT0gbnVsbCkge31cbn1cblxuLy8gd3JhcCBhbiBvbGQtc3R5bGUgc3RyZWFtIGFzIHRoZSBhc3luYyBkYXRhIHNvdXJjZS5cbi8vIFRoaXMgaXMgKm5vdCogcGFydCBvZiB0aGUgcmVhZGFibGUgc3RyZWFtIGludGVyZmFjZS5cbi8vIEl0IGlzIGFuIHVnbHkgdW5mb3J0dW5hdGUgbWVzcyBvZiBoaXN0b3J5LlxuUmVhZGFibGUucHJvdG90eXBlLndyYXAgPSBmdW5jdGlvbiAoc3RyZWFtKSB7XG4gIHZhciBzdGF0ZSA9IHRoaXMuX3JlYWRhYmxlU3RhdGU7XG4gIHZhciBwYXVzZWQgPSBmYWxzZTtcblxuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHN0cmVhbS5vbignZW5kJywgZnVuY3Rpb24gKCkge1xuICAgIGRlYnVnKCd3cmFwcGVkIGVuZCcpO1xuICAgIGlmIChzdGF0ZS5kZWNvZGVyICYmICFzdGF0ZS5lbmRlZCkge1xuICAgICAgdmFyIGNodW5rID0gc3RhdGUuZGVjb2Rlci5lbmQoKTtcbiAgICAgIGlmIChjaHVuayAmJiBjaHVuay5sZW5ndGgpIHNlbGYucHVzaChjaHVuayk7XG4gICAgfVxuXG4gICAgc2VsZi5wdXNoKG51bGwpO1xuICB9KTtcblxuICBzdHJlYW0ub24oJ2RhdGEnLCBmdW5jdGlvbiAoY2h1bmspIHtcbiAgICBkZWJ1Zygnd3JhcHBlZCBkYXRhJyk7XG4gICAgaWYgKHN0YXRlLmRlY29kZXIpIGNodW5rID0gc3RhdGUuZGVjb2Rlci53cml0ZShjaHVuayk7XG5cbiAgICAvLyBkb24ndCBza2lwIG92ZXIgZmFsc3kgdmFsdWVzIGluIG9iamVjdE1vZGVcbiAgICBpZiAoc3RhdGUub2JqZWN0TW9kZSAmJiAoY2h1bmsgPT09IG51bGwgfHwgY2h1bmsgPT09IHVuZGVmaW5lZCkpIHJldHVybjtlbHNlIGlmICghc3RhdGUub2JqZWN0TW9kZSAmJiAoIWNodW5rIHx8ICFjaHVuay5sZW5ndGgpKSByZXR1cm47XG5cbiAgICB2YXIgcmV0ID0gc2VsZi5wdXNoKGNodW5rKTtcbiAgICBpZiAoIXJldCkge1xuICAgICAgcGF1c2VkID0gdHJ1ZTtcbiAgICAgIHN0cmVhbS5wYXVzZSgpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gcHJveHkgYWxsIHRoZSBvdGhlciBtZXRob2RzLlxuICAvLyBpbXBvcnRhbnQgd2hlbiB3cmFwcGluZyBmaWx0ZXJzIGFuZCBkdXBsZXhlcy5cbiAgZm9yICh2YXIgaSBpbiBzdHJlYW0pIHtcbiAgICBpZiAodGhpc1tpXSA9PT0gdW5kZWZpbmVkICYmIHR5cGVvZiBzdHJlYW1baV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXNbaV0gPSBmdW5jdGlvbiAobWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIHN0cmVhbVttZXRob2RdLmFwcGx5KHN0cmVhbSwgYXJndW1lbnRzKTtcbiAgICAgICAgfTtcbiAgICAgIH0oaSk7XG4gICAgfVxuICB9XG5cbiAgLy8gcHJveHkgY2VydGFpbiBpbXBvcnRhbnQgZXZlbnRzLlxuICB2YXIgZXZlbnRzID0gWydlcnJvcicsICdjbG9zZScsICdkZXN0cm95JywgJ3BhdXNlJywgJ3Jlc3VtZSddO1xuICBmb3JFYWNoKGV2ZW50cywgZnVuY3Rpb24gKGV2KSB7XG4gICAgc3RyZWFtLm9uKGV2LCBzZWxmLmVtaXQuYmluZChzZWxmLCBldikpO1xuICB9KTtcblxuICAvLyB3aGVuIHdlIHRyeSB0byBjb25zdW1lIHNvbWUgbW9yZSBieXRlcywgc2ltcGx5IHVucGF1c2UgdGhlXG4gIC8vIHVuZGVybHlpbmcgc3RyZWFtLlxuICBzZWxmLl9yZWFkID0gZnVuY3Rpb24gKG4pIHtcbiAgICBkZWJ1Zygnd3JhcHBlZCBfcmVhZCcsIG4pO1xuICAgIGlmIChwYXVzZWQpIHtcbiAgICAgIHBhdXNlZCA9IGZhbHNlO1xuICAgICAgc3RyZWFtLnJlc3VtZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gc2VsZjtcbn07XG5cbi8vIGV4cG9zZWQgZm9yIHRlc3RpbmcgcHVycG9zZXMgb25seS5cblJlYWRhYmxlLl9mcm9tTGlzdCA9IGZyb21MaXN0O1xuXG4vLyBQbHVjayBvZmYgbiBieXRlcyBmcm9tIGFuIGFycmF5IG9mIGJ1ZmZlcnMuXG4vLyBMZW5ndGggaXMgdGhlIGNvbWJpbmVkIGxlbmd0aHMgb2YgYWxsIHRoZSBidWZmZXJzIGluIHRoZSBsaXN0LlxuLy8gVGhpcyBmdW5jdGlvbiBpcyBkZXNpZ25lZCB0byBiZSBpbmxpbmFibGUsIHNvIHBsZWFzZSB0YWtlIGNhcmUgd2hlbiBtYWtpbmdcbi8vIGNoYW5nZXMgdG8gdGhlIGZ1bmN0aW9uIGJvZHkuXG5mdW5jdGlvbiBmcm9tTGlzdChuLCBzdGF0ZSkge1xuICAvLyBub3RoaW5nIGJ1ZmZlcmVkXG4gIGlmIChzdGF0ZS5sZW5ndGggPT09IDApIHJldHVybiBudWxsO1xuXG4gIHZhciByZXQ7XG4gIGlmIChzdGF0ZS5vYmplY3RNb2RlKSByZXQgPSBzdGF0ZS5idWZmZXIuc2hpZnQoKTtlbHNlIGlmICghbiB8fCBuID49IHN0YXRlLmxlbmd0aCkge1xuICAgIC8vIHJlYWQgaXQgYWxsLCB0cnVuY2F0ZSB0aGUgbGlzdFxuICAgIGlmIChzdGF0ZS5kZWNvZGVyKSByZXQgPSBzdGF0ZS5idWZmZXIuam9pbignJyk7ZWxzZSBpZiAoc3RhdGUuYnVmZmVyLmxlbmd0aCA9PT0gMSkgcmV0ID0gc3RhdGUuYnVmZmVyLmhlYWQuZGF0YTtlbHNlIHJldCA9IHN0YXRlLmJ1ZmZlci5jb25jYXQoc3RhdGUubGVuZ3RoKTtcbiAgICBzdGF0ZS5idWZmZXIuY2xlYXIoKTtcbiAgfSBlbHNlIHtcbiAgICAvLyByZWFkIHBhcnQgb2YgbGlzdFxuICAgIHJldCA9IGZyb21MaXN0UGFydGlhbChuLCBzdGF0ZS5idWZmZXIsIHN0YXRlLmRlY29kZXIpO1xuICB9XG5cbiAgcmV0dXJuIHJldDtcbn1cblxuLy8gRXh0cmFjdHMgb25seSBlbm91Z2ggYnVmZmVyZWQgZGF0YSB0byBzYXRpc2Z5IHRoZSBhbW91bnQgcmVxdWVzdGVkLlxuLy8gVGhpcyBmdW5jdGlvbiBpcyBkZXNpZ25lZCB0byBiZSBpbmxpbmFibGUsIHNvIHBsZWFzZSB0YWtlIGNhcmUgd2hlbiBtYWtpbmdcbi8vIGNoYW5nZXMgdG8gdGhlIGZ1bmN0aW9uIGJvZHkuXG5mdW5jdGlvbiBmcm9tTGlzdFBhcnRpYWwobiwgbGlzdCwgaGFzU3RyaW5ncykge1xuICB2YXIgcmV0O1xuICBpZiAobiA8IGxpc3QuaGVhZC5kYXRhLmxlbmd0aCkge1xuICAgIC8vIHNsaWNlIGlzIHRoZSBzYW1lIGZvciBidWZmZXJzIGFuZCBzdHJpbmdzXG4gICAgcmV0ID0gbGlzdC5oZWFkLmRhdGEuc2xpY2UoMCwgbik7XG4gICAgbGlzdC5oZWFkLmRhdGEgPSBsaXN0LmhlYWQuZGF0YS5zbGljZShuKTtcbiAgfSBlbHNlIGlmIChuID09PSBsaXN0LmhlYWQuZGF0YS5sZW5ndGgpIHtcbiAgICAvLyBmaXJzdCBjaHVuayBpcyBhIHBlcmZlY3QgbWF0Y2hcbiAgICByZXQgPSBsaXN0LnNoaWZ0KCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gcmVzdWx0IHNwYW5zIG1vcmUgdGhhbiBvbmUgYnVmZmVyXG4gICAgcmV0ID0gaGFzU3RyaW5ncyA/IGNvcHlGcm9tQnVmZmVyU3RyaW5nKG4sIGxpc3QpIDogY29weUZyb21CdWZmZXIobiwgbGlzdCk7XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cblxuLy8gQ29waWVzIGEgc3BlY2lmaWVkIGFtb3VudCBvZiBjaGFyYWN0ZXJzIGZyb20gdGhlIGxpc3Qgb2YgYnVmZmVyZWQgZGF0YVxuLy8gY2h1bmtzLlxuLy8gVGhpcyBmdW5jdGlvbiBpcyBkZXNpZ25lZCB0byBiZSBpbmxpbmFibGUsIHNvIHBsZWFzZSB0YWtlIGNhcmUgd2hlbiBtYWtpbmdcbi8vIGNoYW5nZXMgdG8gdGhlIGZ1bmN0aW9uIGJvZHkuXG5mdW5jdGlvbiBjb3B5RnJvbUJ1ZmZlclN0cmluZyhuLCBsaXN0KSB7XG4gIHZhciBwID0gbGlzdC5oZWFkO1xuICB2YXIgYyA9IDE7XG4gIHZhciByZXQgPSBwLmRhdGE7XG4gIG4gLT0gcmV0Lmxlbmd0aDtcbiAgd2hpbGUgKHAgPSBwLm5leHQpIHtcbiAgICB2YXIgc3RyID0gcC5kYXRhO1xuICAgIHZhciBuYiA9IG4gPiBzdHIubGVuZ3RoID8gc3RyLmxlbmd0aCA6IG47XG4gICAgaWYgKG5iID09PSBzdHIubGVuZ3RoKSByZXQgKz0gc3RyO2Vsc2UgcmV0ICs9IHN0ci5zbGljZSgwLCBuKTtcbiAgICBuIC09IG5iO1xuICAgIGlmIChuID09PSAwKSB7XG4gICAgICBpZiAobmIgPT09IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgKytjO1xuICAgICAgICBpZiAocC5uZXh0KSBsaXN0LmhlYWQgPSBwLm5leHQ7ZWxzZSBsaXN0LmhlYWQgPSBsaXN0LnRhaWwgPSBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGlzdC5oZWFkID0gcDtcbiAgICAgICAgcC5kYXRhID0gc3RyLnNsaWNlKG5iKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICArK2M7XG4gIH1cbiAgbGlzdC5sZW5ndGggLT0gYztcbiAgcmV0dXJuIHJldDtcbn1cblxuLy8gQ29waWVzIGEgc3BlY2lmaWVkIGFtb3VudCBvZiBieXRlcyBmcm9tIHRoZSBsaXN0IG9mIGJ1ZmZlcmVkIGRhdGEgY2h1bmtzLlxuLy8gVGhpcyBmdW5jdGlvbiBpcyBkZXNpZ25lZCB0byBiZSBpbmxpbmFibGUsIHNvIHBsZWFzZSB0YWtlIGNhcmUgd2hlbiBtYWtpbmdcbi8vIGNoYW5nZXMgdG8gdGhlIGZ1bmN0aW9uIGJvZHkuXG5mdW5jdGlvbiBjb3B5RnJvbUJ1ZmZlcihuLCBsaXN0KSB7XG4gIHZhciByZXQgPSBidWZmZXJTaGltLmFsbG9jVW5zYWZlKG4pO1xuICB2YXIgcCA9IGxpc3QuaGVhZDtcbiAgdmFyIGMgPSAxO1xuICBwLmRhdGEuY29weShyZXQpO1xuICBuIC09IHAuZGF0YS5sZW5ndGg7XG4gIHdoaWxlIChwID0gcC5uZXh0KSB7XG4gICAgdmFyIGJ1ZiA9IHAuZGF0YTtcbiAgICB2YXIgbmIgPSBuID4gYnVmLmxlbmd0aCA/IGJ1Zi5sZW5ndGggOiBuO1xuICAgIGJ1Zi5jb3B5KHJldCwgcmV0Lmxlbmd0aCAtIG4sIDAsIG5iKTtcbiAgICBuIC09IG5iO1xuICAgIGlmIChuID09PSAwKSB7XG4gICAgICBpZiAobmIgPT09IGJ1Zi5sZW5ndGgpIHtcbiAgICAgICAgKytjO1xuICAgICAgICBpZiAocC5uZXh0KSBsaXN0LmhlYWQgPSBwLm5leHQ7ZWxzZSBsaXN0LmhlYWQgPSBsaXN0LnRhaWwgPSBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGlzdC5oZWFkID0gcDtcbiAgICAgICAgcC5kYXRhID0gYnVmLnNsaWNlKG5iKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICArK2M7XG4gIH1cbiAgbGlzdC5sZW5ndGggLT0gYztcbiAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gZW5kUmVhZGFibGUoc3RyZWFtKSB7XG4gIHZhciBzdGF0ZSA9IHN0cmVhbS5fcmVhZGFibGVTdGF0ZTtcblxuICAvLyBJZiB3ZSBnZXQgaGVyZSBiZWZvcmUgY29uc3VtaW5nIGFsbCB0aGUgYnl0ZXMsIHRoZW4gdGhhdCBpcyBhXG4gIC8vIGJ1ZyBpbiBub2RlLiAgU2hvdWxkIG5ldmVyIGhhcHBlbi5cbiAgaWYgKHN0YXRlLmxlbmd0aCA+IDApIHRocm93IG5ldyBFcnJvcignXCJlbmRSZWFkYWJsZSgpXCIgY2FsbGVkIG9uIG5vbi1lbXB0eSBzdHJlYW0nKTtcblxuICBpZiAoIXN0YXRlLmVuZEVtaXR0ZWQpIHtcbiAgICBzdGF0ZS5lbmRlZCA9IHRydWU7XG4gICAgcHJvY2Vzc05leHRUaWNrKGVuZFJlYWRhYmxlTlQsIHN0YXRlLCBzdHJlYW0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGVuZFJlYWRhYmxlTlQoc3RhdGUsIHN0cmVhbSkge1xuICAvLyBDaGVjayB0aGF0IHdlIGRpZG4ndCBnZXQgb25lIGxhc3QgdW5zaGlmdC5cbiAgaWYgKCFzdGF0ZS5lbmRFbWl0dGVkICYmIHN0YXRlLmxlbmd0aCA9PT0gMCkge1xuICAgIHN0YXRlLmVuZEVtaXR0ZWQgPSB0cnVlO1xuICAgIHN0cmVhbS5yZWFkYWJsZSA9IGZhbHNlO1xuICAgIHN0cmVhbS5lbWl0KCdlbmQnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmb3JFYWNoKHhzLCBmKSB7XG4gIGZvciAodmFyIGkgPSAwLCBsID0geHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgZih4c1tpXSwgaSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5kZXhPZih4cywgeCkge1xuICBmb3IgKHZhciBpID0gMCwgbCA9IHhzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGlmICh4c1tpXSA9PT0geCkgcmV0dXJuIGk7XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFkYWJsZS1zdHJlYW0vbGliL19zdHJlYW1fcmVhZGFibGUuanNcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGEgdHJhbnNmb3JtIHN0cmVhbSBpcyBhIHJlYWRhYmxlL3dyaXRhYmxlIHN0cmVhbSB3aGVyZSB5b3UgZG9cbi8vIHNvbWV0aGluZyB3aXRoIHRoZSBkYXRhLiAgU29tZXRpbWVzIGl0J3MgY2FsbGVkIGEgXCJmaWx0ZXJcIixcbi8vIGJ1dCB0aGF0J3Mgbm90IGEgZ3JlYXQgbmFtZSBmb3IgaXQsIHNpbmNlIHRoYXQgaW1wbGllcyBhIHRoaW5nIHdoZXJlXG4vLyBzb21lIGJpdHMgcGFzcyB0aHJvdWdoLCBhbmQgb3RoZXJzIGFyZSBzaW1wbHkgaWdub3JlZC4gIChUaGF0IHdvdWxkXG4vLyBiZSBhIHZhbGlkIGV4YW1wbGUgb2YgYSB0cmFuc2Zvcm0sIG9mIGNvdXJzZS4pXG4vL1xuLy8gV2hpbGUgdGhlIG91dHB1dCBpcyBjYXVzYWxseSByZWxhdGVkIHRvIHRoZSBpbnB1dCwgaXQncyBub3QgYVxuLy8gbmVjZXNzYXJpbHkgc3ltbWV0cmljIG9yIHN5bmNocm9ub3VzIHRyYW5zZm9ybWF0aW9uLiAgRm9yIGV4YW1wbGUsXG4vLyBhIHpsaWIgc3RyZWFtIG1pZ2h0IHRha2UgbXVsdGlwbGUgcGxhaW4tdGV4dCB3cml0ZXMoKSwgYW5kIHRoZW5cbi8vIGVtaXQgYSBzaW5nbGUgY29tcHJlc3NlZCBjaHVuayBzb21lIHRpbWUgaW4gdGhlIGZ1dHVyZS5cbi8vXG4vLyBIZXJlJ3MgaG93IHRoaXMgd29ya3M6XG4vL1xuLy8gVGhlIFRyYW5zZm9ybSBzdHJlYW0gaGFzIGFsbCB0aGUgYXNwZWN0cyBvZiB0aGUgcmVhZGFibGUgYW5kIHdyaXRhYmxlXG4vLyBzdHJlYW0gY2xhc3Nlcy4gIFdoZW4geW91IHdyaXRlKGNodW5rKSwgdGhhdCBjYWxscyBfd3JpdGUoY2h1bmssY2IpXG4vLyBpbnRlcm5hbGx5LCBhbmQgcmV0dXJucyBmYWxzZSBpZiB0aGVyZSdzIGEgbG90IG9mIHBlbmRpbmcgd3JpdGVzXG4vLyBidWZmZXJlZCB1cC4gIFdoZW4geW91IGNhbGwgcmVhZCgpLCB0aGF0IGNhbGxzIF9yZWFkKG4pIHVudGlsXG4vLyB0aGVyZSdzIGVub3VnaCBwZW5kaW5nIHJlYWRhYmxlIGRhdGEgYnVmZmVyZWQgdXAuXG4vL1xuLy8gSW4gYSB0cmFuc2Zvcm0gc3RyZWFtLCB0aGUgd3JpdHRlbiBkYXRhIGlzIHBsYWNlZCBpbiBhIGJ1ZmZlci4gIFdoZW5cbi8vIF9yZWFkKG4pIGlzIGNhbGxlZCwgaXQgdHJhbnNmb3JtcyB0aGUgcXVldWVkIHVwIGRhdGEsIGNhbGxpbmcgdGhlXG4vLyBidWZmZXJlZCBfd3JpdGUgY2IncyBhcyBpdCBjb25zdW1lcyBjaHVua3MuICBJZiBjb25zdW1pbmcgYSBzaW5nbGVcbi8vIHdyaXR0ZW4gY2h1bmsgd291bGQgcmVzdWx0IGluIG11bHRpcGxlIG91dHB1dCBjaHVua3MsIHRoZW4gdGhlIGZpcnN0XG4vLyBvdXRwdXR0ZWQgYml0IGNhbGxzIHRoZSByZWFkY2IsIGFuZCBzdWJzZXF1ZW50IGNodW5rcyBqdXN0IGdvIGludG9cbi8vIHRoZSByZWFkIGJ1ZmZlciwgYW5kIHdpbGwgY2F1c2UgaXQgdG8gZW1pdCAncmVhZGFibGUnIGlmIG5lY2Vzc2FyeS5cbi8vXG4vLyBUaGlzIHdheSwgYmFjay1wcmVzc3VyZSBpcyBhY3R1YWxseSBkZXRlcm1pbmVkIGJ5IHRoZSByZWFkaW5nIHNpZGUsXG4vLyBzaW5jZSBfcmVhZCBoYXMgdG8gYmUgY2FsbGVkIHRvIHN0YXJ0IHByb2Nlc3NpbmcgYSBuZXcgY2h1bmsuICBIb3dldmVyLFxuLy8gYSBwYXRob2xvZ2ljYWwgaW5mbGF0ZSB0eXBlIG9mIHRyYW5zZm9ybSBjYW4gY2F1c2UgZXhjZXNzaXZlIGJ1ZmZlcmluZ1xuLy8gaGVyZS4gIEZvciBleGFtcGxlLCBpbWFnaW5lIGEgc3RyZWFtIHdoZXJlIGV2ZXJ5IGJ5dGUgb2YgaW5wdXQgaXNcbi8vIGludGVycHJldGVkIGFzIGFuIGludGVnZXIgZnJvbSAwLTI1NSwgYW5kIHRoZW4gcmVzdWx0cyBpbiB0aGF0IG1hbnlcbi8vIGJ5dGVzIG9mIG91dHB1dC4gIFdyaXRpbmcgdGhlIDQgYnl0ZXMge2ZmLGZmLGZmLGZmfSB3b3VsZCByZXN1bHQgaW5cbi8vIDFrYiBvZiBkYXRhIGJlaW5nIG91dHB1dC4gIEluIHRoaXMgY2FzZSwgeW91IGNvdWxkIHdyaXRlIGEgdmVyeSBzbWFsbFxuLy8gYW1vdW50IG9mIGlucHV0LCBhbmQgZW5kIHVwIHdpdGggYSB2ZXJ5IGxhcmdlIGFtb3VudCBvZiBvdXRwdXQuICBJblxuLy8gc3VjaCBhIHBhdGhvbG9naWNhbCBpbmZsYXRpbmcgbWVjaGFuaXNtLCB0aGVyZSdkIGJlIG5vIHdheSB0byB0ZWxsXG4vLyB0aGUgc3lzdGVtIHRvIHN0b3AgZG9pbmcgdGhlIHRyYW5zZm9ybS4gIEEgc2luZ2xlIDRNQiB3cml0ZSBjb3VsZFxuLy8gY2F1c2UgdGhlIHN5c3RlbSB0byBydW4gb3V0IG9mIG1lbW9yeS5cbi8vXG4vLyBIb3dldmVyLCBldmVuIGluIHN1Y2ggYSBwYXRob2xvZ2ljYWwgY2FzZSwgb25seSBhIHNpbmdsZSB3cml0dGVuIGNodW5rXG4vLyB3b3VsZCBiZSBjb25zdW1lZCwgYW5kIHRoZW4gdGhlIHJlc3Qgd291bGQgd2FpdCAodW4tdHJhbnNmb3JtZWQpIHVudGlsXG4vLyB0aGUgcmVzdWx0cyBvZiB0aGUgcHJldmlvdXMgdHJhbnNmb3JtZWQgY2h1bmsgd2VyZSBjb25zdW1lZC5cblxuJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRyYW5zZm9ybTtcblxudmFyIER1cGxleCA9IHJlcXVpcmUoJy4vX3N0cmVhbV9kdXBsZXgnKTtcblxuLyo8cmVwbGFjZW1lbnQ+Ki9cbnZhciB1dGlsID0gcmVxdWlyZSgnY29yZS11dGlsLWlzJyk7XG51dGlsLmluaGVyaXRzID0gcmVxdWlyZSgnaW5oZXJpdHMnKTtcbi8qPC9yZXBsYWNlbWVudD4qL1xuXG51dGlsLmluaGVyaXRzKFRyYW5zZm9ybSwgRHVwbGV4KTtcblxuZnVuY3Rpb24gVHJhbnNmb3JtU3RhdGUoc3RyZWFtKSB7XG4gIHRoaXMuYWZ0ZXJUcmFuc2Zvcm0gPSBmdW5jdGlvbiAoZXIsIGRhdGEpIHtcbiAgICByZXR1cm4gYWZ0ZXJUcmFuc2Zvcm0oc3RyZWFtLCBlciwgZGF0YSk7XG4gIH07XG5cbiAgdGhpcy5uZWVkVHJhbnNmb3JtID0gZmFsc2U7XG4gIHRoaXMudHJhbnNmb3JtaW5nID0gZmFsc2U7XG4gIHRoaXMud3JpdGVjYiA9IG51bGw7XG4gIHRoaXMud3JpdGVjaHVuayA9IG51bGw7XG4gIHRoaXMud3JpdGVlbmNvZGluZyA9IG51bGw7XG59XG5cbmZ1bmN0aW9uIGFmdGVyVHJhbnNmb3JtKHN0cmVhbSwgZXIsIGRhdGEpIHtcbiAgdmFyIHRzID0gc3RyZWFtLl90cmFuc2Zvcm1TdGF0ZTtcbiAgdHMudHJhbnNmb3JtaW5nID0gZmFsc2U7XG5cbiAgdmFyIGNiID0gdHMud3JpdGVjYjtcblxuICBpZiAoIWNiKSByZXR1cm4gc3RyZWFtLmVtaXQoJ2Vycm9yJywgbmV3IEVycm9yKCdubyB3cml0ZWNiIGluIFRyYW5zZm9ybSBjbGFzcycpKTtcblxuICB0cy53cml0ZWNodW5rID0gbnVsbDtcbiAgdHMud3JpdGVjYiA9IG51bGw7XG5cbiAgaWYgKGRhdGEgIT09IG51bGwgJiYgZGF0YSAhPT0gdW5kZWZpbmVkKSBzdHJlYW0ucHVzaChkYXRhKTtcblxuICBjYihlcik7XG5cbiAgdmFyIHJzID0gc3RyZWFtLl9yZWFkYWJsZVN0YXRlO1xuICBycy5yZWFkaW5nID0gZmFsc2U7XG4gIGlmIChycy5uZWVkUmVhZGFibGUgfHwgcnMubGVuZ3RoIDwgcnMuaGlnaFdhdGVyTWFyaykge1xuICAgIHN0cmVhbS5fcmVhZChycy5oaWdoV2F0ZXJNYXJrKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBUcmFuc2Zvcm0ob3B0aW9ucykge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgVHJhbnNmb3JtKSkgcmV0dXJuIG5ldyBUcmFuc2Zvcm0ob3B0aW9ucyk7XG5cbiAgRHVwbGV4LmNhbGwodGhpcywgb3B0aW9ucyk7XG5cbiAgdGhpcy5fdHJhbnNmb3JtU3RhdGUgPSBuZXcgVHJhbnNmb3JtU3RhdGUodGhpcyk7XG5cbiAgdmFyIHN0cmVhbSA9IHRoaXM7XG5cbiAgLy8gc3RhcnQgb3V0IGFza2luZyBmb3IgYSByZWFkYWJsZSBldmVudCBvbmNlIGRhdGEgaXMgdHJhbnNmb3JtZWQuXG4gIHRoaXMuX3JlYWRhYmxlU3RhdGUubmVlZFJlYWRhYmxlID0gdHJ1ZTtcblxuICAvLyB3ZSBoYXZlIGltcGxlbWVudGVkIHRoZSBfcmVhZCBtZXRob2QsIGFuZCBkb25lIHRoZSBvdGhlciB0aGluZ3NcbiAgLy8gdGhhdCBSZWFkYWJsZSB3YW50cyBiZWZvcmUgdGhlIGZpcnN0IF9yZWFkIGNhbGwsIHNvIHVuc2V0IHRoZVxuICAvLyBzeW5jIGd1YXJkIGZsYWcuXG4gIHRoaXMuX3JlYWRhYmxlU3RhdGUuc3luYyA9IGZhbHNlO1xuXG4gIGlmIChvcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLnRyYW5zZm9ybSA9PT0gJ2Z1bmN0aW9uJykgdGhpcy5fdHJhbnNmb3JtID0gb3B0aW9ucy50cmFuc2Zvcm07XG5cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMuZmx1c2ggPT09ICdmdW5jdGlvbicpIHRoaXMuX2ZsdXNoID0gb3B0aW9ucy5mbHVzaDtcbiAgfVxuXG4gIC8vIFdoZW4gdGhlIHdyaXRhYmxlIHNpZGUgZmluaXNoZXMsIHRoZW4gZmx1c2ggb3V0IGFueXRoaW5nIHJlbWFpbmluZy5cbiAgdGhpcy5vbmNlKCdwcmVmaW5pc2gnLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLl9mbHVzaCA9PT0gJ2Z1bmN0aW9uJykgdGhpcy5fZmx1c2goZnVuY3Rpb24gKGVyLCBkYXRhKSB7XG4gICAgICBkb25lKHN0cmVhbSwgZXIsIGRhdGEpO1xuICAgIH0pO2Vsc2UgZG9uZShzdHJlYW0pO1xuICB9KTtcbn1cblxuVHJhbnNmb3JtLnByb3RvdHlwZS5wdXNoID0gZnVuY3Rpb24gKGNodW5rLCBlbmNvZGluZykge1xuICB0aGlzLl90cmFuc2Zvcm1TdGF0ZS5uZWVkVHJhbnNmb3JtID0gZmFsc2U7XG4gIHJldHVybiBEdXBsZXgucHJvdG90eXBlLnB1c2guY2FsbCh0aGlzLCBjaHVuaywgZW5jb2RpbmcpO1xufTtcblxuLy8gVGhpcyBpcyB0aGUgcGFydCB3aGVyZSB5b3UgZG8gc3R1ZmYhXG4vLyBvdmVycmlkZSB0aGlzIGZ1bmN0aW9uIGluIGltcGxlbWVudGF0aW9uIGNsYXNzZXMuXG4vLyAnY2h1bmsnIGlzIGFuIGlucHV0IGNodW5rLlxuLy9cbi8vIENhbGwgYHB1c2gobmV3Q2h1bmspYCB0byBwYXNzIGFsb25nIHRyYW5zZm9ybWVkIG91dHB1dFxuLy8gdG8gdGhlIHJlYWRhYmxlIHNpZGUuICBZb3UgbWF5IGNhbGwgJ3B1c2gnIHplcm8gb3IgbW9yZSB0aW1lcy5cbi8vXG4vLyBDYWxsIGBjYihlcnIpYCB3aGVuIHlvdSBhcmUgZG9uZSB3aXRoIHRoaXMgY2h1bmsuICBJZiB5b3UgcGFzc1xuLy8gYW4gZXJyb3IsIHRoZW4gdGhhdCdsbCBwdXQgdGhlIGh1cnQgb24gdGhlIHdob2xlIG9wZXJhdGlvbi4gIElmIHlvdVxuLy8gbmV2ZXIgY2FsbCBjYigpLCB0aGVuIHlvdSdsbCBuZXZlciBnZXQgYW5vdGhlciBjaHVuay5cblRyYW5zZm9ybS5wcm90b3R5cGUuX3RyYW5zZm9ybSA9IGZ1bmN0aW9uIChjaHVuaywgZW5jb2RpbmcsIGNiKSB7XG4gIHRocm93IG5ldyBFcnJvcignX3RyYW5zZm9ybSgpIGlzIG5vdCBpbXBsZW1lbnRlZCcpO1xufTtcblxuVHJhbnNmb3JtLnByb3RvdHlwZS5fd3JpdGUgPSBmdW5jdGlvbiAoY2h1bmssIGVuY29kaW5nLCBjYikge1xuICB2YXIgdHMgPSB0aGlzLl90cmFuc2Zvcm1TdGF0ZTtcbiAgdHMud3JpdGVjYiA9IGNiO1xuICB0cy53cml0ZWNodW5rID0gY2h1bms7XG4gIHRzLndyaXRlZW5jb2RpbmcgPSBlbmNvZGluZztcbiAgaWYgKCF0cy50cmFuc2Zvcm1pbmcpIHtcbiAgICB2YXIgcnMgPSB0aGlzLl9yZWFkYWJsZVN0YXRlO1xuICAgIGlmICh0cy5uZWVkVHJhbnNmb3JtIHx8IHJzLm5lZWRSZWFkYWJsZSB8fCBycy5sZW5ndGggPCBycy5oaWdoV2F0ZXJNYXJrKSB0aGlzLl9yZWFkKHJzLmhpZ2hXYXRlck1hcmspO1xuICB9XG59O1xuXG4vLyBEb2Vzbid0IG1hdHRlciB3aGF0IHRoZSBhcmdzIGFyZSBoZXJlLlxuLy8gX3RyYW5zZm9ybSBkb2VzIGFsbCB0aGUgd29yay5cbi8vIFRoYXQgd2UgZ290IGhlcmUgbWVhbnMgdGhhdCB0aGUgcmVhZGFibGUgc2lkZSB3YW50cyBtb3JlIGRhdGEuXG5UcmFuc2Zvcm0ucHJvdG90eXBlLl9yZWFkID0gZnVuY3Rpb24gKG4pIHtcbiAgdmFyIHRzID0gdGhpcy5fdHJhbnNmb3JtU3RhdGU7XG5cbiAgaWYgKHRzLndyaXRlY2h1bmsgIT09IG51bGwgJiYgdHMud3JpdGVjYiAmJiAhdHMudHJhbnNmb3JtaW5nKSB7XG4gICAgdHMudHJhbnNmb3JtaW5nID0gdHJ1ZTtcbiAgICB0aGlzLl90cmFuc2Zvcm0odHMud3JpdGVjaHVuaywgdHMud3JpdGVlbmNvZGluZywgdHMuYWZ0ZXJUcmFuc2Zvcm0pO1xuICB9IGVsc2Uge1xuICAgIC8vIG1hcmsgdGhhdCB3ZSBuZWVkIGEgdHJhbnNmb3JtLCBzbyB0aGF0IGFueSBkYXRhIHRoYXQgY29tZXMgaW5cbiAgICAvLyB3aWxsIGdldCBwcm9jZXNzZWQsIG5vdyB0aGF0IHdlJ3ZlIGFza2VkIGZvciBpdC5cbiAgICB0cy5uZWVkVHJhbnNmb3JtID0gdHJ1ZTtcbiAgfVxufTtcblxuZnVuY3Rpb24gZG9uZShzdHJlYW0sIGVyLCBkYXRhKSB7XG4gIGlmIChlcikgcmV0dXJuIHN0cmVhbS5lbWl0KCdlcnJvcicsIGVyKTtcblxuICBpZiAoZGF0YSAhPT0gbnVsbCAmJiBkYXRhICE9PSB1bmRlZmluZWQpIHN0cmVhbS5wdXNoKGRhdGEpO1xuXG4gIC8vIGlmIHRoZXJlJ3Mgbm90aGluZyBpbiB0aGUgd3JpdGUgYnVmZmVyLCB0aGVuIHRoYXQgbWVhbnNcbiAgLy8gdGhhdCBub3RoaW5nIG1vcmUgd2lsbCBldmVyIGJlIHByb3ZpZGVkXG4gIHZhciB3cyA9IHN0cmVhbS5fd3JpdGFibGVTdGF0ZTtcbiAgdmFyIHRzID0gc3RyZWFtLl90cmFuc2Zvcm1TdGF0ZTtcblxuICBpZiAod3MubGVuZ3RoKSB0aHJvdyBuZXcgRXJyb3IoJ0NhbGxpbmcgdHJhbnNmb3JtIGRvbmUgd2hlbiB3cy5sZW5ndGggIT0gMCcpO1xuXG4gIGlmICh0cy50cmFuc2Zvcm1pbmcpIHRocm93IG5ldyBFcnJvcignQ2FsbGluZyB0cmFuc2Zvcm0gZG9uZSB3aGVuIHN0aWxsIHRyYW5zZm9ybWluZycpO1xuXG4gIHJldHVybiBzdHJlYW0ucHVzaChudWxsKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhZGFibGUtc3RyZWFtL2xpYi9fc3RyZWFtX3RyYW5zZm9ybS5qc1xuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gQSBiaXQgc2ltcGxlciB0aGFuIHJlYWRhYmxlIHN0cmVhbXMuXG4vLyBJbXBsZW1lbnQgYW4gYXN5bmMgLl93cml0ZShjaHVuaywgZW5jb2RpbmcsIGNiKSwgYW5kIGl0J2xsIGhhbmRsZSBhbGxcbi8vIHRoZSBkcmFpbiBldmVudCBlbWlzc2lvbiBhbmQgYnVmZmVyaW5nLlxuXG4ndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gV3JpdGFibGU7XG5cbi8qPHJlcGxhY2VtZW50PiovXG52YXIgcHJvY2Vzc05leHRUaWNrID0gcmVxdWlyZSgncHJvY2Vzcy1uZXh0aWNrLWFyZ3MnKTtcbi8qPC9yZXBsYWNlbWVudD4qL1xuXG4vKjxyZXBsYWNlbWVudD4qL1xudmFyIGFzeW5jV3JpdGUgPSAhcHJvY2Vzcy5icm93c2VyICYmIFsndjAuMTAnLCAndjAuOS4nXS5pbmRleE9mKHByb2Nlc3MudmVyc2lvbi5zbGljZSgwLCA1KSkgPiAtMSA/IHNldEltbWVkaWF0ZSA6IHByb2Nlc3NOZXh0VGljaztcbi8qPC9yZXBsYWNlbWVudD4qL1xuXG4vKjxyZXBsYWNlbWVudD4qL1xudmFyIER1cGxleDtcbi8qPC9yZXBsYWNlbWVudD4qL1xuXG5Xcml0YWJsZS5Xcml0YWJsZVN0YXRlID0gV3JpdGFibGVTdGF0ZTtcblxuLyo8cmVwbGFjZW1lbnQ+Ki9cbnZhciB1dGlsID0gcmVxdWlyZSgnY29yZS11dGlsLWlzJyk7XG51dGlsLmluaGVyaXRzID0gcmVxdWlyZSgnaW5oZXJpdHMnKTtcbi8qPC9yZXBsYWNlbWVudD4qL1xuXG4vKjxyZXBsYWNlbWVudD4qL1xudmFyIGludGVybmFsVXRpbCA9IHtcbiAgZGVwcmVjYXRlOiByZXF1aXJlKCd1dGlsLWRlcHJlY2F0ZScpXG59O1xuLyo8L3JlcGxhY2VtZW50PiovXG5cbi8qPHJlcGxhY2VtZW50PiovXG52YXIgU3RyZWFtO1xuKGZ1bmN0aW9uICgpIHtcbiAgdHJ5IHtcbiAgICBTdHJlYW0gPSByZXF1aXJlKCdzdCcgKyAncmVhbScpO1xuICB9IGNhdGNoIChfKSB7fSBmaW5hbGx5IHtcbiAgICBpZiAoIVN0cmVhbSkgU3RyZWFtID0gcmVxdWlyZSgnZXZlbnRzJykuRXZlbnRFbWl0dGVyO1xuICB9XG59KSgpO1xuLyo8L3JlcGxhY2VtZW50PiovXG5cbnZhciBCdWZmZXIgPSByZXF1aXJlKCdidWZmZXInKS5CdWZmZXI7XG4vKjxyZXBsYWNlbWVudD4qL1xudmFyIGJ1ZmZlclNoaW0gPSByZXF1aXJlKCdidWZmZXItc2hpbXMnKTtcbi8qPC9yZXBsYWNlbWVudD4qL1xuXG51dGlsLmluaGVyaXRzKFdyaXRhYmxlLCBTdHJlYW0pO1xuXG5mdW5jdGlvbiBub3AoKSB7fVxuXG5mdW5jdGlvbiBXcml0ZVJlcShjaHVuaywgZW5jb2RpbmcsIGNiKSB7XG4gIHRoaXMuY2h1bmsgPSBjaHVuaztcbiAgdGhpcy5lbmNvZGluZyA9IGVuY29kaW5nO1xuICB0aGlzLmNhbGxiYWNrID0gY2I7XG4gIHRoaXMubmV4dCA9IG51bGw7XG59XG5cbmZ1bmN0aW9uIFdyaXRhYmxlU3RhdGUob3B0aW9ucywgc3RyZWFtKSB7XG4gIER1cGxleCA9IER1cGxleCB8fCByZXF1aXJlKCcuL19zdHJlYW1fZHVwbGV4Jyk7XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgLy8gb2JqZWN0IHN0cmVhbSBmbGFnIHRvIGluZGljYXRlIHdoZXRoZXIgb3Igbm90IHRoaXMgc3RyZWFtXG4gIC8vIGNvbnRhaW5zIGJ1ZmZlcnMgb3Igb2JqZWN0cy5cbiAgdGhpcy5vYmplY3RNb2RlID0gISFvcHRpb25zLm9iamVjdE1vZGU7XG5cbiAgaWYgKHN0cmVhbSBpbnN0YW5jZW9mIER1cGxleCkgdGhpcy5vYmplY3RNb2RlID0gdGhpcy5vYmplY3RNb2RlIHx8ICEhb3B0aW9ucy53cml0YWJsZU9iamVjdE1vZGU7XG5cbiAgLy8gdGhlIHBvaW50IGF0IHdoaWNoIHdyaXRlKCkgc3RhcnRzIHJldHVybmluZyBmYWxzZVxuICAvLyBOb3RlOiAwIGlzIGEgdmFsaWQgdmFsdWUsIG1lYW5zIHRoYXQgd2UgYWx3YXlzIHJldHVybiBmYWxzZSBpZlxuICAvLyB0aGUgZW50aXJlIGJ1ZmZlciBpcyBub3QgZmx1c2hlZCBpbW1lZGlhdGVseSBvbiB3cml0ZSgpXG4gIHZhciBod20gPSBvcHRpb25zLmhpZ2hXYXRlck1hcms7XG4gIHZhciBkZWZhdWx0SHdtID0gdGhpcy5vYmplY3RNb2RlID8gMTYgOiAxNiAqIDEwMjQ7XG4gIHRoaXMuaGlnaFdhdGVyTWFyayA9IGh3bSB8fCBod20gPT09IDAgPyBod20gOiBkZWZhdWx0SHdtO1xuXG4gIC8vIGNhc3QgdG8gaW50cy5cbiAgdGhpcy5oaWdoV2F0ZXJNYXJrID0gfiB+dGhpcy5oaWdoV2F0ZXJNYXJrO1xuXG4gIC8vIGRyYWluIGV2ZW50IGZsYWcuXG4gIHRoaXMubmVlZERyYWluID0gZmFsc2U7XG4gIC8vIGF0IHRoZSBzdGFydCBvZiBjYWxsaW5nIGVuZCgpXG4gIHRoaXMuZW5kaW5nID0gZmFsc2U7XG4gIC8vIHdoZW4gZW5kKCkgaGFzIGJlZW4gY2FsbGVkLCBhbmQgcmV0dXJuZWRcbiAgdGhpcy5lbmRlZCA9IGZhbHNlO1xuICAvLyB3aGVuICdmaW5pc2gnIGlzIGVtaXR0ZWRcbiAgdGhpcy5maW5pc2hlZCA9IGZhbHNlO1xuXG4gIC8vIHNob3VsZCB3ZSBkZWNvZGUgc3RyaW5ncyBpbnRvIGJ1ZmZlcnMgYmVmb3JlIHBhc3NpbmcgdG8gX3dyaXRlP1xuICAvLyB0aGlzIGlzIGhlcmUgc28gdGhhdCBzb21lIG5vZGUtY29yZSBzdHJlYW1zIGNhbiBvcHRpbWl6ZSBzdHJpbmdcbiAgLy8gaGFuZGxpbmcgYXQgYSBsb3dlciBsZXZlbC5cbiAgdmFyIG5vRGVjb2RlID0gb3B0aW9ucy5kZWNvZGVTdHJpbmdzID09PSBmYWxzZTtcbiAgdGhpcy5kZWNvZGVTdHJpbmdzID0gIW5vRGVjb2RlO1xuXG4gIC8vIENyeXB0byBpcyBraW5kIG9mIG9sZCBhbmQgY3J1c3R5LiAgSGlzdG9yaWNhbGx5LCBpdHMgZGVmYXVsdCBzdHJpbmdcbiAgLy8gZW5jb2RpbmcgaXMgJ2JpbmFyeScgc28gd2UgaGF2ZSB0byBtYWtlIHRoaXMgY29uZmlndXJhYmxlLlxuICAvLyBFdmVyeXRoaW5nIGVsc2UgaW4gdGhlIHVuaXZlcnNlIHVzZXMgJ3V0ZjgnLCB0aG91Z2guXG4gIHRoaXMuZGVmYXVsdEVuY29kaW5nID0gb3B0aW9ucy5kZWZhdWx0RW5jb2RpbmcgfHwgJ3V0ZjgnO1xuXG4gIC8vIG5vdCBhbiBhY3R1YWwgYnVmZmVyIHdlIGtlZXAgdHJhY2sgb2YsIGJ1dCBhIG1lYXN1cmVtZW50XG4gIC8vIG9mIGhvdyBtdWNoIHdlJ3JlIHdhaXRpbmcgdG8gZ2V0IHB1c2hlZCB0byBzb21lIHVuZGVybHlpbmdcbiAgLy8gc29ja2V0IG9yIGZpbGUuXG4gIHRoaXMubGVuZ3RoID0gMDtcblxuICAvLyBhIGZsYWcgdG8gc2VlIHdoZW4gd2UncmUgaW4gdGhlIG1pZGRsZSBvZiBhIHdyaXRlLlxuICB0aGlzLndyaXRpbmcgPSBmYWxzZTtcblxuICAvLyB3aGVuIHRydWUgYWxsIHdyaXRlcyB3aWxsIGJlIGJ1ZmZlcmVkIHVudGlsIC51bmNvcmsoKSBjYWxsXG4gIHRoaXMuY29ya2VkID0gMDtcblxuICAvLyBhIGZsYWcgdG8gYmUgYWJsZSB0byB0ZWxsIGlmIHRoZSBvbndyaXRlIGNiIGlzIGNhbGxlZCBpbW1lZGlhdGVseSxcbiAgLy8gb3Igb24gYSBsYXRlciB0aWNrLiAgV2Ugc2V0IHRoaXMgdG8gdHJ1ZSBhdCBmaXJzdCwgYmVjYXVzZSBhbnlcbiAgLy8gYWN0aW9ucyB0aGF0IHNob3VsZG4ndCBoYXBwZW4gdW50aWwgXCJsYXRlclwiIHNob3VsZCBnZW5lcmFsbHkgYWxzb1xuICAvLyBub3QgaGFwcGVuIGJlZm9yZSB0aGUgZmlyc3Qgd3JpdGUgY2FsbC5cbiAgdGhpcy5zeW5jID0gdHJ1ZTtcblxuICAvLyBhIGZsYWcgdG8ga25vdyBpZiB3ZSdyZSBwcm9jZXNzaW5nIHByZXZpb3VzbHkgYnVmZmVyZWQgaXRlbXMsIHdoaWNoXG4gIC8vIG1heSBjYWxsIHRoZSBfd3JpdGUoKSBjYWxsYmFjayBpbiB0aGUgc2FtZSB0aWNrLCBzbyB0aGF0IHdlIGRvbid0XG4gIC8vIGVuZCB1cCBpbiBhbiBvdmVybGFwcGVkIG9ud3JpdGUgc2l0dWF0aW9uLlxuICB0aGlzLmJ1ZmZlclByb2Nlc3NpbmcgPSBmYWxzZTtcblxuICAvLyB0aGUgY2FsbGJhY2sgdGhhdCdzIHBhc3NlZCB0byBfd3JpdGUoY2h1bmssY2IpXG4gIHRoaXMub253cml0ZSA9IGZ1bmN0aW9uIChlcikge1xuICAgIG9ud3JpdGUoc3RyZWFtLCBlcik7XG4gIH07XG5cbiAgLy8gdGhlIGNhbGxiYWNrIHRoYXQgdGhlIHVzZXIgc3VwcGxpZXMgdG8gd3JpdGUoY2h1bmssZW5jb2RpbmcsY2IpXG4gIHRoaXMud3JpdGVjYiA9IG51bGw7XG5cbiAgLy8gdGhlIGFtb3VudCB0aGF0IGlzIGJlaW5nIHdyaXR0ZW4gd2hlbiBfd3JpdGUgaXMgY2FsbGVkLlxuICB0aGlzLndyaXRlbGVuID0gMDtcblxuICB0aGlzLmJ1ZmZlcmVkUmVxdWVzdCA9IG51bGw7XG4gIHRoaXMubGFzdEJ1ZmZlcmVkUmVxdWVzdCA9IG51bGw7XG5cbiAgLy8gbnVtYmVyIG9mIHBlbmRpbmcgdXNlci1zdXBwbGllZCB3cml0ZSBjYWxsYmFja3NcbiAgLy8gdGhpcyBtdXN0IGJlIDAgYmVmb3JlICdmaW5pc2gnIGNhbiBiZSBlbWl0dGVkXG4gIHRoaXMucGVuZGluZ2NiID0gMDtcblxuICAvLyBlbWl0IHByZWZpbmlzaCBpZiB0aGUgb25seSB0aGluZyB3ZSdyZSB3YWl0aW5nIGZvciBpcyBfd3JpdGUgY2JzXG4gIC8vIFRoaXMgaXMgcmVsZXZhbnQgZm9yIHN5bmNocm9ub3VzIFRyYW5zZm9ybSBzdHJlYW1zXG4gIHRoaXMucHJlZmluaXNoZWQgPSBmYWxzZTtcblxuICAvLyBUcnVlIGlmIHRoZSBlcnJvciB3YXMgYWxyZWFkeSBlbWl0dGVkIGFuZCBzaG91bGQgbm90IGJlIHRocm93biBhZ2FpblxuICB0aGlzLmVycm9yRW1pdHRlZCA9IGZhbHNlO1xuXG4gIC8vIGNvdW50IGJ1ZmZlcmVkIHJlcXVlc3RzXG4gIHRoaXMuYnVmZmVyZWRSZXF1ZXN0Q291bnQgPSAwO1xuXG4gIC8vIGFsbG9jYXRlIHRoZSBmaXJzdCBDb3JrZWRSZXF1ZXN0LCB0aGVyZSBpcyBhbHdheXNcbiAgLy8gb25lIGFsbG9jYXRlZCBhbmQgZnJlZSB0byB1c2UsIGFuZCB3ZSBtYWludGFpbiBhdCBtb3N0IHR3b1xuICB0aGlzLmNvcmtlZFJlcXVlc3RzRnJlZSA9IG5ldyBDb3JrZWRSZXF1ZXN0KHRoaXMpO1xufVxuXG5Xcml0YWJsZVN0YXRlLnByb3RvdHlwZS5nZXRCdWZmZXIgPSBmdW5jdGlvbiBnZXRCdWZmZXIoKSB7XG4gIHZhciBjdXJyZW50ID0gdGhpcy5idWZmZXJlZFJlcXVlc3Q7XG4gIHZhciBvdXQgPSBbXTtcbiAgd2hpbGUgKGN1cnJlbnQpIHtcbiAgICBvdXQucHVzaChjdXJyZW50KTtcbiAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0O1xuICB9XG4gIHJldHVybiBvdXQ7XG59O1xuXG4oZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShXcml0YWJsZVN0YXRlLnByb3RvdHlwZSwgJ2J1ZmZlcicsIHtcbiAgICAgIGdldDogaW50ZXJuYWxVdGlsLmRlcHJlY2F0ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEJ1ZmZlcigpO1xuICAgICAgfSwgJ193cml0YWJsZVN0YXRlLmJ1ZmZlciBpcyBkZXByZWNhdGVkLiBVc2UgX3dyaXRhYmxlU3RhdGUuZ2V0QnVmZmVyICcgKyAnaW5zdGVhZC4nKVxuICAgIH0pO1xuICB9IGNhdGNoIChfKSB7fVxufSkoKTtcblxuLy8gVGVzdCBfd3JpdGFibGVTdGF0ZSBmb3IgaW5oZXJpdGFuY2UgdG8gYWNjb3VudCBmb3IgRHVwbGV4IHN0cmVhbXMsXG4vLyB3aG9zZSBwcm90b3R5cGUgY2hhaW4gb25seSBwb2ludHMgdG8gUmVhZGFibGUuXG52YXIgcmVhbEhhc0luc3RhbmNlO1xuaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmhhc0luc3RhbmNlICYmIHR5cGVvZiBGdW5jdGlvbi5wcm90b3R5cGVbU3ltYm9sLmhhc0luc3RhbmNlXSA9PT0gJ2Z1bmN0aW9uJykge1xuICByZWFsSGFzSW5zdGFuY2UgPSBGdW5jdGlvbi5wcm90b3R5cGVbU3ltYm9sLmhhc0luc3RhbmNlXTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFdyaXRhYmxlLCBTeW1ib2wuaGFzSW5zdGFuY2UsIHtcbiAgICB2YWx1ZTogZnVuY3Rpb24gKG9iamVjdCkge1xuICAgICAgaWYgKHJlYWxIYXNJbnN0YW5jZS5jYWxsKHRoaXMsIG9iamVjdCkpIHJldHVybiB0cnVlO1xuXG4gICAgICByZXR1cm4gb2JqZWN0ICYmIG9iamVjdC5fd3JpdGFibGVTdGF0ZSBpbnN0YW5jZW9mIFdyaXRhYmxlU3RhdGU7XG4gICAgfVxuICB9KTtcbn0gZWxzZSB7XG4gIHJlYWxIYXNJbnN0YW5jZSA9IGZ1bmN0aW9uIChvYmplY3QpIHtcbiAgICByZXR1cm4gb2JqZWN0IGluc3RhbmNlb2YgdGhpcztcbiAgfTtcbn1cblxuZnVuY3Rpb24gV3JpdGFibGUob3B0aW9ucykge1xuICBEdXBsZXggPSBEdXBsZXggfHwgcmVxdWlyZSgnLi9fc3RyZWFtX2R1cGxleCcpO1xuXG4gIC8vIFdyaXRhYmxlIGN0b3IgaXMgYXBwbGllZCB0byBEdXBsZXhlcywgdG9vLlxuICAvLyBgcmVhbEhhc0luc3RhbmNlYCBpcyBuZWNlc3NhcnkgYmVjYXVzZSB1c2luZyBwbGFpbiBgaW5zdGFuY2VvZmBcbiAgLy8gd291bGQgcmV0dXJuIGZhbHNlLCBhcyBubyBgX3dyaXRhYmxlU3RhdGVgIHByb3BlcnR5IGlzIGF0dGFjaGVkLlxuXG4gIC8vIFRyeWluZyB0byB1c2UgdGhlIGN1c3RvbSBgaW5zdGFuY2VvZmAgZm9yIFdyaXRhYmxlIGhlcmUgd2lsbCBhbHNvIGJyZWFrIHRoZVxuICAvLyBOb2RlLmpzIExhenlUcmFuc2Zvcm0gaW1wbGVtZW50YXRpb24sIHdoaWNoIGhhcyBhIG5vbi10cml2aWFsIGdldHRlciBmb3JcbiAgLy8gYF93cml0YWJsZVN0YXRlYCB0aGF0IHdvdWxkIGxlYWQgdG8gaW5maW5pdGUgcmVjdXJzaW9uLlxuICBpZiAoIXJlYWxIYXNJbnN0YW5jZS5jYWxsKFdyaXRhYmxlLCB0aGlzKSAmJiAhKHRoaXMgaW5zdGFuY2VvZiBEdXBsZXgpKSB7XG4gICAgcmV0dXJuIG5ldyBXcml0YWJsZShvcHRpb25zKTtcbiAgfVxuXG4gIHRoaXMuX3dyaXRhYmxlU3RhdGUgPSBuZXcgV3JpdGFibGVTdGF0ZShvcHRpb25zLCB0aGlzKTtcblxuICAvLyBsZWdhY3kuXG4gIHRoaXMud3JpdGFibGUgPSB0cnVlO1xuXG4gIGlmIChvcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLndyaXRlID09PSAnZnVuY3Rpb24nKSB0aGlzLl93cml0ZSA9IG9wdGlvbnMud3JpdGU7XG5cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMud3JpdGV2ID09PSAnZnVuY3Rpb24nKSB0aGlzLl93cml0ZXYgPSBvcHRpb25zLndyaXRldjtcbiAgfVxuXG4gIFN0cmVhbS5jYWxsKHRoaXMpO1xufVxuXG4vLyBPdGhlcndpc2UgcGVvcGxlIGNhbiBwaXBlIFdyaXRhYmxlIHN0cmVhbXMsIHdoaWNoIGlzIGp1c3Qgd3JvbmcuXG5Xcml0YWJsZS5wcm90b3R5cGUucGlwZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5lbWl0KCdlcnJvcicsIG5ldyBFcnJvcignQ2Fubm90IHBpcGUsIG5vdCByZWFkYWJsZScpKTtcbn07XG5cbmZ1bmN0aW9uIHdyaXRlQWZ0ZXJFbmQoc3RyZWFtLCBjYikge1xuICB2YXIgZXIgPSBuZXcgRXJyb3IoJ3dyaXRlIGFmdGVyIGVuZCcpO1xuICAvLyBUT0RPOiBkZWZlciBlcnJvciBldmVudHMgY29uc2lzdGVudGx5IGV2ZXJ5d2hlcmUsIG5vdCBqdXN0IHRoZSBjYlxuICBzdHJlYW0uZW1pdCgnZXJyb3InLCBlcik7XG4gIHByb2Nlc3NOZXh0VGljayhjYiwgZXIpO1xufVxuXG4vLyBJZiB3ZSBnZXQgc29tZXRoaW5nIHRoYXQgaXMgbm90IGEgYnVmZmVyLCBzdHJpbmcsIG51bGwsIG9yIHVuZGVmaW5lZCxcbi8vIGFuZCB3ZSdyZSBub3QgaW4gb2JqZWN0TW9kZSwgdGhlbiB0aGF0J3MgYW4gZXJyb3IuXG4vLyBPdGhlcndpc2Ugc3RyZWFtIGNodW5rcyBhcmUgYWxsIGNvbnNpZGVyZWQgdG8gYmUgb2YgbGVuZ3RoPTEsIGFuZCB0aGVcbi8vIHdhdGVybWFya3MgZGV0ZXJtaW5lIGhvdyBtYW55IG9iamVjdHMgdG8ga2VlcCBpbiB0aGUgYnVmZmVyLCByYXRoZXIgdGhhblxuLy8gaG93IG1hbnkgYnl0ZXMgb3IgY2hhcmFjdGVycy5cbmZ1bmN0aW9uIHZhbGlkQ2h1bmsoc3RyZWFtLCBzdGF0ZSwgY2h1bmssIGNiKSB7XG4gIHZhciB2YWxpZCA9IHRydWU7XG4gIHZhciBlciA9IGZhbHNlO1xuICAvLyBBbHdheXMgdGhyb3cgZXJyb3IgaWYgYSBudWxsIGlzIHdyaXR0ZW5cbiAgLy8gaWYgd2UgYXJlIG5vdCBpbiBvYmplY3QgbW9kZSB0aGVuIHRocm93XG4gIC8vIGlmIGl0IGlzIG5vdCBhIGJ1ZmZlciwgc3RyaW5nLCBvciB1bmRlZmluZWQuXG4gIGlmIChjaHVuayA9PT0gbnVsbCkge1xuICAgIGVyID0gbmV3IFR5cGVFcnJvcignTWF5IG5vdCB3cml0ZSBudWxsIHZhbHVlcyB0byBzdHJlYW0nKTtcbiAgfSBlbHNlIGlmICghQnVmZmVyLmlzQnVmZmVyKGNodW5rKSAmJiB0eXBlb2YgY2h1bmsgIT09ICdzdHJpbmcnICYmIGNodW5rICE9PSB1bmRlZmluZWQgJiYgIXN0YXRlLm9iamVjdE1vZGUpIHtcbiAgICBlciA9IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgbm9uLXN0cmluZy9idWZmZXIgY2h1bmsnKTtcbiAgfVxuICBpZiAoZXIpIHtcbiAgICBzdHJlYW0uZW1pdCgnZXJyb3InLCBlcik7XG4gICAgcHJvY2Vzc05leHRUaWNrKGNiLCBlcik7XG4gICAgdmFsaWQgPSBmYWxzZTtcbiAgfVxuICByZXR1cm4gdmFsaWQ7XG59XG5cbldyaXRhYmxlLnByb3RvdHlwZS53cml0ZSA9IGZ1bmN0aW9uIChjaHVuaywgZW5jb2RpbmcsIGNiKSB7XG4gIHZhciBzdGF0ZSA9IHRoaXMuX3dyaXRhYmxlU3RhdGU7XG4gIHZhciByZXQgPSBmYWxzZTtcblxuICBpZiAodHlwZW9mIGVuY29kaW5nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY2IgPSBlbmNvZGluZztcbiAgICBlbmNvZGluZyA9IG51bGw7XG4gIH1cblxuICBpZiAoQnVmZmVyLmlzQnVmZmVyKGNodW5rKSkgZW5jb2RpbmcgPSAnYnVmZmVyJztlbHNlIGlmICghZW5jb2RpbmcpIGVuY29kaW5nID0gc3RhdGUuZGVmYXVsdEVuY29kaW5nO1xuXG4gIGlmICh0eXBlb2YgY2IgIT09ICdmdW5jdGlvbicpIGNiID0gbm9wO1xuXG4gIGlmIChzdGF0ZS5lbmRlZCkgd3JpdGVBZnRlckVuZCh0aGlzLCBjYik7ZWxzZSBpZiAodmFsaWRDaHVuayh0aGlzLCBzdGF0ZSwgY2h1bmssIGNiKSkge1xuICAgIHN0YXRlLnBlbmRpbmdjYisrO1xuICAgIHJldCA9IHdyaXRlT3JCdWZmZXIodGhpcywgc3RhdGUsIGNodW5rLCBlbmNvZGluZywgY2IpO1xuICB9XG5cbiAgcmV0dXJuIHJldDtcbn07XG5cbldyaXRhYmxlLnByb3RvdHlwZS5jb3JrID0gZnVuY3Rpb24gKCkge1xuICB2YXIgc3RhdGUgPSB0aGlzLl93cml0YWJsZVN0YXRlO1xuXG4gIHN0YXRlLmNvcmtlZCsrO1xufTtcblxuV3JpdGFibGUucHJvdG90eXBlLnVuY29yayA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHN0YXRlID0gdGhpcy5fd3JpdGFibGVTdGF0ZTtcblxuICBpZiAoc3RhdGUuY29ya2VkKSB7XG4gICAgc3RhdGUuY29ya2VkLS07XG5cbiAgICBpZiAoIXN0YXRlLndyaXRpbmcgJiYgIXN0YXRlLmNvcmtlZCAmJiAhc3RhdGUuZmluaXNoZWQgJiYgIXN0YXRlLmJ1ZmZlclByb2Nlc3NpbmcgJiYgc3RhdGUuYnVmZmVyZWRSZXF1ZXN0KSBjbGVhckJ1ZmZlcih0aGlzLCBzdGF0ZSk7XG4gIH1cbn07XG5cbldyaXRhYmxlLnByb3RvdHlwZS5zZXREZWZhdWx0RW5jb2RpbmcgPSBmdW5jdGlvbiBzZXREZWZhdWx0RW5jb2RpbmcoZW5jb2RpbmcpIHtcbiAgLy8gbm9kZTo6UGFyc2VFbmNvZGluZygpIHJlcXVpcmVzIGxvd2VyIGNhc2UuXG4gIGlmICh0eXBlb2YgZW5jb2RpbmcgPT09ICdzdHJpbmcnKSBlbmNvZGluZyA9IGVuY29kaW5nLnRvTG93ZXJDYXNlKCk7XG4gIGlmICghKFsnaGV4JywgJ3V0ZjgnLCAndXRmLTgnLCAnYXNjaWknLCAnYmluYXJ5JywgJ2Jhc2U2NCcsICd1Y3MyJywgJ3Vjcy0yJywgJ3V0ZjE2bGUnLCAndXRmLTE2bGUnLCAncmF3J10uaW5kZXhPZigoZW5jb2RpbmcgKyAnJykudG9Mb3dlckNhc2UoKSkgPiAtMSkpIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZyk7XG4gIHRoaXMuX3dyaXRhYmxlU3RhdGUuZGVmYXVsdEVuY29kaW5nID0gZW5jb2Rpbmc7XG4gIHJldHVybiB0aGlzO1xufTtcblxuZnVuY3Rpb24gZGVjb2RlQ2h1bmsoc3RhdGUsIGNodW5rLCBlbmNvZGluZykge1xuICBpZiAoIXN0YXRlLm9iamVjdE1vZGUgJiYgc3RhdGUuZGVjb2RlU3RyaW5ncyAhPT0gZmFsc2UgJiYgdHlwZW9mIGNodW5rID09PSAnc3RyaW5nJykge1xuICAgIGNodW5rID0gYnVmZmVyU2hpbS5mcm9tKGNodW5rLCBlbmNvZGluZyk7XG4gIH1cbiAgcmV0dXJuIGNodW5rO1xufVxuXG4vLyBpZiB3ZSdyZSBhbHJlYWR5IHdyaXRpbmcgc29tZXRoaW5nLCB0aGVuIGp1c3QgcHV0IHRoaXNcbi8vIGluIHRoZSBxdWV1ZSwgYW5kIHdhaXQgb3VyIHR1cm4uICBPdGhlcndpc2UsIGNhbGwgX3dyaXRlXG4vLyBJZiB3ZSByZXR1cm4gZmFsc2UsIHRoZW4gd2UgbmVlZCBhIGRyYWluIGV2ZW50LCBzbyBzZXQgdGhhdCBmbGFnLlxuZnVuY3Rpb24gd3JpdGVPckJ1ZmZlcihzdHJlYW0sIHN0YXRlLCBjaHVuaywgZW5jb2RpbmcsIGNiKSB7XG4gIGNodW5rID0gZGVjb2RlQ2h1bmsoc3RhdGUsIGNodW5rLCBlbmNvZGluZyk7XG5cbiAgaWYgKEJ1ZmZlci5pc0J1ZmZlcihjaHVuaykpIGVuY29kaW5nID0gJ2J1ZmZlcic7XG4gIHZhciBsZW4gPSBzdGF0ZS5vYmplY3RNb2RlID8gMSA6IGNodW5rLmxlbmd0aDtcblxuICBzdGF0ZS5sZW5ndGggKz0gbGVuO1xuXG4gIHZhciByZXQgPSBzdGF0ZS5sZW5ndGggPCBzdGF0ZS5oaWdoV2F0ZXJNYXJrO1xuICAvLyB3ZSBtdXN0IGVuc3VyZSB0aGF0IHByZXZpb3VzIG5lZWREcmFpbiB3aWxsIG5vdCBiZSByZXNldCB0byBmYWxzZS5cbiAgaWYgKCFyZXQpIHN0YXRlLm5lZWREcmFpbiA9IHRydWU7XG5cbiAgaWYgKHN0YXRlLndyaXRpbmcgfHwgc3RhdGUuY29ya2VkKSB7XG4gICAgdmFyIGxhc3QgPSBzdGF0ZS5sYXN0QnVmZmVyZWRSZXF1ZXN0O1xuICAgIHN0YXRlLmxhc3RCdWZmZXJlZFJlcXVlc3QgPSBuZXcgV3JpdGVSZXEoY2h1bmssIGVuY29kaW5nLCBjYik7XG4gICAgaWYgKGxhc3QpIHtcbiAgICAgIGxhc3QubmV4dCA9IHN0YXRlLmxhc3RCdWZmZXJlZFJlcXVlc3Q7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXRlLmJ1ZmZlcmVkUmVxdWVzdCA9IHN0YXRlLmxhc3RCdWZmZXJlZFJlcXVlc3Q7XG4gICAgfVxuICAgIHN0YXRlLmJ1ZmZlcmVkUmVxdWVzdENvdW50ICs9IDE7XG4gIH0gZWxzZSB7XG4gICAgZG9Xcml0ZShzdHJlYW0sIHN0YXRlLCBmYWxzZSwgbGVuLCBjaHVuaywgZW5jb2RpbmcsIGNiKTtcbiAgfVxuXG4gIHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIGRvV3JpdGUoc3RyZWFtLCBzdGF0ZSwgd3JpdGV2LCBsZW4sIGNodW5rLCBlbmNvZGluZywgY2IpIHtcbiAgc3RhdGUud3JpdGVsZW4gPSBsZW47XG4gIHN0YXRlLndyaXRlY2IgPSBjYjtcbiAgc3RhdGUud3JpdGluZyA9IHRydWU7XG4gIHN0YXRlLnN5bmMgPSB0cnVlO1xuICBpZiAod3JpdGV2KSBzdHJlYW0uX3dyaXRldihjaHVuaywgc3RhdGUub253cml0ZSk7ZWxzZSBzdHJlYW0uX3dyaXRlKGNodW5rLCBlbmNvZGluZywgc3RhdGUub253cml0ZSk7XG4gIHN0YXRlLnN5bmMgPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gb253cml0ZUVycm9yKHN0cmVhbSwgc3RhdGUsIHN5bmMsIGVyLCBjYikge1xuICAtLXN0YXRlLnBlbmRpbmdjYjtcbiAgaWYgKHN5bmMpIHByb2Nlc3NOZXh0VGljayhjYiwgZXIpO2Vsc2UgY2IoZXIpO1xuXG4gIHN0cmVhbS5fd3JpdGFibGVTdGF0ZS5lcnJvckVtaXR0ZWQgPSB0cnVlO1xuICBzdHJlYW0uZW1pdCgnZXJyb3InLCBlcik7XG59XG5cbmZ1bmN0aW9uIG9ud3JpdGVTdGF0ZVVwZGF0ZShzdGF0ZSkge1xuICBzdGF0ZS53cml0aW5nID0gZmFsc2U7XG4gIHN0YXRlLndyaXRlY2IgPSBudWxsO1xuICBzdGF0ZS5sZW5ndGggLT0gc3RhdGUud3JpdGVsZW47XG4gIHN0YXRlLndyaXRlbGVuID0gMDtcbn1cblxuZnVuY3Rpb24gb253cml0ZShzdHJlYW0sIGVyKSB7XG4gIHZhciBzdGF0ZSA9IHN0cmVhbS5fd3JpdGFibGVTdGF0ZTtcbiAgdmFyIHN5bmMgPSBzdGF0ZS5zeW5jO1xuICB2YXIgY2IgPSBzdGF0ZS53cml0ZWNiO1xuXG4gIG9ud3JpdGVTdGF0ZVVwZGF0ZShzdGF0ZSk7XG5cbiAgaWYgKGVyKSBvbndyaXRlRXJyb3Ioc3RyZWFtLCBzdGF0ZSwgc3luYywgZXIsIGNiKTtlbHNlIHtcbiAgICAvLyBDaGVjayBpZiB3ZSdyZSBhY3R1YWxseSByZWFkeSB0byBmaW5pc2gsIGJ1dCBkb24ndCBlbWl0IHlldFxuICAgIHZhciBmaW5pc2hlZCA9IG5lZWRGaW5pc2goc3RhdGUpO1xuXG4gICAgaWYgKCFmaW5pc2hlZCAmJiAhc3RhdGUuY29ya2VkICYmICFzdGF0ZS5idWZmZXJQcm9jZXNzaW5nICYmIHN0YXRlLmJ1ZmZlcmVkUmVxdWVzdCkge1xuICAgICAgY2xlYXJCdWZmZXIoc3RyZWFtLCBzdGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKHN5bmMpIHtcbiAgICAgIC8qPHJlcGxhY2VtZW50PiovXG4gICAgICBhc3luY1dyaXRlKGFmdGVyV3JpdGUsIHN0cmVhbSwgc3RhdGUsIGZpbmlzaGVkLCBjYik7XG4gICAgICAvKjwvcmVwbGFjZW1lbnQ+Ki9cbiAgICB9IGVsc2Uge1xuICAgICAgICBhZnRlcldyaXRlKHN0cmVhbSwgc3RhdGUsIGZpbmlzaGVkLCBjYik7XG4gICAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYWZ0ZXJXcml0ZShzdHJlYW0sIHN0YXRlLCBmaW5pc2hlZCwgY2IpIHtcbiAgaWYgKCFmaW5pc2hlZCkgb253cml0ZURyYWluKHN0cmVhbSwgc3RhdGUpO1xuICBzdGF0ZS5wZW5kaW5nY2ItLTtcbiAgY2IoKTtcbiAgZmluaXNoTWF5YmUoc3RyZWFtLCBzdGF0ZSk7XG59XG5cbi8vIE11c3QgZm9yY2UgY2FsbGJhY2sgdG8gYmUgY2FsbGVkIG9uIG5leHRUaWNrLCBzbyB0aGF0IHdlIGRvbid0XG4vLyBlbWl0ICdkcmFpbicgYmVmb3JlIHRoZSB3cml0ZSgpIGNvbnN1bWVyIGdldHMgdGhlICdmYWxzZScgcmV0dXJuXG4vLyB2YWx1ZSwgYW5kIGhhcyBhIGNoYW5jZSB0byBhdHRhY2ggYSAnZHJhaW4nIGxpc3RlbmVyLlxuZnVuY3Rpb24gb253cml0ZURyYWluKHN0cmVhbSwgc3RhdGUpIHtcbiAgaWYgKHN0YXRlLmxlbmd0aCA9PT0gMCAmJiBzdGF0ZS5uZWVkRHJhaW4pIHtcbiAgICBzdGF0ZS5uZWVkRHJhaW4gPSBmYWxzZTtcbiAgICBzdHJlYW0uZW1pdCgnZHJhaW4nKTtcbiAgfVxufVxuXG4vLyBpZiB0aGVyZSdzIHNvbWV0aGluZyBpbiB0aGUgYnVmZmVyIHdhaXRpbmcsIHRoZW4gcHJvY2VzcyBpdFxuZnVuY3Rpb24gY2xlYXJCdWZmZXIoc3RyZWFtLCBzdGF0ZSkge1xuICBzdGF0ZS5idWZmZXJQcm9jZXNzaW5nID0gdHJ1ZTtcbiAgdmFyIGVudHJ5ID0gc3RhdGUuYnVmZmVyZWRSZXF1ZXN0O1xuXG4gIGlmIChzdHJlYW0uX3dyaXRldiAmJiBlbnRyeSAmJiBlbnRyeS5uZXh0KSB7XG4gICAgLy8gRmFzdCBjYXNlLCB3cml0ZSBldmVyeXRoaW5nIHVzaW5nIF93cml0ZXYoKVxuICAgIHZhciBsID0gc3RhdGUuYnVmZmVyZWRSZXF1ZXN0Q291bnQ7XG4gICAgdmFyIGJ1ZmZlciA9IG5ldyBBcnJheShsKTtcbiAgICB2YXIgaG9sZGVyID0gc3RhdGUuY29ya2VkUmVxdWVzdHNGcmVlO1xuICAgIGhvbGRlci5lbnRyeSA9IGVudHJ5O1xuXG4gICAgdmFyIGNvdW50ID0gMDtcbiAgICB3aGlsZSAoZW50cnkpIHtcbiAgICAgIGJ1ZmZlcltjb3VudF0gPSBlbnRyeTtcbiAgICAgIGVudHJ5ID0gZW50cnkubmV4dDtcbiAgICAgIGNvdW50ICs9IDE7XG4gICAgfVxuXG4gICAgZG9Xcml0ZShzdHJlYW0sIHN0YXRlLCB0cnVlLCBzdGF0ZS5sZW5ndGgsIGJ1ZmZlciwgJycsIGhvbGRlci5maW5pc2gpO1xuXG4gICAgLy8gZG9Xcml0ZSBpcyBhbG1vc3QgYWx3YXlzIGFzeW5jLCBkZWZlciB0aGVzZSB0byBzYXZlIGEgYml0IG9mIHRpbWVcbiAgICAvLyBhcyB0aGUgaG90IHBhdGggZW5kcyB3aXRoIGRvV3JpdGVcbiAgICBzdGF0ZS5wZW5kaW5nY2IrKztcbiAgICBzdGF0ZS5sYXN0QnVmZmVyZWRSZXF1ZXN0ID0gbnVsbDtcbiAgICBpZiAoaG9sZGVyLm5leHQpIHtcbiAgICAgIHN0YXRlLmNvcmtlZFJlcXVlc3RzRnJlZSA9IGhvbGRlci5uZXh0O1xuICAgICAgaG9sZGVyLm5leHQgPSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGF0ZS5jb3JrZWRSZXF1ZXN0c0ZyZWUgPSBuZXcgQ29ya2VkUmVxdWVzdChzdGF0ZSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIFNsb3cgY2FzZSwgd3JpdGUgY2h1bmtzIG9uZS1ieS1vbmVcbiAgICB3aGlsZSAoZW50cnkpIHtcbiAgICAgIHZhciBjaHVuayA9IGVudHJ5LmNodW5rO1xuICAgICAgdmFyIGVuY29kaW5nID0gZW50cnkuZW5jb2Rpbmc7XG4gICAgICB2YXIgY2IgPSBlbnRyeS5jYWxsYmFjaztcbiAgICAgIHZhciBsZW4gPSBzdGF0ZS5vYmplY3RNb2RlID8gMSA6IGNodW5rLmxlbmd0aDtcblxuICAgICAgZG9Xcml0ZShzdHJlYW0sIHN0YXRlLCBmYWxzZSwgbGVuLCBjaHVuaywgZW5jb2RpbmcsIGNiKTtcbiAgICAgIGVudHJ5ID0gZW50cnkubmV4dDtcbiAgICAgIC8vIGlmIHdlIGRpZG4ndCBjYWxsIHRoZSBvbndyaXRlIGltbWVkaWF0ZWx5LCB0aGVuXG4gICAgICAvLyBpdCBtZWFucyB0aGF0IHdlIG5lZWQgdG8gd2FpdCB1bnRpbCBpdCBkb2VzLlxuICAgICAgLy8gYWxzbywgdGhhdCBtZWFucyB0aGF0IHRoZSBjaHVuayBhbmQgY2IgYXJlIGN1cnJlbnRseVxuICAgICAgLy8gYmVpbmcgcHJvY2Vzc2VkLCBzbyBtb3ZlIHRoZSBidWZmZXIgY291bnRlciBwYXN0IHRoZW0uXG4gICAgICBpZiAoc3RhdGUud3JpdGluZykge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZW50cnkgPT09IG51bGwpIHN0YXRlLmxhc3RCdWZmZXJlZFJlcXVlc3QgPSBudWxsO1xuICB9XG5cbiAgc3RhdGUuYnVmZmVyZWRSZXF1ZXN0Q291bnQgPSAwO1xuICBzdGF0ZS5idWZmZXJlZFJlcXVlc3QgPSBlbnRyeTtcbiAgc3RhdGUuYnVmZmVyUHJvY2Vzc2luZyA9IGZhbHNlO1xufVxuXG5Xcml0YWJsZS5wcm90b3R5cGUuX3dyaXRlID0gZnVuY3Rpb24gKGNodW5rLCBlbmNvZGluZywgY2IpIHtcbiAgY2IobmV3IEVycm9yKCdfd3JpdGUoKSBpcyBub3QgaW1wbGVtZW50ZWQnKSk7XG59O1xuXG5Xcml0YWJsZS5wcm90b3R5cGUuX3dyaXRldiA9IG51bGw7XG5cbldyaXRhYmxlLnByb3RvdHlwZS5lbmQgPSBmdW5jdGlvbiAoY2h1bmssIGVuY29kaW5nLCBjYikge1xuICB2YXIgc3RhdGUgPSB0aGlzLl93cml0YWJsZVN0YXRlO1xuXG4gIGlmICh0eXBlb2YgY2h1bmsgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjYiA9IGNodW5rO1xuICAgIGNodW5rID0gbnVsbDtcbiAgICBlbmNvZGluZyA9IG51bGw7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGVuY29kaW5nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY2IgPSBlbmNvZGluZztcbiAgICBlbmNvZGluZyA9IG51bGw7XG4gIH1cblxuICBpZiAoY2h1bmsgIT09IG51bGwgJiYgY2h1bmsgIT09IHVuZGVmaW5lZCkgdGhpcy53cml0ZShjaHVuaywgZW5jb2RpbmcpO1xuXG4gIC8vIC5lbmQoKSBmdWxseSB1bmNvcmtzXG4gIGlmIChzdGF0ZS5jb3JrZWQpIHtcbiAgICBzdGF0ZS5jb3JrZWQgPSAxO1xuICAgIHRoaXMudW5jb3JrKCk7XG4gIH1cblxuICAvLyBpZ25vcmUgdW5uZWNlc3NhcnkgZW5kKCkgY2FsbHMuXG4gIGlmICghc3RhdGUuZW5kaW5nICYmICFzdGF0ZS5maW5pc2hlZCkgZW5kV3JpdGFibGUodGhpcywgc3RhdGUsIGNiKTtcbn07XG5cbmZ1bmN0aW9uIG5lZWRGaW5pc2goc3RhdGUpIHtcbiAgcmV0dXJuIHN0YXRlLmVuZGluZyAmJiBzdGF0ZS5sZW5ndGggPT09IDAgJiYgc3RhdGUuYnVmZmVyZWRSZXF1ZXN0ID09PSBudWxsICYmICFzdGF0ZS5maW5pc2hlZCAmJiAhc3RhdGUud3JpdGluZztcbn1cblxuZnVuY3Rpb24gcHJlZmluaXNoKHN0cmVhbSwgc3RhdGUpIHtcbiAgaWYgKCFzdGF0ZS5wcmVmaW5pc2hlZCkge1xuICAgIHN0YXRlLnByZWZpbmlzaGVkID0gdHJ1ZTtcbiAgICBzdHJlYW0uZW1pdCgncHJlZmluaXNoJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZmluaXNoTWF5YmUoc3RyZWFtLCBzdGF0ZSkge1xuICB2YXIgbmVlZCA9IG5lZWRGaW5pc2goc3RhdGUpO1xuICBpZiAobmVlZCkge1xuICAgIGlmIChzdGF0ZS5wZW5kaW5nY2IgPT09IDApIHtcbiAgICAgIHByZWZpbmlzaChzdHJlYW0sIHN0YXRlKTtcbiAgICAgIHN0YXRlLmZpbmlzaGVkID0gdHJ1ZTtcbiAgICAgIHN0cmVhbS5lbWl0KCdmaW5pc2gnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJlZmluaXNoKHN0cmVhbSwgc3RhdGUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbmVlZDtcbn1cblxuZnVuY3Rpb24gZW5kV3JpdGFibGUoc3RyZWFtLCBzdGF0ZSwgY2IpIHtcbiAgc3RhdGUuZW5kaW5nID0gdHJ1ZTtcbiAgZmluaXNoTWF5YmUoc3RyZWFtLCBzdGF0ZSk7XG4gIGlmIChjYikge1xuICAgIGlmIChzdGF0ZS5maW5pc2hlZCkgcHJvY2Vzc05leHRUaWNrKGNiKTtlbHNlIHN0cmVhbS5vbmNlKCdmaW5pc2gnLCBjYik7XG4gIH1cbiAgc3RhdGUuZW5kZWQgPSB0cnVlO1xuICBzdHJlYW0ud3JpdGFibGUgPSBmYWxzZTtcbn1cblxuLy8gSXQgc2VlbXMgYSBsaW5rZWQgbGlzdCBidXQgaXQgaXMgbm90XG4vLyB0aGVyZSB3aWxsIGJlIG9ubHkgMiBvZiB0aGVzZSBmb3IgZWFjaCBzdHJlYW1cbmZ1bmN0aW9uIENvcmtlZFJlcXVlc3Qoc3RhdGUpIHtcbiAgdmFyIF90aGlzID0gdGhpcztcblxuICB0aGlzLm5leHQgPSBudWxsO1xuICB0aGlzLmVudHJ5ID0gbnVsbDtcblxuICB0aGlzLmZpbmlzaCA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgICB2YXIgZW50cnkgPSBfdGhpcy5lbnRyeTtcbiAgICBfdGhpcy5lbnRyeSA9IG51bGw7XG4gICAgd2hpbGUgKGVudHJ5KSB7XG4gICAgICB2YXIgY2IgPSBlbnRyeS5jYWxsYmFjaztcbiAgICAgIHN0YXRlLnBlbmRpbmdjYi0tO1xuICAgICAgY2IoZXJyKTtcbiAgICAgIGVudHJ5ID0gZW50cnkubmV4dDtcbiAgICB9XG4gICAgaWYgKHN0YXRlLmNvcmtlZFJlcXVlc3RzRnJlZSkge1xuICAgICAgc3RhdGUuY29ya2VkUmVxdWVzdHNGcmVlLm5leHQgPSBfdGhpcztcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhdGUuY29ya2VkUmVxdWVzdHNGcmVlID0gX3RoaXM7XG4gICAgfVxuICB9O1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFkYWJsZS1zdHJlYW0vbGliL19zdHJlYW1fd3JpdGFibGUuanNcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIEJ1ZmZlciA9IHJlcXVpcmUoJ2J1ZmZlcicpLkJ1ZmZlcjtcbi8qPHJlcGxhY2VtZW50PiovXG52YXIgYnVmZmVyU2hpbSA9IHJlcXVpcmUoJ2J1ZmZlci1zaGltcycpO1xuLyo8L3JlcGxhY2VtZW50PiovXG5cbm1vZHVsZS5leHBvcnRzID0gQnVmZmVyTGlzdDtcblxuZnVuY3Rpb24gQnVmZmVyTGlzdCgpIHtcbiAgdGhpcy5oZWFkID0gbnVsbDtcbiAgdGhpcy50YWlsID0gbnVsbDtcbiAgdGhpcy5sZW5ndGggPSAwO1xufVxuXG5CdWZmZXJMaXN0LnByb3RvdHlwZS5wdXNoID0gZnVuY3Rpb24gKHYpIHtcbiAgdmFyIGVudHJ5ID0geyBkYXRhOiB2LCBuZXh0OiBudWxsIH07XG4gIGlmICh0aGlzLmxlbmd0aCA+IDApIHRoaXMudGFpbC5uZXh0ID0gZW50cnk7ZWxzZSB0aGlzLmhlYWQgPSBlbnRyeTtcbiAgdGhpcy50YWlsID0gZW50cnk7XG4gICsrdGhpcy5sZW5ndGg7XG59O1xuXG5CdWZmZXJMaXN0LnByb3RvdHlwZS51bnNoaWZ0ID0gZnVuY3Rpb24gKHYpIHtcbiAgdmFyIGVudHJ5ID0geyBkYXRhOiB2LCBuZXh0OiB0aGlzLmhlYWQgfTtcbiAgaWYgKHRoaXMubGVuZ3RoID09PSAwKSB0aGlzLnRhaWwgPSBlbnRyeTtcbiAgdGhpcy5oZWFkID0gZW50cnk7XG4gICsrdGhpcy5sZW5ndGg7XG59O1xuXG5CdWZmZXJMaXN0LnByb3RvdHlwZS5zaGlmdCA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMubGVuZ3RoID09PSAwKSByZXR1cm47XG4gIHZhciByZXQgPSB0aGlzLmhlYWQuZGF0YTtcbiAgaWYgKHRoaXMubGVuZ3RoID09PSAxKSB0aGlzLmhlYWQgPSB0aGlzLnRhaWwgPSBudWxsO2Vsc2UgdGhpcy5oZWFkID0gdGhpcy5oZWFkLm5leHQ7XG4gIC0tdGhpcy5sZW5ndGg7XG4gIHJldHVybiByZXQ7XG59O1xuXG5CdWZmZXJMaXN0LnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5oZWFkID0gdGhpcy50YWlsID0gbnVsbDtcbiAgdGhpcy5sZW5ndGggPSAwO1xufTtcblxuQnVmZmVyTGlzdC5wcm90b3R5cGUuam9pbiA9IGZ1bmN0aW9uIChzKSB7XG4gIGlmICh0aGlzLmxlbmd0aCA9PT0gMCkgcmV0dXJuICcnO1xuICB2YXIgcCA9IHRoaXMuaGVhZDtcbiAgdmFyIHJldCA9ICcnICsgcC5kYXRhO1xuICB3aGlsZSAocCA9IHAubmV4dCkge1xuICAgIHJldCArPSBzICsgcC5kYXRhO1xuICB9cmV0dXJuIHJldDtcbn07XG5cbkJ1ZmZlckxpc3QucHJvdG90eXBlLmNvbmNhdCA9IGZ1bmN0aW9uIChuKSB7XG4gIGlmICh0aGlzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIGJ1ZmZlclNoaW0uYWxsb2MoMCk7XG4gIGlmICh0aGlzLmxlbmd0aCA9PT0gMSkgcmV0dXJuIHRoaXMuaGVhZC5kYXRhO1xuICB2YXIgcmV0ID0gYnVmZmVyU2hpbS5hbGxvY1Vuc2FmZShuID4+PiAwKTtcbiAgdmFyIHAgPSB0aGlzLmhlYWQ7XG4gIHZhciBpID0gMDtcbiAgd2hpbGUgKHApIHtcbiAgICBwLmRhdGEuY29weShyZXQsIGkpO1xuICAgIGkgKz0gcC5kYXRhLmxlbmd0aDtcbiAgICBwID0gcC5uZXh0O1xuICB9XG4gIHJldHVybiByZXQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFkYWJsZS1zdHJlYW0vbGliL2ludGVybmFsL3N0cmVhbXMvQnVmZmVyTGlzdC5qc1xuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9saWIvX3N0cmVhbV90cmFuc2Zvcm0uanNcIilcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFkYWJsZS1zdHJlYW0vdHJhbnNmb3JtLmpzXG4vLyBtb2R1bGUgaWQgPSAzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuQ29weXJpZ2h0IChjKSAyMDE0LTIwMTYsIE1hdHRlbyBDb2xsaW5hIDxoZWxsb0BtYXR0ZW9jb2xsaW5hLmNvbT5cblxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQsIHByb3ZpZGVkIHRoYXQgdGhlIGFib3ZlXG5jb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIGFwcGVhciBpbiBhbGwgY29waWVzLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFU1xuV0lUSCBSRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRlxuTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1JcbkFOWSBTUEVDSUFMLCBESVJFQ1QsIElORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVNcbldIQVRTT0VWRVIgUkVTVUxUSU5HIEZST00gTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTlxuQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SIE9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1JcbklOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SIFBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXG4qL1xuXG4ndXNlIHN0cmljdCdcblxudmFyIHRocm91Z2ggPSByZXF1aXJlKCd0aHJvdWdoMicpXG52YXIgU3RyaW5nRGVjb2RlciA9IHJlcXVpcmUoJ3N0cmluZ19kZWNvZGVyJykuU3RyaW5nRGVjb2RlclxuXG5mdW5jdGlvbiB0cmFuc2Zvcm0gKGNodW5rLCBlbmMsIGNiKSB7XG4gIHRoaXMuX2xhc3QgKz0gdGhpcy5fZGVjb2Rlci53cml0ZShjaHVuaylcbiAgaWYgKHRoaXMuX2xhc3QubGVuZ3RoID4gdGhpcy5tYXhMZW5ndGgpIHtcbiAgICByZXR1cm4gY2IobmV3IEVycm9yKCdtYXhpbXVtIGJ1ZmZlciByZWFjaGVkJykpXG4gIH1cblxuICB2YXIgbGlzdCA9IHRoaXMuX2xhc3Quc3BsaXQodGhpcy5tYXRjaGVyKVxuXG4gIHRoaXMuX2xhc3QgPSBsaXN0LnBvcCgpXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgcHVzaCh0aGlzLCB0aGlzLm1hcHBlcihsaXN0W2ldKSlcbiAgfVxuXG4gIGNiKClcbn1cblxuZnVuY3Rpb24gZmx1c2ggKGNiKSB7XG4gIC8vIGZvcndhcmQgYW55IGdpYmJlcmlzaCBsZWZ0IGluIHRoZXJlXG4gIHRoaXMuX2xhc3QgKz0gdGhpcy5fZGVjb2Rlci5lbmQoKVxuXG4gIGlmICh0aGlzLl9sYXN0KSB7XG4gICAgcHVzaCh0aGlzLCB0aGlzLm1hcHBlcih0aGlzLl9sYXN0KSlcbiAgfVxuXG4gIGNiKClcbn1cblxuZnVuY3Rpb24gcHVzaCAoc2VsZiwgdmFsKSB7XG4gIGlmICh2YWwgIT09IHVuZGVmaW5lZCkge1xuICAgIHNlbGYucHVzaCh2YWwpXG4gIH1cbn1cblxuZnVuY3Rpb24gbm9vcCAoaW5jb21pbmcpIHtcbiAgcmV0dXJuIGluY29taW5nXG59XG5cbmZ1bmN0aW9uIHNwbGl0IChtYXRjaGVyLCBtYXBwZXIsIG9wdGlvbnMpIHtcbiAgLy8gU2V0IGRlZmF1bHRzIGZvciBhbnkgYXJndW1lbnRzIG5vdCBzdXBwbGllZC5cbiAgbWF0Y2hlciA9IG1hdGNoZXIgfHwgL1xccj9cXG4vXG4gIG1hcHBlciA9IG1hcHBlciB8fCBub29wXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG5cbiAgLy8gVGVzdCBhcmd1bWVudHMgZXhwbGljaXRseS5cbiAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgY2FzZSAxOlxuICAgICAgLy8gSWYgbWFwcGVyIGlzIG9ubHkgYXJndW1lbnQuXG4gICAgICBpZiAodHlwZW9mIG1hdGNoZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgbWFwcGVyID0gbWF0Y2hlclxuICAgICAgICBtYXRjaGVyID0gL1xccj9cXG4vXG4gICAgICAvLyBJZiBvcHRpb25zIGlzIG9ubHkgYXJndW1lbnQuXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBtYXRjaGVyID09PSAnb2JqZWN0JyAmJiAhKG1hdGNoZXIgaW5zdGFuY2VvZiBSZWdFeHApKSB7XG4gICAgICAgIG9wdGlvbnMgPSBtYXRjaGVyXG4gICAgICAgIG1hdGNoZXIgPSAvXFxyP1xcbi9cbiAgICAgIH1cbiAgICAgIGJyZWFrXG5cbiAgICBjYXNlIDI6XG4gICAgICAvLyBJZiBtYXBwZXIgYW5kIG9wdGlvbnMgYXJlIGFyZ3VtZW50cy5cbiAgICAgIGlmICh0eXBlb2YgbWF0Y2hlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBvcHRpb25zID0gbWFwcGVyXG4gICAgICAgIG1hcHBlciA9IG1hdGNoZXJcbiAgICAgICAgbWF0Y2hlciA9IC9cXHI/XFxuL1xuICAgICAgLy8gSWYgbWF0Y2hlciBhbmQgb3B0aW9ucyBhcmUgYXJndW1lbnRzLlxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgbWFwcGVyID09PSAnb2JqZWN0Jykge1xuICAgICAgICBvcHRpb25zID0gbWFwcGVyXG4gICAgICAgIG1hcHBlciA9IG5vb3BcbiAgICAgIH1cbiAgfVxuXG4gIHZhciBzdHJlYW0gPSB0aHJvdWdoKG9wdGlvbnMsIHRyYW5zZm9ybSwgZmx1c2gpXG5cbiAgLy8gdGhpcyBzdHJlYW0gaXMgaW4gb2JqZWN0TW9kZSBvbmx5IGluIHRoZSByZWFkYWJsZSBwYXJ0XG4gIHN0cmVhbS5fcmVhZGFibGVTdGF0ZS5vYmplY3RNb2RlID0gdHJ1ZVxuXG4gIHN0cmVhbS5fbGFzdCA9ICcnXG4gIHN0cmVhbS5fZGVjb2RlciA9IG5ldyBTdHJpbmdEZWNvZGVyKCd1dGY4JylcbiAgc3RyZWFtLm1hdGNoZXIgPSBtYXRjaGVyXG4gIHN0cmVhbS5tYXBwZXIgPSBtYXBwZXJcbiAgc3RyZWFtLm1heExlbmd0aCA9IG9wdGlvbnMubWF4TGVuZ3RoXG5cbiAgcmV0dXJuIHN0cmVhbVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNwbGl0XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc3BsaXQyL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgVHJhbnNmb3JtID0gcmVxdWlyZSgncmVhZGFibGUtc3RyZWFtL3RyYW5zZm9ybScpXG4gICwgaW5oZXJpdHMgID0gcmVxdWlyZSgndXRpbCcpLmluaGVyaXRzXG4gICwgeHRlbmQgICAgID0gcmVxdWlyZSgneHRlbmQnKVxuXG5mdW5jdGlvbiBEZXN0cm95YWJsZVRyYW5zZm9ybShvcHRzKSB7XG4gIFRyYW5zZm9ybS5jYWxsKHRoaXMsIG9wdHMpXG4gIHRoaXMuX2Rlc3Ryb3llZCA9IGZhbHNlXG59XG5cbmluaGVyaXRzKERlc3Ryb3lhYmxlVHJhbnNmb3JtLCBUcmFuc2Zvcm0pXG5cbkRlc3Ryb3lhYmxlVHJhbnNmb3JtLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oZXJyKSB7XG4gIGlmICh0aGlzLl9kZXN0cm95ZWQpIHJldHVyblxuICB0aGlzLl9kZXN0cm95ZWQgPSB0cnVlXG4gIFxuICB2YXIgc2VsZiA9IHRoaXNcbiAgcHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbigpIHtcbiAgICBpZiAoZXJyKVxuICAgICAgc2VsZi5lbWl0KCdlcnJvcicsIGVycilcbiAgICBzZWxmLmVtaXQoJ2Nsb3NlJylcbiAgfSlcbn1cblxuLy8gYSBub29wIF90cmFuc2Zvcm0gZnVuY3Rpb25cbmZ1bmN0aW9uIG5vb3AgKGNodW5rLCBlbmMsIGNhbGxiYWNrKSB7XG4gIGNhbGxiYWNrKG51bGwsIGNodW5rKVxufVxuXG5cbi8vIGNyZWF0ZSBhIG5ldyBleHBvcnQgZnVuY3Rpb24sIHVzZWQgYnkgYm90aCB0aGUgbWFpbiBleHBvcnQgYW5kXG4vLyB0aGUgLmN0b3IgZXhwb3J0LCBjb250YWlucyBjb21tb24gbG9naWMgZm9yIGRlYWxpbmcgd2l0aCBhcmd1bWVudHNcbmZ1bmN0aW9uIHRocm91Z2gyIChjb25zdHJ1Y3QpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChvcHRpb25zLCB0cmFuc2Zvcm0sIGZsdXNoKSB7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zID09ICdmdW5jdGlvbicpIHtcbiAgICAgIGZsdXNoICAgICA9IHRyYW5zZm9ybVxuICAgICAgdHJhbnNmb3JtID0gb3B0aW9uc1xuICAgICAgb3B0aW9ucyAgID0ge31cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHRyYW5zZm9ybSAhPSAnZnVuY3Rpb24nKVxuICAgICAgdHJhbnNmb3JtID0gbm9vcFxuXG4gICAgaWYgKHR5cGVvZiBmbHVzaCAhPSAnZnVuY3Rpb24nKVxuICAgICAgZmx1c2ggPSBudWxsXG5cbiAgICByZXR1cm4gY29uc3RydWN0KG9wdGlvbnMsIHRyYW5zZm9ybSwgZmx1c2gpXG4gIH1cbn1cblxuXG4vLyBtYWluIGV4cG9ydCwganVzdCBtYWtlIG1lIGEgdHJhbnNmb3JtIHN0cmVhbSFcbm1vZHVsZS5leHBvcnRzID0gdGhyb3VnaDIoZnVuY3Rpb24gKG9wdGlvbnMsIHRyYW5zZm9ybSwgZmx1c2gpIHtcbiAgdmFyIHQyID0gbmV3IERlc3Ryb3lhYmxlVHJhbnNmb3JtKG9wdGlvbnMpXG5cbiAgdDIuX3RyYW5zZm9ybSA9IHRyYW5zZm9ybVxuXG4gIGlmIChmbHVzaClcbiAgICB0Mi5fZmx1c2ggPSBmbHVzaFxuXG4gIHJldHVybiB0MlxufSlcblxuXG4vLyBtYWtlIG1lIGEgcmV1c2FibGUgcHJvdG90eXBlIHRoYXQgSSBjYW4gYG5ld2AsIG9yIGltcGxpY2l0bHkgYG5ld2Bcbi8vIHdpdGggYSBjb25zdHJ1Y3RvciBjYWxsXG5tb2R1bGUuZXhwb3J0cy5jdG9yID0gdGhyb3VnaDIoZnVuY3Rpb24gKG9wdGlvbnMsIHRyYW5zZm9ybSwgZmx1c2gpIHtcbiAgZnVuY3Rpb24gVGhyb3VnaDIgKG92ZXJyaWRlKSB7XG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFRocm91Z2gyKSlcbiAgICAgIHJldHVybiBuZXcgVGhyb3VnaDIob3ZlcnJpZGUpXG5cbiAgICB0aGlzLm9wdGlvbnMgPSB4dGVuZChvcHRpb25zLCBvdmVycmlkZSlcblxuICAgIERlc3Ryb3lhYmxlVHJhbnNmb3JtLmNhbGwodGhpcywgdGhpcy5vcHRpb25zKVxuICB9XG5cbiAgaW5oZXJpdHMoVGhyb3VnaDIsIERlc3Ryb3lhYmxlVHJhbnNmb3JtKVxuXG4gIFRocm91Z2gyLnByb3RvdHlwZS5fdHJhbnNmb3JtID0gdHJhbnNmb3JtXG5cbiAgaWYgKGZsdXNoKVxuICAgIFRocm91Z2gyLnByb3RvdHlwZS5fZmx1c2ggPSBmbHVzaFxuXG4gIHJldHVybiBUaHJvdWdoMlxufSlcblxuXG5tb2R1bGUuZXhwb3J0cy5vYmogPSB0aHJvdWdoMihmdW5jdGlvbiAob3B0aW9ucywgdHJhbnNmb3JtLCBmbHVzaCkge1xuICB2YXIgdDIgPSBuZXcgRGVzdHJveWFibGVUcmFuc2Zvcm0oeHRlbmQoeyBvYmplY3RNb2RlOiB0cnVlLCBoaWdoV2F0ZXJNYXJrOiAxNiB9LCBvcHRpb25zKSlcblxuICB0Mi5fdHJhbnNmb3JtID0gdHJhbnNmb3JtXG5cbiAgaWYgKGZsdXNoKVxuICAgIHQyLl9mbHVzaCA9IGZsdXNoXG5cbiAgcmV0dXJuIHQyXG59KVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Rocm91Z2gyL3Rocm91Z2gyLmpzXG4vLyBtb2R1bGUgaWQgPSAzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbi8qKlxuICogRm9yIE5vZGUuanMsIHNpbXBseSByZS1leHBvcnQgdGhlIGNvcmUgYHV0aWwuZGVwcmVjYXRlYCBmdW5jdGlvbi5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJ3V0aWwnKS5kZXByZWNhdGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdXRpbC1kZXByZWNhdGUvbm9kZS5qc1xuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcclxuXHRpZighbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xyXG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XHJcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcclxuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxyXG5cdFx0aWYoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XHJcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xyXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcclxuXHR9XHJcblx0cmV0dXJuIG1vZHVsZTtcclxufTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBSZXR1cm5zIGEgd3JhcHBlciBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSB3cmFwcGVkIGNhbGxiYWNrXG4vLyBUaGUgd3JhcHBlciBmdW5jdGlvbiBzaG91bGQgZG8gc29tZSBzdHVmZiwgYW5kIHJldHVybiBhXG4vLyBwcmVzdW1hYmx5IGRpZmZlcmVudCBjYWxsYmFjayBmdW5jdGlvbi5cbi8vIFRoaXMgbWFrZXMgc3VyZSB0aGF0IG93biBwcm9wZXJ0aWVzIGFyZSByZXRhaW5lZCwgc28gdGhhdFxuLy8gZGVjb3JhdGlvbnMgYW5kIHN1Y2ggYXJlIG5vdCBsb3N0IGFsb25nIHRoZSB3YXkuXG5tb2R1bGUuZXhwb3J0cyA9IHdyYXBweVxuZnVuY3Rpb24gd3JhcHB5IChmbiwgY2IpIHtcbiAgaWYgKGZuICYmIGNiKSByZXR1cm4gd3JhcHB5KGZuKShjYilcblxuICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ25lZWQgd3JhcHBlciBmdW5jdGlvbicpXG5cbiAgT2JqZWN0LmtleXMoZm4pLmZvckVhY2goZnVuY3Rpb24gKGspIHtcbiAgICB3cmFwcGVyW2tdID0gZm5ba11cbiAgfSlcblxuICByZXR1cm4gd3JhcHBlclxuXG4gIGZ1bmN0aW9uIHdyYXBwZXIoKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aClcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaV1cbiAgICB9XG4gICAgdmFyIHJldCA9IGZuLmFwcGx5KHRoaXMsIGFyZ3MpXG4gICAgdmFyIGNiID0gYXJnc1thcmdzLmxlbmd0aC0xXVxuICAgIGlmICh0eXBlb2YgcmV0ID09PSAnZnVuY3Rpb24nICYmIHJldCAhPT0gY2IpIHtcbiAgICAgIE9iamVjdC5rZXlzKGNiKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG4gICAgICAgIHJldFtrXSA9IGNiW2tdXG4gICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gcmV0XG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93cmFwcHkvd3JhcHB5LmpzXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGV4dGVuZFxuXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG5mdW5jdGlvbiBleHRlbmQoKSB7XG4gICAgdmFyIHRhcmdldCA9IHt9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldXG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldFxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3h0ZW5kL2ltbXV0YWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2hpbGRfcHJvY2Vzc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNoaWxkX3Byb2Nlc3NcIlxuLy8gbW9kdWxlIGlkID0gNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibmV0XCJcbi8vIG1vZHVsZSBpZCA9IDQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0cmluZ19kZWNvZGVyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwic3RyaW5nX2RlY29kZXJcIlxuLy8gbW9kdWxlIGlkID0gNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidHR5XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwidHR5XCJcbi8vIG1vZHVsZSBpZCA9IDQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBOaWdodG1hcmUgZnJvbSAnbmlnaHRtYXJlJztcblxuY29uc3QgbmlnaHRtYXJlID0gTmlnaHRtYXJlKHtzaG93OiB0cnVlfSk7XG5cbm5pZ2h0bWFyZVxuICAgIC5nb3RvKCdodHRwczovL2R1Y2tkdWNrZ28uY29tJylcbiAgICAudHlwZSgnI3NlYXJjaF9mb3JtX2lucHV0X2hvbWVwYWdlJywgJ2dpdGh1YiBuaWdodG1hcmUnKVxuICAgIC5jbGljaygnI3NlYXJjaF9idXR0b25faG9tZXBhZ2UnKVxuICAgIC53YWl0KCcjemVyb19jbGlja193cmFwcGVyIC5jLWluZm9fX3RpdGxlIGEnKVxuICAgIC5ldmFsdWF0ZSgoKSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjemVyb19jbGlja193cmFwcGVyIC5jLWluZm9fX3RpdGxlIGEnKS5ocmVmKVxuICAgIC5lbmQoKVxuICAgIC50aGVuKChyZXN1bHQpID0+IGNvbnNvbGUubG9nKHJlc3VsdCkpXG4gICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5lcnJvcignU2VhcmNoIGZhaWxlZDonLCBlcnJvcikpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21haW4uanMiXSwic291cmNlUm9vdCI6IiJ9