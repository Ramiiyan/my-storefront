module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		12: 0
/******/ 	};
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
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"0":"lang-de","1":"lang-en","2":"pages/Category","3":"pages/Checkout","4":"pages/Checkout/OrderReview","5":"pages/Checkout/Payment","6":"pages/Checkout/PersonalDetails","7":"pages/Checkout/Shipping","8":"pages/Checkout/ThankYou","9":"pages/Home","10":"pages/MyAccount","11":"pages/Product","13":"pages/MyAccount/BillingDetails","14":"pages/MyAccount/LoyaltyCard","15":"pages/MyAccount/MyNewsletter","16":"pages/MyAccount/MyProfile","17":"pages/MyAccount/MyReviews","18":"pages/MyAccount/OrderHistory","19":"pages/MyAccount/ShippingDetails"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
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
/******/ 	__webpack_require__.p = "/_nuxt/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 102);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("@vue/composition-api");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return vueI18n; });
/* unused harmony export vueI18nLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return locales; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return defaultLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return routesNameSeparator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return defaultLocaleRouteNameSuffix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return strategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return lazy; });
/* unused harmony export langDir */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return rootRedirect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return detectBrowserLanguage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return differentDomains; });
/* unused harmony export seo */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return baseUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return vuex; });
/* unused harmony export parsePages */
/* unused harmony export pages */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return beforeLanguageSwitch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return onLanguageSwitched; });
/* unused harmony export currency */
/* unused harmony export country */
/* unused harmony export countries */
/* unused harmony export currencies */
/* unused harmony export IS_UNIVERSAL_MODE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return MODULE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LOCALE_CODE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return LOCALE_ISO_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LOCALE_DOMAIN_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LOCALE_FILE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return STRATEGIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return COMPONENT_OPTIONS_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return localeCodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return trailingSlash; });
const vueI18n = {
  "fallbackLocale": "en"
};
const vueI18nLoader = false;
const locales = [{
  "code": "en",
  "label": "English",
  "file": "en.js",
  "iso": "en"
}, {
  "code": "de",
  "label": "German",
  "file": "de.js",
  "iso": "de"
}];
const defaultLocale = 'en';
const routesNameSeparator = '___';
const defaultLocaleRouteNameSuffix = 'default';
const strategy = 'prefix_except_default';
const lazy = true;
const langDir = 'lang/';
const rootRedirect = null;
const detectBrowserLanguage = {
  "useCookie": true,
  "cookieCrossOrigin": false,
  "cookieDomain": null,
  "cookieKey": "vsf-locale",
  "cookieSecure": false,
  "alwaysRedirect": false,
  "fallbackLocale": "",
  "onlyOnNoPrefix": false,
  "onlyOnRoot": false
};
const differentDomains = false;
const seo = true;
const baseUrl = '';
const vuex = {
  "moduleName": "i18n",
  "syncLocale": false,
  "syncMessages": false,
  "syncRouteParams": true
};
const parsePages = true;
const pages = {};
const beforeLanguageSwitch = () => null;
const onLanguageSwitched = () => null;
const currency = 'USD';
const country = 'US';
const countries = [{
  "name": "US",
  "label": "United States"
}, {
  "name": "AT",
  "label": "Austria"
}, {
  "name": "DE",
  "label": "Germany"
}, {
  "name": "NL",
  "label": "Netherlands"
}];
const currencies = [{
  "name": "EUR",
  "label": "Euro"
}, {
  "name": "USD",
  "label": "Dollar"
}];
const IS_UNIVERSAL_MODE = true;
const MODULE_NAME = 'nuxt-i18n';
const LOCALE_CODE_KEY = 'code';
const LOCALE_ISO_KEY = 'iso';
const LOCALE_DOMAIN_KEY = 'domain';
const LOCALE_FILE_KEY = 'file';
const STRATEGIES = {
  "PREFIX": "prefix",
  "PREFIX_EXCEPT_DEFAULT": "prefix_except_default",
  "PREFIX_AND_DEFAULT": "prefix_and_default",
  "NO_PREFIX": "no_prefix"
};
const COMPONENT_OPTIONS_KEY = 'nuxtI18n';
const localeCodes = ["en", "de"];
const trailingSlash = undefined;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopDefault(ex) {
  return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
}

var ApolloClient = _interopDefault(__webpack_require__(104));

var apolloCacheInmemory = __webpack_require__(105);

var apolloLinkHttp = __webpack_require__(106);

var apolloLinkContext = __webpack_require__(107);

var apolloLink = __webpack_require__(108);

var fetch = _interopDefault(__webpack_require__(109));

var SdkAuth = __webpack_require__(110);

var SdkAuth__default = _interopDefault(SdkAuth);

var apolloLinkError = __webpack_require__(111);

var gql = _interopDefault(__webpack_require__(112));

var core = __webpack_require__(7);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */


var __assign = function () {
  __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
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
      result.done ? resolve(result.value) : new P(function (resolve) {
        resolve(result.value);
      }).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;

        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;

        case 7:
          op = _.ops.pop();

          _.trys.pop();

          continue;

        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }

          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }

          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }

          if (t && _.label < t[2]) {
            _.label = t[2];

            _.ops.push(op);

            break;
          }

          if (t[2]) _.ops.pop();

          _.trys.pop();

          continue;
      }

      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
}

var isTokenActive = function (sdkAuth, token) {
  return __awaiter(void 0, void 0, void 0, function () {
    var tokenIntrospection;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4
          /*yield*/
          , sdkAuth.introspectToken(token.access_token)];

        case 1:
          tokenIntrospection = _a.sent();
          return [2
          /*return*/
          , tokenIntrospection.active];
      }
    });
  });
};

var isTokenUserSession = function (token) {
  var handleIsTokenUserSession = getSettings().handleIsTokenUserSession;

  if (handleIsTokenUserSession) {
    return handleIsTokenUserSession(token);
  }

  return token && (token.scope.includes('customer_id') || token.scope.includes('anonymous_id'));
};

var createAuthClient = function (config) {
  return new SdkAuth__default({
    host: config.authHost,
    projectKey: config.projectKey,
    disableRefreshToken: false,
    credentials: {
      clientId: config.clientId,
      clientSecret: config.clientSecret
    },
    scopes: config.scopes
  });
};

var getCurrentToken = function (options) {
  if (options === void 0) {
    options = {};
  }

  var currentToken = getSettings().currentToken;

  if (currentToken) {
    return currentToken;
  }

  return options.currentToken;
};

var getTokenFlow = function (sdkAuth, options) {
  if (options === void 0) {
    options = {};
  }

  return __awaiter(void 0, void 0, void 0, function () {
    var currentToken, tokenActive;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          currentToken = getCurrentToken(options);

          if (options.customerCredentials) {
            return [2
            /*return*/
            , sdkAuth.customerPasswordFlow(options.customerCredentials)];
          }

          if (options.requireUserSession && !isTokenUserSession(currentToken)) {
            return [2
            /*return*/
            , sdkAuth.anonymousFlow()];
          }

          if (!currentToken) return [3
          /*break*/
          , 2];
          return [4
          /*yield*/
          , isTokenActive(sdkAuth, currentToken)];

        case 1:
          tokenActive = _a.sent();

          if (tokenActive) {
            return [2
            /*return*/
            , Promise.resolve(currentToken)];
          }

          _a.label = 2;

        case 2:
          if (options.requireUserSession) {
            return [2
            /*return*/
            , sdkAuth.anonymousFlow()];
          }

          return [2
          /*return*/
          , sdkAuth.clientCredentialsFlow()];
      }
    });
  });
};

var createAccessToken = function (options) {
  if (options === void 0) {
    options = {};
  }

  return __awaiter(void 0, void 0, void 0, function () {
    var api, sdkAuth, tokenInfo, tokenProvider;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          api = getSettings().api;
          sdkAuth = createAuthClient(api);
          return [4
          /*yield*/
          , getTokenFlow(sdkAuth, options)];

        case 1:
          tokenInfo = _a.sent();
          tokenProvider = new SdkAuth.TokenProvider({
            sdkAuth: sdkAuth
          }, tokenInfo);
          return [2
          /*return*/
          , tokenProvider.getTokenInfo()];
      }
    });
  });
};

var restrictedOperations = ['getMe', 'createCart'];

var createCommerceToolsLink = function () {
  var _a = getSettings(),
      api = _a.api,
      currentToken = _a.currentToken,
      auth = _a.auth;

  var httpLink = apolloLinkHttp.createHttpLink({
    uri: api.uri,
    fetch: fetch
  });
  var authLink = apolloLinkContext.setContext(function (req, _a) {
    var headers = _a.headers;
    return __awaiter(void 0, void 0, void 0, function () {
      var token;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            return [4
            /*yield*/
            , createAccessToken({
              currentToken: currentToken,
              requireUserSession: restrictedOperations.includes(req.operationName)
            })];

          case 1:
            token = _b.sent();
            auth.onTokenChange(token);
            return [2
            /*return*/
            , {
              headers: __assign(__assign({}, headers), {
                authorization: "Bearer " + token.access_token
              })
            }];
        }
      });
    });
  });
  var onErrorLink = apolloLinkError.onError(function (_a) {
    var graphQLErrors = _a.graphQLErrors,
        networkError = _a.networkError;

    if (graphQLErrors) {
      graphQLErrors.map(function (_a) {
        var message = _a.message,
            locations = _a.locations,
            path = _a.path;
        var parsedLocations = locations.map(function (_a) {
          var column = _a.column,
              line = _a.line;
          return "[column: " + column + ", line: " + line + "]";
        });

        if (!message.includes('Resource Owner Password Credentials Grant')) {
          console.error("[GraphQL error]: Message: " + message + ", Location: " + parsedLocations.join(', ') + ", Path: " + path);
        }
      });
    }

    if (networkError) {
      console.error("[Network error]: " + networkError);
    }
  });
  return apolloLink.ApolloLink.from([onErrorLink, authLink, httpLink]);
};

var ProductPriceFragment = "\n  fragment DefaultProductPrice on ProductPrice {\n    discounted {\n      value {\n        type\n        currencyCode\n        centAmount\n        fractionDigits\n      }\n      discount {\n        validFrom\n        validUntil\n        isActive\n        name(acceptLanguage: $acceptLanguage)\n      }\n    }\n    value {\n      type\n      currencyCode\n      centAmount\n      fractionDigits\n    }\n  }\n";
var AddressFragment = "\n  fragment DefaultAddress on Address {\n    id\n    title\n    firstName\n    lastName\n    streetName\n    streetNumber\n    postalCode\n    city\n    country\n    state\n    region\n    company\n    apartment\n    phone\n    mobile\n  }\n"; // TODO: Remove all address information and update PRO packages to use customQueries when this is implemented: https://github.com/DivanteLtd/vue-storefront/issues/5049

var CustomerFragment = "\n  " + AddressFragment + "\n\n  fragment DefaultCustomer on Customer {\n    version\n    firstName\n    lastName\n    email\n    addresses {\n      id\n    }\n    shippingAddresses {\n      ...DefaultAddress\n    }\n    billingAddresses {\n      ...DefaultAddress\n    }\n    defaultBillingAddressId\n    defaultShippingAddressId\n  }\n";
var LineItemFragment = "\n  " + ProductPriceFragment + "\n\n  fragment DefaultLineItem on LineItem {\n    id\n    productId\n    name(acceptLanguage: $acceptLanguage)\n    productSlug(acceptLanguage: $acceptLanguage)\n    quantity\n    discountedPricePerQuantity {\n      quantity\n      discountedPrice {\n        value {\n          centAmount\n        }\n        includedDiscounts {\n          discount {\n            name(acceptLanguage: $acceptLanguage)\n            isActive\n          }\n        }\n      }\n    }\n    variant {\n      id\n      sku\n      price(currency: \"USD\") {\n        tiers {\n          value {\n            centAmount\n          }\n        }\n        value {\n          centAmount\n        }\n        discounted {\n          value {\n            centAmount\n          }\n          discount {\n            isActive\n            name(acceptLanguage: $acceptLanguage)\n          }\n        }\n      }\n      images {\n        url\n        label\n      }\n      attributeList {\n        name\n        ... on BooleanAttribute {\n          booleanValue: value\n        }\n        ... on DateAttribute {\n          dateValue: value\n        }\n        ... on DateTimeAttribute {\n          dateTimeValue: value\n        }\n        ... on StringAttribute {\n          stringValue: value\n        }\n        ... on TimeAttribute {\n          timeValue: value\n        }\n        ... on NumberAttribute {\n          numberValue: value\n        }\n        ... on EnumAttribute {\n          key\n          label\n        }\n        ... on LocalizedEnumAttribute {\n          key\n          localizedLabel: label(locale: $locale)\n        }\n        ... on LocalizedStringAttribute {\n          localizedString: value(locale: $locale)\n        }\n        ... on MoneyAttribute {\n          centAmount\n          currencyCode\n        }\n        ... on ReferenceAttribute {\n          typeId\n          id\n        }\n      }\n    }\n    price {\n      ...DefaultProductPrice\n    }\n  }\n";
var ShippingMethodFragment = "\n  fragment DefaultShippingMethod on ShippingMethod {\n    id\n    version\n    name\n    description\n    isDefault\n    localizedDescription(acceptLanguage: $acceptLanguage)\n    zoneRates {\n      zone {\n        id\n        name\n      }\n      shippingRates {\n        freeAbove {\n          type\n          centAmount\n        }\n        isMatching\n        price {\n          centAmount\n        }\n      }\n    }\n  }\n";
var CartFragment = "\n  " + AddressFragment + "\n  " + CustomerFragment + "\n  " + LineItemFragment + "\n  " + ShippingMethodFragment + "\n\n  fragment DefaultCart on Cart {\n    id\n    customerId\n    customerEmail\n    lineItems {\n      ...DefaultLineItem\n    }\n    totalPrice {\n      centAmount\n    }\n    shippingAddress {\n      ...DefaultAddress\n    }\n    billingAddress {\n      ...DefaultAddress\n    }\n    customer {\n      ...DefaultCustomer\n    }\n    totalPrice {\n      centAmount\n    }\n    taxedPrice {\n      totalNet {\n        centAmount\n      }\n      totalGross {\n        centAmount\n      }\n    }\n    paymentInfo {\n      payments {\n        id\n      }\n    }\n    shippingInfo {\n      price {\n        centAmount\n      }\n      shippingMethod {\n        ...DefaultShippingMethod\n      }\n    }\n    discountCodes {\n      discountCode {\n        id\n        code\n        isActive\n        validFrom\n        validUntil\n        name(acceptLanguage: $acceptLanguage)\n      }\n    }\n    refusedGifts {\n      isActive\n      validFrom\n      validUntil\n      name(acceptLanguage: $acceptLanguage)\n    }\n    cartState\n    version\n  }\n";
var OrderFragment = "\n  " + AddressFragment + "\n  " + LineItemFragment + "\n\n  fragment DefaultOrder on Order {\n    lineItems {\n      ...DefaultLineItem\n    }\n    totalPrice {\n      centAmount\n    }\n    orderState\n    id\n    orderNumber\n    version\n    createdAt\n    customerEmail\n    shipmentState\n    paymentState\n    shippingAddress {\n      ...DefaultAddress\n    }\n    billingAddress {\n      ...DefaultAddress\n    }\n    cart {\n      id\n      version\n    }\n  }\n";
var defaultQuery = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n\n  fragment Images on ProductVariant {\n    images {\n      url\n      label\n    }\n  }\n\n  fragment Price on ProductVariant {\n    price(currency: $currency, country: $country) {\n      ...DefaultProductPrice\n    }\n  }\n\n  fragment Attributes on ProductVariant {\n    attributeList {\n      name\n      ... on BooleanAttribute {\n        booleanValue: value\n      }\n      ... on DateAttribute {\n        dateValue: value\n      }\n      ... on DateTimeAttribute {\n        dateTimeValue: value\n      }\n      ... on StringAttribute {\n        stringValue: value\n      }\n      ... on TimeAttribute {\n        timeValue: value\n      }\n      ... on NumberAttribute {\n        numberValue: value\n      }\n      ... on EnumAttribute {\n        key\n        label\n      }\n      ... on LocalizedEnumAttribute {\n        key\n        localizedLabel: label(locale: $locale)\n      }\n      ... on LocalizedStringAttribute {\n        localizedString: value(locale: $locale)\n      }\n      ... on MoneyAttribute {\n        centAmount\n        currencyCode\n      }\n      ... on ReferenceAttribute {\n        typeId\n        id\n      }\n    }\n  }\n\n  fragment DefaultVariant on ProductVariant {\n    id\n    sku\n    ...Images\n    ...Price\n    ...Attributes\n  }\n\n  query products(\n    $where: String\n    $sort: [String!]\n    $limit: Int\n    $offset: Int\n    $skus: [String!]\n    $locale: Locale!\n    $acceptLanguage: [Locale!]\n    $currency: Currency!\n    $country: Country!\n  ) {\n    products(\n      where: $where\n      sort: $sort\n      limit: $limit\n      offset: $offset\n      skus: $skus\n    ) {\n      offset\n      count\n      total\n      results {\n        id\n        reviewRatingStatistics {\t\n          averageRating,\n          ratingsDistribution,\n          count\n        }\n        masterData {\n          current {\n            slug(acceptLanguage: $acceptLanguage)\n            name(acceptLanguage: $acceptLanguage)\n            metaTitle(acceptLanguage: $acceptLanguage)\n            metaKeywords(acceptLanguage: $acceptLanguage)\n            metaDescription(acceptLanguage: $acceptLanguage)\n            description(acceptLanguage: $acceptLanguage)\n            categoriesRef {\n              id\n            }\n            allVariants {\n              ...DefaultVariant\n            }\n            masterVariant {\n              ...DefaultVariant\n            }\n          }\n        }\n      }\n    }\n  }\n"], ["\n  ", "\n\n  fragment Images on ProductVariant {\n    images {\n      url\n      label\n    }\n  }\n\n  fragment Price on ProductVariant {\n    price(currency: $currency, country: $country) {\n      ...DefaultProductPrice\n    }\n  }\n\n  fragment Attributes on ProductVariant {\n    attributeList {\n      name\n      ... on BooleanAttribute {\n        booleanValue: value\n      }\n      ... on DateAttribute {\n        dateValue: value\n      }\n      ... on DateTimeAttribute {\n        dateTimeValue: value\n      }\n      ... on StringAttribute {\n        stringValue: value\n      }\n      ... on TimeAttribute {\n        timeValue: value\n      }\n      ... on NumberAttribute {\n        numberValue: value\n      }\n      ... on EnumAttribute {\n        key\n        label\n      }\n      ... on LocalizedEnumAttribute {\n        key\n        localizedLabel: label(locale: $locale)\n      }\n      ... on LocalizedStringAttribute {\n        localizedString: value(locale: $locale)\n      }\n      ... on MoneyAttribute {\n        centAmount\n        currencyCode\n      }\n      ... on ReferenceAttribute {\n        typeId\n        id\n      }\n    }\n  }\n\n  fragment DefaultVariant on ProductVariant {\n    id\n    sku\n    ...Images\n    ...Price\n    ...Attributes\n  }\n\n  query products(\n    $where: String\n    $sort: [String!]\n    $limit: Int\n    $offset: Int\n    $skus: [String!]\n    $locale: Locale!\n    $acceptLanguage: [Locale!]\n    $currency: Currency!\n    $country: Country!\n  ) {\n    products(\n      where: $where\n      sort: $sort\n      limit: $limit\n      offset: $offset\n      skus: $skus\n    ) {\n      offset\n      count\n      total\n      results {\n        id\n        reviewRatingStatistics {\t\n          averageRating,\n          ratingsDistribution,\n          count\n        }\n        masterData {\n          current {\n            slug(acceptLanguage: $acceptLanguage)\n            name(acceptLanguage: $acceptLanguage)\n            metaTitle(acceptLanguage: $acceptLanguage)\n            metaKeywords(acceptLanguage: $acceptLanguage)\n            metaDescription(acceptLanguage: $acceptLanguage)\n            description(acceptLanguage: $acceptLanguage)\n            categoriesRef {\n              id\n            }\n            allVariants {\n              ...DefaultVariant\n            }\n            masterVariant {\n              ...DefaultVariant\n            }\n          }\n        }\n      }\n    }\n  }\n"])), ProductPriceFragment);
var templateObject_1;

(function (AttributeType) {
  AttributeType["STRING"] = "StringAttribute";
  AttributeType["DATE"] = "DateAttribute";
  AttributeType["DATETIME"] = "DateTimeAttribute";
  AttributeType["TIME"] = "TimeAttribute";
  AttributeType["NUMBER"] = "NumberAttribute";
  AttributeType["ENUM"] = "EnumAttribute";
  AttributeType["LOCALIZED_ENUM"] = "LocalizedEnumAttribute";
  AttributeType["LOCALIZED_STRING"] = "LocalizedStringAttribute";
  AttributeType["MONEY"] = "MoneyAttribute";
  AttributeType["BOOLEAN"] = "BooleanAttribute";
})(exports.AttributeType || (exports.AttributeType = {}));

var mapFilterToPredicate = function (filter) {
  var _a = getSettings(),
      locale = _a.locale,
      currency = _a.currency;

  var valuePredicate;

  switch (filter.type) {
    case exports.AttributeType.STRING:
      valuePredicate = "value = \"" + filter.value + "\"";
      break;

    case exports.AttributeType.DATE:
    case exports.AttributeType.DATETIME:
    case exports.AttributeType.TIME:
      valuePredicate = Array.isArray(filter.value) ? "value >= \"" + filter.value[0] + "\" and value <= \"" + filter.value[1] + "\"" : "value = \"" + filter.value + "\"";
      break;

    case exports.AttributeType.NUMBER:
      valuePredicate = Array.isArray(filter.value) ? "value >= " + filter.value[0] + " and value <= " + filter.value[1] : "value = " + filter.value;
      break;

    case exports.AttributeType.ENUM:
    case exports.AttributeType.LOCALIZED_ENUM:
      valuePredicate = "value(key = \"" + filter.value + "\")";
      break;

    case exports.AttributeType.LOCALIZED_STRING:
      valuePredicate = "value(" + locale.toLowerCase() + " = \"" + filter.value + "\")";
      break;

    case exports.AttributeType.MONEY:
      valuePredicate = Array.isArray(filter.value) ? "value(centAmount >= " + filter.value[0] * 100 + " and centAmount <= " + filter.value[1] * 100 + " and currencyCode = \"" + currency + "\")" : "value(centAmount = " + filter.value + " and currencyCode = \"" + currency + "\")";
      break;

    case exports.AttributeType.BOOLEAN:
      valuePredicate = "value = " + filter.value;
      break;
  }

  return "masterData(current(masterVariant(attributes(name = \"" + filter.name + "\" and " + valuePredicate + "))))";
};

var buildProductWhere = function (search) {
  var acceptLanguage = getSettings().acceptLanguage;
  var predicates = [];

  if (search === null || search === void 0 ? void 0 : search.catId) {
    var catIds = (Array.isArray(search.catId) ? search.catId : [search.catId]).join('","');
    predicates.push("masterData(current(categories(id in (\"" + catIds + "\"))))");
  }

  if (search === null || search === void 0 ? void 0 : search.slug) {
    var predicate = acceptLanguage.map(function (locale) {
      return locale + "=\"" + search.slug + "\"";
    }).join(' or ');
    predicates.push("masterData(current(slug(" + predicate + ")))");
  }

  if (search === null || search === void 0 ? void 0 : search.id) {
    predicates.push("id=\"" + search.id + "\"");
  }

  if (search === null || search === void 0 ? void 0 : search.filters) {
    var filterPredicates = search.filters.map(mapFilterToPredicate).join(' or ');

    if (filterPredicates) {
      predicates.push(filterPredicates);
    }
  }

  return predicates.join(' and ');
};

var buildCategoryWhere = function (search) {
  var acceptLanguage = getSettings().acceptLanguage;

  if (search === null || search === void 0 ? void 0 : search.catId) {
    return "id=\"" + search.catId + "\"";
  }

  if (search === null || search === void 0 ? void 0 : search.slug) {
    var predicate = acceptLanguage.map(function (locale) {
      return locale + "=\"" + search.slug + "\"";
    }).join(' or ');
    return "slug(" + predicate + ")";
  }

  return undefined;
};

var buildOrderWhere = function (search) {
  if (search === null || search === void 0 ? void 0 : search.id) {
    return "id=\"" + search.id + "\"";
  }

  return null;
};

var getCustomQuery = function (customQueryFn, params) {
  var defaultQuery = params.defaultQuery,
      defaultVariables = params.defaultVariables;

  if (customQueryFn) {
    var _a = customQueryFn(defaultQuery, defaultVariables),
        query = _a.query,
        variables = _a.variables;

    return {
      query: query || defaultQuery,
      variables: variables || defaultVariables
    };
  }

  return {
    query: defaultQuery,
    variables: defaultVariables
  };
};

var getProduct = function (params, customQueryFn) {
  return __awaiter(void 0, void 0, void 0, function () {
    var _a, locale, acceptLanguage, currency, country, client, defaultVariables, _b, query, variables, request;

    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          _a = getSettings(), locale = _a.locale, acceptLanguage = _a.acceptLanguage, currency = _a.currency, country = _a.country, client = _a.client;
          defaultVariables = {
            where: buildProductWhere(params),
            skus: params.skus,
            limit: params.limit,
            offset: params.offset,
            locale: locale,
            acceptLanguage: acceptLanguage,
            currency: currency,
            country: country
          };
          _b = getCustomQuery(customQueryFn, {
            defaultQuery: defaultQuery,
            defaultVariables: defaultVariables
          }), query = _b.query, variables = _b.variables;
          return [4
          /*yield*/
          , client.query({
            query: gql(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["", ""], ["", ""])), query),
            variables: variables,
            // temporary, seems like bug in apollo:
            // @link: https://github.com/apollographql/apollo-client/issues/3234
            fetchPolicy: 'no-cache'
          })];

        case 1:
          request = _c.sent();
          return [2
          /*return*/
          , request];
      }
    });
  });
};

var templateObject_1$1;
var defaultQuery$1 = gql(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  fragment Children on Category {\n    id\n    slug(acceptLanguage: $acceptLanguage)\n    name(acceptLanguage: $acceptLanguage)\n    childCount\n  }\n\n  fragment DefaultCategory on Category {\n    id\n    slug(acceptLanguage: $acceptLanguage)\n    name(acceptLanguage: $acceptLanguage)\n    childCount\n    children {\n      ...Children\n      children {\n        ...Children\n        children {\n          ...Children\n        }\n      }\n    }\n  }\n\n  query categories($where: String, $sort: [String!], $limit: Int, $offset: Int, $acceptLanguage: [Locale!]) {\n    categories(where: $where, sort: $sort, limit: $limit, offset: $offset) {\n      offset\n      count\n      total\n      results {\n        id\n        slug(acceptLanguage: $acceptLanguage)\n        name(acceptLanguage: $acceptLanguage)\n        description(acceptLanguage: $acceptLanguage)\n        childCount\n        parent {\n          ...DefaultCategory\n          parent {\n            ...DefaultCategory\n            parent {\n              ...DefaultCategory\n            }\n          }\n        }\n        children {\n          ...DefaultCategory\n        }\n      }\n    }\n  }\n"], ["\n  fragment Children on Category {\n    id\n    slug(acceptLanguage: $acceptLanguage)\n    name(acceptLanguage: $acceptLanguage)\n    childCount\n  }\n\n  fragment DefaultCategory on Category {\n    id\n    slug(acceptLanguage: $acceptLanguage)\n    name(acceptLanguage: $acceptLanguage)\n    childCount\n    children {\n      ...Children\n      children {\n        ...Children\n        children {\n          ...Children\n        }\n      }\n    }\n  }\n\n  query categories($where: String, $sort: [String!], $limit: Int, $offset: Int, $acceptLanguage: [Locale!]) {\n    categories(where: $where, sort: $sort, limit: $limit, offset: $offset) {\n      offset\n      count\n      total\n      results {\n        id\n        slug(acceptLanguage: $acceptLanguage)\n        name(acceptLanguage: $acceptLanguage)\n        description(acceptLanguage: $acceptLanguage)\n        childCount\n        parent {\n          ...DefaultCategory\n          parent {\n            ...DefaultCategory\n            parent {\n              ...DefaultCategory\n            }\n          }\n        }\n        children {\n          ...DefaultCategory\n        }\n      }\n    }\n  }\n"])));
var templateObject_1$2;

var getCategory = function (params, customQueryFn) {
  return __awaiter(void 0, void 0, void 0, function () {
    var _a, acceptLanguage, client, defaultVariables, _b, query, variables, request;

    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          _a = getSettings(), acceptLanguage = _a.acceptLanguage, client = _a.client;
          defaultVariables = params ? {
            where: buildCategoryWhere(params),
            limit: params.limit,
            offset: params.offset,
            acceptLanguage: acceptLanguage
          } : {
            acceptLanguage: acceptLanguage
          };
          _b = getCustomQuery(customQueryFn, {
            defaultQuery: defaultQuery$1,
            defaultVariables: defaultVariables
          }), query = _b.query, variables = _b.variables;
          return [4
          /*yield*/
          , client.query({
            query: gql(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["", ""], ["", ""])), query),
            variables: variables,
            fetchPolicy: 'no-cache'
          })];

        case 1:
          request = _c.sent();
          return [2
          /*return*/
          , request];
      }
    });
  });
};

var templateObject_1$3;
var defaultQuery$2 = gql(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  ", "\n\n  mutation createCart($draft: MyCartDraft!, $locale: Locale!, $acceptLanguage: [Locale!], $storeKey: KeyReferenceInput) {\n    cart: createMyCart(draft: $draft, storeKey: $storeKey) {\n      ...DefaultCart\n    }\n  }\n"], ["\n  ", "\n\n  mutation createCart($draft: MyCartDraft!, $locale: Locale!, $acceptLanguage: [Locale!], $storeKey: KeyReferenceInput) {\n    cart: createMyCart(draft: $draft, storeKey: $storeKey) {\n      ...DefaultCart\n    }\n  }\n"])), CartFragment);
var templateObject_1$4;

var createCart = function (cartDraft, customQueryFn) {
  if (cartDraft === void 0) {
    cartDraft = {};
  }

  return __awaiter(void 0, void 0, void 0, function () {
    var _a, locale, acceptLanguage, currency, client, defaultVariables, _b, query, variables, request;

    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          _a = getSettings(), locale = _a.locale, acceptLanguage = _a.acceptLanguage, currency = _a.currency, client = _a.client;
          defaultVariables = {
            acceptLanguage: acceptLanguage,
            locale: locale,
            draft: __assign({
              currency: currency
            }, cartDraft)
          };
          _b = getCustomQuery(customQueryFn, {
            defaultQuery: defaultQuery$2,
            defaultVariables: defaultVariables
          }), query = _b.query, variables = _b.variables;
          return [4
          /*yield*/
          , client.mutate({
            mutation: gql(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["", ""], ["", ""])), query),
            variables: variables,
            fetchPolicy: 'no-cache'
          })];

        case 1:
          request = _c.sent();
          return [2
          /*return*/
          , request];
      }
    });
  });
};

var templateObject_1$5;
var defaultQuery$3 = gql(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n  ", "\n\n  mutation updateCart($id: String!, $version: Long!, $actions: [MyCartUpdateAction!]!, $locale: Locale!, $acceptLanguage: [Locale!]) {\n    cart: updateMyCart(id: $id, version: $version, actions: $actions) {\n      ...DefaultCart\n    }\n  }\n"], ["\n  ", "\n\n  mutation updateCart($id: String!, $version: Long!, $actions: [MyCartUpdateAction!]!, $locale: Locale!, $acceptLanguage: [Locale!]) {\n    cart: updateMyCart(id: $id, version: $version, actions: $actions) {\n      ...DefaultCart\n    }\n  }\n"])), CartFragment);
var templateObject_1$6;

var updateCart = function (params, customQueryFn) {
  return __awaiter(void 0, void 0, void 0, function () {
    var _a, locale, acceptLanguage, client, defaultVariables, _b, query, variables, request;

    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          _a = getSettings(), locale = _a.locale, acceptLanguage = _a.acceptLanguage, client = _a.client;
          defaultVariables = params ? __assign({
            locale: locale,
            acceptLanguage: acceptLanguage
          }, params) : {
            acceptLanguage: acceptLanguage
          };
          _b = getCustomQuery(customQueryFn, {
            defaultQuery: defaultQuery$3,
            defaultVariables: defaultVariables
          }), query = _b.query, variables = _b.variables;
          return [4
          /*yield*/
          , client.mutate({
            mutation: gql(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["", ""], ["", ""])), query),
            variables: variables,
            fetchPolicy: 'no-cache'
          })];

        case 1:
          request = _c.sent();
          return [2
          /*return*/
          , request];
      }
    });
  });
};

var templateObject_1$7;
var defaultQuery$4 = gql(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["\n  ", "\n\n  query getCart($cartId: String!, $locale: Locale!, $acceptLanguage: [Locale!]) {\n    cart(id: $cartId) {\n      ...DefaultCart\n    }\n  }\n"], ["\n  ", "\n\n  query getCart($cartId: String!, $locale: Locale!, $acceptLanguage: [Locale!]) {\n    cart(id: $cartId) {\n      ...DefaultCart\n    }\n  }\n"])), CartFragment);
var templateObject_1$8;

var getCart = function (cartId) {
  return __awaiter(void 0, void 0, void 0, function () {
    var _a, locale, acceptLanguage, client;

    return __generator(this, function (_b) {
      switch (_b.label) {
        case 0:
          _a = getSettings(), locale = _a.locale, acceptLanguage = _a.acceptLanguage, client = _a.client;
          return [4
          /*yield*/
          , client.query({
            query: defaultQuery$4,
            variables: {
              cartId: cartId,
              locale: locale,
              acceptLanguage: acceptLanguage
            },
            fetchPolicy: 'no-cache'
          })];

        case 1:
          return [2
          /*return*/
          , _b.sent()];
      }
    });
  });
};

var hasContactInfo = function (details) {
  return Object.keys(details.contactInfo || {}).some(function (c) {
    return ['phone', 'email', 'mobile', 'fax'].includes(c);
  });
};

var createAddLineItemAction = function (variant, quantity) {
  return {
    addLineItem: {
      variantId: variant.id,
      quantity: quantity,
      sku: variant.sku
    }
  };
};

var createRemoveLineItemAction = function (product) {
  return {
    removeLineItem: {
      lineItemId: product.id,
      quantity: product.quantity
    }
  };
};

var createChangeLineItemQuantityAction = function (product) {
  return {
    changeLineItemQuantity: {
      lineItemId: product.id,
      quantity: product.quantity
    }
  };
};

var setShippingAddressAction = function (shippingDetails) {
  var _a, _b, _c, _d;

  if (hasContactInfo(shippingDetails)) {
    core.Logger.warn('Using `contactInfo` on Address is being deprecated in the CT API, use `email` `phone` `mobile` and `fax` fields directly.');
  }

  return {
    setShippingAddress: {
      address: {
        title: shippingDetails.title,
        salutation: shippingDetails.salutation,
        firstName: shippingDetails.firstName,
        lastName: shippingDetails.lastName,
        streetName: shippingDetails.streetName,
        streetNumber: shippingDetails.streetNumber,
        additionalStreetInfo: shippingDetails.additionalStreetInfo,
        postalCode: shippingDetails.postalCode,
        city: shippingDetails.city,
        region: shippingDetails.region,
        state: shippingDetails.state,
        country: shippingDetails.country,
        company: shippingDetails.company,
        department: shippingDetails.department,
        building: shippingDetails.building,
        apartment: shippingDetails.apartment,
        pOBox: shippingDetails.pOBox,
        phone: shippingDetails.phone || ((_a = shippingDetails.contactInfo) === null || _a === void 0 ? void 0 : _a.phone),
        mobile: shippingDetails.mobile || ((_b = shippingDetails.contactInfo) === null || _b === void 0 ? void 0 : _b.mobile),
        email: shippingDetails.email || ((_c = shippingDetails.contactInfo) === null || _c === void 0 ? void 0 : _c.email),
        fax: shippingDetails.fax || ((_d = shippingDetails.contactInfo) === null || _d === void 0 ? void 0 : _d.fax),
        additionalAddressInfo: shippingDetails.additionalAddressInfo
      }
    }
  };
};

var setShippingMethodAction = function (shippingMethodId) {
  return {
    setShippingMethod: {
      shippingMethod: shippingMethodId ? {
        id: shippingMethodId
      } : null
    }
  };
};

var addPayment = function (payment) {
  return {
    addPayment: {
      payment: payment
    }
  };
};

var setBillingAddressAction = function (billingDetails) {
  var _a, _b, _c, _d;

  if (hasContactInfo(billingDetails)) {
    core.Logger.warn('Using `contactInfo` on Address is being deprecated in the CT API, use `email` `phone` `mobile` and `fax` fields directly.');
  }

  return {
    setBillingAddress: {
      address: {
        title: billingDetails.title,
        salutation: billingDetails.salutation,
        firstName: billingDetails.firstName,
        lastName: billingDetails.lastName,
        streetName: billingDetails.streetName,
        streetNumber: billingDetails.streetNumber,
        additionalStreetInfo: billingDetails.additionalStreetInfo,
        postalCode: billingDetails.postalCode,
        city: billingDetails.city,
        region: billingDetails.region,
        state: billingDetails.state,
        country: billingDetails.country,
        company: billingDetails.company,
        department: billingDetails.department,
        building: billingDetails.building,
        apartment: billingDetails.apartment,
        pOBox: billingDetails.pOBox,
        phone: billingDetails.phone || ((_a = billingDetails.contactInfo) === null || _a === void 0 ? void 0 : _a.phone),
        mobile: billingDetails.mobile || ((_b = billingDetails.contactInfo) === null || _b === void 0 ? void 0 : _b.mobile),
        email: billingDetails.email || ((_c = billingDetails.contactInfo) === null || _c === void 0 ? void 0 : _c.email),
        fax: billingDetails.fax || ((_d = billingDetails.contactInfo) === null || _d === void 0 ? void 0 : _d.fax),
        additionalAddressInfo: billingDetails.additionalAddressInfo
      }
    }
  };
};

var addPaymentAction = function (paymentMethodId) {
  return {
    addPayment: {
      payment: {
        id: paymentMethodId
      }
    }
  };
};

var addDiscountCodeAction = function (code) {
  return {
    addDiscountCode: {
      code: code
    }
  };
};

var removeDiscountCodeAction = function (discountCode) {
  return {
    removeDiscountCode: {
      discountCode: discountCode
    }
  };
};

var setCustomerEmail = function (email) {
  return {
    setCustomerEmail: {
      email: email
    }
  };
};

var actions = /*#__PURE__*/Object.freeze({
  __proto__: null,
  createAddLineItemAction: createAddLineItemAction,
  createRemoveLineItemAction: createRemoveLineItemAction,
  createChangeLineItemQuantityAction: createChangeLineItemQuantityAction,
  setShippingAddressAction: setShippingAddressAction,
  setShippingMethodAction: setShippingMethodAction,
  addPayment: addPayment,
  setBillingAddressAction: setBillingAddressAction,
  addPaymentAction: addPaymentAction,
  addDiscountCodeAction: addDiscountCodeAction,
  removeDiscountCodeAction: removeDiscountCodeAction,
  setCustomerEmail: setCustomerEmail
});

var addToCart = function (_a, product, quantity, customQuery) {
  var id = _a.id,
      version = _a.version;
  return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_b) {
      switch (_b.label) {
        case 0:
          return [4
          /*yield*/
          , updateCart({
            id: id,
            version: version,
            actions: [createAddLineItemAction(product, quantity)]
          }, customQuery)];

        case 1:
          return [2
          /*return*/
          , _b.sent()];
      }
    });
  });
};

var removeFromCart = function (cart, product, customQuery) {
  return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4
          /*yield*/
          , updateCart({
            id: cart.id,
            version: cart.version,
            actions: [createRemoveLineItemAction(product)]
          }, customQuery)];

        case 1:
          return [2
          /*return*/
          , _a.sent()];
      }
    });
  });
};

var updateCartQuantity = function (cart, product, customQuery) {
  return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4
          /*yield*/
          , updateCart({
            id: cart.id,
            version: cart.version,
            actions: [createChangeLineItemQuantityAction(product)]
          }, customQuery)];

        case 1:
          return [2
          /*return*/
          , _a.sent()];
      }
    });
  });
};

var basicProfile = gql(templateObject_1$9 || (templateObject_1$9 = __makeTemplateObject(["\n  ", "\n\n  query getMe($locale: Locale!, $acceptLanguage: [Locale!]) {\n    me {\n      activeCart {\n        ...DefaultCart\n      }\n    }\n  }\n"], ["\n  ", "\n\n  query getMe($locale: Locale!, $acceptLanguage: [Locale!]) {\n    me {\n      activeCart {\n        ...DefaultCart\n      }\n    }\n  }\n"])), CartFragment);
var fullProfile = gql(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n  ", "\n\n  query getMe($locale: Locale!, $acceptLanguage: [Locale!]) {\n    me {\n      activeCart {\n        ...DefaultCart\n      }\n      customer {\n        ...DefaultCustomer\n      }\n    }\n  }\n"], ["\n  ", "\n  ", "\n\n  query getMe($locale: Locale!, $acceptLanguage: [Locale!]) {\n    me {\n      activeCart {\n        ...DefaultCart\n      }\n      customer {\n        ...DefaultCustomer\n      }\n    }\n  }\n"])), CartFragment, CustomerFragment);
var templateObject_1$9, templateObject_2;

var getMe = function (params, customQueryFn) {
  if (params === void 0) {
    params = {};
  }

  return __awaiter(void 0, void 0, void 0, function () {
    var _a, locale, acceptLanguage, client, customer, defaultQuery, defaultVariables, _b, query, variables, request;

    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          _a = getSettings(), locale = _a.locale, acceptLanguage = _a.acceptLanguage, client = _a.client;
          customer = params.customer;
          defaultQuery = customer ? fullProfile : basicProfile;
          defaultVariables = {
            locale: locale,
            acceptLanguage: acceptLanguage
          };
          _b = getCustomQuery(customQueryFn, {
            defaultQuery: defaultQuery,
            defaultVariables: defaultVariables
          }), query = _b.query, variables = _b.variables;
          return [4
          /*yield*/
          , client.query({
            query: gql(templateObject_1$a || (templateObject_1$a = __makeTemplateObject(["", ""], ["", ""])), query),
            variables: variables,
            fetchPolicy: 'no-cache'
          })];

        case 1:
          request = _c.sent();
          return [2
          /*return*/
          , request];
      }
    });
  });
};

var templateObject_1$a;
var CreateMyOrderFromCartMutation = gql(templateObject_1$b || (templateObject_1$b = __makeTemplateObject(["\n  ", "\n\n  mutation createMyOrderFromCart($draft: OrderMyCartCommand!, $locale: Locale!, $acceptLanguage: [Locale!], $storeKey: KeyReferenceInput) {\n    order: createMyOrderFromCart(draft: $draft, storeKey: $storeKey) {\n      ...DefaultOrder\n    }\n  }\n"], ["\n  ", "\n\n  mutation createMyOrderFromCart($draft: OrderMyCartCommand!, $locale: Locale!, $acceptLanguage: [Locale!], $storeKey: KeyReferenceInput) {\n    order: createMyOrderFromCart(draft: $draft, storeKey: $storeKey) {\n      ...DefaultOrder\n    }\n  }\n"])), OrderFragment);
var templateObject_1$b;

var createMyOrderFromCart = function (draft, customQueryFn) {
  return __awaiter(void 0, void 0, void 0, function () {
    var _a, locale, acceptLanguage, client, defaultVariables, _b, query, variables;

    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          _a = getSettings(), locale = _a.locale, acceptLanguage = _a.acceptLanguage, client = _a.client;
          defaultVariables = {
            locale: locale,
            acceptLanguage: acceptLanguage,
            draft: draft
          };
          _b = getCustomQuery(customQueryFn, {
            defaultQuery: CreateMyOrderFromCartMutation,
            defaultVariables: defaultVariables
          }), query = _b.query, variables = _b.variables;
          return [4
          /*yield*/
          , client.mutate({
            mutation: gql(templateObject_1$c || (templateObject_1$c = __makeTemplateObject(["", ""], ["", ""])), query),
            variables: variables,
            fetchPolicy: 'no-cache'
          })];

        case 1:
          return [2
          /*return*/
          , _c.sent()];
      }
    });
  });
};

var templateObject_1$c;
var defaultQuery$5 = gql(templateObject_1$d || (templateObject_1$d = __makeTemplateObject(["\n  ", "\n\n  query shippingMethods($acceptLanguage: [Locale!], $cartId: String!) {\n    shippingMethods: shippingMethodsByCart(id: $cartId) {\n      ...DefaultShippingMethod\n    }\n  }\n"], ["\n  ", "\n\n  query shippingMethods($acceptLanguage: [Locale!], $cartId: String!) {\n    shippingMethods: shippingMethodsByCart(id: $cartId) {\n      ...DefaultShippingMethod\n    }\n  }\n"])), ShippingMethodFragment);
var templateObject_1$d;

var getShippingMethods = function (cartId, customQueryFn) {
  return __awaiter(void 0, void 0, void 0, function () {
    var _a, acceptLanguage, client, defaultVariables, _b, query, variables;

    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          _a = getSettings(), acceptLanguage = _a.acceptLanguage, client = _a.client;
          defaultVariables = {
            acceptLanguage: acceptLanguage,
            cartId: cartId
          };
          _b = getCustomQuery(customQueryFn, {
            defaultQuery: defaultQuery$5,
            defaultVariables: defaultVariables
          }), query = _b.query, variables = _b.variables;
          return [4
          /*yield*/
          , client.query({
            query: gql(templateObject_1$e || (templateObject_1$e = __makeTemplateObject(["", ""], ["", ""])), query),
            variables: variables,
            fetchPolicy: 'no-cache'
          })];

        case 1:
          return [2
          /*return*/
          , _c.sent()];
      }
    });
  });
};

var templateObject_1$e;

var updateShippingDetails = function (cart, shippingDetails, customQueryFn) {
  return __awaiter(void 0, void 0, void 0, function () {
    var cartResponse;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4
          /*yield*/
          , updateCart({
            id: cart.id,
            version: cart.version,
            actions: [setShippingAddressAction(shippingDetails)]
          }, customQueryFn)];

        case 1:
          cartResponse = _a.sent();
          return [2
          /*return*/
          , cartResponse];
      }
    });
  });
};

var CustomerSignMeUpMutation = gql(templateObject_1$f || (templateObject_1$f = __makeTemplateObject(["\n  ", "\n  ", "\n\n  mutation customerSignMeUp($draft: CustomerSignMeUpDraft!, $locale: Locale!, $acceptLanguage: [Locale!], $storeKey: KeyReferenceInput) {\n    user: customerSignMeUp(draft: $draft, storeKey: $storeKey) {\n      customer {\n        ...DefaultCustomer\n      }\n      cart {\n        ...DefaultCart\n      }\n    }\n  }\n"], ["\n  ", "\n  ", "\n\n  mutation customerSignMeUp($draft: CustomerSignMeUpDraft!, $locale: Locale!, $acceptLanguage: [Locale!], $storeKey: KeyReferenceInput) {\n    user: customerSignMeUp(draft: $draft, storeKey: $storeKey) {\n      customer {\n        ...DefaultCustomer\n      }\n      cart {\n        ...DefaultCart\n      }\n    }\n  }\n"])), CustomerFragment, CartFragment);
var templateObject_1$f;

var customerSignMeUp = function (draft) {
  return __awaiter(void 0, void 0, void 0, function () {
    var _a, locale, acceptLanguage, currentToken, auth, client, registerResponse, customerCredentials, token;

    return __generator(this, function (_b) {
      switch (_b.label) {
        case 0:
          _a = getSettings(), locale = _a.locale, acceptLanguage = _a.acceptLanguage, currentToken = _a.currentToken, auth = _a.auth, client = _a.client;
          return [4
          /*yield*/
          , client.mutate({
            mutation: CustomerSignMeUpMutation,
            variables: {
              draft: draft,
              locale: locale,
              acceptLanguage: acceptLanguage
            },
            fetchPolicy: 'no-cache'
          })];

        case 1:
          registerResponse = _b.sent();
          customerCredentials = {
            username: draft.email,
            password: draft.password
          };
          return [4
          /*yield*/
          , createAccessToken({
            currentToken: currentToken,
            customerCredentials: customerCredentials
          })];

        case 2:
          token = _b.sent();
          auth.onTokenChange(token);
          return [2
          /*return*/
          , registerResponse];
      }
    });
  });
};

var CustomerSignMeInMutation = gql(templateObject_1$g || (templateObject_1$g = __makeTemplateObject(["\n  ", "\n  ", "\n\n  mutation customerSignMeIn($draft: CustomerSignMeInDraft!, $locale: Locale!, $acceptLanguage: [Locale!], $storeKey: KeyReferenceInput) {\n    user: customerSignMeIn(draft: $draft, storeKey: $storeKey) {\n      customer {\n        ...DefaultCustomer\n      }\n      cart {\n        ...DefaultCart\n      }\n    }\n  }\n"], ["\n  ", "\n  ", "\n\n  mutation customerSignMeIn($draft: CustomerSignMeInDraft!, $locale: Locale!, $acceptLanguage: [Locale!], $storeKey: KeyReferenceInput) {\n    user: customerSignMeIn(draft: $draft, storeKey: $storeKey) {\n      customer {\n        ...DefaultCustomer\n      }\n      cart {\n        ...DefaultCart\n      }\n    }\n  }\n"])), CustomerFragment, CartFragment);
var templateObject_1$g;

var customerSignMeIn = function (draft) {
  return __awaiter(void 0, void 0, void 0, function () {
    var _a, locale, acceptLanguage, currentToken, auth, client, loginResponse, customerCredentials, token;

    return __generator(this, function (_b) {
      switch (_b.label) {
        case 0:
          _a = getSettings(), locale = _a.locale, acceptLanguage = _a.acceptLanguage, currentToken = _a.currentToken, auth = _a.auth, client = _a.client;
          return [4
          /*yield*/
          , client.mutate({
            mutation: CustomerSignMeInMutation,
            variables: {
              draft: draft,
              locale: locale,
              acceptLanguage: acceptLanguage
            },
            fetchPolicy: 'no-cache'
          })];

        case 1:
          loginResponse = _b.sent();
          customerCredentials = {
            username: draft.email,
            password: draft.password
          };
          return [4
          /*yield*/
          , createAccessToken({
            currentToken: currentToken,
            customerCredentials: customerCredentials
          })];

        case 2:
          token = _b.sent();
          auth.onTokenChange(token);
          return [2
          /*return*/
          , loginResponse];
      }
    });
  });
};

var customerSignOut = function () {
  return __awaiter(void 0, void 0, void 0, function () {
    var auth;
    return __generator(this, function (_a) {
      auth = getSettings().auth;
      auth.onTokenRemove();
      return [2
      /*return*/
      ];
    });
  });
};

var defaultQuery$6 = gql(templateObject_1$h || (templateObject_1$h = __makeTemplateObject(["\n  ", "\n\n  query getMe($where: String, $sort: [String!], $limit: Int, $offset: Int, $locale: Locale!, $acceptLanguage: [Locale!]) {\n    me {\n      orders(where: $where, sort: $sort, limit: $limit, offset: $offset) {\n        results {\n          ...DefaultOrder\n        }\n      }\n    }\n  }\n"], ["\n  ", "\n\n  query getMe($where: String, $sort: [String!], $limit: Int, $offset: Int, $locale: Locale!, $acceptLanguage: [Locale!]) {\n    me {\n      orders(where: $where, sort: $sort, limit: $limit, offset: $offset) {\n        results {\n          ...DefaultOrder\n        }\n      }\n    }\n  }\n"])), OrderFragment);
var templateObject_1$h;

var getOrders = function (params, customQueryFn) {
  return __awaiter(void 0, void 0, void 0, function () {
    var _a, locale, acceptLanguage, client, defaultVariables, _b, query, variables, request;

    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          _a = getSettings(), locale = _a.locale, acceptLanguage = _a.acceptLanguage, client = _a.client;
          defaultVariables = {
            where: buildOrderWhere(params),
            sort: params.sort,
            limit: params.limit,
            offset: params.offset,
            acceptLanguage: acceptLanguage,
            locale: locale
          };
          _b = getCustomQuery(customQueryFn, {
            defaultQuery: defaultQuery$6,
            defaultVariables: defaultVariables
          }), query = _b.query, variables = _b.variables;
          return [4
          /*yield*/
          , client.query({
            query: gql(templateObject_1$i || (templateObject_1$i = __makeTemplateObject(["", ""], ["", ""])), query),
            variables: variables,
            fetchPolicy: 'no-cache'
          })];

        case 1:
          request = _c.sent();
          return [2
          /*return*/
          , request];
      }
    });
  });
};

var templateObject_1$i;

var applyCartCoupon = function (cart, discountCode, customQuery) {
  return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4
          /*yield*/
          , updateCart({
            id: cart.id,
            version: cart.version,
            actions: [addDiscountCodeAction(discountCode)]
          }, customQuery)];

        case 1:
          return [2
          /*return*/
          , _a.sent()];
      }
    });
  });
};

var removeCartCoupon = function (cart, discountCode, customQuery) {
  return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4
          /*yield*/
          , updateCart({
            id: cart.id,
            version: cart.version,
            actions: [removeDiscountCodeAction(discountCode)]
          }, customQuery)];

        case 1:
          return [2
          /*return*/
          , _a.sent()];
      }
    });
  });
};

var CustomerChangeMyPassword = gql(templateObject_1$j || (templateObject_1$j = __makeTemplateObject(["\n  ", "\n\n  mutation customerChangeMyPassword($version: Long!, $currentPassword: String!, $newPassword: String!, $storeKey: KeyReferenceInput) {\n    user: customerChangeMyPassword(version: $version, currentPassword: $currentPassword, newPassword: $newPassword, storeKey: $storeKey) {\n      ...DefaultCustomer\n    }\n  }\n"], ["\n  ", "\n\n  mutation customerChangeMyPassword($version: Long!, $currentPassword: String!, $newPassword: String!, $storeKey: KeyReferenceInput) {\n    user: customerChangeMyPassword(version: $version, currentPassword: $currentPassword, newPassword: $newPassword, storeKey: $storeKey) {\n      ...DefaultCustomer\n    }\n  }\n"])), CustomerFragment);
var templateObject_1$j;

var customerChangeMyPassword = function (version, currentPassword, newPassword) {
  return __awaiter(void 0, void 0, void 0, function () {
    var client;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          client = getSettings().client;
          return [4
          /*yield*/
          , client.mutate({
            mutation: CustomerChangeMyPassword,
            variables: {
              version: version,
              currentPassword: currentPassword,
              newPassword: newPassword
            },
            fetchPolicy: 'no-cache'
          })];

        case 1:
          return [2
          /*return*/
          , _a.sent()];
      }
    });
  });
};

var changeCustomerEmailAction = function (email) {
  return {
    changeEmail: {
      email: email
    }
  };
};

var setCustomerFirstNameAction = function (firstName) {
  return {
    setFirstName: {
      firstName: firstName
    }
  };
};

var setCustomerLastNameAction = function (lastName) {
  return {
    setLastName: {
      lastName: lastName
    }
  };
};

var CustomerUpdateMeMutation = gql(templateObject_1$k || (templateObject_1$k = __makeTemplateObject(["\n  ", "\n\n  mutation customerUpdateMe($version: Long!, $actions: [MyCustomerUpdateAction!]!, $storeKey: KeyReferenceInput) {\n    user: updateMyCustomer(version: $version, actions: $actions, storeKey: $storeKey) {\n      ...DefaultCustomer\n    }\n  }\n"], ["\n  ", "\n\n  mutation customerUpdateMe($version: Long!, $actions: [MyCustomerUpdateAction!]!, $storeKey: KeyReferenceInput) {\n    user: updateMyCustomer(version: $version, actions: $actions, storeKey: $storeKey) {\n      ...DefaultCustomer\n    }\n  }\n"])), CustomerFragment);
var templateObject_1$k;

var customerUpdateMe = function (currentUser, updatedUserData) {
  return __awaiter(void 0, void 0, void 0, function () {
    var client, updateResponse;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          client = getSettings().client;
          return [4
          /*yield*/
          , client.mutate({
            mutation: CustomerUpdateMeMutation,
            variables: {
              version: currentUser.version,
              actions: [changeCustomerEmailAction(updatedUserData.email), setCustomerFirstNameAction(updatedUserData.firstName), setCustomerLastNameAction(updatedUserData.lastName)]
            },
            fetchPolicy: 'no-cache'
          })];

        case 1:
          updateResponse = _a.sent();
          return [2
          /*return*/
          , updateResponse.data];
      }
    });
  });
};
/* istanbul ignore file */


(function (AnonymousCartSignInMode) {
  /** The anonymous cart is used as new active customer cart. No `LineItem`s get merged. */
  AnonymousCartSignInMode["UseAsNewActiveCustomerCart"] = "UseAsNewActiveCustomerCart";
  /** `LineItem`s of the anonymous cart will be copied to the customer’s active cart that has been modified most recently.
   *
   * The `CartState` of the anonymous cart gets changed to `Merged` while the
   * `CartState` of the customer’s cart remains `Active`.
   *
   * `CustomLineItems` and `CustomFields` of the anonymous cart will not be copied to the customers cart.
   *
   * If a `LineItem` in the anonymous cart matches an existing line item in the
   * customer’s cart (same product ID and variant ID), the maximum quantity of both
   * LineItems is used as the new quantity. In that case `CustomFields` on the
   * `LineItem` of the anonymous cart will not be in the resulting `LineItem`.
   */

  AnonymousCartSignInMode["MergeWithExistingCustomerCart"] = "MergeWithExistingCustomerCart";
})(exports.AnonymousCartSignInMode || (exports.AnonymousCartSignInMode = {}));

(function (AttributeConstraint) {
  /** No constraints are applied to the attribute */
  AttributeConstraint["None"] = "None";
  /** Attribute value should be different in each variant */

  AttributeConstraint["Unique"] = "Unique";
  /** A set of attributes, that have this constraint, should have different combinations in each variant */

  AttributeConstraint["CombinationUnique"] = "CombinationUnique";
  /** Attribute value should be the same in all variants */

  AttributeConstraint["SameForAll"] = "SameForAll";
})(exports.AttributeConstraint || (exports.AttributeConstraint = {}));

(function (CartOrigin) {
  /** The cart was created by the merchant on behalf of the customer */
  CartOrigin["Merchant"] = "Merchant";
  /** The cart was created by the customer. This is the default value */

  CartOrigin["Customer"] = "Customer";
})(exports.CartOrigin || (exports.CartOrigin = {}));

(function (CartState) {
  /** The cart was ordered. No further operations on the cart are allowed. */
  CartState["Ordered"] = "Ordered";
  /** Anonymous cart whose content was merged into a customers cart on signin. No further operations on the cart are allowed. */

  CartState["Merged"] = "Merged";
  /** The cart can be updated and ordered. It is the default state. */

  CartState["Active"] = "Active";
})(exports.CartState || (exports.CartState = {}));

(function (ChannelRole) {
  /** Role tells that this channel can be used to track inventory entries.Channels with this role can be treated as warehouses */
  ChannelRole["InventorySupply"] = "InventorySupply";
  /** Role tells that this channel can be used to expose products to a specific
   * distribution channel. It can be used by the cart to select a product price.
   */

  ChannelRole["ProductDistribution"] = "ProductDistribution";
  /** Role tells that this channel can be used to track order export activities. */

  ChannelRole["OrderExport"] = "OrderExport";
  /** Role tells that this channel can be used to track order import activities. */

  ChannelRole["OrderImport"] = "OrderImport";
  /** This role can be combined with some other roles (e.g. with `InventorySupply`)
   * to represent the fact that this particular channel is the primary/master
   * channel among the channels of the same type.
   */

  ChannelRole["Primary"] = "Primary";
})(exports.ChannelRole || (exports.ChannelRole = {}));

(function (DiscountCodeState) {
  /** The discount code is active and none of the discounts were applied because the
   * discount application was stopped by one discount that has the StackingMode of
   * StopAfterThisDiscount defined
   */
  DiscountCodeState["ApplicationStoppedByPreviousDiscount"] = "ApplicationStoppedByPreviousDiscount";
  /** The discount code is not valid or it does not contain any valid cart
   * discounts. Validity is determined based on the validFrom and validUntil dates
   */

  DiscountCodeState["NotValid"] = "NotValid";
  /** maxApplications or maxApplicationsPerCustomer for discountCode has been reached. */

  DiscountCodeState["MaxApplicationReached"] = "MaxApplicationReached";
  /** The discount code is active and it contains at least one active and valid
   * CartDiscount. The discount code cartPredicate matches the cart and at least
   * one of the contained active discount’s cart predicates matches the cart.
   */

  DiscountCodeState["MatchesCart"] = "MatchesCart";
  /** The discount code is active and it contains at least one active and valid
   * CartDiscount. But its cart predicate does not match the cart or none of the
   * contained active discount’s cart predicates match the cart
   */

  DiscountCodeState["DoesNotMatchCart"] = "DoesNotMatchCart";
  /** The discount code is not active or it does not contain any active cart discounts. */

  DiscountCodeState["NotActive"] = "NotActive";
})(exports.DiscountCodeState || (exports.DiscountCodeState = {}));

(function (InventoryMode) {
  /** Adding items to cart and ordering is independent of inventory. No inventory checks or modifications.
   * This is the default mode for a new cart.
   */
  InventoryMode["None"] = "None";
  /** Creating an order will fail with an OutOfStock error if an unavailable line item exists. Line items in the cart
   * are only reserved for the duration of the ordering transaction.
   */

  InventoryMode["ReserveOnOrder"] = "ReserveOnOrder";
  /** Orders are tracked on inventory. That means, ordering a LineItem will decrement the available quantity on the
   * respective InventoryEntry. Creating an order will succeed even if the line item’s available quantity is zero or
   * negative. But creating an order will fail with an OutOfStock error if no matching inventory entry exists for a
   * line item.
   */

  InventoryMode["TrackOnly"] = "TrackOnly";
})(exports.InventoryMode || (exports.InventoryMode = {}));

(function (LineItemMode) {
  /** The line item was added automatically, because a discount has added a free gift to the cart.
   * The quantity can not be increased, and it won’t be merged when the same product variant is added.
   * If the gift is removed, an entry is added to the "refusedGifts" array and the discount won’t be applied again
   * to the cart. The price can not be changed externally.
   * All other updates, such as the ones related to custom fields, can be used.
   */
  LineItemMode["GiftLineItem"] = "GiftLineItem";
  /** The line item was added during cart creation or with the update action addLineItem. Its quantity can be
   * changed without restrictions.
   */

  LineItemMode["Standard"] = "Standard";
})(exports.LineItemMode || (exports.LineItemMode = {}));

(function (LineItemPriceMode) {
  /** The price is selected form the product variant. This is the default mode. */
  LineItemPriceMode["Platform"] = "Platform";
  /** The line item price was set externally. Cart discounts can apply to line items
   * with this price mode. All update actions that change the quantity of a line
   * item with this price mode require the externalPrice field to be given.
   */

  LineItemPriceMode["ExternalPrice"] = "ExternalPrice";
  /** The line item price with the total was set externally. */

  LineItemPriceMode["ExternalTotal"] = "ExternalTotal";
})(exports.LineItemPriceMode || (exports.LineItemPriceMode = {}));

(function (OrderState) {
  OrderState["Confirmed"] = "Confirmed";
  OrderState["Cancelled"] = "Cancelled";
  OrderState["Complete"] = "Complete";
  OrderState["Open"] = "Open";
})(exports.OrderState || (exports.OrderState = {}));

(function (PaymentState) {
  PaymentState["Paid"] = "Paid";
  PaymentState["CreditOwed"] = "CreditOwed";
  PaymentState["Pending"] = "Pending";
  PaymentState["Failed"] = "Failed";
  PaymentState["BalanceDue"] = "BalanceDue";
})(exports.PaymentState || (exports.PaymentState = {}));

(function (PublishScope) {
  /** Publishes the complete staged projection */
  PublishScope["All"] = "All";
  /** Publishes only prices on the staged projection */

  PublishScope["Prices"] = "Prices";
})(exports.PublishScope || (exports.PublishScope = {}));

(function (ReturnPaymentState) {
  ReturnPaymentState["NotRefunded"] = "NotRefunded";
  ReturnPaymentState["Refunded"] = "Refunded";
  ReturnPaymentState["Initial"] = "Initial";
  ReturnPaymentState["NonRefundable"] = "NonRefundable";
})(exports.ReturnPaymentState || (exports.ReturnPaymentState = {}));

(function (ReturnShipmentState) {
  ReturnShipmentState["Unusable"] = "Unusable";
  ReturnShipmentState["BackInStock"] = "BackInStock";
  ReturnShipmentState["Returned"] = "Returned";
  ReturnShipmentState["Advised"] = "Advised";
})(exports.ReturnShipmentState || (exports.ReturnShipmentState = {}));

(function (RoundingMode) {
  /** [Round half down](https://en.wikipedia.org/wiki/Rounding#Round_half_down).
   * Rounding mode used by, e.g., [Avalara Sales TaxII](https://help.avalara.com/kb/001/How_does_Rounding_with_SalesTaxII_work%3F)
   */
  RoundingMode["HalfDown"] = "HalfDown";
  /** [Round half up](https://en.wikipedia.org/wiki/Rounding#Round_half_up) */

  RoundingMode["HalfUp"] = "HalfUp";
  /** [Round half to even](https://en.wikipedia.org/wiki/Rounding#Round_half_to_even).
   * Default rounding mode as used in IEEE 754 computing functions and operators.
   */

  RoundingMode["HalfEven"] = "HalfEven";
})(exports.RoundingMode || (exports.RoundingMode = {}));

(function (SelectionMode) {
  SelectionMode["MostExpensive"] = "MostExpensive";
  SelectionMode["Cheapest"] = "Cheapest";
})(exports.SelectionMode || (exports.SelectionMode = {}));

(function (ShipmentState) {
  ShipmentState["Delayed"] = "Delayed";
  ShipmentState["Backorder"] = "Backorder";
  ShipmentState["Partial"] = "Partial";
  ShipmentState["Pending"] = "Pending";
  ShipmentState["Ready"] = "Ready";
  ShipmentState["Shipped"] = "Shipped";
})(exports.ShipmentState || (exports.ShipmentState = {}));

(function (ShippingMethodState) {
  /** Either there is no predicate defined for the ShippingMethod or the given predicate matches the cart */
  ShippingMethodState["MatchesCart"] = "MatchesCart";
  /** The ShippingMethod predicate does not match the cart. Ordering this cart will
   * fail with error ShippingMethodDoesNotMatchCart
   */

  ShippingMethodState["DoesNotMatchCart"] = "DoesNotMatchCart";
})(exports.ShippingMethodState || (exports.ShippingMethodState = {}));

(function (StackingMode) {
  /** Don’t apply any more matching discounts after this one. */
  StackingMode["StopAfterThisDiscount"] = "StopAfterThisDiscount";
  /** Default. Continue applying other matching discounts after applying this one. */

  StackingMode["Stacking"] = "Stacking";
})(exports.StackingMode || (exports.StackingMode = {}));

(function (StateRole) {
  StateRole["Return"] = "Return";
  StateRole["ReviewIncludedInStatistics"] = "ReviewIncludedInStatistics";
})(exports.StateRole || (exports.StateRole = {}));

(function (StateType) {
  StateType["OrderState"] = "OrderState";
  StateType["ProductState"] = "ProductState";
  StateType["ReviewState"] = "ReviewState";
  StateType["PaymentState"] = "PaymentState";
  StateType["LineItemState"] = "LineItemState";
})(exports.StateType || (exports.StateType = {}));

(function (TaxCalculationMode) {
  /** This calculation mode calculates the taxes on the unit price before multiplying with the quantity.
   * E.g. `($1.08 * 1.19 = $1.2852 -> $1.29 rounded) * 3 = $3.87`
   */
  TaxCalculationMode["UnitPriceLevel"] = "UnitPriceLevel";
  /** Default. This calculation mode calculates the taxes after the unit price is multiplied with the quantity.
   * E.g. `($1.08 * 3 = $3.24) * 1.19 = $3.8556 -> $3.86 rounded`
   */

  TaxCalculationMode["LineItemLevel"] = "LineItemLevel";
})(exports.TaxCalculationMode || (exports.TaxCalculationMode = {}));

(function (TaxMode) {
  /** No taxes are added to the cart. */
  TaxMode["Disabled"] = "Disabled";
  /** The tax amounts and the tax rates as well as the tax portions are set externally per ExternalTaxAmountDraft.
   * A cart with this tax mode can only be ordered if the cart itself and all line items, all custom line items and
   * the shipping method have an external tax amount and rate set
   */

  TaxMode["ExternalAmount"] = "ExternalAmount";
  /** The tax rates are set externally per ExternalTaxRateDraft. A cart with this tax mode can only be ordered if all
   * line items, all custom line items and the shipping method have an external tax rate set. The totalNet and
   * totalGross as well as the taxPortions fields are calculated by the platform according to the taxRoundingMode.
   */

  TaxMode["External"] = "External";
  /** The tax rates are selected by the platform from the TaxCategories based on the cart shipping address.
   * The totalNet and totalGross as well as the taxPortions fields are calculated by the platform according to the
   * taxRoundingMode.
   */

  TaxMode["Platform"] = "Platform";
})(exports.TaxMode || (exports.TaxMode = {}));

(function (TextInputHint) {
  TextInputHint["MultiLine"] = "MultiLine";
  TextInputHint["SingleLine"] = "SingleLine";
})(exports.TextInputHint || (exports.TextInputHint = {}));

(function (TransactionState) {
  TransactionState["Failure"] = "Failure";
  TransactionState["Success"] = "Success";
  TransactionState["Pending"] = "Pending";
  TransactionState["Initial"] = "Initial";
})(exports.TransactionState || (exports.TransactionState = {}));

(function (TransactionType) {
  TransactionType["Chargeback"] = "Chargeback";
  TransactionType["Refund"] = "Refund";
  TransactionType["Charge"] = "Charge";
  TransactionType["CancelAuthorization"] = "CancelAuthorization";
  TransactionType["Authorization"] = "Authorization";
})(exports.TransactionType || (exports.TransactionType = {}));

exports.apolloClient = null;

var onSetup = function (config) {
  config.languageMap = config.languageMap || {};
  config.acceptLanguage = config.languageMap[config.locale] || config.acceptLanguage;
  exports.apolloClient = new ApolloClient(__assign({
    link: createCommerceToolsLink(),
    cache: new apolloCacheInmemory.InMemoryCache()
  }, config.customOptions));
  config.client = exports.apolloClient;
};

var _a = core.apiClientFactory({
  onSetup: onSetup,
  defaultSettings: {
    locale: 'en',
    acceptLanguage: ['en'],
    auth: {
      onTokenChange: function () {}
    },
    cookies: {
      currencyCookieName: 'vsf-currency',
      countryCookieName: 'vsf-country',
      localeCookieName: 'vsf-locale'
    }
  }
}),
    setup = _a.setup,
    update = _a.update,
    getSettings = _a.getSettings;

exports.AddressFragment = AddressFragment;
exports.CartFragment = CartFragment;
exports.CustomerFragment = CustomerFragment;
exports.LineItemFragment = LineItemFragment;
exports.OrderFragment = OrderFragment;
exports.ProductPriceFragment = ProductPriceFragment;
exports.ShippingMethodFragment = ShippingMethodFragment;
exports.addToCart = addToCart;
exports.applyCartCoupon = applyCartCoupon;
exports.cartActions = actions;
exports.createAccessToken = createAccessToken;
exports.createCart = createCart;
exports.createMyOrderFromCart = createMyOrderFromCart;
exports.customerChangeMyPassword = customerChangeMyPassword;
exports.customerSignMeIn = customerSignMeIn;
exports.customerSignMeUp = customerSignMeUp;
exports.customerSignOut = customerSignOut;
exports.customerUpdateMe = customerUpdateMe;
exports.getCart = getCart;
exports.getCategory = getCategory;
exports.getCustomQuery = getCustomQuery;
exports.getMe = getMe;
exports.getOrders = getOrders;
exports.getProduct = getProduct;
exports.getSettings = getSettings;
exports.getShippingMethods = getShippingMethods;
exports.isTokenActive = isTokenActive;
exports.isTokenUserSession = isTokenUserSession;
exports.removeCartCoupon = removeCartCoupon;
exports.removeFromCart = removeFromCart;
exports.setup = setup;
exports.update = update;
exports.updateCart = updateCart;
exports.updateCartQuantity = updateCartQuantity;
exports.updateShippingDetails = updateShippingDetails;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesServer; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesServer.js


function addStylesServer (parentId, list, isProduction, context) {
  if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
    context = __VUE_SSR_CONTEXT__
  }
  if (context) {
    if (!context.hasOwnProperty('styles')) {
      Object.defineProperty(context, 'styles', {
        enumerable: true,
        get: function() {
          return renderStyles(context._styles)
        }
      })
      // expose renderStyles for vue-server-renderer (vuejs/#6353)
      context._renderStyles = renderStyles
    }

    var styles = context._styles || (context._styles = {})
    list = listToStyles(parentId, list)
    if (isProduction) {
      addStyleProd(styles, list)
    } else {
      addStyleDev(styles, list)
    }
  }
}

// In production, render as few style tags as possible.
// (mostly because IE9 has a limit on number of style tags)
function addStyleProd (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      // group style tags by media types.
      var id = part.media || 'default'
      var style = styles[id]
      if (style) {
        if (style.ids.indexOf(part.id) < 0) {
          style.ids.push(part.id)
          style.css += '\n' + part.css
        }
      } else {
        styles[id] = {
          ids: [part.id],
          css: part.css,
          media: part.media
        }
      }
    }
  }
}

// In dev we use individual style tag for each module for hot-reload
// and source maps.
function addStyleDev (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      styles[part.id] = {
        ids: [part.id],
        css: part.css,
        media: part.media
      }
    }
  }
}

function renderStyles (styles) {
  var css = ''
  for (var key in styles) {
    var style = styles[key]
    css += '<style data-vue-ssr-id="' + style.ids.join(' ') + '"' +
        (style.media ? ( ' media="' + style.media + '"' ) : '') + '>' +
        style.css + '</style>'
  }
  return css
}


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgnosticOrderStatus", function() { return AgnosticOrderStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logger", function() { return Logger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiClientFactory", function() { return apiClientFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configureSSR", function() { return configureSSR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mask", function() { return mask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSSR", function() { return onSSR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerLogger", function() { return registerLogger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderContentFactory", function() { return renderContentFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sharedRef", function() { return sharedRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "track", function() { return track; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCartFactory", function() { return useCartFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCategoryFactory", function() { return useCategoryFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useContentFactory", function() { return useContentFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFacetFactory", function() { return useFacetFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useProductFactory", function() { return useProductFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReviewFactory", function() { return useReviewFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUserBillingFactory", function() { return useUserBillingFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUserFactory", function() { return useUserFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUserOrdersFactory", function() { return useUserOrdersFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUserShippingFactory", function() { return useUserShippingFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useWishlistFactory", function() { return useWishlistFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vsfRef", function() { return vsfRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrap", function() { return wrap; });
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__);

var onSSR = _vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["onServerPrefetch"];
var vsfRef = _vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"];

var configureSSR = function (config) {
  onSSR = config.onSSR || onSSR;
  vsfRef = config.vsfRef || vsfRef;
};

var sharedMap = new Map();

function sharedRef(value, key) {
  var givenKey = key || value;

  if (sharedMap.has(givenKey)) {
    return sharedMap.get(givenKey);
  }

  var newRef = vsfRef(key ? value : null, givenKey);
  sharedMap.set(givenKey, newRef);
  return newRef;
}

function wrap(element) {
  return Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["isRef"])(element) ? element : Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(element);
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */


var __assign = function () {
  __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
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
      result.done ? resolve(result.value) : new P(function (resolve) {
        resolve(result.value);
      }).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;

        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;

        case 7:
          op = _.ops.pop();

          _.trys.pop();

          continue;

        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }

          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }

          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }

          if (t && _.label < t[2]) {
            _.label = t[2];

            _.ops.push(op);

            break;
          }

          if (t[2]) _.ops.pop();

          _.trys.pop();

          continue;
      }

      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
}

function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

  for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

  return r;
}
/* istanbul ignore file */


var defaultLogger = {
  debug: function (message) {
    var args = [];

    for (var _i = 1; _i < arguments.length; _i++) {
      args[_i - 1] = arguments[_i];
    }

    return console.debug.apply(console, __spreadArrays(['[VSF][debug]', message], args));
  },
  info: function (message) {
    var args = [];

    for (var _i = 1; _i < arguments.length; _i++) {
      args[_i - 1] = arguments[_i];
    }

    return console.info.apply(console, __spreadArrays(['[VSF][info]', message], args));
  },
  warn: function (message) {
    var args = [];

    for (var _i = 1; _i < arguments.length; _i++) {
      args[_i - 1] = arguments[_i];
    }

    return console.warn.apply(console, __spreadArrays(['[VSF][warn]', message], args));
  },
  error: function (message) {
    var args = [];

    for (var _i = 1; _i < arguments.length; _i++) {
      args[_i - 1] = arguments[_i];
    }

    return console.error.apply(console, __spreadArrays(['[VSF][error]', message], args));
  }
};
var Logger = defaultLogger;

var registerLogger = function (loggerImplementation, verbosity) {
  if (typeof loggerImplementation === 'function') {
    Logger = loggerImplementation(verbosity);
    return;
  }

  switch (verbosity) {
    case 'info':
      Logger = __assign(__assign(__assign({}, defaultLogger), loggerImplementation), {
        debug: function () {}
      });
      break;

    case 'warn':
      Logger = __assign(__assign(__assign({}, defaultLogger), loggerImplementation), {
        info: function () {},
        debug: function () {}
      });
      break;

    case 'error':
      Logger = __assign(__assign(__assign({}, defaultLogger), loggerImplementation), {
        info: function () {},
        warn: function () {},
        debug: function () {}
      });
      break;

    case 'none':
      Logger = {
        debug: function () {},
        info: function () {},
        warn: function () {},
        error: function () {}
      };
      break;

    default:
      Logger = __assign(__assign({}, defaultLogger), loggerImplementation);
  }
};

registerLogger(defaultLogger, 'error');

var maskString = function (el) {
  return el.charAt(0) + "***" + el.slice(-1);
};

var maskAny = function (el) {
  if (typeof el === 'string') {
    return maskString(el);
  }

  return '***';
};

var mask = function (el) {
  if (typeof el === 'object' && !Array.isArray(el)) {
    return Object.keys(el).reduce(function (prev, key) {
      var _a;

      return __assign(__assign({}, prev), (_a = {}, _a[key] = maskAny(el[key]), _a));
    }, {});
  }

  return maskAny(el);
};

var useCartFactory = function (factoryParams) {
  var setCart = function (newCart) {
    sharedRef('useCart-cart').value = newCart;
    Logger.debug('useCartFactory.setCart', newCart);
  };

  var useCart = function () {
    var loading = sharedRef(false, 'useCart-loading');
    var cart = sharedRef(null, 'useCart-cart');

    var addToCart = function (product, quantity, customQuery) {
      return __awaiter(void 0, void 0, void 0, function () {
        var updatedCart;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              Logger.debug('useCart.addToCart', {
                product: product,
                quantity: quantity
              });
              loading.value = true;
              return [4
              /*yield*/
              , factoryParams.addToCart({
                currentCart: cart.value,
                product: product,
                quantity: quantity
              }, customQuery)];

            case 1:
              updatedCart = _a.sent();
              cart.value = updatedCart;
              loading.value = false;
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    var removeFromCart = function (product, customQuery) {
      return __awaiter(void 0, void 0, void 0, function () {
        var updatedCart;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              Logger.debug('userCart.removeFromCart', {
                product: product
              });
              loading.value = true;
              return [4
              /*yield*/
              , factoryParams.removeFromCart({
                currentCart: cart.value,
                product: product
              }, customQuery)];

            case 1:
              updatedCart = _a.sent();
              cart.value = updatedCart;
              loading.value = false;
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    var updateQuantity = function (product, quantity, customQuery) {
      return __awaiter(void 0, void 0, void 0, function () {
        var updatedCart;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              Logger.debug('userCart.updateQuantity', {
                product: product,
                quantity: quantity
              });
              if (!(quantity && quantity > 0)) return [3
              /*break*/
              , 2];
              loading.value = true;
              return [4
              /*yield*/
              , factoryParams.updateQuantity({
                currentCart: cart.value,
                product: product,
                quantity: quantity
              }, customQuery)];

            case 1:
              updatedCart = _a.sent();
              cart.value = updatedCart;
              loading.value = false;
              _a.label = 2;

            case 2:
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    var loadCart = function (customQuery) {
      return __awaiter(void 0, void 0, void 0, function () {
        var _a;

        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              Logger.debug('userCart.loadCart');

              if (cart.value) {
                /**
                  * Triggering change for hydration purpose,
                  * temporary issue related with cpapi plugin
                  */
                loading.value = false;
                cart.value = __assign({}, cart.value);
                return [2
                /*return*/
                ];
              }

              loading.value = true;
              _a = cart;
              return [4
              /*yield*/
              , factoryParams.loadCart(customQuery)];

            case 1:
              _a.value = _b.sent();
              loading.value = false;
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    var clearCart = function () {
      return __awaiter(void 0, void 0, void 0, function () {
        var updatedCart;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              Logger.debug('userCart.clearCart');
              loading.value = true;
              return [4
              /*yield*/
              , factoryParams.clearCart({
                currentCart: cart.value
              })];

            case 1:
              updatedCart = _a.sent();
              cart.value = updatedCart;
              loading.value = false;
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    var isOnCart = function (product) {
      return factoryParams.isOnCart({
        currentCart: cart.value,
        product: product
      });
    };

    var applyCoupon = function (couponCode, customQuery) {
      return __awaiter(void 0, void 0, void 0, function () {
        var updatedCart, e_1;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              Logger.debug('userCart.applyCoupon');
              _a.label = 1;

            case 1:
              _a.trys.push([1, 3, 4, 5]);

              loading.value = true;
              return [4
              /*yield*/
              , factoryParams.applyCoupon({
                currentCart: cart.value,
                couponCode: couponCode
              }, customQuery)];

            case 2:
              updatedCart = _a.sent().updatedCart;
              cart.value = updatedCart;
              return [3
              /*break*/
              , 5];

            case 3:
              e_1 = _a.sent();
              Logger.error('userCart.applyCoupon', e_1);
              return [3
              /*break*/
              , 5];

            case 4:
              loading.value = false;
              return [7
              /*endfinally*/
              ];

            case 5:
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    var removeCoupon = function (coupon, customQuery) {
      return __awaiter(void 0, void 0, void 0, function () {
        var updatedCart, e_2;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              Logger.debug('userCart.removeCoupon');
              _a.label = 1;

            case 1:
              _a.trys.push([1, 3, 4, 5]);

              loading.value = true;
              return [4
              /*yield*/
              , factoryParams.removeCoupon({
                currentCart: cart.value,
                coupon: coupon
              }, customQuery)];

            case 2:
              updatedCart = _a.sent().updatedCart;
              cart.value = updatedCart;
              loading.value = false;
              return [3
              /*break*/
              , 5];

            case 3:
              e_2 = _a.sent();
              Logger.error('userCart.applyCoupon', e_2);
              return [3
              /*break*/
              , 5];

            case 4:
              loading.value = false;
              return [7
              /*endfinally*/
              ];

            case 5:
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    return {
      cart: Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
        return cart.value;
      }),
      isOnCart: isOnCart,
      addToCart: addToCart,
      loadCart: loadCart,
      removeFromCart: removeFromCart,
      clearCart: clearCart,
      updateQuantity: updateQuantity,
      applyCoupon: applyCoupon,
      removeCoupon: removeCoupon,
      loading: Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
        return loading.value;
      })
    };
  };

  return {
    useCart: useCart,
    setCart: setCart
  };
};

var useWishlistFactory = function (factoryParams) {
  var loading = sharedRef(false, 'useWishlist-loading');
  var wishlist = sharedRef(null, 'useWishlist-wishlist');

  var setWishlist = function (newWishlist) {
    wishlist.value = newWishlist;
  };

  var useWishlist = function () {
    var addToWishlist = function (product, customQuery) {
      return __awaiter(void 0, void 0, void 0, function () {
        var updatedWishlist;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              Logger.debug('useWishlist.addToWishlist', product);
              loading.value = true;
              return [4
              /*yield*/
              , factoryParams.addToWishlist({
                currentWishlist: wishlist.value,
                product: product
              }, customQuery)];

            case 1:
              updatedWishlist = _a.sent();
              wishlist.value = updatedWishlist;
              loading.value = false;
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    var removeFromWishlist = function (product, customQuery) {
      return __awaiter(void 0, void 0, void 0, function () {
        var updatedWishlist;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              Logger.debug('useWishlist.removeFromWishlist', product);
              loading.value = true;
              return [4
              /*yield*/
              , factoryParams.removeFromWishlist({
                currentWishlist: wishlist.value,
                product: product
              }, customQuery)];

            case 1:
              updatedWishlist = _a.sent();
              wishlist.value = updatedWishlist;
              loading.value = false;
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    var loadWishlist = function (customQuery) {
      return __awaiter(void 0, void 0, void 0, function () {
        var _a;

        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              Logger.debug('useWishlist.loadWishlist');
              if (wishlist.value) return [2
              /*return*/
              ];
              loading.value = true;
              _a = wishlist;
              return [4
              /*yield*/
              , factoryParams.loadWishlist(customQuery)];

            case 1:
              _a.value = _b.sent();
              loading.value = false;
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    var clearWishlist = function () {
      return __awaiter(void 0, void 0, void 0, function () {
        var updatedWishlist;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              Logger.debug('useWishlist.clearWishlist');
              loading.value = true;
              return [4
              /*yield*/
              , factoryParams.clearWishlist({
                currentWishlist: wishlist.value
              })];

            case 1:
              updatedWishlist = _a.sent();
              wishlist.value = updatedWishlist;
              loading.value = false;
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    var isOnWishlist = function (product) {
      Logger.debug('useWishlist.isOnWishlist', product);
      return factoryParams.isOnWishlist({
        currentWishlist: wishlist.value,
        product: product
      });
    };

    return {
      wishlist: Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
        return wishlist.value;
      }),
      isOnWishlist: isOnWishlist,
      addToWishlist: addToWishlist,
      loadWishlist: loadWishlist,
      removeFromWishlist: removeFromWishlist,
      clearWishlist: clearWishlist,
      loading: Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
        return loading.value;
      })
    };
  };

  return {
    useWishlist: useWishlist,
    setWishlist: setWishlist
  };
};

function useCategoryFactory(factoryParams) {
  return function useCategory(id) {
    var _this = this;

    var categories = sharedRef([], "useCategory-categories-" + id);
    var loading = sharedRef(false, "useCategory-loading-" + id);

    var search = function (params, customQuery) {
      return __awaiter(_this, void 0, void 0, function () {
        var _a;

        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              Logger.debug('useCategory.search', params);
              loading.value = true;
              _a = categories;
              return [4
              /*yield*/
              , factoryParams.categorySearch(params, customQuery)];

            case 1:
              _a.value = _b.sent();
              loading.value = false;
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    return {
      search: search,
      loading: Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
        return loading.value;
      }),
      categories: Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
        return categories.value;
      })
    };
  };
}

function useProductFactory(factoryParams) {
  return function useProduct(id) {
    var _this = this;

    var products = sharedRef([], "useProduct-products-" + id);
    var totalProducts = sharedRef(0, "useProduct-totalProducts-" + id);
    var filters = sharedRef(null, "useProduct-filters-" + id);
    var sortingOptions = sharedRef(null, "useProduct-sortingOptions-" + id);
    var loading = sharedRef(false, "useProduct-loading-" + id);

    var search = function (params, customQuery) {
      return __awaiter(_this, void 0, void 0, function () {
        var _a, data, total, availableFilters, availableSortingOptions, e_1;

        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              Logger.debug('useProduct.search', params);
              loading.value = true;
              filters.value = null;
              _b.label = 1;

            case 1:
              _b.trys.push([1, 3, 4, 5]);

              return [4
              /*yield*/
              , factoryParams.productsSearch(params, customQuery)];

            case 2:
              _a = _b.sent(), data = _a.data, total = _a.total, availableFilters = _a.availableFilters, availableSortingOptions = _a.availableSortingOptions;
              products.value = data;
              totalProducts.value = total;
              filters.value = availableFilters || null;
              sortingOptions.value = availableSortingOptions || null;
              return [3
              /*break*/
              , 5];

            case 3:
              e_1 = _b.sent();
              Logger.error('useProduct.search', e_1);
              return [3
              /*break*/
              , 5];

            case 4:
              loading.value = false;
              return [7
              /*endfinally*/
              ];

            case 5:
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    return {
      products: Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
        return products.value;
      }),
      availableFilters: Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
        return filters.value;
      }),
      totalProducts: Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
        return totalProducts.value;
      }),
      search: search,
      availableSortingOptions: Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
        return sortingOptions.value;
      }),
      loading: Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
        return loading.value;
      })
    };
  };
}

var useUserFactory = function (factoryParams) {
  var setUser = function (newUser) {
    sharedRef('useUser-user').value = newUser;
    Logger.debug('useUserFactory.setUser', newUser);
  };

  var useUser = function () {
    var user = sharedRef(null, 'useUser-user');
    var loading = sharedRef(false, 'useUser-loading');
    var isAuthenticated = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
      return Boolean(user.value);
    });

    var updateUser = function (params) {
      return __awaiter(void 0, void 0, void 0, function () {
        var _a, err_1;

        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              Logger.debug('useUserFactory.updateUser', params);
              loading.value = true;
              _b.label = 1;

            case 1:
              _b.trys.push([1, 3, 4, 5]);

              _a = user;
              return [4
              /*yield*/
              , factoryParams.updateUser({
                currentUser: user.value,
                updatedUserData: params
              })];

            case 2:
              _a.value = _b.sent();
              return [3
              /*break*/
              , 5];

            case 3:
              err_1 = _b.sent();
              Logger.error('useUserFactory.updateUser', err_1);
              throw err_1;

            case 4:
              loading.value = false;
              return [7
              /*endfinally*/
              ];

            case 5:
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    var register = function (registerUserData) {
      return __awaiter(void 0, void 0, void 0, function () {
        var _a, err_2;

        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              Logger.debug('useUserFactory.register', registerUserData);
              loading.value = true;
              _b.label = 1;

            case 1:
              _b.trys.push([1, 3, 4, 5]);

              _a = user;
              return [4
              /*yield*/
              , factoryParams.register(registerUserData)];

            case 2:
              _a.value = _b.sent();
              return [3
              /*break*/
              , 5];

            case 3:
              err_2 = _b.sent();
              Logger.error('useUserFactory.register', err_2);
              throw err_2;

            case 4:
              loading.value = false;
              return [7
              /*endfinally*/
              ];

            case 5:
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    var login = function (loginUserData) {
      return __awaiter(void 0, void 0, void 0, function () {
        var _a, err_3;

        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              Logger.debug('useUserFactory.login', loginUserData);
              loading.value = true;
              _b.label = 1;

            case 1:
              _b.trys.push([1, 3, 4, 5]);

              _a = user;
              return [4
              /*yield*/
              , factoryParams.logIn(loginUserData)];

            case 2:
              _a.value = _b.sent();
              return [3
              /*break*/
              , 5];

            case 3:
              err_3 = _b.sent();
              Logger.error('useUserFactory.login', err_3);
              throw err_3;

            case 4:
              loading.value = false;
              return [7
              /*endfinally*/
              ];

            case 5:
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    var logout = function () {
      return __awaiter(void 0, void 0, void 0, function () {
        var err_4;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              Logger.debug('useUserFactory.logout');
              _a.label = 1;

            case 1:
              _a.trys.push([1, 3,, 4]);

              return [4
              /*yield*/
              , factoryParams.logOut()];

            case 2:
              _a.sent();

              user.value = null;
              return [3
              /*break*/
              , 4];

            case 3:
              err_4 = _a.sent();
              Logger.error('useUserFactory.err');
              throw err_4;

            case 4:
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    var changePassword = function (currentPassword, newPassword) {
      return __awaiter(void 0, void 0, void 0, function () {
        var _a, err_5;

        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              Logger.debug('useUserFactory.changePassword', {
                currentPassword: mask(currentPassword),
                newPassword: mask(newPassword)
              });
              loading.value = true;
              _b.label = 1;

            case 1:
              _b.trys.push([1, 3, 4, 5]);

              _a = user;
              return [4
              /*yield*/
              , factoryParams.changePassword({
                currentUser: user.value,
                currentPassword: currentPassword,
                newPassword: newPassword
              })];

            case 2:
              _a.value = _b.sent();
              return [3
              /*break*/
              , 5];

            case 3:
              err_5 = _b.sent();
              Logger.error('useUserFactory.changePassword', err_5);
              throw err_5;

            case 4:
              loading.value = false;
              return [7
              /*endfinally*/
              ];

            case 5:
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    var load = function () {
      return __awaiter(void 0, void 0, void 0, function () {
        var _a, err_6;

        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              Logger.debug('useUserFactory.refreshUser');
              loading.value = true;
              _b.label = 1;

            case 1:
              _b.trys.push([1, 3, 4, 5]);

              _a = user;
              return [4
              /*yield*/
              , factoryParams.loadUser()];

            case 2:
              _a.value = _b.sent();
              return [3
              /*break*/
              , 5];

            case 3:
              err_6 = _b.sent();
              Logger.error('useUserFactory.refreshUser', err_6);
              throw err_6;

            case 4:
              loading.value = false;
              return [7
              /*endfinally*/
              ];

            case 5:
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    return {
      user: Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
        return user.value;
      }),
      updateUser: updateUser,
      register: register,
      login: login,
      logout: logout,
      isAuthenticated: isAuthenticated,
      changePassword: changePassword,
      load: load,
      loading: Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
        return loading.value;
      })
    };
  };

  return {
    useUser: useUser,
    setUser: setUser
  };
};

var useUserShippingFactory = function (factoryParams) {
  var useUserShipping = function () {
    var loading = sharedRef(false, 'useUserShipping-loading');
    var shipping = sharedRef({}, 'useUserShipping-shipping');
    var readonlyShipping = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["unref"])(shipping);

    var addAddress = function (address) {
      return __awaiter(void 0, void 0, void 0, function () {
        var _a, err_1;

        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              Logger.debug('useUserShipping.addAddress', mask(address));
              loading.value = true;
              _b.label = 1;

            case 1:
              _b.trys.push([1, 3, 4, 5]);

              _a = shipping;
              return [4
              /*yield*/
              , factoryParams.addAddress({
                address: address,
                shipping: readonlyShipping
              })];

            case 2:
              _a.value = _b.sent();
              return [3
              /*break*/
              , 5];

            case 3:
              err_1 = _b.sent();
              Logger.error('useUserShipping.addAddress', err_1);
              throw new Error(err_1);

            case 4:
              loading.value = false;
              return [7
              /*endfinally*/
              ];

            case 5:
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    var deleteAddress = function (address) {
      return __awaiter(void 0, void 0, void 0, function () {
        var _a, err_2;

        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              Logger.debug('useUserShipping.deleteAddress', address);
              loading.value = true;
              _b.label = 1;

            case 1:
              _b.trys.push([1, 3, 4, 5]);

              _a = shipping;
              return [4
              /*yield*/
              , factoryParams.deleteAddress({
                address: address,
                shipping: readonlyShipping
              })];

            case 2:
              _a.value = _b.sent();
              return [3
              /*break*/
              , 5];

            case 3:
              err_2 = _b.sent();
              Logger.error('useUserShipping.deleteAddress', err_2);
              throw new Error(err_2);

            case 4:
              loading.value = false;
              return [7
              /*endfinally*/
              ];

            case 5:
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    var updateAddress = function (address) {
      return __awaiter(void 0, void 0, void 0, function () {
        var _a, err_3;

        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              Logger.debug('useUserShipping.updateAddress', address);
              loading.value = true;
              _b.label = 1;

            case 1:
              _b.trys.push([1, 3, 4, 5]);

              _a = shipping;
              return [4
              /*yield*/
              , factoryParams.updateAddress({
                address: address,
                shipping: readonlyShipping
              })];

            case 2:
              _a.value = _b.sent();
              return [3
              /*break*/
              , 5];

            case 3:
              err_3 = _b.sent();
              Logger.error('useUserShipping.updateAddress', address);
              throw new Error(err_3);

            case 4:
              loading.value = false;
              return [7
              /*endfinally*/
              ];

            case 5:
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    var load = function () {
      return __awaiter(void 0, void 0, void 0, function () {
        var _a, err_4;

        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              Logger.debug('useUserShipping.load');
              loading.value = true;
              _b.label = 1;

            case 1:
              _b.trys.push([1, 3, 4, 5]);

              _a = shipping;
              return [4
              /*yield*/
              , factoryParams.load({
                shipping: readonlyShipping
              })];

            case 2:
              _a.value = _b.sent();
              return [3
              /*break*/
              , 5];

            case 3:
              err_4 = _b.sent();
              Logger.error('useUserShipping.load', err_4);
              throw new Error(err_4);

            case 4:
              loading.value = false;
              return [7
              /*endfinally*/
              ];

            case 5:
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    var setDefault = function (address) {
      return __awaiter(void 0, void 0, void 0, function () {
        var _a, err_5;

        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              Logger.debug('useUserShipping.setDefault', address);
              loading.value = true;
              _b.label = 1;

            case 1:
              _b.trys.push([1, 3, 4, 5]);

              _a = shipping;
              return [4
              /*yield*/
              , factoryParams.setDefault({
                address: address,
                shipping: readonlyShipping
              })];

            case 2:
              _a.value = _b.sent();
              return [3
              /*break*/
              , 5];

            case 3:
              err_5 = _b.sent();
              Logger.error('useUserShipping.setDefault', err_5);
              throw new Error(err_5);

            case 4:
              loading.value = false;
              return [7
              /*endfinally*/
              ];

            case 5:
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    return {
      shipping: Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
        return shipping.value;
      }),
      loading: Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
        return loading.value;
      }),
      addAddress: addAddress,
      deleteAddress: deleteAddress,
      updateAddress: updateAddress,
      load: load,
      setDefault: setDefault
    };
  };

  return {
    useUserShipping: useUserShipping
  };
};

var useUserBillingFactory = function (factoryParams) {
  var useUserBilling = function () {
    var loading = sharedRef(false, 'useUserBilling-loading');
    var billing = sharedRef({}, 'useUserBilling-billing');
    var readonlyBilling = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["unref"])(billing);

    var addAddress = function (address) {
      return __awaiter(void 0, void 0, void 0, function () {
        var _a, err_1;

        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              Logger.debug('useUserBilling.addAddress', address);
              loading.value = true;
              _b.label = 1;

            case 1:
              _b.trys.push([1, 3, 4, 5]);

              _a = billing;
              return [4
              /*yield*/
              , factoryParams.addAddress({
                address: address,
                billing: readonlyBilling
              })];

            case 2:
              _a.value = _b.sent();
              return [3
              /*break*/
              , 5];

            case 3:
              err_1 = _b.sent();
              Logger.error('useUserBilling.addAddress', err_1);
              throw new Error(err_1);

            case 4:
              loading.value = false;
              return [7
              /*endfinally*/
              ];

            case 5:
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    var deleteAddress = function (address) {
      return __awaiter(void 0, void 0, void 0, function () {
        var _a, err_2;

        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              Logger.debug('useUserBilling.deleteAddress', address);
              loading.value = true;
              _b.label = 1;

            case 1:
              _b.trys.push([1, 3, 4, 5]);

              _a = billing;
              return [4
              /*yield*/
              , factoryParams.deleteAddress({
                address: address,
                billing: readonlyBilling
              })];

            case 2:
              _a.value = _b.sent();
              return [3
              /*break*/
              , 5];

            case 3:
              err_2 = _b.sent();
              Logger.error('useUserBilling.deleteAddress', err_2);
              throw new Error(err_2);

            case 4:
              loading.value = false;
              return [7
              /*endfinally*/
              ];

            case 5:
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    var updateAddress = function (address) {
      return __awaiter(void 0, void 0, void 0, function () {
        var _a, err_3;

        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              Logger.debug('useUserBilling.updateAddress', address);
              loading.value = true;
              _b.label = 1;

            case 1:
              _b.trys.push([1, 3, 4, 5]);

              _a = billing;
              return [4
              /*yield*/
              , factoryParams.updateAddress({
                address: address,
                billing: readonlyBilling
              })];

            case 2:
              _a.value = _b.sent();
              return [3
              /*break*/
              , 5];

            case 3:
              err_3 = _b.sent();
              Logger.error('useUserBilling.updateAddress', err_3);
              throw new Error(err_3);

            case 4:
              loading.value = false;
              return [7
              /*endfinally*/
              ];

            case 5:
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    var load = function () {
      return __awaiter(void 0, void 0, void 0, function () {
        var _a, err_4;

        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              Logger.debug('useUserBilling.load');
              loading.value = true;
              _b.label = 1;

            case 1:
              _b.trys.push([1, 3, 4, 5]);

              _a = billing;
              return [4
              /*yield*/
              , factoryParams.load({
                billing: readonlyBilling
              })];

            case 2:
              _a.value = _b.sent();
              return [3
              /*break*/
              , 5];

            case 3:
              err_4 = _b.sent();
              Logger.error('useUserBilling.load', err_4);
              throw new Error(err_4);

            case 4:
              loading.value = false;
              return [7
              /*endfinally*/
              ];

            case 5:
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    var setDefault = function (address) {
      return __awaiter(void 0, void 0, void 0, function () {
        var _a, err_5;

        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              Logger.debug('useUserBilling.setDefault');
              loading.value = true;
              _b.label = 1;

            case 1:
              _b.trys.push([1, 3, 4, 5]);

              _a = billing;
              return [4
              /*yield*/
              , factoryParams.setDefault({
                address: address,
                billing: readonlyBilling
              })];

            case 2:
              _a.value = _b.sent();
              return [3
              /*break*/
              , 5];

            case 3:
              err_5 = _b.sent();
              Logger.error('useUserBilling.setDefault', err_5);
              throw new Error(err_5);

            case 4:
              loading.value = false;
              return [7
              /*endfinally*/
              ];

            case 5:
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    return {
      billing: Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
        return billing.value;
      }),
      loading: Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
        return loading.value;
      }),
      addAddress: addAddress,
      deleteAddress: deleteAddress,
      updateAddress: updateAddress,
      load: load,
      setDefault: setDefault
    };
  };

  return {
    useUserBilling: useUserBilling
  };
};

function useUserOrdersFactory(factoryParams) {
  return function useUserOrders() {
    var _this = this;

    var orders = sharedRef([], 'useUserOrders-orders');
    var totalOrders = sharedRef(0, 'useUserOrders-totalOrders');
    var loading = sharedRef(false, 'useUserOrders-loading');

    var searchOrders = function (params, customQuery) {
      return __awaiter(_this, void 0, void 0, function () {
        var _a, data, total, err_1;

        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              Logger.debug('useUserOrders.searchOrders', params);
              loading.value = true;
              _b.label = 1;

            case 1:
              _b.trys.push([1, 3, 4, 5]);

              return [4
              /*yield*/
              , factoryParams.searchOrders(params, customQuery)];

            case 2:
              _a = _b.sent(), data = _a.data, total = _a.total;
              orders.value = data;
              totalOrders.value = total;
              return [3
              /*break*/
              , 5];

            case 3:
              err_1 = _b.sent();
              Logger.error('useUserOrders.searchOrders', err_1);
              return [3
              /*break*/
              , 5];

            case 4:
              loading.value = false;
              return [7
              /*endfinally*/
              ];

            case 5:
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    return {
      orders: Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
        return orders.value;
      }),
      totalOrders: Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
        return totalOrders.value;
      }),
      searchOrders: searchOrders,
      loading: Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
        return loading.value;
      })
    };
  };
}
/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */


function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}
/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */


function eq(value, other) {
  return value === other || value !== value && other !== other;
}
/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */


function assocIndexOf(array, key) {
  var length = array.length;

  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }

  return -1;
}
/** Used for built-in method references. */


var arrayProto = Array.prototype;
/** Built-in value references. */

var splice = arrayProto.splice;
/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */

function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }

  var lastIndex = data.length - 1;

  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }

  --this.size;
  return true;
}
/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */


function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);
  return index < 0 ? undefined : data[index][1];
}
/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */


function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}
/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */


function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }

  return this;
}
/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */


function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
} // Add methods to `ListCache`.


ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */

function stackClear() {
  this.__data__ = new ListCache();
  this.size = 0;
}
/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */


function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);
  this.size = data.size;
  return result;
}
/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */


function stackGet(key) {
  return this.__data__.get(key);
}
/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */


function stackHas(key) {
  return this.__data__.has(key);
}
/** Detect free variable `global` from Node.js. */


var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
/** Detect free variable `self`. */

var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */

var root = freeGlobal || freeSelf || Function('return this')();
/** Built-in value references. */

var Symbol$1 = root.Symbol;
/** Used for built-in method references. */

var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var nativeObjectToString = objectProto.toString;
/** Built-in value references. */

var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : undefined;
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */

function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);

  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }

  return result;
}
/** Used for built-in method references. */


var objectProto$1 = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var nativeObjectToString$1 = objectProto$1.toString;
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */

function objectToString(value) {
  return nativeObjectToString$1.call(value);
}
/** `Object#toString` result references. */


var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';
/** Built-in value references. */

var symToStringTag$1 = Symbol$1 ? Symbol$1.toStringTag : undefined;
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */

function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }

  return symToStringTag$1 && symToStringTag$1 in Object(value) ? getRawTag(value) : objectToString(value);
}
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */


function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}
/** `Object#toString` result references. */


var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */

function isFunction(value) {
  if (!isObject(value)) {
    return false;
  } // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.


  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}
/** Used to detect overreaching core-js shims. */


var coreJsData = root['__core-js_shared__'];
/** Used to detect methods masquerading as native. */

var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();
/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */


function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
/** Used for built-in method references. */


var funcProto = Function.prototype;
/** Used to resolve the decompiled source of functions. */

var funcToString = funcProto.toString;
/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */

function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}

    try {
      return func + '';
    } catch (e) {}
  }

  return '';
}
/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */


var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
/** Used to detect host constructors (Safari). */

var reIsHostCtor = /^\[object .+?Constructor\]$/;
/** Used for built-in method references. */

var funcProto$1 = Function.prototype,
    objectProto$2 = Object.prototype;
/** Used to resolve the decompiled source of functions. */

var funcToString$1 = funcProto$1.toString;
/** Used to check objects for own properties. */

var hasOwnProperty$1 = objectProto$2.hasOwnProperty;
/** Used to detect if a method is native. */

var reIsNative = RegExp('^' + funcToString$1.call(hasOwnProperty$1).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */

function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }

  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}
/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */


function getValue(object, key) {
  return object == null ? undefined : object[key];
}
/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */


function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}
/* Built-in method references that are verified to be native. */


var Map$1 = getNative(root, 'Map');
/* Built-in method references that are verified to be native. */

var nativeCreate = getNative(Object, 'create');
/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */

function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}
/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */


function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
/** Used to stand-in for `undefined` hash values. */


var HASH_UNDEFINED = '__lodash_hash_undefined__';
/** Used for built-in method references. */

var objectProto$3 = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty$2 = objectProto$3.hasOwnProperty;
/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */

function hashGet(key) {
  var data = this.__data__;

  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }

  return hasOwnProperty$2.call(data, key) ? data[key] : undefined;
}
/** Used for built-in method references. */


var objectProto$4 = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty$3 = objectProto$4.hasOwnProperty;
/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */

function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty$3.call(data, key);
}
/** Used to stand-in for `undefined` hash values. */


var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';
/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */

function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED$1 : value;
  return this;
}
/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */


function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
} // Add methods to `Hash`.


Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */

function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash(),
    'map': new (Map$1 || ListCache)(),
    'string': new Hash()
  };
}
/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */


function isKeyable(value) {
  var type = typeof value;
  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}
/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */


function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}
/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */


function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}
/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */


function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}
/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */


function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}
/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */


function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}
/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */


function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
} // Add methods to `MapCache`.


MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
/** Used as the size to enable large array optimizations. */

var LARGE_ARRAY_SIZE = 200;
/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */

function stackSet(key, value) {
  var data = this.__data__;

  if (data instanceof ListCache) {
    var pairs = data.__data__;

    if (!Map$1 || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }

    data = this.__data__ = new MapCache(pairs);
  }

  data.set(key, value);
  this.size = data.size;
  return this;
}
/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */


function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
} // Add methods to `Stack`.


Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

var defineProperty = function () {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}();
/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */


function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}
/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */


function assignMergeValue(object, key, value) {
  if (value !== undefined && !eq(object[key], value) || value === undefined && !(key in object)) {
    baseAssignValue(object, key, value);
  }
}
/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */


function createBaseFor(fromRight) {
  return function (object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];

      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }

    return object;
  };
}
/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */


var baseFor = createBaseFor();
/** Detect free variable `exports`. */

var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */

var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */

var moduleExports = freeModule && freeModule.exports === freeExports;
/** Built-in value references. */

var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;
/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */

function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }

  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
  buffer.copy(result);
  return result;
}
/** Built-in value references. */


var Uint8Array = root.Uint8Array;
/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */

function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}
/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */


function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */


function copyArray(source, array) {
  var index = -1,
      length = source.length;
  array || (array = Array(length));

  while (++index < length) {
    array[index] = source[index];
  }

  return array;
}
/** Built-in value references. */


var objectCreate = Object.create;
/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */

var baseCreate = function () {
  function object() {}

  return function (proto) {
    if (!isObject(proto)) {
      return {};
    }

    if (objectCreate) {
      return objectCreate(proto);
    }

    object.prototype = proto;
    var result = new object();
    object.prototype = undefined;
    return result;
  };
}();
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */


function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}
/** Built-in value references. */


var getPrototype = overArg(Object.getPrototypeOf, Object);
/** Used for built-in method references. */

var objectProto$5 = Object.prototype;
/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */

function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = typeof Ctor == 'function' && Ctor.prototype || objectProto$5;
  return value === proto;
}
/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */


function initCloneObject(object) {
  return typeof object.constructor == 'function' && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
}
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */


function isObjectLike(value) {
  return value != null && typeof value == 'object';
}
/** `Object#toString` result references. */


var argsTag = '[object Arguments]';
/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */

function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}
/** Used for built-in method references. */


var objectProto$6 = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty$4 = objectProto$6.hasOwnProperty;
/** Built-in value references. */

var propertyIsEnumerable = objectProto$6.propertyIsEnumerable;
/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */

var isArguments = baseIsArguments(function () {
  return arguments;
}()) ? baseIsArguments : function (value) {
  return isObjectLike(value) && hasOwnProperty$4.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
};
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */

var isArray = Array.isArray;
/** Used as references for various `Number` constants. */

var MAX_SAFE_INTEGER = 9007199254740991;
/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */

function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */


function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}
/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */


function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}
/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */


function stubFalse() {
  return false;
}
/** Detect free variable `exports`. */


var freeExports$1 = typeof exports == 'object' && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */

var freeModule$1 = freeExports$1 && typeof module == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */

var moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1;
/** Built-in value references. */

var Buffer$1 = moduleExports$1 ? root.Buffer : undefined;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeIsBuffer = Buffer$1 ? Buffer$1.isBuffer : undefined;
/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */

var isBuffer = nativeIsBuffer || stubFalse;
/** `Object#toString` result references. */

var objectTag = '[object Object]';
/** Used for built-in method references. */

var funcProto$2 = Function.prototype,
    objectProto$7 = Object.prototype;
/** Used to resolve the decompiled source of functions. */

var funcToString$2 = funcProto$2.toString;
/** Used to check objects for own properties. */

var hasOwnProperty$5 = objectProto$7.hasOwnProperty;
/** Used to infer the `Object` constructor. */

var objectCtorString = funcToString$2.call(Object);
/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */

function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }

  var proto = getPrototype(value);

  if (proto === null) {
    return true;
  }

  var Ctor = hasOwnProperty$5.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString$2.call(Ctor) == objectCtorString;
}
/** `Object#toString` result references. */


var argsTag$1 = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag$1 = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag$1 = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';
var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';
/** Used to identify `toStringTag` values of typed arrays. */

var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag$1] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag$1] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */

function baseIsTypedArray(value) {
  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}
/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */


function baseUnary(func) {
  return function (value) {
    return func(value);
  };
}
/** Detect free variable `exports`. */


var freeExports$2 = typeof exports == 'object' && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */

var freeModule$2 = freeExports$2 && typeof module == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */

var moduleExports$2 = freeModule$2 && freeModule$2.exports === freeExports$2;
/** Detect free variable `process` from Node.js. */

var freeProcess = moduleExports$2 && freeGlobal.process;
/** Used to access faster Node.js helpers. */

var nodeUtil = function () {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule$2 && freeModule$2.require && freeModule$2.require('util').types;

    if (types) {
      return types;
    } // Legacy `process.binding('util')` for Node.js < 10.


    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}();
/* Node.js helper references. */


var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */

var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
/**
 * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */

function safeGet(object, key) {
  if (key === 'constructor' && typeof object[key] === 'function') {
    return;
  }

  if (key == '__proto__') {
    return;
  }

  return object[key];
}
/** Used for built-in method references. */


var objectProto$8 = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty$6 = objectProto$8.hasOwnProperty;
/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */

function assignValue(object, key, value) {
  var objValue = object[key];

  if (!(hasOwnProperty$6.call(object, key) && eq(objValue, value)) || value === undefined && !(key in object)) {
    baseAssignValue(object, key, value);
  }
}
/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */


function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});
  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];
    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }

    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }

  return object;
}
/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */


function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }

  return result;
}
/** Used as references for various `Number` constants. */


var MAX_SAFE_INTEGER$1 = 9007199254740991;
/** Used to detect unsigned integer values. */

var reIsUint = /^(?:0|[1-9]\d*)$/;
/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */

function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER$1 : length;
  return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}
/** Used for built-in method references. */


var objectProto$9 = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty$7 = objectProto$9.hasOwnProperty;
/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */

function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty$7.call(value, key)) && !(skipIndexes && ( // Safari 9 has enumerable `arguments.length` in strict mode.
    key == 'length' || // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == 'offset' || key == 'parent') || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') || // Skip index properties.
    isIndex(key, length)))) {
      result.push(key);
    }
  }

  return result;
}
/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */


function nativeKeysIn(object) {
  var result = [];

  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }

  return result;
}
/** Used for built-in method references. */


var objectProto$a = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty$8 = objectProto$a.hasOwnProperty;
/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */

function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }

  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty$8.call(object, key)))) {
      result.push(key);
    }
  }

  return result;
}
/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */


function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}
/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */


function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}
/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */


function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet(object, key),
      srcValue = safeGet(source, key),
      stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }

  var newValue = customizer ? customizer(objValue, srcValue, key + '', object, source, stack) : undefined;
  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = isArray(srcValue),
        isBuff = !isArr && isBuffer(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray(srcValue);
    newValue = srcValue;

    if (isArr || isBuff || isTyped) {
      if (isArray(objValue)) {
        newValue = objValue;
      } else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      } else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      } else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      } else {
        newValue = [];
      }
    } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;

      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      } else if (!isObject(objValue) || isFunction(objValue)) {
        newValue = initCloneObject(srcValue);
      }
    } else {
      isCommon = false;
    }
  }

  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }

  assignMergeValue(object, key, newValue);
}
/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */


function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }

  baseFor(source, function (srcValue, key) {
    stack || (stack = new Stack());

    if (isObject(srcValue)) {
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    } else {
      var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + '', object, source, stack) : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }

      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}
/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */


function identity(value) {
  return value;
}
/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */


function apply(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);

    case 1:
      return func.call(thisArg, args[0]);

    case 2:
      return func.call(thisArg, args[0], args[1]);

    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }

  return func.apply(thisArg, args);
}
/* Built-in method references for those with the same name as other `lodash` methods. */


var nativeMax = Math.max;
/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */

function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? func.length - 1 : start, 0);
  return function () {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }

    index = -1;
    var otherArgs = Array(start + 1);

    while (++index < start) {
      otherArgs[index] = args[index];
    }

    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}
/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */


function constant(value) {
  return function () {
    return value;
  };
}
/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */


var baseSetToString = !defineProperty ? identity : function (func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};
/** Used to detect hot functions by number of calls within a span of milliseconds. */

var HOT_COUNT = 800,
    HOT_SPAN = 16;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeNow = Date.now;
/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */

function shortOut(func) {
  var count = 0,
      lastCalled = 0;
  return function () {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);
    lastCalled = stamp;

    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }

    return func.apply(undefined, arguments);
  };
}
/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */


var setToString = shortOut(baseSetToString);
/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */

function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}
/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */


function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }

  var type = typeof index;

  if (type == 'number' ? isArrayLike(object) && isIndex(index, object.length) : type == 'string' && index in object) {
    return eq(object[index], value);
  }

  return false;
}
/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */


function createAssigner(assigner) {
  return baseRest(function (object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;
    customizer = assigner.length > 3 && typeof customizer == 'function' ? (length--, customizer) : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }

    object = Object(object);

    while (++index < length) {
      var source = sources[index];

      if (source) {
        assigner(object, source, index, customizer);
      }
    }

    return object;
  });
}
/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */


var merge = createAssigner(function (object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});

function apiClientFactory(factoryParams) {
  var settings = __assign({}, factoryParams.defaultSettings);

  var setupCalled = false;
  return {
    setup: function (config) {
      settings = merge(factoryParams.defaultSettings, config);
      factoryParams.onSetup(settings);
      Logger.debug('apiClientFactory.setup', settings); // @ts-ignore

      if (setupCalled && false) {
        Logger.warn('"setup" function is being called multiple times. If you want to update config, please use "update" instead.');
      }

      setupCalled = true;
    },
    update: function (config) {
      settings = merge(settings, config);
      factoryParams.onSetup(settings);
      Logger.debug('apiClientFactory.update', settings);
    },
    getSettings: function () {
      return Object.freeze(__assign({}, settings));
    }
  };
}

function useReviewFactory(factoryParams) {
  return function useReview(id) {
    var _this = this;

    var reviews = sharedRef([], "useReviews-reviews-" + id);
    var loading = sharedRef(false, "useReviews-loading-" + id);
    var error = sharedRef(null, "useReviews-error-" + id);

    var search = function (params, customQuery) {
      return __awaiter(_this, void 0, void 0, function () {
        var _a, searchError_1;

        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              Logger.debug('useReview.search', params);
              _b.label = 1;

            case 1:
              _b.trys.push([1, 3, 4, 5]);

              loading.value = true;
              _a = reviews;
              return [4
              /*yield*/
              , factoryParams.searchReviews(params, customQuery)];

            case 2:
              _a.value = _b.sent();
              return [3
              /*break*/
              , 5];

            case 3:
              searchError_1 = _b.sent();
              Logger.error('useReview.search', searchError_1);
              error.value = searchError_1.toString();
              return [3
              /*break*/
              , 5];

            case 4:
              loading.value = false;
              return [7
              /*endfinally*/
              ];

            case 5:
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    var addReview = function (params, customQuery) {
      return __awaiter(_this, void 0, void 0, function () {
        var _a, addError_1;

        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              Logger.debug('useReview.addReview', params);
              _b.label = 1;

            case 1:
              _b.trys.push([1, 3, 4, 5]);

              loading.value = true;
              _a = reviews;
              return [4
              /*yield*/
              , factoryParams.addReview(params, customQuery)];

            case 2:
              _a.value = _b.sent();
              return [3
              /*break*/
              , 5];

            case 3:
              addError_1 = _b.sent();
              Logger.error('useReview.addReview', addError_1);
              error.value = addError_1.toString();
              return [3
              /*break*/
              , 5];

            case 4:
              loading.value = false;
              return [7
              /*endfinally*/
              ];

            case 5:
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    return {
      search: search,
      addReview: addReview,
      reviews: Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
        return reviews.value;
      }),
      loading: Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
        return loading.value;
      }),
      error: Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
        return error.value;
      })
    };
  };
}

var useFacetFactory = function (factoryParams) {
  var useFacet = function (id) {
    var ssrKey = id || 'useFacet';
    var loading = vsfRef(false, ssrKey + "-loading");
    var result = vsfRef({
      data: null,
      input: null
    }, ssrKey + "-facets");

    var search = function (params) {
      return __awaiter(void 0, void 0, void 0, function () {
        var _a;

        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              Logger.debug('useFacet.search', params);
              result.value.input = params;
              loading.value = true;
              _a = result.value;
              return [4
              /*yield*/
              , factoryParams.search(result.value)];

            case 1:
              _a.data = _b.sent();
              loading.value = false;
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    return {
      result: Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
        return result.value;
      }),
      loading: Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
        return loading.value;
      }),
      search: search
    };
  };

  return useFacet;
};

function useContentFactory(factoryParams) {
  return function useContent(id) {
    var _this = this;

    var content = sharedRef([], "useContent-content-" + id);
    var loading = sharedRef(false, "useContent-loading-" + id);
    var error = sharedRef(null, "useContent-error-" + id);

    var search = function (params) {
      return __awaiter(_this, void 0, void 0, function () {
        var _a, searchError_1;

        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              _b.trys.push([0, 2, 3, 4]);

              loading.value = true;
              _a = content;
              return [4
              /*yield*/
              , factoryParams.search(params)];

            case 1:
              _a.value = _b.sent();
              return [3
              /*break*/
              , 4];

            case 2:
              searchError_1 = _b.sent();
              error.value = searchError_1.toString();
              return [3
              /*break*/
              , 4];

            case 3:
              loading.value = false;
              return [7
              /*endfinally*/
              ];

            case 4:
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    return {
      search: search,
      content: Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
        return content.value;
      }),
      loading: Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
        return loading.value;
      }),
      error: Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
        return error.value;
      })
    };
  };
}

function renderContentFactory(factoryParams) {
  return {
    render: function render(createElement) {
      var components = []; // eslint-disable-next-line

      var self = this;
      var content = self.content;
      var resolvedContent = factoryParams.extractContent(content);
      resolvedContent.map(function component(component) {
        var componentName = component.componentName,
            props = component.props;
        components.push(createElement(componentName, {
          attrs: {
            name: componentName
          },
          props: props
        }, self.$slots.default));
      });
      return createElement('div', components);
    },
    props: {
      content: {
        type: [Array, Object]
      }
    }
  };
}
/* istanbul ignore file */
// TODO - remove this interface


var AgnosticOrderStatus;

(function (AgnosticOrderStatus) {
  AgnosticOrderStatus["Open"] = "Open";
  AgnosticOrderStatus["Pending"] = "Pending";
  AgnosticOrderStatus["Confirmed"] = "Confirmed";
  AgnosticOrderStatus["Shipped"] = "Shipped";
  AgnosticOrderStatus["Complete"] = "Complete";
  AgnosticOrderStatus["Cancelled"] = "Cancelled";
  AgnosticOrderStatus["Refunded"] = "Refunded";
})(AgnosticOrderStatus || (AgnosticOrderStatus = {}));
/* istanbul ignore file */


if (typeof window !== 'undefined') {
  window.$vuestorefront = window.$vuestorefront || {
    integrations: []
  };
}

function track(id) {
  if (typeof window !== 'undefined') {
    if (window.$vuestorefront) {
      window.$vuestorefront.integrations.push(id);
    }
  }
}


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(113)(module)))

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cartGetters; });
/* unused harmony export categoryGetters */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return checkoutGetters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return facetGetters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return orderGetters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return productGetters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return reviewGetters; });
/* unused harmony export setCart */
/* unused harmony export setUser */
/* unused harmony export setWishlist */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return useCart; });
/* unused harmony export useCategory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return index; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return index$2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return useProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return useReview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return useUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return useUserBilling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return index$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return useUserShipping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return useWishlist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return userBillingGetters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return userGetters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return userShippingGetters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return wishlistGetters; });
/* harmony import */ var _vue_storefront_commercetools_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _vue_storefront_commercetools_api__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_storefront_commercetools_api__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vue_storefront_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_vue_composition_api__WEBPACK_IMPORTED_MODULE_2__);



/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function () {
  __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
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
      result.done ? resolve(result.value) : new P(function (resolve) {
        resolve(result.value);
      }).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;

        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;

        case 7:
          op = _.ops.pop();

          _.trys.pop();

          continue;

        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }

          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }

          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }

          if (t && _.label < t[2]) {
            _.label = t[2];

            _.ops.push(op);

            break;
          }

          if (t[2]) _.ops.pop();

          _.trys.pop();

          continue;
      }

      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
}

function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

  for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

  return r;
}

var params = {
  categorySearch: function (params, customQuery) {
    return __awaiter(void 0, void 0, void 0, function () {
      var categoryResponse;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , Object(_vue_storefront_commercetools_api__WEBPACK_IMPORTED_MODULE_0__["getCategory"])(params, customQuery)];

          case 1:
            categoryResponse = _a.sent();
            return [2
            /*return*/
            , categoryResponse.data.categories.results];
        }
      });
    });
  }
};
var useCategory = Object(_vue_storefront_core__WEBPACK_IMPORTED_MODULE_1__["useCategoryFactory"])(params);

var enhanceProduct = function (productResponse) {
  productResponse.data._variants = productResponse.data.products.results.map(function (product) {
    var current = product.masterData.current;
    return current.allVariants.map(function (variant) {
      return __assign(__assign({}, variant), {
        _name: current.name,
        _slug: current.slug,
        _id: product.id,
        _master: current.masterVariant.id === variant.id,
        _description: current.description,
        _categoriesRef: current.categoriesRef.map(function (cr) {
          return cr.id;
        }),
        _rating: product.reviewRatingStatistics
      });
    });
  }).reduce(function (prev, curr) {
    return __spreadArrays(prev, curr);
  }, []);
  return productResponse;
};

var mapPaginationParams = function (_a) {
  var page = _a.page,
      perPage = _a.perPage;

  if (perPage && page) {
    return {
      limit: perPage,
      offset: (page - 1) * perPage
    };
  }
};

var getAttributeValue = function (attribute) {
  switch (attribute.__typename) {
    case 'StringAttribute':
      return attribute.stringValue;

    case 'DateAttribute':
      return attribute.dateValue;

    case 'DateTimeAttribute':
      return attribute.dateTimeValue;

    case 'TimeAttribute':
      return attribute.timeValue;

    case 'NumberAttribute':
      return attribute.numberValue;

    case 'EnumAttribute':
    case 'LocalizedEnumAttribute':
      return attribute.key;

    case 'LocalizedStringAttribute':
      return attribute.localizedString;

    case 'MoneyAttribute':
      return attribute.centAmount;

    case 'BooleanAttribute':
      return attribute.booleanValue;

    case 'ReferenceAttribute':
      return {
        typeId: attribute.typeId,
        id: attribute.id
      };

    default:
      return null;
  }
};

var formatAttributeList = function (attributes) {
  return attributes.map(function (attr) {
    var attrValue = getAttributeValue(attr);
    return {
      name: attr.name,
      value: attrValue,
      label: attr.label || attr.localizedLabel || (typeof attrValue === 'string' ? attrValue : null)
    };
  });
};

var getVariantByAttributes = function (products, attributes) {
  if (!products || products.length === 0) {
    return null;
  }

  var configurationKeys = Object.keys(attributes);
  return products.find(function (product) {
    var currentAttributes = formatAttributeList(product.attributeList);
    return configurationKeys.every(function (attrName) {
      return currentAttributes.find(function (_a) {
        var name = _a.name,
            value = _a.value;
        return attrName === name && attributes[attrName] === value;
      });
    });
  });
};

var getPrice = function (price) {
  return price ? price.value.centAmount / 100 : null;
};

var getDiscount = function (product) {
  var _a;

  return (_a = product.price) === null || _a === void 0 ? void 0 : _a.discounted;
};

var getSpecialPrice = function (product) {
  var discount = getDiscount(product);

  if (product.__typename === 'LineItem') {
    var discountedPricePerQuantity = product.discountedPricePerQuantity;
    var discountsLength = discountedPricePerQuantity.length;

    if (discountsLength > 0) {
      return getPrice(discountedPricePerQuantity[discountsLength - 1].discountedPrice);
    }
  }

  if (discount === null || discount === void 0 ? void 0 : discount.discount.isActive) {
    return getPrice(discount);
  }

  return null;
};

var createPrice = function (product) {
  if (!product) {
    return {
      regular: null,
      special: null
    };
  }

  var regularPrice = getPrice(product.price);
  var specialPrice = getSpecialPrice(product);
  return {
    regular: regularPrice,
    special: specialPrice
  };
};

var createFormatPrice = function (price) {
  if (!price) {
    return null;
  }

  var _a = Object(_vue_storefront_commercetools_api__WEBPACK_IMPORTED_MODULE_0__["getSettings"])(),
      locale = _a.locale,
      currency = _a.currency;

  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency
  }).format(price);
};

var extractAttributes = function (product) {
  return product.attributeList;
};

var flattenAttributes = function (prev, curr) {
  return __spreadArrays(prev, curr || []);
};

var getFilterFromAttribute = function (attribute, prev) {
  var attrValue = getAttributeValue(attribute);
  var filter = prev[attribute.name] || {
    type: attribute.__typename,
    options: []
  };
  var option = {
    value: attrValue,
    label: attribute.label || (typeof attrValue === 'string' ? attrValue : null),
    selected: false
  };
  var hasSuchOption = filter.options.some(function (opt) {
    return opt.value === option.value;
  });
  hasSuchOption || filter.options.push(option);
  return filter;
};

var getFiltersFromProductsAttributes = function (products) {
  if (!products) {
    return {};
  }

  return products.map(extractAttributes).reduce(flattenAttributes, []).reduce(function (prev, attribute) {
    prev[attribute.name] = getFilterFromAttribute(attribute, prev);
    return prev;
  }, {});
};

var getCouponsFromCart = function (cart) {
  var coupons = cart === null || cart === void 0 ? void 0 : cart.discountCodes;

  if (!coupons) {
    return;
  }

  return coupons.map(function (coupon) {
    return {
      id: coupon.discountCode.id,
      name: coupon.discountCode.name,
      code: coupon.discountCode.code,
      value: null
    };
  });
};

var availableSortingOptions = [{
  value: 'latest',
  label: 'Latest'
}, {
  value: 'price-up',
  label: 'Price from low to high'
}, {
  value: 'price-down',
  label: 'Price from high to low'
}];

var productsSearch = function (params, customQuery) {
  return __awaiter(void 0, void 0, void 0, function () {
    var apiSearchParams, productResponse, enhancedProductResponse, products, availableFilters;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          apiSearchParams = __assign(__assign({}, params), mapPaginationParams(params));
          return [4
          /*yield*/
          , Object(_vue_storefront_commercetools_api__WEBPACK_IMPORTED_MODULE_0__["getProduct"])(apiSearchParams, customQuery)];

        case 1:
          productResponse = _a.sent();
          enhancedProductResponse = enhanceProduct(productResponse);
          products = enhancedProductResponse.data._variants;
          availableFilters = getFiltersFromProductsAttributes(products);
          return [2
          /*return*/
          , {
            data: products,
            total: productResponse.data.products.total,
            // TODO: https://github.com/DivanteLtd/vue-storefront/issues/4856
            availableFilters: availableFilters,
            availableSortingOptions: availableSortingOptions
          }];
      }
    });
  });
};

var useProduct = Object(_vue_storefront_core__WEBPACK_IMPORTED_MODULE_1__["useProductFactory"])({
  productsSearch: productsSearch
});

var loadCurrentCart = function (customQueryFn) {
  if (customQueryFn === void 0) {
    customQueryFn = function (user, cart) {
      if (user === void 0) {
        user = null;
      }

      if (cart === void 0) {
        cart = null;
      }

      return {
        cart: cart,
        user: user
      };
    };
  }

  return __awaiter(void 0, void 0, void 0, function () {
    var _a, user, cart, profileData, data;

    return __generator(this, function (_b) {
      switch (_b.label) {
        case 0:
          _a = customQueryFn(), user = _a.user, cart = _a.cart;
          return [4
          /*yield*/
          , Object(_vue_storefront_commercetools_api__WEBPACK_IMPORTED_MODULE_0__["getMe"])({
            customer: false
          }, user)];

        case 1:
          profileData = _b.sent().data;

          if (profileData.me.activeCart) {
            return [2
            /*return*/
            , profileData.me.activeCart];
          }

          return [4
          /*yield*/
          , Object(_vue_storefront_commercetools_api__WEBPACK_IMPORTED_MODULE_0__["createCart"])({}, cart)];

        case 2:
          data = _b.sent().data;
          return [2
          /*return*/
          , data.cart];
      }
    });
  });
};

var getBasketItemByProduct = function (_a) {
  var currentCart = _a.currentCart,
      product = _a.product;
  return currentCart.lineItems.find(function (item) {
    return item.productId === product._id;
  });
};
/** returns current cart or creates new one **/


var getCurrentCart = function (currentCart) {
  return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
      if (!currentCart) {
        return [2
        /*return*/
        , loadCurrentCart()];
      }

      return [2
      /*return*/
      , currentCart];
    });
  });
};

var params$1 = {
  loadCart: function (CustomQueryFn) {
    return __awaiter(void 0, void 0, void 0, function () {
      var settings;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            settings = Object(_vue_storefront_commercetools_api__WEBPACK_IMPORTED_MODULE_0__["getSettings"])();

            if (!Object(_vue_storefront_commercetools_api__WEBPACK_IMPORTED_MODULE_0__["isTokenUserSession"])(settings.currentToken)) {
              return [2
              /*return*/
              , null];
            }

            return [4
            /*yield*/
            , loadCurrentCart(CustomQueryFn)];

          case 1:
            return [2
            /*return*/
            , _a.sent()];
        }
      });
    });
  },
  addToCart: function (_a, customQuery) {
    var currentCart = _a.currentCart,
        product = _a.product,
        quantity = _a.quantity;
    return __awaiter(void 0, void 0, void 0, function () {
      var loadedCart, data;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            return [4
            /*yield*/
            , getCurrentCart(currentCart)];

          case 1:
            loadedCart = _b.sent();
            return [4
            /*yield*/
            , Object(_vue_storefront_commercetools_api__WEBPACK_IMPORTED_MODULE_0__["addToCart"])(loadedCart, product, quantity, customQuery)];

          case 2:
            data = _b.sent().data;
            return [2
            /*return*/
            , data.cart];
        }
      });
    });
  },
  removeFromCart: function (_a, customQuery) {
    var currentCart = _a.currentCart,
        product = _a.product;
    return __awaiter(void 0, void 0, void 0, function () {
      var loadedCart, data;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            return [4
            /*yield*/
            , getCurrentCart(currentCart)];

          case 1:
            loadedCart = _b.sent();
            return [4
            /*yield*/
            , Object(_vue_storefront_commercetools_api__WEBPACK_IMPORTED_MODULE_0__["removeFromCart"])(loadedCart, product, customQuery)];

          case 2:
            data = _b.sent().data;
            return [2
            /*return*/
            , data.cart];
        }
      });
    });
  },
  updateQuantity: function (_a, customQuery) {
    var currentCart = _a.currentCart,
        product = _a.product,
        quantity = _a.quantity;
    return __awaiter(void 0, void 0, void 0, function () {
      var loadedCart, data;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            return [4
            /*yield*/
            , getCurrentCart(currentCart)];

          case 1:
            loadedCart = _b.sent();
            return [4
            /*yield*/
            , Object(_vue_storefront_commercetools_api__WEBPACK_IMPORTED_MODULE_0__["updateCartQuantity"])(loadedCart, __assign(__assign({}, product), {
              quantity: quantity
            }), customQuery)];

          case 2:
            data = _b.sent().data;
            return [2
            /*return*/
            , data.cart];
        }
      });
    });
  },
  clearCart: function (_a) {
    var currentCart = _a.currentCart;
    return __awaiter(void 0, void 0, void 0, function () {
      return __generator(this, function (_b) {
        return [2
        /*return*/
        , currentCart];
      });
    });
  },
  applyCoupon: function (_a, customQuery) {
    var currentCart = _a.currentCart,
        couponCode = _a.couponCode;
    return __awaiter(void 0, void 0, void 0, function () {
      var loadedCart, data;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            return [4
            /*yield*/
            , getCurrentCart(currentCart)];

          case 1:
            loadedCart = _b.sent();
            return [4
            /*yield*/
            , Object(_vue_storefront_commercetools_api__WEBPACK_IMPORTED_MODULE_0__["applyCartCoupon"])(loadedCart, couponCode, customQuery)];

          case 2:
            data = _b.sent().data;
            return [2
            /*return*/
            , {
              updatedCart: data.cart,
              updatedCoupon: couponCode
            }];
        }
      });
    });
  },
  removeCoupon: function (_a, customQuery) {
    var currentCart = _a.currentCart,
        coupon = _a.coupon;
    return __awaiter(void 0, void 0, void 0, function () {
      var loadedCart, data;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            return [4
            /*yield*/
            , getCurrentCart(currentCart)];

          case 1:
            loadedCart = _b.sent();
            return [4
            /*yield*/
            , Object(_vue_storefront_commercetools_api__WEBPACK_IMPORTED_MODULE_0__["removeCartCoupon"])(loadedCart, {
              id: coupon.id,
              typeId: 'discount-code'
            }, customQuery)];

          case 2:
            data = _b.sent().data;
            return [2
            /*return*/
            , {
              updatedCart: data.cart
            }];
        }
      });
    });
  },
  isOnCart: function (_a) {
    var currentCart = _a.currentCart,
        product = _a.product;
    return Boolean(currentCart && getBasketItemByProduct({
      currentCart: currentCart,
      product: product
    }));
  }
};

var _a = Object(_vue_storefront_core__WEBPACK_IMPORTED_MODULE_1__["useCartFactory"])(params$1),
    useCart = _a.useCart,
    setCart = _a.setCart;
/* istanbul ignore file */


var initialDetails = {
  contactInfo: {}
};
var paymentMethods = Object(_vue_storefront_core__WEBPACK_IMPORTED_MODULE_1__["sharedRef"])([], 'useCheckout-paymentMethods');
var shippingMethods = Object(_vue_storefront_core__WEBPACK_IMPORTED_MODULE_1__["sharedRef"])([], 'useCheckout-shippingMethods');
var personalDetails = Object(_vue_storefront_core__WEBPACK_IMPORTED_MODULE_1__["sharedRef"])({}, 'useCheckout-personalDetails');
var chosenPaymentMethod = Object(_vue_storefront_core__WEBPACK_IMPORTED_MODULE_1__["sharedRef"])({}, 'useCheckout-chosenPaymentMethod');
var chosenShippingMethod = Object(_vue_storefront_core__WEBPACK_IMPORTED_MODULE_1__["sharedRef"])({}, 'useCheckout-chosenShippingMethod');
var isPersonalDetailsCompleted = Object(_vue_storefront_core__WEBPACK_IMPORTED_MODULE_1__["sharedRef"])(false, 'useCheckout-isPersonalDetailsCompleted');
var isShippingAddressCompleted = Object(_vue_storefront_core__WEBPACK_IMPORTED_MODULE_1__["sharedRef"])(false, 'useCheckout-isShippingAddressCompleted');
var isBillingAddressCompleted = Object(_vue_storefront_core__WEBPACK_IMPORTED_MODULE_1__["sharedRef"])(false, 'useCheckout-isBillingAddressCompleted');
var billingDetails = Object(_vue_storefront_core__WEBPACK_IMPORTED_MODULE_1__["sharedRef"])(initialDetails, 'useCheckout-billingDetails');
var shippingDetails = Object(_vue_storefront_core__WEBPACK_IMPORTED_MODULE_1__["sharedRef"])(initialDetails, 'useCheckout-shippingDetails');
var loading = Object(_vue_storefront_core__WEBPACK_IMPORTED_MODULE_1__["sharedRef"])({
  personalDetails: false,
  paymentMethods: false,
  shippingMethods: false,
  shippingAddress: false,
  billingAddress: false,
  shippingMethod: false,
  order: false
}, 'useCheckout-loading');
var checkoutComputed = {
  loading: Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_2__["computed"])(function () {
    return loading.value;
  }),
  billingDetails: Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_2__["computed"])(function () {
    return billingDetails.value;
  }),
  shippingMethods: Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_2__["computed"])(function () {
    return shippingMethods.value;
  }),
  personalDetails: Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_2__["computed"])(function () {
    return personalDetails.value;
  }),
  shippingDetails: Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_2__["computed"])(function () {
    return shippingDetails.value;
  }),
  chosenShippingMethod: Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_2__["computed"])(function () {
    return chosenShippingMethod.value;
  }),
  chosenPaymentMethod: Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_2__["computed"])(function () {
    return chosenPaymentMethod.value;
  }),
  paymentMethods: Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_2__["computed"])(function () {
    return paymentMethods.value;
  }),
  isPersonalDetailsCompleted: Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_2__["computed"])(function () {
    return isPersonalDetailsCompleted.value;
  }),
  isShippingAddressCompleted: Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_2__["computed"])(function () {
    return isShippingAddressCompleted.value;
  }),
  isBillingAddressCompleted: Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_2__["computed"])(function () {
    return isBillingAddressCompleted.value;
  }),
  isShippingMethodCompleted: Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_2__["computed"])(function () {
    return Object.keys(chosenShippingMethod.value).length > 0;
  })
};

var initFields = function (cart) {
  var _a;

  personalDetails.value.email = cart.customerEmail;
  shippingDetails.value = __assign(__assign(__assign({}, initialDetails), shippingDetails.value), cart.shippingAddress);
  billingDetails.value = cart.billingAddress || initialDetails;
  isShippingAddressCompleted.value = Boolean(cart.shippingAddress);
  isBillingAddressCompleted.value = Boolean(cart.billingAddress);
  isPersonalDetailsCompleted.value = Boolean(cart.customerEmail);
  chosenShippingMethod.value = ((_a = cart.shippingInfo) === null || _a === void 0 ? void 0 : _a.shippingMethod) || {};
};
/* eslint-disable @typescript-eslint/no-unused-vars */


var initialDetails$1 = {
  contactInfo: {}
};

var createSetShippingDetails = function (_a) {
  var factoryParams = _a.factoryParams,
      cartFields = _a.cartFields,
      setCart = _a.setCart;
  return function (data, options, customQuery) {
    if (options === void 0) {
      options = {};
    }

    return __awaiter(void 0, void 0, void 0, function () {
      var cartResponse;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            shippingDetails.value = __assign(__assign(__assign(__assign({}, initialDetails$1), shippingDetails.value), data), {
              contactInfo: __assign(__assign(__assign({}, initialDetails$1.contactInfo), shippingDetails.value.contactInfo), data.contactInfo)
            });

            if (!options.save) {
              return [2
              /*return*/
              ];
            }

            loading.value.shippingAddress = true;
            _a.label = 1;

          case 1:
            _a.trys.push([1,, 3, 4]);

            return [4
            /*yield*/
            , Object(_vue_storefront_commercetools_api__WEBPACK_IMPORTED_MODULE_0__["updateCart"])({
              id: cartFields.cart.value.id,
              version: cartFields.cart.value.version,
              actions: [_vue_storefront_commercetools_api__WEBPACK_IMPORTED_MODULE_0__["cartActions"].setShippingMethodAction(), _vue_storefront_commercetools_api__WEBPACK_IMPORTED_MODULE_0__["cartActions"].setShippingAddressAction(shippingDetails.value)]
            }, customQuery)];

          case 2:
            cartResponse = _a.sent();
            setCart(cartResponse.data.cart);
            initFields(cartResponse.data.cart);
            return [3
            /*break*/
            , 4];

          case 3:
            loading.value.shippingAddress = false;
            return [7
            /*endfinally*/
            ];

          case 4:
            return [2
            /*return*/
            ];
        }
      });
    });
  };
};
/* eslint-disable @typescript-eslint/no-unused-vars */


var initialDetails$2 = {
  contactInfo: {}
};

var createSetBillingDetails = function (_a) {
  var factoryParams = _a.factoryParams,
      cartFields = _a.cartFields,
      setCart = _a.setCart;
  return function (data, options, customQuery) {
    if (options === void 0) {
      options = {};
    }

    return __awaiter(void 0, void 0, void 0, function () {
      var cartResponse;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            billingDetails.value = __assign(__assign(__assign(__assign({}, initialDetails$2), billingDetails.value), data), {
              contactInfo: __assign(__assign(__assign({}, initialDetails$2.contactInfo), billingDetails.value.contactInfo), data.contactInfo)
            });
            if (!options.save) return [2
            /*return*/
            ];
            loading.value.billingAddress = true;
            _a.label = 1;

          case 1:
            _a.trys.push([1,, 3, 4]);

            return [4
            /*yield*/
            , Object(_vue_storefront_commercetools_api__WEBPACK_IMPORTED_MODULE_0__["updateCart"])({
              id: cartFields.cart.value.id,
              version: cartFields.cart.value.version,
              actions: [_vue_storefront_commercetools_api__WEBPACK_IMPORTED_MODULE_0__["cartActions"].setBillingAddressAction(billingDetails.value)]
            }, customQuery)];

          case 2:
            cartResponse = _a.sent();
            setCart(cartResponse.data.cart);
            initFields(cartResponse.data.cart);
            return [3
            /*break*/
            , 4];

          case 3:
            loading.value.billingAddress = false;
            return [7
            /*endfinally*/
            ];

          case 4:
            return [2
            /*return*/
            ];
        }
      });
    });
  };
};
/* eslint-disable @typescript-eslint/no-unused-vars */


var setShippingMethod = function (_a) {
  var factoryParams = _a.factoryParams,
      cartFields = _a.cartFields,
      setCart = _a.setCart;
  return function (method, options, customQuery) {
    if (options === void 0) {
      options = {};
    }

    return __awaiter(void 0, void 0, void 0, function () {
      var cartResponse;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            chosenShippingMethod.value = method;
            if (!options.save) return [2
            /*return*/
            ];
            loading.value.shippingMethod = true;
            _a.label = 1;

          case 1:
            _a.trys.push([1,, 3, 4]);

            return [4
            /*yield*/
            , Object(_vue_storefront_commercetools_api__WEBPACK_IMPORTED_MODULE_0__["updateCart"])({
              id: cartFields.cart.value.id,
              version: cartFields.cart.value.version,
              actions: [_vue_storefront_commercetools_api__WEBPACK_IMPORTED_MODULE_0__["cartActions"].setShippingMethodAction(method.id)]
            }, customQuery)];

          case 2:
            cartResponse = _a.sent();
            setCart(cartResponse.data.cart);
            initFields(cartResponse.data.cart);
            return [3
            /*break*/
            , 4];

          case 3:
            loading.value.shippingMethod = false;
            return [7
            /*endfinally*/
            ];

          case 4:
            return [2
            /*return*/
            ];
        }
      });
    });
  };
};
/* eslint-disable @typescript-eslint/no-unused-vars */


var createLoadShippingMethods = function (_a, customQuery) {
  var factoryParams = _a.factoryParams,
      setShippingMethod = _a.setShippingMethod,
      cartFields = _a.cartFields;
  return function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var shippingMethodsResponse;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (!isShippingAddressCompleted.value) return [2
            /*return*/
            ];
            loading.value.shippingMethods = true;
            _a.label = 1;

          case 1:
            _a.trys.push([1,, 3, 4]);

            return [4
            /*yield*/
            , Object(_vue_storefront_commercetools_api__WEBPACK_IMPORTED_MODULE_0__["getShippingMethods"])(cartFields.cart.value.id, customQuery)];

          case 2:
            shippingMethodsResponse = _a.sent();
            shippingMethods.value = shippingMethodsResponse.data.shippingMethods;
            return [3
            /*break*/
            , 4];

          case 3:
            loading.value.shippingMethods = false;
            return [7
            /*endfinally*/
            ];

          case 4:
            return [2
            /*return*/
            ];
        }
      });
    });
  };
};
/* eslint-disable @typescript-eslint/no-unused-vars */


var PAYMENT_METHODS_MOCK = [{
  label: 'Visa Debit',
  value: 'debit',
  reference: {
    id: 'visa-debit'
  }
}, {
  label: 'MasterCard',
  value: 'mastercard',
  reference: {
    id: 'mastercard'
  }
}, {
  label: 'Visa Electron',
  value: 'electron',
  reference: {
    id: 'electron'
  }
}, {
  label: 'Cash on delivery',
  value: 'cash',
  reference: {
    id: 'cash'
  }
}, {
  label: 'Check',
  value: 'check',
  reference: {
    id: 'check'
  }
}];

var createLoadPaymentMethods = function (_a) {
  var factoryParams = _a.factoryParams;
  return function () {
    return __awaiter(void 0, void 0, void 0, function () {
      return __generator(this, function (_a) {
        paymentMethods.value = PAYMENT_METHODS_MOCK;
        chosenPaymentMethod.value = PAYMENT_METHODS_MOCK[0];
        return [2
        /*return*/
        ];
      });
    });
  };
};
/* eslint-disable @typescript-eslint/no-unused-vars */


var createSetPersonalDetails = function (_a) {
  var factoryParams = _a.factoryParams,
      setShippingDetails = _a.setShippingDetails,
      cartFields = _a.cartFields,
      setCart = _a.setCart;
  return function (data, options, customQuery) {
    if (options === void 0) {
      options = {};
    }

    return __awaiter(void 0, void 0, void 0, function () {
      var _a, firstName, lastName, cartResponse;

      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            personalDetails.value = __assign(__assign({}, personalDetails.value), data);
            _a = personalDetails.value, firstName = _a.firstName, lastName = _a.lastName;
            if (!options.save) return [2
            /*return*/
            ];
            loading.value.personalDetails = true;
            _b.label = 1;

          case 1:
            _b.trys.push([1,, 3, 4]);

            return [4
            /*yield*/
            , Object(_vue_storefront_commercetools_api__WEBPACK_IMPORTED_MODULE_0__["updateCart"])({
              id: cartFields.cart.value.id,
              version: cartFields.cart.value.version,
              actions: [_vue_storefront_commercetools_api__WEBPACK_IMPORTED_MODULE_0__["cartActions"].setCustomerEmail(personalDetails.value.email)]
            }, customQuery)];

          case 2:
            cartResponse = _b.sent();
            setCart(cartResponse.data.cart);
            initFields(cartResponse.data.cart);
            setShippingDetails({
              firstName: firstName,
              lastName: lastName
            });
            return [3
            /*break*/
            , 4];

          case 3:
            loading.value.personalDetails = false;
            return [7
            /*endfinally*/
            ];

          case 4:
            return [2
            /*return*/
            ];
        }
      });
    });
  };
};
/* eslint-disable @typescript-eslint/no-unused-vars */


var createSetPaymentMethod = function (_a) {
  var factoryParams = _a.factoryParams;
  return function (method, options) {
    return __awaiter(void 0, void 0, void 0, function () {
      return __generator(this, function (_a) {
        chosenPaymentMethod.value = method;
        return [2
        /*return*/
        ];
      });
    });
  };
};
/* eslint-disable @typescript-eslint/no-unused-vars */


var createPlaceOrder = function (_a, customQuery) {
  var cartFields = _a.cartFields;
  return function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var _a, id, version, orderResponse, order;

      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            loading.value.order = true;
            _a = cartFields.cart.value, id = _a.id, version = _a.version;
            _b.label = 1;

          case 1:
            _b.trys.push([1,, 3, 4]);

            return [4
            /*yield*/
            , Object(_vue_storefront_commercetools_api__WEBPACK_IMPORTED_MODULE_0__["createMyOrderFromCart"])({
              id: id,
              version: version
            }, customQuery)];

          case 2:
            orderResponse = _b.sent();
            order = orderResponse.data.order;
            return [2
            /*return*/
            , order];

          case 3:
            loading.value.order = false;
            return [7
            /*endfinally*/
            ];

          case 4:
            return [2
            /*return*/
            ];
        }
      });
    });
  };
};

var createLoadDetails = function (_a, customQuery) {
  var factoryParams = _a.factoryParams,
      cartFields = _a.cartFields;
  return function () {
    return __awaiter(void 0, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , cartFields.loadCart(customQuery)];

          case 1:
            _a.sent();

            initFields(cartFields.cart.value);
            return [2
            /*return*/
            ];
        }
      });
    });
  };
}; // TODO: Move to core


var useCheckoutFactory = function (factoryParams) {
  var useCheckout = function () {
    var cartFields = useCart();
    var methodsParams = {
      factoryParams: factoryParams,
      cartFields: cartFields,
      setCart: setCart
    };
    var setShippingMethod$1 = setShippingMethod(methodsParams);
    var setShippingDetails = createSetShippingDetails(methodsParams);
    var setBillingDetails = createSetBillingDetails(methodsParams);
    var loadShippingMethods = createLoadShippingMethods(__assign(__assign({}, methodsParams), {
      setShippingMethod: setShippingMethod$1
    }));
    var loadPaymentMethods = createLoadPaymentMethods(methodsParams);
    var loadDetails = createLoadDetails(methodsParams);
    var setPersonalDetails = createSetPersonalDetails(__assign(__assign({}, methodsParams), {
      setShippingDetails: setShippingDetails
    }));
    var setPaymentMethod = createSetPaymentMethod(methodsParams);
    var placeOrder = createPlaceOrder(methodsParams);
    initFields(cartFields.cart.value);

    var clean = function () {
      setCart(null);
    };

    return __assign(__assign({}, checkoutComputed), {
      setShippingDetails: setShippingDetails,
      setBillingDetails: setBillingDetails,
      loadShippingMethods: loadShippingMethods,
      loadPaymentMethods: loadPaymentMethods,
      setShippingMethod: setShippingMethod$1,
      setPersonalDetails: setPersonalDetails,
      setPaymentMethod: setPaymentMethod,
      placeOrder: placeOrder,
      loadDetails: loadDetails,
      clean: clean
    });
  };

  return useCheckout;
};

var index = useCheckoutFactory({});

var authenticate = function (userData, fn) {
  return __awaiter(void 0, void 0, void 0, function () {
    var userResponse, err_1;

    var _a, _b;

    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          _c.trys.push([0, 2,, 3]);

          return [4
          /*yield*/
          , fn(userData)];

        case 1:
          userResponse = _c.sent();
          return [2
          /*return*/
          , userResponse.data.user];

        case 2:
          err_1 = _c.sent();
          err_1.message = ((_b = (_a = err_1 === null || err_1 === void 0 ? void 0 : err_1.graphQLErrors) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.message) || err_1.message;
          _vue_storefront_core__WEBPACK_IMPORTED_MODULE_1__["Logger"].error('useUser.authenticate', err_1.message);
          throw err_1;

        case 3:
          return [2
          /*return*/
          ];
      }
    });
  });
};

var loadUser = function (customQuery) {
  return __awaiter(void 0, void 0, void 0, function () {
    var settings, profile, err_1, errorMessage;

    var _a;

    return __generator(this, function (_b) {
      switch (_b.label) {
        case 0:
          settings = Object(_vue_storefront_commercetools_api__WEBPACK_IMPORTED_MODULE_0__["getSettings"])();

          if (!Object(_vue_storefront_commercetools_api__WEBPACK_IMPORTED_MODULE_0__["isTokenUserSession"])(settings.currentToken)) {
            return [2
            /*return*/
            , null];
          }

          _b.label = 1;

        case 1:
          _b.trys.push([1, 3,, 4]);

          return [4
          /*yield*/
          , Object(_vue_storefront_commercetools_api__WEBPACK_IMPORTED_MODULE_0__["getMe"])({
            customer: true
          }, customQuery)];

        case 2:
          profile = _b.sent();
          return [2
          /*return*/
          , profile.data.me.customer];

        case 3:
          err_1 = _b.sent();
          errorMessage = ((_a = err_1 === null || err_1 === void 0 ? void 0 : err_1.graphQLErrors) === null || _a === void 0 ? void 0 : _a[0].message) || err_1.message;

          if (errorMessage.includes('Resource Owner Password Credentials Grant')) {
            return [2
            /*return*/
            , null];
          }

          err_1.message = errorMessage;
          throw err_1;

        case 4:
          return [2
          /*return*/
          ];
      }
    });
  });
};

var getCurrentUser = function (currentUser) {
  return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
      if (!currentUser) {
        return [2
        /*return*/
        , loadUser()];
      }

      return [2
      /*return*/
      , currentUser];
    });
  });
};

var params$2 = {
  loadUser: loadUser,
  logOut: function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var cartResponse;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , Object(_vue_storefront_commercetools_api__WEBPACK_IMPORTED_MODULE_0__["customerSignOut"])()];

          case 1:
            _a.sent();

            return [4
            /*yield*/
            , Object(_vue_storefront_commercetools_api__WEBPACK_IMPORTED_MODULE_0__["createCart"])()];

          case 2:
            cartResponse = _a.sent();
            setCart(cartResponse.data.cart);
            return [2
            /*return*/
            ];
        }
      });
    });
  },
  updateUser: function (_a) {
    var currentUser = _a.currentUser,
        updatedUserData = _a.updatedUserData;
    return __awaiter(void 0, void 0, void 0, function () {
      var loadedUser, user;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            return [4
            /*yield*/
            , getCurrentUser(currentUser)];

          case 1:
            loadedUser = _b.sent();
            return [4
            /*yield*/
            , Object(_vue_storefront_commercetools_api__WEBPACK_IMPORTED_MODULE_0__["customerUpdateMe"])(loadedUser, updatedUserData)];

          case 2:
            user = _b.sent().user;
            setUser(user);
            return [2
            /*return*/
            , user];
        }
      });
    });
  },
  register: function (_a) {
    var email = _a.email,
        password = _a.password,
        firstName = _a.firstName,
        lastName = _a.lastName;
    return __awaiter(void 0, void 0, void 0, function () {
      var _b, customer, cart;

      return __generator(this, function (_c) {
        switch (_c.label) {
          case 0:
            return [4
            /*yield*/
            , authenticate({
              email: email,
              password: password,
              firstName: firstName,
              lastName: lastName
            }, _vue_storefront_commercetools_api__WEBPACK_IMPORTED_MODULE_0__["customerSignMeUp"])];

          case 1:
            _b = _c.sent(), customer = _b.customer, cart = _b.cart;
            setCart(cart);
            return [2
            /*return*/
            , customer];
        }
      });
    });
  },
  logIn: function (_a) {
    var username = _a.username,
        password = _a.password;
    return __awaiter(void 0, void 0, void 0, function () {
      var customerLogin, _b, customer, cart;

      return __generator(this, function (_c) {
        switch (_c.label) {
          case 0:
            customerLogin = {
              email: username,
              password: password
            };
            return [4
            /*yield*/
            , authenticate(customerLogin, _vue_storefront_commercetools_api__WEBPACK_IMPORTED_MODULE_0__["customerSignMeIn"])];

          case 1:
            _b = _c.sent(), customer = _b.customer, cart = _b.cart;
            setCart(cart);
            return [2
            /*return*/
            , customer];
        }
      });
    });
  },
  changePassword: function changePassword(_a) {
    var currentUser = _a.currentUser,
        currentPassword = _a.currentPassword,
        newPassword = _a.newPassword;
    return __awaiter(this, void 0, void 0, function () {
      var loadedUser, userResponse;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            return [4
            /*yield*/
            , getCurrentUser(currentUser)];

          case 1:
            loadedUser = _b.sent();
            return [4
            /*yield*/
            , Object(_vue_storefront_commercetools_api__WEBPACK_IMPORTED_MODULE_0__["customerChangeMyPassword"])(loadedUser.version, currentPassword, newPassword)];

          case 2:
            userResponse = _b.sent(); // we do need to re-authenticate user to acquire new token - otherwise all subsequent requests will fail as unauthorized

            return [4
            /*yield*/
            , this.logOut()];

          case 3:
            // we do need to re-authenticate user to acquire new token - otherwise all subsequent requests will fail as unauthorized
            _b.sent();

            return [4
            /*yield*/
            , params$2.logIn({
              username: userResponse.data.user.email,
              password: newPassword
            })];

          case 4:
            return [2
            /*return*/
            , _b.sent()];
        }
      });
    });
  }
};

var _a$1 = Object(_vue_storefront_core__WEBPACK_IMPORTED_MODULE_1__["useUserFactory"])(params$2),
    useUser = _a$1.useUser,
    setUser = _a$1.setUser;

var params$3 = {
  searchOrders: function (params, customQuery) {
    if (params === void 0) {
      params = {};
    }

    return __awaiter(void 0, void 0, void 0, function () {
      var result, _a, data, total;

      var _b;

      return __generator(this, function (_c) {
        switch (_c.label) {
          case 0:
            return [4
            /*yield*/
            , Object(_vue_storefront_commercetools_api__WEBPACK_IMPORTED_MODULE_0__["getOrders"])(params, customQuery)];

          case 1:
            result = _c.sent();
            _a = ((_b = result.data) === null || _b === void 0 ? void 0 : _b.me.orders) || {
              results: [],
              total: 0
            }, data = _a.results, total = _a.total;
            return [2
            /*return*/
            , {
              data: data,
              total: total
            }];
        }
      });
    });
  }
};
var index$1 = Object(_vue_storefront_core__WEBPACK_IMPORTED_MODULE_1__["useUserOrdersFactory"])(params$3);
/* istanbul ignore file */

var wishlist = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_2__["ref"])(null); // @todo: implement wishlist
// https://github.com/DivanteLtd/vue-storefront/issues/4420

var params$4 = {
  loadWishlist: function () {
    return __awaiter(void 0, void 0, void 0, function () {
      return __generator(this, function (_a) {
        return [2
        /*return*/
        , {}];
      });
    });
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  addToWishlist: function (_a) {
    var currentWishlist = _a.currentWishlist,
        product = _a.product;
    return __awaiter(void 0, void 0, void 0, function () {
      return __generator(this, function (_b) {
        return [2
        /*return*/
        , {}];
      });
    });
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  removeFromWishlist: function (_a) {
    var currentWishlist = _a.currentWishlist,
        product = _a.product;
    return __awaiter(void 0, void 0, void 0, function () {
      return __generator(this, function (_b) {
        return [2
        /*return*/
        , {}];
      });
    });
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  clearWishlist: function (_a) {
    var currentWishlist = _a.currentWishlist;
    return __awaiter(void 0, void 0, void 0, function () {
      return __generator(this, function (_b) {
        return [2
        /*return*/
        , {}];
      });
    });
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  isOnWishlist: function (_a) {
    var currentWishlist = _a.currentWishlist;
    return false;
  }
};

var _a$2 = Object(_vue_storefront_core__WEBPACK_IMPORTED_MODULE_1__["useWishlistFactory"])(params$4),
    setWishlist = _a$2.setWishlist,
    useWishlist = _a$2.useWishlist;
/* istanbul ignore file */
// eslint-disable-next-line @typescript-eslint/no-unused-vars


var getItems = function (review) {
  return [];
}; // eslint-disable-next-line @typescript-eslint/no-unused-vars


var getReviewId = function (item) {
  return '';
}; // eslint-disable-next-line @typescript-eslint/no-unused-vars


var getReviewAuthor = function (item) {
  return '';
}; // eslint-disable-next-line @typescript-eslint/no-unused-vars


var getReviewMessage = function (item) {
  return '';
}; // eslint-disable-next-line @typescript-eslint/no-unused-vars


var getReviewRating = function (item) {
  return 0;
}; // eslint-disable-next-line @typescript-eslint/no-unused-vars


var getReviewDate = function (item) {
  return '';
}; // eslint-disable-next-line @typescript-eslint/no-unused-vars


var getTotalReviews = function (review) {
  return 0;
}; // eslint-disable-next-line @typescript-eslint/no-unused-vars


var getAverageRating = function (review) {
  return 0;
}; // eslint-disable-next-line @typescript-eslint/no-unused-vars


var getRatesCount = function (review) {
  return [];
}; // eslint-disable-next-line @typescript-eslint/no-unused-vars


var getReviewsPage = function (review) {
  return 1;
};

var reviewGetters = {
  getItems: getItems,
  getReviewId: getReviewId,
  getReviewAuthor: getReviewAuthor,
  getReviewMessage: getReviewMessage,
  getReviewRating: getReviewRating,
  getReviewDate: getReviewDate,
  getTotalReviews: getTotalReviews,
  getAverageRating: getAverageRating,
  getRatesCount: getRatesCount,
  getReviewsPage: getReviewsPage
};
/* istanbul ignore file */

var params$5 = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  searchReviews: function (params) {
    return __awaiter(void 0, void 0, void 0, function () {
      return __generator(this, function (_a) {
        console.log('Mocked: searchReviews');
        return [2
        /*return*/
        , {}];
      });
    });
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  addReview: function (params) {
    return __awaiter(void 0, void 0, void 0, function () {
      return __generator(this, function (_a) {
        console.log('Mocked: addReview');
        return [2
        /*return*/
        , {}];
      });
    });
  }
};
var useReview = Object(_vue_storefront_core__WEBPACK_IMPORTED_MODULE_1__["useReviewFactory"])(params$5); // TODO: move to the config file

var ITEMS_PER_PAGE = [20, 40, 100];
var factoryParams = {
  search: function (params) {
    return __awaiter(void 0, void 0, void 0, function () {
      var itemsPerPage, categoryResponse, categories, inputFilters, filters, productResponse, enhancedProductResponse, products, facets;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            itemsPerPage = params.input.itemsPerPage;
            return [4
            /*yield*/
            , Object(_vue_storefront_commercetools_api__WEBPACK_IMPORTED_MODULE_0__["getCategory"])({
              slug: params.input.categorySlug
            })];

          case 1:
            categoryResponse = _a.sent();
            categories = categoryResponse.data.categories.results;
            inputFilters = params.input.filters;
            filters = Object.keys(inputFilters).reduce(function (prev, curr) {
              return __spreadArrays(prev, inputFilters[curr].map(function (value) {
                return {
                  type: _vue_storefront_commercetools_api__WEBPACK_IMPORTED_MODULE_0__["AttributeType"].STRING,
                  name: curr,
                  value: value
                };
              }));
            }, []);
            return [4
            /*yield*/
            , Object(_vue_storefront_commercetools_api__WEBPACK_IMPORTED_MODULE_0__["getProduct"])({
              catId: categories[0].id,
              limit: itemsPerPage,
              offset: (params.input.page - 1) * itemsPerPage,
              filters: filters // TODO: https://github.com/DivanteLtd/vue-storefront/issues/4857
              // sort: params.sort

            })];

          case 2:
            productResponse = _a.sent();
            enhancedProductResponse = enhanceProduct(productResponse);
            products = enhancedProductResponse.data._variants;
            facets = getFiltersFromProductsAttributes(products);
            return [2
            /*return*/
            , {
              products: products,
              categories: categories,
              facets: facets,
              total: productResponse.data.products.total,
              perPageOptions: ITEMS_PER_PAGE,
              itemsPerPage: itemsPerPage
            }];
        }
      });
    });
  }
};
var index$2 = Object(_vue_storefront_core__WEBPACK_IMPORTED_MODULE_1__["useFacetFactory"])(factoryParams);
var addresses = [{
  id: 1,
  firstName: 'John',
  lastName: 'Doe',
  streetName: 'Warsawska',
  streetNumber: '24',
  apartment: '193A',
  city: 'Phoenix',
  state: null,
  postalCode: '26-620',
  country: 'US',
  phone: '560123456',
  email: '',
  company: '',
  isDefault: true
}, {
  id: 2,
  firstName: 'Jonatan',
  lastName: 'Doe',
  streetName: 'Starachowicka',
  streetNumber: '20',
  apartment: '193A',
  city: 'Atlanta',
  state: null,
  postalCode: '53-603',
  country: 'US',
  phone: '560123456',
  email: '',
  company: '',
  isDefault: true
}];
var shipping = {
  addresses: addresses
};

var findBiggestId = function () {
  return addresses.reduce(function (highest, _a) {
    var id = _a.id;
    return Math.max(highest, id);
  }, 0);
};

var disableOldDefault = function () {
  var oldDefault = addresses.find(function (address) {
    return address.isDefault;
  });

  if (oldDefault) {
    oldDefault.isDefault = false;
  }
};

var sortDefaultAtTop = function (a, b) {
  if (a.isDefault) {
    return -1;
  } else if (b.isDefault) {
    return 1;
  }

  return 0;
};

var params$6 = {
  addAddress: function (params) {
    return __awaiter(void 0, void 0, void 0, function () {
      var newAddress;
      return __generator(this, function (_a) {
        console.log('Mocked: addAddress', params.address);
        newAddress = __assign(__assign({}, params.address), {
          id: findBiggestId() + 1
        });

        if (params.address.isDefault) {
          disableOldDefault();
          addresses.unshift(newAddress);
        } else {
          addresses.push(newAddress);
        }

        return [2
        /*return*/
        , Promise.resolve(shipping)];
      });
    });
  },
  deleteAddress: function (params) {
    return __awaiter(void 0, void 0, void 0, function () {
      var indexToRemove;
      return __generator(this, function (_a) {
        console.log('Mocked: deleteAddress', params);
        indexToRemove = addresses.findIndex(function (address) {
          return address.id === params.address.id;
        });

        if (indexToRemove < 0) {
          return [2
          /*return*/
          , Promise.reject('This address does not exist')];
        }

        addresses.splice(indexToRemove, 1);
        return [2
        /*return*/
        , Promise.resolve(shipping)];
      });
    });
  },
  updateAddress: function (params) {
    return __awaiter(void 0, void 0, void 0, function () {
      var indexToUpdate, isNewDefault;
      return __generator(this, function (_a) {
        console.log('Mocked: updateAddress', params);
        indexToUpdate = addresses.findIndex(function (address) {
          return address.id === params.address.id;
        });

        if (indexToUpdate < 0) {
          return [2
          /*return*/
          , Promise.reject('This address does not exist')];
        }

        isNewDefault = params.address.isDefault && addresses[0].id !== params.address.id;

        if (isNewDefault) {
          disableOldDefault();
        }

        addresses[indexToUpdate] = params.address;

        if (isNewDefault) {
          addresses.sort(sortDefaultAtTop);
        }

        return [2
        /*return*/
        , Promise.resolve(shipping)];
      });
    });
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  load: function (params) {
    return __awaiter(void 0, void 0, void 0, function () {
      return __generator(this, function (_a) {
        console.log('Mocked: load');
        return [2
        /*return*/
        , Promise.resolve(shipping)];
      });
    });
  },
  setDefault: function (params) {
    return __awaiter(void 0, void 0, void 0, function () {
      var isDefault, indexToUpdate;
      return __generator(this, function (_a) {
        console.log('Mocked: setDefault');

        isDefault = function (id) {
          return addresses[0].id === id;
        };

        if (!isDefault(params.address.id)) {
          indexToUpdate = addresses.findIndex(function (address) {
            return address.id === params.address.id;
          });

          if (indexToUpdate < 0) {
            return [2
            /*return*/
            , Promise.reject('This address does not exist')];
          }

          disableOldDefault();
          addresses[indexToUpdate].isDefault = true;
          addresses.sort(sortDefaultAtTop);
        }

        return [2
        /*return*/
        , Promise.resolve(shipping)];
      });
    });
  }
};
var useUserShipping = Object(_vue_storefront_core__WEBPACK_IMPORTED_MODULE_1__["useUserShippingFactory"])(params$6).useUserShipping;
var addresses$1 = [{
  id: 1,
  firstName: 'John',
  lastName: 'Doe',
  streetName: 'Warsawska',
  streetNumber: '24',
  apartment: '193A',
  city: 'Phoenix',
  state: null,
  postalCode: '26-620',
  country: 'US',
  phone: '560123456',
  email: '',
  company: '',
  isDefault: true
}, {
  id: 2,
  firstName: 'Jonatan',
  lastName: 'Doe',
  streetName: 'Starachowicka',
  streetNumber: '20',
  apartment: '193A',
  city: 'Atlanta',
  state: null,
  postalCode: '53-603',
  country: 'US',
  phone: '560123456',
  email: '',
  company: '',
  isDefault: true
}];
var billing = {
  addresses: addresses$1
};

var findBiggestId$1 = function () {
  return addresses$1.reduce(function (highest, _a) {
    var id = _a.id;
    return Math.max(highest, id);
  }, 0);
};

var disableOldDefault$1 = function () {
  var oldDefault = addresses$1.find(function (address) {
    return address.isDefault;
  });

  if (oldDefault) {
    oldDefault.isDefault = false;
  }
};

var sortDefaultAtTop$1 = function (a, b) {
  if (a.isDefault) {
    return -1;
  } else if (b.isDefault) {
    return 1;
  }

  return 0;
};

var params$7 = {
  addAddress: function (params) {
    return __awaiter(void 0, void 0, void 0, function () {
      var newAddress;
      return __generator(this, function (_a) {
        console.log('Mocked: addAddress', params.address);
        newAddress = __assign(__assign({}, params.address), {
          id: findBiggestId$1() + 1
        });

        if (params.address.isDefault) {
          disableOldDefault$1();
          addresses$1.unshift(newAddress);
        } else {
          addresses$1.push(newAddress);
        }

        return [2
        /*return*/
        , Promise.resolve(billing)];
      });
    });
  },
  deleteAddress: function (params) {
    return __awaiter(void 0, void 0, void 0, function () {
      var indexToRemove;
      return __generator(this, function (_a) {
        console.log('Mocked: deleteAddress', params);
        indexToRemove = addresses$1.findIndex(function (address) {
          return address.id === params.address.id;
        });

        if (indexToRemove < 0) {
          return [2
          /*return*/
          , Promise.reject('This address does not exist')];
        }

        addresses$1.splice(indexToRemove, 1);
        return [2
        /*return*/
        , Promise.resolve(billing)];
      });
    });
  },
  updateAddress: function (params) {
    return __awaiter(void 0, void 0, void 0, function () {
      var indexToUpdate, isNewDefault;
      return __generator(this, function (_a) {
        console.log('Mocked: updateAddress', params);
        indexToUpdate = addresses$1.findIndex(function (address) {
          return address.id === params.address.id;
        });

        if (indexToUpdate < 0) {
          return [2
          /*return*/
          , Promise.reject('This address does not exist')];
        }

        isNewDefault = params.address.isDefault && addresses$1[0].id !== params.address.id;

        if (isNewDefault) {
          disableOldDefault$1();
        }

        addresses$1[indexToUpdate] = params.address;

        if (isNewDefault) {
          addresses$1.sort(sortDefaultAtTop$1);
        }

        return [2
        /*return*/
        , Promise.resolve(billing)];
      });
    });
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  load: function (params) {
    return __awaiter(void 0, void 0, void 0, function () {
      return __generator(this, function (_a) {
        console.log('Mocked: load');
        return [2
        /*return*/
        , Promise.resolve(billing)];
      });
    });
  },
  setDefault: function (params) {
    return __awaiter(void 0, void 0, void 0, function () {
      var isDefault, indexToUpdate;
      return __generator(this, function (_a) {
        console.log('Mocked: setDefault');

        isDefault = function (id) {
          return addresses$1[0].id === id;
        };

        if (!isDefault(params.address.id)) {
          indexToUpdate = addresses$1.findIndex(function (address) {
            return address.id === params.address.id;
          });

          if (indexToUpdate < 0) {
            return [2
            /*return*/
            , Promise.reject('This address does not exist')];
          }

          disableOldDefault$1();
          addresses$1[indexToUpdate].isDefault = true;
          addresses$1.sort(sortDefaultAtTop$1);
        }

        return [2
        /*return*/
        , Promise.resolve(billing)];
      });
    });
  }
};
var useUserBilling = Object(_vue_storefront_core__WEBPACK_IMPORTED_MODULE_1__["useUserBillingFactory"])(params$7).useUserBilling;

var getProductName = function (product) {
  var _a;

  return ((_a = product) === null || _a === void 0 ? void 0 : _a._name) || '';
};

var getProductSlug = function (product) {
  var _a;

  return ((_a = product) === null || _a === void 0 ? void 0 : _a._slug) || '';
};

var getProductPrice = function (product) {
  return createPrice(product);
};

var getProductGallery = function (product) {
  var images = (product === null || product === void 0 ? void 0 : product.images) || [];
  return images.map(function (image) {
    return {
      small: image.url,
      big: image.url,
      normal: image.url
    };
  });
};

var getProductCoverImage = function (product) {
  var _a, _b;

  return ((_b = (_a = product === null || product === void 0 ? void 0 : product.images) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.url) || '';
};

var getProductFiltered = function (products, filters) {
  if (filters === void 0) {
    filters = {};
  }

  if (!products) {
    return [];
  }

  if (filters.attributes && Object.keys(filters.attributes).length > 0) {
    return [getVariantByAttributes(products, filters.attributes)];
  }

  if (filters.master) {
    return products.filter(function (product) {
      return product._master;
    });
  }

  return products;
};

var getProductAttributes = function (products, filterByAttributeName) {
  var isSingleProduct = !Array.isArray(products);
  var productList = isSingleProduct ? [products] : products;

  if (!products || productList.length === 0) {
    return {};
  }

  var formatAttributes = function (product) {
    return formatAttributeList(product.attributeList).filter(function (attribute) {
      return filterByAttributeName ? filterByAttributeName.includes(attribute.name) : attribute;
    });
  };

  var reduceToUniques = function (prev, curr) {
    var isAttributeExist = prev.some(function (el) {
      return el.name === curr.name && el.value === curr.value;
    });

    if (!isAttributeExist) {
      return __spreadArrays(prev, [curr]);
    }

    return prev;
  };

  var reduceByAttributeName = function (prev, curr) {
    var _a;

    return __assign(__assign({}, prev), (_a = {}, _a[curr.name] = isSingleProduct ? curr.value : __spreadArrays(prev[curr.name] || [], [{
      value: curr.value,
      label: curr.label
    }]), _a));
  };

  return productList.map(function (product) {
    return formatAttributes(product);
  }).reduce(function (prev, curr) {
    return __spreadArrays(prev, curr);
  }, []).reduce(reduceToUniques, []).reduce(reduceByAttributeName, {});
};

var getProductDescription = function (product) {
  var _a;

  return ((_a = product) === null || _a === void 0 ? void 0 : _a._description) || '';
};

var getProductCategoryIds = function (product) {
  var _a;

  return ((_a = product) === null || _a === void 0 ? void 0 : _a._categoriesRef) || '';
};

var getProductId = function (product) {
  var _a;

  return ((_a = product) === null || _a === void 0 ? void 0 : _a._id) || '';
};

var getFormattedPrice = function (price) {
  return createFormatPrice(price);
};

var getTotalReviews$1 = function (product) {
  var _a, _b;

  return ((_b = (_a = product) === null || _a === void 0 ? void 0 : _a._rating) === null || _b === void 0 ? void 0 : _b.count) || 0;
};

var getAverageRating$1 = function (product) {
  var _a, _b;

  return ((_b = (_a = product) === null || _a === void 0 ? void 0 : _a._rating) === null || _b === void 0 ? void 0 : _b.averageRating) || 0;
};

var productGetters = {
  getName: getProductName,
  getSlug: getProductSlug,
  getPrice: getProductPrice,
  getGallery: getProductGallery,
  getCoverImage: getProductCoverImage,
  getFiltered: getProductFiltered,
  getAttributes: getProductAttributes,
  getDescription: getProductDescription,
  getCategoryIds: getProductCategoryIds,
  getId: getProductId,
  getFormattedPrice: getFormattedPrice,
  getTotalReviews: getTotalReviews$1,
  getAverageRating: getAverageRating$1
};

var getCartItems = function (cart) {
  if (!cart) {
    return [];
  }

  return cart.lineItems;
};

var getCartItemName = function (product) {
  return product.name;
};

var getCartItemImage = function (product) {
  return product.variant.images[0].url;
};

var getCartItemPrice = function (product) {
  return createPrice(product);
};

var getCartItemQty = function (product) {
  return product.quantity;
};

var getCartItemAttributes = function (product, filterByAttributeName) {
  return getProductAttributes(product.variant, filterByAttributeName);
};

var getCartItemSku = function (product) {
  return product.variant.sku;
};

var getCartTotals = function (cart) {
  if (!cart) {
    return {
      total: 0,
      subtotal: 0
    };
  }

  var subtotalPrice = cart.totalPrice.centAmount;
  var shipping = cart.shippingInfo ? cart.shippingInfo.price.centAmount : 0;
  return {
    total: (shipping + subtotalPrice) / 100,
    subtotal: subtotalPrice / 100
  };
};

var getCartShippingPrice = function (cart) {
  return cart && cart.shippingInfo ? cart.shippingInfo.price.centAmount / 100 : 0;
};

var getCartTotalItems = function (cart) {
  if (!cart) {
    return 0;
  }

  return cart.lineItems.reduce(function (previous, current) {
    return previous + current.quantity;
  }, 0);
};

var getFormattedPrice$1 = function (price) {
  return createFormatPrice(price);
};

var getCoupons = function (cart) {
  return getCouponsFromCart(cart);
};

var cartGetters = {
  getTotals: getCartTotals,
  getShippingPrice: getCartShippingPrice,
  getItems: getCartItems,
  getItemName: getCartItemName,
  getItemImage: getCartItemImage,
  getItemPrice: getCartItemPrice,
  getItemQty: getCartItemQty,
  getItemAttributes: getCartItemAttributes,
  getItemSku: getCartItemSku,
  getTotalItems: getCartTotalItems,
  getFormattedPrice: getFormattedPrice$1,
  getCoupons: getCoupons
};

var getCategoryTree = function (category) {
  var getRoot = function (category) {
    return category.parent ? getRoot(category.parent) : category;
  };

  var buildTree = function (rootCategory) {
    return {
      label: rootCategory.name,
      slug: rootCategory.slug,
      id: rootCategory.id,
      isCurrent: rootCategory.id === category.id,
      items: rootCategory.children.map(buildTree)
    };
  };

  if (!category) {
    return null;
  }

  return buildTree(getRoot(category));
};

var categoryGetters = {
  getTree: getCategoryTree
};

var getShippingMethodId = function (shippingMethod) {
  return shippingMethod ? shippingMethod.id : '';
};

var getShippingMethodName = function (shippingMethod) {
  return shippingMethod ? shippingMethod.name : '';
};

var getShippingMethodDescription = function (shippingMethod) {
  return shippingMethod ? shippingMethod.description : '';
};

var getShippingMethodPrice = function (shippingMethod) {
  if (!shippingMethod || !shippingMethod.zoneRates) {
    return null;
  }

  return shippingMethod.zoneRates[0].shippingRates[0].price.centAmount / 100;
};

var getFormattedPrice$2 = function (price) {
  return createFormatPrice(price);
};

var checkoutGetters = {
  getShippingMethodId: getShippingMethodId,
  getShippingMethodName: getShippingMethodName,
  getShippingMethodDescription: getShippingMethodDescription,
  getShippingMethodPrice: getShippingMethodPrice,
  getFormattedPrice: getFormattedPrice$2
};

var getUserFirstName = function (user) {
  return (user === null || user === void 0 ? void 0 : user.firstName) || '';
};

var getUserLastName = function (user) {
  return (user === null || user === void 0 ? void 0 : user.lastName) || '';
};

var getUserFullName = function (user) {
  return user ? user.firstName + " " + user.lastName : '';
};

var getUserEmailAddress = function (user) {
  return (user === null || user === void 0 ? void 0 : user.email) || '';
};

var userGetters = {
  getFirstName: getUserFirstName,
  getLastName: getUserLastName,
  getFullName: getUserFullName,
  getEmailAddress: getUserEmailAddress
};
var userShippingGetters = {
  getAddresses: function (shipping, criteria) {
    if (!criteria || !Object.keys(criteria).length) {
      return shipping.addresses;
    }

    var entries = Object.entries(criteria);
    return shipping.addresses.filter(function (address) {
      return entries.every(function (_a) {
        var key = _a[0],
            value = _a[1];
        return address[key] === value;
      });
    });
  },
  getDefault: function (shipping) {
    return shipping.addresses.find(function (_a) {
      var isDefault = _a.isDefault;
      return isDefault;
    });
  },
  getTotal: function (shipping) {
    return shipping.addresses.length;
  },
  getPostCode: function (address) {
    return (address === null || address === void 0 ? void 0 : address.postalCode) || '';
  },
  getStreetName: function (address) {
    return (address === null || address === void 0 ? void 0 : address.streetName) || '';
  },
  getStreetNumber: function (address) {
    return (address === null || address === void 0 ? void 0 : address.streetNumber) || '';
  },
  getCity: function (address) {
    return (address === null || address === void 0 ? void 0 : address.city) || '';
  },
  getFirstName: function (address) {
    return (address === null || address === void 0 ? void 0 : address.firstName) || '';
  },
  getLastName: function (address) {
    return (address === null || address === void 0 ? void 0 : address.lastName) || '';
  },
  getCountry: function (address) {
    return (address === null || address === void 0 ? void 0 : address.country) || '';
  },
  getPhone: function (address) {
    return (address === null || address === void 0 ? void 0 : address.phone) || '';
  },
  getEmail: function (address) {
    return (address === null || address === void 0 ? void 0 : address.email) || '';
  },
  getProvince: function (address) {
    return (address === null || address === void 0 ? void 0 : address.state) || '';
  },
  getCompanyName: function (address) {
    return (address === null || address === void 0 ? void 0 : address.company) || '';
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getTaxNumber: function (address) {
    return '';
  },
  getId: function (address) {
    return (address === null || address === void 0 ? void 0 : address.id) || '';
  },
  getApartmentNumber: function (address) {
    return (address === null || address === void 0 ? void 0 : address.apartment) || '';
  },
  isDefault: function (address) {
    return (address === null || address === void 0 ? void 0 : address.isDefault) || false;
  }
};
var userBillingGetters = {
  getAddresses: function (billing, criteria) {
    if (!criteria || !Object.keys(criteria).length) {
      return billing.addresses;
    }

    var entries = Object.entries(criteria);
    return billing.addresses.filter(function (address) {
      return entries.every(function (_a) {
        var key = _a[0],
            value = _a[1];
        return address[key] === value;
      });
    });
  },
  getDefault: function (billing) {
    return billing.addresses.find(function (_a) {
      var isDefault = _a.isDefault;
      return isDefault;
    });
  },
  getTotal: function (billing) {
    return billing.addresses.length;
  },
  getPostCode: function (address) {
    return (address === null || address === void 0 ? void 0 : address.postalCode) || '';
  },
  getStreetName: function (address) {
    return (address === null || address === void 0 ? void 0 : address.streetName) || '';
  },
  getStreetNumber: function (address) {
    return (address === null || address === void 0 ? void 0 : address.streetNumber) || '';
  },
  getCity: function (address) {
    return (address === null || address === void 0 ? void 0 : address.city) || '';
  },
  getFirstName: function (address) {
    return (address === null || address === void 0 ? void 0 : address.firstName) || '';
  },
  getLastName: function (address) {
    return (address === null || address === void 0 ? void 0 : address.lastName) || '';
  },
  getCountry: function (address) {
    return (address === null || address === void 0 ? void 0 : address.country) || '';
  },
  getPhone: function (address) {
    return (address === null || address === void 0 ? void 0 : address.phone) || '';
  },
  getEmail: function (address) {
    return (address === null || address === void 0 ? void 0 : address.email) || '';
  },
  getProvince: function (address) {
    return (address === null || address === void 0 ? void 0 : address.state) || '';
  },
  getCompanyName: function (address) {
    return (address === null || address === void 0 ? void 0 : address.company) || '';
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getTaxNumber: function (address) {
    return '';
  },
  getId: function (address) {
    return (address === null || address === void 0 ? void 0 : address.id) || '';
  },
  getApartmentNumber: function (address) {
    return (address === null || address === void 0 ? void 0 : address.apartment) || '';
  },
  isDefault: function (address) {
    return (address === null || address === void 0 ? void 0 : address.isDefault) || false;
  }
};
/* istanbul ignore file */

var AnonymousCartSignInMode;

(function (AnonymousCartSignInMode) {
  /** The anonymous cart is used as new active customer cart. No `LineItem`s get merged. */
  AnonymousCartSignInMode["UseAsNewActiveCustomerCart"] = "UseAsNewActiveCustomerCart";
  /** `LineItem`s of the anonymous cart will be copied to the customer’s active cart that has been modified most recently.
   *
   * The `CartState` of the anonymous cart gets changed to `Merged` while the
   * `CartState` of the customer’s cart remains `Active`.
   *
   * `CustomLineItems` and `CustomFields` of the anonymous cart will not be copied to the customers cart.
   *
   * If a `LineItem` in the anonymous cart matches an existing line item in the
   * customer’s cart (same product ID and variant ID), the maximum quantity of both
   * LineItems is used as the new quantity. In that case `CustomFields` on the
   * `LineItem` of the anonymous cart will not be in the resulting `LineItem`.
   */

  AnonymousCartSignInMode["MergeWithExistingCustomerCart"] = "MergeWithExistingCustomerCart";
})(AnonymousCartSignInMode || (AnonymousCartSignInMode = {}));

var AttributeConstraint;

(function (AttributeConstraint) {
  /** No constraints are applied to the attribute */
  AttributeConstraint["None"] = "None";
  /** Attribute value should be different in each variant */

  AttributeConstraint["Unique"] = "Unique";
  /** A set of attributes, that have this constraint, should have different combinations in each variant */

  AttributeConstraint["CombinationUnique"] = "CombinationUnique";
  /** Attribute value should be the same in all variants */

  AttributeConstraint["SameForAll"] = "SameForAll";
})(AttributeConstraint || (AttributeConstraint = {}));

var CartOrigin;

(function (CartOrigin) {
  /** The cart was created by the merchant on behalf of the customer */
  CartOrigin["Merchant"] = "Merchant";
  /** The cart was created by the customer. This is the default value */

  CartOrigin["Customer"] = "Customer";
})(CartOrigin || (CartOrigin = {}));

var CartState;

(function (CartState) {
  /** The cart was ordered. No further operations on the cart are allowed. */
  CartState["Ordered"] = "Ordered";
  /** Anonymous cart whose content was merged into a customers cart on signin. No further operations on the cart are allowed. */

  CartState["Merged"] = "Merged";
  /** The cart can be updated and ordered. It is the default state. */

  CartState["Active"] = "Active";
})(CartState || (CartState = {}));

var ChannelRole;

(function (ChannelRole) {
  /** Role tells that this channel can be used to track inventory entries.Channels with this role can be treated as warehouses */
  ChannelRole["InventorySupply"] = "InventorySupply";
  /** Role tells that this channel can be used to expose products to a specific
   * distribution channel. It can be used by the cart to select a product price.
   */

  ChannelRole["ProductDistribution"] = "ProductDistribution";
  /** Role tells that this channel can be used to track order export activities. */

  ChannelRole["OrderExport"] = "OrderExport";
  /** Role tells that this channel can be used to track order import activities. */

  ChannelRole["OrderImport"] = "OrderImport";
  /** This role can be combined with some other roles (e.g. with `InventorySupply`)
   * to represent the fact that this particular channel is the primary/master
   * channel among the channels of the same type.
   */

  ChannelRole["Primary"] = "Primary";
})(ChannelRole || (ChannelRole = {}));

var DiscountCodeState;

(function (DiscountCodeState) {
  /** The discount code is active and none of the discounts were applied because the
   * discount application was stopped by one discount that has the StackingMode of
   * StopAfterThisDiscount defined
   */
  DiscountCodeState["ApplicationStoppedByPreviousDiscount"] = "ApplicationStoppedByPreviousDiscount";
  /** The discount code is not valid or it does not contain any valid cart
   * discounts. Validity is determined based on the validFrom and validUntil dates
   */

  DiscountCodeState["NotValid"] = "NotValid";
  /** maxApplications or maxApplicationsPerCustomer for discountCode has been reached. */

  DiscountCodeState["MaxApplicationReached"] = "MaxApplicationReached";
  /** The discount code is active and it contains at least one active and valid
   * CartDiscount. The discount code cartPredicate matches the cart and at least
   * one of the contained active discount’s cart predicates matches the cart.
   */

  DiscountCodeState["MatchesCart"] = "MatchesCart";
  /** The discount code is active and it contains at least one active and valid
   * CartDiscount. But its cart predicate does not match the cart or none of the
   * contained active discount’s cart predicates match the cart
   */

  DiscountCodeState["DoesNotMatchCart"] = "DoesNotMatchCart";
  /** The discount code is not active or it does not contain any active cart discounts. */

  DiscountCodeState["NotActive"] = "NotActive";
})(DiscountCodeState || (DiscountCodeState = {}));

var InventoryMode;

(function (InventoryMode) {
  /** Adding items to cart and ordering is independent of inventory. No inventory checks or modifications.
   * This is the default mode for a new cart.
   */
  InventoryMode["None"] = "None";
  /** Creating an order will fail with an OutOfStock error if an unavailable line item exists. Line items in the cart
   * are only reserved for the duration of the ordering transaction.
   */

  InventoryMode["ReserveOnOrder"] = "ReserveOnOrder";
  /** Orders are tracked on inventory. That means, ordering a LineItem will decrement the available quantity on the
   * respective InventoryEntry. Creating an order will succeed even if the line item’s available quantity is zero or
   * negative. But creating an order will fail with an OutOfStock error if no matching inventory entry exists for a
   * line item.
   */

  InventoryMode["TrackOnly"] = "TrackOnly";
})(InventoryMode || (InventoryMode = {}));

var LineItemMode;

(function (LineItemMode) {
  /** The line item was added automatically, because a discount has added a free gift to the cart.
   * The quantity can not be increased, and it won’t be merged when the same product variant is added.
   * If the gift is removed, an entry is added to the "refusedGifts" array and the discount won’t be applied again
   * to the cart. The price can not be changed externally.
   * All other updates, such as the ones related to custom fields, can be used.
   */
  LineItemMode["GiftLineItem"] = "GiftLineItem";
  /** The line item was added during cart creation or with the update action addLineItem. Its quantity can be
   * changed without restrictions.
   */

  LineItemMode["Standard"] = "Standard";
})(LineItemMode || (LineItemMode = {}));

var LineItemPriceMode;

(function (LineItemPriceMode) {
  /** The price is selected form the product variant. This is the default mode. */
  LineItemPriceMode["Platform"] = "Platform";
  /** The line item price was set externally. Cart discounts can apply to line items
   * with this price mode. All update actions that change the quantity of a line
   * item with this price mode require the externalPrice field to be given.
   */

  LineItemPriceMode["ExternalPrice"] = "ExternalPrice";
  /** The line item price with the total was set externally. */

  LineItemPriceMode["ExternalTotal"] = "ExternalTotal";
})(LineItemPriceMode || (LineItemPriceMode = {}));

var OrderState;

(function (OrderState) {
  OrderState["Confirmed"] = "Confirmed";
  OrderState["Cancelled"] = "Cancelled";
  OrderState["Complete"] = "Complete";
  OrderState["Open"] = "Open";
})(OrderState || (OrderState = {}));

var PaymentState;

(function (PaymentState) {
  PaymentState["Paid"] = "Paid";
  PaymentState["CreditOwed"] = "CreditOwed";
  PaymentState["Pending"] = "Pending";
  PaymentState["Failed"] = "Failed";
  PaymentState["BalanceDue"] = "BalanceDue";
})(PaymentState || (PaymentState = {}));

var PublishScope;

(function (PublishScope) {
  /** Publishes the complete staged projection */
  PublishScope["All"] = "All";
  /** Publishes only prices on the staged projection */

  PublishScope["Prices"] = "Prices";
})(PublishScope || (PublishScope = {}));

var ReturnPaymentState;

(function (ReturnPaymentState) {
  ReturnPaymentState["NotRefunded"] = "NotRefunded";
  ReturnPaymentState["Refunded"] = "Refunded";
  ReturnPaymentState["Initial"] = "Initial";
  ReturnPaymentState["NonRefundable"] = "NonRefundable";
})(ReturnPaymentState || (ReturnPaymentState = {}));

var ReturnShipmentState;

(function (ReturnShipmentState) {
  ReturnShipmentState["Unusable"] = "Unusable";
  ReturnShipmentState["BackInStock"] = "BackInStock";
  ReturnShipmentState["Returned"] = "Returned";
  ReturnShipmentState["Advised"] = "Advised";
})(ReturnShipmentState || (ReturnShipmentState = {}));

var RoundingMode;

(function (RoundingMode) {
  /** [Round half down](https://en.wikipedia.org/wiki/Rounding#Round_half_down).
   * Rounding mode used by, e.g., [Avalara Sales TaxII](https://help.avalara.com/kb/001/How_does_Rounding_with_SalesTaxII_work%3F)
   */
  RoundingMode["HalfDown"] = "HalfDown";
  /** [Round half up](https://en.wikipedia.org/wiki/Rounding#Round_half_up) */

  RoundingMode["HalfUp"] = "HalfUp";
  /** [Round half to even](https://en.wikipedia.org/wiki/Rounding#Round_half_to_even).
   * Default rounding mode as used in IEEE 754 computing functions and operators.
   */

  RoundingMode["HalfEven"] = "HalfEven";
})(RoundingMode || (RoundingMode = {}));
/** In order to decide which of the matching items will actually be discounted */


var SelectionMode;

(function (SelectionMode) {
  SelectionMode["MostExpensive"] = "MostExpensive";
  SelectionMode["Cheapest"] = "Cheapest";
})(SelectionMode || (SelectionMode = {}));

var ShipmentState;

(function (ShipmentState) {
  ShipmentState["Delayed"] = "Delayed";
  ShipmentState["Backorder"] = "Backorder";
  ShipmentState["Partial"] = "Partial";
  ShipmentState["Pending"] = "Pending";
  ShipmentState["Ready"] = "Ready";
  ShipmentState["Shipped"] = "Shipped";
})(ShipmentState || (ShipmentState = {}));

var ShippingMethodState;

(function (ShippingMethodState) {
  /** Either there is no predicate defined for the ShippingMethod or the given predicate matches the cart */
  ShippingMethodState["MatchesCart"] = "MatchesCart";
  /** The ShippingMethod predicate does not match the cart. Ordering this cart will
   * fail with error ShippingMethodDoesNotMatchCart
   */

  ShippingMethodState["DoesNotMatchCart"] = "DoesNotMatchCart";
})(ShippingMethodState || (ShippingMethodState = {}));
/** Describes how this discount interacts with other discounts */


var StackingMode;

(function (StackingMode) {
  /** Don’t apply any more matching discounts after this one. */
  StackingMode["StopAfterThisDiscount"] = "StopAfterThisDiscount";
  /** Default. Continue applying other matching discounts after applying this one. */

  StackingMode["Stacking"] = "Stacking";
})(StackingMode || (StackingMode = {}));

var StateRole;

(function (StateRole) {
  StateRole["Return"] = "Return";
  StateRole["ReviewIncludedInStatistics"] = "ReviewIncludedInStatistics";
})(StateRole || (StateRole = {}));

var StateType;

(function (StateType) {
  StateType["OrderState"] = "OrderState";
  StateType["ProductState"] = "ProductState";
  StateType["ReviewState"] = "ReviewState";
  StateType["PaymentState"] = "PaymentState";
  StateType["LineItemState"] = "LineItemState";
})(StateType || (StateType = {}));

var TaxCalculationMode;

(function (TaxCalculationMode) {
  /** This calculation mode calculates the taxes on the unit price before multiplying with the quantity.
   * E.g. `($1.08 * 1.19 = $1.2852 -> $1.29 rounded) * 3 = $3.87`
   */
  TaxCalculationMode["UnitPriceLevel"] = "UnitPriceLevel";
  /** Default. This calculation mode calculates the taxes after the unit price is multiplied with the quantity.
   * E.g. `($1.08 * 3 = $3.24) * 1.19 = $3.8556 -> $3.86 rounded`
   */

  TaxCalculationMode["LineItemLevel"] = "LineItemLevel";
})(TaxCalculationMode || (TaxCalculationMode = {}));

var TaxMode;

(function (TaxMode) {
  /** No taxes are added to the cart. */
  TaxMode["Disabled"] = "Disabled";
  /** The tax amounts and the tax rates as well as the tax portions are set externally per ExternalTaxAmountDraft.
   * A cart with this tax mode can only be ordered if the cart itself and all line items, all custom line items and
   * the shipping method have an external tax amount and rate set
   */

  TaxMode["ExternalAmount"] = "ExternalAmount";
  /** The tax rates are set externally per ExternalTaxRateDraft. A cart with this tax mode can only be ordered if all
   * line items, all custom line items and the shipping method have an external tax rate set. The totalNet and
   * totalGross as well as the taxPortions fields are calculated by the platform according to the taxRoundingMode.
   */

  TaxMode["External"] = "External";
  /** The tax rates are selected by the platform from the TaxCategories based on the cart shipping address.
   * The totalNet and totalGross as well as the taxPortions fields are calculated by the platform according to the
   * taxRoundingMode.
   */

  TaxMode["Platform"] = "Platform";
})(TaxMode || (TaxMode = {}));
/** UI hint telling what kind of edit control should be displayed for a text attribute. */


var TextInputHint;

(function (TextInputHint) {
  TextInputHint["MultiLine"] = "MultiLine";
  TextInputHint["SingleLine"] = "SingleLine";
})(TextInputHint || (TextInputHint = {}));

var TransactionState;

(function (TransactionState) {
  TransactionState["Failure"] = "Failure";
  TransactionState["Success"] = "Success";
  TransactionState["Pending"] = "Pending";
  TransactionState["Initial"] = "Initial";
})(TransactionState || (TransactionState = {}));

var TransactionType;

(function (TransactionType) {
  TransactionType["Chargeback"] = "Chargeback";
  TransactionType["Refund"] = "Refund";
  TransactionType["Charge"] = "Charge";
  TransactionType["CancelAuthorization"] = "CancelAuthorization";
  TransactionType["Authorization"] = "Authorization";
})(TransactionType || (TransactionType = {}));

var _a$3;

var getOrderDate = function (order) {
  return (order === null || order === void 0 ? void 0 : order.createdAt) || '';
};

var getOrderId = function (order) {
  return (order === null || order === void 0 ? void 0 : order.id) || '';
};

var orderStatusMap = (_a$3 = {}, _a$3[OrderState.Open] = _vue_storefront_core__WEBPACK_IMPORTED_MODULE_1__["AgnosticOrderStatus"].Open, _a$3[OrderState.Confirmed] = _vue_storefront_core__WEBPACK_IMPORTED_MODULE_1__["AgnosticOrderStatus"].Confirmed, _a$3[OrderState.Complete] = _vue_storefront_core__WEBPACK_IMPORTED_MODULE_1__["AgnosticOrderStatus"].Complete, _a$3[OrderState.Cancelled] = _vue_storefront_core__WEBPACK_IMPORTED_MODULE_1__["AgnosticOrderStatus"].Cancelled, _a$3);

var getOrderStatus = function (order) {
  return (order === null || order === void 0 ? void 0 : order.orderState) ? orderStatusMap[order.orderState] : '';
};

var getOrderPrice = function (order) {
  return order ? order.totalPrice.centAmount / 100 : 0;
};

var getOrderItems = function (order) {
  return (order === null || order === void 0 ? void 0 : order.lineItems) || [];
};

var getOrderItemSku = function (item) {
  return (item === null || item === void 0 ? void 0 : item.productId) || '';
};

var getOrderItemName = function (item) {
  return (item === null || item === void 0 ? void 0 : item.name) || '';
};

var getOrderItemQty = function (item) {
  return (item === null || item === void 0 ? void 0 : item.quantity) || 0;
};

var getFormattedPrice$3 = function (price) {
  return createFormatPrice(price);
};

var orderGetters = {
  getDate: getOrderDate,
  getId: getOrderId,
  getStatus: getOrderStatus,
  getPrice: getOrderPrice,
  getItems: getOrderItems,
  getItemSku: getOrderItemSku,
  getItemName: getOrderItemName,
  getItemQty: getOrderItemQty,
  getFormattedPrice: getFormattedPrice$3
};
/* istanbul ignore file */
// eslint-disable-next-line @typescript-eslint/no-unused-vars

var getWishlistItems = function (wishlist) {
  return [];
}; // eslint-disable-next-line @typescript-eslint/no-unused-vars


var getWishlistItemName = function (product) {
  return '';
}; // eslint-disable-next-line @typescript-eslint/no-unused-vars


var getWishlistItemImage = function (product) {
  return '';
}; // eslint-disable-next-line @typescript-eslint/no-unused-vars


var getWishlistItemPrice = function (product) {
  return {
    regular: 0,
    special: 0
  };
}; // eslint-disable-next-line @typescript-eslint/no-unused-vars


var getWishlistItemQty = function (product) {
  return 1;
}; // eslint-disable-next-line @typescript-eslint/no-unused-vars


var getWishlistItemAttributes = function (product, filterByAttributeName) {
  return {
    '': ''
  };
}; // eslint-disable-next-line @typescript-eslint/no-unused-vars


var getWishlistItemSku = function (product) {
  return '';
}; // eslint-disable-next-line @typescript-eslint/no-unused-vars


var getWishlistTotals = function (wishlist) {
  return {
    total: 0,
    subtotal: 0
  };
}; // eslint-disable-next-line @typescript-eslint/no-unused-vars


var getWishlistShippingPrice = function (wishlist) {
  return 0;
}; // eslint-disable-next-line @typescript-eslint/no-unused-vars


var getWishlistTotalItems = function (wishlist) {
  return 0;
}; // eslint-disable-next-line @typescript-eslint/no-unused-vars


var getFormattedPrice$4 = function (price) {
  return '';
};

var wishlistGetters = {
  getTotals: getWishlistTotals,
  getShippingPrice: getWishlistShippingPrice,
  getItems: getWishlistItems,
  getItemName: getWishlistItemName,
  getItemImage: getWishlistItemImage,
  getItemPrice: getWishlistItemPrice,
  getItemQty: getWishlistItemQty,
  getItemAttributes: getWishlistItemAttributes,
  getItemSku: getWishlistItemSku,
  getTotalItems: getWishlistTotalItems,
  getFormattedPrice: getFormattedPrice$4
};

var buildBreadcrumbsList = function (rootCat, bc) {
  var newBc = __spreadArrays(bc, [{
    text: rootCat.name,
    link: rootCat.slug
  }]);

  return rootCat.parent ? buildBreadcrumbsList(rootCat.parent, newBc) : newBc;
};

var buildBreadcrumbs = function (rootCat) {
  return buildBreadcrumbsList(rootCat, []).reverse().reduce(function (prev, curr, index) {
    var _a;

    return __spreadArrays(prev, [__assign(__assign({}, curr), {
      link: (((_a = prev[index - 1]) === null || _a === void 0 ? void 0 : _a.link) || '') + "/" + curr.link
    })]);
  }, []);
};

var filterFacets = function (criteria) {
  return function (f) {
    return criteria ? criteria.includes(f) : true;
  };
};

var createFacetsFromOptions = function (facets, filters, filterKey) {
  var _a;

  var options = ((_a = facets[filterKey]) === null || _a === void 0 ? void 0 : _a.options) || [];
  var selectedList = filters && filters[filterKey] ? filters[filterKey] : [];
  return options.map(function (_a) {
    var label = _a.label,
        value = _a.value;
    return {
      type: 'attribute',
      id: label,
      attrName: filterKey,
      value: value,
      selected: selectedList.includes(value),
      count: null
    };
  });
};

var reduceForFacets = function (facets, filters) {
  return function (prev, curr) {
    return __spreadArrays(prev, createFacetsFromOptions(facets, filters, curr));
  };
};

var reduceForGroupedFacets = function (facets, filters) {
  return function (prev, curr) {
    return __spreadArrays(prev, [{
      id: curr,
      label: curr,
      options: createFacetsFromOptions(facets, filters, curr),
      count: null
    }]);
  };
};

var buildFacets = function (searchData, reduceFn, criteria) {
  if (!searchData.data) {
    return [];
  }

  var facets = searchData.data.facets,
      filters = searchData.input.filters;
  return Object.keys(facets).filter(filterFacets(criteria)).reduce(reduceFn(facets, filters), []);
};

var getAll = function (searchData, criteria) {
  return buildFacets(searchData, reduceForFacets, criteria);
};

var getGrouped = function (searchData, criteria) {
  return buildFacets(searchData, reduceForGroupedFacets, criteria);
};

var getSortOptions = function (searchData) {
  var _a;

  var options = [{
    type: 'sort',
    id: 'latest',
    value: 'Latest',
    count: null
  }, {
    type: 'sort',
    id: 'price-up',
    value: 'Price from low to high',
    count: null
  }, {
    type: 'sort',
    id: 'price-down',
    value: 'Price from high to low',
    count: null
  }].map(function (o) {
    return __assign(__assign({}, o), {
      selected: o.id === searchData.input.sort
    });
  });
  var selected = ((_a = options.find(function (o) {
    return o.id === searchData.input.sort;
  })) === null || _a === void 0 ? void 0 : _a.id) || 'latest';
  return {
    options: options,
    selected: selected
  };
};

var getCategoryTree$1 = function (searchData) {
  if (!searchData.data) {
    return {};
  }

  return getCategoryTree(searchData.data.categories[0]);
};

var getProducts = function (searchData) {
  return getProductFiltered(searchData.data.products, {
    master: true
  });
};

var getPagination = function (searchData) {
  if (!searchData.data) {
    return {};
  }

  return {
    currentPage: searchData.input.page,
    totalPages: Math.ceil(searchData.data.total / searchData.data.itemsPerPage),
    totalItems: searchData.data.total,
    itemsPerPage: searchData.input.itemsPerPage,
    pageOptions: searchData.data.perPageOptions
  };
};

var getBreadcrumbs = function (searchData) {
  if (!searchData.data) {
    return [];
  }

  return __spreadArrays([{
    text: 'Home',
    link: '/'
  }], buildBreadcrumbs(searchData.data.categories[0]).map(function (b) {
    return __assign(__assign({}, b), {
      link: "/c" + b.link
    });
  }));
};

var facetGetters = {
  getSortOptions: getSortOptions,
  getGrouped: getGrouped,
  getAll: getAll,
  getProducts: getProducts,
  getCategoryTree: getCategoryTree$1,
  getBreadcrumbs: getBreadcrumbs,
  getPagination: getPagination
};
/* istanbul ignore file */

Object(_vue_storefront_core__WEBPACK_IMPORTED_MODULE_1__["track"])('VSFCommercetools');


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/atoms/SfIcon/SfIcon.vue?vue&type=template&id=a62b84aa&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',_vm._g({ref:"icon",class:['sf-icon', _vm.iconColorClass, _vm.iconSizeClass],style:(_vm.iconCustomStyle)},_vm.$listeners),[_vm._t("default",[_c('svg',{staticClass:"sf-icon-path",attrs:{"viewBox":_vm.iconViewBox,"preserveAspectRatio":"none"}},[_c('defs',[(_vm.coverage < 1)?_c('linearGradient',{attrs:{"id":_vm.coverage,"x1":"0","y1":"0","x2":"1","y2":"0"}},[_c('stop',{attrs:{"offset":_vm.coverage,"stop-color":"var(--icon-color)"}}),_vm._v(" "),_c('stop',{attrs:{"offset":"0","stop-color":"var(--icon-color-negative, var(--c-gray-variant))"}})],1):_vm._e()],1),_vm._v(" "),_vm._l((_vm.iconPaths),function(path,index){return _c('path',{key:index,staticStyle:{"height":"100%"},attrs:{"d":path,"fill":_vm.fillPath}})})],2)],null,{ viewBox: _vm.viewBox, iconPaths: _vm.iconPaths, icon: _vm.icon }),_vm._ssrNode(" "),_vm._t("badge",[_c('transition',{attrs:{"name":"sf-bounce"}},[(_vm.hasBadge)?_c('SfBadge',{staticClass:"sf-icon__badge sf-badge--number"},[_vm._v("\n        "+_vm._s(_vm.badgeLabel)+"\n      ")]):_vm._e()],1)],null,{ badgeLabel: _vm.badgeLabel, hasBadge: _vm.hasBadge })],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfIcon/SfIcon.vue?vue&type=template&id=a62b84aa&

// CONCATENATED MODULE: ./node_modules/@storefront-ui/shared/icons/icons.js
const icons = {
  add_to_cart: {
    viewBox: "0 0 24 24",
    paths: ["M10.281 17.165c-1.177 0-2.147.97-2.147 2.147 0 1.177.97 2.147 2.147 2.147 1.177 0 2.147-.97 2.147-2.146a2.16 2.16 0 00-2.147-2.148zm0 2.994a.838.838 0 01-.847-.847c0-.475.372-.847.847-.847s.847.372.847.847a.865.865 0 01-.847.847zM17.386 17.165c-1.177 0-2.148.97-2.148 2.147 0 1.177.97 2.147 2.148 2.147 1.176 0 2.147-.97 2.147-2.147-.02-1.176-.97-2.147-2.147-2.147zm0 2.994a.838.838 0 01-.847-.847c0-.475.371-.847.847-.847.475 0 .847.372.847.847a.864.864 0 01-.847.847zM14.132 11.834a.66.66 0 01-.206-.033c-.007-.002-.012-.003-.017-.006a.598.598 0 01-.198-.117l-2.14-1.827a.499.499 0 01-.175-.375c0-.142.062-.276.175-.376a.627.627 0 01.42-.156c.158 0 .309.055.42.156l1.126.92V4.21c0-.293.266-.532.595-.532.328 0 .595.238.595.532v5.807l1.126-.92a.628.628 0 01.42-.155c.158 0 .308.055.42.156.112.1.174.234.174.375a.499.499 0 01-.174.376l-2.141 1.827a.62.62 0 01-.195.116l-.02.007a.62.62 0 01-.205.034z", "M19.634 6.035c.599 0 1.177.29 1.55.764.392.475.515 1.095.371 1.674l-1.549 6.36a1.968 1.968 0 01-1.92 1.508h-8.24c-.908 0-1.692-.62-1.92-1.508L5.407 4.797a.682.682 0 00-.66-.516H2.64A.644.644 0 012 3.64C2 3.288 2.29 3 2.64 3h2.107c.909 0 1.693.62 1.92 1.508l.392 1.527h4.524v1.302H7.39l1.796 7.206c.083.31.351.516.66.516h8.24c.31 0 .579-.206.661-.516l1.549-6.36a.65.65 0 00-.123-.578.686.686 0 00-.538-.268H16.68V6.035h2.955z"]
  },
  added_to_cart: {
    viewBox: "0 0 24 24",
    paths: ["M10.547 16.567c-1.127 0-2.057.93-2.057 2.057 0 1.127.93 2.056 2.057 2.056a2.066 2.066 0 002.056-2.055c0-1.128-.93-2.058-2.056-2.058zM17.35 16.567c-1.127 0-2.057.93-2.057 2.057 0 1.127.93 2.056 2.057 2.056 1.127 0 2.056-.929 2.056-2.056-.02-1.126-.93-2.057-2.056-2.057z", "M19.506 5.908c.573 0 1.127.276 1.483.731.376.456.494 1.049.356 1.604l-1.483 6.091a1.885 1.885 0 01-1.84 1.444h-7.89c-.871 0-1.622-.593-1.84-1.444L5.879 4.722a.653.653 0 00-.632-.494H3.229a.616.616 0 01-.613-.614c0-.337.277-.613.613-.613h2.018c.87 0 1.621.593 1.839 1.444l.375 1.463h12.045zm-6.908 8.19a.971.971 0 00.695.293h.018a.951.951 0 00.704-.321l4.352-4.84c.37-.405.342-1.039-.056-1.407a.956.956 0 00-1.38.057l-3.666 4.082-1.76-1.795a.964.964 0 00-1.38 0c-.379.387-.379 1.02 0 1.407l2.473 2.524z"]
  },
  empty_cart: {
    viewBox: "0 0 24 24",
    paths: ["M21.561 6.874a2.026 2.026 0 00-1.579-.779H7.16l-.4-1.558A2.024 2.024 0 004.801 3H2.653A.656.656 0 002 3.653c0 .358.294.653.653.653h2.148c.316 0 .59.21.673.527l2.57 10.234a2.024 2.024 0 001.958 1.537h8.4c.927 0 1.749-.632 1.96-1.537L21.94 8.58a1.931 1.931 0 00-.38-1.707zm-.904 1.41l-1.58 6.487a.695.695 0 01-.673.526h-8.402a.695.695 0 01-.674-.526L7.496 7.422h12.487a.7.7 0 01.548.274.662.662 0 01.126.589zM10.445 17.445c-1.2 0-2.19.99-2.19 2.19s.99 2.189 2.19 2.189a2.2 2.2 0 002.19-2.189c0-1.2-.99-2.19-2.19-2.19zm0 3.053a.854.854 0 01-.864-.864c0-.484.38-.863.864-.863s.863.379.863.863c0 .464-.4.864-.863.864zM17.688 17.445c-1.2 0-2.19.99-2.19 2.19s.99 2.189 2.19 2.189 2.19-.99 2.19-2.19c-.021-1.2-.99-2.19-2.19-2.19zm0 3.053a.854.854 0 01-.864-.864c0-.484.38-.863.864-.863.485 0 .864.379.864.863 0 .464-.4.864-.864.864z"]
  },
  clock: {
    viewBox: "0 0 24 24",
    paths: ["M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 1.463A8.525 8.525 0 0120.537 12 8.525 8.525 0 0112 20.537 8.525 8.525 0 013.463 12 8.525 8.525 0 0112 3.463zm0 1.22a.732.732 0 00-.732.732V12c0 .27.148.506.366.633l5.282 3.048a.73.73 0 10.732-1.265l-4.916-2.835V5.415A.732.732 0 0012 4.683z"]
  },
  arrow_left: {
    viewBox: "0 0 24 24",
    paths: ["M24 13L2 13L2 11L24 11L24 13Z", "M6.61667 6L8 7.25423L2.76478 12L8 16.7458L6.61667 18L-5.24538e-07 12L6.61667 6Z"]
  },
  arrow_right: {
    viewBox: "0 0 24 24",
    paths: ["M0 11L22 11L22 13L-3.49691e-07 13L0 11Z", "M17.3833 18L16 16.7458L21.2352 12L16 7.25423L17.3833 6L24 12L17.3833 18Z"]
  },
  arrow_top: {
    viewBox: "0 0 24 24",
    paths: ["M11 24L11 2L13 2L13 24L11 24Z", "M18 6.61667L16.7458 8L12 2.76478L7.25423 8L6 6.61667L12 -2.62269e-07L18 6.61667Z"]
  },
  arrow_down: {
    viewBox: "0 0 24 24",
    paths: ["M13 0L13 22L11 22L11 -8.74228e-08L13 0Z", "M6 17.3833L7.25423 16L12 21.2352L16.7458 16L18 17.3833L12 24L6 17.3833Z"]
  },
  check: {
    viewBox: "0 0 24 24",
    paths: ["M10.7136 17C10.3594 17 10.0181 16.8476 9.76516 16.5711L6.38899 12.8793C5.87034 12.3122 5.87034 11.3859 6.38899 10.8194C6.90765 10.2522 7.75481 10.2522 8.27289 10.8194L10.6755 13.4465L15.6833 7.47328C16.1762 6.87859 17.0239 6.837 17.5672 7.3901C18.111 7.92914 18.1491 8.85607 17.6432 9.45009L11.7 16.5301C11.4599 16.8207 11.1057 17 10.7387 17L10.7136 17Z"]
  },
  chevron_down: {
    viewBox: "0 0 24 24",
    paths: ["M2 8.364L3.6 7l8.4 7.254L20.4 7 22 8.364 12 17z"]
  },
  chevron_up: {
    viewBox: "0 0 24 24",
    paths: ["M22 15.636L20.4 17 12 9.746 3.6 17 2 15.636 12 7z"]
  },
  chevron_left: {
    viewBox: "0 0 24 24",
    paths: ["M15.636 2L17 3.6 9.746 12 17 20.4 15.636 22 7 12z"]
  },
  chevron_right: {
    viewBox: "0 0 24 24",
    paths: ["M8.364 22L7 20.4l7.254-8.4L7 3.6 8.364 2 17 12z"]
  },
  cross: {
    viewBox: "0 0 24 24",
    paths: ["M21.261 2.22a.748.748 0 00-1.057 0l-8.464 8.463-8.463-8.464a.748.748 0 10-1.058 1.058l8.464 8.463-8.464 8.464a.748.748 0 101.058 1.057l8.463-8.463 8.464 8.463a.748.748 0 101.057-1.057l-8.463-8.464 8.463-8.463a.748.748 0 000-1.058z"]
  },
  heart: {
    viewBox: "0 0 24 24",
    paths: ["M12 20.273a.85.85 0 01-.52-.177l-.442-.341c-4.064-3.13-6.517-5.018-7.945-7.539-1.369-2.409-1.204-4.31-.827-5.482.46-1.423 1.496-2.569 2.918-3.225A5.605 5.605 0 017.544 3c1.764 0 3.394.748 4.456 1.98C13.06 3.748 14.69 3 16.455 3c.834 0 1.628.17 2.36.507 1.422.657 2.458 1.801 2.918 3.226.379 1.17.542 3.072-.827 5.482-1.429 2.52-3.885 4.412-7.954 7.546l-.432.335a.856.856 0 01-.52.177zM7.544 4.69c-.587 0-1.14.118-1.647.351-.987.456-1.703 1.24-2.015 2.21-.394 1.218-.155 2.648.689 4.134 1.251 2.21 3.45 3.91 7.427 6.975 3.978-3.063 6.176-4.766 7.428-6.974.844-1.486 1.082-2.917.69-4.135-.314-.969-1.03-1.754-2.017-2.21a3.898 3.898 0 00-1.645-.35c-1.594 0-3.075.88-3.686 2.19a.849.849 0 01-1.54 0c-.61-1.31-2.09-2.19-3.684-2.19z"]
  },
  heart_fill: {
    viewBox: "0 0 24 24",
    paths: ["M12 20.429a.878.878 0 01-.52-.168l-.442-.325c-4.064-2.976-6.517-4.773-7.945-7.17-1.369-2.291-1.204-4.1-.827-5.215.46-1.353 1.496-2.443 2.918-3.067A5.85 5.85 0 017.544 4c1.764 0 3.394.711 4.456 1.883C13.06 4.711 14.69 4 16.455 4c.835 0 1.628.162 2.36.483 1.422.624 2.458 1.713 2.918 3.067.379 1.113.542 2.923-.827 5.215-1.429 2.397-3.885 4.196-7.954 7.176l-.432.32a.884.884 0 01-.52.168z"]
  },
  home: {
    viewBox: "0 0 24 24",
    paths: ["M19.354 9.45v11.27c.001-.13-.002.099-.002.043 0 .053.025-.074.002-.026a.172.172 0 00-.015.053c-.008.05.041-.061.008-.024a.208.208 0 00-.026.045c-.02.045.056-.05.015-.02a.197.197 0 00-.037.036c-.02.026.072-.05-.002 0l-.012.007c-.031.016-.031.016 0 .001l.024-.01-.039.013c-.098.024.076.004-.029.006H5.65c-.28 0-.556.002-.835 0h-.045c-.076 0 .02-.004.026.004-.002-.004-.045-.012-.054-.014-.077-.018.027.004.023.01-.001.001-.04-.024-.046-.027-.072-.034.046.056 0-.001a.292.292 0 01-.037-.04c.01-.012.045.076.016.018a.687.687 0 01-.026-.047c.015-.008.025.087.01.023a.93.93 0 01-.015-.053c.012-.002.004.092.004.026V9.43c-.067.119-.135.236-.203.354L5.962 8.68l.989-.726c.621-.458 1.245-.915 1.866-1.374l2.174-1.6c.4-.293.814-.576 1.204-.886a.35.35 0 00.018-.012h-.414l1 .737c.712.523 1.424 1.045 2.135 1.57l1.969 1.45c.256.19.512.378.77.567.61.451 1.221.902 1.835 1.353.016.013.034.025.05.04.175.127.467.034.563-.148.113-.213.04-.425-.148-.562a604.21 604.21 0 01-1.691-1.247c-.267-.197-.532-.392-.798-.586l-1.86-1.369c-.729-.534-1.456-1.07-2.184-1.607-.402-.296-.797-.609-1.21-.89a.396.396 0 00-.432-.012l-1.456 1.07c-.902.664-1.805 1.327-2.706 1.992a1276.537 1276.537 0 00-3.582 2.64.446.446 0 00-.205.366c-.002.05 0 .098 0 .148v9.86c0 .42-.01.843 0 1.263a.96.96 0 00.948.945H19.037c.24 0 .47-.002.685-.14a.968.968 0 00.453-.826V9.44c0-.215-.189-.42-.41-.41-.225.02-.411.19-.411.42z", "M19.557 9.806l1.314.97.191.14c.174.127.466.035.562-.147.113-.214.037-.425-.148-.562l-1.314-.97-.191-.141c-.174-.127-.466-.035-.562.148-.112.215-.036.426.148.562zM2.937 10.917L4.916 9.46c.195-.144.392-.287.586-.433.173-.128.278-.361.148-.562-.11-.171-.377-.283-.562-.148l-2.093 1.54c-.158.116-.316.23-.472.348-.172.127-.277.361-.148.562.111.172.378.284.562.149zM14.05 13.809V20.34c0 .302-.012.607 0 .909v.014l.41-.41H9.56l.41.41V13.785c0-.066.01.026-.006.026a.727.727 0 01.02-.078c.019-.08-.042.07 0 0a.95.95 0 01.042-.067c.014.01-.062.066-.015.023.004-.004.056-.056.057-.053.01.014-.083.049-.008.01.007-.002.057-.033.057-.032-.016.007-.032.015-.049.02a.336.336 0 01.051-.016l.053-.012c-.064.008-.073.008-.026.007h3.719c.089.001-.012.004-.012-.005a.74.74 0 01.078.021c.074.018-.07-.045 0 0l.067.041c-.004.007-.075-.072-.023-.015a.651.651 0 01.054.058c-.007.004-.056-.089-.017-.02.002.003.041.066.04.069-.018.006-.027-.086-.013-.025l.02.078a.459.459 0 00-.007-.056v.05c.004.215.184.42.41.41.217-.01.417-.18.41-.41a1.04 1.04 0 00-1.024-1.024c-.094-.002-.19 0-.285 0h-3.089c-.1 0-.2-.002-.302 0-.548.01-.98.425-1.023.968-.015.182-.002.369-.002.551v4.746c0 .726-.01 1.452 0 2.175v.033c0 .221.189.41.41.41h4.901c.222 0 .41-.189.41-.41v-6.532c0-.301.009-.605 0-.908v-.015c0-.215-.188-.42-.41-.41a.426.426 0 00-.406.416z"]
  },
  home_fill: {
    viewBox: "0 0 24 24",
    paths: ["M19.557 9.806l1.314.97.191.14c.174.127.466.035.562-.147.113-.214.037-.425-.148-.562l-1.314-.97-.191-.141c-.174-.127-.466-.035-.562.148-.112.215-.036.426.148.562zM2.937 10.917L4.916 9.46c.195-.144.392-.287.586-.433.173-.128.278-.361.148-.562-.11-.171-.377-.283-.562-.148l-2.093 1.54c-.158.116-.316.23-.472.348-.172.127-.277.361-.148.562.111.172.378.284.562.149z", "M19.355 9.45V20.738a.159.159 0 01-.002.025c0 .053.025-.074.002-.026a.133.133 0 00-.012.035.406.406 0 00-.003.018c-.008.05.04-.061.008-.024a.237.237 0 00-.026.045c-.02.045.056-.05.015-.02a.274.274 0 00-.036.034l-.001.002c-.02.026.07-.049.001-.002l-.003.002a.086.086 0 00-.011.006c-.032.017-.032.017-.001.002l.024-.01-.023.008a.562.562 0 01-.039.011H15.313l-.378-.009V12.49H9.14v8.358l-1.66-.004H5.65c-.28 0-.556.002-.835 0H4.77c-.076 0 .02-.004.026.004l-.01-.004-.037-.009-.007-.001c-.077-.018.027.004.023.01l-.016-.009-.028-.016a.089.089 0 00-.002-.002c-.071-.034.042.053.002.002l-.002-.003a.227.227 0 01-.037-.04c.011.005.018.017.022.026.007.013.009.02-.006-.008a.438.438 0 01-.026-.047c.008.002.013.017.015.029.004.017.003.028-.005-.006a.162.162 0 01-.007-.023l-.001-.004-.007-.026c.002 0 .003.002.004.005a.08.08 0 01.003.02l-.003-.02V9.429c-.067.119-.135.236-.203.354l.203-.15 1.292-.953.989-.726c.621-.458 1.245-.915 1.866-1.374l2.174-1.6c.337-.248.685-.487 1.02-.742a11.164 11.164 0 00.202-.156H11.8l.211.156c.264.193.525.387.79.58l.173.128c.654.48 1.307.961 1.96 1.443l1.97 1.45c.256.19.512.378.77.567l.034.026c.548.404 1.097.81 1.647 1.214l.154.113c.016.013.034.025.05.04.175.127.467.034.563-.148.113-.213.04-.425-.148-.562-.564-.414-1.128-.83-1.691-1.247a217.81 217.81 0 00-.798-.586l-1.86-1.369c-.729-.534-1.456-1.07-2.184-1.607-.402-.296-.797-.609-1.21-.89a.396.396 0 00-.432-.012l-1.456 1.07c-.902.664-1.805 1.327-2.706 1.992a1276.537 1276.537 0 00-3.582 2.64.446.446 0 00-.205.366c-.002.05 0 .098 0 .148v9.86c0 .42-.01.843 0 1.263a.96.96 0 00.948.945H9.14V12.49h5.794l-.07 9.172h4.172c.24 0 .47-.002.686-.14a.968.968 0 00.453-.826V9.44c0-.215-.189-.42-.41-.41", "M19.355 10.256v-.61l-1.647-1.214-.035-.026-.77-.566-1.968-1.45c-.654-.483-1.307-.963-1.961-1.444L12.8 4.82c-.264-.195-.525-.388-.789-.581-.334.255-.682.494-1.02.742l-2.173 1.6c-.621.46-1.245.916-1.866 1.374l-.989.726-1.292.953v11.081l.003.029c.006.006.01.02.013.033a.099.099 0 01.017.026c.008.009.015.015.015.014l.03.02c.01.001.027.005.038.008h.028c.279.002.556 0 .835 0h3.49v-7.06a1 1 0 011-1h3.731a1 1 0 011 1v7.06H19.248a.313.313 0 01.039-.01.086.086 0 01.011-.007.29.29 0 01.03-.03.218.218 0 01.015-.025.133.133 0 01.011-.034v-.036c.002-.33 0-.66 0-.989V10.256z"]
  },
  home2: {
    viewBox: "0 0 24 24",
    paths: ["M5.21602 10.7781C5.15525 11.0027 5.16536 11.1843 5.2323 11.3176L5.21602 10.7781ZM5.21602 10.7781C5.27661 10.5541 5.40553 10.2963 5.60276 10.0206M5.21602 10.7781L5.60276 10.0206M5.60276 10.0206L7.05524 7.99014M5.60276 10.0206L7.05524 7.99014M7.05524 7.99014H8.53621L6.42279 11.7745C6.11281 11.7695 5.85211 11.7245 5.65108 11.6474C5.43734 11.5655 5.29917 11.4508 5.2323 11.3176L7.05524 7.99014ZM6.67908 12.5614H17.321V18.6798C17.321 18.7553 17.2612 18.8137 17.1908 18.8137H14.3905V13.758C14.3905 13.5096 14.1925 13.3061 13.9442 13.3061H10.254C10.0057 13.3061 9.80771 13.5096 9.80771 13.758V18.8143L6.80939 18.8137H6.80937C6.73877 18.8137 6.67851 18.7551 6.67851 18.6792L6.67908 12.5614ZM18.7678 11.3176L18.8572 11.3625L18.7678 11.3176C18.7009 11.4508 18.5628 11.5655 18.349 11.6475C18.1358 11.7293 17.8553 11.775 17.5201 11.775H17.4299L15.3157 7.99072H16.9443L18.3973 10.0212L18.3973 10.0212C18.5945 10.2966 18.7235 10.5543 18.7841 10.7781C18.8448 11.0027 18.8347 11.1843 18.7678 11.3176ZM19.0263 9.56002L17.6364 7.61814V5.3203C17.6364 4.81296 17.2322 4.4 16.729 4.4H7.27097C6.76777 4.4 6.36356 4.81296 6.36356 5.3203V7.61754L4.9737 9.56003C4.97369 9.56004 4.97368 9.56005 4.97367 9.56006C4.45214 10.2884 4.28666 10.9765 4.47509 11.5198C4.6581 12.0474 5.16129 12.4013 5.90186 12.5182V18.6797C5.90186 19.187 6.30606 19.6 6.80926 19.6H17.1901C17.6933 19.6 18.0975 19.187 18.0975 18.6797L18.0981 12.5177C18.8387 12.401 19.3419 12.0473 19.5249 11.5197C19.7134 10.9765 19.5479 10.2884 19.0263 9.56005C19.0263 9.56004 19.0263 9.56003 19.0263 9.56002ZM7.14018 5.3203C7.14018 5.24468 7.20019 5.18575 7.27104 5.18575H16.7291C16.7995 5.18575 16.86 5.24485 16.86 5.3203V7.20492H7.14021L7.14018 5.3203ZM10.0243 7.99072L9.01761 11.775H7.31494L9.42916 7.99072H10.0243ZM9.82215 11.775L10.8289 7.99072H11.538V11.775H9.82215ZM12.3145 7.99072H13.0236L14.0303 11.775H12.3145L12.3145 7.99072ZM14.8349 11.775L13.8282 7.99072H14.424L16.5382 11.775H14.8349ZM13.6139 18.8137H10.5843V14.0919H13.6139V18.8137Z"]
  },
  menu: {
    viewBox: "0 0 24 24",
    paths: ["M21.883 17.628l-3.27-3.407a5.694 5.694 0 001.301-3.64C19.914 7.502 17.51 5 14.557 5 11.604 5 9.2 7.504 9.2 10.58c0 3.077 2.404 5.58 5.357 5.58a5.212 5.212 0 003.495-1.355l3.27 3.407c.078.08.18.121.28.121.102 0 .203-.04.28-.121a.423.423 0 00.001-.584zm-7.326-2.293c-2.516 0-4.564-2.133-4.564-4.755 0-2.62 2.047-4.754 4.564-4.754 2.516 0 4.564 2.133 4.564 4.754 0 2.622-2.048 4.755-4.564 4.755zM2.417 5.833h5.566a.417.417 0 110 .834H2.417a.417.417 0 110-.834zM2.417 11.667h4.766a.417.417 0 110 .833H2.417a.417.417 0 110-.833zM2.417 16.667H10.383a.417.417 0 110 .833H2.417a.417.417 0 110-.833z"]
  },
  message: {
    viewBox: "0 0 24 24",
    paths: ["M4.26182 20.3996C4.047 20.4006 3.84561 20.2963 3.72166 20.1216C3.59772 19.9459 3.56571 19.7217 3.63697 19.5191L4.7813 16.2814H4.78233C3.38704 13.9241 3.22798 11.0346 4.35578 8.53875C5.48462 6.04298 7.75777 4.25417 10.4483 3.74569C13.1377 3.23826 15.9067 4.07432 17.867 5.98724C19.8262 7.90015 20.7309 10.6491 20.2899 13.3526C19.8489 16.0562 18.119 18.3751 15.6537 19.5656C13.1874 20.7561 10.2965 20.6683 7.90771 19.331L4.45205 20.3738C4.39008 20.3913 4.32605 20.4006 4.26202 20.3996L4.26182 20.3996ZM7.99214 17.9524C8.11297 17.9535 8.23175 17.9865 8.33503 18.0506C10.3428 19.2732 12.8245 19.423 14.9645 18.4516C17.1045 17.4801 18.6269 15.5136 19.0307 13.1976C19.4345 10.8817 18.6681 8.51516 16.9826 6.87593C15.2981 5.23689 12.9122 4.53726 10.6101 5.00746C8.30701 5.47664 6.38508 7.05472 5.47609 9.22299C4.5662 11.3912 4.78617 13.8684 6.06376 15.8423C6.18873 16.0304 6.20939 16.2691 6.11953 16.4769L5.32635 18.7442L7.80919 17.996V17.995C7.86806 17.9733 7.92899 17.9588 7.99199 17.9526L7.99214 17.9524Z"]
  },
  search: {
    viewBox: "0 0 24 24",
    paths: ["M21.668 20.108l-3.59-3.562c2.803-3.588 2.508-8.698-.713-11.917A8.948 8.948 0 0010.998 2c-2.41 0-4.671.934-6.368 2.629A8.937 8.937 0 002 10.992c0 2.408.934 4.669 2.63 6.364a8.948 8.948 0 006.368 2.628 8.893 8.893 0 005.532-1.916l3.565 3.612c.22.221.492.32.786.32.295 0 .566-.123.787-.32.443-.417.443-1.13 0-1.572zm-3.884-9.116a6.723 6.723 0 01-1.992 4.792 6.777 6.777 0 01-4.794 1.99 6.773 6.773 0 01-4.795-1.99 6.769 6.769 0 01-1.991-4.792c0-1.818.712-3.514 1.991-4.791a6.777 6.777 0 014.795-1.99c1.819 0 3.516.711 4.794 1.99a6.729 6.729 0 011.992 4.791z"]
  },
  profile: {
    viewBox: "0 0 24 24",
    paths: ["M20.667 21.024a.978.978 0 01-.977.976H4.977A.98.98 0 014 21.024c0-4.58 3.73-8.292 8.333-8.292s8.333 3.712 8.333 8.292zm-8.334-7.317c-4.06 0-7.352 3.276-7.352 7.317 0-.002 14.71 0 14.71 0-.005-4.041-3.296-7.317-7.358-7.317zm0-1.95c-2.707 0-4.901-2.185-4.901-4.879C7.432 4.184 9.626 2 12.333 2c2.708 0 4.902 2.184 4.902 4.878s-2.194 4.878-4.902 4.878zm0-.976c2.166 0 3.922-1.748 3.922-3.903 0-2.155-1.756-3.902-3.922-3.902-2.165 0-3.921 1.747-3.921 3.902 0 2.155 1.756 3.902 3.921 3.902z"]
  },
  profile_fill: {
    viewBox: "0 0 24 24",
    paths: ["M20.667 21.024a.978.978 0 01-.977.976H4.977A.98.98 0 014 21.024c0-4.58 3.73-8.292 8.333-8.292s8.333 3.712 8.333 8.292zm-8.334-9.268c-2.707 0-4.901-2.184-4.901-4.878S9.626 2 12.333 2c2.708 0 4.902 2.184 4.902 4.878s-2.194 4.878-4.902 4.878z"]
  },
  newsletter: {
    viewBox: "0 0 24 24",
    paths: ["M18.508 7.365v-4a.956.956 0 00-.953-.952H5.492a.956.956 0 00-.953.953v4c-1.904 1.936-2.031 1.968-2 2.127v11.079c0 .318.127.603.317.794.191.19.477.317.794.317h15.683c.317 0 .603-.126.794-.317.19-.19.317-.476.317-.794V9.492c.064-.222.032-.127-1.936-2.127zm1.365 13.175v.032l-5.174-5.143 5.174-5.175V20.54zm-.127-11.047l-1.238 1.206V8.254l1.238 1.239zM5.492 3.048h12.063c.19 0 .317.159.317.318v7.968l-3.84 3.872-2.508 2.476-6.35-6.35V3.366c0-.158.128-.317.318-.317zM3.207 20.603V10.254l5.142 5.175-5.142 5.174zM4.54 8.254v2.445L3.334 9.492 4.54 8.254zm-.858 12.793H3.65l5.175-5.174L11.3 18.35a.307.307 0 00.445 0l2.475-2.476 5.176 5.174H3.682z", "M7.333 6.286h8.381M7.333 8.381h8.381M7.333 10.477h8.381"]
  },
  info: {
    viewBox: "0 0 24 24",
    paths: ["M3.59961 12.0001C3.59961 16.6393 7.36042 20.4001 11.9996 20.4001C16.6388 20.4001 20.3996 16.6393 20.3996 12.0001C20.3996 7.36091 16.6388 3.6001 11.9996 3.6001C7.36042 3.6001 3.59961 7.36091 3.59961 12.0001ZM18.8723 12.0001C18.8723 15.7958 15.7953 18.8728 11.9996 18.8728C8.20385 18.8728 5.12683 15.7958 5.12683 12.0001C5.12683 8.20439 8.20385 5.12737 11.9996 5.12737C15.7953 5.12737 18.8723 8.20439 18.8723 12.0001ZM12.7632 15.0546V12.0001C12.7632 11.5784 12.4213 11.2365 11.9995 11.2365C11.5778 11.2365 11.2359 11.5784 11.2359 12.0001V15.0546C11.2359 15.4764 11.5778 15.8183 11.9995 15.8183C12.4213 15.8183 12.7632 15.4764 12.7632 15.0546ZM12.5395 10.2492C12.2413 10.5474 11.7578 10.5474 11.4596 10.2492C11.1613 9.95095 11.1613 9.46744 11.4596 9.16922C11.7578 8.87101 12.2413 8.87101 12.5395 9.16922C12.8377 9.46744 12.8377 9.95095 12.5395 10.2492Z", "M3.59961 12.0001C3.59961 16.6393 7.36042 20.4001 11.9996 20.4001C16.6388 20.4001 20.3996 16.6393 20.3996 12.0001C20.3996 7.36091 16.6388 3.6001 11.9996 3.6001C7.36042 3.6001 3.59961 7.36091 3.59961 12.0001ZM18.8723 12.0001C18.8723 15.7958 15.7953 18.8728 11.9996 18.8728C8.20385 18.8728 5.12683 15.7958 5.12683 12.0001C5.12683 8.20439 8.20385 5.12737 11.9996 5.12737C15.7953 5.12737 18.8723 8.20439 18.8723 12.0001ZM12.7632 15.0546V12.0001C12.7632 11.5784 12.4213 11.2365 11.9995 11.2365C11.5778 11.2365 11.2359 11.5784 11.2359 12.0001V15.0546C11.2359 15.4764 11.5778 15.8183 11.9995 15.8183C12.4213 15.8183 12.7632 15.4764 12.7632 15.0546ZM12.5395 10.2492C12.2413 10.5474 11.7578 10.5474 11.4596 10.2492C11.1613 9.95095 11.1613 9.46744 11.4596 9.16922C11.7578 8.87101 12.2413 8.87101 12.5395 9.16922C12.8377 9.46744 12.8377 9.95095 12.5395 10.2492Z"]
  },
  info_circle: {
    viewBox: "0 0 24 24",
    paths: ["M12 2.4A9.588 9.588 0 002.4 12c0 5.311 4.288 9.6 9.6 9.6 5.311 0 9.6-4.289 9.6-9.6 0-5.312-4.289-9.6-9.6-9.6zm1.515 14.933c0 .47-.405.875-.875.875h-1.323a.893.893 0 01-.875-.875v-5.59c0-.49.405-.874.875-.874h1.323c.469 0 .875.405.875.875v5.59zm-1.537-7.915c-.982 0-1.792-.81-1.792-1.813s.811-1.814 1.792-1.814c1.003 0 1.813.811 1.813 1.814 0 1.003-.81 1.813-1.813 1.813z"]
  },
  info_shield: {
    viewBox: "0 0 24 24",
    paths: ["M11.945 2L4 5.46c0 10.662 1.34 12.014 7.945 16.402 6.605-4.388 7.945-5.74 7.945-16.402L11.945 2zm0 4.469c.685 0 1.241.556 1.241 1.241l-.248 4.47a.993.993 0 11-1.986 0l-.249-4.47c0-.685.556-1.241 1.242-1.241zm0 7.448a1.49 1.49 0 110 2.98 1.49 1.49 0 010-2.98z"]
  },
  error: {
    viewBox: "0 0 24 24",
    paths: ["M3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12ZM19.3636 12C19.3636 16.0668 16.0668 19.3636 12 19.3636C7.93318 19.3636 4.63636 16.0668 4.63636 12C4.63636 7.93318 7.93318 4.63636 12 4.63636C16.0668 4.63636 19.3636 7.93318 19.3636 12ZM11.1818 8.72727V12C11.1818 12.4519 11.5481 12.8182 12 12.8182C12.4519 12.8182 12.8182 12.4519 12.8182 12V8.72727C12.8182 8.2754 12.4519 7.90909 12 7.90909C11.5481 7.90909 11.1818 8.2754 11.1818 8.72727ZM12.5785 13.876C12.8981 14.1955 12.8981 14.7136 12.5785 15.0331C12.259 15.3526 11.741 15.3526 11.4215 15.0331C11.1019 14.7136 11.1019 14.1955 11.4215 13.876C11.741 13.5565 12.259 13.5565 12.5785 13.876Z", "M3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12ZM19.3636 12C19.3636 16.0668 16.0668 19.3636 12 19.3636C7.93318 19.3636 4.63636 16.0668 4.63636 12C4.63636 7.93318 7.93318 4.63636 12 4.63636C16.0668 4.63636 19.3636 7.93318 19.3636 12ZM11.1818 8.72727V12C11.1818 12.4519 11.5481 12.8182 12 12.8182C12.4519 12.8182 12.8182 12.4519 12.8182 12V8.72727C12.8182 8.2754 12.4519 7.90909 12 7.90909C11.5481 7.90909 11.1818 8.2754 11.1818 8.72727ZM12.5785 13.876C12.8981 14.1955 12.8981 14.7136 12.5785 15.0331C12.259 15.3526 11.741 15.3526 11.4215 15.0331C11.1019 14.7136 11.1019 14.1955 11.4215 13.876C11.741 13.5565 12.259 13.5565 12.5785 13.876Z"]
  },
  question_mark: {
    viewBox: "0 0 24 24",
    paths: ["M12 19.5C13.9894 19.5 15.8971 18.7098 17.3035 17.3035C18.7098 15.8971 19.5 13.9894 19.5 12C19.5 10.0106 18.7098 8.10287 17.3035 6.69653C15.8971 5.29021 13.9894 4.5 12 4.5C10.0106 4.5 8.10287 5.29022 6.69653 6.69653C5.29021 8.10285 4.5 10.0106 4.5 12C4.50245 13.9881 5.29328 15.8946 6.69967 17.3003C8.10538 18.7067 10.0119 19.4975 12 19.5ZM12 5.96394C13.6 5.96394 15.1352 6.59967 16.2669 7.73139C17.3986 8.86307 18.0343 10.3975 18.0343 11.9983C18.0343 13.5983 17.3992 15.1335 16.2675 16.2652C15.1358 17.3968 13.6014 18.0326 12.0013 18.0332C10.4006 18.0332 8.86607 17.3981 7.7339 16.2664C6.60223 15.1353 5.96582 13.6003 5.96582 12.0002C5.96766 10.4002 6.60339 8.86622 7.735 7.73516C8.86607 6.60348 10.3998 5.9677 12 5.96598V5.96394ZM12.6829 15.6752V15.6758C12.6829 15.9891 12.4935 16.2717 12.2041 16.3919C11.9142 16.512 11.5807 16.4452 11.3594 16.2239C11.1374 16.002 11.0712 15.6685 11.1914 15.3791C11.3109 15.0891 11.5936 14.9003 11.9074 14.9003C12.1134 14.9003 12.3108 14.9819 12.4561 15.1278C12.6014 15.2737 12.6829 15.4711 12.6829 15.6771V15.6752ZM9.4889 9.63366C9.42085 9.44055 9.43311 9.22905 9.522 9.04514C9.73412 8.59946 10.0676 8.22304 10.4839 7.9582C10.9001 7.69398 11.3826 7.55176 11.8761 7.54929H11.892H11.8914C12.5799 7.55175 13.2408 7.82088 13.7355 8.29904C14.2302 8.77784 14.5214 9.42889 14.5471 10.1167C14.5649 10.6813 14.4 11.2361 14.0776 11.6996C13.7551 12.1637 13.2916 12.5107 12.7564 12.6903C12.7564 12.6903 12.6798 12.7173 12.6798 12.7626V13.3781H12.6792C12.6792 13.8042 12.334 14.1494 11.908 14.1494C11.4819 14.1494 11.1368 13.8042 11.1368 13.3781V12.7626C11.1441 12.0638 11.5959 11.447 12.2605 11.2294C12.7184 11.0743 13.0213 10.6378 13.0059 10.1541C12.9747 9.56315 12.4904 9.09723 11.8982 9.08865C11.4776 9.09355 11.0969 9.33693 10.9173 9.71641C10.783 10.0015 10.4894 10.1762 10.1749 10.1578C9.86039 10.14 9.58881 9.9322 9.48888 9.63365L9.4889 9.63366Z"]
  },
  mail: {
    viewBox: "0 0 24 24",
    paths: ["M19.713 19.587H4.126A2.126 2.126 0 012 17.462V6.126C2 4.952 2.952 4 4.126 4h15.587c1.173 0 2.125.952 2.125 2.126v11.336a2.126 2.126 0 01-2.125 2.125zM4.126 5.417a.708.708 0 00-.709.709v11.336a.71.71 0 00.708.708h15.588a.709.709 0 00.708-.708V6.126a.709.709 0 00-.708-.709H4.126z", "M11.919 12.134a2.125 2.125 0 01-1.297-.44L2.751 5.638a.71.71 0 11.864-1.126l7.872 6.057a.71.71 0 00.864 0l7.872-6.057a.71.71 0 11.864 1.126l-7.872 6.058c-.372.285-.828.44-1.296.44z"]
  },
  marker: {
    viewBox: "0 0 24 24",
    paths: ["M12.7391 19.5149C13.4579 18.9078 14.1764 18.2219 14.8489 17.469C16.8102 15.2733 17.9998 12.9602 17.9998 10.6001C17.9998 6.7341 15.0449 3.6001 11.3998 3.6001C7.75472 3.6001 4.7998 6.7341 4.7998 10.6001C4.7998 12.9602 5.98939 15.2733 7.95068 17.469C8.62318 18.2219 9.34176 18.9078 10.0605 19.5149C10.3125 19.7277 10.547 19.9158 10.7581 20.0775C10.8868 20.1761 10.9806 20.245 11.0337 20.2825C11.2554 20.4393 11.5442 20.4393 11.7659 20.2825C11.819 20.245 11.9128 20.1761 12.0415 20.0775C12.2526 19.9158 12.4871 19.7277 12.7391 19.5149ZM13.8906 16.5062C13.2637 17.208 12.5901 17.851 11.9167 18.4197C11.7329 18.5749 11.5597 18.7156 11.3997 18.8409C11.2398 18.7156 11.0665 18.5749 10.8827 18.4197C10.2093 17.851 9.53572 17.208 8.90885 16.5062C7.15764 14.5456 6.11973 12.5275 6.11973 10.6001C6.11973 7.50729 8.48366 5.00009 11.3997 5.00009C14.3158 5.00009 16.6797 7.50729 16.6797 10.6001C16.6797 12.5275 15.6418 14.5456 13.8906 16.5062ZM11.3998 13.4001C9.94173 13.4001 8.75977 12.1465 8.75977 10.6001C8.75977 9.0537 9.94173 7.8001 11.3998 7.8001C12.8578 7.8001 14.0398 9.0537 14.0398 10.6001C14.0398 12.1465 12.8578 13.4001 11.3998 13.4001ZM12.7199 10.6001C12.7199 11.3733 12.1289 12.0001 11.3999 12.0001C10.6709 12.0001 10.0799 11.3733 10.0799 10.6001C10.0799 9.82689 10.6709 9.20009 11.3999 9.20009C12.1289 9.20009 12.7199 9.82689 12.7199 10.6001Z", "M12.7391 19.5149C13.4579 18.9078 14.1764 18.2219 14.8489 17.469C16.8102 15.2733 17.9998 12.9602 17.9998 10.6001C17.9998 6.7341 15.0449 3.6001 11.3998 3.6001C7.75472 3.6001 4.7998 6.7341 4.7998 10.6001C4.7998 12.9602 5.98939 15.2733 7.95068 17.469C8.62318 18.2219 9.34176 18.9078 10.0605 19.5149C10.3125 19.7277 10.547 19.9158 10.7581 20.0775C10.8868 20.1761 10.9806 20.245 11.0337 20.2825C11.2554 20.4393 11.5442 20.4393 11.7659 20.2825C11.819 20.245 11.9128 20.1761 12.0415 20.0775C12.2526 19.9158 12.4871 19.7277 12.7391 19.5149ZM13.8906 16.5062C13.2637 17.208 12.5901 17.851 11.9167 18.4197C11.7329 18.5749 11.5597 18.7156 11.3997 18.8409C11.2398 18.7156 11.0665 18.5749 10.8827 18.4197C10.2093 17.851 9.53572 17.208 8.90885 16.5062C7.15764 14.5456 6.11973 12.5275 6.11973 10.6001C6.11973 7.50729 8.48366 5.00009 11.3997 5.00009C14.3158 5.00009 16.6797 7.50729 16.6797 10.6001C16.6797 12.5275 15.6418 14.5456 13.8906 16.5062ZM11.3998 13.4001C9.94173 13.4001 8.75977 12.1465 8.75977 10.6001C8.75977 9.0537 9.94173 7.8001 11.3998 7.8001C12.8578 7.8001 14.0398 9.0537 14.0398 10.6001C14.0398 12.1465 12.8578 13.4001 11.3998 13.4001ZM12.7199 10.6001C12.7199 11.3733 12.1289 12.0001 11.3999 12.0001C10.6709 12.0001 10.0799 11.3733 10.0799 10.6001C10.0799 9.82689 10.6709 9.20009 11.3999 9.20009C12.1289 9.20009 12.7199 9.82689 12.7199 10.6001Z"]
  },
  marker_fill: {
    viewBox: "0 0 24 24",
    paths: ["M12.438 22c2.597-2.948 7.509-8.491 7.509-12.562 0-4.07-3.369-7.438-7.509-7.438C8.368 2 5 5.369 5 9.438c0 4.07 4.912 9.614 7.438 12.562zm0-15.65c1.755 0 3.158 1.404 3.158 3.088a3.144 3.144 0 01-3.158 3.158c-1.684 0-3.087-1.403-3.087-3.158 0-1.684 1.403-3.087 3.087-3.087z"]
  },
  minus: {
    viewBox: "0 0 24 24",
    paths: ["M5 13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z"]
  },
  plus: {
    viewBox: "0 0 24 24",
    paths: ["M11 11V5C11 4.44772 11.4477 4 12 4C12.5523 4 13 4.44772 13 5V11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H13V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H11Z", "M11 11V5C11 4.44772 11.4477 4 12 4C12.5523 4 13 4.44772 13 5V11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H13V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H11Z"]
  },
  more: {
    viewBox: "0 0 24 24",
    paths: ["M13.907 11.813c0 1.354-1.1 2.454-2.454 2.454A2.455 2.455 0 019 11.813c0-1.353 1.1-2.453 2.453-2.453 1.354 0 2.454 1.1 2.454 2.453zm-2.454-4.906c1.354 0 2.454-1.1 2.454-2.454C13.907 3.1 12.807 2 11.453 2A2.455 2.455 0 009 4.453c0 1.354 1.1 2.454 2.453 2.454zm0 9.813A2.455 2.455 0 009 19.173c0 1.354 1.1 2.454 2.453 2.454 1.354 0 2.454-1.1 2.454-2.454 0-1.353-1.1-2.453-2.454-2.453z"]
  },
  credits: {
    viewBox: "0 0 24 24",
    paths: ["M8.462 3c-1.722 0-3.282.338-4.45.922C2.845 4.506 2 5.377 2 6.452v10.34c0 1.065.835 1.932 2.006 2.517 1.17.585 2.733.929 4.456.929 1.448 0 2.78-.248 3.863-.674.847.43 1.802.674 2.814.674a6.253 6.253 0 006.246-6.247 6.253 6.253 0 00-6.246-6.246c-.075 0-.15.005-.223.007v-1.3c0-1.075-.838-1.946-2.005-2.53C11.743 3.338 10.183 3 8.46 3zm0 .868c1.61 0 3.064.334 4.078.842 1.015.507 1.528 1.153 1.528 1.743-.2.914-.87 1.418-1.528 1.736-1.014.508-2.469.842-4.078.842-1.61 0-3.065-.334-4.08-.842-.752-.39-1.436-.983-1.527-1.736 0-.59.513-1.236 1.528-1.743 1.014-.508 2.469-.842 4.079-.842zm-5.6 4.335c.318.293.713.555 1.15.774 1.168.584 2.728.922 4.45.922.746 0 1.46-.069 2.126-.188a6.276 6.276 0 00-1.211 1.864c-.298.026-.603.047-.916.047-1.607 0-3.059-.335-4.072-.841-1.013-.507-1.527-1.144-1.527-1.743v-.835zm12.276.404a5.378 5.378 0 015.385 5.384 5.378 5.378 0 01-5.385 5.385 5.378 5.378 0 01-5.384-5.385 5.378 5.378 0 015.384-5.384zm-12.276 2.18c.317.292.708.55 1.144.768 1.17.585 2.732.929 4.456.929.21 0 .414-.01.619-.02a6.27 6.27 0 00-.189 1.527c0 .07.005.14.007.209-.145.006-.29.007-.437.007-1.607 0-3.06-.335-4.072-.842-1.013-.506-1.528-1.143-1.528-1.743v-.834zm0 2.585c.317.292.708.55 1.144.767 1.17.585 2.732.93 4.456.93.176 0 .352-.006.525-.014.102.593.287 1.158.545 1.683a10.81 10.81 0 01-1.07.053c-1.607 0-3.06-.335-4.072-.841-1.013-.506-1.528-1.143-1.528-1.743v-.835zm0 2.585c.317.292.708.55 1.144.767 1.17.585 2.732.929 4.456.929.536 0 1.057-.03 1.554-.094a6.245 6.245 0 001.367 1.413c-.85.25-1.85.404-2.921.404-1.607 0-3.058-.335-4.072-.841-1.014-.507-1.528-1.144-1.528-1.744v-.834z"]
  },
  rewards: {
    viewBox: "0 0 24 24",
    paths: ["M10.663 15.912a.3.3 0 00-.299-.299H3.605a5.602 5.602 0 015.587-5.297c1.078 0 2.125.307 3.027.89a.299.299 0 00.324-.503 6.17 6.17 0 00-3.35-.984A6.2 6.2 0 003 15.911a.3.3 0 00.3.3h7.065a.3.3 0 00.298-.3h0zM9.09 9.163a3.587 3.587 0 003.582-3.583A3.585 3.585 0 009.09 2a3.584 3.584 0 00-3.58 3.58 3.585 3.585 0 003.58 3.583zm0-6.565a2.987 2.987 0 012.984 2.982 2.988 2.988 0 01-2.985 2.986A2.987 2.987 0 016.107 5.58 2.986 2.986 0 019.09 2.598z", "M18.945 19.427l-2.071-3.013c.395-.52.614-1.148.619-1.812a3.05 3.05 0 00-3.023-3.068 3.057 3.057 0 00-3.067 3.025c-.005.681.219 1.31.595 1.82L9.88 19.363a.299.299 0 00.306.465l1.675-.357.294 1.573a.3.3 0 00.556.087l1.712-3.168 1.667 3.192a.299.299 0 00.558-.08l.317-1.567 1.667.381a.299.299 0 00.312-.462h0zm-4.495-7.295h.015a2.45 2.45 0 012.43 2.466 2.425 2.425 0 01-.73 1.724 2.431 2.431 0 01-1.717.704h-.019A2.449 2.449 0 0112 14.562a2.453 2.453 0 012.45-2.43h0zm-1.863 7.97l-.195-1.044a.298.298 0 00-.356-.238l-1.225.262 1.596-2.25c.423.385.954.65 1.543.747l-1.363 2.523zm4.213-1.247a.3.3 0 00-.36.232l-.21 1.041-1.328-2.542a3.016 3.016 0 001.554-.724l1.562 2.27-1.219-.277z"]
  },
  shipping: {
    viewBox: "0 0 24 24",
    paths: ["M21.998 7.324L17.845 2H7.154L3 7.324V22h19l-.002-14.676zm-1.643-.357h-7.31V3.103h4.284l3.026 3.864zM7.668 3.103h4.283v3.864h-7.31l3.027-3.864zM4.062 20.895V8.037h16.873v12.858H4.063zm8.436-10.486l2.802 2.824-.772.78-1.514-1.527v5.78h-1.063v-5.78l-1.513 1.526-.772-.779 2.832-2.824z"]
  },
  return: {
    viewBox: "0 0 24 24",
    paths: ["M21.218 7.18L17.017 2H6.202L2 7.18v14.278h19.22L21.218 7.18zm-1.662-.348h-7.394V3.074h4.333l3.062 3.758zM6.723 3.074h4.333v3.758H3.661l3.061-3.758zm-3.648 17.31V7.873h17.07v12.51H3.073z", "M12.584 14.034l.44-.435h-2.543c-.339 0-.643.034-.882.201-.474.334-.576.87-.441 1.237.102.4.407.835 1.017.87.509.033 1.018.033 1.56.033h1.154c.34 0 .577.268.577.568-.002.3-.272.534-.578.534H10.99c-.305 0-.577 0-.883-.034a2.225 2.225 0 01-2.034-1.705c-.272-.969.102-1.939.95-2.507.508-.334 1.051-.4 1.525-.4h2.544l-.543-.436a.612.612 0 01-.17-.4c0-.134.068-.3.17-.401.103-.1.273-.134.408-.134a.63.63 0 01.406.168l1.459 1.437c.102.1.17.268.135.401 0 .133-.068.3-.17.4l-1.39 1.439a.63.63 0 01-.407.167.564.564 0 01-.407-.167.612.612 0 01-.17-.401.434.434 0 01.171-.435z"]
  },
  safety: {
    viewBox: "0 0 24 24",
    paths: ["M11.667 2a4.62 4.62 0 00-4.598 4.644V9.24h-1.61a.46.46 0 00-.459.46v9.196a.46.46 0 00.253.414l4.828 2.321c1.008.49 2.187.49 3.195 0l4.804-2.321a.46.46 0 00.253-.414V9.7a.46.46 0 00-.46-.46h-1.609V6.644A4.62 4.62 0 0011.666 2zM7.989 6.644a3.679 3.679 0 017.356 0V9.24H7.989V6.644zm9.425 11.954l-4.552 2.207a2.737 2.737 0 01-2.39 0L5.92 18.621v-8.46h11.494v8.437z", "M11.681 17.652a.563.563 0 00.563-.563v-2.252a.563.563 0 10-1.126 0v2.252a.563.563 0 00.563.563z"]
  },
  star: {
    viewBox: "0 0 11 10",
    paths: ["M5.5 0l1.235 3.8h3.996L7.498 6.15l1.235 3.8L5.5 7.6 2.267 9.95l1.235-3.8L.269 3.8h3.996L5.5 0z"]
  },
  show_password: {
    viewBox: "0 0 24 24",
    paths: ["M11.974 17.727c3.815 0 7.425-2.052 9.903-5.63a.41.41 0 000-.466C19.399 8.051 15.789 6 11.974 6 8.16 6 4.55 8.053 2.073 11.631a.409.409 0 000 .466c2.477 3.577 6.086 5.63 9.901 5.63zm0-10.909c3.46 0 6.749 1.836 9.065 5.046-2.316 3.21-5.606 5.045-9.065 5.045-3.46 0-6.749-1.834-9.064-5.045 2.314-3.211 5.604-5.046 9.064-5.046z", "M11.974 16.257a4.399 4.399 0 004.395-4.394 4.399 4.399 0 00-4.395-4.394 4.399 4.399 0 00-4.394 4.395 4.399 4.399 0 004.394 4.393zm0-7.97a3.58 3.58 0 013.576 3.576 3.58 3.58 0 01-3.576 3.576 3.58 3.58 0 01-3.576-3.576 3.58 3.58 0 013.576-3.576z", "M11.974 14.43a2.57 2.57 0 002.568-2.567 2.57 2.57 0 00-3.734-2.285.41.41 0 00-.21.468l.265 1.005-.876-.188a.41.41 0 00-.478.287 2.57 2.57 0 002.465 3.28z"]
  },
  phone: {
    viewBox: "0 0 24 24",
    paths: ["M16.028 20.747a7.54 7.54 0 01-1.845-.232c-4.461-1.124-10.827-7.49-11.95-11.95-.454-1.8-.241-3.611.614-5.236a2.466 2.466 0 011.825-1.301c.78-.116 1.55.134 2.11.694l1.825 1.825c.719.718.926 1.817.518 2.732-.214.482-.488.89-.813 1.214-.222.223-.267.592-.132 1.096.492 1.834 3.143 4.487 4.978 4.979.505.135.874.09 1.097-.133a4.01 4.01 0 011.214-.812c.915-.41 2.014-.201 2.732.517l1.825 1.825c.56.56.813 1.329.694 2.11a2.46 2.46 0 01-1.301 1.824 7.22 7.22 0 01-3.391.848zM5.044 3.25a1.224 1.224 0 00-1.092.662c-.72 1.367-.89 2.83-.508 4.348 1.017 4.04 7.003 10.027 11.043 11.043 1.517.383 2.98.211 4.348-.509.352-.186.588-.515.648-.906a1.2 1.2 0 00-.343-1.038l-1.825-1.825a1.215 1.215 0 00-1.34-.26c-.34.152-.623.338-.84.554-.385.386-1.098.779-2.302.457-2.29-.614-5.249-3.573-5.863-5.863-.323-1.204.07-1.918.456-2.303a2.77 2.77 0 00.554-.838c.2-.447.095-.985-.26-1.34L5.897 3.604a1.202 1.202 0 00-.853-.355z"]
  },
  drag: {
    viewBox: "0 0 24 24",
    paths: ["M13.836 9.603c-.234.17-.4.398-.493.65a1.404 1.404 0 00-2.08.584l-1.76-2.423a1.403 1.403 0 10-2.272 1.65l4.026 5.54-1.295-.576a1.403 1.403 0 00-1.141 2.564l.921.41c1 .449 2.101 1.641 3.104 2.09 1.4.624 3.467 1.286 3.584 1.325a.35.35 0 00.22-.666c-.116-.038-2.364-.782-3.52-1.302-.786-.353-2.012-1.607-3.102-2.087l-.922-.41a.702.702 0 01.571-1.283l2.4 1.069c.25.135.713-.218.466-.558L7.8 9.651a.702.702 0 111.135-.825l3.506 4.826a.351.351 0 10.568-.412l-1.032-1.42a.702.702 0 011.136-.824l1.031 1.42a.352.352 0 00.568-.414l-.619-.852a.701.701 0 111.136-.824l1.03 1.419a.351.351 0 00.569-.412l-.62-.852a.702.702 0 011.136-.825l1.444 1.987c1.35 1.86 1.503 4.456 2.577 5.935a.352.352 0 00.568-.413c-.926-1.275-1.221-4.068-2.577-5.934l-1.444-1.988a1.404 1.404 0 00-2.453.34 1.404 1.404 0 00-1.623.02zM5.085 7.892a.35.35 0 11.496.496L4.178 9.792a.35.35 0 01-.496 0L2.278 8.388a.351.351 0 01.497-.496l.804.805v-6.17a.351.351 0 11.701 0v6.172l.805-.807z"]
  },
  list: {
    viewBox: "0 0 24 24",
    paths: ["M2 3h20v3.636H2zM2 17.545h20v3.636H2zM2 10.273h12.727v3.636H2z"]
  },
  tiles: {
    viewBox: "0 0 24 24",
    paths: ["M2 2h4v4H2zM2 10h4v4H2zM2 18h4v4H2zM10 2h4v4h-4zM10 10h4v4h-4zM10 18h4v4h-4zM18 2h4v4h-4zM18 10h4v4h-4zM18 18h4v4h-4z"]
  },
  filter: {
    viewBox: "0 0 24 24",
    paths: ["M4.44 2H4.24A2.246 2.246 0 002 4.242v.199a2.247 2.247 0 002.241 2.252h.199a2.249 2.249 0 002.253-2.252v-.199A2.249 2.249 0 004.44 2zm1.613 2.44A1.605 1.605 0 014.44 6.054H4.24A1.606 1.606 0 012.64 4.441v-.199c0-.884.718-1.6 1.601-1.602h.199a1.603 1.603 0 011.613 1.602v.199zM11.811 2h-.214a2.246 2.246 0 00-2.235 2.242v.199a2.247 2.247 0 002.235 2.252h.214a2.247 2.247 0 002.236-2.252v-.199A2.246 2.246 0 0011.81 2zm1.603 2.44h-.001a1.604 1.604 0 01-1.602 1.613h-.214a1.604 1.604 0 01-1.601-1.602v-.199a1.604 1.604 0 011.601-1.612h.214c.884.001 1.601.718 1.602 1.602v.199zM19.17 2h-.199a2.249 2.249 0 00-2.253 2.242v.199a2.247 2.247 0 002.253 2.252h.198a2.247 2.247 0 002.242-2.252v-.199A2.246 2.246 0 0019.169 2zm1.601 2.44a1.607 1.607 0 01-1.602 1.613h-.198a1.604 1.604 0 01-1.613-1.612v-.199A1.602 1.602 0 0118.97 2.64h.198c.884.001 1.601.718 1.602 1.602v.199zM4.44 9.657H4.24A2.246 2.246 0 002 11.901v.199a2.246 2.246 0 002.241 2.242h.199a2.247 2.247 0 002.253-2.244V11.9A2.249 2.249 0 004.44 9.658zm1.613 2.44A1.604 1.604 0 014.451 13.7h-.199a1.605 1.605 0 01-1.612-1.601v-.199c0-.884.718-1.6 1.601-1.602h.199a1.602 1.602 0 011.613 1.604v.197zM11.813 9.657h-.215a2.247 2.247 0 00-2.235 2.244v.199a2.246 2.246 0 002.235 2.242h.215a2.247 2.247 0 002.235-2.244V11.9a2.246 2.246 0 00-2.235-2.243zm1.602 2.44c0 .886-.718 1.603-1.602 1.605h-.215a1.605 1.605 0 01-1.601-1.603v-.198c0-.885.717-1.602 1.601-1.604h.215c.883.002 1.6.718 1.601 1.602v.199zM19.17 9.657h-.199a2.247 2.247 0 00-2.253 2.244v.199a2.249 2.249 0 002.253 2.242h.198a2.246 2.246 0 002.242-2.244V11.9a2.246 2.246 0 00-2.242-2.243zm1.601 2.441c0 .884-.718 1.6-1.602 1.602h-.198a1.606 1.606 0 01-1.613-1.602V11.9c.001-.885.718-1.601 1.602-1.603h.198a1.604 1.604 0 011.613 1.604v.197zM11.813 17.318h-.215a2.246 2.246 0 00-2.235 2.241v.199A2.246 2.246 0 0011.598 22h.215a2.247 2.247 0 002.235-2.242v-.199a2.246 2.246 0 00-2.235-2.241zm1.602 2.44c-.002.884-.719 1.6-1.602 1.602h-.215a1.604 1.604 0 01-1.601-1.602v-.199c0-.883.718-1.6 1.601-1.601h.215c.883 0 1.6.718 1.601 1.601v.2z"]
  },
  filter2: {
    viewBox: "0 0 24 24",
    paths: ["M18.3998 11.5631H17.4398C17.2402 10.793 16.5452 10.2555 15.7493 10.2555C14.9534 10.2555 14.2584 10.793 14.0589 11.5631H5.44176C5.19805 11.5631 5 11.7611 5 12.0048C5 12.2486 5.19805 12.4466 5.44176 12.4466H14.0589C14.2584 13.2167 14.9534 13.7542 15.7493 13.7542C16.5452 13.7542 17.2402 13.2167 17.4398 12.4466H18.3998C18.6435 12.4466 18.8416 12.2486 18.8416 12.0048C18.8416 11.7611 18.6435 11.5631 18.3998 11.5631ZM15.7494 12.8707C15.399 12.8707 15.0839 12.6594 14.9499 12.3362C14.8151 12.013 14.8895 11.6404 15.1369 11.3923C15.385 11.1449 15.7575 11.0706 16.0807 11.2053C16.4039 11.3393 16.6152 11.6544 16.6152 12.0048C16.6152 12.4827 16.2272 12.8707 15.7494 12.8707L15.7494 12.8707ZM18.3998 15.8157H13.6113C13.4118 15.0456 12.7168 14.5081 11.9209 14.5081C11.125 14.5081 10.43 15.0456 10.2304 15.8157H5.44191C5.19821 15.8157 5.00015 16.0137 5.00015 16.2574C5.00015 16.5011 5.19821 16.6992 5.44191 16.6992H10.2304C10.43 17.4693 11.125 18.0068 11.9209 18.0068C12.7168 18.0068 13.4118 17.4693 13.6113 16.6992H18.3998C18.6435 16.6992 18.8416 16.5011 18.8416 16.2574C18.8416 16.0137 18.6435 15.8157 18.3998 15.8157ZM11.9208 17.1262C11.5704 17.1262 11.2553 16.9149 11.1213 16.5917C10.9865 16.2685 11.0609 15.8959 11.3083 15.6478C11.5564 15.4004 11.9289 15.3261 12.2521 15.4608C12.5753 15.5948 12.7867 15.9099 12.7867 16.2604C12.7867 16.7382 12.3986 17.1262 11.9208 17.1262L11.9208 17.1262ZM5.44183 8.1911H6.40191C6.60144 8.96121 7.29646 9.49868 8.09235 9.49868C8.88825 9.49868 9.58327 8.96121 9.78279 8.1911H18.3999C18.6436 8.1911 18.8417 7.99305 18.8417 7.74934C18.8417 7.50564 18.6436 7.30758 18.3999 7.30758H9.78279C9.58327 6.53747 8.88825 6 8.09235 6C7.29646 6 6.60144 6.53747 6.40191 7.30758H5.44183C5.19813 7.30758 5.00008 7.50564 5.00008 7.74934C5.00008 7.99305 5.19813 8.1911 5.44183 8.1911ZM8.09224 6.88352C8.4427 6.88352 8.7578 7.09483 8.89181 7.41803C9.02654 7.74124 8.95218 8.11379 8.7048 8.3619C8.45669 8.60928 8.08414 8.68364 7.76093 8.54891C7.43773 8.41491 7.22642 8.0998 7.22642 7.74934C7.22642 7.51962 7.31772 7.29949 7.4797 7.13678C7.64241 6.9748 7.86254 6.8835 8.09226 6.8835L8.09224 6.88352Z"]
  },
  sort: {
    viewBox: "0 0 24 24",
    paths: ["M7.08539 6.39352C6.96919 6.62961 6.96919 6.91304 7.10012 7.14912C7.10012 7.16511 7.11486 7.16511 7.11486 7.18048L10.5973 12.4844V18.4491C10.5973 18.6692 10.7135 18.8586 10.8875 18.9527C10.9601 18.984 11.0326 19 11.1052 19C11.2214 19 11.3376 18.9527 11.4243 18.874L13.2092 17.2527C13.3254 17.1426 13.3979 17.0006 13.3979 16.8279L13.3974 12.4689L16.8798 7.16505C16.8798 7.14907 16.8945 7.14907 16.8945 7.1337C17.0249 6.89761 17.0396 6.61418 16.9093 6.3781C16.7931 6.14201 16.5613 6.00061 16.3141 6.00061L7.67998 6C7.43342 6 7.20102 6.15739 7.08539 6.39348L7.08539 6.39352ZM15.6895 7.10178L12.483 11.9809C12.4252 12.0756 12.3816 12.1856 12.3816 12.2957V16.5612L11.6124 17.2535V12.2957C11.6124 12.1857 11.5835 12.0756 11.511 11.9809L8.31872 7.10184L15.6895 7.10178Z"]
  },
  account: {
    viewBox: "0 0 24 24",
    paths: ["M12.014 2c3.413 0 6.19 2.645 6.19 5.895 0 2.204-1.273 4.132-3.124 5.125 3.76 1.157 6.537 4.297 6.884 8.209.116.991-1.851 1.047-1.909.11-.405-3.912-3.934-6.887-8.041-6.887-4.166 0-7.637 2.975-8.042 6.887-.116.937-2.083.881-1.967-.11.405-3.857 3.182-7.052 6.884-8.21-1.852-.99-3.124-2.92-3.124-5.124C5.765 4.645 8.6 2 12.014 2zm0 1.873c-2.372 0-4.282 1.818-4.282 4.022 0 2.259 1.91 4.078 4.282 4.078 2.314 0 4.222-1.818 4.222-4.078 0-2.204-1.909-4.022-4.223-4.022z"]
  },
  login: {
    viewBox: "0 0 24 24",
    paths: ["M13.4397 20.4001H17.0397C18.2327 20.4001 19.1997 19.3744 19.1997 18.1092V5.89101C19.1997 4.62577 18.2327 3.6001 17.0397 3.6001H13.4397C13.0421 3.6001 12.7197 3.94199 12.7197 4.36373C12.7197 4.78548 13.0421 5.12737 13.4397 5.12737H17.0397C17.4374 5.12737 17.7597 5.46926 17.7597 5.89101V18.1092C17.7597 18.5309 17.4374 18.8728 17.0397 18.8728H13.4397C13.0421 18.8728 12.7197 19.2147 12.7197 19.6365C12.7197 20.0582 13.0421 20.4001 13.4397 20.4001ZM10.7706 14.5147C10.4895 14.8129 10.4895 15.2964 10.7706 15.5946C11.0518 15.8928 11.5077 15.8928 11.7889 15.5946L14.6649 12.5443C14.6806 12.5279 14.6955 12.5109 14.7097 12.4931C14.7495 12.4433 14.7823 12.3894 14.8081 12.3327C14.854 12.2322 14.8798 12.1193 14.8798 12.0001C14.8798 11.8767 14.8522 11.7602 14.8032 11.657C14.7811 11.6103 14.7541 11.5655 14.7224 11.5235C14.7042 11.4994 14.6847 11.4765 14.6639 11.4549L11.7889 8.40559C11.5077 8.10737 11.0518 8.10737 10.7706 8.40559C10.4895 8.70381 10.4895 9.18732 10.7706 9.48554L12.4215 11.2365H5.5198C5.12216 11.2365 4.7998 11.5784 4.7998 12.0001C4.7998 12.4218 5.12216 12.7637 5.5198 12.7637H12.4215L10.7706 14.5147Z", "M13.4397 20.4001H17.0397C18.2327 20.4001 19.1997 19.3744 19.1997 18.1092V5.89101C19.1997 4.62577 18.2327 3.6001 17.0397 3.6001H13.4397C13.0421 3.6001 12.7197 3.94199 12.7197 4.36373C12.7197 4.78548 13.0421 5.12737 13.4397 5.12737H17.0397C17.4374 5.12737 17.7597 5.46926 17.7597 5.89101V18.1092C17.7597 18.5309 17.4374 18.8728 17.0397 18.8728H13.4397C13.0421 18.8728 12.7197 19.2147 12.7197 19.6365C12.7197 20.0582 13.0421 20.4001 13.4397 20.4001ZM10.7706 14.5147C10.4895 14.8129 10.4895 15.2964 10.7706 15.5946C11.0518 15.8928 11.5077 15.8928 11.7889 15.5946L14.6649 12.5443C14.6806 12.5279 14.6955 12.5109 14.7097 12.4931C14.7495 12.4433 14.7823 12.3894 14.8081 12.3327C14.854 12.2322 14.8798 12.1193 14.8798 12.0001C14.8798 11.8767 14.8522 11.7602 14.8032 11.657C14.7811 11.6103 14.7541 11.5655 14.7224 11.5235C14.7042 11.4994 14.6847 11.4765 14.6639 11.4549L11.7889 8.40559C11.5077 8.10737 11.0518 8.10737 10.7706 8.40559C10.4895 8.70381 10.4895 9.18732 10.7706 9.48554L12.4215 11.2365H5.5198C5.12216 11.2365 4.7998 11.5784 4.7998 12.0001C4.7998 12.4218 5.12216 12.7637 5.5198 12.7637H12.4215L10.7706 14.5147Z"]
  },
  logout: {
    viewBox: "0 0 24 24",
    paths: ["M10.5598 18.8728H6.9598C6.56216 18.8728 6.2398 18.5309 6.2398 18.1092V5.89101C6.2398 5.46926 6.56216 5.12737 6.9598 5.12737H10.5598C10.9575 5.12737 11.2798 4.78548 11.2798 4.36373C11.2798 3.94199 10.9575 3.6001 10.5598 3.6001H6.9598C5.76687 3.6001 4.7998 4.62577 4.7998 5.89101V18.1092C4.7998 19.3744 5.76687 20.4001 6.9598 20.4001H10.5598C10.9575 20.4001 11.2798 20.0582 11.2798 19.6365C11.2798 19.2147 10.9575 18.8728 10.5598 18.8728ZM15.0908 14.5147C14.8096 14.8129 14.8096 15.2964 15.0908 15.5946C15.3719 15.8928 15.8278 15.8928 16.109 15.5946L18.989 12.5401C19.2702 12.2419 19.2702 11.7584 18.989 11.4601L16.109 8.40559C15.8278 8.10737 15.3719 8.10737 15.0908 8.40559C14.8096 8.70381 14.8096 9.18732 15.0908 9.48554L16.7416 11.2365H9.83973C9.44208 11.2365 9.11973 11.5784 9.11973 12.0001C9.11973 12.4218 9.44208 12.7637 9.83973 12.7637H16.7417L15.0908 14.5147Z", "M10.5598 18.8728H6.9598C6.56216 18.8728 6.2398 18.5309 6.2398 18.1092V5.89101C6.2398 5.46926 6.56216 5.12737 6.9598 5.12737H10.5598C10.9575 5.12737 11.2798 4.78548 11.2798 4.36373C11.2798 3.94199 10.9575 3.6001 10.5598 3.6001H6.9598C5.76687 3.6001 4.7998 4.62577 4.7998 5.89101V18.1092C4.7998 19.3744 5.76687 20.4001 6.9598 20.4001H10.5598C10.9575 20.4001 11.2798 20.0582 11.2798 19.6365C11.2798 19.2147 10.9575 18.8728 10.5598 18.8728ZM15.0908 14.5147C14.8096 14.8129 14.8096 15.2964 15.0908 15.5946C15.3719 15.8928 15.8278 15.8928 16.109 15.5946L18.989 12.5401C19.2702 12.2419 19.2702 11.7584 18.989 11.4601L16.109 8.40559C15.8278 8.10737 15.3719 8.10737 15.0908 8.40559C14.8096 8.70381 14.8096 9.18732 15.0908 9.48554L16.7416 11.2365H9.83973C9.44208 11.2365 9.11973 11.5784 9.11973 12.0001C9.11973 12.4218 9.44208 12.7637 9.83973 12.7637H16.7417L15.0908 14.5147Z"]
  },
  gift: {
    viewBox: "0 0 24 24",
    paths: ["M18.6 8.40005H15.8734C16.0794 8.04639 16.1997 7.63715 16.1997 7.19981C16.1997 5.88005 15.1204 4.80005 13.7999 4.80005C13.0841 4.80005 12.4407 5.11926 11.9999 5.6206C11.559 5.11926 10.9157 4.80005 10.1999 4.80005C8.87942 4.80005 7.80012 5.88005 7.80012 7.19981C7.80012 7.63645 7.92036 8.04567 8.12637 8.40005H5.40027C5.03956 8.40005 4.7998 8.63981 4.7998 8.99981V11.4003C4.7998 11.7603 5.03956 12 5.39957 12V18.6003C5.39957 18.9596 5.63933 19.2 5.99933 19.2H17.9996C18.3596 19.2 18.6 18.9596 18.6 18.6003V12C18.9593 12 19.1998 11.7603 19.1998 11.4003V8.99981C19.1998 8.63981 18.9593 8.40005 18.6 8.40005ZM17.9996 10.7998H12.5996V9.60028H17.9996V10.7998ZM13.7999 6.0003C14.4594 6.0003 15.0001 6.5403 15.0001 7.20054C15.0001 7.86008 14.4594 8.40007 13.7999 8.40007H12.5996V7.19984C12.5996 6.5403 13.1403 6.0003 13.7999 6.0003ZM8.99961 7.19983C8.99961 6.53959 9.53961 5.99959 10.1999 5.99959C10.8601 5.99959 11.4001 6.53959 11.4001 7.19983V8.40007H10.1999C9.53961 8.40007 8.99961 7.86007 8.99961 7.19983ZM6.00001 9.60031H11.4V10.7999H6.00001V9.60031ZM6.59981 12.0001H11.4001V17.9998H6.59981V12.0001ZM17.3999 17.9998H12.5996V12.0001H17.3999V17.9998Z"]
  }
};
/* harmony default export */ var icons_icons = (icons);
// EXTERNAL MODULE: ./node_modules/@storefront-ui/shared/variables/colors.js
var colors = __webpack_require__(40);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/shared/variables/sizes.js
// Icon sizes
const sizes = {
  xxs: "xxs",
  xs: "xs",
  sm: "sm",
  md: "md",
  lg: "lg",
  xl: "xl",
  xxl: "xxl",
  xl3: "xl3",
  xl4: "xl4"
}; // Typography sizes

const typographySizes = {
  "extra-small": "extra-small",
  "small": "small",
  "regular": "regular",
  "big": "big"
};
const sizesValues = Object.values(sizes);
/* harmony default export */ var variables_sizes = (sizes);
// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfBadge/SfBadge.vue + 4 modules
var SfBadge = __webpack_require__(38);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/atoms/SfIcon/SfIcon.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




const SF_ICONS = Object.keys(icons_icons);
/* harmony default export */ var SfIconvue_type_script_lang_js_ = ({
  name: "SfIcon",
  components: {
    SfBadge: SfBadge["a" /* default */]
  },
  props: {
    /**
     * Icon SVG path(s)
     * It can be single SVG path (string) or array of SVG paths or icon name
     * from our icons list (such as 'added_to_cart`)
     */
    icon: {
      type: [String, Array],
      default: ""
    },

    /**
     * Custom size of the icon
     * It can be our standard sizes, or `12px` or `1.2rem` or nothing.
     * Standard sizes: `xxs`, `xs`, `sm`, `md`, `lg`, `xl`, `xxl`, `xl3`, `xl4`.
     */
    size: {
      type: String,
      default: ""
    },

    /**
     * Custom color of the icon
     * It can be according to our standard colors, or legitimate CSS color such as `#fff`, `rgb(255,255,255)`), and `lightgray` or nothing.
     * Standard colors: `white`, `black`, `green-primary`, `green-secondary`, `gray-primary`, `gray-secondary`, `light-primary`, `light-secondary`, `pink-primary`, `pink-secondary`, `yellow-primary`, `yellow-secondary`, `blue-primary`, `blue-secondary`, `accent`.
     */
    color: {
      type: String,
      default: ""
    },

    /**
     * Custom viewBox size of the icon
     * It should be according to the standard `"min-x min-y width height"`.
     * By default it will be `0 0 24 24`. If you use our icons, you don't need to pass this prop at all.
     * Recommendations: try to get your SVG designed with our default viewBox value and reduce the number of props passed to the component.
     */
    viewBox: {
      type: String,
      default: "0 0 24 24"
    },
    hasBadge: {
      type: Boolean,
      default: false
    },
    badgeLabel: {
      type: String,
      default: ""
    },

    /**
     * The fraction in which the icon is partially collored with --icon-color value and the rest with --icon-color-negative.
     * To be used in SfRating.
     * */
    coverage: {
      type: [String, Number],
      default: 1
    }
  },
  computed: {
    isSFColors() {
      return colors["b" /* iconColorsValues */].includes(this.color.trim());
    },

    isSFSizes() {
      const size = this.size.trim();
      return sizesValues.includes(size);
    },

    iconColorClass() {
      return this.isSFColors ? `color-${this.color.trim()}` : "";
    },

    iconSizeClass() {
      return this.isSFSizes ? `size-${this.size.trim()}` : "";
    },

    iconCustomStyle() {
      return {
        "--icon-color": !this.isSFColors ? this.color : "",
        "--icon-size": !this.isSFSizes ? this.size : ""
      };
    },

    isSFIcons() {
      if (typeof this.icon === "string") {
        return SF_ICONS.includes(this.icon.trim());
      } else return null;
    },

    iconViewBox() {
      return this.isSFIcons ? icons_icons[this.icon].viewBox || this.viewBox : this.viewBox;
    },

    iconPaths() {
      if (this.isSFIcons) {
        return icons_icons[this.icon].paths;
      } else {
        return Array.isArray(this.icon) ? this.icon : [this.icon];
      }
    },

    fillPath() {
      return this.coverage === 1 ? "var(--icon-color)" : this.fillUrl(this.coverage);
    }

  },
  methods: {
    fillUrl(index) {
      return "url(#" + index + ")";
    }

  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfIcon/SfIcon.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfIcon_SfIconvue_type_script_lang_js_ = (SfIconvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfIcon/SfIcon.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(136)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SfIcon_SfIconvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "280773c7"
  
)

/* harmony default export */ var SfIcon = __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/atoms/SfButton/SfButton.vue?vue&type=template&id=c6536c3a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.tag,_vm._g(_vm._b({directives:[{name:"focus",rawName:"v-focus"}],tag:"component",staticClass:"sf-button",class:{
    'is-disabled--button': _vm.buttonActive,
    'is-disabled--link': _vm.linkActive,
  },attrs:{"disabled":_vm.disabled,"link":_vm.link}},'component',_vm.$attrs,false),_vm.$listeners),[_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfButton/SfButton.vue?vue&type=template&id=c6536c3a&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/utilities/directives/focus/focus-directive.js
var focus_directive = __webpack_require__(236);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfLink/SfLink.vue + 4 modules
var SfLink = __webpack_require__(13);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/atoms/SfButton/SfButton.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var SfButtonvue_type_script_lang_js_ = ({
  name: "SfButton",
  components: {
    SfLink: SfLink["a" /* default */]
  },
  directives: {
    focus: focus_directive["a" /* focus */]
  },
  props: {
    /**
     * Native button disabled attribute
     */
    disabled: {
      type: Boolean,
      default: false
    },

    /**
     * Link for "a" tag, when empty it is button.
     */
    link: {
      type: [String, Object],
      default: ""
    }
  },
  computed: {
    tag() {
      return this.link ? "SfLink" : "button";
    },

    linkActive() {
      return this.link && this.disabled;
    },

    buttonActive() {
      return !this.link && this.disabled;
    }

  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfButton/SfButton.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfButton_SfButtonvue_type_script_lang_js_ = (SfButtonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfButton/SfButton.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(116)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SfButton_SfButtonvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "f6bc5332"
  
)

/* harmony default export */ var SfButton = __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ composables_useUiHelpers; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ composables_useUiState; });

// EXTERNAL MODULE: external "@vue/composition-api"
var composition_api_ = __webpack_require__(0);
var composition_api_default = /*#__PURE__*/__webpack_require__.n(composition_api_);

// CONCATENATED MODULE: ./composables/useUiHelpers/index.ts

const nonFilters = ['page', 'sort', 'term', 'itemsPerPage'];

const getContext = () => {
  const vm = Object(composition_api_["getCurrentInstance"])();
  return vm.$root;
};

const reduceFilters = query => (prev, curr) => {
  const makeArray = Array.isArray(query[curr]) || nonFilters.includes(curr);
  return { ...prev,
    [curr]: makeArray ? query[curr] : [query[curr]]
  };
};

const getFiltersDataFromUrl = (context, onlyFilters) => {
  const {
    query
  } = context.$router.history.current;
  return Object.keys(query).filter(f => onlyFilters ? !nonFilters.includes(f) : nonFilters.includes(f)).reduce(reduceFilters(query), {});
};

const useUiHelpers = () => {
  const context = getContext();

  const getFacetsFromURL = () => {
    const {
      query,
      params
    } = context.$router.history.current;
    const categorySlug = Object.keys(params).reduce((prev, curr) => params[curr] || prev, params.slug_1);
    return {
      rootCatSlug: params.slug_1,
      categorySlug,
      page: parseInt(query.page, 10) || 1,
      sort: query.sort || 'latest',
      filters: getFiltersDataFromUrl(context, true),
      itemsPerPage: parseInt(query.itemsPerPage, 10) || 20,
      term: query.term
    };
  };

  const getCatLink = category => {
    return `/c/${context.$route.params.slug_1}/${category.slug}`;
  };

  const changeSorting = sort => {
    const {
      query
    } = context.$router.history.current;
    context.$router.push({
      query: { ...query,
        sort
      }
    });
  };

  const changeFilters = filters => {
    context.$router.push({
      query: { ...getFiltersDataFromUrl(context, false),
        ...filters
      }
    });
  };

  const changeItemsPerPage = itemsPerPage => {
    context.$router.push({
      query: { ...getFiltersDataFromUrl(context, false),
        itemsPerPage
      }
    });
  };

  const changeSearchTerm = term => {
    context.$router.push({
      query: { ...getFiltersDataFromUrl(context, false),
        term: term || undefined
      }
    });
  };

  const isFacetColor = facet => facet.id === 'color';

  const isFacetCheckbox = () => false;

  return {
    getFacetsFromURL,
    getCatLink,
    changeSorting,
    changeFilters,
    changeItemsPerPage,
    changeSearchTerm,
    isFacetColor,
    isFacetCheckbox
  };
};

/* harmony default export */ var composables_useUiHelpers = (useUiHelpers);
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(3);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./composables/useUiState.ts

 // We need to register it again because of Vue instance instantiation issues

external_vue_default.a.use(composition_api_default.a);
const state = Object(composition_api_["reactive"])({
  isCartSidebarOpen: false,
  isWishlistSidebarOpen: false,
  isLoginModalOpen: false,
  isCategoryGridView: true,
  isFilterSidebarOpen: false
});

const useUiState = () => {
  const isCartSidebarOpen = Object(composition_api_["computed"])(() => state.isCartSidebarOpen);

  const toggleCartSidebar = () => {
    state.isCartSidebarOpen = !state.isCartSidebarOpen;
  };

  const isWishlistSidebarOpen = Object(composition_api_["computed"])(() => state.isWishlistSidebarOpen);

  const toggleWishlistSidebar = () => {
    state.isWishlistSidebarOpen = !state.isWishlistSidebarOpen;
  };

  const isLoginModalOpen = Object(composition_api_["computed"])(() => state.isLoginModalOpen);

  const toggleLoginModal = () => {
    state.isLoginModalOpen = !state.isLoginModalOpen;
  };

  const isCategoryGridView = Object(composition_api_["computed"])(() => state.isCategoryGridView);

  const toggleCategoryGridView = () => {
    state.isCategoryGridView = !state.isCategoryGridView;
  };

  const isFilterSidebarOpen = Object(composition_api_["computed"])(() => state.isFilterSidebarOpen);

  const toggleFilterSidebar = () => {
    state.isFilterSidebarOpen = !state.isFilterSidebarOpen;
  };

  return {
    isCartSidebarOpen,
    isWishlistSidebarOpen,
    isLoginModalOpen,
    isCategoryGridView,
    isFilterSidebarOpen,
    toggleCartSidebar,
    toggleWishlistSidebar,
    toggleLoginModal,
    toggleCategoryGridView,
    toggleFilterSidebar
  };
};

/* harmony default export */ var composables_useUiState = (useUiState);
// CONCATENATED MODULE: ./composables/index.ts




/***/ }),
/* 12 */,
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/atoms/SfLink/SfLink.vue?vue&type=template&id=5b85fe24&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.linkComponentTag,_vm._g(_vm._b({directives:[{name:"focus",rawName:"v-focus"}],tag:"component",staticClass:"sf-link"},'component',_vm.urlTag,false),_vm.$listeners),[_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfLink/SfLink.vue?vue&type=template&id=5b85fe24&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/utilities/directives/focus/focus-directive.js
var focus_directive = __webpack_require__(236);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/atoms/SfLink/SfLink.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var SfLinkvue_type_script_lang_js_ = ({
  name: "SfLink",
  directives: {
    focus: focus_directive["a" /* focus */]
  },
  props: {
    /**
     * Page route
     */
    link: {
      type: [String, Object],
      default: ""
    }
  },
  computed: {
    isExternal() {
      return typeof this.link === "string" && this.link.search(/(^\/|^#)/g) === -1;
    },

    isNativeLinkTag() {
      return this.isExternal || !this.$router;
    },

    urlTag() {
      return this.isNativeLinkTag ? {
        href: this.link
      } : {
        to: this.link
      };
    },

    linkComponentTag() {
      const routerLink = this.$nuxt ? "nuxt-link" : "router-link";
      return this.isNativeLinkTag ? "a" : routerLink;
    }

  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfLink/SfLink.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfLink_SfLinkvue_type_script_lang_js_ = (SfLinkvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfLink/SfLink.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(114)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SfLink_SfLinkvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "23437eb2"
  
)

/* harmony default export */ var SfLink = __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 14 */,
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/atoms/SfCircleIcon/SfCircleIcon.vue?vue&type=template&id=0014e052&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('SfButton',_vm._g({staticClass:"sf-circle-icon",attrs:{"disabled":_vm.disabled}},_vm.$listeners),[_vm._t("default",[_c('SfIcon',{staticClass:"sf-circle-icon__icon",attrs:{"aria-hidden":"true","icon":_vm.icon,"color":_vm.iconColor,"size":_vm.iconSize,"badge-label":_vm.badgeLabel,"has-badge":_vm.hasBadge}})])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfCircleIcon/SfCircleIcon.vue?vue&type=template&id=0014e052&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfButton/SfButton.vue + 4 modules
var SfButton = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfIcon/SfIcon.vue + 6 modules
var SfIcon = __webpack_require__(9);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/atoms/SfCircleIcon/SfCircleIcon.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var SfCircleIconvue_type_script_lang_js_ = ({
  name: "SfCircleIcon",
  components: {
    SfButton: SfButton["a" /* default */],
    SfIcon: SfIcon["a" /* default */]
  },
  props: {
    icon: {
      type: [String, Array],
      default: "home"
    },
    iconColor: {
      type: String,
      default: ""
    },
    iconSize: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    hasBadge: {
      type: Boolean,
      default: false
    },
    badgeLabel: {
      type: String,
      default: ""
    }
  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfCircleIcon/SfCircleIcon.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfCircleIcon_SfCircleIconvue_type_script_lang_js_ = (SfCircleIconvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfCircleIcon/SfCircleIcon.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(138)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SfCircleIcon_SfCircleIconvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "6a82f147"
  
)

/* harmony default export */ var SfCircleIcon = __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("@nuxt/ufo");

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export onMediaMatch */
/* unused harmony export setupListener */
/* unused harmony export tearDownListener */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mapMobileObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return unMapMobileObserver; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

let observer;
const isMobileMax = 1023;
const onMediaMatch = e => {
  if (!e.matches) return;
  observer.isMobile = e.matches;
};
const setupListener = () => {
  if (typeof window === "undefined" || typeof document === "undefined" || !window.matchMedia) {
    return;
  }

  observer.isMobile = Math.max(document.documentElement.clientWidth, window.innerWidth) <= isMobileMax;
  window.matchMedia(`(max-width: ${isMobileMax}px)`).addListener(onMediaMatch);
  observer.isInitialized = true;
};
const tearDownListener = () => {
  if (typeof window !== "undefined" && typeof document !== "undefined" && window.matchMedia) {
    window.matchMedia(`(max-width: ${isMobileMax}px)`).removeListener(onMediaMatch);
  }
};
const mapMobileObserver = () => {
  if (!observer) {
    observer = vue__WEBPACK_IMPORTED_MODULE_0___default.a.observable({
      isMobile: false,
      clients: 0,
      isInitialized: false
    });
  }

  observer.clients += 1;
  return {
    isMobile: {
      get() {
        if (observer && !observer.isInitialized) {
          setupListener();
        }

        return observer ? observer.isMobile : false;
      }

    },
    mobileObserverClients: {
      get() {
        return observer ? observer.clients : 0;
      }

    },
    mobileObserverIsInitialized: {
      get() {
        return observer ? observer.isInitialized : false;
      }

    }
  };
};
const unMapMobileObserver = () => {
  if (observer) {
    observer.clients -= 1;

    if (observer.clients === 0) {
      observer = null;
      tearDownListener();
    }
  } else {
    tearDownListener();
  }
};

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/atoms/SfOverlay/SfOverlay.vue?vue&type=template&id=0eff947d&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":_vm.transition}},[(_vm.visible)?_c('div',{ref:"overlay",staticClass:"sf-overlay",class:[_vm.staticClass, _vm.className],on:{"click":function($event){return _vm.$emit('click')}}}):_vm._e()])}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfOverlay/SfOverlay.vue?vue&type=template&id=0eff947d&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/atoms/SfOverlay/SfOverlay.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var SfOverlayvue_type_script_lang_js_ = ({
  name: "SfOverlay",
  props: {
    /**
     * Transition effect to apply when overlay visibility is changed
     */
    transition: {
      type: String,
      default: "sf-fade"
    },

    /**
     * Visibility state
     */
    visible: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    staticClass() {
      return this.$vnode.data.staticClass;
    },

    className() {
      return this.$vnode.data.class;
    }

  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfOverlay/SfOverlay.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfOverlay_SfOverlayvue_type_script_lang_js_ = (SfOverlayvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfOverlay/SfOverlay.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(132)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SfOverlay_SfOverlayvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "35d60e49"
  
)

/* harmony default export */ var SfOverlay = __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("body-scroll-lock");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("vee-validate");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("vue-meta");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 24 */,
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/atoms/SfImage/SfImage.vue?vue&type=template&id=02172db7&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',_vm._g({staticClass:"sf-image",class:{ 'has-size': _vm.size },style:(_vm.size)},_vm.$listeners),[_vm._ssrNode((((_vm.isSrcset && _vm.isSrcsetArray) || _vm.isSrcObject)?("<picture>"+(_vm._ssrList((_vm.getSrcsetWhenIsArray.srcset),function(srcItem,i){return ("<source"+(_vm._ssrAttr("srcset",srcItem.src))+(_vm._ssrAttr("media",srcItem.media))+(_vm._ssrAttr("type",srcItem.type))+">")}))+" <img"+(_vm._ssrAttr("src",_vm.getSrcsetWhenIsArray.src))+(_vm._ssrAttr("width",_vm.width))+(_vm._ssrAttr("height",_vm.height))+(_vm._ssrAttrs(_vm.$attrs))+(_vm._ssrStyle(null,null, { display: (_vm.getSrcsetWhenIsArray.src) ? '' : 'none' }))+"></picture>"):("<img"+(_vm._ssrAttr("width",_vm.width))+(_vm._ssrAttr("height",_vm.height))+(_vm._ssrAttrs(Object.assign({}, _vm.$attrs, _vm.getSrcOrSrcset)))+(_vm._ssrStyle(null,null, { display: (_vm.getSrcOrSrcset) ? '' : 'none' }))+">"))+" "+((_vm.noscript)?("<noscript><img"+(_vm._ssrAttr("src",_vm.noscript))+(_vm._ssrAttr("width",_vm.width))+(_vm._ssrAttr("height",_vm.height))+(_vm._ssrAttrs(_vm.$attrs))+" class=\"noscript\"></noscript>"):"<!---->")+" "),(_vm.hasOverlay)?_vm._ssrNode("<div class=\"sf-image__overlay\">","</div>",[_vm._t("default")],2):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfImage/SfImage.vue?vue&type=template&id=02172db7&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/utilities/helpers/deprecation-warning.js
var deprecation_warning = __webpack_require__(237);

// EXTERNAL MODULE: external "lozad"
var external_lozad_ = __webpack_require__(94);
var external_lozad_default = /*#__PURE__*/__webpack_require__.n(external_lozad_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/atoms/SfImage/SfImage.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var SfImagevue_type_script_lang_js_ = ({
  name: "SfImage",
  inheritAttrs: false,
  props: {
    src: {
      type: [String, Object],
      default: ""
    },
    srcset: {
      type: [String, Array],
      default: ""
    },
    lazy: {
      type: Boolean,
      default: true
    },
    width: {
      type: [String, Number],
      default: null
    },
    height: {
      type: [String, Number],
      default: null
    },
    rootMargin: {
      type: String,
      default: "0px 0px 0px 0px"
    },
    threshold: {
      type: [String, Number],
      default: 0
    }
  },

  data() {
    return {
      isLoaded: false
    };
  },

  computed: {
    // TODO: To be removed if src as an object will not be available anymore
    isSrcObject() {
      return !!this.src && typeof this.src === "object";
    },

    isSrcset() {
      return !!this.srcset.length;
    },

    isSrcsetArray() {
      return !!Array.isArray(this.srcset);
    },

    isLazyAndNotLoaded() {
      return !this.isLoaded && this.lazy;
    },

    getSrcsetWhenIsArray() {
      if (this.isLazyAndNotLoaded) {
        return {
          srcset: [{
            media: null,
            src: null,
            type: null
          }],
          src: this.src
        };
      } // TODO: To be removed if src as an object will not be available anymore


      if (this.isSrcObject) {
        Object(deprecation_warning["a" /* deprecationWarning */])(this.$options.name, "Prop 'src' type should be a string, the object type is deprecated, change the prop type.");
        return {
          src: this.src.desktop && this.src.desktop.url,
          srcset: [{
            src: this.src.mobile && this.src.mobile.url,
            media: `(max-width: 1023px)`
          }, {
            src: this.src.desktop && this.src.desktop.url,
            media: `(min-width: 1024px)`
          }]
        };
      }

      return {
        srcset: this.srcset,
        src: this.src
      };
    },

    getSrcOrSrcset() {
      if (this.isLazyAndNotLoaded) {
        return this.isSrcset ? {
          src: null,
          srcset: null
        } : {
          src: null
        };
      }

      return this.isSrcset ? {
        src: this.src,
        srcset: this.srcset
      } : {
        src: this.src
      };
    },

    noscript() {
      return this.isSrcsetArray && this.srcset.length && this.srcset[0].src || this.src;
    },

    size() {
      return this.width && this.height && {
        "--_image-width": this.width,
        "--_image-height": this.height
      };
    },

    hasOverlay() {
      return this.$slots.default;
    }

  },

  mounted() {
    if (!this.lazy) return;
    const vm = this;
    this.$nextTick(() => {
      const observer = external_lozad_default()(vm.$el, {
        load() {
          vm.isLoaded = true;
        },

        rootMargin: vm.rootMargin,
        threshold: vm.threshold
      });
      observer.observe();
    });
  }

});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfImage/SfImage.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfImage_SfImagevue_type_script_lang_js_ = (SfImagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfImage/SfImage.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(118)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SfImage_SfImagevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "159c9e9f"
  
)

/* harmony default export */ var SfImage = __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/atoms/SfHeading/SfHeading.vue?vue&type=template&id=1c3d2ed6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-heading"},[_vm._t("title",[_c(("h" + _vm.level),{tag:"component",staticClass:"sf-heading__title",class:_vm.level > 1 && ("h" + _vm.level)},[_vm._v("\n      "+_vm._s(_vm.title)+"\n    ")])],null,{ title: _vm.title }),_vm._ssrNode(" "),_vm._t("description",[(_vm.hasDescription)?_c('div',{staticClass:"sf-heading__description"},[_vm._v("\n      "+_vm._s(_vm.description)+"\n    ")]):_vm._e()],null,{ description: _vm.description })],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfHeading/SfHeading.vue?vue&type=template&id=1c3d2ed6&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/atoms/SfHeading/SfHeading.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var SfHeadingvue_type_script_lang_js_ = ({
  name: "SfHeading",
  props: {
    /**
     * Heading level
     */
    level: {
      type: Number,
      default: 2
    },

    /**
     * Heading title
     */
    title: {
      type: String,
      default: ""
    },

    /**
     * Heading description
     */
    description: {
      type: String,
      default: ""
    }
  },
  computed: {
    hasDescription() {
      return !!this.description || this.$slots.hasOwnProperty("description");
    }

  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfHeading/SfHeading.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfHeading_SfHeadingvue_type_script_lang_js_ = (SfHeadingvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfHeading/SfHeading.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(120)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SfHeading_SfHeadingvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "3b870da6"
  
)

/* harmony default export */ var SfHeading = __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/molecules/SfBar/SfBar.vue?vue&type=template&id=c8edae50&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-bar"},[_vm._ssrNode("<div>","</div>",[_vm._t("back",[(_vm.back)?_c('SfButton',{staticClass:"sf-button--pure sf-bar__icon",attrs:{"aria-label":"back","type":"button"},on:{"click":function($event){return _vm.$emit('click:back')}}},[_c('SfIcon',{attrs:{"icon":"chevron_left","size":"0.875rem"}})],1):_vm._e()])],2),_vm._ssrNode(" "),_vm._ssrNode("<div>","</div>",[_vm._t("title",[_c('div',{staticClass:"sf-bar__title"},[_vm._v(_vm._s(_vm.title))])],null,{ title: _vm.title })],2),_vm._ssrNode(" "),_vm._ssrNode("<div>","</div>",[_vm._t("close",[(_vm.close)?_c('SfButton',{staticClass:"sf-button--pure sf-bar__icon",attrs:{"aria-label":"close","type":"button"},on:{"click":function($event){return _vm.$emit('click:close')}}},[_c('SfIcon',{attrs:{"icon":"cross","size":"14px"}})],1):_vm._e()])],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfBar/SfBar.vue?vue&type=template&id=c8edae50&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfIcon/SfIcon.vue + 6 modules
var SfIcon = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfButton/SfButton.vue + 4 modules
var SfButton = __webpack_require__(10);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/molecules/SfBar/SfBar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var SfBarvue_type_script_lang_js_ = ({
  name: "SfBar",
  components: {
    SfIcon: SfIcon["a" /* default */],
    SfButton: SfButton["a" /* default */]
  },
  props: {
    title: {
      type: String,
      default: ""
    },
    back: {
      type: Boolean,
      default: false
    },
    close: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfBar/SfBar.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfBar_SfBarvue_type_script_lang_js_ = (SfBarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfBar/SfBar.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(148)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SfBar_SfBarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "6e35c5fa"
  
)

/* harmony default export */ var SfBar = __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("vue-no-ssr");

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export alpha */
/* unused harmony export alpha_dash */
/* unused harmony export alpha_num */
/* unused harmony export alpha_spaces */
/* unused harmony export between */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return confirmed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return digits; });
/* unused harmony export dimensions */
/* unused harmony export double */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return email; });
/* unused harmony export excluded */
/* unused harmony export ext */
/* unused harmony export image */
/* unused harmony export integer */
/* unused harmony export is */
/* unused harmony export is_not */
/* unused harmony export length */
/* unused harmony export max */
/* unused harmony export max_value */
/* unused harmony export mimes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return min; });
/* unused harmony export min_value */
/* unused harmony export numeric */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return oneOf; });
/* unused harmony export regex */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return required; });
/* unused harmony export required_if */
/* unused harmony export size */
/**
  * vee-validate v3.4.5
  * (c) 2020 Abdelrahman Awad
  * @license MIT
  */

/**
 * Some Alpha Regex helpers.
 * https://github.com/chriso/validator.js/blob/master/src/lib/alpha.js
 */

/* eslint-disable no-misleading-character-class */
var alpha = {
  en: /^[A-Z]*$/i,
  cs: /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]*$/i,
  da: /^[A-ZÆØÅ]*$/i,
  de: /^[A-ZÄÖÜß]*$/i,
  es: /^[A-ZÁÉÍÑÓÚÜ]*$/i,
  fa: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰپژگچکی]*$/,
  fr: /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]*$/i,
  it: /^[A-Z\xC0-\xFF]*$/i,
  lt: /^[A-ZĄČĘĖĮŠŲŪŽ]*$/i,
  nl: /^[A-ZÉËÏÓÖÜ]*$/i,
  hu: /^[A-ZÁÉÍÓÖŐÚÜŰ]*$/i,
  pl: /^[A-ZĄĆĘŚŁŃÓŻŹ]*$/i,
  pt: /^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]*$/i,
  ro: /^[A-ZĂÂÎŞŢ]*$/i,
  ru: /^[А-ЯЁ]*$/i,
  sk: /^[A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ]*$/i,
  sr: /^[A-ZČĆŽŠĐ]*$/i,
  sv: /^[A-ZÅÄÖ]*$/i,
  tr: /^[A-ZÇĞİıÖŞÜ]*$/i,
  uk: /^[А-ЩЬЮЯЄІЇҐ]*$/i,
  ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]*$/,
  az: /^[A-ZÇƏĞİıÖŞÜ]*$/i,
  el: /^[Α-ώ]*$/i
};
var alphaSpaces = {
  en: /^[A-Z\s]*$/i,
  cs: /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ\s]*$/i,
  da: /^[A-ZÆØÅ\s]*$/i,
  de: /^[A-ZÄÖÜß\s]*$/i,
  es: /^[A-ZÁÉÍÑÓÚÜ\s]*$/i,
  fa: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰپژگچکی]*$/,
  fr: /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ\s]*$/i,
  it: /^[A-Z\xC0-\xFF\s]*$/i,
  lt: /^[A-ZĄČĘĖĮŠŲŪŽ\s]*$/i,
  nl: /^[A-ZÉËÏÓÖÜ\s]*$/i,
  hu: /^[A-ZÁÉÍÓÖŐÚÜŰ\s]*$/i,
  pl: /^[A-ZĄĆĘŚŁŃÓŻŹ\s]*$/i,
  pt: /^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ\s]*$/i,
  ro: /^[A-ZĂÂÎŞŢ\s]*$/i,
  ru: /^[А-ЯЁ\s]*$/i,
  sk: /^[A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ\s]*$/i,
  sr: /^[A-ZČĆŽŠĐ\s]*$/i,
  sv: /^[A-ZÅÄÖ\s]*$/i,
  tr: /^[A-ZÇĞİıÖŞÜ\s]*$/i,
  uk: /^[А-ЩЬЮЯЄІЇҐ\s]*$/i,
  ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ\s]*$/,
  az: /^[A-ZÇƏĞİıÖŞÜ\s]*$/i,
  el: /^[Α-ώ\s]*$/i
};
var alphanumeric = {
  en: /^[0-9A-Z]*$/i,
  cs: /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]*$/i,
  da: /^[0-9A-ZÆØÅ]$/i,
  de: /^[0-9A-ZÄÖÜß]*$/i,
  es: /^[0-9A-ZÁÉÍÑÓÚÜ]*$/i,
  fa: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰپژگچکی]*$/,
  fr: /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]*$/i,
  it: /^[0-9A-Z\xC0-\xFF]*$/i,
  lt: /^[0-9A-ZĄČĘĖĮŠŲŪŽ]*$/i,
  hu: /^[0-9A-ZÁÉÍÓÖŐÚÜŰ]*$/i,
  nl: /^[0-9A-ZÉËÏÓÖÜ]*$/i,
  pl: /^[0-9A-ZĄĆĘŚŁŃÓŻŹ]*$/i,
  pt: /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]*$/i,
  ro: /^[0-9A-ZĂÂÎŞŢ]*$/i,
  ru: /^[0-9А-ЯЁ]*$/i,
  sk: /^[0-9A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ]*$/i,
  sr: /^[0-9A-ZČĆŽŠĐ]*$/i,
  sv: /^[0-9A-ZÅÄÖ]*$/i,
  tr: /^[0-9A-ZÇĞİıÖŞÜ]*$/i,
  uk: /^[0-9А-ЩЬЮЯЄІЇҐ]*$/i,
  ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]*$/,
  az: /^[0-9A-ZÇƏĞİıÖŞÜ]*$/i,
  el: /^[0-9Α-ώ]*$/i
};
var alphaDash = {
  en: /^[0-9A-Z_-]*$/i,
  cs: /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ_-]*$/i,
  da: /^[0-9A-ZÆØÅ_-]*$/i,
  de: /^[0-9A-ZÄÖÜß_-]*$/i,
  es: /^[0-9A-ZÁÉÍÑÓÚÜ_-]*$/i,
  fa: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰپژگچکی]*$/,
  fr: /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ_-]*$/i,
  it: /^[0-9A-Z\xC0-\xFF_-]*$/i,
  lt: /^[0-9A-ZĄČĘĖĮŠŲŪŽ_-]*$/i,
  nl: /^[0-9A-ZÉËÏÓÖÜ_-]*$/i,
  hu: /^[0-9A-ZÁÉÍÓÖŐÚÜŰ_-]*$/i,
  pl: /^[0-9A-ZĄĆĘŚŁŃÓŻŹ_-]*$/i,
  pt: /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ_-]*$/i,
  ro: /^[0-9A-ZĂÂÎŞŢ_-]*$/i,
  ru: /^[0-9А-ЯЁ_-]*$/i,
  sk: /^[0-9A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ_-]*$/i,
  sr: /^[0-9A-ZČĆŽŠĐ_-]*$/i,
  sv: /^[0-9A-ZÅÄÖ_-]*$/i,
  tr: /^[0-9A-ZÇĞİıÖŞÜ_-]*$/i,
  uk: /^[0-9А-ЩЬЮЯЄІЇҐ_-]*$/i,
  ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ_-]*$/,
  az: /^[0-9A-ZÇƏĞİıÖŞÜ_-]*$/i,
  el: /^[0-9Α-ώ_-]*$/i
};

var validate = function (value, _a) {
  var _b = (_a === void 0 ? {} : _a).locale,
      locale = _b === void 0 ? '' : _b;

  if (Array.isArray(value)) {
    return value.every(function (val) {
      return validate(val, {
        locale: locale
      });
    });
  } // Match at least one locale.


  if (!locale) {
    return Object.keys(alpha).some(function (loc) {
      return alpha[loc].test(value);
    });
  }

  return (alpha[locale] || alpha.en).test(value);
};

var params = [{
  name: 'locale'
}];
var alpha$1 = {
  validate: validate,
  params: params
};

var validate$1 = function (value, _a) {
  var _b = (_a === void 0 ? {} : _a).locale,
      locale = _b === void 0 ? '' : _b;

  if (Array.isArray(value)) {
    return value.every(function (val) {
      return validate$1(val, {
        locale: locale
      });
    });
  } // Match at least one locale.


  if (!locale) {
    return Object.keys(alphaDash).some(function (loc) {
      return alphaDash[loc].test(value);
    });
  }

  return (alphaDash[locale] || alphaDash.en).test(value);
};

var params$1 = [{
  name: 'locale'
}];
var alpha_dash = {
  validate: validate$1,
  params: params$1
};

var validate$2 = function (value, _a) {
  var _b = (_a === void 0 ? {} : _a).locale,
      locale = _b === void 0 ? '' : _b;

  if (Array.isArray(value)) {
    return value.every(function (val) {
      return validate$2(val, {
        locale: locale
      });
    });
  } // Match at least one locale.


  if (!locale) {
    return Object.keys(alphanumeric).some(function (loc) {
      return alphanumeric[loc].test(value);
    });
  }

  return (alphanumeric[locale] || alphanumeric.en).test(value);
};

var params$2 = [{
  name: 'locale'
}];
var alpha_num = {
  validate: validate$2,
  params: params$2
};

var validate$3 = function (value, _a) {
  var _b = (_a === void 0 ? {} : _a).locale,
      locale = _b === void 0 ? '' : _b;

  if (Array.isArray(value)) {
    return value.every(function (val) {
      return validate$3(val, {
        locale: locale
      });
    });
  } // Match at least one locale.


  if (!locale) {
    return Object.keys(alphaSpaces).some(function (loc) {
      return alphaSpaces[loc].test(value);
    });
  }

  return (alphaSpaces[locale] || alphaSpaces.en).test(value);
};

var params$3 = [{
  name: 'locale'
}];
var alpha_spaces = {
  validate: validate$3,
  params: params$3
};

var validate$4 = function (value, _a) {
  var _b = _a === void 0 ? {} : _a,
      min = _b.min,
      max = _b.max;

  if (Array.isArray(value)) {
    return value.every(function (val) {
      return !!validate$4(val, {
        min: min,
        max: max
      });
    });
  }

  return Number(min) <= value && Number(max) >= value;
};

var params$4 = [{
  name: 'min'
}, {
  name: 'max'
}];
var between = {
  validate: validate$4,
  params: params$4
};

var validate$5 = function (value, _a) {
  var target = _a.target;
  return String(value) === String(target);
};

var params$5 = [{
  name: 'target',
  isTarget: true
}];
var confirmed = {
  validate: validate$5,
  params: params$5
};

var validate$6 = function (value, _a) {
  var length = _a.length;

  if (Array.isArray(value)) {
    return value.every(function (val) {
      return validate$6(val, {
        length: length
      });
    });
  }

  var strVal = String(value);
  return /^[0-9]*$/.test(strVal) && strVal.length === length;
};

var params$6 = [{
  name: 'length',
  cast: function (value) {
    return Number(value);
  }
}];
var digits = {
  validate: validate$6,
  params: params$6
};

var validateImage = function (file, width, height) {
  var URL = window.URL || window.webkitURL;
  return new Promise(function (resolve) {
    var image = new Image();

    image.onerror = function () {
      return resolve(false);
    };

    image.onload = function () {
      return resolve(image.width === width && image.height === height);
    };

    image.src = URL.createObjectURL(file);
  });
};

var validate$7 = function (files, _a) {
  var width = _a.width,
      height = _a.height;
  var list = [];
  files = Array.isArray(files) ? files : [files];

  for (var i = 0; i < files.length; i++) {
    // if file is not an image, reject.
    if (!/\.(jpg|svg|jpeg|png|bmp|gif)$/i.test(files[i].name)) {
      return Promise.resolve(false);
    }

    list.push(files[i]);
  }

  return Promise.all(list.map(function (file) {
    return validateImage(file, width, height);
  })).then(function (values) {
    return values.every(function (v) {
      return v;
    });
  });
};

var params$7 = [{
  name: 'width',
  cast: function (value) {
    return Number(value);
  }
}, {
  name: 'height',
  cast: function (value) {
    return Number(value);
  }
}];
var dimensions = {
  validate: validate$7,
  params: params$7
};

var validate$8 = function (value, _a) {
  var multiple = (_a === void 0 ? {} : _a).multiple; // eslint-disable-next-line

  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (multiple && !Array.isArray(value)) {
    value = String(value).split(',').map(function (emailStr) {
      return emailStr.trim();
    });
  }

  if (Array.isArray(value)) {
    return value.every(function (val) {
      return re.test(String(val));
    });
  }

  return re.test(String(value));
};

var params$8 = [{
  name: 'multiple',
  default: false
}];
var email = {
  validate: validate$8,
  params: params$8
};

function isNullOrUndefined(value) {
  return value === null || value === undefined;
}

function isEmptyArray(arr) {
  return Array.isArray(arr) && arr.length === 0;
}

function isCallable(fn) {
  return typeof fn === 'function';
}

function includes(collection, item) {
  return collection.indexOf(item) !== -1;
}
/**
 * Converts an array-like object to array, provides a simple polyfill for Array.from
 */


function toArray(arrayLike) {
  if (isCallable(Array.from)) {
    return Array.from(arrayLike);
  }
  /* istanbul ignore next */


  return _copyArray(arrayLike);
}
/* istanbul ignore next */


function _copyArray(arrayLike) {
  var array = [];
  var length = arrayLike.length;

  for (var i = 0; i < length; i++) {
    array.push(arrayLike[i]);
  }

  return array;
}

var validate$9 = function (value, options) {
  if (Array.isArray(value)) {
    return value.every(function (val) {
      return validate$9(val, options);
    });
  }

  return toArray(options).some(function (item) {
    // eslint-disable-next-line
    return item == value;
  });
};

var oneOf = {
  validate: validate$9
};

var validate$a = function (value, args) {
  return !validate$9(value, args);
};

var excluded = {
  validate: validate$a
};

var validate$b = function (files, extensions) {
  var regex = new RegExp(".(" + extensions.join('|') + ")$", 'i');

  if (Array.isArray(files)) {
    return files.every(function (file) {
      return regex.test(file.name);
    });
  }

  return regex.test(files.name);
};

var ext = {
  validate: validate$b
};

var validate$c = function (files) {
  var regex = /\.(jpg|svg|jpeg|png|bmp|gif|webp)$/i;

  if (Array.isArray(files)) {
    return files.every(function (file) {
      return regex.test(file.name);
    });
  }

  return regex.test(files.name);
};

var image = {
  validate: validate$c
};

var validate$d = function (value) {
  if (Array.isArray(value)) {
    return value.every(function (val) {
      return /^-?[0-9]+$/.test(String(val));
    });
  }

  return /^-?[0-9]+$/.test(String(value));
};

var integer = {
  validate: validate$d
};

var validate$e = function (value, _a) {
  var other = _a.other;
  return value === other;
};

var params$9 = [{
  name: 'other'
}];
var is = {
  validate: validate$e,
  params: params$9
};

var validate$f = function (value, _a) {
  var other = _a.other;
  return value !== other;
};

var params$a = [{
  name: 'other'
}];
var is_not = {
  validate: validate$f,
  params: params$a
};

var validate$g = function (value, _a) {
  var length = _a.length;

  if (isNullOrUndefined(value)) {
    return false;
  }

  if (typeof value === 'string') {
    value = toArray(value);
  }

  if (typeof value === 'number') {
    value = String(value);
  }

  if (!value.length) {
    value = toArray(value);
  }

  return value.length === length;
};

var params$b = [{
  name: 'length',
  cast: function (value) {
    return Number(value);
  }
}];
var length = {
  validate: validate$g,
  params: params$b
};

var validate$h = function (value, _a) {
  var length = _a.length;

  if (isNullOrUndefined(value)) {
    return length >= 0;
  }

  if (Array.isArray(value)) {
    return value.every(function (val) {
      return validate$h(val, {
        length: length
      });
    });
  }

  return String(value).length <= length;
};

var params$c = [{
  name: 'length',
  cast: function (value) {
    return Number(value);
  }
}];
var max = {
  validate: validate$h,
  params: params$c
};

var validate$i = function (value, _a) {
  var max = _a.max;

  if (isNullOrUndefined(value) || value === '') {
    return false;
  }

  if (Array.isArray(value)) {
    return value.length > 0 && value.every(function (val) {
      return validate$i(val, {
        max: max
      });
    });
  }

  return Number(value) <= max;
};

var params$d = [{
  name: 'max',
  cast: function (value) {
    return Number(value);
  }
}];
var max_value = {
  validate: validate$i,
  params: params$d
};

var validate$j = function (files, mimes) {
  var regex = new RegExp(mimes.join('|').replace('*', '.+') + "$", 'i');

  if (Array.isArray(files)) {
    return files.every(function (file) {
      return regex.test(file.type);
    });
  }

  return regex.test(files.type);
};

var mimes = {
  validate: validate$j
};

var validate$k = function (value, _a) {
  var length = _a.length;

  if (isNullOrUndefined(value)) {
    return false;
  }

  if (Array.isArray(value)) {
    return value.every(function (val) {
      return validate$k(val, {
        length: length
      });
    });
  }

  return String(value).length >= length;
};

var params$e = [{
  name: 'length',
  cast: function (value) {
    return Number(value);
  }
}];
var min = {
  validate: validate$k,
  params: params$e
};

var validate$l = function (value, _a) {
  var min = _a.min;

  if (isNullOrUndefined(value) || value === '') {
    return false;
  }

  if (Array.isArray(value)) {
    return value.length > 0 && value.every(function (val) {
      return validate$l(val, {
        min: min
      });
    });
  }

  return Number(value) >= min;
};

var params$f = [{
  name: 'min',
  cast: function (value) {
    return Number(value);
  }
}];
var min_value = {
  validate: validate$l,
  params: params$f
};
var ar = /^[٠١٢٣٤٥٦٧٨٩]+$/;
var en = /^[0-9]+$/;

var validate$m = function (value) {
  var testValue = function (val) {
    var strValue = String(val);
    return en.test(strValue) || ar.test(strValue);
  };

  if (Array.isArray(value)) {
    return value.every(testValue);
  }

  return testValue(value);
};

var numeric = {
  validate: validate$m
};

var validate$n = function (value, _a) {
  var regex = _a.regex;

  if (Array.isArray(value)) {
    return value.every(function (val) {
      return validate$n(val, {
        regex: regex
      });
    });
  }

  return regex.test(String(value));
};

var params$g = [{
  name: 'regex',
  cast: function (value) {
    if (typeof value === 'string') {
      return new RegExp(value);
    }

    return value;
  }
}];
var regex = {
  validate: validate$n,
  params: params$g
};

var validate$o = function (value, _a) {
  var allowFalse = (_a === void 0 ? {
    allowFalse: true
  } : _a).allowFalse;
  var result = {
    valid: false,
    required: true
  };

  if (isNullOrUndefined(value) || isEmptyArray(value)) {
    return result;
  } // incase a field considers `false` as an empty value like checkboxes.


  if (value === false && !allowFalse) {
    return result;
  }

  result.valid = !!String(value).trim().length;
  return result;
};

var computesRequired = true;
var params$h = [{
  name: 'allowFalse',
  default: true
}];
var required = {
  validate: validate$o,
  params: params$h,
  computesRequired: computesRequired
};

var testEmpty = function (value) {
  return isEmptyArray(value) || includes([false, null, undefined], value) || !String(value).trim().length;
};

var validate$p = function (value, _a) {
  var target = _a.target,
      values = _a.values;
  var required;

  if (values && values.length) {
    if (!Array.isArray(values) && typeof values === 'string') {
      values = [values];
    } // eslint-disable-next-line


    required = values.some(function (val) {
      return val == String(target).trim();
    });
  } else {
    required = !testEmpty(target);
  }

  if (!required) {
    return {
      valid: true,
      required: required
    };
  }

  return {
    valid: !testEmpty(value),
    required: required
  };
};

var params$i = [{
  name: 'target',
  isTarget: true
}, {
  name: 'values'
}];
var computesRequired$1 = true;
var required_if = {
  validate: validate$p,
  params: params$i,
  computesRequired: computesRequired$1
};

var validate$q = function (files, _a) {
  var size = _a.size;

  if (isNaN(size)) {
    return false;
  }

  var nSize = size * 1024;

  if (!Array.isArray(files)) {
    return files.size <= nSize;
  }

  for (var i = 0; i < files.length; i++) {
    if (files[i].size > nSize) {
      return false;
    }
  }

  return true;
};

var params$j = [{
  name: 'size',
  cast: function (value) {
    return Number(value);
  }
}];
var size = {
  validate: validate$q,
  params: params$j
};

var validate$r = function (value, params) {
  var _a = params || {},
      _b = _a.decimals,
      decimals = _b === void 0 ? 0 : _b,
      _c = _a.separator,
      separator = _c === void 0 ? 'dot' : _c;

  var separators = {
    dot: '.',
    comma: ','
  };
  var regexPart = +decimals === 0 ? '+' : "{" + decimals + "}";
  var regex = new RegExp("^-?\\d+\\" + (separators[separator] || '.') + "\\d" + regexPart + "$");
  return Array.isArray(value) ? value.every(function (val) {
    return regex.test(String(val));
  }) : regex.test(String(value));
};

var params$k = [{
  name: 'decimals',
  default: 0
}, {
  name: 'separator',
  default: 'dot'
}];
var double = {
  validate: validate$r,
  params: params$k
};


/***/ }),
/* 30 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.12' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(85)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("vue-client-only");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("vue-i18n");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("cookie");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

function set(obj, key, val) {
	if (typeof val.value === 'object') val.value = klona(val.value);
	if (!val.enumerable || val.get || val.set || !val.configurable || !val.writable || key === '__proto__') {
		Object.defineProperty(obj, key, val);
	} else obj[key] = val.value;
}

function klona(x) {
	if (typeof x !== 'object') return x;

	var i=0, k, list, tmp, str=Object.prototype.toString.call(x);

	if (str === '[object Object]') {
		tmp = Object.create(x.__proto__ || null);
	} else if (str === '[object Array]') {
		tmp = Array(x.length);
	} else if (str === '[object Set]') {
		tmp = new Set;
		x.forEach(function (val) {
			tmp.add(klona(val));
		});
	} else if (str === '[object Map]') {
		tmp = new Map;
		x.forEach(function (val, key) {
			tmp.set(klona(key), klona(val));
		});
	} else if (str === '[object Date]') {
		tmp = new Date(+x);
	} else if (str === '[object RegExp]') {
		tmp = new RegExp(x.source, x.flags);
	} else if (str === '[object DataView]') {
		tmp = new x.constructor( klona(x.buffer) );
	} else if (str === '[object ArrayBuffer]') {
		tmp = x.slice(0);
	} else if (str.slice(-6) === 'Array]') {
		// ArrayBuffer.isView(x)
		// ~> `new` bcuz `Buffer.slice` => ref
		tmp = new x.constructor(x);
	}

	if (tmp) {
		for (list=Object.getOwnPropertySymbols(x); i < list.length; i++) {
			set(tmp, list[i], Object.getOwnPropertyDescriptor(x, list[i]));
		}

		for (i=0, list=Object.getOwnPropertyNames(x); i < list.length; i++) {
			if (Object.hasOwnProperty.call(tmp, k=list[i]) && tmp[k] === x[k]) continue;
			set(tmp, k, Object.getOwnPropertyDescriptor(x, k));
		}
	}

	return tmp || x;
}

exports.klona = klona;

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/atoms/SfChevron/SfChevron.vue?vue&type=template&id=d88c5604&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-chevron"},[_vm._t("default",[_c('span',{staticClass:"sf-chevron__bar sf-chevron__bar--left"}),_vm._v(" "),_c('span',{staticClass:"sf-chevron__bar sf-chevron__bar--right"})])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfChevron/SfChevron.vue?vue&type=template&id=d88c5604&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/utilities/directives/focus/focus-directive.js
var focus_directive = __webpack_require__(236);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/atoms/SfChevron/SfChevron.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//

/* harmony default export */ var SfChevronvue_type_script_lang_js_ = ({
  name: "SfChevron",
  directives: {
    focus: focus_directive["a" /* focus */]
  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfChevron/SfChevron.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfChevron_SfChevronvue_type_script_lang_js_ = (SfChevronvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfChevron/SfChevron.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(188)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SfChevron_SfChevronvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "01167d5f"
  
)

/* harmony default export */ var SfChevron = __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/atoms/SfBadge/SfBadge.vue?vue&type=template&id=2f98dece&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-badge"},[_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfBadge/SfBadge.vue?vue&type=template&id=2f98dece&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/atoms/SfBadge/SfBadge.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var SfBadgevue_type_script_lang_js_ = ({
  name: "SfBadge"
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfBadge/SfBadge.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfBadge_SfBadgevue_type_script_lang_js_ = (SfBadgevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfBadge/SfBadge.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(134)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SfBadge_SfBadgevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "0df8f32f"
  
)

/* harmony default export */ var SfBadge = __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/atoms/SfPrice/SfPrice.vue?vue&type=template&id=50c52828&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-price"},[_vm._t("regular",[(!_vm.special)?_c('span',{staticClass:"sf-price__regular"},[_vm._v(_vm._s(_vm.regular))]):_vm._e()],null,{ regular: _vm.regular, special: _vm.special }),_vm._ssrNode(" "),_vm._t("old",[(_vm.special)?_c('del',{staticClass:"sf-price__old"},[_vm._v(_vm._s(_vm.regular))]):_vm._e()],null,{ regular: _vm.regular, special: _vm.special }),_vm._ssrNode(" "),_vm._t("special",[(_vm.special)?_c('ins',{staticClass:"sf-price__special"},[_vm._v(_vm._s(_vm.special))]):_vm._e()],null,{ special: _vm.special })],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfPrice/SfPrice.vue?vue&type=template&id=50c52828&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/atoms/SfPrice/SfPrice.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var SfPricevue_type_script_lang_js_ = ({
  name: "SfPrice",
  props: {
    /**
     * Regular/old price value. Crossed out if `special` is provided
     */
    regular: {
      type: [String, Number],
      default: null
    },

    /**
     * Special price value
     */
    special: {
      type: [String, Number],
      default: null
    }
  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfPrice/SfPrice.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfPrice_SfPricevue_type_script_lang_js_ = (SfPricevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfPrice/SfPrice.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(166)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SfPrice_SfPricevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "a1badb0a"
  
)

/* harmony default export */ var SfPrice = __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export iconColors */
/* unused harmony export colors */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return colorsValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return iconColorsValues; });
const iconColors = {
  greenPrimary: "green-primary",
  greenSecondary: "green-secondary",
  black: 'black',
  darkSecondary: 'dark-secondary',
  grayPrimary: "gray-primary",
  graySecondary: "gray-secondary",
  lightPrimary: "light-primary",
  white: "white",
  redPrimary: "red-primary",
  redSecondary: "red-secondary",
  yellowPrimary: "yellow-primary",
  yellowSecondary: "yellow-secondary",
  bluePrimary: "blue-primary",
  blueSecondary: "blue-secondary"
};
const colors = {
  primary: "color-primary",
  secondary: "color-secondary",
  light: "color-light",
  dark: "color-dark",
  info: "color-info",
  success: "color-success",
  warning: 'color-warning',
  danger: 'color-danger'
};
const colorsValues = Object.values(colors);
const iconColorsValues = Object.values(iconColors);
/* unused harmony default export */ var _unused_webpack_default_export = (colors);

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/atoms/SfQuantitySelector/SfQuantitySelector.vue?vue&type=template&id=3ea54f81&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-quantity-selector"},[_c('SfButton',{staticClass:"sf-button--pure sf-quantity-selector__button",attrs:{"disabled":_vm.disabled,"data-testid":"+"},on:{"click":function($event){_vm.$emit('input', parseInt(_vm.qty, 10) - 1)}}},[_vm._v("−")]),_vm._ssrNode(" "),_c('SfInput',_vm._b({staticClass:"sf-quantity-selector__input",attrs:{"type":"number","value":_vm.qty,"disabled":_vm.disabled,"data-testid":"sf-quantity-selector input"},on:{"input":function($event){_vm.$emit('input', parseInt($event, 10))}}},'SfInput',_vm.$attrs,false)),_vm._ssrNode(" "),_c('SfButton',{staticClass:"sf-button--pure sf-quantity-selector__button",attrs:{"disabled":_vm.disabled,"data-testid":"-"},on:{"click":function($event){_vm.$emit('input', parseInt(_vm.qty, 10) + 1)}}},[_vm._v("+")])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfQuantitySelector/SfQuantitySelector.vue?vue&type=template&id=3ea54f81&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfInput/SfInput.vue + 4 modules
var SfInput = __webpack_require__(98);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfButton/SfButton.vue + 4 modules
var SfButton = __webpack_require__(10);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/atoms/SfQuantitySelector/SfQuantitySelector.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var SfQuantitySelectorvue_type_script_lang_js_ = ({
  name: "SfQuantitySelector",
  components: {
    SfInput: SfInput["a" /* default */],
    SfButton: SfButton["a" /* default */]
  },
  inheritAttrs: false,
  model: {
    prop: "qty"
  },
  props: {
    /** Quantity */
    qty: {
      type: [Number, String],
      default: 1
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    qty(val) {
      if (val < 1 || isNaN(val)) {
        this.$emit("input", 1);
      }
    }

  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfQuantitySelector/SfQuantitySelector.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfQuantitySelector_SfQuantitySelectorvue_type_script_lang_js_ = (SfQuantitySelectorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfQuantitySelector/SfQuantitySelector.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(170)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SfQuantitySelector_SfQuantitySelectorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "4b32a1b2"
  
)

/* harmony default export */ var SfQuantitySelector = __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(115);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("25b462fa", content, true, context)
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(117);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("85adfa6a", content, true, context)
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(119);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("16333e04", content, true, context)
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(121);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("4e61ee8b", content, true, context)
};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(123);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("386c8412", content, true, context)
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(125);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("3191d5ad", content, true, context)
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(129);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("1f237ea8", content, true, context)
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(131);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("9a4c8184", content, true, context)
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(133);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("5d51c5ce", content, true, context)
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(135);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("62712d4c", content, true, context)
};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(137);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("2d1864c4", content, true, context)
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(139);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("11529014", content, true, context)
};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(141);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("48cdbfb6", content, true, context)
};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(143);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("90b8c6e6", content, true, context)
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(145);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("0442b161", content, true, context)
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(147);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("36052f96", content, true, context)
};

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(149);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("0bac0d67", content, true, context)
};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(151);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("43aea278", content, true, context)
};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(153);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("1b94825f", content, true, context)
};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(155);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("5e8bb1cf", content, true, context)
};

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(157);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("3d469b3c", content, true, context)
};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(159);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("9449d506", content, true, context)
};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(161);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("5578f85e", content, true, context)
};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(163);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("32b72040", content, true, context)
};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(165);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("a3f20430", content, true, context)
};

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(167);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("060ad29c", content, true, context)
};

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(169);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("073a8fd3", content, true, context)
};

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(171);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("1f2d5df3", content, true, context)
};

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(173);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("5974a676", content, true, context)
};

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(175);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("5d980efe", content, true, context)
};

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(177);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("3aa30581", content, true, context)
};

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(179);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("7a836c25", content, true, context)
};

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(181);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("298813ea", content, true, context)
};

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(183);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("e4a5c1e0", content, true, context)
};

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(185);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("31230c6f", content, true, context)
};

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(187);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("3c6b2c14", content, true, context)
};

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(189);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("d53802b8", content, true, context)
};

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(191);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("5002e1c1", content, true, context)
};

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(193);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("183561d5", content, true, context)
};

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(196);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("6069a3ca", content, true, context)
};

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(198);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("20f4381e", content, true, context)
};

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(206);
var createDesc = __webpack_require__(210);
module.exports = __webpack_require__(32) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(31);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 86 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 87 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(30);
var global = __webpack_require__(21);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(213) ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(219);
var defined = __webpack_require__(221);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 90 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/molecules/SfMenuItem/SfMenuItem.vue?vue&type=template&id=46b6f196&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.componentIs,_vm._g(_vm._b({tag:"component",staticClass:"sf-menu-item",attrs:{"data-testid":_vm.label}},'component',_vm.bind,false),_vm.$listeners),[_vm._t("icon"),_vm._v(" "),_vm._t("label",[_c('span',{staticClass:"sf-menu-item__label"},[_vm._v(_vm._s(_vm.label))])],null,{ label: _vm.label }),_vm._v(" "),_vm._t("count",[_c('span',{staticClass:"sf-menu-item__count"},[_vm._v(_vm._s(_vm.count))])],null,{ count: _vm.count }),_vm._v(" "),_vm._t("mobile-nav-icon",[(_vm.icon)?_c('SfIcon',{staticClass:"sf-menu-item__mobile-nav-icon smartphone-only",attrs:{"icon":_vm.icon,"size":"14px"}}):_vm._e()],null,{ icon: _vm.icon })],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfMenuItem/SfMenuItem.vue?vue&type=template&id=46b6f196&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfIcon/SfIcon.vue + 6 modules
var SfIcon = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfLink/SfLink.vue + 4 modules
var SfLink = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfButton/SfButton.vue + 4 modules
var SfButton = __webpack_require__(10);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/molecules/SfMenuItem/SfMenuItem.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var SfMenuItemvue_type_script_lang_js_ = ({
  name: "SfMenuItem",
  components: {
    SfIcon: SfIcon["a" /* default */],
    SfLink: SfLink["a" /* default */],
    SfButton: SfButton["a" /* default */]
  },
  props: {
    /**
     * Menu-item label
     */
    label: {
      type: String,
      default: ""
    },

    /**
     * Menu-item icon (visible on mobile)
     */
    icon: {
      type: [String, Array],
      default: "chevron_right"
    },

    /**
     * Menu-item count of items
     */
    count: {
      type: [String, Number],
      default: ""
    },

    /**
     * Menu-item link (if is empty then SfMenuItem is SfButton)
     */
    link: {
      type: [String, Object],
      default: ""
    }
  },
  computed: {
    bind() {
      const bind = {};

      if (this.link) {
        bind.link = this.link;
      } else {
        bind.class = "sf-button--pure";
      }

      return bind;
    },

    componentIs() {
      return this.link ? "SfLink" : "SfButton";
    }

  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfMenuItem/SfMenuItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfMenuItem_SfMenuItemvue_type_script_lang_js_ = (SfMenuItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfMenuItem/SfMenuItem.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(146)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SfMenuItem_SfMenuItemvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "31ede652"
  
)

/* harmony default export */ var SfMenuItem = __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),
/* 93 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 94 */
/***/ (function(module, exports) {

module.exports = require("lozad");

/***/ }),
/* 95 */
/***/ (function(module, exports) {

module.exports = require("cookie-universal");

/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports = require("defu");

/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfSidebar/SfSidebar.vue?vue&type=template&id=7ae23f9e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-sidebar",class:[_vm.staticClass, _vm.className]},[_c('SfOverlay',{attrs:{"visible":_vm.visibleOverlay}}),_vm._ssrNode(" "),_c('transition',{attrs:{"name":_vm.transitionName}},[(_vm.visible)?_c('aside',{directives:[{name:"focus-trap",rawName:"v-focus-trap"},{name:"click-outside",rawName:"v-click-outside",value:(_vm.checkPersistence),expression:"checkPersistence"}],staticClass:"sf-sidebar__aside"},[_vm._t("bar",[_c('SfBar',{staticClass:"smartphone-only",attrs:{"title":_vm.title,"back":true},on:{"click:back":_vm.close}})]),_vm._v(" "),_vm._t("circle-icon",[(_vm.button)?_c('SfCircleIcon',{staticClass:"sf-sidebar__circle-icon desktop-only",attrs:{"icon-size":"12px","aria-label":"Close sidebar","icon":"cross"},on:{"click":_vm.close}}):_vm._e()],null,{ close: _vm.close, button: _vm.button }),_vm._v(" "),(_vm.title || _vm.hasTop)?_c('div',{staticClass:"sf-sidebar__top"},[_vm._t("title",[(_vm.title)?_c('SfHeading',{staticClass:"sf-heading--left sf-heading--no-underline sf-sidebar__title desktop-only",attrs:{"title":_vm.title,"description":_vm.subtitle,"level":_vm.headingLevel}}):_vm._e()],null,{ title: _vm.title, subtitle: _vm.subtitle, headingLevel: _vm.headingLevel }),_vm._v(" "),_vm._t("content-top")],2):_vm._e(),_vm._v(" "),_c('div',{ref:"content",staticClass:"sf-sidebar__content"},[_vm._t("default")],2),_vm._v(" "),(_vm.hasBottom)?_c('div',{staticClass:"sf-sidebar__bottom"},[_vm._t("content-bottom")],2):_vm._e()],2):_vm._e()])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfSidebar/SfSidebar.vue?vue&type=template&id=7ae23f9e&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/utilities/directives/focus-trap/focus-trap-directive.js + 1 modules
var focus_trap_directive = __webpack_require__(246);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/utilities/directives/click-outside/click-outside-directive.js
var click_outside_directive = __webpack_require__(239);

// EXTERNAL MODULE: external "body-scroll-lock"
var external_body_scroll_lock_ = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/utilities/helpers/check-environment.js
var check_environment = __webpack_require__(238);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfBar/SfBar.vue + 4 modules
var SfBar = __webpack_require__(27);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfCircleIcon/SfCircleIcon.vue + 4 modules
var SfCircleIcon = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfOverlay/SfOverlay.vue + 4 modules
var SfOverlay = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfHeading/SfHeading.vue + 4 modules
var SfHeading = __webpack_require__(26);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfSidebar/SfSidebar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ var SfSidebarvue_type_script_lang_js_ = ({
  name: "SfSidebar",
  directives: {
    focusTrap: focus_trap_directive["a" /* focusTrap */],
    clickOutside: click_outside_directive["a" /* clickOutside */]
  },
  components: {
    SfBar: SfBar["a" /* default */],
    SfCircleIcon: SfCircleIcon["a" /* default */],
    SfOverlay: SfOverlay["a" /* default */],
    SfHeading: SfHeading["a" /* default */]
  },
  props: {
    title: {
      type: String,
      default: ""
    },
    subtitle: {
      type: String,
      default: ""
    },
    headingLevel: {
      type: Number,
      default: 3
    },
    button: {
      type: Boolean,
      default: true
    },
    visible: {
      type: Boolean,
      default: false
    },
    overlay: {
      type: Boolean,
      default: true
    },

    /**
     * If true clicking outside will not dismiss the sidebar
     */
    persistent: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      position: "left",
      staticClass: null,
      className: null
    };
  },

  computed: {
    visibleOverlay() {
      return this.visible && this.overlay;
    },

    transitionName() {
      return "sf-slide-" + this.position;
    },

    hasTop() {
      return this.$slots.hasOwnProperty("content-top");
    },

    hasBottom() {
      return this.$slots.hasOwnProperty("content-bottom");
    }

  },
  watch: {
    visible: {
      handler(value) {
        if (!check_environment["a" /* isClient */]) return;

        if (value) {
          this.$nextTick(() => {
            Object(external_body_scroll_lock_["disableBodyScroll"])(this.$refs.content);
          });
          document.addEventListener("keydown", this.keydownHandler);
        } else {
          Object(external_body_scroll_lock_["clearAllBodyScrollLocks"])();
          document.removeEventListener("keydown", this.keydownHandler);
        }
      },

      immediate: true
    }
  },

  mounted() {
    this.classHandler();
  },

  updated() {
    this.classHandler();
  },

  methods: {
    close() {
      this.$emit("close");
    },

    checkPersistence() {
      if (!this.persistent) this.close();
    },

    keydownHandler(e) {
      if (e.key === "Escape" || e.key === "Esc" || e.keyCode === 27) {
        this.close();
      }
    },

    classHandler() {
      let update = false;

      if (this.staticClass !== this.$vnode.data.staticClass) {
        this.staticClass = this.$vnode.data.staticClass;
        update = true;
      }

      if (this.className !== this.$vnode.data.class) {
        this.className = this.$vnode.data.class;
        update = true;
      }

      if (update) {
        this.position = [this.staticClass, this.className].toString().search("--right") > -1 ? "right" : "left";
      }
    }

  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfSidebar/SfSidebar.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfSidebar_SfSidebarvue_type_script_lang_js_ = (SfSidebarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfSidebar/SfSidebar.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(150)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SfSidebar_SfSidebarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "18272300"
  
)

/* harmony default export */ var SfSidebar = __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/atoms/SfInput/SfInput.vue?vue&type=template&id=422121da&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-input",class:{
    'has-text': !!_vm.value,
    invalid: !_vm.valid,
  },attrs:{"data-testid":_vm.name}},[_vm._ssrNode("<div class=\"sf-input__wrapper\">","</div>",[_c('input',_vm._g(_vm._b({directives:[{name:"focus",rawName:"v-focus"}],class:{ 'sf-input--is-password': _vm.isPassword },attrs:{"id":_vm.name,"required":_vm.required,"disabled":_vm.disabled,"name":_vm.name,"type":_vm.inputType},domProps:{"value":_vm.value}},'input',_vm.$attrs,false),_vm.listeners),[]),_vm._ssrNode(" <span class=\"sf-input__bar\"></span> "),_vm._ssrNode("<label"+(_vm._ssrAttr("for",_vm.name))+" class=\"sf-input__label\">","</label>",[_vm._t("label",[_vm._v(_vm._s(_vm.label))],null,{ label: _vm.label })],2),_vm._ssrNode(" "),(_vm.isPassword)?_vm._t("show-password",[_c('SfButton',{staticClass:"sf-input__password-button",attrs:{"type":"button","aria-label":"switch-visibility-password","aria-pressed":_vm.isPasswordVisible.toString()},on:{"click":_vm.switchVisibilityPassword}},[_c('SfIcon',{staticClass:"sf-input__password-icon",class:{
            hidden: !_vm.isPasswordVisible,
          },attrs:{"icon":"show_password","size":"1.5rem"}})],1)],null,{
        isPasswordVisible: _vm.isPasswordVisible,
        switchVisibilityPassword: _vm.switchVisibilityPassword,
      }):_vm._e()],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"sf-input__error-message\">","</div>",[_c('transition',{attrs:{"name":"sf-fade"}},[(!_vm.valid)?_vm._t("error-message",[_c('div',[_vm._v(_vm._s(_vm.errorMessage))])],null,{ errorMessage: _vm.errorMessage }):_vm._e()],2)],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfInput/SfInput.vue?vue&type=template&id=422121da&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfIcon/SfIcon.vue + 6 modules
var SfIcon = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfButton/SfButton.vue + 4 modules
var SfButton = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/utilities/directives/focus/focus-directive.js
var focus_directive = __webpack_require__(236);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/atoms/SfInput/SfInput.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var SfInputvue_type_script_lang_js_ = ({
  name: "SfInput",
  directives: {
    focus: focus_directive["a" /* focus */]
  },
  components: {
    SfIcon: SfIcon["a" /* default */],
    SfButton: SfButton["a" /* default */]
  },
  inheritAttrs: false,
  props: {
    /**
     * Current input value (`v-model`)
     */
    value: {
      type: [String, Number],
      default: ""
    },

    /**
     * Form input label
     */
    label: {
      type: String,
      default: ""
    },

    /**
     * Form input name
     */
    name: {
      type: String,
      default: ""
    },

    /**
     * Form input type
     */
    type: {
      type: String,
      default: "text"
    },

    /**
     * Validate value of form input
     */
    valid: {
      type: Boolean,
      default: true
    },

    /**
     * Error message value of form input. It will be appeared if `valid` is `true`.
     */
    errorMessage: {
      type: String,
      default: ""
    },

    /**
     * Native input required attribute
     */
    required: {
      type: Boolean,
      default: false,
      description: "Native input required attribute"
    },

    /**
     * Native input disabled attribute
     */
    disabled: {
      type: Boolean,
      default: false,
      description: "Native input disabled attribute"
    },

    /**
     * Status of show password icon display
     */
    hasShowPassword: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      isPasswordVisible: false,
      inputType: "",
      isNumberTypeSafari: false
    };
  },

  computed: {
    listeners() {
      return { ...this.$listeners,
        input: event => this.$emit("input", event.target.value)
      };
    },

    isPassword() {
      return this.type === "password" && this.hasShowPassword;
    }

  },
  watch: {
    type: {
      immediate: true,
      handler: function (type) {
        let inputType = type; // Safari has bug for number input

        if (typeof window !== "undefined" || typeof document !== "undefined") {
          const ua = navigator.userAgent.toLocaleLowerCase();

          if (ua.indexOf("safari") !== -1 && ua.indexOf("chrome") === -1 && type === "number") {
            this.isNumberTypeSafari = true;
            inputType = "text";
          }
        }

        this.inputType = inputType;
      }
    },
    value: {
      immediate: true,
      handler: function (value) {
        if (!this.isNumberTypeSafari) return;

        if (isNaN(value)) {
          this.$emit("input");
        }
      }
    }
  },
  methods: {
    switchVisibilityPassword() {
      this.isPasswordVisible = !this.isPasswordVisible;
      this.inputType = this.isPasswordVisible ? "text" : "password";
    }

  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfInput/SfInput.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfInput_SfInputvue_type_script_lang_js_ = (SfInputvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfInput/SfInput.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(168)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SfInput_SfInputvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "28edfd7d"
  
)

/* harmony default export */ var SfInput = __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/atoms/SfProperty/SfProperty.vue?vue&type=template&id=998f9188&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-property"},[_vm._t("name",[_c('span',{staticClass:"sf-property__name"},[_vm._v(_vm._s(_vm.name))])],null,{ name: _vm.name }),_vm._ssrNode(" "),_vm._t("value",[_c('span',{staticClass:"sf-property__value"},[_vm._v(_vm._s(_vm.value))])],null,{ value: _vm.value })],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfProperty/SfProperty.vue?vue&type=template&id=998f9188&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/atoms/SfProperty/SfProperty.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var SfPropertyvue_type_script_lang_js_ = ({
  name: "SfProperty",
  props: {
    name: {
      type: String,
      default: ""
    },
    value: {
      type: [String, Number],
      default: ""
    }
  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfProperty/SfProperty.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfProperty_SfPropertyvue_type_script_lang_js_ = (SfPropertyvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfProperty/SfProperty.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(164)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SfProperty_SfPropertyvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "926d7172"
  
)

/* harmony default export */ var SfProperty = __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 100 */,
/* 101 */,
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(230);


/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_storefront_commercetools_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _vue_storefront_commercetools_api__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_storefront_commercetools_api__WEBPACK_IMPORTED_MODULE_0__);


const canEnterPersonalDetails = cart => !cart.customerId && cart.lineItems.length > 0;

const canEnterShipping = cart => cart.customerEmail || cart.customerId;

const canEnterPayment = cart => cart.shippingInfo && cart.shippingAddress;

const canEnterReview = cart => Boolean(cart.billingAddress);

/* harmony default export */ __webpack_exports__["default"] = (async ({
  app
}) => {
  const currentPath = app.context.route.fullPath.split('/checkout/')[1];
  if (!currentPath) return;
  const {
    data: {
      me: {
        activeCart
      }
    }
  } = await Object(_vue_storefront_commercetools_api__WEBPACK_IMPORTED_MODULE_0__["getMe"])();
  if (!activeCart) return;

  switch (currentPath) {
    case 'personal-details':
      if (!canEnterPersonalDetails(activeCart)) {
        app.context.redirect('/checkout/shipping');
      }

      break;

    case 'shipping':
      if (!canEnterShipping(activeCart)) {
        app.context.redirect('/');
      }

      break;

    case 'payment':
      if (!canEnterPayment(activeCart)) {
        app.context.redirect('/');
      }

      break;

    case 'order-review':
      if (!canEnterReview(activeCart)) {
        app.context.redirect('/');
      }

      break;
  }
});

/***/ }),
/* 104 */
/***/ (function(module, exports) {

module.exports = require("apollo-client");

/***/ }),
/* 105 */
/***/ (function(module, exports) {

module.exports = require("apollo-cache-inmemory");

/***/ }),
/* 106 */
/***/ (function(module, exports) {

module.exports = require("apollo-link-http");

/***/ }),
/* 107 */
/***/ (function(module, exports) {

module.exports = require("apollo-link-context");

/***/ }),
/* 108 */
/***/ (function(module, exports) {

module.exports = require("apollo-link");

/***/ }),
/* 109 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 110 */
/***/ (function(module, exports) {

module.exports = require("@commercetools/sdk-auth");

/***/ }),
/* 111 */
/***/ (function(module, exports) {

module.exports = require("apollo-link-error");

/***/ }),
/* 112 */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),
/* 113 */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
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
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfLink_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfLink_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfLink_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfLink_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfLink_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media (min-width:1024px){.smartphone-only{display:none!important}}@media (max-width:1023px){.desktop-only{display:none!important}}.sf-link{color:var(--c-text);color:var(--link-color,var(--c-text));font:var(--font-weight--medium) var(--font-size--sm)/1.4 var(--font-family--secondary);font:var(--link-font,var(--link-font-weight,var(--font-weight--medium)) var(--link-font-size,var(--font-size--sm))/var(--link-font-line-height,1.4) var(--link-font-family,var(--font-family--secondary)));text-decoration:underline;-webkit-text-decoration:var(--link-text-decoration,underline);text-decoration:var(--link-text-decoration,underline)}.sf-link:visited{--link-color:var(--c-link)}.sf-link:hover{--link-color:var(--c-primary)}.sf-link:active{--link-color:var(--c-link)}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfButton_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfButton_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfButton_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfButton_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfButton_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media (min-width:1024px){.smartphone-only{display:none!important}}@media (max-width:1023px){.desktop-only{display:none!important}}.sf-button{--link-color:var(--button-color,var(--c-light-variant));box-sizing:border-box;position:relative;width:var(--button-width);width:var(--button-size,var(--button-width));height:var(--button-height);height:var(--button-size,var(--button-height));display:flex;display:var(--button-display,flex);align-items:center;justify-content:center;padding:var(--button-padding,var(--spacer-sm) var(--spacer-base));color:var(--c-light-variant);color:var(--button-color,var(--c-light-variant));background:var(--c-primary);background:var(--button-background,var(--c-primary));transition:background .8s;transition:var(--button-transition,background .8s);background-position:50%;text-transform:uppercase;text-transform:var(--button-text-transform,uppercase);-webkit-text-decoration:var(--button-text-decoration);text-decoration:var(--button-text-decoration);cursor:pointer;cursor:var(--button-cursor,pointer);border-radius:0;border-radius:var(--button-border-radius,0);white-space:nowrap;white-space:var(--button-wrap,nowrap);font:var(--font-weight--semibold) var(--font-size--base)/1.2 var(--font-family--secondary);font:var(--button-font,var(--button-font-weight,var(--font-weight--semibold)) var(--button-font-size,var(--font-size--base))/var(--button-font-line-height,1.2) var(--button-font-family,var(--font-family--secondary)));border:var(--button-border,var(--button-border-style,solid) var(--button-border-color,var(--c-primary)));border-width:0;border-width:var(--button-border-width,0);--button-box-shadow-opacity:0}.sf-button:before{content:\"\";position:absolute;z-index:-1;top:0;left:0;width:100%;height:100%;border-radius:inherit;transition:opacity .2s ease-in-out,box-shadow .2s ease-in-out;transition:var(--button-box-shadow-transition,opacity var(--button-box-shadow-transition-opacity-duration,.2s) var(--button-box-shadow-transition-opacity-timing-function,ease-in-out),box-shadow var(--button-box-shadow-transition-box-shadow-duration,.2s) var(--button-box-shadow-transition-box-shadow-timing-function,ease-in-out));opacity:var(--button-box-shadow-opacity);box-shadow:4px 12px 24px 0 var(--c-gray);box-shadow:var(--button-box-shadow,var(--button-box-shadow-h-offset,4px) var(--button-box-shadow-v-offset,12px) var(--button-box-shadow-blur,24px) var(--button-box-shadow-spread,0) var(--button-box-shadow-color,var(--c-gray)));will-change:opacity,box-shadow}.sf-button.color-black{--button-background:var(--c-dark)}.sf-button.color-black:hover{--button-background:var(--c-dark) radial-gradient(circle,transparent 1%,var(--c-dark) 0) center/15000%}.sf-button.color-black:active{--button-background:var(--c-dark) radial-gradient(circle,transparent 40%,var(--c-dark) 0) center/15000%}.sf-button.color-white{--button-background:var(--c-white)}.sf-button.color-white:hover{--button-background:var(--c-white) radial-gradient(circle,transparent 1%,var(--c-white) 0) center/15000%}.sf-button.color-white:active{--button-background:var(--c-white) radial-gradient(circle,transparent 40%,var(--c-white) 0) center/15000%}.sf-button.color-primary{--button-background:var(--c-primary)}.sf-button.color-primary:hover{--button-background:var(--c-primary) radial-gradient(circle,transparent 1%,var(--c-primary-variant) 0) center/15000%}.sf-button.color-primary:active{--button-background:var(--c-primary) radial-gradient(circle,transparent 40%,var(--c-primary-variant) 0) center/15000%}.sf-button.color-secondary{--button-background:var(--c-secondary)}.sf-button.color-secondary:hover{--button-background:var(--c-secondary) radial-gradient(circle,transparent 1%,var(--c-secondary-variant) 0) center/15000%}.sf-button.color-secondary:active{--button-background:var(--c-secondary) radial-gradient(circle,transparent 40%,var(--c-secondary-variant) 0) center/15000%}.sf-button.color-light{--button-background:var(--c-light)}.sf-button.color-light:hover{--button-background:var(--c-light) radial-gradient(circle,transparent 1%,var(--c-light-variant) 0) center/15000%}.sf-button.color-light:active{--button-background:var(--c-light) radial-gradient(circle,transparent 40%,var(--c-light-variant) 0) center/15000%}.sf-button.color-dark{--button-background:var(--c-dark)}.sf-button.color-dark:hover{--button-background:var(--c-dark) radial-gradient(circle,transparent 1%,var(--c-dark-variant) 0) center/15000%}.sf-button.color-dark:active{--button-background:var(--c-dark) radial-gradient(circle,transparent 40%,var(--c-dark-variant) 0) center/15000%}.sf-button.color-info{--button-background:var(--c-info)}.sf-button.color-info:hover{--button-background:var(--c-info) radial-gradient(circle,transparent 1%,var(--c-info-variant) 0) center/15000%}.sf-button.color-info:active{--button-background:var(--c-info) radial-gradient(circle,transparent 40%,var(--c-info-variant) 0) center/15000%}.sf-button.color-success{--button-background:var(--c-success)}.sf-button.color-success:hover{--button-background:var(--c-success) radial-gradient(circle,transparent 1%,var(--c-success-variant) 0) center/15000%}.sf-button.color-success:active{--button-background:var(--c-success) radial-gradient(circle,transparent 40%,var(--c-success-variant) 0) center/15000%}.sf-button.color-warning{--button-background:var(--c-warning)}.sf-button.color-warning:hover{--button-background:var(--c-warning) radial-gradient(circle,transparent 1%,var(--c-warning-variant) 0) center/15000%}.sf-button.color-warning:active{--button-background:var(--c-warning) radial-gradient(circle,transparent 40%,var(--c-warning-variant) 0) center/15000%}.sf-button.color-danger{--button-background:var(--c-danger)}.sf-button.color-danger:hover{--button-background:var(--c-danger) radial-gradient(circle,transparent 1%,var(--c-danger-variant) 0) center/15000%}.sf-button.color-danger:active{--button-background:var(--c-danger) radial-gradient(circle,transparent 40%,var(--c-danger-variant) 0) center/15000%}.sf-button.color-light{color:var(--c-gray)}.sf-button.color-light:hover{--button-background:var(--c-light) radial-gradient(circle,transparent 1%,var(--c-text-disabled) 0) center/15000%}.sf-button.color-light:active{--button-background:var(--c-light) radial-gradient(circle,transparent 40%,var(--c-text-disabled) 0) center/15000%}.sf-button:hover{--button-box-shadow-opacity:0.25;--button-background:var(--c-primary) radial-gradient(circle,transparent 1%,var(--c-primary-variant) 0) center/15000%}.sf-button:active{--button-box-shadow:none;--button-background:var(--c-primary) radial-gradient(circle,transparent 40%,var(--c-primary-variant) 0) center/15000%;--button-transition:background 0s;--button-text-decoration:underline;background-size:100%}.sf-button--pure{--button-padding:0;--button-background:transparent;--button-color:var(--c-text);--button-text-transform:none;--button-wrap:normal;--button-box-shadow:none}.sf-button--pure:active,.sf-button--pure:hover{--button-background:transparent;--button-text-decoration:none}.sf-button--full-width{--button-width:100%}.sf-button--outline{--button-border-width:1px;--button-color:var(--c-text)}.sf-button--outline,.sf-button--outline:hover{--button-background:transparent}.sf-button--outline:active{--button-border-color:var(--c-primary-variant);--button-background:transparent;--button-transition:color 150ms linear}.sf-button--outline.color-black{--button-border-color:var(--c-dark);--button-background:transparent}.sf-button--outline.color-black:active{--button-background:transparent}.sf-button--outline.color-white{--button-border-color:var(--c-white);--button-background:transparent}.sf-button--outline.color-white:active{--button-background:transparent}.sf-button--outline.color-primary{--button-border-color:var(--c-primary);--button-background:transparent}.sf-button--outline.color-primary:active{--button-background:transparent}.sf-button--outline.color-secondary{--button-border-color:var(--c-secondary);--button-background:transparent}.sf-button--outline.color-secondary:active{--button-background:transparent}.sf-button--outline.color-light{--button-border-color:var(--c-light);--button-background:transparent}.sf-button--outline.color-light:active{--button-background:transparent}.sf-button--outline.color-dark{--button-border-color:var(--c-dark)}.sf-button--outline.color-dark,.sf-button--outline.color-dark:active{--button-background:transparent}.sf-button--outline.color-info{--button-border-color:var(--c-info)}.sf-button--outline.color-info,.sf-button--outline.color-info:active{--button-background:transparent}.sf-button--outline.color-success{--button-border-color:var(--c-success);--button-background:transparent}.sf-button--outline.color-success:active{--button-background:transparent}.sf-button--outline.color-warning{--button-border-color:var(--c-warning);--button-background:transparent}.sf-button--outline.color-warning:active{--button-background:transparent}.sf-button--outline.color-danger{--button-border-color:var(--c-danger);--button-background:transparent}.sf-button--outline.color-danger:active{--button-background:transparent}.sf-button--text{--button-border-width:0;--button-padding:0;--button-background:transparent;--button-color:var(--c-text);--button-text-transform:none;--button-text-decoration:underline;--button-font-size:var(--font-size--sm);--button-font-weight:var(--font-weight--medium);--button-box-shadow:none;display:inline}.sf-button--text:hover{--button-background:transparent;--button-color:var(--c-primary)}.sf-button--text:active{--button-color:var(--c-gray)}.sf-button--text.color-black{--button-background:transparent}.sf-button--text.color-black:hover{--button-color:var(--c-dark)}.sf-button--text.color-black:active{--button-color:var(--c-gray);--button-background:transparent}.sf-button--text.color-white{--button-background:transparent}.sf-button--text.color-white:hover{--button-color:var(--c-white)}.sf-button--text.color-white:active{--button-color:var(--c-gray);--button-background:transparent}.sf-button--text.color-primary{--button-background:transparent}.sf-button--text.color-primary:hover{--button-color:var(--c-primary)}.sf-button--text.color-primary:active{--button-color:var(--c-gray);--button-background:transparent}.sf-button--text.color-secondary{--button-background:transparent}.sf-button--text.color-secondary:hover{--button-color:var(--c-secondary)}.sf-button--text.color-secondary:active{--button-color:var(--c-gray);--button-background:transparent}.sf-button--text.color-light{--button-background:transparent}.sf-button--text.color-light:hover{--button-color:var(--c-light)}.sf-button--text.color-light:active{--button-color:var(--c-gray);--button-background:transparent}.sf-button--text.color-dark{--button-background:transparent}.sf-button--text.color-dark:hover{--button-color:var(--c-dark)}.sf-button--text.color-dark:active{--button-color:var(--c-gray);--button-background:transparent}.sf-button--text.color-info{--button-background:transparent}.sf-button--text.color-info:hover{--button-color:var(--c-info)}.sf-button--text.color-info:active{--button-color:var(--c-gray);--button-background:transparent}.sf-button--text.color-success{--button-background:transparent}.sf-button--text.color-success:hover{--button-color:var(--c-success)}.sf-button--text.color-success:active{--button-color:var(--c-gray);--button-background:transparent}.sf-button--text.color-warning{--button-background:transparent}.sf-button--text.color-warning:hover{--button-color:var(--c-warning)}.sf-button--text.color-warning:active{--button-color:var(--c-gray);--button-background:transparent}.sf-button--text.color-danger{--button-background:transparent}.sf-button--text.color-danger:hover{--button-color:var(--c-danger)}.sf-button--text.color-danger:active{--button-color:var(--c-gray);--button-background:transparent}.sf-button.is-disabled--button,.sf-button.is-disabled--button:hover{--button-color:var(--c-text-disabled);--button-border-color:transparent;--button-background:var(--c-light);--button-box-shadow:none;pointer-events:none;cursor:default}.sf-button.is-disabled--button.sf-button--text,.sf-button.is-disabled--button:hover.sf-button--text{--button-background:transparent;--button-color:var(--c-gray-variant)}.sf-button.is-disabled--button.sf-button--outline,.sf-button.is-disabled--button:hover.sf-button--outline{--button-border-color:var(--c-light);--button-background:transparent}.sf-button--underlined{--button-border-width:0 0 1px 0;--button-border-color:var(--c-light);--button-background:transparent;--button-color:var(--c-text-muted);--button-box-shadow:none}.sf-button--underlined:active{--button-background:var(--c-gray-variant);--button-color:var(--c-light-variant)}.sf-button--underlined:hover{--button-background:var(--c-gray-variant);--button-color:var(--c-white)}.sf-button--underlined.color-black{--button-background:transparent}.sf-button--underlined.color-black:active{--button-background:var(--c-dark);--button-border-width:0 0 1px 0;--button-border-color:var(--c-light)}.sf-button--underlined.color-white{--button-background:transparent}.sf-button--underlined.color-white:active{--button-background:var(--c-white);--button-border-width:0 0 1px 0;--button-border-color:var(--c-light)}.sf-button--underlined.color-primary{--button-background:transparent}.sf-button--underlined.color-primary:active{--button-background:var(--c-primary);--button-border-width:0 0 1px 0;--button-border-color:var(--c-light)}.sf-button--underlined.color-secondary{--button-background:transparent}.sf-button--underlined.color-secondary:active{--button-background:var(--c-secondary);--button-border-width:0 0 1px 0;--button-border-color:var(--c-light)}.sf-button--underlined.color-light{--button-background:transparent}.sf-button--underlined.color-light:active{--button-background:var(--c-light);--button-border-width:0 0 1px 0;--button-border-color:var(--c-light)}.sf-button--underlined.color-dark{--button-background:transparent}.sf-button--underlined.color-dark:active{--button-background:var(--c-dark);--button-border-width:0 0 1px 0;--button-border-color:var(--c-light)}.sf-button--underlined.color-info{--button-background:transparent}.sf-button--underlined.color-info:active{--button-background:var(--c-info);--button-border-width:0 0 1px 0;--button-border-color:var(--c-light)}.sf-button--underlined.color-success{--button-background:transparent}.sf-button--underlined.color-success:active{--button-background:var(--c-success);--button-border-width:0 0 1px 0;--button-border-color:var(--c-light)}.sf-button--underlined.color-warning{--button-background:transparent}.sf-button--underlined.color-warning:active{--button-background:var(--c-warning);--button-border-width:0 0 1px 0;--button-border-color:var(--c-light)}.sf-button--underlined.color-danger{--button-background:transparent}.sf-button--underlined.color-danger:active{--button-background:var(--c-danger);--button-border-width:0 0 1px 0;--button-border-color:var(--c-light)}@media (min-width:1024px){.sf-button{--button-padding:var(--spacer-sm) var(--spacer-lg)}.sf-button--pure,.sf-button--text{--button-padding:0}}.sf-link{--button-width:var(--spacer-3xl)}.sf-link.is-disabled--link,.sf-link.is-disabled--link:hover{--button-box-shadow:none;--button-border-color:transparent;--button-background:var(--c-light);pointer-events:none;cursor:default}.sf-link.is-disabled--link.sf-button,.sf-link.is-disabled--link:hover.sf-button{--button-color:var(--c-text-disabled)}.sf-link.is-disabled--link.sf-button--text,.sf-link.is-disabled--link:hover.sf-button--text{--button-background:transparent;--link-color:var(--c-gray-variant)}.sf-link.is-disabled--link.sf-button--outline,.sf-link.is-disabled--link:hover.sf-button--outline{--button-border-color:var(--c-light);--button-background:transparent}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfImage_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfImage_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfImage_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfImage_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfImage_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media (min-width:1024px){.smartphone-only{display:none!important}}@media (max-width:1023px){.desktop-only{display:none!important}}.sf-image{position:relative;display:inline-block;line-height:0;overflow:hidden}.sf-image img{width:var(--image-width);max-width:100%;height:auto;height:var(--image-height,auto)}.sf-image.has-size{width:100%;max-width:calc(var(--_image-width)*1px)}.sf-image.has-size img:not(.noscript){position:absolute;top:50%;left:0;transform:translate3d(0,-50%,0)}.sf-image.has-size:after{display:block;content:\"\";padding-bottom:calc(var(--_image-height)/var(--_image-width)*100%)}.sf-image__overlay{position:absolute;top:0;right:0;left:0;bottom:0;display:flex;justify-content:center;align-items:center;padding:var(--image-overlay-padding,var(--spacer-sm));background:rgba(var(--c-dark-base),.6);background:var(--image-overlay-background,rgba(var(--c-dark-base),.6));color:var(--c-white);color:var(--image-overlay-color,var(--c-white));opacity:0;opacity:var(--image-overlay-opacity,0);font:var(--font-weight--light) var(--font-size--sm)/1.6 var(--font-family--secondary);font:var(--image-overlay-font,var(--image-overlay-font-weight,var(--font-weight--light)) var(--image-overlay-font-size,var(--font-size--sm))/var(--image-overlay-font-line-height,1.6) var(--image-overlay-font-family,var(--font-family--secondary)));transition:opacity .15s ease-in-out}.sf-image:hover{--image-overlay-opacity:1}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfHeading_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfHeading_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfHeading_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfHeading_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfHeading_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media (min-width:1024px){.smartphone-only{display:none!important}}@media (max-width:1023px){.desktop-only{display:none!important}}.sf-heading{box-sizing:border-box;padding:var(--heading-padding,0 0 var(--spacer-xs) 0);text-align:center;text-align:var(--heading-text-align,center)}.sf-heading__title{margin:0;margin:var(--heading-title-margin,0);color:var(--c-text);color:var(--heading-title-color,var(--c-text));font:var(--font-weight--semibold) var(--h1-font-size)/1.6 var(--font-family--secondary);font:var(--heading-title-font,var(--heading-title-font-weight,var(--font-weight--semibold)) var(--heading-title-font-size,var(--h1-font-size))/var(--heading-title-font-line-height,1.6) var(--heading-title-font-family,var(--font-family--secondary)))}.sf-heading__title.h2{font-size:var(--h2-font-size);font-size:var(--heading-title-font-size,var(--h2-font-size));font-weight:var(--font-weight--normal);font-weight:var(--heading-title-font-weight,var(--font-weight--normal))}.sf-heading__title.h3{font-size:var(--h3-font-size);font-size:var(--heading-title-font-size,var(--h3-font-size));font-weight:var(--font-weight--semibold);font-weight:var(--heading-title-font-weight,var(--font-weight--semibold))}.sf-heading__title.h4{font-size:var(--h4-font-size);font-size:var(--heading-title-font-size,var(--h4-font-size));font-weight:var(--font-weight--medium);font-weight:var(--heading-title-font-weight,var(--font-weight--medium))}.sf-heading__title.h5{font-size:var(--h5-font-size);font-size:var(--heading-title-font-size,var(--h5-font-size))}.sf-heading__title.h5,.sf-heading__title.h6{font-weight:var(--font-weight--normal);font-weight:var(--heading-title-font-weight,var(--font-weight--normal))}.sf-heading__title.h6{font-size:var(--h6-font-size);font-size:var(--heading-title-font-size,var(--h6-font-size))}.sf-heading__description{margin:var(--heading-description-margin,var(--spacer-sm) 0 0);color:var(--c-text);color:var(--heading-description-color,var(--c-text));font:var(--font-weight--normal) var(--font-size--base)/1.6 var(--font-family--secondary);font:var(--heading-description-font,var(--heading-description-font-weight,var(--font-weight--normal)) var(--heading-description-font-size,var(--font-size--base))/var(--heading-description-font-line-height,1.6) var(--heading-description-font-family,var(--font-family--secondary)))}@media (min-width:1024px){.sf-heading{--heading-padding:0;--heading-border:0;--heading-text-align:center}}.sf-heading--underline{border:var(--heading-border,var(--heading-border-style,solid) var(--heading-border-color,var(--c-light)));border-width:0 0 1px;border-width:var(--heading-border-width,0 0 1px 0)}.sf-heading--left{--heading-text-align:left}.sf-heading--right{--heading-text-align:right}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_error_vue_vue_type_style_index_0_id_470a379e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_error_vue_vue_type_style_index_0_id_470a379e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_error_vue_vue_type_style_index_0_id_470a379e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_error_vue_vue_type_style_index_0_id_470a379e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_error_vue_vue_type_style_index_0_id_470a379e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media (min-width:1024px){.smartphone-only[data-v-470a379e]{display:none!important}}@media (max-width:1023px){.desktop-only[data-v-470a379e]{display:none!important}}#error[data-v-470a379e]{box-sizing:border-box;display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;padding:0 var(--spacer-sm);margin:var(--spacer-xl) 0}@media (min-width:1024px){#error[data-v-470a379e]{max-width:77.5rem}}.image[data-v-470a379e]{--image-width:14.375rem;padding:var(--spacer-xl) 0}@media (min-width:1024px){.image[data-v-470a379e]{--image-width:25.75rem}}.heading[data-v-470a379e]{--heading-title-margin:0 0 var(--spacer-sm);--heading-title-color:var(--c-primary);--heading-title-font-weight:var(--font-weight--semibold);--heading-description-color:var(--c-text-muted);--heading-description-font-size:var(--font-size--base);--heading-description-margin:0 var(--spacer-base);--heading-description-font-family:var(--font-family--primary)}@media (min-width:1024px){.heading[data-v-470a379e]{--heading-description-margin:0}}.actions[data-v-470a379e]{display:flex;align-items:center;justify-content:flex-end;flex-direction:column;width:100%;margin:var(--spacer-xl) 0 0 0}.actions__button[data-v-470a379e]{--button-width:100%}.actions__button[data-v-470a379e]:first-child:hover{color:var(--c-white)}.actions__button[data-v-470a379e]:last-child{margin:var(--spacer-sm) 0}@media (min-width:1024px){.actions[data-v-470a379e]{margin:var(--spacer-lg) 0 0 0}.actions__button[data-v-470a379e]{--button-width:25rem}}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#fff;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(127);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(6).default("542e5343", content, true)

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Raleway:300,400,400i,500,600,700|Roboto:300,300i,400,400i,500,700&display=swap);"]);
// Module
exports.push([module.i, ".glide{position:relative;width:100%;box-sizing:border-box}.glide *{box-sizing:inherit}.glide__slides,.glide__track{overflow:hidden}.glide__slides{position:relative;width:100%;list-style:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;transform-style:preserve-3d;touch-action:pan-Y;padding:0;white-space:nowrap;display:flex;flex-wrap:nowrap;will-change:transform}.glide__slide,.glide__slides--dragging{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.glide__slide{width:100%;height:100%;flex-shrink:0;white-space:normal;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent}.glide__slide a{-webkit-user-select:none;user-select:none;-webkit-user-drag:none;-moz-user-select:none;-ms-user-select:none}.glide__arrows,.glide__bullets{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.glide--rtl{direction:rtl}.text-black,.text-black--variant{color:#1d1f22!important;color:var(--c-dark)!important}.bg-black,.bg-black--variant{background-color:#1d1f22!important;background-color:var(--c-dark)!important}.text-white,.text-white--variant{color:#fff!important;color:var(--c-white)!important}.bg-white,.bg-white--variant{background-color:#fff!important;background-color:var(--c-white)!important}.text-primary{color:#5ece7b!important;color:var(--c-primary)!important}.text-primary--variant{color:#9ee2b0!important;color:var(--c-primary-variant)!important}.bg-primary{background-color:#5ece7b!important;background-color:var(--c-primary)!important}.bg-primary--variant{background-color:#9ee2b0!important;background-color:var(--c-primary-variant)!important}.text-secondary{color:#1d1f22!important;color:var(--c-secondary)!important}.text-secondary--variant{color:#43464e!important;color:var(--c-secondary-variant)!important}.bg-secondary{background-color:#1d1f22!important;background-color:var(--c-secondary)!important}.bg-secondary--variant{background-color:#43464e!important;background-color:var(--c-secondary-variant)!important}.text-light{color:#f1f2f3!important;color:var(--c-light)!important}.text-light--variant{color:#fff!important;color:var(--c-light-variant)!important}.bg-light{background-color:#f1f2f3!important;background-color:var(--c-light)!important}.bg-light--variant{background-color:#fff!important;background-color:var(--c-light-variant)!important}.text-dark{color:#1d1f22!important;color:var(--c-dark)!important}.text-dark--variant{color:#43464e!important;color:var(--c-dark-variant)!important}.bg-dark{background-color:#1d1f22!important;background-color:var(--c-dark)!important}.bg-dark--variant{background-color:#43464e!important;background-color:var(--c-dark-variant)!important}.text-info{color:#0468db!important;color:var(--c-info)!important}.text-info--variant{color:#e1f4fe!important;color:var(--c-info-variant)!important}.bg-info{background-color:#0468db!important;background-color:var(--c-info)!important}.bg-info--variant{background-color:#e1f4fe!important;background-color:var(--c-info-variant)!important}.text-success{color:#5ece7b!important;color:var(--c-success)!important}.text-success--variant{color:#9ee2b0!important;color:var(--c-success-variant)!important}.bg-success{background-color:#5ece7b!important;background-color:var(--c-success)!important}.bg-success--variant{background-color:#9ee2b0!important;background-color:var(--c-success-variant)!important}.text-warning{color:#ecc713!important;color:var(--c-warning)!important}.text-warning--variant{color:#f6e389!important;color:var(--c-warning-variant)!important}.bg-warning{background-color:#ecc713!important;background-color:var(--c-warning)!important}.bg-warning--variant{background-color:#f6e389!important;background-color:var(--c-warning-variant)!important}.text-danger{color:#d12727!important;color:var(--c-danger)!important}.text-danger--variant{color:#fcede8!important;color:var(--c-danger-variant)!important}.bg-danger{background-color:#d12727!important;background-color:var(--c-danger)!important}.bg-danger--variant{background-color:#fcede8!important;background-color:var(--c-danger-variant)!important}:root{--c-black:#1d1f22;--c-black-base:29,31,34;--c-black-lighten:#292c30;--c-black-darken:#111214;--c-white:#fff;--_c-green-primary:#5ece7b;--_c-green-primary-base:94,206,123;--_c-green-primary-lighten:#72d48b;--_c-green-primary-darken:#4ac86b;--_c-green-secondary:#9ee2b0;--_c-green-secondary-base:158,226,176;--_c-green-secondary-lighten:#b2e8c0;--_c-green-secondary-darken:#8adca0;--_c-dark-primary:#1d1f22;--_c-dark-primary-base:29,31,34;--_c-dark-primary-lighten:#292c30;--_c-dark-primary-darken:#111214;--_c-dark-secondary:#43464e;--_c-dark-secondary-base:67,70,78;--_c-dark-secondary-lighten:#4f525c;--_c-dark-secondary-darken:#373a40;--_c-gray-primary:#72757e;--_c-gray-primary-base:114,117,126;--_c-gray-primary-lighten:#7f828b;--_c-gray-primary-darken:#666971;--_c-gray-secondary:#8d8f9a;--_c-gray-secondary-base:141,143,154;--_c-gray-secondary-lighten:#9b9ca6;--_c-gray-secondary-darken:#7f828e;--_c-gray-accent:#e0e0e1;--_c-gray-accent-base:224,224,225;--_c-gray-accent-lighten:#ededee;--_c-gray-accent-darken:#d3d3d4;--_c-light-primary:#f1f2f3;--_c-light-primary-base:241,242,243;--_c-light-primary-lighten:#fff;--_c-light-primary-darken:#e3e5e7;--_c-light-secondary:#fff;--_c-light-secondary-base:255,255,255;--_c-light-secondary-lighten:#fff;--_c-light-secondary-darken:#f2f2f2;--_c-red-primary:#d12727;--_c-red-primary-base:209,39,39;--_c-red-primary-lighten:#da3838;--_c-red-primary-darken:#bc2323;--_c-red-secondary:#fcede8;--_c-red-secondary-base:252,237,232;--_c-red-secondary-lighten:#fff;--_c-red-secondary-darken:#f9dbd1;--_c-yellow-primary:#ecc713;--_c-yellow-primary-base:236,199,19;--_c-yellow-primary-lighten:#eecd2b;--_c-yellow-primary-darken:#d4b311;--_c-yellow-secondary:#f6e389;--_c-yellow-secondary-base:246,227,137;--_c-yellow-secondary-lighten:#f8e9a1;--_c-yellow-secondary-darken:#f4dd71;--_c-blue-primary:#0468db;--_c-blue-primary-base:4,104,219;--_c-blue-primary-lighten:#0474f4;--_c-blue-primary-darken:#045cc2;--_c-blue-secondary:#e1f4fe;--_c-blue-secondary-base:225,244,254;--_c-blue-secondary-lighten:#fafdff;--_c-blue-secondary-darken:#c8ebfd;--c-body:var(--_c-light-secondary);--c-text:var(--_c-dark-primary);--c-text-muted:var(--_c-gray-primary);--c-text-disabled:var(--_c-gray-accent);--c-link:var(--_c-dark-secondary);--c-link-hover:var(--c-black);--c-primary:var(--_c-green-primary);--c-primary-base:var(--_c-green-primary-base);--c-primary-lighten:var(--_c-green-primary-lighten);--c-primary-darken:var(--_c-green-primary-darken);--c-primary-variant:var(--_c-green-secondary);--c-on-primary:var(--_c-light-secondary);--c-secondary:var(--_c-dark-primary);--c-secondary-base:var(--_c-dark-primary-base);--c-secondary-lighten:var(--_c-dark-primary-lighten);--c-secondary-darken:var(--_c-dark-primary-darken);--c-secondary-variant:var(--_c-dark-secondary);--c-on-secondary:var(--_c-light-secondary);--c-light:var(--_c-light-primary);--c-light-base:var(--_c-light-primary-base);--c-light-lighten:var(--_c-light-primary-lighten);--c-light-darken:var(--_c-light-primary-darken);--c-light-variant:var(--_c-light-secondary);--c-on-light:var(--c-black);--c-gray:var(--_c-gray-primary);--c-gray-base:var(--_c-gray-primary-base);--c-gray-lighten:var(--_c-gray-primary-lighten);--c-gray-darken:var(--_c-gray-primary-darken);--c-gray-variant:var(--_c-gray-secondary);--c-on-gray:var(--c-black);--c-dark:var(--_c-dark-primary);--c-dark-base:var(--_c-dark-primary-base);--c-dark-lighten:var(--_c-dark-primary-lighten);--c-dark-darken:var(--_c-dark-primary-darken);--c-dark-variant:var(--_c-dark-secondary);--c-on-dark:var(--_c-light-secondary);--c-info:var(--_c-blue-primary);--c-info-base:var(--_c-blue-primary-base);--c-info-lighten:var(--_c-blue-primary-lighten);--c-info-darken:var(--_c-blue-primary-darken);--c-info-variant:var(--_c-blue-secondary);--c-on-info:var(--_c-light-secondary);--c-success:var(--_c-green-primary);--c-success-base:var(--_c-green-primary-base);--c-success-lighten:var(--_c-green-primary-lighten);--c-success-darken:var(--_c-green-primary-darken);--c-success-variant:var(--_c-green-secondary);--c-on-success:var(--_c-light-secondary);--c-warning:var(--_c-yellow-primary);--c-warning-base:var(--_c-yellow-primary-base);--c-warning-lighten:var(--_c-yellow-primary-lighten);--c-warning-darken:var(--_c-yellow-primary-darken);--c-warning-variant:var(--_c-yellow-secondary);--c-on-warning:var(--_c-light-secondary);--c-danger:var(--_c-red-primary);--c-danger-base:var(--_c-red-primary-base);--c-danger-lighten:var(--_c-red-primary-lighten);--c-danger-darken:var(--_c-red-primary-darken);--c-danger-variant:var(--_c-red-secondary);--c-on-danger:var(--_c-light-secondary);--spacer-2xs:0.25rem;--spacer-xs:0.5rem;--spacer-sm:1rem;--spacer-base:1.5rem;--spacer-lg:2rem;--spacer-xl:2.5rem;--spacer-2xl:5rem;--spacer-3xl:10rem}@media (min-width:1024px){.smartphone-only{display:none!important}}@media (max-width:1023px){.desktop-only{display:none!important}}:root{--font-family--primary:\"Roboto\",serif;--font-family--secondary:\"Raleway\",sans-serif;--font-weight--light:300;--font-weight--normal:400;--font-weight--medium:500;--font-weight--semibold:600;--font-weight--bold:700;--font-size--xs:0.75rem;--font-size--sm:0.875rem;--font-size--base:1rem;--font-size--lg:1.125rem;--h1-font-size:1.5rem;--h2-font-size:1.5rem;--h3-font-size:var(--font-size--lg);--h4-font-size:var(--font-size--lg);--h5-font-size:var(--font-size--base);--h6-font-size:var(--font-size--base)}@media (min-width:1024px){:root{--h1-font-size:2.625rem;--h2-font-size:2.25rem;--h3-font-size:1.625rem;--h4-font-size:1.25rem;--h5-font-size:var(--font-size--base);--h6-font-size:var(--font-size--sm)}}.sf-fade-enter-active,.sf-fade-leave-active{transition:opacity .25s linear}.sf-fade-enter,.sf-fade-leave,.sf-fade-leave-to{opacity:0}.sf-collapse-bottom-enter-active,.sf-collapse-bottom-leave-active{transition:transform .25s ease-in-out}@media (min-width:1024px){.sf-collapse-bottom-enter-active,.sf-collapse-bottom-leave-active{transition:transform .35 ease-in-out}}.sf-collapse-bottom-enter,.sf-collapse-bottom-leave-to{transform:translate3d(0,100%,0)}.sf-collapse-top-enter-active,.sf-collapse-top-leave-active{transition:transform .25s ease-in-out}@media (min-width:1024px){.sf-collapse-top-enter-active,.sf-collapse-top-leave-active{transition:transform .35 ease-in-out}}.sf-collapse-top-enter,.sf-collapse-top-leave-to{transform:translate3d(0,-100%,0)}.sf-slide-left-enter-active,.sf-slide-left-leave-active{transition:transform .4s ease}.sf-slide-left-enter,.sf-slide-left-leave-to{transform:translate3d(-100%,0,0);transition:transform .3s ease-in}.sf-slide-right-enter-active,.sf-slide-right-leave-active{transition:transform .4s ease}.sf-slide-right-enter,.sf-slide-right-leave-to{transform:translate3d(100%,0,0);transition:transform .3s ease-in}.sf-expand{color:#639!important}.sf-expand-enter-active,.sf-expand-leave-active{transition:height .25s ease-in-out;overflow:hidden}.sf-bounce-enter-active{-webkit-animation:sf-bounce .3s;animation:sf-bounce .3s}.sf-bounce-leave-active{animation:sf-bounce .3s reverse}.sf-pulse-enter-active{-webkit-animation:sf-pulse .25s;animation:sf-pulse .25s}.sf-pulse-leave-active{animation:sf-pulse .25s reverse}@-webkit-keyframes sf-bounce{0%{transform:scale(0)}50%{transform:scale(1.2)}to{transform:scale(1)}}@keyframes sf-bounce{0%{transform:scale(0)}50%{transform:scale(1.2)}to{transform:scale(1)}}@-webkit-keyframes sf-pulse{0%{transform:scale(1)}50%{transform:scale(1.2)}to{transform:scale(1)}}@keyframes sf-pulse{0%{transform:scale(1)}50%{transform:scale(1.2)}to{transform:scale(1)}}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfSelect_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfSelect_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfSelect_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfSelect_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfSelect_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media (min-width:1024px){.smartphone-only{display:none!important}}@media (max-width:1023px){.desktop-only{display:none!important}}.sf-select{position:relative;box-sizing:border-box;width:var(--select-width);height:4.25rem;height:var(--select-height,4.25rem);padding:var(--select-padding,var(--spacer-sm) 0 var(--spacer-sm) 0);color:var(--c-text);color:var(--select-color,var(--c-text));cursor:default}.sf-select__label{position:absolute;top:30%;top:var(--select-label-top,30%);left:0;left:var(--select-label-left,0);padding:0 0 0 4px;height:.625rem;color:var(--c-secondary-variant);color:var(--select-label-color,var(--c-secondary-variant));transition:top .15s linear,font-size .15s linear;transition:var(--select-label-transition,top .15s linear,font-size .15s linear);font:var(--font-weight--normal) var(--font-size--base)/1 var(--font-family--secondary);font:var(--select-label-font,var(--select-label-font-weight,var(--font-weight--normal)) var(--select-label-font-size,var(--font-size--base))/var(--select-label-font-line-height,1) var(--select-label-font-family,var(--font-family--secondary)))}.sf-select__label:after{content:var(--select-label-required);color:var(--c-primary);color:var(--select-label-color,var(--c-primary))}.sf-select__dropdown{width:100%;height:1.625rem;margin:0 0 var(--spacer-2xs) 0;overflow-y:scroll;box-shadow:none;color:var(--c-secondary-variant);color:var(--select-dropdown-color,var(--c-secondary-variant));background:var(--c-white);outline:none;border:var(--select-dropdown-border,var(--select-dropdown-border-style,solid) var(--select-dropdown-border-color,var(--c-secondary)));border-width:0;border-width:var(--select-dropdown-border-width,0 0 0 0)}.sf-select__option{background:var(--c-white);background:var(--select-option-background,var(--c-white));font:var(--font-weight--normal) var(--font-size--base)/1 var(--font-family--secondary);font:var(--select-option-font,var(--select-option-font-weight,var(--font-weight--normal)) var(--select-option-font-size,var(--font-size--base))/var(--select-option-font-line-height,1) var(--select-option-font-family,var(--font-family--secondary)))}.sf-select .sf-select__dropdown:active{--select-label-color:var(--c-text-muted);--select-dropdown-border-color:var(--c-primary);--select-dropdown-color:var(--c-link)}.sf-select__label .sf-select__dropdown:active{top:0}.sf-select::-ms-expand{display:none}.sf-select__error-message{color:var(--c-danger);color:var(--select-error-message-color,var(--c-danger));min-height:calc(var(--font-size--xs)*1.2);min-height:var(--select-error-message-height,calc(var(--font-size--xs)*1.2));font:var(--font-weight--medium) var(--font-size--xs)/1.2 var(--font-family--secondary);font:var(--input-error-message-font,var(--input-error-message-font-weight,var(--font-weight--medium)) var(--input-error-message-font-size,var(--font-size--xs))/var(--input-error-message-font-line-height,1.2) var(--input-error-message-font-family,var(--font-family--secondary)))}.sf-select--underlined{--select-dropdown-border-width:0 0 1px 0;--select-border-width:0 0 1px 0;--select-border-color:var(--c-light)}.sf-select.is-selected{--select-label-top:0;--select-label-font-size:var(--font-size--xs);--select-dropdown-color:var(--c-secondary-variant)}.sf-select.is-invalid{--select-dropdown-border-color:var(--c-danger)}.sf-select.is-disabled{--select-dropdown-color:var(--c-text-disabled);--select-dropdown-border-color:var(--c-text-disabled);--select-label-color:var(--c-text-disabled)}.sf-select.is-required{--select-label-required:\" *\"}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media (min-width:1024px){.smartphone-only{display:none!important}}@media (max-width:1023px){.desktop-only{display:none!important}}.sf-list{list-style:none;list-style:var(--list-list-style,none);padding:0;padding:var(--list-padding,0);margin:0;margin:var(--list-margin,0)}.sf-list .sf-list__item{margin:0;margin:var(--list-item-margin,0);padding:0;padding:var(--list-item-padding,0);color:var(--c-text);color:var(--list-item-color,var(--c-text));border:var(--list-item-border,var(--list-item-border-style,solid) var(--list-item-border-color,var(--c-light)));border-width:0;border-width:var(--list-item-border-width,0);font:var(--font-weight--normal) var(--font-size--base)/1.4 var(--font-family--secondary);font:var(--list-item-font,var(--list-item-font-weight,var(--font-weight--normal)) var(--list-item-font-size,var(--font-size--base))/var(--list-item-font-line-height,1.4) var(--list-item-font-family,var(--font-family--secondary)))}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfOverlay_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfOverlay_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfOverlay_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfOverlay_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfOverlay_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media (min-width:1024px){.smartphone-only{display:none!important}}@media (max-width:1023px){.desktop-only{display:none!important}}.sf-overlay{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1;z-index:var(--overlay-z-index,1);background:rgba(var(--c-gray-base),.7);background:var(--overlay-background,rgba(var(--c-gray-base),.7))}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfBadge_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfBadge_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfBadge_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfBadge_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfBadge_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media (min-width:1024px){.smartphone-only{display:none!important}}@media (max-width:1023px){.desktop-only{display:none!important}}.sf-badge{display:inline-block;box-sizing:border-box;width:var(--badge-width);min-width:var(--badge-min-width);height:var(--badge-height);min-height:var(--badge-min-height);padding:var(--badge-padding,var(--spacer-xs) var(--spacer-sm));background:var(--c-primary);background:var(--badge-background,var(--c-primary));border:var(--badge-border);border-radius:var(--badge-border-radius);color:var(--c-white);color:var(--badge-color,var(--c-white));text-align:center;text-align:var(--badge-text-align,center);font:var(--font-weight--semibold) var(--font-size--xs)/1.6 var(--font-family--secondary);font:var(--badge-font,var(--badge-font-weight,var(--font-weight--semibold)) var(--badge-font-size,var(--font-size--xs))/var(--badge-font-line-height,1.6) var(--badge-font-family,var(--font-family--secondary)))}.sf-badge--full-width{--badge-width:100%}.sf-badge--number{--badge-min-width:1.25rem;--badge-min-height:1.25rem;--badge-padding:2px var(--spacer-2xs);--badge-border-radius:calc(var(--badge-line-height)*1rem);--badge-background:var(--c-danger);--badge-font-size:var(--font-size--xs);--badge-line-height:1;--badge-font-family:var(--font-family--primary)}.sf-badge.color-black{--badge-background:var(--c-dark)}.sf-badge.color-white{--badge-background:var(--c-white)}.sf-badge.color-primary{--badge-background:var(--c-primary)}.sf-badge.color-secondary{--badge-background:var(--c-secondary)}.sf-badge.color-light{--badge-background:var(--c-light)}.sf-badge.color-dark{--badge-background:var(--c-dark)}.sf-badge.color-info{--badge-background:var(--c-info)}.sf-badge.color-success{--badge-background:var(--c-success)}.sf-badge.color-warning{--badge-background:var(--c-warning)}.sf-badge.color-danger{--badge-background:var(--c-danger)}@media (min-width:1024px){.sf-badge--number{--badge-padding:1px var(--spacer-2xs)}}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfIcon_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfIcon_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfIcon_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfIcon_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfIcon_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media (min-width:1024px){.smartphone-only{display:none!important}}@media (max-width:1023px){.desktop-only{display:none!important}}.sf-icon{position:relative;position:var(--icon-position,relative);display:flex;align-items:center;justify-content:center;box-sizing:border-box;width:1.625rem;width:var(--icon-width,var(--icon-size,1.625rem));height:1.625rem;height:var(--icon-height,var(--icon-size,1.625rem));background:transparent;fill:var(--c-black);fill:var(--icon-color,var(--c-black))}.sf-icon img,.sf-icon svg{width:inherit;height:inherit}.sf-icon__badge{position:absolute;top:0;top:var(--icon-badge-top,0);right:0;right:var(--icon-badge-right,0)}.sf-icon.color-white{--icon-color:var(--c-white)}.sf-icon.color-black{--icon-color:var(--c-black)}.sf-icon.color-primary{--icon-color:var(--c-primary)}.sf-icon.color-primary-variant{--icon-color:var(--c-primary-variant)}.sf-icon.color-dark-secondary{--icon-color:var(--_c-dark-secondary)}.sf-icon.color-green-primary{--icon-color:var(--_c-green-primary)}.sf-icon.color-green-secondary{--icon-color:var(--_c-green-secondary)}.sf-icon.color-gray-primary{--icon-color:var(--_c-gray-primary)}.sf-icon.color-gray-secondary{--icon-color:var(--_c-gray-secondary)}.sf-icon.color-light-primary{--icon-color:var(--_c-light-primary)}.sf-icon.color-light-secondary{--icon-color:var(--_c-light-secondary)}.sf-icon.color-red-primary{--icon-color:var(--_c-red-primary)}.sf-icon.color-red-secondary{--icon-color:var(--_c-red-secondary)}.sf-icon.color-yellow-primary{--icon-color:var(--_c-yellow-primary)}.sf-icon.color-yellow-secondary{--icon-color:var(--_c-yellow-secondary)}.sf-icon.color-blue-primary{--icon-color:var(--_c-blue-primary)}.sf-icon.color-blue-secondary{--icon-color:var(--_c-blue-secondary)}.sf-icon.size-xxs{--icon-size:1rem}.sf-icon.size-xs{--icon-size:1.4rem}.sf-icon.size-sm{--icon-size:1.625rem}.sf-icon.size-md{--icon-size:1.8rem}.sf-icon.size-lg{--icon-size:2rem}.sf-icon.size-xl{--icon-size:2.2rem}.sf-icon.size-xxl{--icon-size:2.5rem}.sf-icon.size-xl3{--icon-size:2.8rem}.sf-icon.size-xl4{--icon-size:3.25rem}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfCircleIcon_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfCircleIcon_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfCircleIcon_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfCircleIcon_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfCircleIcon_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media (min-width:1024px){.smartphone-only{display:none!important}}@media (max-width:1023px){.desktop-only{display:none!important}}.sf-circle-icon{--icon-color:var(--c-white);--button-padding:0;--icon-size:1.5rem;--button-size:3.25rem;--button-background:var(--c-primary);--button-border-radius:100%;position:relative;position:var(--circle-icon-position,relative);--button-box-shadow:0 0 0 0.3125rem var(--c-primary)}.sf-circle-icon:hover{--button-background:var(--c-primary);--button-box-shadow-opacity:0.3}.sf-circle-icon:active{--button-box-shadow:0 0 0 0.5rem var(--c-primary)}.sf-circle-icon:disabled{--button-box-shadow:0px 4px 11px var(--c-light);--button-box-shadow-opacity:1;--icon-color:var(--c-text-disabled);--button-background:var(--c-light)}.sf-circle-icon__icon{--icon-position:static}.sf-circle-icon.color-black{--button-background:var(--c-black);--button-box-shadow:0 0 0 0.3125rem var(--c-black)}.sf-circle-icon.color-black:hover{--button-background:var(--c-black-lighten);--button-box-shadow-opacity:0.08}.sf-circle-icon.color-black:active{--button-box-shadow:0 0 0 0.5rem var(--c-black)}.sf-circle-icon.color-black:disabled{--button-box-shadow:0px 4px 11px var(--c-light);--button-box-shadow-opacity:1;--icon-color:var(--c-text-disabled);--button-background:var(--c-light)}.sf-circle-icon.color-white{--button-background:var(--c-white);--button-box-shadow:0 0 0 0.3125rem var(--c-white)}.sf-circle-icon.color-white:hover{--button-background:var(--c-white-lighten);--button-box-shadow-opacity:0.08}.sf-circle-icon.color-white:active{--button-box-shadow:0 0 0 0.5rem var(--c-white)}.sf-circle-icon.color-white:disabled{--button-box-shadow:0px 4px 11px var(--c-light);--button-box-shadow-opacity:1;--icon-color:var(--c-text-disabled);--button-background:var(--c-light)}.sf-circle-icon.color-primary{--button-background:var(--c-primary);--button-box-shadow:0 0 0 0.3125rem var(--c-primary)}.sf-circle-icon.color-primary:hover{--button-background:var(--c-primary-lighten);--button-box-shadow-opacity:0.08}.sf-circle-icon.color-primary:active{--button-box-shadow:0 0 0 0.5rem var(--c-primary)}.sf-circle-icon.color-primary:disabled{--button-box-shadow:0px 4px 11px var(--c-light);--button-box-shadow-opacity:1;--icon-color:var(--c-text-disabled);--button-background:var(--c-light)}.sf-circle-icon.color-secondary{--button-background:var(--c-secondary);--button-box-shadow:0 0 0 0.3125rem var(--c-secondary)}.sf-circle-icon.color-secondary:hover{--button-background:var(--c-secondary-lighten);--button-box-shadow-opacity:0.08}.sf-circle-icon.color-secondary:active{--button-box-shadow:0 0 0 0.5rem var(--c-secondary)}.sf-circle-icon.color-secondary:disabled{--button-box-shadow:0px 4px 11px var(--c-light);--button-box-shadow-opacity:1;--icon-color:var(--c-text-disabled);--button-background:var(--c-light)}.sf-circle-icon.color-light{--button-background:var(--c-light);--button-box-shadow:0 0 0 0.3125rem var(--c-light)}.sf-circle-icon.color-light:hover{--button-background:var(--c-light-lighten);--button-box-shadow-opacity:0.08}.sf-circle-icon.color-light:active{--button-box-shadow:0 0 0 0.5rem var(--c-light)}.sf-circle-icon.color-light:disabled{--button-box-shadow:0px 4px 11px var(--c-light);--button-box-shadow-opacity:1;--icon-color:var(--c-text-disabled);--button-background:var(--c-light)}.sf-circle-icon.color-dark{--button-background:var(--c-dark);--button-box-shadow:0 0 0 0.3125rem var(--c-dark)}.sf-circle-icon.color-dark:hover{--button-background:var(--c-dark-lighten);--button-box-shadow-opacity:0.08}.sf-circle-icon.color-dark:active{--button-box-shadow:0 0 0 0.5rem var(--c-dark)}.sf-circle-icon.color-dark:disabled{--button-box-shadow:0px 4px 11px var(--c-light);--button-box-shadow-opacity:1;--icon-color:var(--c-text-disabled);--button-background:var(--c-light)}.sf-circle-icon.color-info{--button-background:var(--c-info);--button-box-shadow:0 0 0 0.3125rem var(--c-info)}.sf-circle-icon.color-info:hover{--button-background:var(--c-info-lighten);--button-box-shadow-opacity:0.08}.sf-circle-icon.color-info:active{--button-box-shadow:0 0 0 0.5rem var(--c-info)}.sf-circle-icon.color-info:disabled{--button-box-shadow:0px 4px 11px var(--c-light);--button-box-shadow-opacity:1;--icon-color:var(--c-text-disabled);--button-background:var(--c-light)}.sf-circle-icon.color-success{--button-background:var(--c-success);--button-box-shadow:0 0 0 0.3125rem var(--c-success)}.sf-circle-icon.color-success:hover{--button-background:var(--c-success-lighten);--button-box-shadow-opacity:0.08}.sf-circle-icon.color-success:active{--button-box-shadow:0 0 0 0.5rem var(--c-success)}.sf-circle-icon.color-success:disabled{--button-box-shadow:0px 4px 11px var(--c-light);--button-box-shadow-opacity:1;--icon-color:var(--c-text-disabled);--button-background:var(--c-light)}.sf-circle-icon.color-warning{--button-background:var(--c-warning);--button-box-shadow:0 0 0 0.3125rem var(--c-warning)}.sf-circle-icon.color-warning:hover{--button-background:var(--c-warning-lighten);--button-box-shadow-opacity:0.08}.sf-circle-icon.color-warning:active{--button-box-shadow:0 0 0 0.5rem var(--c-warning)}.sf-circle-icon.color-warning:disabled{--button-box-shadow:0px 4px 11px var(--c-light);--button-box-shadow-opacity:1;--icon-color:var(--c-text-disabled);--button-background:var(--c-light)}.sf-circle-icon.color-danger{--button-background:var(--c-danger);--button-box-shadow:0 0 0 0.3125rem var(--c-danger)}.sf-circle-icon.color-danger:hover{--button-background:var(--c-danger-lighten);--button-box-shadow-opacity:0.08}.sf-circle-icon.color-danger:active{--button-box-shadow:0 0 0 0.5rem var(--c-danger)}.sf-circle-icon.color-danger:disabled{--button-box-shadow:0px 4px 11px var(--c-light);--button-box-shadow-opacity:1;--icon-color:var(--c-text-disabled);--button-background:var(--c-light)}.sf-circle-icon--small{--icon-size:8px;--button-size:1.625rem;--button-transition:background 150ms ease}.sf-circle-icon--small:hover{--button-background:var(--c-primary);--button-box-shadow:0 0 0 0.1875rem var(--c-primary)}.sf-circle-icon--small:active{--button-box-shadow:0 0 0 0.25rem var(--c-primary)}.sf-circle-icon--small:disabled{--button-box-shadow:0px 4px 11px var(--c-light);--button-box-shadow-opacity:1;--icon-color:var(--c-text-disabled);--button-background:var(--c-light)}.sf-circle-icon--small.color-black:hover{--button-box-shadow:0 0 0 0.1875rem var(--c-black)}.sf-circle-icon--small.color-black:active{--button-box-shadow:0 0 0 0.25rem var(--c-black)}.sf-circle-icon--small.color-black:disabled{--button-box-shadow:0px 4px 11px var(--c-light);--button-box-shadow-opacity:1;--icon-color:var(--c-text-disabled);--button-background:var(--c-light)}.sf-circle-icon--small.color-white:hover{--button-box-shadow:0 0 0 0.1875rem var(--c-white)}.sf-circle-icon--small.color-white:active{--button-box-shadow:0 0 0 0.25rem var(--c-white)}.sf-circle-icon--small.color-white:disabled{--button-box-shadow:0px 4px 11px var(--c-light);--button-box-shadow-opacity:1;--icon-color:var(--c-text-disabled);--button-background:var(--c-light)}.sf-circle-icon--small.color-primary:hover{--button-box-shadow:0 0 0 0.1875rem var(--c-primary)}.sf-circle-icon--small.color-primary:active{--button-box-shadow:0 0 0 0.25rem var(--c-primary)}.sf-circle-icon--small.color-primary:disabled{--button-box-shadow:0px 4px 11px var(--c-light);--button-box-shadow-opacity:1;--icon-color:var(--c-text-disabled);--button-background:var(--c-light)}.sf-circle-icon--small.color-secondary:hover{--button-box-shadow:0 0 0 0.1875rem var(--c-secondary)}.sf-circle-icon--small.color-secondary:active{--button-box-shadow:0 0 0 0.25rem var(--c-secondary)}.sf-circle-icon--small.color-secondary:disabled{--button-box-shadow:0px 4px 11px var(--c-light);--button-box-shadow-opacity:1;--icon-color:var(--c-text-disabled);--button-background:var(--c-light)}.sf-circle-icon--small.color-light:hover{--button-box-shadow:0 0 0 0.1875rem var(--c-light)}.sf-circle-icon--small.color-light:active{--button-box-shadow:0 0 0 0.25rem var(--c-light)}.sf-circle-icon--small.color-light:disabled{--button-box-shadow:0px 4px 11px var(--c-light);--button-box-shadow-opacity:1;--icon-color:var(--c-text-disabled);--button-background:var(--c-light)}.sf-circle-icon--small.color-dark:hover{--button-box-shadow:0 0 0 0.1875rem var(--c-dark)}.sf-circle-icon--small.color-dark:active{--button-box-shadow:0 0 0 0.25rem var(--c-dark)}.sf-circle-icon--small.color-dark:disabled{--button-box-shadow:0px 4px 11px var(--c-light);--button-box-shadow-opacity:1;--icon-color:var(--c-text-disabled);--button-background:var(--c-light)}.sf-circle-icon--small.color-info:hover{--button-box-shadow:0 0 0 0.1875rem var(--c-info)}.sf-circle-icon--small.color-info:active{--button-box-shadow:0 0 0 0.25rem var(--c-info)}.sf-circle-icon--small.color-info:disabled{--button-box-shadow:0px 4px 11px var(--c-light);--button-box-shadow-opacity:1;--icon-color:var(--c-text-disabled);--button-background:var(--c-light)}.sf-circle-icon--small.color-success:hover{--button-box-shadow:0 0 0 0.1875rem var(--c-success)}.sf-circle-icon--small.color-success:active{--button-box-shadow:0 0 0 0.25rem var(--c-success)}.sf-circle-icon--small.color-success:disabled{--button-box-shadow:0px 4px 11px var(--c-light);--button-box-shadow-opacity:1;--icon-color:var(--c-text-disabled);--button-background:var(--c-light)}.sf-circle-icon--small.color-warning:hover{--button-box-shadow:0 0 0 0.1875rem var(--c-warning)}.sf-circle-icon--small.color-warning:active{--button-box-shadow:0 0 0 0.25rem var(--c-warning)}.sf-circle-icon--small.color-warning:disabled{--button-box-shadow:0px 4px 11px var(--c-light);--button-box-shadow-opacity:1;--icon-color:var(--c-text-disabled);--button-background:var(--c-light)}.sf-circle-icon--small.color-danger:hover{--button-box-shadow:0 0 0 0.1875rem var(--c-danger)}.sf-circle-icon--small.color-danger:active{--button-box-shadow:0 0 0 0.25rem var(--c-danger)}.sf-circle-icon--small.color-danger:disabled{--button-box-shadow:0px 4px 11px var(--c-light);--button-box-shadow-opacity:1;--icon-color:var(--c-text-disabled);--button-background:var(--c-light)}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfBottomModal_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfBottomModal_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfBottomModal_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfBottomModal_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfBottomModal_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media (min-width:1024px){.smartphone-only{display:none!important}}@media (max-width:1023px){.desktop-only{display:none!important}}.sf-bottom-modal{position:fixed;position:var(--bottom-modal-position,fixed);width:100%;width:var(--bottom-modal-width,100%);top:var(--bottom-modal-top);bottom:0;bottom:var(--bottom-modal-bottom,0);right:0;right:var(--bottom-modal-right,0);transform:var(--bottom-modal-transform);--characteristic-description-font-size:var(--font-size--base)}@media (max-width:1023px){.sf-bottom-modal{--characteristic-description-font-weight:var(--font-weight--semibold)}}@media (min-width:1024px){.sf-bottom-modal{--list-item-margin:0 var(--spacer-sm);--button-text-transform:capitalize;--characteristic-description-font-size:var(--font-size--sm)}}.sf-bottom-modal__container{box-sizing:border-box;position:relative;z-index:1;padding:var(--bottom-modal-container-padding);background:var(--c-white);background:var(--bottom-modal-background,var(--c-white));font:var(--font-weight--light) var(--font-size--base)/1.6 var(--font-family--primary);font:var(--bottom-modal-container-font,var(--bottom-modal-container-font-weight,var(--font-weight--light)) var(--bottom-modal-container-font-size,var(--font-size--base))/var(--bottom-modal-container-font-line-height,1.6) var(--bottom-modal-container-font-family,var(--font-family--primary)))}@media (min-width:1024px){.sf-bottom-modal__container{height:var(--bottom-modal-height);padding:var(--bottom-modal-container-padding,var(--spacer-base) var(--spacer-2xl))}}.sf-bottom-modal__title{--heading-title-font-weight:var(--font-weight--normal);padding:var(--bottom-modal-title-padding,var(--spacer-sm) var(--spacer-lg));color:var(--c-text);color:var(--bottom-modal-title-color,var(--c-text));text-align:center;text-align:var(--bottom-modal-title-text-align,center)}@media (max-width:1023px){.sf-bottom-modal__title{--heading-title-font-size:var(--font-size--xs);--heading-title-font-weight:var(--font-weight--bold)}}.sf-bottom-modal__close{--button-display:none;position:absolute;top:var(--spacer-xs);right:var(--spacer-xs)}@media (min-width:1024px){.sf-bottom-modal__close{--button-display:flex}}.sf-bottom-modal__cancel{--button-display:flex;--button-background:var(--_c-light-primary);--button-color:var(--c-text-muted)}@media (min-width:1024px){.sf-bottom-modal__cancel{--button-display:none}}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfCharacteristic_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfCharacteristic_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfCharacteristic_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfCharacteristic_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfCharacteristic_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media (min-width:1024px){.smartphone-only{display:none!important}}@media (max-width:1023px){.desktop-only{display:none!important}}.sf-characteristic,.sf-characteristic__icon{display:flex;align-items:center}.sf-characteristic__icon{--icon-color:var(--c-primary);--icon-size:2rem;justify-content:center;margin:var(--characteristic-margin,0 var(--spacer-xs) 0 0)}.sf-characteristic__title{font:var(--font-weight--normal) var(--h5-font-size)/1.6 var(--font-family--secondary);font:var(--characteristic-title-font,var(--characteristic-title-font-weight,var(--font-weight--normal)) var(--characteristic-title-font-size,var(--h5-font-size))/var(--characteristic-title-font-line-height,1.6) var(--characteristic-title-font-family,var(--font-family--secondary)))}.sf-characteristic__description{font:var(--font-weight--normal) var(--font-size--xs)/1.6 var(--font-family--secondary);font:var(--characteristic-description-font,var(--characteristic-description-font-weight,var(--font-weight--normal)) var(--characteristic-description-font-size,var(--font-size--xs))/var(--characteristic-description-font-line-height,1.6) var(--characteristic-description-font-family,var(--font-family--secondary)))}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_LocaleSelector_vue_vue_type_style_index_0_id_85c2987a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_LocaleSelector_vue_vue_type_style_index_0_id_85c2987a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_LocaleSelector_vue_vue_type_style_index_0_id_85c2987a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_LocaleSelector_vue_vue_type_style_index_0_id_85c2987a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_LocaleSelector_vue_vue_type_style_index_0_id_85c2987a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media (min-width:1024px){.smartphone-only[data-v-85c2987a]{display:none!important}}@media (max-width:1023px){.desktop-only[data-v-85c2987a]{display:none!important}}.container[data-v-85c2987a]{margin:0 -5px;display:flex;flex-wrap:nowrap;align-items:center;position:relative}.container .sf-bottom-modal[data-v-85c2987a]{z-index:2;left:0}@media (min-width:1024px){.container .sf-bottom-modal[data-v-85c2987a]{--bottom-modal-height:100vh}}.container .sf-list .language[data-v-85c2987a]{padding:var(--spacer-sm) 0}@media (min-width:1024px){.container .sf-list[data-v-85c2987a]{display:flex}}.container .sf-list .sf-image[data-v-85c2987a]{--image-width:20px;margin-right:1rem;border:1px solid var(--c-light);border-radius:50%}.container__lang[data-v-85c2987a]{--image-width:20px;--button-box-shadow:none;background:none;padding:0 5px;display:flex;align-items:center;opacity:.5;border:none}.container__lang--selected[data-v-85c2987a],.container__lang[data-v-85c2987a]:hover{opacity:1}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfMenuItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfMenuItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfMenuItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfMenuItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfMenuItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media (min-width:1024px){.smartphone-only{display:none!important}}@media (max-width:1023px){.desktop-only{display:none!important}}.sf-menu-item{--link-text-decoration:none;--button-width:100%;display:flex;align-items:center;text-transform:var(--menu-item-text-transform);cursor:pointer;font:var(--font-weight--normal) var(--font-size--base)/1.4 var(--font-family--secondary);font:var(--menu-item-font,var(--menu-item-font-weight,var(--font-weight--normal)) var(--menu-item-font-size,var(--font-size--base))/var(--menu-item-font-line-height,1.4) var(--menu-item-font-family,var(--font-family--secondary)))}.sf-menu-item__link{display:flex;align-items:center;justify-content:space-between;width:100%}.sf-menu-item__icon{--icon-color:var(--c-gray);margin:var(--menu-item-icon-margin,0 var(--spacer-xs) 0 0)}.sf-menu-item__count{margin:0 0 0 auto;margin:var(--menu-item-count-margin,0 0 0 auto);color:var(--c-gray);color:var(--menu-item-count-color,var(--c-gray))}.sf-menu-item__mobile-nav-icon{display:flex;display:var(--menu-item-mobile-nav-icon-display,flex);margin:var(--menu-item-mobile-nav-icon-margin,0 0 0 var(--spacer-base))}.sf-menu-item__label{color:var(--c-dark-variant);color:var(--menu-item-label-color,var(--c-dark-variant))}.sf-menu-item.is-active,.sf-menu-item:hover{--menu-item-label-color:var(--c-primary)}@media (min-width:1024px){.sf-menu-item{--menu-item-mobile-nav-icon-display:none}}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 148 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfBar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfBar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfBar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfBar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfBar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media (min-width:1024px){.smartphone-only{display:none!important}}@media (max-width:1023px){.desktop-only{display:none!important}}.sf-bar{box-sizing:border-box;display:flex;justify-content:space-between;align-items:center;height:3.125rem;height:var(--bar-height,3.125rem);flex:0 0 3.125rem;flex:0 0 var(--bar-height,3.125rem);padding:var(--bar-padding,0 var(--spacer-base));background-color:var(--c-light);background-color:var(--bar-background,var(--c-light));font:var(--font-weight--medium) var(--font-size--base)/1.6 var(--font-family--secondary);font:var(--bar-font,var(--bar-font-weight,var(--font-weight--medium)) var(--bar-font-size,var(--font-size--base))/var(--bar-font-line-height,1.6) var(--bar-font-family,var(--font-family--secondary)))}.sf-bar__icon{--icon-width:0.875rem;padding:0;border:0;background:transparent}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 150 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfSidebar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfSidebar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfSidebar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfSidebar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfSidebar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media (min-width:1024px){.smartphone-only{display:none!important}}@media (max-width:1023px){.desktop-only{display:none!important}}.sf-sidebar__aside{position:fixed;top:0;top:var(--sidebar-top,0);left:0;left:var(--sidebar-left,0);right:0;right:var(--sidebar-right,0);bottom:0;bottom:var(--sidebar-bottom,0);z-index:1;z-index:var(--sidebar-z-index,1);display:flex;flex-direction:column;box-sizing:border-box;width:var(--sidebar-width);height:100%;background-color:var(--c-white);background-color:var(--sidebar-background,var(--c-white));box-shadow:0 4px 11px rgba(29,31,34,.1);box-shadow:var(--sidebar-box-shadow,0 4px 11px rgba(29,31,34,.1))}.sf-sidebar__top{padding:var(--sidebar-top-padding,var(--spacer-sm) var(--spacer-sm) 0 var(--spacer-sm));font:var(--font-weight--light) var(--font-size--base)/1.6 var(--font-family--primary);font:var(--sidebar-top,var(--sidebar-top-weight,var(--font-weight--light)) var(--sidebar-top-size,var(--font-size--base))/var(--sidebar-top-line-height,1.6) var(--sidebar-top-family,var(--font-family--primary)))}.sf-sidebar__content{overflow:auto;display:flex;display:var(--sidebar-content-display,flex);flex-direction:column;flex-direction:var(--sidebar-content-flex-direction,column);box-sizing:border-box;width:var(--sidebar-content-width);height:100%;padding:var(--sidebar-content-padding,var(--spacer-base) var(--spacer-sm));color:var(--c-text);color:var(--sidebar-content-color,var(--c-text));font:var(--font-weight--medium) var(--font-size--base)/1.6 var(--font-family--secondary);font:var(--sidebar-content-font,var(--sidebar-content-font-weight,var(--font-weight--medium)) var(--sidebar-content-font-size,var(--font-size--base))/var(--sidebar-content-font-line-height,1.6) var(--sidebar-content-font-family,var(--font-family--secondary)))}.sf-sidebar__content::-webkit-scrollbar{width:0}.sf-sidebar__title{--heading-title-color:var(--c-dark-variant);--heading-title-font-size:var(--font-size--xl);--heading-title-font-weight:var(--font-weight--semibold);--heading-description-font-size:var(--font-size--xl);display:var(--sidebar-title-display);margin:var(--sidebar-title,0 0 var(--spacer-lg) 0)}.sf-sidebar__bottom{position:-webkit-sticky;position:sticky;top:0;bottom:auto;padding:var(--sidebar-bottom-padding,var(--spacer-sm));font:var(--font-weight--light) var(--font-size--base)/1.6 var(--font-family--primary);font:var(--sidebar-bottom,var(--sidebar-bottom-weight,var(--font-weight--light)) var(--sidebar-bottom-size,var(--font-size--base))/var(--sidebar-bottom-line-height,1.6) var(--sidebar-bottom-family,var(--font-family--primary)))}.sf-sidebar__circle-icon{--circle-icon-position:absolute;z-index:1;display:flex;display:var(--sidebar-circle-icon-display,flex);left:var(--sidebar-circle-icon-left);top:var(--spacer-xl);top:var(--sidebar-circle-icon-top,var(--spacer-xl));right:0;right:var(--sidebar-circle-icon-right,0);transform:translate3d(50%,0,0);transform:var(--sidebar-circle-icon-transform,translate3d(50%,0,0))}@media (min-width:1024px){.sf-sidebar{--sidebar-width:25.5rem;--sidebar-top-padding:var(--spacer-xl) var(--spacer-xl) var(--spacer-sm) var(--spacer-xl);--sidebar-content-padding:var(--spacer-base) var(--spacer-xl);--sidebar-bottom-padding:var(--spacer-sm) var(--spacer-xl) var(--spacer-xl) var(--spacer-xl)}.sf-sidebar--right{--sidebar-left:auto;--sidebar-right:0;--sidebar-top-padding:var(--spacer-base);--sidebar-circle-icon-top:var(--spacer-sm);--sidebar-content-padding:var(--spacer-base);--sidebar-circle-icon-transform:translate3d(-25%,0,0)}.sf-sidebar--right .sf-sidebar__circle-icon{--button-background:transparent;--icon-color:var(--c-link)}.sf-sidebar--right .sf-sidebar__circle-icon:hover{--button-box-shadow-opacity:0}}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 152 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfSearchBar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfSearchBar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfSearchBar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfSearchBar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfSearchBar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media (min-width:1024px){.smartphone-only{display:none!important}}@media (max-width:1023px){.desktop-only{display:none!important}}.sf-search-bar{box-sizing:border-box;position:relative;display:flex;display:var(--search-bar-display,flex);align-items:center;background:var(--search-bar-background);padding:var(--search-bar-padding);width:var(--search-bar-width);height:2rem;height:var(--search-bar-height,2rem)}.sf-search-bar__button{position:absolute;bottom:var(--spacer-xs);right:0;right:var(--search-bar-button-right,0)}.sf-search-bar__icon{--icon-size:1.25rem;display:block;display:var(--search-bar-icon-display,block)}.sf-search-bar__input{position:relative;flex-grow:1;background:transparent;text-align:var(--search-bar-input-text-align);width:100%;height:100%;font:var(--font-weight--normal) var(--font-size--base)/1.6 var(--font-family--secondary);font:var(--search-bar-font,var(--search-bar-font-weight,var(--font-weight--normal)) var(--search-bar-font-size,var(--font-size--base))/var(--search-bar-font-line-height,1.6) var(--search-bar-font-family,var(--font-family--secondary)));border:var(--search-bar-border,var(--search-bar-border-style,solid) var(--search-bar-border-color,var(--c-dark-variant)));border-width:0 0 2px;border-width:var(--search-bar-border-width,0 0 2px 0)}.sf-search-bar__input::-webkit-input-placeholder{color:var(--c-gray);color:var(--search-bar-placeholder-color,var(--c-gray));-webkit-transition:color .2s ease-in;transition:color .2s ease-in;-webkit-transition:var(--search-bar-placeholder-transition,color .2s ease-in);transition:var(--search-bar-placeholder-transition,color .2s ease-in);font:inherit}.sf-search-bar__input::-moz-placeholder{color:var(--c-gray);color:var(--search-bar-placeholder-color,var(--c-gray));-moz-transition:color .2s ease-in;transition:color .2s ease-in;-moz-transition:var(--search-bar-placeholder-transition,color .2s ease-in);transition:var(--search-bar-placeholder-transition,color .2s ease-in);font:inherit}.sf-search-bar__input:-ms-input-placeholder{color:var(--c-gray);color:var(--search-bar-placeholder-color,var(--c-gray));-ms-transition:color .2s ease-in;transition:color .2s ease-in;-ms-transition:var(--search-bar-placeholder-transition,color .2s ease-in);transition:var(--search-bar-placeholder-transition,color .2s ease-in);font:inherit}.sf-search-bar__input:focus{--search-bar-border-color:var(--c-primary)}.sf-search-bar__input:focus::-webkit-input-placeholder{color:transparent;color:var(--search-bar-placeholder-color-focus,transparent)}.sf-search-bar__input:focus::-moz-placeholder{color:transparent;color:var(--search-bar-placeholder-color-focus,transparent)}.sf-search-bar__input:focus:-ms-input-placeholder{color:transparent;color:var(--search-bar-placeholder-color-focus,transparent)}.sf-search-bar__input::-webkit-search-cancel-button{opacity:0}.sf-search-bar__input[type=search]{-webkit-appearance:none}.sf-search-bar__input::-ms-clear{opacity:0}.sf-search-bar--position-center{flex-direction:row;flex-direction:var(--search-bar-icon-flex-direction,row)}.sf-search-bar--position-center .sf-search-bar__input{--search-bar-input-text-align:center}.sf-search-bar--position-center .sf-search-bar__input::-moz-placeholder{text-align:center}.sf-search-bar--position-center .sf-search-bar__input:-ms-input-placeholder{text-align:center}.sf-search-bar--position-center .sf-search-bar__input::placeholder{text-align:center}.sf-search-bar--no-icon{--search-bar-icon-display:none}@media (min-width:1024px){.sf-search-bar{--search-bar-width:20rem}}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 154 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfHeader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfHeader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfHeader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfHeader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfHeader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media (min-width:1024px){.smartphone-only{display:none!important}}@media (max-width:1023px){.desktop-only{display:none!important}}.sf-header-navigation-item{position:relative;position:var(--header-navigation-item-position,relative);display:flex;flex:0;flex:var(--header-navigation-item-flex,0)}@media (min-width:1024px){.sf-header-navigation-item{--header-navigation-item-flex:1;--header-navigation-item-position:static}}.sf-header-navigation-item__content{position:fixed;position:var(--header-navigation-item-content-position,fixed);top:0;top:var(--header-navigation-item-content-position,0);width:100%;width:var(--header-navigation-item-content-width,100%);z-index:2;z-index:var(--header-navigation-item-content-position,2);--header-navigation-item-padding:0}.sf-header-navigation-item__link{--link-text-decoration:var(--header-navigation-item-text-decoration,none)}.sf-header-navigation-item>.sf-header-navigation-item__menu-item{--menu-item-font-size:var(--font-size--base);--menu-item-font-weight:var(--font-weight--medium);--menu-item-text-transform:uppercase;display:flex;display:var(--header-navigation-item-menu-item-display,flex);padding:var(--header-navigation-item-menu-item-padding,var(--spacer-sm));margin:0;margin:var(--header-navigation-item-menu-item-margin,0);border:var(--header-navigation-item-menu-item-border,var(--header-navigation-item-menu-item-border-style,solid) var(--header-navigation-item-menu-item-border-color,var(--c-light)));border-width:0 0 1px;border-width:var(--header-navigation-item-menu-item-border-width,0 0 1px 0)}.sf-header-navigation-item:hover>:not(.sf-mega-menu){--header-navigation-item-color:var(--c-primary);--header-navigation-item-border-color:var(--c-primary)}.sf-header-navigation-item.is-active:hover>:not(.sf-mega-menu),.sf-header-navigation-item:hover>:not(.sf-mega-menu):active{--header-navigation-item-color:var(--c-primary)}.sf-header-navigation-item--not-stretched{--header-navigation-item-flex:0}.sf-header-navigation-item__item{display:flex;display:var(--header-navigation-item-display,flex)}.sf-header-navigation-item__item--desktop{--header-navigation-item-display:none}.sf-header-navigation-item__item--desktop>:not(.sf-mega-menu){--link-color:var(--header-navigation-item-color,var(--c-dark-variant));box-sizing:border-box;flex:1;align-items:center;justify-content:center;padding:var(--header-navigation-item-padding,calc(var(--spacer-sm) - 1px) var(--spacer-sm));margin:0;margin:var(--header-navigation-item-margin,0);border:solid transparent;border:var(--header-navigation-item-border,var(--header-navigation-item-border-style,solid) var(--header-navigation-item-border-color,transparent));border-width:0 0 2px;border-width:var(--header-navigation-item-border-width,0 0 2px 0);transition:border-color .15s ease-in-out,color .15s ease-in-out;transition:var(--header-navigation-item-transition,border-color .15s ease-in-out,color .15s ease-in-out);color:var(--c-dark-variant);color:var(--header-navigation-item-color,var(--c-dark-variant));font:var(--font-weight--normal) var(--font-size--base)/1.2 var(--font-family--secondary);font:var(--header-navigation-item-font,var(--header-navigation-item-font-weight,var(--font-weight--normal)) var(--header-navigation-item-font-size,var(--font-size--base))/var(--header-navigation-item-font-line-height,1.2) var(--header-navigation-item-font-family,var(--font-family--secondary)));text-transform:uppercase;text-decoration:none;text-decoration:initial;text-align:center}@media (min-width:1024px){.sf-header-navigation-item__item--desktop>:not(.sf-mega-menu){padding:var(--header-navigation-item-padding,calc(var(--spacer-lg) - 1px) var(--spacer-sm));margin:0;margin:var(--header-navigation-item-margin,0)}}.sf-header-navigation-item__item--desktop>:not(.sf-mega-menu):focus{--header-navigation-item-color:var(--c-text);--header-navigation-item-border-color:var(--c-primary)}@media (min-width:1024px){.sf-header-navigation-item__item--desktop{--header-navigation-item-display:flex}}.sf-header-navigation-item__item--mobile{--header-navigation-item-padding:0;--header-navigation-item-border:none;width:100%;width:var(--header-navigation-item-width,100%)}.sf-header-navigation-item__item--mobile>.sf-header-navigation-item__menu-item{--menu-item-font-size:var(--font-size--base);--menu-item-font-weight:var(--font-weight--medium);--menu-item-text-transform:uppercase;display:flex;display:var(--header-navigation-item-menu-item-display,flex);padding:var(--header-navigation-item-menu-item-padding,var(--spacer-sm));margin:0;margin:var(--header-navigation-item-menu-item-margin,0);border:var(--header-navigation-item-menu-item-border,var(--header-navigation-item-menu-item-border-style,solid) var(--header-navigation-item-menu-item-border-color,var(--c-light)));border-width:0 0 1px;border-width:var(--header-navigation-item-menu-item-border-width,0 0 1px 0)}@media (min-width:1024px){.sf-header-navigation-item__item--mobile{--header-navigation-item-display:none}}.sf-header-navigation__menu{display:none;display:var(--header-navigation-menu-display,none)}@media (min-width:1024px){.sf-header-navigation__menu{--header-navigation-menu-display:flex}}.sf-header-navigation__sidebar{--sidebar-content-padding:0;display:flex;display:var(--header-navigation-sidebar-display,flex)}@media (min-width:1024px){.sf-header-navigation__sidebar{--header-navigation-sidebar-display:none}}.sf-header{position:relative}.sf-header__wrapper{position:var(--header-wrapper-position);z-index:1;z-index:var(--header-wrapper-z-index,1);width:100%;background:#fff;background:var(--header-background,#fff);transition:transform .15s ease-in-out;transition:var(--header-wrapper-transition,transform .15s ease-in-out);transform:var(--header-wrapper-transform);box-shadow:var(--header-box-shadow)}.sf-header__header{display:flex;flex-wrap:wrap;flex-wrap:var(--header-flex-wrap,wrap);align-items:center;justify-content:center;padding:var(--header-padding,0 var(--spacer-sm));max-width:77.5rem;max-width:var(--header-width,77.5rem);margin:0 auto;margin:var(--header-margin,0 auto)}@media (min-width:1024px){.sf-header__header{flex-wrap:nowrap;flex-wrap:var(--header-flex-wrap,nowrap)}}.sf-header__logo{--image-width:var(--header-logo-width,auto);--image-height:var(--header-logo-height,2.125rem);flex:0 0 auto;flex:0 0 var(--header-logo-width,auto);margin:var(--header-logo-margin,var(--spacer-xs) 0)}.sf-header__title{margin:var(--header-title-margin,var(--spacer-xs) 0)}.sf-header__aside:not(:empty){margin:0 0 0 auto;margin:var(--header-aside-margin,0 0 0 auto)}.sf-header__actions{flex:100%;display:flex;flex-wrap:wrap;flex-wrap:var(--header-actions-flex-wrap,wrap);align-items:center;justify-content:flex-end}@media (min-width:1024px){.sf-header__actions{flex-wrap:nowrap;flex-wrap:var(--header-actions-flex-wrap,nowrap)}}.sf-header__navigation{order:1;display:none;display:var(--header-navigation-display,none);flex:0 0 calc(100% + var(--spacer-sm)*2);margin:var(--header-navigation-margin,0 calc(var(--spacer-sm)*-1))}@media (min-width:1024px){.sf-header__navigation{--header-navigation-display:flex;--header-navigation-margin:0 auto 0 var(--spacer-xl);order:0;flex:0 0 auto}}.sf-header__navigation.is-visible{--header-navigation-display:flex}.sf-header__search{--search-bar-display:none;flex:0 0 100%;flex:var(--header-search-flex,0 0 100%);margin:var(--spacer-xs) 0}@media (min-width:1024px){.sf-header__search{--search-bar-display:flex;--header-search-flex:0 1 19.875rem}}.sf-header__icons{order:var(--header-icons-order);display:none;display:var(--header-icons-display,none);margin:var(--header-icons-margin)}@media (min-width:1024px){.sf-header__icons{--header-icons-display:flex;margin:var(--header-icons-margin,var(--spacer-sm) 0)}}.sf-header__icon{--icon-color:var(--c-dark-variant);--icon-badge-top:-0.5rem;--icon-badge-right:-0.5rem}.sf-header__icon:hover{--icon-color:var(--c-text);filter:drop-shadow(0 4px 4px rgba(0,0,0,.25));filter:var(--header-icon-filter,drop-shadow(0 4px 4px rgba(0,0,0,.25)))}.sf-header__icon.is-active{--icon-color:var(--c-primary)}.sf-header__action{margin:var(--header-action-margin,0 0 0 var(--spacer-xl))}.sf-header-height{box-sizing:border-box}.sf-header.is-sticky{--header-wrapper-position:fixed}.sf-header.is-hidden{--header-wrapper-transform:translate3d(0,-100%,0);--header-wrapper-transition:transform 300ms ease-in-out}.sf-header--has-mobile-navigation,.sf-header--has-mobile-search{--header-box-shadow:0px 4px 11px rgba(29,31,34,0.1)}@media (min-width:1024px){.sf-header--has-mobile-navigation,.sf-header--has-mobile-search{--header-box-shadow:none}}.sf-header--has-mobile-search .sf-header__search{--search-bar-display:flex}.sf-header--has-mobile-navigation{--header-navigation-display:flex}@media (min-width:1024px){.sf-header--multiline{--header-icons-margin:var(--spacer-sm) 0 var(--spacer-sm) 100%;--header-icons-order:-1;--header-actions-flex-wrap:wrap;--header-navigation-item-padding:calc(var(--spacer-sm) - 1px) var(--spacer-sm)}}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 156 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHeader_vue_vue_type_style_index_0_id_6ce0af32_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHeader_vue_vue_type_style_index_0_id_6ce0af32_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHeader_vue_vue_type_style_index_0_id_6ce0af32_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHeader_vue_vue_type_style_index_0_id_6ce0af32_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHeader_vue_vue_type_style_index_0_id_6ce0af32_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media (min-width:1024px){.smartphone-only[data-v-6ce0af32]{display:none!important}}@media (max-width:1023px){.desktop-only[data-v-6ce0af32]{display:none!important}}.sf-header[data-v-6ce0af32]{--header-padding:var(--spacer-sm)}@media (min-width:1024px){.sf-header[data-v-6ce0af32]{--header-padding:0}}.sf-header__logo-image[data-v-6ce0af32]{height:100%}.nav-item[data-v-6ce0af32]{--header-navigation-item-margin:0 var(--spacer-base)}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 158 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfBottomNavigation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfBottomNavigation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfBottomNavigation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfBottomNavigation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfBottomNavigation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media (min-width:1024px){.smartphone-only{display:none!important}}@media (max-width:1023px){.desktop-only{display:none!important}}.sf-bottom-navigation{box-sizing:border-box;position:fixed;bottom:0;left:0;z-index:1;z-index:var(--bottom-navigation-z-index,1);display:flex;justify-content:space-around;align-items:flex-end;width:100%;height:3.75rem;height:var(--bottom-navigation-height,3.75rem);padding:var(--bottom-navigation-padding,0 var(--spacer-sm));background:var(--c-white);background:var(--bottom-navigation-background,var(--c-white));box-shadow:0 -2px 10px rgba(var(--_c-gray-secondary-base),.15);box-shadow:var(--bottom-navigation-box-shadow,0 -2px 10px rgba(var(--_c-gray-secondary-base),.15))}.sf-bottom-navigation-item{--icon-color:var(--c-link);background:transparent;border:0;top:var(--bottom-navigation-item-top);display:flex;flex-direction:column;justify-content:center;align-items:center;align-self:var(--bottom-navigation-item-align-self);margin:var(--bottom-navigation-item-margin);padding:var(--bottom-navigation-item-padding,var(--spacer-xs) 0 var(--spacer-xs) 0);color:var(--c-link);color:var(--bottom-navigation-item-color,var(--c-link));font:var(--font-weight--light) var(--font-size--xs)/1 var(--font-family--primary);font:var(--bottom-navigation-item-font,var(--bottom-navigation-item-font-weight,var(--font-weight--light)) var(--bottom-navigation-item-font-size,var(--font-size--xs))/var(--bottom-navigation-item-font-line-height,1) var(--bottom-navigation-item-font-family,var(--font-family--primary)))}.sf-bottom-navigation-item .sf-circle-icon{--button-size:4.125rem}.sf-bottom-navigation-item__label{margin:var(--bottom-navigation-item-label-margin)}.sf-bottom-navigation-item.is-active{--icon-color:var(--c-primary);--bottom-navigation-item-color:var(--c-primary);--bottom-navigation-item-font-weight:var(--font-weight--normal)}.sf-bottom-navigation-item .has-margin{--bottom-navigation-item-label-margin:var(--spacer-xs) 0 0 0}.sf-bottom-navigation-item__icon{background:transparent;padding:0}.sf-bottom-navigation-item.is-floating{--icon-color:var(--c-white)}.sf-bottom-navigation-item.is-floating .sf-circle-icon{--circle-icon-position:absolute;top:0;transform:translate3d(0,-50%,0)}.sf-bottom-navigation-item.center{--bottom-navigation-item-align-self:center}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 160 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfTopBar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfTopBar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfTopBar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfTopBar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfTopBar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media (min-width:1024px){.smartphone-only{display:none!important}}@media (max-width:1023px){.desktop-only{display:none!important}}.sf-top-bar{background-color:var(--c-light);background-color:var(--top-bar-background,var(--c-light))}.sf-top-bar__container{padding:var(--top-bar-padding,0 var(--spacer-base));box-sizing:border-box;justify-content:space-between;justify-content:var(--topbar-justify-content,space-between);max-width:77.5rem;max-width:var(--sf-topbar-width,77.5rem);height:2.5rem;height:var(--top-bar-height,2.5rem);margin:0 auto;font:var(--font-weight--normal) var(--font-size--sm)/1.6 var(--font-family--secondary);font:var(--bar-font,var(--bar-font-weight,var(--font-weight--normal)) var(--bar-font-size,var(--font-size--sm))/var(--bar-font-line-height,1.6) var(--bar-font-family,var(--font-family--secondary)))}.sf-top-bar__center,.sf-top-bar__container,.sf-top-bar__left,.sf-top-bar__right{display:flex;align-items:center}@media (min-width:1024px){.sf-top-bar{--top-bar-padding:0}}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 162 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBar_vue_vue_type_style_index_0_id_6a7f2206_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBar_vue_vue_type_style_index_0_id_6a7f2206_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBar_vue_vue_type_style_index_0_id_6a7f2206_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBar_vue_vue_type_style_index_0_id_6a7f2206_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBar_vue_vue_type_style_index_0_id_6a7f2206_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media (min-width:1024px){.smartphone-only[data-v-6a7f2206]{display:none!important}}@media (max-width:1023px){.desktop-only[data-v-6a7f2206]{display:none!important}}.topbar__button[data-v-6a7f2206]{margin:0 0 0 var(--spacer-xs)}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 164 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfProperty_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfProperty_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfProperty_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfProperty_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfProperty_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media (min-width:1024px){.smartphone-only{display:none!important}}@media (max-width:1023px){.desktop-only{display:none!important}}.sf-property{display:flex;color:var(--c-text);color:var(--property-color,var(--c-text))}.sf-property__name{margin:var(--property-name-margin,0 var(--spacer-xs) 0 0);color:var(--c-secondary-variant);color:var(--property-name-color,var(--c-secondary-variant));text-transform:var(--property-name-text-transform);font:var(--font-weight--normal) var(--font-size--base)/1.2 var(--font-family--secondary);font:var(--property-name-font,var(--property-name-font-weight,var(--font-weight--normal)) var(--property-name-font-size,var(--font-size--base))/var(--property-name-font-line-height,1.2) var(--property-name-font-family,var(--font-family--secondary)))}.sf-property__name:after{content:\":\";content:var(--property-name-content,\":\")}.sf-property__value{color:var(--property-value-color);font:var(--font-weight--semibold) var(--font-size--base)/1.2 var(--font-family--secondary);font:var(--property-value-font,var(--property-value-font-weight,var(--font-weight--semibold)) var(--property-value-font-size,var(--font-size--base))/var(--property-value-font-line-height,1.2) var(--property-value-font-family,var(--font-family--secondary)))}.sf-property--large{--property-name-font-size:var(--font-size--lg);--property-name-font-weight:var(--font-weight--medium);--property-value-font-size:var(--font-size--lg);--property-value-font-weight:var(--font-weight--semibold)}.sf-property--full-width{justify-content:space-between;width:100%}.sf-property--value-in-middle .sf-property__name,.sf-property--value-in-middle .sf-property__value{flex:1}.sf-property--without-suffix{--property-name-content:\"\"}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 166 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfPrice_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfPrice_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfPrice_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfPrice_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfPrice_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media (min-width:1024px){.smartphone-only{display:none!important}}@media (max-width:1023px){.desktop-only{display:none!important}}.sf-price{display:flex;flex-wrap:wrap;flex-wrap:var(--price-flex-wrap,wrap);flex-direction:row;flex-direction:var(--price-flex-direction,row);align-items:flex-end;align-items:var(--price-align-items,flex-end);justify-content:var(--price-justify-content)}.sf-price__regular{margin:0;margin:var(--price-regular-margin,0);color:var(--c-text);color:var(--price-regular-color,var(--c-text));font:var(--font-weight--medium) var(--font-size--lg)/1.6 var(--font-family--secondary);font:var(--price-regular-font,var(--price-regular-font-weight,var(--font-weight--medium)) var(--price-regular-font-size,var(--font-size--lg))/var(--price-regular-font-line-height,1.6) var(--price-regular-font-family,var(--font-family--secondary)));text-decoration:none;-webkit-text-decoration:var(--price-regular-text-decoration,none);text-decoration:var(--price-regular-text-decoration,none)}.sf-price__special{margin:0;margin:var(--price-special-margin,0);color:var(--c-text);color:var(--price-special-color,var(--c-text));font:var(--font-weight--medium) var(--font-size--lg)/1.6 var(--font-family--secondary);font:var(--price-special-font,var(--price-special-font-weight,var(--font-weight--medium)) var(--price-special-font-size,var(--font-size--lg))/var(--price-special-font-line-height,1.6) var(--price-special-font-family,var(--font-family--secondary)));text-decoration:none;-webkit-text-decoration:var(--price-special-text-decoration,none);text-decoration:var(--price-special-text-decoration,none)}.sf-price__old{margin:var(--price-old-margin,0 var(--spacer-xs) 0 0);color:var(--c-danger);color:var(--price-old-color,var(--c-danger));font:var(--font-weight--normal) var(--font-size--lg)/1.6 var(--font-family--secondary);font:var(--price-old-font,var(--price-old-font-weight,var(--font-weight--normal)) var(--price-old-font-size,var(--font-size--lg))/var(--price-old-font-line-height,1.6) var(--price-old-font-family,var(--font-family--secondary)));text-decoration:line-through;-webkit-text-decoration:var(--price-old-text-decoration,line-through);text-decoration:var(--price-old-text-decoration,line-through);--price-old-font-size:var(--font-size--xs)}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 168 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfInput_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfInput_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfInput_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfInput_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfInput_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media (min-width:1024px){.smartphone-only{display:none!important}}@media (max-width:1023px){.desktop-only{display:none!important}}.sf-input{position:relative;box-sizing:border-box;width:var(--input-width);height:var(--input-height);min-height:calc(var(--spacer-base) + var(--spacer-2xs) + var(--font-size--lg));min-height:var(--input-height,calc(var(--spacer-base) + var(--spacer-2xs) + var(--input-label-font-size, var(--font-size--lg))))}.sf-input__label{position:absolute;display:var(--input-label-display);top:50%;top:var(--input-label-top,50%);left:var(--input-label-left);padding:var(--input-label-padding);text-transform:underline;background:var(--input-label-background);transform:translate3d(0,-50%,0);transform:var(--input-label-transform,translate3d(0,calc(var(--input-label-top, 50%)*-1),0));transition:top .15s linear,font-size .15s linear;transition:var(--input-label-transition,top .15s linear,font-size .15s linear);font:var(--font-weight--normal) var(--font-size--lg)/1 var(--font-family--secondary);font:var(--input-label-font,var(--input-label-font-weight,var(--font-weight--normal)) var(--input-label-font-size,var(--font-size--lg))/var(--input-label-font-line-height,1) var(--input-label-font-family,var(--font-family--secondary)))}.sf-input__label,.sf-input__label:after{color:var(--c-link);color:var(--input-label-color,var(--c-link))}.sf-input__label:after{content:var(--input-label-required)}.sf-input__bar{position:relative;display:block;display:var(--input-bar-display,block)}.sf-input__bar:after,.sf-input__bar:before{position:absolute;bottom:0;width:0;width:var(--input-bar-width,0);height:1px;background:var(--c-primary);background:var(--input-bar-background,var(--c-primary));transition:width .15s linear;content:\"\"}.sf-input__bar:before{left:50%}.sf-input__bar:after{right:50%}.sf-input__error-message{color:var(--c-danger);color:var(--input-error-message-color,var(--c-danger));min-height:calc(var(--font-size--xs)*1.2);font:var(--font-weight--medium) var(--font-size--xs)/1.2 var(--font-family--secondary);font:var(--input-error-message-font,var(--input-error-message-font-weight,var(--font-weight--medium)) var(--input-error-message-font-size,var(--font-size--xs))/var(--input-error-message-font-line-height,1.2) var(--input-error-message-font-family,var(--font-family--secondary)))}.sf-input__wrapper,.sf-input input{border-radius:0;width:100%;height:100%;-webkit-appearance:none;-moz-appearance:none;appearance:none}.sf-input__wrapper{position:relative;margin:var(--input-margin,0 0 var(--spacer-xs) 0)}.sf-input input{display:block;box-sizing:border-box;padding:var(--input-padding,var(--spacer-sm) 0 var(--spacer-xs) 0);border:var(--input-border,var(--input-border-style,solid) var(--input-border-color,var(--c-link)));border-width:0 0 1px;border-width:var(--input-border-width,0 0 1px 0);background:var(--input-background);color:var(--c-text);color:var(--input-color,var(--c-text));font:var(--font-weight--normal) var(--font-size--lg)/1 var(--font-family--secondary);font:var(--input-font,var(--input-font-weight,var(--font-weight--normal)) var(--input-font-size,var(--font-size--lg))/var(--input-font-line-height,1) var(--input-font-family,var(--font-family--secondary)));text-align:var(--input-text-align)}.sf-input input:-moz-placeholder-shown~*{--icon-color:var(--c-primary);--input-password-icon-background:var(--c-primary);--input-label-top:0;--input-label-color:var(--c-primary);--input-label-font-size:var(--font-size--xs);--input-bar-width:50%;--input-error-message-color:var(--c-primary)}.sf-input input:-ms-input-placeholder~*{--icon-color:var(--c-primary);--input-password-icon-background:var(--c-primary);--input-label-top:0;--input-label-color:var(--c-primary);--input-label-font-size:var(--font-size--xs);--input-bar-width:50%;--input-error-message-color:var(--c-primary)}.sf-input input:focus~*,.sf-input input:placeholder-shown~*{--icon-color:var(--c-primary);--input-password-icon-background:var(--c-primary);--input-label-top:0;--input-label-color:var(--c-primary);--input-label-font-size:var(--font-size--xs);--input-bar-width:50%;--input-error-message-color:var(--c-primary)}.sf-input input:required~*{--input-label-required:\" *\"}.sf-input input:disabled{--input-border-color:var(--c-text-disabled);--input-color:var(--c-text-disabled);-webkit-text-fill-color:var(--c-text-disabled)}.sf-input input:disabled~*{--icon-color:var(--text-disabled);--input-label-color:var(--c-text-disabled)}.sf-input input[type=number]{-moz-appearance:textfield}.sf-input input[type=number]::-webkit-inner-spin-button,.sf-input input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.sf-input input[type=search]{-webkit-appearance:none}.sf-input__password-button{--icon-size:12px;--button-padding:0;--button-background:transparent;position:absolute;top:50%;top:var(--input-icon-top,50%);right:var(--spacer-xs);right:var(--input-icon-right,var(--spacer-xs));transform:translate3d(0,-50%,0)}.sf-input__password-button:hover{--button-background:transparent;--button-box-shadow:none}.sf-input__password-icon{position:relative}.sf-input__password-icon.hidden{--input-password-icon-scaleX:1}.sf-input__password-icon:after{position:absolute;top:50%;width:100%;height:1px;background:var(--c-black);background:var(--input-password-icon-background,var(--c-black));transform:translate3d(0,-50%,0) rotate(45deg) scaleX(0);transform:translate3d(0,-50%,0) rotate(45deg) scaleX(var(--input-password-icon-scaleX,0));transition:transform .15s linear;content:\"\"}.sf-input.invalid,.sf-input.invalid input:focus~*{--input-label-color:var(--c-danger)}.sf-input.invalid input:focus~*{--input-bar-background:var(--c-danger)}.sf-input.has-text,.sf-input input[type=date]~*,.sf-input input[type=file]~*,.sf-input input[type=image]~*,.sf-input input[type=time]~*{--input-label-top:0;--input-label-font-size:var(--font-size--xs)}.sf-input--filled{--input-background:var(--c-light);--input-font-size:var(--font-size--xs);--input-padding:var(--spacer-xs);--input-label-left:var(--spacer-xs);--input-label-font-size:var(--font-size--xs);--input-label-color:var(--c-secondary-variant);--input-label-transition:color 150ms ease;--input-border:none}.sf-input--filled.has-text{--input-label-display:none}.sf-input--filled input:focus~*{--input-bar-width:unset;--input-label-top:50%;--input-label-font-size:var(--font-size--xs);--input-label-color:var(--c-text)}.sf-input--outline{--input-label-left:var(--spacer-sm);--input-padding:var(--spacer-xs) var(--spacer-xs) var(--spacer-xs) var(--spacer-sm);--input-border-color:var(--c-secondary-variant);--input-label-background:var(--c-white);--input-label-font-size:var(--font-size-base)}.sf-input--outline.sf-input--has-text{--input-label-top:-25%;--input-label-left:var(--spacer-xs);--input-label-padding:0 var(--spacer-2xs)}.sf-input--outline.sf-input--invalid{--input-border-color:var(--c-danger);--input-label-color:var(--c-danger)}.sf-input--outline.sf-input--invalid input:focus~*{--input-label-color:var(--c-danger)}.sf-input--outline input{--input-border-width:1px}.sf-input--outline input:focus~*{--input-label-top:-25%;--input-label-left:var(--spacer-xs);--input-label-padding:0 var(--spacer-2xs);--input-bar-width:0;--input-label-color:var(--c-secondary-variant)}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 170 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfQuantitySelector_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfQuantitySelector_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfQuantitySelector_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfQuantitySelector_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfQuantitySelector_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media (min-width:1024px){.smartphone-only{display:none!important}}@media (max-width:1023px){.desktop-only{display:none!important}}.sf-quantity-selector{position:relative;display:flex;align-items:center;justify-content:var(--quantity-selector-justify-content);box-sizing:border-box;height:3.25rem;height:var(--quantity-selector-height,3.25rem);width:6.75rem;width:var(--quantity-selector-width,6.75rem);background:var(--c-light);background:var(--quantity-selector-background,var(--c-light));font:var(--font-weight--normal) var(--font-size--lg)/1.6 var(--font-family--primary);font:var(--quantity-selector-font,var(--quantity-selector-font-weight,var(--font-weight--normal)) var(--quantity-selector-font-size,var(--font-size--lg))/var(--quantity-selector-font-line-height,1.6) var(--quantity-selector-font-family,var(--font-family--primary)));border:var(--quantity-selector-border,var(--quantity-selector-border-style,solid) var(--quantity-selector-border-color,var(--c-light)));border-width:0;border-width:var(--quantity-selector-border-width,0)}.sf-quantity-selector__button{--button-height:100%;--button-padding:var(--spacer-2xs) var(--spacer-xs) 0;--button-background:transparent;--button-color:var(--c-text)}.sf-quantity-selector__button:hover{--button-background:transparent;--button-box-shadow:none;text-shadow:0 4px 4px rgba(0,0,0,.25);text-shadow:var(--quantity-selector-text-shadow,0 4px 4px rgba(0,0,0,.25))}.sf-quantity-selector__input{--input-bar-display:none;--input-height:var(--quantity-selector-height,3.25rem);--input-padding:0;--input-margin:0;--input-border:0;--input-text-align:center}.sf-quantity-selector__input input{font-family:inherit}.sf-quantity-selector--secondary{--quantity-selector-background:transparent;--quantity-selector-border-width:0 0 1px 0;--quantity-selector-width:100%;--quantity-selector-justify-content:center;--quantity-selector-text-shadow:none}.sf-quantity-selector--secondary .sf-quantity-selector__button{--button-background:var(--c-light);--button-border-radius:100%;--button-padding:0;--button-size:1.625rem;flex:none}.sf-quantity-selector--secondary .sf-quantity-selector__input{--input-width:9rem}.sf-quantity-selector--transparent{--quantity-selector-background:transparent}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 172 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfCollectedProduct_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfCollectedProduct_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfCollectedProduct_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfCollectedProduct_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfCollectedProduct_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media (min-width:1024px){.smartphone-only{display:none!important}}@media (max-width:1023px){.desktop-only{display:none!important}}.sf-collected-product{position:relative;box-sizing:border-box;display:flex;max-width:var(--collected-product-width);padding:var(--collected-product-padding,var(--spacer-xs));background:var(--collected-product-background);z-index:var(--collected-product-z-index)}.sf-collected-product:after{content:\"\"}.sf-collected-product:hover{--collected-product-background:var(--c-white)}.sf-collected-product__remove{position:absolute;opacity:var(--collected-product-remove-opacity);right:var(--spacer-xs);right:var(--collected-product-remove-right,var(--spacer-xs));transition:var(--collected-product-remove-transition)}.sf-collected-product__remove:focus{--collected-product-remove-opacity:1}.sf-collected-product__remove--circle-icon{top:var(--collected-product-remove-top);display:none;display:var(--collected-product-remove-circle-icon-display,none);transform:var(--collected-product-remove-circle-icon-transform);background:var(--c-primary)}.sf-collected-product__remove--circle-icon .sf-icon{--icon-color:var(--c-white)}.sf-collected-product__remove--text{bottom:var(--spacer-xs);bottom:var(--collected-product-remove-bottom,var(--spacer-xs));display:var(--collected-product-remove-text-display)}.sf-collected-product__more-actions{position:absolute;top:var(--collected-product-remove-top);right:var(--spacer-xs);right:var(--collected-product-remove-right,var(--spacer-xs))}.sf-collected-product__aside{order:-1;position:relative;flex:0 0 8.75rem;line-height:0}.sf-collected-product__image{background:var(--c-light);background:var(--collected-product-image-background,var(--c-light))}.sf-collected-product__quantity-wrapper{position:absolute;box-sizing:border-box;right:0;bottom:0;z-index:1;padding:var(--spacer-sm)}.sf-collected-product__quantity-selector{--quantity-selector-background:var(--c-light)}.sf-collected-product__main{flex:1;margin:var(--collected-product-main-margin,0 0 0 var(--spacer-sm));display:flex;flex-direction:column;flex-direction:var(--collected-product-main-flex-direction,column)}.sf-collected-product__actions,.sf-collected-product__details{display:flex;flex-direction:column}.sf-collected-product__title{display:inline-block;margin:var(--collected-product-title-margin,0 var(--spacer-base) var(--spacer-sm) 0);color:var(--c-link);color:var(--collected-product-title-color,var(--c-link));--link-text-decoration:none;font:var(--font-weight--normal) var(--font-size--base)/1.6 var(--font-family--secondary);font:var(--collected-product-title-font,var(--collected-product-title-font-weight,var(--font-weight--normal)) var(--collected-product-title-font-size,var(--font-size--base))/var(--collected-product-title-font-line-height,1.6) var(--collected-product-title-font-family,var(--font-family--secondary)))}@media (min-width:1024px){.sf-collected-product{--collected-product-width:21.875rem;--collected-product-padding:var(--spacer-xs);--collected-product-remove-top:var(--spacer-xs);--collected-product-remove-right:0;--collected-product-remove-circle-icon-transform:translate3d(50%,0,0);--collected-product-remove-opacity:0;--collected-product-remove-transition:opacity 150ms ease-in-out;--collected-product-remove-circle-icon-display:flex;--collected-product-remove-text-display:none}.sf-collected-product:after{--collected-product-transition:box-shadow 150ms ease-in-out}.sf-collected-product__configuration{display:flex;display:var(--collected-product-configuration-display,flex);flex-direction:column;justify-content:flex-end;justify-content:var(--collected-product-configuration-justify-content,flex-end);align-items:flex-start;align-items:var(--collected-product-configuration-align-items,flex-start);flex:2;margin:1rem 0 0;margin:var(--collected-product-configuration-margin,1rem 0 0 0)}.sf-collected-product__actions{display:none;display:var(--collected-product-actions-display,none);justify-content:flex-end;justify-content:var(--collected-product-actions-justify-content,flex-end);align-items:flex-start;align-items:var(--collected-product-actions-align-items,flex-start);flex:2}.sf-collected-product:hover{--collected-product-actions-display:flex;--collected-product-z-index:1;--collected-product-remove-opacity:1;--collected-product-configuration-display:none}.sf-collected-product:hover:after{content:\"\";position:absolute;top:0;right:0;bottom:0;left:0;z-index:-1;box-shadow:0 4px 11px rgba(29,31,34,.1);box-shadow:var(--collected-product-box-shadow,0 4px 11px rgba(29,31,34,.1))}.sf-collected-product__aside{flex:0 0 8.75rem}.sf-collected-product__image{mix-blend-mode:darken}.sf-collected-product__details{flex:1}.sf-collected-product--detailed{--collected-product-width:100%;--collected-product-remove-opacity:1;--collected-product-remove-circle-icon-display:none;--collected-product-remove-bottom:auto;--collected-product-remove-right:var(--spacer-xs);--collected-product-remove-text-display:inline;--collected-product-actions-justify-content:flex-start;--collected-product-main-flex-direction:row;--collected-product-actions-align-items:flex-start}.sf-collected-product--detailed:hover{--collected-product-box-shadow:none}}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 174 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_CartSidebar_vue_vue_type_style_index_0_id_586901b6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_CartSidebar_vue_vue_type_style_index_0_id_586901b6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_CartSidebar_vue_vue_type_style_index_0_id_586901b6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_CartSidebar_vue_vue_type_style_index_0_id_586901b6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_CartSidebar_vue_vue_type_style_index_0_id_586901b6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media (min-width:1024px){.smartphone-only[data-v-586901b6]{display:none!important}}@media (max-width:1023px){.desktop-only[data-v-586901b6]{display:none!important}}@media (min-width:1024px){#cart>*[data-v-586901b6]{--sidebar-bottom-padding:var(--spacer-base);--sidebar-content-padding:var(--spacer-base)}}.cart-summary[data-v-586901b6]{margin-top:var(--spacer-xl)}.my-cart[data-v-586901b6]{flex:1;display:flex;flex-direction:column}.my-cart__total-items[data-v-586901b6]{margin:0}.my-cart__total-price[data-v-586901b6]{--price-font-size:var(--font-size--xl);--price-font-weight:var(--font-weight--medium);margin:0 0 var(--spacer-base) 0}.empty-cart[data-v-586901b6]{--heading-description-margin:0 0 var(--spacer-xl) 0;--heading-title-margin:0 0 var(--spacer-xl) 0;--heading-title-color:var(--c-primary);--heading-title-font-weight:var(--font-weight--semibold)}.empty-cart[data-v-586901b6],.empty-cart__banner[data-v-586901b6]{display:flex;flex:1;align-items:center;flex-direction:column}.empty-cart__banner[data-v-586901b6]{justify-content:center}.empty-cart__heading[data-v-586901b6]{padding:0 var(--spacer-base)}.empty-cart__image[data-v-586901b6]{--image-width:13.1875rem;margin:0 0 var(--spacer-xl) 7.5rem}@media (min-width:1024px){.empty-cart__image[data-v-586901b6]{--image-width:23.3125rem;margin:0 0 var(--spacer-2xl) 7.5rem}}@media (min-width:1024px){.empty-cart[data-v-586901b6]{--heading-title-font-size:var(--font-size--xl);--heading-title-margin:0 0 var(--spacer-sm) 0}}.collected-product-list[data-v-586901b6]{flex:1}.collected-product[data-v-586901b6]{margin:0 0 var(--spacer-sm) 0;--image-height:12.5rem}.collected-product__properties[data-v-586901b6]{margin:var(--spacer-xs) 0 0 0;display:flex;flex-direction:column;justify-content:flex-end;align-items:flex-start;flex:2}.collected-product__properties[data-v-586901b6]:first-child{margin-bottom:8px}.collected-product__actions[data-v-586901b6]{transition:opacity .15s ease-in-out}.collected-product__compare[data-v-586901b6],.collected-product__save[data-v-586901b6]{--button-padding:0}.collected-product__compare[data-v-586901b6]:focus,.collected-product__save[data-v-586901b6]:focus{--cp-save-opacity:1;--cp-compare-opacity:1}.collected-product__save[data-v-586901b6]{opacity:0;opacity:var(--cp-save-opacity,0)}.collected-product__compare[data-v-586901b6]{opacity:0;opacity:var(--cp-compare-opacity,0)}.collected-product[data-v-586901b6]:hover{--cp-save-opacity:1;--cp-compare-opacity:1}@media (min-width:1024px){.collected-product:hover .collected-product__properties[data-v-586901b6]{display:none}}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 176 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfModal_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfModal_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfModal_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfModal_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfModal_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media (min-width:1024px){.smartphone-only{display:none!important}}@media (max-width:1023px){.desktop-only{display:none!important}}.sf-modal__container{position:fixed;top:0;top:var(--modal-top,0);right:0;right:var(--modal-right,0);bottom:0;bottom:var(--modal-bottom,0);left:0;left:var(--modal-left,0);z-index:1;z-index:var(--modal-index,1);transform:var(--modal-transform);display:flex;flex-direction:column;flex-direction:var(--modal-flex-direction,column);align-content:space-between;box-sizing:border-box;width:var(--modal-width);height:var(--modal-height);border:var(--modal-border);max-height:var(--modal-max-height);background-color:var(--c-white);background-color:var(--modal-background,var(--c-white))}.sf-modal__container::-webkit-scrollbar{width:0}.sf-modal__content{overflow-y:auto;padding:var(--modal-content-padding,var(--spacer-base) var(--spacer-sm));font:var(--font-weight--light) var(--font-size--base)/1.6 var(--font-family--primary);font:var(--modal-content-font,var(--modal-content-font-weight,var(--font-weight--light)) var(--modal-content-font-size,var(--font-size--base))/var(--modal-content-font-line-height,1.6) var(--modal-content-font-family,var(--font-family--primary)))}.sf-modal__close{position:absolute;right:var(--spacer-sm);right:var(--modal-close-right,var(--spacer-sm));top:var(--spacer-sm);top:var(--modal-close-top,var(--spacer-sm))}@media (min-width:1024px){.sf-modal{--modal-width:29.375rem;--modal-top:50%;--modal-left:50%;--modal-bottom:none;--modal-right:none;--modal-transform:translate3d(-50%,-50%,0);--modal-height:auto;--modal-max-height:90%;--modal-content-padding:var(--spacer-sm) var(--spacer-lg)}}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 178 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfCheckbox_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfCheckbox_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfCheckbox_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfCheckbox_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfCheckbox_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media (min-width:1024px){.smartphone-only{display:none!important}}@media (max-width:1023px){.desktop-only{display:none!important}}.sf-checkbox{--icon-size:1.25rem}.sf-checkbox__container{position:relative;display:flex;align-items:center;padding:var(--checkbox-padding);width:var(--checkbox-container-width);cursor:pointer;cursor:var(--checkbox-cursor,pointer)}.sf-checkbox__checkmark{box-sizing:border-box;display:flex;display:var(--checkbox-display,flex);align-items:center;justify-content:center;order:var(--checkbox-order);width:1.5rem;width:var(--checkbox-size,1.5rem);height:1.5rem;height:var(--checkbox-size,1.5rem);border:var(--checkbox-border,var(--checkbox-border-style,solid) var(--checkbox-border-color,var(--c-link)));border-width:1px;border-width:var(--checkbox-border-width,1px);border-radius:var(--checkbox-border-radius);background:transparent;background:var(--checkbox-background,transparent);transition:background .15s linear,border-color .15s linear}.has-error .sf-checkbox__checkmark{--checkbox-border-color:var(--c-danger)}.sf-checkbox__checkmark:hover{--checkbox-border-color:var(--c-black)}.has-error .sf-checkbox__checkmark:hover{--checkbox-border-color:var(--c-danger)}.is-disabled .sf-checkbox__checkmark,.is-disabled .sf-checkbox__checkmark:hover{--checkbox-border-color:var(--c-text-disabled)}.is-disabled .sf-checkbox__checkmark.is-active{--checkbox-background:var(--c-text-disabled)}.has-error .sf-checkbox__checkmark.is-active{--checkbox-border-color:var(--c-danger);--checkbox-background:var(--c-danger)}.sf-checkbox__label{flex:1;margin:var(--checkbox-label-margin,0 0 0 var(--spacer-xs));color:var(--c-link);color:var(--checkbox-label-color,var(--c-link));font:var(--font-weight--normal) var(--font-size--base)/1.6 var(--font-family--primary);font:var(--checkbox-font,var(--checkbox-font-weight,var(--font-weight--normal)) var(--checkbox-font-size,var(--font-size--base))/var(--checkbox-font-line-height,1.6) var(--checkbox-font-family,var(--font-family--primary)));transition:color .15s linear}.sf-checkbox__label:hover{--checkbox-label-color:var(--c-black)}.sf-checkbox--is-disabled .sf-checkbox__label:hover{--checkbox-label-color:var(--c-text-disabled)}.sf-checkbox.is-active{--checkbox-border-color:var(--c-primary);--checkbox-background:var(--c-primary)}.sf-checkbox.is-active.has-error{--checkbox-label-color:var(--c-text);--checkbox-border-color:var(--c-danger);--checkbox-background:var(--c-danger);--checkbox-message-color:var(--c-danger)}.sf-checkbox.is-active.is-disabled{--checkbox-border-color:var(--c-text-disabled);--checkbox-background:var(--c-text-disabled)}.sf-checkbox.is-required{--checkbox-message-color:var(--c-text)}.sf-checkbox.is-required.has-error{--checkbox-message-color:var(--c-danger)}.sf-checkbox.is-disabled{--checkbox-label-color:var(--c-text-disabled);--checkbox-border-color:var(--c-text-disabled)}.sf-checkbox__message{margin:var(--checkbox-message-margin,var(--spacer-2xs) 0 0 0);color:var(--c-danger);color:var(--checkbox-message-color,var(--c-danger));font:var(--font-weight--normal) var(--font-size--xs)/1.2 var(--font-family--secondary);font:var(--checkbox-message-font,var(--checkbox-message-font-weight,var(--font-weight--normal)) var(--checkbox-message-font-size,var(--font-size--xs))/var(--checkbox-message-font-line-height,1.2) var(--checkbox-message-font-family,var(--font-family--secondary)))}.sf-checkbox__message .sf-checkbox__message--info{color:var(--c-primary);color:var(--checkbox-message-color,var(--c-primary))}.sf-checkbox input{position:absolute;opacity:0;left:-1000%;width:1px;height:1px}.sf-checkbox input[style*=\"outline: none\"]:focus+.sf-checkbox__checkmark{outline:none}.sf-checkbox input:focus+.sf-checkbox__checkmark{outline-color:-webkit-focus-ring-color;outline-style:auto}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 180 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfLoader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfLoader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfLoader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfLoader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfLoader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media (min-width:1024px){.smartphone-only{display:none!important}}@media (max-width:1023px){.desktop-only{display:none!important}}.sf-loader{position:relative;width:100%;height:100%}.sf-loader__overlay{position:absolute;top:0;left:0;right:0;bottom:0;display:flex;justify-content:center;align-items:center;background:var(--c-white);background:var(--loader-overlay-background,var(--c-white))}.sf-loader__spinner{stroke:var(--c-primary);stroke:var(--loader-spinner-stroke,var(--c-primary))}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 182 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfAlert_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfAlert_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfAlert_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfAlert_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfAlert_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media (min-width:1024px){.smartphone-only{display:none!important}}@media (max-width:1023px){.desktop-only{display:none!important}}.sf-alert{--icon-size:1.25rem;display:flex;align-items:center;color:var(--alert-color);font:var(--font-weight--normal) var(--font-size--base)/1.6 var(--font-family--primary);font:var(--alert-font,var(--alert-font-weight,var(--font-weight--normal)) var(--alert-font-size,var(--font-size--base))/var(--alert-font-line-height,1.6) var(--alert-font-family,var(--font-family--primary)))}.sf-alert__message{margin:var(--alert-message-margin,0 0 0 var(--spacer-xs))}.sf-alert.color-black{--icon-color:var(--c-dark);--alert-color:var(--c-dark)}.sf-alert.color-white{--icon-color:var(--c-white);--alert-color:var(--c-white)}.sf-alert.color-primary{--icon-color:var(--c-primary);--alert-color:var(--c-primary)}.sf-alert.color-secondary{--icon-color:var(--c-secondary);--alert-color:var(--c-secondary)}.sf-alert.color-light{--icon-color:var(--c-light);--alert-color:var(--c-light)}.sf-alert.color-dark{--icon-color:var(--c-dark);--alert-color:var(--c-dark)}.sf-alert.color-info{--icon-color:var(--c-info);--alert-color:var(--c-info)}.sf-alert.color-success{--icon-color:var(--c-success);--alert-color:var(--c-success)}.sf-alert.color-warning{--icon-color:var(--c-warning);--alert-color:var(--c-warning)}.sf-alert.color-danger{--icon-color:var(--c-danger);--alert-color:var(--c-danger)}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 184 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginModal_vue_vue_type_style_index_0_id_a7c82f20_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginModal_vue_vue_type_style_index_0_id_a7c82f20_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginModal_vue_vue_type_style_index_0_id_a7c82f20_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginModal_vue_vue_type_style_index_0_id_a7c82f20_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginModal_vue_vue_type_style_index_0_id_a7c82f20_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media (min-width:1024px){.smartphone-only[data-v-a7c82f20]{display:none!important}}@media (max-width:1023px){.desktop-only[data-v-a7c82f20]{display:none!important}}.form[data-v-a7c82f20]{margin-top:var(--spacer-sm)}.form__element[data-v-a7c82f20]{margin:0 0 var(--spacer-xl) 0}.action[data-v-a7c82f20],.bottom[data-v-a7c82f20]{display:flex;align-items:center;justify-content:center;margin:var(--spacer-xl) 0 var(--spacer-xl) 0;font:var(--font-weight--light) var(--font-size--base)/1.6 var(--font-family--secondary)}.action>*[data-v-a7c82f20],.bottom>*[data-v-a7c82f20]{margin:0 0 0 var(--spacer-xs)}.action[data-v-a7c82f20]{margin:var(--spacer-xl) 0 var(--spacer-xl) 0}.bottom[data-v-a7c82f20]{padding:var(--spacer-xl) 0 0 0;border:solid var(--c-light);border-width:1px 0 0}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 186 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_account_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_account_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_account_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_account_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_account_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media (min-width:1024px){.smartphone-only{display:none!important}}@media (max-width:1023px){.desktop-only{display:none!important}}body{padding:0;margin:0}#layout{box-sizing:border-box}@media (min-width:1024px){#layout{max-width:1240px;margin:auto}}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 188 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfChevron_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfChevron_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfChevron_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfChevron_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfChevron_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media (min-width:1024px){.smartphone-only{display:none!important}}@media (max-width:1023px){.desktop-only{display:none!important}}.sf-chevron{position:relative;position:var(--chevron-position,relative);width:1.25rem;width:var(--chevron-size,1.25rem);height:1.25rem;height:var(--chevron-size,1.25rem);cursor:pointer}.sf-chevron__bar{position:absolute;top:50%;background:transparent;background:var(--chevron-background,transparent);transition:transform .3s cubic-bezier(.25,1.7,.35,.8)}.sf-chevron__bar:after{content:\"\";display:block;width:.625rem;width:calc(var(--chevron-size, 1.25rem)/2);height:.125rem;height:calc(var(--chevron-size, 1.25rem)/10);background:var(--c-black);background:var(--chevron-color,var(--c-black))}.sf-chevron__bar--left{left:.125rem;left:calc(var(--chevron-size, 1.25rem)/10);transform:translate3d(0,-50%,0) rotate(45deg);transform:translate3d(var(--chevron-translateX,0),var(--chevron-translateY,-50%),0) rotate(var(--chevron-rotate,45deg))}.sf-chevron__bar--right{right:.125rem;right:calc(var(--chevron-size, 1.25rem)/10);transform:translateY(-50%) rotate(-45deg);transform:translate(var(--chevron-translateX,0),var(--chevron-translateY,-50%)) rotate(calc(var(--chevron-rotate, 45deg)*-1))}.sf-chevron--top{--chevron-rotate:-45deg}.sf-chevron--left .sf-chevron__bar--left{--chevron-rotate:45deg;--chevron-translateY:150%}.sf-chevron--left .sf-chevron__bar--right{--chevron-rotate:45deg;--chevron-translateX:-60%;--chevron-translateY:-150%}.sf-chevron--right .sf-chevron__bar--left{--chevron-rotate:45deg;--chevron-translateX:60%;--chevron-translateY:-150%}.sf-chevron--right .sf-chevron__bar--right{--chevron-rotate:45deg;--chevron-translateY:150%}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 190 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfFooter_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfFooter_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfFooter_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfFooter_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfFooter_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media (min-width:1024px){.smartphone-only{display:none!important}}@media (max-width:1023px){.desktop-only{display:none!important}}.sf-footer-column{box-sizing:border-box;flex:0 0 var(--_footer-column-width);justify-content:space-between}.sf-footer-column__title{color:var(--c-link);color:var(--footer-column-title-color,var(--c-link));display:flex;justify-content:space-between;align-items:center;width:100%;border:0;padding:var(--footer-column-title-padding,var(--spacer-base));background:var(--c-light);background:var(--footer-column-title-background,var(--c-light));text-transform:uppercase;font:var(--font-weight--medium) var(--h5-font-size)/1.4 var(--font-family--secondary);font:var(--footer-column-title-font,var(--footer-column-title-font-weight,var(--font-weight--medium)) var(--footer-column-title-font-size,var(--h5-font-size))/var(--footer-column-title-font-line-height,1.4) var(--footer-column-title-font-family,var(--font-family--secondary)));cursor:default}.sf-footer-column__chevron{display:var(--footer-column-chevron-display)}.sf-footer-column .sf-list__item{--list-item-margin:var(--footer-column-item-padding,var(--spacer-base) var(--spacer-xs));--menu-item-label-color:var(--footer-column-item-color,var(--c-link))}@media (min-width:1024px){.sf-footer-column{--footer-column-title-padding:var(--spacer-sm) 0;--footer-column-title-background:transparent;--footer-column-title-font-weight:var(--font-weight--normal);--footer-column-chevron-display:none;--footer-column-item-padding:var(--spacer-xs) 0}}.sf-footer__container{box-sizing:border-box;display:var(--footer-display);flex-wrap:var(--footer-flex-wrap);justify-content:var(--footer-justify-content);max-width:var(--footer-width);margin:var(--footer-margin);padding:var(--footer-padding)}@media (min-width:1024px){.sf-footer{--footer-display:flex;--footer-flex-wrap:wrap;--footer-justify-content:space-between;--footer-width:60rem;--footer-margin:0 auto;--footer-padding:var(--spacer-2xl) 0}}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 192 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media (min-width:1024px){.smartphone-only{display:none!important}}@media (max-width:1023px){.desktop-only{display:none!important}}.sf-footer__container{--footer-margin:var(--spacer-sm)}@media (min-width:1024px){.sf-footer__container{--footer-margin:var(--spacer-3xl) auto var(--spacer-xl);--footer-padding:0}}.footer__socials{display:flex;justify-content:space-between;margin:0 0 var(--spacer-lg) 0;padding:var(--spacer-base) var(--spacer-xl)}@media (min-width:1024px){.footer__socials{justify-content:flex-start;padding:var(--spacer-base) 0}}.footer__social-image{margin:0 var(--spacer-lg) 0 0}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/empty_cart.9625adc.svg";

/***/ }),
/* 195 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_WishlistSidebar_vue_vue_type_style_index_0_id_9ad8508e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_WishlistSidebar_vue_vue_type_style_index_0_id_9ad8508e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_WishlistSidebar_vue_vue_type_style_index_0_id_9ad8508e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_WishlistSidebar_vue_vue_type_style_index_0_id_9ad8508e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_WishlistSidebar_vue_vue_type_style_index_0_id_9ad8508e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media (min-width:1024px){.smartphone-only[data-v-9ad8508e]{display:none!important}}@media (max-width:1023px){.desktop-only[data-v-9ad8508e]{display:none!important}}.sidebar[data-v-9ad8508e]{--sidebar-top-padding:var(--spacer-lg) var(--spacer-base) 0 var(--spacer-base);--sidebar-content-padding:var(--spacer-lg) var(--spacer-base)}.my-wishlist[data-v-9ad8508e]{flex:1;display:flex;flex-direction:column}.my-wishlist__total-items[data-v-9ad8508e]{font:var(--font-weight--normal) var(--font-size--lg)/1.6 var(--font-family--secondary);color:var(--c-link);margin:0}.my-wishlist__total-price[data-v-9ad8508e]{--property-name-font-size:var(--font-size--xl);--price-font-size:var(--font-size--xl);margin:0 0 var(--spacer-xl) 0}.my-wishlist__total-price-label[data-v-9ad8508e]{font:var(--font-weight--normal) var(--font-size--2xl)/1.6 var(--font-family--secondary);color:var(--c-link)}.empty-wishlist[data-v-9ad8508e],.empty-wishlist__banner[data-v-9ad8508e]{display:flex;flex:1;flex-direction:column}.empty-wishlist__banner[data-v-9ad8508e]{align-items:center;justify-content:center}.empty-wishlist__description[data-v-9ad8508e],.empty-wishlist__label[data-v-9ad8508e]{text-align:center}.empty-wishlist__label[data-v-9ad8508e]{margin:var(--spacer-2xl) 0 0 0;font:var(--font-weight--normal) var(--font-size--xl)/1.6 var(--font-family--secondary);color:var(--c-primary)}.empty-wishlist__description[data-v-9ad8508e]{margin:var(--spacer-sm) 0 0 0;font:var(--font-weight--normal) var(--font-size--base)/1.6 var(--font-family--primary);color:var(--c-link)}.empty-wishlist__icon[data-v-9ad8508e]{width:18.125rem;height:12.3125rem;margin-left:50%}@media (min-width:1024px){.empty-wishlist__icon[data-v-9ad8508e]{margin-left:45%}}.heading__wrapper[data-v-9ad8508e]{--heading-title-color:var(--c-link);--heading-title-font-weight:var(--font-weight--semibold);display:flex;justify-content:space-between}.sidebar-bottom[data-v-9ad8508e]{margin:auto 0 0}.collected-product[data-v-9ad8508e]{margin:var(--spacer-base) 0}.collected-product__properties[data-v-9ad8508e]{margin:var(--spacer-sm) 0 0 0}.collected-product[data-v-9ad8508e]  .sf-collected-product__remove--circle-icon{--button-background:var(--c-primary);--icon-color:var(--c-white)}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 197 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media (min-width:1024px){.smartphone-only{display:none!important}}@media (max-width:1023px){.desktop-only{display:none!important}}#layout{box-sizing:border-box}@media (min-width:1024px){#layout{max-width:1240px;margin:auto}}html{width:auto}body,html{overflow-x:hidden}body{color:var(--c-text);font-size:var(--font-size--base);font-family:var(--font-family--primary);margin:0;padding:0}a{text-decoration:none;color:var(--c-link)}a:hover{color:var(--c-link-hover)}h1{font-size:var(--h1-font-size)}h1,h2{font-family:var(--font-family--secondary);line-height:1.6;margin:0}h2{font-size:var(--h2-font-size)}h3{font-size:var(--h3-font-size)}h3,h4{font-family:var(--font-family--secondary);line-height:1.6;margin:0}h4{font-size:var(--h4-font-size)}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 199 */
/***/ (function(module, exports) {

// This file is intentionally left empty for noop aliases

/***/ }),
/* 200 */
/***/ (function(module, exports) {

module.exports = require("is-https");

/***/ }),
/* 201 */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),
/* 202 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadLanguageAsync", function() { return loadLanguageAsync; });
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

/**
 * Asynchronously load messages from translation files
 * @param  {Context}  context  Nuxt context
 * @param  {String}   locale  Language code to load
 */

async function loadLanguageAsync(context, locale) {
  const {
    app
  } = context;

  if (!app.i18n.loadedLanguages) {
    app.i18n.loadedLanguages = [];
  }

  if (!app.i18n.loadedLanguages.includes(locale)) {
    const localeObject = app.i18n.locales.find(l => l[_options__WEBPACK_IMPORTED_MODULE_0__[/* LOCALE_CODE_KEY */ "b"]] === locale);

    if (localeObject) {
      const file = localeObject[_options__WEBPACK_IMPORTED_MODULE_0__[/* LOCALE_FILE_KEY */ "d"]];

      if (file) {
        // Hiding template directives from eslint so that parsing doesn't break.

        /*  */
        let messages;

        if (false) {}

        if (!messages) {
          try {
            const langFileModule = await __webpack_require__(203)(`./${file}`);
            const getter = langFileModule.default || langFileModule;
            messages = typeof getter === 'function' ? await Promise.resolve(getter(context, locale)) : getter;
          } catch (error) {
            // eslint-disable-next-line no-console
            console.error(error);
          }
        }

        if (messages) {
          app.i18n.setLocaleMessage(locale, messages);
          app.i18n.loadedLanguages.push(locale);
        }
        /*  */

      } else {
        // eslint-disable-next-line no-console
        console.warn(`[${_options__WEBPACK_IMPORTED_MODULE_0__[/* MODULE_NAME */ "f"]}] Could not find lang file for locale ${locale}`);
      }
    }
  }
}

/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./de": [
		100,
		0
	],
	"./de.js": [
		100,
		0
	],
	"./en": [
		101,
		1
	],
	"./en.js": [
		101,
		1
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 203;
module.exports = webpackAsyncContext;

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.11 Reflect.ownKeys(target)
var $export = __webpack_require__(205);

$export($export.S, 'Reflect', { ownKeys: __webpack_require__(216) });


/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(21);
var core = __webpack_require__(30);
var hide = __webpack_require__(83);
var redefine = __webpack_require__(211);
var ctx = __webpack_require__(214);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(84);
var IE8_DOM_DEFINE = __webpack_require__(207);
var toPrimitive = __webpack_require__(209);
var dP = Object.defineProperty;

exports.f = __webpack_require__(32) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(32) && !__webpack_require__(85)(function () {
  return Object.defineProperty(__webpack_require__(208)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(31);
var document = __webpack_require__(21).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(31);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 210 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(21);
var hide = __webpack_require__(83);
var has = __webpack_require__(86);
var SRC = __webpack_require__(87)('src');
var $toString = __webpack_require__(212);
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(30).inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(88)('native-function-to-string', Function.toString);


/***/ }),
/* 213 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(215);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 215 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

// all object keys, includes non-enumerable and symbols
var gOPN = __webpack_require__(217);
var gOPS = __webpack_require__(227);
var anObject = __webpack_require__(84);
var Reflect = __webpack_require__(21).Reflect;
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};


/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(218);
var hiddenKeys = __webpack_require__(226).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(86);
var toIObject = __webpack_require__(89);
var arrayIndexOf = __webpack_require__(222)(false);
var IE_PROTO = __webpack_require__(225)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(220);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 220 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 221 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(89);
var toLength = __webpack_require__(223);
var toAbsoluteIndex = __webpack_require__(224);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(90);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(90);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(88)('keys');
var uid = __webpack_require__(87);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 226 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 227 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 228 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 229 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 230 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "querystring"
var external_querystring_ = __webpack_require__(92);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(3);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "@nuxt/ufo"
var ufo_ = __webpack_require__(16);

// EXTERNAL MODULE: external "node-fetch"
var external_node_fetch_ = __webpack_require__(93);
var external_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_);

// CONCATENATED MODULE: ./.nuxt/middleware.js
const middleware = {};
middleware['checkout'] = __webpack_require__(103);
middleware['checkout'] = middleware['checkout'].default || middleware['checkout'];
/* harmony default export */ var _nuxt_middleware = (middleware);
// CONCATENATED MODULE: ./.nuxt/utils.js

 // window.{{globals.loadedCallback}} hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)

if (false) {}

function empty() {}
function globalHandleError(error) {
  if (external_vue_default.a.config.errorHandler) {
    external_vue_default.a.config.errorHandler(error);
  }
}
function interopDefault(promise) {
  return promise.then(m => m.default || m);
}
function hasFetch(vm) {
  return vm.$options && typeof vm.$options.fetch === 'function' && !vm.$options.fetch.length;
}
function purifyData(data) {
  if (true) {
    return data;
  }

  return Object.entries(data).filter(([key, value]) => {
    const valid = !(value instanceof Function) && !(value instanceof Promise);

    if (!valid) {
      console.warn(`${key} is not able to be stringified. This will break in a production environment.`);
    }

    return valid;
  }).reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
  }, {});
}
function getChildrenComponentInstancesUsingFetch(vm, instances = []) {
  const children = vm.$children || [];

  for (const child of children) {
    if (child.$fetch) {
      instances.push(child);
      continue; // Don't get the children since it will reload the template
    }

    if (child.$children) {
      getChildrenComponentInstancesUsingFetch(child, instances);
    }
  }

  return instances;
}
function applyAsyncData(Component, asyncData) {
  if ( // For SSR, we once all this function without second param to just apply asyncData
  // Prevent doing this for each SSR request
  !asyncData && Component.options.__hasNuxtData) {
    return;
  }

  const ComponentData = Component.options._originDataFn || Component.options.data || function () {
    return {};
  };

  Component.options._originDataFn = ComponentData;

  Component.options.data = function () {
    const data = ComponentData.call(this, this);

    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid];
    }

    return { ...data,
      ...asyncData
    };
  };

  Component.options.__hasNuxtData = true;

  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data;
  }
}
function sanitizeComponent(Component) {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component;
  }

  if (!Component.options) {
    Component = external_vue_default.a.extend(Component); // fix issue #6

    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  } // If no component name defined, set file path as name, (also fixes #5703)


  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }

  return Component;
}
function getMatchedComponents(route, matches = false, prop = 'components') {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m[prop]).map(key => {
      matches && matches.push(index);
      return m[prop][key];
    });
  }));
}
function getMatchedComponentsInstances(route, matches = false) {
  return getMatchedComponents(route, matches, 'instances');
}
function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m.components).reduce((promises, key) => {
      if (m.components[key]) {
        promises.push(fn(m.components[key], m.instances[key], m, key, index));
      } else {
        delete m.components[key];
      }

      return promises;
    }, []);
  }));
}
function resolveRouteComponents(route, fn) {
  return Promise.all(flatMapComponents(route, async (Component, instance, match, key) => {
    // If component is a function, resolve it
    if (typeof Component === 'function' && !Component.options) {
      Component = await Component();
    }

    match.components[key] = Component = sanitizeComponent(Component);
    return typeof fn === 'function' ? fn(Component, instance, match, key) : Component;
  }));
}
async function getRouteData(route) {
  if (!route) {
    return;
  } // Make sure the components are resolved (code-splitting)


  await resolveRouteComponents(route); // Send back a copy of route with meta based on Component definition

  return { ...route,
    meta: getMatchedComponents(route).map((Component, index) => {
      return { ...Component.options.meta,
        ...(route.matched[index] || {}).meta
      };
    })
  };
}
async function setContext(app, context) {
  // If context not defined, create it
  if (!app.context) {
    app.context = {
      isStatic: true,
      isDev: false,
      isHMR: false,
      app,
      payload: context.payload,
      error: context.error,
      base: '/',
      env: {}
    }; // Only set once

    if (false) {}

    if (false) {}

    if (context.ssrContext) {
      app.context.ssrContext = context.ssrContext;
    }

    app.context.redirect = (status, path, query) => {
      if (!status) {
        return;
      }

      app.context._redirected = true; // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })

      let pathType = typeof path;

      if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
        query = path || {};
        path = status;
        pathType = typeof path;
        status = 302;
      }

      if (pathType === 'object') {
        path = app.router.resolve(path).route.fullPath;
      } // "/absolute/route", "./relative/route" or "../relative/route"


      if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
        app.context.next({
          path,
          query,
          status
        });
      } else {
        path = formatUrl(path, query);

        if (true) {
          app.context.next({
            path,
            status
          });
        }

        if (false) {}
      }
    };

    if (true) {
      app.context.beforeNuxtRender = fn => context.beforeRenderFns.push(fn);
    }

    if (false) {}
  } // Dynamic keys


  const [currentRouteData, fromRouteData] = await Promise.all([getRouteData(context.route), getRouteData(context.from)]);

  if (context.route) {
    app.context.route = currentRouteData;
  }

  if (context.from) {
    app.context.from = fromRouteData;
  }

  app.context.next = context.next;
  app.context._redirected = false;
  app.context._errored = false;
  app.context.isHMR = false;
  app.context.params = app.context.route.params || {};
  app.context.query = app.context.route.query || {};
}
function middlewareSeries(promises, appContext) {
  if (!promises.length || appContext._redirected || appContext._errored) {
    return Promise.resolve();
  }

  return promisify(promises[0], appContext).then(() => {
    return middlewareSeries(promises.slice(1), appContext);
  });
}
function promisify(fn, context) {
  let promise;

  if (fn.length === 2) {
    // fn(context, callback)
    promise = new Promise(resolve => {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }

        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }

  if (promise && promise instanceof Promise && typeof promise.then === 'function') {
    return promise;
  }

  return Promise.resolve(promise);
} // Imported from vue-router

function getLocation(base, mode) {
  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '');
  }

  base = decodeURI(base).slice(0, -1); // consideration is base is normalized with trailing slash

  let path = decodeURI(window.location.pathname);

  if (base && path.startsWith(base)) {
    path = path.slice(base.length);
  }

  const fullPath = (path || '/') + window.location.search + window.location.hash;
  return Object(ufo_["normalizeURL"])(fullPath);
} // Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */

function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function getQueryDiff(toQuery, fromQuery) {
  const diff = {};
  const queries = { ...toQuery,
    ...fromQuery
  };

  for (const k in queries) {
    if (String(toQuery[k]) !== String(fromQuery[k])) {
      diff[k] = true;
    }
  }

  return diff;
}
function normalizeError(err) {
  let message;

  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e) {
      message = `[${err.constructor.name}]`;
    }
  } else {
    message = err.message || err;
  }

  return { ...err,
    message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  };
}
/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */

const PATH_REGEXP = new RegExp([// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)', // Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');
/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */

function parse(str, options) {
  const tokens = [];
  let key = 0;
  let index = 0;
  let path = '';
  const defaultDelimiter = options && options.delimiter || '/';
  let res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    const m = res[0];
    const escaped = res[1];
    const offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length; // Ignore already escaped sequences.

    if (escaped) {
      path += escaped[1];
      continue;
    }

    const next = str[index];
    const prefix = res[2];
    const name = res[3];
    const capture = res[4];
    const group = res[5];
    const modifier = res[6];
    const asterisk = res[7]; // Push the current path onto the tokens.

    if (path) {
      tokens.push(path);
      path = '';
    }

    const partial = prefix != null && next != null && next !== prefix;
    const repeat = modifier === '+' || modifier === '*';
    const optional = modifier === '?' || modifier === '*';
    const delimiter = res[2] || defaultDelimiter;
    const pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: Boolean(asterisk),
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  } // Match any characters still remaining.


  if (index < str.length) {
    path += str.substr(index);
  } // If the path exists, push it onto the end.


  if (path) {
    tokens.push(path);
  }

  return tokens;
}
/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */


function encodeURIComponentPretty(str, slashAllowed) {
  const re = slashAllowed ? /[?#]/g : /[/?#]/g;
  return encodeURI(str).replace(re, c => {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}
/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */


function encodeAsterisk(str) {
  return encodeURIComponentPretty(str, true);
}
/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */


function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}
/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */


function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, '\\$1');
}
/**
 * Expose a method for transforming tokens into the path function.
 */


function tokensToFunction(tokens, options) {
  // Compile all the tokens into regexps.
  const matches = new Array(tokens.length); // Compile all the patterns before compilation.

  for (let i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }

  return function (obj, opts) {
    let path = '';
    const data = obj || {};
    const options = opts || {};
    const encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];

      if (typeof token === 'string') {
        path += token;
        continue;
      }

      const value = data[token.name || 'pathMatch'];
      let segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }

        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }

        for (let j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }

      path += token.prefix + segment;
    }

    return path;
  };
}
/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */


function flags(options) {
  return options && options.sensitive ? '' : 'i';
}
/**
 * Format given url, append query to url query string
 *
 * @param  {string} url
 * @param  {string} query
 * @return {string}
 */


function formatUrl(url, query) {
  let protocol;
  const index = url.indexOf('://');

  if (index !== -1) {
    protocol = url.substring(0, index);
    url = url.substring(index + 3);
  } else if (url.startsWith('//')) {
    url = url.substring(2);
  }

  let parts = url.split('/');
  let result = (protocol ? protocol + '://' : '//') + parts.shift();
  let path = parts.join('/');

  if (path === '' && parts.length === 1) {
    result += '/';
  }

  let hash;
  parts = path.split('#');

  if (parts.length === 2) {
    [path, hash] = parts;
  }

  result += path ? '/' + path : '';

  if (query && JSON.stringify(query) !== '{}') {
    result += (url.split('?').length === 2 ? '&' : '?') + formatQuery(query);
  }

  result += hash ? '#' + hash : '';
  return result;
}
/**
 * Transform data object to query string
 *
 * @param  {object} query
 * @return {string}
 */


function formatQuery(query) {
  return Object.keys(query).sort().map(key => {
    const val = query[key];

    if (val == null) {
      return '';
    }

    if (Array.isArray(val)) {
      return val.slice().map(val2 => [key, '=', val2].join('')).join('&');
    }

    return key + '=' + val;
  }).filter(Boolean).join('&');
}

function addLifecycleHook(vm, hook, fn) {
  if (!vm.$options[hook]) {
    vm.$options[hook] = [];
  }

  if (!vm.$options[hook].includes(fn)) {
    vm.$options[hook].push(fn);
  }
}
function urlJoin() {
  return [].slice.call(arguments).join('/').replace(/\/+/g, '/').replace(':/', '://');
}
function stripTrailingSlash(path) {
  return path.replace(/\/+$/, '') || '/';
}
function isSamePath(p1, p2) {
  return stripTrailingSlash(p1) === stripTrailingSlash(p2);
}
function setScrollRestoration(newVal) {
  try {
    window.history.scrollRestoration = newVal;
  } catch (e) {}
}
// CONCATENATED MODULE: ./.nuxt/mixins/fetch.server.js



async function serverPrefetch() {
  if (!this._fetchOnServer) {
    return;
  } // Call and await on $fetch


  try {
    await this.$options.fetch.call(this);
  } catch (err) {
    if (false) {}

    this.$fetchState.error = normalizeError(err);
  }

  this.$fetchState.pending = false; // Define an ssrKey for hydration

  this._fetchKey = this.$ssrContext.nuxt.fetch.length; // Add data-fetch-key on parent element of Component

  const attrs = this.$vnode.data.attrs = this.$vnode.data.attrs || {};
  attrs['data-fetch-key'] = this._fetchKey; // Add to ssrContext for window.__NUXT__.fetch

  this.$ssrContext.nuxt.fetch.push(this.$fetchState.error ? {
    _error: this.$fetchState.error
  } : purifyData(this._data));
}

/* harmony default export */ var fetch_server = ({
  created() {
    if (!hasFetch(this)) {
      return;
    }

    if (typeof this.$options.fetchOnServer === 'function') {
      this._fetchOnServer = this.$options.fetchOnServer.call(this) !== false;
    } else {
      this._fetchOnServer = this.$options.fetchOnServer !== false;
    } // Added for remove vue undefined warning while ssr


    this.$fetch = () => {}; // issue #8043


    external_vue_default.a.util.defineReactive(this, '$fetchState', {
      pending: true,
      error: null,
      timestamp: Date.now()
    });
    addLifecycleHook(this, 'serverPrefetch', serverPrefetch);
  }

});
// EXTERNAL MODULE: external "vue-meta"
var external_vue_meta_ = __webpack_require__(22);
var external_vue_meta_default = /*#__PURE__*/__webpack_require__.n(external_vue_meta_);

// EXTERNAL MODULE: external "vue-client-only"
var external_vue_client_only_ = __webpack_require__(33);
var external_vue_client_only_default = /*#__PURE__*/__webpack_require__.n(external_vue_client_only_);

// EXTERNAL MODULE: external "vue-no-ssr"
var external_vue_no_ssr_ = __webpack_require__(28);
var external_vue_no_ssr_default = /*#__PURE__*/__webpack_require__.n(external_vue_no_ssr_);

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(23);
var external_vue_router_default = /*#__PURE__*/__webpack_require__.n(external_vue_router_);

// CONCATENATED MODULE: ./.nuxt/router.scrollBehavior.js
/* harmony default export */ var router_scrollBehavior = (function (_to, _from, savedPosition) {
  if (savedPosition) {
    return savedPosition;
  } else {
    return {
      x: 0,
      y: 0
    };
  }
});
// CONCATENATED MODULE: ./.nuxt/router.js






const _c103eef2 = () => interopDefault(__webpack_require__.e(/* import() | pages/Category */ 2).then(__webpack_require__.bind(null, 449)));

const _f19cbdda = () => interopDefault(__webpack_require__.e(/* import() */ 3).then(__webpack_require__.bind(null, 447)));

const _00d7d9dd = () => interopDefault(__webpack_require__.e(/* import() */ 4).then(__webpack_require__.bind(null, 450)));

const _748dcb1d = () => interopDefault(__webpack_require__.e(/* import() */ 5).then(__webpack_require__.bind(null, 454)));

const _c311900e = () => interopDefault(__webpack_require__.e(/* import() */ 6).then(__webpack_require__.bind(null, 455)));

const _25aadfa7 = () => interopDefault(__webpack_require__.e(/* import() */ 7).then(__webpack_require__.bind(null, 452)));

const _0f38ab4e = () => interopDefault(__webpack_require__.e(/* import() */ 8).then(__webpack_require__.bind(null, 451)));

const _45759662 = () => interopDefault(__webpack_require__.e(/* import() | pages/Checkout */ 3).then(__webpack_require__.bind(null, 447)));

const _ed36b932 = () => interopDefault(__webpack_require__.e(/* import() | pages/Checkout/OrderReview */ 4).then(__webpack_require__.bind(null, 450)));

const _6040e9a7 = () => interopDefault(__webpack_require__.e(/* import() | pages/Checkout/Payment */ 5).then(__webpack_require__.bind(null, 454)));

const _19102c83 = () => interopDefault(__webpack_require__.e(/* import() | pages/Checkout/PersonalDetails */ 6).then(__webpack_require__.bind(null, 455)));

const _9f48db46 = () => interopDefault(__webpack_require__.e(/* import() | pages/Checkout/Shipping */ 7).then(__webpack_require__.bind(null, 452)));

const _cc2d43f8 = () => interopDefault(__webpack_require__.e(/* import() | pages/Checkout/ThankYou */ 8).then(__webpack_require__.bind(null, 451)));

const _c1e792a8 = () => interopDefault(__webpack_require__.e(/* import() */ 9).then(__webpack_require__.bind(null, 446)));

const _3e970868 = () => interopDefault(__webpack_require__.e(/* import() | pages/Home */ 9).then(__webpack_require__.bind(null, 446)));

const _067bab28 = () => interopDefault(__webpack_require__.e(/* import() | pages/MyAccount */ 10).then(__webpack_require__.bind(null, 448)));

const _668da2e2 = () => interopDefault(__webpack_require__.e(/* import() | pages/MyAccount/BillingDetails */ 13).then(__webpack_require__.bind(null, 374)));

const _4d9955de = () => interopDefault(__webpack_require__.e(/* import() | pages/MyAccount/LoyaltyCard */ 14).then(__webpack_require__.bind(null, 384)));

const _7d218866 = () => interopDefault(__webpack_require__.e(/* import() | pages/MyAccount/MyNewsletter */ 15).then(__webpack_require__.bind(null, 382)));

const _f7c88f76 = () => interopDefault(__webpack_require__.e(/* import() | pages/MyAccount/MyProfile */ 16).then(__webpack_require__.bind(null, 375)));

const _68c2cc92 = () => interopDefault(__webpack_require__.e(/* import() | pages/MyAccount/MyReviews */ 17).then(__webpack_require__.bind(null, 378)));

const _c69745a4 = () => interopDefault(__webpack_require__.e(/* import() | pages/MyAccount/OrderHistory */ 18).then(__webpack_require__.bind(null, 377)));

const _7a480b1c = () => interopDefault(__webpack_require__.e(/* import() | pages/MyAccount/ShippingDetails */ 19).then(__webpack_require__.bind(null, 376)));

const _79cde5f6 = () => interopDefault(__webpack_require__.e(/* import() | pages/Product */ 11).then(__webpack_require__.bind(null, 445)));

const _cbc67138 = () => interopDefault(__webpack_require__.e(/* import() */ 10).then(__webpack_require__.bind(null, 448)));

const _5e40e132 = () => interopDefault(__webpack_require__.e(/* import() */ 11).then(__webpack_require__.bind(null, 445)));

const _496a74cb = () => interopDefault(__webpack_require__.e(/* import() */ 2).then(__webpack_require__.bind(null, 449))); // TODO: remove in Nuxt 3


const emptyFn = () => {};

const originalPush = external_vue_router_default.a.prototype.push;

external_vue_router_default.a.prototype.push = function push(location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort);
};

external_vue_default.a.use(external_vue_router_default.a);
const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior: router_scrollBehavior,
  routes: [{
    path: "/Category",
    component: _c103eef2,
    name: "Category___en"
  }, {
    path: "/checkout",
    component: _f19cbdda,
    name: "checkout___en",
    children: [{
      path: "order-review",
      component: _00d7d9dd,
      name: "order-review___en"
    }, {
      path: "payment",
      component: _748dcb1d,
      name: "payment___en"
    }, {
      path: "personal-details",
      component: _c311900e,
      name: "personal-details___en"
    }, {
      path: "shipping",
      component: _25aadfa7,
      name: "shipping___en"
    }, {
      path: "thank-you",
      component: _0f38ab4e,
      name: "thank-you___en"
    }]
  }, {
    path: "/Checkout",
    component: _45759662,
    name: "Checkout___en",
    children: [{
      path: "OrderReview",
      component: _ed36b932,
      name: "Checkout-OrderReview___en"
    }, {
      path: "Payment",
      component: _6040e9a7,
      name: "Checkout-Payment___en"
    }, {
      path: "PersonalDetails",
      component: _19102c83,
      name: "Checkout-PersonalDetails___en"
    }, {
      path: "Shipping",
      component: _9f48db46,
      name: "Checkout-Shipping___en"
    }, {
      path: "ThankYou",
      component: _cc2d43f8,
      name: "Checkout-ThankYou___en"
    }]
  }, {
    path: "/de",
    component: _c1e792a8,
    name: "home___de"
  }, {
    path: "/Home",
    component: _3e970868,
    name: "Home___en"
  }, {
    path: "/MyAccount",
    component: _067bab28,
    name: "MyAccount___en",
    children: [{
      path: "BillingDetails",
      component: _668da2e2,
      name: "MyAccount-BillingDetails___en"
    }, {
      path: "LoyaltyCard",
      component: _4d9955de,
      name: "MyAccount-LoyaltyCard___en"
    }, {
      path: "MyNewsletter",
      component: _7d218866,
      name: "MyAccount-MyNewsletter___en"
    }, {
      path: "MyProfile",
      component: _f7c88f76,
      name: "MyAccount-MyProfile___en"
    }, {
      path: "MyReviews",
      component: _68c2cc92,
      name: "MyAccount-MyReviews___en"
    }, {
      path: "OrderHistory",
      component: _c69745a4,
      name: "MyAccount-OrderHistory___en"
    }, {
      path: "ShippingDetails",
      component: _7a480b1c,
      name: "MyAccount-ShippingDetails___en"
    }]
  }, {
    path: "/Product",
    component: _79cde5f6,
    name: "Product___en"
  }, {
    path: "/de/Category",
    component: _c103eef2,
    name: "Category___de"
  }, {
    path: "/de/checkout",
    component: _f19cbdda,
    name: "checkout___de",
    children: [{
      path: "order-review",
      component: _00d7d9dd,
      name: "order-review___de"
    }, {
      path: "payment",
      component: _748dcb1d,
      name: "payment___de"
    }, {
      path: "personal-details",
      component: _c311900e,
      name: "personal-details___de"
    }, {
      path: "shipping",
      component: _25aadfa7,
      name: "shipping___de"
    }, {
      path: "thank-you",
      component: _0f38ab4e,
      name: "thank-you___de"
    }]
  }, {
    path: "/de/Checkout",
    component: _45759662,
    name: "Checkout___de",
    children: [{
      path: "OrderReview",
      component: _ed36b932,
      name: "Checkout-OrderReview___de"
    }, {
      path: "Payment",
      component: _6040e9a7,
      name: "Checkout-Payment___de"
    }, {
      path: "PersonalDetails",
      component: _19102c83,
      name: "Checkout-PersonalDetails___de"
    }, {
      path: "Shipping",
      component: _9f48db46,
      name: "Checkout-Shipping___de"
    }, {
      path: "ThankYou",
      component: _cc2d43f8,
      name: "Checkout-ThankYou___de"
    }]
  }, {
    path: "/de/Home",
    component: _3e970868,
    name: "Home___de"
  }, {
    path: "/de/MyAccount",
    component: _067bab28,
    name: "MyAccount___de",
    children: [{
      path: "BillingDetails",
      component: _668da2e2,
      name: "MyAccount-BillingDetails___de"
    }, {
      path: "LoyaltyCard",
      component: _4d9955de,
      name: "MyAccount-LoyaltyCard___de"
    }, {
      path: "MyNewsletter",
      component: _7d218866,
      name: "MyAccount-MyNewsletter___de"
    }, {
      path: "MyProfile",
      component: _f7c88f76,
      name: "MyAccount-MyProfile___de"
    }, {
      path: "MyReviews",
      component: _68c2cc92,
      name: "MyAccount-MyReviews___de"
    }, {
      path: "OrderHistory",
      component: _c69745a4,
      name: "MyAccount-OrderHistory___de"
    }, {
      path: "ShippingDetails",
      component: _7a480b1c,
      name: "MyAccount-ShippingDetails___de"
    }]
  }, {
    path: "/de/Product",
    component: _79cde5f6,
    name: "Product___de"
  }, {
    path: "/de/my-account/:pageName?",
    component: _cbc67138,
    name: "my-account___de"
  }, {
    path: "/de/p/:id/:slug",
    component: _5e40e132,
    name: "product___de"
  }, {
    path: "/de/c/:slug_1/:slug_2?/:slug_3?/:slug_4?/:slug_5?",
    component: _496a74cb,
    name: "category___de"
  }, {
    path: "/my-account/:pageName?",
    component: _cbc67138,
    name: "my-account___en"
  }, {
    path: "/p/:id/:slug",
    component: _5e40e132,
    name: "product___en"
  }, {
    path: "/c/:slug_1/:slug_2?/:slug_3?/:slug_4?/:slug_5?",
    component: _496a74cb,
    name: "category___en"
  }, {
    path: "/",
    component: _c1e792a8,
    name: "home___en"
  }],
  fallback: false
};

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = Object(ufo_["decode"])(obj[key]);
    }
  }
}

function createRouter() {
  const router = new external_vue_router_default.a(routerOptions);
  const resolve = router.resolve.bind(router);

  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = Object(ufo_["normalizeURL"])(to);
    }

    const r = resolve(to, current, append);

    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query);
    }

    return r;
  };

  return router;
}
// CONCATENATED MODULE: ./.nuxt/components/nuxt-child.js
/* harmony default export */ var nuxt_child = ({
  name: 'NuxtChild',
  functional: true,
  props: {
    nuxtChildKey: {
      type: String,
      default: ''
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    }
  },

  render(_, {
    parent,
    data,
    props
  }) {
    const h = parent.$createElement;
    data.nuxtChild = true;
    const _parent = parent;
    const transitions = parent.$nuxt.nuxt.transitions;
    const defaultTransition = parent.$nuxt.nuxt.defaultTransition;
    let depth = 0;

    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }

      parent = parent.$parent;
    }

    data.nuxtChildDepth = depth;
    const transition = transitions[depth] || defaultTransition;
    const transitionProps = {};
    transitionsKeys.forEach(key => {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    const listeners = {};
    listenersKeys.forEach(key => {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key].bind(_parent);
      }
    });

    if (false) {} // make sure that leave is called asynchronous (fix #5703)


    if (transition.css === false) {
      const leave = listeners.leave; // only add leave listener when user didnt provide one
      // or when it misses the done argument

      if (!leave || leave.length < 2) {
        listeners.leave = (el, done) => {
          if (leave) {
            leave.call(_parent, el);
          }

          _parent.$nextTick(done);
        };
      }
    }

    let routerView = h('routerView', data);

    if (props.keepAlive) {
      routerView = h('keep-alive', {
        props: props.keepAliveProps
      }, [routerView]);
    }

    return h('transition', {
      props: transitionProps,
      on: listeners
    }, [routerView]);
  }

});
const transitionsKeys = ['name', 'mode', 'appear', 'css', 'type', 'duration', 'enterClass', 'leaveClass', 'appearClass', 'enterActiveClass', 'enterActiveClass', 'leaveActiveClass', 'appearActiveClass', 'enterToClass', 'leaveToClass', 'appearToClass'];
const listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled', 'beforeAppear', 'appear', 'afterAppear', 'appearCancelled'];
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./layouts/error.vue?vue&type=template&id=470a379e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"error"}},[_c('SfImage',{staticClass:"image",attrs:{"src":"/error/error.svg"}}),_vm._ssrNode(" "),_c('SfHeading',{staticClass:"heading sf-heading--no-underline",attrs:{"title":_vm.error.statusCode === 404 ? 'Page not found' : 'An error occured',"level":2,"description":_vm.error.statusCode === 404 ? 'We are sorry that we can’t find the page, please go back or try again' : 'Please go back or try again'}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"actions\" data-v-470a379e>","</div>",[_c('SfButton',{staticClass:"sf-button--full-width actions__button",attrs:{"link":"/"}},[_vm._v("\n      Return home\n    ")]),_vm._ssrNode(" "),_c('SfButton',{staticClass:"sf-button--full-width sf-button--text actions__button",on:{"click":function($event){return _vm.$router.go(-1)}}},[_vm._v("\n      Back\n    ")])],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./layouts/error.vue?vue&type=template&id=470a379e&scoped=true&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfButton/SfButton.vue + 4 modules
var SfButton = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfImage/SfImage.vue + 4 modules
var SfImage = __webpack_require__(25);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfHeading/SfHeading.vue + 4 modules
var SfHeading = __webpack_require__(26);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/error.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var errorvue_type_script_lang_js_ = ({
  props: ['error'],
  components: {
    SfButton: SfButton["a" /* default */],
    SfImage: SfImage["a" /* default */],
    SfHeading: SfHeading["a" /* default */]
  }
});
// CONCATENATED MODULE: ./layouts/error.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_errorvue_type_script_lang_js_ = (errorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./layouts/error.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(122)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var error_component = Object(componentNormalizer["a" /* default */])(
  layouts_errorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "470a379e",
  "7c1d7ab9"
  
)

/* harmony default export */ var layouts_error = (error_component.exports);
// CONCATENATED MODULE: ./.nuxt/components/nuxt.js




/* harmony default export */ var components_nuxt = ({
  name: 'Nuxt',
  components: {
    NuxtChild: nuxt_child,
    NuxtError: layouts_error
  },
  props: {
    nuxtChildKey: {
      type: String,
      default: undefined
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    },
    name: {
      type: String,
      default: 'default'
    }
  },

  errorCaptured(error) {
    // if we receive and error while showing the NuxtError component
    // capture the error and force an immediate update so we re-render
    // without the NuxtError component
    if (this.displayingNuxtError) {
      this.errorFromNuxtError = error;
      this.$forceUpdate();
    }
  },

  computed: {
    routerViewKey() {
      // If nuxtChildKey prop is given or current route has children
      if (typeof this.nuxtChildKey !== 'undefined' || this.$route.matched.length > 1) {
        return this.nuxtChildKey || compile(this.$route.matched[0].path)(this.$route.params);
      }

      const [matchedRoute] = this.$route.matched;

      if (!matchedRoute) {
        return this.$route.path;
      }

      const Component = matchedRoute.components.default;

      if (Component && Component.options) {
        const {
          options
        } = Component;

        if (options.key) {
          return typeof options.key === 'function' ? options.key(this.$route) : options.key;
        }
      }

      const strict = /\/$/.test(matchedRoute.path);
      return strict ? this.$route.path : this.$route.path.replace(/\/$/, '');
    }

  },

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$root.$options.nuxt);
  },

  render(h) {
    // if there is no error
    if (!this.nuxt.err) {
      // Directly return nuxt child
      return h('NuxtChild', {
        key: this.routerViewKey,
        props: this.$props
      });
    } // if an error occurred within NuxtError show a simple
    // error message instead to prevent looping


    if (this.errorFromNuxtError) {
      this.$nextTick(() => this.errorFromNuxtError = false);
      return h('div', {}, [h('h2', 'An error occurred while showing the error page'), h('p', 'Unfortunately an error occurred and while showing the error page another error occurred'), h('p', `Error details: ${this.errorFromNuxtError.toString()}`), h('nuxt-link', {
        props: {
          to: '/'
        }
      }, 'Go back to home')]);
    } // track if we are showing the NuxtError component


    this.displayingNuxtError = true;
    this.$nextTick(() => this.displayingNuxtError = false);
    return h(layouts_error, {
      props: {
        error: this.nuxt.err
      }
    });
  }

});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
/* harmony default export */ var nuxt_loadingvue_type_script_lang_js_ = ({
  name: 'NuxtLoading',

  data() {
    return {
      percent: 0,
      show: false,
      canSucceed: true,
      reversed: false,
      skipTimerCount: 0,
      rtl: false,
      throttle: 200,
      duration: 5000,
      continuous: false
    };
  },

  computed: {
    left() {
      if (!this.continuous && !this.rtl) {
        return false;
      }

      return this.rtl ? this.reversed ? '0px' : 'auto' : !this.reversed ? '0px' : 'auto';
    }

  },

  beforeDestroy() {
    this.clear();
  },

  methods: {
    clear() {
      clearInterval(this._timer);
      clearTimeout(this._throttle);
      this._timer = null;
    },

    start() {
      this.clear();
      this.percent = 0;
      this.reversed = false;
      this.skipTimerCount = 0;
      this.canSucceed = true;

      if (this.throttle) {
        this._throttle = setTimeout(() => this.startTimer(), this.throttle);
      } else {
        this.startTimer();
      }

      return this;
    },

    set(num) {
      this.show = true;
      this.canSucceed = true;
      this.percent = Math.min(100, Math.max(0, Math.floor(num)));
      return this;
    },

    get() {
      return this.percent;
    },

    increase(num) {
      this.percent = Math.min(100, Math.floor(this.percent + num));
      return this;
    },

    decrease(num) {
      this.percent = Math.max(0, Math.floor(this.percent - num));
      return this;
    },

    pause() {
      clearInterval(this._timer);
      return this;
    },

    resume() {
      this.startTimer();
      return this;
    },

    finish() {
      this.percent = this.reversed ? 0 : 100;
      this.hide();
      return this;
    },

    hide() {
      this.clear();
      setTimeout(() => {
        this.show = false;
        this.$nextTick(() => {
          this.percent = 0;
          this.reversed = false;
        });
      }, 500);
      return this;
    },

    fail(error) {
      this.canSucceed = false;
      return this;
    },

    startTimer() {
      if (!this.show) {
        this.show = true;
      }

      if (typeof this._cut === 'undefined') {
        this._cut = 10000 / Math.floor(this.duration);
      }

      this._timer = setInterval(() => {
        /**
         * When reversing direction skip one timers
         * so 0, 100 are displayed for two iterations
         * also disable css width transitioning
         * which otherwise interferes and shows
         * a jojo effect
         */
        if (this.skipTimerCount > 0) {
          this.skipTimerCount--;
          return;
        }

        if (this.reversed) {
          this.decrease(this._cut);
        } else {
          this.increase(this._cut);
        }

        if (this.continuous) {
          if (this.percent >= 100) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          } else if (this.percent <= 0) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          }
        }
      }, 100);
    }

  },

  render(h) {
    let el = h(false);

    if (this.show) {
      el = h('div', {
        staticClass: 'nuxt-progress',
        class: {
          'nuxt-progress-notransition': this.skipTimerCount > 0,
          'nuxt-progress-failed': !this.canSucceed
        },
        style: {
          width: this.percent + '%',
          left: this.left
        }
      });
    }

    return el;
  }

});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_loadingvue_type_script_lang_js_ = (nuxt_loadingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue
var nuxt_loading_render, nuxt_loading_staticRenderFns


function nuxt_loading_injectStyles (context) {
  
  var style0 = __webpack_require__(124)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_loading_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_loadingvue_type_script_lang_js_,
  nuxt_loading_render,
  nuxt_loading_staticRenderFns,
  false,
  nuxt_loading_injectStyles,
  null,
  "20baa091"
  
)

/* harmony default export */ var nuxt_loading = (nuxt_loading_component.exports);
// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/styles.scss
var styles = __webpack_require__(126);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./layouts/account.vue?vue&type=template&id=cda3f19c&
var accountvue_type_template_id_cda3f19c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('TopBar',{staticClass:"desktop-only"}),_vm._ssrNode(" "),_vm._ssrNode("<div id=\"layout\">","</div>",[_c('AppHeader'),_vm._ssrNode(" "),_c('nuxt'),_vm._ssrNode(" "),_c('BottomNavigation'),_vm._ssrNode(" "),_c('CartSidebar'),_vm._ssrNode(" "),_c('LoginModal')],2)],2)}
var accountvue_type_template_id_cda3f19c_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/account.vue?vue&type=template&id=cda3f19c&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/AppHeader.vue?vue&type=template&id=6ce0af32&scoped=true&
var AppHeadervue_type_template_id_6ce0af32_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('SfHeader',{staticClass:"sf-header--has-mobile-search",attrs:{"data-cy":"app-header","searchValue":_vm.term,"cartItemsQty":_vm.cartTotalItems,"accountIcon":_vm.accountIcon},on:{"click:cart":_vm.toggleCartSidebar,"click:wishlist":_vm.toggleWishlistSidebar,"click:account":_vm.handleAccountClick,"enter:search":_vm.changeSearchTerm,"change:search":function (p) { return _vm.term = p; }},scopedSlots:_vm._u([{key:"logo",fn:function(){return [_c('nuxt-link',{staticClass:"sf-header__logo",attrs:{"data-cy":"app-header-url_logo","to":_vm.localePath('/')}},[_c('SfImage',{staticClass:"sf-header__logo-image",attrs:{"src":"/icons/logo.svg","alt":"Vue Storefront Next"}})],1)]},proxy:true},{key:"navigation",fn:function(){return [_c('SfHeaderNavigationItem',{staticClass:"nav-item",attrs:{"data-cy":"app-header-url_women","label":"WOMEN","link":_vm.localePath('/c/women')}}),_vm._v(" "),_c('SfHeaderNavigationItem',{staticClass:"nav-item",attrs:{"data-cy":"app-header-url_men","label":"MEN","link":_vm.localePath('/c/men')}}),_vm._v(" "),_c('SfHeaderNavigationItem',{staticClass:"nav-item",attrs:{"data-cy":"app-header-url_kids","label":"KIDS","link":_vm.localePath('/c/kids')}})]},proxy:true},{key:"aside",fn:function(){return [_c('LocaleSelector',{staticClass:"smartphone-only"})]},proxy:true}])})}
var AppHeadervue_type_template_id_6ce0af32_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/AppHeader.vue?vue&type=template&id=6ce0af32&scoped=true&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfHeader/SfHeader.vue?vue&type=template&id=bb24253a&
var SfHeadervue_type_template_id_bb24253a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-header",class:{ 'is-sticky': _vm.sticky, 'is-hidden': _vm.hidden }},[_vm._ssrNode("<div class=\"sf-header__wrapper\">","</div>",[_vm._ssrNode("<header class=\"sf-header__header\">","</header>",[_vm._t("logo",[_c('SfLink',{attrs:{"link":"/"}},[(_vm.logo)?_c('SfImage',{staticClass:"sf-header__logo",attrs:{"src":_vm.logo,"alt":_vm.title}}):_c('h1',{staticClass:"sf-header__title"},[_vm._v(_vm._s(_vm.title))])],1)],null,{ logo: _vm.logo, title: _vm.title }),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"sf-header__aside\">","</div>",[_vm._t("aside")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"sf-header__actions\">","</div>",[_vm._ssrNode("<nav"+(_vm._ssrClass("sf-header__navigation",{ 'is-visible': _vm.isNavVisible }))+">","</nav>",[_vm._t("navigation")],2),_vm._ssrNode(" "),_vm._t("search",[_c('SfSearchBar',{staticClass:"sf-header__search",attrs:{"value":_vm.searchValue,"placeholder":_vm.searchPlaceholder,"aria-label":"Search"},on:{"input":function($event){return _vm.$emit('change:search', $event)},"enter":function($event){return _vm.$emit('enter:search', $event)}}})],null,{ searchValue: _vm.searchValue, searchPlaceholder: _vm.searchPlaceholder }),_vm._ssrNode(" "),_vm._t("header-icons",[_c('div',{staticClass:"sf-header__icons"},[(_vm.accountIcon)?_c('SfButton',{staticClass:"sf-button--pure sf-header__action",attrs:{"data-testid":"accountIcon"},on:{"click":function($event){return _vm.$emit('click:account')}}},[_c('SfIcon',{class:{
                  'sf-header__icon is-active': _vm.activeIcon === 'account',
                },attrs:{"icon":_vm.accountIcon,"size":"1.25rem"}})],1):_vm._e(),_vm._v(" "),(_vm.wishlistIcon)?_c('SfButton',{staticClass:"sf-button--pure sf-header__action",attrs:{"data-testid":"wishlistIcon"},on:{"click":function($event){return _vm.$emit('click:wishlist')}}},[_c('SfIcon',{staticClass:"sf-header__icon",class:{
                  'sf-header__icon is-active': _vm.activeIcon === 'wishlist',
                },attrs:{"icon":_vm.wishlistIcon,"has-badge":_vm.wishlistHasProducts,"badge-label":_vm.wishlistItemsQty,"size":"1.25rem"}})],1):_vm._e(),_vm._v(" "),(_vm.cartIcon)?_c('SfButton',{staticClass:"sf-button--pure sf-header__action",attrs:{"data-testid":"cartIcon"},on:{"click":function($event){return _vm.$emit('click:cart')}}},[_c('SfIcon',{staticClass:"sf-header__icon",class:{
                  'sf-header__icon is-active': _vm.activeIcon === 'cart',
                },attrs:{"icon":_vm.cartIcon,"has-badge":_vm.cartHasProducts,"badge-label":_vm.cartItemsQty,"size":"1.25rem"}})],1):_vm._e()],1)],null,{
            activeIcon: _vm.activeIcon,
            cartHasProducts: _vm.cartHasProducts,
            cartItemsQty: _vm.cartItemsQty,
            cartIcon: _vm.cartIcon,
            wishlistIcon: _vm.wishlistIcon,
            accountIcon: _vm.accountIcon,
          })],2)],2)])])}
var SfHeadervue_type_template_id_bb24253a_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfHeader/SfHeader.vue?vue&type=template&id=bb24253a&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfHeader/_internal/SfHeaderNavigationItem.vue?vue&type=template&id=c8f36486&
var SfHeaderNavigationItemvue_type_template_id_c8f36486_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',_vm._g({staticClass:"sf-header-navigation-item"},_vm.$listeners),[_vm._ssrNode("<div class=\"sf-header-navigation-item__item sf-header-navigation-item__item--desktop\">","</div>",[_vm._t("desktop-navigation-item",[_c('SfLink',{staticClass:"sf-header-navigation-item__link",attrs:{"link":_vm.link}},[_vm._v(_vm._s(_vm.label))])]),_vm._ssrNode(" "),_vm._t("default")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"sf-header-navigation-item__item sf-header-navigation-item__item--mobile\">","</div>",[_vm._t("mobile-navigation-item",[_c('SfMenuItem',{staticClass:"sf-header-navigation-item__menu-item",attrs:{"label":_vm.label}},[_vm._v("\n        "+_vm._s(_vm.label)+"\n      ")])]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"sf-header-navigation-item__content\">","</div>",[_vm._t("default")],2)],2)],2)}
var SfHeaderNavigationItemvue_type_template_id_c8f36486_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfHeader/_internal/SfHeaderNavigationItem.vue?vue&type=template&id=c8f36486&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfLink/SfLink.vue + 4 modules
var SfLink = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfMenuItem/SfMenuItem.vue + 4 modules
var SfMenuItem = __webpack_require__(91);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfHeader/_internal/SfHeaderNavigationItem.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var SfHeaderNavigationItemvue_type_script_lang_js_ = ({
  name: "SfHeaderNavigationItem",
  components: {
    SfLink: SfLink["a" /* default */],
    SfMenuItem: SfMenuItem["a" /* default */]
  },
  props: {
    label: {
      type: String,
      default: ""
    },
    link: {
      type: [String, Object],
      default: ""
    }
  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfHeader/_internal/SfHeaderNavigationItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var _internal_SfHeaderNavigationItemvue_type_script_lang_js_ = (SfHeaderNavigationItemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfHeader/_internal/SfHeaderNavigationItem.vue





/* normalize component */

var SfHeaderNavigationItem_component = Object(componentNormalizer["a" /* default */])(
  _internal_SfHeaderNavigationItemvue_type_script_lang_js_,
  SfHeaderNavigationItemvue_type_template_id_c8f36486_render,
  SfHeaderNavigationItemvue_type_template_id_c8f36486_staticRenderFns,
  false,
  null,
  null,
  "723ba166"
  
)

/* harmony default export */ var SfHeaderNavigationItem = (SfHeaderNavigationItem_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfHeader/_internal/SfHeaderNavigation.vue?vue&type=template&id=07c7ecb4&
var SfHeaderNavigationvue_type_template_id_07c7ecb4_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',_vm._g({staticClass:"sf-header-navigation"},_vm.$listeners),[_vm._ssrNode("<div class=\"sf-header-navigation__menu\">","</div>",[_vm._t("default")],2),_vm._ssrNode(" "),_c('SfSidebar',{staticClass:"sf-header-navigation__sidebar",attrs:{"visible":_vm.isVisibleOnMobile,"persistent":true},on:{"close":function($event){return _vm.$emit('close')}}},[_vm._t("default")],2)],2)}
var SfHeaderNavigationvue_type_template_id_07c7ecb4_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfHeader/_internal/SfHeaderNavigation.vue?vue&type=template&id=07c7ecb4&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfSidebar/SfSidebar.vue + 4 modules
var SfSidebar = __webpack_require__(97);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfHeader/_internal/SfHeaderNavigation.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var SfHeaderNavigationvue_type_script_lang_js_ = ({
  name: "SfHeaderNavigation",
  components: {
    SfSidebar: SfSidebar["a" /* default */]
  },
  props: {
    isVisibleOnMobile: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfHeader/_internal/SfHeaderNavigation.vue?vue&type=script&lang=js&
 /* harmony default export */ var _internal_SfHeaderNavigationvue_type_script_lang_js_ = (SfHeaderNavigationvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfHeader/_internal/SfHeaderNavigation.vue





/* normalize component */

var SfHeaderNavigation_component = Object(componentNormalizer["a" /* default */])(
  _internal_SfHeaderNavigationvue_type_script_lang_js_,
  SfHeaderNavigationvue_type_template_id_07c7ecb4_render,
  SfHeaderNavigationvue_type_template_id_07c7ecb4_staticRenderFns,
  false,
  null,
  null,
  "5a083acc"
  
)

/* harmony default export */ var SfHeaderNavigation = (SfHeaderNavigation_component.exports);
// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/utilities/mobile-observer.js
var mobile_observer = __webpack_require__(17);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/utilities/helpers/check-environment.js
var check_environment = __webpack_require__(238);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/molecules/SfSearchBar/SfSearchBar.vue?vue&type=template&id=29edf501&
var SfSearchBarvue_type_template_id_29edf501_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-search-bar"},[_c('input',_vm._b({directives:[{name:"focus",rawName:"v-focus"}],staticClass:"sf-search-bar__input",attrs:{"type":"search","placeholder":_vm.placeholder},domProps:{"value":_vm.value},on:{"input":function($event){return _vm.$emit('input', $event.target.value)},"keyup":[function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.$emit('enter', $event.target.value)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"esc",27,$event.key,["Esc","Escape"])){ return null; }return _vm.$emit('input', '')}],"blur":function($event){return _vm.$emit('blur')}}},'input',_vm.$attrs,false),[]),_vm._ssrNode(" "),_vm._t("icon",[_c('SfButton',{staticClass:"sf-search-bar__button sf-button--pure",on:{"click":function($event){return _vm.$emit('click', _vm.value)}}},[(_vm.icon)?_c('span',{staticClass:"sf-search-bar__icon"},[_c('SfIcon',{attrs:{"color":_vm.icon.color,"size":_vm.icon.size,"icon":"search"}})],1):_vm._e()])])],2)}
var SfSearchBarvue_type_template_id_29edf501_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfSearchBar/SfSearchBar.vue?vue&type=template&id=29edf501&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfIcon/SfIcon.vue + 6 modules
var SfIcon = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/utilities/directives/focus/focus-directive.js
var focus_directive = __webpack_require__(236);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/molecules/SfSearchBar/SfSearchBar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var SfSearchBarvue_type_script_lang_js_ = ({
  name: "SfSearchBar",
  directives: {
    focus: focus_directive["a" /* focus */]
  },
  components: {
    SfIcon: SfIcon["a" /* default */],
    SfButton: SfButton["a" /* default */]
  },
  inheritAttrs: false,
  props: {
    /**
     * Text for placeholder
     */
    placeholder: {
      type: String,
      default: ""
    },

    /**
     * Value that will be displayed in search bar
     */
    value: {
      type: [Number, String],
      default: null
    },

    /**
     * Object to define icon look. Should have values for color and size
     */
    icon: {
      type: Object,
      default: () => {}
    }
  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfSearchBar/SfSearchBar.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfSearchBar_SfSearchBarvue_type_script_lang_js_ = (SfSearchBarvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfSearchBar/SfSearchBar.vue



function SfSearchBar_injectStyles (context) {
  
  var style0 = __webpack_require__(152)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var SfSearchBar_component = Object(componentNormalizer["a" /* default */])(
  SfSearchBar_SfSearchBarvue_type_script_lang_js_,
  SfSearchBarvue_type_template_id_29edf501_render,
  SfSearchBarvue_type_template_id_29edf501_staticRenderFns,
  false,
  SfSearchBar_injectStyles,
  null,
  "66e21e2c"
  
)

/* harmony default export */ var SfSearchBar = (SfSearchBar_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfHeader/SfHeader.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



external_vue_default.a.component("SfHeaderNavigation", SfHeaderNavigation);
external_vue_default.a.component("SfHeaderNavigationItem", SfHeaderNavigationItem);







/* harmony default export */ var SfHeadervue_type_script_lang_js_ = ({
  name: "SfHeader",
  components: {
    SfImage: SfImage["a" /* default */],
    SfSearchBar: SfSearchBar,
    SfButton: SfButton["a" /* default */],
    SfIcon: SfIcon["a" /* default */],
    SfLink: SfLink["a" /* default */]
  },
  props: {
    /**
     * Header logo
     */
    logo: {
      type: [String, Object],
      default: ""
    },

    /**
     * Header title
     */
    title: {
      type: String,
      default: ""
    },

    /**
     * Header cartIcon (accepts same value as SfIcon)
     */
    cartIcon: {
      type: [String, Boolean, Array],
      default: "empty_cart"
    },

    /**
     * Header wishlistIcon (accepts same value as SfIcon)
     */
    wishlistIcon: {
      type: [String, Boolean, Array],
      default: "heart"
    },

    /**
     * Header accountIcon (accepts same value as SfIcon)
     */
    accountIcon: {
      type: [String, Boolean, Array],
      default: "profile"
    },

    /**
     * Header activeIcon (accepts account, wishlist and cart)
     */
    activeIcon: {
      type: String,
      default: "",

      validator(value) {
        return ["", "account", "wishlist", "cart"].includes(value);
      }

    },

    /**
     * Header search placeholder
     */
    searchPlaceholder: {
      type: String,
      default: "Search for items"
    },

    /**
     * Header search phrase
     */
    searchValue: {
      type: String,
      default: ""
    },

    /**
     * Header cart items quantity
     */
    wishlistItemsQty: {
      type: [String, Number],
      default: "0"
    },

    /**
     * Header cart items quantity
     */
    cartItemsQty: {
      type: [String, Number],
      default: "0"
    },

    /**
     * Header sticky to top
     */
    isSticky: {
      type: Boolean,
      default: false
    },

    /**
     * Header search on mobile
     */
    isNavVisible: {
      type: Boolean,
      default: false
    }
    /**
     * Is nav slot visible at mobile view
     */

  },

  data() {
    return {
      icons: [],
      hidden: false,
      sticky: false,
      scrollDirection: null,
      lastScrollPosition: 0,
      animationStart: null,
      animationLong: null,
      animationDuration: 300
    };
  },

  computed: { ...Object(mobile_observer["a" /* mapMobileObserver */])(),

    cartHasProducts() {
      return parseInt(this.cartItemsQty, 10) > 0;
    },

    wishlistHasProducts() {
      return parseInt(this.wishlistItemsQty, 10) > 0;
    }

  },
  watch: {
    scrollDirection: {
      handler() {
        if (!check_environment["a" /* isClient */]) return;
        window.cancelAnimationFrame(this.animationLong);
        this.animationLong = null;
        this.animationStart = null;
        this.animationLong = window.requestAnimationFrame(this.animationHandler);
      }

    },
    isSticky: {
      handler(isSticky) {
        if (!check_environment["a" /* isClient */]) return;
        this.sticky = isSticky;
      },

      immediate: true
    }
  },

  mounted() {
    if (this.isSticky) {
      window.addEventListener("scroll", this.scrollHandler, {
        passive: true
      });
    }
  },

  beforeDestroy() {
    Object(mobile_observer["b" /* unMapMobileObserver */])();

    if (this.isSticky) {
      window.removeEventListener("scroll", this.scrollHandler, {
        passive: true
      });
    }
  },

  methods: {
    animationHandler(timestamp) {
      if (!this.animationStart) this.animationStart = timestamp;
      const progress = timestamp - this.animationStart;

      if (progress < this.animationDuration) {
        this.animationLong = window.requestAnimationFrame(this.animationHandler);
        return;
      }

      this.hidden = this.scrollDirection === "down";
    },

    scrollHandler() {
      if (!check_environment["a" /* isClient */]) return;
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

      if (!!this.refs) {
        if (currentScrollPosition >= this.$refs.header.offsetHeight) {
          this.scrollDirection = currentScrollPosition < this.lastScrollPosition ? "up" : "down";
        }
      }

      this.lastScrollPosition = currentScrollPosition;
    }

  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfHeader/SfHeader.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfHeader_SfHeadervue_type_script_lang_js_ = (SfHeadervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfHeader/SfHeader.vue



function SfHeader_injectStyles (context) {
  
  var style0 = __webpack_require__(154)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var SfHeader_component = Object(componentNormalizer["a" /* default */])(
  SfHeader_SfHeadervue_type_script_lang_js_,
  SfHeadervue_type_template_id_bb24253a_render,
  SfHeadervue_type_template_id_bb24253a_staticRenderFns,
  false,
  SfHeader_injectStyles,
  null,
  "25f475a6"
  
)

/* harmony default export */ var SfHeader = (SfHeader_component.exports);
// EXTERNAL MODULE: ./composables/index.ts + 2 modules
var composables = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/@vue-storefront/commercetools/lib/index.es.js
var index_es = __webpack_require__(8);

// EXTERNAL MODULE: external "@vue/composition-api"
var composition_api_ = __webpack_require__(0);
var composition_api_default = /*#__PURE__*/__webpack_require__.n(composition_api_);

// EXTERNAL MODULE: ./node_modules/@vue-storefront/core/lib/index.es.js
var lib_index_es = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/LocaleSelector.vue?vue&type=template&id=85c2987a&scoped=true&
var LocaleSelectorvue_type_template_id_85c2987a_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_c('SfButton',{staticClass:"container__lang container__lang--selected",attrs:{"data-cy":"locale-select_change-langauge"},on:{"click":function($event){_vm.isLangModalOpen = !_vm.isLangModalOpen}}},[_c('SfImage',{attrs:{"src":("/icons/langs/" + _vm.locale + ".png"),"width":"20"}})],1),_vm._ssrNode(" "),_c('SfBottomModal',{attrs:{"is-open":_vm.isLangModalOpen,"title":"Choose language"},on:{"click:close":function($event){_vm.isLangModalOpen = !_vm.isLangModalOpen}}},[_c('SfList',_vm._l((_vm.availableLocales),function(lang){return _c('SfListItem',{key:lang.code},[_c('a',{attrs:{"href":_vm.switchLocalePath(lang.code)}},[_c('SfCharacteristic',{staticClass:"language",scopedSlots:_vm._u([{key:"title",fn:function(){return [_c('span',[_vm._v(_vm._s(lang.label))])]},proxy:true},{key:"icon",fn:function(){return [_c('SfImage',{attrs:{"src":("/icons/langs/" + (lang.code) + ".png")}})]},proxy:true}],null,true)})],1)])}),1)],1)],2)}
var LocaleSelectorvue_type_template_id_85c2987a_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/LocaleSelector.vue?vue&type=template&id=85c2987a&scoped=true&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfSelect/SfSelect.vue + 9 modules
var SfSelect = __webpack_require__(240);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfList/SfList.vue + 9 modules
var SfList = __webpack_require__(234);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/molecules/SfBottomModal/SfBottomModal.vue?vue&type=template&id=0b6d303e&
var SfBottomModalvue_type_template_id_0b6d303e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-bottom-modal"},[_c('SfOverlay',{staticClass:"sf-bottom-modal__overlay",attrs:{"visible":_vm.isOpen},on:{"click":_vm.close}}),_vm._ssrNode(" "),_c('SfTransition',{attrs:{"transition":_vm.transition}},[_c('nav',{directives:[{name:"show",rawName:"v-show",value:(_vm.isOpen),expression:"isOpen"}],staticClass:"sf-bottom-modal__container",attrs:{"role":"dialog","aria-modal":"true"}},[_vm._t("title",[(_vm.title)?_c('SfHeading',{staticClass:"sf-bottom-modal__title",attrs:{"level":3,"title":_vm.title}}):_vm._e()]),_vm._v(" "),_vm._t("close-desktop",[_c('SfCircleIcon',{staticClass:"sf-circle-icon--small sf-bottom-modal__close",attrs:{"aria-label":"Close","icon":"cross"},on:{"click":_vm.close}})]),_vm._v(" "),_vm._t("default"),_vm._v(" "),_vm._t("close-mobile",[_c('SfButton',{staticClass:"sf-button--full-width sf-bottom-modal__cancel",attrs:{"aria-label":"Close"},on:{"click":_vm.close}},[_vm._v("Cancel")])])],2)])],2)}
var SfBottomModalvue_type_template_id_0b6d303e_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfBottomModal/SfBottomModal.vue?vue&type=template&id=0b6d303e&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfOverlay/SfOverlay.vue + 4 modules
var SfOverlay = __webpack_require__(18);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/utilities/transitions/component/SfTransition.js
/* harmony default export */ var SfTransition = ({
  functional: true,
  props: {
    transition: {
      type: [String, Boolean],
      default: "fade"
    },
    group: {
      type: Boolean,
      default: false
    }
  },

  render(createElement, {
    data,
    children,
    props
  }) {
    const isOff = props.transition === false;
    const tag = props.group ? "transition-group" : "transition";
    return createElement(tag, { ...data,
      attrs: {
        name: isOff ? "" : props.transition
      }
    }, children);
  }

});
// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfCircleIcon/SfCircleIcon.vue + 4 modules
var SfCircleIcon = __webpack_require__(15);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/molecules/SfBottomModal/SfBottomModal.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var SfBottomModalvue_type_script_lang_js_ = ({
  name: "SfBottomModal",
  components: {
    SfOverlay: SfOverlay["a" /* default */],
    SfButton: SfButton["a" /* default */],
    SfCircleIcon: SfCircleIcon["a" /* default */],
    SfHeading: SfHeading["a" /* default */],
    SfTransition: SfTransition
  },
  props: {
    /**
     * Bottom Modal is open
     */
    isOpen: {
      type: Boolean,
      default: false
    },

    /**
     * Bottom Modal title
     */
    title: {
      type: String,
      default: ""
    },
    transition: {
      type: [String, Boolean],
      default: ""
    }
  },
  watch: {
    isOpen: {
      handler(value) {
        if (!check_environment["a" /* isClient */]) return;

        if (value) {
          document.addEventListener("keydown", this.keydownHandler);
        } else {
          document.removeEventListener("keydown", this.keydownHandler);
        }
      },

      immediate: true
    }
  },
  methods: {
    close() {
      this.$emit("click:close");
    },

    keydownHandler(e) {
      if (e.key === "Escape" || e.key === "Esc" || e.keyCode === 27) {
        this.close();
      }
    }

  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfBottomModal/SfBottomModal.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfBottomModal_SfBottomModalvue_type_script_lang_js_ = (SfBottomModalvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfBottomModal/SfBottomModal.vue



function SfBottomModal_injectStyles (context) {
  
  var style0 = __webpack_require__(140)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var SfBottomModal_component = Object(componentNormalizer["a" /* default */])(
  SfBottomModal_SfBottomModalvue_type_script_lang_js_,
  SfBottomModalvue_type_template_id_0b6d303e_render,
  SfBottomModalvue_type_template_id_0b6d303e_staticRenderFns,
  false,
  SfBottomModal_injectStyles,
  null,
  "34083d18"
  
)

/* harmony default export */ var SfBottomModal = (SfBottomModal_component.exports);
// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfCharacteristic/SfCharacteristic.vue + 4 modules
var SfCharacteristic = __webpack_require__(241);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LocaleSelector.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var LocaleSelectorvue_type_script_lang_js_ = ({
  components: {
    SfImage: SfImage["a" /* default */],
    SfSelect: SfSelect["a" /* default */],
    SfButton: SfButton["a" /* default */],
    SfList: SfList["a" /* default */],
    SfBottomModal: SfBottomModal,
    SfCharacteristic: SfCharacteristic["a" /* default */]
  },

  setup(props, context) {
    const {
      locales,
      locale
    } = context.root.$i18n;
    const isLangModalOpen = Object(composition_api_["ref"])(false);
    const availableLocales = Object(composition_api_["computed"])(() => locales.filter(i => i.code !== locale));
    return {
      availableLocales,
      locale,
      isLangModalOpen
    };
  }

});
// CONCATENATED MODULE: ./components/LocaleSelector.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_LocaleSelectorvue_type_script_lang_js_ = (LocaleSelectorvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/LocaleSelector.vue



function LocaleSelector_injectStyles (context) {
  
  var style0 = __webpack_require__(144)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var LocaleSelector_component = Object(componentNormalizer["a" /* default */])(
  components_LocaleSelectorvue_type_script_lang_js_,
  LocaleSelectorvue_type_template_id_85c2987a_scoped_true_render,
  LocaleSelectorvue_type_template_id_85c2987a_scoped_true_staticRenderFns,
  false,
  LocaleSelector_injectStyles,
  "85c2987a",
  "9bffe27a"
  
)

/* harmony default export */ var LocaleSelector = (LocaleSelector_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AppHeader.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var AppHeadervue_type_script_lang_js_ = ({
  components: {
    SfHeader: SfHeader,
    SfImage: SfImage["a" /* default */],
    LocaleSelector: LocaleSelector
  },

  setup(props, {
    root
  }) {
    const {
      toggleCartSidebar,
      toggleWishlistSidebar,
      toggleLoginModal
    } = Object(composables["b" /* useUiState */])();
    const {
      changeSearchTerm,
      getFacetsFromURL
    } = Object(composables["a" /* useUiHelpers */])();
    const {
      isAuthenticated,
      load
    } = Object(index_es["l" /* useUser */])();
    const {
      cart,
      loadCart
    } = Object(index_es["g" /* useCart */])();
    const {
      loadWishlist
    } = Object(index_es["p" /* useWishlist */])();
    const term = Object(composition_api_["ref"])(getFacetsFromURL().term);
    const cartTotalItems = Object(composition_api_["computed"])(() => {
      const count = index_es["a" /* cartGetters */].getTotalItems(cart.value);
      return count ? count.toString() : null;
    });
    const accountIcon = Object(composition_api_["computed"])(() => isAuthenticated.value ? 'profile_fill' : 'profile'); // TODO: https://github.com/DivanteLtd/vue-storefront/issues/4927

    const handleAccountClick = async () => {
      if (isAuthenticated.value) {
        return root.$router.push('/my-account');
      }

      toggleLoginModal();
    };

    Object(lib_index_es["onSSR"])(async () => {
      await load();
      await loadCart();
      await loadWishlist();
    });
    return {
      accountIcon,
      cartTotalItems,
      handleAccountClick,
      toggleCartSidebar,
      toggleWishlistSidebar,
      changeSearchTerm,
      term
    };
  }

});
// CONCATENATED MODULE: ./components/AppHeader.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_AppHeadervue_type_script_lang_js_ = (AppHeadervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/AppHeader.vue



function AppHeader_injectStyles (context) {
  
  var style0 = __webpack_require__(156)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var AppHeader_component = Object(componentNormalizer["a" /* default */])(
  components_AppHeadervue_type_script_lang_js_,
  AppHeadervue_type_template_id_6ce0af32_scoped_true_render,
  AppHeadervue_type_template_id_6ce0af32_scoped_true_staticRenderFns,
  false,
  AppHeader_injectStyles,
  "6ce0af32",
  "4b90b814"
  
)

/* harmony default export */ var AppHeader = (AppHeader_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/BottomNavigation.vue?vue&type=template&id=67c93ec6&
var BottomNavigationvue_type_template_id_67c93ec6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('SfBottomNavigation',{staticClass:"smartphone-only"},[_c('nuxt-link',{attrs:{"data-cy":"bottom-navigation-url_home","to":"/"}},[_c('SfBottomNavigationItem',{class:_vm.$route.path == '/' ? 'sf-bottom-navigation__item--active' : '',attrs:{"icon":"home","size":"20px","label":"Home"}})],1),_vm._v(" "),_c('SfBottomNavigationItem',{attrs:{"data-cy":"bottom-navigation-url_menu","icon":"menu","size":"20px","label":"Menu"}}),_vm._v(" "),_c('SfBottomNavigationItem',{attrs:{"data-cy":"bottom-navigation-url_wishlist","icon":"heart","size":"20px","label":"Wishlist"},on:{"click":_vm.toggleWishlistSidebar}}),_vm._v(" "),_c('SfBottomNavigationItem',{attrs:{"data-cy":"bottom-navigation-url_account","icon":"profile","size":"20px","label":"Account"},on:{"click":_vm.handleAccountClick}}),_vm._v(" "),_c('SfBottomNavigationItem',{attrs:{"data-cy":"bottom-navigation-url_add-to-cart","label":"Basket","icon":"add_to_cart"},on:{"click":_vm.toggleCartSidebar},scopedSlots:_vm._u([{key:"icon",fn:function(){return [_c('SfCircleIcon',{attrs:{"aria-label":"Add to cart"}},[_c('SfIcon',{style:({margin: '0 0 0 -2px'}),attrs:{"icon":"add_to_cart","color":"white","size":"25px"}})],1)]},proxy:true}])})],1)}
var BottomNavigationvue_type_template_id_67c93ec6_staticRenderFns = []


// CONCATENATED MODULE: ./components/BottomNavigation.vue?vue&type=template&id=67c93ec6&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfBottomNavigation/SfBottomNavigation.vue?vue&type=template&id=5b744ae0&
var SfBottomNavigationvue_type_template_id_5b744ae0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-bottom-navigation"},[_vm._t("default")],2)}
var SfBottomNavigationvue_type_template_id_5b744ae0_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfBottomNavigation/SfBottomNavigation.vue?vue&type=template&id=5b744ae0&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfBottomNavigation/_internal/SfBottomNavigationItem.vue?vue&type=template&id=585e608e&
var SfBottomNavigationItemvue_type_template_id_585e608e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',_vm._g({staticClass:"sf-bottom-navigation-item",class:{
    'is-active': _vm.isActive,
    'is-floating': _vm.isFloating,
    center: !_vm.icon || !_vm.label,
  }},_vm.$listeners),[_vm._t("icon",[(_vm.isFloating)?_c('SfCircleIcon',{attrs:{"icon":_vm.icon,"icon-color":"white","icon-size":"28px","aria-label":_vm.label}}):(_vm.icon)?_c('SfButton',{staticClass:"sf-button--pure sf-bottom-navigation-item__icon",attrs:{"aria-label":_vm.label}},[_c('SfIcon',{attrs:{"icon":_vm.currentIcon,"size":_vm.iconSize}})],1):_vm._e()],null,{ icon: _vm.icon, iconActive: _vm.iconActive, iconSize: _vm.iconSize, isFloating: _vm.isFloating }),_vm._ssrNode(" "),_vm._t("label",[(_vm.label)?_c('div',{staticClass:"sf-bottom-navigation-item__label",class:{
        'has-margin': _vm.icon,
      }},[_vm._v("\n      "+_vm._s(_vm.label)+"\n    ")]):_vm._e()],null,{ label: _vm.label })],2)}
var SfBottomNavigationItemvue_type_template_id_585e608e_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfBottomNavigation/_internal/SfBottomNavigationItem.vue?vue&type=template&id=585e608e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfBottomNavigation/_internal/SfBottomNavigationItem.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var SfBottomNavigationItemvue_type_script_lang_js_ = ({
  name: "SfBottomNavigationItem",
  directives: {
    focus: focus_directive["a" /* focus */]
  },
  components: {
    SfCircleIcon: SfCircleIcon["a" /* default */],
    SfIcon: SfIcon["a" /* default */],
    SfButton: SfButton["a" /* default */]
  },
  props: {
    icon: {
      type: [String, Array],
      default: ""
    },
    isActive: {
      type: Boolean,
      default: false
    },
    iconActive: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: ""
    },
    iconSize: {
      type: String,
      default: "20px"
    },
    isFloating: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    currentIcon() {
      return this.isActive && this.iconActive ? this.iconActive : this.icon;
    }

  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfBottomNavigation/_internal/SfBottomNavigationItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var _internal_SfBottomNavigationItemvue_type_script_lang_js_ = (SfBottomNavigationItemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfBottomNavigation/_internal/SfBottomNavigationItem.vue





/* normalize component */

var SfBottomNavigationItem_component = Object(componentNormalizer["a" /* default */])(
  _internal_SfBottomNavigationItemvue_type_script_lang_js_,
  SfBottomNavigationItemvue_type_template_id_585e608e_render,
  SfBottomNavigationItemvue_type_template_id_585e608e_staticRenderFns,
  false,
  null,
  null,
  "750d57d9"
  
)

/* harmony default export */ var SfBottomNavigationItem = (SfBottomNavigationItem_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfBottomNavigation/SfBottomNavigation.vue?vue&type=script&lang=js&
//
//
//
//
//


external_vue_default.a.component("SfBottomNavigationItem", SfBottomNavigationItem);
/* harmony default export */ var SfBottomNavigationvue_type_script_lang_js_ = ({
  name: "SfBottomNavigation"
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfBottomNavigation/SfBottomNavigation.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfBottomNavigation_SfBottomNavigationvue_type_script_lang_js_ = (SfBottomNavigationvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfBottomNavigation/SfBottomNavigation.vue



function SfBottomNavigation_injectStyles (context) {
  
  var style0 = __webpack_require__(158)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var SfBottomNavigation_component = Object(componentNormalizer["a" /* default */])(
  SfBottomNavigation_SfBottomNavigationvue_type_script_lang_js_,
  SfBottomNavigationvue_type_template_id_5b744ae0_render,
  SfBottomNavigationvue_type_template_id_5b744ae0_staticRenderFns,
  false,
  SfBottomNavigation_injectStyles,
  null,
  "882f6f34"
  
)

/* harmony default export */ var SfBottomNavigation = (SfBottomNavigation_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BottomNavigation.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var BottomNavigationvue_type_script_lang_js_ = ({
  components: {
    SfBottomNavigation: SfBottomNavigation,
    SfIcon: SfIcon["a" /* default */],
    SfCircleIcon: SfCircleIcon["a" /* default */]
  },

  setup(props, {
    root
  }) {
    const {
      toggleCartSidebar,
      toggleWishlistSidebar,
      toggleLoginModal
    } = Object(composables["b" /* useUiState */])();
    const {
      isAuthenticated
    } = Object(index_es["l" /* useUser */])();

    const handleAccountClick = async () => {
      if (isAuthenticated.value) {
        return root.$router.push('/my-account');
      }

      toggleLoginModal();
    };

    return {
      toggleWishlistSidebar,
      toggleCartSidebar,
      handleAccountClick
    };
  }

});
// CONCATENATED MODULE: ./components/BottomNavigation.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BottomNavigationvue_type_script_lang_js_ = (BottomNavigationvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/BottomNavigation.vue





/* normalize component */

var BottomNavigation_component = Object(componentNormalizer["a" /* default */])(
  components_BottomNavigationvue_type_script_lang_js_,
  BottomNavigationvue_type_template_id_67c93ec6_render,
  BottomNavigationvue_type_template_id_67c93ec6_staticRenderFns,
  false,
  null,
  null,
  "eac56cee"
  
)

/* harmony default export */ var BottomNavigation = (BottomNavigation_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/TopBar.vue?vue&type=template&id=6a7f2206&scoped=true&
var TopBarvue_type_template_id_6a7f2206_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('SfTopBar',{scopedSlots:_vm._u([{key:"left",fn:function(){return [_c('SfButton',{staticClass:"sf-button--text",attrs:{"data-cy":"top-bar-btn_faq"}},[_vm._v("Help & FAQs")])]},proxy:true},{key:"center",fn:function(){return [_c('p',[_vm._v("Download our application.")]),_vm._v(" "),_c('SfButton',{staticClass:"topbar__button sf-button--text",attrs:{"data-cy":"top-bar-btn_more"}},[_vm._v("Find out more")])]},proxy:true},{key:"right",fn:function(){return [_c('LocaleSelector')]},proxy:true}])})}
var TopBarvue_type_template_id_6a7f2206_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/TopBar.vue?vue&type=template&id=6a7f2206&scoped=true&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfTopBar/SfTopBar.vue?vue&type=template&id=1ed06c10&
var SfTopBarvue_type_template_id_1ed06c10_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-top-bar"},[_vm._ssrNode("<div class=\"sf-top-bar__container\">","</div>",[_vm._ssrNode("<div class=\"sf-top-bar__left\">","</div>",[_vm._t("left")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"sf-top-bar__center\">","</div>",[_vm._t("center")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"sf-top-bar__right\">","</div>",[_vm._t("right")],2)],2)])}
var SfTopBarvue_type_template_id_1ed06c10_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfTopBar/SfTopBar.vue?vue&type=template&id=1ed06c10&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfTopBar/SfTopBar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var SfTopBarvue_type_script_lang_js_ = ({
  name: "SFTopBar"
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfTopBar/SfTopBar.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfTopBar_SfTopBarvue_type_script_lang_js_ = (SfTopBarvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfTopBar/SfTopBar.vue



function SfTopBar_injectStyles (context) {
  
  var style0 = __webpack_require__(160)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var SfTopBar_component = Object(componentNormalizer["a" /* default */])(
  SfTopBar_SfTopBarvue_type_script_lang_js_,
  SfTopBarvue_type_template_id_1ed06c10_render,
  SfTopBarvue_type_template_id_1ed06c10_staticRenderFns,
  false,
  SfTopBar_injectStyles,
  null,
  "1bb2c4c6"
  
)

/* harmony default export */ var SfTopBar = (SfTopBar_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TopBar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var TopBarvue_type_script_lang_js_ = ({
  components: {
    SfTopBar: SfTopBar,
    SfButton: SfButton["a" /* default */],
    LocaleSelector: LocaleSelector
  },

  setup() {
    const {
      toggleLoginModal
    } = Object(composables["b" /* useUiState */])();
    const {
      isAuthenticated,
      logout,
      user
    } = Object(index_es["l" /* useUser */])();
    return {
      toggleLoginModal,
      isAuthenticated,
      logout,
      user,
      userGetters: index_es["r" /* userGetters */]
    };
  }

});
// CONCATENATED MODULE: ./components/TopBar.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TopBarvue_type_script_lang_js_ = (TopBarvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/TopBar.vue



function TopBar_injectStyles (context) {
  
  var style0 = __webpack_require__(162)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var TopBar_component = Object(componentNormalizer["a" /* default */])(
  components_TopBarvue_type_script_lang_js_,
  TopBarvue_type_template_id_6a7f2206_scoped_true_render,
  TopBarvue_type_template_id_6a7f2206_scoped_true_staticRenderFns,
  false,
  TopBar_injectStyles,
  "6a7f2206",
  "af3c7f30"
  
)

/* harmony default export */ var TopBar = (TopBar_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/CartSidebar.vue?vue&type=template&id=586901b6&scoped=true&
var CartSidebarvue_type_template_id_586901b6_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"cart"}},[_c('SfSidebar',{staticClass:"sf-sidebar--right",attrs:{"visible":_vm.isCartSidebarOpen,"title":"My Cart"},on:{"close":_vm.toggleCartSidebar},scopedSlots:_vm._u([{key:"content-top",fn:function(){return [_c('SfProperty',{staticClass:"sf-property--large cart-summary desktop-only",attrs:{"name":"Total items","value":_vm.totalItems}})]},proxy:true},{key:"content-bottom",fn:function(){return [_c('transition',{attrs:{"name":"sf-fade"}},[(_vm.totalItems)?_c('div',[_c('SfProperty',{staticClass:"sf-property--full-width sf-property--large my-cart__total-price",attrs:{"name":"Total price"},scopedSlots:_vm._u([{key:"value",fn:function(){return [_c('SfPrice',{attrs:{"regular":_vm.cartGetters.getFormattedPrice(_vm.totals.subtotal)}})]},proxy:true}],null,false,106285428)}),_vm._v(" "),_c('nuxt-link',{attrs:{"to":("/checkout/" + (_vm.isAuthenticated ? 'shipping' : 'personal-details'))}},[_c('SfButton',{staticClass:"sf-button--full-width color-secondary",on:{"click":_vm.toggleCartSidebar}},[_vm._v("\n              Go to checkout\n            ")])],1)],1):_c('div',[_c('SfButton',{staticClass:"sf-button--full-width color-primary",on:{"click":_vm.toggleCartSidebar}},[_vm._v("Go back shopping")])],1)])]},proxy:true}])},[_vm._v(" "),_c('transition',{attrs:{"name":"sf-fade","mode":"out-in"}},[(_vm.totalItems)?_c('div',{key:"my-cart",staticClass:"my-cart"},[_c('div',{staticClass:"collected-product-list"},[_c('transition-group',{attrs:{"name":"sf-fade","tag":"div"}},_vm._l((_vm.products),function(product){return _c('SfCollectedProduct',{key:_vm.cartGetters.getItemSku(product),staticClass:"collected-product",attrs:{"data-cy":"collected-product-cart-sidebar","image":_vm.cartGetters.getItemImage(product),"title":_vm.cartGetters.getItemName(product),"regular-price":_vm.cartGetters.getFormattedPrice(_vm.cartGetters.getItemPrice(product).regular),"special-price":_vm.cartGetters.getFormattedPrice(_vm.cartGetters.getItemPrice(product).special),"stock":99999,"qty":_vm.cartGetters.getItemQty(product)},on:{"input":function($event){return _vm.updateQuantity(product, $event)},"click:remove":function($event){return _vm.removeFromCart(product)}},scopedSlots:_vm._u([{key:"configuration",fn:function(){return [_c('div',{staticClass:"collected-product__properties"},_vm._l((_vm.cartGetters.getItemAttributes(product, ['color', 'size'])),function(attribute,key){return _c('SfProperty',{key:key,attrs:{"name":key,"value":attribute}})}),1)]},proxy:true},{key:"actions",fn:function(){return [_c('div',{staticClass:"desktop-only collected-product__actions"},[_c('SfButton',{staticClass:"sf-button--text collected-product__save"},[_vm._v("\n                    Save for later\n                  ")]),_vm._v(" "),_c('SfButton',{staticClass:"sf-button--text collected-product__compare"},[_vm._v("\n                    Add to compare\n                  ")])],1)]},proxy:true}],null,true)})}),1)],1)]):_c('div',{key:"empty-cart",staticClass:"empty-cart"},[_c('div',{staticClass:"empty-cart__banner"},[_c('SfImage',{staticClass:"empty-cart__image",attrs:{"alt":"Empty bag","src":"/icons/empty-cart.svg"}}),_vm._v(" "),_c('SfHeading',{staticClass:"empty-cart__heading",attrs:{"title":"Your cart is empty","level":2,"description":"Looks like you haven’t added any items to the bag yet. Start\n            shopping to fill it in."}})],1)])])],1)],1)}
var CartSidebarvue_type_template_id_586901b6_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/CartSidebar.vue?vue&type=template&id=586901b6&scoped=true&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfProperty/SfProperty.vue + 4 modules
var SfProperty = __webpack_require__(99);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfPrice/SfPrice.vue + 4 modules
var SfPrice = __webpack_require__(39);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfCollectedProduct/SfCollectedProduct.vue + 4 modules
var SfCollectedProduct = __webpack_require__(242);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CartSidebar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var CartSidebarvue_type_script_lang_js_ = ({
  name: 'Cart',
  components: {
    SfSidebar: SfSidebar["a" /* default */],
    SfButton: SfButton["a" /* default */],
    SfHeading: SfHeading["a" /* default */],
    SfIcon: SfIcon["a" /* default */],
    SfProperty: SfProperty["a" /* default */],
    SfPrice: SfPrice["a" /* default */],
    SfCollectedProduct: SfCollectedProduct["a" /* default */],
    SfImage: SfImage["a" /* default */]
  },

  setup() {
    const {
      isCartSidebarOpen,
      toggleCartSidebar
    } = Object(composables["b" /* useUiState */])();
    const {
      cart,
      removeFromCart,
      updateQuantity,
      loadCart
    } = Object(index_es["g" /* useCart */])();
    const {
      isAuthenticated
    } = Object(index_es["l" /* useUser */])();
    const products = Object(composition_api_["computed"])(() => index_es["a" /* cartGetters */].getItems(cart.value));
    const totals = Object(composition_api_["computed"])(() => index_es["a" /* cartGetters */].getTotals(cart.value));
    const totalItems = Object(composition_api_["computed"])(() => index_es["a" /* cartGetters */].getTotalItems(cart.value));
    Object(lib_index_es["onSSR"])(async () => {
      await loadCart();
    });
    return {
      isAuthenticated,
      products,
      removeFromCart,
      updateQuantity,
      isCartSidebarOpen,
      toggleCartSidebar,
      totals,
      totalItems,
      cartGetters: index_es["a" /* cartGetters */]
    };
  }

});
// CONCATENATED MODULE: ./components/CartSidebar.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CartSidebarvue_type_script_lang_js_ = (CartSidebarvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/CartSidebar.vue



function CartSidebar_injectStyles (context) {
  
  var style0 = __webpack_require__(174)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var CartSidebar_component = Object(componentNormalizer["a" /* default */])(
  components_CartSidebarvue_type_script_lang_js_,
  CartSidebarvue_type_template_id_586901b6_scoped_true_render,
  CartSidebarvue_type_template_id_586901b6_scoped_true_staticRenderFns,
  false,
  CartSidebar_injectStyles,
  "586901b6",
  "f7e8d4bc"
  
)

/* harmony default export */ var CartSidebar = (CartSidebar_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/LoginModal.vue?vue&type=template&id=a7c82f20&scoped=true&
var LoginModalvue_type_template_id_a7c82f20_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('SfModal',{staticClass:"modal",attrs:{"visible":_vm.isLoginModalOpen,"title":"Log in"},on:{"close":_vm.toggleLoginModal}},[_c('transition',{attrs:{"name":"fade","mode":"out-in"}},[(_vm.isLogin)?_c('div',{key:"log-in"},[_c('ValidationObserver',{scopedSlots:_vm._u([{key:"default",fn:function(ref){
var handleSubmit = ref.handleSubmit;
return [_c('form',{staticClass:"form",on:{"submit":function($event){$event.preventDefault();return handleSubmit(_vm.handleLogin)}}},[_c('ValidationProvider',{attrs:{"rules":"required|email"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
return [_c('SfInput',{staticClass:"form__element",attrs:{"data-cy":"login-input_email","valid":!errors[0],"errorMessage":errors[0],"name":"email","label":"Your email"},model:{value:(_vm.form.username),callback:function ($$v) {_vm.$set(_vm.form, "username", $$v)},expression:"form.username"}})]}}],null,true)}),_vm._v(" "),_c('ValidationProvider',{attrs:{"rules":"required"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
return [_c('SfInput',{staticClass:"form__element",attrs:{"data-cy":"login-input_password","valid":!errors[0],"errorMessage":errors[0],"name":"password","label":"Password","type":"password"},model:{value:(_vm.form.password),callback:function ($$v) {_vm.$set(_vm.form, "password", $$v)},expression:"form.password"}})]}}],null,true)}),_vm._v(" "),_c('SfCheckbox',{staticClass:"form__element",attrs:{"data-cy":"login-checkbox-remember-me","name":"remember-me","label":"Remember me"},model:{value:(_vm.rememberMe),callback:function ($$v) {_vm.rememberMe=$$v},expression:"rememberMe"}}),_vm._v(" "),_c('SfButton',{staticClass:"sf-button--full-width form__button",attrs:{"data-cy":"login-btn_submit","type":"submit","disabled":_vm.loading}},[_c('SfLoader',{class:{ loader: _vm.loading },attrs:{"loading":_vm.loading}},[_c('div',[_vm._v("Login")])])],1)],1)]}}],null,false,2841560942)}),_vm._v(" "),_c('div',{staticClass:"action"},[_c('SfButton',{staticClass:"sf-button--text",attrs:{"data-cy":"login-btn_forgot-password"}},[_vm._v("Forgotten password?")])],1),_vm._v(" "),_c('div',{staticClass:"bottom"},[_vm._v("\n          Don't have and account yet?\n          "),_c('SfButton',{staticClass:"sf-button--text",attrs:{"data-cy":"login-btn_sign-up"},on:{"click":function($event){_vm.isLogin = false}}},[_vm._v("Register today?")])],1)],1):_c('div',{key:"sign-up",staticClass:"form"},[_c('ValidationObserver',{scopedSlots:_vm._u([{key:"default",fn:function(ref){
var handleSubmit = ref.handleSubmit;
return [_c('form',{staticClass:"form",attrs:{"autocomplete":"off"},on:{"submit":function($event){$event.preventDefault();return handleSubmit(_vm.handleRegister)}}},[_c('ValidationProvider',{attrs:{"rules":"required|email"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
return [_c('SfInput',{staticClass:"form__element",attrs:{"data-cy":"login-input_email","valid":!errors[0],"errorMessage":errors[0],"name":"email","label":"Your email"},model:{value:(_vm.form.email),callback:function ($$v) {_vm.$set(_vm.form, "email", $$v)},expression:"form.email"}})]}}],null,true)}),_vm._v(" "),_c('ValidationProvider',{attrs:{"rules":"required"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
return [_c('SfInput',{staticClass:"form__element",attrs:{"data-cy":"login-input_firstName","valid":!errors[0],"errorMessage":errors[0],"name":"first-name","label":"First Name"},model:{value:(_vm.form.firstName),callback:function ($$v) {_vm.$set(_vm.form, "firstName", $$v)},expression:"form.firstName"}})]}}],null,true)}),_vm._v(" "),_c('ValidationProvider',{attrs:{"rules":"required"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
return [_c('SfInput',{staticClass:"form__element",attrs:{"data-cy":"login-input_lastName","valid":!errors[0],"errorMessage":errors[0],"name":"last-name","label":"Last Name"},model:{value:(_vm.form.lastName),callback:function ($$v) {_vm.$set(_vm.form, "lastName", $$v)},expression:"form.lastName"}})]}}],null,true)}),_vm._v(" "),_c('ValidationProvider',{attrs:{"rules":"required"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
return [_c('SfInput',{staticClass:"form__element",attrs:{"data-cy":"login-input_password","valid":!errors[0],"errorMessage":errors[0],"name":"password","label":"Password","type":"password"},model:{value:(_vm.form.password),callback:function ($$v) {_vm.$set(_vm.form, "password", $$v)},expression:"form.password"}})]}}],null,true)}),_vm._v(" "),_c('ValidationProvider',{attrs:{"rules":{ required: { allowFalse: false } }},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
return [_c('SfCheckbox',{staticClass:"form__element",attrs:{"valid":!errors[0],"errorMessage":errors[0],"name":"create-account","label":"I want to create an account"},model:{value:(_vm.createAccount),callback:function ($$v) {_vm.createAccount=$$v},expression:"createAccount"}})]}}],null,true)}),_vm._v(" "),_c('SfButton',{staticClass:"sf-button--full-width form__button",attrs:{"data-cy":"login-btn_submit","type":"submit","disabled":_vm.loading}},[_c('SfLoader',{class:{ loader: _vm.loading },attrs:{"loading":_vm.loading}},[_c('div',[_vm._v("Create an account")])])],1)],1)]}}])}),_vm._v(" "),_c('div',{staticClass:"action"},[_vm._v("\n          or\n          "),_c('SfButton',{staticClass:"sf-button--text",attrs:{"data-cy":"login-btn_login-into-account"},on:{"click":function($event){_vm.isLogin = true}}},[_vm._v("login in to your account")])],1)],1)])],1)],1)}
var LoginModalvue_type_template_id_a7c82f20_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/LoginModal.vue?vue&type=template&id=a7c82f20&scoped=true&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfModal/SfModal.vue + 4 modules
var SfModal = __webpack_require__(243);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfInput/SfInput.vue + 4 modules
var SfInput = __webpack_require__(98);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfCheckbox/SfCheckbox.vue + 4 modules
var SfCheckbox = __webpack_require__(235);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfLoader/SfLoader.vue + 4 modules
var SfLoader = __webpack_require__(244);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfAlert/SfAlert.vue + 4 modules
var SfAlert = __webpack_require__(245);

// EXTERNAL MODULE: external "vee-validate"
var external_vee_validate_ = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/vee-validate/dist/rules.js
var rules = __webpack_require__(29);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LoginModal.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






Object(external_vee_validate_["extend"])('email', { ...rules["c" /* email */],
  message: 'Invalid email'
});
Object(external_vee_validate_["extend"])('required', { ...rules["f" /* required */],
  message: 'This field is required'
});
/* harmony default export */ var LoginModalvue_type_script_lang_js_ = ({
  name: 'LoginModal',
  components: {
    SfModal: SfModal["a" /* default */],
    SfInput: SfInput["a" /* default */],
    SfButton: SfButton["a" /* default */],
    SfCheckbox: SfCheckbox["a" /* default */],
    SfLoader: SfLoader["a" /* default */],
    SfAlert: SfAlert["a" /* default */],
    ValidationProvider: external_vee_validate_["ValidationProvider"],
    ValidationObserver: external_vee_validate_["ValidationObserver"]
  },

  setup() {
    const {
      isLoginModalOpen,
      toggleLoginModal
    } = Object(composables["b" /* useUiState */])();
    const form = Object(composition_api_["ref"])({});
    const isLogin = Object(composition_api_["ref"])(false);
    const createAccount = Object(composition_api_["ref"])(false);
    const rememberMe = Object(composition_api_["ref"])(false);
    const {
      register,
      login,
      loading
    } = Object(index_es["l" /* useUser */])();
    Object(composition_api_["watch"])(isLoginModalOpen, () => {
      if (isLoginModalOpen) {
        form.value = {};
      }
    });

    const handleForm = fn => async () => {
      await fn(form.value);
      toggleLoginModal();
    };

    const handleRegister = async () => handleForm(register)();

    const handleLogin = async () => handleForm(login)();

    return {
      form,
      loading,
      isLogin,
      createAccount,
      rememberMe,
      isLoginModalOpen,
      toggleLoginModal,
      handleLogin,
      handleRegister
    };
  }

});
// CONCATENATED MODULE: ./components/LoginModal.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_LoginModalvue_type_script_lang_js_ = (LoginModalvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/LoginModal.vue



function LoginModal_injectStyles (context) {
  
  var style0 = __webpack_require__(184)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var LoginModal_component = Object(componentNormalizer["a" /* default */])(
  components_LoginModalvue_type_script_lang_js_,
  LoginModalvue_type_template_id_a7c82f20_scoped_true_render,
  LoginModalvue_type_template_id_a7c82f20_scoped_true_staticRenderFns,
  false,
  LoginModal_injectStyles,
  "a7c82f20",
  "0210c2ae"
  
)

/* harmony default export */ var LoginModal = (LoginModal_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/account.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var accountvue_type_script_lang_js_ = ({
  components: {
    TopBar: TopBar,
    AppHeader: AppHeader,
    BottomNavigation: BottomNavigation,
    CartSidebar: CartSidebar,
    LoginModal: LoginModal
  }
});
// CONCATENATED MODULE: ./layouts/account.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_accountvue_type_script_lang_js_ = (accountvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./layouts/account.vue



function account_injectStyles (context) {
  
  var style0 = __webpack_require__(186)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var account_component = Object(componentNormalizer["a" /* default */])(
  layouts_accountvue_type_script_lang_js_,
  accountvue_type_template_id_cda3f19c_render,
  accountvue_type_template_id_cda3f19c_staticRenderFns,
  false,
  account_injectStyles,
  null,
  "bb1913c4"
  
)

/* harmony default export */ var account = (account_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=template&id=5f93023e&
var defaultvue_type_template_id_5f93023e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('TopBar',{staticClass:"desktop-only"}),_vm._ssrNode(" "),_vm._ssrNode("<div id=\"layout\">","</div>",[_c('AppHeader'),_vm._ssrNode(" "),_c('nuxt',{key:_vm.$route.fullPath}),_vm._ssrNode(" "),_c('BottomNavigation'),_vm._ssrNode(" "),_c('AppFooter'),_vm._ssrNode(" "),_c('CartSidebar'),_vm._ssrNode(" "),_c('WishlistSidebar'),_vm._ssrNode(" "),_c('LoginModal')],2)],2)}
var defaultvue_type_template_id_5f93023e_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/default.vue?vue&type=template&id=5f93023e&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/AppFooter.vue?vue&type=template&id=0edd8b96&
var AppFootervue_type_template_id_0edd8b96_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('SfFooter',{attrs:{"column":4,"multiple":"","id":"footer"}},[_c('SfFooterColumn',{attrs:{"title":_vm.$t('About us')}},[_c('SfList',_vm._l((_vm.aboutUs),function(item){return _c('SfListItem',{key:item},[_c('SfMenuItem',{attrs:{"data-cy":("app-foter-url_about-us_" + (item.split(' ').join('-').toLowerCase())),"label":_vm.$t(item)}})],1)}),1)],1),_vm._v(" "),_c('SfFooterColumn',{attrs:{"title":_vm.$t('Departments')}},[_c('SfList',_vm._l((_vm.departments),function(item){return _c('SfListItem',{key:item},[_c('SfMenuItem',{attrs:{"data-cy":("app-foter-url_departments_" + (item.split(' ').join('-').toLowerCase())),"label":_vm.$t(item)}})],1)}),1)],1),_vm._v(" "),_c('SfFooterColumn',{attrs:{"title":_vm.$t('Help')}},[_c('SfList',_vm._l((_vm.help),function(item){return _c('SfListItem',{key:item},[_c('SfMenuItem',{attrs:{"data-cy":("app-foter-url_help_" + (item.split(' ').join('-').toLowerCase())),"label":_vm.$t(item)}})],1)}),1)],1),_vm._v(" "),_c('SfFooterColumn',{attrs:{"title":_vm.$t('Payment & Delivery')}},[_c('SfList',_vm._l((_vm.paymentsDelivery),function(item){return _c('SfListItem',{key:item},[_c('SfMenuItem',{attrs:{"data-cy":("app-foter-url_payment_" + (item.split(' ').join('-').toLowerCase())),"label":_vm.$t(item)}})],1)}),1)],1),_vm._v(" "),_c('SfFooterColumn',{attrs:{"title":"Social"}},[_c('div',{staticClass:"footer__socials"},_vm._l((_vm.social),function(item){return _c('SfImage',{key:item,staticClass:"footer__social-image",attrs:{"src":'/icons/'+item+'.svg',"width":"12","height":"12"}})}),1)])],1)}
var AppFootervue_type_template_id_0edd8b96_staticRenderFns = []


// CONCATENATED MODULE: ./components/AppFooter.vue?vue&type=template&id=0edd8b96&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfFooter/SfFooter.vue?vue&type=template&id=9ea4c4e0&
var SfFootervue_type_template_id_9ea4c4e0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('footer',{staticClass:"sf-footer",style:(_vm.style)},[_vm._ssrNode("<div class=\"sf-footer__container\">","</div>",[_vm._t("default")],2)])}
var SfFootervue_type_template_id_9ea4c4e0_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfFooter/SfFooter.vue?vue&type=template&id=9ea4c4e0&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfFooter/_internal/SfFooterColumn.vue?vue&type=template&id=22f5bb94&
var SfFooterColumnvue_type_template_id_22f5bb94_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-footer-column"},[_c('button',{directives:[{name:"focus",rawName:"v-focus"}],staticClass:"sf-footer-column__title",on:{"click":function($event){return _vm.toggle(_vm.title)}}},[_vm._ssrNode(_vm._ssrEscape("\n    "+_vm._s(_vm.title)+"\n    ")),_vm._ssrNode("<div class=\"sf-footer-column__chevron\">","</div>",[_c('SfChevron',{class:{ 'sf-chevron--top': _vm.open }})],1)],2),_vm._ssrNode(" "),_c('transition',{attrs:{"name":"sf-fade"}},[(_vm.open)?_c('div',{staticClass:"sf-footer-column__content"},[_vm._t("default")],2):_vm._e()])],2)}
var SfFooterColumnvue_type_template_id_22f5bb94_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfFooter/_internal/SfFooterColumn.vue?vue&type=template&id=22f5bb94&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfChevron/SfChevron.vue + 4 modules
var SfChevron = __webpack_require__(37);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfFooter/_internal/SfFooterColumn.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var SfFooterColumnvue_type_script_lang_js_ = ({
  name: "SfFooterColumn",
  directives: {
    focus: focus_directive["a" /* focus */]
  },
  components: {
    SfChevron: SfChevron["a" /* default */]
  },
  props: {
    title: {
      type: String,
      default: ""
    }
  },
  computed: {
    open() {
      return this.$parent.isOpen.includes(this.title);
    }

  },

  mounted() {
    this.$parent.items.push(this.title);
  },

  methods: {
    toggle(payload) {
      this.$parent.toggle(payload);
    }

  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfFooter/_internal/SfFooterColumn.vue?vue&type=script&lang=js&
 /* harmony default export */ var _internal_SfFooterColumnvue_type_script_lang_js_ = (SfFooterColumnvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfFooter/_internal/SfFooterColumn.vue





/* normalize component */

var SfFooterColumn_component = Object(componentNormalizer["a" /* default */])(
  _internal_SfFooterColumnvue_type_script_lang_js_,
  SfFooterColumnvue_type_template_id_22f5bb94_render,
  SfFooterColumnvue_type_template_id_22f5bb94_staticRenderFns,
  false,
  null,
  null,
  "2e10a9c8"
  
)

/* harmony default export */ var SfFooterColumn = (SfFooterColumn_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfFooter/SfFooter.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//



external_vue_default.a.component("SfFooterColumn", SfFooterColumn);
/* harmony default export */ var SfFootervue_type_script_lang_js_ = ({
  name: "SfFooter",
  props: {
    column: {
      type: Number,
      default: 4
    },
    multiple: {
      type: Boolean,
      default: true
    },
    open: {
      type: [String, Array],
      default: () => []
    }
  },

  data() {
    return {
      isOpen: [],
      items: []
    };
  },

  computed: { ...Object(mobile_observer["a" /* mapMobileObserver */])(),

    style() {
      return {
        "--_footer-column-width": `${100 / this.column}%`
      };
    }

  },
  watch: {
    isMobile: {
      handler(mobile) {
        this.$nextTick(() => {
          this.isOpen = mobile ? [...this.open] : [...this.items];
        });
      },

      immediate: true
    }
  },

  beforeDestroy() {
    Object(mobile_observer["b" /* unMapMobileObserver */])();
  },

  methods: {
    toggle(payload) {
      if (!this.isMobile) return;

      if (!this.multiple) {
        this.isOpen = [payload];
      } else if (this.isOpen.includes(payload)) {
        this.isOpen = this.isOpen.filter(item => item !== payload);
      } else {
        this.isOpen.push(payload);
      }

      this.$emit("change", this.isOpen);
    }

  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfFooter/SfFooter.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfFooter_SfFootervue_type_script_lang_js_ = (SfFootervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfFooter/SfFooter.vue



function SfFooter_injectStyles (context) {
  
  var style0 = __webpack_require__(190)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var SfFooter_component = Object(componentNormalizer["a" /* default */])(
  SfFooter_SfFootervue_type_script_lang_js_,
  SfFootervue_type_template_id_9ea4c4e0_render,
  SfFootervue_type_template_id_9ea4c4e0_staticRenderFns,
  false,
  SfFooter_injectStyles,
  null,
  "ccefb534"
  
)

/* harmony default export */ var SfFooter = (SfFooter_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AppFooter.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var AppFootervue_type_script_lang_js_ = ({
  components: {
    SfFooter: SfFooter,
    SfList: SfList["a" /* default */],
    SfImage: SfImage["a" /* default */],
    SfMenuItem: SfMenuItem["a" /* default */]
  },

  data() {
    return {
      aboutUs: ['Who we are', 'Quality in the details', 'Customer Reviews'],
      departments: ['Women fashion', 'Men fashion', 'Kidswear', 'Home'],
      help: ['Customer service', 'Size guide', 'Contact us'],
      paymentsDelivery: ['Purchase terms', 'Guarantee'],
      social: ['facebook', 'pinterest', 'twitter', 'youtube'],
      isMobile: false,
      desktopMin: 1024
    };
  }

});
// CONCATENATED MODULE: ./components/AppFooter.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_AppFootervue_type_script_lang_js_ = (AppFootervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/AppFooter.vue



function AppFooter_injectStyles (context) {
  
  var style0 = __webpack_require__(192)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var AppFooter_component = Object(componentNormalizer["a" /* default */])(
  components_AppFootervue_type_script_lang_js_,
  AppFootervue_type_template_id_0edd8b96_render,
  AppFootervue_type_template_id_0edd8b96_staticRenderFns,
  false,
  AppFooter_injectStyles,
  null,
  "2a5e5422"
  
)

/* harmony default export */ var AppFooter = (AppFooter_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/WishlistSidebar.vue?vue&type=template&id=9ad8508e&scoped=true&
var WishlistSidebarvue_type_template_id_9ad8508e_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"wishlist"}},[_c('SfSidebar',{staticClass:"sidebar sf-sidebar--right",attrs:{"visible":_vm.isWishlistSidebarOpen,"button":false,"title":"My Wishlist"},on:{"close":_vm.toggleWishlistSidebar},scopedSlots:_vm._u([{key:"title",fn:function(){return [_c('div',{staticClass:"heading__wrapper"},[_c('SfHeading',{staticClass:"sf-heading--left",attrs:{"level":3,"title":"My wishlist"}}),_vm._v(" "),_c('SfButton',{staticClass:"heading__close-button sf-button--pure",attrs:{"data-cy":"wishlist-sidebar-button_toggle-wishlist","aria-label":"Wishlist sidebar close button"},on:{"click":_vm.toggleWishlistSidebar}},[_c('SfIcon',{attrs:{"icon":"cross","size":"14px","color":"gray-primary"}})],1)],1)]},proxy:true}])},[_vm._v(" "),_c('transition',{attrs:{"name":"fade","mode":"out-in"}},[(_vm.totalItems)?_c('div',{key:"my-wishlist",staticClass:"my-wishlist"},[_c('div',{staticClass:"my-wishlist__total-items"},[_vm._v("Total items: "),_c('strong',[_vm._v(_vm._s(_vm.totalItems))])]),_vm._v(" "),_c('div',{staticClass:"collected-product-list"},[_c('transition-group',{attrs:{"name":"fade","tag":"div"}},_vm._l((_vm.products),function(product){return _c('SfCollectedProduct',{key:_vm.wishlistGetters.getItemSku(product),staticClass:"collected-product",attrs:{"data-cy":"collected-product-wishlist-sidebar","image":_vm.wishlistGetters.getItemImage(product),"title":_vm.wishlistGetters.getItemName(product),"regular-price":_vm.wishlistGetters.getFormattedPrice(_vm.wishlistGetters.getItemPrice(product).regular),"special-price":_vm.wishlistGetters.getFormattedPrice(_vm.wishlistGetters.getItemPrice(product).special),"stock":99999,"image-width":"180","image-height":"200"},on:{"click:remove":function($event){return _vm.removeFromWishlist(product)}},scopedSlots:_vm._u([{key:"configuration",fn:function(){return [_c('div',{staticClass:"collected-product__properties"},_vm._l((_vm.wishlistGetters.getItemAttributes(product, ['color', 'size'])),function(attribute,key){return _c('SfProperty',{key:key,attrs:{"name":key,"value":attribute}})}),1)]},proxy:true},{key:"input",fn:function(ref){return [_vm._v(" ")]}}],null,true)})}),1)],1),_vm._v(" "),_c('div',{staticClass:"sidebar-bottom"},[_c('SfProperty',{staticClass:"sf-property--full-width my-wishlist__total-price",scopedSlots:_vm._u([{key:"name",fn:function(){return [_c('span',{staticClass:"my-wishlist__total-price-label"},[_vm._v("Total price:")])]},proxy:true},{key:"value",fn:function(){return [_c('SfPrice',{attrs:{"regular":_vm.wishlistGetters.getFormattedPrice(_vm.totals.subtotal)}})]},proxy:true}],null,false,2587736091)})],1)]):_c('div',{key:"empty-wishlist",staticClass:"empty-wishlist"},[_c('div',{staticClass:"empty-wishlist__banner"},[_c('img',{staticClass:"empty-wishlist__icon",attrs:{"src":__webpack_require__(194),"alt":""}}),_vm._v(" "),_c('h3',{staticClass:"empty-wishlist__label"},[_vm._v("Your bag is empty")]),_vm._v(" "),_c('p',{staticClass:"empty-wishlist__description"},[_vm._v("\n            Looks like you haven’t added any items to the bag yet. Start\n            shopping to fill it in.\n          ")])]),_vm._v(" "),_c('SfButton',{staticClass:"sf-button--full-width color-secondary",attrs:{"data-cy":"wishlist-sidebar-btn_start-shopping"},on:{"click":_vm.toggleWishlistSidebar}},[_vm._v("Start shopping")])],1)])],1)],1)}
var WishlistSidebarvue_type_template_id_9ad8508e_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/WishlistSidebar.vue?vue&type=template&id=9ad8508e&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/WishlistSidebar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var WishlistSidebarvue_type_script_lang_js_ = ({
  name: 'Wishlist',
  components: {
    SfSidebar: SfSidebar["a" /* default */],
    SfButton: SfButton["a" /* default */],
    SfHeading: SfHeading["a" /* default */],
    SfIcon: SfIcon["a" /* default */],
    SfProperty: SfProperty["a" /* default */],
    SfPrice: SfPrice["a" /* default */],
    SfCollectedProduct: SfCollectedProduct["a" /* default */]
  },

  setup() {
    const {
      isWishlistSidebarOpen,
      toggleWishlistSidebar
    } = Object(composables["b" /* useUiState */])();
    const {
      wishlist,
      removeFromWishlist,
      loadWishlist
    } = Object(index_es["p" /* useWishlist */])();
    const {
      isAuthenticated
    } = Object(index_es["l" /* useUser */])();
    const products = Object(composition_api_["computed"])(() => index_es["t" /* wishlistGetters */].getItems(wishlist.value));
    const totals = Object(composition_api_["computed"])(() => index_es["t" /* wishlistGetters */].getTotals(wishlist.value));
    const totalItems = Object(composition_api_["computed"])(() => index_es["t" /* wishlistGetters */].getTotalItems(wishlist.value));
    Object(lib_index_es["onSSR"])(async () => {
      await loadWishlist();
    });
    return {
      isAuthenticated,
      products,
      removeFromWishlist,
      isWishlistSidebarOpen,
      toggleWishlistSidebar,
      totals,
      totalItems,
      wishlistGetters: index_es["t" /* wishlistGetters */]
    };
  }

});
// CONCATENATED MODULE: ./components/WishlistSidebar.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_WishlistSidebarvue_type_script_lang_js_ = (WishlistSidebarvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/WishlistSidebar.vue



function WishlistSidebar_injectStyles (context) {
  
  var style0 = __webpack_require__(195)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var WishlistSidebar_component = Object(componentNormalizer["a" /* default */])(
  components_WishlistSidebarvue_type_script_lang_js_,
  WishlistSidebarvue_type_template_id_9ad8508e_scoped_true_render,
  WishlistSidebarvue_type_template_id_9ad8508e_scoped_true_staticRenderFns,
  false,
  WishlistSidebar_injectStyles,
  "9ad8508e",
  "74dcea46"
  
)

/* harmony default export */ var WishlistSidebar = (WishlistSidebar_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






 // const CartSidebar = () => import(/* webpackChunkName: "CartSidebar" */ '~/components/CartSidebar.vue')
// const LoginModal = () => import(/* webpackChunkName: "LoginModal" */ '~/components/LoginModal.vue')

/* harmony default export */ var defaultvue_type_script_lang_js_ = ({
  components: {
    TopBar: TopBar,
    AppHeader: AppHeader,
    BottomNavigation: BottomNavigation,
    AppFooter: AppFooter,
    CartSidebar: CartSidebar,
    WishlistSidebar: WishlistSidebar,
    LoginModal: LoginModal
  }
});
// CONCATENATED MODULE: ./layouts/default.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_defaultvue_type_script_lang_js_ = (defaultvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./layouts/default.vue



function default_injectStyles (context) {
  
  var style0 = __webpack_require__(197)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var default_component = Object(componentNormalizer["a" /* default */])(
  layouts_defaultvue_type_script_lang_js_,
  defaultvue_type_template_id_5f93023e_render,
  defaultvue_type_template_id_5f93023e_staticRenderFns,
  false,
  default_injectStyles,
  null,
  "54c79832"
  
)

/* harmony default export */ var layouts_default = (default_component.exports);
// CONCATENATED MODULE: ./.nuxt/App.js







const layouts = {
  "_account": sanitizeComponent(account),
  "_default": sanitizeComponent(layouts_default)
};
/* harmony default export */ var App = ({
  render(h, props) {
    const loadingEl = h('NuxtLoading', {
      ref: 'loading'
    });
    const layoutEl = h(this.layout || 'nuxt');
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl]);
    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll');
          });
        }

      }
    }, [templateEl]);
    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [loadingEl, transitionEl]);
  },

  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: '',
    nbFetching: 0
  }),

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$options.nuxt);
  },

  created() {
    // Add this.$nuxt in child instances
    this.$root.$options.$nuxt = this;

    if (false) {} // Add $nuxt.error()


    this.error = this.nuxt.error; // Add $nuxt.context

    this.context = this.$options.context;
  },

  async mounted() {
    this.$loading = this.$refs.loading;
  },

  watch: {
    'nuxt.err': 'errorChanged'
  },
  computed: {
    isOffline() {
      return !this.isOnline;
    },

    isFetching() {
      return this.nbFetching > 0;
    },

    isPreview() {
      return Boolean(this.$options.previewData);
    }

  },
  methods: {
    refreshOnlineStatus() {
      if (false) {}
    },

    async refresh() {
      const pages = getMatchedComponentsInstances(this.$route);

      if (!pages.length) {
        return;
      }

      this.$loading.start();
      const promises = pages.map(page => {
        const p = []; // Old fetch

        if (page.$options.fetch && page.$options.fetch.length) {
          p.push(promisify(page.$options.fetch, this.context));
        }

        if (page.$fetch) {
          p.push(page.$fetch());
        } else {
          // Get all component instance to call $fetch
          for (const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)) {
            p.push(component.$fetch());
          }
        }

        if (page.$options.asyncData) {
          p.push(promisify(page.$options.asyncData, this.context).then(newData => {
            for (const key in newData) {
              external_vue_default.a.set(page.$data, key, newData[key]);
            }
          }));
        }

        return Promise.all(p);
      });

      try {
        await Promise.all(promises);
      } catch (error) {
        this.$loading.fail(error);
        globalHandleError(error);
        this.error(error);
      }

      this.$loading.finish();
    },

    errorChanged() {
      if (this.nuxt.err) {
        if (this.$loading) {
          if (this.$loading.fail) {
            this.$loading.fail(this.nuxt.err);
          }

          if (this.$loading.finish) {
            this.$loading.finish();
          }
        }

        let errorLayout = (layouts_error.options || layouts_error).layout;

        if (typeof errorLayout === 'function') {
          errorLayout = errorLayout(this.context);
        }

        this.setLayout(errorLayout);
      }
    },

    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      this.layoutName = layout;
      this.layout = layouts['_' + layout];
      return this.layout;
    },

    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      return Promise.resolve(layouts['_' + layout]);
    }

  },
  components: {
    NuxtLoading: nuxt_loading
  }
});
// EXTERNAL MODULE: ./.nuxt/empty.js
var _nuxt_empty = __webpack_require__(199);

// EXTERNAL MODULE: external "cookie-universal"
var external_cookie_universal_ = __webpack_require__(95);
var external_cookie_universal_default = /*#__PURE__*/__webpack_require__.n(external_cookie_universal_);

// CONCATENATED MODULE: ./.nuxt/cookie-universal-nuxt.js

/* harmony default export */ var cookie_universal_nuxt = (({
  req,
  res
}, inject) => {
  const options = {
    "alias": "cookies",
    "parseJSON": true
  };
  inject(options.alias, external_cookie_universal_default()(req, res, options.parseJSON));
});
// EXTERNAL MODULE: ./.nuxt/nuxt-i18n/options.js
var nuxt_i18n_options = __webpack_require__(2);

// CONCATENATED MODULE: ./.nuxt/nuxt-i18n/seo-head.js


const nuxtI18nSeo = function () {
  if (!(external_vue_meta_default.a.hasMetaInfo ? external_vue_meta_default.a.hasMetaInfo(this) : this._hasMetaInfo) || !this.$i18n || !this.$i18n.locale || !this.$i18n.locales || this.$options[nuxt_i18n_options["a" /* COMPONENT_OPTIONS_KEY */]] === false || this.$options[nuxt_i18n_options["a" /* COMPONENT_OPTIONS_KEY */]] && this.$options[nuxt_i18n_options["a" /* COMPONENT_OPTIONS_KEY */]].seo === false) {
    return {};
  }

  const metaObject = {
    htmlAttrs: {},
    link: [],
    meta: []
  };
  const currentLocale = this.$i18n.locales.find(l => codeFromLocale(l) === this.$i18n.locale);
  const currentLocaleIso = isoFromLocale(currentLocale);

  if (currentLocale && currentLocaleIso) {
    metaObject.htmlAttrs.lang = currentLocaleIso; // TODO: simple lang or "specific" lang with territory?
  }

  addHreflangLinks.bind(this)(this.$i18n.locales, this.$i18n.__baseUrl, metaObject.link);
  addCanonicalLinks.bind(this)(this.$i18n.__baseUrl, metaObject.link);
  addCurrentOgLocale.bind(this)(currentLocale, currentLocaleIso, metaObject.meta);
  addAlternateOgLocales.bind(this)(this.$i18n.locales, currentLocaleIso, metaObject.meta);
  return metaObject;
};

function addHreflangLinks(locales, baseUrl, link) {
  if (nuxt_i18n_options["t" /* strategy */] === nuxt_i18n_options["g" /* STRATEGIES */].NO_PREFIX) {
    return;
  }

  const localeMap = new Map();

  for (const locale of locales) {
    const localeIso = isoFromLocale(locale);

    if (!localeIso) {
      // eslint-disable-next-line no-console
      console.warn(`[${nuxt_i18n_options["f" /* MODULE_NAME */]}] Locale ISO code is required to generate alternate link`);
      continue;
    }

    const [language, region] = localeIso.split('-');

    if (language && region && (locale.isCatchallLocale || !localeMap.has(language))) {
      localeMap.set(language, locale);
    }

    localeMap.set(localeIso, locale);
  }

  for (const [iso, mapLocale] of localeMap.entries()) {
    link.push({
      hid: `i18n-alt-${iso}`,
      rel: 'alternate',
      href: baseUrl + this.switchLocalePath(mapLocale.code),
      hreflang: iso
    });
  }

  if (nuxt_i18n_options["j" /* defaultLocale */]) {
    link.push({
      hid: 'i18n-xd',
      rel: 'alternate',
      href: baseUrl + this.switchLocalePath(nuxt_i18n_options["j" /* defaultLocale */]),
      hreflang: 'x-default'
    });
  }
}

function addCanonicalLinks(baseUrl, link) {
  const currentRoute = this.localeRoute({ ...this.$route,
    name: this.getRouteBaseName()
  });
  const canonicalPath = currentRoute ? currentRoute.path : null;

  if (!canonicalPath) {
    return;
  }

  link.push({
    hid: 'i18n-can',
    rel: 'canonical',
    href: baseUrl + canonicalPath
  });
}

function addCurrentOgLocale(currentLocale, currentLocaleIso, meta) {
  const hasCurrentLocaleAndIso = currentLocale && currentLocaleIso;

  if (!hasCurrentLocaleAndIso) {
    return;
  }

  meta.push({
    hid: 'i18n-og',
    property: 'og:locale',
    // Replace dash with underscore as defined in spec: language_TERRITORY
    content: underscoreIsoFromLocale(currentLocale)
  });
}

function addAlternateOgLocales(locales, currentLocaleIso, meta) {
  const localesWithoutCurrent = locales.filter(locale => {
    const localeIso = isoFromLocale(locale);
    return localeIso && localeIso !== currentLocaleIso;
  });
  const alternateLocales = localesWithoutCurrent.map(locale => ({
    hid: `i18n-og-alt-${isoFromLocale(locale)}`,
    property: 'og:locale:alternate',
    content: underscoreIsoFromLocale(locale)
  }));
  meta.push(...alternateLocales);
}

function isoFromLocale(locale) {
  return locale[nuxt_i18n_options["e" /* LOCALE_ISO_KEY */]];
}

function underscoreIsoFromLocale(locale) {
  return isoFromLocale(locale).replace(/-/g, '_');
}

function codeFromLocale(locale) {
  return locale[nuxt_i18n_options["b" /* LOCALE_CODE_KEY */]];
}
// CONCATENATED MODULE: ./.nuxt/nuxt-i18n/plugin.seo.js


const plugin_seo_plugin = {
  install(Vue) {
    Vue.mixin({
      head: nuxtI18nSeo
    });
  }

};
external_vue_default.a.use(plugin_seo_plugin);
// CONCATENATED MODULE: ./.nuxt/nuxt-i18n/middleware.js

/** @type {import('@nuxt/types').Middleware} */

_nuxt_middleware.nuxti18n = async context => {
  const {
    app,
    isHMR
  } = context;

  if (isHMR) {
    return;
  }

  const [status, redirectPath, preserveQuery] = await app.i18n.__onNavigate(context.route);

  if (status && redirectPath) {
    const query = preserveQuery ? context.route.query : undefined;
    context.redirect(status, redirectPath, query);
  }
};
// CONCATENATED MODULE: ./.nuxt/nuxt-i18n/plugin.routing.js




function localePath(route, locale) {
  const localizedRoute = localeRoute.call(this, route, locale);

  if (!localizedRoute) {
    return;
  }

  return localizedRoute.fullPath;
}

function localeRoute(route, locale) {
  // Abort if no route or no locale
  if (!route) {
    return;
  }

  const {
    i18n
  } = this;
  locale = locale || i18n.locale;

  if (!locale) {
    return;
  } // If route parameter is a string, check if it's a path or name of route.


  if (typeof route === 'string') {
    if (route[0] === '/') {
      // If route parameter is a path, create route object with path.
      route = {
        path: route
      };
    } else {
      // Else use it as route name.
      route = {
        name: route
      };
    }
  }

  const localizedRoute = Object.assign({}, route);

  if (route.path && !route.name) {
    const isDefaultLocale = locale === nuxt_i18n_options["j" /* defaultLocale */]; // if route has a path defined but no name, resolve full route using the path

    const isPrefixed = // don't prefix default locale
    !(isDefaultLocale && [nuxt_i18n_options["g" /* STRATEGIES */].PREFIX_EXCEPT_DEFAULT, nuxt_i18n_options["g" /* STRATEGIES */].PREFIX_AND_DEFAULT].includes(nuxt_i18n_options["t" /* strategy */])) && // no prefix for any language
    !(nuxt_i18n_options["t" /* strategy */] === nuxt_i18n_options["g" /* STRATEGIES */].NO_PREFIX) && // no prefix for different domains
    !i18n.differentDomains;
    let path = isPrefixed ? `/${locale}${route.path}` : route.path;
    path = path.replace(/\/+$/, '') + (nuxt_i18n_options["u" /* trailingSlash */] ? '/' : '') || '/';
    localizedRoute.path = path;
  } else {
    if (!route.name && !route.path) {
      localizedRoute.name = this.getRouteBaseName();
    }

    localizedRoute.name = getLocaleRouteName(localizedRoute.name, locale);
    const {
      params
    } = localizedRoute;

    if (params && params['0'] === undefined && params.pathMatch) {
      params['0'] = params.pathMatch;
    }
  }

  return this.router.resolve(localizedRoute).route;
}

function switchLocalePath(locale) {
  const name = this.getRouteBaseName();

  if (!name) {
    return '';
  }

  const {
    i18n,
    route,
    store
  } = this;

  if (!route) {
    return '';
  }

  const {
    params,
    ...routeCopy
  } = route;
  let langSwitchParams = {};

  if (nuxt_i18n_options["w" /* vuex */] && nuxt_i18n_options["w" /* vuex */].syncRouteParams && store) {
    langSwitchParams = store.getters[`${nuxt_i18n_options["w" /* vuex */].moduleName}/localeRouteParams`](locale);
  }

  const baseRoute = Object.assign({}, routeCopy, {
    name,
    params: { ...params,
      ...langSwitchParams,
      0: params.pathMatch
    }
  });
  let path = this.localePath(baseRoute, locale); // Handle different domains

  if (i18n.differentDomains) {
    const lang = i18n.locales.find(l => l[nuxt_i18n_options["b" /* LOCALE_CODE_KEY */]] === locale);

    if (lang && lang[nuxt_i18n_options["c" /* LOCALE_DOMAIN_KEY */]]) {
      let protocol;

      if (true) {
        const isHTTPS = __webpack_require__(200);

        protocol = this.req && isHTTPS(this.req) ? 'https' : 'http';
      } else {}

      path = protocol + '://' + lang[nuxt_i18n_options["c" /* LOCALE_DOMAIN_KEY */]] + path;
    } else {
      // eslint-disable-next-line no-console
      console.warn(`[${nuxt_i18n_options["f" /* MODULE_NAME */]}] Could not find domain name for locale ${locale}`);
    }
  }

  return path;
}

function getRouteBaseName(givenRoute) {
  const route = givenRoute !== undefined ? givenRoute : this.route;

  if (!route || !route.name) {
    return null;
  }

  return route.name.split(nuxt_i18n_options["s" /* routesNameSeparator */])[0];
}

function getLocaleRouteName(routeName, locale) {
  let name = routeName + (nuxt_i18n_options["t" /* strategy */] === nuxt_i18n_options["g" /* STRATEGIES */].NO_PREFIX ? '' : nuxt_i18n_options["s" /* routesNameSeparator */] + locale);

  if (locale === nuxt_i18n_options["j" /* defaultLocale */] && nuxt_i18n_options["t" /* strategy */] === nuxt_i18n_options["g" /* STRATEGIES */].PREFIX_AND_DEFAULT) {
    name += nuxt_i18n_options["s" /* routesNameSeparator */] + nuxt_i18n_options["k" /* defaultLocaleRouteNameSuffix */];
  }

  return name;
}

const VueInstanceProxy = function (targetFunction) {
  return function () {
    const proxy = {
      getRouteBaseName: this.getRouteBaseName,
      i18n: this.$i18n,
      localePath: this.localePath,
      req:  true ? this.$ssrContext.req : undefined,
      route: this.$route,
      router: this.$router,
      store: this.$store
    };
    return targetFunction.apply(proxy, arguments);
  };
};

const NuxtContextProxy = function (context, targetFunction) {
  return function () {
    const {
      app,
      req,
      route,
      store
    } = context;
    const proxy = {
      getRouteBaseName: app.getRouteBaseName,
      i18n: app.i18n,
      localePath: app.localePath,
      req:  true ? req : undefined,
      route,
      router: app.router,
      store
    };
    return targetFunction.apply(proxy, arguments);
  };
};

const plugin_routing_plugin = {
  install(Vue) {
    Vue.mixin({
      methods: {
        localePath: VueInstanceProxy(localePath),
        localeRoute: VueInstanceProxy(localeRoute),
        switchLocalePath: VueInstanceProxy(switchLocalePath),
        getRouteBaseName: VueInstanceProxy(getRouteBaseName)
      }
    });
  }

};
/* harmony default export */ var plugin_routing = (context => {
  external_vue_default.a.use(plugin_routing_plugin);
  const {
    app
  } = context;
  app.localePath = NuxtContextProxy(context, localePath);
  app.localeRoute = NuxtContextProxy(context, localeRoute);
  app.switchLocalePath = NuxtContextProxy(context, switchLocalePath);
  app.getRouteBaseName = NuxtContextProxy(context, getRouteBaseName);
});
// EXTERNAL MODULE: external "vue-i18n"
var external_vue_i18n_ = __webpack_require__(34);
var external_vue_i18n_default = /*#__PURE__*/__webpack_require__.n(external_vue_i18n_);

// EXTERNAL MODULE: external "cookie"
var external_cookie_ = __webpack_require__(35);
var external_cookie_default = /*#__PURE__*/__webpack_require__.n(external_cookie_);

// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__(201);

// CONCATENATED MODULE: ./.nuxt/nuxt-i18n/utils-common.js


/**
 * Parses locales provided from browser through `accept-language` header.
 * @param {string} input
 * @return {string[]} An array of locale codes. Priority determined by order in array.
 */

const parseAcceptLanguage = input => {
  // Example input: en-US,en;q=0.9,nb;q=0.8,no;q=0.7
  // Contains tags separated by comma.
  // Each tag consists of locale code (2-3 letter language code) and optionally country code
  // after dash. Tag can also contain score after semicolon, that is assumed to match order
  // so it's not explicitly used.
  return input.split(',').map(tag => tag.split(';')[0]);
};
/**
 * Find locale code that best matches provided list of browser locales.
 * @param {(string[]|Object[])} appLocales The user-configured locale codes that are to be matched.
 * @param {string[]} browserLocales The locales to match against configured.
 * @return {string|undefined}
 */

const matchBrowserLocale = (appLocales, browserLocales) => {
  /** @type {{ code: string, score: number }[]} */
  const matchedLocales = []; // Normalise appLocales input

  appLocales = appLocales.map(appLocale => ({
    code: typeof appLocale === 'string' ? appLocale : appLocale.code,
    iso: typeof appLocale === 'string' ? appLocale : appLocale.iso || appLocale.code
  })); // First pass: match exact locale.

  for (const [index, browserCode] of browserLocales.entries()) {
    const matchedLocale = appLocales.find(appLocale => appLocale.iso.toLowerCase() === browserCode.toLowerCase());

    if (matchedLocale) {
      matchedLocales.push({
        code: matchedLocale.code,
        score: 1 - index / browserLocales.length
      });
      break;
    }
  } // Second pass: match only locale code part of the browser locale (not including country).


  for (const [index, browserCode] of browserLocales.entries()) {
    const languageCode = browserCode.split('-')[0].toLowerCase();
    const matchedLocale = appLocales.find(appLocale => appLocale.iso.split('-')[0].toLowerCase() === languageCode);

    if (matchedLocale) {
      // Deduct a thousandth for being non-exact match.
      matchedLocales.push({
        code: matchedLocale.code,
        score: 0.999 - index / browserLocales.length
      });
      break;
    }
  } // Sort the list by score (0 - lowest, 1 - highest).


  if (matchedLocales.length > 1) {
    matchedLocales.sort((localeA, localeB) => {
      if (localeA.score === localeB.score) {
        // If scores are equal then pick more specific (longer) code.
        return localeB.code.length - localeA.code.length;
      }

      return localeB.score - localeA.score;
    });
  }

  return matchedLocales.length ? matchedLocales[0].code : undefined;
};
/**
 * Resolves base URL value if provided as function. Otherwise just returns verbatim.
 * @param {string | function} baseUrl
 * @param {import('@nuxt/types').Context} context
 * @return {string}
 */

const resolveBaseUrl = (baseUrl, context) => {
  if (typeof baseUrl === 'function') {
    return baseUrl(context);
  }

  return baseUrl;
};
/**
 * Get locale code that corresponds to current hostname
 * @param  {object} locales
 * @param  {object} [req] Request object
 * @param  {{ localDomainKey: string, localeCodeKey: string }} options
 * @return {string | null} Locade code found if any
 */

const getLocaleDomain = (locales, req, {
  localDomainKey,
  localeCodeKey
}) => {
  let host = null;

  if (false) {} else if (req) {
    host = req.headers['x-forwarded-host'] || req.headers.host;
  }

  if (host) {
    const matchingLocale = locales.find(l => l[localDomainKey] === host);

    if (matchingLocale) {
      return matchingLocale[localeCodeKey];
    }
  }

  return null;
};
/**
 * Creates a RegExp for route paths
 * @param  {string[]} localeCodes
 * @return {RegExp}
 */

const getLocalesRegex = localeCodes => new RegExp(`^/(${localeCodes.join('|')})(?:/|$)`, 'i');
/**
 * Creates getter for getLocaleFromRoute
 * @param  {string[]} localeCodes
 * @param  {{ routesNameSeparator: string, defaultLocaleRouteNameSuffix: string }} options
 * @return {(route) => string| null}
 */

const createLocaleFromRouteGetter = (localeCodes, {
  routesNameSeparator,
  defaultLocaleRouteNameSuffix
}) => {
  const localesPattern = `(${localeCodes.join('|')})`;
  const defaultSuffixPattern = `(?:${routesNameSeparator}${defaultLocaleRouteNameSuffix})?`;
  const regexpName = new RegExp(`${routesNameSeparator}${localesPattern}${defaultSuffixPattern}$`, 'i');
  const regexpPath = getLocalesRegex(localeCodes);
  /**
   * Extract locale code from given route:
   * - If route has a name, try to extract locale from it
   * - Otherwise, fall back to using the routes'path
   * @param  {Object} route
   * @param  {string[]} localeCodes
   * @param  {{ routesNameSeparator: string, defaultLocaleRouteNameSuffix: string }} options
   * @return {string | null} Locale code found if any
   */

  const getLocaleFromRoute = route => {
    // Extract from route name
    if (route.name) {
      const matches = route.name.match(regexpName);

      if (matches && matches.length > 1) {
        return matches[1];
      }
    } else if (route.path) {
      // Extract from path
      const matches = route.path.match(regexpPath);

      if (matches && matches.length > 1) {
        return matches[1];
      }
    }

    return null;
  };

  return getLocaleFromRoute;
};
/**
 * @param {object} [req]
 * @param {{ useCookie: boolean, localeCodes: string[], cookieKey: string}} options
 * @return {string | void}
 */

const getLocaleCookie = (req, {
  useCookie,
  cookieKey,
  localeCodes
}) => {
  if (useCookie) {
    let localeCode;

    if (false) {} else if (req && typeof req.headers.cookie !== 'undefined') {
      const cookies = req.headers && req.headers.cookie ? external_cookie_default.a.parse(req.headers.cookie) : {};
      localeCode = cookies[cookieKey];
    }

    if (localeCodes.includes(localeCode)) {
      return localeCode;
    }
  }
};
/**
 * @param {string} locale
 * @param {object} [res]
 * @param {{ useCookie: boolean, cookieDomain: string, cookieKey: string, cookieSecure: boolean, cookieCrossOrigin: boolean}} options
 */

const setLocaleCookie = (locale, res, {
  useCookie,
  cookieDomain,
  cookieKey,
  cookieSecure,
  cookieCrossOrigin
}) => {
  if (!useCookie) {
    return;
  }

  const date = new Date();
  const cookieOptions = {
    expires: new Date(date.setDate(date.getDate() + 365)),
    path: '/',
    sameSite: cookieCrossOrigin ? 'none' : 'lax',
    secure: cookieCrossOrigin || cookieSecure
  };

  if (cookieDomain) {
    cookieOptions.domain = cookieDomain;
  }

  if (false) {} else if (res) {
    let headers = res.getHeader('Set-Cookie') || [];

    if (typeof headers === 'string') {
      headers = [headers];
    }

    const redirectCookie = external_cookie_default.a.serialize(cookieKey, locale, cookieOptions);
    headers.push(redirectCookie);
    res.setHeader('Set-Cookie', headers);
  }
};
const registerStore = (store, vuex, localeCodes, moduleName) => {
  store.registerModule(vuex.moduleName, {
    namespaced: true,
    state: () => ({ ...(vuex.syncLocale ? {
        locale: ''
      } : {}),
      ...(vuex.syncMessages ? {
        messages: {}
      } : {}),
      ...(vuex.syncRouteParams ? {
        routeParams: {}
      } : {})
    }),
    actions: { ...(vuex.syncLocale ? {
        setLocale({
          commit
        }, locale) {
          commit('setLocale', locale);
        }

      } : {}),
      ...(vuex.syncMessages ? {
        setMessages({
          commit
        }, messages) {
          commit('setMessages', messages);
        }

      } : {}),
      ...(vuex.syncRouteParams ? {
        setRouteParams({
          commit
        }, params) {
          if (false) {}

          commit('setRouteParams', params);
        }

      } : {})
    },
    mutations: { ...(vuex.syncLocale ? {
        setLocale(state, locale) {
          state.locale = locale;
        }

      } : {}),
      ...(vuex.syncMessages ? {
        setMessages(state, messages) {
          state.messages = messages;
        }

      } : {}),
      ...(vuex.syncRouteParams ? {
        setRouteParams(state, params) {
          state.routeParams = params;
        }

      } : {})
    },
    getters: { ...(vuex.syncRouteParams ? {
        localeRouteParams: ({
          routeParams
        }) => locale => routeParams[locale] || {}
      } : {})
    }
  }, {
    preserveState: !!store.state[vuex.moduleName]
  });
};
/**
 * Dispatch store module actions to keep it in sync with app's locale data
 * @param  {Store} store     Vuex store
 * @param  {String} locale   Current locale
 * @param  {Object} messages Current messages
 * @param  {{ vuex: object }} options
 * @return {Promise(void)}
 */

const syncVuex = async (store, locale = null, messages = null, {
  vuex
}) => {
  if (vuex && store) {
    if (locale !== null && vuex.syncLocale) {
      await store.dispatch(vuex.moduleName + '/setLocale', locale);
    }

    if (messages !== null && vuex.syncMessages) {
      await store.dispatch(vuex.moduleName + '/setMessages', messages);
    }
  }
};

const isObject = value => value && !Array.isArray(value) && typeof value === 'object';
/**
 * Validate setRouteParams action's payload
 * @param {object} routeParams The action's payload
 * @param {string[]} localeCodes
 * @param {string} moduleName
 */


const validateRouteParams = (routeParams, localeCodes, moduleName) => {
  if (!isObject(routeParams)) {
    // eslint-disable-next-line no-console
    console.warn(`[${moduleName}] Route params should be an object`);
    return;
  }

  for (const [key, value] of Object.entries(routeParams)) {
    if (!localeCodes.includes(key)) {
      // eslint-disable-next-line no-console
      console.warn(`[${moduleName}] Trying to set route params for key ${key} which is not a valid locale`);
    } else if (!isObject(value)) {
      // eslint-disable-next-line no-console
      console.warn(`[${moduleName}] Trying to set route params for locale ${key} with a non-object value`);
    }
  }
};
// EXTERNAL MODULE: ./node_modules/klona/full/index.js
var full = __webpack_require__(36);

// CONCATENATED MODULE: ./.nuxt/nuxt-i18n/plugin.main.js






external_vue_default.a.use(external_vue_i18n_default.a);
const {
  alwaysRedirect,
  onlyOnNoPrefix,
  onlyOnRoot,
  fallbackLocale
} = nuxt_i18n_options["l" /* detectBrowserLanguage */];
const getLocaleFromRoute = createLocaleFromRouteGetter(nuxt_i18n_options["o" /* localeCodes */], {
  routesNameSeparator: nuxt_i18n_options["s" /* routesNameSeparator */],
  defaultLocaleRouteNameSuffix: nuxt_i18n_options["k" /* defaultLocaleRouteNameSuffix */]
});
/** @type {import('@nuxt/types').Plugin} */

/* harmony default export */ var plugin_main = (async context => {
  const {
    app,
    route,
    store,
    req,
    res,
    redirect
  } = context;

  if (nuxt_i18n_options["w" /* vuex */] && store) {
    registerStore(store, nuxt_i18n_options["w" /* vuex */], nuxt_i18n_options["o" /* localeCodes */], nuxt_i18n_options["f" /* MODULE_NAME */]);
  }

  if ( true && nuxt_i18n_options["n" /* lazy */]) {
    context.beforeNuxtRender(({
      nuxtState
    }) => {
      const langs = {};
      const {
        fallbackLocale,
        locale
      } = app.i18n;

      if (locale) {
        langs[locale] = app.i18n.getLocaleMessage(locale);
      }

      if (fallbackLocale && locale !== fallbackLocale) {
        langs[fallbackLocale] = app.i18n.getLocaleMessage(fallbackLocale);
      }

      nuxtState.__i18n = {
        langs
      };
    });
  }

  const {
    useCookie,
    cookieKey,
    cookieDomain,
    cookieSecure,
    cookieCrossOrigin
  } = nuxt_i18n_options["l" /* detectBrowserLanguage */];

  const loadAndSetLocale = async (newLocale, {
    initialSetup = false
  } = {}) => {
    // Abort if different domains option enabled
    if (!initialSetup && app.i18n.differentDomains) {
      return;
    } // Abort if newLocale did not change


    if (newLocale === app.i18n.locale) {
      return;
    }

    const oldLocale = app.i18n.locale;

    if (!initialSetup) {
      app.i18n.beforeLanguageSwitch(oldLocale, newLocale);
    }

    if (useCookie) {
      app.i18n.setLocaleCookie(newLocale);
    } // Lazy-loading enabled


    if (nuxt_i18n_options["n" /* lazy */]) {
      const {
        loadLanguageAsync
      } = __webpack_require__(202);

      const i18nFallbackLocale = app.i18n.fallbackLocale; // Load fallback locale(s).

      if (i18nFallbackLocale) {
        let localesToLoadPromises = [];

        if (Array.isArray(i18nFallbackLocale)) {
          localesToLoadPromises = i18nFallbackLocale.map(fbLocale => loadLanguageAsync(context, fbLocale));
        } else if (typeof i18nFallbackLocale === 'object') {
          if (i18nFallbackLocale[newLocale]) {
            localesToLoadPromises = localesToLoadPromises.concat(i18nFallbackLocale[newLocale].map(fbLocale => loadLanguageAsync(context, fbLocale)));
          }

          if (i18nFallbackLocale.default) {
            localesToLoadPromises = localesToLoadPromises.concat(i18nFallbackLocale.default.map(fbLocale => loadLanguageAsync(context, fbLocale)));
          }
        } else if (newLocale !== i18nFallbackLocale) {
          localesToLoadPromises.push(loadLanguageAsync(context, i18nFallbackLocale));
        }

        await Promise.all(localesToLoadPromises);
      }

      await loadLanguageAsync(context, newLocale);
    }

    app.i18n.locale = newLocale;
    app.i18n.localeProperties = Object(full["klona"])(nuxt_i18n_options["p" /* locales */].find(l => l[nuxt_i18n_options["b" /* LOCALE_CODE_KEY */]] === newLocale) || {
      code: newLocale
    });
    await syncVuex(store, newLocale, app.i18n.getLocaleMessage(newLocale), {
      vuex: nuxt_i18n_options["w" /* vuex */]
    }); // Must retrieve from context as it might have changed since plugin initialization.

    const {
      route
    } = context;
    const redirectPath = getRedirectPathForLocale(route, newLocale);

    if (initialSetup) {
      // Redirect will be delayed until middleware runs as redirecting from plugin does not
      // work in SPA (https://github.com/nuxt/nuxt.js/issues/4491).
      app.i18n.__redirect = redirectPath;
    } else {
      app.i18n.onLanguageSwitched(oldLocale, newLocale);

      if (redirectPath) {
        redirect(redirectPath);
      }
    }
  };

  const getRedirectPathForLocale = (route, locale) => {
    // Redirects are ignored if it is a nuxt generate.
    if (true) {
      return '';
    }

    if (!locale || app.i18n.differentDomains || nuxt_i18n_options["t" /* strategy */] === nuxt_i18n_options["g" /* STRATEGIES */].NO_PREFIX) {
      return '';
    }

    if (getLocaleFromRoute(route) === locale) {
      // If "onlyOnRoot" or "onlyOnNoPrefix" is set and strategy is "prefix_and_default", prefer unprefixed route for
      // default locale.
      if (!(onlyOnRoot || onlyOnNoPrefix) || locale !== nuxt_i18n_options["j" /* defaultLocale */] || nuxt_i18n_options["t" /* strategy */] !== nuxt_i18n_options["g" /* STRATEGIES */].PREFIX_AND_DEFAULT) {
        return '';
      }
    } // At this point we are left with route that either has no or different locale.


    let redirectPath = app.switchLocalePath(locale);

    if (!redirectPath) {
      // Current route could be 404 in which case attempt to find matching route for given locale.
      redirectPath = app.localePath(route.fullPath, locale);
    }

    if (redirectPath === route.fullPath) {
      return '';
    }

    return redirectPath;
  }; // Called by middleware on navigation (also on the initial one).


  const onNavigate = async route => {
    // Handle root path redirect
    if (route.path === '/' && nuxt_i18n_options["r" /* rootRedirect */]) {
      let statusCode = 302;
      let path = nuxt_i18n_options["r" /* rootRedirect */];

      if (typeof nuxt_i18n_options["r" /* rootRedirect */] !== 'string') {
        statusCode = nuxt_i18n_options["r" /* rootRedirect */].statusCode;
        path = nuxt_i18n_options["r" /* rootRedirect */].path;
      }

      return [statusCode, `/${path}`,
      /* preserve query */
      true];
    }

    const storedRedirect = app.i18n.__redirect;

    if (storedRedirect) {
      app.i18n.__redirect = null;
      return [302, storedRedirect];
    }

    app.i18n.__baseUrl = resolveBaseUrl(nuxt_i18n_options["h" /* baseUrl */], context);
    const finalLocale = nuxt_i18n_options["l" /* detectBrowserLanguage */] && doDetectBrowserLanguage(route) || getLocaleFromRoute(route) || app.i18n.locale || app.i18n.defaultLocale || '';
    await app.i18n.setLocale(finalLocale);
    return [null, null];
  };

  const getBrowserLocale = () => {
    if (false) {} else if (req && typeof req.headers['accept-language'] !== 'undefined') {
      return matchBrowserLocale(nuxt_i18n_options["p" /* locales */], parseAcceptLanguage(req.headers['accept-language']));
    } else {
      return undefined;
    }
  };

  const doDetectBrowserLanguage = route => {
    // Browser detection is ignored if it is a nuxt generate.
    if (true) {
      return false;
    }

    if (nuxt_i18n_options["t" /* strategy */] !== nuxt_i18n_options["g" /* STRATEGIES */].NO_PREFIX) {
      if (onlyOnRoot) {
        if (route.path !== '/') {
          return false;
        }
      } else if (onlyOnNoPrefix) {
        if (!alwaysRedirect && route.path.match(getLocalesRegex(nuxt_i18n_options["o" /* localeCodes */]))) {
          return false;
        }
      }
    }

    let matchedLocale;

    if (useCookie && (matchedLocale = app.i18n.getLocaleCookie())) {// Get preferred language from cookie if present and enabled
    } else {
      // Try to get locale from either navigator or header detection
      matchedLocale = getBrowserLocale();
    }

    const finalLocale = matchedLocale || fallbackLocale; // Handle cookie option to prevent multiple redirections

    if (finalLocale && (!useCookie || alwaysRedirect || !app.i18n.getLocaleCookie())) {
      if (finalLocale !== app.i18n.locale) {
        return finalLocale;
      }
    }

    return false;
  };

  const extendVueI18nInstance = i18n => {
    i18n.locales = nuxt_i18n_options["p" /* locales */];
    i18n.defaultLocale = nuxt_i18n_options["j" /* defaultLocale */];
    i18n.differentDomains = nuxt_i18n_options["m" /* differentDomains */];
    i18n.beforeLanguageSwitch = nuxt_i18n_options["i" /* beforeLanguageSwitch */];
    i18n.onLanguageSwitched = nuxt_i18n_options["q" /* onLanguageSwitched */];

    i18n.setLocaleCookie = locale => setLocaleCookie(locale, res, {
      useCookie,
      cookieDomain,
      cookieKey,
      cookieSecure,
      cookieCrossOrigin
    });

    i18n.getLocaleCookie = () => getLocaleCookie(req, {
      useCookie,
      cookieKey,
      localeCodes: nuxt_i18n_options["o" /* localeCodes */]
    });

    i18n.setLocale = locale => loadAndSetLocale(locale);

    i18n.getBrowserLocale = () => getBrowserLocale();

    i18n.__baseUrl = app.i18n.__baseUrl;
  }; // Set instance options


  const vueI18nOptions = typeof nuxt_i18n_options["v" /* vueI18n */] === 'function' ? Object(nuxt_i18n_options["v" /* vueI18n */])(context) : Object(full["klona"])(nuxt_i18n_options["v" /* vueI18n */]);
  vueI18nOptions.componentInstanceCreatedListener = extendVueI18nInstance;
  app.i18n = new external_vue_i18n_default.a(vueI18nOptions); // Initialize locale and fallbackLocale as vue-i18n defaults those to 'en-US' if falsey

  app.i18n.locale = '';
  app.i18n.localeProperties = {
    code: ''
  };
  app.i18n.fallbackLocale = vueI18nOptions.fallbackLocale || '';
  extendVueI18nInstance(app.i18n);
  app.i18n.__baseUrl = resolveBaseUrl(nuxt_i18n_options["h" /* baseUrl */], context);
  app.i18n.__onNavigate = onNavigate; // Inject seo function

  external_vue_default.a.prototype.$nuxtI18nSeo = nuxtI18nSeo;

  if (store) {
    // Inject in store.
    store.$i18n = app.i18n;

    if (store.state.localeDomains) {
      app.i18n.locales.forEach(locale => {
        locale.domain = store.state.localeDomains[locale.code];
      });
    }
  }

  let finalLocale = nuxt_i18n_options["l" /* detectBrowserLanguage */] && doDetectBrowserLanguage(route);

  if (!finalLocale) {
    if (nuxt_i18n_options["w" /* vuex */] && nuxt_i18n_options["w" /* vuex */].syncLocale && store && store.state[nuxt_i18n_options["w" /* vuex */].moduleName].locale !== '') {
      finalLocale = store.state[nuxt_i18n_options["w" /* vuex */].moduleName].locale;
    } else if (app.i18n.differentDomains) {
      const options = {
        localDomainKey: nuxt_i18n_options["c" /* LOCALE_DOMAIN_KEY */],
        localeCodeKey: nuxt_i18n_options["b" /* LOCALE_CODE_KEY */]
      };
      const domainLocale = getLocaleDomain(nuxt_i18n_options["p" /* locales */], req, options);
      finalLocale = domainLocale;
    } else if (nuxt_i18n_options["t" /* strategy */] !== nuxt_i18n_options["g" /* STRATEGIES */].NO_PREFIX) {
      const routeLocale = getLocaleFromRoute(route);
      finalLocale = routeLocale;
    } else if (useCookie) {
      finalLocale = app.i18n.getLocaleCookie();
    }
  }

  if (!finalLocale) {
    finalLocale = app.i18n.defaultLocale || '';
  }

  await loadAndSetLocale(finalLocale, {
    initialSetup: true
  });

  if (false) {}
});
// EXTERNAL MODULE: ./node_modules/@vue-storefront/commercetools-api/lib/index.cjs.js
var index_cjs = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/@vue-storefront/commercetools/nuxt/defaultConfig.js
/* harmony default export */ var defaultConfig = ({
  disableGenerateTokenMiddleware: false,
  cookies: {
    currencyCookieName: 'vsf-currency',
    countryCookieName: 'vsf-country',
    localeCookieName: 'vsf-locale'
  }
});
// CONCATENATED MODULE: ./node_modules/@vue-storefront/commercetools/nuxt/helpers/index.js


const getLocaleSettings = (moduleOptions, app) => {
  let localeSettings = {};

  if (moduleOptions.cookies) {
    localeSettings = {
      locale: app.$cookies.get(moduleOptions.cookies.localeCookieName),
      country: app.$cookies.get(moduleOptions.cookies.currencyCookieName),
      currency: app.$cookies.get(moduleOptions.cookies.countryCookieName)
    };
  }

  return {
    locale: app.i18n.locale || localeSettings.locale || moduleOptions.locale || defaultConfig.locale,
    country: localeSettings.country || moduleOptions.country || defaultConfig.country,
    currency: localeSettings.currency || moduleOptions.currency || defaultConfig.currency
  };
};

const mapConfigToSetupObject = ({
  moduleOptions,
  app,
  additionalProperties = {}
}) => {
  return { ...defaultConfig,
    ...moduleOptions,
    ...additionalProperties,
    ...getLocaleSettings(moduleOptions, app)
  };
};
const CT_TOKEN_COOKIE_NAME = 'vsf-commercetools-token';
const CT_TOKEN_MIDDLEWARE_SLUG = 'commercetools-generate-access-token';
// CONCATENATED MODULE: ./node_modules/@vue-storefront/commercetools/nuxt/token-middleware.js


/* harmony default export */ var token_middleware = (moduleOptions => async ({
  app
}) => {
  if (false) {}
  const newToken = await Object(index_cjs["createAccessToken"])();
  app.$cookies.set(CT_TOKEN_COOKIE_NAME, newToken);
  Object(index_cjs["setup"])(mapConfigToSetupObject({
    moduleOptions,
    app
  }));
});
// CONCATENATED MODULE: ./.nuxt/nuxt.plugin.0d622a69.js
/* eslint-disable */


const nuxt_plugin_0d622a69_moduleOptions = JSON.parse('{"api":{"uri":"https://api.commercetools.com/vsf-ct-dev/graphql","authHost":"https://auth.sphere.io","projectKey":"vsf-ct-dev","clientId":"RT4iJGDbDzZe4b2E6RyeNe9s","clientSecret":"5eBt3yfZJWw1j7V6kXjfKXpuFP-YQXpg","scopes":["manage_products:vsf-ct-dev","create_anonymous_token:vsf-ct-dev","manage_my_profile:vsf-ct-dev","manage_customer_groups:vsf-ct-dev","view_categories:vsf-ct-dev","introspect_oauth_tokens:vsf-ct-dev","manage_my_payments:vsf-ct-dev","manage_my_orders:vsf-ct-dev","manage_my_shopping_lists:vsf-ct-dev","view_published_products:vsf-ct-dev"]},"i18n":{"useNuxtI18nConfig":true},"locale":"en","currency":"USD","country":"US","acceptLanguage":["en","de"],"countries":[{"name":"US","label":"United States"},{"name":"AT","label":"Austria"},{"name":"DE","label":"Germany"},{"name":"NL","label":"Netherlands"}],"currencies":[{"name":"EUR","label":"Euro"},{"name":"USD","label":"Dollar"}],"locales":[{"name":"en","label":"English"},{"name":"de","label":"German"}]}');



_nuxt_middleware[CT_TOKEN_MIDDLEWARE_SLUG] = token_middleware(nuxt_plugin_0d622a69_moduleOptions);
/* harmony default export */ var nuxt_plugin_0d622a69 = (({
  app
}) => {
  const currentToken = app.$cookies.get(CT_TOKEN_COOKIE_NAME);

  const onTokenChange = token => {
    try {
      if (false) {}
    } catch (e) {// Cookies on is set after request has sent.
    }
  };

  const onTokenRemove = () => {
    app.$cookies.remove(CT_TOKEN_COOKIE_NAME);
    Object(index_cjs["setup"])({
      currentToken: null,
      forceToken: true
    });
  };

  Object(index_cjs["setup"])(mapConfigToSetupObject({
    moduleOptions: nuxt_plugin_0d622a69_moduleOptions,
    app,
    additionalProperties: {
      currentToken,
      auth: {
        onTokenChange,
        onTokenRemove
      }
    }
  }));
});
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.reflect.own-keys.js
var es6_reflect_own_keys = __webpack_require__(204);

// EXTERNAL MODULE: external "defu"
var external_defu_ = __webpack_require__(96);
var external_defu_default = /*#__PURE__*/__webpack_require__.n(external_defu_);

// CONCATENATED MODULE: ./.nuxt/composition-api/index.js




const globalNuxt = '$nuxt'.includes('options') ? '$nuxt' : '$nuxt';
const globalContext = '__NUXT__'.includes('options') ? '__NUXT__' : '__NUXT__';
const isFullStatic = 'false'.includes('options') ? false : 'false' === 'true';

function validateKey(key) {
  if (!key) {
    throw new Error("You must provide a key. You can have it generated automatically by adding '@nuxtjs/composition-api/babel' to your Babel plugins.");
  }
}

function getValue(value) {
  if (value instanceof Function) return value();
  return value;
}

let composition_api_data = {};

function setSSRContext(ssrContext) {
  composition_api_data = Object.assign({}, {});
  ssrContext.nuxt.ssrRefs = composition_api_data;
}

const isProxyable = val => val && typeof val === 'object';

const sanitise = val => val && JSON.parse(JSON.stringify(val)) || val;

const ssrValue = (value, key) => {
  var _a, _b, _c, _d;

  if (false) {}

  return getValue(value);
};
/**
 * `ssrRef` will automatically add ref values to `window.__NUXT__` on SSR if they have been changed from their initial value. It can be used outside of components, such as in shared utility functions, and it supports passing a factory function that will generate the initial value of the ref. **At the moment, an `ssrRef` is only suitable for one-offs, unless you provide your own unique key.**
 * @param value This can be an initial value or a factory function that will be executed on server-side to get the initial value.
 * @param key Under the hood, `ssrRef` requires a key to ensure that the ref values match between client and server. If you have added `@nuxtjs/composition-api` to your `buildModules`, this will be done automagically by an injected Babel plugin. If you need to do things differently, you can specify a key manually or add `@nuxtjs/composition-api/babel` to your Babel plugins.
 * @example
  ```ts
  import { ssrRef } from '@nuxtjs/composition-api'

  const val = ssrRef('')

  // When hard-reloaded, `val` will be initialised to 'server set'
  if (process.server) val.value = 'server set'

  // When hard-reloaded, the result of myExpensiveSetterFunction() will
  // be encoded in nuxtState and used as the initial value of this ref.
  // If client-loaded, the setter function will run to come up with initial value.
  const val2 = ssrRef(myExpensiveSetterFunction)
  ```
 */


const ssrRef = (value, key) => {
  validateKey(key);
  let val = ssrValue(value, key);
  if (false) {}
  if (value instanceof Function) composition_api_data[key] = sanitise(val);

  const getProxy = (track, trigger, observable) => new Proxy(observable, {
    get(target, prop) {
      track();
      if (isProxyable(target[prop])) return getProxy(track, trigger, target[prop]);
      return Reflect.get(target, prop);
    },

    set(obj, prop, newVal) {
      const result = Reflect.set(obj, prop, newVal);
      composition_api_data[key] = sanitise(val);
      trigger();
      return result;
    }

  });

  const proxy = Object(composition_api_["customRef"])((track, trigger) => ({
    get: () => {
      track();
      if (isProxyable(val)) return getProxy(track, trigger, val);
      return val;
    },
    set: v => {
      composition_api_data[key] = sanitise(v);
      val = v;
      trigger();
    }
  }));
  return proxy;
};
/**
 * This helper creates a [`shallowRef`](https://vue-composition-api-rfc.netlify.app/api.html#shallowref) (a ref that tracks its own .value mutation but doesn't make its value reactive) that is synced between client & server.
 * @param value This can be an initial value or a factory function that will be executed on server-side to get the initial value.
 * @param key Under the hood, `shallowSsrRef` requires a key to ensure that the ref values match between client and server. If you have added `@nuxtjs/composition-api` to your `buildModules`, this will be done automagically by an injected Babel plugin. If you need to do things differently, you can specify a key manually or add `@nuxtjs/composition-api/babel` to your Babel plugins.

 * @example
  ```ts
  import { shallowSsrRef, onMounted } from '@nuxtjs/composition-api'

  const shallow = shallowSsrRef({ v: 'init' })
  if (process.server) shallow.value = { v: 'changed' }

  // On client-side, shallow.value will be { v: changed }
  onMounted(() => {
    // This and other changes outside of setup won't trigger component updates.
    shallow.value.v = 'Hello World'
  })
  ```
 */


const shallowSsrRef = (value, key) => {
  validateKey(key);
  if (false) {}

  const _val = getValue(value);

  if (value instanceof Function) {
    composition_api_data[key] = sanitise(_val);
  }

  return Object(composition_api_["customRef"])((track, trigger) => ({
    get() {
      track();
      return _val;
    },

    set(newValue) {
      composition_api_data[key] = sanitise(newValue);
      value = newValue;
      trigger();
    }

  }));
};
/**
 * `ssrPromise` runs a promise on the server and serialises the result as a resolved promise for the client. It needs to be run within the `setup()` function but note that it returns a promise which will require special handling. (For example, you cannot just return a promise from setup and use it in the template.)
 * @param value This can be an initial value or a factory function that will be executed on server-side to get the initial value.
 * @param key Under the hood, `ssrPromise` requires a key to ensure that the ref values match between client and server. If you have added `@nuxtjs/composition-api` to your `buildModules`, this will be done automagically by an injected Babel plugin. If you need to do things differently, you can specify a key manually or add `@nuxtjs/composition-api/babel` to your Babel plugins.
 * @example

    ```ts
    import {
      defineComponent,
      onBeforeMount,
      ref,
      ssrPromise,
    } from '@nuxtjs/composition-api'

    export default defineComponent({
      setup() {
        const _promise = ssrPromise(async () => myAsyncFunction())
        const resolvedPromise = ref(null)

        onBeforeMount(async () => {
          resolvedPromise.value = await _promise
        })

        return {
          // On the server, this will be null until the promise resolves.
          // On the client, if server-rendered, this will always be the resolved promise.
          resolvedPromise,
        }
      },
    })
    ```
 */


const ssrPromise = (value, key) => {
  validateKey(key);
  const val = ssrValue(value, key);
  if (false) {}
  Object(composition_api_["onServerPrefetch"])(async () => {
    composition_api_data[key] = sanitise(await val);
  });
  return val;
};
/**
 * You can create reactive values that depend on asynchronous calls with `useAsync`.
 * On the server, this helper will inline the result of the async call in your HTML and automatically inject them into your client code. Much like `asyncData`, it _won't_ re-run these async calls client-side.
 *
 * However, if the call hasn't been carried out on SSR (such as if you have navigated to the page after initial load), it returns a `null` ref that is filled with the result of the async call when it resolves.
 *
 * **At the moment, `useAsync` is only suitable for one-offs, unless you provide your own unique key.**
 * @param cb The async function that will populate the ref this function returns.
 * @param key Under the hood, `useAsync` requires a key to ensure that the ref values match between client and server. If you have added `@nuxtjs/composition-api` to your `buildModules`, this will be done automagically by an injected Babel plugin. If you need to do things differently, you can specify a key manually or add `@nuxtjs/composition-api/babel` to your Babel plugins.
 *
 * @example
  ```ts
  import { defineComponent, useAsync, computed } from '@nuxtjs/composition-api'
  import axios from 'axios'

  export default defineComponent({
    setup() {
      const posts = useAsync(() => axios.get('/api/posts'))

      return { posts }
    },
  })
  ```
 */


const useAsync = (cb, key) => {
  var _a;

  validateKey(key);

  const _ref = Object(composition_api_["isRef"])(key) ? key : ssrRef(null, key);

  if (!_ref.value ||  false && (false)) {
    const p = Promise.resolve(cb());

    if (true) {
      Object(composition_api_["onServerPrefetch"])(async () => {
        _ref.value = await p;
      });
    } else {}
  }

  return _ref;
};

function composition_api_assign(target, source) {
  Object.entries(source).forEach(([key, value]) => {
    external_vue_default.a.set(target, key, value);
  });
  return target;
}

function createEmptyMeta() {
  return {
    __dangerouslyDisableSanitizers: [],
    __dangerouslyDisableSanitizersByTagID: {},
    title: undefined,
    htmlAttrs: {},
    headAttrs: {},
    bodyAttrs: {},
    base: undefined,
    meta: [],
    link: [],
    style: [],
    script: [],
    noscript: [],
    changed: undefined,
    afterNavigation: undefined
  };
}

const getHeadOptions = options => {
  const _head = options.head instanceof Function ? Object(composition_api_["reactive"])({}) : Object(composition_api_["reactive"])(options.head);

  const head = options.head instanceof Function ? () => external_defu_default()(_head, options.head()) : () => _head;
  return {
    _head,
    head
  };
};
/**
 * `useMeta` lets you interact directly with [`head()` properties](https://nuxtjs.org/api/pages-head/) in `setup`. **Make sure you set `head: {}` in your component options.**
 * @example
    ```ts
    import { defineComponent, useMeta, computed } from '@nuxtjs/composition-api'

    export default defineComponent({
      head: {},
      setup() {
        const { title } = useMeta()
        title.value = 'My page'
      })
    })
    ```
 * @param init Whatever defaults you want to set for `head` properties.
 */


const useMeta = init => {
  const vm = Object(composition_api_["getCurrentInstance"])();
  if (!vm) throw new Error('useMeta must be called within a component.');
  if (!('_head' in vm.$options)) throw new Error('In order to enable `useMeta`, please make sure you include `head: {}` within your component definition, and you are using the `defineComponent` exported from @nuxtjs/composition-api.');
  const {
    _head
  } = vm.$options;
  composition_api_assign(_head, createEmptyMeta());
  composition_api_assign(_head, init || {});
  const refs = Object(composition_api_["toRefs"])(_head);
  refs.titleTemplate = Object(composition_api_["customRef"])((track, trigger) => {
    return {
      get() {
        track();
        return _head.titleTemplate;
      },

      set(newValue) {
        if (!_head.titleTemplate) {
          external_vue_default.a.set(_head, 'titleTemplate', newValue);
        } else {
          _head.titleTemplate = newValue;
        }

        trigger();
      }

    };
  });
  if (false) {}
  return refs;
};
/**
 * If you want to enable `useMeta`, make sure to include `head: {}` in your component definition.
 * @example
  ```ts
  import { defineComponent } from '@nuxtjs/composition-api'

  export default defineComponent({
    head: {},
    setup() {
      ...
    }
  })
  ```
 */


const defineComponent = options => {
  if (!('head' in options)) return options;
  return { ...options,
    ...getHeadOptions(options)
  };
};
/**
 * @deprecated
 * Recommend using `useContext` instead
 */


const withContext = callback => {
  const vm = Object(composition_api_["getCurrentInstance"])();
  if (!vm) throw new Error('This must be called within a setup function.');
  callback(vm[globalNuxt].context);
};
/**
 * `useContext` will return the Nuxt context.
 * @example
  ```ts
  import { defineComponent, ref, useContext } from '@nuxtjs/composition-api'

  export default defineComponent({
    setup() {
      const { store } = useContext()
      store.dispatch('myAction')
    },
  })
  ```
 */


const useContext = () => {
  const vm = Object(composition_api_["getCurrentInstance"])();
  if (!vm) throw new Error('This must be called within a setup function.');
  return { ...vm[globalNuxt].context,
    route: Object(composition_api_["computed"])(() => vm.$route),
    query: Object(composition_api_["computed"])(() => vm.$route.query),
    from: Object(composition_api_["computed"])(() => vm.$route.redirectedFrom),
    params: Object(composition_api_["computed"])(() => vm.$route.params)
  };
};

function composition_api_normalizeError(err) {
  let message;

  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e) {
      message = `[${err.constructor.name}]`;
    }
  } else {
    message = err.message || err;
  }

  return { ...err,
    message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  };
}

const fetches = new WeakMap();
const fetchPromises = new Map();

const isSsrHydration = vm => {
  var _a, _b, _c;

  return (_c = (_b = (_a = vm.$vnode) === null || _a === void 0 ? void 0 : _a.elm) === null || _b === void 0 ? void 0 : _b.dataset) === null || _c === void 0 ? void 0 : _c.fetchKey;
};

const nuxtState =  false && false;

function registerCallback(vm, callback) {
  const callbacks = fetches.get(vm) || [];
  fetches.set(vm, [...callbacks, callback]);
}

async function callFetches() {
  const fetchesToCall = fetches.get(this);
  if (!fetchesToCall) return;
  this[globalNuxt].nbFetching++;
  this.$fetchState.pending = true;
  this.$fetchState.error = null;
  this._hydrated = false;
  let error = null;
  const startTime = Date.now();

  try {
    await Promise.all(fetchesToCall.map(fetch => {
      if (fetchPromises.has(fetch)) return fetchPromises.get(fetch);
      const promise = Promise.resolve(fetch(this)).finally(() => fetchPromises.delete(fetch));
      fetchPromises.set(fetch, promise);
      return promise;
    }));
  } catch (err) {
    error = composition_api_normalizeError(err);
  }

  const delayLeft = (this._fetchDelay || 0) - (Date.now() - startTime);

  if (delayLeft > 0) {
    await new Promise(resolve => setTimeout(resolve, delayLeft));
  }

  this.$fetchState.error = error;
  this.$fetchState.pending = false;
  this.$fetchState.timestamp = Date.now();
  this.$nextTick(() => this[globalNuxt].nbFetching--);
}

const setFetchState = vm => {
  vm.$fetchState = vm.$fetchState || external_vue_default.a.observable({
    error: null,
    pending: false,
    timestamp: 0
  });
};

const loadFullStatic = vm => {
  // Check if component has been fetched on server
  const {
    fetchOnServer
  } = vm.$options;
  const fetchedOnServer = typeof fetchOnServer === 'function' ? fetchOnServer.call(vm) !== false : fetchOnServer !== false;
  const nuxt = vm.$nuxt;

  if (!fetchedOnServer || (nuxt === null || nuxt === void 0 ? void 0 : nuxt.isPreview) || !(nuxt === null || nuxt === void 0 ? void 0 : nuxt._pagePayload)) {
    return;
  }

  vm._hydrated = true;
  nuxt._payloadFetchIndex = (nuxt._payloadFetchIndex || 0) + 1;
  vm._fetchKey = nuxt._payloadFetchIndex;
  const data = nuxt._pagePayload.fetch[vm._fetchKey]; // If fetch error

  if (data && data._error) {
    vm.$fetchState.error = data._error;
    return;
  } // Merge data


  for (const key in data) {
    external_vue_default.a.set(vm.$data, key, data[key]);
  }
};

async function composition_api_serverPrefetch(vm) {
  if (!vm._fetchOnServer) return; // Call and await on $fetch

  setFetchState(vm);

  try {
    await callFetches.call(vm);
  } catch (err) {
    vm.$fetchState.error = composition_api_normalizeError(err);
  }

  vm.$fetchState.pending = false; // Define an ssrKey for hydration

  vm._fetchKey = vm.$ssrContext.nuxt.fetch.length; // Add data-fetch-key on parent element of Component

  if (!vm.$vnode.data) vm.$vnode.data = {};
  const attrs = vm.$vnode.data.attrs = vm.$vnode.data.attrs || {};
  attrs['data-fetch-key'] = vm._fetchKey;
  const data = { ...vm._data
  };
  Object.entries(vm.__composition_api_state__.rawBindings).forEach(([key, val]) => {
    if (val instanceof Function || val instanceof Promise) return;
    data[key] = Object(composition_api_["isRef"])(val) ? val.value : val;
  }); // Add to ssrContext for window.__NUXT__.fetch

  vm.$ssrContext.nuxt.fetch.push(vm.$fetchState.error ? {
    _error: vm.$fetchState.error
  } : JSON.parse(JSON.stringify(data)));
}
/**
 * Versions of Nuxt newer than v2.12 support a [custom hook called `fetch`](https://nuxtjs.org/api/pages-fetch/) that allows server-side and client-side asynchronous data-fetching.

 * @param callback The async function you want to run.
 * @example

  ```ts
  import { defineComponent, ref, useFetch } from '@nuxtjs/composition-api'
  import axios from 'axios'

  export default defineComponent({
    setup() {
      const name = ref('')

      const { fetch, fetchState } = useFetch(async () => {
        name.value = await axios.get('https://myapi.com/name')
      })

      // Manually trigger a refetch
      fetch()

      // Access fetch error, pending and timestamp
      fetchState

      return { name }
    },
  })
  ```
 */


const useFetch = callback => {
  var _a;

  const vm = Object(composition_api_["getCurrentInstance"])();
  if (!vm) throw new Error('This must be called within a setup function.');
  registerCallback(vm, callback);

  if (typeof vm.$options.fetchOnServer === 'function') {
    vm._fetchOnServer = vm.$options.fetchOnServer.call(vm) !== false;
  } else {
    vm._fetchOnServer = vm.$options.fetchOnServer !== false;
  }

  setFetchState(vm);
  Object(composition_api_["onServerPrefetch"])(() => composition_api_serverPrefetch(vm));

  function result() {
    return {
      fetch: vm.$fetch,
      fetchState: vm.$fetchState,
      $fetch: vm.$fetch,
      $fetchState: vm.$fetchState
    };
  }

  vm._fetchDelay = typeof vm.$options.fetchDelay === 'number' ? vm.$options.fetchDelay : 200;
  vm.$fetch = callFetches.bind(vm);
  Object(composition_api_["onBeforeMount"])(() => !vm._hydrated && callFetches.call(vm));

  if (true) {
    if (isFullStatic) Object(composition_api_["onBeforeMount"])(() => loadFullStatic(vm));
    return result();
  } // Hydrate component


  vm._hydrated = true;
  vm._fetchKey = +((_a = vm.$vnode.elm) === null || _a === void 0 ? void 0 : _a.dataset.fetchKey);
  const data = nuxtState.fetch[vm._fetchKey]; // If fetch error

  if (data && data._error) {
    vm.$fetchState.error = data._error;
    return result();
  }

  Object(composition_api_["onBeforeMount"])(() => {
    // Merge data
    for (const key in data) {
      try {
        if (key in vm && typeof vm[key] === 'function') {
          continue;
        }

        external_vue_default.a.set(vm, key, data[key]);
      } catch (e) {
        if (false) // eslint-disable-next-line
          {}
      }
    }
  });
  return result();
};

const globalSetup = new Set();
/**
 * Run a callback function in the global setup function. This should be called from a Nuxt plugin.
 * @param fn The function to run in the setup function. It receives the global props and context.
 * @example
    ```ts
    import { onGlobalSetup } from '@nuxtjs/composition-api'

    export default () => {
      onGlobalSetup(() => {
        provide('globalKey', true)
      })
    }
    ```
 */

const onGlobalSetup = fn => {
  globalSetup.add(fn);
};
/**
 * @private
 */


const globalPlugin = context => {
  const {
    setup
  } = context.app;

  context.app.setup = (...args) => {
    let result = {};

    if (setup instanceof Function) {
      result = setup(...args) || {};
    }

    for (const fn of globalSetup) {
      result = { ...result,
        ...(fn(...args) || {})
      };
    }

    return result;
  };

  if (false) {}

  if (context.app.context.ssrContext) {
    setSSRContext(context.app.context.ssrContext);
  }
};

const staticPath = 'D:/MY PROJECTS/Vue Projects/my-storefront/.nuxt/static-json';
const staticCache = {};

function writeFile(key, value) {
  if (false) {}
  const {
    writeFileSync
  } =  false ? undefined : __webpack_require__(228);
  const {
    join
  } =  false ? undefined : __webpack_require__(229);

  try {
    writeFileSync(join(staticPath, `${key}.json`), value);
  } catch (e) {
    console.log(e);
  }
}
/**
 * You can pre-run expensive functions using `useStatic`.
 *
 * __SSG__
 * If you are generating the whole app (or just prerendering some routes with `nuxt build && nuxt generate --no-build`) the following behaviour will be unlocked:

    1. On generate, the result of a `useStatic` call will be saved to a JSON file and copied into the `/dist` directory.
    2. On hard-reload of a generated page, the JSON will be inlined into the page and cached.
    3. On client navigation to a generated page, this JSON will be fetched - and once fetched it will be cached for subsequent navigations. If for whatever reason this JSON doesn't exist, such as if the page *wasn't* pre-generated, the original factory function will be run on client-side.

  If you are pregenerating some pages in your app note that you may need to increase `generate.interval`. (See [setup instructions](https://composition-api.nuxtjs.org/setup.html).)

  *
  * __SSR__
  * If the route is not pre-generated (including in dev mode), then:

    1. On a hard-reload, the server will run the factory function and inline the result in `nuxtState` - so the client won't rerun the API request. The result will be cached between requests.
    2. On client navigation, the client will run the factory function.

  In both of these cases, the return result of `useStatic` is a `null` ref that is filled with the result of the factory function or JSON fetch when it resolves.

 * @param factory The async function that will populate the ref this function returns. It receives the param and keyBase (see below) as parameters.
 * @param param A an optional param (such as an ID) to distinguish multiple API fetches using the same factory function.
 * @param keyBase A key that should be unique across your project. If not provided, this will be auto-generated by `@nuxtjs/composition-api`.
 * @example
  ```ts
  import { defineComponent, useContext, useStatic, computed } from '@nuxtjs/composition-api'
  import axios from 'axios'

  export default defineComponent({
    setup() {
      const { params } = useContext()
      const id = computed(() => params.value.id)
      const post = useStatic(
        id => axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`),
        id,
        'post'
      )

      return { post }
    },
  })
  ```
 */


const useStatic = (factory, param = Object(composition_api_["ref"])(''), keyBase) => {
  const key = Object(composition_api_["computed"])(() => `${keyBase}-${param.value}`);
  const result = ssrRef(null, key.value);
  if (result.value) staticCache[key.value] = result.value;

  if (false) {} else {
    if (key.value in staticCache) {
      result.value = staticCache[key.value];
      return result;
    }

    Object(composition_api_["onServerPrefetch"])(async () => {
      const [_key, _param] = [key.value, param.value];
      result.value = await factory(_param, _key);
      staticCache[_key] = result.value;
      writeFile(_key, JSON.stringify(result.value));
    });
  }

  return result;
};

const defineNuxtPlugin = plugin => plugin;

const defineNuxtMiddleware = middleware => middleware;

const defineNuxtModule = module => module;

const defineNuxtServerMiddleware = serverMiddleware => serverMiddleware;

external_vue_default.a.use(composition_api_default.a);

// CONCATENATED MODULE: ./.nuxt/composition-api/plugin.js
// Necessary polyfill for Composition API support for IE11


/* harmony default export */ var composition_api_plugin = (globalPlugin);
// CONCATENATED MODULE: ./.nuxt/plugins.logger.14714a9d.js


const loggerPlugin = () => {
  const {
    verbosity,
    customLogger,
    ...args
  } = {
    "verbosity": "error"
  };
  Object(lib_index_es["registerLogger"])(customLogger || args, verbosity || 'error');
};

/* harmony default export */ var plugins_logger_14714a9d = (loggerPlugin);
// CONCATENATED MODULE: ./.nuxt/plugins.ssr.151a162f.js



const hasRouteChanged = vm => {
  const {
    from
  } = vm.$router.app.context;
  const {
    current
  } = vm.$router.history;

  if (!from) {
    return false;
  }

  return from.fullPath !== current.fullPath;
};

const ssrPlugin = () => {
  Object(lib_index_es["configureSSR"])({
    vsfRef: ssrRef,
    onSSR: fn => {
      Object(composition_api_["onServerPrefetch"])(fn);

      if (typeof window !== 'undefined') {
        const vm = Object(composition_api_["getCurrentInstance"])();

        if (hasRouteChanged(vm)) {
          fn();
        }
      }
    }
  });
};

/* harmony default export */ var plugins_ssr_151a162f = (ssrPlugin);
// CONCATENATED MODULE: ./.nuxt/index.js










/* Plugins */

 // Source: .\\vue-scrollto.js (mode: 'client')

 // Source: .\\cookie-universal-nuxt.js (mode: 'all')

 // Source: .\\nuxt-i18n\\plugin.seo.js (mode: 'all')

 // Source: .\\nuxt-i18n\\plugin.routing.js (mode: 'all')

 // Source: .\\nuxt-i18n\\plugin.main.js (mode: 'all')

 // Source: .\\nuxt.plugin.0d622a69.js (mode: 'all')

 // Source: .\\composition-api\\plugin.js (mode: 'all')

 // Source: .\\plugins.logger.14714a9d.js (mode: 'all')

 // Source: .\\plugins.ssr.151a162f.js (mode: 'all')
// Component: <ClientOnly>

external_vue_default.a.component(external_vue_client_only_default.a.name, external_vue_client_only_default.a); // TODO: Remove in Nuxt 3: <NoSsr>

external_vue_default.a.component(external_vue_no_ssr_default.a.name, { ...external_vue_no_ssr_default.a,

  render(h, ctx) {
    if (false) {}

    return external_vue_no_ssr_default.a.render(h, ctx);
  }

}); // Component: <NuxtChild>

external_vue_default.a.component(nuxt_child.name, nuxt_child);
external_vue_default.a.component('NChild', nuxt_child); // Component NuxtLink is imported in server.js or client.js
// Component: <Nuxt>

external_vue_default.a.component(components_nuxt.name, components_nuxt);
Object.defineProperty(external_vue_default.a.prototype, '$nuxt', {
  get() {
    return this.$root.$options.$nuxt;
  },

  configurable: true
});
external_vue_default.a.use(external_vue_meta_default.a, {
  "keyName": "head",
  "attribute": "data-n-head",
  "ssrAttribute": "data-n-head-ssr",
  "tagIDKeyName": "hid"
});
const defaultTransition = {
  "name": "page",
  "mode": "out-in",
  "appear": false,
  "appearClass": "appear",
  "appearActiveClass": "appear-active",
  "appearToClass": "appear-to"
};

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext); // Create Root instance
  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.

  const app = {
    head: {
      "title": "my-storefront",
      "meta": [{
        "charset": "utf-8"
      }, {
        "name": "viewport",
        "content": "width=device-width, initial-scale=1"
      }, {
        "hid": "description",
        "name": "description",
        "content": "My breathtaking Nuxt.js project"
      }, {
        "name": "generator",
        "content": "Vue Storefront 2"
      }],
      "link": [{
        "rel": "icon",
        "type": "image\u002Fx-icon",
        "href": "\u002Ffavicon.ico"
      }],
      "script": [],
      "style": []
    },
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],

      setTransitions(transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions];
        }

        transitions = transitions.map(transition => {
          if (!transition) {
            transition = defaultTransition;
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, {
              name: transition
            });
          } else {
            transition = Object.assign({}, defaultTransition, transition);
          }

          return transition;
        });
        this.$options.nuxt.transitions = transitions;
        return transitions;
      },

      err: null,
      dateErr: null,

      error(err) {
        err = err || null;
        app.context._errored = Boolean(err);
        err = err ? normalizeError(err) : null;
        let nuxt = app.nuxt; // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207

        if (this) {
          nuxt = this.nuxt || this.$options.nuxt;
        }

        nuxt.dateErr = Date.now();
        nuxt.err = err; // Used in src/server.js

        if (ssrContext) {
          ssrContext.nuxt.error = err;
        }

        return err;
      }

    },
    ...App
  };
  const next = ssrContext ? ssrContext.next : location => app.router.push(location); // Resolve route

  let route;

  if (ssrContext) {
    route = router.resolve(ssrContext.url).route;
  } else {
    const path = getLocation(router.options.base, router.options.mode);
    route = router.resolve(path).route;
  } // Set context to app.context


  await setContext(app, {
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  });

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided');
    }

    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`);
    }

    key = '$' + key; // Add into app

    app[key] = value; // Add into context

    if (!app.context[key]) {
      app.context[key] = value;
    } // Check if plugin not already installed


    const installKey = '__nuxt_' + key + '_installed__';

    if (external_vue_default.a[installKey]) {
      return;
    }

    external_vue_default.a[installKey] = true; // Call Vue.use() to install the plugin into vm

    external_vue_default.a.use(() => {
      if (!Object.prototype.hasOwnProperty.call(external_vue_default.a.prototype, key)) {
        Object.defineProperty(external_vue_default.a.prototype, key, {
          get() {
            return this.$root.$options[key];
          }

        });
      }
    });
  } // Inject runtime config as $config


  inject('config', config); // Add enablePreview(previewData = {}) in context for plugins

  if (false) {} // Plugin execution


  if (false) {}

  if (typeof cookie_universal_nuxt === 'function') {
    await cookie_universal_nuxt(app.context, inject);
  }

  if (typeof /* Cannot get final name for export "default" in "./.nuxt/nuxt-i18n/plugin.seo.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./.nuxt/nuxt-i18n/plugin.seo.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (typeof plugin_routing === 'function') {
    await plugin_routing(app.context, inject);
  }

  if (typeof plugin_main === 'function') {
    await plugin_main(app.context, inject);
  }

  if (typeof nuxt_plugin_0d622a69 === 'function') {
    await nuxt_plugin_0d622a69(app.context, inject);
  }

  if (typeof composition_api_plugin === 'function') {
    await composition_api_plugin(app.context, inject);
  }

  if (typeof plugins_logger_14714a9d === 'function') {
    await plugins_logger_14714a9d(app.context, inject);
  }

  if (typeof plugins_ssr_151a162f === 'function') {
    await plugins_ssr_151a162f(app.context, inject);
  } // Lock enablePreview in context


  if (false) {} // If server-side, wait for async component to be resolved first


  if ( true && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, err => {
        // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
        if (!err._isRouter) return reject(err);
        if (err.type !== 2
        /* NavigationFailureType.redirected */
        ) return resolve(); // navigated to a different route in router guard

        const unregister = router.afterEach(async (to, from) => {
          ssrContext.url = to.fullPath;
          app.context.route = await getRouteData(to);
          app.context.params = to.params || {};
          app.context.query = to.query || {};
          unregister();
          resolve();
        });
      });
    });
  }

  return {
    app,
    router
  };
}


// CONCATENATED MODULE: ./.nuxt/components/nuxt-link.server.js

/* harmony default export */ var nuxt_link_server = ({
  name: 'NuxtLink',
  extends: external_vue_default.a.component('RouterLink'),
  props: {
    prefetch: {
      type: Boolean,
      default: true
    },
    noPrefetch: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./.nuxt/server.js








 // should be included after ./index.js
// Update serverPrefetch strategy

external_vue_default.a.config.optionMergeStrategies.serverPrefetch = external_vue_default.a.config.optionMergeStrategies.created; // Fetch mixin

if (!external_vue_default.a.__nuxt__fetch__mixin__) {
  external_vue_default.a.mixin(fetch_server);
  external_vue_default.a.__nuxt__fetch__mixin__ = true;
} // Component: <NuxtLink>


external_vue_default.a.component(nuxt_link_server.name, nuxt_link_server);
external_vue_default.a.component('NLink', nuxt_link_server);

if (!global.fetch) {
  global.fetch = external_node_fetch_default.a;
}

const noopApp = () => new external_vue_default.a({
  render: h => h('div')
});

function server_urlJoin() {
  return Array.prototype.slice.call(arguments).join('/').replace(/\/+/g, '/');
}

const createNext = ssrContext => opts => {
  // If static target, render on client-side
  ssrContext.redirected = opts;

  if (ssrContext.target === 'static' || !ssrContext.res) {
    ssrContext.nuxt.serverRendered = false;
    return;
  }

  opts.query = Object(external_querystring_["stringify"])(opts.query);
  opts.path = opts.path + (opts.query ? '?' + opts.query : '');
  const routerBase = '/';

  if (!opts.path.startsWith('http') && routerBase !== '/' && !opts.path.startsWith(routerBase)) {
    opts.path = server_urlJoin(routerBase, opts.path);
  } // Avoid loop redirect


  if (decodeURI(opts.path) === decodeURI(ssrContext.url)) {
    ssrContext.redirected = false;
    return;
  }

  ssrContext.res.writeHead(opts.status, {
    Location: Object(ufo_["normalizeURL"])(opts.path)
  });
  ssrContext.res.end();
}; // This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.


/* harmony default export */ var server = __webpack_exports__["default"] = (async ssrContext => {
  // Create ssrContext.next for simulate next() of beforeEach() when wanted to redirect
  ssrContext.redirected = false;
  ssrContext.next = createNext(ssrContext); // Used for beforeNuxtRender({ Components, nuxtState })

  ssrContext.beforeRenderFns = []; // Nuxt object (window.{{globals.context}}, defaults to window.__NUXT__)

  ssrContext.nuxt = {
    layout: 'default',
    data: [],
    fetch: [],
    error: null,
    serverRendered: true,
    routePath: ''
  }; // Remove query from url is static target

  if ( true && ssrContext.url) {
    ssrContext.url = ssrContext.url.split('?')[0];
  } // Public runtime config


  ssrContext.nuxt.config = ssrContext.runtimeConfig.public; // Create the app definition and the instance (created for each request)

  const {
    app,
    router
  } = await createApp(ssrContext, { ...ssrContext.runtimeConfig.public,
    ...ssrContext.runtimeConfig.private
  });

  const _app = new external_vue_default.a(app); // Add ssr route path to nuxt context so we can account for page navigation between ssr and csr


  ssrContext.nuxt.routePath = app.context.route.path; // Add meta infos (used in renderer.js)

  ssrContext.meta = _app.$meta(); // Keep asyncData for each matched component in ssrContext (used in app/utils.js via this.$ssrContext)

  ssrContext.asyncData = {};

  const beforeRender = async () => {
    // Call beforeNuxtRender() methods
    await Promise.all(ssrContext.beforeRenderFns.map(fn => promisify(fn, {
      Components,
      nuxtState: ssrContext.nuxt
    })));
  };

  const renderErrorPage = async () => {
    // Don't server-render the page in static target
    if (ssrContext.target === 'static') {
      ssrContext.nuxt.serverRendered = false;
    } // Load layout for error page


    const layout = (layouts_error.options || layouts_error).layout;
    const errLayout = typeof layout === 'function' ? layout.call(layouts_error, app.context) : layout;
    ssrContext.nuxt.layout = errLayout || 'default';
    await _app.loadLayout(errLayout);

    _app.setLayout(errLayout);

    await beforeRender();
    return _app;
  };

  const render404Page = () => {
    app.context.error({
      statusCode: 404,
      path: ssrContext.url,
      message: 'This page could not be found'
    });
    return renderErrorPage();
  }; // Components are already resolved by setContext -> getRouteData (app/utils.js)


  const Components = getMatchedComponents(router.match(ssrContext.url));
  /*
  ** Call global middleware (nuxt.config.js)
  */

  let midd = ["checkout", "commercetools-generate-access-token", "nuxti18n"];
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Set layout
  */


  let layout = Components.length ? Components[0].options.layout : layouts_error.layout;

  if (typeof layout === 'function') {
    layout = layout(app.context);
  }

  await _app.loadLayout(layout);

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  layout = _app.setLayout(layout);
  ssrContext.nuxt.layout = _app.layoutName;
  /*
  ** Call middleware (layout + pages)
  */

  midd = [];
  layout = sanitizeComponent(layout);

  if (layout.options.middleware) {
    midd = midd.concat(layout.options.middleware);
  }

  Components.forEach(Component => {
    if (Component.options.middleware) {
      midd = midd.concat(Component.options.middleware);
    }
  });
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call .validate()
  */


  let isValid = true;

  try {
    for (const Component of Components) {
      if (typeof Component.options.validate !== 'function') {
        continue;
      }

      isValid = await Component.options.validate(app.context);

      if (!isValid) {
        break;
      }
    }
  } catch (validationError) {
    // ...If .validate() threw an error
    app.context.error({
      statusCode: validationError.statusCode || '500',
      message: validationError.message
    });
    return renderErrorPage();
  } // ...If .validate() returned false


  if (!isValid) {
    // Render a 404 error page
    return render404Page();
  } // If no Components found, returns 404


  if (!Components.length) {
    return render404Page();
  } // Call asyncData & fetch hooks on components matched by the route.


  const asyncDatas = await Promise.all(Components.map(Component => {
    const promises = []; // Call asyncData(context)

    if (Component.options.asyncData && typeof Component.options.asyncData === 'function') {
      const promise = promisify(Component.options.asyncData, app.context);
      promise.then(asyncDataResult => {
        ssrContext.asyncData[Component.cid] = asyncDataResult;
        applyAsyncData(Component);
        return asyncDataResult;
      });
      promises.push(promise);
    } else {
      promises.push(null);
    } // Call fetch(context)


    if (Component.options.fetch && Component.options.fetch.length) {
      promises.push(Component.options.fetch(app.context));
    } else {
      promises.push(null);
    }

    return Promise.all(promises);
  })); // datas are the first row of each

  ssrContext.nuxt.data = asyncDatas.map(r => r[0] || {}); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  } // Call beforeNuxtRender methods & add store state


  await beforeRender();
  return _app;
});

/***/ }),
/* 231 */
/***/ (function(module, exports) {

module.exports = require("vue-fragment");

/***/ }),
/* 232 */
/***/ (function(module, exports) {

module.exports = require("simplebar-vue");

/***/ }),
/* 233 */
/***/ (function(module, exports) {

module.exports = require("@glidejs/glide");

/***/ }),
/* 234 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfList/SfList.vue?vue&type=template&id=d2f84762&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{staticClass:"sf-list"},[_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfList/SfList.vue?vue&type=template&id=d2f84762&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfList/_internal/SfListItem.vue?vue&type=template&id=059dba83&
var SfListItemvue_type_template_id_059dba83_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"sf-list__item"},[_vm._t("default")],2)}
var SfListItemvue_type_template_id_059dba83_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfList/_internal/SfListItem.vue?vue&type=template&id=059dba83&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfList/_internal/SfListItem.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var SfListItemvue_type_script_lang_js_ = ({
  name: "SfListItem"
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfList/_internal/SfListItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var _internal_SfListItemvue_type_script_lang_js_ = (SfListItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfList/_internal/SfListItem.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _internal_SfListItemvue_type_script_lang_js_,
  SfListItemvue_type_template_id_059dba83_render,
  SfListItemvue_type_template_id_059dba83_staticRenderFns,
  false,
  null,
  null,
  "6569cab9"
  
)

/* harmony default export */ var SfListItem = (component.exports);
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(3);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfList/SfList.vue?vue&type=script&lang=js&
//
//
//
//
//
//


external_vue_default.a.component("SfListItem", SfListItem);
/* harmony default export */ var SfListvue_type_script_lang_js_ = ({
  name: "SfList"
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfList/SfList.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfList_SfListvue_type_script_lang_js_ = (SfListvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfList/SfList.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(130)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var SfList_component = Object(componentNormalizer["a" /* default */])(
  SfList_SfListvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "62ffc086"
  
)

/* harmony default export */ var SfList = __webpack_exports__["a"] = (SfList_component.exports);

/***/ }),
/* 235 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/molecules/SfCheckbox/SfCheckbox.vue?vue&type=template&id=b4cd85dc&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-checkbox",class:{
    'is-active': _vm.isChecked,
    'is-disabled': _vm.disabled,
    'has-error': !_vm.valid,
    'is-required': _vm.required,
  },attrs:{"data-testid":_vm.name}},[_vm._ssrNode("<label class=\"sf-checkbox__container\">","</label>",[_c('input',{directives:[{name:"focus",rawName:"v-focus"}],staticClass:"sf-checkbox__input",attrs:{"type":"checkbox","name":_vm.name,"disabled":_vm.disabled},domProps:{"value":_vm.value,"checked":_vm.isChecked},on:{"change":_vm.inputHandler}},[]),_vm._ssrNode(" "),_vm._t("checkmark",[_c('div',{staticClass:"sf-checkbox__checkmark",class:{ 'sf-checkbox__checkmark is-active': _vm.isChecked }},[(_vm.isChecked)?_c('SfIcon',{attrs:{"icon":"check","color":"white"}}):_vm._e()],1)],null,{ isChecked: _vm.isChecked, disabled: _vm.disabled }),_vm._ssrNode(" "),_vm._t("label",[(_vm.label)?_c('div',{staticClass:"sf-checkbox__label"},[_vm._v(_vm._s(_vm.label))]):_vm._e()],null,{ label: _vm.label, isChecked: _vm.isChecked, disabled: _vm.disabled })],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"sf-checkbox__message\">","</div>",[_c('transition',{attrs:{"name":"sf-fade"}},[(!_vm.disabled)?_vm._t(_vm.computedMessageSlotName,[_c('div',{class:_vm.computedMessageClass},[_vm._v(_vm._s(_vm.computedMessage))])],null,{ computedMessage: _vm.computedMessage }):_vm._e()],2)],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfCheckbox/SfCheckbox.vue?vue&type=template&id=b4cd85dc&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfIcon/SfIcon.vue + 6 modules
var SfIcon = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/utilities/directives/focus/focus-directive.js
var focus_directive = __webpack_require__(236);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/molecules/SfCheckbox/SfCheckbox.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var SfCheckboxvue_type_script_lang_js_ = ({
  name: "SfCheckbox",
  directives: {
    focus: focus_directive["a" /* focus */]
  },
  components: {
    SfIcon: SfIcon["a" /* default */]
  },
  model: {
    prop: "selected",
    event: "change"
  },
  props: {
    name: {
      type: String,
      default: ""
    },
    value: {
      type: [String, Boolean],
      default: ""
    },
    label: {
      type: String,
      default: ""
    },

    /**
     *  Hint/Required message value of checkbox.
     */
    hintMessage: {
      type: String,
      default: "Required."
    },
    required: {
      type: Boolean,
      default: false
    },

    /**
     * Info/success message value of select.
     */
    infoMessage: {
      type: String,
      default: ""
    },

    /**
     * Error message value of select. It will be appeared if `valid` is `true`.
     */
    errorMessage: {
      type: String,
      default: "This field is not correct."
    },
    valid: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    selected: {
      type: [Array, Boolean],
      default: () => []
    }
  },
  computed: {
    isChecked() {
      if (typeof this.selected === "boolean") {
        return this.selected;
      } else {
        return this.selected.includes(this.value);
      }
    },

    computedMessageSlotName() {
      return this.messagesHandler("show-error-message", "show-info-message", this.required ? "show-hint-message" : "");
    },

    computedMessage() {
      return this.messagesHandler(this.errorMessage, this.infoMessage, this.required ? this.hintMessage : "");
    },

    computedMessageClass() {
      return this.messagesHandler("sf-checkbox__message--error", "sf-checkbox__message--info", this.required ? "sf-checkbox__message--hint" : "");
    }

  },
  methods: {
    inputHandler() {
      if (typeof this.selected === "boolean") {
        this.$emit("change", !this.selected);
      } else {
        let selected = [...this.selected];

        if (selected.includes(this.value)) {
          selected = selected.filter(value => value !== this.value);
        } else {
          selected.push(this.value);
        }

        this.$emit("change", selected);
      }
    },

    messagesHandler(error, info, hint) {
      if (this.errorMessage && !this.valid) {
        return error;
      } else if (this.infoMessage && this.valid) {
        return info;
      } else if (this.hintMessage) {
        return hint;
      } else {
        return "";
      }
    }

  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfCheckbox/SfCheckbox.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfCheckbox_SfCheckboxvue_type_script_lang_js_ = (SfCheckboxvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfCheckbox/SfCheckbox.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(178)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SfCheckbox_SfCheckboxvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "0ecfcdb2"
  
)

/* harmony default export */ var SfCheckbox = __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 236 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return focus; });
const focus = {
  bind(el) {
    el._mouseHandler = function () {
      el.style.outline = "none";
    };

    el._keyHandler = function () {
      el.style.outline = "";
      el.focus();
    };

    window.addEventListener("mousedown", el._mouseHandler);
    el.addEventListener("keyup", el._keyHandler);
  },

  unbind(el) {
    window.removeEventListener("mousedown", el._mouseHandler);
    el.removeEventListener("keyup", el._keyHandler);
  }

};

/***/ }),
/* 237 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return deprecationWarning; });
const deprecationWarning = (componentName, msg) => {
   false && false;
};

/***/ }),
/* 238 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isClient; });
const isClient = (() => typeof window !== "undefined" || typeof document !== "undefined")();

/***/ }),
/* 239 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return clickOutside; });
const clickOutside = {
  bind(el, binding) {
    binding.name = "click-outside";
    const closeHandler = binding.value;

    el._outsideClickHandler = function (event) {
      if (!el.contains(event.target)) {
        event.stopPropagation();
        closeHandler();
      }
    };

    document.addEventListener("mouseup", el._outsideClickHandler);
    document.addEventListener("touchstart", el._outsideClickHandler);
  },

  unbind(el) {
    document.removeEventListener("mouseup", el._outsideClickHandler);
    document.removeEventListener("touchstart", el._outsideClickHandler);
    el._outsideClickHandler = null;
  }

};

/***/ }),
/* 240 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/molecules/SfSelect/SfSelect.vue?vue&type=template&id=2e1c1bd4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-select",class:{
    'is-selected': _vm.value || _vm.placeholder,
    'is-required': _vm.required,
    'is-disabled': _vm.disabled,
    'is-invalid': !_vm.valid,
  }},[_vm._ssrNode("<label"+(_vm._ssrAttr("for",_vm.label))+" class=\"sf-select__label\">","</label>",[_vm._t("label",[_vm._v("\n      "+_vm._s(_vm.label)+"\n    ")],{"label":_vm.label})],2),_vm._ssrNode(" "),_c('select',{directives:[{name:"focus",rawName:"v-focus"}],staticClass:"sf-select__dropdown",attrs:{"id":_vm.label},domProps:{"value":_vm.value},on:{"change":_vm.changeHandler}},[(_vm.placeholder)?_vm._ssrNode("<option disabled=\"disabled\" value"+(_vm._ssrAttr("selected",!!_vm.placeholder))+" class=\"sf-select__placeholder sf-select__option\">","</option>",[_vm._t("placeholder",null,null,{ placeholder: _vm.placeholder }),_vm._ssrNode(_vm._ssrEscape("\n      "+_vm._s(_vm.placeholder)+"\n    "))],2):_vm._e(),_vm._ssrNode(" "),_vm._t("default")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"sf-select__error-message\">","</div>",[_c('transition',{attrs:{"name":"sf-fade"}},[(!_vm.valid)?_vm._t("errorMessage",[_c('span',[_vm._v(" "+_vm._s(_vm.errorMessage)+" ")])],null,{ errorMessage: _vm.errorMessage }):_vm._e()],2)],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfSelect/SfSelect.vue?vue&type=template&id=2e1c1bd4&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/utilities/directives/focus/focus-directive.js
var focus_directive = __webpack_require__(236);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/molecules/SfSelect/_internal/SfSelectOption.vue?vue&type=template&id=f1bcdaf6&
var SfSelectOptionvue_type_template_id_f1bcdaf6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('option',{staticClass:"sf-select__option",attrs:{"tabindex":"0"},domProps:{"value":_vm.value}},[_vm._t("default")],2)}
var SfSelectOptionvue_type_template_id_f1bcdaf6_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfSelect/_internal/SfSelectOption.vue?vue&type=template&id=f1bcdaf6&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/molecules/SfSelect/_internal/SfSelectOption.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var SfSelectOptionvue_type_script_lang_js_ = ({
  name: "SfSelectOption",
  props: {
    value: {
      type: [String, Number, Object],
      default: ""
    }
  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfSelect/_internal/SfSelectOption.vue?vue&type=script&lang=js&
 /* harmony default export */ var _internal_SfSelectOptionvue_type_script_lang_js_ = (SfSelectOptionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfSelect/_internal/SfSelectOption.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _internal_SfSelectOptionvue_type_script_lang_js_,
  SfSelectOptionvue_type_template_id_f1bcdaf6_render,
  SfSelectOptionvue_type_template_id_f1bcdaf6_staticRenderFns,
  false,
  null,
  null,
  "45549ee7"
  
)

/* harmony default export */ var SfSelectOption = (component.exports);
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(3);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/molecules/SfSelect/SfSelect.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



external_vue_default.a.component("SfSelectOption", SfSelectOption);
/* harmony default export */ var SfSelectvue_type_script_lang_js_ = ({
  name: "SfSelect",
  directives: {
    focus: focus_directive["a" /* focus */]
  },
  props: {
    /**
     * Select field label
     */
    label: {
      type: String,
      default: ""
    },

    /**
     * Required attribute
     */
    required: {
      type: Boolean,
      default: false
    },

    /**
     * Validate value of form select
     */
    valid: {
      type: Boolean,
      default: true
    },

    /**
     * Disabled status of form select
     */
    disabled: {
      type: Boolean,
      default: false
    },

    /**
     * Error message value of form select. It will be appeared if `valid` is `true`.
     */
    errorMessage: {
      type: String,
      default: "This field is not correct."
    },

    /**
     * Value selected.
     */
    value: {
      type: String,
      default: ""
    },

    /**
     * Adds placeholder
     */
    placeholder: {
      type: String,
      default: ""
    }
  },
  methods: {
    changeHandler(event) {
      this.$emit("input", event.target.value);
    }

  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfSelect/SfSelect.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfSelect_SfSelectvue_type_script_lang_js_ = (SfSelectvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfSelect/SfSelect.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(128)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var SfSelect_component = Object(componentNormalizer["a" /* default */])(
  SfSelect_SfSelectvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "14e8ee52"
  
)

/* harmony default export */ var SfSelect = __webpack_exports__["a"] = (SfSelect_component.exports);

/***/ }),
/* 241 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/molecules/SfCharacteristic/SfCharacteristic.vue?vue&type=template&id=67dc008f&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-characteristic"},[_vm._t("icon",[_c('div',{staticClass:"sf-characteristic__icon"},[_c('SfIcon',{attrs:{"aria-hidden":"true","color":_vm.colorIcon,"size":_vm.sizeIcon,"icon":_vm.icon}})],1)],null,{ colorIcon: _vm.colorIcon, sizeIcon: _vm.sizeIcon, icon: _vm.icon }),_vm._ssrNode(" "),_vm._t("text",[_c('div',{staticClass:"sf-characteristic__text"},[_vm._t("title",[_c('div',{staticClass:"sf-characteristic__title"},[_vm._v(_vm._s(_vm.title))])],null,{ title: _vm.title }),_vm._v(" "),_vm._t("description",[_c('div',{staticClass:"sf-characteristic__description"},[_vm._v(_vm._s(_vm.description))])],null,{ description: _vm.description })],2)],null,{ title: _vm.title, description: _vm.description })],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfCharacteristic/SfCharacteristic.vue?vue&type=template&id=67dc008f&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfIcon/SfIcon.vue + 6 modules
var SfIcon = __webpack_require__(9);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/molecules/SfCharacteristic/SfCharacteristic.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var SfCharacteristicvue_type_script_lang_js_ = ({
  name: "SfCharacteristic",
  components: {
    SfIcon: SfIcon["a" /* default */]
  },
  props: {
    /** One of predefined SfIcon colors, default is black.  */
    colorIcon: {
      type: String,
      default: ""
    },

    /** One of predefined SfIcon sizes.  */
    sizeIcon: {
      type: String,
      default: ""
    },

    /** Svg file iconPath  */
    icon: {
      type: [String, Array],
      default: ""
    },

    /** Characteristic title  */
    title: {
      type: String,
      default: ""
    },

    /** Characteristic description  */
    description: {
      type: String,
      default: ""
    }
  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfCharacteristic/SfCharacteristic.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfCharacteristic_SfCharacteristicvue_type_script_lang_js_ = (SfCharacteristicvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfCharacteristic/SfCharacteristic.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(142)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SfCharacteristic_SfCharacteristicvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "03d51732"
  
)

/* harmony default export */ var SfCharacteristic = __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 242 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfCollectedProduct/SfCollectedProduct.vue?vue&type=template&id=81952558&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-collected-product"},[_vm._ssrNode("<div class=\"sf-collected-product__main\">","</div>",[_vm._ssrNode("<div class=\"sf-collected-product__details\">","</div>",[_vm._t("title",[_c('div',{staticClass:"sf-collected-product__title-wraper"},[_c(_vm.componentIs,{tag:"component",staticClass:"sf-collected-product__title",attrs:{"link":_vm.link ? _vm.link : ''}},[_vm._v("\n            "+_vm._s(_vm.title)+"\n          ")])],1)],null,{ title: _vm.title }),_vm._ssrNode(" "),_vm._t("price",[(_vm.regularPrice)?_c('SfPrice',{attrs:{"regular":_vm.regularPrice,"special":_vm.specialPrice}}):_vm._e()],null,{ specialPrice: _vm.specialPrice, regularPrice: _vm.regularPrice }),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"sf-collected-product__configuration\">","</div>",[_vm._t("configuration",[_c('SfProperty',{attrs:{"name":"Size","value":"XS"}}),_vm._v(" "),_c('SfProperty',{attrs:{"name":"Color","value":"white"}})])],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"sf-collected-product__actions\">","</div>",[_vm._t("actions",[_c('SfButton',{staticClass:"sf-button--text desktop-only"},[_vm._v("Save for later")])])],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"sf-collected-product__aside\">","</div>",[_vm._t("image",[_c('SfImage',{staticClass:"sf-collected-product__image",attrs:{"src":_vm.image,"alt":_vm.title,"width":_vm.imageWidth,"height":_vm.imageHeight}})],null,{ image: _vm.image, title: _vm.title }),_vm._ssrNode(" "),_vm._t("input",[_c('div',{staticClass:"sf-collected-product__quantity-wrapper"},[_c('SfQuantitySelector',{staticClass:"sf-collected-product__quantity-selector",attrs:{"qty":_vm.qty},on:{"input":function($event){return _vm.$emit('input', $event)}}})],1)])],2),_vm._ssrNode(" "),_vm._t("remove",[_c('SfCircleIcon',{staticClass:"sf-circle-icon--small sf-collected-product__remove sf-collected-product__remove--circle-icon",attrs:{"icon":"cross","aria-label":"Remove"},on:{"click":_vm.removeHandler}}),_vm._v(" "),_c('SfButton',{staticClass:"sf-button--text sf-collected-product__remove sf-collected-product__remove--text",on:{"click":_vm.removeHandler}},[_vm._v("Remove")])],null,{ removeHandler: _vm.removeHandler }),_vm._ssrNode(" "),_vm._t("more-actions",[_c('SfButton',{staticClass:"sf-button--pure sf-collected-product__more-actions smartphone-only",attrs:{"aria-label":"More actions"}},[_c('SfIcon',{attrs:{"icon":"more","size":"18px"}})],1)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfCollectedProduct/SfCollectedProduct.vue?vue&type=template&id=81952558&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfPrice/SfPrice.vue + 4 modules
var SfPrice = __webpack_require__(39);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfIcon/SfIcon.vue + 6 modules
var SfIcon = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfImage/SfImage.vue + 4 modules
var SfImage = __webpack_require__(25);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfCircleIcon/SfCircleIcon.vue + 4 modules
var SfCircleIcon = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfButton/SfButton.vue + 4 modules
var SfButton = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfQuantitySelector/SfQuantitySelector.vue + 4 modules
var SfQuantitySelector = __webpack_require__(41);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfLink/SfLink.vue + 4 modules
var SfLink = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfProperty/SfProperty.vue + 4 modules
var SfProperty = __webpack_require__(99);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfCollectedProduct/SfCollectedProduct.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ var SfCollectedProductvue_type_script_lang_js_ = ({
  name: "SfCollectedProduct",
  components: {
    SfButton: SfButton["a" /* default */],
    SfIcon: SfIcon["a" /* default */],
    SfImage: SfImage["a" /* default */],
    SfCircleIcon: SfCircleIcon["a" /* default */],
    SfPrice: SfPrice["a" /* default */],
    SfQuantitySelector: SfQuantitySelector["a" /* default */],
    SfLink: SfLink["a" /* default */],
    SfProperty: SfProperty["a" /* default */]
  },
  model: {
    prop: "qty"
  },
  props: {
    /**
     * Product image
     * It should be an url of the product
     */
    image: {
      type: [String, Object],
      default: ""
    },

    /**
     * Product image width, without unit
     */
    imageWidth: {
      type: [String, Number],
      default: 140
    },

    /**
     * Product image height, without unit
     */
    imageHeight: {
      type: [String, Number],
      default: 200
    },

    /**
     * Product title
     */
    title: {
      type: String,
      default: ""
    },

    /**
     * Product regular price
     */
    regularPrice: {
      type: [Number, String],
      default: null
    },

    /**
     * Product special price
     */
    specialPrice: {
      type: [Number, String],
      default: null
    },

    /**
     * Selected quantity
     */
    qty: {
      type: [Number, String],
      default: 1
    },

    /**
     * Link to product
     */
    link: {
      type: [String, Object],
      default: ""
    }
  },
  computed: {
    componentIs() {
      return this.link ? "SfLink" : "div";
    }

  },
  methods: {
    removeHandler() {
      this.$emit("click:remove");
    }

  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfCollectedProduct/SfCollectedProduct.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfCollectedProduct_SfCollectedProductvue_type_script_lang_js_ = (SfCollectedProductvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfCollectedProduct/SfCollectedProduct.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(172)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SfCollectedProduct_SfCollectedProductvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "313445f4"
  
)

/* harmony default export */ var SfCollectedProduct = __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 243 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/molecules/SfModal/SfModal.vue?vue&type=template&id=43faf85a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"sf-modal",class:[_vm.staticClass, _vm.className]},[(_vm.overlay)?_c('SfOverlay',{staticClass:"sf-modal__overlay",attrs:{"transition":_vm.transitionOverlay,"visible":_vm.visible}}):_vm._e(),_vm._ssrNode(" "),_c('transition',{attrs:{"name":_vm.transitionModal}},[(_vm.visible)?_c('div',{directives:[{name:"focus-trap",rawName:"v-focus-trap"},{name:"click-outside",rawName:"v-click-outside",value:(_vm.checkPersistence),expression:"checkPersistence"}],staticClass:"sf-modal__container"},[_vm._t("modal-bar",[_c('SfBar',{staticClass:"sf-modal__bar smartphone-only",attrs:{"close":false,"title":_vm.title},on:{"click:close":_vm.close}})]),_vm._v(" "),(_vm.cross)?_c('SfButton',{staticClass:"sf-button--pure sf-modal__close desktop-only",attrs:{"aria-label":"Close modal","type":"button"},on:{"click":_vm.close}},[_vm._t("close",[_c('SfIcon',{attrs:{"icon":"cross","size":"0.875rem","color":"gray-secondary"}})])],2):_vm._e(),_vm._v(" "),_c('div',{ref:"content",staticClass:"sf-modal__content"},[_vm._t("default")],2)],2):_vm._e()])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfModal/SfModal.vue?vue&type=template&id=43faf85a&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfBar/SfBar.vue + 4 modules
var SfBar = __webpack_require__(27);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfOverlay/SfOverlay.vue + 4 modules
var SfOverlay = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfIcon/SfIcon.vue + 6 modules
var SfIcon = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfButton/SfButton.vue + 4 modules
var SfButton = __webpack_require__(10);

// EXTERNAL MODULE: external "body-scroll-lock"
var external_body_scroll_lock_ = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/utilities/directives/focus-trap/focus-trap-directive.js + 1 modules
var focus_trap_directive = __webpack_require__(246);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/utilities/directives/click-outside/click-outside-directive.js
var click_outside_directive = __webpack_require__(239);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/utilities/helpers/check-environment.js
var check_environment = __webpack_require__(238);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/molecules/SfModal/SfModal.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ var SfModalvue_type_script_lang_js_ = ({
  name: "SfModal",
  directives: {
    focusTrap: focus_trap_directive["a" /* focusTrap */],
    clickOutside: click_outside_directive["a" /* clickOutside */]
  },
  components: {
    SfBar: SfBar["a" /* default */],
    SfOverlay: SfOverlay["a" /* default */],
    SfIcon: SfIcon["a" /* default */],
    SfButton: SfButton["a" /* default */]
  },
  model: {
    prop: "visible",
    event: "close"
  },
  props: {
    /**
     * Heading title of the modal
     */
    title: {
      type: String,
      default: ""
    },

    /**
     * Visibility of the modal
     */
    visible: {
      type: Boolean,
      default: false
    },

    /**
     * Cross closing modal button
     */
    cross: {
      type: Boolean,
      default: true
    },

    /**
     * Whether to show the overlay
     */
    overlay: {
      type: Boolean,
      default: true
    },

    /**
     * If true clicking outside will not dismiss the modal
     */
    persistent: {
      type: Boolean,
      default: false
    },

    /**
     * overlay transition effect
     */
    transitionOverlay: {
      type: String,
      default: "sf-fade"
    },

    /**
     * overlay transition effect
     */
    transitionModal: {
      type: String,
      default: "sf-fade"
    }
  },

  data() {
    return {
      staticClass: null,
      className: null
    };
  },

  watch: {
    visible: {
      handler: function (value) {
        if (!check_environment["a" /* isClient */]) return;

        if (value) {
          this.$nextTick(() => {
            Object(external_body_scroll_lock_["disableBodyScroll"])(this.$refs.content);
          });
          document.addEventListener("keydown", this.keydownHandler);
        } else {
          Object(external_body_scroll_lock_["clearAllBodyScrollLocks"])();
          document.removeEventListener("keydown", this.keydownHandler);
        }
      },
      immediate: true
    }
  },
  methods: {
    close() {
      this.$emit("close", false);
    },

    checkPersistence() {
      if (!this.persistent) {
        this.close();
      }
    },

    keydownHandler(e) {
      if (e.key === "Escape" || e.key === "Esc" || e.keyCode === 27) {
        this.close();
      }
    },

    classHandler() {
      if (this.staticClass !== this.$vnode.data.staticClass) {
        this.staticClass = this.$vnode.data.staticClass;
      }

      if (this.className !== this.$vnode.data.class) {
        this.className = this.$vnode.data.class;
      }
    }

  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfModal/SfModal.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfModal_SfModalvue_type_script_lang_js_ = (SfModalvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfModal/SfModal.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(176)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SfModal_SfModalvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "3d14e0ae"
  
)

/* harmony default export */ var SfModal = __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 244 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/atoms/SfLoader/SfLoader.vue?vue&type=template&id=6ccdb4f6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-loader"},[_c('transition',{attrs:{"name":"sf-fade","mode":"out-in"}},[(!_vm.loading)?_vm._t("default"):_c('div',{staticClass:"sf-loader__overlay"},[_vm._t("loader",[_c('svg',{staticClass:"sf-loader__spinner",attrs:{"role":"img","width":"38","height":"38","viewBox":"0 0 38 38","xmlns":"http://www.w3.org/2000/svg"}},[_c('title',[_vm._v("Loading...")]),_vm._v(" "),_c('g',{attrs:{"fill":"none","fill-rule":"evenodd"}},[_c('g',{attrs:{"transform":"translate(1 1)","stroke-width":"2"}},[_c('circle',{attrs:{"stroke-opacity":".5","cx":"18","cy":"18","r":"18"}}),_vm._v(" "),_c('path',{attrs:{"d":"M36 18c0-9.94-8.06-18-18-18"}},[_c('animateTransform',{attrs:{"attributeName":"transform","type":"rotate","from":"0 18 18","to":"360 18 18","dur":"1s","repeatCount":"indefinite"}})],1)])])])])],2)],2)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfLoader/SfLoader.vue?vue&type=template&id=6ccdb4f6&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/atoms/SfLoader/SfLoader.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var SfLoadervue_type_script_lang_js_ = ({
  name: "SfLoader",
  props: {
    /**
     * Shows the loader on top of the existing content
     */
    loading: {
      default: true,
      type: Boolean
    }
  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfLoader/SfLoader.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfLoader_SfLoadervue_type_script_lang_js_ = (SfLoadervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfLoader/SfLoader.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(180)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SfLoader_SfLoadervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "454898f2"
  
)

/* harmony default export */ var SfLoader = __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 245 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/molecules/SfAlert/SfAlert.vue?vue&type=template&id=2665efb0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-alert",class:("color-" + _vm.type)},[_vm._t("icon",[_c('SfIcon',{staticClass:"sf-alert__icon",attrs:{"aria-hidden":"true","icon":_vm.icon}})],null,{ icon: _vm.icon }),_vm._ssrNode(" "),_vm._t("message",[(_vm.message)?_c('span',{staticClass:"sf-alert__message"},[_vm._v(_vm._s(_vm.message))]):_vm._e()],null,{ message: _vm.message })],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfAlert/SfAlert.vue?vue&type=template&id=2665efb0&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfIcon/SfIcon.vue + 6 modules
var SfIcon = __webpack_require__(9);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/molecules/SfAlert/SfAlert.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var SfAlertvue_type_script_lang_js_ = ({
  name: "SfAlert",
  components: {
    SfIcon: SfIcon["a" /* default */]
  },
  props: {
    /**
     * Message that will be displayed in Alert.
     */
    message: {
      type: String,
      default: ""
    },

    /**
     * Alert type ("secondary", "info", "success", "warning", "danger"). Check "Knobs" section to see how they look like.
     */
    type: {
      type: String,
      default: "secondary",
      validator: function (value) {
        return ["secondary", "info", "success", "warning", "danger"].includes(value);
      }
    }
  },
  computed: {
    icon() {
      switch (this.type) {
        case "success":
          return "added_to_cart";

        case "danger":
          return "info_shield";

        default:
          return "info_circle";
      }
    }

  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfAlert/SfAlert.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfAlert_SfAlertvue_type_script_lang_js_ = (SfAlertvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfAlert/SfAlert.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(182)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SfAlert_SfAlertvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "74d0ffe8"
  
)

/* harmony default export */ var SfAlert = __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 246 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ focusTrap; });

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/utilities/directives/focus-trap/focus-trap.js
const focusableElements = ["a[href]", "button:not([disabled])", "button:not([hidden])", "[tabindex]:not([disabled])", "input:not([disabled])", "select", "textarea"];

const isHidden = selector => selector.offsetParent === null;

const getFocusableChildren = el => {
  return Array.from(el.querySelectorAll(focusableElements)).filter(selector => !isHidden(selector)) || [];
};
const isFocusable = (e, focusableChildrenElements) => Array.from(focusableChildrenElements).some(el => el === e.target);
const moveFocus = (e, focusableChildrenElements) => {
  if (!focusableChildrenElements.length || e.key !== "Tab") return;

  if (!isFocusable(e, focusableChildrenElements)) {
    e.preventDefault();
    focusableChildrenElements[0].focus();
  }

  if (focusableChildrenElements.length === 1) {
    e.preventDefault();
    return;
  }

  const lastElementIndex = focusableChildrenElements.length - 1;
  const isLastElement = e.target === focusableChildrenElements[lastElementIndex];
  const isFirstElement = e.target === focusableChildrenElements[0];
  const isGoingForward = e.shiftKey === false;

  if (isGoingForward && isLastElement) {
    e.preventDefault();
    focusableChildrenElements[0].focus();
  } else if (!isGoingForward && isFirstElement) {
    e.preventDefault();
    focusableChildrenElements[lastElementIndex].focus();
  }
};
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(3);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/utilities/directives/focus-trap/focus-trap-directive.js


const focusTrap = {
  bind(el) {
    external_vue_default.a.nextTick(() => {
      el._focusableChildrenElements = getFocusableChildren(el);
    });

    el._keyHandler = function (e) {
      if (e.key === "Tab") {
        if (!isFocusable(e, el._focusableChildrenElements)) {
          el._lastFocusedElement = e.target;
        }
      }

      moveFocus(e, el._focusableChildrenElements);
    };

    document.addEventListener("keydown", el._keyHandler);
  },

  componentUpdated(el) {
    external_vue_default.a.nextTick(() => {
      el._focusableChildrenElements = getFocusableChildren(el);
    });
  },

  unbind(el) {
    if (el._lastFocusedElement) el._lastFocusedElement.focus();
    document.removeEventListener("keydown", el._keyHandler);
  }

};

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map