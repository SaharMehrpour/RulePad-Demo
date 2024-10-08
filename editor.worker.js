/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "/RulePad-Demo/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return isWindows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isMacintosh; });
/* unused harmony export isLinux */
/* unused harmony export isNative */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isWeb; });
/* unused harmony export isIOS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return globals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return setImmediate; });
/* unused harmony export OS */
/* unused harmony export isLittleEndian */
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var LANGUAGE_DEFAULT = 'en';
var _isWindows = false;
var _isMacintosh = false;
var _isLinux = false;
var _isNative = false;
var _isWeb = false;
var _isIOS = false;
var _locale = undefined;
var _language = LANGUAGE_DEFAULT;
var _translationsConfigFile = undefined;
var _userAgent = undefined;
var isElectronRenderer = typeof process !== 'undefined' && typeof process.versions !== 'undefined' && typeof process.versions.electron !== 'undefined' && process.type === 'renderer'; // OS detection

if (typeof navigator === 'object' && !isElectronRenderer) {
  _userAgent = navigator.userAgent;
  _isWindows = _userAgent.indexOf('Windows') >= 0;
  _isMacintosh = _userAgent.indexOf('Macintosh') >= 0;
  _isIOS = (_userAgent.indexOf('Macintosh') >= 0 || _userAgent.indexOf('iPad') >= 0 || _userAgent.indexOf('iPhone') >= 0) && !!navigator.maxTouchPoints && navigator.maxTouchPoints > 0;
  _isLinux = _userAgent.indexOf('Linux') >= 0;
  _isWeb = true;
  _locale = navigator.language;
  _language = _locale;
} else if (typeof process === 'object') {
  _isWindows = process.platform === 'win32';
  _isMacintosh = process.platform === 'darwin';
  _isLinux = process.platform === 'linux';
  _locale = LANGUAGE_DEFAULT;
  _language = LANGUAGE_DEFAULT;
  var rawNlsConfig = Object({"NODE_ENV":"production","PUBLIC_URL":"/RulePad-Demo"})['VSCODE_NLS_CONFIG'];

  if (rawNlsConfig) {
    try {
      var nlsConfig = JSON.parse(rawNlsConfig);
      var resolved = nlsConfig.availableLanguages['*'];
      _locale = nlsConfig.locale; // VSCode's default language is 'en'

      _language = resolved ? resolved : LANGUAGE_DEFAULT;
      _translationsConfigFile = nlsConfig._translationsConfigFile;
    } catch (e) {}
  }

  _isNative = true;
}

var _platform = 0
/* Web */
;

if (_isMacintosh) {
  _platform = 1
  /* Mac */
  ;
} else if (_isWindows) {
  _platform = 3
  /* Windows */
  ;
} else if (_isLinux) {
  _platform = 2
  /* Linux */
  ;
}

var isWindows = _isWindows;
var isMacintosh = _isMacintosh;
var isLinux = _isLinux;
var isNative = _isNative;
var isWeb = _isWeb;
var isIOS = _isIOS;

var _globals = typeof self === 'object' ? self : typeof global === 'object' ? global : {};

var globals = _globals;
var setImmediate = function defineSetImmediate() {
  if (globals.setImmediate) {
    return globals.setImmediate.bind(globals);
  }

  if (typeof globals.postMessage === 'function' && !globals.importScripts) {
    var pending = [];
    globals.addEventListener('message', function (e) {
      if (e.data && e.data.vscodeSetImmediateId) {
        for (var i = 0, len = pending.length; i < len; i++) {
          var candidate = pending[i];

          if (candidate.id === e.data.vscodeSetImmediateId) {
            pending.splice(i, 1);
            candidate.callback();
            return;
          }
        }
      }
    });
    var lastId = 0;
    return function (callback) {
      var myId = ++lastId;
      pending.push({
        id: myId,
        callback: callback
      });
      globals.postMessage({
        vscodeSetImmediateId: myId
      }, '*');
    };
  }

  if (typeof process !== 'undefined' && typeof process.nextTick === 'function') {
    return process.nextTick.bind(process);
  }

  var _promise = Promise.resolve();

  return function (callback) {
    return _promise.then(callback);
  };
}();
var OS = _isMacintosh || _isIOS ? 2
/* Macintosh */
: _isWindows ? 1
/* Windows */
: 3
/* Linux */
;
var _isLittleEndian = true;
var _isLittleEndianComputed = false;
function isLittleEndian() {
  if (!_isLittleEndianComputed) {
    _isLittleEndianComputed = true;
    var test = new Uint8Array(2);
    test[0] = 1;
    test[1] = 2;
    var view = new Uint16Array(test.buffer);
    _isLittleEndian = view[0] === (2 << 8) + 1;
  }

  return _isLittleEndian;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3), __webpack_require__(6)))

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cwd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return env; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return platform; });
/* harmony import */ var _platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

var safeProcess = typeof process === 'undefined' ? {
  cwd: function cwd() {
    return '/';
  },
  env: Object.create(null),

  get platform() {
    return _platform_js__WEBPACK_IMPORTED_MODULE_0__[/* isWindows */ "d"] ? 'win32' : _platform_js__WEBPACK_IMPORTED_MODULE_0__[/* isMacintosh */ "b"] ? 'darwin' : 'linux';
  },

  nextTick: function nextTick(callback) {
    return Object(_platform_js__WEBPACK_IMPORTED_MODULE_0__[/* setImmediate */ "e"])(callback);
  }
} : process;
var cwd = safeProcess.cwd;
var env = safeProcess.env;
var platform = safeProcess.platform;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)))

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = function () {
  return this || typeof self === "object" && self;
}() || Function("return this")(); // Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.


var hadRuntime = g.regeneratorRuntime && Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0; // Save the old regeneratorRuntime in case it needs to be restored later.

var oldRuntime = hadRuntime && g.regeneratorRuntime; // Force reevalutation of runtime.js.

g.regeneratorRuntime = undefined;
module.exports = __webpack_require__(5);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch (e) {
    g.regeneratorRuntime = undefined;
  }
}

/***/ }),
/* 5 */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
!function (global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.

  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;

  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    } // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.


    return;
  } // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.


  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.

    generator._invoke = makeInvokeMethod(innerFn, self, context);
    return generator;
  }

  runtime.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.

  var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.


  var IteratorPrototype = {};

  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction"; // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      prototype[method] = function (arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  runtime.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;

      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }

    genFun.prototype = Object.create(Gp);
    return genFun;
  }; // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.


  runtime.awrap = function (arg) {
    return {
      __await: arg
    };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;

        if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    } // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).


    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);

  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };

  runtime.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.

  runtime.async = function (innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));
    return runtime.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;
    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        } // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;

        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);

          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;
        var record = tryCatch(innerFn, self, context);

        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted; // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.

          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  } // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.


  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

      context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.

      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }
    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    } // The delegate iterator is finished, so forget it and continue with
    // the outer generator.


    context.delegate = null;
    return ContinueSentinel;
  } // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.


  defineIteratorMethods(Gp);
  Gp[toStringTagSymbol] = "Generator"; // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.

  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{
      tryLoc: "root"
    }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    keys.reverse(); // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.

    return function next() {
      while (keys.length) {
        var key = keys.pop();

        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      } // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.


      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];

      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;
          return next;
        };

        return next.next = next;
      }
    } // Return an iterator with no values.


    return {
      next: doneResult
    };
  }

  runtime.values = values;

  function doneResult() {
    return {
      value: undefined,
      done: true
    };
  }

  Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0; // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.

      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;
      this.method = "next";
      this.arg = undefined;
      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },
    stop: function stop() {
      this.done = true;
      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;

      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;

      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      } // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.


      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
}( // In sloppy mode, unbound `this` refers to the global object, fallback to
// Function constructor if we're in global strict mode. That is sadly a form
// of indirect eval which violates Content Security Policy.
function () {
  return this || typeof self === "object" && self;
}() || Function("return this")());

/***/ }),
/* 6 */
/***/ (function(module, exports) {

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
  // This works if the window reference is available
  if (typeof window === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}
// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}
// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js


function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}
// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
// CONCATENATED MODULE: ./node_modules/monaco-editor/esm/vs/base/common/errors.js



/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
// Avoid circular dependency on EventEmitter by implementing a subset of the interface.
var errors_ErrorHandler = /*#__PURE__*/function () {
  function ErrorHandler() {
    _classCallCheck(this, ErrorHandler);

    this.listeners = [];

    this.unexpectedErrorHandler = function (e) {
      setTimeout(function () {
        if (e.stack) {
          throw new Error(e.message + '\n\n' + e.stack);
        }

        throw e;
      }, 0);
    };
  }

  _createClass(ErrorHandler, [{
    key: "emit",
    value: function emit(e) {
      this.listeners.forEach(function (listener) {
        listener(e);
      });
    }
  }, {
    key: "onUnexpectedError",
    value: function onUnexpectedError(e) {
      this.unexpectedErrorHandler(e);
      this.emit(e);
    } // For external errors, we don't want the listeners to be called

  }, {
    key: "onUnexpectedExternalError",
    value: function onUnexpectedExternalError(e) {
      this.unexpectedErrorHandler(e);
    }
  }]);

  return ErrorHandler;
}();
var errorHandler = new errors_ErrorHandler();
function onUnexpectedError(e) {
  // ignore errors from cancelled promises
  if (!isPromiseCanceledError(e)) {
    errorHandler.onUnexpectedError(e);
  }

  return undefined;
}
function onUnexpectedExternalError(e) {
  // ignore errors from cancelled promises
  if (!isPromiseCanceledError(e)) {
    errorHandler.onUnexpectedExternalError(e);
  }

  return undefined;
}
function transformErrorForSerialization(error) {
  if (error instanceof Error) {
    var name = error.name,
        message = error.message;
    var stack = error.stacktrace || error.stack;
    return {
      $isError: true,
      name: name,
      message: message,
      stack: stack
    };
  } // return as is


  return error;
}
var canceledName = 'Canceled';
/**
 * Checks if the given error is a promise in canceled state
 */

function isPromiseCanceledError(error) {
  return error instanceof Error && error.name === canceledName && error.message === canceledName;
}
/**
 * Returns an error that signals cancellation.
 */

function canceled() {
  var error = new Error(canceledName);
  error.name = error.message;
  return error;
}
function illegalArgument(name) {
  if (name) {
    return new Error("Illegal argument: ".concat(name));
  } else {
    return new Error('Illegal argument');
  }
}
function illegalState(name) {
  if (name) {
    return new Error("Illegal state: ".concat(name));
  } else {
    return new Error('Illegal state');
  }
}
// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/isNativeFunction.js
function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/construct.js


function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function construct_construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    construct_construct = Reflect.construct;
  } else {
    construct_construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return construct_construct.apply(null, arguments);
}
// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js




function wrapNativeSuper_wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  wrapNativeSuper_wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return construct_construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return wrapNativeSuper_wrapNativeSuper(Class);
}
// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(0);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// CONCATENATED MODULE: ./node_modules/monaco-editor/esm/vs/base/common/iterator.js



function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var iterator_Iterable;

(function (Iterable) {
  var _marked = /*#__PURE__*/regenerator_default.a.mark(single),
      _marked2 = /*#__PURE__*/regenerator_default.a.mark(filter),
      _marked3 = /*#__PURE__*/regenerator_default.a.mark(map),
      _marked4 = /*#__PURE__*/regenerator_default.a.mark(concat);

  function is(thing) {
    return thing && typeof thing === 'object' && typeof thing[Symbol.iterator] === 'function';
  }

  Iterable.is = is;

  var _empty = Object.freeze([]);

  function empty() {
    return _empty;
  }

  Iterable.empty = empty;

  function single(element) {
    return regenerator_default.a.wrap(function single$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return element;

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _marked);
  }

  Iterable.single = single;

  function from(iterable) {
    return iterable || _empty;
  }

  Iterable.from = from;

  function first(iterable) {
    return iterable[Symbol.iterator]().next().value;
  }

  Iterable.first = first;

  function some(iterable, predicate) {
    var _iterator = _createForOfIteratorHelper(iterable),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var element = _step.value;

        if (predicate(element)) {
          return true;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return false;
  }

  Iterable.some = some;

  function filter(iterable, predicate) {
    var _iterator2, _step2, element;

    return regenerator_default.a.wrap(function filter$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _iterator2 = _createForOfIteratorHelper(iterable);
            _context2.prev = 1;

            _iterator2.s();

          case 3:
            if ((_step2 = _iterator2.n()).done) {
              _context2.next = 10;
              break;
            }

            element = _step2.value;

            if (!predicate(element)) {
              _context2.next = 8;
              break;
            }

            _context2.next = 8;
            return element;

          case 8:
            _context2.next = 3;
            break;

          case 10:
            _context2.next = 15;
            break;

          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2["catch"](1);

            _iterator2.e(_context2.t0);

          case 15:
            _context2.prev = 15;

            _iterator2.f();

            return _context2.finish(15);

          case 18:
          case "end":
            return _context2.stop();
        }
      }
    }, _marked2, null, [[1, 12, 15, 18]]);
  }

  Iterable.filter = filter;

  function map(iterable, fn) {
    var _iterator3, _step3, element;

    return regenerator_default.a.wrap(function map$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _iterator3 = _createForOfIteratorHelper(iterable);
            _context3.prev = 1;

            _iterator3.s();

          case 3:
            if ((_step3 = _iterator3.n()).done) {
              _context3.next = 9;
              break;
            }

            element = _step3.value;
            _context3.next = 7;
            return fn(element);

          case 7:
            _context3.next = 3;
            break;

          case 9:
            _context3.next = 14;
            break;

          case 11:
            _context3.prev = 11;
            _context3.t0 = _context3["catch"](1);

            _iterator3.e(_context3.t0);

          case 14:
            _context3.prev = 14;

            _iterator3.f();

            return _context3.finish(14);

          case 17:
          case "end":
            return _context3.stop();
        }
      }
    }, _marked3, null, [[1, 11, 14, 17]]);
  }

  Iterable.map = map;

  function concat() {
    var _len,
        iterables,
        _key,
        _i,
        _iterables,
        iterable,
        _iterator4,
        _step4,
        element,
        _args4 = arguments;

    return regenerator_default.a.wrap(function concat$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            for (_len = _args4.length, iterables = new Array(_len), _key = 0; _key < _len; _key++) {
              iterables[_key] = _args4[_key];
            }

            _i = 0, _iterables = iterables;

          case 2:
            if (!(_i < _iterables.length)) {
              _context4.next = 24;
              break;
            }

            iterable = _iterables[_i];
            _iterator4 = _createForOfIteratorHelper(iterable);
            _context4.prev = 5;

            _iterator4.s();

          case 7:
            if ((_step4 = _iterator4.n()).done) {
              _context4.next = 13;
              break;
            }

            element = _step4.value;
            _context4.next = 11;
            return element;

          case 11:
            _context4.next = 7;
            break;

          case 13:
            _context4.next = 18;
            break;

          case 15:
            _context4.prev = 15;
            _context4.t0 = _context4["catch"](5);

            _iterator4.e(_context4.t0);

          case 18:
            _context4.prev = 18;

            _iterator4.f();

            return _context4.finish(18);

          case 21:
            _i++;
            _context4.next = 2;
            break;

          case 24:
          case "end":
            return _context4.stop();
        }
      }
    }, _marked4, null, [[5, 15, 18, 21]]);
  }

  Iterable.concat = concat;
  /**
   * Consumes `atMost` elements from iterable and returns the consumed elements,
   * and an iterable for the rest of the elements.
   */

  function consume(iterable) {
    var atMost = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Number.POSITIVE_INFINITY;
    var consumed = [];

    if (atMost === 0) {
      return [consumed, iterable];
    }

    var iterator = iterable[Symbol.iterator]();

    for (var i = 0; i < atMost; i++) {
      var next = iterator.next();

      if (next.done) {
        return [consumed, Iterable.empty()];
      }

      consumed.push(next.value);
    }

    return [consumed, _defineProperty({}, Symbol.iterator, function () {
      return iterator;
    })];
  }

  Iterable.consume = consume;
})(iterator_Iterable || (iterator_Iterable = {}));
// CONCATENATED MODULE: ./node_modules/monaco-editor/esm/vs/base/common/lifecycle.js







function lifecycle_createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = lifecycle_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function lifecycle_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return lifecycle_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return lifecycle_arrayLikeToArray(o, minLen); }

function lifecycle_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


/**
 * Enables logging of potentially leaked disposables.
 *
 * A disposable is considered leaked if it is not disposed or not registered as the child of
 * another disposable. This tracking is very simple an only works for classes that either
 * extend Disposable or use a DisposableStore. This means there are a lot of false positives.
 */

var TRACK_DISPOSABLES = false;
var __is_disposable_tracked__ = '__is_disposable_tracked__';

function markTracked(x) {
  if (!TRACK_DISPOSABLES) {
    return;
  }

  if (x && x !== lifecycle_Disposable.None) {
    try {
      x[__is_disposable_tracked__] = true;
    } catch (_a) {// noop
    }
  }
}

function trackDisposable(x) {
  if (!TRACK_DISPOSABLES) {
    return x;
  }

  var stack = new Error('Potentially leaked disposable').stack;
  setTimeout(function () {
    if (!x[__is_disposable_tracked__]) {
      console.log(stack);
    }
  }, 3000);
  return x;
}

var lifecycle_MultiDisposeError = /*#__PURE__*/function (_Error) {
  _inherits(MultiDisposeError, _Error);

  function MultiDisposeError(errors) {
    var _this;

    _classCallCheck(this, MultiDisposeError);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MultiDisposeError).call(this, "Encounter errors while disposing of store. Errors: [".concat(errors.join(', '), "]")));
    _this.errors = errors;
    return _this;
  }

  return MultiDisposeError;
}(wrapNativeSuper_wrapNativeSuper(Error));
function isDisposable(thing) {
  return typeof thing.dispose === 'function' && thing.dispose.length === 0;
}

function _dispose(arg) {
  if (iterator_Iterable.is(arg)) {
    var errors = [];

    var _iterator = lifecycle_createForOfIteratorHelper(arg),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var d = _step.value;

        if (d) {
          markTracked(d);

          try {
            d.dispose();
          } catch (e) {
            errors.push(e);
          }
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    if (errors.length === 1) {
      throw errors[0];
    } else if (errors.length > 1) {
      throw new lifecycle_MultiDisposeError(errors);
    }

    return Array.isArray(arg) ? [] : arg;
  } else if (arg) {
    markTracked(arg);
    arg.dispose();
    return arg;
  }
}


function combinedDisposable() {
  for (var _len = arguments.length, disposables = new Array(_len), _key = 0; _key < _len; _key++) {
    disposables[_key] = arguments[_key];
  }

  disposables.forEach(markTracked);
  return trackDisposable({
    dispose: function dispose() {
      return _dispose(disposables);
    }
  });
}
function toDisposable(fn) {
  var self = trackDisposable({
    dispose: function dispose() {
      markTracked(self);
      fn();
    }
  });
  return self;
}
var lifecycle_DisposableStore = /*#__PURE__*/function () {
  function DisposableStore() {
    _classCallCheck(this, DisposableStore);

    this._toDispose = new Set();
    this._isDisposed = false;
  }
  /**
   * Dispose of all registered disposables and mark this object as disposed.
   *
   * Any future disposables added to this object will be disposed of on `add`.
   */


  _createClass(DisposableStore, [{
    key: "dispose",
    value: function dispose() {
      if (this._isDisposed) {
        return;
      }

      markTracked(this);
      this._isDisposed = true;
      this.clear();
    }
    /**
     * Dispose of all registered disposables but do not mark this object as disposed.
     */

  }, {
    key: "clear",
    value: function clear() {
      try {
        _dispose(this._toDispose.values());
      } finally {
        this._toDispose.clear();
      }
    }
  }, {
    key: "add",
    value: function add(t) {
      if (!t) {
        return t;
      }

      if (t === this) {
        throw new Error('Cannot register a disposable on itself!');
      }

      markTracked(t);

      if (this._isDisposed) {
        if (!DisposableStore.DISABLE_DISPOSED_WARNING) {
          console.warn(new Error('Trying to add a disposable to a DisposableStore that has already been disposed of. The added object will be leaked!').stack);
        }
      } else {
        this._toDispose.add(t);
      }

      return t;
    }
  }]);

  return DisposableStore;
}();
lifecycle_DisposableStore.DISABLE_DISPOSED_WARNING = false;
var lifecycle_Disposable = /*#__PURE__*/function () {
  function Disposable() {
    _classCallCheck(this, Disposable);

    this._store = new lifecycle_DisposableStore();
    trackDisposable(this);
  }

  _createClass(Disposable, [{
    key: "dispose",
    value: function dispose() {
      markTracked(this);

      this._store.dispose();
    }
  }, {
    key: "_register",
    value: function _register(t) {
      if (t === this) {
        throw new Error('Cannot register a disposable on itself!');
      }

      return this._store.add(t);
    }
  }]);

  return Disposable;
}();
lifecycle_Disposable.None = Object.freeze({
  dispose: function dispose() {}
});
/**
 * Manages the lifecycle of a disposable value that may be changed.
 *
 * This ensures that when the disposable value is changed, the previously held disposable is disposed of. You can
 * also register a `MutableDisposable` on a `Disposable` to ensure it is automatically cleaned up.
 */

var lifecycle_MutableDisposable = /*#__PURE__*/function () {
  function MutableDisposable() {
    _classCallCheck(this, MutableDisposable);

    this._isDisposed = false;
    trackDisposable(this);
  }

  _createClass(MutableDisposable, [{
    key: "clear",
    value: function clear() {
      this.value = undefined;
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this._isDisposed = true;
      markTracked(this);

      if (this._value) {
        this._value.dispose();
      }

      this._value = undefined;
    }
  }, {
    key: "value",
    get: function get() {
      return this._isDisposed ? undefined : this._value;
    },
    set: function set(value) {
      if (this._isDisposed || value === this._value) {
        return;
      }

      if (this._value) {
        this._value.dispose();
      }

      if (value) {
        markTracked(value);
      }

      this._value = value;
    }
  }]);

  return MutableDisposable;
}();
var lifecycle_ImmortalReference = /*#__PURE__*/function () {
  function ImmortalReference(object) {
    _classCallCheck(this, ImmortalReference);

    this.object = object;
  }

  _createClass(ImmortalReference, [{
    key: "dispose",
    value: function dispose() {}
  }]);

  return ImmortalReference;
}();
// EXTERNAL MODULE: ./node_modules/monaco-editor/esm/vs/base/common/platform.js
var platform = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/monaco-editor/esm/vs/base/common/types.js
function types_createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = types_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function types_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return types_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return types_arrayLikeToArray(o, minLen); }

function types_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * @returns whether the provided parameter is a JavaScript Array or not.
 */
function isArray(array) {
  return Array.isArray(array);
}
/**
 * @returns whether the provided parameter is a JavaScript String or not.
 */

function isString(str) {
  return typeof str === 'string';
}
/**
 *
 * @returns whether the provided parameter is of type `object` but **not**
 *	`null`, an `array`, a `regexp`, nor a `date`.
 */

function isObject(obj) {
  // The method can't do a type cast since there are type (like strings) which
  // are subclasses of any put not positvely matched by the function. Hence type
  // narrowing results in wrong results.
  return typeof obj === 'object' && obj !== null && !Array.isArray(obj) && !(obj instanceof RegExp) && !(obj instanceof Date);
}
/**
 * In **contrast** to just checking `typeof` this will return `false` for `NaN`.
 * @returns whether the provided parameter is a JavaScript Number or not.
 */

function isNumber(obj) {
  return typeof obj === 'number' && !isNaN(obj);
}
/**
 * @returns whether the provided parameter is a JavaScript Boolean or not.
 */

function isBoolean(obj) {
  return obj === true || obj === false;
}
/**
 * @returns whether the provided parameter is undefined.
 */

function isUndefined(obj) {
  return typeof obj === 'undefined';
}
/**
 * @returns whether the provided parameter is undefined or null.
 */

function isUndefinedOrNull(obj) {
  return isUndefined(obj) || obj === null;
}
function assertType(condition, type) {
  if (!condition) {
    throw new Error(type ? "Unexpected type, expected '".concat(type, "'") : 'Unexpected type');
  }
}
/**
 * Asserts that the argument passed in is neither undefined nor null.
 */

function assertIsDefined(arg) {
  if (isUndefinedOrNull(arg)) {
    throw new Error('Assertion Failed: argument is undefined or null');
  }

  return arg;
}
/**
 * @returns whether the provided parameter is a JavaScript Function or not.
 */

function isFunction(obj) {
  return typeof obj === 'function';
}
function validateConstraints(args, constraints) {
  var len = Math.min(args.length, constraints.length);

  for (var i = 0; i < len; i++) {
    validateConstraint(args[i], constraints[i]);
  }
}
function validateConstraint(arg, constraint) {
  if (isString(constraint)) {
    if (typeof arg !== constraint) {
      throw new Error("argument does not match constraint: typeof ".concat(constraint));
    }
  } else if (isFunction(constraint)) {
    try {
      if (arg instanceof constraint) {
        return;
      }
    } catch (_a) {// ignore
    }

    if (!isUndefinedOrNull(arg) && arg.constructor === constraint) {
      return;
    }

    if (constraint.length === 1 && constraint.call(undefined, arg) === true) {
      return;
    }

    throw new Error("argument does not match one of these constraints: arg instanceof constraint, arg.constructor === constraint, nor constraint(arg) === true");
  }
}
function getAllPropertyNames(obj) {
  var res = [];
  var proto = Object.getPrototypeOf(obj);

  while (Object.prototype !== proto) {
    res = res.concat(Object.getOwnPropertyNames(proto));
    proto = Object.getPrototypeOf(proto);
  }

  return res;
}
function getAllMethodNames(obj) {
  var methods = [];

  var _iterator = types_createForOfIteratorHelper(getAllPropertyNames(obj)),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var prop = _step.value;

      if (typeof obj[prop] === 'function') {
        methods.push(prop);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return methods;
}
function createProxyObject(methodNames, invoke) {
  var createProxyMethod = function createProxyMethod(method) {
    return function () {
      var args = Array.prototype.slice.call(arguments, 0);
      return invoke(method, args);
    };
  };

  var result = {};

  var _iterator2 = types_createForOfIteratorHelper(methodNames),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var methodName = _step2.value;
      result[methodName] = createProxyMethod(methodName);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  return result;
}
/**
 * Converts null to undefined, passes all other values through.
 */

function withNullAsUndefined(x) {
  return x === null ? undefined : x;
}
// CONCATENATED MODULE: ./node_modules/monaco-editor/esm/vs/base/common/worker/simpleWorker.js






/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/




var INITIALIZE = '$initialize';
var webWorkerWarningLogged = false;
function logOnceWebWorkerWarning(err) {
  if (!platform["c" /* isWeb */]) {
    // running tests
    return;
  }

  if (!webWorkerWarningLogged) {
    webWorkerWarningLogged = true;
    console.warn('Could not create web worker(s). Falling back to loading web worker code in main thread, which might cause UI freezes. Please see https://github.com/Microsoft/monaco-editor#faq');
  }

  console.warn(err.message);
}

var simpleWorker_SimpleWorkerProtocol = /*#__PURE__*/function () {
  function SimpleWorkerProtocol(handler) {
    _classCallCheck(this, SimpleWorkerProtocol);

    this._workerId = -1;
    this._handler = handler;
    this._lastSentReq = 0;
    this._pendingReplies = Object.create(null);
  }

  _createClass(SimpleWorkerProtocol, [{
    key: "setWorkerId",
    value: function setWorkerId(workerId) {
      this._workerId = workerId;
    }
  }, {
    key: "sendMessage",
    value: function sendMessage(method, args) {
      var _this = this;

      var req = String(++this._lastSentReq);
      return new Promise(function (resolve, reject) {
        _this._pendingReplies[req] = {
          resolve: resolve,
          reject: reject
        };

        _this._send({
          vsWorker: _this._workerId,
          req: req,
          method: method,
          args: args
        });
      });
    }
  }, {
    key: "handleMessage",
    value: function handleMessage(message) {
      if (!message || !message.vsWorker) {
        return;
      }

      if (this._workerId !== -1 && message.vsWorker !== this._workerId) {
        return;
      }

      this._handleMessage(message);
    }
  }, {
    key: "_handleMessage",
    value: function _handleMessage(msg) {
      var _this2 = this;

      if (msg.seq) {
        var replyMessage = msg;

        if (!this._pendingReplies[replyMessage.seq]) {
          console.warn('Got reply to unknown seq');
          return;
        }

        var reply = this._pendingReplies[replyMessage.seq];
        delete this._pendingReplies[replyMessage.seq];

        if (replyMessage.err) {
          var err = replyMessage.err;

          if (replyMessage.err.$isError) {
            err = new Error();
            err.name = replyMessage.err.name;
            err.message = replyMessage.err.message;
            err.stack = replyMessage.err.stack;
          }

          reply.reject(err);
          return;
        }

        reply.resolve(replyMessage.res);
        return;
      }

      var requestMessage = msg;
      var req = requestMessage.req;

      var result = this._handler.handleMessage(requestMessage.method, requestMessage.args);

      result.then(function (r) {
        _this2._send({
          vsWorker: _this2._workerId,
          seq: req,
          res: r,
          err: undefined
        });
      }, function (e) {
        if (e.detail instanceof Error) {
          // Loading errors have a detail property that points to the actual error
          e.detail = transformErrorForSerialization(e.detail);
        }

        _this2._send({
          vsWorker: _this2._workerId,
          seq: req,
          res: undefined,
          err: transformErrorForSerialization(e)
        });
      });
    }
  }, {
    key: "_send",
    value: function _send(msg) {
      var transfer = [];

      if (msg.req) {
        var m = msg;

        for (var i = 0; i < m.args.length; i++) {
          if (m.args[i] instanceof ArrayBuffer) {
            transfer.push(m.args[i]);
          }
        }
      } else {
        var _m = msg;

        if (_m.res instanceof ArrayBuffer) {
          transfer.push(_m.res);
        }
      }

      this._handler.sendMessage(msg, transfer);
    }
  }]);

  return SimpleWorkerProtocol;
}();
/**
 * Main thread side
 */


var simpleWorker_SimpleWorkerClient = /*#__PURE__*/function (_Disposable) {
  _inherits(SimpleWorkerClient, _Disposable);

  function SimpleWorkerClient(workerFactory, moduleId, host) {
    var _this3;

    _classCallCheck(this, SimpleWorkerClient);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(SimpleWorkerClient).call(this));
    var lazyProxyReject = null;
    _this3._worker = _this3._register(workerFactory.create('vs/base/common/worker/simpleWorker', function (msg) {
      _this3._protocol.handleMessage(msg);
    }, function (err) {
      // in Firefox, web workers fail lazily :(
      // we will reject the proxy
      if (lazyProxyReject) {
        lazyProxyReject(err);
      }
    }));
    _this3._protocol = new simpleWorker_SimpleWorkerProtocol({
      sendMessage: function sendMessage(msg, transfer) {
        _this3._worker.postMessage(msg, transfer);
      },
      handleMessage: function handleMessage(method, args) {
        if (typeof host[method] !== 'function') {
          return Promise.reject(new Error('Missing method ' + method + ' on main thread host.'));
        }

        try {
          return Promise.resolve(host[method].apply(host, args));
        } catch (e) {
          return Promise.reject(e);
        }
      }
    });

    _this3._protocol.setWorkerId(_this3._worker.getId()); // Gather loader configuration


    var loaderConfiguration = null;

    if (typeof self.require !== 'undefined' && typeof self.require.getConfig === 'function') {
      // Get the configuration from the Monaco AMD Loader
      loaderConfiguration = self.require.getConfig();
    } else if (typeof self.requirejs !== 'undefined') {
      // Get the configuration from requirejs
      loaderConfiguration = self.requirejs.s.contexts._.config;
    }

    var hostMethods = getAllMethodNames(host); // Send initialize message

    _this3._onModuleLoaded = _this3._protocol.sendMessage(INITIALIZE, [_this3._worker.getId(), JSON.parse(JSON.stringify(loaderConfiguration)), moduleId, hostMethods]); // Create proxy to loaded code

    var proxyMethodRequest = function proxyMethodRequest(method, args) {
      return _this3._request(method, args);
    };

    _this3._lazyProxy = new Promise(function (resolve, reject) {
      lazyProxyReject = reject;

      _this3._onModuleLoaded.then(function (availableMethods) {
        resolve(createProxyObject(availableMethods, proxyMethodRequest));
      }, function (e) {
        reject(e);

        _this3._onError('Worker failed to load ' + moduleId, e);
      });
    });
    return _this3;
  }

  _createClass(SimpleWorkerClient, [{
    key: "getProxyObject",
    value: function getProxyObject() {
      return this._lazyProxy;
    }
  }, {
    key: "_request",
    value: function _request(method, args) {
      var _this4 = this;

      return new Promise(function (resolve, reject) {
        _this4._onModuleLoaded.then(function () {
          _this4._protocol.sendMessage(method, args).then(resolve, reject);
        }, reject);
      });
    }
  }, {
    key: "_onError",
    value: function _onError(message, error) {
      console.error(message);
      console.info(error);
    }
  }]);

  return SimpleWorkerClient;
}(lifecycle_Disposable);
/**
 * Worker side
 */

var simpleWorker_SimpleWorkerServer = /*#__PURE__*/function () {
  function SimpleWorkerServer(postMessage, requestHandlerFactory) {
    var _this5 = this;

    _classCallCheck(this, SimpleWorkerServer);

    this._requestHandlerFactory = requestHandlerFactory;
    this._requestHandler = null;
    this._protocol = new simpleWorker_SimpleWorkerProtocol({
      sendMessage: function sendMessage(msg, transfer) {
        postMessage(msg, transfer);
      },
      handleMessage: function handleMessage(method, args) {
        return _this5._handleMessage(method, args);
      }
    });
  }

  _createClass(SimpleWorkerServer, [{
    key: "onmessage",
    value: function onmessage(msg) {
      this._protocol.handleMessage(msg);
    }
  }, {
    key: "_handleMessage",
    value: function _handleMessage(method, args) {
      if (method === INITIALIZE) {
        return this.initialize(args[0], args[1], args[2], args[3]);
      }

      if (!this._requestHandler || typeof this._requestHandler[method] !== 'function') {
        return Promise.reject(new Error('Missing requestHandler or method: ' + method));
      }

      try {
        return Promise.resolve(this._requestHandler[method].apply(this._requestHandler, args));
      } catch (e) {
        return Promise.reject(e);
      }
    }
  }, {
    key: "initialize",
    value: function initialize(workerId, loaderConfig, moduleId, hostMethods) {
      var _this6 = this;

      this._protocol.setWorkerId(workerId);

      var proxyMethodRequest = function proxyMethodRequest(method, args) {
        return _this6._protocol.sendMessage(method, args);
      };

      var hostProxy = createProxyObject(hostMethods, proxyMethodRequest);

      if (this._requestHandlerFactory) {
        // static request handler
        this._requestHandler = this._requestHandlerFactory(hostProxy);
        return Promise.resolve(getAllMethodNames(this._requestHandler));
      }

      if (loaderConfig) {
        // Remove 'baseUrl', handling it is beyond scope for now
        if (typeof loaderConfig.baseUrl !== 'undefined') {
          delete loaderConfig['baseUrl'];
        }

        if (typeof loaderConfig.paths !== 'undefined') {
          if (typeof loaderConfig.paths.vs !== 'undefined') {
            delete loaderConfig.paths['vs'];
          }
        } // Since this is in a web worker, enable catching errors


        loaderConfig.catchError = true;

        self.require.config(loaderConfig);
      }

      return new Promise(function (resolve, reject) {
        // Use the global require to be sure to get the global config
        self.require([moduleId], function (module) {
          _this6._requestHandler = module.create(hostProxy);

          if (!_this6._requestHandler) {
            reject(new Error("No RequestHandler!"));
            return;
          }

          resolve(getAllMethodNames(_this6._requestHandler));
        }, reject);
      });
    }
  }]);

  return SimpleWorkerServer;
}();
/**
 * Called on the worker side
 */

function create(postMessage) {
  return new simpleWorker_SimpleWorkerServer(postMessage, null);
}
// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}
// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}
// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js



function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}
// CONCATENATED MODULE: ./node_modules/monaco-editor/esm/vs/base/common/arrays.js


function arrays_createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = arrays_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function arrays_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return arrays_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrays_arrayLikeToArray(o, minLen); }

function arrays_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * Returns the last element of an array.
 * @param array The array.
 * @param n Which element from the end (default is zero).
 */
function tail(array) {
  var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return array[array.length - (1 + n)];
}
function tail2(arr) {
  if (arr.length === 0) {
    throw new Error('Invalid tail call');
  }

  return [arr.slice(0, arr.length - 1), arr[arr.length - 1]];
}
function equals(one, other) {
  var itemEquals = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (a, b) {
    return a === b;
  };

  if (one === other) {
    return true;
  }

  if (!one || !other) {
    return false;
  }

  if (one.length !== other.length) {
    return false;
  }

  for (var i = 0, len = one.length; i < len; i++) {
    if (!itemEquals(one[i], other[i])) {
      return false;
    }
  }

  return true;
}
function binarySearch(array, key, comparator) {
  var low = 0,
      high = array.length - 1;

  while (low <= high) {
    var mid = (low + high) / 2 | 0;
    var comp = comparator(array[mid], key);

    if (comp < 0) {
      low = mid + 1;
    } else if (comp > 0) {
      high = mid - 1;
    } else {
      return mid;
    }
  }

  return -(low + 1);
}
/**
 * Takes a sorted array and a function p. The array is sorted in such a way that all elements where p(x) is false
 * are located before all elements where p(x) is true.
 * @returns the least x for which p(x) is true or array.length if no element fullfills the given function.
 */

function findFirstInSorted(array, p) {
  var low = 0,
      high = array.length;

  if (high === 0) {
    return 0; // no children
  }

  while (low < high) {
    var mid = Math.floor((low + high) / 2);

    if (p(array[mid])) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }

  return low;
}
/**
 * Like `Array#sort` but always stable. Usually runs a little slower `than Array#sort`
 * so only use this when actually needing stable sort.
 */

function mergeSort(data, compare) {
  _sort(data, compare, 0, data.length - 1, []);

  return data;
}

function _merge(a, compare, lo, mid, hi, aux) {
  var leftIdx = lo,
      rightIdx = mid + 1;

  for (var i = lo; i <= hi; i++) {
    aux[i] = a[i];
  }

  for (var _i = lo; _i <= hi; _i++) {
    if (leftIdx > mid) {
      // left side consumed
      a[_i] = aux[rightIdx++];
    } else if (rightIdx > hi) {
      // right side consumed
      a[_i] = aux[leftIdx++];
    } else if (compare(aux[rightIdx], aux[leftIdx]) < 0) {
      // right element is less -> comes first
      a[_i] = aux[rightIdx++];
    } else {
      // left element comes first (less or equal)
      a[_i] = aux[leftIdx++];
    }
  }
}

function _sort(a, compare, lo, hi, aux) {
  if (hi <= lo) {
    return;
  }

  var mid = lo + (hi - lo) / 2 | 0;

  _sort(a, compare, lo, mid, aux);

  _sort(a, compare, mid + 1, hi, aux);

  if (compare(a[mid], a[mid + 1]) <= 0) {
    // left and right are sorted and if the last-left element is less
    // or equals than the first-right element there is nothing else
    // to do
    return;
  }

  _merge(a, compare, lo, mid, hi, aux);
}

function groupBy(data, compare) {
  var result = [];
  var currentGroup = undefined;

  var _iterator = arrays_createForOfIteratorHelper(mergeSort(data.slice(0), compare)),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var element = _step.value;

      if (!currentGroup || compare(currentGroup[0], element) !== 0) {
        currentGroup = [element];
        result.push(currentGroup);
      } else {
        currentGroup.push(element);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return result;
}
/**
 * @returns New array with all falsy values removed. The original array IS NOT modified.
 */

function coalesce(array) {
  return array.filter(function (e) {
    return !!e;
  });
}
/**
 * @returns false if the provided object is an array and not empty.
 */

function isFalsyOrEmpty(obj) {
  return !Array.isArray(obj) || obj.length === 0;
}
function isNonEmptyArray(obj) {
  return Array.isArray(obj) && obj.length > 0;
}
/**
 * Removes duplicates from the given array. The optional keyFn allows to specify
 * how elements are checked for equalness by returning a unique string for each.
 */

function distinct(array, keyFn) {
  if (!keyFn) {
    return array.filter(function (element, position) {
      return array.indexOf(element) === position;
    });
  }

  var seen = Object.create(null);
  return array.filter(function (elem) {
    var key = keyFn(elem);

    if (seen[key]) {
      return false;
    }

    seen[key] = true;
    return true;
  });
}
function distinctES6(array) {
  var seen = new Set();
  return array.filter(function (element) {
    if (seen.has(element)) {
      return false;
    }

    seen.add(element);
    return true;
  });
}
/**
 * @deprecated ES6: use `Array.findIndex`
 */

function firstIndex(array, fn) {
  for (var i = 0; i < array.length; i++) {
    var element = array[i];

    if (fn(element)) {
      return i;
    }
  }

  return -1;
}
function arrays_first(array, fn) {
  var notFoundValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
  var index = firstIndex(array, fn);
  return index < 0 ? notFoundValue : array[index];
}
function firstOrDefault(array, notFoundValue) {
  return array.length > 0 ? array[0] : notFoundValue;
}
function flatten(arr) {
  var _ref;

  return (_ref = []).concat.apply(_ref, _toConsumableArray(arr));
}
function arrays_range(arg, to) {
  var from = typeof to === 'number' ? arg : 0;

  if (typeof to === 'number') {
    from = arg;
  } else {
    from = 0;
    to = arg;
  }

  var result = [];

  if (from <= to) {
    for (var i = from; i < to; i++) {
      result.push(i);
    }
  } else {
    for (var _i2 = from; _i2 > to; _i2--) {
      result.push(_i2);
    }
  }

  return result;
}
/**
 * Insert `insertArr` inside `target` at `insertIndex`.
 * Please don't touch unless you understand https://jsperf.com/inserting-an-array-within-an-array
 */

function arrayInsert(target, insertIndex, insertArr) {
  var before = target.slice(0, insertIndex);
  var after = target.slice(insertIndex);
  return before.concat(insertArr, after);
}
/**
 * Pushes an element to the start of the array, if found.
 */

function pushToStart(arr, value) {
  var index = arr.indexOf(value);

  if (index > -1) {
    arr.splice(index, 1);
    arr.unshift(value);
  }
}
/**
 * Pushes an element to the end of the array, if found.
 */

function pushToEnd(arr, value) {
  var index = arr.indexOf(value);

  if (index > -1) {
    arr.splice(index, 1);
    arr.push(value);
  }
}
function asArray(x) {
  return Array.isArray(x) ? x : [x];
}
// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js



function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}
// CONCATENATED MODULE: ./node_modules/monaco-editor/esm/vs/base/common/diff/diffChange.js



/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/**
 * Represents information about a specific difference between two sequences.
 */
var diffChange_DiffChange = /*#__PURE__*/function () {
  /**
   * Constructs a new DiffChange with the given sequence information
   * and content.
   */
  function DiffChange(originalStart, originalLength, modifiedStart, modifiedLength) {
    _classCallCheck(this, DiffChange);

    //Debug.Assert(originalLength > 0 || modifiedLength > 0, "originalLength and modifiedLength cannot both be <= 0");
    this.originalStart = originalStart;
    this.originalLength = originalLength;
    this.modifiedStart = modifiedStart;
    this.modifiedLength = modifiedLength;
  }
  /**
   * The end point (exclusive) of the change in the original sequence.
   */


  _createClass(DiffChange, [{
    key: "getOriginalEnd",
    value: function getOriginalEnd() {
      return this.originalStart + this.originalLength;
    }
    /**
     * The end point (exclusive) of the change in the modified sequence.
     */

  }, {
    key: "getModifiedEnd",
    value: function getModifiedEnd() {
      return this.modifiedStart + this.modifiedLength;
    }
  }]);

  return DiffChange;
}();
// CONCATENATED MODULE: ./node_modules/monaco-editor/esm/vs/base/common/strings.js



/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
function isFalsyOrWhitespace(str) {
  if (!str || typeof str !== 'string') {
    return true;
  }

  return str.trim().length === 0;
}
/**
 * @deprecated ES6: use `String.padStart`
 */

function pad(n, l) {
  var char = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '0';
  var str = '' + n;
  var r = [str];

  for (var i = str.length; i < l; i++) {
    r.push(char);
  }

  return r.reverse().join('');
}
var _formatRegexp = /{(\d+)}/g;
/**
 * Helper to produce a string with a variable number of arguments. Insert variable segments
 * into the string using the {n} notation where N is the index of the argument following the string.
 * @param value string to which formatting is applied
 * @param args replacements for {n}-entries
 */

function format(value) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  if (args.length === 0) {
    return value;
  }

  return value.replace(_formatRegexp, function (match, group) {
    var idx = parseInt(group, 10);
    return isNaN(idx) || idx < 0 || idx >= args.length ? match : args[idx];
  });
}
/**
 * Converts HTML characters inside the string to use entities instead. Makes the string safe from
 * being used e.g. in HTMLElement.innerHTML.
 */

function strings_escape(html) {
  return html.replace(/[<>&]/g, function (match) {
    switch (match) {
      case '<':
        return '&lt;';

      case '>':
        return '&gt;';

      case '&':
        return '&amp;';

      default:
        return match;
    }
  });
}
/**
 * Escapes regular expression characters in a given string
 */

function escapeRegExpCharacters(value) {
  return value.replace(/[\\\{\}\*\+\?\|\^\$\.\[\]\(\)]/g, '\\$&');
}
/**
 * Removes all occurrences of needle from the beginning and end of haystack.
 * @param haystack string to trim
 * @param needle the thing to trim (default is a blank)
 */

function trim(haystack) {
  var needle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ' ';
  var trimmed = ltrim(haystack, needle);
  return rtrim(trimmed, needle);
}
/**
 * Removes all occurrences of needle from the beginning of haystack.
 * @param haystack string to trim
 * @param needle the thing to trim
 */

function ltrim(haystack, needle) {
  if (!haystack || !needle) {
    return haystack;
  }

  var needleLen = needle.length;

  if (needleLen === 0 || haystack.length === 0) {
    return haystack;
  }

  var offset = 0;

  while (haystack.indexOf(needle, offset) === offset) {
    offset = offset + needleLen;
  }

  return haystack.substring(offset);
}
/**
 * Removes all occurrences of needle from the end of haystack.
 * @param haystack string to trim
 * @param needle the thing to trim
 */

function rtrim(haystack, needle) {
  if (!haystack || !needle) {
    return haystack;
  }

  var needleLen = needle.length,
      haystackLen = haystack.length;

  if (needleLen === 0 || haystackLen === 0) {
    return haystack;
  }

  var offset = haystackLen,
      idx = -1;

  while (true) {
    idx = haystack.lastIndexOf(needle, offset - 1);

    if (idx === -1 || idx + needleLen !== offset) {
      break;
    }

    if (idx === 0) {
      return '';
    }

    offset = idx;
  }

  return haystack.substring(0, offset);
}
function convertSimple2RegExpPattern(pattern) {
  return pattern.replace(/[\-\\\{\}\+\?\|\^\$\.\,\[\]\(\)\#\s]/g, '\\$&').replace(/[\*]/g, '.*');
}
function stripWildcards(pattern) {
  return pattern.replace(/\*/g, '');
}
/**
 * @deprecated ES6: use `String.startsWith`
 */

function startsWith(haystack, needle) {
  if (haystack.length < needle.length) {
    return false;
  }

  if (haystack === needle) {
    return true;
  }

  for (var i = 0; i < needle.length; i++) {
    if (haystack[i] !== needle[i]) {
      return false;
    }
  }

  return true;
}
/**
 * @deprecated ES6: use `String.endsWith`
 */

function endsWith(haystack, needle) {
  var diff = haystack.length - needle.length;

  if (diff > 0) {
    return haystack.indexOf(needle, diff) === diff;
  } else if (diff === 0) {
    return haystack === needle;
  } else {
    return false;
  }
}
function createRegExp(searchString, isRegex) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (!searchString) {
    throw new Error('Cannot create regex from empty string');
  }

  if (!isRegex) {
    searchString = escapeRegExpCharacters(searchString);
  }

  if (options.wholeWord) {
    if (!/\B/.test(searchString.charAt(0))) {
      searchString = '\\b' + searchString;
    }

    if (!/\B/.test(searchString.charAt(searchString.length - 1))) {
      searchString = searchString + '\\b';
    }
  }

  var modifiers = '';

  if (options.global) {
    modifiers += 'g';
  }

  if (!options.matchCase) {
    modifiers += 'i';
  }

  if (options.multiline) {
    modifiers += 'm';
  }

  if (options.unicode) {
    modifiers += 'u';
  }

  return new RegExp(searchString, modifiers);
}
function regExpLeadsToEndlessLoop(regexp) {
  // Exit early if it's one of these special cases which are meant to match
  // against an empty string
  if (regexp.source === '^' || regexp.source === '^$' || regexp.source === '$' || regexp.source === '^\\s*$') {
    return false;
  } // We check against an empty string. If the regular expression doesn't advance
  // (e.g. ends in an endless loop) it will match an empty string.


  var match = regexp.exec('');
  return !!(match && regexp.lastIndex === 0);
}
function regExpFlags(regexp) {
  return (regexp.global ? 'g' : '') + (regexp.ignoreCase ? 'i' : '') + (regexp.multiline ? 'm' : '') + (regexp
  /* standalone editor compilation */
  .unicode ? 'u' : '');
}
/**
 * Returns first index of the string that is not whitespace.
 * If string is empty or contains only whitespaces, returns -1
 */

function firstNonWhitespaceIndex(str) {
  for (var i = 0, len = str.length; i < len; i++) {
    var chCode = str.charCodeAt(i);

    if (chCode !== 32
    /* Space */
    && chCode !== 9
    /* Tab */
    ) {
        return i;
      }
  }

  return -1;
}
/**
 * Returns the leading whitespace of the string.
 * If the string contains only whitespaces, returns entire string
 */

function getLeadingWhitespace(str) {
  var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : str.length;

  for (var i = start; i < end; i++) {
    var chCode = str.charCodeAt(i);

    if (chCode !== 32
    /* Space */
    && chCode !== 9
    /* Tab */
    ) {
        return str.substring(start, i);
      }
  }

  return str.substring(start, end);
}
/**
 * Returns last index of the string that is not whitespace.
 * If string is empty or contains only whitespaces, returns -1
 */

function lastNonWhitespaceIndex(str) {
  var startIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : str.length - 1;

  for (var i = startIndex; i >= 0; i--) {
    var chCode = str.charCodeAt(i);

    if (chCode !== 32
    /* Space */
    && chCode !== 9
    /* Tab */
    ) {
        return i;
      }
  }

  return -1;
}
function compare(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
}
function compareSubstring(a, b) {
  var aStart = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var aEnd = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : a.length;
  var bStart = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  var bEnd = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : b.length;

  for (; aStart < aEnd && bStart < bEnd; aStart++, bStart++) {
    var codeA = a.charCodeAt(aStart);
    var codeB = b.charCodeAt(bStart);

    if (codeA < codeB) {
      return -1;
    } else if (codeA > codeB) {
      return 1;
    }
  }

  var aLen = aEnd - aStart;
  var bLen = bEnd - bStart;

  if (aLen < bLen) {
    return -1;
  } else if (aLen > bLen) {
    return 1;
  }

  return 0;
}
function compareIgnoreCase(a, b) {
  return compareSubstringIgnoreCase(a, b, 0, a.length, 0, b.length);
}
function compareSubstringIgnoreCase(a, b) {
  var aStart = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var aEnd = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : a.length;
  var bStart = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  var bEnd = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : b.length;

  for (; aStart < aEnd && bStart < bEnd; aStart++, bStart++) {
    var codeA = a.charCodeAt(aStart);
    var codeB = b.charCodeAt(bStart);

    if (codeA === codeB) {
      // equal
      continue;
    }

    var diff = codeA - codeB;

    if (diff === 32 && isUpperAsciiLetter(codeB)) {
      //codeB =[65-90] && codeA =[97-122]
      continue;
    } else if (diff === -32 && isUpperAsciiLetter(codeA)) {
      //codeB =[97-122] && codeA =[65-90]
      continue;
    }

    if (isLowerAsciiLetter(codeA) && isLowerAsciiLetter(codeB)) {
      //
      return diff;
    } else {
      return compareSubstring(a.toLowerCase(), b.toLowerCase(), aStart, aEnd, bStart, bEnd);
    }
  }

  var aLen = aEnd - aStart;
  var bLen = bEnd - bStart;

  if (aLen < bLen) {
    return -1;
  } else if (aLen > bLen) {
    return 1;
  }

  return 0;
}
function isLowerAsciiLetter(code) {
  return code >= 97
  /* a */
  && code <= 122
  /* z */
  ;
}
function isUpperAsciiLetter(code) {
  return code >= 65
  /* A */
  && code <= 90
  /* Z */
  ;
}

function isAsciiLetter(code) {
  return isLowerAsciiLetter(code) || isUpperAsciiLetter(code);
}

function equalsIgnoreCase(a, b) {
  return a.length === b.length && doEqualsIgnoreCase(a, b);
}

function doEqualsIgnoreCase(a, b) {
  var stopAt = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : a.length;

  for (var i = 0; i < stopAt; i++) {
    var codeA = a.charCodeAt(i);
    var codeB = b.charCodeAt(i);

    if (codeA === codeB) {
      continue;
    } // a-z A-Z


    if (isAsciiLetter(codeA) && isAsciiLetter(codeB)) {
      var diff = Math.abs(codeA - codeB);

      if (diff !== 0 && diff !== 32) {
        return false;
      }
    } // Any other charcode
    else {
        if (String.fromCharCode(codeA).toLowerCase() !== String.fromCharCode(codeB).toLowerCase()) {
          return false;
        }
      }
  }

  return true;
}

function startsWithIgnoreCase(str, candidate) {
  var candidateLength = candidate.length;

  if (candidate.length > str.length) {
    return false;
  }

  return doEqualsIgnoreCase(str, candidate, candidateLength);
}
/**
 * @returns the length of the common prefix of the two strings.
 */

function commonPrefixLength(a, b) {
  var i,
      len = Math.min(a.length, b.length);

  for (i = 0; i < len; i++) {
    if (a.charCodeAt(i) !== b.charCodeAt(i)) {
      return i;
    }
  }

  return len;
}
/**
 * @returns the length of the common suffix of the two strings.
 */

function commonSuffixLength(a, b) {
  var i,
      len = Math.min(a.length, b.length);
  var aLastIndex = a.length - 1;
  var bLastIndex = b.length - 1;

  for (i = 0; i < len; i++) {
    if (a.charCodeAt(aLastIndex - i) !== b.charCodeAt(bLastIndex - i)) {
      return i;
    }
  }

  return len;
}
/**
 * See http://en.wikipedia.org/wiki/Surrogate_pair
 */

function isHighSurrogate(charCode) {
  return 0xD800 <= charCode && charCode <= 0xDBFF;
}
/**
 * See http://en.wikipedia.org/wiki/Surrogate_pair
 */

function isLowSurrogate(charCode) {
  return 0xDC00 <= charCode && charCode <= 0xDFFF;
}
/**
 * See http://en.wikipedia.org/wiki/Surrogate_pair
 */

function computeCodePoint(highSurrogate, lowSurrogate) {
  return (highSurrogate - 0xD800 << 10) + (lowSurrogate - 0xDC00) + 0x10000;
}
/**
 * get the code point that begins at offset `offset`
 */

function getNextCodePoint(str, len, offset) {
  var charCode = str.charCodeAt(offset);

  if (isHighSurrogate(charCode) && offset + 1 < len) {
    var nextCharCode = str.charCodeAt(offset + 1);

    if (isLowSurrogate(nextCharCode)) {
      return computeCodePoint(charCode, nextCharCode);
    }
  }

  return charCode;
}
/**
 * get the code point that ends right before offset `offset`
 */

function getPrevCodePoint(str, offset) {
  var charCode = str.charCodeAt(offset - 1);

  if (isLowSurrogate(charCode) && offset > 1) {
    var prevCharCode = str.charCodeAt(offset - 2);

    if (isHighSurrogate(prevCharCode)) {
      return computeCodePoint(prevCharCode, charCode);
    }
  }

  return charCode;
}

function nextCharLength(str, offset) {
  var graphemeBreakTree = strings_GraphemeBreakTree.getInstance();
  var initialOffset = offset;
  var len = str.length;
  var initialCodePoint = getNextCodePoint(str, len, offset);
  offset += initialCodePoint >= 65536
  /* UNICODE_SUPPLEMENTARY_PLANE_BEGIN */
  ? 2 : 1;
  var graphemeBreakType = graphemeBreakTree.getGraphemeBreakType(initialCodePoint);

  while (offset < len) {
    var nextCodePoint = getNextCodePoint(str, len, offset);
    var nextGraphemeBreakType = graphemeBreakTree.getGraphemeBreakType(nextCodePoint);

    if (breakBetweenGraphemeBreakType(graphemeBreakType, nextGraphemeBreakType)) {
      break;
    }

    offset += nextCodePoint >= 65536
    /* UNICODE_SUPPLEMENTARY_PLANE_BEGIN */
    ? 2 : 1;
    graphemeBreakType = nextGraphemeBreakType;
  }

  return offset - initialOffset;
}
function prevCharLength(str, offset) {
  var graphemeBreakTree = strings_GraphemeBreakTree.getInstance();
  var initialOffset = offset;
  var initialCodePoint = getPrevCodePoint(str, offset);
  offset -= initialCodePoint >= 65536
  /* UNICODE_SUPPLEMENTARY_PLANE_BEGIN */
  ? 2 : 1;
  var graphemeBreakType = graphemeBreakTree.getGraphemeBreakType(initialCodePoint);

  while (offset > 0) {
    var prevCodePoint = getPrevCodePoint(str, offset);
    var prevGraphemeBreakType = graphemeBreakTree.getGraphemeBreakType(prevCodePoint);

    if (breakBetweenGraphemeBreakType(prevGraphemeBreakType, graphemeBreakType)) {
      break;
    }

    offset -= prevCodePoint >= 65536
    /* UNICODE_SUPPLEMENTARY_PLANE_BEGIN */
    ? 2 : 1;
    graphemeBreakType = prevGraphemeBreakType;
  }

  return initialOffset - offset;
}
/**
 * A manual decoding of a UTF8 string.
 * Use only in environments which do not offer native conversion methods!
 */

function decodeUTF8(buffer) {
  // https://en.wikipedia.org/wiki/UTF-8
  var len = buffer.byteLength;
  var result = [];
  var offset = 0;

  while (offset < len) {
    var v0 = buffer[offset];
    var codePoint = void 0;

    if (v0 >= 240 && offset + 3 < len) {
      // 4 bytes
      codePoint = (buffer[offset++] & 7) << 18 >>> 0 | (buffer[offset++] & 63) << 12 >>> 0 | (buffer[offset++] & 63) << 6 >>> 0 | (buffer[offset++] & 63) << 0 >>> 0;
    } else if (v0 >= 224 && offset + 2 < len) {
      // 3 bytes
      codePoint = (buffer[offset++] & 15) << 12 >>> 0 | (buffer[offset++] & 63) << 6 >>> 0 | (buffer[offset++] & 63) << 0 >>> 0;
    } else if (v0 >= 192 && offset + 1 < len) {
      // 2 bytes
      codePoint = (buffer[offset++] & 31) << 6 >>> 0 | (buffer[offset++] & 63) << 0 >>> 0;
    } else {
      // 1 byte
      codePoint = buffer[offset++];
    }

    if (codePoint >= 0 && codePoint <= 0xD7FF || codePoint >= 0xE000 && codePoint <= 0xFFFF) {
      // Basic Multilingual Plane
      result.push(String.fromCharCode(codePoint));
    } else if (codePoint >= 0x010000 && codePoint <= 0x10FFFF) {
      // Supplementary Planes
      var uPrime = codePoint - 0x10000;
      var w1 = 0xD800 + ((uPrime & 1047552) >>> 10);
      var w2 = 0xDC00 + ((uPrime & 1023) >>> 0);
      result.push(String.fromCharCode(w1));
      result.push(String.fromCharCode(w2));
    } else {
      // illegal code point
      result.push(String.fromCharCode(0xFFFD));
    }
  }

  return result.join('');
}
/**
 * Generated using https://github.com/alexandrudima/unicode-utils/blob/master/generate-rtl-test.js
 */

var CONTAINS_RTL = /(?:[\u05BE\u05C0\u05C3\u05C6\u05D0-\u05F4\u0608\u060B\u060D\u061B-\u064A\u066D-\u066F\u0671-\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u0710\u0712-\u072F\u074D-\u07A5\u07B1-\u07EA\u07F4\u07F5\u07FA-\u0815\u081A\u0824\u0828\u0830-\u0858\u085E-\u08BD\u200F\uFB1D\uFB1F-\uFB28\uFB2A-\uFD3D\uFD50-\uFDFC\uFE70-\uFEFC]|\uD802[\uDC00-\uDD1B\uDD20-\uDE00\uDE10-\uDE33\uDE40-\uDEE4\uDEEB-\uDF35\uDF40-\uDFFF]|\uD803[\uDC00-\uDCFF]|\uD83A[\uDC00-\uDCCF\uDD00-\uDD43\uDD50-\uDFFF]|\uD83B[\uDC00-\uDEBB])/;
/**
 * Returns true if `str` contains any Unicode character that is classified as "R" or "AL".
 */

function containsRTL(str) {
  return CONTAINS_RTL.test(str);
}
/**
 * Generated using https://github.com/alexandrudima/unicode-utils/blob/master/generate-emoji-test.js
 */

var CONTAINS_EMOJI = /(?:[\u231A\u231B\u23F0\u23F3\u2600-\u27BF\u2B50\u2B55]|\uD83C[\uDDE6-\uDDFF\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F\uDE80-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD00-\uDDFF\uDE70-\uDE73\uDE78-\uDE82\uDE90-\uDE95])/;
function containsEmoji(str) {
  return CONTAINS_EMOJI.test(str);
}
var IS_BASIC_ASCII = /^[\t\n\r\x20-\x7E]*$/;
/**
 * Returns true if `str` contains only basic ASCII characters in the range 32 - 126 (including 32 and 126) or \n, \r, \t
 */

function isBasicASCII(str) {
  return IS_BASIC_ASCII.test(str);
}
var UNUSUAL_LINE_TERMINATORS = /[\u2028\u2029]/; // LINE SEPARATOR (LS) or PARAGRAPH SEPARATOR (PS)

/**
 * Returns true if `str` contains unusual line terminators, like LS or PS
 */

function containsUnusualLineTerminators(str) {
  return UNUSUAL_LINE_TERMINATORS.test(str);
}
function containsFullWidthCharacter(str) {
  for (var i = 0, len = str.length; i < len; i++) {
    if (isFullWidthCharacter(str.charCodeAt(i))) {
      return true;
    }
  }

  return false;
}
function isFullWidthCharacter(charCode) {
  // Do a cheap trick to better support wrapping of wide characters, treat them as 2 columns
  // http://jrgraphix.net/research/unicode_blocks.php
  //          2E80 — 2EFF   CJK Radicals Supplement
  //          2F00 — 2FDF   Kangxi Radicals
  //          2FF0 — 2FFF   Ideographic Description Characters
  //          3000 — 303F   CJK Symbols and Punctuation
  //          3040 — 309F   Hiragana
  //          30A0 — 30FF   Katakana
  //          3100 — 312F   Bopomofo
  //          3130 — 318F   Hangul Compatibility Jamo
  //          3190 — 319F   Kanbun
  //          31A0 — 31BF   Bopomofo Extended
  //          31F0 — 31FF   Katakana Phonetic Extensions
  //          3200 — 32FF   Enclosed CJK Letters and Months
  //          3300 — 33FF   CJK Compatibility
  //          3400 — 4DBF   CJK Unified Ideographs Extension A
  //          4DC0 — 4DFF   Yijing Hexagram Symbols
  //          4E00 — 9FFF   CJK Unified Ideographs
  //          A000 — A48F   Yi Syllables
  //          A490 — A4CF   Yi Radicals
  //          AC00 — D7AF   Hangul Syllables
  // [IGNORE] D800 — DB7F   High Surrogates
  // [IGNORE] DB80 — DBFF   High Private Use Surrogates
  // [IGNORE] DC00 — DFFF   Low Surrogates
  // [IGNORE] E000 — F8FF   Private Use Area
  //          F900 — FAFF   CJK Compatibility Ideographs
  // [IGNORE] FB00 — FB4F   Alphabetic Presentation Forms
  // [IGNORE] FB50 — FDFF   Arabic Presentation Forms-A
  // [IGNORE] FE00 — FE0F   Variation Selectors
  // [IGNORE] FE20 — FE2F   Combining Half Marks
  // [IGNORE] FE30 — FE4F   CJK Compatibility Forms
  // [IGNORE] FE50 — FE6F   Small Form Variants
  // [IGNORE] FE70 — FEFF   Arabic Presentation Forms-B
  //          FF00 — FFEF   Halfwidth and Fullwidth Forms
  //               [https://en.wikipedia.org/wiki/Halfwidth_and_fullwidth_forms]
  //               of which FF01 - FF5E fullwidth ASCII of 21 to 7E
  // [IGNORE]    and FF65 - FFDC halfwidth of Katakana and Hangul
  // [IGNORE] FFF0 — FFFF   Specials
  charCode = +charCode; // @perf

  return charCode >= 0x2E80 && charCode <= 0xD7AF || charCode >= 0xF900 && charCode <= 0xFAFF || charCode >= 0xFF01 && charCode <= 0xFF5E;
}
/**
 * A fast function (therefore imprecise) to check if code points are emojis.
 * Generated using https://github.com/alexandrudima/unicode-utils/blob/master/generate-emoji-test.js
 */

function isEmojiImprecise(x) {
  return x >= 0x1F1E6 && x <= 0x1F1FF || x >= 9728 && x <= 10175 || x >= 127744 && x <= 128591 || x >= 128640 && x <= 128764 || x >= 128992 && x <= 129003 || x >= 129280 && x <= 129535 || x >= 129648 && x <= 129651 || x >= 129656 && x <= 129666 || x >= 129680 && x <= 129685;
} // -- UTF-8 BOM

var UTF8_BOM_CHARACTER = String.fromCharCode(65279
/* UTF8_BOM */
);
function startsWithUTF8BOM(str) {
  return !!(str && str.length > 0 && str.charCodeAt(0) === 65279
  /* UTF8_BOM */
  );
}
function containsUppercaseCharacter(target) {
  var ignoreEscapedChars = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (!target) {
    return false;
  }

  if (ignoreEscapedChars) {
    target = target.replace(/\\./g, '');
  }

  return target.toLowerCase() !== target;
}
/**
 * Produces 'a'-'z', followed by 'A'-'Z'... followed by 'a'-'z', etc.
 */

function singleLetterHash(n) {
  var LETTERS_CNT = 90
  /* Z */
  - 65
  /* A */
  + 1;
  n = n % (2 * LETTERS_CNT);

  if (n < LETTERS_CNT) {
    return String.fromCharCode(97
    /* a */
    + n);
  }

  return String.fromCharCode(65
  /* A */
  + n - LETTERS_CNT);
} //#region Unicode Grapheme Break

function getGraphemeBreakType(codePoint) {
  var graphemeBreakTree = strings_GraphemeBreakTree.getInstance();
  return graphemeBreakTree.getGraphemeBreakType(codePoint);
}
function breakBetweenGraphemeBreakType(breakTypeA, breakTypeB) {
  // http://www.unicode.org/reports/tr29/#Grapheme_Cluster_Boundary_Rules
  // !!! Let's make the common case a bit faster
  if (breakTypeA === 0
  /* Other */
  ) {
      // see https://www.unicode.org/Public/13.0.0/ucd/auxiliary/GraphemeBreakTest-13.0.0d10.html#table
      return breakTypeB !== 5
      /* Extend */
      && breakTypeB !== 7
      /* SpacingMark */
      ;
    } // Do not break between a CR and LF. Otherwise, break before and after controls.
  // GB3                                        CR × LF
  // GB4                       (Control | CR | LF) ÷
  // GB5                                           ÷ (Control | CR | LF)


  if (breakTypeA === 2
  /* CR */
  ) {
      if (breakTypeB === 3
      /* LF */
      ) {
          return false; // GB3
        }
    }

  if (breakTypeA === 4
  /* Control */
  || breakTypeA === 2
  /* CR */
  || breakTypeA === 3
  /* LF */
  ) {
      return true; // GB4
    }

  if (breakTypeB === 4
  /* Control */
  || breakTypeB === 2
  /* CR */
  || breakTypeB === 3
  /* LF */
  ) {
      return true; // GB5
    } // Do not break Hangul syllable sequences.
  // GB6                                         L × (L | V | LV | LVT)
  // GB7                                  (LV | V) × (V | T)
  // GB8                                 (LVT | T) × T


  if (breakTypeA === 8
  /* L */
  ) {
      if (breakTypeB === 8
      /* L */
      || breakTypeB === 9
      /* V */
      || breakTypeB === 11
      /* LV */
      || breakTypeB === 12
      /* LVT */
      ) {
          return false; // GB6
        }
    }

  if (breakTypeA === 11
  /* LV */
  || breakTypeA === 9
  /* V */
  ) {
      if (breakTypeB === 9
      /* V */
      || breakTypeB === 10
      /* T */
      ) {
          return false; // GB7
        }
    }

  if (breakTypeA === 12
  /* LVT */
  || breakTypeA === 10
  /* T */
  ) {
      if (breakTypeB === 10
      /* T */
      ) {
          return false; // GB8
        }
    } // Do not break before extending characters or ZWJ.
  // GB9                                           × (Extend | ZWJ)


  if (breakTypeB === 5
  /* Extend */
  || breakTypeB === 13
  /* ZWJ */
  ) {
      return false; // GB9
    } // The GB9a and GB9b rules only apply to extended grapheme clusters:
  // Do not break before SpacingMarks, or after Prepend characters.
  // GB9a                                          × SpacingMark
  // GB9b                                  Prepend ×


  if (breakTypeB === 7
  /* SpacingMark */
  ) {
      return false; // GB9a
    }

  if (breakTypeA === 1
  /* Prepend */
  ) {
      return false; // GB9b
    } // Do not break within emoji modifier sequences or emoji zwj sequences.
  // GB11    \p{Extended_Pictographic} Extend* ZWJ × \p{Extended_Pictographic}


  if (breakTypeA === 13
  /* ZWJ */
  && breakTypeB === 14
  /* Extended_Pictographic */
  ) {
      // Note: we are not implementing the rule entirely here to avoid introducing states
      return false; // GB11
    } // GB12                          sot (RI RI)* RI × RI
  // GB13                        [^RI] (RI RI)* RI × RI


  if (breakTypeA === 6
  /* Regional_Indicator */
  && breakTypeB === 6
  /* Regional_Indicator */
  ) {
      // Note: we are not implementing the rule entirely here to avoid introducing states
      return false; // GB12 & GB13
    } // GB999                                     Any ÷ Any


  return true;
}

var strings_GraphemeBreakTree = /*#__PURE__*/function () {
  function GraphemeBreakTree() {
    _classCallCheck(this, GraphemeBreakTree);

    this._data = getGraphemeBreakRawData();
  }

  _createClass(GraphemeBreakTree, [{
    key: "getGraphemeBreakType",
    value: function getGraphemeBreakType(codePoint) {
      // !!! Let's make 7bit ASCII a bit faster: 0..31
      if (codePoint < 32) {
        if (codePoint === 10
        /* LineFeed */
        ) {
            return 3
            /* LF */
            ;
          }

        if (codePoint === 13
        /* CarriageReturn */
        ) {
            return 2
            /* CR */
            ;
          }

        return 4
        /* Control */
        ;
      } // !!! Let's make 7bit ASCII a bit faster: 32..126


      if (codePoint < 127) {
        return 0
        /* Other */
        ;
      }

      var data = this._data;
      var nodeCount = data.length / 3;
      var nodeIndex = 1;

      while (nodeIndex <= nodeCount) {
        if (codePoint < data[3 * nodeIndex]) {
          // go left
          nodeIndex = 2 * nodeIndex;
        } else if (codePoint > data[3 * nodeIndex + 1]) {
          // go right
          nodeIndex = 2 * nodeIndex + 1;
        } else {
          // hit
          return data[3 * nodeIndex + 2];
        }
      }

      return 0
      /* Other */
      ;
    }
  }], [{
    key: "getInstance",
    value: function getInstance() {
      if (!GraphemeBreakTree._INSTANCE) {
        GraphemeBreakTree._INSTANCE = new GraphemeBreakTree();
      }

      return GraphemeBreakTree._INSTANCE;
    }
  }]);

  return GraphemeBreakTree;
}();

strings_GraphemeBreakTree._INSTANCE = null;

function getGraphemeBreakRawData() {
  // generated using https://github.com/alexandrudima/unicode-utils/blob/master/generate-grapheme-break.js
  return JSON.parse('[0,0,0,51592,51592,11,44424,44424,11,72251,72254,5,7150,7150,7,48008,48008,11,55176,55176,11,128420,128420,14,3276,3277,5,9979,9980,14,46216,46216,11,49800,49800,11,53384,53384,11,70726,70726,5,122915,122916,5,129320,129327,14,2558,2558,5,5906,5908,5,9762,9763,14,43360,43388,8,45320,45320,11,47112,47112,11,48904,48904,11,50696,50696,11,52488,52488,11,54280,54280,11,70082,70083,1,71350,71350,7,73111,73111,5,127892,127893,14,128726,128727,14,129473,129474,14,2027,2035,5,2901,2902,5,3784,3789,5,6754,6754,5,8418,8420,5,9877,9877,14,11088,11088,14,44008,44008,5,44872,44872,11,45768,45768,11,46664,46664,11,47560,47560,11,48456,48456,11,49352,49352,11,50248,50248,11,51144,51144,11,52040,52040,11,52936,52936,11,53832,53832,11,54728,54728,11,69811,69814,5,70459,70460,5,71096,71099,7,71998,71998,5,72874,72880,5,119149,119149,7,127374,127374,14,128335,128335,14,128482,128482,14,128765,128767,14,129399,129400,14,129680,129685,14,1476,1477,5,2377,2380,7,2759,2760,5,3137,3140,7,3458,3459,7,4153,4154,5,6432,6434,5,6978,6978,5,7675,7679,5,9723,9726,14,9823,9823,14,9919,9923,14,10035,10036,14,42736,42737,5,43596,43596,5,44200,44200,11,44648,44648,11,45096,45096,11,45544,45544,11,45992,45992,11,46440,46440,11,46888,46888,11,47336,47336,11,47784,47784,11,48232,48232,11,48680,48680,11,49128,49128,11,49576,49576,11,50024,50024,11,50472,50472,11,50920,50920,11,51368,51368,11,51816,51816,11,52264,52264,11,52712,52712,11,53160,53160,11,53608,53608,11,54056,54056,11,54504,54504,11,54952,54952,11,68108,68111,5,69933,69940,5,70197,70197,7,70498,70499,7,70845,70845,5,71229,71229,5,71727,71735,5,72154,72155,5,72344,72345,5,73023,73029,5,94095,94098,5,121403,121452,5,126981,127182,14,127538,127546,14,127990,127990,14,128391,128391,14,128445,128449,14,128500,128505,14,128752,128752,14,129160,129167,14,129356,129356,14,129432,129442,14,129648,129651,14,129751,131069,14,173,173,4,1757,1757,1,2274,2274,1,2494,2494,5,2641,2641,5,2876,2876,5,3014,3016,7,3262,3262,7,3393,3396,5,3570,3571,7,3968,3972,5,4228,4228,7,6086,6086,5,6679,6680,5,6912,6915,5,7080,7081,5,7380,7392,5,8252,8252,14,9096,9096,14,9748,9749,14,9784,9786,14,9833,9850,14,9890,9894,14,9938,9938,14,9999,9999,14,10085,10087,14,12349,12349,14,43136,43137,7,43454,43456,7,43755,43755,7,44088,44088,11,44312,44312,11,44536,44536,11,44760,44760,11,44984,44984,11,45208,45208,11,45432,45432,11,45656,45656,11,45880,45880,11,46104,46104,11,46328,46328,11,46552,46552,11,46776,46776,11,47000,47000,11,47224,47224,11,47448,47448,11,47672,47672,11,47896,47896,11,48120,48120,11,48344,48344,11,48568,48568,11,48792,48792,11,49016,49016,11,49240,49240,11,49464,49464,11,49688,49688,11,49912,49912,11,50136,50136,11,50360,50360,11,50584,50584,11,50808,50808,11,51032,51032,11,51256,51256,11,51480,51480,11,51704,51704,11,51928,51928,11,52152,52152,11,52376,52376,11,52600,52600,11,52824,52824,11,53048,53048,11,53272,53272,11,53496,53496,11,53720,53720,11,53944,53944,11,54168,54168,11,54392,54392,11,54616,54616,11,54840,54840,11,55064,55064,11,65438,65439,5,69633,69633,5,69837,69837,1,70018,70018,7,70188,70190,7,70368,70370,7,70465,70468,7,70712,70719,5,70835,70840,5,70850,70851,5,71132,71133,5,71340,71340,7,71458,71461,5,71985,71989,7,72002,72002,7,72193,72202,5,72281,72283,5,72766,72766,7,72885,72886,5,73104,73105,5,92912,92916,5,113824,113827,4,119173,119179,5,121505,121519,5,125136,125142,5,127279,127279,14,127489,127490,14,127570,127743,14,127900,127901,14,128254,128254,14,128369,128370,14,128400,128400,14,128425,128432,14,128468,128475,14,128489,128494,14,128715,128720,14,128745,128745,14,128759,128760,14,129004,129023,14,129296,129304,14,129340,129342,14,129388,129392,14,129404,129407,14,129454,129455,14,129485,129487,14,129659,129663,14,129719,129727,14,917536,917631,5,13,13,2,1160,1161,5,1564,1564,4,1807,1807,1,2085,2087,5,2363,2363,7,2402,2403,5,2507,2508,7,2622,2624,7,2691,2691,7,2786,2787,5,2881,2884,5,3006,3006,5,3072,3072,5,3170,3171,5,3267,3268,7,3330,3331,7,3406,3406,1,3538,3540,5,3655,3662,5,3897,3897,5,4038,4038,5,4184,4185,5,4352,4447,8,6068,6069,5,6155,6157,5,6448,6449,7,6742,6742,5,6783,6783,5,6966,6970,5,7042,7042,7,7143,7143,7,7212,7219,5,7412,7412,5,8206,8207,4,8294,8303,4,8596,8601,14,9410,9410,14,9742,9742,14,9757,9757,14,9770,9770,14,9794,9794,14,9828,9828,14,9855,9855,14,9882,9882,14,9900,9903,14,9929,9933,14,9963,9967,14,9987,9988,14,10006,10006,14,10062,10062,14,10175,10175,14,11744,11775,5,42607,42607,5,43043,43044,7,43263,43263,5,43444,43445,7,43569,43570,5,43698,43700,5,43766,43766,5,44032,44032,11,44144,44144,11,44256,44256,11,44368,44368,11,44480,44480,11,44592,44592,11,44704,44704,11,44816,44816,11,44928,44928,11,45040,45040,11,45152,45152,11,45264,45264,11,45376,45376,11,45488,45488,11,45600,45600,11,45712,45712,11,45824,45824,11,45936,45936,11,46048,46048,11,46160,46160,11,46272,46272,11,46384,46384,11,46496,46496,11,46608,46608,11,46720,46720,11,46832,46832,11,46944,46944,11,47056,47056,11,47168,47168,11,47280,47280,11,47392,47392,11,47504,47504,11,47616,47616,11,47728,47728,11,47840,47840,11,47952,47952,11,48064,48064,11,48176,48176,11,48288,48288,11,48400,48400,11,48512,48512,11,48624,48624,11,48736,48736,11,48848,48848,11,48960,48960,11,49072,49072,11,49184,49184,11,49296,49296,11,49408,49408,11,49520,49520,11,49632,49632,11,49744,49744,11,49856,49856,11,49968,49968,11,50080,50080,11,50192,50192,11,50304,50304,11,50416,50416,11,50528,50528,11,50640,50640,11,50752,50752,11,50864,50864,11,50976,50976,11,51088,51088,11,51200,51200,11,51312,51312,11,51424,51424,11,51536,51536,11,51648,51648,11,51760,51760,11,51872,51872,11,51984,51984,11,52096,52096,11,52208,52208,11,52320,52320,11,52432,52432,11,52544,52544,11,52656,52656,11,52768,52768,11,52880,52880,11,52992,52992,11,53104,53104,11,53216,53216,11,53328,53328,11,53440,53440,11,53552,53552,11,53664,53664,11,53776,53776,11,53888,53888,11,54000,54000,11,54112,54112,11,54224,54224,11,54336,54336,11,54448,54448,11,54560,54560,11,54672,54672,11,54784,54784,11,54896,54896,11,55008,55008,11,55120,55120,11,64286,64286,5,66272,66272,5,68900,68903,5,69762,69762,7,69817,69818,5,69927,69931,5,70003,70003,5,70070,70078,5,70094,70094,7,70194,70195,7,70206,70206,5,70400,70401,5,70463,70463,7,70475,70477,7,70512,70516,5,70722,70724,5,70832,70832,5,70842,70842,5,70847,70848,5,71088,71089,7,71102,71102,7,71219,71226,5,71231,71232,5,71342,71343,7,71453,71455,5,71463,71467,5,71737,71738,5,71995,71996,5,72000,72000,7,72145,72147,7,72160,72160,5,72249,72249,7,72273,72278,5,72330,72342,5,72752,72758,5,72850,72871,5,72882,72883,5,73018,73018,5,73031,73031,5,73109,73109,5,73461,73462,7,94031,94031,5,94192,94193,7,119142,119142,7,119155,119162,4,119362,119364,5,121476,121476,5,122888,122904,5,123184,123190,5,126976,126979,14,127184,127231,14,127344,127345,14,127405,127461,14,127514,127514,14,127561,127567,14,127778,127779,14,127896,127896,14,127985,127986,14,127995,127999,5,128326,128328,14,128360,128366,14,128378,128378,14,128394,128397,14,128405,128406,14,128422,128423,14,128435,128443,14,128453,128464,14,128479,128480,14,128484,128487,14,128496,128498,14,128640,128709,14,128723,128724,14,128736,128741,14,128747,128748,14,128755,128755,14,128762,128762,14,128981,128991,14,129096,129103,14,129292,129292,14,129311,129311,14,129329,129330,14,129344,129349,14,129360,129374,14,129394,129394,14,129402,129402,14,129413,129425,14,129445,129450,14,129466,129471,14,129483,129483,14,129511,129535,14,129653,129655,14,129667,129670,14,129705,129711,14,129731,129743,14,917505,917505,4,917760,917999,5,10,10,3,127,159,4,768,879,5,1471,1471,5,1536,1541,1,1648,1648,5,1767,1768,5,1840,1866,5,2070,2073,5,2137,2139,5,2307,2307,7,2366,2368,7,2382,2383,7,2434,2435,7,2497,2500,5,2519,2519,5,2563,2563,7,2631,2632,5,2677,2677,5,2750,2752,7,2763,2764,7,2817,2817,5,2879,2879,5,2891,2892,7,2914,2915,5,3008,3008,5,3021,3021,5,3076,3076,5,3146,3149,5,3202,3203,7,3264,3265,7,3271,3272,7,3298,3299,5,3390,3390,5,3402,3404,7,3426,3427,5,3535,3535,5,3544,3550,7,3635,3635,7,3763,3763,7,3893,3893,5,3953,3966,5,3981,3991,5,4145,4145,7,4157,4158,5,4209,4212,5,4237,4237,5,4520,4607,10,5970,5971,5,6071,6077,5,6089,6099,5,6277,6278,5,6439,6440,5,6451,6456,7,6683,6683,5,6744,6750,5,6765,6770,7,6846,6846,5,6964,6964,5,6972,6972,5,7019,7027,5,7074,7077,5,7083,7085,5,7146,7148,7,7154,7155,7,7222,7223,5,7394,7400,5,7416,7417,5,8204,8204,5,8233,8233,4,8288,8292,4,8413,8416,5,8482,8482,14,8986,8987,14,9193,9203,14,9654,9654,14,9733,9733,14,9745,9745,14,9752,9752,14,9760,9760,14,9766,9766,14,9774,9775,14,9792,9792,14,9800,9811,14,9825,9826,14,9831,9831,14,9852,9853,14,9872,9873,14,9880,9880,14,9885,9887,14,9896,9897,14,9906,9916,14,9926,9927,14,9936,9936,14,9941,9960,14,9974,9974,14,9982,9985,14,9992,9997,14,10002,10002,14,10017,10017,14,10055,10055,14,10071,10071,14,10145,10145,14,11013,11015,14,11503,11505,5,12334,12335,5,12951,12951,14,42612,42621,5,43014,43014,5,43047,43047,7,43204,43205,5,43335,43345,5,43395,43395,7,43450,43451,7,43561,43566,5,43573,43574,5,43644,43644,5,43710,43711,5,43758,43759,7,44005,44005,5,44012,44012,7,44060,44060,11,44116,44116,11,44172,44172,11,44228,44228,11,44284,44284,11,44340,44340,11,44396,44396,11,44452,44452,11,44508,44508,11,44564,44564,11,44620,44620,11,44676,44676,11,44732,44732,11,44788,44788,11,44844,44844,11,44900,44900,11,44956,44956,11,45012,45012,11,45068,45068,11,45124,45124,11,45180,45180,11,45236,45236,11,45292,45292,11,45348,45348,11,45404,45404,11,45460,45460,11,45516,45516,11,45572,45572,11,45628,45628,11,45684,45684,11,45740,45740,11,45796,45796,11,45852,45852,11,45908,45908,11,45964,45964,11,46020,46020,11,46076,46076,11,46132,46132,11,46188,46188,11,46244,46244,11,46300,46300,11,46356,46356,11,46412,46412,11,46468,46468,11,46524,46524,11,46580,46580,11,46636,46636,11,46692,46692,11,46748,46748,11,46804,46804,11,46860,46860,11,46916,46916,11,46972,46972,11,47028,47028,11,47084,47084,11,47140,47140,11,47196,47196,11,47252,47252,11,47308,47308,11,47364,47364,11,47420,47420,11,47476,47476,11,47532,47532,11,47588,47588,11,47644,47644,11,47700,47700,11,47756,47756,11,47812,47812,11,47868,47868,11,47924,47924,11,47980,47980,11,48036,48036,11,48092,48092,11,48148,48148,11,48204,48204,11,48260,48260,11,48316,48316,11,48372,48372,11,48428,48428,11,48484,48484,11,48540,48540,11,48596,48596,11,48652,48652,11,48708,48708,11,48764,48764,11,48820,48820,11,48876,48876,11,48932,48932,11,48988,48988,11,49044,49044,11,49100,49100,11,49156,49156,11,49212,49212,11,49268,49268,11,49324,49324,11,49380,49380,11,49436,49436,11,49492,49492,11,49548,49548,11,49604,49604,11,49660,49660,11,49716,49716,11,49772,49772,11,49828,49828,11,49884,49884,11,49940,49940,11,49996,49996,11,50052,50052,11,50108,50108,11,50164,50164,11,50220,50220,11,50276,50276,11,50332,50332,11,50388,50388,11,50444,50444,11,50500,50500,11,50556,50556,11,50612,50612,11,50668,50668,11,50724,50724,11,50780,50780,11,50836,50836,11,50892,50892,11,50948,50948,11,51004,51004,11,51060,51060,11,51116,51116,11,51172,51172,11,51228,51228,11,51284,51284,11,51340,51340,11,51396,51396,11,51452,51452,11,51508,51508,11,51564,51564,11,51620,51620,11,51676,51676,11,51732,51732,11,51788,51788,11,51844,51844,11,51900,51900,11,51956,51956,11,52012,52012,11,52068,52068,11,52124,52124,11,52180,52180,11,52236,52236,11,52292,52292,11,52348,52348,11,52404,52404,11,52460,52460,11,52516,52516,11,52572,52572,11,52628,52628,11,52684,52684,11,52740,52740,11,52796,52796,11,52852,52852,11,52908,52908,11,52964,52964,11,53020,53020,11,53076,53076,11,53132,53132,11,53188,53188,11,53244,53244,11,53300,53300,11,53356,53356,11,53412,53412,11,53468,53468,11,53524,53524,11,53580,53580,11,53636,53636,11,53692,53692,11,53748,53748,11,53804,53804,11,53860,53860,11,53916,53916,11,53972,53972,11,54028,54028,11,54084,54084,11,54140,54140,11,54196,54196,11,54252,54252,11,54308,54308,11,54364,54364,11,54420,54420,11,54476,54476,11,54532,54532,11,54588,54588,11,54644,54644,11,54700,54700,11,54756,54756,11,54812,54812,11,54868,54868,11,54924,54924,11,54980,54980,11,55036,55036,11,55092,55092,11,55148,55148,11,55216,55238,9,65056,65071,5,65529,65531,4,68097,68099,5,68159,68159,5,69446,69456,5,69688,69702,5,69808,69810,7,69815,69816,7,69821,69821,1,69888,69890,5,69932,69932,7,69957,69958,7,70016,70017,5,70067,70069,7,70079,70080,7,70089,70092,5,70095,70095,5,70191,70193,5,70196,70196,5,70198,70199,5,70367,70367,5,70371,70378,5,70402,70403,7,70462,70462,5,70464,70464,5,70471,70472,7,70487,70487,5,70502,70508,5,70709,70711,7,70720,70721,7,70725,70725,7,70750,70750,5,70833,70834,7,70841,70841,7,70843,70844,7,70846,70846,7,70849,70849,7,71087,71087,5,71090,71093,5,71100,71101,5,71103,71104,5,71216,71218,7,71227,71228,7,71230,71230,7,71339,71339,5,71341,71341,5,71344,71349,5,71351,71351,5,71456,71457,7,71462,71462,7,71724,71726,7,71736,71736,7,71984,71984,5,71991,71992,7,71997,71997,7,71999,71999,1,72001,72001,1,72003,72003,5,72148,72151,5,72156,72159,7,72164,72164,7,72243,72248,5,72250,72250,1,72263,72263,5,72279,72280,7,72324,72329,1,72343,72343,7,72751,72751,7,72760,72765,5,72767,72767,5,72873,72873,7,72881,72881,7,72884,72884,7,73009,73014,5,73020,73021,5,73030,73030,1,73098,73102,7,73107,73108,7,73110,73110,7,73459,73460,5,78896,78904,4,92976,92982,5,94033,94087,7,94180,94180,5,113821,113822,5,119141,119141,5,119143,119145,5,119150,119154,5,119163,119170,5,119210,119213,5,121344,121398,5,121461,121461,5,121499,121503,5,122880,122886,5,122907,122913,5,122918,122922,5,123628,123631,5,125252,125258,5,126980,126980,14,127183,127183,14,127245,127247,14,127340,127343,14,127358,127359,14,127377,127386,14,127462,127487,6,127491,127503,14,127535,127535,14,127548,127551,14,127568,127569,14,127744,127777,14,127780,127891,14,127894,127895,14,127897,127899,14,127902,127984,14,127987,127989,14,127991,127994,14,128000,128253,14,128255,128317,14,128329,128334,14,128336,128359,14,128367,128368,14,128371,128377,14,128379,128390,14,128392,128393,14,128398,128399,14,128401,128404,14,128407,128419,14,128421,128421,14,128424,128424,14,128433,128434,14,128444,128444,14,128450,128452,14,128465,128467,14,128476,128478,14,128481,128481,14,128483,128483,14,128488,128488,14,128495,128495,14,128499,128499,14,128506,128591,14,128710,128714,14,128721,128722,14,128725,128725,14,128728,128735,14,128742,128744,14,128746,128746,14,128749,128751,14,128753,128754,14,128756,128758,14,128761,128761,14,128763,128764,14,128884,128895,14,128992,129003,14,129036,129039,14,129114,129119,14,129198,129279,14,129293,129295,14,129305,129310,14,129312,129319,14,129328,129328,14,129331,129338,14,129343,129343,14,129351,129355,14,129357,129359,14,129375,129387,14,129393,129393,14,129395,129398,14,129401,129401,14,129403,129403,14,129408,129412,14,129426,129431,14,129443,129444,14,129451,129453,14,129456,129465,14,129472,129472,14,129475,129482,14,129484,129484,14,129488,129510,14,129536,129647,14,129652,129652,14,129656,129658,14,129664,129666,14,129671,129679,14,129686,129704,14,129712,129718,14,129728,129730,14,129744,129750,14,917504,917504,4,917506,917535,4,917632,917759,4,918000,921599,4,0,9,4,11,12,4,14,31,4,169,169,14,174,174,14,1155,1159,5,1425,1469,5,1473,1474,5,1479,1479,5,1552,1562,5,1611,1631,5,1750,1756,5,1759,1764,5,1770,1773,5,1809,1809,5,1958,1968,5,2045,2045,5,2075,2083,5,2089,2093,5,2259,2273,5,2275,2306,5,2362,2362,5,2364,2364,5,2369,2376,5,2381,2381,5,2385,2391,5,2433,2433,5,2492,2492,5,2495,2496,7,2503,2504,7,2509,2509,5,2530,2531,5,2561,2562,5,2620,2620,5,2625,2626,5,2635,2637,5,2672,2673,5,2689,2690,5,2748,2748,5,2753,2757,5,2761,2761,7,2765,2765,5,2810,2815,5,2818,2819,7,2878,2878,5,2880,2880,7,2887,2888,7,2893,2893,5,2903,2903,5,2946,2946,5,3007,3007,7,3009,3010,7,3018,3020,7,3031,3031,5,3073,3075,7,3134,3136,5,3142,3144,5,3157,3158,5,3201,3201,5,3260,3260,5,3263,3263,5,3266,3266,5,3270,3270,5,3274,3275,7,3285,3286,5,3328,3329,5,3387,3388,5,3391,3392,7,3398,3400,7,3405,3405,5,3415,3415,5,3457,3457,5,3530,3530,5,3536,3537,7,3542,3542,5,3551,3551,5,3633,3633,5,3636,3642,5,3761,3761,5,3764,3772,5,3864,3865,5,3895,3895,5,3902,3903,7,3967,3967,7,3974,3975,5,3993,4028,5,4141,4144,5,4146,4151,5,4155,4156,7,4182,4183,7,4190,4192,5,4226,4226,5,4229,4230,5,4253,4253,5,4448,4519,9,4957,4959,5,5938,5940,5,6002,6003,5,6070,6070,7,6078,6085,7,6087,6088,7,6109,6109,5,6158,6158,4,6313,6313,5,6435,6438,7,6441,6443,7,6450,6450,5,6457,6459,5,6681,6682,7,6741,6741,7,6743,6743,7,6752,6752,5,6757,6764,5,6771,6780,5,6832,6845,5,6847,6848,5,6916,6916,7,6965,6965,5,6971,6971,7,6973,6977,7,6979,6980,7,7040,7041,5,7073,7073,7,7078,7079,7,7082,7082,7,7142,7142,5,7144,7145,5,7149,7149,5,7151,7153,5,7204,7211,7,7220,7221,7,7376,7378,5,7393,7393,7,7405,7405,5,7415,7415,7,7616,7673,5,8203,8203,4,8205,8205,13,8232,8232,4,8234,8238,4,8265,8265,14,8293,8293,4,8400,8412,5,8417,8417,5,8421,8432,5,8505,8505,14,8617,8618,14,9000,9000,14,9167,9167,14,9208,9210,14,9642,9643,14,9664,9664,14,9728,9732,14,9735,9741,14,9743,9744,14,9746,9746,14,9750,9751,14,9753,9756,14,9758,9759,14,9761,9761,14,9764,9765,14,9767,9769,14,9771,9773,14,9776,9783,14,9787,9791,14,9793,9793,14,9795,9799,14,9812,9822,14,9824,9824,14,9827,9827,14,9829,9830,14,9832,9832,14,9851,9851,14,9854,9854,14,9856,9861,14,9874,9876,14,9878,9879,14,9881,9881,14,9883,9884,14,9888,9889,14,9895,9895,14,9898,9899,14,9904,9905,14,9917,9918,14,9924,9925,14,9928,9928,14,9934,9935,14,9937,9937,14,9939,9940,14,9961,9962,14,9968,9973,14,9975,9978,14,9981,9981,14,9986,9986,14,9989,9989,14,9998,9998,14,10000,10001,14,10004,10004,14,10013,10013,14,10024,10024,14,10052,10052,14,10060,10060,14,10067,10069,14,10083,10084,14,10133,10135,14,10160,10160,14,10548,10549,14,11035,11036,14,11093,11093,14,11647,11647,5,12330,12333,5,12336,12336,14,12441,12442,5,12953,12953,14,42608,42610,5,42654,42655,5,43010,43010,5,43019,43019,5,43045,43046,5,43052,43052,5,43188,43203,7,43232,43249,5,43302,43309,5,43346,43347,7,43392,43394,5,43443,43443,5,43446,43449,5,43452,43453,5,43493,43493,5,43567,43568,7,43571,43572,7,43587,43587,5,43597,43597,7,43696,43696,5,43703,43704,5,43713,43713,5,43756,43757,5,43765,43765,7,44003,44004,7,44006,44007,7,44009,44010,7,44013,44013,5,44033,44059,12,44061,44087,12,44089,44115,12,44117,44143,12,44145,44171,12,44173,44199,12,44201,44227,12,44229,44255,12,44257,44283,12,44285,44311,12,44313,44339,12,44341,44367,12,44369,44395,12,44397,44423,12,44425,44451,12,44453,44479,12,44481,44507,12,44509,44535,12,44537,44563,12,44565,44591,12,44593,44619,12,44621,44647,12,44649,44675,12,44677,44703,12,44705,44731,12,44733,44759,12,44761,44787,12,44789,44815,12,44817,44843,12,44845,44871,12,44873,44899,12,44901,44927,12,44929,44955,12,44957,44983,12,44985,45011,12,45013,45039,12,45041,45067,12,45069,45095,12,45097,45123,12,45125,45151,12,45153,45179,12,45181,45207,12,45209,45235,12,45237,45263,12,45265,45291,12,45293,45319,12,45321,45347,12,45349,45375,12,45377,45403,12,45405,45431,12,45433,45459,12,45461,45487,12,45489,45515,12,45517,45543,12,45545,45571,12,45573,45599,12,45601,45627,12,45629,45655,12,45657,45683,12,45685,45711,12,45713,45739,12,45741,45767,12,45769,45795,12,45797,45823,12,45825,45851,12,45853,45879,12,45881,45907,12,45909,45935,12,45937,45963,12,45965,45991,12,45993,46019,12,46021,46047,12,46049,46075,12,46077,46103,12,46105,46131,12,46133,46159,12,46161,46187,12,46189,46215,12,46217,46243,12,46245,46271,12,46273,46299,12,46301,46327,12,46329,46355,12,46357,46383,12,46385,46411,12,46413,46439,12,46441,46467,12,46469,46495,12,46497,46523,12,46525,46551,12,46553,46579,12,46581,46607,12,46609,46635,12,46637,46663,12,46665,46691,12,46693,46719,12,46721,46747,12,46749,46775,12,46777,46803,12,46805,46831,12,46833,46859,12,46861,46887,12,46889,46915,12,46917,46943,12,46945,46971,12,46973,46999,12,47001,47027,12,47029,47055,12,47057,47083,12,47085,47111,12,47113,47139,12,47141,47167,12,47169,47195,12,47197,47223,12,47225,47251,12,47253,47279,12,47281,47307,12,47309,47335,12,47337,47363,12,47365,47391,12,47393,47419,12,47421,47447,12,47449,47475,12,47477,47503,12,47505,47531,12,47533,47559,12,47561,47587,12,47589,47615,12,47617,47643,12,47645,47671,12,47673,47699,12,47701,47727,12,47729,47755,12,47757,47783,12,47785,47811,12,47813,47839,12,47841,47867,12,47869,47895,12,47897,47923,12,47925,47951,12,47953,47979,12,47981,48007,12,48009,48035,12,48037,48063,12,48065,48091,12,48093,48119,12,48121,48147,12,48149,48175,12,48177,48203,12,48205,48231,12,48233,48259,12,48261,48287,12,48289,48315,12,48317,48343,12,48345,48371,12,48373,48399,12,48401,48427,12,48429,48455,12,48457,48483,12,48485,48511,12,48513,48539,12,48541,48567,12,48569,48595,12,48597,48623,12,48625,48651,12,48653,48679,12,48681,48707,12,48709,48735,12,48737,48763,12,48765,48791,12,48793,48819,12,48821,48847,12,48849,48875,12,48877,48903,12,48905,48931,12,48933,48959,12,48961,48987,12,48989,49015,12,49017,49043,12,49045,49071,12,49073,49099,12,49101,49127,12,49129,49155,12,49157,49183,12,49185,49211,12,49213,49239,12,49241,49267,12,49269,49295,12,49297,49323,12,49325,49351,12,49353,49379,12,49381,49407,12,49409,49435,12,49437,49463,12,49465,49491,12,49493,49519,12,49521,49547,12,49549,49575,12,49577,49603,12,49605,49631,12,49633,49659,12,49661,49687,12,49689,49715,12,49717,49743,12,49745,49771,12,49773,49799,12,49801,49827,12,49829,49855,12,49857,49883,12,49885,49911,12,49913,49939,12,49941,49967,12,49969,49995,12,49997,50023,12,50025,50051,12,50053,50079,12,50081,50107,12,50109,50135,12,50137,50163,12,50165,50191,12,50193,50219,12,50221,50247,12,50249,50275,12,50277,50303,12,50305,50331,12,50333,50359,12,50361,50387,12,50389,50415,12,50417,50443,12,50445,50471,12,50473,50499,12,50501,50527,12,50529,50555,12,50557,50583,12,50585,50611,12,50613,50639,12,50641,50667,12,50669,50695,12,50697,50723,12,50725,50751,12,50753,50779,12,50781,50807,12,50809,50835,12,50837,50863,12,50865,50891,12,50893,50919,12,50921,50947,12,50949,50975,12,50977,51003,12,51005,51031,12,51033,51059,12,51061,51087,12,51089,51115,12,51117,51143,12,51145,51171,12,51173,51199,12,51201,51227,12,51229,51255,12,51257,51283,12,51285,51311,12,51313,51339,12,51341,51367,12,51369,51395,12,51397,51423,12,51425,51451,12,51453,51479,12,51481,51507,12,51509,51535,12,51537,51563,12,51565,51591,12,51593,51619,12,51621,51647,12,51649,51675,12,51677,51703,12,51705,51731,12,51733,51759,12,51761,51787,12,51789,51815,12,51817,51843,12,51845,51871,12,51873,51899,12,51901,51927,12,51929,51955,12,51957,51983,12,51985,52011,12,52013,52039,12,52041,52067,12,52069,52095,12,52097,52123,12,52125,52151,12,52153,52179,12,52181,52207,12,52209,52235,12,52237,52263,12,52265,52291,12,52293,52319,12,52321,52347,12,52349,52375,12,52377,52403,12,52405,52431,12,52433,52459,12,52461,52487,12,52489,52515,12,52517,52543,12,52545,52571,12,52573,52599,12,52601,52627,12,52629,52655,12,52657,52683,12,52685,52711,12,52713,52739,12,52741,52767,12,52769,52795,12,52797,52823,12,52825,52851,12,52853,52879,12,52881,52907,12,52909,52935,12,52937,52963,12,52965,52991,12,52993,53019,12,53021,53047,12,53049,53075,12,53077,53103,12,53105,53131,12,53133,53159,12,53161,53187,12,53189,53215,12,53217,53243,12,53245,53271,12,53273,53299,12,53301,53327,12,53329,53355,12,53357,53383,12,53385,53411,12,53413,53439,12,53441,53467,12,53469,53495,12,53497,53523,12,53525,53551,12,53553,53579,12,53581,53607,12,53609,53635,12,53637,53663,12,53665,53691,12,53693,53719,12,53721,53747,12,53749,53775,12,53777,53803,12,53805,53831,12,53833,53859,12,53861,53887,12,53889,53915,12,53917,53943,12,53945,53971,12,53973,53999,12,54001,54027,12,54029,54055,12,54057,54083,12,54085,54111,12,54113,54139,12,54141,54167,12,54169,54195,12,54197,54223,12,54225,54251,12,54253,54279,12,54281,54307,12,54309,54335,12,54337,54363,12,54365,54391,12,54393,54419,12,54421,54447,12,54449,54475,12,54477,54503,12,54505,54531,12,54533,54559,12,54561,54587,12,54589,54615,12,54617,54643,12,54645,54671,12,54673,54699,12,54701,54727,12,54729,54755,12,54757,54783,12,54785,54811,12,54813,54839,12,54841,54867,12,54869,54895,12,54897,54923,12,54925,54951,12,54953,54979,12,54981,55007,12,55009,55035,12,55037,55063,12,55065,55091,12,55093,55119,12,55121,55147,12,55149,55175,12,55177,55203,12,55243,55291,10,65024,65039,5,65279,65279,4,65520,65528,4,66045,66045,5,66422,66426,5,68101,68102,5,68152,68154,5,68325,68326,5,69291,69292,5,69632,69632,7,69634,69634,7,69759,69761,5]');
} //#endregion
// CONCATENATED MODULE: ./node_modules/monaco-editor/esm/vs/base/common/hash.js



/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/**
 * Return a hash value for an object.
 */

function hash(obj) {
  return doHash(obj, 0);
}
function doHash(obj, hashVal) {
  switch (typeof obj) {
    case 'object':
      if (obj === null) {
        return numberHash(349, hashVal);
      } else if (Array.isArray(obj)) {
        return arrayHash(obj, hashVal);
      }

      return objectHash(obj, hashVal);

    case 'string':
      return stringHash(obj, hashVal);

    case 'boolean':
      return booleanHash(obj, hashVal);

    case 'number':
      return numberHash(obj, hashVal);

    case 'undefined':
      return numberHash(937, hashVal);

    default:
      return numberHash(617, hashVal);
  }
}

function numberHash(val, initialHashVal) {
  return (initialHashVal << 5) - initialHashVal + val | 0; // hashVal * 31 + ch, keep as int32
}

function booleanHash(b, initialHashVal) {
  return numberHash(b ? 433 : 863, initialHashVal);
}

function stringHash(s, hashVal) {
  hashVal = numberHash(149417, hashVal);

  for (var i = 0, length = s.length; i < length; i++) {
    hashVal = numberHash(s.charCodeAt(i), hashVal);
  }

  return hashVal;
}

function arrayHash(arr, initialHashVal) {
  initialHashVal = numberHash(104579, initialHashVal);
  return arr.reduce(function (hashVal, item) {
    return doHash(item, hashVal);
  }, initialHashVal);
}

function objectHash(obj, initialHashVal) {
  initialHashVal = numberHash(181387, initialHashVal);
  return Object.keys(obj).sort().reduce(function (hashVal, key) {
    hashVal = stringHash(key, hashVal);
    return doHash(obj[key], hashVal);
  }, initialHashVal);
}

function leftRotate(value, bits) {
  var totalBits = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 32;
  // delta + bits = totalBits
  var delta = totalBits - bits; // All ones, expect `delta` zeros aligned to the right

  var mask = ~((1 << delta) - 1); // Join (value left-shifted `bits` bits) with (masked value right-shifted `delta` bits)

  return (value << bits | (mask & value) >>> delta) >>> 0;
}

function fill(dest) {
  var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var count = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : dest.byteLength;
  var value = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

  for (var i = 0; i < count; i++) {
    dest[index + i] = value;
  }
}

function leftPad(value, length) {
  var char = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '0';

  while (value.length < length) {
    value = char + value;
  }

  return value;
}

function toHexString(value) {
  var bitsize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 32;
  return leftPad((value >>> 0).toString(16), bitsize / 4);
}
/**
 * A SHA1 implementation that works with strings and does not allocate.
 */


var hash_StringSHA1 = /*#__PURE__*/function () {
  function StringSHA1() {
    _classCallCheck(this, StringSHA1);

    this._h0 = 0x67452301;
    this._h1 = 0xEFCDAB89;
    this._h2 = 0x98BADCFE;
    this._h3 = 0x10325476;
    this._h4 = 0xC3D2E1F0;
    this._buff = new Uint8Array(64
    /* BLOCK_SIZE */
    + 3
    /* to fit any utf-8 */
    );
    this._buffDV = new DataView(this._buff.buffer);
    this._buffLen = 0;
    this._totalLen = 0;
    this._leftoverHighSurrogate = 0;
    this._finished = false;
  }

  _createClass(StringSHA1, [{
    key: "update",
    value: function update(str) {
      var strLen = str.length;

      if (strLen === 0) {
        return;
      }

      var buff = this._buff;
      var buffLen = this._buffLen;
      var leftoverHighSurrogate = this._leftoverHighSurrogate;
      var charCode;
      var offset;

      if (leftoverHighSurrogate !== 0) {
        charCode = leftoverHighSurrogate;
        offset = -1;
        leftoverHighSurrogate = 0;
      } else {
        charCode = str.charCodeAt(0);
        offset = 0;
      }

      while (true) {
        var codePoint = charCode;

        if (isHighSurrogate(charCode)) {
          if (offset + 1 < strLen) {
            var nextCharCode = str.charCodeAt(offset + 1);

            if (isLowSurrogate(nextCharCode)) {
              offset++;
              codePoint = computeCodePoint(charCode, nextCharCode);
            } else {
              // illegal => unicode replacement character
              codePoint = 65533
              /* UNICODE_REPLACEMENT */
              ;
            }
          } else {
            // last character is a surrogate pair
            leftoverHighSurrogate = charCode;
            break;
          }
        } else if (isLowSurrogate(charCode)) {
          // illegal => unicode replacement character
          codePoint = 65533
          /* UNICODE_REPLACEMENT */
          ;
        }

        buffLen = this._push(buff, buffLen, codePoint);
        offset++;

        if (offset < strLen) {
          charCode = str.charCodeAt(offset);
        } else {
          break;
        }
      }

      this._buffLen = buffLen;
      this._leftoverHighSurrogate = leftoverHighSurrogate;
    }
  }, {
    key: "_push",
    value: function _push(buff, buffLen, codePoint) {
      if (codePoint < 0x0080) {
        buff[buffLen++] = codePoint;
      } else if (codePoint < 0x0800) {
        buff[buffLen++] = 192 | (codePoint & 1984) >>> 6;
        buff[buffLen++] = 128 | (codePoint & 63) >>> 0;
      } else if (codePoint < 0x10000) {
        buff[buffLen++] = 224 | (codePoint & 61440) >>> 12;
        buff[buffLen++] = 128 | (codePoint & 4032) >>> 6;
        buff[buffLen++] = 128 | (codePoint & 63) >>> 0;
      } else {
        buff[buffLen++] = 240 | (codePoint & 1835008) >>> 18;
        buff[buffLen++] = 128 | (codePoint & 258048) >>> 12;
        buff[buffLen++] = 128 | (codePoint & 4032) >>> 6;
        buff[buffLen++] = 128 | (codePoint & 63) >>> 0;
      }

      if (buffLen >= 64
      /* BLOCK_SIZE */
      ) {
          this._step();

          buffLen -= 64
          /* BLOCK_SIZE */
          ;
          this._totalLen += 64
          /* BLOCK_SIZE */
          ; // take last 3 in case of UTF8 overflow

          buff[0] = buff[64
          /* BLOCK_SIZE */
          + 0];
          buff[1] = buff[64
          /* BLOCK_SIZE */
          + 1];
          buff[2] = buff[64
          /* BLOCK_SIZE */
          + 2];
        }

      return buffLen;
    }
  }, {
    key: "digest",
    value: function digest() {
      if (!this._finished) {
        this._finished = true;

        if (this._leftoverHighSurrogate) {
          // illegal => unicode replacement character
          this._leftoverHighSurrogate = 0;
          this._buffLen = this._push(this._buff, this._buffLen, 65533
          /* UNICODE_REPLACEMENT */
          );
        }

        this._totalLen += this._buffLen;

        this._wrapUp();
      }

      return toHexString(this._h0) + toHexString(this._h1) + toHexString(this._h2) + toHexString(this._h3) + toHexString(this._h4);
    }
  }, {
    key: "_wrapUp",
    value: function _wrapUp() {
      this._buff[this._buffLen++] = 0x80;
      fill(this._buff, this._buffLen);

      if (this._buffLen > 56) {
        this._step();

        fill(this._buff);
      } // this will fit because the mantissa can cover up to 52 bits


      var ml = 8 * this._totalLen;

      this._buffDV.setUint32(56, Math.floor(ml / 4294967296), false);

      this._buffDV.setUint32(60, ml % 4294967296, false);

      this._step();
    }
  }, {
    key: "_step",
    value: function _step() {
      var bigBlock32 = StringSHA1._bigBlock32;
      var data = this._buffDV;

      for (var j = 0; j < 64
      /* 16*4 */
      ; j += 4) {
        bigBlock32.setUint32(j, data.getUint32(j, false), false);
      }

      for (var _j = 64; _j < 320
      /* 80*4 */
      ; _j += 4) {
        bigBlock32.setUint32(_j, leftRotate(bigBlock32.getUint32(_j - 12, false) ^ bigBlock32.getUint32(_j - 32, false) ^ bigBlock32.getUint32(_j - 56, false) ^ bigBlock32.getUint32(_j - 64, false), 1), false);
      }

      var a = this._h0;
      var b = this._h1;
      var c = this._h2;
      var d = this._h3;
      var e = this._h4;
      var f, k;
      var temp;

      for (var _j2 = 0; _j2 < 80; _j2++) {
        if (_j2 < 20) {
          f = b & c | ~b & d;
          k = 0x5A827999;
        } else if (_j2 < 40) {
          f = b ^ c ^ d;
          k = 0x6ED9EBA1;
        } else if (_j2 < 60) {
          f = b & c | b & d | c & d;
          k = 0x8F1BBCDC;
        } else {
          f = b ^ c ^ d;
          k = 0xCA62C1D6;
        }

        temp = leftRotate(a, 5) + f + e + k + bigBlock32.getUint32(_j2 * 4, false) & 0xffffffff;
        e = d;
        d = c;
        c = leftRotate(b, 30);
        b = a;
        a = temp;
      }

      this._h0 = this._h0 + a & 0xffffffff;
      this._h1 = this._h1 + b & 0xffffffff;
      this._h2 = this._h2 + c & 0xffffffff;
      this._h3 = this._h3 + d & 0xffffffff;
      this._h4 = this._h4 + e & 0xffffffff;
    }
  }]);

  return StringSHA1;
}();
hash_StringSHA1._bigBlock32 = new DataView(new ArrayBuffer(320)); // 80 * 4 = 320
// CONCATENATED MODULE: ./node_modules/monaco-editor/esm/vs/base/common/diff/diff.js




/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


var diff_StringDiffSequence = /*#__PURE__*/function () {
  function StringDiffSequence(source) {
    _classCallCheck(this, StringDiffSequence);

    this.source = source;
  }

  _createClass(StringDiffSequence, [{
    key: "getElements",
    value: function getElements() {
      var source = this.source;
      var characters = new Int32Array(source.length);

      for (var i = 0, len = source.length; i < len; i++) {
        characters[i] = source.charCodeAt(i);
      }

      return characters;
    }
  }]);

  return StringDiffSequence;
}();
function stringDiff(original, modified, pretty) {
  return new diff_LcsDiff(new diff_StringDiffSequence(original), new diff_StringDiffSequence(modified)).ComputeDiff(pretty).changes;
} //
// The code below has been ported from a C# implementation in VS
//

var diff_Debug = /*#__PURE__*/function () {
  function Debug() {
    _classCallCheck(this, Debug);
  }

  _createClass(Debug, null, [{
    key: "Assert",
    value: function Assert(condition, message) {
      if (!condition) {
        throw new Error(message);
      }
    }
  }]);

  return Debug;
}();
var diff_MyArray = /*#__PURE__*/function () {
  function MyArray() {
    _classCallCheck(this, MyArray);
  }

  _createClass(MyArray, null, [{
    key: "Copy",

    /**
     * Copies a range of elements from an Array starting at the specified source index and pastes
     * them to another Array starting at the specified destination index. The length and the indexes
     * are specified as 64-bit integers.
     * sourceArray:
     *		The Array that contains the data to copy.
     * sourceIndex:
     *		A 64-bit integer that represents the index in the sourceArray at which copying begins.
     * destinationArray:
     *		The Array that receives the data.
     * destinationIndex:
     *		A 64-bit integer that represents the index in the destinationArray at which storing begins.
     * length:
     *		A 64-bit integer that represents the number of elements to copy.
     */
    value: function Copy(sourceArray, sourceIndex, destinationArray, destinationIndex, length) {
      for (var i = 0; i < length; i++) {
        destinationArray[destinationIndex + i] = sourceArray[sourceIndex + i];
      }
    }
  }, {
    key: "Copy2",
    value: function Copy2(sourceArray, sourceIndex, destinationArray, destinationIndex, length) {
      for (var i = 0; i < length; i++) {
        destinationArray[destinationIndex + i] = sourceArray[sourceIndex + i];
      }
    }
  }]);

  return MyArray;
}();
/**
 * A utility class which helps to create the set of DiffChanges from
 * a difference operation. This class accepts original DiffElements and
 * modified DiffElements that are involved in a particular change. The
 * MarktNextChange() method can be called to mark the separation between
 * distinct changes. At the end, the Changes property can be called to retrieve
 * the constructed changes.
 */

var diff_DiffChangeHelper = /*#__PURE__*/function () {
  /**
   * Constructs a new DiffChangeHelper for the given DiffSequences.
   */
  function DiffChangeHelper() {
    _classCallCheck(this, DiffChangeHelper);

    this.m_changes = [];
    this.m_originalStart = 1073741824
    /* MAX_SAFE_SMALL_INTEGER */
    ;
    this.m_modifiedStart = 1073741824
    /* MAX_SAFE_SMALL_INTEGER */
    ;
    this.m_originalCount = 0;
    this.m_modifiedCount = 0;
  }
  /**
   * Marks the beginning of the next change in the set of differences.
   */


  _createClass(DiffChangeHelper, [{
    key: "MarkNextChange",
    value: function MarkNextChange() {
      // Only add to the list if there is something to add
      if (this.m_originalCount > 0 || this.m_modifiedCount > 0) {
        // Add the new change to our list
        this.m_changes.push(new diffChange_DiffChange(this.m_originalStart, this.m_originalCount, this.m_modifiedStart, this.m_modifiedCount));
      } // Reset for the next change


      this.m_originalCount = 0;
      this.m_modifiedCount = 0;
      this.m_originalStart = 1073741824
      /* MAX_SAFE_SMALL_INTEGER */
      ;
      this.m_modifiedStart = 1073741824
      /* MAX_SAFE_SMALL_INTEGER */
      ;
    }
    /**
     * Adds the original element at the given position to the elements
     * affected by the current change. The modified index gives context
     * to the change position with respect to the original sequence.
     * @param originalIndex The index of the original element to add.
     * @param modifiedIndex The index of the modified element that provides corresponding position in the modified sequence.
     */

  }, {
    key: "AddOriginalElement",
    value: function AddOriginalElement(originalIndex, modifiedIndex) {
      // The 'true' start index is the smallest of the ones we've seen
      this.m_originalStart = Math.min(this.m_originalStart, originalIndex);
      this.m_modifiedStart = Math.min(this.m_modifiedStart, modifiedIndex);
      this.m_originalCount++;
    }
    /**
     * Adds the modified element at the given position to the elements
     * affected by the current change. The original index gives context
     * to the change position with respect to the modified sequence.
     * @param originalIndex The index of the original element that provides corresponding position in the original sequence.
     * @param modifiedIndex The index of the modified element to add.
     */

  }, {
    key: "AddModifiedElement",
    value: function AddModifiedElement(originalIndex, modifiedIndex) {
      // The 'true' start index is the smallest of the ones we've seen
      this.m_originalStart = Math.min(this.m_originalStart, originalIndex);
      this.m_modifiedStart = Math.min(this.m_modifiedStart, modifiedIndex);
      this.m_modifiedCount++;
    }
    /**
     * Retrieves all of the changes marked by the class.
     */

  }, {
    key: "getChanges",
    value: function getChanges() {
      if (this.m_originalCount > 0 || this.m_modifiedCount > 0) {
        // Finish up on whatever is left
        this.MarkNextChange();
      }

      return this.m_changes;
    }
    /**
     * Retrieves all of the changes marked by the class in the reverse order
     */

  }, {
    key: "getReverseChanges",
    value: function getReverseChanges() {
      if (this.m_originalCount > 0 || this.m_modifiedCount > 0) {
        // Finish up on whatever is left
        this.MarkNextChange();
      }

      this.m_changes.reverse();
      return this.m_changes;
    }
  }]);

  return DiffChangeHelper;
}();
/**
 * An implementation of the difference algorithm described in
 * "An O(ND) Difference Algorithm and its variations" by Eugene W. Myers
 */


var diff_LcsDiff = /*#__PURE__*/function () {
  /**
   * Constructs the DiffFinder
   */
  function LcsDiff(originalSequence, modifiedSequence) {
    var continueProcessingPredicate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    _classCallCheck(this, LcsDiff);

    this.ContinueProcessingPredicate = continueProcessingPredicate;

    var _LcsDiff$_getElements = LcsDiff._getElements(originalSequence),
        _LcsDiff$_getElements2 = _slicedToArray(_LcsDiff$_getElements, 3),
        originalStringElements = _LcsDiff$_getElements2[0],
        originalElementsOrHash = _LcsDiff$_getElements2[1],
        originalHasStrings = _LcsDiff$_getElements2[2];

    var _LcsDiff$_getElements3 = LcsDiff._getElements(modifiedSequence),
        _LcsDiff$_getElements4 = _slicedToArray(_LcsDiff$_getElements3, 3),
        modifiedStringElements = _LcsDiff$_getElements4[0],
        modifiedElementsOrHash = _LcsDiff$_getElements4[1],
        modifiedHasStrings = _LcsDiff$_getElements4[2];

    this._hasStrings = originalHasStrings && modifiedHasStrings;
    this._originalStringElements = originalStringElements;
    this._originalElementsOrHash = originalElementsOrHash;
    this._modifiedStringElements = modifiedStringElements;
    this._modifiedElementsOrHash = modifiedElementsOrHash;
    this.m_forwardHistory = [];
    this.m_reverseHistory = [];
  }

  _createClass(LcsDiff, [{
    key: "ElementsAreEqual",
    value: function ElementsAreEqual(originalIndex, newIndex) {
      if (this._originalElementsOrHash[originalIndex] !== this._modifiedElementsOrHash[newIndex]) {
        return false;
      }

      return this._hasStrings ? this._originalStringElements[originalIndex] === this._modifiedStringElements[newIndex] : true;
    }
  }, {
    key: "OriginalElementsAreEqual",
    value: function OriginalElementsAreEqual(index1, index2) {
      if (this._originalElementsOrHash[index1] !== this._originalElementsOrHash[index2]) {
        return false;
      }

      return this._hasStrings ? this._originalStringElements[index1] === this._originalStringElements[index2] : true;
    }
  }, {
    key: "ModifiedElementsAreEqual",
    value: function ModifiedElementsAreEqual(index1, index2) {
      if (this._modifiedElementsOrHash[index1] !== this._modifiedElementsOrHash[index2]) {
        return false;
      }

      return this._hasStrings ? this._modifiedStringElements[index1] === this._modifiedStringElements[index2] : true;
    }
  }, {
    key: "ComputeDiff",
    value: function ComputeDiff(pretty) {
      return this._ComputeDiff(0, this._originalElementsOrHash.length - 1, 0, this._modifiedElementsOrHash.length - 1, pretty);
    }
    /**
     * Computes the differences between the original and modified input
     * sequences on the bounded range.
     * @returns An array of the differences between the two input sequences.
     */

  }, {
    key: "_ComputeDiff",
    value: function _ComputeDiff(originalStart, originalEnd, modifiedStart, modifiedEnd, pretty) {
      var quitEarlyArr = [false];
      var changes = this.ComputeDiffRecursive(originalStart, originalEnd, modifiedStart, modifiedEnd, quitEarlyArr);

      if (pretty) {
        // We have to clean up the computed diff to be more intuitive
        // but it turns out this cannot be done correctly until the entire set
        // of diffs have been computed
        changes = this.PrettifyChanges(changes);
      }

      return {
        quitEarly: quitEarlyArr[0],
        changes: changes
      };
    }
    /**
     * Private helper method which computes the differences on the bounded range
     * recursively.
     * @returns An array of the differences between the two input sequences.
     */

  }, {
    key: "ComputeDiffRecursive",
    value: function ComputeDiffRecursive(originalStart, originalEnd, modifiedStart, modifiedEnd, quitEarlyArr) {
      quitEarlyArr[0] = false; // Find the start of the differences

      while (originalStart <= originalEnd && modifiedStart <= modifiedEnd && this.ElementsAreEqual(originalStart, modifiedStart)) {
        originalStart++;
        modifiedStart++;
      } // Find the end of the differences


      while (originalEnd >= originalStart && modifiedEnd >= modifiedStart && this.ElementsAreEqual(originalEnd, modifiedEnd)) {
        originalEnd--;
        modifiedEnd--;
      } // In the special case where we either have all insertions or all deletions or the sequences are identical


      if (originalStart > originalEnd || modifiedStart > modifiedEnd) {
        var changes;

        if (modifiedStart <= modifiedEnd) {
          diff_Debug.Assert(originalStart === originalEnd + 1, 'originalStart should only be one more than originalEnd'); // All insertions

          changes = [new diffChange_DiffChange(originalStart, 0, modifiedStart, modifiedEnd - modifiedStart + 1)];
        } else if (originalStart <= originalEnd) {
          diff_Debug.Assert(modifiedStart === modifiedEnd + 1, 'modifiedStart should only be one more than modifiedEnd'); // All deletions

          changes = [new diffChange_DiffChange(originalStart, originalEnd - originalStart + 1, modifiedStart, 0)];
        } else {
          diff_Debug.Assert(originalStart === originalEnd + 1, 'originalStart should only be one more than originalEnd');
          diff_Debug.Assert(modifiedStart === modifiedEnd + 1, 'modifiedStart should only be one more than modifiedEnd'); // Identical sequences - No differences

          changes = [];
        }

        return changes;
      } // This problem can be solved using the Divide-And-Conquer technique.


      var midOriginalArr = [0];
      var midModifiedArr = [0];
      var result = this.ComputeRecursionPoint(originalStart, originalEnd, modifiedStart, modifiedEnd, midOriginalArr, midModifiedArr, quitEarlyArr);
      var midOriginal = midOriginalArr[0];
      var midModified = midModifiedArr[0];

      if (result !== null) {
        // Result is not-null when there was enough memory to compute the changes while
        // searching for the recursion point
        return result;
      } else if (!quitEarlyArr[0]) {
        // We can break the problem down recursively by finding the changes in the
        // First Half:   (originalStart, modifiedStart) to (midOriginal, midModified)
        // Second Half:  (midOriginal + 1, minModified + 1) to (originalEnd, modifiedEnd)
        // NOTE: ComputeDiff() is inclusive, therefore the second range starts on the next point
        var leftChanges = this.ComputeDiffRecursive(originalStart, midOriginal, modifiedStart, midModified, quitEarlyArr);
        var rightChanges = [];

        if (!quitEarlyArr[0]) {
          rightChanges = this.ComputeDiffRecursive(midOriginal + 1, originalEnd, midModified + 1, modifiedEnd, quitEarlyArr);
        } else {
          // We did't have time to finish the first half, so we don't have time to compute this half.
          // Consider the entire rest of the sequence different.
          rightChanges = [new diffChange_DiffChange(midOriginal + 1, originalEnd - (midOriginal + 1) + 1, midModified + 1, modifiedEnd - (midModified + 1) + 1)];
        }

        return this.ConcatenateChanges(leftChanges, rightChanges);
      } // If we hit here, we quit early, and so can't return anything meaningful


      return [new diffChange_DiffChange(originalStart, originalEnd - originalStart + 1, modifiedStart, modifiedEnd - modifiedStart + 1)];
    }
  }, {
    key: "WALKTRACE",
    value: function WALKTRACE(diagonalForwardBase, diagonalForwardStart, diagonalForwardEnd, diagonalForwardOffset, diagonalReverseBase, diagonalReverseStart, diagonalReverseEnd, diagonalReverseOffset, forwardPoints, reversePoints, originalIndex, originalEnd, midOriginalArr, modifiedIndex, modifiedEnd, midModifiedArr, deltaIsEven, quitEarlyArr) {
      var forwardChanges = null;
      var reverseChanges = null; // First, walk backward through the forward diagonals history

      var changeHelper = new diff_DiffChangeHelper();
      var diagonalMin = diagonalForwardStart;
      var diagonalMax = diagonalForwardEnd;
      var diagonalRelative = midOriginalArr[0] - midModifiedArr[0] - diagonalForwardOffset;
      var lastOriginalIndex = -1073741824
      /* MIN_SAFE_SMALL_INTEGER */
      ;
      var historyIndex = this.m_forwardHistory.length - 1;

      do {
        // Get the diagonal index from the relative diagonal number
        var diagonal = diagonalRelative + diagonalForwardBase; // Figure out where we came from

        if (diagonal === diagonalMin || diagonal < diagonalMax && forwardPoints[diagonal - 1] < forwardPoints[diagonal + 1]) {
          // Vertical line (the element is an insert)
          originalIndex = forwardPoints[diagonal + 1];
          modifiedIndex = originalIndex - diagonalRelative - diagonalForwardOffset;

          if (originalIndex < lastOriginalIndex) {
            changeHelper.MarkNextChange();
          }

          lastOriginalIndex = originalIndex;
          changeHelper.AddModifiedElement(originalIndex + 1, modifiedIndex);
          diagonalRelative = diagonal + 1 - diagonalForwardBase; //Setup for the next iteration
        } else {
          // Horizontal line (the element is a deletion)
          originalIndex = forwardPoints[diagonal - 1] + 1;
          modifiedIndex = originalIndex - diagonalRelative - diagonalForwardOffset;

          if (originalIndex < lastOriginalIndex) {
            changeHelper.MarkNextChange();
          }

          lastOriginalIndex = originalIndex - 1;
          changeHelper.AddOriginalElement(originalIndex, modifiedIndex + 1);
          diagonalRelative = diagonal - 1 - diagonalForwardBase; //Setup for the next iteration
        }

        if (historyIndex >= 0) {
          forwardPoints = this.m_forwardHistory[historyIndex];
          diagonalForwardBase = forwardPoints[0]; //We stored this in the first spot

          diagonalMin = 1;
          diagonalMax = forwardPoints.length - 1;
        }
      } while (--historyIndex >= -1); // Ironically, we get the forward changes as the reverse of the
      // order we added them since we technically added them backwards


      forwardChanges = changeHelper.getReverseChanges();

      if (quitEarlyArr[0]) {
        // TODO: Calculate a partial from the reverse diagonals.
        //       For now, just assume everything after the midOriginal/midModified point is a diff
        var originalStartPoint = midOriginalArr[0] + 1;
        var modifiedStartPoint = midModifiedArr[0] + 1;

        if (forwardChanges !== null && forwardChanges.length > 0) {
          var lastForwardChange = forwardChanges[forwardChanges.length - 1];
          originalStartPoint = Math.max(originalStartPoint, lastForwardChange.getOriginalEnd());
          modifiedStartPoint = Math.max(modifiedStartPoint, lastForwardChange.getModifiedEnd());
        }

        reverseChanges = [new diffChange_DiffChange(originalStartPoint, originalEnd - originalStartPoint + 1, modifiedStartPoint, modifiedEnd - modifiedStartPoint + 1)];
      } else {
        // Now walk backward through the reverse diagonals history
        changeHelper = new diff_DiffChangeHelper();
        diagonalMin = diagonalReverseStart;
        diagonalMax = diagonalReverseEnd;
        diagonalRelative = midOriginalArr[0] - midModifiedArr[0] - diagonalReverseOffset;
        lastOriginalIndex = 1073741824
        /* MAX_SAFE_SMALL_INTEGER */
        ;
        historyIndex = deltaIsEven ? this.m_reverseHistory.length - 1 : this.m_reverseHistory.length - 2;

        do {
          // Get the diagonal index from the relative diagonal number
          var _diagonal = diagonalRelative + diagonalReverseBase; // Figure out where we came from


          if (_diagonal === diagonalMin || _diagonal < diagonalMax && reversePoints[_diagonal - 1] >= reversePoints[_diagonal + 1]) {
            // Horizontal line (the element is a deletion))
            originalIndex = reversePoints[_diagonal + 1] - 1;
            modifiedIndex = originalIndex - diagonalRelative - diagonalReverseOffset;

            if (originalIndex > lastOriginalIndex) {
              changeHelper.MarkNextChange();
            }

            lastOriginalIndex = originalIndex + 1;
            changeHelper.AddOriginalElement(originalIndex + 1, modifiedIndex + 1);
            diagonalRelative = _diagonal + 1 - diagonalReverseBase; //Setup for the next iteration
          } else {
            // Vertical line (the element is an insertion)
            originalIndex = reversePoints[_diagonal - 1];
            modifiedIndex = originalIndex - diagonalRelative - diagonalReverseOffset;

            if (originalIndex > lastOriginalIndex) {
              changeHelper.MarkNextChange();
            }

            lastOriginalIndex = originalIndex;
            changeHelper.AddModifiedElement(originalIndex + 1, modifiedIndex + 1);
            diagonalRelative = _diagonal - 1 - diagonalReverseBase; //Setup for the next iteration
          }

          if (historyIndex >= 0) {
            reversePoints = this.m_reverseHistory[historyIndex];
            diagonalReverseBase = reversePoints[0]; //We stored this in the first spot

            diagonalMin = 1;
            diagonalMax = reversePoints.length - 1;
          }
        } while (--historyIndex >= -1); // There are cases where the reverse history will find diffs that
        // are correct, but not intuitive, so we need shift them.


        reverseChanges = changeHelper.getChanges();
      }

      return this.ConcatenateChanges(forwardChanges, reverseChanges);
    }
    /**
     * Given the range to compute the diff on, this method finds the point:
     * (midOriginal, midModified)
     * that exists in the middle of the LCS of the two sequences and
     * is the point at which the LCS problem may be broken down recursively.
     * This method will try to keep the LCS trace in memory. If the LCS recursion
     * point is calculated and the full trace is available in memory, then this method
     * will return the change list.
     * @param originalStart The start bound of the original sequence range
     * @param originalEnd The end bound of the original sequence range
     * @param modifiedStart The start bound of the modified sequence range
     * @param modifiedEnd The end bound of the modified sequence range
     * @param midOriginal The middle point of the original sequence range
     * @param midModified The middle point of the modified sequence range
     * @returns The diff changes, if available, otherwise null
     */

  }, {
    key: "ComputeRecursionPoint",
    value: function ComputeRecursionPoint(originalStart, originalEnd, modifiedStart, modifiedEnd, midOriginalArr, midModifiedArr, quitEarlyArr) {
      var originalIndex = 0,
          modifiedIndex = 0;
      var diagonalForwardStart = 0,
          diagonalForwardEnd = 0;
      var diagonalReverseStart = 0,
          diagonalReverseEnd = 0; // To traverse the edit graph and produce the proper LCS, our actual
      // start position is just outside the given boundary

      originalStart--;
      modifiedStart--; // We set these up to make the compiler happy, but they will
      // be replaced before we return with the actual recursion point

      midOriginalArr[0] = 0;
      midModifiedArr[0] = 0; // Clear out the history

      this.m_forwardHistory = [];
      this.m_reverseHistory = []; // Each cell in the two arrays corresponds to a diagonal in the edit graph.
      // The integer value in the cell represents the originalIndex of the furthest
      // reaching point found so far that ends in that diagonal.
      // The modifiedIndex can be computed mathematically from the originalIndex and the diagonal number.

      var maxDifferences = originalEnd - originalStart + (modifiedEnd - modifiedStart);
      var numDiagonals = maxDifferences + 1;
      var forwardPoints = new Int32Array(numDiagonals);
      var reversePoints = new Int32Array(numDiagonals); // diagonalForwardBase: Index into forwardPoints of the diagonal which passes through (originalStart, modifiedStart)
      // diagonalReverseBase: Index into reversePoints of the diagonal which passes through (originalEnd, modifiedEnd)

      var diagonalForwardBase = modifiedEnd - modifiedStart;
      var diagonalReverseBase = originalEnd - originalStart; // diagonalForwardOffset: Geometric offset which allows modifiedIndex to be computed from originalIndex and the
      //    diagonal number (relative to diagonalForwardBase)
      // diagonalReverseOffset: Geometric offset which allows modifiedIndex to be computed from originalIndex and the
      //    diagonal number (relative to diagonalReverseBase)

      var diagonalForwardOffset = originalStart - modifiedStart;
      var diagonalReverseOffset = originalEnd - modifiedEnd; // delta: The difference between the end diagonal and the start diagonal. This is used to relate diagonal numbers
      //   relative to the start diagonal with diagonal numbers relative to the end diagonal.
      // The Even/Oddn-ness of this delta is important for determining when we should check for overlap

      var delta = diagonalReverseBase - diagonalForwardBase;
      var deltaIsEven = delta % 2 === 0; // Here we set up the start and end points as the furthest points found so far
      // in both the forward and reverse directions, respectively

      forwardPoints[diagonalForwardBase] = originalStart;
      reversePoints[diagonalReverseBase] = originalEnd; // Remember if we quit early, and thus need to do a best-effort result instead of a real result.

      quitEarlyArr[0] = false; // A couple of points:
      // --With this method, we iterate on the number of differences between the two sequences.
      //   The more differences there actually are, the longer this will take.
      // --Also, as the number of differences increases, we have to search on diagonals further
      //   away from the reference diagonal (which is diagonalForwardBase for forward, diagonalReverseBase for reverse).
      // --We extend on even diagonals (relative to the reference diagonal) only when numDifferences
      //   is even and odd diagonals only when numDifferences is odd.

      for (var numDifferences = 1; numDifferences <= maxDifferences / 2 + 1; numDifferences++) {
        var furthestOriginalIndex = 0;
        var furthestModifiedIndex = 0; // Run the algorithm in the forward direction

        diagonalForwardStart = this.ClipDiagonalBound(diagonalForwardBase - numDifferences, numDifferences, diagonalForwardBase, numDiagonals);
        diagonalForwardEnd = this.ClipDiagonalBound(diagonalForwardBase + numDifferences, numDifferences, diagonalForwardBase, numDiagonals);

        for (var diagonal = diagonalForwardStart; diagonal <= diagonalForwardEnd; diagonal += 2) {
          // STEP 1: We extend the furthest reaching point in the present diagonal
          // by looking at the diagonals above and below and picking the one whose point
          // is further away from the start point (originalStart, modifiedStart)
          if (diagonal === diagonalForwardStart || diagonal < diagonalForwardEnd && forwardPoints[diagonal - 1] < forwardPoints[diagonal + 1]) {
            originalIndex = forwardPoints[diagonal + 1];
          } else {
            originalIndex = forwardPoints[diagonal - 1] + 1;
          }

          modifiedIndex = originalIndex - (diagonal - diagonalForwardBase) - diagonalForwardOffset; // Save the current originalIndex so we can test for false overlap in step 3

          var tempOriginalIndex = originalIndex; // STEP 2: We can continue to extend the furthest reaching point in the present diagonal
          // so long as the elements are equal.

          while (originalIndex < originalEnd && modifiedIndex < modifiedEnd && this.ElementsAreEqual(originalIndex + 1, modifiedIndex + 1)) {
            originalIndex++;
            modifiedIndex++;
          }

          forwardPoints[diagonal] = originalIndex;

          if (originalIndex + modifiedIndex > furthestOriginalIndex + furthestModifiedIndex) {
            furthestOriginalIndex = originalIndex;
            furthestModifiedIndex = modifiedIndex;
          } // STEP 3: If delta is odd (overlap first happens on forward when delta is odd)
          // and diagonal is in the range of reverse diagonals computed for numDifferences-1
          // (the previous iteration; we haven't computed reverse diagonals for numDifferences yet)
          // then check for overlap.


          if (!deltaIsEven && Math.abs(diagonal - diagonalReverseBase) <= numDifferences - 1) {
            if (originalIndex >= reversePoints[diagonal]) {
              midOriginalArr[0] = originalIndex;
              midModifiedArr[0] = modifiedIndex;

              if (tempOriginalIndex <= reversePoints[diagonal] && 1447
              /* MaxDifferencesHistory */
              > 0 && numDifferences <= 1447
              /* MaxDifferencesHistory */
              + 1) {
                // BINGO! We overlapped, and we have the full trace in memory!
                return this.WALKTRACE(diagonalForwardBase, diagonalForwardStart, diagonalForwardEnd, diagonalForwardOffset, diagonalReverseBase, diagonalReverseStart, diagonalReverseEnd, diagonalReverseOffset, forwardPoints, reversePoints, originalIndex, originalEnd, midOriginalArr, modifiedIndex, modifiedEnd, midModifiedArr, deltaIsEven, quitEarlyArr);
              } else {
                // Either false overlap, or we didn't have enough memory for the full trace
                // Just return the recursion point
                return null;
              }
            }
          }
        } // Check to see if we should be quitting early, before moving on to the next iteration.


        var matchLengthOfLongest = (furthestOriginalIndex - originalStart + (furthestModifiedIndex - modifiedStart) - numDifferences) / 2;

        if (this.ContinueProcessingPredicate !== null && !this.ContinueProcessingPredicate(furthestOriginalIndex, matchLengthOfLongest)) {
          // We can't finish, so skip ahead to generating a result from what we have.
          quitEarlyArr[0] = true; // Use the furthest distance we got in the forward direction.

          midOriginalArr[0] = furthestOriginalIndex;
          midModifiedArr[0] = furthestModifiedIndex;

          if (matchLengthOfLongest > 0 && 1447
          /* MaxDifferencesHistory */
          > 0 && numDifferences <= 1447
          /* MaxDifferencesHistory */
          + 1) {
            // Enough of the history is in memory to walk it backwards
            return this.WALKTRACE(diagonalForwardBase, diagonalForwardStart, diagonalForwardEnd, diagonalForwardOffset, diagonalReverseBase, diagonalReverseStart, diagonalReverseEnd, diagonalReverseOffset, forwardPoints, reversePoints, originalIndex, originalEnd, midOriginalArr, modifiedIndex, modifiedEnd, midModifiedArr, deltaIsEven, quitEarlyArr);
          } else {
            // We didn't actually remember enough of the history.
            //Since we are quiting the diff early, we need to shift back the originalStart and modified start
            //back into the boundary limits since we decremented their value above beyond the boundary limit.
            originalStart++;
            modifiedStart++;
            return [new diffChange_DiffChange(originalStart, originalEnd - originalStart + 1, modifiedStart, modifiedEnd - modifiedStart + 1)];
          }
        } // Run the algorithm in the reverse direction


        diagonalReverseStart = this.ClipDiagonalBound(diagonalReverseBase - numDifferences, numDifferences, diagonalReverseBase, numDiagonals);
        diagonalReverseEnd = this.ClipDiagonalBound(diagonalReverseBase + numDifferences, numDifferences, diagonalReverseBase, numDiagonals);

        for (var _diagonal2 = diagonalReverseStart; _diagonal2 <= diagonalReverseEnd; _diagonal2 += 2) {
          // STEP 1: We extend the furthest reaching point in the present diagonal
          // by looking at the diagonals above and below and picking the one whose point
          // is further away from the start point (originalEnd, modifiedEnd)
          if (_diagonal2 === diagonalReverseStart || _diagonal2 < diagonalReverseEnd && reversePoints[_diagonal2 - 1] >= reversePoints[_diagonal2 + 1]) {
            originalIndex = reversePoints[_diagonal2 + 1] - 1;
          } else {
            originalIndex = reversePoints[_diagonal2 - 1];
          }

          modifiedIndex = originalIndex - (_diagonal2 - diagonalReverseBase) - diagonalReverseOffset; // Save the current originalIndex so we can test for false overlap

          var _tempOriginalIndex = originalIndex; // STEP 2: We can continue to extend the furthest reaching point in the present diagonal
          // as long as the elements are equal.

          while (originalIndex > originalStart && modifiedIndex > modifiedStart && this.ElementsAreEqual(originalIndex, modifiedIndex)) {
            originalIndex--;
            modifiedIndex--;
          }

          reversePoints[_diagonal2] = originalIndex; // STEP 4: If delta is even (overlap first happens on reverse when delta is even)
          // and diagonal is in the range of forward diagonals computed for numDifferences
          // then check for overlap.

          if (deltaIsEven && Math.abs(_diagonal2 - diagonalForwardBase) <= numDifferences) {
            if (originalIndex <= forwardPoints[_diagonal2]) {
              midOriginalArr[0] = originalIndex;
              midModifiedArr[0] = modifiedIndex;

              if (_tempOriginalIndex >= forwardPoints[_diagonal2] && 1447
              /* MaxDifferencesHistory */
              > 0 && numDifferences <= 1447
              /* MaxDifferencesHistory */
              + 1) {
                // BINGO! We overlapped, and we have the full trace in memory!
                return this.WALKTRACE(diagonalForwardBase, diagonalForwardStart, diagonalForwardEnd, diagonalForwardOffset, diagonalReverseBase, diagonalReverseStart, diagonalReverseEnd, diagonalReverseOffset, forwardPoints, reversePoints, originalIndex, originalEnd, midOriginalArr, modifiedIndex, modifiedEnd, midModifiedArr, deltaIsEven, quitEarlyArr);
              } else {
                // Either false overlap, or we didn't have enough memory for the full trace
                // Just return the recursion point
                return null;
              }
            }
          }
        } // Save current vectors to history before the next iteration


        if (numDifferences <= 1447
        /* MaxDifferencesHistory */
        ) {
            // We are allocating space for one extra int, which we fill with
            // the index of the diagonal base index
            var temp = new Int32Array(diagonalForwardEnd - diagonalForwardStart + 2);
            temp[0] = diagonalForwardBase - diagonalForwardStart + 1;
            diff_MyArray.Copy2(forwardPoints, diagonalForwardStart, temp, 1, diagonalForwardEnd - diagonalForwardStart + 1);
            this.m_forwardHistory.push(temp);
            temp = new Int32Array(diagonalReverseEnd - diagonalReverseStart + 2);
            temp[0] = diagonalReverseBase - diagonalReverseStart + 1;
            diff_MyArray.Copy2(reversePoints, diagonalReverseStart, temp, 1, diagonalReverseEnd - diagonalReverseStart + 1);
            this.m_reverseHistory.push(temp);
          }
      } // If we got here, then we have the full trace in history. We just have to convert it to a change list
      // NOTE: This part is a bit messy


      return this.WALKTRACE(diagonalForwardBase, diagonalForwardStart, diagonalForwardEnd, diagonalForwardOffset, diagonalReverseBase, diagonalReverseStart, diagonalReverseEnd, diagonalReverseOffset, forwardPoints, reversePoints, originalIndex, originalEnd, midOriginalArr, modifiedIndex, modifiedEnd, midModifiedArr, deltaIsEven, quitEarlyArr);
    }
    /**
     * Shifts the given changes to provide a more intuitive diff.
     * While the first element in a diff matches the first element after the diff,
     * we shift the diff down.
     *
     * @param changes The list of changes to shift
     * @returns The shifted changes
     */

  }, {
    key: "PrettifyChanges",
    value: function PrettifyChanges(changes) {
      // Shift all the changes down first
      for (var i = 0; i < changes.length; i++) {
        var change = changes[i];
        var originalStop = i < changes.length - 1 ? changes[i + 1].originalStart : this._originalElementsOrHash.length;
        var modifiedStop = i < changes.length - 1 ? changes[i + 1].modifiedStart : this._modifiedElementsOrHash.length;
        var checkOriginal = change.originalLength > 0;
        var checkModified = change.modifiedLength > 0;

        while (change.originalStart + change.originalLength < originalStop && change.modifiedStart + change.modifiedLength < modifiedStop && (!checkOriginal || this.OriginalElementsAreEqual(change.originalStart, change.originalStart + change.originalLength)) && (!checkModified || this.ModifiedElementsAreEqual(change.modifiedStart, change.modifiedStart + change.modifiedLength))) {
          change.originalStart++;
          change.modifiedStart++;
        }

        var mergedChangeArr = [null];

        if (i < changes.length - 1 && this.ChangesOverlap(changes[i], changes[i + 1], mergedChangeArr)) {
          changes[i] = mergedChangeArr[0];
          changes.splice(i + 1, 1);
          i--;
          continue;
        }
      } // Shift changes back up until we hit empty or whitespace-only lines


      for (var _i = changes.length - 1; _i >= 0; _i--) {
        var _change = changes[_i];
        var _originalStop = 0;
        var _modifiedStop = 0;

        if (_i > 0) {
          var prevChange = changes[_i - 1];

          if (prevChange.originalLength > 0) {
            _originalStop = prevChange.originalStart + prevChange.originalLength;
          }

          if (prevChange.modifiedLength > 0) {
            _modifiedStop = prevChange.modifiedStart + prevChange.modifiedLength;
          }
        }

        var _checkOriginal = _change.originalLength > 0;

        var _checkModified = _change.modifiedLength > 0;

        var bestDelta = 0;

        var bestScore = this._boundaryScore(_change.originalStart, _change.originalLength, _change.modifiedStart, _change.modifiedLength);

        for (var delta = 1;; delta++) {
          var originalStart = _change.originalStart - delta;
          var modifiedStart = _change.modifiedStart - delta;

          if (originalStart < _originalStop || modifiedStart < _modifiedStop) {
            break;
          }

          if (_checkOriginal && !this.OriginalElementsAreEqual(originalStart, originalStart + _change.originalLength)) {
            break;
          }

          if (_checkModified && !this.ModifiedElementsAreEqual(modifiedStart, modifiedStart + _change.modifiedLength)) {
            break;
          }

          var score = this._boundaryScore(originalStart, _change.originalLength, modifiedStart, _change.modifiedLength);

          if (score > bestScore) {
            bestScore = score;
            bestDelta = delta;
          }
        }

        _change.originalStart -= bestDelta;
        _change.modifiedStart -= bestDelta;
      }

      return changes;
    }
  }, {
    key: "_OriginalIsBoundary",
    value: function _OriginalIsBoundary(index) {
      if (index <= 0 || index >= this._originalElementsOrHash.length - 1) {
        return true;
      }

      return this._hasStrings && /^\s*$/.test(this._originalStringElements[index]);
    }
  }, {
    key: "_OriginalRegionIsBoundary",
    value: function _OriginalRegionIsBoundary(originalStart, originalLength) {
      if (this._OriginalIsBoundary(originalStart) || this._OriginalIsBoundary(originalStart - 1)) {
        return true;
      }

      if (originalLength > 0) {
        var originalEnd = originalStart + originalLength;

        if (this._OriginalIsBoundary(originalEnd - 1) || this._OriginalIsBoundary(originalEnd)) {
          return true;
        }
      }

      return false;
    }
  }, {
    key: "_ModifiedIsBoundary",
    value: function _ModifiedIsBoundary(index) {
      if (index <= 0 || index >= this._modifiedElementsOrHash.length - 1) {
        return true;
      }

      return this._hasStrings && /^\s*$/.test(this._modifiedStringElements[index]);
    }
  }, {
    key: "_ModifiedRegionIsBoundary",
    value: function _ModifiedRegionIsBoundary(modifiedStart, modifiedLength) {
      if (this._ModifiedIsBoundary(modifiedStart) || this._ModifiedIsBoundary(modifiedStart - 1)) {
        return true;
      }

      if (modifiedLength > 0) {
        var modifiedEnd = modifiedStart + modifiedLength;

        if (this._ModifiedIsBoundary(modifiedEnd - 1) || this._ModifiedIsBoundary(modifiedEnd)) {
          return true;
        }
      }

      return false;
    }
  }, {
    key: "_boundaryScore",
    value: function _boundaryScore(originalStart, originalLength, modifiedStart, modifiedLength) {
      var originalScore = this._OriginalRegionIsBoundary(originalStart, originalLength) ? 1 : 0;
      var modifiedScore = this._ModifiedRegionIsBoundary(modifiedStart, modifiedLength) ? 1 : 0;
      return originalScore + modifiedScore;
    }
    /**
     * Concatenates the two input DiffChange lists and returns the resulting
     * list.
     * @param The left changes
     * @param The right changes
     * @returns The concatenated list
     */

  }, {
    key: "ConcatenateChanges",
    value: function ConcatenateChanges(left, right) {
      var mergedChangeArr = [];

      if (left.length === 0 || right.length === 0) {
        return right.length > 0 ? right : left;
      } else if (this.ChangesOverlap(left[left.length - 1], right[0], mergedChangeArr)) {
        // Since we break the problem down recursively, it is possible that we
        // might recurse in the middle of a change thereby splitting it into
        // two changes. Here in the combining stage, we detect and fuse those
        // changes back together
        var result = new Array(left.length + right.length - 1);
        diff_MyArray.Copy(left, 0, result, 0, left.length - 1);
        result[left.length - 1] = mergedChangeArr[0];
        diff_MyArray.Copy(right, 1, result, left.length, right.length - 1);
        return result;
      } else {
        var _result = new Array(left.length + right.length);

        diff_MyArray.Copy(left, 0, _result, 0, left.length);
        diff_MyArray.Copy(right, 0, _result, left.length, right.length);
        return _result;
      }
    }
    /**
     * Returns true if the two changes overlap and can be merged into a single
     * change
     * @param left The left change
     * @param right The right change
     * @param mergedChange The merged change if the two overlap, null otherwise
     * @returns True if the two changes overlap
     */

  }, {
    key: "ChangesOverlap",
    value: function ChangesOverlap(left, right, mergedChangeArr) {
      diff_Debug.Assert(left.originalStart <= right.originalStart, 'Left change is not less than or equal to right change');
      diff_Debug.Assert(left.modifiedStart <= right.modifiedStart, 'Left change is not less than or equal to right change');

      if (left.originalStart + left.originalLength >= right.originalStart || left.modifiedStart + left.modifiedLength >= right.modifiedStart) {
        var originalStart = left.originalStart;
        var originalLength = left.originalLength;
        var modifiedStart = left.modifiedStart;
        var modifiedLength = left.modifiedLength;

        if (left.originalStart + left.originalLength >= right.originalStart) {
          originalLength = right.originalStart + right.originalLength - left.originalStart;
        }

        if (left.modifiedStart + left.modifiedLength >= right.modifiedStart) {
          modifiedLength = right.modifiedStart + right.modifiedLength - left.modifiedStart;
        }

        mergedChangeArr[0] = new diffChange_DiffChange(originalStart, originalLength, modifiedStart, modifiedLength);
        return true;
      } else {
        mergedChangeArr[0] = null;
        return false;
      }
    }
    /**
     * Helper method used to clip a diagonal index to the range of valid
     * diagonals. This also decides whether or not the diagonal index,
     * if it exceeds the boundary, should be clipped to the boundary or clipped
     * one inside the boundary depending on the Even/Odd status of the boundary
     * and numDifferences.
     * @param diagonal The index of the diagonal to clip.
     * @param numDifferences The current number of differences being iterated upon.
     * @param diagonalBaseIndex The base reference diagonal.
     * @param numDiagonals The total number of diagonals.
     * @returns The clipped diagonal index.
     */

  }, {
    key: "ClipDiagonalBound",
    value: function ClipDiagonalBound(diagonal, numDifferences, diagonalBaseIndex, numDiagonals) {
      if (diagonal >= 0 && diagonal < numDiagonals) {
        // Nothing to clip, its in range
        return diagonal;
      } // diagonalsBelow: The number of diagonals below the reference diagonal
      // diagonalsAbove: The number of diagonals above the reference diagonal


      var diagonalsBelow = diagonalBaseIndex;
      var diagonalsAbove = numDiagonals - diagonalBaseIndex - 1;
      var diffEven = numDifferences % 2 === 0;

      if (diagonal < 0) {
        var lowerBoundEven = diagonalsBelow % 2 === 0;
        return diffEven === lowerBoundEven ? 0 : 1;
      } else {
        var upperBoundEven = diagonalsAbove % 2 === 0;
        return diffEven === upperBoundEven ? numDiagonals - 1 : numDiagonals - 2;
      }
    }
  }], [{
    key: "_isStringArray",
    value: function _isStringArray(arr) {
      return arr.length > 0 && typeof arr[0] === 'string';
    }
  }, {
    key: "_getElements",
    value: function _getElements(sequence) {
      var elements = sequence.getElements();

      if (LcsDiff._isStringArray(elements)) {
        var hashes = new Int32Array(elements.length);

        for (var i = 0, len = elements.length; i < len; i++) {
          hashes[i] = stringHash(elements[i], 0);
        }

        return [elements, hashes, true];
      }

      if (elements instanceof Int32Array) {
        return [[], elements, false];
      }

      return [[], new Int32Array(elements), false];
    }
  }]);

  return LcsDiff;
}();
// EXTERNAL MODULE: ./node_modules/monaco-editor/esm/vs/base/common/process.js
var process = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/monaco-editor/esm/vs/base/common/path.js






/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
// NOTE: VSCode's copy of nodejs path library to be usable in common (non-node) namespace
// Copied from: https://github.com/nodejs/node/blob/v12.8.1/lib/path.js

/**
 * Copyright Joyent, Inc. and other Node contributors.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to permit
 * persons to whom the Software is furnished to do so, subject to the
 * following conditions:
 *
 * The above copyright notice and this permission notice shall be included
 * in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
 * NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 * DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
 * OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
 * USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

var CHAR_UPPERCASE_A = 65;
/* A */

var CHAR_LOWERCASE_A = 97;
/* a */

var CHAR_UPPERCASE_Z = 90;
/* Z */

var CHAR_LOWERCASE_Z = 122;
/* z */

var CHAR_DOT = 46;
/* . */

var CHAR_FORWARD_SLASH = 47;
/* / */

var CHAR_BACKWARD_SLASH = 92;
/* \ */

var CHAR_COLON = 58;
/* : */

var CHAR_QUESTION_MARK = 63;
/* ? */

var path_ErrorInvalidArgType = /*#__PURE__*/function (_Error) {
  _inherits(ErrorInvalidArgType, _Error);

  function ErrorInvalidArgType(name, expected, actual) {
    var _this;

    _classCallCheck(this, ErrorInvalidArgType);

    // determiner: 'must be' or 'must not be'
    var determiner;

    if (typeof expected === 'string' && expected.indexOf('not ') === 0) {
      determiner = 'must not be';
      expected = expected.replace(/^not /, '');
    } else {
      determiner = 'must be';
    }

    var type = name.indexOf('.') !== -1 ? 'property' : 'argument';
    var msg = "The \"".concat(name, "\" ").concat(type, " ").concat(determiner, " of type ").concat(expected);
    msg += ". Received type ".concat(typeof actual);
    _this = _possibleConstructorReturn(this, _getPrototypeOf(ErrorInvalidArgType).call(this, msg));
    _this.code = 'ERR_INVALID_ARG_TYPE';
    return _this;
  }

  return ErrorInvalidArgType;
}(wrapNativeSuper_wrapNativeSuper(Error));

function validateString(value, name) {
  if (typeof value !== 'string') {
    throw new path_ErrorInvalidArgType(name, 'string', value);
  }
}

function isPathSeparator(code) {
  return code === CHAR_FORWARD_SLASH || code === CHAR_BACKWARD_SLASH;
}

function isPosixPathSeparator(code) {
  return code === CHAR_FORWARD_SLASH;
}

function isWindowsDeviceRoot(code) {
  return code >= CHAR_UPPERCASE_A && code <= CHAR_UPPERCASE_Z || code >= CHAR_LOWERCASE_A && code <= CHAR_LOWERCASE_Z;
} // Resolves . and .. elements in a path with directory names


function normalizeString(path, allowAboveRoot, separator, isPathSeparator) {
  var res = '';
  var lastSegmentLength = 0;
  var lastSlash = -1;
  var dots = 0;
  var code = 0;

  for (var i = 0; i <= path.length; ++i) {
    if (i < path.length) {
      code = path.charCodeAt(i);
    } else if (isPathSeparator(code)) {
      break;
    } else {
      code = CHAR_FORWARD_SLASH;
    }

    if (isPathSeparator(code)) {
      if (lastSlash === i - 1 || dots === 1) {// NOOP
      } else if (dots === 2) {
        if (res.length < 2 || lastSegmentLength !== 2 || res.charCodeAt(res.length - 1) !== CHAR_DOT || res.charCodeAt(res.length - 2) !== CHAR_DOT) {
          if (res.length > 2) {
            var lastSlashIndex = res.lastIndexOf(separator);

            if (lastSlashIndex === -1) {
              res = '';
              lastSegmentLength = 0;
            } else {
              res = res.slice(0, lastSlashIndex);
              lastSegmentLength = res.length - 1 - res.lastIndexOf(separator);
            }

            lastSlash = i;
            dots = 0;
            continue;
          } else if (res.length !== 0) {
            res = '';
            lastSegmentLength = 0;
            lastSlash = i;
            dots = 0;
            continue;
          }
        }

        if (allowAboveRoot) {
          res += res.length > 0 ? "".concat(separator, "..") : '..';
          lastSegmentLength = 2;
        }
      } else {
        if (res.length > 0) {
          res += "".concat(separator).concat(path.slice(lastSlash + 1, i));
        } else {
          res = path.slice(lastSlash + 1, i);
        }

        lastSegmentLength = i - lastSlash - 1;
      }

      lastSlash = i;
      dots = 0;
    } else if (code === CHAR_DOT && dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }

  return res;
}

function _format(sep, pathObject) {
  if (pathObject === null || typeof pathObject !== 'object') {
    throw new path_ErrorInvalidArgType('pathObject', 'Object', pathObject);
  }

  var dir = pathObject.dir || pathObject.root;
  var base = pathObject.base || "".concat(pathObject.name || '').concat(pathObject.ext || '');

  if (!dir) {
    return base;
  }

  return dir === pathObject.root ? "".concat(dir).concat(base) : "".concat(dir).concat(sep).concat(base);
}

var win32 = {
  // path.resolve([from ...], to)
  resolve: function resolve() {
    var resolvedDevice = '';
    var resolvedTail = '';
    var resolvedAbsolute = false;

    for (var i = arguments.length - 1; i >= -1; i--) {
      var path = void 0;

      if (i >= 0) {
        path = i < 0 || arguments.length <= i ? undefined : arguments[i];
        validateString(path, 'path'); // Skip empty entries

        if (path.length === 0) {
          continue;
        }
      } else if (resolvedDevice.length === 0) {
        path = process["a" /* cwd */]();
      } else {
        // Windows has the concept of drive-specific current working
        // directories. If we've resolved a drive letter but not yet an
        // absolute path, get cwd for that drive, or the process cwd if
        // the drive cwd is not available. We're sure the device is not
        // a UNC path at this points, because UNC paths are always absolute.
        path = process["b" /* env */]["=".concat(resolvedDevice)] || process["a" /* cwd */](); // Verify that a cwd was found and that it actually points
        // to our drive. If not, default to the drive's root.

        if (path === undefined || path.slice(0, 2).toLowerCase() !== resolvedDevice.toLowerCase() && path.charCodeAt(2) === CHAR_BACKWARD_SLASH) {
          path = "".concat(resolvedDevice, "\\");
        }
      }

      var len = path.length;
      var rootEnd = 0;
      var device = '';
      var isAbsolute = false;
      var code = path.charCodeAt(0); // Try to match a root

      if (len === 1) {
        if (isPathSeparator(code)) {
          // `path` contains just a path separator
          rootEnd = 1;
          isAbsolute = true;
        }
      } else if (isPathSeparator(code)) {
        // Possible UNC root
        // If we started with a separator, we know we at least have an
        // absolute path of some kind (UNC or otherwise)
        isAbsolute = true;

        if (isPathSeparator(path.charCodeAt(1))) {
          // Matched double path separator at beginning
          var j = 2;
          var last = j; // Match 1 or more non-path separators

          while (j < len && !isPathSeparator(path.charCodeAt(j))) {
            j++;
          }

          if (j < len && j !== last) {
            var firstPart = path.slice(last, j); // Matched!

            last = j; // Match 1 or more path separators

            while (j < len && isPathSeparator(path.charCodeAt(j))) {
              j++;
            }

            if (j < len && j !== last) {
              // Matched!
              last = j; // Match 1 or more non-path separators

              while (j < len && !isPathSeparator(path.charCodeAt(j))) {
                j++;
              }

              if (j === len || j !== last) {
                // We matched a UNC root
                device = "\\\\".concat(firstPart, "\\").concat(path.slice(last, j));
                rootEnd = j;
              }
            }
          }
        } else {
          rootEnd = 1;
        }
      } else if (isWindowsDeviceRoot(code) && path.charCodeAt(1) === CHAR_COLON) {
        // Possible device root
        device = path.slice(0, 2);
        rootEnd = 2;

        if (len > 2 && isPathSeparator(path.charCodeAt(2))) {
          // Treat separator following drive name as an absolute path
          // indicator
          isAbsolute = true;
          rootEnd = 3;
        }
      }

      if (device.length > 0) {
        if (resolvedDevice.length > 0) {
          if (device.toLowerCase() !== resolvedDevice.toLowerCase()) {
            // This path points to another device so it is not applicable
            continue;
          }
        } else {
          resolvedDevice = device;
        }
      }

      if (resolvedAbsolute) {
        if (resolvedDevice.length > 0) {
          break;
        }
      } else {
        resolvedTail = "".concat(path.slice(rootEnd), "\\").concat(resolvedTail);
        resolvedAbsolute = isAbsolute;

        if (isAbsolute && resolvedDevice.length > 0) {
          break;
        }
      }
    } // At this point the path should be resolved to a full absolute path,
    // but handle relative paths to be safe (might happen when process.cwd()
    // fails)
    // Normalize the tail path


    resolvedTail = normalizeString(resolvedTail, !resolvedAbsolute, '\\', isPathSeparator);
    return resolvedAbsolute ? "".concat(resolvedDevice, "\\").concat(resolvedTail) : "".concat(resolvedDevice).concat(resolvedTail) || '.';
  },
  normalize: function normalize(path) {
    validateString(path, 'path');
    var len = path.length;

    if (len === 0) {
      return '.';
    }

    var rootEnd = 0;
    var device;
    var isAbsolute = false;
    var code = path.charCodeAt(0); // Try to match a root

    if (len === 1) {
      // `path` contains just a single char, exit early to avoid
      // unnecessary work
      return isPosixPathSeparator(code) ? '\\' : path;
    }

    if (isPathSeparator(code)) {
      // Possible UNC root
      // If we started with a separator, we know we at least have an absolute
      // path of some kind (UNC or otherwise)
      isAbsolute = true;

      if (isPathSeparator(path.charCodeAt(1))) {
        // Matched double path separator at beginning
        var j = 2;
        var last = j; // Match 1 or more non-path separators

        while (j < len && !isPathSeparator(path.charCodeAt(j))) {
          j++;
        }

        if (j < len && j !== last) {
          var firstPart = path.slice(last, j); // Matched!

          last = j; // Match 1 or more path separators

          while (j < len && isPathSeparator(path.charCodeAt(j))) {
            j++;
          }

          if (j < len && j !== last) {
            // Matched!
            last = j; // Match 1 or more non-path separators

            while (j < len && !isPathSeparator(path.charCodeAt(j))) {
              j++;
            }

            if (j === len) {
              // We matched a UNC root only
              // Return the normalized version of the UNC root since there
              // is nothing left to process
              return "\\\\".concat(firstPart, "\\").concat(path.slice(last), "\\");
            }

            if (j !== last) {
              // We matched a UNC root with leftovers
              device = "\\\\".concat(firstPart, "\\").concat(path.slice(last, j));
              rootEnd = j;
            }
          }
        }
      } else {
        rootEnd = 1;
      }
    } else if (isWindowsDeviceRoot(code) && path.charCodeAt(1) === CHAR_COLON) {
      // Possible device root
      device = path.slice(0, 2);
      rootEnd = 2;

      if (len > 2 && isPathSeparator(path.charCodeAt(2))) {
        // Treat separator following drive name as an absolute path
        // indicator
        isAbsolute = true;
        rootEnd = 3;
      }
    }

    var tail = rootEnd < len ? normalizeString(path.slice(rootEnd), !isAbsolute, '\\', isPathSeparator) : '';

    if (tail.length === 0 && !isAbsolute) {
      tail = '.';
    }

    if (tail.length > 0 && isPathSeparator(path.charCodeAt(len - 1))) {
      tail += '\\';
    }

    if (device === undefined) {
      return isAbsolute ? "\\".concat(tail) : tail;
    }

    return isAbsolute ? "".concat(device, "\\").concat(tail) : "".concat(device).concat(tail);
  },
  isAbsolute: function isAbsolute(path) {
    validateString(path, 'path');
    var len = path.length;

    if (len === 0) {
      return false;
    }

    var code = path.charCodeAt(0);
    return isPathSeparator(code) || // Possible device root
    len > 2 && isWindowsDeviceRoot(code) && path.charCodeAt(1) === CHAR_COLON && isPathSeparator(path.charCodeAt(2));
  },
  join: function join() {
    if (arguments.length === 0) {
      return '.';
    }

    var joined;
    var firstPart;

    for (var i = 0; i < arguments.length; ++i) {
      var arg = i < 0 || arguments.length <= i ? undefined : arguments[i];
      validateString(arg, 'path');

      if (arg.length > 0) {
        if (joined === undefined) {
          joined = firstPart = arg;
        } else {
          joined += "\\".concat(arg);
        }
      }
    }

    if (joined === undefined) {
      return '.';
    } // Make sure that the joined path doesn't start with two slashes, because
    // normalize() will mistake it for an UNC path then.
    //
    // This step is skipped when it is very clear that the user actually
    // intended to point at an UNC path. This is assumed when the first
    // non-empty string arguments starts with exactly two slashes followed by
    // at least one more non-slash character.
    //
    // Note that for normalize() to treat a path as an UNC path it needs to
    // have at least 2 components, so we don't filter for that here.
    // This means that the user can use join to construct UNC paths from
    // a server name and a share name; for example:
    //   path.join('//server', 'share') -> '\\\\server\\share\\')


    var needsReplace = true;
    var slashCount = 0;

    if (typeof firstPart === 'string' && isPathSeparator(firstPart.charCodeAt(0))) {
      ++slashCount;
      var firstLen = firstPart.length;

      if (firstLen > 1 && isPathSeparator(firstPart.charCodeAt(1))) {
        ++slashCount;

        if (firstLen > 2) {
          if (isPathSeparator(firstPart.charCodeAt(2))) {
            ++slashCount;
          } else {
            // We matched a UNC path in the first part
            needsReplace = false;
          }
        }
      }
    }

    if (needsReplace) {
      // Find any more consecutive slashes we need to replace
      while (slashCount < joined.length && isPathSeparator(joined.charCodeAt(slashCount))) {
        slashCount++;
      } // Replace the slashes if needed


      if (slashCount >= 2) {
        joined = "\\".concat(joined.slice(slashCount));
      }
    }

    return win32.normalize(joined);
  },
  // It will solve the relative path from `from` to `to`, for instance:
  //  from = 'C:\\orandea\\test\\aaa'
  //  to = 'C:\\orandea\\impl\\bbb'
  // The output of the function should be: '..\\..\\impl\\bbb'
  relative: function relative(from, to) {
    validateString(from, 'from');
    validateString(to, 'to');

    if (from === to) {
      return '';
    }

    var fromOrig = win32.resolve(from);
    var toOrig = win32.resolve(to);

    if (fromOrig === toOrig) {
      return '';
    }

    from = fromOrig.toLowerCase();
    to = toOrig.toLowerCase();

    if (from === to) {
      return '';
    } // Trim any leading backslashes


    var fromStart = 0;

    while (fromStart < from.length && from.charCodeAt(fromStart) === CHAR_BACKWARD_SLASH) {
      fromStart++;
    } // Trim trailing backslashes (applicable to UNC paths only)


    var fromEnd = from.length;

    while (fromEnd - 1 > fromStart && from.charCodeAt(fromEnd - 1) === CHAR_BACKWARD_SLASH) {
      fromEnd--;
    }

    var fromLen = fromEnd - fromStart; // Trim any leading backslashes

    var toStart = 0;

    while (toStart < to.length && to.charCodeAt(toStart) === CHAR_BACKWARD_SLASH) {
      toStart++;
    } // Trim trailing backslashes (applicable to UNC paths only)


    var toEnd = to.length;

    while (toEnd - 1 > toStart && to.charCodeAt(toEnd - 1) === CHAR_BACKWARD_SLASH) {
      toEnd--;
    }

    var toLen = toEnd - toStart; // Compare paths to find the longest common path from root

    var length = fromLen < toLen ? fromLen : toLen;
    var lastCommonSep = -1;
    var i = 0;

    for (; i < length; i++) {
      var fromCode = from.charCodeAt(fromStart + i);

      if (fromCode !== to.charCodeAt(toStart + i)) {
        break;
      } else if (fromCode === CHAR_BACKWARD_SLASH) {
        lastCommonSep = i;
      }
    } // We found a mismatch before the first common path separator was seen, so
    // return the original `to`.


    if (i !== length) {
      if (lastCommonSep === -1) {
        return toOrig;
      }
    } else {
      if (toLen > length) {
        if (to.charCodeAt(toStart + i) === CHAR_BACKWARD_SLASH) {
          // We get here if `from` is the exact base path for `to`.
          // For example: from='C:\\foo\\bar'; to='C:\\foo\\bar\\baz'
          return toOrig.slice(toStart + i + 1);
        }

        if (i === 2) {
          // We get here if `from` is the device root.
          // For example: from='C:\\'; to='C:\\foo'
          return toOrig.slice(toStart + i);
        }
      }

      if (fromLen > length) {
        if (from.charCodeAt(fromStart + i) === CHAR_BACKWARD_SLASH) {
          // We get here if `to` is the exact base path for `from`.
          // For example: from='C:\\foo\\bar'; to='C:\\foo'
          lastCommonSep = i;
        } else if (i === 2) {
          // We get here if `to` is the device root.
          // For example: from='C:\\foo\\bar'; to='C:\\'
          lastCommonSep = 3;
        }
      }

      if (lastCommonSep === -1) {
        lastCommonSep = 0;
      }
    }

    var out = ''; // Generate the relative path based on the path difference between `to` and
    // `from`

    for (i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i) {
      if (i === fromEnd || from.charCodeAt(i) === CHAR_BACKWARD_SLASH) {
        out += out.length === 0 ? '..' : '\\..';
      }
    }

    toStart += lastCommonSep; // Lastly, append the rest of the destination (`to`) path that comes after
    // the common path parts

    if (out.length > 0) {
      return "".concat(out).concat(toOrig.slice(toStart, toEnd));
    }

    if (toOrig.charCodeAt(toStart) === CHAR_BACKWARD_SLASH) {
      ++toStart;
    }

    return toOrig.slice(toStart, toEnd);
  },
  toNamespacedPath: function toNamespacedPath(path) {
    // Note: this will *probably* throw somewhere.
    if (typeof path !== 'string') {
      return path;
    }

    if (path.length === 0) {
      return '';
    }

    var resolvedPath = win32.resolve(path);

    if (resolvedPath.length <= 2) {
      return path;
    }

    if (resolvedPath.charCodeAt(0) === CHAR_BACKWARD_SLASH) {
      // Possible UNC root
      if (resolvedPath.charCodeAt(1) === CHAR_BACKWARD_SLASH) {
        var code = resolvedPath.charCodeAt(2);

        if (code !== CHAR_QUESTION_MARK && code !== CHAR_DOT) {
          // Matched non-long UNC root, convert the path to a long UNC path
          return "\\\\?\\UNC\\".concat(resolvedPath.slice(2));
        }
      }
    } else if (isWindowsDeviceRoot(resolvedPath.charCodeAt(0)) && resolvedPath.charCodeAt(1) === CHAR_COLON && resolvedPath.charCodeAt(2) === CHAR_BACKWARD_SLASH) {
      // Matched device root, convert the path to a long UNC path
      return "\\\\?\\".concat(resolvedPath);
    }

    return path;
  },
  dirname: function dirname(path) {
    validateString(path, 'path');
    var len = path.length;

    if (len === 0) {
      return '.';
    }

    var rootEnd = -1;
    var offset = 0;
    var code = path.charCodeAt(0);

    if (len === 1) {
      // `path` contains just a path separator, exit early to avoid
      // unnecessary work or a dot.
      return isPathSeparator(code) ? path : '.';
    } // Try to match a root


    if (isPathSeparator(code)) {
      // Possible UNC root
      rootEnd = offset = 1;

      if (isPathSeparator(path.charCodeAt(1))) {
        // Matched double path separator at beginning
        var j = 2;
        var last = j; // Match 1 or more non-path separators

        while (j < len && !isPathSeparator(path.charCodeAt(j))) {
          j++;
        }

        if (j < len && j !== last) {
          // Matched!
          last = j; // Match 1 or more path separators

          while (j < len && isPathSeparator(path.charCodeAt(j))) {
            j++;
          }

          if (j < len && j !== last) {
            // Matched!
            last = j; // Match 1 or more non-path separators

            while (j < len && !isPathSeparator(path.charCodeAt(j))) {
              j++;
            }

            if (j === len) {
              // We matched a UNC root only
              return path;
            }

            if (j !== last) {
              // We matched a UNC root with leftovers
              // Offset by 1 to include the separator after the UNC root to
              // treat it as a "normal root" on top of a (UNC) root
              rootEnd = offset = j + 1;
            }
          }
        }
      } // Possible device root

    } else if (isWindowsDeviceRoot(code) && path.charCodeAt(1) === CHAR_COLON) {
      rootEnd = len > 2 && isPathSeparator(path.charCodeAt(2)) ? 3 : 2;
      offset = rootEnd;
    }

    var end = -1;
    var matchedSlash = true;

    for (var i = len - 1; i >= offset; --i) {
      if (isPathSeparator(path.charCodeAt(i))) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
        // We saw the first non-path separator
        matchedSlash = false;
      }
    }

    if (end === -1) {
      if (rootEnd === -1) {
        return '.';
      }

      end = rootEnd;
    }

    return path.slice(0, end);
  },
  basename: function basename(path, ext) {
    if (ext !== undefined) {
      validateString(ext, 'ext');
    }

    validateString(path, 'path');
    var start = 0;
    var end = -1;
    var matchedSlash = true;
    var i; // Check for a drive letter prefix so as not to mistake the following
    // path separator as an extra separator at the end of the path that can be
    // disregarded

    if (path.length >= 2 && isWindowsDeviceRoot(path.charCodeAt(0)) && path.charCodeAt(1) === CHAR_COLON) {
      start = 2;
    }

    if (ext !== undefined && ext.length > 0 && ext.length <= path.length) {
      if (ext === path) {
        return '';
      }

      var extIdx = ext.length - 1;
      var firstNonSlashEnd = -1;

      for (i = path.length - 1; i >= start; --i) {
        var code = path.charCodeAt(i);

        if (isPathSeparator(code)) {
          // If we reached a path separator that was not part of a set of path
          // separators at the end of the string, stop now
          if (!matchedSlash) {
            start = i + 1;
            break;
          }
        } else {
          if (firstNonSlashEnd === -1) {
            // We saw the first non-path separator, remember this index in case
            // we need it if the extension ends up not matching
            matchedSlash = false;
            firstNonSlashEnd = i + 1;
          }

          if (extIdx >= 0) {
            // Try to match the explicit extension
            if (code === ext.charCodeAt(extIdx)) {
              if (--extIdx === -1) {
                // We matched the extension, so mark this as the end of our path
                // component
                end = i;
              }
            } else {
              // Extension does not match, so our result is the entire path
              // component
              extIdx = -1;
              end = firstNonSlashEnd;
            }
          }
        }
      }

      if (start === end) {
        end = firstNonSlashEnd;
      } else if (end === -1) {
        end = path.length;
      }

      return path.slice(start, end);
    }

    for (i = path.length - 1; i >= start; --i) {
      if (isPathSeparator(path.charCodeAt(i))) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
        // We saw the first non-path separator, mark this as the end of our
        // path component
        matchedSlash = false;
        end = i + 1;
      }
    }

    if (end === -1) {
      return '';
    }

    return path.slice(start, end);
  },
  extname: function extname(path) {
    validateString(path, 'path');
    var start = 0;
    var startDot = -1;
    var startPart = 0;
    var end = -1;
    var matchedSlash = true; // Track the state of characters (if any) we see before our first dot and
    // after any path separator we find

    var preDotState = 0; // Check for a drive letter prefix so as not to mistake the following
    // path separator as an extra separator at the end of the path that can be
    // disregarded

    if (path.length >= 2 && path.charCodeAt(1) === CHAR_COLON && isWindowsDeviceRoot(path.charCodeAt(0))) {
      start = startPart = 2;
    }

    for (var i = path.length - 1; i >= start; --i) {
      var code = path.charCodeAt(i);

      if (isPathSeparator(code)) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }

        continue;
      }

      if (end === -1) {
        // We saw the first non-path separator, mark this as the end of our
        // extension
        matchedSlash = false;
        end = i + 1;
      }

      if (code === CHAR_DOT) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1) {
          startDot = i;
        } else if (preDotState !== 1) {
          preDotState = 1;
        }
      } else if (startDot !== -1) {
        // We saw a non-dot and non-path separator before our dot, so we should
        // have a good chance at having a non-empty extension
        preDotState = -1;
      }
    }

    if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
    preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
    preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
      return '';
    }

    return path.slice(startDot, end);
  },
  format: _format.bind(null, '\\'),
  parse: function parse(path) {
    validateString(path, 'path');
    var ret = {
      root: '',
      dir: '',
      base: '',
      ext: '',
      name: ''
    };

    if (path.length === 0) {
      return ret;
    }

    var len = path.length;
    var rootEnd = 0;
    var code = path.charCodeAt(0);

    if (len === 1) {
      if (isPathSeparator(code)) {
        // `path` contains just a path separator, exit early to avoid
        // unnecessary work
        ret.root = ret.dir = path;
        return ret;
      }

      ret.base = ret.name = path;
      return ret;
    } // Try to match a root


    if (isPathSeparator(code)) {
      // Possible UNC root
      rootEnd = 1;

      if (isPathSeparator(path.charCodeAt(1))) {
        // Matched double path separator at beginning
        var j = 2;
        var last = j; // Match 1 or more non-path separators

        while (j < len && !isPathSeparator(path.charCodeAt(j))) {
          j++;
        }

        if (j < len && j !== last) {
          // Matched!
          last = j; // Match 1 or more path separators

          while (j < len && isPathSeparator(path.charCodeAt(j))) {
            j++;
          }

          if (j < len && j !== last) {
            // Matched!
            last = j; // Match 1 or more non-path separators

            while (j < len && !isPathSeparator(path.charCodeAt(j))) {
              j++;
            }

            if (j === len) {
              // We matched a UNC root only
              rootEnd = j;
            } else if (j !== last) {
              // We matched a UNC root with leftovers
              rootEnd = j + 1;
            }
          }
        }
      }
    } else if (isWindowsDeviceRoot(code) && path.charCodeAt(1) === CHAR_COLON) {
      // Possible device root
      if (len <= 2) {
        // `path` contains just a drive root, exit early to avoid
        // unnecessary work
        ret.root = ret.dir = path;
        return ret;
      }

      rootEnd = 2;

      if (isPathSeparator(path.charCodeAt(2))) {
        if (len === 3) {
          // `path` contains just a drive root, exit early to avoid
          // unnecessary work
          ret.root = ret.dir = path;
          return ret;
        }

        rootEnd = 3;
      }
    }

    if (rootEnd > 0) {
      ret.root = path.slice(0, rootEnd);
    }

    var startDot = -1;
    var startPart = rootEnd;
    var end = -1;
    var matchedSlash = true;
    var i = path.length - 1; // Track the state of characters (if any) we see before our first dot and
    // after any path separator we find

    var preDotState = 0; // Get non-dir info

    for (; i >= rootEnd; --i) {
      code = path.charCodeAt(i);

      if (isPathSeparator(code)) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }

        continue;
      }

      if (end === -1) {
        // We saw the first non-path separator, mark this as the end of our
        // extension
        matchedSlash = false;
        end = i + 1;
      }

      if (code === CHAR_DOT) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1) {
          startDot = i;
        } else if (preDotState !== 1) {
          preDotState = 1;
        }
      } else if (startDot !== -1) {
        // We saw a non-dot and non-path separator before our dot, so we should
        // have a good chance at having a non-empty extension
        preDotState = -1;
      }
    }

    if (end !== -1) {
      if (startDot === -1 || // We saw a non-dot character immediately before the dot
      preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
        ret.base = ret.name = path.slice(startPart, end);
      } else {
        ret.name = path.slice(startPart, startDot);
        ret.base = path.slice(startPart, end);
        ret.ext = path.slice(startDot, end);
      }
    } // If the directory is the root, use the entire root as the `dir` including
    // the trailing slash if any (`C:\abc` -> `C:\`). Otherwise, strip out the
    // trailing slash (`C:\abc\def` -> `C:\abc`).


    if (startPart > 0 && startPart !== rootEnd) {
      ret.dir = path.slice(0, startPart - 1);
    } else {
      ret.dir = ret.root;
    }

    return ret;
  },
  sep: '\\',
  delimiter: ';',
  win32: null,
  posix: null
};
var posix = {
  // path.resolve([from ...], to)
  resolve: function resolve() {
    var resolvedPath = '';
    var resolvedAbsolute = false;

    for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
      var path = i >= 0 ? i < 0 || arguments.length <= i ? undefined : arguments[i] : process["a" /* cwd */]();
      validateString(path, 'path'); // Skip empty entries

      if (path.length === 0) {
        continue;
      }

      resolvedPath = "".concat(path, "/").concat(resolvedPath);
      resolvedAbsolute = path.charCodeAt(0) === CHAR_FORWARD_SLASH;
    } // At this point the path should be resolved to a full absolute path, but
    // handle relative paths to be safe (might happen when process.cwd() fails)
    // Normalize the path


    resolvedPath = normalizeString(resolvedPath, !resolvedAbsolute, '/', isPosixPathSeparator);

    if (resolvedAbsolute) {
      return "/".concat(resolvedPath);
    }

    return resolvedPath.length > 0 ? resolvedPath : '.';
  },
  normalize: function normalize(path) {
    validateString(path, 'path');

    if (path.length === 0) {
      return '.';
    }

    var isAbsolute = path.charCodeAt(0) === CHAR_FORWARD_SLASH;
    var trailingSeparator = path.charCodeAt(path.length - 1) === CHAR_FORWARD_SLASH; // Normalize the path

    path = normalizeString(path, !isAbsolute, '/', isPosixPathSeparator);

    if (path.length === 0) {
      if (isAbsolute) {
        return '/';
      }

      return trailingSeparator ? './' : '.';
    }

    if (trailingSeparator) {
      path += '/';
    }

    return isAbsolute ? "/".concat(path) : path;
  },
  isAbsolute: function isAbsolute(path) {
    validateString(path, 'path');
    return path.length > 0 && path.charCodeAt(0) === CHAR_FORWARD_SLASH;
  },
  join: function join() {
    if (arguments.length === 0) {
      return '.';
    }

    var joined;

    for (var i = 0; i < arguments.length; ++i) {
      var arg = i < 0 || arguments.length <= i ? undefined : arguments[i];
      validateString(arg, 'path');

      if (arg.length > 0) {
        if (joined === undefined) {
          joined = arg;
        } else {
          joined += "/".concat(arg);
        }
      }
    }

    if (joined === undefined) {
      return '.';
    }

    return posix.normalize(joined);
  },
  relative: function relative(from, to) {
    validateString(from, 'from');
    validateString(to, 'to');

    if (from === to) {
      return '';
    } // Trim leading forward slashes.


    from = posix.resolve(from);
    to = posix.resolve(to);

    if (from === to) {
      return '';
    }

    var fromStart = 1;
    var fromEnd = from.length;
    var fromLen = fromEnd - fromStart;
    var toStart = 1;
    var toLen = to.length - toStart; // Compare paths to find the longest common path from root

    var length = fromLen < toLen ? fromLen : toLen;
    var lastCommonSep = -1;
    var i = 0;

    for (; i < length; i++) {
      var fromCode = from.charCodeAt(fromStart + i);

      if (fromCode !== to.charCodeAt(toStart + i)) {
        break;
      } else if (fromCode === CHAR_FORWARD_SLASH) {
        lastCommonSep = i;
      }
    }

    if (i === length) {
      if (toLen > length) {
        if (to.charCodeAt(toStart + i) === CHAR_FORWARD_SLASH) {
          // We get here if `from` is the exact base path for `to`.
          // For example: from='/foo/bar'; to='/foo/bar/baz'
          return to.slice(toStart + i + 1);
        }

        if (i === 0) {
          // We get here if `from` is the root
          // For example: from='/'; to='/foo'
          return to.slice(toStart + i);
        }
      } else if (fromLen > length) {
        if (from.charCodeAt(fromStart + i) === CHAR_FORWARD_SLASH) {
          // We get here if `to` is the exact base path for `from`.
          // For example: from='/foo/bar/baz'; to='/foo/bar'
          lastCommonSep = i;
        } else if (i === 0) {
          // We get here if `to` is the root.
          // For example: from='/foo/bar'; to='/'
          lastCommonSep = 0;
        }
      }
    }

    var out = ''; // Generate the relative path based on the path difference between `to`
    // and `from`.

    for (i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i) {
      if (i === fromEnd || from.charCodeAt(i) === CHAR_FORWARD_SLASH) {
        out += out.length === 0 ? '..' : '/..';
      }
    } // Lastly, append the rest of the destination (`to`) path that comes after
    // the common path parts.


    return "".concat(out).concat(to.slice(toStart + lastCommonSep));
  },
  toNamespacedPath: function toNamespacedPath(path) {
    // Non-op on posix systems
    return path;
  },
  dirname: function dirname(path) {
    validateString(path, 'path');

    if (path.length === 0) {
      return '.';
    }

    var hasRoot = path.charCodeAt(0) === CHAR_FORWARD_SLASH;
    var end = -1;
    var matchedSlash = true;

    for (var i = path.length - 1; i >= 1; --i) {
      if (path.charCodeAt(i) === CHAR_FORWARD_SLASH) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
        // We saw the first non-path separator
        matchedSlash = false;
      }
    }

    if (end === -1) {
      return hasRoot ? '/' : '.';
    }

    if (hasRoot && end === 1) {
      return '//';
    }

    return path.slice(0, end);
  },
  basename: function basename(path, ext) {
    if (ext !== undefined) {
      validateString(ext, 'ext');
    }

    validateString(path, 'path');
    var start = 0;
    var end = -1;
    var matchedSlash = true;
    var i;

    if (ext !== undefined && ext.length > 0 && ext.length <= path.length) {
      if (ext === path) {
        return '';
      }

      var extIdx = ext.length - 1;
      var firstNonSlashEnd = -1;

      for (i = path.length - 1; i >= 0; --i) {
        var code = path.charCodeAt(i);

        if (code === CHAR_FORWARD_SLASH) {
          // If we reached a path separator that was not part of a set of path
          // separators at the end of the string, stop now
          if (!matchedSlash) {
            start = i + 1;
            break;
          }
        } else {
          if (firstNonSlashEnd === -1) {
            // We saw the first non-path separator, remember this index in case
            // we need it if the extension ends up not matching
            matchedSlash = false;
            firstNonSlashEnd = i + 1;
          }

          if (extIdx >= 0) {
            // Try to match the explicit extension
            if (code === ext.charCodeAt(extIdx)) {
              if (--extIdx === -1) {
                // We matched the extension, so mark this as the end of our path
                // component
                end = i;
              }
            } else {
              // Extension does not match, so our result is the entire path
              // component
              extIdx = -1;
              end = firstNonSlashEnd;
            }
          }
        }
      }

      if (start === end) {
        end = firstNonSlashEnd;
      } else if (end === -1) {
        end = path.length;
      }

      return path.slice(start, end);
    }

    for (i = path.length - 1; i >= 0; --i) {
      if (path.charCodeAt(i) === CHAR_FORWARD_SLASH) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
        // We saw the first non-path separator, mark this as the end of our
        // path component
        matchedSlash = false;
        end = i + 1;
      }
    }

    if (end === -1) {
      return '';
    }

    return path.slice(start, end);
  },
  extname: function extname(path) {
    validateString(path, 'path');
    var startDot = -1;
    var startPart = 0;
    var end = -1;
    var matchedSlash = true; // Track the state of characters (if any) we see before our first dot and
    // after any path separator we find

    var preDotState = 0;

    for (var i = path.length - 1; i >= 0; --i) {
      var code = path.charCodeAt(i);

      if (code === CHAR_FORWARD_SLASH) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }

        continue;
      }

      if (end === -1) {
        // We saw the first non-path separator, mark this as the end of our
        // extension
        matchedSlash = false;
        end = i + 1;
      }

      if (code === CHAR_DOT) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1) {
          startDot = i;
        } else if (preDotState !== 1) {
          preDotState = 1;
        }
      } else if (startDot !== -1) {
        // We saw a non-dot and non-path separator before our dot, so we should
        // have a good chance at having a non-empty extension
        preDotState = -1;
      }
    }

    if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
    preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
    preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
      return '';
    }

    return path.slice(startDot, end);
  },
  format: _format.bind(null, '/'),
  parse: function parse(path) {
    validateString(path, 'path');
    var ret = {
      root: '',
      dir: '',
      base: '',
      ext: '',
      name: ''
    };

    if (path.length === 0) {
      return ret;
    }

    var isAbsolute = path.charCodeAt(0) === CHAR_FORWARD_SLASH;
    var start;

    if (isAbsolute) {
      ret.root = '/';
      start = 1;
    } else {
      start = 0;
    }

    var startDot = -1;
    var startPart = 0;
    var end = -1;
    var matchedSlash = true;
    var i = path.length - 1; // Track the state of characters (if any) we see before our first dot and
    // after any path separator we find

    var preDotState = 0; // Get non-dir info

    for (; i >= start; --i) {
      var code = path.charCodeAt(i);

      if (code === CHAR_FORWARD_SLASH) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }

        continue;
      }

      if (end === -1) {
        // We saw the first non-path separator, mark this as the end of our
        // extension
        matchedSlash = false;
        end = i + 1;
      }

      if (code === CHAR_DOT) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1) {
          startDot = i;
        } else if (preDotState !== 1) {
          preDotState = 1;
        }
      } else if (startDot !== -1) {
        // We saw a non-dot and non-path separator before our dot, so we should
        // have a good chance at having a non-empty extension
        preDotState = -1;
      }
    }

    if (end !== -1) {
      var _start = startPart === 0 && isAbsolute ? 1 : startPart;

      if (startDot === -1 || // We saw a non-dot character immediately before the dot
      preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
        ret.base = ret.name = path.slice(_start, end);
      } else {
        ret.name = path.slice(_start, startDot);
        ret.base = path.slice(_start, end);
        ret.ext = path.slice(startDot, end);
      }
    }

    if (startPart > 0) {
      ret.dir = path.slice(0, startPart - 1);
    } else if (isAbsolute) {
      ret.dir = '/';
    }

    return ret;
  },
  sep: '/',
  delimiter: ':',
  win32: null,
  posix: null
};
posix.win32 = win32.win32 = win32;
posix.posix = win32.posix = posix;
var normalize = process["c" /* platform */] === 'win32' ? win32.normalize : posix.normalize;
var path_resolve = process["c" /* platform */] === 'win32' ? win32.resolve : posix.resolve;
var relative = process["c" /* platform */] === 'win32' ? win32.relative : posix.relative;
var dirname = process["c" /* platform */] === 'win32' ? win32.dirname : posix.dirname;
var basename = process["c" /* platform */] === 'win32' ? win32.basename : posix.basename;
var extname = process["c" /* platform */] === 'win32' ? win32.extname : posix.extname;
var sep = process["c" /* platform */] === 'win32' ? win32.sep : posix.sep;
// CONCATENATED MODULE: ./node_modules/monaco-editor/esm/vs/base/common/uri.js







var _encodeTable;

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


var _schemePattern = /^\w[\w\d+.-]*$/;
var _singleSlashStart = /^\//;
var _doubleSlashStart = /^\/\//;

function _validateUri(ret, _strict) {
  // scheme, must be set
  if (!ret.scheme && _strict) {
    throw new Error("[UriError]: Scheme is missing: {scheme: \"\", authority: \"".concat(ret.authority, "\", path: \"").concat(ret.path, "\", query: \"").concat(ret.query, "\", fragment: \"").concat(ret.fragment, "\"}"));
  } // scheme, https://tools.ietf.org/html/rfc3986#section-3.1
  // ALPHA *( ALPHA / DIGIT / "+" / "-" / "." )


  if (ret.scheme && !_schemePattern.test(ret.scheme)) {
    throw new Error('[UriError]: Scheme contains illegal characters.');
  } // path, http://tools.ietf.org/html/rfc3986#section-3.3
  // If a URI contains an authority component, then the path component
  // must either be empty or begin with a slash ("/") character.  If a URI
  // does not contain an authority component, then the path cannot begin
  // with two slash characters ("//").


  if (ret.path) {
    if (ret.authority) {
      if (!_singleSlashStart.test(ret.path)) {
        throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character');
      }
    } else {
      if (_doubleSlashStart.test(ret.path)) {
        throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")');
      }
    }
  }
} // for a while we allowed uris *without* schemes and this is the migration
// for them, e.g. an uri without scheme and without strict-mode warns and falls
// back to the file-scheme. that should cause the least carnage and still be a
// clear warning


function _schemeFix(scheme, _strict) {
  if (!scheme && !_strict) {
    return 'file';
  }

  return scheme;
} // implements a bit of https://tools.ietf.org/html/rfc3986#section-5


function _referenceResolution(scheme, path) {
  // the slash-character is our 'default base' as we don't
  // support constructing URIs relative to other URIs. This
  // also means that we alter and potentially break paths.
  // see https://tools.ietf.org/html/rfc3986#section-5.1.4
  switch (scheme) {
    case 'https':
    case 'http':
    case 'file':
      if (!path) {
        path = _slash;
      } else if (path[0] !== _slash) {
        path = _slash + path;
      }

      break;
  }

  return path;
}

var uri_empty = '';
var _slash = '/';
var _regexp = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;
/**
 * Uniform Resource Identifier (URI) http://tools.ietf.org/html/rfc3986.
 * This class is a simple parser which creates the basic component parts
 * (http://tools.ietf.org/html/rfc3986#section-3) with minimal validation
 * and encoding.
 *
 * ```txt
 *       foo://example.com:8042/over/there?name=ferret#nose
 *       \_/   \______________/\_________/ \_________/ \__/
 *        |           |            |            |        |
 *     scheme     authority       path        query   fragment
 *        |   _____________________|__
 *       / \ /                        \
 *       urn:example:animal:ferret:nose
 * ```
 */

var uri_URI = /*#__PURE__*/function () {
  /**
   * @internal
   */
  function URI(schemeOrData, authority, path, query, fragment) {
    var _strict = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;

    _classCallCheck(this, URI);

    if (typeof schemeOrData === 'object') {
      this.scheme = schemeOrData.scheme || uri_empty;
      this.authority = schemeOrData.authority || uri_empty;
      this.path = schemeOrData.path || uri_empty;
      this.query = schemeOrData.query || uri_empty;
      this.fragment = schemeOrData.fragment || uri_empty; // no validation because it's this URI
      // that creates uri components.
      // _validateUri(this);
    } else {
      this.scheme = _schemeFix(schemeOrData, _strict);
      this.authority = authority || uri_empty;
      this.path = _referenceResolution(this.scheme, path || uri_empty);
      this.query = query || uri_empty;
      this.fragment = fragment || uri_empty;

      _validateUri(this, _strict);
    }
  }

  _createClass(URI, [{
    key: "with",
    // ---- modify to new -------------------------
    value: function _with(change) {
      if (!change) {
        return this;
      }

      var scheme = change.scheme,
          authority = change.authority,
          path = change.path,
          query = change.query,
          fragment = change.fragment;

      if (scheme === undefined) {
        scheme = this.scheme;
      } else if (scheme === null) {
        scheme = uri_empty;
      }

      if (authority === undefined) {
        authority = this.authority;
      } else if (authority === null) {
        authority = uri_empty;
      }

      if (path === undefined) {
        path = this.path;
      } else if (path === null) {
        path = uri_empty;
      }

      if (query === undefined) {
        query = this.query;
      } else if (query === null) {
        query = uri_empty;
      }

      if (fragment === undefined) {
        fragment = this.fragment;
      } else if (fragment === null) {
        fragment = uri_empty;
      }

      if (scheme === this.scheme && authority === this.authority && path === this.path && query === this.query && fragment === this.fragment) {
        return this;
      }

      return new uri_Uri(scheme, authority, path, query, fragment);
    } // ---- parse & validate ------------------------

    /**
     * Creates a new URI from a string, e.g. `http://www.msft.com/some/path`,
     * `file:///usr/home`, or `scheme:with/path`.
     *
     * @param value A string which represents an URI (see `URI#toString`).
     */

  }, {
    key: "toString",
    // ---- printing/externalize ---------------------------

    /**
     * Creates a string representation for this URI. It's guaranteed that calling
     * `URI.parse` with the result of this function creates an URI which is equal
     * to this URI.
     *
     * * The result shall *not* be used for display purposes but for externalization or transport.
     * * The result will be encoded using the percentage encoding and encoding happens mostly
     * ignore the scheme-specific encoding rules.
     *
     * @param skipEncoding Do not encode the result, default is `false`
     */
    value: function toString() {
      var skipEncoding = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      return _asFormatted(this, skipEncoding);
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return this;
    }
  }, {
    key: "fsPath",
    // ---- filesystem path -----------------------

    /**
     * Returns a string representing the corresponding file system path of this URI.
     * Will handle UNC paths, normalizes windows drive letters to lower-case, and uses the
     * platform specific path separator.
     *
     * * Will *not* validate the path for invalid characters and semantics.
     * * Will *not* look at the scheme of this URI.
     * * The result shall *not* be used for display purposes but for accessing a file on disk.
     *
     *
     * The *difference* to `URI#path` is the use of the platform specific separator and the handling
     * of UNC paths. See the below sample of a file-uri with an authority (UNC path).
     *
     * ```ts
        const u = URI.parse('file://server/c$/folder/file.txt')
        u.authority === 'server'
        u.path === '/shares/c$/file.txt'
        u.fsPath === '\\server\c$\folder\file.txt'
    ```
     *
     * Using `URI#path` to read a file (using fs-apis) would not be enough because parts of the path,
     * namely the server name, would be missing. Therefore `URI#fsPath` exists - it's sugar to ease working
     * with URIs that represent files on disk (`file` scheme).
     */
    get: function get() {
      // if (this.scheme !== 'file') {
      // 	console.warn(`[UriError] calling fsPath with scheme ${this.scheme}`);
      // }
      return uriToFsPath(this, false);
    }
  }], [{
    key: "isUri",
    value: function isUri(thing) {
      if (thing instanceof URI) {
        return true;
      }

      if (!thing) {
        return false;
      }

      return typeof thing.authority === 'string' && typeof thing.fragment === 'string' && typeof thing.path === 'string' && typeof thing.query === 'string' && typeof thing.scheme === 'string' && typeof thing.fsPath === 'function' && typeof thing.with === 'function' && typeof thing.toString === 'function';
    }
  }, {
    key: "parse",
    value: function parse(value) {
      var _strict = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var match = _regexp.exec(value);

      if (!match) {
        return new uri_Uri(uri_empty, uri_empty, uri_empty, uri_empty, uri_empty);
      }

      return new uri_Uri(match[2] || uri_empty, percentDecode(match[4] || uri_empty), percentDecode(match[5] || uri_empty), percentDecode(match[7] || uri_empty), percentDecode(match[9] || uri_empty), _strict);
    }
    /**
     * Creates a new URI from a file system path, e.g. `c:\my\files`,
     * `/usr/home`, or `\\server\share\some\path`.
     *
     * The *difference* between `URI#parse` and `URI#file` is that the latter treats the argument
     * as path, not as stringified-uri. E.g. `URI.file(path)` is **not the same as**
     * `URI.parse('file://' + path)` because the path might contain characters that are
     * interpreted (# and ?). See the following sample:
     * ```ts
    const good = URI.file('/coding/c#/project1');
    good.scheme === 'file';
    good.path === '/coding/c#/project1';
    good.fragment === '';
    const bad = URI.parse('file://' + '/coding/c#/project1');
    bad.scheme === 'file';
    bad.path === '/coding/c'; // path is now broken
    bad.fragment === '/project1';
    ```
     *
     * @param path A file system path (see `URI#fsPath`)
     */

  }, {
    key: "file",
    value: function file(path) {
      var authority = uri_empty; // normalize to fwd-slashes on windows,
      // on other systems bwd-slashes are valid
      // filename character, eg /f\oo/ba\r.txt

      if (platform["d" /* isWindows */]) {
        path = path.replace(/\\/g, _slash);
      } // check for authority as used in UNC shares
      // or use the path as given


      if (path[0] === _slash && path[1] === _slash) {
        var idx = path.indexOf(_slash, 2);

        if (idx === -1) {
          authority = path.substring(2);
          path = _slash;
        } else {
          authority = path.substring(2, idx);
          path = path.substring(idx) || _slash;
        }
      }

      return new uri_Uri('file', authority, path, uri_empty, uri_empty);
    }
  }, {
    key: "from",
    value: function from(components) {
      return new uri_Uri(components.scheme, components.authority, components.path, components.query, components.fragment);
    }
    /**
     * Join a URI path with path fragments and normalizes the resulting path.
     *
     * @param uri The input URI.
     * @param pathFragment The path fragment to add to the URI path.
     * @returns The resulting URI.
     */

  }, {
    key: "joinPath",
    value: function joinPath(uri) {
      if (!uri.path) {
        throw new Error("[UriError]: cannot call joinPaths on URI without path");
      }

      var newPath;

      for (var _len = arguments.length, pathFragment = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        pathFragment[_key - 1] = arguments[_key];
      }

      if (platform["d" /* isWindows */] && uri.scheme === 'file') {
        var _paths$win;

        newPath = URI.file((_paths$win = win32).join.apply(_paths$win, [uriToFsPath(uri, true)].concat(pathFragment))).path;
      } else {
        var _paths$posix;

        newPath = (_paths$posix = posix).join.apply(_paths$posix, [uri.path].concat(pathFragment));
      }

      return uri.with({
        path: newPath
      });
    }
  }, {
    key: "revive",
    value: function revive(data) {
      if (!data) {
        return data;
      } else if (data instanceof URI) {
        return data;
      } else {
        var result = new uri_Uri(data);
        result._formatted = data.external;
        result._fsPath = data._sep === _pathSepMarker ? data.fsPath : null;
        return result;
      }
    }
  }]);

  return URI;
}();

var _pathSepMarker = platform["d" /* isWindows */] ? 1 : undefined; // This class exists so that URI is compatibile with vscode.Uri (API).


var uri_Uri = /*#__PURE__*/function (_URI) {
  _inherits(Uri, _URI);

  function Uri() {
    var _this;

    _classCallCheck(this, Uri);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Uri).apply(this, arguments));
    _this._formatted = null;
    _this._fsPath = null;
    return _this;
  }

  _createClass(Uri, [{
    key: "toString",
    value: function toString() {
      var skipEncoding = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (!skipEncoding) {
        if (!this._formatted) {
          this._formatted = _asFormatted(this, false);
        }

        return this._formatted;
      } else {
        // we don't cache that
        return _asFormatted(this, true);
      }
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      var res = {
        $mid: 1
      }; // cached state

      if (this._fsPath) {
        res.fsPath = this._fsPath;
        res._sep = _pathSepMarker;
      }

      if (this._formatted) {
        res.external = this._formatted;
      } // uri components


      if (this.path) {
        res.path = this.path;
      }

      if (this.scheme) {
        res.scheme = this.scheme;
      }

      if (this.authority) {
        res.authority = this.authority;
      }

      if (this.query) {
        res.query = this.query;
      }

      if (this.fragment) {
        res.fragment = this.fragment;
      }

      return res;
    }
  }, {
    key: "fsPath",
    get: function get() {
      if (!this._fsPath) {
        this._fsPath = uriToFsPath(this, false);
      }

      return this._fsPath;
    }
  }]);

  return Uri;
}(uri_URI); // reserved characters: https://tools.ietf.org/html/rfc3986#section-2.2


var encodeTable = (_encodeTable = {}, _defineProperty(_encodeTable, 58
/* Colon */
, '%3A'), _defineProperty(_encodeTable, 47
/* Slash */
, '%2F'), _defineProperty(_encodeTable, 63
/* QuestionMark */
, '%3F'), _defineProperty(_encodeTable, 35
/* Hash */
, '%23'), _defineProperty(_encodeTable, 91
/* OpenSquareBracket */
, '%5B'), _defineProperty(_encodeTable, 93
/* CloseSquareBracket */
, '%5D'), _defineProperty(_encodeTable, 64
/* AtSign */
, '%40'), _defineProperty(_encodeTable, 33
/* ExclamationMark */
, '%21'), _defineProperty(_encodeTable, 36
/* DollarSign */
, '%24'), _defineProperty(_encodeTable, 38
/* Ampersand */
, '%26'), _defineProperty(_encodeTable, 39
/* SingleQuote */
, '%27'), _defineProperty(_encodeTable, 40
/* OpenParen */
, '%28'), _defineProperty(_encodeTable, 41
/* CloseParen */
, '%29'), _defineProperty(_encodeTable, 42
/* Asterisk */
, '%2A'), _defineProperty(_encodeTable, 43
/* Plus */
, '%2B'), _defineProperty(_encodeTable, 44
/* Comma */
, '%2C'), _defineProperty(_encodeTable, 59
/* Semicolon */
, '%3B'), _defineProperty(_encodeTable, 61
/* Equals */
, '%3D'), _defineProperty(_encodeTable, 32
/* Space */
, '%20'), _encodeTable);

function encodeURIComponentFast(uriComponent, allowSlash) {
  var res = undefined;
  var nativeEncodePos = -1;

  for (var pos = 0; pos < uriComponent.length; pos++) {
    var code = uriComponent.charCodeAt(pos); // unreserved characters: https://tools.ietf.org/html/rfc3986#section-2.3

    if (code >= 97
    /* a */
    && code <= 122
    /* z */
    || code >= 65
    /* A */
    && code <= 90
    /* Z */
    || code >= 48
    /* Digit0 */
    && code <= 57
    /* Digit9 */
    || code === 45
    /* Dash */
    || code === 46
    /* Period */
    || code === 95
    /* Underline */
    || code === 126
    /* Tilde */
    || allowSlash && code === 47
    /* Slash */
    ) {
      // check if we are delaying native encode
      if (nativeEncodePos !== -1) {
        res += encodeURIComponent(uriComponent.substring(nativeEncodePos, pos));
        nativeEncodePos = -1;
      } // check if we write into a new string (by default we try to return the param)


      if (res !== undefined) {
        res += uriComponent.charAt(pos);
      }
    } else {
      // encoding needed, we need to allocate a new string
      if (res === undefined) {
        res = uriComponent.substr(0, pos);
      } // check with default table first


      var escaped = encodeTable[code];

      if (escaped !== undefined) {
        // check if we are delaying native encode
        if (nativeEncodePos !== -1) {
          res += encodeURIComponent(uriComponent.substring(nativeEncodePos, pos));
          nativeEncodePos = -1;
        } // append escaped variant to result


        res += escaped;
      } else if (nativeEncodePos === -1) {
        // use native encode only when needed
        nativeEncodePos = pos;
      }
    }
  }

  if (nativeEncodePos !== -1) {
    res += encodeURIComponent(uriComponent.substring(nativeEncodePos));
  }

  return res !== undefined ? res : uriComponent;
}

function encodeURIComponentMinimal(path) {
  var res = undefined;

  for (var pos = 0; pos < path.length; pos++) {
    var code = path.charCodeAt(pos);

    if (code === 35
    /* Hash */
    || code === 63
    /* QuestionMark */
    ) {
        if (res === undefined) {
          res = path.substr(0, pos);
        }

        res += encodeTable[code];
      } else {
      if (res !== undefined) {
        res += path[pos];
      }
    }
  }

  return res !== undefined ? res : path;
}
/**
 * Compute `fsPath` for the given uri
 */


function uriToFsPath(uri, keepDriveLetterCasing) {
  var value;

  if (uri.authority && uri.path.length > 1 && uri.scheme === 'file') {
    // unc path: file://shares/c$/far/boo
    value = "//".concat(uri.authority).concat(uri.path);
  } else if (uri.path.charCodeAt(0) === 47
  /* Slash */
  && (uri.path.charCodeAt(1) >= 65
  /* A */
  && uri.path.charCodeAt(1) <= 90
  /* Z */
  || uri.path.charCodeAt(1) >= 97
  /* a */
  && uri.path.charCodeAt(1) <= 122
  /* z */
  ) && uri.path.charCodeAt(2) === 58
  /* Colon */
  ) {
      if (!keepDriveLetterCasing) {
        // windows drive letter: file:///c:/far/boo
        value = uri.path[1].toLowerCase() + uri.path.substr(2);
      } else {
        value = uri.path.substr(1);
      }
    } else {
    // other path
    value = uri.path;
  }

  if (platform["d" /* isWindows */]) {
    value = value.replace(/\//g, '\\');
  }

  return value;
}
/**
 * Create the external version of a uri
 */

function _asFormatted(uri, skipEncoding) {
  var encoder = !skipEncoding ? encodeURIComponentFast : encodeURIComponentMinimal;
  var res = '';
  var scheme = uri.scheme,
      authority = uri.authority,
      path = uri.path,
      query = uri.query,
      fragment = uri.fragment;

  if (scheme) {
    res += scheme;
    res += ':';
  }

  if (authority || scheme === 'file') {
    res += _slash;
    res += _slash;
  }

  if (authority) {
    var idx = authority.indexOf('@');

    if (idx !== -1) {
      // <user>@<auth>
      var userinfo = authority.substr(0, idx);
      authority = authority.substr(idx + 1);
      idx = userinfo.indexOf(':');

      if (idx === -1) {
        res += encoder(userinfo, false);
      } else {
        // <user>:<pass>@<auth>
        res += encoder(userinfo.substr(0, idx), false);
        res += ':';
        res += encoder(userinfo.substr(idx + 1), false);
      }

      res += '@';
    }

    authority = authority.toLowerCase();
    idx = authority.indexOf(':');

    if (idx === -1) {
      res += encoder(authority, false);
    } else {
      // <auth>:<port>
      res += encoder(authority.substr(0, idx), false);
      res += authority.substr(idx);
    }
  }

  if (path) {
    // lower-case windows drive letters in /C:/fff or C:/fff
    if (path.length >= 3 && path.charCodeAt(0) === 47
    /* Slash */
    && path.charCodeAt(2) === 58
    /* Colon */
    ) {
        var code = path.charCodeAt(1);

        if (code >= 65
        /* A */
        && code <= 90
        /* Z */
        ) {
            path = "/".concat(String.fromCharCode(code + 32), ":").concat(path.substr(3)); // "/c:".length === 3
          }
      } else if (path.length >= 2 && path.charCodeAt(1) === 58
    /* Colon */
    ) {
        var _code = path.charCodeAt(0);

        if (_code >= 65
        /* A */
        && _code <= 90
        /* Z */
        ) {
            path = "".concat(String.fromCharCode(_code + 32), ":").concat(path.substr(2)); // "/c:".length === 3
          }
      } // encode the rest of the path


    res += encoder(path, true);
  }

  if (query) {
    res += '?';
    res += encoder(query, false);
  }

  if (fragment) {
    res += '#';
    res += !skipEncoding ? encodeURIComponentFast(fragment, false) : fragment;
  }

  return res;
} // --- decode


function decodeURIComponentGraceful(str) {
  try {
    return decodeURIComponent(str);
  } catch (_a) {
    if (str.length > 3) {
      return str.substr(0, 3) + decodeURIComponentGraceful(str.substr(3));
    } else {
      return str;
    }
  }
}

var _rEncodedAsHex = /(%[0-9A-Za-z][0-9A-Za-z])+/g;

function percentDecode(str) {
  if (!str.match(_rEncodedAsHex)) {
    return str;
  }

  return str.replace(_rEncodedAsHex, function (match) {
    return decodeURIComponentGraceful(match);
  });
}
// CONCATENATED MODULE: ./node_modules/monaco-editor/esm/vs/editor/common/core/position.js



/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/**
 * A position in the editor.
 */
var position_Position = /*#__PURE__*/function () {
  function Position(lineNumber, column) {
    _classCallCheck(this, Position);

    this.lineNumber = lineNumber;
    this.column = column;
  }
  /**
   * Create a new position from this position.
   *
   * @param newLineNumber new line number
   * @param newColumn new column
   */


  _createClass(Position, [{
    key: "with",
    value: function _with() {
      var newLineNumber = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.lineNumber;
      var newColumn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.column;

      if (newLineNumber === this.lineNumber && newColumn === this.column) {
        return this;
      } else {
        return new Position(newLineNumber, newColumn);
      }
    }
    /**
     * Derive a new position from this position.
     *
     * @param deltaLineNumber line number delta
     * @param deltaColumn column delta
     */

  }, {
    key: "delta",
    value: function delta() {
      var deltaLineNumber = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var deltaColumn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return this.with(this.lineNumber + deltaLineNumber, this.column + deltaColumn);
    }
    /**
     * Test if this position equals other position
     */

  }, {
    key: "equals",
    value: function equals(other) {
      return Position.equals(this, other);
    }
    /**
     * Test if position `a` equals position `b`
     */

  }, {
    key: "isBefore",

    /**
     * Test if this position is before other position.
     * If the two positions are equal, the result will be false.
     */
    value: function isBefore(other) {
      return Position.isBefore(this, other);
    }
    /**
     * Test if position `a` is before position `b`.
     * If the two positions are equal, the result will be false.
     */

  }, {
    key: "isBeforeOrEqual",

    /**
     * Test if this position is before other position.
     * If the two positions are equal, the result will be true.
     */
    value: function isBeforeOrEqual(other) {
      return Position.isBeforeOrEqual(this, other);
    }
    /**
     * Test if position `a` is before position `b`.
     * If the two positions are equal, the result will be true.
     */

  }, {
    key: "clone",

    /**
     * Clone this position.
     */
    value: function clone() {
      return new Position(this.lineNumber, this.column);
    }
    /**
     * Convert to a human-readable representation.
     */

  }, {
    key: "toString",
    value: function toString() {
      return '(' + this.lineNumber + ',' + this.column + ')';
    } // ---

    /**
     * Create a `Position` from an `IPosition`.
     */

  }], [{
    key: "equals",
    value: function equals(a, b) {
      if (!a && !b) {
        return true;
      }

      return !!a && !!b && a.lineNumber === b.lineNumber && a.column === b.column;
    }
  }, {
    key: "isBefore",
    value: function isBefore(a, b) {
      if (a.lineNumber < b.lineNumber) {
        return true;
      }

      if (b.lineNumber < a.lineNumber) {
        return false;
      }

      return a.column < b.column;
    }
  }, {
    key: "isBeforeOrEqual",
    value: function isBeforeOrEqual(a, b) {
      if (a.lineNumber < b.lineNumber) {
        return true;
      }

      if (b.lineNumber < a.lineNumber) {
        return false;
      }

      return a.column <= b.column;
    }
    /**
     * A function that compares positions, useful for sorting
     */

  }, {
    key: "compare",
    value: function compare(a, b) {
      var aLineNumber = a.lineNumber | 0;
      var bLineNumber = b.lineNumber | 0;

      if (aLineNumber === bLineNumber) {
        var aColumn = a.column | 0;
        var bColumn = b.column | 0;
        return aColumn - bColumn;
      }

      return aLineNumber - bLineNumber;
    }
  }, {
    key: "lift",
    value: function lift(pos) {
      return new Position(pos.lineNumber, pos.column);
    }
    /**
     * Test if `obj` is an `IPosition`.
     */

  }, {
    key: "isIPosition",
    value: function isIPosition(obj) {
      return obj && typeof obj.lineNumber === 'number' && typeof obj.column === 'number';
    }
  }]);

  return Position;
}();
// CONCATENATED MODULE: ./node_modules/monaco-editor/esm/vs/editor/common/core/range.js



/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/**
 * A range in the editor. (startLineNumber,startColumn) is <= (endLineNumber,endColumn)
 */

var range_Range = /*#__PURE__*/function () {
  function Range(startLineNumber, startColumn, endLineNumber, endColumn) {
    _classCallCheck(this, Range);

    if (startLineNumber > endLineNumber || startLineNumber === endLineNumber && startColumn > endColumn) {
      this.startLineNumber = endLineNumber;
      this.startColumn = endColumn;
      this.endLineNumber = startLineNumber;
      this.endColumn = startColumn;
    } else {
      this.startLineNumber = startLineNumber;
      this.startColumn = startColumn;
      this.endLineNumber = endLineNumber;
      this.endColumn = endColumn;
    }
  }
  /**
   * Test if this range is empty.
   */


  _createClass(Range, [{
    key: "isEmpty",
    value: function isEmpty() {
      return Range.isEmpty(this);
    }
    /**
     * Test if `range` is empty.
     */

  }, {
    key: "containsPosition",

    /**
     * Test if position is in this range. If the position is at the edges, will return true.
     */
    value: function containsPosition(position) {
      return Range.containsPosition(this, position);
    }
    /**
     * Test if `position` is in `range`. If the position is at the edges, will return true.
     */

  }, {
    key: "containsRange",

    /**
     * Test if range is in this range. If the range is equal to this range, will return true.
     */
    value: function containsRange(range) {
      return Range.containsRange(this, range);
    }
    /**
     * Test if `otherRange` is in `range`. If the ranges are equal, will return true.
     */

  }, {
    key: "strictContainsRange",

    /**
     * Test if `range` is strictly in this range. `range` must start after and end before this range for the result to be true.
     */
    value: function strictContainsRange(range) {
      return Range.strictContainsRange(this, range);
    }
    /**
     * Test if `otherRange` is strinctly in `range` (must start after, and end before). If the ranges are equal, will return false.
     */

  }, {
    key: "plusRange",

    /**
     * A reunion of the two ranges.
     * The smallest position will be used as the start point, and the largest one as the end point.
     */
    value: function plusRange(range) {
      return Range.plusRange(this, range);
    }
    /**
     * A reunion of the two ranges.
     * The smallest position will be used as the start point, and the largest one as the end point.
     */

  }, {
    key: "intersectRanges",

    /**
     * A intersection of the two ranges.
     */
    value: function intersectRanges(range) {
      return Range.intersectRanges(this, range);
    }
    /**
     * A intersection of the two ranges.
     */

  }, {
    key: "equalsRange",

    /**
     * Test if this range equals other.
     */
    value: function equalsRange(other) {
      return Range.equalsRange(this, other);
    }
    /**
     * Test if range `a` equals `b`.
     */

  }, {
    key: "getEndPosition",

    /**
     * Return the end position (which will be after or equal to the start position)
     */
    value: function getEndPosition() {
      return Range.getEndPosition(this);
    }
    /**
     * Return the end position (which will be after or equal to the start position)
     */

  }, {
    key: "getStartPosition",

    /**
     * Return the start position (which will be before or equal to the end position)
     */
    value: function getStartPosition() {
      return Range.getStartPosition(this);
    }
    /**
     * Return the start position (which will be before or equal to the end position)
     */

  }, {
    key: "toString",

    /**
     * Transform to a user presentable string representation.
     */
    value: function toString() {
      return '[' + this.startLineNumber + ',' + this.startColumn + ' -> ' + this.endLineNumber + ',' + this.endColumn + ']';
    }
    /**
     * Create a new range using this range's start position, and using endLineNumber and endColumn as the end position.
     */

  }, {
    key: "setEndPosition",
    value: function setEndPosition(endLineNumber, endColumn) {
      return new Range(this.startLineNumber, this.startColumn, endLineNumber, endColumn);
    }
    /**
     * Create a new range using this range's end position, and using startLineNumber and startColumn as the start position.
     */

  }, {
    key: "setStartPosition",
    value: function setStartPosition(startLineNumber, startColumn) {
      return new Range(startLineNumber, startColumn, this.endLineNumber, this.endColumn);
    }
    /**
     * Create a new empty range using this range's start position.
     */

  }, {
    key: "collapseToStart",
    value: function collapseToStart() {
      return Range.collapseToStart(this);
    }
    /**
     * Create a new empty range using this range's start position.
     */

  }], [{
    key: "isEmpty",
    value: function isEmpty(range) {
      return range.startLineNumber === range.endLineNumber && range.startColumn === range.endColumn;
    }
  }, {
    key: "containsPosition",
    value: function containsPosition(range, position) {
      if (position.lineNumber < range.startLineNumber || position.lineNumber > range.endLineNumber) {
        return false;
      }

      if (position.lineNumber === range.startLineNumber && position.column < range.startColumn) {
        return false;
      }

      if (position.lineNumber === range.endLineNumber && position.column > range.endColumn) {
        return false;
      }

      return true;
    }
  }, {
    key: "containsRange",
    value: function containsRange(range, otherRange) {
      if (otherRange.startLineNumber < range.startLineNumber || otherRange.endLineNumber < range.startLineNumber) {
        return false;
      }

      if (otherRange.startLineNumber > range.endLineNumber || otherRange.endLineNumber > range.endLineNumber) {
        return false;
      }

      if (otherRange.startLineNumber === range.startLineNumber && otherRange.startColumn < range.startColumn) {
        return false;
      }

      if (otherRange.endLineNumber === range.endLineNumber && otherRange.endColumn > range.endColumn) {
        return false;
      }

      return true;
    }
  }, {
    key: "strictContainsRange",
    value: function strictContainsRange(range, otherRange) {
      if (otherRange.startLineNumber < range.startLineNumber || otherRange.endLineNumber < range.startLineNumber) {
        return false;
      }

      if (otherRange.startLineNumber > range.endLineNumber || otherRange.endLineNumber > range.endLineNumber) {
        return false;
      }

      if (otherRange.startLineNumber === range.startLineNumber && otherRange.startColumn <= range.startColumn) {
        return false;
      }

      if (otherRange.endLineNumber === range.endLineNumber && otherRange.endColumn >= range.endColumn) {
        return false;
      }

      return true;
    }
  }, {
    key: "plusRange",
    value: function plusRange(a, b) {
      var startLineNumber;
      var startColumn;
      var endLineNumber;
      var endColumn;

      if (b.startLineNumber < a.startLineNumber) {
        startLineNumber = b.startLineNumber;
        startColumn = b.startColumn;
      } else if (b.startLineNumber === a.startLineNumber) {
        startLineNumber = b.startLineNumber;
        startColumn = Math.min(b.startColumn, a.startColumn);
      } else {
        startLineNumber = a.startLineNumber;
        startColumn = a.startColumn;
      }

      if (b.endLineNumber > a.endLineNumber) {
        endLineNumber = b.endLineNumber;
        endColumn = b.endColumn;
      } else if (b.endLineNumber === a.endLineNumber) {
        endLineNumber = b.endLineNumber;
        endColumn = Math.max(b.endColumn, a.endColumn);
      } else {
        endLineNumber = a.endLineNumber;
        endColumn = a.endColumn;
      }

      return new Range(startLineNumber, startColumn, endLineNumber, endColumn);
    }
  }, {
    key: "intersectRanges",
    value: function intersectRanges(a, b) {
      var resultStartLineNumber = a.startLineNumber;
      var resultStartColumn = a.startColumn;
      var resultEndLineNumber = a.endLineNumber;
      var resultEndColumn = a.endColumn;
      var otherStartLineNumber = b.startLineNumber;
      var otherStartColumn = b.startColumn;
      var otherEndLineNumber = b.endLineNumber;
      var otherEndColumn = b.endColumn;

      if (resultStartLineNumber < otherStartLineNumber) {
        resultStartLineNumber = otherStartLineNumber;
        resultStartColumn = otherStartColumn;
      } else if (resultStartLineNumber === otherStartLineNumber) {
        resultStartColumn = Math.max(resultStartColumn, otherStartColumn);
      }

      if (resultEndLineNumber > otherEndLineNumber) {
        resultEndLineNumber = otherEndLineNumber;
        resultEndColumn = otherEndColumn;
      } else if (resultEndLineNumber === otherEndLineNumber) {
        resultEndColumn = Math.min(resultEndColumn, otherEndColumn);
      } // Check if selection is now empty


      if (resultStartLineNumber > resultEndLineNumber) {
        return null;
      }

      if (resultStartLineNumber === resultEndLineNumber && resultStartColumn > resultEndColumn) {
        return null;
      }

      return new Range(resultStartLineNumber, resultStartColumn, resultEndLineNumber, resultEndColumn);
    }
  }, {
    key: "equalsRange",
    value: function equalsRange(a, b) {
      return !!a && !!b && a.startLineNumber === b.startLineNumber && a.startColumn === b.startColumn && a.endLineNumber === b.endLineNumber && a.endColumn === b.endColumn;
    }
  }, {
    key: "getEndPosition",
    value: function getEndPosition(range) {
      return new position_Position(range.endLineNumber, range.endColumn);
    }
  }, {
    key: "getStartPosition",
    value: function getStartPosition(range) {
      return new position_Position(range.startLineNumber, range.startColumn);
    }
  }, {
    key: "collapseToStart",
    value: function collapseToStart(range) {
      return new Range(range.startLineNumber, range.startColumn, range.startLineNumber, range.startColumn);
    } // ---

  }, {
    key: "fromPositions",
    value: function fromPositions(start) {
      var end = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : start;
      return new Range(start.lineNumber, start.column, end.lineNumber, end.column);
    }
  }, {
    key: "lift",
    value: function lift(range) {
      if (!range) {
        return null;
      }

      return new Range(range.startLineNumber, range.startColumn, range.endLineNumber, range.endColumn);
    }
    /**
     * Test if `obj` is an `IRange`.
     */

  }, {
    key: "isIRange",
    value: function isIRange(obj) {
      return obj && typeof obj.startLineNumber === 'number' && typeof obj.startColumn === 'number' && typeof obj.endLineNumber === 'number' && typeof obj.endColumn === 'number';
    }
    /**
     * Test if the two ranges are touching in any way.
     */

  }, {
    key: "areIntersectingOrTouching",
    value: function areIntersectingOrTouching(a, b) {
      // Check if `a` is before `b`
      if (a.endLineNumber < b.startLineNumber || a.endLineNumber === b.startLineNumber && a.endColumn < b.startColumn) {
        return false;
      } // Check if `b` is before `a`


      if (b.endLineNumber < a.startLineNumber || b.endLineNumber === a.startLineNumber && b.endColumn < a.startColumn) {
        return false;
      } // These ranges must intersect


      return true;
    }
    /**
     * Test if the two ranges are intersecting. If the ranges are touching it returns true.
     */

  }, {
    key: "areIntersecting",
    value: function areIntersecting(a, b) {
      // Check if `a` is before `b`
      if (a.endLineNumber < b.startLineNumber || a.endLineNumber === b.startLineNumber && a.endColumn <= b.startColumn) {
        return false;
      } // Check if `b` is before `a`


      if (b.endLineNumber < a.startLineNumber || b.endLineNumber === a.startLineNumber && b.endColumn <= a.startColumn) {
        return false;
      } // These ranges must intersect


      return true;
    }
    /**
     * A function that compares ranges, useful for sorting ranges
     * It will first compare ranges on the startPosition and then on the endPosition
     */

  }, {
    key: "compareRangesUsingStarts",
    value: function compareRangesUsingStarts(a, b) {
      if (a && b) {
        var aStartLineNumber = a.startLineNumber | 0;
        var bStartLineNumber = b.startLineNumber | 0;

        if (aStartLineNumber === bStartLineNumber) {
          var aStartColumn = a.startColumn | 0;
          var bStartColumn = b.startColumn | 0;

          if (aStartColumn === bStartColumn) {
            var aEndLineNumber = a.endLineNumber | 0;
            var bEndLineNumber = b.endLineNumber | 0;

            if (aEndLineNumber === bEndLineNumber) {
              var aEndColumn = a.endColumn | 0;
              var bEndColumn = b.endColumn | 0;
              return aEndColumn - bEndColumn;
            }

            return aEndLineNumber - bEndLineNumber;
          }

          return aStartColumn - bStartColumn;
        }

        return aStartLineNumber - bStartLineNumber;
      }

      var aExists = a ? 1 : 0;
      var bExists = b ? 1 : 0;
      return aExists - bExists;
    }
    /**
     * A function that compares ranges, useful for sorting ranges
     * It will first compare ranges on the endPosition and then on the startPosition
     */

  }, {
    key: "compareRangesUsingEnds",
    value: function compareRangesUsingEnds(a, b) {
      if (a.endLineNumber === b.endLineNumber) {
        if (a.endColumn === b.endColumn) {
          if (a.startLineNumber === b.startLineNumber) {
            return a.startColumn - b.startColumn;
          }

          return a.startLineNumber - b.startLineNumber;
        }

        return a.endColumn - b.endColumn;
      }

      return a.endLineNumber - b.endLineNumber;
    }
    /**
     * Test if the range spans multiple lines.
     */

  }, {
    key: "spansMultipleLines",
    value: function spansMultipleLines(range) {
      return range.endLineNumber > range.startLineNumber;
    }
  }]);

  return Range;
}();
// CONCATENATED MODULE: ./node_modules/monaco-editor/esm/vs/editor/common/diff/diffComputer.js



/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


var MINIMUM_MATCHING_CHARACTER_LENGTH = 3;

function _computeDiff(originalSequence, modifiedSequence, continueProcessingPredicate, pretty) {
  var diffAlgo = new diff_LcsDiff(originalSequence, modifiedSequence, continueProcessingPredicate);
  return diffAlgo.ComputeDiff(pretty);
}

var diffComputer_LineSequence = /*#__PURE__*/function () {
  function LineSequence(lines) {
    _classCallCheck(this, LineSequence);

    var startColumns = [];
    var endColumns = [];

    for (var i = 0, length = lines.length; i < length; i++) {
      startColumns[i] = getFirstNonBlankColumn(lines[i], 1);
      endColumns[i] = getLastNonBlankColumn(lines[i], 1);
    }

    this.lines = lines;
    this._startColumns = startColumns;
    this._endColumns = endColumns;
  }

  _createClass(LineSequence, [{
    key: "getElements",
    value: function getElements() {
      var elements = [];

      for (var i = 0, len = this.lines.length; i < len; i++) {
        elements[i] = this.lines[i].substring(this._startColumns[i] - 1, this._endColumns[i] - 1);
      }

      return elements;
    }
  }, {
    key: "getStartLineNumber",
    value: function getStartLineNumber(i) {
      return i + 1;
    }
  }, {
    key: "getEndLineNumber",
    value: function getEndLineNumber(i) {
      return i + 1;
    }
  }, {
    key: "createCharSequence",
    value: function createCharSequence(shouldIgnoreTrimWhitespace, startIndex, endIndex) {
      var charCodes = [];
      var lineNumbers = [];
      var columns = [];
      var len = 0;

      for (var index = startIndex; index <= endIndex; index++) {
        var lineContent = this.lines[index];
        var startColumn = shouldIgnoreTrimWhitespace ? this._startColumns[index] : 1;
        var endColumn = shouldIgnoreTrimWhitespace ? this._endColumns[index] : lineContent.length + 1;

        for (var col = startColumn; col < endColumn; col++) {
          charCodes[len] = lineContent.charCodeAt(col - 1);
          lineNumbers[len] = index + 1;
          columns[len] = col;
          len++;
        }
      }

      return new diffComputer_CharSequence(charCodes, lineNumbers, columns);
    }
  }]);

  return LineSequence;
}();

var diffComputer_CharSequence = /*#__PURE__*/function () {
  function CharSequence(charCodes, lineNumbers, columns) {
    _classCallCheck(this, CharSequence);

    this._charCodes = charCodes;
    this._lineNumbers = lineNumbers;
    this._columns = columns;
  }

  _createClass(CharSequence, [{
    key: "getElements",
    value: function getElements() {
      return this._charCodes;
    }
  }, {
    key: "getStartLineNumber",
    value: function getStartLineNumber(i) {
      return this._lineNumbers[i];
    }
  }, {
    key: "getStartColumn",
    value: function getStartColumn(i) {
      return this._columns[i];
    }
  }, {
    key: "getEndLineNumber",
    value: function getEndLineNumber(i) {
      return this._lineNumbers[i];
    }
  }, {
    key: "getEndColumn",
    value: function getEndColumn(i) {
      return this._columns[i] + 1;
    }
  }]);

  return CharSequence;
}();

var diffComputer_CharChange = /*#__PURE__*/function () {
  function CharChange(originalStartLineNumber, originalStartColumn, originalEndLineNumber, originalEndColumn, modifiedStartLineNumber, modifiedStartColumn, modifiedEndLineNumber, modifiedEndColumn) {
    _classCallCheck(this, CharChange);

    this.originalStartLineNumber = originalStartLineNumber;
    this.originalStartColumn = originalStartColumn;
    this.originalEndLineNumber = originalEndLineNumber;
    this.originalEndColumn = originalEndColumn;
    this.modifiedStartLineNumber = modifiedStartLineNumber;
    this.modifiedStartColumn = modifiedStartColumn;
    this.modifiedEndLineNumber = modifiedEndLineNumber;
    this.modifiedEndColumn = modifiedEndColumn;
  }

  _createClass(CharChange, null, [{
    key: "createFromDiffChange",
    value: function createFromDiffChange(diffChange, originalCharSequence, modifiedCharSequence) {
      var originalStartLineNumber;
      var originalStartColumn;
      var originalEndLineNumber;
      var originalEndColumn;
      var modifiedStartLineNumber;
      var modifiedStartColumn;
      var modifiedEndLineNumber;
      var modifiedEndColumn;

      if (diffChange.originalLength === 0) {
        originalStartLineNumber = 0;
        originalStartColumn = 0;
        originalEndLineNumber = 0;
        originalEndColumn = 0;
      } else {
        originalStartLineNumber = originalCharSequence.getStartLineNumber(diffChange.originalStart);
        originalStartColumn = originalCharSequence.getStartColumn(diffChange.originalStart);
        originalEndLineNumber = originalCharSequence.getEndLineNumber(diffChange.originalStart + diffChange.originalLength - 1);
        originalEndColumn = originalCharSequence.getEndColumn(diffChange.originalStart + diffChange.originalLength - 1);
      }

      if (diffChange.modifiedLength === 0) {
        modifiedStartLineNumber = 0;
        modifiedStartColumn = 0;
        modifiedEndLineNumber = 0;
        modifiedEndColumn = 0;
      } else {
        modifiedStartLineNumber = modifiedCharSequence.getStartLineNumber(diffChange.modifiedStart);
        modifiedStartColumn = modifiedCharSequence.getStartColumn(diffChange.modifiedStart);
        modifiedEndLineNumber = modifiedCharSequence.getEndLineNumber(diffChange.modifiedStart + diffChange.modifiedLength - 1);
        modifiedEndColumn = modifiedCharSequence.getEndColumn(diffChange.modifiedStart + diffChange.modifiedLength - 1);
      }

      return new CharChange(originalStartLineNumber, originalStartColumn, originalEndLineNumber, originalEndColumn, modifiedStartLineNumber, modifiedStartColumn, modifiedEndLineNumber, modifiedEndColumn);
    }
  }]);

  return CharChange;
}();

function postProcessCharChanges(rawChanges) {
  if (rawChanges.length <= 1) {
    return rawChanges;
  }

  var result = [rawChanges[0]];
  var prevChange = result[0];

  for (var i = 1, len = rawChanges.length; i < len; i++) {
    var currChange = rawChanges[i];
    var originalMatchingLength = currChange.originalStart - (prevChange.originalStart + prevChange.originalLength);
    var modifiedMatchingLength = currChange.modifiedStart - (prevChange.modifiedStart + prevChange.modifiedLength); // Both of the above should be equal, but the continueProcessingPredicate may prevent this from being true

    var matchingLength = Math.min(originalMatchingLength, modifiedMatchingLength);

    if (matchingLength < MINIMUM_MATCHING_CHARACTER_LENGTH) {
      // Merge the current change into the previous one
      prevChange.originalLength = currChange.originalStart + currChange.originalLength - prevChange.originalStart;
      prevChange.modifiedLength = currChange.modifiedStart + currChange.modifiedLength - prevChange.modifiedStart;
    } else {
      // Add the current change
      result.push(currChange);
      prevChange = currChange;
    }
  }

  return result;
}

var diffComputer_LineChange = /*#__PURE__*/function () {
  function LineChange(originalStartLineNumber, originalEndLineNumber, modifiedStartLineNumber, modifiedEndLineNumber, charChanges) {
    _classCallCheck(this, LineChange);

    this.originalStartLineNumber = originalStartLineNumber;
    this.originalEndLineNumber = originalEndLineNumber;
    this.modifiedStartLineNumber = modifiedStartLineNumber;
    this.modifiedEndLineNumber = modifiedEndLineNumber;
    this.charChanges = charChanges;
  }

  _createClass(LineChange, null, [{
    key: "createFromDiffResult",
    value: function createFromDiffResult(shouldIgnoreTrimWhitespace, diffChange, originalLineSequence, modifiedLineSequence, continueCharDiff, shouldComputeCharChanges, shouldPostProcessCharChanges) {
      var originalStartLineNumber;
      var originalEndLineNumber;
      var modifiedStartLineNumber;
      var modifiedEndLineNumber;
      var charChanges = undefined;

      if (diffChange.originalLength === 0) {
        originalStartLineNumber = originalLineSequence.getStartLineNumber(diffChange.originalStart) - 1;
        originalEndLineNumber = 0;
      } else {
        originalStartLineNumber = originalLineSequence.getStartLineNumber(diffChange.originalStart);
        originalEndLineNumber = originalLineSequence.getEndLineNumber(diffChange.originalStart + diffChange.originalLength - 1);
      }

      if (diffChange.modifiedLength === 0) {
        modifiedStartLineNumber = modifiedLineSequence.getStartLineNumber(diffChange.modifiedStart) - 1;
        modifiedEndLineNumber = 0;
      } else {
        modifiedStartLineNumber = modifiedLineSequence.getStartLineNumber(diffChange.modifiedStart);
        modifiedEndLineNumber = modifiedLineSequence.getEndLineNumber(diffChange.modifiedStart + diffChange.modifiedLength - 1);
      }

      if (shouldComputeCharChanges && diffChange.originalLength > 0 && diffChange.originalLength < 20 && diffChange.modifiedLength > 0 && diffChange.modifiedLength < 20 && continueCharDiff()) {
        // Compute character changes for diff chunks of at most 20 lines...
        var originalCharSequence = originalLineSequence.createCharSequence(shouldIgnoreTrimWhitespace, diffChange.originalStart, diffChange.originalStart + diffChange.originalLength - 1);
        var modifiedCharSequence = modifiedLineSequence.createCharSequence(shouldIgnoreTrimWhitespace, diffChange.modifiedStart, diffChange.modifiedStart + diffChange.modifiedLength - 1);

        var rawChanges = _computeDiff(originalCharSequence, modifiedCharSequence, continueCharDiff, true).changes;

        if (shouldPostProcessCharChanges) {
          rawChanges = postProcessCharChanges(rawChanges);
        }

        charChanges = [];

        for (var i = 0, length = rawChanges.length; i < length; i++) {
          charChanges.push(diffComputer_CharChange.createFromDiffChange(rawChanges[i], originalCharSequence, modifiedCharSequence));
        }
      }

      return new LineChange(originalStartLineNumber, originalEndLineNumber, modifiedStartLineNumber, modifiedEndLineNumber, charChanges);
    }
  }]);

  return LineChange;
}();

var diffComputer_DiffComputer = /*#__PURE__*/function () {
  function DiffComputer(originalLines, modifiedLines, opts) {
    _classCallCheck(this, DiffComputer);

    this.shouldComputeCharChanges = opts.shouldComputeCharChanges;
    this.shouldPostProcessCharChanges = opts.shouldPostProcessCharChanges;
    this.shouldIgnoreTrimWhitespace = opts.shouldIgnoreTrimWhitespace;
    this.shouldMakePrettyDiff = opts.shouldMakePrettyDiff;
    this.originalLines = originalLines;
    this.modifiedLines = modifiedLines;
    this.original = new diffComputer_LineSequence(originalLines);
    this.modified = new diffComputer_LineSequence(modifiedLines);
    this.continueLineDiff = createContinueProcessingPredicate(opts.maxComputationTime);
    this.continueCharDiff = createContinueProcessingPredicate(opts.maxComputationTime === 0 ? 0 : Math.min(opts.maxComputationTime, 5000)); // never run after 5s for character changes...
  }

  _createClass(DiffComputer, [{
    key: "computeDiff",
    value: function computeDiff() {
      if (this.original.lines.length === 1 && this.original.lines[0].length === 0) {
        // empty original => fast path
        return {
          quitEarly: false,
          changes: [{
            originalStartLineNumber: 1,
            originalEndLineNumber: 1,
            modifiedStartLineNumber: 1,
            modifiedEndLineNumber: this.modified.lines.length,
            charChanges: [{
              modifiedEndColumn: 0,
              modifiedEndLineNumber: 0,
              modifiedStartColumn: 0,
              modifiedStartLineNumber: 0,
              originalEndColumn: 0,
              originalEndLineNumber: 0,
              originalStartColumn: 0,
              originalStartLineNumber: 0
            }]
          }]
        };
      }

      if (this.modified.lines.length === 1 && this.modified.lines[0].length === 0) {
        // empty modified => fast path
        return {
          quitEarly: false,
          changes: [{
            originalStartLineNumber: 1,
            originalEndLineNumber: this.original.lines.length,
            modifiedStartLineNumber: 1,
            modifiedEndLineNumber: 1,
            charChanges: [{
              modifiedEndColumn: 0,
              modifiedEndLineNumber: 0,
              modifiedStartColumn: 0,
              modifiedStartLineNumber: 0,
              originalEndColumn: 0,
              originalEndLineNumber: 0,
              originalStartColumn: 0,
              originalStartLineNumber: 0
            }]
          }]
        };
      }

      var diffResult = _computeDiff(this.original, this.modified, this.continueLineDiff, this.shouldMakePrettyDiff);

      var rawChanges = diffResult.changes;
      var quitEarly = diffResult.quitEarly; // The diff is always computed with ignoring trim whitespace
      // This ensures we get the prettiest diff

      if (this.shouldIgnoreTrimWhitespace) {
        var lineChanges = [];

        for (var i = 0, length = rawChanges.length; i < length; i++) {
          lineChanges.push(diffComputer_LineChange.createFromDiffResult(this.shouldIgnoreTrimWhitespace, rawChanges[i], this.original, this.modified, this.continueCharDiff, this.shouldComputeCharChanges, this.shouldPostProcessCharChanges));
        }

        return {
          quitEarly: quitEarly,
          changes: lineChanges
        };
      } // Need to post-process and introduce changes where the trim whitespace is different
      // Note that we are looping starting at -1 to also cover the lines before the first change


      var result = [];
      var originalLineIndex = 0;
      var modifiedLineIndex = 0;

      for (var _i = -1
      /* !!!! */
      , len = rawChanges.length; _i < len; _i++) {
        var nextChange = _i + 1 < len ? rawChanges[_i + 1] : null;
        var originalStop = nextChange ? nextChange.originalStart : this.originalLines.length;
        var modifiedStop = nextChange ? nextChange.modifiedStart : this.modifiedLines.length;

        while (originalLineIndex < originalStop && modifiedLineIndex < modifiedStop) {
          var originalLine = this.originalLines[originalLineIndex];
          var modifiedLine = this.modifiedLines[modifiedLineIndex];

          if (originalLine !== modifiedLine) {
            // These lines differ only in trim whitespace
            // Check the leading whitespace
            {
              var originalStartColumn = getFirstNonBlankColumn(originalLine, 1);
              var modifiedStartColumn = getFirstNonBlankColumn(modifiedLine, 1);

              while (originalStartColumn > 1 && modifiedStartColumn > 1) {
                var originalChar = originalLine.charCodeAt(originalStartColumn - 2);
                var modifiedChar = modifiedLine.charCodeAt(modifiedStartColumn - 2);

                if (originalChar !== modifiedChar) {
                  break;
                }

                originalStartColumn--;
                modifiedStartColumn--;
              }

              if (originalStartColumn > 1 || modifiedStartColumn > 1) {
                this._pushTrimWhitespaceCharChange(result, originalLineIndex + 1, 1, originalStartColumn, modifiedLineIndex + 1, 1, modifiedStartColumn);
              }
            } // Check the trailing whitespace

            {
              var originalEndColumn = getLastNonBlankColumn(originalLine, 1);
              var modifiedEndColumn = getLastNonBlankColumn(modifiedLine, 1);
              var originalMaxColumn = originalLine.length + 1;
              var modifiedMaxColumn = modifiedLine.length + 1;

              while (originalEndColumn < originalMaxColumn && modifiedEndColumn < modifiedMaxColumn) {
                var _originalChar = originalLine.charCodeAt(originalEndColumn - 1);

                var _modifiedChar = originalLine.charCodeAt(modifiedEndColumn - 1);

                if (_originalChar !== _modifiedChar) {
                  break;
                }

                originalEndColumn++;
                modifiedEndColumn++;
              }

              if (originalEndColumn < originalMaxColumn || modifiedEndColumn < modifiedMaxColumn) {
                this._pushTrimWhitespaceCharChange(result, originalLineIndex + 1, originalEndColumn, originalMaxColumn, modifiedLineIndex + 1, modifiedEndColumn, modifiedMaxColumn);
              }
            }
          }

          originalLineIndex++;
          modifiedLineIndex++;
        }

        if (nextChange) {
          // Emit the actual change
          result.push(diffComputer_LineChange.createFromDiffResult(this.shouldIgnoreTrimWhitespace, nextChange, this.original, this.modified, this.continueCharDiff, this.shouldComputeCharChanges, this.shouldPostProcessCharChanges));
          originalLineIndex += nextChange.originalLength;
          modifiedLineIndex += nextChange.modifiedLength;
        }
      }

      return {
        quitEarly: quitEarly,
        changes: result
      };
    }
  }, {
    key: "_pushTrimWhitespaceCharChange",
    value: function _pushTrimWhitespaceCharChange(result, originalLineNumber, originalStartColumn, originalEndColumn, modifiedLineNumber, modifiedStartColumn, modifiedEndColumn) {
      if (this._mergeTrimWhitespaceCharChange(result, originalLineNumber, originalStartColumn, originalEndColumn, modifiedLineNumber, modifiedStartColumn, modifiedEndColumn)) {
        // Merged into previous
        return;
      }

      var charChanges = undefined;

      if (this.shouldComputeCharChanges) {
        charChanges = [new diffComputer_CharChange(originalLineNumber, originalStartColumn, originalLineNumber, originalEndColumn, modifiedLineNumber, modifiedStartColumn, modifiedLineNumber, modifiedEndColumn)];
      }

      result.push(new diffComputer_LineChange(originalLineNumber, originalLineNumber, modifiedLineNumber, modifiedLineNumber, charChanges));
    }
  }, {
    key: "_mergeTrimWhitespaceCharChange",
    value: function _mergeTrimWhitespaceCharChange(result, originalLineNumber, originalStartColumn, originalEndColumn, modifiedLineNumber, modifiedStartColumn, modifiedEndColumn) {
      var len = result.length;

      if (len === 0) {
        return false;
      }

      var prevChange = result[len - 1];

      if (prevChange.originalEndLineNumber === 0 || prevChange.modifiedEndLineNumber === 0) {
        // Don't merge with inserts/deletes
        return false;
      }

      if (prevChange.originalEndLineNumber + 1 === originalLineNumber && prevChange.modifiedEndLineNumber + 1 === modifiedLineNumber) {
        prevChange.originalEndLineNumber = originalLineNumber;
        prevChange.modifiedEndLineNumber = modifiedLineNumber;

        if (this.shouldComputeCharChanges && prevChange.charChanges) {
          prevChange.charChanges.push(new diffComputer_CharChange(originalLineNumber, originalStartColumn, originalLineNumber, originalEndColumn, modifiedLineNumber, modifiedStartColumn, modifiedLineNumber, modifiedEndColumn));
        }

        return true;
      }

      return false;
    }
  }]);

  return DiffComputer;
}();

function getFirstNonBlankColumn(txt, defaultValue) {
  var r = firstNonWhitespaceIndex(txt);

  if (r === -1) {
    return defaultValue;
  }

  return r + 1;
}

function getLastNonBlankColumn(txt, defaultValue) {
  var r = lastNonWhitespaceIndex(txt);

  if (r === -1) {
    return defaultValue;
  }

  return r + 2;
}

function createContinueProcessingPredicate(maximumRuntime) {
  if (maximumRuntime === 0) {
    return function () {
      return true;
    };
  }

  var startTime = Date.now();
  return function () {
    return Date.now() - startTime < maximumRuntime;
  };
}
// CONCATENATED MODULE: ./node_modules/monaco-editor/esm/vs/base/common/uint.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
function toUint8(v) {
  if (v < 0) {
    return 0;
  }

  if (v > 255
  /* MAX_UINT_8 */
  ) {
      return 255
      /* MAX_UINT_8 */
      ;
    }

  return v | 0;
}
function toUint32(v) {
  if (v < 0) {
    return 0;
  }

  if (v > 4294967295
  /* MAX_UINT_32 */
  ) {
      return 4294967295
      /* MAX_UINT_32 */
      ;
    }

  return v | 0;
}
// CONCATENATED MODULE: ./node_modules/monaco-editor/esm/vs/editor/common/viewModel/prefixSumComputer.js



/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

var prefixSumComputer_PrefixSumIndexOfResult = function PrefixSumIndexOfResult(index, remainder) {
  _classCallCheck(this, PrefixSumIndexOfResult);

  this.index = index;
  this.remainder = remainder;
};
var prefixSumComputer_PrefixSumComputer = /*#__PURE__*/function () {
  function PrefixSumComputer(values) {
    _classCallCheck(this, PrefixSumComputer);

    this.values = values;
    this.prefixSum = new Uint32Array(values.length);
    this.prefixSumValidIndex = new Int32Array(1);
    this.prefixSumValidIndex[0] = -1;
  }

  _createClass(PrefixSumComputer, [{
    key: "insertValues",
    value: function insertValues(insertIndex, _insertValues) {
      insertIndex = toUint32(insertIndex);
      var oldValues = this.values;
      var oldPrefixSum = this.prefixSum;
      var insertValuesLen = _insertValues.length;

      if (insertValuesLen === 0) {
        return false;
      }

      this.values = new Uint32Array(oldValues.length + insertValuesLen);
      this.values.set(oldValues.subarray(0, insertIndex), 0);
      this.values.set(oldValues.subarray(insertIndex), insertIndex + insertValuesLen);
      this.values.set(_insertValues, insertIndex);

      if (insertIndex - 1 < this.prefixSumValidIndex[0]) {
        this.prefixSumValidIndex[0] = insertIndex - 1;
      }

      this.prefixSum = new Uint32Array(this.values.length);

      if (this.prefixSumValidIndex[0] >= 0) {
        this.prefixSum.set(oldPrefixSum.subarray(0, this.prefixSumValidIndex[0] + 1));
      }

      return true;
    }
  }, {
    key: "changeValue",
    value: function changeValue(index, value) {
      index = toUint32(index);
      value = toUint32(value);

      if (this.values[index] === value) {
        return false;
      }

      this.values[index] = value;

      if (index - 1 < this.prefixSumValidIndex[0]) {
        this.prefixSumValidIndex[0] = index - 1;
      }

      return true;
    }
  }, {
    key: "removeValues",
    value: function removeValues(startIndex, cnt) {
      startIndex = toUint32(startIndex);
      cnt = toUint32(cnt);
      var oldValues = this.values;
      var oldPrefixSum = this.prefixSum;

      if (startIndex >= oldValues.length) {
        return false;
      }

      var maxCnt = oldValues.length - startIndex;

      if (cnt >= maxCnt) {
        cnt = maxCnt;
      }

      if (cnt === 0) {
        return false;
      }

      this.values = new Uint32Array(oldValues.length - cnt);
      this.values.set(oldValues.subarray(0, startIndex), 0);
      this.values.set(oldValues.subarray(startIndex + cnt), startIndex);
      this.prefixSum = new Uint32Array(this.values.length);

      if (startIndex - 1 < this.prefixSumValidIndex[0]) {
        this.prefixSumValidIndex[0] = startIndex - 1;
      }

      if (this.prefixSumValidIndex[0] >= 0) {
        this.prefixSum.set(oldPrefixSum.subarray(0, this.prefixSumValidIndex[0] + 1));
      }

      return true;
    }
  }, {
    key: "getTotalValue",
    value: function getTotalValue() {
      if (this.values.length === 0) {
        return 0;
      }

      return this._getAccumulatedValue(this.values.length - 1);
    }
  }, {
    key: "getAccumulatedValue",
    value: function getAccumulatedValue(index) {
      if (index < 0) {
        return 0;
      }

      index = toUint32(index);
      return this._getAccumulatedValue(index);
    }
  }, {
    key: "_getAccumulatedValue",
    value: function _getAccumulatedValue(index) {
      if (index <= this.prefixSumValidIndex[0]) {
        return this.prefixSum[index];
      }

      var startIndex = this.prefixSumValidIndex[0] + 1;

      if (startIndex === 0) {
        this.prefixSum[0] = this.values[0];
        startIndex++;
      }

      if (index >= this.values.length) {
        index = this.values.length - 1;
      }

      for (var i = startIndex; i <= index; i++) {
        this.prefixSum[i] = this.prefixSum[i - 1] + this.values[i];
      }

      this.prefixSumValidIndex[0] = Math.max(this.prefixSumValidIndex[0], index);
      return this.prefixSum[index];
    }
  }, {
    key: "getIndexOf",
    value: function getIndexOf(accumulatedValue) {
      accumulatedValue = Math.floor(accumulatedValue); //@perf
      // Compute all sums (to get a fully valid prefixSum)

      this.getTotalValue();
      var low = 0;
      var high = this.values.length - 1;
      var mid = 0;
      var midStop = 0;
      var midStart = 0;

      while (low <= high) {
        mid = low + (high - low) / 2 | 0;
        midStop = this.prefixSum[mid];
        midStart = midStop - this.values[mid];

        if (accumulatedValue < midStart) {
          high = mid - 1;
        } else if (accumulatedValue >= midStop) {
          low = mid + 1;
        } else {
          break;
        }
      }

      return new prefixSumComputer_PrefixSumIndexOfResult(mid, accumulatedValue - midStart);
    }
  }]);

  return PrefixSumComputer;
}();
// CONCATENATED MODULE: ./node_modules/monaco-editor/esm/vs/editor/common/model/mirrorTextModel.js



function mirrorTextModel_createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = mirrorTextModel_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function mirrorTextModel_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return mirrorTextModel_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return mirrorTextModel_arrayLikeToArray(o, minLen); }

function mirrorTextModel_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


var mirrorTextModel_MirrorTextModel = /*#__PURE__*/function () {
  function MirrorTextModel(uri, lines, eol, versionId) {
    _classCallCheck(this, MirrorTextModel);

    this._uri = uri;
    this._lines = lines;
    this._eol = eol;
    this._versionId = versionId;
    this._lineStarts = null;
    this._cachedTextValue = null;
  }

  _createClass(MirrorTextModel, [{
    key: "dispose",
    value: function dispose() {
      this._lines.length = 0;
    }
  }, {
    key: "getText",
    value: function getText() {
      if (this._cachedTextValue === null) {
        this._cachedTextValue = this._lines.join(this._eol);
      }

      return this._cachedTextValue;
    }
  }, {
    key: "onEvents",
    value: function onEvents(e) {
      if (e.eol && e.eol !== this._eol) {
        this._eol = e.eol;
        this._lineStarts = null;
      } // Update my lines


      var changes = e.changes;

      var _iterator = mirrorTextModel_createForOfIteratorHelper(changes),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var change = _step.value;

          this._acceptDeleteRange(change.range);

          this._acceptInsertText(new position_Position(change.range.startLineNumber, change.range.startColumn), change.text);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      this._versionId = e.versionId;
      this._cachedTextValue = null;
    }
  }, {
    key: "_ensureLineStarts",
    value: function _ensureLineStarts() {
      if (!this._lineStarts) {
        var eolLength = this._eol.length;
        var linesLength = this._lines.length;
        var lineStartValues = new Uint32Array(linesLength);

        for (var i = 0; i < linesLength; i++) {
          lineStartValues[i] = this._lines[i].length + eolLength;
        }

        this._lineStarts = new prefixSumComputer_PrefixSumComputer(lineStartValues);
      }
    }
    /**
     * All changes to a line's text go through this method
     */

  }, {
    key: "_setLineText",
    value: function _setLineText(lineIndex, newValue) {
      this._lines[lineIndex] = newValue;

      if (this._lineStarts) {
        // update prefix sum
        this._lineStarts.changeValue(lineIndex, this._lines[lineIndex].length + this._eol.length);
      }
    }
  }, {
    key: "_acceptDeleteRange",
    value: function _acceptDeleteRange(range) {
      if (range.startLineNumber === range.endLineNumber) {
        if (range.startColumn === range.endColumn) {
          // Nothing to delete
          return;
        } // Delete text on the affected line


        this._setLineText(range.startLineNumber - 1, this._lines[range.startLineNumber - 1].substring(0, range.startColumn - 1) + this._lines[range.startLineNumber - 1].substring(range.endColumn - 1));

        return;
      } // Take remaining text on last line and append it to remaining text on first line


      this._setLineText(range.startLineNumber - 1, this._lines[range.startLineNumber - 1].substring(0, range.startColumn - 1) + this._lines[range.endLineNumber - 1].substring(range.endColumn - 1)); // Delete middle lines


      this._lines.splice(range.startLineNumber, range.endLineNumber - range.startLineNumber);

      if (this._lineStarts) {
        // update prefix sum
        this._lineStarts.removeValues(range.startLineNumber, range.endLineNumber - range.startLineNumber);
      }
    }
  }, {
    key: "_acceptInsertText",
    value: function _acceptInsertText(position, insertText) {
      if (insertText.length === 0) {
        // Nothing to insert
        return;
      }

      var insertLines = insertText.split(/\r\n|\r|\n/);

      if (insertLines.length === 1) {
        // Inserting text on one line
        this._setLineText(position.lineNumber - 1, this._lines[position.lineNumber - 1].substring(0, position.column - 1) + insertLines[0] + this._lines[position.lineNumber - 1].substring(position.column - 1));

        return;
      } // Append overflowing text from first line to the end of text to insert


      insertLines[insertLines.length - 1] += this._lines[position.lineNumber - 1].substring(position.column - 1); // Delete overflowing text from first line and insert text on first line

      this._setLineText(position.lineNumber - 1, this._lines[position.lineNumber - 1].substring(0, position.column - 1) + insertLines[0]); // Insert new lines & store lengths


      var newLengths = new Uint32Array(insertLines.length - 1);

      for (var i = 1; i < insertLines.length; i++) {
        this._lines.splice(position.lineNumber + i - 1, 0, insertLines[i]);

        newLengths[i - 1] = insertLines[i].length + this._eol.length;
      }

      if (this._lineStarts) {
        // update prefix sum
        this._lineStarts.insertValues(position.lineNumber, newLengths);
      }
    }
  }]);

  return MirrorTextModel;
}();
// CONCATENATED MODULE: ./node_modules/monaco-editor/esm/vs/editor/common/model/wordHelper.js
function wordHelper_createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = wordHelper_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function wordHelper_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return wordHelper_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return wordHelper_arrayLikeToArray(o, minLen); }

function wordHelper_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var USUAL_WORD_SEPARATORS = '`~!@#$%^&*()-=+[{]}\\|;:\'",.<>/?';
/**
 * Create a word definition regular expression based on default word separators.
 * Optionally provide allowed separators that should be included in words.
 *
 * The default would look like this:
 * /(-?\d*\.\d\w*)|([^\`\~\!\@\#\$\%\^\&\*\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g
 */

function createWordRegExp() {
  var allowInWords = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var source = '(-?\\d*\\.\\d\\w*)|([^';

  var _iterator = wordHelper_createForOfIteratorHelper(USUAL_WORD_SEPARATORS),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var sep = _step.value;

      if (allowInWords.indexOf(sep) >= 0) {
        continue;
      }

      source += '\\' + sep;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  source += '\\s]+)';
  return new RegExp(source, 'g');
} // catches numbers (including floating numbers) in the first group, and alphanum in the second


var DEFAULT_WORD_REGEXP = createWordRegExp();
function ensureValidWordDefinition(wordDefinition) {
  var result = DEFAULT_WORD_REGEXP;

  if (wordDefinition && wordDefinition instanceof RegExp) {
    if (!wordDefinition.global) {
      var flags = 'g';

      if (wordDefinition.ignoreCase) {
        flags += 'i';
      }

      if (wordDefinition.multiline) {
        flags += 'm';
      }

      if (wordDefinition.unicode) {
        flags += 'u';
      }

      result = new RegExp(wordDefinition.source, flags);
    } else {
      result = wordDefinition;
    }
  }

  result.lastIndex = 0;
  return result;
}
var _defaultConfig = {
  maxLen: 1000,
  windowSize: 15,
  timeBudget: 150
};
function getWordAtText(column, wordDefinition, text, textOffset) {
  var config = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : _defaultConfig;

  if (text.length > config.maxLen) {
    // don't throw strings that long at the regexp
    // but use a sub-string in which a word must occur
    var start = column - config.maxLen / 2;

    if (start < 0) {
      textOffset += column;
      start = 0;
    } else {
      textOffset += start;
    }

    text = text.substring(start, column + config.maxLen / 2);
    return getWordAtText(column, wordDefinition, text, textOffset, config);
  }

  var t1 = Date.now();
  var pos = column - 1 - textOffset;
  var prevRegexIndex = -1;
  var match = null;

  for (var i = 1;; i++) {
    // check time budget
    if (Date.now() - t1 >= config.timeBudget) {// break;
    } // reset the index at which the regexp should start matching, also know where it
    // should stop so that subsequent search don't repeat previous searches


    var regexIndex = pos - config.windowSize * i;
    wordDefinition.lastIndex = Math.max(0, regexIndex);

    var thisMatch = _findRegexMatchEnclosingPosition(wordDefinition, text, pos, prevRegexIndex);

    if (!thisMatch && match) {
      // stop: we have something
      break;
    }

    match = thisMatch; // stop: searched at start

    if (regexIndex <= 0) {
      break;
    }

    prevRegexIndex = regexIndex;
  }

  if (match) {
    var result = {
      word: match[0],
      startColumn: textOffset + 1 + match.index,
      endColumn: textOffset + 1 + match.index + match[0].length
    };
    wordDefinition.lastIndex = 0;
    return result;
  }

  return null;
}

function _findRegexMatchEnclosingPosition(wordDefinition, text, pos, stopPos) {
  var match;

  while (match = wordDefinition.exec(text)) {
    var matchIndex = match.index || 0;

    if (matchIndex <= pos && wordDefinition.lastIndex >= pos) {
      return match;
    } else if (stopPos > 0 && matchIndex > stopPos) {
      return null;
    }
  }

  return null;
}
// CONCATENATED MODULE: ./node_modules/monaco-editor/esm/vs/editor/common/core/characterClassifier.js



/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/**
 * A fast character classifier that uses a compact array for ASCII values.
 */

var characterClassifier_CharacterClassifier = /*#__PURE__*/function () {
  function CharacterClassifier(_defaultValue) {
    _classCallCheck(this, CharacterClassifier);

    var defaultValue = toUint8(_defaultValue);
    this._defaultValue = defaultValue;
    this._asciiMap = CharacterClassifier._createAsciiMap(defaultValue);
    this._map = new Map();
  }

  _createClass(CharacterClassifier, [{
    key: "set",
    value: function set(charCode, _value) {
      var value = toUint8(_value);

      if (charCode >= 0 && charCode < 256) {
        this._asciiMap[charCode] = value;
      } else {
        this._map.set(charCode, value);
      }
    }
  }, {
    key: "get",
    value: function get(charCode) {
      if (charCode >= 0 && charCode < 256) {
        return this._asciiMap[charCode];
      } else {
        return this._map.get(charCode) || this._defaultValue;
      }
    }
  }], [{
    key: "_createAsciiMap",
    value: function _createAsciiMap(defaultValue) {
      var asciiMap = new Uint8Array(256);

      for (var i = 0; i < 256; i++) {
        asciiMap[i] = defaultValue;
      }

      return asciiMap;
    }
  }]);

  return CharacterClassifier;
}();
var characterClassifier_CharacterSet = /*#__PURE__*/function () {
  function CharacterSet() {
    _classCallCheck(this, CharacterSet);

    this._actual = new characterClassifier_CharacterClassifier(0
    /* False */
    );
  }

  _createClass(CharacterSet, [{
    key: "add",
    value: function add(charCode) {
      this._actual.set(charCode, 1
      /* True */
      );
    }
  }, {
    key: "has",
    value: function has(charCode) {
      return this._actual.get(charCode) === 1
      /* True */
      ;
    }
  }]);

  return CharacterSet;
}();
// CONCATENATED MODULE: ./node_modules/monaco-editor/esm/vs/editor/common/modes/linkComputer.js




/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

var linkComputer_Uint8Matrix = /*#__PURE__*/function () {
  function Uint8Matrix(rows, cols, defaultValue) {
    _classCallCheck(this, Uint8Matrix);

    var data = new Uint8Array(rows * cols);

    for (var i = 0, len = rows * cols; i < len; i++) {
      data[i] = defaultValue;
    }

    this._data = data;
    this.rows = rows;
    this.cols = cols;
  }

  _createClass(Uint8Matrix, [{
    key: "get",
    value: function get(row, col) {
      return this._data[row * this.cols + col];
    }
  }, {
    key: "set",
    value: function set(row, col, value) {
      this._data[row * this.cols + col] = value;
    }
  }]);

  return Uint8Matrix;
}();
var linkComputer_StateMachine = /*#__PURE__*/function () {
  function StateMachine(edges) {
    _classCallCheck(this, StateMachine);

    var maxCharCode = 0;
    var maxState = 0
    /* Invalid */
    ;

    for (var i = 0, len = edges.length; i < len; i++) {
      var _edges$i = _slicedToArray(edges[i], 3),
          from = _edges$i[0],
          chCode = _edges$i[1],
          to = _edges$i[2];

      if (chCode > maxCharCode) {
        maxCharCode = chCode;
      }

      if (from > maxState) {
        maxState = from;
      }

      if (to > maxState) {
        maxState = to;
      }
    }

    maxCharCode++;
    maxState++;
    var states = new linkComputer_Uint8Matrix(maxState, maxCharCode, 0
    /* Invalid */
    );

    for (var _i = 0, _len = edges.length; _i < _len; _i++) {
      var _edges$_i = _slicedToArray(edges[_i], 3),
          _from = _edges$_i[0],
          _chCode = _edges$_i[1],
          _to = _edges$_i[2];

      states.set(_from, _chCode, _to);
    }

    this._states = states;
    this._maxCharCode = maxCharCode;
  }

  _createClass(StateMachine, [{
    key: "nextState",
    value: function nextState(currentState, chCode) {
      if (chCode < 0 || chCode >= this._maxCharCode) {
        return 0
        /* Invalid */
        ;
      }

      return this._states.get(currentState, chCode);
    }
  }]);

  return StateMachine;
}(); // State machine for http:// or https:// or file://

var _stateMachine = null;

function getStateMachine() {
  if (_stateMachine === null) {
    _stateMachine = new linkComputer_StateMachine([[1
    /* Start */
    , 104
    /* h */
    , 2
    /* H */
    ], [1
    /* Start */
    , 72
    /* H */
    , 2
    /* H */
    ], [1
    /* Start */
    , 102
    /* f */
    , 6
    /* F */
    ], [1
    /* Start */
    , 70
    /* F */
    , 6
    /* F */
    ], [2
    /* H */
    , 116
    /* t */
    , 3
    /* HT */
    ], [2
    /* H */
    , 84
    /* T */
    , 3
    /* HT */
    ], [3
    /* HT */
    , 116
    /* t */
    , 4
    /* HTT */
    ], [3
    /* HT */
    , 84
    /* T */
    , 4
    /* HTT */
    ], [4
    /* HTT */
    , 112
    /* p */
    , 5
    /* HTTP */
    ], [4
    /* HTT */
    , 80
    /* P */
    , 5
    /* HTTP */
    ], [5
    /* HTTP */
    , 115
    /* s */
    , 9
    /* BeforeColon */
    ], [5
    /* HTTP */
    , 83
    /* S */
    , 9
    /* BeforeColon */
    ], [5
    /* HTTP */
    , 58
    /* Colon */
    , 10
    /* AfterColon */
    ], [6
    /* F */
    , 105
    /* i */
    , 7
    /* FI */
    ], [6
    /* F */
    , 73
    /* I */
    , 7
    /* FI */
    ], [7
    /* FI */
    , 108
    /* l */
    , 8
    /* FIL */
    ], [7
    /* FI */
    , 76
    /* L */
    , 8
    /* FIL */
    ], [8
    /* FIL */
    , 101
    /* e */
    , 9
    /* BeforeColon */
    ], [8
    /* FIL */
    , 69
    /* E */
    , 9
    /* BeforeColon */
    ], [9
    /* BeforeColon */
    , 58
    /* Colon */
    , 10
    /* AfterColon */
    ], [10
    /* AfterColon */
    , 47
    /* Slash */
    , 11
    /* AlmostThere */
    ], [11
    /* AlmostThere */
    , 47
    /* Slash */
    , 12
    /* End */
    ]]);
  }

  return _stateMachine;
}

var _classifier = null;

function getClassifier() {
  if (_classifier === null) {
    _classifier = new characterClassifier_CharacterClassifier(0
    /* None */
    );
    var FORCE_TERMINATION_CHARACTERS = ' \t<>\'\"、。｡､，．：；‘“〈《「『【〔（［｛｢｣｝］）〕】』」》〉”’｀～…';

    for (var i = 0; i < FORCE_TERMINATION_CHARACTERS.length; i++) {
      _classifier.set(FORCE_TERMINATION_CHARACTERS.charCodeAt(i), 1
      /* ForceTermination */
      );
    }

    var CANNOT_END_WITH_CHARACTERS = '.,;';

    for (var _i2 = 0; _i2 < CANNOT_END_WITH_CHARACTERS.length; _i2++) {
      _classifier.set(CANNOT_END_WITH_CHARACTERS.charCodeAt(_i2), 2
      /* CannotEndIn */
      );
    }
  }

  return _classifier;
}

var linkComputer_LinkComputer = /*#__PURE__*/function () {
  function LinkComputer() {
    _classCallCheck(this, LinkComputer);
  }

  _createClass(LinkComputer, null, [{
    key: "_createLink",
    value: function _createLink(classifier, line, lineNumber, linkBeginIndex, linkEndIndex) {
      // Do not allow to end link in certain characters...
      var lastIncludedCharIndex = linkEndIndex - 1;

      do {
        var chCode = line.charCodeAt(lastIncludedCharIndex);
        var chClass = classifier.get(chCode);

        if (chClass !== 2
        /* CannotEndIn */
        ) {
            break;
          }

        lastIncludedCharIndex--;
      } while (lastIncludedCharIndex > linkBeginIndex); // Handle links enclosed in parens, square brackets and curlys.


      if (linkBeginIndex > 0) {
        var charCodeBeforeLink = line.charCodeAt(linkBeginIndex - 1);
        var lastCharCodeInLink = line.charCodeAt(lastIncludedCharIndex);

        if (charCodeBeforeLink === 40
        /* OpenParen */
        && lastCharCodeInLink === 41
        /* CloseParen */
        || charCodeBeforeLink === 91
        /* OpenSquareBracket */
        && lastCharCodeInLink === 93
        /* CloseSquareBracket */
        || charCodeBeforeLink === 123
        /* OpenCurlyBrace */
        && lastCharCodeInLink === 125
        /* CloseCurlyBrace */
        ) {
          // Do not end in ) if ( is before the link start
          // Do not end in ] if [ is before the link start
          // Do not end in } if { is before the link start
          lastIncludedCharIndex--;
        }
      }

      return {
        range: {
          startLineNumber: lineNumber,
          startColumn: linkBeginIndex + 1,
          endLineNumber: lineNumber,
          endColumn: lastIncludedCharIndex + 2
        },
        url: line.substring(linkBeginIndex, lastIncludedCharIndex + 1)
      };
    }
  }, {
    key: "computeLinks",
    value: function computeLinks(model) {
      var stateMachine = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : getStateMachine();
      var classifier = getClassifier();
      var result = [];

      for (var i = 1, lineCount = model.getLineCount(); i <= lineCount; i++) {
        var line = model.getLineContent(i);
        var len = line.length;
        var j = 0;
        var linkBeginIndex = 0;
        var linkBeginChCode = 0;
        var state = 1
        /* Start */
        ;
        var hasOpenParens = false;
        var hasOpenSquareBracket = false;
        var inSquareBrackets = false;
        var hasOpenCurlyBracket = false;

        while (j < len) {
          var resetStateMachine = false;
          var chCode = line.charCodeAt(j);

          if (state === 13
          /* Accept */
          ) {
              var chClass = void 0;

              switch (chCode) {
                case 40
                /* OpenParen */
                :
                  hasOpenParens = true;
                  chClass = 0
                  /* None */
                  ;
                  break;

                case 41
                /* CloseParen */
                :
                  chClass = hasOpenParens ? 0
                  /* None */
                  : 1
                  /* ForceTermination */
                  ;
                  break;

                case 91
                /* OpenSquareBracket */
                :
                  inSquareBrackets = true;
                  hasOpenSquareBracket = true;
                  chClass = 0
                  /* None */
                  ;
                  break;

                case 93
                /* CloseSquareBracket */
                :
                  inSquareBrackets = false;
                  chClass = hasOpenSquareBracket ? 0
                  /* None */
                  : 1
                  /* ForceTermination */
                  ;
                  break;

                case 123
                /* OpenCurlyBrace */
                :
                  hasOpenCurlyBracket = true;
                  chClass = 0
                  /* None */
                  ;
                  break;

                case 125
                /* CloseCurlyBrace */
                :
                  chClass = hasOpenCurlyBracket ? 0
                  /* None */
                  : 1
                  /* ForceTermination */
                  ;
                  break;

                /* The following three rules make it that ' or " or ` are allowed inside links if the link began with a different one */

                case 39
                /* SingleQuote */
                :
                  chClass = linkBeginChCode === 34
                  /* DoubleQuote */
                  || linkBeginChCode === 96
                  /* BackTick */
                  ? 0
                  /* None */
                  : 1
                  /* ForceTermination */
                  ;
                  break;

                case 34
                /* DoubleQuote */
                :
                  chClass = linkBeginChCode === 39
                  /* SingleQuote */
                  || linkBeginChCode === 96
                  /* BackTick */
                  ? 0
                  /* None */
                  : 1
                  /* ForceTermination */
                  ;
                  break;

                case 96
                /* BackTick */
                :
                  chClass = linkBeginChCode === 39
                  /* SingleQuote */
                  || linkBeginChCode === 34
                  /* DoubleQuote */
                  ? 0
                  /* None */
                  : 1
                  /* ForceTermination */
                  ;
                  break;

                case 42
                /* Asterisk */
                :
                  // `*` terminates a link if the link began with `*`
                  chClass = linkBeginChCode === 42
                  /* Asterisk */
                  ? 1
                  /* ForceTermination */
                  : 0
                  /* None */
                  ;
                  break;

                case 124
                /* Pipe */
                :
                  // `|` terminates a link if the link began with `|`
                  chClass = linkBeginChCode === 124
                  /* Pipe */
                  ? 1
                  /* ForceTermination */
                  : 0
                  /* None */
                  ;
                  break;

                case 32
                /* Space */
                :
                  // ` ` allow space in between [ and ]
                  chClass = inSquareBrackets ? 0
                  /* None */
                  : 1
                  /* ForceTermination */
                  ;
                  break;

                default:
                  chClass = classifier.get(chCode);
              } // Check if character terminates link


              if (chClass === 1
              /* ForceTermination */
              ) {
                  result.push(LinkComputer._createLink(classifier, line, i, linkBeginIndex, j));
                  resetStateMachine = true;
                }
            } else if (state === 12
          /* End */
          ) {
              var _chClass = void 0;

              if (chCode === 91
              /* OpenSquareBracket */
              ) {
                  // Allow for the authority part to contain ipv6 addresses which contain [ and ]
                  hasOpenSquareBracket = true;
                  _chClass = 0
                  /* None */
                  ;
                } else {
                _chClass = classifier.get(chCode);
              } // Check if character terminates link


              if (_chClass === 1
              /* ForceTermination */
              ) {
                  resetStateMachine = true;
                } else {
                state = 13
                /* Accept */
                ;
              }
            } else {
            state = stateMachine.nextState(state, chCode);

            if (state === 0
            /* Invalid */
            ) {
                resetStateMachine = true;
              }
          }

          if (resetStateMachine) {
            state = 1
            /* Start */
            ;
            hasOpenParens = false;
            hasOpenSquareBracket = false;
            hasOpenCurlyBracket = false; // Record where the link started

            linkBeginIndex = j + 1;
            linkBeginChCode = chCode;
          }

          j++;
        }

        if (state === 13
        /* Accept */
        ) {
            result.push(LinkComputer._createLink(classifier, line, i, linkBeginIndex, len));
          }
      }

      return result;
    }
  }]);

  return LinkComputer;
}();
/**
 * Returns an array of all links contains in the provided
 * document. *Note* that this operation is computational
 * expensive and should not run in the UI thread.
 */

function linkComputer_computeLinks(model) {
  if (!model || typeof model.getLineCount !== 'function' || typeof model.getLineContent !== 'function') {
    // Unknown caller!
    return [];
  }

  return linkComputer_LinkComputer.computeLinks(model);
}
// CONCATENATED MODULE: ./node_modules/monaco-editor/esm/vs/editor/common/modes/supports/inplaceReplaceSupport.js



/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var inplaceReplaceSupport_BasicInplaceReplace = /*#__PURE__*/function () {
  function BasicInplaceReplace() {
    _classCallCheck(this, BasicInplaceReplace);

    this._defaultValueSet = [['true', 'false'], ['True', 'False'], ['Private', 'Public', 'Friend', 'ReadOnly', 'Partial', 'Protected', 'WriteOnly'], ['public', 'protected', 'private']];
  }

  _createClass(BasicInplaceReplace, [{
    key: "navigateValueSet",
    value: function navigateValueSet(range1, text1, range2, text2, up) {
      if (range1 && text1) {
        var result = this.doNavigateValueSet(text1, up);

        if (result) {
          return {
            range: range1,
            value: result
          };
        }
      }

      if (range2 && text2) {
        var _result = this.doNavigateValueSet(text2, up);

        if (_result) {
          return {
            range: range2,
            value: _result
          };
        }
      }

      return null;
    }
  }, {
    key: "doNavigateValueSet",
    value: function doNavigateValueSet(text, up) {
      var numberResult = this.numberReplace(text, up);

      if (numberResult !== null) {
        return numberResult;
      }

      return this.textReplace(text, up);
    }
  }, {
    key: "numberReplace",
    value: function numberReplace(value, up) {
      var precision = Math.pow(10, value.length - (value.lastIndexOf('.') + 1));
      var n1 = Number(value);
      var n2 = parseFloat(value);

      if (!isNaN(n1) && !isNaN(n2) && n1 === n2) {
        if (n1 === 0 && !up) {
          return null; // don't do negative
          //			} else if(n1 === 9 && up) {
          //				return null; // don't insert 10 into a number
        } else {
          n1 = Math.floor(n1 * precision);
          n1 += up ? precision : -precision;
          return String(n1 / precision);
        }
      }

      return null;
    }
  }, {
    key: "textReplace",
    value: function textReplace(value, up) {
      return this.valueSetsReplace(this._defaultValueSet, value, up);
    }
  }, {
    key: "valueSetsReplace",
    value: function valueSetsReplace(valueSets, value, up) {
      var result = null;

      for (var i = 0, len = valueSets.length; result === null && i < len; i++) {
        result = this.valueSetReplace(valueSets[i], value, up);
      }

      return result;
    }
  }, {
    key: "valueSetReplace",
    value: function valueSetReplace(valueSet, value, up) {
      var idx = valueSet.indexOf(value);

      if (idx >= 0) {
        idx += up ? +1 : -1;

        if (idx < 0) {
          idx = valueSet.length - 1;
        } else {
          idx %= valueSet.length;
        }

        return valueSet[idx];
      }

      return null;
    }
  }]);

  return BasicInplaceReplace;
}();
inplaceReplaceSupport_BasicInplaceReplace.INSTANCE = new inplaceReplaceSupport_BasicInplaceReplace();
// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/superPropBase.js

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}
// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/get.js


function get_get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    get_get = Reflect.get;
  } else {
    get_get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return get_get(target, property, receiver || target);
}
// CONCATENATED MODULE: ./node_modules/monaco-editor/esm/vs/base/common/linkedList.js




/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var linkedList_Node = function Node(element) {
  _classCallCheck(this, Node);

  this.element = element;
  this.next = Node.Undefined;
  this.prev = Node.Undefined;
};

linkedList_Node.Undefined = new linkedList_Node(undefined);
var linkedList_LinkedList = /*#__PURE__*/function () {
  function LinkedList() {
    _classCallCheck(this, LinkedList);

    this._first = linkedList_Node.Undefined;
    this._last = linkedList_Node.Undefined;
    this._size = 0;
  }

  _createClass(LinkedList, [{
    key: "isEmpty",
    value: function isEmpty() {
      return this._first === linkedList_Node.Undefined;
    }
  }, {
    key: "clear",
    value: function clear() {
      this._first = linkedList_Node.Undefined;
      this._last = linkedList_Node.Undefined;
      this._size = 0;
    }
  }, {
    key: "unshift",
    value: function unshift(element) {
      return this._insert(element, false);
    }
  }, {
    key: "push",
    value: function push(element) {
      return this._insert(element, true);
    }
  }, {
    key: "_insert",
    value: function _insert(element, atTheEnd) {
      var _this = this;

      var newNode = new linkedList_Node(element);

      if (this._first === linkedList_Node.Undefined) {
        this._first = newNode;
        this._last = newNode;
      } else if (atTheEnd) {
        // push
        var oldLast = this._last;
        this._last = newNode;
        newNode.prev = oldLast;
        oldLast.next = newNode;
      } else {
        // unshift
        var oldFirst = this._first;
        this._first = newNode;
        newNode.next = oldFirst;
        oldFirst.prev = newNode;
      }

      this._size += 1;
      var didRemove = false;
      return function () {
        if (!didRemove) {
          didRemove = true;

          _this._remove(newNode);
        }
      };
    }
  }, {
    key: "shift",
    value: function shift() {
      if (this._first === linkedList_Node.Undefined) {
        return undefined;
      } else {
        var res = this._first.element;

        this._remove(this._first);

        return res;
      }
    }
  }, {
    key: "pop",
    value: function pop() {
      if (this._last === linkedList_Node.Undefined) {
        return undefined;
      } else {
        var res = this._last.element;

        this._remove(this._last);

        return res;
      }
    }
  }, {
    key: "_remove",
    value: function _remove(node) {
      if (node.prev !== linkedList_Node.Undefined && node.next !== linkedList_Node.Undefined) {
        // middle
        var anchor = node.prev;
        anchor.next = node.next;
        node.next.prev = anchor;
      } else if (node.prev === linkedList_Node.Undefined && node.next === linkedList_Node.Undefined) {
        // only node
        this._first = linkedList_Node.Undefined;
        this._last = linkedList_Node.Undefined;
      } else if (node.next === linkedList_Node.Undefined) {
        // last
        this._last = this._last.prev;
        this._last.next = linkedList_Node.Undefined;
      } else if (node.prev === linkedList_Node.Undefined) {
        // first
        this._first = this._first.next;
        this._first.prev = linkedList_Node.Undefined;
      } // done


      this._size -= 1;
    }
  }, {
    key: Symbol.iterator,
    value: /*#__PURE__*/regenerator_default.a.mark(function value() {
      var node;
      return regenerator_default.a.wrap(function value$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              node = this._first;

            case 1:
              if (!(node !== linkedList_Node.Undefined)) {
                _context.next = 7;
                break;
              }

              _context.next = 4;
              return node.element;

            case 4:
              node = node.next;
              _context.next = 1;
              break;

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, value, this);
    })
  }, {
    key: "toArray",
    value: function toArray() {
      var result = [];

      for (var node = this._first; node !== linkedList_Node.Undefined; node = node.next) {
        result.push(node.element);
      }

      return result;
    }
  }, {
    key: "size",
    get: function get() {
      return this._size;
    }
  }]);

  return LinkedList;
}();
// CONCATENATED MODULE: ./node_modules/monaco-editor/esm/vs/base/common/event.js









function event_createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = event_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function event_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return event_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return event_arrayLikeToArray(o, minLen); }

function event_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/



var event_Event;

(function (Event) {
  Event.None = function () {
    return lifecycle_Disposable.None;
  };
  /**
   * Given an event, returns another event which only fires once.
   */


  function _once(event) {
    return function (listener) {
      var thisArgs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var disposables = arguments.length > 2 ? arguments[2] : undefined;
      // we need this, in case the event fires during the listener call
      var didFire = false;
      var result;
      result = event(function (e) {
        if (didFire) {
          return;
        } else if (result) {
          result.dispose();
        } else {
          didFire = true;
        }

        return listener.call(thisArgs, e);
      }, null, disposables);

      if (didFire) {
        result.dispose();
      }

      return result;
    };
  }

  Event.once = _once;
  /**
   * Given an event and a `map` function, returns another event which maps each element
   * through the mapping function.
   */

  function _map(event, map) {
    return snapshot(function (listener) {
      var thisArgs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var disposables = arguments.length > 2 ? arguments[2] : undefined;
      return event(function (i) {
        return listener.call(thisArgs, map(i));
      }, null, disposables);
    });
  }

  Event.map = _map;
  /**
   * Given an event and an `each` function, returns another identical event and calls
   * the `each` function per each element.
   */

  function _forEach(event, each) {
    return snapshot(function (listener) {
      var thisArgs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var disposables = arguments.length > 2 ? arguments[2] : undefined;
      return event(function (i) {
        each(i);
        listener.call(thisArgs, i);
      }, null, disposables);
    });
  }

  Event.forEach = _forEach;

  function _filter(event, filter) {
    return snapshot(function (listener) {
      var thisArgs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var disposables = arguments.length > 2 ? arguments[2] : undefined;
      return event(function (e) {
        return filter(e) && listener.call(thisArgs, e);
      }, null, disposables);
    });
  }

  Event.filter = _filter;
  /**
   * Given an event, returns the same event but typed as `Event<void>`.
   */

  function signal(event) {
    return event;
  }

  Event.signal = signal;

  function any() {
    for (var _len = arguments.length, events = new Array(_len), _key = 0; _key < _len; _key++) {
      events[_key] = arguments[_key];
    }

    return function (listener) {
      var thisArgs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var disposables = arguments.length > 2 ? arguments[2] : undefined;
      return combinedDisposable.apply(void 0, _toConsumableArray(events.map(function (event) {
        return event(function (e) {
          return listener.call(thisArgs, e);
        }, null, disposables);
      })));
    };
  }

  Event.any = any;
  /**
   * Given an event and a `merge` function, returns another event which maps each element
   * and the cumulative result through the `merge` function. Similar to `map`, but with memory.
   */

  function _reduce(event, merge, initial) {
    var output = initial;
    return _map(event, function (e) {
      output = merge(output, e);
      return output;
    });
  }

  Event.reduce = _reduce;
  /**
   * Given a chain of event processing functions (filter, map, etc), each
   * function will be invoked per event & per listener. Snapshotting an event
   * chain allows each function to be invoked just once per event.
   */

  function snapshot(event) {
    var listener;
    var emitter = new event_Emitter({
      onFirstListenerAdd: function onFirstListenerAdd() {
        listener = event(emitter.fire, emitter);
      },
      onLastListenerRemove: function onLastListenerRemove() {
        listener.dispose();
      }
    });
    return emitter.event;
  }

  Event.snapshot = snapshot;

  function _debounce(event, merge) {
    var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
    var leading = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    var leakWarningThreshold = arguments.length > 4 ? arguments[4] : undefined;
    var subscription;
    var output = undefined;
    var handle = undefined;
    var numDebouncedCalls = 0;
    var emitter = new event_Emitter({
      leakWarningThreshold: leakWarningThreshold,
      onFirstListenerAdd: function onFirstListenerAdd() {
        subscription = event(function (cur) {
          numDebouncedCalls++;
          output = merge(output, cur);

          if (leading && !handle) {
            emitter.fire(output);
            output = undefined;
          }

          clearTimeout(handle);
          handle = setTimeout(function () {
            var _output = output;
            output = undefined;
            handle = undefined;

            if (!leading || numDebouncedCalls > 1) {
              emitter.fire(_output);
            }

            numDebouncedCalls = 0;
          }, delay);
        });
      },
      onLastListenerRemove: function onLastListenerRemove() {
        subscription.dispose();
      }
    });
    return emitter.event;
  }

  Event.debounce = _debounce;
  /**
   * Given an event, it returns another event which fires only once and as soon as
   * the input event emits. The event data is the number of millis it took for the
   * event to fire.
   */

  function stopwatch(event) {
    var start = new Date().getTime();
    return _map(_once(event), function (_) {
      return new Date().getTime() - start;
    });
  }

  Event.stopwatch = stopwatch;
  /**
   * Given an event, it returns another event which fires only when the event
   * element changes.
   */

  function _latch(event) {
    var firstCall = true;
    var cache;
    return _filter(event, function (value) {
      var shouldEmit = firstCall || value !== cache;
      firstCall = false;
      cache = value;
      return shouldEmit;
    });
  }

  Event.latch = _latch;
  /**
   * Buffers the provided event until a first listener comes
   * along, at which point fire all the events at once and
   * pipe the event from then on.
   *
   * ```typescript
   * const emitter = new Emitter<number>();
   * const event = emitter.event;
   * const bufferedEvent = buffer(event);
   *
   * emitter.fire(1);
   * emitter.fire(2);
   * emitter.fire(3);
   * // nothing...
   *
   * const listener = bufferedEvent(num => console.log(num));
   * // 1, 2, 3
   *
   * emitter.fire(4);
   * // 4
   * ```
   */

  function buffer(event) {
    var nextTick = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var _buffer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

    var buffer = _buffer.slice();

    var listener = event(function (e) {
      if (buffer) {
        buffer.push(e);
      } else {
        emitter.fire(e);
      }
    });

    var flush = function flush() {
      if (buffer) {
        buffer.forEach(function (e) {
          return emitter.fire(e);
        });
      }

      buffer = null;
    };

    var emitter = new event_Emitter({
      onFirstListenerAdd: function onFirstListenerAdd() {
        if (!listener) {
          listener = event(function (e) {
            return emitter.fire(e);
          });
        }
      },
      onFirstListenerDidAdd: function onFirstListenerDidAdd() {
        if (buffer) {
          if (nextTick) {
            setTimeout(flush);
          } else {
            flush();
          }
        }
      },
      onLastListenerRemove: function onLastListenerRemove() {
        if (listener) {
          listener.dispose();
        }

        listener = null;
      }
    });
    return emitter.event;
  }

  Event.buffer = buffer;

  var ChainableEvent = /*#__PURE__*/function () {
    function ChainableEvent(event) {
      _classCallCheck(this, ChainableEvent);

      this.event = event;
    }

    _createClass(ChainableEvent, [{
      key: "map",
      value: function map(fn) {
        return new ChainableEvent(_map(this.event, fn));
      }
    }, {
      key: "forEach",
      value: function forEach(fn) {
        return new ChainableEvent(_forEach(this.event, fn));
      }
    }, {
      key: "filter",
      value: function filter(fn) {
        return new ChainableEvent(_filter(this.event, fn));
      }
    }, {
      key: "reduce",
      value: function reduce(merge, initial) {
        return new ChainableEvent(_reduce(this.event, merge, initial));
      }
    }, {
      key: "latch",
      value: function latch() {
        return new ChainableEvent(_latch(this.event));
      }
    }, {
      key: "debounce",
      value: function debounce(merge) {
        var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
        var leading = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var leakWarningThreshold = arguments.length > 3 ? arguments[3] : undefined;
        return new ChainableEvent(_debounce(this.event, merge, delay, leading, leakWarningThreshold));
      }
    }, {
      key: "on",
      value: function on(listener, thisArgs, disposables) {
        return this.event(listener, thisArgs, disposables);
      }
    }, {
      key: "once",
      value: function once(listener, thisArgs, disposables) {
        return _once(this.event)(listener, thisArgs, disposables);
      }
    }]);

    return ChainableEvent;
  }();

  function chain(event) {
    return new ChainableEvent(event);
  }

  Event.chain = chain;

  function fromNodeEventEmitter(emitter, eventName) {
    var map = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (id) {
      return id;
    };

    var fn = function fn() {
      return result.fire(map.apply(void 0, arguments));
    };

    var onFirstListenerAdd = function onFirstListenerAdd() {
      return emitter.on(eventName, fn);
    };

    var onLastListenerRemove = function onLastListenerRemove() {
      return emitter.removeListener(eventName, fn);
    };

    var result = new event_Emitter({
      onFirstListenerAdd: onFirstListenerAdd,
      onLastListenerRemove: onLastListenerRemove
    });
    return result.event;
  }

  Event.fromNodeEventEmitter = fromNodeEventEmitter;

  function fromDOMEventEmitter(emitter, eventName) {
    var map = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (id) {
      return id;
    };

    var fn = function fn() {
      return result.fire(map.apply(void 0, arguments));
    };

    var onFirstListenerAdd = function onFirstListenerAdd() {
      return emitter.addEventListener(eventName, fn);
    };

    var onLastListenerRemove = function onLastListenerRemove() {
      return emitter.removeEventListener(eventName, fn);
    };

    var result = new event_Emitter({
      onFirstListenerAdd: onFirstListenerAdd,
      onLastListenerRemove: onLastListenerRemove
    });
    return result.event;
  }

  Event.fromDOMEventEmitter = fromDOMEventEmitter;

  function fromPromise(promise) {
    var emitter = new event_Emitter();
    var shouldEmit = false;
    promise.then(undefined, function () {
      return null;
    }).then(function () {
      if (!shouldEmit) {
        setTimeout(function () {
          return emitter.fire(undefined);
        }, 0);
      } else {
        emitter.fire(undefined);
      }
    });
    shouldEmit = true;
    return emitter.event;
  }

  Event.fromPromise = fromPromise;

  function toPromise(event) {
    return new Promise(function (c) {
      return _once(event)(c);
    });
  }

  Event.toPromise = toPromise;
})(event_Event || (event_Event = {}));

var _globalLeakWarningThreshold = -1;

var event_LeakageMonitor = /*#__PURE__*/function () {
  function LeakageMonitor(customThreshold) {
    var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Math.random().toString(18).slice(2, 5);

    _classCallCheck(this, LeakageMonitor);

    this.customThreshold = customThreshold;
    this.name = name;
    this._warnCountdown = 0;
  }

  _createClass(LeakageMonitor, [{
    key: "dispose",
    value: function dispose() {
      if (this._stacks) {
        this._stacks.clear();
      }
    }
  }, {
    key: "check",
    value: function check(listenerCount) {
      var _this = this;

      var threshold = _globalLeakWarningThreshold;

      if (typeof this.customThreshold === 'number') {
        threshold = this.customThreshold;
      }

      if (threshold <= 0 || listenerCount < threshold) {
        return undefined;
      }

      if (!this._stacks) {
        this._stacks = new Map();
      }

      var stack = new Error().stack.split('\n').slice(3).join('\n');
      var count = this._stacks.get(stack) || 0;

      this._stacks.set(stack, count + 1);

      this._warnCountdown -= 1;

      if (this._warnCountdown <= 0) {
        // only warn on first exceed and then every time the limit
        // is exceeded by 50% again
        this._warnCountdown = threshold * 0.5; // find most frequent listener and print warning

        var topStack;
        var topCount = 0;

        var _iterator = event_createForOfIteratorHelper(this._stacks),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _step$value = _slicedToArray(_step.value, 2),
                _stack = _step$value[0],
                _count = _step$value[1];

            if (!topStack || topCount < _count) {
              topStack = _stack;
              topCount = _count;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        console.warn("[".concat(this.name, "] potential listener LEAK detected, having ").concat(listenerCount, " listeners already. MOST frequent listener (").concat(topCount, "):"));
        console.warn(topStack);
      }

      return function () {
        var count = _this._stacks.get(stack) || 0;

        _this._stacks.set(stack, count - 1);
      };
    }
  }]);

  return LeakageMonitor;
}();
/**
 * The Emitter can be used to expose an Event to the public
 * to fire it from the insides.
 * Sample:
    class Document {

        private readonly _onDidChange = new Emitter<(value:string)=>any>();

        public onDidChange = this._onDidChange.event;

        // getter-style
        // get onDidChange(): Event<(value:string)=>any> {
        // 	return this._onDidChange.event;
        // }

        private _doIt() {
            //...
            this._onDidChange.fire(value);
        }
    }
 */


var event_Emitter = /*#__PURE__*/function () {
  function Emitter(options) {
    _classCallCheck(this, Emitter);

    this._disposed = false;
    this._options = options;
    this._leakageMon = _globalLeakWarningThreshold > 0 ? new event_LeakageMonitor(this._options && this._options.leakWarningThreshold) : undefined;
  }
  /**
   * For the public to allow to subscribe
   * to events from this Emitter
   */


  _createClass(Emitter, [{
    key: "fire",

    /**
     * To be kept private to fire an event to
     * subscribers
     */
    value: function fire(event) {
      if (this._listeners) {
        // put all [listener,event]-pairs into delivery queue
        // then emit all event. an inner/nested event might be
        // the driver of this
        if (!this._deliveryQueue) {
          this._deliveryQueue = new linkedList_LinkedList();
        }

        var _iterator2 = event_createForOfIteratorHelper(this._listeners),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _listener = _step2.value;

            this._deliveryQueue.push([_listener, event]);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        while (this._deliveryQueue.size > 0) {
          var _this$_deliveryQueue$ = this._deliveryQueue.shift(),
              _this$_deliveryQueue$2 = _slicedToArray(_this$_deliveryQueue$, 2),
              listener = _this$_deliveryQueue$2[0],
              _event = _this$_deliveryQueue$2[1];

          try {
            if (typeof listener === 'function') {
              listener.call(undefined, _event);
            } else {
              listener[0].call(listener[1], _event);
            }
          } catch (e) {
            onUnexpectedError(e);
          }
        }
      }
    }
  }, {
    key: "dispose",
    value: function dispose() {
      if (this._listeners) {
        this._listeners.clear();
      }

      if (this._deliveryQueue) {
        this._deliveryQueue.clear();
      }

      if (this._leakageMon) {
        this._leakageMon.dispose();
      }

      this._disposed = true;
    }
  }, {
    key: "event",
    get: function get() {
      var _this2 = this;

      if (!this._event) {
        this._event = function (listener, thisArgs, disposables) {
          if (!_this2._listeners) {
            _this2._listeners = new linkedList_LinkedList();
          }

          var firstListener = _this2._listeners.isEmpty();

          if (firstListener && _this2._options && _this2._options.onFirstListenerAdd) {
            _this2._options.onFirstListenerAdd(_this2);
          }

          var remove = _this2._listeners.push(!thisArgs ? listener : [listener, thisArgs]);

          if (firstListener && _this2._options && _this2._options.onFirstListenerDidAdd) {
            _this2._options.onFirstListenerDidAdd(_this2);
          }

          if (_this2._options && _this2._options.onListenerDidAdd) {
            _this2._options.onListenerDidAdd(_this2, listener, thisArgs);
          } // check and record this emitter for potential leakage


          var removeMonitor;

          if (_this2._leakageMon) {
            removeMonitor = _this2._leakageMon.check(_this2._listeners.size);
          }

          var result;
          result = {
            dispose: function dispose() {
              if (removeMonitor) {
                removeMonitor();
              }

              result.dispose = Emitter._noop;

              if (!_this2._disposed) {
                remove();

                if (_this2._options && _this2._options.onLastListenerRemove) {
                  var hasListeners = _this2._listeners && !_this2._listeners.isEmpty();

                  if (!hasListeners) {
                    _this2._options.onLastListenerRemove(_this2);
                  }
                }
              }
            }
          };

          if (disposables instanceof lifecycle_DisposableStore) {
            disposables.add(result);
          } else if (Array.isArray(disposables)) {
            disposables.push(result);
          }

          return result;
        };
      }

      return this._event;
    }
  }]);

  return Emitter;
}();

event_Emitter._noop = function () {};

var event_PauseableEmitter = /*#__PURE__*/function (_Emitter) {
  _inherits(PauseableEmitter, _Emitter);

  function PauseableEmitter(options) {
    var _this3;

    _classCallCheck(this, PauseableEmitter);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(PauseableEmitter).call(this, options));
    _this3._isPaused = 0;
    _this3._eventQueue = new linkedList_LinkedList();
    _this3._mergeFn = options && options.merge;
    return _this3;
  }

  _createClass(PauseableEmitter, [{
    key: "pause",
    value: function pause() {
      this._isPaused++;
    }
  }, {
    key: "resume",
    value: function resume() {
      if (this._isPaused !== 0 && --this._isPaused === 0) {
        if (this._mergeFn) {
          // use the merge function to create a single composite
          // event. make a copy in case firing pauses this emitter
          var events = this._eventQueue.toArray();

          this._eventQueue.clear();

          get_get(_getPrototypeOf(PauseableEmitter.prototype), "fire", this).call(this, this._mergeFn(events));
        } else {
          // no merging, fire each event individually and test
          // that this emitter isn't paused halfway through
          while (!this._isPaused && this._eventQueue.size !== 0) {
            get_get(_getPrototypeOf(PauseableEmitter.prototype), "fire", this).call(this, this._eventQueue.shift());
          }
        }
      }
    }
  }, {
    key: "fire",
    value: function fire(event) {
      if (this._listeners) {
        if (this._isPaused !== 0) {
          this._eventQueue.push(event);
        } else {
          get_get(_getPrototypeOf(PauseableEmitter.prototype), "fire", this).call(this, event);
        }
      }
    }
  }]);

  return PauseableEmitter;
}(event_Emitter);
/**
 * The EventBufferer is useful in situations in which you want
 * to delay firing your events during some code.
 * You can wrap that code and be sure that the event will not
 * be fired during that wrap.
 *
 * ```
 * const emitter: Emitter;
 * const delayer = new EventDelayer();
 * const delayedEvent = delayer.wrapEvent(emitter.event);
 *
 * delayedEvent(console.log);
 *
 * delayer.bufferEvents(() => {
 *   emitter.fire(); // event will not be fired yet
 * });
 *
 * // event will only be fired at this point
 * ```
 */

var event_EventBufferer = /*#__PURE__*/function () {
  function EventBufferer() {
    _classCallCheck(this, EventBufferer);

    this.buffers = [];
  }

  _createClass(EventBufferer, [{
    key: "wrapEvent",
    value: function wrapEvent(event) {
      var _this4 = this;

      return function (listener, thisArgs, disposables) {
        return event(function (i) {
          var buffer = _this4.buffers[_this4.buffers.length - 1];

          if (buffer) {
            buffer.push(function () {
              return listener.call(thisArgs, i);
            });
          } else {
            listener.call(thisArgs, i);
          }
        }, undefined, disposables);
      };
    }
  }, {
    key: "bufferEvents",
    value: function bufferEvents(fn) {
      var buffer = [];
      this.buffers.push(buffer);
      var r = fn();
      this.buffers.pop();
      buffer.forEach(function (flush) {
        return flush();
      });
      return r;
    }
  }]);

  return EventBufferer;
}();
/**
 * A Relay is an event forwarder which functions as a replugabble event pipe.
 * Once created, you can connect an input event to it and it will simply forward
 * events from that input event through its own `event` property. The `input`
 * can be changed at any point in time.
 */

var event_Relay = /*#__PURE__*/function () {
  function Relay() {
    var _this5 = this;

    _classCallCheck(this, Relay);

    this.listening = false;
    this.inputEvent = event_Event.None;
    this.inputEventListener = lifecycle_Disposable.None;
    this.emitter = new event_Emitter({
      onFirstListenerDidAdd: function onFirstListenerDidAdd() {
        _this5.listening = true;
        _this5.inputEventListener = _this5.inputEvent(_this5.emitter.fire, _this5.emitter);
      },
      onLastListenerRemove: function onLastListenerRemove() {
        _this5.listening = false;

        _this5.inputEventListener.dispose();
      }
    });
    this.event = this.emitter.event;
  }

  _createClass(Relay, [{
    key: "dispose",
    value: function dispose() {
      this.inputEventListener.dispose();
      this.emitter.dispose();
    }
  }, {
    key: "input",
    set: function set(event) {
      this.inputEvent = event;

      if (this.listening) {
        this.inputEventListener.dispose();
        this.inputEventListener = event(this.emitter.fire, this.emitter);
      }
    }
  }]);

  return Relay;
}();
// CONCATENATED MODULE: ./node_modules/monaco-editor/esm/vs/base/common/cancellation.js



/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

var shortcutEvent = Object.freeze(function (callback, context) {
  var handle = setTimeout(callback.bind(context), 0);
  return {
    dispose: function dispose() {
      clearTimeout(handle);
    }
  };
});
var cancellation_CancellationToken;

(function (CancellationToken) {
  function isCancellationToken(thing) {
    if (thing === CancellationToken.None || thing === CancellationToken.Cancelled) {
      return true;
    }

    if (thing instanceof cancellation_MutableToken) {
      return true;
    }

    if (!thing || typeof thing !== 'object') {
      return false;
    }

    return typeof thing.isCancellationRequested === 'boolean' && typeof thing.onCancellationRequested === 'function';
  }

  CancellationToken.isCancellationToken = isCancellationToken;
  CancellationToken.None = Object.freeze({
    isCancellationRequested: false,
    onCancellationRequested: event_Event.None
  });
  CancellationToken.Cancelled = Object.freeze({
    isCancellationRequested: true,
    onCancellationRequested: shortcutEvent
  });
})(cancellation_CancellationToken || (cancellation_CancellationToken = {}));

var cancellation_MutableToken = /*#__PURE__*/function () {
  function MutableToken() {
    _classCallCheck(this, MutableToken);

    this._isCancelled = false;
    this._emitter = null;
  }

  _createClass(MutableToken, [{
    key: "cancel",
    value: function cancel() {
      if (!this._isCancelled) {
        this._isCancelled = true;

        if (this._emitter) {
          this._emitter.fire(undefined);

          this.dispose();
        }
      }
    }
  }, {
    key: "dispose",
    value: function dispose() {
      if (this._emitter) {
        this._emitter.dispose();

        this._emitter = null;
      }
    }
  }, {
    key: "isCancellationRequested",
    get: function get() {
      return this._isCancelled;
    }
  }, {
    key: "onCancellationRequested",
    get: function get() {
      if (this._isCancelled) {
        return shortcutEvent;
      }

      if (!this._emitter) {
        this._emitter = new event_Emitter();
      }

      return this._emitter.event;
    }
  }]);

  return MutableToken;
}();

var cancellation_CancellationTokenSource = /*#__PURE__*/function () {
  function CancellationTokenSource(parent) {
    _classCallCheck(this, CancellationTokenSource);

    this._token = undefined;
    this._parentListener = undefined;
    this._parentListener = parent && parent.onCancellationRequested(this.cancel, this);
  }

  _createClass(CancellationTokenSource, [{
    key: "cancel",
    value: function cancel() {
      if (!this._token) {
        // save an object by returning the default
        // cancelled token when cancellation happens
        // before someone asks for the token
        this._token = cancellation_CancellationToken.Cancelled;
      } else if (this._token instanceof cancellation_MutableToken) {
        // actually cancel
        this._token.cancel();
      }
    }
  }, {
    key: "dispose",
    value: function dispose() {
      var cancel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (cancel) {
        this.cancel();
      }

      if (this._parentListener) {
        this._parentListener.dispose();
      }

      if (!this._token) {
        // ensure to initialize with an empty token if we had none
        this._token = cancellation_CancellationToken.None;
      } else if (this._token instanceof cancellation_MutableToken) {
        // actually dispose
        this._token.dispose();
      }
    }
  }, {
    key: "token",
    get: function get() {
      if (!this._token) {
        // be lazy and create the token only when
        // actually needed
        this._token = new cancellation_MutableToken();
      }

      return this._token;
    }
  }]);

  return CancellationTokenSource;
}();
// CONCATENATED MODULE: ./node_modules/monaco-editor/esm/vs/base/common/keyCodes.js



/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


var keyCodes_KeyCodeStrMap = /*#__PURE__*/function () {
  function KeyCodeStrMap() {
    _classCallCheck(this, KeyCodeStrMap);

    this._keyCodeToStr = [];
    this._strToKeyCode = Object.create(null);
  }

  _createClass(KeyCodeStrMap, [{
    key: "define",
    value: function define(keyCode, str) {
      this._keyCodeToStr[keyCode] = str;
      this._strToKeyCode[str.toLowerCase()] = keyCode;
    }
  }, {
    key: "keyCodeToStr",
    value: function keyCodeToStr(keyCode) {
      return this._keyCodeToStr[keyCode];
    }
  }, {
    key: "strToKeyCode",
    value: function strToKeyCode(str) {
      return this._strToKeyCode[str.toLowerCase()] || 0
      /* Unknown */
      ;
    }
  }]);

  return KeyCodeStrMap;
}();

var uiMap = new keyCodes_KeyCodeStrMap();
var userSettingsUSMap = new keyCodes_KeyCodeStrMap();
var userSettingsGeneralMap = new keyCodes_KeyCodeStrMap();

(function () {
  function define(keyCode, uiLabel) {
    var usUserSettingsLabel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : uiLabel;
    var generalUserSettingsLabel = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : usUserSettingsLabel;
    uiMap.define(keyCode, uiLabel);
    userSettingsUSMap.define(keyCode, usUserSettingsLabel);
    userSettingsGeneralMap.define(keyCode, generalUserSettingsLabel);
  }

  define(0
  /* Unknown */
  , 'unknown');
  define(1
  /* Backspace */
  , 'Backspace');
  define(2
  /* Tab */
  , 'Tab');
  define(3
  /* Enter */
  , 'Enter');
  define(4
  /* Shift */
  , 'Shift');
  define(5
  /* Ctrl */
  , 'Ctrl');
  define(6
  /* Alt */
  , 'Alt');
  define(7
  /* PauseBreak */
  , 'PauseBreak');
  define(8
  /* CapsLock */
  , 'CapsLock');
  define(9
  /* Escape */
  , 'Escape');
  define(10
  /* Space */
  , 'Space');
  define(11
  /* PageUp */
  , 'PageUp');
  define(12
  /* PageDown */
  , 'PageDown');
  define(13
  /* End */
  , 'End');
  define(14
  /* Home */
  , 'Home');
  define(15
  /* LeftArrow */
  , 'LeftArrow', 'Left');
  define(16
  /* UpArrow */
  , 'UpArrow', 'Up');
  define(17
  /* RightArrow */
  , 'RightArrow', 'Right');
  define(18
  /* DownArrow */
  , 'DownArrow', 'Down');
  define(19
  /* Insert */
  , 'Insert');
  define(20
  /* Delete */
  , 'Delete');
  define(21
  /* KEY_0 */
  , '0');
  define(22
  /* KEY_1 */
  , '1');
  define(23
  /* KEY_2 */
  , '2');
  define(24
  /* KEY_3 */
  , '3');
  define(25
  /* KEY_4 */
  , '4');
  define(26
  /* KEY_5 */
  , '5');
  define(27
  /* KEY_6 */
  , '6');
  define(28
  /* KEY_7 */
  , '7');
  define(29
  /* KEY_8 */
  , '8');
  define(30
  /* KEY_9 */
  , '9');
  define(31
  /* KEY_A */
  , 'A');
  define(32
  /* KEY_B */
  , 'B');
  define(33
  /* KEY_C */
  , 'C');
  define(34
  /* KEY_D */
  , 'D');
  define(35
  /* KEY_E */
  , 'E');
  define(36
  /* KEY_F */
  , 'F');
  define(37
  /* KEY_G */
  , 'G');
  define(38
  /* KEY_H */
  , 'H');
  define(39
  /* KEY_I */
  , 'I');
  define(40
  /* KEY_J */
  , 'J');
  define(41
  /* KEY_K */
  , 'K');
  define(42
  /* KEY_L */
  , 'L');
  define(43
  /* KEY_M */
  , 'M');
  define(44
  /* KEY_N */
  , 'N');
  define(45
  /* KEY_O */
  , 'O');
  define(46
  /* KEY_P */
  , 'P');
  define(47
  /* KEY_Q */
  , 'Q');
  define(48
  /* KEY_R */
  , 'R');
  define(49
  /* KEY_S */
  , 'S');
  define(50
  /* KEY_T */
  , 'T');
  define(51
  /* KEY_U */
  , 'U');
  define(52
  /* KEY_V */
  , 'V');
  define(53
  /* KEY_W */
  , 'W');
  define(54
  /* KEY_X */
  , 'X');
  define(55
  /* KEY_Y */
  , 'Y');
  define(56
  /* KEY_Z */
  , 'Z');
  define(57
  /* Meta */
  , 'Meta');
  define(58
  /* ContextMenu */
  , 'ContextMenu');
  define(59
  /* F1 */
  , 'F1');
  define(60
  /* F2 */
  , 'F2');
  define(61
  /* F3 */
  , 'F3');
  define(62
  /* F4 */
  , 'F4');
  define(63
  /* F5 */
  , 'F5');
  define(64
  /* F6 */
  , 'F6');
  define(65
  /* F7 */
  , 'F7');
  define(66
  /* F8 */
  , 'F8');
  define(67
  /* F9 */
  , 'F9');
  define(68
  /* F10 */
  , 'F10');
  define(69
  /* F11 */
  , 'F11');
  define(70
  /* F12 */
  , 'F12');
  define(71
  /* F13 */
  , 'F13');
  define(72
  /* F14 */
  , 'F14');
  define(73
  /* F15 */
  , 'F15');
  define(74
  /* F16 */
  , 'F16');
  define(75
  /* F17 */
  , 'F17');
  define(76
  /* F18 */
  , 'F18');
  define(77
  /* F19 */
  , 'F19');
  define(78
  /* NumLock */
  , 'NumLock');
  define(79
  /* ScrollLock */
  , 'ScrollLock');
  define(80
  /* US_SEMICOLON */
  , ';', ';', 'OEM_1');
  define(81
  /* US_EQUAL */
  , '=', '=', 'OEM_PLUS');
  define(82
  /* US_COMMA */
  , ',', ',', 'OEM_COMMA');
  define(83
  /* US_MINUS */
  , '-', '-', 'OEM_MINUS');
  define(84
  /* US_DOT */
  , '.', '.', 'OEM_PERIOD');
  define(85
  /* US_SLASH */
  , '/', '/', 'OEM_2');
  define(86
  /* US_BACKTICK */
  , '`', '`', 'OEM_3');
  define(110
  /* ABNT_C1 */
  , 'ABNT_C1');
  define(111
  /* ABNT_C2 */
  , 'ABNT_C2');
  define(87
  /* US_OPEN_SQUARE_BRACKET */
  , '[', '[', 'OEM_4');
  define(88
  /* US_BACKSLASH */
  , '\\', '\\', 'OEM_5');
  define(89
  /* US_CLOSE_SQUARE_BRACKET */
  , ']', ']', 'OEM_6');
  define(90
  /* US_QUOTE */
  , '\'', '\'', 'OEM_7');
  define(91
  /* OEM_8 */
  , 'OEM_8');
  define(92
  /* OEM_102 */
  , 'OEM_102');
  define(93
  /* NUMPAD_0 */
  , 'NumPad0');
  define(94
  /* NUMPAD_1 */
  , 'NumPad1');
  define(95
  /* NUMPAD_2 */
  , 'NumPad2');
  define(96
  /* NUMPAD_3 */
  , 'NumPad3');
  define(97
  /* NUMPAD_4 */
  , 'NumPad4');
  define(98
  /* NUMPAD_5 */
  , 'NumPad5');
  define(99
  /* NUMPAD_6 */
  , 'NumPad6');
  define(100
  /* NUMPAD_7 */
  , 'NumPad7');
  define(101
  /* NUMPAD_8 */
  , 'NumPad8');
  define(102
  /* NUMPAD_9 */
  , 'NumPad9');
  define(103
  /* NUMPAD_MULTIPLY */
  , 'NumPad_Multiply');
  define(104
  /* NUMPAD_ADD */
  , 'NumPad_Add');
  define(105
  /* NUMPAD_SEPARATOR */
  , 'NumPad_Separator');
  define(106
  /* NUMPAD_SUBTRACT */
  , 'NumPad_Subtract');
  define(107
  /* NUMPAD_DECIMAL */
  , 'NumPad_Decimal');
  define(108
  /* NUMPAD_DIVIDE */
  , 'NumPad_Divide');
})();

var KeyCodeUtils;

(function (KeyCodeUtils) {
  function toString(keyCode) {
    return uiMap.keyCodeToStr(keyCode);
  }

  KeyCodeUtils.toString = toString;

  function fromString(key) {
    return uiMap.strToKeyCode(key);
  }

  KeyCodeUtils.fromString = fromString;

  function toUserSettingsUS(keyCode) {
    return userSettingsUSMap.keyCodeToStr(keyCode);
  }

  KeyCodeUtils.toUserSettingsUS = toUserSettingsUS;

  function toUserSettingsGeneral(keyCode) {
    return userSettingsGeneralMap.keyCodeToStr(keyCode);
  }

  KeyCodeUtils.toUserSettingsGeneral = toUserSettingsGeneral;

  function fromUserSettings(key) {
    return userSettingsUSMap.strToKeyCode(key) || userSettingsGeneralMap.strToKeyCode(key);
  }

  KeyCodeUtils.fromUserSettings = fromUserSettings;
})(KeyCodeUtils || (KeyCodeUtils = {}));

function KeyChord(firstPart, secondPart) {
  var chordPart = (secondPart & 0x0000FFFF) << 16 >>> 0;
  return (firstPart | chordPart) >>> 0;
}
function createKeybinding(keybinding, OS) {
  if (keybinding === 0) {
    return null;
  }

  var firstPart = (keybinding & 0x0000FFFF) >>> 0;
  var chordPart = (keybinding & 0xFFFF0000) >>> 16;

  if (chordPart !== 0) {
    return new keyCodes_ChordKeybinding([createSimpleKeybinding(firstPart, OS), createSimpleKeybinding(chordPart, OS)]);
  }

  return new keyCodes_ChordKeybinding([createSimpleKeybinding(firstPart, OS)]);
}
function createSimpleKeybinding(keybinding, OS) {
  var ctrlCmd = keybinding & 2048
  /* CtrlCmd */
  ? true : false;
  var winCtrl = keybinding & 256
  /* WinCtrl */
  ? true : false;
  var ctrlKey = OS === 2
  /* Macintosh */
  ? winCtrl : ctrlCmd;
  var shiftKey = keybinding & 1024
  /* Shift */
  ? true : false;
  var altKey = keybinding & 512
  /* Alt */
  ? true : false;
  var metaKey = OS === 2
  /* Macintosh */
  ? ctrlCmd : winCtrl;
  var keyCode = keybinding & 255
  /* KeyCode */
  ;
  return new keyCodes_SimpleKeybinding(ctrlKey, shiftKey, altKey, metaKey, keyCode);
}
var keyCodes_SimpleKeybinding = /*#__PURE__*/function () {
  function SimpleKeybinding(ctrlKey, shiftKey, altKey, metaKey, keyCode) {
    _classCallCheck(this, SimpleKeybinding);

    this.ctrlKey = ctrlKey;
    this.shiftKey = shiftKey;
    this.altKey = altKey;
    this.metaKey = metaKey;
    this.keyCode = keyCode;
  }

  _createClass(SimpleKeybinding, [{
    key: "equals",
    value: function equals(other) {
      return this.ctrlKey === other.ctrlKey && this.shiftKey === other.shiftKey && this.altKey === other.altKey && this.metaKey === other.metaKey && this.keyCode === other.keyCode;
    }
  }, {
    key: "isModifierKey",
    value: function isModifierKey() {
      return this.keyCode === 0
      /* Unknown */
      || this.keyCode === 5
      /* Ctrl */
      || this.keyCode === 57
      /* Meta */
      || this.keyCode === 6
      /* Alt */
      || this.keyCode === 4
      /* Shift */
      ;
    }
  }, {
    key: "toChord",
    value: function toChord() {
      return new keyCodes_ChordKeybinding([this]);
    }
    /**
     * Does this keybinding refer to the key code of a modifier and it also has the modifier flag?
     */

  }, {
    key: "isDuplicateModifierCase",
    value: function isDuplicateModifierCase() {
      return this.ctrlKey && this.keyCode === 5
      /* Ctrl */
      || this.shiftKey && this.keyCode === 4
      /* Shift */
      || this.altKey && this.keyCode === 6
      /* Alt */
      || this.metaKey && this.keyCode === 57
      /* Meta */
      ;
    }
  }]);

  return SimpleKeybinding;
}();
var keyCodes_ChordKeybinding = function ChordKeybinding(parts) {
  _classCallCheck(this, ChordKeybinding);

  if (parts.length === 0) {
    throw illegalArgument("parts");
  }

  this.parts = parts;
};
var keyCodes_ResolvedKeybindingPart = function ResolvedKeybindingPart(ctrlKey, shiftKey, altKey, metaKey, kbLabel, kbAriaLabel) {
  _classCallCheck(this, ResolvedKeybindingPart);

  this.ctrlKey = ctrlKey;
  this.shiftKey = shiftKey;
  this.altKey = altKey;
  this.metaKey = metaKey;
  this.keyLabel = kbLabel;
  this.keyAriaLabel = kbAriaLabel;
};
/**
 * A resolved keybinding. Can be a simple keybinding or a chord keybinding.
 */

var keyCodes_ResolvedKeybinding = function ResolvedKeybinding() {
  _classCallCheck(this, ResolvedKeybinding);
};
// CONCATENATED MODULE: ./node_modules/monaco-editor/esm/vs/editor/common/core/selection.js






/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


/**
 * A selection in the editor.
 * The selection is a range that has an orientation.
 */

var selection_Selection = /*#__PURE__*/function (_Range) {
  _inherits(Selection, _Range);

  function Selection(selectionStartLineNumber, selectionStartColumn, positionLineNumber, positionColumn) {
    var _this;

    _classCallCheck(this, Selection);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Selection).call(this, selectionStartLineNumber, selectionStartColumn, positionLineNumber, positionColumn));
    _this.selectionStartLineNumber = selectionStartLineNumber;
    _this.selectionStartColumn = selectionStartColumn;
    _this.positionLineNumber = positionLineNumber;
    _this.positionColumn = positionColumn;
    return _this;
  }
  /**
   * Transform to a human-readable representation.
   */


  _createClass(Selection, [{
    key: "toString",
    value: function toString() {
      return '[' + this.selectionStartLineNumber + ',' + this.selectionStartColumn + ' -> ' + this.positionLineNumber + ',' + this.positionColumn + ']';
    }
    /**
     * Test if equals other selection.
     */

  }, {
    key: "equalsSelection",
    value: function equalsSelection(other) {
      return Selection.selectionsEqual(this, other);
    }
    /**
     * Test if the two selections are equal.
     */

  }, {
    key: "getDirection",

    /**
     * Get directions (LTR or RTL).
     */
    value: function getDirection() {
      if (this.selectionStartLineNumber === this.startLineNumber && this.selectionStartColumn === this.startColumn) {
        return 0
        /* LTR */
        ;
      }

      return 1
      /* RTL */
      ;
    }
    /**
     * Create a new selection with a different `positionLineNumber` and `positionColumn`.
     */

  }, {
    key: "setEndPosition",
    value: function setEndPosition(endLineNumber, endColumn) {
      if (this.getDirection() === 0
      /* LTR */
      ) {
          return new Selection(this.startLineNumber, this.startColumn, endLineNumber, endColumn);
        }

      return new Selection(endLineNumber, endColumn, this.startLineNumber, this.startColumn);
    }
    /**
     * Get the position at `positionLineNumber` and `positionColumn`.
     */

  }, {
    key: "getPosition",
    value: function getPosition() {
      return new position_Position(this.positionLineNumber, this.positionColumn);
    }
    /**
     * Create a new selection with a different `selectionStartLineNumber` and `selectionStartColumn`.
     */

  }, {
    key: "setStartPosition",
    value: function setStartPosition(startLineNumber, startColumn) {
      if (this.getDirection() === 0
      /* LTR */
      ) {
          return new Selection(startLineNumber, startColumn, this.endLineNumber, this.endColumn);
        }

      return new Selection(this.endLineNumber, this.endColumn, startLineNumber, startColumn);
    } // ----

    /**
     * Create a `Selection` from one or two positions
     */

  }], [{
    key: "selectionsEqual",
    value: function selectionsEqual(a, b) {
      return a.selectionStartLineNumber === b.selectionStartLineNumber && a.selectionStartColumn === b.selectionStartColumn && a.positionLineNumber === b.positionLineNumber && a.positionColumn === b.positionColumn;
    }
  }, {
    key: "fromPositions",
    value: function fromPositions(start) {
      var end = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : start;
      return new Selection(start.lineNumber, start.column, end.lineNumber, end.column);
    }
    /**
     * Create a `Selection` from an `ISelection`.
     */

  }, {
    key: "liftSelection",
    value: function liftSelection(sel) {
      return new Selection(sel.selectionStartLineNumber, sel.selectionStartColumn, sel.positionLineNumber, sel.positionColumn);
    }
    /**
     * `a` equals `b`.
     */

  }, {
    key: "selectionsArrEqual",
    value: function selectionsArrEqual(a, b) {
      if (a && !b || !a && b) {
        return false;
      }

      if (!a && !b) {
        return true;
      }

      if (a.length !== b.length) {
        return false;
      }

      for (var i = 0, len = a.length; i < len; i++) {
        if (!this.selectionsEqual(a[i], b[i])) {
          return false;
        }
      }

      return true;
    }
    /**
     * Test if `obj` is an `ISelection`.
     */

  }, {
    key: "isISelection",
    value: function isISelection(obj) {
      return obj && typeof obj.selectionStartLineNumber === 'number' && typeof obj.selectionStartColumn === 'number' && typeof obj.positionLineNumber === 'number' && typeof obj.positionColumn === 'number';
    }
    /**
     * Create with a direction.
     */

  }, {
    key: "createWithDirection",
    value: function createWithDirection(startLineNumber, startColumn, endLineNumber, endColumn, direction) {
      if (direction === 0
      /* LTR */
      ) {
          return new Selection(startLineNumber, startColumn, endLineNumber, endColumn);
        }

      return new Selection(endLineNumber, endColumn, startLineNumber, startColumn);
    }
  }]);

  return Selection;
}(range_Range);
// CONCATENATED MODULE: ./node_modules/monaco-editor/esm/vs/editor/common/core/token.js



/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var token_Token = /*#__PURE__*/function () {
  function Token(offset, type, language) {
    _classCallCheck(this, Token);

    this.offset = offset | 0; // @perf

    this.type = type;
    this.language = language;
  }

  _createClass(Token, [{
    key: "toString",
    value: function toString() {
      return '(' + this.offset + ', ' + this.type + ')';
    }
  }]);

  return Token;
}();
var token_TokenizationResult = function TokenizationResult(tokens, endState) {
  _classCallCheck(this, TokenizationResult);

  this.tokens = tokens;
  this.endState = endState;
};
var token_TokenizationResult2 = function TokenizationResult2(tokens, endState) {
  _classCallCheck(this, TokenizationResult2);

  this.tokens = tokens;
  this.endState = endState;
};
// CONCATENATED MODULE: ./node_modules/monaco-editor/esm/vs/editor/common/standalone/standaloneEnums.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
// THIS IS A GENERATED FILE. DO NOT EDIT DIRECTLY.
var AccessibilitySupport;

(function (AccessibilitySupport) {
  /**
   * This should be the browser case where it is not known if a screen reader is attached or no.
   */
  AccessibilitySupport[AccessibilitySupport["Unknown"] = 0] = "Unknown";
  AccessibilitySupport[AccessibilitySupport["Disabled"] = 1] = "Disabled";
  AccessibilitySupport[AccessibilitySupport["Enabled"] = 2] = "Enabled";
})(AccessibilitySupport || (AccessibilitySupport = {}));

var CompletionItemInsertTextRule;

(function (CompletionItemInsertTextRule) {
  /**
   * Adjust whitespace/indentation of multiline insert texts to
   * match the current line indentation.
   */
  CompletionItemInsertTextRule[CompletionItemInsertTextRule["KeepWhitespace"] = 1] = "KeepWhitespace";
  /**
   * `insertText` is a snippet.
   */

  CompletionItemInsertTextRule[CompletionItemInsertTextRule["InsertAsSnippet"] = 4] = "InsertAsSnippet";
})(CompletionItemInsertTextRule || (CompletionItemInsertTextRule = {}));

var CompletionItemKind;

(function (CompletionItemKind) {
  CompletionItemKind[CompletionItemKind["Method"] = 0] = "Method";
  CompletionItemKind[CompletionItemKind["Function"] = 1] = "Function";
  CompletionItemKind[CompletionItemKind["Constructor"] = 2] = "Constructor";
  CompletionItemKind[CompletionItemKind["Field"] = 3] = "Field";
  CompletionItemKind[CompletionItemKind["Variable"] = 4] = "Variable";
  CompletionItemKind[CompletionItemKind["Class"] = 5] = "Class";
  CompletionItemKind[CompletionItemKind["Struct"] = 6] = "Struct";
  CompletionItemKind[CompletionItemKind["Interface"] = 7] = "Interface";
  CompletionItemKind[CompletionItemKind["Module"] = 8] = "Module";
  CompletionItemKind[CompletionItemKind["Property"] = 9] = "Property";
  CompletionItemKind[CompletionItemKind["Event"] = 10] = "Event";
  CompletionItemKind[CompletionItemKind["Operator"] = 11] = "Operator";
  CompletionItemKind[CompletionItemKind["Unit"] = 12] = "Unit";
  CompletionItemKind[CompletionItemKind["Value"] = 13] = "Value";
  CompletionItemKind[CompletionItemKind["Constant"] = 14] = "Constant";
  CompletionItemKind[CompletionItemKind["Enum"] = 15] = "Enum";
  CompletionItemKind[CompletionItemKind["EnumMember"] = 16] = "EnumMember";
  CompletionItemKind[CompletionItemKind["Keyword"] = 17] = "Keyword";
  CompletionItemKind[CompletionItemKind["Text"] = 18] = "Text";
  CompletionItemKind[CompletionItemKind["Color"] = 19] = "Color";
  CompletionItemKind[CompletionItemKind["File"] = 20] = "File";
  CompletionItemKind[CompletionItemKind["Reference"] = 21] = "Reference";
  CompletionItemKind[CompletionItemKind["Customcolor"] = 22] = "Customcolor";
  CompletionItemKind[CompletionItemKind["Folder"] = 23] = "Folder";
  CompletionItemKind[CompletionItemKind["TypeParameter"] = 24] = "TypeParameter";
  CompletionItemKind[CompletionItemKind["User"] = 25] = "User";
  CompletionItemKind[CompletionItemKind["Issue"] = 26] = "Issue";
  CompletionItemKind[CompletionItemKind["Snippet"] = 27] = "Snippet";
})(CompletionItemKind || (CompletionItemKind = {}));

var CompletionItemTag;

(function (CompletionItemTag) {
  CompletionItemTag[CompletionItemTag["Deprecated"] = 1] = "Deprecated";
})(CompletionItemTag || (CompletionItemTag = {}));
/**
 * How a suggest provider was triggered.
 */


var CompletionTriggerKind;

(function (CompletionTriggerKind) {
  CompletionTriggerKind[CompletionTriggerKind["Invoke"] = 0] = "Invoke";
  CompletionTriggerKind[CompletionTriggerKind["TriggerCharacter"] = 1] = "TriggerCharacter";
  CompletionTriggerKind[CompletionTriggerKind["TriggerForIncompleteCompletions"] = 2] = "TriggerForIncompleteCompletions";
})(CompletionTriggerKind || (CompletionTriggerKind = {}));
/**
 * A positioning preference for rendering content widgets.
 */


var ContentWidgetPositionPreference;

(function (ContentWidgetPositionPreference) {
  /**
   * Place the content widget exactly at a position
   */
  ContentWidgetPositionPreference[ContentWidgetPositionPreference["EXACT"] = 0] = "EXACT";
  /**
   * Place the content widget above a position
   */

  ContentWidgetPositionPreference[ContentWidgetPositionPreference["ABOVE"] = 1] = "ABOVE";
  /**
   * Place the content widget below a position
   */

  ContentWidgetPositionPreference[ContentWidgetPositionPreference["BELOW"] = 2] = "BELOW";
})(ContentWidgetPositionPreference || (ContentWidgetPositionPreference = {}));
/**
 * Describes the reason the cursor has changed its position.
 */


var CursorChangeReason;

(function (CursorChangeReason) {
  /**
   * Unknown or not set.
   */
  CursorChangeReason[CursorChangeReason["NotSet"] = 0] = "NotSet";
  /**
   * A `model.setValue()` was called.
   */

  CursorChangeReason[CursorChangeReason["ContentFlush"] = 1] = "ContentFlush";
  /**
   * The `model` has been changed outside of this cursor and the cursor recovers its position from associated markers.
   */

  CursorChangeReason[CursorChangeReason["RecoverFromMarkers"] = 2] = "RecoverFromMarkers";
  /**
   * There was an explicit user gesture.
   */

  CursorChangeReason[CursorChangeReason["Explicit"] = 3] = "Explicit";
  /**
   * There was a Paste.
   */

  CursorChangeReason[CursorChangeReason["Paste"] = 4] = "Paste";
  /**
   * There was an Undo.
   */

  CursorChangeReason[CursorChangeReason["Undo"] = 5] = "Undo";
  /**
   * There was a Redo.
   */

  CursorChangeReason[CursorChangeReason["Redo"] = 6] = "Redo";
})(CursorChangeReason || (CursorChangeReason = {}));
/**
 * The default end of line to use when instantiating models.
 */


var DefaultEndOfLine;

(function (DefaultEndOfLine) {
  /**
   * Use line feed (\n) as the end of line character.
   */
  DefaultEndOfLine[DefaultEndOfLine["LF"] = 1] = "LF";
  /**
   * Use carriage return and line feed (\r\n) as the end of line character.
   */

  DefaultEndOfLine[DefaultEndOfLine["CRLF"] = 2] = "CRLF";
})(DefaultEndOfLine || (DefaultEndOfLine = {}));
/**
 * A document highlight kind.
 */


var DocumentHighlightKind;

(function (DocumentHighlightKind) {
  /**
   * A textual occurrence.
   */
  DocumentHighlightKind[DocumentHighlightKind["Text"] = 0] = "Text";
  /**
   * Read-access of a symbol, like reading a variable.
   */

  DocumentHighlightKind[DocumentHighlightKind["Read"] = 1] = "Read";
  /**
   * Write-access of a symbol, like writing to a variable.
   */

  DocumentHighlightKind[DocumentHighlightKind["Write"] = 2] = "Write";
})(DocumentHighlightKind || (DocumentHighlightKind = {}));
/**
 * Configuration options for auto indentation in the editor
 */


var EditorAutoIndentStrategy;

(function (EditorAutoIndentStrategy) {
  EditorAutoIndentStrategy[EditorAutoIndentStrategy["None"] = 0] = "None";
  EditorAutoIndentStrategy[EditorAutoIndentStrategy["Keep"] = 1] = "Keep";
  EditorAutoIndentStrategy[EditorAutoIndentStrategy["Brackets"] = 2] = "Brackets";
  EditorAutoIndentStrategy[EditorAutoIndentStrategy["Advanced"] = 3] = "Advanced";
  EditorAutoIndentStrategy[EditorAutoIndentStrategy["Full"] = 4] = "Full";
})(EditorAutoIndentStrategy || (EditorAutoIndentStrategy = {}));

var EditorOption;

(function (EditorOption) {
  EditorOption[EditorOption["acceptSuggestionOnCommitCharacter"] = 0] = "acceptSuggestionOnCommitCharacter";
  EditorOption[EditorOption["acceptSuggestionOnEnter"] = 1] = "acceptSuggestionOnEnter";
  EditorOption[EditorOption["accessibilitySupport"] = 2] = "accessibilitySupport";
  EditorOption[EditorOption["accessibilityPageSize"] = 3] = "accessibilityPageSize";
  EditorOption[EditorOption["ariaLabel"] = 4] = "ariaLabel";
  EditorOption[EditorOption["autoClosingBrackets"] = 5] = "autoClosingBrackets";
  EditorOption[EditorOption["autoClosingOvertype"] = 6] = "autoClosingOvertype";
  EditorOption[EditorOption["autoClosingQuotes"] = 7] = "autoClosingQuotes";
  EditorOption[EditorOption["autoIndent"] = 8] = "autoIndent";
  EditorOption[EditorOption["automaticLayout"] = 9] = "automaticLayout";
  EditorOption[EditorOption["autoSurround"] = 10] = "autoSurround";
  EditorOption[EditorOption["codeLens"] = 11] = "codeLens";
  EditorOption[EditorOption["colorDecorators"] = 12] = "colorDecorators";
  EditorOption[EditorOption["columnSelection"] = 13] = "columnSelection";
  EditorOption[EditorOption["comments"] = 14] = "comments";
  EditorOption[EditorOption["contextmenu"] = 15] = "contextmenu";
  EditorOption[EditorOption["copyWithSyntaxHighlighting"] = 16] = "copyWithSyntaxHighlighting";
  EditorOption[EditorOption["cursorBlinking"] = 17] = "cursorBlinking";
  EditorOption[EditorOption["cursorSmoothCaretAnimation"] = 18] = "cursorSmoothCaretAnimation";
  EditorOption[EditorOption["cursorStyle"] = 19] = "cursorStyle";
  EditorOption[EditorOption["cursorSurroundingLines"] = 20] = "cursorSurroundingLines";
  EditorOption[EditorOption["cursorSurroundingLinesStyle"] = 21] = "cursorSurroundingLinesStyle";
  EditorOption[EditorOption["cursorWidth"] = 22] = "cursorWidth";
  EditorOption[EditorOption["disableLayerHinting"] = 23] = "disableLayerHinting";
  EditorOption[EditorOption["disableMonospaceOptimizations"] = 24] = "disableMonospaceOptimizations";
  EditorOption[EditorOption["dragAndDrop"] = 25] = "dragAndDrop";
  EditorOption[EditorOption["emptySelectionClipboard"] = 26] = "emptySelectionClipboard";
  EditorOption[EditorOption["extraEditorClassName"] = 27] = "extraEditorClassName";
  EditorOption[EditorOption["fastScrollSensitivity"] = 28] = "fastScrollSensitivity";
  EditorOption[EditorOption["find"] = 29] = "find";
  EditorOption[EditorOption["fixedOverflowWidgets"] = 30] = "fixedOverflowWidgets";
  EditorOption[EditorOption["folding"] = 31] = "folding";
  EditorOption[EditorOption["foldingStrategy"] = 32] = "foldingStrategy";
  EditorOption[EditorOption["foldingHighlight"] = 33] = "foldingHighlight";
  EditorOption[EditorOption["unfoldOnClickAfterEndOfLine"] = 34] = "unfoldOnClickAfterEndOfLine";
  EditorOption[EditorOption["fontFamily"] = 35] = "fontFamily";
  EditorOption[EditorOption["fontInfo"] = 36] = "fontInfo";
  EditorOption[EditorOption["fontLigatures"] = 37] = "fontLigatures";
  EditorOption[EditorOption["fontSize"] = 38] = "fontSize";
  EditorOption[EditorOption["fontWeight"] = 39] = "fontWeight";
  EditorOption[EditorOption["formatOnPaste"] = 40] = "formatOnPaste";
  EditorOption[EditorOption["formatOnType"] = 41] = "formatOnType";
  EditorOption[EditorOption["glyphMargin"] = 42] = "glyphMargin";
  EditorOption[EditorOption["gotoLocation"] = 43] = "gotoLocation";
  EditorOption[EditorOption["hideCursorInOverviewRuler"] = 44] = "hideCursorInOverviewRuler";
  EditorOption[EditorOption["highlightActiveIndentGuide"] = 45] = "highlightActiveIndentGuide";
  EditorOption[EditorOption["hover"] = 46] = "hover";
  EditorOption[EditorOption["inDiffEditor"] = 47] = "inDiffEditor";
  EditorOption[EditorOption["letterSpacing"] = 48] = "letterSpacing";
  EditorOption[EditorOption["lightbulb"] = 49] = "lightbulb";
  EditorOption[EditorOption["lineDecorationsWidth"] = 50] = "lineDecorationsWidth";
  EditorOption[EditorOption["lineHeight"] = 51] = "lineHeight";
  EditorOption[EditorOption["lineNumbers"] = 52] = "lineNumbers";
  EditorOption[EditorOption["lineNumbersMinChars"] = 53] = "lineNumbersMinChars";
  EditorOption[EditorOption["links"] = 54] = "links";
  EditorOption[EditorOption["matchBrackets"] = 55] = "matchBrackets";
  EditorOption[EditorOption["minimap"] = 56] = "minimap";
  EditorOption[EditorOption["mouseStyle"] = 57] = "mouseStyle";
  EditorOption[EditorOption["mouseWheelScrollSensitivity"] = 58] = "mouseWheelScrollSensitivity";
  EditorOption[EditorOption["mouseWheelZoom"] = 59] = "mouseWheelZoom";
  EditorOption[EditorOption["multiCursorMergeOverlapping"] = 60] = "multiCursorMergeOverlapping";
  EditorOption[EditorOption["multiCursorModifier"] = 61] = "multiCursorModifier";
  EditorOption[EditorOption["multiCursorPaste"] = 62] = "multiCursorPaste";
  EditorOption[EditorOption["occurrencesHighlight"] = 63] = "occurrencesHighlight";
  EditorOption[EditorOption["overviewRulerBorder"] = 64] = "overviewRulerBorder";
  EditorOption[EditorOption["overviewRulerLanes"] = 65] = "overviewRulerLanes";
  EditorOption[EditorOption["padding"] = 66] = "padding";
  EditorOption[EditorOption["parameterHints"] = 67] = "parameterHints";
  EditorOption[EditorOption["peekWidgetDefaultFocus"] = 68] = "peekWidgetDefaultFocus";
  EditorOption[EditorOption["definitionLinkOpensInPeek"] = 69] = "definitionLinkOpensInPeek";
  EditorOption[EditorOption["quickSuggestions"] = 70] = "quickSuggestions";
  EditorOption[EditorOption["quickSuggestionsDelay"] = 71] = "quickSuggestionsDelay";
  EditorOption[EditorOption["readOnly"] = 72] = "readOnly";
  EditorOption[EditorOption["renameOnType"] = 73] = "renameOnType";
  EditorOption[EditorOption["renderControlCharacters"] = 74] = "renderControlCharacters";
  EditorOption[EditorOption["renderIndentGuides"] = 75] = "renderIndentGuides";
  EditorOption[EditorOption["renderFinalNewline"] = 76] = "renderFinalNewline";
  EditorOption[EditorOption["renderLineHighlight"] = 77] = "renderLineHighlight";
  EditorOption[EditorOption["renderLineHighlightOnlyWhenFocus"] = 78] = "renderLineHighlightOnlyWhenFocus";
  EditorOption[EditorOption["renderValidationDecorations"] = 79] = "renderValidationDecorations";
  EditorOption[EditorOption["renderWhitespace"] = 80] = "renderWhitespace";
  EditorOption[EditorOption["revealHorizontalRightPadding"] = 81] = "revealHorizontalRightPadding";
  EditorOption[EditorOption["roundedSelection"] = 82] = "roundedSelection";
  EditorOption[EditorOption["rulers"] = 83] = "rulers";
  EditorOption[EditorOption["scrollbar"] = 84] = "scrollbar";
  EditorOption[EditorOption["scrollBeyondLastColumn"] = 85] = "scrollBeyondLastColumn";
  EditorOption[EditorOption["scrollBeyondLastLine"] = 86] = "scrollBeyondLastLine";
  EditorOption[EditorOption["scrollPredominantAxis"] = 87] = "scrollPredominantAxis";
  EditorOption[EditorOption["selectionClipboard"] = 88] = "selectionClipboard";
  EditorOption[EditorOption["selectionHighlight"] = 89] = "selectionHighlight";
  EditorOption[EditorOption["selectOnLineNumbers"] = 90] = "selectOnLineNumbers";
  EditorOption[EditorOption["showFoldingControls"] = 91] = "showFoldingControls";
  EditorOption[EditorOption["showUnused"] = 92] = "showUnused";
  EditorOption[EditorOption["snippetSuggestions"] = 93] = "snippetSuggestions";
  EditorOption[EditorOption["smoothScrolling"] = 94] = "smoothScrolling";
  EditorOption[EditorOption["stopRenderingLineAfter"] = 95] = "stopRenderingLineAfter";
  EditorOption[EditorOption["suggest"] = 96] = "suggest";
  EditorOption[EditorOption["suggestFontSize"] = 97] = "suggestFontSize";
  EditorOption[EditorOption["suggestLineHeight"] = 98] = "suggestLineHeight";
  EditorOption[EditorOption["suggestOnTriggerCharacters"] = 99] = "suggestOnTriggerCharacters";
  EditorOption[EditorOption["suggestSelection"] = 100] = "suggestSelection";
  EditorOption[EditorOption["tabCompletion"] = 101] = "tabCompletion";
  EditorOption[EditorOption["tabIndex"] = 102] = "tabIndex";
  EditorOption[EditorOption["unusualLineTerminators"] = 103] = "unusualLineTerminators";
  EditorOption[EditorOption["useTabStops"] = 104] = "useTabStops";
  EditorOption[EditorOption["wordSeparators"] = 105] = "wordSeparators";
  EditorOption[EditorOption["wordWrap"] = 106] = "wordWrap";
  EditorOption[EditorOption["wordWrapBreakAfterCharacters"] = 107] = "wordWrapBreakAfterCharacters";
  EditorOption[EditorOption["wordWrapBreakBeforeCharacters"] = 108] = "wordWrapBreakBeforeCharacters";
  EditorOption[EditorOption["wordWrapColumn"] = 109] = "wordWrapColumn";
  EditorOption[EditorOption["wordWrapMinified"] = 110] = "wordWrapMinified";
  EditorOption[EditorOption["wrappingIndent"] = 111] = "wrappingIndent";
  EditorOption[EditorOption["wrappingStrategy"] = 112] = "wrappingStrategy";
  EditorOption[EditorOption["showDeprecated"] = 113] = "showDeprecated";
  EditorOption[EditorOption["editorClassName"] = 114] = "editorClassName";
  EditorOption[EditorOption["pixelRatio"] = 115] = "pixelRatio";
  EditorOption[EditorOption["tabFocusMode"] = 116] = "tabFocusMode";
  EditorOption[EditorOption["layoutInfo"] = 117] = "layoutInfo";
  EditorOption[EditorOption["wrappingInfo"] = 118] = "wrappingInfo";
})(EditorOption || (EditorOption = {}));
/**
 * End of line character preference.
 */


var EndOfLinePreference;

(function (EndOfLinePreference) {
  /**
   * Use the end of line character identified in the text buffer.
   */
  EndOfLinePreference[EndOfLinePreference["TextDefined"] = 0] = "TextDefined";
  /**
   * Use line feed (\n) as the end of line character.
   */

  EndOfLinePreference[EndOfLinePreference["LF"] = 1] = "LF";
  /**
   * Use carriage return and line feed (\r\n) as the end of line character.
   */

  EndOfLinePreference[EndOfLinePreference["CRLF"] = 2] = "CRLF";
})(EndOfLinePreference || (EndOfLinePreference = {}));
/**
 * End of line character preference.
 */


var EndOfLineSequence;

(function (EndOfLineSequence) {
  /**
   * Use line feed (\n) as the end of line character.
   */
  EndOfLineSequence[EndOfLineSequence["LF"] = 0] = "LF";
  /**
   * Use carriage return and line feed (\r\n) as the end of line character.
   */

  EndOfLineSequence[EndOfLineSequence["CRLF"] = 1] = "CRLF";
})(EndOfLineSequence || (EndOfLineSequence = {}));
/**
 * Describes what to do with the indentation when pressing Enter.
 */


var IndentAction;

(function (IndentAction) {
  /**
   * Insert new line and copy the previous line's indentation.
   */
  IndentAction[IndentAction["None"] = 0] = "None";
  /**
   * Insert new line and indent once (relative to the previous line's indentation).
   */

  IndentAction[IndentAction["Indent"] = 1] = "Indent";
  /**
   * Insert two new lines:
   *  - the first one indented which will hold the cursor
   *  - the second one at the same indentation level
   */

  IndentAction[IndentAction["IndentOutdent"] = 2] = "IndentOutdent";
  /**
   * Insert new line and outdent once (relative to the previous line's indentation).
   */

  IndentAction[IndentAction["Outdent"] = 3] = "Outdent";
})(IndentAction || (IndentAction = {}));
/**
 * Virtual Key Codes, the value does not hold any inherent meaning.
 * Inspired somewhat from https://msdn.microsoft.com/en-us/library/windows/desktop/dd375731(v=vs.85).aspx
 * But these are "more general", as they should work across browsers & OS`s.
 */


var KeyCode;

(function (KeyCode) {
  /**
   * Placed first to cover the 0 value of the enum.
   */
  KeyCode[KeyCode["Unknown"] = 0] = "Unknown";
  KeyCode[KeyCode["Backspace"] = 1] = "Backspace";
  KeyCode[KeyCode["Tab"] = 2] = "Tab";
  KeyCode[KeyCode["Enter"] = 3] = "Enter";
  KeyCode[KeyCode["Shift"] = 4] = "Shift";
  KeyCode[KeyCode["Ctrl"] = 5] = "Ctrl";
  KeyCode[KeyCode["Alt"] = 6] = "Alt";
  KeyCode[KeyCode["PauseBreak"] = 7] = "PauseBreak";
  KeyCode[KeyCode["CapsLock"] = 8] = "CapsLock";
  KeyCode[KeyCode["Escape"] = 9] = "Escape";
  KeyCode[KeyCode["Space"] = 10] = "Space";
  KeyCode[KeyCode["PageUp"] = 11] = "PageUp";
  KeyCode[KeyCode["PageDown"] = 12] = "PageDown";
  KeyCode[KeyCode["End"] = 13] = "End";
  KeyCode[KeyCode["Home"] = 14] = "Home";
  KeyCode[KeyCode["LeftArrow"] = 15] = "LeftArrow";
  KeyCode[KeyCode["UpArrow"] = 16] = "UpArrow";
  KeyCode[KeyCode["RightArrow"] = 17] = "RightArrow";
  KeyCode[KeyCode["DownArrow"] = 18] = "DownArrow";
  KeyCode[KeyCode["Insert"] = 19] = "Insert";
  KeyCode[KeyCode["Delete"] = 20] = "Delete";
  KeyCode[KeyCode["KEY_0"] = 21] = "KEY_0";
  KeyCode[KeyCode["KEY_1"] = 22] = "KEY_1";
  KeyCode[KeyCode["KEY_2"] = 23] = "KEY_2";
  KeyCode[KeyCode["KEY_3"] = 24] = "KEY_3";
  KeyCode[KeyCode["KEY_4"] = 25] = "KEY_4";
  KeyCode[KeyCode["KEY_5"] = 26] = "KEY_5";
  KeyCode[KeyCode["KEY_6"] = 27] = "KEY_6";
  KeyCode[KeyCode["KEY_7"] = 28] = "KEY_7";
  KeyCode[KeyCode["KEY_8"] = 29] = "KEY_8";
  KeyCode[KeyCode["KEY_9"] = 30] = "KEY_9";
  KeyCode[KeyCode["KEY_A"] = 31] = "KEY_A";
  KeyCode[KeyCode["KEY_B"] = 32] = "KEY_B";
  KeyCode[KeyCode["KEY_C"] = 33] = "KEY_C";
  KeyCode[KeyCode["KEY_D"] = 34] = "KEY_D";
  KeyCode[KeyCode["KEY_E"] = 35] = "KEY_E";
  KeyCode[KeyCode["KEY_F"] = 36] = "KEY_F";
  KeyCode[KeyCode["KEY_G"] = 37] = "KEY_G";
  KeyCode[KeyCode["KEY_H"] = 38] = "KEY_H";
  KeyCode[KeyCode["KEY_I"] = 39] = "KEY_I";
  KeyCode[KeyCode["KEY_J"] = 40] = "KEY_J";
  KeyCode[KeyCode["KEY_K"] = 41] = "KEY_K";
  KeyCode[KeyCode["KEY_L"] = 42] = "KEY_L";
  KeyCode[KeyCode["KEY_M"] = 43] = "KEY_M";
  KeyCode[KeyCode["KEY_N"] = 44] = "KEY_N";
  KeyCode[KeyCode["KEY_O"] = 45] = "KEY_O";
  KeyCode[KeyCode["KEY_P"] = 46] = "KEY_P";
  KeyCode[KeyCode["KEY_Q"] = 47] = "KEY_Q";
  KeyCode[KeyCode["KEY_R"] = 48] = "KEY_R";
  KeyCode[KeyCode["KEY_S"] = 49] = "KEY_S";
  KeyCode[KeyCode["KEY_T"] = 50] = "KEY_T";
  KeyCode[KeyCode["KEY_U"] = 51] = "KEY_U";
  KeyCode[KeyCode["KEY_V"] = 52] = "KEY_V";
  KeyCode[KeyCode["KEY_W"] = 53] = "KEY_W";
  KeyCode[KeyCode["KEY_X"] = 54] = "KEY_X";
  KeyCode[KeyCode["KEY_Y"] = 55] = "KEY_Y";
  KeyCode[KeyCode["KEY_Z"] = 56] = "KEY_Z";
  KeyCode[KeyCode["Meta"] = 57] = "Meta";
  KeyCode[KeyCode["ContextMenu"] = 58] = "ContextMenu";
  KeyCode[KeyCode["F1"] = 59] = "F1";
  KeyCode[KeyCode["F2"] = 60] = "F2";
  KeyCode[KeyCode["F3"] = 61] = "F3";
  KeyCode[KeyCode["F4"] = 62] = "F4";
  KeyCode[KeyCode["F5"] = 63] = "F5";
  KeyCode[KeyCode["F6"] = 64] = "F6";
  KeyCode[KeyCode["F7"] = 65] = "F7";
  KeyCode[KeyCode["F8"] = 66] = "F8";
  KeyCode[KeyCode["F9"] = 67] = "F9";
  KeyCode[KeyCode["F10"] = 68] = "F10";
  KeyCode[KeyCode["F11"] = 69] = "F11";
  KeyCode[KeyCode["F12"] = 70] = "F12";
  KeyCode[KeyCode["F13"] = 71] = "F13";
  KeyCode[KeyCode["F14"] = 72] = "F14";
  KeyCode[KeyCode["F15"] = 73] = "F15";
  KeyCode[KeyCode["F16"] = 74] = "F16";
  KeyCode[KeyCode["F17"] = 75] = "F17";
  KeyCode[KeyCode["F18"] = 76] = "F18";
  KeyCode[KeyCode["F19"] = 77] = "F19";
  KeyCode[KeyCode["NumLock"] = 78] = "NumLock";
  KeyCode[KeyCode["ScrollLock"] = 79] = "ScrollLock";
  /**
   * Used for miscellaneous characters; it can vary by keyboard.
   * For the US standard keyboard, the ';:' key
   */

  KeyCode[KeyCode["US_SEMICOLON"] = 80] = "US_SEMICOLON";
  /**
   * For any country/region, the '+' key
   * For the US standard keyboard, the '=+' key
   */

  KeyCode[KeyCode["US_EQUAL"] = 81] = "US_EQUAL";
  /**
   * For any country/region, the ',' key
   * For the US standard keyboard, the ',<' key
   */

  KeyCode[KeyCode["US_COMMA"] = 82] = "US_COMMA";
  /**
   * For any country/region, the '-' key
   * For the US standard keyboard, the '-_' key
   */

  KeyCode[KeyCode["US_MINUS"] = 83] = "US_MINUS";
  /**
   * For any country/region, the '.' key
   * For the US standard keyboard, the '.>' key
   */

  KeyCode[KeyCode["US_DOT"] = 84] = "US_DOT";
  /**
   * Used for miscellaneous characters; it can vary by keyboard.
   * For the US standard keyboard, the '/?' key
   */

  KeyCode[KeyCode["US_SLASH"] = 85] = "US_SLASH";
  /**
   * Used for miscellaneous characters; it can vary by keyboard.
   * For the US standard keyboard, the '`~' key
   */

  KeyCode[KeyCode["US_BACKTICK"] = 86] = "US_BACKTICK";
  /**
   * Used for miscellaneous characters; it can vary by keyboard.
   * For the US standard keyboard, the '[{' key
   */

  KeyCode[KeyCode["US_OPEN_SQUARE_BRACKET"] = 87] = "US_OPEN_SQUARE_BRACKET";
  /**
   * Used for miscellaneous characters; it can vary by keyboard.
   * For the US standard keyboard, the '\|' key
   */

  KeyCode[KeyCode["US_BACKSLASH"] = 88] = "US_BACKSLASH";
  /**
   * Used for miscellaneous characters; it can vary by keyboard.
   * For the US standard keyboard, the ']}' key
   */

  KeyCode[KeyCode["US_CLOSE_SQUARE_BRACKET"] = 89] = "US_CLOSE_SQUARE_BRACKET";
  /**
   * Used for miscellaneous characters; it can vary by keyboard.
   * For the US standard keyboard, the ''"' key
   */

  KeyCode[KeyCode["US_QUOTE"] = 90] = "US_QUOTE";
  /**
   * Used for miscellaneous characters; it can vary by keyboard.
   */

  KeyCode[KeyCode["OEM_8"] = 91] = "OEM_8";
  /**
   * Either the angle bracket key or the backslash key on the RT 102-key keyboard.
   */

  KeyCode[KeyCode["OEM_102"] = 92] = "OEM_102";
  KeyCode[KeyCode["NUMPAD_0"] = 93] = "NUMPAD_0";
  KeyCode[KeyCode["NUMPAD_1"] = 94] = "NUMPAD_1";
  KeyCode[KeyCode["NUMPAD_2"] = 95] = "NUMPAD_2";
  KeyCode[KeyCode["NUMPAD_3"] = 96] = "NUMPAD_3";
  KeyCode[KeyCode["NUMPAD_4"] = 97] = "NUMPAD_4";
  KeyCode[KeyCode["NUMPAD_5"] = 98] = "NUMPAD_5";
  KeyCode[KeyCode["NUMPAD_6"] = 99] = "NUMPAD_6";
  KeyCode[KeyCode["NUMPAD_7"] = 100] = "NUMPAD_7";
  KeyCode[KeyCode["NUMPAD_8"] = 101] = "NUMPAD_8";
  KeyCode[KeyCode["NUMPAD_9"] = 102] = "NUMPAD_9";
  KeyCode[KeyCode["NUMPAD_MULTIPLY"] = 103] = "NUMPAD_MULTIPLY";
  KeyCode[KeyCode["NUMPAD_ADD"] = 104] = "NUMPAD_ADD";
  KeyCode[KeyCode["NUMPAD_SEPARATOR"] = 105] = "NUMPAD_SEPARATOR";
  KeyCode[KeyCode["NUMPAD_SUBTRACT"] = 106] = "NUMPAD_SUBTRACT";
  KeyCode[KeyCode["NUMPAD_DECIMAL"] = 107] = "NUMPAD_DECIMAL";
  KeyCode[KeyCode["NUMPAD_DIVIDE"] = 108] = "NUMPAD_DIVIDE";
  /**
   * Cover all key codes when IME is processing input.
   */

  KeyCode[KeyCode["KEY_IN_COMPOSITION"] = 109] = "KEY_IN_COMPOSITION";
  KeyCode[KeyCode["ABNT_C1"] = 110] = "ABNT_C1";
  KeyCode[KeyCode["ABNT_C2"] = 111] = "ABNT_C2";
  /**
   * Placed last to cover the length of the enum.
   * Please do not depend on this value!
   */

  KeyCode[KeyCode["MAX_VALUE"] = 112] = "MAX_VALUE";
})(KeyCode || (KeyCode = {}));

var MarkerSeverity;

(function (MarkerSeverity) {
  MarkerSeverity[MarkerSeverity["Hint"] = 1] = "Hint";
  MarkerSeverity[MarkerSeverity["Info"] = 2] = "Info";
  MarkerSeverity[MarkerSeverity["Warning"] = 4] = "Warning";
  MarkerSeverity[MarkerSeverity["Error"] = 8] = "Error";
})(MarkerSeverity || (MarkerSeverity = {}));

var MarkerTag;

(function (MarkerTag) {
  MarkerTag[MarkerTag["Unnecessary"] = 1] = "Unnecessary";
  MarkerTag[MarkerTag["Deprecated"] = 2] = "Deprecated";
})(MarkerTag || (MarkerTag = {}));
/**
 * Position in the minimap to render the decoration.
 */


var MinimapPosition;

(function (MinimapPosition) {
  MinimapPosition[MinimapPosition["Inline"] = 1] = "Inline";
  MinimapPosition[MinimapPosition["Gutter"] = 2] = "Gutter";
})(MinimapPosition || (MinimapPosition = {}));
/**
 * Type of hit element with the mouse in the editor.
 */


var MouseTargetType;

(function (MouseTargetType) {
  /**
   * Mouse is on top of an unknown element.
   */
  MouseTargetType[MouseTargetType["UNKNOWN"] = 0] = "UNKNOWN";
  /**
   * Mouse is on top of the textarea used for input.
   */

  MouseTargetType[MouseTargetType["TEXTAREA"] = 1] = "TEXTAREA";
  /**
   * Mouse is on top of the glyph margin
   */

  MouseTargetType[MouseTargetType["GUTTER_GLYPH_MARGIN"] = 2] = "GUTTER_GLYPH_MARGIN";
  /**
   * Mouse is on top of the line numbers
   */

  MouseTargetType[MouseTargetType["GUTTER_LINE_NUMBERS"] = 3] = "GUTTER_LINE_NUMBERS";
  /**
   * Mouse is on top of the line decorations
   */

  MouseTargetType[MouseTargetType["GUTTER_LINE_DECORATIONS"] = 4] = "GUTTER_LINE_DECORATIONS";
  /**
   * Mouse is on top of the whitespace left in the gutter by a view zone.
   */

  MouseTargetType[MouseTargetType["GUTTER_VIEW_ZONE"] = 5] = "GUTTER_VIEW_ZONE";
  /**
   * Mouse is on top of text in the content.
   */

  MouseTargetType[MouseTargetType["CONTENT_TEXT"] = 6] = "CONTENT_TEXT";
  /**
   * Mouse is on top of empty space in the content (e.g. after line text or below last line)
   */

  MouseTargetType[MouseTargetType["CONTENT_EMPTY"] = 7] = "CONTENT_EMPTY";
  /**
   * Mouse is on top of a view zone in the content.
   */

  MouseTargetType[MouseTargetType["CONTENT_VIEW_ZONE"] = 8] = "CONTENT_VIEW_ZONE";
  /**
   * Mouse is on top of a content widget.
   */

  MouseTargetType[MouseTargetType["CONTENT_WIDGET"] = 9] = "CONTENT_WIDGET";
  /**
   * Mouse is on top of the decorations overview ruler.
   */

  MouseTargetType[MouseTargetType["OVERVIEW_RULER"] = 10] = "OVERVIEW_RULER";
  /**
   * Mouse is on top of a scrollbar.
   */

  MouseTargetType[MouseTargetType["SCROLLBAR"] = 11] = "SCROLLBAR";
  /**
   * Mouse is on top of an overlay widget.
   */

  MouseTargetType[MouseTargetType["OVERLAY_WIDGET"] = 12] = "OVERLAY_WIDGET";
  /**
   * Mouse is outside of the editor.
   */

  MouseTargetType[MouseTargetType["OUTSIDE_EDITOR"] = 13] = "OUTSIDE_EDITOR";
})(MouseTargetType || (MouseTargetType = {}));
/**
 * A positioning preference for rendering overlay widgets.
 */


var OverlayWidgetPositionPreference;

(function (OverlayWidgetPositionPreference) {
  /**
   * Position the overlay widget in the top right corner
   */
  OverlayWidgetPositionPreference[OverlayWidgetPositionPreference["TOP_RIGHT_CORNER"] = 0] = "TOP_RIGHT_CORNER";
  /**
   * Position the overlay widget in the bottom right corner
   */

  OverlayWidgetPositionPreference[OverlayWidgetPositionPreference["BOTTOM_RIGHT_CORNER"] = 1] = "BOTTOM_RIGHT_CORNER";
  /**
   * Position the overlay widget in the top center
   */

  OverlayWidgetPositionPreference[OverlayWidgetPositionPreference["TOP_CENTER"] = 2] = "TOP_CENTER";
})(OverlayWidgetPositionPreference || (OverlayWidgetPositionPreference = {}));
/**
 * Vertical Lane in the overview ruler of the editor.
 */


var OverviewRulerLane;

(function (OverviewRulerLane) {
  OverviewRulerLane[OverviewRulerLane["Left"] = 1] = "Left";
  OverviewRulerLane[OverviewRulerLane["Center"] = 2] = "Center";
  OverviewRulerLane[OverviewRulerLane["Right"] = 4] = "Right";
  OverviewRulerLane[OverviewRulerLane["Full"] = 7] = "Full";
})(OverviewRulerLane || (OverviewRulerLane = {}));

var RenderLineNumbersType;

(function (RenderLineNumbersType) {
  RenderLineNumbersType[RenderLineNumbersType["Off"] = 0] = "Off";
  RenderLineNumbersType[RenderLineNumbersType["On"] = 1] = "On";
  RenderLineNumbersType[RenderLineNumbersType["Relative"] = 2] = "Relative";
  RenderLineNumbersType[RenderLineNumbersType["Interval"] = 3] = "Interval";
  RenderLineNumbersType[RenderLineNumbersType["Custom"] = 4] = "Custom";
})(RenderLineNumbersType || (RenderLineNumbersType = {}));

var RenderMinimap;

(function (RenderMinimap) {
  RenderMinimap[RenderMinimap["None"] = 0] = "None";
  RenderMinimap[RenderMinimap["Text"] = 1] = "Text";
  RenderMinimap[RenderMinimap["Blocks"] = 2] = "Blocks";
})(RenderMinimap || (RenderMinimap = {}));

var ScrollType;

(function (ScrollType) {
  ScrollType[ScrollType["Smooth"] = 0] = "Smooth";
  ScrollType[ScrollType["Immediate"] = 1] = "Immediate";
})(ScrollType || (ScrollType = {}));

var ScrollbarVisibility;

(function (ScrollbarVisibility) {
  ScrollbarVisibility[ScrollbarVisibility["Auto"] = 1] = "Auto";
  ScrollbarVisibility[ScrollbarVisibility["Hidden"] = 2] = "Hidden";
  ScrollbarVisibility[ScrollbarVisibility["Visible"] = 3] = "Visible";
})(ScrollbarVisibility || (ScrollbarVisibility = {}));
/**
 * The direction of a selection.
 */


var SelectionDirection;

(function (SelectionDirection) {
  /**
   * The selection starts above where it ends.
   */
  SelectionDirection[SelectionDirection["LTR"] = 0] = "LTR";
  /**
   * The selection starts below where it ends.
   */

  SelectionDirection[SelectionDirection["RTL"] = 1] = "RTL";
})(SelectionDirection || (SelectionDirection = {}));

var SignatureHelpTriggerKind;

(function (SignatureHelpTriggerKind) {
  SignatureHelpTriggerKind[SignatureHelpTriggerKind["Invoke"] = 1] = "Invoke";
  SignatureHelpTriggerKind[SignatureHelpTriggerKind["TriggerCharacter"] = 2] = "TriggerCharacter";
  SignatureHelpTriggerKind[SignatureHelpTriggerKind["ContentChange"] = 3] = "ContentChange";
})(SignatureHelpTriggerKind || (SignatureHelpTriggerKind = {}));
/**
 * A symbol kind.
 */


var SymbolKind;

(function (SymbolKind) {
  SymbolKind[SymbolKind["File"] = 0] = "File";
  SymbolKind[SymbolKind["Module"] = 1] = "Module";
  SymbolKind[SymbolKind["Namespace"] = 2] = "Namespace";
  SymbolKind[SymbolKind["Package"] = 3] = "Package";
  SymbolKind[SymbolKind["Class"] = 4] = "Class";
  SymbolKind[SymbolKind["Method"] = 5] = "Method";
  SymbolKind[SymbolKind["Property"] = 6] = "Property";
  SymbolKind[SymbolKind["Field"] = 7] = "Field";
  SymbolKind[SymbolKind["Constructor"] = 8] = "Constructor";
  SymbolKind[SymbolKind["Enum"] = 9] = "Enum";
  SymbolKind[SymbolKind["Interface"] = 10] = "Interface";
  SymbolKind[SymbolKind["Function"] = 11] = "Function";
  SymbolKind[SymbolKind["Variable"] = 12] = "Variable";
  SymbolKind[SymbolKind["Constant"] = 13] = "Constant";
  SymbolKind[SymbolKind["String"] = 14] = "String";
  SymbolKind[SymbolKind["Number"] = 15] = "Number";
  SymbolKind[SymbolKind["Boolean"] = 16] = "Boolean";
  SymbolKind[SymbolKind["Array"] = 17] = "Array";
  SymbolKind[SymbolKind["Object"] = 18] = "Object";
  SymbolKind[SymbolKind["Key"] = 19] = "Key";
  SymbolKind[SymbolKind["Null"] = 20] = "Null";
  SymbolKind[SymbolKind["EnumMember"] = 21] = "EnumMember";
  SymbolKind[SymbolKind["Struct"] = 22] = "Struct";
  SymbolKind[SymbolKind["Event"] = 23] = "Event";
  SymbolKind[SymbolKind["Operator"] = 24] = "Operator";
  SymbolKind[SymbolKind["TypeParameter"] = 25] = "TypeParameter";
})(SymbolKind || (SymbolKind = {}));

var SymbolTag;

(function (SymbolTag) {
  SymbolTag[SymbolTag["Deprecated"] = 1] = "Deprecated";
})(SymbolTag || (SymbolTag = {}));
/**
 * The kind of animation in which the editor's cursor should be rendered.
 */


var TextEditorCursorBlinkingStyle;

(function (TextEditorCursorBlinkingStyle) {
  /**
   * Hidden
   */
  TextEditorCursorBlinkingStyle[TextEditorCursorBlinkingStyle["Hidden"] = 0] = "Hidden";
  /**
   * Blinking
   */

  TextEditorCursorBlinkingStyle[TextEditorCursorBlinkingStyle["Blink"] = 1] = "Blink";
  /**
   * Blinking with smooth fading
   */

  TextEditorCursorBlinkingStyle[TextEditorCursorBlinkingStyle["Smooth"] = 2] = "Smooth";
  /**
   * Blinking with prolonged filled state and smooth fading
   */

  TextEditorCursorBlinkingStyle[TextEditorCursorBlinkingStyle["Phase"] = 3] = "Phase";
  /**
   * Expand collapse animation on the y axis
   */

  TextEditorCursorBlinkingStyle[TextEditorCursorBlinkingStyle["Expand"] = 4] = "Expand";
  /**
   * No-Blinking
   */

  TextEditorCursorBlinkingStyle[TextEditorCursorBlinkingStyle["Solid"] = 5] = "Solid";
})(TextEditorCursorBlinkingStyle || (TextEditorCursorBlinkingStyle = {}));
/**
 * The style in which the editor's cursor should be rendered.
 */


var TextEditorCursorStyle;

(function (TextEditorCursorStyle) {
  /**
   * As a vertical line (sitting between two characters).
   */
  TextEditorCursorStyle[TextEditorCursorStyle["Line"] = 1] = "Line";
  /**
   * As a block (sitting on top of a character).
   */

  TextEditorCursorStyle[TextEditorCursorStyle["Block"] = 2] = "Block";
  /**
   * As a horizontal line (sitting under a character).
   */

  TextEditorCursorStyle[TextEditorCursorStyle["Underline"] = 3] = "Underline";
  /**
   * As a thin vertical line (sitting between two characters).
   */

  TextEditorCursorStyle[TextEditorCursorStyle["LineThin"] = 4] = "LineThin";
  /**
   * As an outlined block (sitting on top of a character).
   */

  TextEditorCursorStyle[TextEditorCursorStyle["BlockOutline"] = 5] = "BlockOutline";
  /**
   * As a thin horizontal line (sitting under a character).
   */

  TextEditorCursorStyle[TextEditorCursorStyle["UnderlineThin"] = 6] = "UnderlineThin";
})(TextEditorCursorStyle || (TextEditorCursorStyle = {}));
/**
 * Describes the behavior of decorations when typing/editing near their edges.
 * Note: Please do not edit the values, as they very carefully match `DecorationRangeBehavior`
 */


var TrackedRangeStickiness;

(function (TrackedRangeStickiness) {
  TrackedRangeStickiness[TrackedRangeStickiness["AlwaysGrowsWhenTypingAtEdges"] = 0] = "AlwaysGrowsWhenTypingAtEdges";
  TrackedRangeStickiness[TrackedRangeStickiness["NeverGrowsWhenTypingAtEdges"] = 1] = "NeverGrowsWhenTypingAtEdges";
  TrackedRangeStickiness[TrackedRangeStickiness["GrowsOnlyWhenTypingBefore"] = 2] = "GrowsOnlyWhenTypingBefore";
  TrackedRangeStickiness[TrackedRangeStickiness["GrowsOnlyWhenTypingAfter"] = 3] = "GrowsOnlyWhenTypingAfter";
})(TrackedRangeStickiness || (TrackedRangeStickiness = {}));
/**
 * Describes how to indent wrapped lines.
 */


var WrappingIndent;

(function (WrappingIndent) {
  /**
   * No indentation => wrapped lines begin at column 1.
   */
  WrappingIndent[WrappingIndent["None"] = 0] = "None";
  /**
   * Same => wrapped lines get the same indentation as the parent.
   */

  WrappingIndent[WrappingIndent["Same"] = 1] = "Same";
  /**
   * Indent => wrapped lines get +1 indentation toward the parent.
   */

  WrappingIndent[WrappingIndent["Indent"] = 2] = "Indent";
  /**
   * DeepIndent => wrapped lines get +2 indentation toward the parent.
   */

  WrappingIndent[WrappingIndent["DeepIndent"] = 3] = "DeepIndent";
})(WrappingIndent || (WrappingIndent = {}));
// CONCATENATED MODULE: ./node_modules/monaco-editor/esm/vs/editor/common/standalone/standaloneBase.js



/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/









var standaloneBase_KeyMod = /*#__PURE__*/function () {
  function KeyMod() {
    _classCallCheck(this, KeyMod);
  }

  _createClass(KeyMod, null, [{
    key: "chord",
    value: function chord(firstPart, secondPart) {
      return KeyChord(firstPart, secondPart);
    }
  }]);

  return KeyMod;
}();
standaloneBase_KeyMod.CtrlCmd = 2048
/* CtrlCmd */
;
standaloneBase_KeyMod.Shift = 1024
/* Shift */
;
standaloneBase_KeyMod.Alt = 512
/* Alt */
;
standaloneBase_KeyMod.WinCtrl = 256
/* WinCtrl */
;
function createMonacoBaseAPI() {
  return {
    editor: undefined,
    languages: undefined,
    CancellationTokenSource: cancellation_CancellationTokenSource,
    Emitter: event_Emitter,
    KeyCode: KeyCode,
    KeyMod: standaloneBase_KeyMod,
    Position: position_Position,
    Range: range_Range,
    Selection: selection_Selection,
    SelectionDirection: SelectionDirection,
    MarkerSeverity: MarkerSeverity,
    MarkerTag: MarkerTag,
    Uri: uri_URI,
    Token: token_Token
  };
}
// CONCATENATED MODULE: ./node_modules/monaco-editor/esm/vs/editor/common/services/editorSimpleWorker.js








function editorSimpleWorker_createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = editorSimpleWorker_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function editorSimpleWorker_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return editorSimpleWorker_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return editorSimpleWorker_arrayLikeToArray(o, minLen); }

function editorSimpleWorker_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};














/**
 * @internal
 */

var editorSimpleWorker_MirrorModel = /*#__PURE__*/function (_BaseMirrorModel) {
  _inherits(MirrorModel, _BaseMirrorModel);

  function MirrorModel() {
    _classCallCheck(this, MirrorModel);

    return _possibleConstructorReturn(this, _getPrototypeOf(MirrorModel).apply(this, arguments));
  }

  _createClass(MirrorModel, [{
    key: "getValue",
    value: function getValue() {
      return this.getText();
    }
  }, {
    key: "getLinesContent",
    value: function getLinesContent() {
      return this._lines.slice(0);
    }
  }, {
    key: "getLineCount",
    value: function getLineCount() {
      return this._lines.length;
    }
  }, {
    key: "getLineContent",
    value: function getLineContent(lineNumber) {
      return this._lines[lineNumber - 1];
    }
  }, {
    key: "getWordAtPosition",
    value: function getWordAtPosition(position, wordDefinition) {
      var wordAtText = getWordAtText(position.column, ensureValidWordDefinition(wordDefinition), this._lines[position.lineNumber - 1], 0);

      if (wordAtText) {
        return new range_Range(position.lineNumber, wordAtText.startColumn, position.lineNumber, wordAtText.endColumn);
      }

      return null;
    }
  }, {
    key: "words",
    value: function words(wordDefinition) {
      var lines = this._lines;

      var wordenize = this._wordenize.bind(this);

      var lineNumber = 0;
      var lineText = '';
      var wordRangesIdx = 0;
      var wordRanges = [];
      return _defineProperty({}, Symbol.iterator, /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        var value;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (false) {}

                if (!(wordRangesIdx < wordRanges.length)) {
                  _context.next = 8;
                  break;
                }

                value = lineText.substring(wordRanges[wordRangesIdx].start, wordRanges[wordRangesIdx].end);
                wordRangesIdx += 1;
                _context.next = 6;
                return value;

              case 6:
                _context.next = 16;
                break;

              case 8:
                if (!(lineNumber < lines.length)) {
                  _context.next = 15;
                  break;
                }

                lineText = lines[lineNumber];
                wordRanges = wordenize(lineText, wordDefinition);
                wordRangesIdx = 0;
                lineNumber += 1;
                _context.next = 16;
                break;

              case 15:
                return _context.abrupt("break", 18);

              case 16:
                _context.next = 0;
                break;

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
    }
  }, {
    key: "getLineWords",
    value: function getLineWords(lineNumber, wordDefinition) {
      var content = this._lines[lineNumber - 1];

      var ranges = this._wordenize(content, wordDefinition);

      var words = [];

      var _iterator = editorSimpleWorker_createForOfIteratorHelper(ranges),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var range = _step.value;
          words.push({
            word: content.substring(range.start, range.end),
            startColumn: range.start + 1,
            endColumn: range.end + 1
          });
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return words;
    }
  }, {
    key: "_wordenize",
    value: function _wordenize(content, wordDefinition) {
      var result = [];
      var match;
      wordDefinition.lastIndex = 0; // reset lastIndex just to be sure

      while (match = wordDefinition.exec(content)) {
        if (match[0].length === 0) {
          // it did match the empty string
          break;
        }

        result.push({
          start: match.index,
          end: match.index + match[0].length
        });
      }

      return result;
    }
  }, {
    key: "getValueInRange",
    value: function getValueInRange(range) {
      range = this._validateRange(range);

      if (range.startLineNumber === range.endLineNumber) {
        return this._lines[range.startLineNumber - 1].substring(range.startColumn - 1, range.endColumn - 1);
      }

      var lineEnding = this._eol;
      var startLineIndex = range.startLineNumber - 1;
      var endLineIndex = range.endLineNumber - 1;
      var resultLines = [];
      resultLines.push(this._lines[startLineIndex].substring(range.startColumn - 1));

      for (var i = startLineIndex + 1; i < endLineIndex; i++) {
        resultLines.push(this._lines[i]);
      }

      resultLines.push(this._lines[endLineIndex].substring(0, range.endColumn - 1));
      return resultLines.join(lineEnding);
    }
  }, {
    key: "offsetAt",
    value: function offsetAt(position) {
      position = this._validatePosition(position);

      this._ensureLineStarts();

      return this._lineStarts.getAccumulatedValue(position.lineNumber - 2) + (position.column - 1);
    }
  }, {
    key: "positionAt",
    value: function positionAt(offset) {
      offset = Math.floor(offset);
      offset = Math.max(0, offset);

      this._ensureLineStarts();

      var out = this._lineStarts.getIndexOf(offset);

      var lineLength = this._lines[out.index].length; // Ensure we return a valid position

      return {
        lineNumber: 1 + out.index,
        column: 1 + Math.min(out.remainder, lineLength)
      };
    }
  }, {
    key: "_validateRange",
    value: function _validateRange(range) {
      var start = this._validatePosition({
        lineNumber: range.startLineNumber,
        column: range.startColumn
      });

      var end = this._validatePosition({
        lineNumber: range.endLineNumber,
        column: range.endColumn
      });

      if (start.lineNumber !== range.startLineNumber || start.column !== range.startColumn || end.lineNumber !== range.endLineNumber || end.column !== range.endColumn) {
        return {
          startLineNumber: start.lineNumber,
          startColumn: start.column,
          endLineNumber: end.lineNumber,
          endColumn: end.column
        };
      }

      return range;
    }
  }, {
    key: "_validatePosition",
    value: function _validatePosition(position) {
      if (!position_Position.isIPosition(position)) {
        throw new Error('bad position');
      }

      var lineNumber = position.lineNumber,
          column = position.column;
      var hasChanged = false;

      if (lineNumber < 1) {
        lineNumber = 1;
        column = 1;
        hasChanged = true;
      } else if (lineNumber > this._lines.length) {
        lineNumber = this._lines.length;
        column = this._lines[lineNumber - 1].length + 1;
        hasChanged = true;
      } else {
        var maxCharacter = this._lines[lineNumber - 1].length + 1;

        if (column < 1) {
          column = 1;
          hasChanged = true;
        } else if (column > maxCharacter) {
          column = maxCharacter;
          hasChanged = true;
        }
      }

      if (!hasChanged) {
        return position;
      } else {
        return {
          lineNumber: lineNumber,
          column: column
        };
      }
    }
  }, {
    key: "uri",
    get: function get() {
      return this._uri;
    }
  }, {
    key: "version",
    get: function get() {
      return this._versionId;
    }
  }, {
    key: "eol",
    get: function get() {
      return this._eol;
    }
  }]);

  return MirrorModel;
}(mirrorTextModel_MirrorTextModel);
/**
 * @internal
 */


var editorSimpleWorker_EditorSimpleWorker = /*#__PURE__*/function () {
  function EditorSimpleWorker(host, foreignModuleFactory) {
    _classCallCheck(this, EditorSimpleWorker);

    this._host = host;
    this._models = Object.create(null);
    this._foreignModuleFactory = foreignModuleFactory;
    this._foreignModule = null;
  }

  _createClass(EditorSimpleWorker, [{
    key: "dispose",
    value: function dispose() {
      this._models = Object.create(null);
    }
  }, {
    key: "_getModel",
    value: function _getModel(uri) {
      return this._models[uri];
    }
  }, {
    key: "_getModels",
    value: function _getModels() {
      var _this = this;

      var all = [];
      Object.keys(this._models).forEach(function (key) {
        return all.push(_this._models[key]);
      });
      return all;
    }
  }, {
    key: "acceptNewModel",
    value: function acceptNewModel(data) {
      this._models[data.url] = new editorSimpleWorker_MirrorModel(uri_URI.parse(data.url), data.lines, data.EOL, data.versionId);
    }
  }, {
    key: "acceptModelChanged",
    value: function acceptModelChanged(strURL, e) {
      if (!this._models[strURL]) {
        return;
      }

      var model = this._models[strURL];
      model.onEvents(e);
    }
  }, {
    key: "acceptRemovedModel",
    value: function acceptRemovedModel(strURL) {
      if (!this._models[strURL]) {
        return;
      }

      delete this._models[strURL];
    } // ---- BEGIN diff --------------------------------------------------------------------------

  }, {
    key: "computeDiff",
    value: function computeDiff(originalUrl, modifiedUrl, ignoreTrimWhitespace, maxComputationTime) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/regenerator_default.a.mark(function _callee2() {
        var original, modified, originalLines, modifiedLines, diffComputer, diffResult, identical;
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                original = this._getModel(originalUrl);
                modified = this._getModel(modifiedUrl);

                if (!(!original || !modified)) {
                  _context2.next = 4;
                  break;
                }

                return _context2.abrupt("return", null);

              case 4:
                originalLines = original.getLinesContent();
                modifiedLines = modified.getLinesContent();
                diffComputer = new diffComputer_DiffComputer(originalLines, modifiedLines, {
                  shouldComputeCharChanges: true,
                  shouldPostProcessCharChanges: true,
                  shouldIgnoreTrimWhitespace: ignoreTrimWhitespace,
                  shouldMakePrettyDiff: true,
                  maxComputationTime: maxComputationTime
                });
                diffResult = diffComputer.computeDiff();
                identical = diffResult.changes.length > 0 ? false : this._modelsAreIdentical(original, modified);
                return _context2.abrupt("return", {
                  quitEarly: diffResult.quitEarly,
                  identical: identical,
                  changes: diffResult.changes
                });

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
    }
  }, {
    key: "_modelsAreIdentical",
    value: function _modelsAreIdentical(original, modified) {
      var originalLineCount = original.getLineCount();
      var modifiedLineCount = modified.getLineCount();

      if (originalLineCount !== modifiedLineCount) {
        return false;
      }

      for (var line = 1; line <= originalLineCount; line++) {
        var originalLine = original.getLineContent(line);
        var modifiedLine = modified.getLineContent(line);

        if (originalLine !== modifiedLine) {
          return false;
        }
      }

      return true;
    }
  }, {
    key: "computeMoreMinimalEdits",
    value: function computeMoreMinimalEdits(modelUrl, edits) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/regenerator_default.a.mark(function _callee3() {
        var model, result, lastEol, _iterator2, _step2, _step2$value, range, text, eol, original, changes, editOffset, _iterator3, _step3, change, start, end, newEdit;

        return regenerator_default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                model = this._getModel(modelUrl);

                if (model) {
                  _context3.next = 3;
                  break;
                }

                return _context3.abrupt("return", edits);

              case 3:
                result = [];
                lastEol = undefined;
                edits = mergeSort(edits, function (a, b) {
                  if (a.range && b.range) {
                    return range_Range.compareRangesUsingStarts(a.range, b.range);
                  } // eol only changes should go to the end


                  var aRng = a.range ? 0 : 1;
                  var bRng = b.range ? 0 : 1;
                  return aRng - bRng;
                });
                _iterator2 = editorSimpleWorker_createForOfIteratorHelper(edits);
                _context3.prev = 7;

                _iterator2.s();

              case 9:
                if ((_step2 = _iterator2.n()).done) {
                  _context3.next = 27;
                  break;
                }

                _step2$value = _step2.value, range = _step2$value.range, text = _step2$value.text, eol = _step2$value.eol;

                if (typeof eol === 'number') {
                  lastEol = eol;
                }

                if (!(range_Range.isEmpty(range) && !text)) {
                  _context3.next = 14;
                  break;
                }

                return _context3.abrupt("continue", 25);

              case 14:
                original = model.getValueInRange(range);
                text = text.replace(/\r\n|\n|\r/g, model.eol);

                if (!(original === text)) {
                  _context3.next = 18;
                  break;
                }

                return _context3.abrupt("continue", 25);

              case 18:
                if (!(Math.max(text.length, original.length) > EditorSimpleWorker._diffLimit)) {
                  _context3.next = 21;
                  break;
                }

                result.push({
                  range: range,
                  text: text
                });
                return _context3.abrupt("continue", 25);

              case 21:
                // compute diff between original and edit.text
                changes = stringDiff(original, text, false);
                editOffset = model.offsetAt(range_Range.lift(range).getStartPosition());
                _iterator3 = editorSimpleWorker_createForOfIteratorHelper(changes);

                try {
                  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                    change = _step3.value;
                    start = model.positionAt(editOffset + change.originalStart);
                    end = model.positionAt(editOffset + change.originalStart + change.originalLength);
                    newEdit = {
                      text: text.substr(change.modifiedStart, change.modifiedLength),
                      range: {
                        startLineNumber: start.lineNumber,
                        startColumn: start.column,
                        endLineNumber: end.lineNumber,
                        endColumn: end.column
                      }
                    };

                    if (model.getValueInRange(newEdit.range) !== newEdit.text) {
                      result.push(newEdit);
                    }
                  }
                } catch (err) {
                  _iterator3.e(err);
                } finally {
                  _iterator3.f();
                }

              case 25:
                _context3.next = 9;
                break;

              case 27:
                _context3.next = 32;
                break;

              case 29:
                _context3.prev = 29;
                _context3.t0 = _context3["catch"](7);

                _iterator2.e(_context3.t0);

              case 32:
                _context3.prev = 32;

                _iterator2.f();

                return _context3.finish(32);

              case 35:
                if (typeof lastEol === 'number') {
                  result.push({
                    eol: lastEol,
                    text: '',
                    range: {
                      startLineNumber: 0,
                      startColumn: 0,
                      endLineNumber: 0,
                      endColumn: 0
                    }
                  });
                }

                return _context3.abrupt("return", result);

              case 37:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[7, 29, 32, 35]]);
      }));
    } // ---- END minimal edits ---------------------------------------------------------------

  }, {
    key: "computeLinks",
    value: function computeLinks(modelUrl) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/regenerator_default.a.mark(function _callee4() {
        var model;
        return regenerator_default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                model = this._getModel(modelUrl);

                if (model) {
                  _context4.next = 3;
                  break;
                }

                return _context4.abrupt("return", null);

              case 3:
                return _context4.abrupt("return", linkComputer_computeLinks(model));

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));
    }
  }, {
    key: "textualSuggest",
    value: function textualSuggest(modelUrl, position, wordDef, wordDefFlags) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/regenerator_default.a.mark(function _callee5() {
        var model, words, seen, wordDefRegExp, wordAt, _iterator4, _step4, word;

        return regenerator_default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                model = this._getModel(modelUrl);

                if (model) {
                  _context5.next = 3;
                  break;
                }

                return _context5.abrupt("return", null);

              case 3:
                words = [];
                seen = new Set();
                wordDefRegExp = new RegExp(wordDef, wordDefFlags);
                wordAt = model.getWordAtPosition(position, wordDefRegExp);

                if (wordAt) {
                  seen.add(model.getValueInRange(wordAt));
                }

                _iterator4 = editorSimpleWorker_createForOfIteratorHelper(model.words(wordDefRegExp));
                _context5.prev = 9;

                _iterator4.s();

              case 11:
                if ((_step4 = _iterator4.n()).done) {
                  _context5.next = 23;
                  break;
                }

                word = _step4.value;

                if (!seen.has(word)) {
                  _context5.next = 15;
                  break;
                }

                return _context5.abrupt("continue", 21);

              case 15:
                seen.add(word);

                if (isNaN(Number(word))) {
                  _context5.next = 18;
                  break;
                }

                return _context5.abrupt("continue", 21);

              case 18:
                words.push(word);

                if (!(seen.size > EditorSimpleWorker._suggestionsLimit)) {
                  _context5.next = 21;
                  break;
                }

                return _context5.abrupt("break", 23);

              case 21:
                _context5.next = 11;
                break;

              case 23:
                _context5.next = 28;
                break;

              case 25:
                _context5.prev = 25;
                _context5.t0 = _context5["catch"](9);

                _iterator4.e(_context5.t0);

              case 28:
                _context5.prev = 28;

                _iterator4.f();

                return _context5.finish(28);

              case 31:
                return _context5.abrupt("return", words);

              case 32:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[9, 25, 28, 31]]);
      }));
    } // ---- END suggest --------------------------------------------------------------------------
    //#region -- word ranges --

  }, {
    key: "computeWordRanges",
    value: function computeWordRanges(modelUrl, range, wordDef, wordDefFlags) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/regenerator_default.a.mark(function _callee6() {
        var model, wordDefRegExp, result, line, words, _iterator5, _step5, word, array;

        return regenerator_default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                model = this._getModel(modelUrl);

                if (model) {
                  _context6.next = 3;
                  break;
                }

                return _context6.abrupt("return", Object.create(null));

              case 3:
                wordDefRegExp = new RegExp(wordDef, wordDefFlags);
                result = Object.create(null);
                line = range.startLineNumber;

              case 6:
                if (!(line < range.endLineNumber)) {
                  _context6.next = 31;
                  break;
                }

                words = model.getLineWords(line, wordDefRegExp);
                _iterator5 = editorSimpleWorker_createForOfIteratorHelper(words);
                _context6.prev = 9;

                _iterator5.s();

              case 11:
                if ((_step5 = _iterator5.n()).done) {
                  _context6.next = 20;
                  break;
                }

                word = _step5.value;

                if (isNaN(Number(word.word))) {
                  _context6.next = 15;
                  break;
                }

                return _context6.abrupt("continue", 18);

              case 15:
                array = result[word.word];

                if (!array) {
                  array = [];
                  result[word.word] = array;
                }

                array.push({
                  startLineNumber: line,
                  startColumn: word.startColumn,
                  endLineNumber: line,
                  endColumn: word.endColumn
                });

              case 18:
                _context6.next = 11;
                break;

              case 20:
                _context6.next = 25;
                break;

              case 22:
                _context6.prev = 22;
                _context6.t0 = _context6["catch"](9);

                _iterator5.e(_context6.t0);

              case 25:
                _context6.prev = 25;

                _iterator5.f();

                return _context6.finish(25);

              case 28:
                line++;
                _context6.next = 6;
                break;

              case 31:
                return _context6.abrupt("return", result);

              case 32:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[9, 22, 25, 28]]);
      }));
    } //#endregion

  }, {
    key: "navigateValueSet",
    value: function navigateValueSet(modelUrl, range, up, wordDef, wordDefFlags) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/regenerator_default.a.mark(function _callee7() {
        var model, wordDefRegExp, selectionText, wordRange, word, result;
        return regenerator_default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                model = this._getModel(modelUrl);

                if (model) {
                  _context7.next = 3;
                  break;
                }

                return _context7.abrupt("return", null);

              case 3:
                wordDefRegExp = new RegExp(wordDef, wordDefFlags);

                if (range.startColumn === range.endColumn) {
                  range = {
                    startLineNumber: range.startLineNumber,
                    startColumn: range.startColumn,
                    endLineNumber: range.endLineNumber,
                    endColumn: range.endColumn + 1
                  };
                }

                selectionText = model.getValueInRange(range);
                wordRange = model.getWordAtPosition({
                  lineNumber: range.startLineNumber,
                  column: range.startColumn
                }, wordDefRegExp);

                if (wordRange) {
                  _context7.next = 9;
                  break;
                }

                return _context7.abrupt("return", null);

              case 9:
                word = model.getValueInRange(wordRange);
                result = inplaceReplaceSupport_BasicInplaceReplace.INSTANCE.navigateValueSet(range, selectionText, wordRange, word, up);
                return _context7.abrupt("return", result);

              case 12:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));
    } // ---- BEGIN foreign module support --------------------------------------------------------------------------

  }, {
    key: "loadForeignModule",
    value: function loadForeignModule(moduleId, createData, foreignHostMethods) {
      var _this2 = this;

      var proxyMethodRequest = function proxyMethodRequest(method, args) {
        return _this2._host.fhr(method, args);
      };

      var foreignHost = createProxyObject(foreignHostMethods, proxyMethodRequest);
      var ctx = {
        host: foreignHost,
        getMirrorModels: function getMirrorModels() {
          return _this2._getModels();
        }
      };

      if (this._foreignModuleFactory) {
        this._foreignModule = this._foreignModuleFactory(ctx, createData); // static foreing module

        return Promise.resolve(getAllMethodNames(this._foreignModule));
      } // ESM-comment-begin
      // 		return new Promise<any>((resolve, reject) => {
      // 			require([moduleId], (foreignModule: { create: IForeignModuleFactory }) => {
      // 				this._foreignModule = foreignModule.create(ctx, createData);
      // 
      // 				resolve(types.getAllMethodNames(this._foreignModule));
      // 
      // 			}, reject);
      // 		});
      // ESM-comment-end
      // ESM-uncomment-begin


      return Promise.reject(new Error("Unexpected usage")); // ESM-uncomment-end
    } // foreign method request

  }, {
    key: "fmr",
    value: function fmr(method, args) {
      if (!this._foreignModule || typeof this._foreignModule[method] !== 'function') {
        return Promise.reject(new Error('Missing requestHandler or method: ' + method));
      }

      try {
        return Promise.resolve(this._foreignModule[method].apply(this._foreignModule, args));
      } catch (e) {
        return Promise.reject(e);
      }
    }
  }]);

  return EditorSimpleWorker;
}(); // ---- END diff --------------------------------------------------------------------------
// ---- BEGIN minimal edits ---------------------------------------------------------------

editorSimpleWorker_EditorSimpleWorker._diffLimit = 100000; // ---- BEGIN suggest --------------------------------------------------------------------------

editorSimpleWorker_EditorSimpleWorker._suggestionsLimit = 10000;
/**
 * Called on the worker side
 * @internal
 */

function editorSimpleWorker_create(host) {
  return new editorSimpleWorker_EditorSimpleWorker(host, null);
}

if (typeof importScripts === 'function') {
  // Running in a web worker
  platform["a" /* globals */].monaco = createMonacoBaseAPI();
}
// CONCATENATED MODULE: ./node_modules/monaco-editor/esm/vs/editor/editor.worker.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialize", function() { return editor_worker_initialize; });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


var initialized = false;
function editor_worker_initialize(foreignModule) {
  if (initialized) {
    return;
  }

  initialized = true;
  var simpleWorker = new simpleWorker_SimpleWorkerServer(function (msg) {
    self.postMessage(msg);
  }, function (host) {
    return new editorSimpleWorker_EditorSimpleWorker(host, foreignModule);
  });

  self.onmessage = function (e) {
    simpleWorker.onmessage(e.data);
  };
}

self.onmessage = function (e) {
  // Ignore first message in this case and initialize if not yet initialized
  if (!initialized) {
    editor_worker_initialize(null);
  }
};

/***/ })
/******/ ]);