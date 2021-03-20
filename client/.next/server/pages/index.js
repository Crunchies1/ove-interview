module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/head":
/*!****************************************************!*\
  !*** external "next/dist/next-server/lib/head.js" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/head.js");

/***/ }),

/***/ "../next-server/lib/to-base-64":
/*!**********************************************************!*\
  !*** external "next/dist/next-server/lib/to-base-64.js" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/to-base-64.js");

/***/ }),

/***/ "../next-server/server/image-config":
/*!***************************************************************!*\
  !*** external "next/dist/next-server/server/image-config.js" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/image-config.js");

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/extends.js":
/*!*********************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/extends.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!******************************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "../node_modules/next/dist/client/image.js":
/*!*************************************************!*\
  !*** ../node_modules/next/dist/client/image.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = Image;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "../node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "../node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/head */ "../next-server/lib/head"));

var _toBase = __webpack_require__(/*! ../next-server/lib/to-base-64 */ "../next-server/lib/to-base-64");

var _imageConfig = __webpack_require__(/*! ../next-server/server/image-config */ "../next-server/server/image-config");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "../node_modules/next/dist/client/use-intersection.js");

if (true) {
  ;
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['default', defaultLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];
const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","domains":[]} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout, sizes) {
  if (sizes && (layout === 'fill' || layout === 'responsive')) {
    // Find all the "vw" percent sizes used in the sizes prop
    const percentSizes = [...sizes.matchAll(/(^|\s)(1?\d?\d)vw/g)].map(m => parseInt(m[2]));

    if (percentSizes.length) {
      const smallestRatio = Math.min(...percentSizes) * 0.01;
      return {
        widths: allSizes.filter(s => s >= configDeviceSizes[0] * smallestRatio),
        kind: 'w'
      };
    }

    return {
      widths: allSizes,
      kind: 'w'
    };
  }

  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes,
  loader
}) {
  if (unoptimized) {
    return {
      src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout, sizes);
  const last = widths.length - 1;
  return {
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map((w, i) => `${loader({
      src,
      quality,
      width: w
    })} ${kind === 'w' ? w : i + 1}${kind}`).join(', '),
    // It's intended to keep `src` the last attribute because React updates
    // attributes in order. If we keep `src` the first one, Safari will
    // immediately start to fetch `src`, before `sizes` and `srcSet` are even
    // updated by React. That causes multiple unnecessary requests if `srcSet`
    // and `sizes` are defined.
    // This bug cannot be reproduced in Chrome or Firefox.
    src: loader({
      src,
      quality,
      width: widths[last]
    })
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load((0, _extends2.default)({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
}

function Image(_ref) {
  let {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition,
    loader = defaultImageLoader
  } = _ref,
      all = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "objectFit", "objectPosition", "loader"]);
  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';
  let unsized = false;

  if ('unsized' in rest) {
    unsized = Boolean(rest.unsized); // Remove property so it's not spread into image:

    delete rest['unsized'];
  } else if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  if (true) {
    if (!src) {
      throw new Error(`Image is missing required "src" property. Make sure you pass "src" in props to the \`next/image\` component. Received: ${JSON.stringify({
        width,
        height,
        quality
      })}`);
    }

    if (!VALID_LAYOUT_VALUES.includes(layout)) {
      throw new Error(`Image with src "${src}" has invalid "layout" property. Provided "${layout}" should be one of ${VALID_LAYOUT_VALUES.map(String).join(',')}.`);
    }

    if (!VALID_LOADING_VALUES.includes(loading)) {
      throw new Error(`Image with src "${src}" has invalid "loading" property. Provided "${loading}" should be one of ${VALID_LOADING_VALUES.map(String).join(',')}.`);
    }

    if (priority && loading === 'lazy') {
      throw new Error(`Image with src "${src}" has both "priority" and "loading='lazy'" properties. Only one should be used.`);
    }

    if (unsized) {
      throw new Error(`Image with src "${src}" has deprecated "unsized" property, which was removed in favor of the "layout='fill'" property`);
    }
  }

  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src && src.startsWith('data:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  const [setRef, isIntersected] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px',
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = {
    visibility: isVisible ? 'inherit' : 'hidden',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  };

  if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined' && layout !== 'fill') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else if (typeof widthInt === 'undefined' && typeof heightInt === 'undefined' && layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else {
    // <Image src="i.png" />
    if (true) {
      throw new Error(`Image with src "${src}" must use "width" and "height" properties or "layout='fill'" property.`);
    }
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes,
      loader
    });
  }

  if (unsized) {
    wrapperStyle = undefined;
    sizerStyle = undefined;
    imgStyle = undefined;
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block',
      margin: 0,
      border: 'none',
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    role: "presentation",
    src: `data:image/svg+xml;base64,${(0, _toBase.toBase64)(sizerSvg)}`
  }) : null) : null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    className: className,
    ref: setRef,
    style: imgStyle
  })), priority ?
  /*#__PURE__*/
  // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
  _react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("link", {
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src // @ts-ignore: imagesrcset is not yet in the link element type
    ,
    imagesrcset: imgAttributes.srcSet // @ts-ignore: imagesizes is not yet in the link element type
    ,
    imagesizes: imgAttributes.sizes
  })) : null);
} //BUILT IN LOADERS


function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?format=auto&fit=max&w=300
  const params = ['auto=format', 'fit=max', 'w=' + width];
  let paramsString = '';

  if (quality) {
    params.push('q=' + quality);
  }

  if (params.length) {
    paramsString = '?' + params.join('&');
  }

  return `${root}${normalizeSrc(src)}${paramsString}`;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  let paramsString = params.join(',') + '/';
  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (true) {
    const missingValues = []; // these should always be provided but make sure they are

    if (!src) missingValues.push('src');
    if (!width) missingValues.push('width');

    if (missingValues.length > 0) {
      throw new Error(`Next Image Optimization requires ${missingValues.join(', ')} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify({
        src,
        width,
        quality
      })}`);
    }

    if (src.startsWith('//')) {
      throw new Error(`Failed to parse src "${src}" on \`next/image\`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)`);
    }

    if (!src.startsWith('/') && configDomains) {
      let parsedSrc;

      try {
        parsedSrc = new URL(src);
      } catch (err) {
        console.error(err);
        throw new Error(`Failed to parse src "${src}" on \`next/image\`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)`);
      }

      if (!configDomains.includes(parsedSrc.hostname)) {
        throw new Error(`Invalid src prop (${src}) on \`next/image\`, hostname "${parsedSrc.hostname}" is not configured under images in your \`next.config.js\`\n` + `See more info: https://err.sh/next.js/next-image-unconfigured-host`);
      }
    }
  }

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "../node_modules/next/dist/client/request-idle-callback.js":
/*!*****************************************************************!*\
  !*** ../node_modules/next/dist/client/request-idle-callback.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "../node_modules/next/dist/client/use-intersection.js":
/*!************************************************************!*\
  !*** ../node_modules/next/dist/client/use-intersection.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "../node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "../node_modules/next/image.js":
/*!*************************************!*\
  !*** ../node_modules/next/image.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/image */ "../node_modules/next/dist/client/image.js")


/***/ }),

/***/ "./src/components/BaseMenu.js":
/*!************************************!*\
  !*** ./src/components/BaseMenu.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\HP\\Documents\\ove-interview\\client\\src\\components\\BaseMenu.js";



const BaseMenu = ({
  rows,
  loadData
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["MenuButton"], {
      as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"],
      children: "Change Base"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["MenuList"], {
      children: Object.values(rows).map(c => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["MenuItem"], {
        onClick: () => loadData(c),
        minH: "32px",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Image"], {
          boxSize: "1.5rem",
          borderRadius: "full",
          src: "https://placekitten.com/100/100",
          alt: c,
          mr: "12px"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 9
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: c
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 9
        }, undefined)]
      }, c, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (BaseMenu);

/***/ }),

/***/ "./src/components/CurrencyHead.js":
/*!****************************************!*\
  !*** ./src/components/CurrencyHead.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\HP\\Documents\\ove-interview\\client\\src\\components\\CurrencyHead.js";



const CurrencyHead = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    h: "50px",
    templateColumns: "repeat(5, 1fr)",
    alignItems: "center",
    gap: 1,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      w: ['100px', '100px', '120px', '180px'],
      align: "center",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
        fontSize: "xl",
        children: "Symbol"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 68
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      w: ['100px', '100px', '120px', '180px'],
      align: "center",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
        fontSize: "xl",
        children: "Price"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 68
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      w: ['100px', '100px', '120px', '180px'],
      align: "center",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
        fontSize: "xl",
        children: "Indicator"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 68
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      w: ['100px', '100px', '120px', '180px'],
      align: "center",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
        fontSize: "xl",
        children: "Change"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 68
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      w: ['100px', '100px', '120px', '180px'],
      align: "center",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
        fontSize: "xl",
        children: "Graph"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 68
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (CurrencyHead);

/***/ }),

/***/ "./src/components/CurrencyRow.js":
/*!***************************************!*\
  !*** ./src/components/CurrencyRow.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _LineChart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LineChart */ "./src/components/LineChart.js");
/* harmony import */ var _styles_theme_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/theme.js */ "./src/styles/theme.js");

var _jsxFileName = "C:\\Users\\HP\\Documents\\ove-interview\\client\\src\\components\\CurrencyRow.js";



 // eslint-disable-line no-unused-vars

const CurrencyRow = ({
  symbol,
  price,
  indicator,
  change,
  graph
}) => {
  // This adjusts the colour based on how the currency has valued
  let color;

  if (indicator === 1) {
    color = _styles_theme_js__WEBPACK_IMPORTED_MODULE_4__["theme"].colors.currIncrease;
  } else if (indicator === 0) {
    color = _styles_theme_js__WEBPACK_IMPORTED_MODULE_4__["theme"].colors.currNoChange;
  } else {
    color = _styles_theme_js__WEBPACK_IMPORTED_MODULE_4__["theme"].colors.currDecrease;
  } // This adjusts the background colour if the row is the base row


  let baseColor = '';

  if (indicator === null) {
    baseColor = 'teal.500';
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
      h: "50px",
      bg: baseColor,
      borderRadius: "lg",
      templateColumns: "repeat(5, 1fr)",
      alignItems: "center",
      gap: 1,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Box"], {
        w: ['100px', '100px', '120px', '180px'],
        align: "center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
          fontSize: "lg",
          children: symbol
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 68
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 7
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Box"], {
        w: ['100px', '100px', '120px', '180px'],
        align: "center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
          fontSize: "md",
          children: price
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 68
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 7
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Box"], {
        w: ['100px', '100px', '120px', '180px'],
        align: "center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
          color: color,
          fontSize: "lg",
          children: indicator !== null ? indicator : null
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 68
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 7
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Box"], {
        w: ['100px', '100px', '120px', '180px'],
        align: "center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
          color: color,
          fontSize: "lg",
          children: change !== null ? change : null
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 68
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 7
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Box"], {
        w: ['100px', '100px', '120px', '180px'],
        align: "center",
        children: graph !== null ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_LineChart__WEBPACK_IMPORTED_MODULE_3__["default"], {
          xAxisData: graph[0],
          yAxisData: graph[1],
          indicator: indicator,
          color: color
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 13
        }, undefined) : null
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 7
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Divider"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (CurrencyRow);

/***/ }),

/***/ "./src/components/CurrencyStack.js":
/*!*****************************************!*\
  !*** ./src/components/CurrencyStack.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _CurrencyHead__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CurrencyHead */ "./src/components/CurrencyHead.js");
/* harmony import */ var _CurrencyRow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CurrencyRow */ "./src/components/CurrencyRow.js");

var _jsxFileName = "C:\\Users\\HP\\Documents\\ove-interview\\client\\src\\components\\CurrencyStack.js";





const CurrencyStack = ({
  rows
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["VStack"], {
    spacing: 2,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_CurrencyHead__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }, undefined), Object.keys(rows).map(c => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_CurrencyRow__WEBPACK_IMPORTED_MODULE_4__["default"], {
      symbol: c,
      price: rows[c].price,
      indicator: rows[c].indicator,
      change: rows[c].change,
      graph: rows[c].graph
    }, c, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }, undefined))]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (CurrencyStack);

/***/ }),

/***/ "./src/components/LineChart.js":
/*!*************************************!*\
  !*** ./src/components/LineChart.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-chartjs-2 */ "react-chartjs-2");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\HP\\Documents\\ove-interview\\client\\src\\components\\LineChart.js";



const LineChart = ({
  xAxisData,
  yAxisData,
  title,
  xLabel,
  yLabel,
  color,
  grid = false
}) => {
  const legendOptions = {
    display: false
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    title: {
      display: !!title,
      text: title
    },
    elements: {
      point: {
        radius: 0
      }
    },
    scales: {
      yAxes: [{
        scaleLabel: {
          display: !!yLabel,
          labelString: yLabel
        },
        gridLines: {
          display: grid
        },
        ticks: {
          display: false
        }
      }],
      xAxes: [{
        scaleLabel: {
          display: !!xLabel,
          labelString: xLabel
        },
        gridLines: {
          display: grid
        },
        ticks: {
          display: false
        }
      }]
    }
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__["Line"], {
    data: {
      labels: xAxisData,
      datasets: [{
        borderColor: color,
        data: yAxisData,
        fill: false
      }]
    },
    width: 120,
    height: 50,
    options: options,
    legend: legendOptions
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (LineChart);

/***/ }),

/***/ "./src/components/NavHeader.js":
/*!*************************************!*\
  !*** ./src/components/NavHeader.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_BaseMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/BaseMenu */ "./src/components/BaseMenu.js");
/* harmony import */ var _components_TimeframeMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/TimeframeMenu */ "./src/components/TimeframeMenu.js");

var _jsxFileName = "C:\\Users\\HP\\Documents\\ove-interview\\client\\src\\components\\NavHeader.js";





const NavHeader = ({
  symbols,
  loadData
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Box"], {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  px: 6,
  py: 4,
  bg: "teal.500",
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
    as: "h1",
    size: "lg",
    color: "white",
    letterSpacing: '-.1rem',
    children: "Rates Imperial"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 9
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Spacer"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 9
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_BaseMenu__WEBPACK_IMPORTED_MODULE_3__["default"], {
    rows: symbols,
    loadData: loadData
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 9
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_TimeframeMenu__WEBPACK_IMPORTED_MODULE_4__["default"], {
    loadData: loadData
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 9
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 7,
  columnNumber: 5
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (NavHeader);

/***/ }),

/***/ "./src/components/TimeframeMenu.js":
/*!*****************************************!*\
  !*** ./src/components/TimeframeMenu.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\HP\\Documents\\ove-interview\\client\\src\\components\\TimeframeMenu.js";



const TimeframeMenu = ({
  loadData
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["MenuButton"], {
      ml: "6px",
      as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"],
      children: "Change Timeframe"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["MenuList"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["MenuItem"], {
        onClick: () => loadData(1),
        minH: "32px",
        children: "One Day"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 7
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["MenuItem"], {
        onClick: () => loadData(7),
        minH: "32px",
        children: "Seven Days"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 7
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["MenuItem"], {
        onClick: () => loadData(31),
        minH: "32px",
        children: "One Month"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 7
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (TimeframeMenu);

/***/ }),

/***/ "./src/components/layouts/Default.js":
/*!*******************************************!*\
  !*** ./src/components/layouts/Default.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _NavHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../NavHeader */ "./src/components/NavHeader.js");


var _jsxFileName = "C:\\Users\\HP\\Documents\\ove-interview\\client\\src\\components\\layouts\\Default.js";




const DefaultLayout = ({
  symbols,
  loadData,
  children
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Box"], {
  display: "flex",
  minHeight: "100vh",
  height: "100%",
  flexDirection: "column",
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_NavHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
    symbols: symbols,
    loadData: loadData
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: children
  }, void 0, false)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 6,
  columnNumber: 5
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (DefaultLayout);

/***/ }),

/***/ "./src/pages/api/actions.js":
/*!**********************************!*\
  !*** ./src/pages/api/actions.js ***!
  \**********************************/
/*! exports provided: DEFAULT_BASE, fetchLatestData, fetchHistoricData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_BASE", function() { return DEFAULT_BASE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchLatestData", function() { return fetchLatestData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchHistoricData", function() { return fetchHistoricData; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const DEFAULT_BASE = 'EUR';

const fetchLatestData = async (base = DEFAULT_BASE) => (await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`https://api.ratesapi.io/api/latest?base=${base}`)).data;

const fetchHistoricData = async (date, base = DEFAULT_BASE) => (await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`https://api.ratesapi.io/api/${date}?base=${base}`)).data;



/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ "../node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _state_calculator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./state/calculator */ "./src/pages/state/calculator.js");
/* harmony import */ var _api_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./api/actions */ "./src/pages/api/actions.js");
/* harmony import */ var _components_layouts_Default__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/layouts/Default */ "./src/components/layouts/Default.js");
/* harmony import */ var _components_CurrencyStack__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/CurrencyStack */ "./src/components/CurrencyStack.js");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/Home.module.css */ "./src/styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9__);

var _jsxFileName = "C:\\Users\\HP\\Documents\\ove-interview\\client\\src\\pages\\index.js";









function Home() {
  const {
    0: base,
    1: setBase
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(_api_actions__WEBPACK_IMPORTED_MODULE_6__["DEFAULT_BASE"]); // eslint-disable-line no-unused-vars

  const {
    0: timeframe,
    1: setTimeframe
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(7); // eslint-disable-line no-unused-vars

  const {
    0: rateData,
    1: setRateData
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: symbolList,
    1: setSymbolList
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]); // This function automatically changes our state based on the incoming variable
  // then updates the website accordingly

  async function loadData(change = null) {
    let data;

    if (change !== null) {
      if (typeof change === 'number') {
        setTimeframe(change);
        data = await Object(_state_calculator__WEBPACK_IMPORTED_MODULE_5__["calculator"])(_state_calculator__WEBPACK_IMPORTED_MODULE_5__["FETCH_DATA"], base, change);
      } else {
        setBase(change);
        data = await Object(_state_calculator__WEBPACK_IMPORTED_MODULE_5__["calculator"])(_state_calculator__WEBPACK_IMPORTED_MODULE_5__["FETCH_DATA"], change, timeframe);
      }
    } else {
      data = await Object(_state_calculator__WEBPACK_IMPORTED_MODULE_5__["calculator"])(_state_calculator__WEBPACK_IMPORTED_MODULE_5__["FETCH_DATA"], base, timeframe);
    } // Set the rate data and symbol list


    setRateData(data);
    console.log(data);
    const symbols = [];
    Object.keys(data).map(c => symbols.push(c));
    setSymbolList(symbols);
  } // At the start, we want to display the rates in terms of EUR


  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    loadData();
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layouts_Default__WEBPACK_IMPORTED_MODULE_7__["default"], {
    symbols: symbolList,
    loadData: loadData,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__["Box"], {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.container,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
          children: "Rates Imperial"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
          rel: "icon",
          href: "/favicon.ico"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.main,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__["Heading"], {
          as: "h1",
          size: "2xl",
          mb: "2",
          children: ["Welcome to ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__["Link"], {
            color: "teal.500",
            children: "Rates Imperial!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 24
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__["Text"], {
          fontSize: "xl",
          mt: "2",
          children: "See the exchange rates for most currencies here!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          maxW: "800px",
          mt: "10",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_CurrencyStack__WEBPACK_IMPORTED_MODULE_8__["default"], {
            rows: rateData
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.footer,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
          target: "_blank",
          rel: "noopener noreferrer",
          children: ["Powered by", ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
            src: "/vercel.svg" // Route of the image file
            ,
            height: 70 // Desired size with correct aspect ratio
            ,
            width: 70 // Desired size with correct aspect ratio
            ,
            alt: "Vercel Logo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/pages/state/calculator.js":
/*!***************************************!*\
  !*** ./src/pages/state/calculator.js ***!
  \***************************************/
/*! exports provided: FETCH_DATA, calculator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_DATA", function() { return FETCH_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculator", function() { return calculator; });
/* harmony import */ var _api_actions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/actions.js */ "./src/pages/api/actions.js");
 // State is represented by a list of key-objects
// key: SYMBOL
// object: {
//   PRICE: float
//   INDICATOR: int
//   CHANGE: float
//   GRAPH: Array of x-axis and y-axis
// }
// ====== HELPER FUNCTIONS FOR FETCH DATA ======
// eslint-disable-next-line no-extend-native

Date.prototype.prevDays = function (days) {
  const date = new Date(this.valueOf()); // Return the current date minus days

  date.setDate(date.getDate() - days);
  return date;
}; // Returns the array of dates we are looking through


function getDates(startDate, stopDate) {
  const dateArray = [];
  let currentDate = startDate;

  while (currentDate >= stopDate) {
    // Converts date string into YYYY-MM-DD format
    let date = currentDate.toUTCString().split(', ')[1];
    date = new Date(date).toISOString().split('T')[0];
    dateArray.push(date);
    currentDate = currentDate.prevDays(1);
  }

  return dateArray;
} // This function adds new entries to the state map following the sample state


function addToState(array, key, value, date) {
  array[key] = {
    price: value.toPrecision(6),
    indicator: null,
    change: null,
    graph: [[date], [value]]
  };
} // This function adds values to the graph array in the current state map


function addToGraph(array, key, value, date) {
  array[key].graph[0].unshift(date);
  array[key].graph[1].unshift(value);
} // This function calculates the change in percentage from the first day of tracking to the last


function calculateChange(array, key) {
  // Obtain the current value and the latest recorded value
  const curVal = array[key].graph[1][array[key].graph[1].length - 1];
  const prevVal = array[key].graph[1][0]; // Calculate percentage change and set array values

  if (curVal > prevVal) {
    array[key].indicator = 1;
    array[key].change = '+' + (100 * (curVal - prevVal) / prevVal).toFixed(2) + '%';
  } else if (curVal === prevVal) {
    array[key].indicator = 0;
    array[key].change = 0 .toFixed(2) + '%';
  } else {
    array[key].indicator = -1;
    array[key].change = (100 * (curVal - prevVal) / prevVal).toFixed(2) + '%';
  }
} // =============================================
// Calls API to fetch and cache the required data


async function fetchData(base, timeframe) {
  // const data = await fetchLatestData()
  // const cacheId = data.base + data.date
  // Obtain the dates of the previous 7 days in yy-mm-dd format
  const dateArray = getDates(new Date(), new Date().prevDays(timeframe)); // For each value in the data array, send an HTTP request

  await Promise.all(dateArray.map(async date => {
    try {
      // Check to see if the data we require has already been cached
      let pastData;

      if (window.localStorage.getItem(base + date) === null) {
        // Otherwise, simply fetch the data from ratesapi.io
        pastData = await Object(_api_actions_js__WEBPACK_IMPORTED_MODULE_0__["fetchHistoricData"])(date, base); // Cache the fetched data

        const cacheId = pastData.base + date;
        window.localStorage.setItem(cacheId, JSON.stringify(pastData.rates));
      }
    } catch (error) {
      console.log('error' + error);
    }
  })); // Return the array of dates used

  return dateArray;
} // Function to generate the index state based on the dates given


function genState(dateArray, base) {
  // Initialise the state array
  const rateData = {}; // Loop through the dates in the date array

  for (let i = 0; i < dateArray.length; i++) {
    // Retrieve the rates for each date using current base
    const date = dateArray[i];
    let rates = window.localStorage.getItem(base + date); // Generate state using day 1 rates

    if (i === 0) {
      rateData[base] = {
        price: 1,
        indicator: null,
        change: null,
        graph: null
      };
    } // Loop through each rate


    rates = JSON.parse(rates);

    for (const key of Object.keys(rates)) {
      if (key !== base) {
        if (i === 0) {
          // Generate state using day 1 rates
          addToState(rateData, key, rates[key], date);
        } else if (i < dateArray.length - 1) {
          // Add the rate data to the graphs
          addToGraph(rateData, key, rates[key], date);
        } else {
          // Lastly, add the rate data to the graphs then calculate the final
          // indicator and change values
          addToGraph(rateData, key, rates[key], date);
          calculateChange(rateData, key);
        }
      }
    }
  }

  return rateData;
}

const FETCH_DATA = 'FETCH_DATA'; // Implemented as if it can be extended in the future

const calculator = async (action, base, timeframe) => {
  switch (action) {
    case FETCH_DATA:
      {
        const dA = await fetchData(base, timeframe);
        const rD = genState(dA, base);
        return rD;
      }
  }
};

/***/ }),

/***/ "./src/styles/Home.module.css":
/*!************************************!*\
  !*** ./src/styles/Home.module.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "Home_container__sDexO",
	"main": "Home_main__1gTMt",
	"footer": "Home_footer__34ULc",
	"title": "Home_title__38XO6",
	"description": "Home_description__p2VX9",
	"code": "Home_code__7lt7E",
	"grid": "Home_grid__2Clz5",
	"card": "Home_card__2kgLM",
	"logo": "Home_logo__qxZJS"
};


/***/ }),

/***/ "./src/styles/theme.js":
/*!*****************************!*\
  !*** ./src/styles/theme.js ***!
  \*****************************/
/*! exports provided: theme, breakpoints */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "theme", function() { return theme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "breakpoints", function() { return breakpoints; });
/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/theme-tools */ "@chakra-ui/theme-tools");
/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_0__);

const theme = {
  colors: {
    currIncrease: '#32CD32',
    currNoChange: '#888888',
    currDecrease: '#b00726'
  }
}; // Update the breakpoints as key-value pairs

const breakpoints = Object(_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_0__["createBreakpoints"])({
  sm: '320px',
  md: '768px',
  lg: '1024px',
  xl: '1200px'
});

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "@chakra-ui/theme-tools":
/*!*****************************************!*\
  !*** external "@chakra-ui/theme-tools" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@chakra-ui/theme-tools");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-chartjs-2":
/*!**********************************!*\
  !*** external "react-chartjs-2" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-chartjs-2");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIiIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvaW1hZ2UudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvdXNlLWludGVyc2VjdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9uZXh0L2ltYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Jhc2VNZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0N1cnJlbmN5SGVhZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DdXJyZW5jeVJvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DdXJyZW5jeVN0YWNrLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xpbmVDaGFydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9OYXZIZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVGltZWZyYW1lTWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sYXlvdXRzL0RlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2FwaS9hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvc3RhdGUvY2FsY3VsYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL0hvbWUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3RoZW1lLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBjaGFrcmEtdWkvcmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAY2hha3JhLXVpL3RoZW1lLXRvb2xzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWNoYXJ0anMtMlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbImdsb2JhbCIsIlZBTElEX0xPQURJTkdfVkFMVUVTIiwibG9hZGVycyIsIlZBTElEX0xBWU9VVF9WQUxVRVMiLCJkZXZpY2VTaXplcyIsImltYWdlU2l6ZXMiLCJsb2FkZXIiLCJwYXRoIiwiZG9tYWlucyIsInByb2Nlc3MiLCJpbWFnZUNvbmZpZ0RlZmF1bHQiLCJhbGxTaXplcyIsImNvbmZpZ0RldmljZVNpemVzIiwiYSIsInNpemVzIiwibGF5b3V0IiwicGVyY2VudFNpemVzIiwibSIsInBhcnNlSW50Iiwic21hbGxlc3RSYXRpbyIsIk1hdGgiLCJ3aWR0aHMiLCJzIiwia2luZCIsIndpZHRoIiwidyIsInAiLCJzcmNTZXQiLCJnZXRXaWR0aHMiLCJsYXN0IiwiaSIsInNyYyIsImxvYWQiLCJyb290IiwiVkFMSURfTE9BREVSUyIsImNvbmZpZ0xvYWRlciIsInVub3B0aW1pemVkIiwicHJpb3JpdHkiLCJhbGwiLCJyZXN0IiwidW5zaXplZCIsIkJvb2xlYW4iLCJKU09OIiwibG9hZGluZyIsImlzTGF6eSIsInJvb3RNYXJnaW4iLCJkaXNhYmxlZCIsImlzVmlzaWJsZSIsIndpZHRoSW50IiwiZ2V0SW50IiwiaGVpZ2h0SW50IiwicXVhbGl0eUludCIsImltZ1N0eWxlIiwidmlzaWJpbGl0eSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsImJvdHRvbSIsInJpZ2h0IiwiYm94U2l6aW5nIiwicGFkZGluZyIsImJvcmRlciIsIm1hcmdpbiIsImRpc3BsYXkiLCJoZWlnaHQiLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwibWluSGVpZ2h0IiwibWF4SGVpZ2h0IiwicXVvdGllbnQiLCJwYWRkaW5nVG9wIiwiaXNOYU4iLCJ3cmFwcGVyU3R5bGUiLCJvdmVyZmxvdyIsInNpemVyU3R5bGUiLCJzaXplclN2ZyIsImltZ0F0dHJpYnV0ZXMiLCJnZW5lcmF0ZUltZ0F0dHJzIiwicXVhbGl0eSIsInBhcmFtcyIsInBhcmFtc1N0cmluZyIsIm5vcm1hbGl6ZVNyYyIsIm1pc3NpbmdWYWx1ZXMiLCJwYXJzZWRTcmMiLCJjb25zb2xlIiwiY29uZmlnRG9tYWlucyIsImhvc3RuYW1lIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicmVxdWVzdElkbGVDYWxsYmFjayIsInNlbGYiLCJzdGFydCIsIkRhdGUiLCJzZXRUaW1lb3V0IiwiY2IiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsImNhbmNlbElkbGVDYWxsYmFjayIsImNsZWFyVGltZW91dCIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiaXNEaXNhYmxlZCIsInVub2JzZXJ2ZSIsInNldFJlZiIsImVsIiwib2JzZXJ2ZSIsInNldFZpc2libGUiLCJpZGxlQ2FsbGJhY2siLCJjcmVhdGVPYnNlcnZlciIsImVsZW1lbnRzIiwib2JzZXJ2ZXIiLCJvYnNlcnZlcnMiLCJpZCIsIm9wdGlvbnMiLCJpbnN0YW5jZSIsImVudHJpZXMiLCJlbnRyeSIsImNhbGxiYWNrIiwiQmFzZU1lbnUiLCJyb3dzIiwibG9hZERhdGEiLCJCdXR0b24iLCJPYmplY3QiLCJ2YWx1ZXMiLCJtYXAiLCJjIiwiQ3VycmVuY3lIZWFkIiwiQ3VycmVuY3lSb3ciLCJzeW1ib2wiLCJwcmljZSIsImluZGljYXRvciIsImNoYW5nZSIsImdyYXBoIiwiY29sb3IiLCJ0aGVtZSIsImNvbG9ycyIsImN1cnJJbmNyZWFzZSIsImN1cnJOb0NoYW5nZSIsImN1cnJEZWNyZWFzZSIsImJhc2VDb2xvciIsIkN1cnJlbmN5U3RhY2siLCJrZXlzIiwiTGluZUNoYXJ0IiwieEF4aXNEYXRhIiwieUF4aXNEYXRhIiwidGl0bGUiLCJ4TGFiZWwiLCJ5TGFiZWwiLCJncmlkIiwibGVnZW5kT3B0aW9ucyIsInJlc3BvbnNpdmUiLCJtYWludGFpbkFzcGVjdFJhdGlvIiwidGV4dCIsInBvaW50IiwicmFkaXVzIiwic2NhbGVzIiwieUF4ZXMiLCJzY2FsZUxhYmVsIiwibGFiZWxTdHJpbmciLCJncmlkTGluZXMiLCJ0aWNrcyIsInhBeGVzIiwibGFiZWxzIiwiZGF0YXNldHMiLCJib3JkZXJDb2xvciIsImRhdGEiLCJmaWxsIiwiTmF2SGVhZGVyIiwic3ltYm9scyIsIlRpbWVmcmFtZU1lbnUiLCJEZWZhdWx0TGF5b3V0IiwiY2hpbGRyZW4iLCJERUZBVUxUX0JBU0UiLCJmZXRjaExhdGVzdERhdGEiLCJiYXNlIiwiYXhpb3MiLCJnZXQiLCJmZXRjaEhpc3RvcmljRGF0YSIsImRhdGUiLCJIb21lIiwic2V0QmFzZSIsInVzZVN0YXRlIiwidGltZWZyYW1lIiwic2V0VGltZWZyYW1lIiwicmF0ZURhdGEiLCJzZXRSYXRlRGF0YSIsInN5bWJvbExpc3QiLCJzZXRTeW1ib2xMaXN0IiwiY2FsY3VsYXRvciIsIkZFVENIX0RBVEEiLCJsb2ciLCJwdXNoIiwidXNlRWZmZWN0Iiwic3R5bGVzIiwiY29udGFpbmVyIiwibWFpbiIsImZvb3RlciIsInByb3RvdHlwZSIsInByZXZEYXlzIiwiZGF5cyIsInZhbHVlT2YiLCJzZXREYXRlIiwiZ2V0RGF0ZSIsImdldERhdGVzIiwic3RhcnREYXRlIiwic3RvcERhdGUiLCJkYXRlQXJyYXkiLCJjdXJyZW50RGF0ZSIsInRvVVRDU3RyaW5nIiwic3BsaXQiLCJ0b0lTT1N0cmluZyIsImFkZFRvU3RhdGUiLCJhcnJheSIsImtleSIsInZhbHVlIiwidG9QcmVjaXNpb24iLCJhZGRUb0dyYXBoIiwidW5zaGlmdCIsImNhbGN1bGF0ZUNoYW5nZSIsImN1clZhbCIsImxlbmd0aCIsInByZXZWYWwiLCJ0b0ZpeGVkIiwiZmV0Y2hEYXRhIiwiUHJvbWlzZSIsInBhc3REYXRhIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImNhY2hlSWQiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwicmF0ZXMiLCJlcnJvciIsImdlblN0YXRlIiwicGFyc2UiLCJhY3Rpb24iLCJkQSIsInJEIiwiYnJlYWtwb2ludHMiLCJjcmVhdGVCcmVha3BvaW50cyIsInNtIiwibWQiLCJsZyIsInhsIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FB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QUdKLFFBQVEsQ0FBQ0csRUFBRCxFQUFLL0QsSUFBTCxDQUFuQjtBQUNBLGVBQU9nRSxFQUFQO0FBQ0Q7QUFMSDtBQU9ELENBUk0sQzs7Ozs7Ozs7Ozs7QUNqSlA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDWEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sTUFBTXhHLEtBQUssR0FBRztBQUNuQkMsUUFBTSxFQUFFO0FBQ05DLGdCQUFZLEVBQUUsU0FEUjtBQUVOQyxnQkFBWSxFQUFFLFNBRlI7QUFHTkMsZ0JBQVksRUFBRTtBQUhSO0FBRFcsQ0FBZCxDLENBUVA7O0FBQ08sTUFBTXFHLFdBQVcsR0FBR0MsZ0ZBQWlCLENBQUM7QUFDM0NDLElBQUUsRUFBRSxPQUR1QztBQUUzQ0MsSUFBRSxFQUFFLE9BRnVDO0FBRzNDQyxJQUFFLEVBQUUsUUFIdUM7QUFJM0NDLElBQUUsRUFBRTtBQUp1QyxDQUFELENBQXJDLEM7Ozs7Ozs7Ozs7O0FDWFAsNkM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wYWdlcy9pbmRleC5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIik7IiwiZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwiZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2U7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL2hlYWQnXG5pbXBvcnQgeyB0b0Jhc2U2NCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0J1xuaW1wb3J0IHtcbiAgSW1hZ2VDb25maWcsXG4gIGltYWdlQ29uZmlnRGVmYXVsdCxcbiAgTG9hZGVyVmFsdWUsXG4gIFZBTElEX0xPQURFUlMsXG59IGZyb20gJy4uL25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcnXG5pbXBvcnQgeyB1c2VJbnRlcnNlY3Rpb24gfSBmcm9tICcuL3VzZS1pbnRlcnNlY3Rpb24nXG5cbmlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICA7KGdsb2JhbCBhcyBhbnkpLl9fTkVYVF9JTUFHRV9JTVBPUlRFRCA9IHRydWVcbn1cblxuY29uc3QgVkFMSURfTE9BRElOR19WQUxVRVMgPSBbJ2xhenknLCAnZWFnZXInLCB1bmRlZmluZWRdIGFzIGNvbnN0XG50eXBlIExvYWRpbmdWYWx1ZSA9IHR5cGVvZiBWQUxJRF9MT0FESU5HX1ZBTFVFU1tudW1iZXJdXG5cbmV4cG9ydCB0eXBlIEltYWdlTG9hZGVyID0gKHJlc29sdmVyUHJvcHM6IEltYWdlTG9hZGVyUHJvcHMpID0+IHN0cmluZ1xuXG5leHBvcnQgdHlwZSBJbWFnZUxvYWRlclByb3BzID0ge1xuICBzcmM6IHN0cmluZ1xuICB3aWR0aDogbnVtYmVyXG4gIHF1YWxpdHk/OiBudW1iZXJcbn1cblxudHlwZSBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcyA9IEltYWdlTG9hZGVyUHJvcHMgJiB7IHJvb3Q6IHN0cmluZyB9XG5cbmNvbnN0IGxvYWRlcnMgPSBuZXcgTWFwPFxuICBMb2FkZXJWYWx1ZSxcbiAgKHByb3BzOiBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcykgPT4gc3RyaW5nXG4+KFtcbiAgWydpbWdpeCcsIGltZ2l4TG9hZGVyXSxcbiAgWydjbG91ZGluYXJ5JywgY2xvdWRpbmFyeUxvYWRlcl0sXG4gIFsnYWthbWFpJywgYWthbWFpTG9hZGVyXSxcbiAgWydkZWZhdWx0JywgZGVmYXVsdExvYWRlcl0sXG5dKVxuXG5jb25zdCBWQUxJRF9MQVlPVVRfVkFMVUVTID0gW1xuICAnZmlsbCcsXG4gICdmaXhlZCcsXG4gICdpbnRyaW5zaWMnLFxuICAncmVzcG9uc2l2ZScsXG4gIHVuZGVmaW5lZCxcbl0gYXMgY29uc3RcbnR5cGUgTGF5b3V0VmFsdWUgPSB0eXBlb2YgVkFMSURfTEFZT1VUX1ZBTFVFU1tudW1iZXJdXG5cbnR5cGUgSW1nRWxlbWVudFN0eWxlID0gTm9uTnVsbGFibGU8SlNYLkludHJpbnNpY0VsZW1lbnRzWydpbWcnXVsnc3R5bGUnXT5cblxuZXhwb3J0IHR5cGUgSW1hZ2VQcm9wcyA9IE9taXQ8XG4gIEpTWC5JbnRyaW5zaWNFbGVtZW50c1snaW1nJ10sXG4gICdzcmMnIHwgJ3NyY1NldCcgfCAncmVmJyB8ICd3aWR0aCcgfCAnaGVpZ2h0JyB8ICdsb2FkaW5nJyB8ICdzdHlsZSdcbj4gJiB7XG4gIHNyYzogc3RyaW5nXG4gIGxvYWRlcj86IEltYWdlTG9hZGVyXG4gIHF1YWxpdHk/OiBudW1iZXIgfCBzdHJpbmdcbiAgcHJpb3JpdHk/OiBib29sZWFuXG4gIGxvYWRpbmc/OiBMb2FkaW5nVmFsdWVcbiAgdW5vcHRpbWl6ZWQ/OiBib29sZWFuXG4gIG9iamVjdEZpdD86IEltZ0VsZW1lbnRTdHlsZVsnb2JqZWN0Rml0J11cbiAgb2JqZWN0UG9zaXRpb24/OiBJbWdFbGVtZW50U3R5bGVbJ29iamVjdFBvc2l0aW9uJ11cbn0gJiAoXG4gICAgfCB7XG4gICAgICAgIHdpZHRoPzogbmV2ZXJcbiAgICAgICAgaGVpZ2h0PzogbmV2ZXJcbiAgICAgICAgLyoqIEBkZXByZWNhdGVkIFVzZSBgbGF5b3V0PVwiZmlsbFwiYCBpbnN0ZWFkICovXG4gICAgICAgIHVuc2l6ZWQ6IHRydWVcbiAgICAgIH1cbiAgICB8IHsgd2lkdGg/OiBuZXZlcjsgaGVpZ2h0PzogbmV2ZXI7IGxheW91dDogJ2ZpbGwnIH1cbiAgICB8IHtcbiAgICAgICAgd2lkdGg6IG51bWJlciB8IHN0cmluZ1xuICAgICAgICBoZWlnaHQ6IG51bWJlciB8IHN0cmluZ1xuICAgICAgICBsYXlvdXQ/OiBFeGNsdWRlPExheW91dFZhbHVlLCAnZmlsbCc+XG4gICAgICB9XG4gIClcblxuY29uc3Qge1xuICBkZXZpY2VTaXplczogY29uZmlnRGV2aWNlU2l6ZXMsXG4gIGltYWdlU2l6ZXM6IGNvbmZpZ0ltYWdlU2l6ZXMsXG4gIGxvYWRlcjogY29uZmlnTG9hZGVyLFxuICBwYXRoOiBjb25maWdQYXRoLFxuICBkb21haW5zOiBjb25maWdEb21haW5zLFxufSA9XG4gICgocHJvY2Vzcy5lbnYuX19ORVhUX0lNQUdFX09QVFMgYXMgYW55KSBhcyBJbWFnZUNvbmZpZykgfHwgaW1hZ2VDb25maWdEZWZhdWx0XG4vLyBzb3J0IHNtYWxsZXN0IHRvIGxhcmdlc3RcbmNvbnN0IGFsbFNpemVzID0gWy4uLmNvbmZpZ0RldmljZVNpemVzLCAuLi5jb25maWdJbWFnZVNpemVzXVxuY29uZmlnRGV2aWNlU2l6ZXMuc29ydCgoYSwgYikgPT4gYSAtIGIpXG5hbGxTaXplcy5zb3J0KChhLCBiKSA9PiBhIC0gYilcblxuZnVuY3Rpb24gZ2V0V2lkdGhzKFxuICB3aWR0aDogbnVtYmVyIHwgdW5kZWZpbmVkLFxuICBsYXlvdXQ6IExheW91dFZhbHVlLFxuICBzaXplczogc3RyaW5nIHwgdW5kZWZpbmVkXG4pOiB7IHdpZHRoczogbnVtYmVyW107IGtpbmQ6ICd3JyB8ICd4JyB9IHtcbiAgaWYgKHNpemVzICYmIChsYXlvdXQgPT09ICdmaWxsJyB8fCBsYXlvdXQgPT09ICdyZXNwb25zaXZlJykpIHtcbiAgICAvLyBGaW5kIGFsbCB0aGUgXCJ2d1wiIHBlcmNlbnQgc2l6ZXMgdXNlZCBpbiB0aGUgc2l6ZXMgcHJvcFxuICAgIGNvbnN0IHBlcmNlbnRTaXplcyA9IFsuLi5zaXplcy5tYXRjaEFsbCgvKF58XFxzKSgxP1xcZD9cXGQpdncvZyldLm1hcCgobSkgPT5cbiAgICAgIHBhcnNlSW50KG1bMl0pXG4gICAgKVxuICAgIGlmIChwZXJjZW50U2l6ZXMubGVuZ3RoKSB7XG4gICAgICBjb25zdCBzbWFsbGVzdFJhdGlvID0gTWF0aC5taW4oLi4ucGVyY2VudFNpemVzKSAqIDAuMDFcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdpZHRoczogYWxsU2l6ZXMuZmlsdGVyKFxuICAgICAgICAgIChzKSA9PiBzID49IGNvbmZpZ0RldmljZVNpemVzWzBdICogc21hbGxlc3RSYXRpb1xuICAgICAgICApLFxuICAgICAgICBraW5kOiAndycsXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7IHdpZHRoczogYWxsU2l6ZXMsIGtpbmQ6ICd3JyB9XG4gIH1cbiAgaWYgKFxuICAgIHR5cGVvZiB3aWR0aCAhPT0gJ251bWJlcicgfHxcbiAgICBsYXlvdXQgPT09ICdmaWxsJyB8fFxuICAgIGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnXG4gICkge1xuICAgIHJldHVybiB7IHdpZHRoczogY29uZmlnRGV2aWNlU2l6ZXMsIGtpbmQ6ICd3JyB9XG4gIH1cblxuICBjb25zdCB3aWR0aHMgPSBbXG4gICAgLi4ubmV3IFNldChcbiAgICAgIC8vID4gVGhpcyBtZWFucyB0aGF0IG1vc3QgT0xFRCBzY3JlZW5zIHRoYXQgc2F5IHRoZXkgYXJlIDN4IHJlc29sdXRpb24sXG4gICAgICAvLyA+IGFyZSBhY3R1YWxseSAzeCBpbiB0aGUgZ3JlZW4gY29sb3IsIGJ1dCBvbmx5IDEuNXggaW4gdGhlIHJlZCBhbmRcbiAgICAgIC8vID4gYmx1ZSBjb2xvcnMuIFNob3dpbmcgYSAzeCByZXNvbHV0aW9uIGltYWdlIGluIHRoZSBhcHAgdnMgYSAyeFxuICAgICAgLy8gPiByZXNvbHV0aW9uIGltYWdlIHdpbGwgYmUgdmlzdWFsbHkgdGhlIHNhbWUsIHRob3VnaCB0aGUgM3ggaW1hZ2VcbiAgICAgIC8vID4gdGFrZXMgc2lnbmlmaWNhbnRseSBtb3JlIGRhdGEuIEV2ZW4gdHJ1ZSAzeCByZXNvbHV0aW9uIHNjcmVlbnMgYXJlXG4gICAgICAvLyA+IHdhc3RlZnVsIGFzIHRoZSBodW1hbiBleWUgY2Fubm90IHNlZSB0aGF0IGxldmVsIG9mIGRldGFpbCB3aXRob3V0XG4gICAgICAvLyA+IHNvbWV0aGluZyBsaWtlIGEgbWFnbmlmeWluZyBnbGFzcy5cbiAgICAgIC8vIGh0dHBzOi8vYmxvZy50d2l0dGVyLmNvbS9lbmdpbmVlcmluZy9lbl91cy90b3BpY3MvaW5mcmFzdHJ1Y3R1cmUvMjAxOS9jYXBwaW5nLWltYWdlLWZpZGVsaXR5LW9uLXVsdHJhLWhpZ2gtcmVzb2x1dGlvbi1kZXZpY2VzLmh0bWxcbiAgICAgIFt3aWR0aCwgd2lkdGggKiAyIC8qLCB3aWR0aCAqIDMqL10ubWFwKFxuICAgICAgICAodykgPT4gYWxsU2l6ZXMuZmluZCgocCkgPT4gcCA+PSB3KSB8fCBhbGxTaXplc1thbGxTaXplcy5sZW5ndGggLSAxXVxuICAgICAgKVxuICAgICksXG4gIF1cbiAgcmV0dXJuIHsgd2lkdGhzLCBraW5kOiAneCcgfVxufVxuXG50eXBlIEdlbkltZ0F0dHJzRGF0YSA9IHtcbiAgc3JjOiBzdHJpbmdcbiAgdW5vcHRpbWl6ZWQ6IGJvb2xlYW5cbiAgbGF5b3V0OiBMYXlvdXRWYWx1ZVxuICBsb2FkZXI6IEltYWdlTG9hZGVyXG4gIHdpZHRoPzogbnVtYmVyXG4gIHF1YWxpdHk/OiBudW1iZXJcbiAgc2l6ZXM/OiBzdHJpbmdcbn1cblxudHlwZSBHZW5JbWdBdHRyc1Jlc3VsdCA9IHtcbiAgc3JjOiBzdHJpbmdcbiAgc3JjU2V0OiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgc2l6ZXM6IHN0cmluZyB8IHVuZGVmaW5lZFxufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUltZ0F0dHJzKHtcbiAgc3JjLFxuICB1bm9wdGltaXplZCxcbiAgbGF5b3V0LFxuICB3aWR0aCxcbiAgcXVhbGl0eSxcbiAgc2l6ZXMsXG4gIGxvYWRlcixcbn06IEdlbkltZ0F0dHJzRGF0YSk6IEdlbkltZ0F0dHJzUmVzdWx0IHtcbiAgaWYgKHVub3B0aW1pemVkKSB7XG4gICAgcmV0dXJuIHsgc3JjLCBzcmNTZXQ6IHVuZGVmaW5lZCwgc2l6ZXM6IHVuZGVmaW5lZCB9XG4gIH1cblxuICBjb25zdCB7IHdpZHRocywga2luZCB9ID0gZ2V0V2lkdGhzKHdpZHRoLCBsYXlvdXQsIHNpemVzKVxuICBjb25zdCBsYXN0ID0gd2lkdGhzLmxlbmd0aCAtIDFcblxuICByZXR1cm4ge1xuICAgIHNpemVzOiAhc2l6ZXMgJiYga2luZCA9PT0gJ3cnID8gJzEwMHZ3JyA6IHNpemVzLFxuICAgIHNyY1NldDogd2lkdGhzXG4gICAgICAubWFwKFxuICAgICAgICAodywgaSkgPT5cbiAgICAgICAgICBgJHtsb2FkZXIoeyBzcmMsIHF1YWxpdHksIHdpZHRoOiB3IH0pfSAke1xuICAgICAgICAgICAga2luZCA9PT0gJ3cnID8gdyA6IGkgKyAxXG4gICAgICAgICAgfSR7a2luZH1gXG4gICAgICApXG4gICAgICAuam9pbignLCAnKSxcblxuICAgIC8vIEl0J3MgaW50ZW5kZWQgdG8ga2VlcCBgc3JjYCB0aGUgbGFzdCBhdHRyaWJ1dGUgYmVjYXVzZSBSZWFjdCB1cGRhdGVzXG4gICAgLy8gYXR0cmlidXRlcyBpbiBvcmRlci4gSWYgd2Uga2VlcCBgc3JjYCB0aGUgZmlyc3Qgb25lLCBTYWZhcmkgd2lsbFxuICAgIC8vIGltbWVkaWF0ZWx5IHN0YXJ0IHRvIGZldGNoIGBzcmNgLCBiZWZvcmUgYHNpemVzYCBhbmQgYHNyY1NldGAgYXJlIGV2ZW5cbiAgICAvLyB1cGRhdGVkIGJ5IFJlYWN0LiBUaGF0IGNhdXNlcyBtdWx0aXBsZSB1bm5lY2Vzc2FyeSByZXF1ZXN0cyBpZiBgc3JjU2V0YFxuICAgIC8vIGFuZCBgc2l6ZXNgIGFyZSBkZWZpbmVkLlxuICAgIC8vIFRoaXMgYnVnIGNhbm5vdCBiZSByZXByb2R1Y2VkIGluIENocm9tZSBvciBGaXJlZm94LlxuICAgIHNyYzogbG9hZGVyKHsgc3JjLCBxdWFsaXR5LCB3aWR0aDogd2lkdGhzW2xhc3RdIH0pLFxuICB9XG59XG5cbmZ1bmN0aW9uIGdldEludCh4OiB1bmtub3duKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgaWYgKHR5cGVvZiB4ID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiB4XG4gIH1cbiAgaWYgKHR5cGVvZiB4ID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBwYXJzZUludCh4LCAxMClcbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRJbWFnZUxvYWRlcihsb2FkZXJQcm9wczogSW1hZ2VMb2FkZXJQcm9wcykge1xuICBjb25zdCBsb2FkID0gbG9hZGVycy5nZXQoY29uZmlnTG9hZGVyKVxuICBpZiAobG9hZCkge1xuICAgIHJldHVybiBsb2FkKHsgcm9vdDogY29uZmlnUGF0aCwgLi4ubG9hZGVyUHJvcHMgfSlcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgYFVua25vd24gXCJsb2FkZXJcIiBmb3VuZCBpbiBcIm5leHQuY29uZmlnLmpzXCIuIEV4cGVjdGVkOiAke1ZBTElEX0xPQURFUlMuam9pbihcbiAgICAgICcsICdcbiAgICApfS4gUmVjZWl2ZWQ6ICR7Y29uZmlnTG9hZGVyfWBcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbWFnZSh7XG4gIHNyYyxcbiAgc2l6ZXMsXG4gIHVub3B0aW1pemVkID0gZmFsc2UsXG4gIHByaW9yaXR5ID0gZmFsc2UsXG4gIGxvYWRpbmcsXG4gIGNsYXNzTmFtZSxcbiAgcXVhbGl0eSxcbiAgd2lkdGgsXG4gIGhlaWdodCxcbiAgb2JqZWN0Rml0LFxuICBvYmplY3RQb3NpdGlvbixcbiAgbG9hZGVyID0gZGVmYXVsdEltYWdlTG9hZGVyLFxuICAuLi5hbGxcbn06IEltYWdlUHJvcHMpIHtcbiAgbGV0IHJlc3Q6IFBhcnRpYWw8SW1hZ2VQcm9wcz4gPSBhbGxcbiAgbGV0IGxheW91dDogTm9uTnVsbGFibGU8TGF5b3V0VmFsdWU+ID0gc2l6ZXMgPyAncmVzcG9uc2l2ZScgOiAnaW50cmluc2ljJ1xuICBsZXQgdW5zaXplZCA9IGZhbHNlXG4gIGlmICgndW5zaXplZCcgaW4gcmVzdCkge1xuICAgIHVuc2l6ZWQgPSBCb29sZWFuKHJlc3QudW5zaXplZClcbiAgICAvLyBSZW1vdmUgcHJvcGVydHkgc28gaXQncyBub3Qgc3ByZWFkIGludG8gaW1hZ2U6XG4gICAgZGVsZXRlIHJlc3RbJ3Vuc2l6ZWQnXVxuICB9IGVsc2UgaWYgKCdsYXlvdXQnIGluIHJlc3QpIHtcbiAgICAvLyBPdmVycmlkZSBkZWZhdWx0IGxheW91dCBpZiB0aGUgdXNlciBzcGVjaWZpZWQgb25lOlxuICAgIGlmIChyZXN0LmxheW91dCkgbGF5b3V0ID0gcmVzdC5sYXlvdXRcblxuICAgIC8vIFJlbW92ZSBwcm9wZXJ0eSBzbyBpdCdzIG5vdCBzcHJlYWQgaW50byBpbWFnZTpcbiAgICBkZWxldGUgcmVzdFsnbGF5b3V0J11cbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKCFzcmMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIGlzIG1pc3NpbmcgcmVxdWlyZWQgXCJzcmNcIiBwcm9wZXJ0eS4gTWFrZSBzdXJlIHlvdSBwYXNzIFwic3JjXCIgaW4gcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICB7IHdpZHRoLCBoZWlnaHQsIHF1YWxpdHkgfVxuICAgICAgICApfWBcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKCFWQUxJRF9MQVlPVVRfVkFMVUVTLmluY2x1ZGVzKGxheW91dCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsYXlvdXRcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xheW91dH1cIiBzaG91bGQgYmUgb25lIG9mICR7VkFMSURfTEFZT1VUX1ZBTFVFUy5tYXAoXG4gICAgICAgICAgU3RyaW5nXG4gICAgICAgICkuam9pbignLCcpfS5gXG4gICAgICApXG4gICAgfVxuICAgIGlmICghVkFMSURfTE9BRElOR19WQUxVRVMuaW5jbHVkZXMobG9hZGluZykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsb2FkaW5nXCIgcHJvcGVydHkuIFByb3ZpZGVkIFwiJHtsb2FkaW5nfVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MT0FESU5HX1ZBTFVFUy5tYXAoXG4gICAgICAgICAgU3RyaW5nXG4gICAgICAgICkuam9pbignLCcpfS5gXG4gICAgICApXG4gICAgfVxuICAgIGlmIChwcmlvcml0eSAmJiBsb2FkaW5nID09PSAnbGF6eScpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGJvdGggXCJwcmlvcml0eVwiIGFuZCBcImxvYWRpbmc9J2xhenknXCIgcHJvcGVydGllcy4gT25seSBvbmUgc2hvdWxkIGJlIHVzZWQuYFxuICAgICAgKVxuICAgIH1cbiAgICBpZiAodW5zaXplZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgZGVwcmVjYXRlZCBcInVuc2l6ZWRcIiBwcm9wZXJ0eSwgd2hpY2ggd2FzIHJlbW92ZWQgaW4gZmF2b3Igb2YgdGhlIFwibGF5b3V0PSdmaWxsJ1wiIHByb3BlcnR5YFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGxldCBpc0xhenkgPVxuICAgICFwcmlvcml0eSAmJiAobG9hZGluZyA9PT0gJ2xhenknIHx8IHR5cGVvZiBsb2FkaW5nID09PSAndW5kZWZpbmVkJylcbiAgaWYgKHNyYyAmJiBzcmMuc3RhcnRzV2l0aCgnZGF0YTonKSkge1xuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUVFAvQmFzaWNzX29mX0hUVFAvRGF0YV9VUklzXG4gICAgdW5vcHRpbWl6ZWQgPSB0cnVlXG4gICAgaXNMYXp5ID0gZmFsc2VcbiAgfVxuXG4gIGNvbnN0IFtzZXRSZWYsIGlzSW50ZXJzZWN0ZWRdID0gdXNlSW50ZXJzZWN0aW9uPEhUTUxJbWFnZUVsZW1lbnQ+KHtcbiAgICByb290TWFyZ2luOiAnMjAwcHgnLFxuICAgIGRpc2FibGVkOiAhaXNMYXp5LFxuICB9KVxuICBjb25zdCBpc1Zpc2libGUgPSAhaXNMYXp5IHx8IGlzSW50ZXJzZWN0ZWRcblxuICBjb25zdCB3aWR0aEludCA9IGdldEludCh3aWR0aClcbiAgY29uc3QgaGVpZ2h0SW50ID0gZ2V0SW50KGhlaWdodClcbiAgY29uc3QgcXVhbGl0eUludCA9IGdldEludChxdWFsaXR5KVxuXG4gIGxldCB3cmFwcGVyU3R5bGU6IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snZGl2J11bJ3N0eWxlJ10gfCB1bmRlZmluZWRcbiAgbGV0IHNpemVyU3R5bGU6IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snZGl2J11bJ3N0eWxlJ10gfCB1bmRlZmluZWRcbiAgbGV0IHNpemVyU3ZnOiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgbGV0IGltZ1N0eWxlOiBJbWdFbGVtZW50U3R5bGUgfCB1bmRlZmluZWQgPSB7XG4gICAgdmlzaWJpbGl0eTogaXNWaXNpYmxlID8gJ2luaGVyaXQnIDogJ2hpZGRlbicsXG5cbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6IDAsXG4gICAgbGVmdDogMCxcbiAgICBib3R0b206IDAsXG4gICAgcmlnaHQ6IDAsXG5cbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICBwYWRkaW5nOiAwLFxuICAgIGJvcmRlcjogJ25vbmUnLFxuICAgIG1hcmdpbjogJ2F1dG8nLFxuXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICB3aWR0aDogMCxcbiAgICBoZWlnaHQ6IDAsXG4gICAgbWluV2lkdGg6ICcxMDAlJyxcbiAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgIG1pbkhlaWdodDogJzEwMCUnLFxuICAgIG1heEhlaWdodDogJzEwMCUnLFxuXG4gICAgb2JqZWN0Rml0LFxuICAgIG9iamVjdFBvc2l0aW9uLFxuICB9XG4gIGlmIChcbiAgICB0eXBlb2Ygd2lkdGhJbnQgIT09ICd1bmRlZmluZWQnICYmXG4gICAgdHlwZW9mIGhlaWdodEludCAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICBsYXlvdXQgIT09ICdmaWxsJ1xuICApIHtcbiAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIC8+XG4gICAgY29uc3QgcXVvdGllbnQgPSBoZWlnaHRJbnQgLyB3aWR0aEludFxuICAgIGNvbnN0IHBhZGRpbmdUb3AgPSBpc05hTihxdW90aWVudCkgPyAnMTAwJScgOiBgJHtxdW90aWVudCAqIDEwMH0lYFxuICAgIGlmIChsYXlvdXQgPT09ICdyZXNwb25zaXZlJykge1xuICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJyZXNwb25zaXZlXCIgLz5cbiAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcblxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgfVxuICAgICAgc2l6ZXJTdHlsZSA9IHsgZGlzcGxheTogJ2Jsb2NrJywgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsIHBhZGRpbmdUb3AgfVxuICAgIH0gZWxzZSBpZiAobGF5b3V0ID09PSAnaW50cmluc2ljJykge1xuICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJpbnRyaW5zaWNcIiAvPlxuICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIG1hcmdpbjogMCxcbiAgICAgIH1cbiAgICAgIHNpemVyU3R5bGUgPSB7XG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgfVxuICAgICAgc2l6ZXJTdmcgPSBgPHN2ZyB3aWR0aD1cIiR7d2lkdGhJbnR9XCIgaGVpZ2h0PVwiJHtoZWlnaHRJbnR9XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZlcnNpb249XCIxLjFcIi8+YFxuICAgIH0gZWxzZSBpZiAobGF5b3V0ID09PSAnZml4ZWQnKSB7XG4gICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cImZpeGVkXCIgLz5cbiAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICB3aWR0aDogd2lkdGhJbnQsXG4gICAgICAgIGhlaWdodDogaGVpZ2h0SW50LFxuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChcbiAgICB0eXBlb2Ygd2lkdGhJbnQgPT09ICd1bmRlZmluZWQnICYmXG4gICAgdHlwZW9mIGhlaWdodEludCA9PT0gJ3VuZGVmaW5lZCcgJiZcbiAgICBsYXlvdXQgPT09ICdmaWxsJ1xuICApIHtcbiAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiBsYXlvdXQ9XCJmaWxsXCIgLz5cbiAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHRvcDogMCxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICBib3R0b206IDAsXG4gICAgICByaWdodDogMCxcblxuICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICBtYXJnaW46IDAsXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIC8+XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgbXVzdCB1c2UgXCJ3aWR0aFwiIGFuZCBcImhlaWdodFwiIHByb3BlcnRpZXMgb3IgXCJsYXlvdXQ9J2ZpbGwnXCIgcHJvcGVydHkuYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGxldCBpbWdBdHRyaWJ1dGVzOiBHZW5JbWdBdHRyc1Jlc3VsdCA9IHtcbiAgICBzcmM6XG4gICAgICAnZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFJQUFBQUFBQVAvLy95SDVCQUVBQUFBQUxBQUFBQUFCQUFFQUFBSUJSQUE3JyxcbiAgICBzcmNTZXQ6IHVuZGVmaW5lZCxcbiAgICBzaXplczogdW5kZWZpbmVkLFxuICB9XG5cbiAgaWYgKGlzVmlzaWJsZSkge1xuICAgIGltZ0F0dHJpYnV0ZXMgPSBnZW5lcmF0ZUltZ0F0dHJzKHtcbiAgICAgIHNyYyxcbiAgICAgIHVub3B0aW1pemVkLFxuICAgICAgbGF5b3V0LFxuICAgICAgd2lkdGg6IHdpZHRoSW50LFxuICAgICAgcXVhbGl0eTogcXVhbGl0eUludCxcbiAgICAgIHNpemVzLFxuICAgICAgbG9hZGVyLFxuICAgIH0pXG4gIH1cblxuICBpZiAodW5zaXplZCkge1xuICAgIHdyYXBwZXJTdHlsZSA9IHVuZGVmaW5lZFxuICAgIHNpemVyU3R5bGUgPSB1bmRlZmluZWRcbiAgICBpbWdTdHlsZSA9IHVuZGVmaW5lZFxuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17d3JhcHBlclN0eWxlfT5cbiAgICAgIHtzaXplclN0eWxlID8gKFxuICAgICAgICA8ZGl2IHN0eWxlPXtzaXplclN0eWxlfT5cbiAgICAgICAgICB7c2l6ZXJTdmcgPyAoXG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCxcbiAgICAgICAgICAgICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICBhcmlhLWhpZGRlbj17dHJ1ZX1cbiAgICAgICAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXG4gICAgICAgICAgICAgIHNyYz17YGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsJHt0b0Jhc2U2NChzaXplclN2Zyl9YH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IG51bGx9XG4gICAgICA8aW1nXG4gICAgICAgIHsuLi5yZXN0fVxuICAgICAgICB7Li4uaW1nQXR0cmlidXRlc31cbiAgICAgICAgZGVjb2Rpbmc9XCJhc3luY1wiXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICByZWY9e3NldFJlZn1cbiAgICAgICAgc3R5bGU9e2ltZ1N0eWxlfVxuICAgICAgLz5cbiAgICAgIHtwcmlvcml0eSA/IChcbiAgICAgICAgLy8gTm90ZSBob3cgd2Ugb21pdCB0aGUgYGhyZWZgIGF0dHJpYnV0ZSwgYXMgaXQgd291bGQgb25seSBiZSByZWxldmFudFxuICAgICAgICAvLyBmb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBgaW1hZ2VzcmNzZXRgLCBhbmQgaW4gdGhvc2UgY2FzZXNcbiAgICAgICAgLy8gaXQgd291bGQgbGlrZWx5IGNhdXNlIHRoZSBpbmNvcnJlY3QgaW1hZ2UgdG8gYmUgcHJlbG9hZGVkLlxuICAgICAgICAvL1xuICAgICAgICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zZW1hbnRpY3MuaHRtbCNhdHRyLWxpbmstaW1hZ2VzcmNzZXRcbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIGtleT17XG4gICAgICAgICAgICAgICdfX25pbWctJyArXG4gICAgICAgICAgICAgIGltZ0F0dHJpYnV0ZXMuc3JjICtcbiAgICAgICAgICAgICAgaW1nQXR0cmlidXRlcy5zcmNTZXQgK1xuICAgICAgICAgICAgICBpbWdBdHRyaWJ1dGVzLnNpemVzXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZWw9XCJwcmVsb2FkXCJcbiAgICAgICAgICAgIGFzPVwiaW1hZ2VcIlxuICAgICAgICAgICAgaHJlZj17aW1nQXR0cmlidXRlcy5zcmNTZXQgPyB1bmRlZmluZWQgOiBpbWdBdHRyaWJ1dGVzLnNyY31cbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmU6IGltYWdlc3Jjc2V0IGlzIG5vdCB5ZXQgaW4gdGhlIGxpbmsgZWxlbWVudCB0eXBlXG4gICAgICAgICAgICBpbWFnZXNyY3NldD17aW1nQXR0cmlidXRlcy5zcmNTZXR9XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlOiBpbWFnZXNpemVzIGlzIG5vdCB5ZXQgaW4gdGhlIGxpbmsgZWxlbWVudCB0eXBlXG4gICAgICAgICAgICBpbWFnZXNpemVzPXtpbWdBdHRyaWJ1dGVzLnNpemVzfVxuICAgICAgICAgID48L2xpbms+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICkgOiBudWxsfVxuICAgIDwvZGl2PlxuICApXG59XG5cbi8vQlVJTFQgSU4gTE9BREVSU1xuXG5mdW5jdGlvbiBub3JtYWxpemVTcmMoc3JjOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gc3JjWzBdID09PSAnLycgPyBzcmMuc2xpY2UoMSkgOiBzcmNcbn1cblxuZnVuY3Rpb24gaW1naXhMb2FkZXIoe1xuICByb290LFxuICBzcmMsXG4gIHdpZHRoLFxuICBxdWFsaXR5LFxufTogRGVmYXVsdEltYWdlTG9hZGVyUHJvcHMpOiBzdHJpbmcge1xuICAvLyBEZW1vOiBodHRwczovL3N0YXRpYy5pbWdpeC5uZXQvZGFpc3kucG5nP2Zvcm1hdD1hdXRvJmZpdD1tYXgmdz0zMDBcbiAgY29uc3QgcGFyYW1zID0gWydhdXRvPWZvcm1hdCcsICdmaXQ9bWF4JywgJ3c9JyArIHdpZHRoXVxuICBsZXQgcGFyYW1zU3RyaW5nID0gJydcbiAgaWYgKHF1YWxpdHkpIHtcbiAgICBwYXJhbXMucHVzaCgncT0nICsgcXVhbGl0eSlcbiAgfVxuXG4gIGlmIChwYXJhbXMubGVuZ3RoKSB7XG4gICAgcGFyYW1zU3RyaW5nID0gJz8nICsgcGFyYW1zLmpvaW4oJyYnKVxuICB9XG4gIHJldHVybiBgJHtyb290fSR7bm9ybWFsaXplU3JjKHNyYyl9JHtwYXJhbXNTdHJpbmd9YFxufVxuXG5mdW5jdGlvbiBha2FtYWlMb2FkZXIoeyByb290LCBzcmMsIHdpZHRoIH06IERlZmF1bHRJbWFnZUxvYWRlclByb3BzKTogc3RyaW5nIHtcbiAgcmV0dXJuIGAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX0/aW13aWR0aD0ke3dpZHRofWBcbn1cblxuZnVuY3Rpb24gY2xvdWRpbmFyeUxvYWRlcih7XG4gIHJvb3QsXG4gIHNyYyxcbiAgd2lkdGgsXG4gIHF1YWxpdHksXG59OiBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcyk6IHN0cmluZyB7XG4gIC8vIERlbW86IGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RlbW8vaW1hZ2UvdXBsb2FkL3dfMzAwLGNfbGltaXQscV9hdXRvL3R1cnRsZXMuanBnXG4gIGNvbnN0IHBhcmFtcyA9IFsnZl9hdXRvJywgJ2NfbGltaXQnLCAnd18nICsgd2lkdGgsICdxXycgKyAocXVhbGl0eSB8fCAnYXV0bycpXVxuICBsZXQgcGFyYW1zU3RyaW5nID0gcGFyYW1zLmpvaW4oJywnKSArICcvJ1xuICByZXR1cm4gYCR7cm9vdH0ke3BhcmFtc1N0cmluZ30ke25vcm1hbGl6ZVNyYyhzcmMpfWBcbn1cblxuZnVuY3Rpb24gZGVmYXVsdExvYWRlcih7XG4gIHJvb3QsXG4gIHNyYyxcbiAgd2lkdGgsXG4gIHF1YWxpdHksXG59OiBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcyk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbWlzc2luZ1ZhbHVlcyA9IFtdXG5cbiAgICAvLyB0aGVzZSBzaG91bGQgYWx3YXlzIGJlIHByb3ZpZGVkIGJ1dCBtYWtlIHN1cmUgdGhleSBhcmVcbiAgICBpZiAoIXNyYykgbWlzc2luZ1ZhbHVlcy5wdXNoKCdzcmMnKVxuICAgIGlmICghd2lkdGgpIG1pc3NpbmdWYWx1ZXMucHVzaCgnd2lkdGgnKVxuXG4gICAgaWYgKG1pc3NpbmdWYWx1ZXMubGVuZ3RoID4gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgTmV4dCBJbWFnZSBPcHRpbWl6YXRpb24gcmVxdWlyZXMgJHttaXNzaW5nVmFsdWVzLmpvaW4oXG4gICAgICAgICAgJywgJ1xuICAgICAgICApfSB0byBiZSBwcm92aWRlZC4gTWFrZSBzdXJlIHlvdSBwYXNzIHRoZW0gYXMgcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICB7IHNyYywgd2lkdGgsIHF1YWxpdHkgfVxuICAgICAgICApfWBcbiAgICAgIClcbiAgICB9XG5cbiAgICBpZiAoc3JjLnN0YXJ0c1dpdGgoJy8vJykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCB0byBwYXJzZSBzcmMgXCIke3NyY31cIiBvbiBcXGBuZXh0L2ltYWdlXFxgLCBwcm90b2NvbC1yZWxhdGl2ZSBVUkwgKC8vKSBtdXN0IGJlIGNoYW5nZWQgdG8gYW4gYWJzb2x1dGUgVVJMIChodHRwOi8vIG9yIGh0dHBzOi8vKWBcbiAgICAgIClcbiAgICB9XG5cbiAgICBpZiAoIXNyYy5zdGFydHNXaXRoKCcvJykgJiYgY29uZmlnRG9tYWlucykge1xuICAgICAgbGV0IHBhcnNlZFNyYzogVVJMXG4gICAgICB0cnkge1xuICAgICAgICBwYXJzZWRTcmMgPSBuZXcgVVJMKHNyYylcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBGYWlsZWQgdG8gcGFyc2Ugc3JjIFwiJHtzcmN9XCIgb24gXFxgbmV4dC9pbWFnZVxcYCwgaWYgdXNpbmcgcmVsYXRpdmUgaW1hZ2UgaXQgbXVzdCBzdGFydCB3aXRoIGEgbGVhZGluZyBzbGFzaCBcIi9cIiBvciBiZSBhbiBhYnNvbHV0ZSBVUkwgKGh0dHA6Ly8gb3IgaHR0cHM6Ly8pYFxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGlmICghY29uZmlnRG9tYWlucy5pbmNsdWRlcyhwYXJzZWRTcmMuaG9zdG5hbWUpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgSW52YWxpZCBzcmMgcHJvcCAoJHtzcmN9KSBvbiBcXGBuZXh0L2ltYWdlXFxgLCBob3N0bmFtZSBcIiR7cGFyc2VkU3JjLmhvc3RuYW1lfVwiIGlzIG5vdCBjb25maWd1cmVkIHVuZGVyIGltYWdlcyBpbiB5b3VyIFxcYG5leHQuY29uZmlnLmpzXFxgXFxuYCArXG4gICAgICAgICAgICBgU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9lcnIuc2gvbmV4dC5qcy9uZXh0LWltYWdlLXVuY29uZmlndXJlZC1ob3N0YFxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGAke3Jvb3R9P3VybD0ke2VuY29kZVVSSUNvbXBvbmVudChzcmMpfSZ3PSR7d2lkdGh9JnE9JHtxdWFsaXR5IHx8IDc1fWBcbn1cbiIsInR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSA9IGFueVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9ucyA9IHtcbiAgdGltZW91dDogbnVtYmVyXG59XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSA9IHtcbiAgcmVhZG9ubHkgZGlkVGltZW91dDogYm9vbGVhblxuICB0aW1lUmVtYWluaW5nOiAoKSA9PiBudW1iZXJcbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICByZXF1ZXN0SWRsZUNhbGxiYWNrOiAoXG4gICAgICBjYWxsYmFjazogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWQsXG4gICAgICBvcHRzPzogUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnNcbiAgICApID0+IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGVcbiAgICBjYW5jZWxJZGxlQ2FsbGJhY2s6IChpZDogUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSkgPT4gdm9pZFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrID1cbiAgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2spIHx8XG4gIGZ1bmN0aW9uIChcbiAgICBjYjogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWRcbiAgKTogTm9kZUpTLlRpbWVvdXQge1xuICAgIGxldCBzdGFydCA9IERhdGUubm93KClcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBjYih7XG4gICAgICAgIGRpZFRpbWVvdXQ6IGZhbHNlLFxuICAgICAgICB0aW1lUmVtYWluaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIDUwIC0gKERhdGUubm93KCkgLSBzdGFydCkpXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgIH0sIDEpXG4gIH1cblxuZXhwb3J0IGNvbnN0IGNhbmNlbElkbGVDYWxsYmFjayA9XG4gICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2spIHx8XG4gIGZ1bmN0aW9uIChpZDogUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSkge1xuICAgIHJldHVybiBjbGVhclRpbWVvdXQoaWQpXG4gIH1cbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIHJlcXVlc3RJZGxlQ2FsbGJhY2ssXG4gIGNhbmNlbElkbGVDYWxsYmFjayxcbn0gZnJvbSAnLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2snXG5cbnR5cGUgVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0ID0gUGljazxJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQsICdyb290TWFyZ2luJz5cbnR5cGUgVXNlSW50ZXJzZWN0aW9uID0geyBkaXNhYmxlZD86IGJvb2xlYW4gfSAmIFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdFxudHlwZSBPYnNlcnZlQ2FsbGJhY2sgPSAoaXNWaXNpYmxlOiBib29sZWFuKSA9PiB2b2lkXG50eXBlIE9ic2VydmVyID0ge1xuICBpZDogc3RyaW5nXG4gIG9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuICBlbGVtZW50czogTWFwPEVsZW1lbnQsIE9ic2VydmVDYWxsYmFjaz5cbn1cblxuY29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSB0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb248VCBleHRlbmRzIEVsZW1lbnQ+KHtcbiAgcm9vdE1hcmdpbixcbiAgZGlzYWJsZWQsXG59OiBVc2VJbnRlcnNlY3Rpb24pOiBbKGVsZW1lbnQ6IFQgfCBudWxsKSA9PiB2b2lkLCBib29sZWFuXSB7XG4gIGNvbnN0IGlzRGlzYWJsZWQ6IGJvb2xlYW4gPSBkaXNhYmxlZCB8fCAhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcblxuICBjb25zdCB1bm9ic2VydmUgPSB1c2VSZWY8RnVuY3Rpb24+KClcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3Qgc2V0UmVmID0gdXNlQ2FsbGJhY2soXG4gICAgKGVsOiBUIHwgbnVsbCkgPT4ge1xuICAgICAgaWYgKHVub2JzZXJ2ZS5jdXJyZW50KSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50KClcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSB1bmRlZmluZWRcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRGlzYWJsZWQgfHwgdmlzaWJsZSkgcmV0dXJuXG5cbiAgICAgIGlmIChlbCAmJiBlbC50YWdOYW1lKSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gb2JzZXJ2ZShcbiAgICAgICAgICBlbCxcbiAgICAgICAgICAoaXNWaXNpYmxlKSA9PiBpc1Zpc2libGUgJiYgc2V0VmlzaWJsZShpc1Zpc2libGUpLFxuICAgICAgICAgIHsgcm9vdE1hcmdpbiB9XG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9LFxuICAgIFtpc0Rpc2FibGVkLCByb290TWFyZ2luLCB2aXNpYmxlXVxuICApXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICBpZiAoIXZpc2libGUpIHtcbiAgICAgICAgY29uc3QgaWRsZUNhbGxiYWNrID0gcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiBzZXRWaXNpYmxlKHRydWUpKVxuICAgICAgICByZXR1cm4gKCkgPT4gY2FuY2VsSWRsZUNhbGxiYWNrKGlkbGVDYWxsYmFjaylcbiAgICAgIH1cbiAgICB9XG4gIH0sIFt2aXNpYmxlXSlcblxuICByZXR1cm4gW3NldFJlZiwgdmlzaWJsZV1cbn1cblxuZnVuY3Rpb24gb2JzZXJ2ZShcbiAgZWxlbWVudDogRWxlbWVudCxcbiAgY2FsbGJhY2s6IE9ic2VydmVDYWxsYmFjayxcbiAgb3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0XG4pOiAoKSA9PiB2b2lkIHtcbiAgY29uc3QgeyBpZCwgb2JzZXJ2ZXIsIGVsZW1lbnRzIH0gPSBjcmVhdGVPYnNlcnZlcihvcHRpb25zKVxuICBlbGVtZW50cy5zZXQoZWxlbWVudCwgY2FsbGJhY2spXG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KVxuICByZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCk6IHZvaWQge1xuICAgIGVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KVxuICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KVxuXG4gICAgLy8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuICAgIGlmIChlbGVtZW50cy5zaXplID09PSAwKSB7XG4gICAgICBvYnNlcnZlci5kaXNjb25uZWN0KClcbiAgICAgIG9ic2VydmVycy5kZWxldGUoaWQpXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IG9ic2VydmVycyA9IG5ldyBNYXA8c3RyaW5nLCBPYnNlcnZlcj4oKVxuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0KTogT2JzZXJ2ZXIge1xuICBjb25zdCBpZCA9IG9wdGlvbnMucm9vdE1hcmdpbiB8fCAnJ1xuICBsZXQgaW5zdGFuY2UgPSBvYnNlcnZlcnMuZ2V0KGlkKVxuICBpZiAoaW5zdGFuY2UpIHtcbiAgICByZXR1cm4gaW5zdGFuY2VcbiAgfVxuXG4gIGNvbnN0IGVsZW1lbnRzID0gbmV3IE1hcDxFbGVtZW50LCBPYnNlcnZlQ2FsbGJhY2s+KClcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICBjb25zdCBjYWxsYmFjayA9IGVsZW1lbnRzLmdldChlbnRyeS50YXJnZXQpXG4gICAgICBjb25zdCBpc1Zpc2libGUgPSBlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDBcbiAgICAgIGlmIChjYWxsYmFjayAmJiBpc1Zpc2libGUpIHtcbiAgICAgICAgY2FsbGJhY2soaXNWaXNpYmxlKVxuICAgICAgfVxuICAgIH0pXG4gIH0sIG9wdGlvbnMpXG5cbiAgb2JzZXJ2ZXJzLnNldChcbiAgICBpZCxcbiAgICAoaW5zdGFuY2UgPSB7XG4gICAgICBpZCxcbiAgICAgIG9ic2VydmVyLFxuICAgICAgZWxlbWVudHMsXG4gICAgfSlcbiAgKVxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9pbWFnZScpXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IE1lbnUsIE1lbnVCdXR0b24sIE1lbnVJdGVtLCBNZW51TGlzdCwgSW1hZ2UsIEJ1dHRvbiB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXHJcblxyXG5jb25zdCBCYXNlTWVudSA9ICh7IHJvd3MsIGxvYWREYXRhIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPE1lbnU+XHJcbiAgICAgIDxNZW51QnV0dG9uIGFzPXtCdXR0b259PlxyXG4gICAgICAgIENoYW5nZSBCYXNlXHJcbiAgICAgIDwvTWVudUJ1dHRvbj5cclxuICAgICAgPE1lbnVMaXN0PlxyXG4gICAgICAgIHtPYmplY3QudmFsdWVzKHJvd3MpLm1hcCgoYykgPT5cclxuICAgICAgICA8TWVudUl0ZW0ga2V5PXtjfSBvbkNsaWNrPXsoKSA9PiBsb2FkRGF0YShjKX0gbWluSD1cIjMycHhcIj5cclxuICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgYm94U2l6ZT1cIjEuNXJlbVwiXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1cz1cImZ1bGxcIlxyXG4gICAgICAgICAgICBzcmM9XCJodHRwczovL3BsYWNla2l0dGVuLmNvbS8xMDAvMTAwXCJcclxuICAgICAgICAgICAgYWx0PXtjfVxyXG4gICAgICAgICAgICBtcj1cIjEycHhcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHNwYW4+e2N9PC9zcGFuPlxyXG4gICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9NZW51TGlzdD5cclxuICAgIDwvTWVudT5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhc2VNZW51IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBCb3gsIEdyaWQsIEhlYWRpbmcgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xyXG5cclxuY29uc3QgQ3VycmVuY3lIZWFkID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8R3JpZCBoPVwiNTBweFwiIHRlbXBsYXRlQ29sdW1ucz1cInJlcGVhdCg1LCAxZnIpXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIGdhcD17MX0+XHJcbiAgICAgIDxCb3ggdz17WycxMDBweCcsICcxMDBweCcsICcxMjBweCcsICcxODBweCddfSBhbGlnbj1cImNlbnRlclwiPjxIZWFkaW5nIGZvbnRTaXplPVwieGxcIj5TeW1ib2w8L0hlYWRpbmc+PC9Cb3g+XHJcbiAgICAgIDxCb3ggdz17WycxMDBweCcsICcxMDBweCcsICcxMjBweCcsICcxODBweCddfSBhbGlnbj1cImNlbnRlclwiPjxIZWFkaW5nIGZvbnRTaXplPVwieGxcIj5QcmljZTwvSGVhZGluZz48L0JveD5cclxuICAgICAgPEJveCB3PXtbJzEwMHB4JywgJzEwMHB4JywgJzEyMHB4JywgJzE4MHB4J119IGFsaWduPVwiY2VudGVyXCI+PEhlYWRpbmcgZm9udFNpemU9XCJ4bFwiPkluZGljYXRvcjwvSGVhZGluZz48L0JveD5cclxuICAgICAgPEJveCB3PXtbJzEwMHB4JywgJzEwMHB4JywgJzEyMHB4JywgJzE4MHB4J119IGFsaWduPVwiY2VudGVyXCI+PEhlYWRpbmcgZm9udFNpemU9XCJ4bFwiPkNoYW5nZTwvSGVhZGluZz48L0JveD5cclxuICAgICAgPEJveCB3PXtbJzEwMHB4JywgJzEwMHB4JywgJzEyMHB4JywgJzE4MHB4J119IGFsaWduPVwiY2VudGVyXCI+PEhlYWRpbmcgZm9udFNpemU9XCJ4bFwiPkdyYXBoPC9IZWFkaW5nPjwvQm94PlxyXG4gICAgPC9HcmlkPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3VycmVuY3lIZWFkXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQm94LCBHcmlkLCBIZWFkaW5nLCBEaXZpZGVyIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcclxuaW1wb3J0IExpbmVDaGFydCBmcm9tICcuL0xpbmVDaGFydCdcclxuaW1wb3J0IHsgdGhlbWUgfSBmcm9tICcuLi9zdHlsZXMvdGhlbWUuanMnIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcclxuXHJcbmNvbnN0IEN1cnJlbmN5Um93ID0gKHsgc3ltYm9sLCBwcmljZSwgaW5kaWNhdG9yLCBjaGFuZ2UsIGdyYXBoIH0pID0+IHtcclxuICAvLyBUaGlzIGFkanVzdHMgdGhlIGNvbG91ciBiYXNlZCBvbiBob3cgdGhlIGN1cnJlbmN5IGhhcyB2YWx1ZWRcclxuICBsZXQgY29sb3JcclxuICBpZiAoaW5kaWNhdG9yID09PSAxKSB7XHJcbiAgICBjb2xvciA9IHRoZW1lLmNvbG9ycy5jdXJySW5jcmVhc2VcclxuICB9IGVsc2UgaWYgKGluZGljYXRvciA9PT0gMCkge1xyXG4gICAgY29sb3IgPSB0aGVtZS5jb2xvcnMuY3Vyck5vQ2hhbmdlXHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbG9yID0gdGhlbWUuY29sb3JzLmN1cnJEZWNyZWFzZVxyXG4gIH1cclxuXHJcbiAgLy8gVGhpcyBhZGp1c3RzIHRoZSBiYWNrZ3JvdW5kIGNvbG91ciBpZiB0aGUgcm93IGlzIHRoZSBiYXNlIHJvd1xyXG4gIGxldCBiYXNlQ29sb3IgPSAnJ1xyXG4gIGlmIChpbmRpY2F0b3IgPT09IG51bGwpIHtcclxuICAgIGJhc2VDb2xvciA9ICd0ZWFsLjUwMCdcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94PlxyXG4gICAgPEdyaWQgaD1cIjUwcHhcIiBiZz17YmFzZUNvbG9yfSBib3JkZXJSYWRpdXM9XCJsZ1wiIHRlbXBsYXRlQ29sdW1ucz1cInJlcGVhdCg1LCAxZnIpXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIGdhcD17MX0+XHJcbiAgICAgIDxCb3ggdz17WycxMDBweCcsICcxMDBweCcsICcxMjBweCcsICcxODBweCddfSBhbGlnbj1cImNlbnRlclwiPjxIZWFkaW5nIGZvbnRTaXplPVwibGdcIj57c3ltYm9sfTwvSGVhZGluZz48L0JveD5cclxuICAgICAgPEJveCB3PXtbJzEwMHB4JywgJzEwMHB4JywgJzEyMHB4JywgJzE4MHB4J119IGFsaWduPVwiY2VudGVyXCI+PEhlYWRpbmcgZm9udFNpemU9XCJtZFwiPntwcmljZX08L0hlYWRpbmc+PC9Cb3g+XHJcbiAgICAgIDxCb3ggdz17WycxMDBweCcsICcxMDBweCcsICcxMjBweCcsICcxODBweCddfSBhbGlnbj1cImNlbnRlclwiPjxIZWFkaW5nIGNvbG9yPXtjb2xvcn0gZm9udFNpemU9XCJsZ1wiPntpbmRpY2F0b3IgIT09IG51bGwgPyBpbmRpY2F0b3IgOiBudWxsfTwvSGVhZGluZz48L0JveD5cclxuICAgICAgPEJveCB3PXtbJzEwMHB4JywgJzEwMHB4JywgJzEyMHB4JywgJzE4MHB4J119IGFsaWduPVwiY2VudGVyXCI+PEhlYWRpbmcgY29sb3I9e2NvbG9yfSBmb250U2l6ZT1cImxnXCI+e2NoYW5nZSAhPT0gbnVsbCA/IGNoYW5nZSA6IG51bGx9PC9IZWFkaW5nPjwvQm94PlxyXG4gICAgICA8Qm94IHc9e1snMTAwcHgnLCAnMTAwcHgnLCAnMTIwcHgnLCAnMTgwcHgnXX0gYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICB7Z3JhcGggIT09IG51bGxcclxuICAgICAgICAgID8gPExpbmVDaGFydFxyXG4gICAgICAgICAgeEF4aXNEYXRhPXtncmFwaFswXX1cclxuICAgICAgICAgIHlBeGlzRGF0YT17Z3JhcGhbMV19XHJcbiAgICAgICAgICBpbmRpY2F0b3I9e2luZGljYXRvcn1cclxuICAgICAgICAgIGNvbG9yPXtjb2xvcn1cclxuICAgICAgICAvPlxyXG4gICAgICAgICAgOiBudWxsfVxyXG4gICAgICA8L0JveD5cclxuICAgIDwvR3JpZD5cclxuICAgIDxEaXZpZGVyIC8+XHJcbiAgICA8L0JveD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEN1cnJlbmN5Um93IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBWU3RhY2sgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xyXG5pbXBvcnQgQ3VycmVuY3lIZWFkIGZyb20gJy4vQ3VycmVuY3lIZWFkJ1xyXG5pbXBvcnQgQ3VycmVuY3lSb3cgZnJvbSAnLi9DdXJyZW5jeVJvdydcclxuXHJcbmNvbnN0IEN1cnJlbmN5U3RhY2sgPSAoeyByb3dzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFZTdGFjayBzcGFjaW5nPXsyfT5cclxuICAgICAgICA8Q3VycmVuY3lIZWFkLz5cclxuICAgICAgICB7T2JqZWN0LmtleXMocm93cykubWFwKChjKSA9PlxyXG4gICAgICAgIDxDdXJyZW5jeVJvdyBrZXk9e2N9XHJcbiAgICAgICAgICAgIHN5bWJvbD17Y31cclxuICAgICAgICAgICAgcHJpY2U9e3Jvd3NbY10ucHJpY2V9XHJcbiAgICAgICAgICAgIGluZGljYXRvcj17cm93c1tjXS5pbmRpY2F0b3J9XHJcbiAgICAgICAgICAgIGNoYW5nZT17cm93c1tjXS5jaGFuZ2V9XHJcbiAgICAgICAgICAgIGdyYXBoPXtyb3dzW2NdLmdyYXBofVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgKX1cclxuICAgIDwvVlN0YWNrPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3VycmVuY3lTdGFjayIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTGluZSB9IGZyb20gJ3JlYWN0LWNoYXJ0anMtMidcclxuXHJcbmNvbnN0IExpbmVDaGFydCA9ICh7IHhBeGlzRGF0YSwgeUF4aXNEYXRhLCB0aXRsZSwgeExhYmVsLCB5TGFiZWwsIGNvbG9yLCBncmlkID0gZmFsc2UgfSkgPT4ge1xyXG4gIGNvbnN0IGxlZ2VuZE9wdGlvbnMgPSB7XHJcbiAgICBkaXNwbGF5OiBmYWxzZVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgIHJlc3BvbnNpdmU6IHRydWUsXHJcbiAgICBtYWludGFpbkFzcGVjdFJhdGlvOiBmYWxzZSxcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgIGRpc3BsYXk6ICEhdGl0bGUsXHJcbiAgICAgIHRleHQ6IHRpdGxlXHJcbiAgICB9LFxyXG4gICAgZWxlbWVudHM6IHtcclxuICAgICAgcG9pbnQ6IHtcclxuICAgICAgICByYWRpdXM6IDBcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNjYWxlczoge1xyXG4gICAgICB5QXhlczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHNjYWxlTGFiZWw6IHsgZGlzcGxheTogISF5TGFiZWwsIGxhYmVsU3RyaW5nOiB5TGFiZWwgfSxcclxuICAgICAgICAgIGdyaWRMaW5lczogeyBkaXNwbGF5OiBncmlkIH0sXHJcbiAgICAgICAgICB0aWNrczogeyBkaXNwbGF5OiBmYWxzZSB9XHJcbiAgICAgICAgfVxyXG4gICAgICBdLFxyXG4gICAgICB4QXhlczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHNjYWxlTGFiZWw6IHsgZGlzcGxheTogISF4TGFiZWwsIGxhYmVsU3RyaW5nOiB4TGFiZWwgfSxcclxuICAgICAgICAgIGdyaWRMaW5lczogeyBkaXNwbGF5OiBncmlkIH0sXHJcbiAgICAgICAgICB0aWNrczogeyBkaXNwbGF5OiBmYWxzZSB9XHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgICAgIDxMaW5lXHJcbiAgICAgICAgICAgIGRhdGE9e3tcclxuICAgICAgICAgICAgICBsYWJlbHM6IHhBeGlzRGF0YSxcclxuICAgICAgICAgICAgICBkYXRhc2V0czogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogY29sb3IsXHJcbiAgICAgICAgICAgICAgICAgIGRhdGE6IHlBeGlzRGF0YSxcclxuICAgICAgICAgICAgICAgICAgZmlsbDogZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIHdpZHRoPXsxMjB9XHJcbiAgICAgICAgICAgIGhlaWdodD17NTB9XHJcbiAgICAgICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XHJcbiAgICAgICAgICAgIGxlZ2VuZD17bGVnZW5kT3B0aW9uc31cclxuICAgICAgICAvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGluZUNoYXJ0XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQm94LCBIZWFkaW5nLCBTcGFjZXIgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xyXG5pbXBvcnQgQmFzZU1lbnUgZnJvbSAnLi4vY29tcG9uZW50cy9CYXNlTWVudSdcclxuaW1wb3J0IFRpbWVmcmFtZU1lbnUgZnJvbSAnLi4vY29tcG9uZW50cy9UaW1lZnJhbWVNZW51J1xyXG5cclxuY29uc3QgTmF2SGVhZGVyID0gKHsgc3ltYm9scywgbG9hZERhdGEgfSkgPT4gKFxyXG4gICAgPEJveFxyXG4gICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcclxuICAgICAgICBmbGV4RGlyZWN0aW9uPVwicm93XCJcclxuICAgICAgICBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIlxyXG4gICAgICAgIHB4PXs2fVxyXG4gICAgICAgIHB5PXs0fVxyXG4gICAgICAgIGJnPVwidGVhbC41MDBcIlxyXG4gICAgPlxyXG4gICAgICAgIDxIZWFkaW5nIGFzPVwiaDFcIiBzaXplPVwibGdcIiBjb2xvcj1cIndoaXRlXCIgbGV0dGVyU3BhY2luZz17Jy0uMXJlbSd9PlxyXG4gICAgICAgICAgUmF0ZXMgSW1wZXJpYWxcclxuICAgICAgICA8L0hlYWRpbmc+XHJcblxyXG4gICAgICAgIDxTcGFjZXIgLz5cclxuXHJcbiAgICAgICAgPEJhc2VNZW51XHJcbiAgICAgICAgICByb3dzPXtzeW1ib2xzfVxyXG4gICAgICAgICAgbG9hZERhdGE9e2xvYWREYXRhfVxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxUaW1lZnJhbWVNZW51XHJcbiAgICAgICAgICBsb2FkRGF0YT17bG9hZERhdGF9XHJcbiAgICAgICAgLz5cclxuXHJcbiAgICA8L0JveD5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2SGVhZGVyXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTWVudSwgTWVudUJ1dHRvbiwgTWVudUl0ZW0sIE1lbnVMaXN0LCBCdXR0b24gfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xyXG5cclxuY29uc3QgVGltZWZyYW1lTWVudSA9ICh7IGxvYWREYXRhIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPE1lbnU+XHJcbiAgICAgIDxNZW51QnV0dG9uIG1sPVwiNnB4XCIgYXM9e0J1dHRvbn0+XHJcbiAgICAgICAgQ2hhbmdlIFRpbWVmcmFtZVxyXG4gICAgICA8L01lbnVCdXR0b24+XHJcbiAgICAgIDxNZW51TGlzdD5cclxuICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9eygpID0+IGxvYWREYXRhKDEpfSBtaW5IPVwiMzJweFwiPlxyXG4gICAgICAgIE9uZSBEYXlcclxuICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9eygpID0+IGxvYWREYXRhKDcpfSBtaW5IPVwiMzJweFwiPlxyXG4gICAgICAgIFNldmVuIERheXNcclxuICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9eygpID0+IGxvYWREYXRhKDMxKX0gbWluSD1cIjMycHhcIj5cclxuICAgICAgICBPbmUgTW9udGhcclxuICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgPC9NZW51TGlzdD5cclxuICAgIDwvTWVudT5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRpbWVmcmFtZU1lbnUiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEJveCB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXHJcbmltcG9ydCBOYXZIZWFkZXIgZnJvbSAnLi4vTmF2SGVhZGVyJ1xyXG5cclxuY29uc3QgRGVmYXVsdExheW91dCA9ICh7IHN5bWJvbHMsIGxvYWREYXRhLCBjaGlsZHJlbiB9KSA9PiAoXHJcbiAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIgbWluSGVpZ2h0PVwiMTAwdmhcIiBoZWlnaHQ9XCIxMDAlXCIgZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxyXG4gICAgICAgIDxOYXZIZWFkZXIgc3ltYm9scz17c3ltYm9sc30gbG9hZERhdGE9e2xvYWREYXRhfSAvPlxyXG4gICAgICAgIDw+e2NoaWxkcmVufTwvPlxyXG4gICAgPC9Cb3g+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERlZmF1bHRMYXlvdXQiLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcblxyXG5leHBvcnQgY29uc3QgREVGQVVMVF9CQVNFID0gJ0VVUidcclxuXHJcbmNvbnN0IGZldGNoTGF0ZXN0RGF0YSA9IGFzeW5jIChiYXNlID0gREVGQVVMVF9CQVNFKSA9PlxyXG4gIChhd2FpdCBheGlvcy5nZXQoYGh0dHBzOi8vYXBpLnJhdGVzYXBpLmlvL2FwaS9sYXRlc3Q/YmFzZT0ke2Jhc2V9YCkpLmRhdGFcclxuXHJcbmNvbnN0IGZldGNoSGlzdG9yaWNEYXRhID0gYXN5bmMgKGRhdGUsIGJhc2UgPSBERUZBVUxUX0JBU0UpID0+XHJcbiAgKGF3YWl0IGF4aW9zLmdldChgaHR0cHM6Ly9hcGkucmF0ZXNhcGkuaW8vYXBpLyR7ZGF0ZX0/YmFzZT0ke2Jhc2V9YCkpLmRhdGFcclxuXHJcbmV4cG9ydCB7XHJcbiAgZmV0Y2hMYXRlc3REYXRhLFxyXG4gIGZldGNoSGlzdG9yaWNEYXRhXHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHsgSGVhZGluZywgTGluaywgVGV4dCwgRmxleCwgQm94IH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCB7IGNhbGN1bGF0b3IsIEZFVENIX0RBVEEgfSBmcm9tICcuL3N0YXRlL2NhbGN1bGF0b3InXG5pbXBvcnQgeyBERUZBVUxUX0JBU0UgfSBmcm9tICcuL2FwaS9hY3Rpb25zJ1xuaW1wb3J0IERlZmF1bHRMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXRzL0RlZmF1bHQnXG5pbXBvcnQgQ3VycmVuY3lTdGFjayBmcm9tICcuLi9jb21wb25lbnRzL0N1cnJlbmN5U3RhY2snXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUgKCkge1xuICBjb25zdCBbYmFzZSwgc2V0QmFzZV0gPSB1c2VTdGF0ZShERUZBVUxUX0JBU0UpIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgY29uc3QgW3RpbWVmcmFtZSwgc2V0VGltZWZyYW1lXSA9IHVzZVN0YXRlKDcpIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgY29uc3QgW3JhdGVEYXRhLCBzZXRSYXRlRGF0YV0gPSB1c2VTdGF0ZShbXSlcbiAgY29uc3QgW3N5bWJvbExpc3QsIHNldFN5bWJvbExpc3RdID0gdXNlU3RhdGUoW10pXG5cbiAgLy8gVGhpcyBmdW5jdGlvbiBhdXRvbWF0aWNhbGx5IGNoYW5nZXMgb3VyIHN0YXRlIGJhc2VkIG9uIHRoZSBpbmNvbWluZyB2YXJpYWJsZVxuICAvLyB0aGVuIHVwZGF0ZXMgdGhlIHdlYnNpdGUgYWNjb3JkaW5nbHlcbiAgYXN5bmMgZnVuY3Rpb24gbG9hZERhdGEgKGNoYW5nZSA9IG51bGwpIHtcbiAgICBsZXQgZGF0YVxuICAgIGlmIChjaGFuZ2UgIT09IG51bGwpIHtcbiAgICAgIGlmICh0eXBlb2YgY2hhbmdlID09PSAnbnVtYmVyJykge1xuICAgICAgICBzZXRUaW1lZnJhbWUoY2hhbmdlKVxuICAgICAgICBkYXRhID0gYXdhaXQgY2FsY3VsYXRvcihGRVRDSF9EQVRBLCBiYXNlLCBjaGFuZ2UpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRCYXNlKGNoYW5nZSlcbiAgICAgICAgZGF0YSA9IGF3YWl0IGNhbGN1bGF0b3IoRkVUQ0hfREFUQSwgY2hhbmdlLCB0aW1lZnJhbWUpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGEgPSBhd2FpdCBjYWxjdWxhdG9yKEZFVENIX0RBVEEsIGJhc2UsIHRpbWVmcmFtZSlcbiAgICB9XG4gICAgLy8gU2V0IHRoZSByYXRlIGRhdGEgYW5kIHN5bWJvbCBsaXN0XG4gICAgc2V0UmF0ZURhdGEoZGF0YSlcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgIGNvbnN0IHN5bWJvbHMgPSBbXVxuICAgIE9iamVjdC5rZXlzKGRhdGEpLm1hcCgoYykgPT5cbiAgICAgIHN5bWJvbHMucHVzaChjKVxuICAgIClcbiAgICBzZXRTeW1ib2xMaXN0KHN5bWJvbHMpXG4gIH1cblxuICAvLyBBdCB0aGUgc3RhcnQsIHdlIHdhbnQgdG8gZGlzcGxheSB0aGUgcmF0ZXMgaW4gdGVybXMgb2YgRVVSXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbG9hZERhdGEoKVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxEZWZhdWx0TGF5b3V0XG4gICAgICBzeW1ib2xzPXtzeW1ib2xMaXN0fVxuICAgICAgbG9hZERhdGE9e2xvYWREYXRhfVxuICAgID5cbiAgICAgIDxCb3ggY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPlJhdGVzIEltcGVyaWFsPC90aXRsZT5cbiAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICAgIDwvSGVhZD5cblxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgICA8SGVhZGluZyBhcz1cImgxXCIgc2l6ZT1cIjJ4bFwiIG1iPVwiMlwiPlxuICAgICAgICAgICAgV2VsY29tZSB0byA8TGluayBjb2xvcj1cInRlYWwuNTAwXCI+UmF0ZXMgSW1wZXJpYWwhPC9MaW5rPlxuICAgICAgICAgIDwvSGVhZGluZz5cblxuICAgICAgICAgIDxUZXh0IGZvbnRTaXplPVwieGxcIiBtdD1cIjJcIj5cbiAgICAgICAgICAgIFNlZSB0aGUgZXhjaGFuZ2UgcmF0ZXMgZm9yIG1vc3QgY3VycmVuY2llcyBoZXJlIVxuICAgICAgICAgIDwvVGV4dD5cblxuICAgICAgICAgIDxGbGV4IGZsZXhXcmFwPVwid3JhcFwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIG1heFc9XCI4MDBweFwiIG10PVwiMTBcIj5cbiAgICAgICAgICAgIDxDdXJyZW5jeVN0YWNrXG4gICAgICAgICAgICAgIHJvd3M9e3JhdGVEYXRhfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgIDwvbWFpbj5cblxuICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3ZlcmNlbC5jb20/dXRtX3NvdXJjZT1jcmVhdGUtbmV4dC1hcHAmdXRtX21lZGl1bT1kZWZhdWx0LXRlbXBsYXRlJnV0bV9jYW1wYWlnbj1jcmVhdGUtbmV4dC1hcHBcIlxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIFBvd2VyZWQgYnl7JyAnfVxuICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgIHNyYz1cIi92ZXJjZWwuc3ZnXCIgLy8gUm91dGUgb2YgdGhlIGltYWdlIGZpbGVcbiAgICAgICAgICAgICAgaGVpZ2h0PXs3MH0gLy8gRGVzaXJlZCBzaXplIHdpdGggY29ycmVjdCBhc3BlY3QgcmF0aW9cbiAgICAgICAgICAgICAgd2lkdGg9ezcwfSAvLyBEZXNpcmVkIHNpemUgd2l0aCBjb3JyZWN0IGFzcGVjdCByYXRpb1xuICAgICAgICAgICAgICBhbHQ9XCJWZXJjZWwgTG9nb1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9mb290ZXI+XG4gICAgICA8L0JveD5cbiAgICA8L0RlZmF1bHRMYXlvdXQ+XG4gIClcbn1cbiIsImltcG9ydCB7IGZldGNoSGlzdG9yaWNEYXRhIH0gZnJvbSAnLi4vYXBpL2FjdGlvbnMuanMnXHJcblxyXG4vLyBTdGF0ZSBpcyByZXByZXNlbnRlZCBieSBhIGxpc3Qgb2Yga2V5LW9iamVjdHNcclxuLy8ga2V5OiBTWU1CT0xcclxuLy8gb2JqZWN0OiB7XHJcbi8vICAgUFJJQ0U6IGZsb2F0XHJcbi8vICAgSU5ESUNBVE9SOiBpbnRcclxuLy8gICBDSEFOR0U6IGZsb2F0XHJcbi8vICAgR1JBUEg6IEFycmF5IG9mIHgtYXhpcyBhbmQgeS1heGlzXHJcbi8vIH1cclxuXHJcbi8vID09PT09PSBIRUxQRVIgRlVOQ1RJT05TIEZPUiBGRVRDSCBEQVRBID09PT09PVxyXG5cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWV4dGVuZC1uYXRpdmVcclxuRGF0ZS5wcm90b3R5cGUucHJldkRheXMgPSBmdW5jdGlvbiAoZGF5cykge1xyXG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh0aGlzLnZhbHVlT2YoKSlcclxuICAvLyBSZXR1cm4gdGhlIGN1cnJlbnQgZGF0ZSBtaW51cyBkYXlzXHJcbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpIC0gZGF5cylcclxuICByZXR1cm4gZGF0ZVxyXG59XHJcblxyXG4vLyBSZXR1cm5zIHRoZSBhcnJheSBvZiBkYXRlcyB3ZSBhcmUgbG9va2luZyB0aHJvdWdoXHJcbmZ1bmN0aW9uIGdldERhdGVzIChzdGFydERhdGUsIHN0b3BEYXRlKSB7XHJcbiAgY29uc3QgZGF0ZUFycmF5ID0gW11cclxuICBsZXQgY3VycmVudERhdGUgPSBzdGFydERhdGVcclxuICB3aGlsZSAoY3VycmVudERhdGUgPj0gc3RvcERhdGUpIHtcclxuICAgIC8vIENvbnZlcnRzIGRhdGUgc3RyaW5nIGludG8gWVlZWS1NTS1ERCBmb3JtYXRcclxuICAgIGxldCBkYXRlID0gY3VycmVudERhdGUudG9VVENTdHJpbmcoKS5zcGxpdCgnLCAnKVsxXVxyXG4gICAgZGF0ZSA9IG5ldyBEYXRlKGRhdGUpLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXVxyXG4gICAgZGF0ZUFycmF5LnB1c2goZGF0ZSlcclxuICAgIGN1cnJlbnREYXRlID0gY3VycmVudERhdGUucHJldkRheXMoMSlcclxuICB9XHJcbiAgcmV0dXJuIGRhdGVBcnJheVxyXG59XHJcblxyXG4vLyBUaGlzIGZ1bmN0aW9uIGFkZHMgbmV3IGVudHJpZXMgdG8gdGhlIHN0YXRlIG1hcCBmb2xsb3dpbmcgdGhlIHNhbXBsZSBzdGF0ZVxyXG5mdW5jdGlvbiBhZGRUb1N0YXRlIChhcnJheSwga2V5LCB2YWx1ZSwgZGF0ZSkge1xyXG4gIGFycmF5W2tleV0gPSB7XHJcbiAgICBwcmljZTogdmFsdWUudG9QcmVjaXNpb24oNiksXHJcbiAgICBpbmRpY2F0b3I6IG51bGwsXHJcbiAgICBjaGFuZ2U6IG51bGwsXHJcbiAgICBncmFwaDogW1xyXG4gICAgICBbZGF0ZV0sXHJcbiAgICAgIFt2YWx1ZV1cclxuICAgIF1cclxuICB9XHJcbn1cclxuXHJcbi8vIFRoaXMgZnVuY3Rpb24gYWRkcyB2YWx1ZXMgdG8gdGhlIGdyYXBoIGFycmF5IGluIHRoZSBjdXJyZW50IHN0YXRlIG1hcFxyXG5mdW5jdGlvbiBhZGRUb0dyYXBoIChhcnJheSwga2V5LCB2YWx1ZSwgZGF0ZSkge1xyXG4gIGFycmF5W2tleV0uZ3JhcGhbMF0udW5zaGlmdChkYXRlKVxyXG4gIGFycmF5W2tleV0uZ3JhcGhbMV0udW5zaGlmdCh2YWx1ZSlcclxufVxyXG5cclxuLy8gVGhpcyBmdW5jdGlvbiBjYWxjdWxhdGVzIHRoZSBjaGFuZ2UgaW4gcGVyY2VudGFnZSBmcm9tIHRoZSBmaXJzdCBkYXkgb2YgdHJhY2tpbmcgdG8gdGhlIGxhc3RcclxuZnVuY3Rpb24gY2FsY3VsYXRlQ2hhbmdlIChhcnJheSwga2V5KSB7XHJcbiAgLy8gT2J0YWluIHRoZSBjdXJyZW50IHZhbHVlIGFuZCB0aGUgbGF0ZXN0IHJlY29yZGVkIHZhbHVlXHJcbiAgY29uc3QgY3VyVmFsID0gYXJyYXlba2V5XS5ncmFwaFsxXVthcnJheVtrZXldLmdyYXBoWzFdLmxlbmd0aCAtIDFdXHJcbiAgY29uc3QgcHJldlZhbCA9IGFycmF5W2tleV0uZ3JhcGhbMV1bMF1cclxuICAvLyBDYWxjdWxhdGUgcGVyY2VudGFnZSBjaGFuZ2UgYW5kIHNldCBhcnJheSB2YWx1ZXNcclxuICBpZiAoY3VyVmFsID4gcHJldlZhbCkge1xyXG4gICAgYXJyYXlba2V5XS5pbmRpY2F0b3IgPSAxXHJcbiAgICBhcnJheVtrZXldLmNoYW5nZSA9ICcrJyArICgxMDAgKiAoY3VyVmFsIC0gcHJldlZhbCkgLyBwcmV2VmFsKS50b0ZpeGVkKDIpICsgJyUnXHJcbiAgfSBlbHNlIGlmIChjdXJWYWwgPT09IHByZXZWYWwpIHtcclxuICAgIGFycmF5W2tleV0uaW5kaWNhdG9yID0gMFxyXG4gICAgYXJyYXlba2V5XS5jaGFuZ2UgPSAoMCkudG9GaXhlZCgyKSArICclJ1xyXG4gIH0gZWxzZSB7XHJcbiAgICBhcnJheVtrZXldLmluZGljYXRvciA9IC0xXHJcbiAgICBhcnJheVtrZXldLmNoYW5nZSA9ICgxMDAgKiAoY3VyVmFsIC0gcHJldlZhbCkgLyBwcmV2VmFsKS50b0ZpeGVkKDIpICsgJyUnXHJcbiAgfVxyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8vIENhbGxzIEFQSSB0byBmZXRjaCBhbmQgY2FjaGUgdGhlIHJlcXVpcmVkIGRhdGFcclxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hEYXRhIChiYXNlLCB0aW1lZnJhbWUpIHtcclxuICAvLyBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hMYXRlc3REYXRhKClcclxuICAvLyBjb25zdCBjYWNoZUlkID0gZGF0YS5iYXNlICsgZGF0YS5kYXRlXHJcbiAgLy8gT2J0YWluIHRoZSBkYXRlcyBvZiB0aGUgcHJldmlvdXMgNyBkYXlzIGluIHl5LW1tLWRkIGZvcm1hdFxyXG4gIGNvbnN0IGRhdGVBcnJheSA9IGdldERhdGVzKG5ldyBEYXRlKCksIChuZXcgRGF0ZSgpKS5wcmV2RGF5cyh0aW1lZnJhbWUpKVxyXG4gIC8vIEZvciBlYWNoIHZhbHVlIGluIHRoZSBkYXRhIGFycmF5LCBzZW5kIGFuIEhUVFAgcmVxdWVzdFxyXG4gIGF3YWl0IFByb21pc2UuYWxsKGRhdGVBcnJheS5tYXAoYXN5bmMgKGRhdGUpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIC8vIENoZWNrIHRvIHNlZSBpZiB0aGUgZGF0YSB3ZSByZXF1aXJlIGhhcyBhbHJlYWR5IGJlZW4gY2FjaGVkXHJcbiAgICAgIGxldCBwYXN0RGF0YVxyXG4gICAgICBpZiAod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGJhc2UgKyBkYXRlKSA9PT0gbnVsbCkge1xyXG4gICAgICAgIC8vIE90aGVyd2lzZSwgc2ltcGx5IGZldGNoIHRoZSBkYXRhIGZyb20gcmF0ZXNhcGkuaW9cclxuICAgICAgICBwYXN0RGF0YSA9IGF3YWl0IGZldGNoSGlzdG9yaWNEYXRhKGRhdGUsIGJhc2UpXHJcbiAgICAgICAgLy8gQ2FjaGUgdGhlIGZldGNoZWQgZGF0YVxyXG4gICAgICAgIGNvbnN0IGNhY2hlSWQgPSBwYXN0RGF0YS5iYXNlICsgZGF0ZVxyXG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShjYWNoZUlkLCBKU09OLnN0cmluZ2lmeShwYXN0RGF0YS5yYXRlcykpXHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicgKyBlcnJvcilcclxuICAgIH1cclxuICB9KSlcclxuICAvLyBSZXR1cm4gdGhlIGFycmF5IG9mIGRhdGVzIHVzZWRcclxuICByZXR1cm4gZGF0ZUFycmF5XHJcbn1cclxuXHJcbi8vIEZ1bmN0aW9uIHRvIGdlbmVyYXRlIHRoZSBpbmRleCBzdGF0ZSBiYXNlZCBvbiB0aGUgZGF0ZXMgZ2l2ZW5cclxuZnVuY3Rpb24gZ2VuU3RhdGUgKGRhdGVBcnJheSwgYmFzZSkge1xyXG4gIC8vIEluaXRpYWxpc2UgdGhlIHN0YXRlIGFycmF5XHJcbiAgY29uc3QgcmF0ZURhdGEgPSB7fVxyXG4gIC8vIExvb3AgdGhyb3VnaCB0aGUgZGF0ZXMgaW4gdGhlIGRhdGUgYXJyYXlcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGVBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgLy8gUmV0cmlldmUgdGhlIHJhdGVzIGZvciBlYWNoIGRhdGUgdXNpbmcgY3VycmVudCBiYXNlXHJcbiAgICBjb25zdCBkYXRlID0gZGF0ZUFycmF5W2ldXHJcbiAgICBsZXQgcmF0ZXMgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oYmFzZSArIGRhdGUpXHJcblxyXG4gICAgLy8gR2VuZXJhdGUgc3RhdGUgdXNpbmcgZGF5IDEgcmF0ZXNcclxuICAgIGlmIChpID09PSAwKSB7XHJcbiAgICAgIHJhdGVEYXRhW2Jhc2VdID0ge1xyXG4gICAgICAgIHByaWNlOiAxLFxyXG4gICAgICAgIGluZGljYXRvcjogbnVsbCxcclxuICAgICAgICBjaGFuZ2U6IG51bGwsXHJcbiAgICAgICAgZ3JhcGg6IG51bGxcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIExvb3AgdGhyb3VnaCBlYWNoIHJhdGVcclxuICAgIHJhdGVzID0gSlNPTi5wYXJzZShyYXRlcylcclxuICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHJhdGVzKSkge1xyXG4gICAgICBpZiAoa2V5ICE9PSBiYXNlKSB7XHJcbiAgICAgICAgaWYgKGkgPT09IDApIHtcclxuICAgICAgICAgIC8vIEdlbmVyYXRlIHN0YXRlIHVzaW5nIGRheSAxIHJhdGVzXHJcbiAgICAgICAgICBhZGRUb1N0YXRlKHJhdGVEYXRhLCBrZXksIHJhdGVzW2tleV0sIGRhdGUpXHJcbiAgICAgICAgfSBlbHNlIGlmIChpIDwgZGF0ZUFycmF5Lmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgIC8vIEFkZCB0aGUgcmF0ZSBkYXRhIHRvIHRoZSBncmFwaHNcclxuICAgICAgICAgIGFkZFRvR3JhcGgocmF0ZURhdGEsIGtleSwgcmF0ZXNba2V5XSwgZGF0ZSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy8gTGFzdGx5LCBhZGQgdGhlIHJhdGUgZGF0YSB0byB0aGUgZ3JhcGhzIHRoZW4gY2FsY3VsYXRlIHRoZSBmaW5hbFxyXG4gICAgICAgICAgLy8gaW5kaWNhdG9yIGFuZCBjaGFuZ2UgdmFsdWVzXHJcbiAgICAgICAgICBhZGRUb0dyYXBoKHJhdGVEYXRhLCBrZXksIHJhdGVzW2tleV0sIGRhdGUpXHJcbiAgICAgICAgICBjYWxjdWxhdGVDaGFuZ2UocmF0ZURhdGEsIGtleSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHJhdGVEYXRhXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBGRVRDSF9EQVRBID0gJ0ZFVENIX0RBVEEnXHJcblxyXG4vLyBJbXBsZW1lbnRlZCBhcyBpZiBpdCBjYW4gYmUgZXh0ZW5kZWQgaW4gdGhlIGZ1dHVyZVxyXG5leHBvcnQgY29uc3QgY2FsY3VsYXRvciA9IGFzeW5jIChhY3Rpb24sIGJhc2UsIHRpbWVmcmFtZSkgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uKSB7XHJcbiAgICBjYXNlIEZFVENIX0RBVEE6IHtcclxuICAgICAgY29uc3QgZEEgPSBhd2FpdCBmZXRjaERhdGEoYmFzZSwgdGltZWZyYW1lKVxyXG4gICAgICBjb25zdCByRCA9IGdlblN0YXRlKGRBLCBiYXNlKVxyXG4gICAgICByZXR1cm4gckRcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiSG9tZV9jb250YWluZXJfX3NEZXhPXCIsXG5cdFwibWFpblwiOiBcIkhvbWVfbWFpbl9fMWdUTXRcIixcblx0XCJmb290ZXJcIjogXCJIb21lX2Zvb3Rlcl9fMzRVTGNcIixcblx0XCJ0aXRsZVwiOiBcIkhvbWVfdGl0bGVfXzM4WE82XCIsXG5cdFwiZGVzY3JpcHRpb25cIjogXCJIb21lX2Rlc2NyaXB0aW9uX19wMlZYOVwiLFxuXHRcImNvZGVcIjogXCJIb21lX2NvZGVfXzdsdDdFXCIsXG5cdFwiZ3JpZFwiOiBcIkhvbWVfZ3JpZF9fMkNsejVcIixcblx0XCJjYXJkXCI6IFwiSG9tZV9jYXJkX18ya2dMTVwiLFxuXHRcImxvZ29cIjogXCJIb21lX2xvZ29fX3F4WkpTXCJcbn07XG4iLCJpbXBvcnQgeyBjcmVhdGVCcmVha3BvaW50cyB9IGZyb20gJ0BjaGFrcmEtdWkvdGhlbWUtdG9vbHMnXHJcblxyXG5leHBvcnQgY29uc3QgdGhlbWUgPSB7XHJcbiAgY29sb3JzOiB7XHJcbiAgICBjdXJySW5jcmVhc2U6ICcjMzJDRDMyJyxcclxuICAgIGN1cnJOb0NoYW5nZTogJyM4ODg4ODgnLFxyXG4gICAgY3VyckRlY3JlYXNlOiAnI2IwMDcyNidcclxuICB9XHJcbn1cclxuXHJcbi8vIFVwZGF0ZSB0aGUgYnJlYWtwb2ludHMgYXMga2V5LXZhbHVlIHBhaXJzXHJcbmV4cG9ydCBjb25zdCBicmVha3BvaW50cyA9IGNyZWF0ZUJyZWFrcG9pbnRzKHtcclxuICBzbTogJzMyMHB4JyxcclxuICBtZDogJzc2OHB4JyxcclxuICBsZzogJzEwMjRweCcsXHJcbiAgeGw6ICcxMjAwcHgnXHJcbn0pXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBjaGFrcmEtdWkvcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGNoYWtyYS11aS90aGVtZS10b29sc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtY2hhcnRqcy0yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9