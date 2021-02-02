exports.ids = [9];
exports.modules = {

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(262);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("3b501660", content, true, context)
};

/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(264);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("210d60a7", content, true, context)
};

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/atoms/SfRating/SfRating.vue?vue&type=template&id=51e88675&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-rating"},[_vm._l((Math.ceil(_vm.finalScore)),function(index){return _vm._t("icon-positive",[_c('SfIcon',{key:("p" + index),staticClass:"sf-rating__icon",attrs:{"size":"0.875rem","icon":_vm.icon,"coverage":index === Math.ceil(_vm.finalScore) && _vm.finalScore % 1 > 0
          ? _vm.finalScore % 1
          : 1}})])}),_vm._ssrNode(" "),_vm._l((parseInt(_vm.finalMax, 10) - Math.ceil(_vm.finalScore)),function(index){return _vm._t("icon-negative",[_c('SfIcon',{key:("n" + index),staticClass:"sf-rating__icon sf-rating__icon--negative",attrs:{"icon":_vm.icon}})])})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfRating/SfRating.vue?vue&type=template&id=51e88675&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfIcon/SfIcon.vue + 6 modules
var SfIcon = __webpack_require__(9);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/atoms/SfRating/SfRating.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var SfRatingvue_type_script_lang_js_ = ({
  name: "SfRating",
  components: {
    SfIcon: SfIcon["a" /* default */]
  },
  props: {
    /**
     * Maximum score
     */
    max: {
      type: Number,
      default: 5
    },

    /**
     * Score (obviously must be less than maximum)
     */
    score: {
      type: Number,
      default: 1
    },
    icon: {
      type: String,
      default: "star"
    }
  },
  computed: {
    finalScore() {
      if (!this.score) {
        return 0;
      } else if (this.score < 0) {
        return 0;
      } else if (this.score > this.max && this.max > 0) {
        return this.max;
      } else if (this.max <= 0) {
        return 0;
      } else {
        return this.score;
      }
    },

    finalMax() {
      return !this.max || this.max <= 0 ? 1 : this.max;
    }

  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfRating/SfRating.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfRating_SfRatingvue_type_script_lang_js_ = (SfRatingvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfRating/SfRating.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(261)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SfRating_SfRatingvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "32f42ec7"
  
)

/* harmony default export */ var SfRating = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfRating_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(253);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfRating_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfRating_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfRating_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfRating_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 262:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media (min-width:1024px){.smartphone-only{display:none!important}}@media (max-width:1023px){.desktop-only{display:none!important}}.sf-rating{display:flex}.sf-rating__icon{--icon-size:0.875rem;--icon-color:var(--c-primary);--icon-color-negative:var(--c-gray-variant)}.sf-rating__icon--negative{--icon-color:var(--icon-color-negative)}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfProductCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(254);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfProductCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfProductCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfProductCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfProductCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 264:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media (min-width:1024px){.smartphone-only{display:none!important}}@media (max-width:1023px){.desktop-only{display:none!important}}.sf-product-card{box-sizing:border-box;position:relative;z-index:var(--product-card-z-index);max-width:10.625rem;max-width:var(--product-card-max-width,10.625rem);flex:0 1 10.625rem;flex:0 1 var(--product-card-max-width,10.625rem);height:var(--product-card-height);padding:var(--product-card-padding,var(--spacer-xs));background-color:var(--c-white);background-color:var(--product-card-background,var(--c-white))}.sf-product-card:after{content:\"\";position:absolute;z-index:-1;top:0;left:0;right:0;bottom:0;transition:var(--product-card-transition);box-shadow:var(--product-card-box-shadow)}.sf-product-card:hover{--product-card-image-opacity:1;--product-card-image-even-opacity:1;--product-card-wishlist-icon-opacity:1;--product-card-add-button-opacity:1;--product-card-z-index:1}.sf-product-card:active,.sf-product-card:hover{--product-card-box-shadow:0px 4px 11px rgba(29,31,34,0.1)}.sf-product-card__link{display:block;width:100%;line-height:0;text-decoration:none;margin:0;margin:var(--product-card-link-margin,0)}.sf-product-card__title{font:var(--font-weight--normal) var(--h5-font-size)/1.6 var(--font-family--secondary);font:var(--product-card-title-font,var(--product-card-title-font-weight,var(--font-weight--normal)) var(--product-card-title-font-size,var(--h5-font-size))/var(--product-card-title-font-line-height,1.6) var(--product-card-title-font-family,var(--font-family--secondary)));color:var(--c-link);color:var(--product-card-title-color,var(--c-link));margin:var(--product-card-title-margin,var(--spacer-sm) 0 0 0)}.sf-product-card__image-wrapper{position:relative}.sf-product-card__image,.sf-product-card__picture{transition:opacity .15s ease-in-out;transition:var(--product-card-image-transition,opacity .15s ease-in-out);opacity:var(--product-card-image-opacity)}.sf-product-card__image:nth-child(2n),.sf-product-card__picture:nth-child(2n){position:absolute;top:0;left:0;opacity:0;opacity:var(--product-card-image-even-opacity,0)}.sf-product-card__badge{position:absolute;top:var(--spacer-xs);top:var(--product-card-badge-top,var(--spacer-xs));left:0;left:var(--product-card-badge-left,0)}.sf-product-card__add-button{--circle-icon-position:absolute;--button-box-shadow:0px 4px 11px rgba(29,31,34,0.1);right:1rem;right:var(--product-card-add-button-right,1rem);bottom:0;bottom:var(--product-card-add-button-bottom,0);display:none;display:var(--product-card-add-button-display,none);transform:translate3d(0,50%,0);transform:var(--product-card-add-button-transform,translate3d(0,50%,0));opacity:0;opacity:var(--product-card-add-button-opacity,0)}.sf-product-card__add-button:focus{--product-card-add-button-opacity:1}.sf-product-card__price{margin:var(--product-card-margin,var(--spacer-xs) 0)}.sf-product-card__reviews{display:flex;align-items:center}.sf-product-card__rating{display:flex}.sf-product-card__reviews-count{margin:var(--product-card-reviews-count-margin,0 0 0 var(--spacer-xs));color:var(--c-text);color:var(--product-card-reviews-count-color,var(--c-text));text-decoration:none;font:var(--font-weight--light) var(--font-size--sm)/1.6 var(--font-family--secondary);font:var(--product-reviews-count-font,var(--product-reviews-count-font-weight,var(--font-weight--light)) var(--product-reviews-count-font-size,var(--font-size--sm))/var(--product-reviews-count-font-line-height,1.6) var(--product-reviews-count-font-family,var(--font-family--secondary)))}.sf-product-card__wishlist-icon{--icon-color:var(--c-dark-variant);position:absolute;top:var(--spacer-sm);top:var(--product-card-wishlist-icon-top,var(--spacer-sm));right:var(--spacer-sm);right:var(--product-card-wishlist-icon-right,var(--spacer-sm));padding:0;padding:var(--product-card-wishlist-icon-padding,0);opacity:1;opacity:var(--product-card-wishlist-icon-opacity,1);transition:opacity .15s ease-in-out;transition:var(--product-card-wishlist-icon-transition,opacity .15s ease-in-out);cursor:pointer}.sf-product-card.on-wishlist,.sf-product-card__wishlist-icon:focus{--product-card-wishlist-icon-opacity:1}@media (min-width:1024px){.sf-product-card{--product-card-max-width:15.5rem;--product-card-padding:var(--spacer-sm);--product-card-transition:box-shadow 150ms ease-in-out;--product-card-wishlist-icon-top:var(--spacer-base);--product-card-wishlist-icon-right:var(--spacer-base);--product-card-wishlist-icon-opacity:0;--product-card-add-button-display:flex}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(307);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("3a974159", content, true, context)
};

/***/ }),

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(309);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("bb45c50e", content, true, context)
};

/***/ }),

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(311);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("15f5f8ac", content, true, context)
};

/***/ }),

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(313);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("53969172", content, true, context)
};

/***/ }),

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(315);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("5dcf2308", content, true, context)
};

/***/ }),

/***/ 278:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(317);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("5ee6bafc", content, true, context)
};

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/atoms/SfArrow/SfArrow.vue?vue&type=template&id=779a2fd7&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('SfButton',_vm._g(_vm._b({staticClass:"sf-arrow",attrs:{"type":"button"}},'SfButton',_vm.$attrs,false),_vm.$listeners),[_vm._t("default",[_c('SfIcon',{staticClass:"sf-arrow__icon",attrs:{"size":"1.5rem","icon":"arrow_left","aria-hidden":"true"}})])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfArrow/SfArrow.vue?vue&type=template&id=779a2fd7&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfButton/SfButton.vue + 4 modules
var SfButton = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfIcon/SfIcon.vue + 6 modules
var SfIcon = __webpack_require__(9);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/atoms/SfArrow/SfArrow.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var SfArrowvue_type_script_lang_js_ = ({
  name: "SfArrow",
  components: {
    SfButton: SfButton["a" /* default */],
    SfIcon: SfIcon["a" /* default */]
  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfArrow/SfArrow.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfArrow_SfArrowvue_type_script_lang_js_ = (SfArrowvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfArrow/SfArrow.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(312)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SfArrow_SfArrowvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "89e2d00a"
  
)

/* harmony default export */ var SfArrow = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfCallToAction_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(273);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfCallToAction_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfCallToAction_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfCallToAction_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfCallToAction_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 307:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media (min-width:1024px){.smartphone-only{display:none!important}}@media (max-width:1023px){.desktop-only{display:none!important}}.sf-call-to-action{display:flex;display:var(--banner-display,flex);box-sizing:border-box;flex-direction:column;flex-direction:var(--call-to-action-flex-direction,column);align-items:var(--call-to-action-align-items);justify-content:left;justify-content:var(--call-to-action-justify-content,left);min-height:auto;min-height:var(--call-to-action-height,auto);padding:var(--call-to-action-padding,var(--spacer-lg));background:var(--_call-to-action-background-image) transparent no-repeat 0 0;background:var(--call-to-action-background,var(--call-to-action-background-image,var(--_call-to-action-background-image)) var(--call-to-action-background-color,var(--_call-to-action-background-color,transparent)) no-repeat var(--call-to-action-background-position,0 0));background-size:cover;background-size:var(--call-to-action-background-size,cover);--call-to-action-background-position:60%}.sf-call-to-action__text-container{display:flex;justify-content:flex-start;justify-content:var(--call-to-action-text-container-justify-content,flex-start);flex-direction:column;flex-direction:var(--call-to-action-text-container-flex-direction,column);width:var(--call-to-action-text-container-width);margin:var(--call-to-action-text-container-margin)}.sf-call-to-action__title{margin:var(--call-to-action-title-margin,0 0 var(--spacer-base) 0);color:var(--c-white);color:var(--call-to-action-color,var(--call-to-action-title-color,var(--c-white)));font:var(--font-weight--semibold) var(--h2-font-size)/1.4 var(--font-family--secondary);font:var(--call-to-action-title-font,var(--call-to-action-title-font-weight,var(--font-weight--semibold)) var(--call-to-action-title-font-size,var(--h2-font-size))/var(--call-to-action-title-font-line-height,1.4) var(--call-to-action-title-font-family,var(--font-family--secondary)));text-transform:none;text-transform:var(--call-to-action-title-text-transform,none)}.sf-call-to-action__description{margin:var(--call-to-action-description-margin,0 0 var(--spacer-base) 0);color:var(--c-white);color:var(--call-to-action-color,var(--call-to-action-description-color,var(--c-white)));font:var(--font-weight--normal) var(--font-size--base)/1.6 var(--font-family--primary);font:var(--call-to-action-description-font,var(--call-to-action-description-font-weight,var(--font-weight--normal)) var(--call-to-action-description-font-size,var(--font-size--base))/var(--call-to-action-description-font-line-height,1.6) var(--call-to-action-description-font-family,var(--font-family--primary)))}@media (min-width:1024px){.sf-call-to-action{--call-to-action-description-font-size:var(--font-size--lg);--call-to-action-title-margin:0 0 var(--spacer-xs) 0;--call-to-action-flex-direction:row;--call-to-action-justify-content:space-between;--call-to-action-align-items:center;--call-to-action-padding:var(--spacer-xl) var(--spacer-2xl);--call-to-action-height:12.625rem;--call-to-action-text-container-width:75%}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfSection_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(274);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfSection_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfSection_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfSection_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfSection_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 309:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media (min-width:1024px){.smartphone-only{display:none!important}}@media (max-width:1023px){.desktop-only{display:none!important}}.sf-section{margin:var(--section-margin,calc(var(--spacer-lg)*2) 0 var(--spacer-lg) 0)}.sf-section__content{margin:var(--section-content-margin,calc(var(--spacer-lg)*2) 0 0 0)}@media (min-width:1024px){.sf-section{--section-margin:var(--spacer-3xl) 0;--section-content-margin:var(--spacer-2xl) 0 0 0}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_InstagramFeed_vue_vue_type_style_index_0_id_3ad6cc15_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(275);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_InstagramFeed_vue_vue_type_style_index_0_id_3ad6cc15_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_InstagramFeed_vue_vue_type_style_index_0_id_3ad6cc15_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_InstagramFeed_vue_vue_type_style_index_0_id_3ad6cc15_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_InstagramFeed_vue_vue_type_style_index_0_id_3ad6cc15_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 311:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media (min-width:1024px){.smartphone-only[data-v-3ad6cc15]{display:none!important}}@media (max-width:1023px){.desktop-only[data-v-3ad6cc15]{display:none!important}}.grid[data-v-3ad6cc15]{max-width:960px;margin:auto}.grid__row[data-v-3ad6cc15]{display:flex}.grid__row+.grid__row[data-v-3ad6cc15]{margin-top:calc(var(--spacer-xl)/2)}@media (min-width:1024px){.grid__row+.grid__row[data-v-3ad6cc15]{margin-top:var(--spacer-sm)}}.grid__col[data-v-3ad6cc15]{margin:0;flex:1}.grid__col+.grid__col[data-v-3ad6cc15]{margin-left:calc(var(--spacer-xl)/2)}@media (min-width:1024px){.grid__col+.grid__col[data-v-3ad6cc15]{margin-left:var(--spacer-sm)}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfArrow_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(276);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfArrow_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfArrow_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfArrow_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfArrow_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 313:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media (min-width:1024px){.smartphone-only{display:none!important}}@media (max-width:1023px){.desktop-only{display:none!important}}.sf-arrow{--button-width:2.75rem;--button-height:2.75rem;--button-padding:0 0.625rem;--button-background:var(--c-light);--button-transition:background 150ms linear;--icon-color:var(--c-dark);--button-box-shadow:0px 4px 4px var(--c-black);--box-shadow-transition-opacity-duration:150ms;display:flex;align-items:center;justify-content:center;justify-content:var(--arrow-justify-content,center)}.sf-arrow:hover{--button-background:var(--c-dark);--icon-color:var(--c-light);--button-box-shadow-opacity:0.25}.sf-arrow:active{--button-background:var(--c-link)}.sf-arrow:disabled{--button-background:var(--c-light);--icon-color:var(--c-text-disabled)}.sf-arrow__icon{transform:var(--arrow-icon-transform)}.sf-arrow--long{--button-width:4.375rem;--button-height:2.5rem;--button-background:var(--c-text-disabled);--button-transition:transform 150ms linear;--arrow-justify-content:flex-start}.sf-arrow--long.sf-arrow--right{--arrow-justify-content:flex-end;--arrow-icon-transform:rotate(180deg) scale(0.855,0.75)}.sf-arrow--long.sf-arrow--right:hover{transform-origin:center right}.sf-arrow--transparent{--button-background:transparent;--button-box-shadow:none}.sf-arrow--transparent:hover{--button-background:transparent;--icon-color:var(--c-dark)}.sf-arrow--transparent:disabled{--button-background:transparent;--icon-color:var(--c-text-disabled)}.sf-arrow--rounded{--button-border-radius:100%}.sf-arrow--no-shadow{--button-box-shadow:none}.sf-arrow--right{--arrow-icon-transform:rotate(180deg)}.sf-arrow--top{--arrow-icon-transform:rotate(90deg)}.sf-arrow--down{--arrow-icon-transform:rotate(270deg)}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfBanner_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(277);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfBanner_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfBanner_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfBanner_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfBanner_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 315:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media (min-width:1024px){.smartphone-only{display:none!important}}@media (max-width:1023px){.desktop-only{display:none!important}}.sf-banner{box-sizing:border-box;display:flex;display:var(--banner-display,flex);justify-content:flex-start;justify-content:var(--banner-justify-content,flex-start);width:100%;width:var(--banner-width,100%);min-height:21.4375rem;min-height:var(--banner-height,21.4375rem);background:var(--_banner-background-image) transparent no-repeat 0 0;background:var(--banner-background,var(--banner-background-image,var(--_banner-background-image)) var(--banner-background-color,var(--_banner-background-color,transparent)) no-repeat var(--banner-background-position,0 0));background-size:cover;background-size:var(--banner-background-size,cover);--banner-background-position:60%}.sf-banner__wrapper{display:flex;align-items:flex-start;align-items:var(--banner-align-items,flex-start);justify-content:flex-start;justify-content:var(--banner-wrapper-justify-content,flex-start);flex-direction:column;flex-direction:var(--banner-wrapper-flex-direction,column);padding:var(--banner-padding,var(--spacer-xl));flex:0 0 100%;flex:0 0 var(--banner-wrapper-width,100%);text-decoration:none}.sf-banner__wrapper.sf-button,.sf-banner__wrapper.sf-button:active,.sf-banner__wrapper.sf-button:hover{--button-background:transparent;--button-box-shadow-opacity:0}.sf-banner__subtitle{margin:0;margin:var(--banner-subtitle-margin,0);color:var(--c-dark-variant);color:var(--banner-color,var(--banner-subtitle-color,var(--c-dark-variant)));font:var(--font-weight--normal) var(--font-size--base)/1.4 var(--font-family--secondary);font:var(--banner-subtitle-font,var(--banner-subtitle-font-weight,var(--font-weight--normal)) var(--banner-subtitle-font-size,var(--font-size--base))/var(--banner-subtitle-font-line-height,1.4) var(--banner-subtitle-font-family,var(--font-family--secondary)));text-transform:uppercase;text-transform:var(--banner-subtitle-text-transform,uppercase)}.sf-banner__title{margin:var(--banner-title-margin,var(--spacer-2xs) 0 0 0);color:var(--c-text);color:var(--banner-color,var(--banner-title-color,var(--c-text)));font:var(--font-weight--normal) var(--h2-font-size)/1.4 var(--font-family--secondary);font:var(--banner-title-font,var(--banner-title-font-weight,var(--font-weight--normal)) var(--banner-title-font-size,var(--h2-font-size))/var(--banner-title-font-line-height,1.4) var(--banner-title-font-family,var(--font-family--secondary)));text-transform:uppercase;text-transform:var(--banner-title-text-transform,uppercase)}.sf-banner__description{display:none;display:var(--banner-description-display,none);margin:var(--banner-description-margin,var(--spacer-sm) 0 var(--spacer-base) 0);color:var(--c-text);color:var(--banner-color,var(--banner-description-color,var(--c-text)));text-align:left;text-align:var(--banner-description-text-align,left);font:var(--font-weight--light) var(--font-size--base)/1.6 var(--font-family--primary);font:var(--banner-description-font,var(--banner-description-font-weight,var(--font-weight--light)) var(--banner-description-font-size,var(--font-size--base))/var(--banner-description-font-line-height,1.6) var(--banner-description-font-family,var(--font-family--primary)))}.sf-banner__call-to-action{--button-color:var(--c-light-variant);display:none;display:var(--banner-display-call-to-action,none)}@media (min-width:1024px){.sf-banner{--banner-background-image:var(--_banner-background-desktop-image,var(--_banner-background-image));--banner-wrapper-width:50%;--banner-description-display:block;--banner-display-call-to-action:block;--banner-title-margin:var(--spacer-sm) 0 0 0;--banner-subtitle-color:var(--c-gray);align-items:center;align-items:var(--banner-align-items,center);min-height:25rem;min-height:var(--banner-height,25rem)}.sf-banner__wrapper{pointer-events:none}.sf-banner__call-to-action{--button-padding:var(--spacer-sm) var(--spacer-xl);pointer-events:auto}.sf-banner--right{--banner-justify-content:flex-end}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfCarousel_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(278);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfCarousel_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfCarousel_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfCarousel_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfCarousel_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 317:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media (min-width:1024px){.smartphone-only{display:none!important}}@media (max-width:1023px){.desktop-only{display:none!important}}.sf-carousel{position:relative}.sf-carousel__wrapper{max-width:calc(100% - var(--carousel-controls-size));max-width:var(--carousel-width,calc(100% - var(--carousel-controls-size)));padding:var(--carousel-padding);margin:auto;overflow:hidden}.sf-carousel__slides{margin:0}.sf-carousel__controls{position:absolute;position:var(--carousel-controls-position,absolute);top:50%;top:var(--carousel-controls-top,50%);left:0;left:var(--carousel-controls-left,0);transform:translate3d(0,-50%,0);transform:var(--carousel-controls-transform,translate3d(0,-50%,0));display:none;display:var(--carousel-controls-display,none);justify-content:space-between;justify-content:var(--carousel-controls-justify-content,space-between);width:100%;width:var(--carousel-controls-width,100%)}.sf-carousel .glide__slide,.sf-carousel .glide__slides,.sf-carousel .glide__track{overflow:unset}.sf-carousel .glide__slides{margin:0}@media (min-width:1024px){.sf-carousel{--carousel-controls-size:15rem;--carousel-controls-display:flex}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/InstagramFeed.vue?vue&type=template&id=3ad6cc15&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('SfSection',{staticClass:"section",attrs:{"title-heading":"Share Your Look","subtitle-heading":"#YOURLOOK"}},[_c('div',{staticClass:"grid grid-images"},[_c('div',{staticClass:"grid__row"},[_c('div',{staticClass:"grid__col"},[_c('SfImage',{attrs:{"src":"/homepage/imageA.webp","width":486,"height":486}},[_vm._v("katherina_trn")])],1),_vm._v(" "),_c('div',{staticClass:"grid__col"},[_c('SfImage',{attrs:{"src":"/homepage/imageB.webp","width":486,"height":486}},[_vm._v("katherina_trn")])],1)]),_vm._v(" "),_c('div',{staticClass:"grid__row"},[_c('div',{staticClass:"grid__col"},[_c('SfImage',{attrs:{"src":"/homepage/imageC.webp","width":486,"height":486}},[_vm._v("katherina_trn")])],1),_vm._v(" "),_c('div',{staticClass:"grid__col"},[_c('SfImage',{attrs:{"src":"/homepage/imageD.webp","width":486,"height":486}},[_vm._v("katherina_trn")])],1)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/InstagramFeed.vue?vue&type=template&id=3ad6cc15&scoped=true&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfSection/SfSection.vue + 4 modules
var SfSection = __webpack_require__(443);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfImage/SfImage.vue + 4 modules
var SfImage = __webpack_require__(25);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/InstagramFeed.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var InstagramFeedvue_type_script_lang_js_ = ({
  name: 'InstagramFeed',
  components: {
    SfSection: SfSection["a" /* default */],
    SfImage: SfImage["a" /* default */]
  }
});
// CONCATENATED MODULE: ./components/InstagramFeed.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_InstagramFeedvue_type_script_lang_js_ = (InstagramFeedvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/InstagramFeed.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(310)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_InstagramFeedvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3ad6cc15",
  "6fc8c714"
  
)

/* harmony default export */ var InstagramFeed = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 360:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(414);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("4689075a", content, true, context)
};

/***/ }),

/***/ 361:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(416);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("9e159e3c", content, true, context)
};

/***/ }),

/***/ 362:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(418);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("4151b44a", content, true, context)
};

/***/ }),

/***/ 363:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(420);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("6da69e15", content, true, context)
};

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfProductCard/SfProductCard.vue?vue&type=template&id=70f68e42&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-product-card"},[_vm._ssrNode("<div class=\"sf-product-card__image-wrapper\">","</div>",[_vm._t("image",[_c('SfLink',{staticClass:"sf-product-card__link",attrs:{"link":_vm.link}},[(Array.isArray(_vm.image))?_vm._l((_vm.image.slice(0, 2)),function(picture,key){return _c('SfImage',{key:key,staticClass:"sf-product-card__picture",attrs:{"src":picture,"alt":_vm.title,"width":_vm.imageWidth,"height":_vm.imageHeight}})}):_c('SfImage',{staticClass:"sf-product-card__image",attrs:{"src":_vm.image,"alt":_vm.title,"width":_vm.imageWidth,"height":_vm.imageHeight}})],2)],null,{ image: _vm.image, title: _vm.title, link: _vm.link, imageHeight: _vm.imageHeight, imageWidth: _vm.imageWidth }),_vm._ssrNode(" "),_vm._t("badge",[(_vm.badgeLabel)?_c('SfBadge',{staticClass:"sf-product-card__badge",class:_vm.badgeColorClass},[_vm._v(_vm._s(_vm.badgeLabel))]):_vm._e()],null,{ badgeLabel: _vm.badgeLabel, badgeColor: _vm.badgeColor }),_vm._ssrNode(" "),(_vm.wishlistIcon !== false)?_c('SfButton',{class:_vm.wishlistIconClasses,attrs:{"aria-label":(_vm.ariaLabel + " " + _vm.title)},on:{"click":_vm.toggleIsOnWishlist}},[_vm._t("wishlist-icon",[_c('SfIcon',{attrs:{"icon":_vm.currentWishlistIcon,"size":"22px","data-test":"sf-wishlist-icon"}})],null,{ currentWishlistIcon: _vm.currentWishlistIcon })],2):_vm._e(),_vm._ssrNode(" "),(_vm.showAddToCartButton)?[_vm._t("add-to-cart",[_c('SfCircleIcon',{staticClass:"sf-product-card__add-button",attrs:{"aria-label":("Add to Cart " + _vm.title),"has-badge":_vm.showAddedToCartBadge,"disabled":_vm.addToCartDisabled},on:{"click":_vm.onAddToCart}},[_c('div',{staticClass:"sf-product-card__add-button--icons"},[_c('transition',{attrs:{"name":"sf-pulse","mode":"out-in"}},[(!_vm.isAddingToCart && !_vm.isAddedToCart)?_vm._t("add-to-cart-icon",[_c('SfIcon',{key:"add_to_cart",attrs:{"icon":"add_to_cart","size":"20px","color":"white"}})]):_vm._t("adding-to-cart-icon",[_c('SfIcon',{key:"added_to_cart",attrs:{"icon":"added_to_cart","size":"20px","color":"white"}})])],2)],1)])],null,{
          isAddedToCart: _vm.isAddedToCart,
          showAddedToCartBadge: _vm.showAddedToCartBadge,
          isAddingToCart: _vm.isAddingToCart,
          title: _vm.title,
        })]:_vm._e()],2),_vm._ssrNode(" "),_vm._t("title",[_c('SfLink',{staticClass:"sf-product-card__link",attrs:{"link":_vm.link}},[_c('h3',{staticClass:"sf-product-card__title"},[_vm._v("\n        "+_vm._s(_vm.title)+"\n      ")])])],null,{ title: _vm.title, link: _vm.link }),_vm._ssrNode(" "),_vm._t("price",[(_vm.regularPrice)?_c('SfPrice',{staticClass:"sf-product-card__price",attrs:{"regular":_vm.regularPrice,"special":_vm.specialPrice}}):_vm._e()],null,{ specialPrice: _vm.specialPrice, regularPrice: _vm.regularPrice }),_vm._ssrNode(" "),_vm._t("reviews",[(typeof _vm.scoreRating === 'number')?_c('div',{staticClass:"sf-product-card__reviews"},[_c('SfRating',{staticClass:"sf-product-card__rating",attrs:{"max":_vm.maxRating,"score":_vm.scoreRating}}),_vm._v(" "),(_vm.reviewsCount)?_c('SfButton',{staticClass:"sf-button--pure sf-product-card__reviews-count",attrs:{"aria-label":("Read " + _vm.reviewsCount + " reviews about " + _vm.title)},on:{"click":function($event){return _vm.$emit('click:reviews')}}},[_vm._v("\n        ("+_vm._s(_vm.reviewsCount)+")\n      ")]):_vm._e()],1):_vm._e()],null,{ maxRating: _vm.maxRating, scoreRating: _vm.scoreRating })],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfProductCard/SfProductCard.vue?vue&type=template&id=70f68e42&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/shared/variables/colors.js
var colors = __webpack_require__(40);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfIcon/SfIcon.vue + 6 modules
var SfIcon = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfLink/SfLink.vue + 4 modules
var SfLink = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfPrice/SfPrice.vue + 4 modules
var SfPrice = __webpack_require__(39);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfRating/SfRating.vue + 4 modules
var SfRating = __webpack_require__(259);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfImage/SfImage.vue + 4 modules
var SfImage = __webpack_require__(25);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfCircleIcon/SfCircleIcon.vue + 4 modules
var SfCircleIcon = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfBadge/SfBadge.vue + 4 modules
var SfBadge = __webpack_require__(38);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfButton/SfButton.vue + 4 modules
var SfButton = __webpack_require__(10);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfProductCard/SfProductCard.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//










/* harmony default export */ var SfProductCardvue_type_script_lang_js_ = ({
  name: "SfProductCard",
  components: {
    SfPrice: SfPrice["a" /* default */],
    SfRating: SfRating["a" /* default */],
    SfIcon: SfIcon["a" /* default */],
    SfImage: SfImage["a" /* default */],
    SfLink: SfLink["a" /* default */],
    SfCircleIcon: SfCircleIcon["a" /* default */],
    SfBadge: SfBadge["a" /* default */],
    SfButton: SfButton["a" /* default */]
  },
  props: {
    /**
     * Product image
     * It should be an url of the product
     */
    image: {
      type: [Array, Object, String],
      default: ""
    },

    /**
     * Product image width, without unit
     */
    imageWidth: {
      type: [String, Number],
      default: 216
    },

    /**
     * Product image height, without unit
     */
    imageHeight: {
      type: [String, Number],
      default: 326
    },

    /**
     * Badge label
     */
    badgeLabel: {
      type: String,
      default: ""
    },

    /**
     * Badge color
     * It can be according to our standard colors, or legitimate CSS color such as `#fff`, `rgb(255,255,255)`), and `lightgray` or nothing.
     * Standard colors: `primary`, `secondary`, `white`, `black`, `accent`, `green-primary`, `green-secondary`, `gray-primary`, `gray-secondary`, `light-primary`, `light-secondary`, `pink-primary`, `pink-secondary`, `yellow-primary`, `yellow-secondary`, `blue-primary`, `blue-secondary`.
     */
    badgeColor: {
      type: String,
      default: ""
    },

    /**
     * Product title
     */
    title: {
      type: String,
      default: ""
    },

    /**
     * Link to product page
     */
    link: {
      type: [String, Object],
      default: ""
    },

    /**
     * Link element tag
     * @deprecated will be removed in 1.0.0 use slot to replace content
     */
    linkTag: {
      type: String,
      default: undefined
    },

    /**
     * Product rating
     */
    scoreRating: {
      type: [Number, Boolean],
      default: false
    },

    /**
     * Product reviews count
     */
    reviewsCount: {
      type: [Number, Boolean],
      default: false
    },

    /**
     * Maximum product rating
     */
    maxRating: {
      type: [Number, String],
      default: 5
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
     * Wish list icon
     * This is the default icon for product not yet added to wish list.
     * It can be a icon name from our icons list, or array or string as SVG path(s).
     */
    wishlistIcon: {
      type: [String, Array, Boolean],
      default: "heart"
    },

    /**
     * Wish list icon for product which has been added to wish list
     * This is the icon for product added to wish list. Default visible on mobile. Visible only on hover on desktop.
     * It can be a icon name from our icons list, or array or string as SVG path(s).
     */
    isOnWishlistIcon: {
      type: [String, Array],
      default: "heart_fill"
    },

    /**
     * Status of whether product is on wish list or not
     */
    isOnWishlist: {
      type: Boolean,
      default: false
    },

    /**
     * Status of showing add to cart button
     */
    showAddToCartButton: {
      type: Boolean,
      default: false
    },

    /**
     * isAddedToCart status of whether button is showed, product is added or not
     */
    isAddedToCart: {
      type: Boolean,
      deafult: false
    },

    /**
     * addToCartDisabled status of whether button is disabled when out of stock
     */
    addToCartDisabled: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      isAddingToCart: false
    };
  },

  computed: {
    isSFColors() {
      return colors["a" /* colorsValues */].includes(this.badgeColor.trim());
    },

    badgeColorClass() {
      return this.isSFColors ? `${this.badgeColor.trim()}` : "";
    },

    currentWishlistIcon() {
      return this.isOnWishlist ? this.isOnWishlistIcon : this.wishlistIcon;
    },

    showAddedToCartBadge() {
      return !this.isAddingToCart && this.isAddedToCart;
    },

    ariaLabel() {
      return this.isOnWishlist ? "Remove from wishlist" : "Add to wishlist";
    },

    wishlistIconClasses() {
      const defaultClass = "sf-button--pure sf-product-card__wishlist-icon";
      return `${defaultClass} ${this.isOnWishlist ? "on-wishlist" : ""}`;
    }

  },
  methods: {
    toggleIsOnWishlist() {
      this.$emit("click:wishlist", !this.isOnWishlist);
    },

    onAddToCart(event) {
      event.preventDefault();
      this.isAddingToCart = true;
      setTimeout(() => {
        this.isAddingToCart = false;
      }, 1000);
      this.$emit("click:add-to-cart");
    }

  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfProductCard/SfProductCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfProductCard_SfProductCardvue_type_script_lang_js_ = (SfProductCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfProductCard/SfProductCard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(263)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SfProductCard_SfProductCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "a51f2174"
  
)

/* harmony default export */ var SfProductCard = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfBullets_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(360);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfBullets_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfBullets_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfBullets_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfBullets_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 414:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media (min-width:1024px){.smartphone-only{display:none!important}}@media (max-width:1023px){.desktop-only{display:none!important}}.sf-bullet{box-sizing:border-box;width:.5rem;width:var(--bullet-width,var(--bullet-size,.5rem));height:.5rem;height:var(--bullet-height,var(--bullet-size,.5rem));margin:var(--bullet-margin,var(--spacer-2xs));border-radius:100%;border-radius:var(--bullet-border-radius,100%);background:var(--c-gray);background:var(--bullet-background,var(--c-gray));transition:transform .15s linear,box-shadow .15s linear;--bullet-box-shadow-opacity:0}.sf-bullet:before{content:\"\";position:absolute;z-index:-1;top:0;left:0;width:100%;height:100%;border-radius:inherit;transition:opacity .2s ease-in-out,box-shadow .2s ease-in-out;transition:var(--bullet-box-shadow-transition,opacity var(--bullet-box-shadow-transition-opacity-duration,.2s) var(--bullet-box-shadow-transition-opacity-timing-function,ease-in-out),box-shadow var(--bullet-box-shadow-transition-box-shadow-duration,.2s) var(--bullet-box-shadow-transition-box-shadow-timing-function,ease-in-out));opacity:var(--bullet-box-shadow-opacity);box-shadow:0 4px 4px 0 var(--c-black);box-shadow:var(--bullet-box-shadow,var(--bullet-box-shadow-h-offset,0) var(--bullet-box-shadow-v-offset,4px) var(--bullet-box-shadow-blur,4px) var(--bullet-box-shadow-spread,0) var(--bullet-box-shadow-color,var(--c-black)));will-change:opacity,box-shadow}.sf-bullet.is-active,.sf-bullet:hover{transform:scale3d(1.25,1.25,1);--bullet-box-shadow-opacity:0.25}.sf-bullet.is-active{--bullet-background:var(--c-primary);cursor:default}.sf-bullets{display:flex;align-items:center;padding:0;margin:0;list-style-type:none}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfHero_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(361);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfHero_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfHero_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfHero_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfHero_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 416:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media (min-width:1024px){.smartphone-only{display:none!important}}@media (max-width:1023px){.desktop-only{display:none!important}}.sf-hero-item{display:flex;justify-content:flex-start;justify-content:var(--hero-item-justify-content,flex-start);box-sizing:border-box;width:100%;width:var(--hero-item-width,100%);color:var(--c-text);color:var(--hero-item-color,var(--c-text));background:var(--_hero-item-background-image) transparent no-repeat 0 0;background:var(--hero-item-background,var(--hero-item-background-image,var(--_hero-item-background-image)) var(--hero-item-background-color,var(--_hero-item-background-color,transparent)) no-repeat var(--hero-item-background-position,0 0));background-size:cover;background-size:var(--hero-item-background-size,cover)}.sf-hero-item__wrapper{display:flex;flex-direction:column;flex-direction:var(--hero-item-wrapper-flex-direction,column);align-items:flex-start;align-items:var(--hero-item-wrapper-align-items,flex-start);justify-content:center;justify-content:var(--hero-item-wrapper-justify-content,center);width:100%;width:var(--hero-item-wrapper-width,100%);min-height:14rem;min-height:var(--hero-item-wrapper-height,14rem);padding:var(--hero-item-wrapper-padding,var(--spacer-sm));text-decoration:none}.sf-hero-item__wrapper.sf-button,.sf-hero-item__wrapper.sf-button:active,.sf-hero-item__wrapper.sf-button:hover,.sf-hero-item__wrapper.sf-link{--button-background:transparent;--button-box-shadow-opacity:0;--button-wrap:normal;text-align:left;text-align:var(--hero-item-wrapper-text-align,left)}.sf-hero-item__subtitle{margin:0;margin:var(--hero-item-subtitle-margin,0);color:var(--c-gray);color:var(--hero-item-subtitle-color,var(--c-gray));width:60%;width:var(--hero-item-subtitle-width,60%);font:var(--font-weight--normal) var(--h6-font-size)/1.4 var(--font-family--secondary);font:var(--hero-item-subtitle-font,var(--hero-item-subtitle-font-weight,var(--font-weight--normal)) var(--hero-item-subtitle-font-size,var(--h6-font-size))/var(--hero-item-subtitle-font-line-height,1.4) var(--hero-item-subtitle-font-family,var(--font-family--secondary)));text-transform:uppercase;text-transform:var(--hero-item-subtitle-transform,uppercase)}.sf-hero-item__title{margin:var(--hero-item-title-margin,var(--spacer-xs) 0 0 0);color:var(--c-text);color:var(--hero-item-title-color,var(--c-text));width:60%;width:var(--hero-item-title-width,60%);font:var(--font-weight--semibold) var(--h2-font-size)/1.2 var(--font-family--secondary);font:var(--hero-item-title-font,var(--hero-item-title-font-weight,var(--font-weight--semibold)) var(--hero-item-title-font-size,var(--h2-font-size))/var(--hero-item-title-font-line-height,1.2) var(--hero-item-title-font-family,var(--font-family--secondary)));letter-spacing:.1px;text-transform:none;text-transform:var(--hero-item-title-transform,none)}.sf-hero-item__button{display:none;display:var(--hero-item-button-display,none)}.sf-hero-item--align-right{--hero-item-justify-content:flex-end}.sf-hero-item--position-bg-top-right{background-position:100% 0}.sf-hero-item--position-bg-bottom-right{background-position:100% 100%}.sf-hero-item--position-bg-bottom-left{background-position:0 100%}@media (min-width:1024px){.sf-hero-item{--hero-item-wrapper-width:50%;--hero-item-wrapper-height:36.625rem;--hero-item-subtitle-width:100%;--hero-item-title-width:100%;--hero-item-wrapper-padding:var(--spacer-2xl);--hero-item-background-image:var(--_hero-item-background-desktop-image,var(--_hero-item-background-image))}.sf-hero-item__wrapper{pointer-events:none}.sf-hero-item__title{--hero-item-font-size:var(--h1-font-size);--hero-item-title-margin:var(--spacer-base) 0 var(--spacer-lg) 0}.sf-hero-item__button{--hero-item-button-display:block;pointer-events:auto}}.sf-hero{position:relative}.sf-hero__controls{position:absolute;top:50%;top:var(--hero-controls-top,50%);transform:translate3d(0,-50%,0);display:none;display:var(--hero-controls-display,none);box-sizing:border-box;justify-content:space-between;justify-content:var(--hero-controls-justify-content,space-between);width:100%;width:var(--hero-controls-width,100%);padding:var(--hero-controls-padding,0 var(--spacer-sm));pointer-events:none}.sf-hero__controls__arrow{pointer-events:all}.sf-hero__bullets{position:absolute;bottom:var(--spacer-xl);bottom:var(--hero-bullets-bottom,var(--spacer-xl));left:50%;transform:translate3d(-50%,0,0);display:none;display:var(--hero-bullets-display,none)}.sf-hero .glide__slides{margin:0}@media (min-width:1024px){.sf-hero__controls{--hero-controls-display:flex}.sf-hero__bullets{--hero-bullets-display:flex}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfBannerGrid_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(362);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfBannerGrid_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfBannerGrid_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfBannerGrid_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfBannerGrid_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 418:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media (min-width:1024px){.smartphone-only{display:none!important}}@media (max-width:1023px){.desktop-only{display:none!important}}.sf-banner-grid{--banner-align-items:flex-start;--banner-container-width:100%;--banner-description-margin:var(--spacer-xl) 0}.sf-banner-grid__row{display:block;display:var(--banner-grid-row-display,block);flex:var(--banner-grid-row-flex);margin:0;margin:var(--banner-grid-row-margin,0)}.sf-banner-grid__col{display:block;display:var(--banner-grid-col-display,block);flex:var(--banner-grid-col-flex);margin:0;margin:var(--banner-grid-col-margin,0)}.sf-banner-grid__col+.sf-banner-grid__col{--banner-grid-col-margin:var(--spacer-sm) 0 0 0}@media (min-width:1024px){.sf-banner-grid{--banner-grid-row-display:flex;--banner-grid-row-flex:0 0 100%;--banner-grid-col-display:flex}.sf-banner-grid__row{--banner-grid-row-margin:0}.sf-banner-grid__row+.sf-banner-grid__row{--banner-grid-row-margin:var(--spacer-xl) 0 0 0}.sf-banner-grid__col{--banner-grid-col-flex:1;flex-wrap:wrap;--banner-grid-col-margin:0}.sf-banner-grid__col+.sf-banner-grid__col{--banner-grid-col-margin:0 0 0 var(--spacer-xl)}.sf-banner-grid__col>.sf-banner,.sf-banner-grid__col>a{display:flex;flex:1}.sf-banner-grid__col--small{--banner-grid-col-flex:0 1 36%}.sf-banner-grid__col--medium{--banner-grid-col-flex:0 1 40%;--banner-container-width:70%}.sf-banner-grid__col--higher{--banner-height:510px}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_7e9c6a24_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(363);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_7e9c6a24_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_7e9c6a24_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_7e9c6a24_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_7e9c6a24_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 420:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media (min-width:1024px){.smartphone-only[data-v-7e9c6a24]{display:none!important}}@media (max-width:1023px){.desktop-only[data-v-7e9c6a24]{display:none!important}}#home[data-v-7e9c6a24]{box-sizing:border-box}@media (min-width:1024px){#home[data-v-7e9c6a24]{max-width:1240px;margin:0 auto}}.section[data-v-7e9c6a24]{padding:0 var(--spacer-sm)}@media (min-width:1024px){.section[data-v-7e9c6a24]{padding:0}}.sf-hero-item[data-v-7e9c6a24]{background-position:50%}.banner-grid[data-v-7e9c6a24]{--banner-container-width:50%;margin:var(--spacer-xl) 0}@media (min-width:1024px){.banner-grid[data-v-7e9c6a24]{margin:var(--spacer-2xl) 0}}.banner__tshirt[data-v-7e9c6a24]{background-position:0}@media (min-width:1024px){.banner-central[data-v-7e9c6a24]{--banner-container-flex:0 0 70%}}.call-to-action[data-v-7e9c6a24]{margin:var(--spacer-xl) 0}@media (min-width:1024px){.call-to-action[data-v-7e9c6a24]{margin:var(--spacer-2xl) 0 0 0}}.carousel[data-v-7e9c6a24]{margin:0 calc(var(--spacer-sm)*-1) 0 0}@media (min-width:1024px){.carousel[data-v-7e9c6a24]{margin:0}}.carousel__item[data-v-7e9c6a24]{margin:1.9375rem 0 2.4375rem}.carousel__item__product[data-v-7e9c6a24]{--product-card-add-button-transform:translate3d(0,30%,0)}.images-grid[data-v-7e9c6a24]{max-width:60rem;margin:0 auto}.images-grid__row[data-v-7e9c6a24]{display:flex}.images-grid__row+.images-grid__row[data-v-7e9c6a24]{margin:calc(var(--spacer-xl)/2) 0 0 0}@media (min-width:1024px){.images-grid__row+.images-grid__row[data-v-7e9c6a24]{margin:var(--spacer-xl) 0 0 0}}.images-grid__col[data-v-7e9c6a24]{flex:1;margin:0}.images-grid__col+.images-grid__col[data-v-7e9c6a24]{margin:0 0 0 calc(var(--spacer-xl)/2)}@media (min-width:1024px){.images-grid__col+.images-grid__col[data-v-7e9c6a24]{margin:0 0 0 var(--spacer-xl)}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfCarousel/SfCarousel.vue?vue&type=template&id=f6e0b642&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-carousel"},[_vm._ssrNode("<div class=\"sf-carousel__controls\">","</div>",[_vm._t("prev",[_c('SfArrow',{attrs:{"aria-label":"previous"},on:{"click":function($event){return _vm.go('prev')}}})],null,{ go: function () { return _vm.go('prev'); } }),_vm._ssrNode(" "),_vm._t("next",[_c('SfArrow',{staticClass:"sf-arrow--right",attrs:{"aria-label":"next"},on:{"click":function($event){return _vm.go('next')}}})],null,{ go: function () { return _vm.go('next'); } })],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"sf-carousel__wrapper\">","</div>",[_vm._ssrNode("<div class=\"glide\">","</div>",[_vm._ssrNode("<div data-glide-el=\"track\" class=\"glide__track\">","</div>",[_vm._ssrNode("<ul class=\"glide__slides sf-carousel__slides\">","</ul>",[_vm._t("default")],2)])])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfCarousel/SfCarousel.vue?vue&type=template&id=f6e0b642&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(3);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfCarousel/_internal/SfCarouselItem.vue?vue&type=template&id=07c837be&
var SfCarouselItemvue_type_template_id_07c837be_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"sf-carousel-item glide__slide"},[_vm._t("default")],2)}
var SfCarouselItemvue_type_template_id_07c837be_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfCarousel/_internal/SfCarouselItem.vue?vue&type=template&id=07c837be&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfCarousel/_internal/SfCarouselItem.vue?vue&type=script&lang=js&
//
//
//
//
//
/* harmony default export */ var SfCarouselItemvue_type_script_lang_js_ = ({
  name: "SfCarouselItem"
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfCarousel/_internal/SfCarouselItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var _internal_SfCarouselItemvue_type_script_lang_js_ = (SfCarouselItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfCarousel/_internal/SfCarouselItem.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _internal_SfCarouselItemvue_type_script_lang_js_,
  SfCarouselItemvue_type_template_id_07c837be_render,
  SfCarouselItemvue_type_template_id_07c837be_staticRenderFns,
  false,
  null,
  null,
  "5bc20f0e"
  
)

/* harmony default export */ var SfCarouselItem = (component.exports);
// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfArrow/SfArrow.vue + 4 modules
var SfArrow = __webpack_require__(295);

// EXTERNAL MODULE: external "@glidejs/glide"
var glide_ = __webpack_require__(233);
var glide_default = /*#__PURE__*/__webpack_require__.n(glide_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfCarousel/SfCarousel.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




external_vue_default.a.component("SfCarouselItem", SfCarouselItem);
/* harmony default export */ var SfCarouselvue_type_script_lang_js_ = ({
  name: "SfCarousel",
  components: {
    SfArrow: SfArrow["a" /* default */]
  },
  props: {
    /** Carousel options like glide.js (https://glidejs.com/docs/) */
    settings: {
      type: Object,
      default: () => ({})
    }
  },

  data() {
    return {
      glide: null,
      defaultSettings: {
        type: "carousel",
        rewind: true,
        perView: 4,
        slidePerPage: true,
        gap: 0,
        breakpoints: {
          1023: {
            perView: 2,
            peek: {
              before: 0,
              after: 50
            }
          }
        }
      }
    };
  },

  computed: {
    mergedOptions() {
      let breakpoints = { ...this.defaultSettings.breakpoints
      };

      if (this.settings.breakpoints) {
        breakpoints = { ...breakpoints,
          ...this.settings.breakpoints
        };
      }

      return { ...this.defaultSettings,
        ...this.settings,
        breakpoints: breakpoints
      };
    }

  },
  mounted: function () {
    this.$nextTick(() => {
      if (!this.$slots.default) return;
      const glide = new glide_default.a(this.$refs.glide, this.mergedOptions);
      const size = this.$slots.default.filter(slot => slot.tag).length;

      if (size <= glide.settings.perView) {
        glide.settings.perView = size;
        glide.settings.rewind = false;
        this.$refs.controls.style.display = "none";
      }

      glide.mount();
      glide.on("run.before", move => {
        const {
          slidePerPage,
          rewind,
          type
        } = this.mergedOptions;
        if (!slidePerPage) return;
        const {
          perView
        } = glide.settings;
        if (!perView > 1) return;
        const {
          direction
        } = move;
        let page, newIndex;

        switch (direction) {
          case ">":
          case "<":
            page = Math.ceil(glide.index / perView);
            newIndex = page * perView + (direction === ">" ? perView : -perView);

            if (newIndex >= size) {
              if (type === "slider" && !rewind) {
                newIndex = glide.index;
              } else {
                newIndex = 0;
              }
            } else if (newIndex < 0 || newIndex + perView > size) {
              if (type === "slider" && !rewind) {
                newIndex = glide.index;
              } else {
                newIndex = size - perView;
              }
            }

            move.direction = "=";
            move.steps = newIndex;
        }
      });
      this.glide = glide;
    });
  },
  methods: {
    go(direct) {
      if (!this.glide) return;

      switch (direct) {
        case "prev":
          this.glide.go("<");
          break;

        case "next":
          this.glide.go(">");
          break;
      }
    }

  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfCarousel/SfCarousel.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfCarousel_SfCarouselvue_type_script_lang_js_ = (SfCarouselvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfCarousel/SfCarousel.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(316)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var SfCarousel_component = Object(componentNormalizer["a" /* default */])(
  SfCarousel_SfCarouselvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "7b2553c6"
  
)

/* harmony default export */ var SfCarousel = __webpack_exports__["a"] = (SfCarousel_component.exports);

/***/ }),

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/molecules/SfCallToAction/SfCallToAction.vue?vue&type=template&id=1fffb473&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"sf-call-to-action",style:(_vm.style)},[_vm._ssrNode("<div class=\"sf-call-to-action__text-container\">","</div>",[_vm._t("title",[(_vm.title)?_c('h2',{staticClass:"sf-call-to-action__title"},[_vm._v("\n        "+_vm._s(_vm.title)+"\n      ")]):_vm._e()],null,{ title: _vm.title }),_vm._ssrNode(" "),_vm._t("description",[(_vm.description)?_c('p',{staticClass:"sf-call-to-action__description"},[_vm._v("\n        "+_vm._s(_vm.description)+"\n      ")]):_vm._e()],null,{ description: _vm.description })],2),_vm._ssrNode(" "),_vm._t("button",[(_vm.buttonText)?_c('SfButton',{staticClass:"sf-call-to-action__button",attrs:{"link":_vm.link}},[_vm._v("\n      "+_vm._s(_vm.buttonText)+"\n    ")]):_vm._e()],null,{ buttonText: _vm.buttonText })],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfCallToAction/SfCallToAction.vue?vue&type=template&id=1fffb473&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfButton/SfButton.vue + 4 modules
var SfButton = __webpack_require__(10);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/molecules/SfCallToAction/SfCallToAction.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var SfCallToActionvue_type_script_lang_js_ = ({
  name: "SfCallToAction",
  components: {
    SfButton: SfButton["a" /* default */]
  },
  props: {
    /**
     * CallToAction title.
     */
    title: {
      type: String,
      default: ""
    },

    /**
     * Text that will be displayed inside the button.
     */
    buttonText: {
      type: String,
      default: ""
    },

    /**
     *  CallToAction link. If it's filled in, changes button tag on a tag.
     */
    link: {
      type: String,
      default: ""
    },

    /**
     * CallToAction description.
     */
    description: {
      type: String,
      default: ""
    },

    /**
     * Background color.
     */
    background: {
      type: String,
      default: ""
    },

    /**
     * Background image.
     */
    image: {
      type: [String, Object],
      default: ""
    }
  },
  computed: {
    style() {
      const image = this.image;
      const background = this.background;
      return {
        "--_call-to-action-background-image": image.mobile ? `url(${image.mobile})` : `url(${image})`,
        "--_call-to-action-background-desktop-image": image.desktop && `url(${image.desktop})`,
        "--_call-to-action-background-color": background
      };
    }

  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfCallToAction/SfCallToAction.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfCallToAction_SfCallToActionvue_type_script_lang_js_ = (SfCallToActionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfCallToAction/SfCallToAction.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(306)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SfCallToAction_SfCallToActionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "e66ee99c"
  
)

/* harmony default export */ var SfCallToAction = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/molecules/SfSection/SfSection.vue?vue&type=template&id=289546f8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"sf-section"},[_vm._t("heading",[_c('SfHeading',{attrs:{"level":_vm.levelHeading,"title":_vm.titleHeading,"description":_vm.subtitleHeading}})],null,{ levelHeading: _vm.levelHeading, titleHeading: _vm.titleHeading, subtitleHeading: _vm.subtitleHeading }),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"sf-section__content\">","</div>",[_vm._t("default")],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfSection/SfSection.vue?vue&type=template&id=289546f8&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfHeading/SfHeading.vue + 4 modules
var SfHeading = __webpack_require__(26);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/molecules/SfSection/SfSection.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var SfSectionvue_type_script_lang_js_ = ({
  name: "SfSection",
  components: {
    SfHeading: SfHeading["a" /* default */]
  },
  props: {
    /**
     * Heading title
     */
    titleHeading: {
      type: String,
      default: ""
    },

    /**
     * Heading subtitle
     */
    subtitleHeading: {
      type: String,
      default: ""
    },

    /**
     * Heading tag level
     */
    levelHeading: {
      type: Number,
      default: 2
    }
  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfSection/SfSection.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfSection_SfSectionvue_type_script_lang_js_ = (SfSectionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfSection/SfSection.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(308)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SfSection_SfSectionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "2490de1e"
  
)

/* harmony default export */ var SfSection = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/molecules/SfBanner/SfBanner.vue?vue&type=template&id=79bcd866&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',_vm._g({staticClass:"sf-banner",style:(_vm.style)},_vm.isMobile ? _vm.$listeners : {}),[_c(_vm.wrapper,{tag:"component",staticClass:"sf-banner__wrapper",attrs:{"link":_vm.link}},[_vm._t("subtitle",[(_vm.subtitle)?_c('h2',{staticClass:"sf-banner__subtitle"},[_vm._v("\n        "+_vm._s(_vm.subtitle)+"\n      ")]):_vm._e()],null,{ subtitle: _vm.subtitle }),_vm._v(" "),_vm._t("title",[(_vm.title)?_c('h1',{staticClass:"sf-banner__title"},[_vm._v("\n        "+_vm._s(_vm.title)+"\n      ")]):_vm._e()],null,{ title: _vm.title }),_vm._v(" "),_vm._t("description",[(_vm.description)?_c('p',{staticClass:"sf-banner__description"},[_vm._v("\n        "+_vm._s(_vm.description)+"\n      ")]):_vm._e()],null,{ description: _vm.description }),_vm._v(" "),_vm._t("call-to-action",[(_vm.buttonText && !_vm.isMobile)?_c('SfButton',_vm._g({staticClass:"sf-banner__call-to-action color-secondary",attrs:{"link":_vm.link}},!_vm.isMobile ? _vm.$listeners : {}),[_vm._v("\n        "+_vm._s(_vm.buttonText)+"\n      ")]):_vm._e()],null,{ buttonText: _vm.buttonText })],2)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfBanner/SfBanner.vue?vue&type=template&id=79bcd866&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfButton/SfButton.vue + 4 modules
var SfButton = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfLink/SfLink.vue + 4 modules
var SfLink = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/utilities/mobile-observer.js
var mobile_observer = __webpack_require__(17);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/molecules/SfBanner/SfBanner.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var SfBannervue_type_script_lang_js_ = ({
  name: "SfBanner",
  components: {
    SfButton: SfButton["a" /* default */],
    SfLink: SfLink["a" /* default */]
  },
  props: {
    /**
     * Banner title
     */
    title: {
      type: String,
      default: ""
    },

    /**
     * Banner subtitle (at the top)
     */
    subtitle: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },

    /** text that will be displayed inside the button. You can replace the button  with "call-to-action" slot */
    buttonText: {
      type: String,
      default: ""
    },

    /** link to be used in call to action button if necessary */
    link: {
      type: String,
      default: ""
    },

    /** Background color in HEX (eg #FFFFFF) */
    background: {
      type: String,
      default: ""
    },

    /** Background image. Influenced by $banner-background-size, $banner-background-position CSS props. */
    image: {
      type: [String, Object],
      default: ""
    }
  },
  computed: { ...Object(mobile_observer["a" /* mapMobileObserver */])(),

    style() {
      const image = this.image;
      const background = this.background;
      return {
        "--_banner-background-image": image.mobile ? `url(${image.mobile})` : `url(${image})`,
        "--_banner-background-desktop-image": image.desktop && `url(${image.desktop})`,
        "--_banner-background-color": background
      };
    },

    wrapper() {
      return !this.isMobile ? "div" : this.link ? "SfLink" : "SfButton";
    }

  },

  beforeDestroy() {
    Object(mobile_observer["b" /* unMapMobileObserver */])();
  }

});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfBanner/SfBanner.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfBanner_SfBannervue_type_script_lang_js_ = (SfBannervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfBanner/SfBanner.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(314)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SfBanner_SfBannervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "0213375c"
  
)

/* harmony default export */ var SfBanner = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/Home.vue?vue&type=template&id=7e9c6a24&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"home"}},[_c('SfHero',{staticClass:"section"},_vm._l((_vm.heroes),function(hero,i){return _c('SfHeroItem',{key:i,class:hero.className,attrs:{"title":hero.title,"subtitle":hero.subtitle,"button-text":hero.buttonText,"background":hero.background,"image":hero.image}})}),1),_vm._ssrNode(" "),_c('SfBannerGrid',{staticClass:"section banner-grid",attrs:{"banner-grid":1},scopedSlots:_vm._u([_vm._l((_vm.banners),function(item){return {key:item.slot,fn:function(){return [_c('SfBanner',{key:item.slot,class:item.class,attrs:{"title":item.title,"subtitle":item.subtitle,"description":item.description,"button-text":item.buttonText,"image":item.image}})]},proxy:true}})],null,true)}),_vm._ssrNode(" "),_c('SfCallToAction',{staticClass:"call-to-action",attrs:{"title":"Subscribe to Newsletters","button-text":"Subscribe","description":"Be aware of upcoming sales and events. Receive gifts and special offers!","image":"/homepage/newsletter.webp"}}),_vm._ssrNode(" "),_c('SfSection',{staticClass:"section",attrs:{"title-heading":"Best Sellers"}},[_c('SfCarousel',{staticClass:"carousel",attrs:{"settings":{ peek: 16, breakpoints: { 1023: { peek: 0, perView: 2 } } }}},_vm._l((_vm.products),function(product,i){return _c('SfCarouselItem',{key:i,staticClass:"carousel__item"},[_c('SfProductCard',{staticClass:"carousel__item__product",attrs:{"data-cy":"home-url_product","title":product.title,"image":product.image,"regular-price":product.price.regular,"max-rating":product.rating.max,"score-rating":product.rating.score,"show-add-to-cart-button":true,"is-on-wishlist":product.isOnWishlist,"link":"/"},on:{"click:wishlist":function($event){return _vm.toggleWishlist(i)}}})],1)}),1)],1),_vm._ssrNode(" "),_c('InstagramFeed')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/Home.vue?vue&type=template&id=7e9c6a24&scoped=true&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfHero/SfHero.vue?vue&type=template&id=707fc288&
var SfHerovue_type_template_id_707fc288_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-hero"},[_vm._ssrNode("<div class=\"glide\">","</div>",[_vm._ssrNode("<div data-glide-el=\"track\" class=\"glide__track\">","</div>",[_vm._ssrNode("<ul class=\"glide__slides sf-hero__slides\">","</ul>",[_vm._t("default")],2)])]),_vm._ssrNode(" "),(_vm.numberOfPages > 1)?_vm._ssrNode("<div class=\"sf-hero__controls\">","</div>",[_vm._t("prev",[_c('div',{on:{"click":function($event){return _vm.go('prev')}}},[_c('SfArrow',{staticClass:"sf-arrow sf-arrow--transparent sf-hero__controls__arrow",attrs:{"aria-label":"previous"}})],1)],null,{ go: function () { return _vm.go('prev'); } }),_vm._ssrNode(" "),_vm._t("next",[_c('div',{on:{"click":function($event){return _vm.go('next')}}},[_c('SfArrow',{staticClass:"sf-arrow sf-arrow--right sf-arrow--transparent sf-hero__controls__arrow",attrs:{"aria-label":"next"}})],1)],null,{ go: function () { return _vm.go('next'); } })],2):_vm._e(),_vm._ssrNode(" "),(_vm.numberOfPages > 1)?_vm._ssrNode("<div class=\"sf-hero__bullets\">","</div>",[_vm._t("bullets",[_c('SfBullets',{attrs:{"total":_vm.numberOfPages,"current":_vm.page - 1},on:{"click":function($event){return _vm.go($event)}}})],null,{ numberOfPages: _vm.numberOfPages, page: _vm.page, go: _vm.go })],2):_vm._e()],2)}
var SfHerovue_type_template_id_707fc288_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfHero/SfHero.vue?vue&type=template&id=707fc288&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(3);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfHero/_internal/SfHeroItem.vue?vue&type=template&id=23d69c88&
var SfHeroItemvue_type_template_id_23d69c88_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"glide__slide sf-hero-item",style:(_vm.style)},[_c(_vm.wrapper,{tag:"component",staticClass:"sf-hero-item__wrapper",attrs:{"link":_vm.link}},[_vm._t("subtitle",[(_vm.subtitle)?_c('div',{staticClass:"sf-hero-item__subtitle"},[_vm._v(_vm._s(_vm.subtitle))]):_vm._e()],null,{ subtitle: _vm.subtitle }),_vm._v(" "),_vm._t("title",[(_vm.title)?_c('h1',{staticClass:"sf-hero-item__title"},[_vm._v(_vm._s(_vm.title))]):_vm._e()],null,{ title: _vm.title }),_vm._v(" "),_vm._t("call-to-action",[(_vm.buttonText && !_vm.isMobile)?_c('div',{staticClass:"sf-hero-item__button"},[_c('SfButton',{attrs:{"link":_vm.link}},[_vm._v("\n          "+_vm._s(_vm.buttonText)+"\n        ")])],1):_vm._e()],null,{ buttonText: _vm.buttonText, link: _vm.link })],2)],1)}
var SfHeroItemvue_type_template_id_23d69c88_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfHero/_internal/SfHeroItem.vue?vue&type=template&id=23d69c88&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfButton/SfButton.vue + 4 modules
var SfButton = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfLink/SfLink.vue + 4 modules
var SfLink = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/utilities/mobile-observer.js
var mobile_observer = __webpack_require__(17);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfHero/_internal/SfHeroItem.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var SfHeroItemvue_type_script_lang_js_ = ({
  name: "SfHeroItem",
  components: {
    SfButton: SfButton["a" /* default */],
    SfLink: SfLink["a" /* default */]
  },
  props: {
    /** Hero item title */
    title: {
      type: String,
      default: ""
    },

    /** Hero item subtitle (at the top) */
    subtitle: {
      type: String,
      default: ""
    },

    /** text that will be displayed inside the button. You can replace the button  with "call-to-action" slot */
    buttonText: {
      type: String,
      default: ""
    },

    /** Background color */
    background: {
      type: String,
      default: ""
    },

    /** Background image path */
    image: {
      type: [Object, String],
      default: ""
    },

    /** link to be used in button if necessary */
    link: {
      type: String,
      default: ""
    }
  },
  computed: { ...Object(mobile_observer["a" /* mapMobileObserver */])(),

    style() {
      const image = this.image;
      const background = this.background;
      return {
        "--_hero-item-background-image": image.mobile ? `url(${image.mobile})` : `url(${image})`,
        "--_hero-item-background-desktop-image": image.desktop && `url(${image.desktop})`,
        "--_hero-item-background-color": background
      };
    },

    wrapper() {
      return !this.isMobile ? "div" : this.link ? "SfLink" : "SfButton";
    }

  },

  beforeDestroy() {
    Object(mobile_observer["b" /* unMapMobileObserver */])();
  }

});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfHero/_internal/SfHeroItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var _internal_SfHeroItemvue_type_script_lang_js_ = (SfHeroItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfHero/_internal/SfHeroItem.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _internal_SfHeroItemvue_type_script_lang_js_,
  SfHeroItemvue_type_template_id_23d69c88_render,
  SfHeroItemvue_type_template_id_23d69c88_staticRenderFns,
  false,
  null,
  null,
  "6e5d6e39"
  
)

/* harmony default export */ var SfHeroItem = (component.exports);
// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfArrow/SfArrow.vue + 4 modules
var SfArrow = __webpack_require__(295);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/atoms/SfBullets/SfBullets.vue?vue&type=template&id=7d0bcfcb&
var SfBulletsvue_type_template_id_7d0bcfcb_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ol',{staticClass:"sf-bullets"},[_vm._l((_vm.inactiveLeft),function(_,index){return [_vm._t("inactive",[_c('li',{key:index},[_c('SfButton',{staticClass:"sf-button--pure sf-bullet",attrs:{"aria-label":'Go to slide ' + (index + 1),"data-testid":index + 1},on:{"click":function($event){return _vm.go(index)}}})],1)],null,{ index: index, go: _vm.go })]}),_vm._ssrNode(" "),_vm._t("active",[_c('li',[_c('SfButton',{staticClass:"sf-button--pure sf-bullet is-active",attrs:{"aria-label":"Current slide"}})],1)]),_vm._ssrNode(" "),_vm._l((_vm.inactiveRight),function(_,index){return [_vm._t("inactive",[_c('li',{key:_vm.inactiveLeft + 1 + index},[_c('SfButton',{staticClass:"sf-button--pure sf-bullet",attrs:{"aria-label":'Go to slide ' + (_vm.inactiveLeft + 2 + index),"data-testid":_vm.inactiveLeft + 1 + index},on:{"click":function($event){return _vm.go(_vm.inactiveLeft + 1 + index)}}})],1)],null,{ index: _vm.inactiveLeft + 1 + index, go: _vm.go })]})],2)}
var SfBulletsvue_type_template_id_7d0bcfcb_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfBullets/SfBullets.vue?vue&type=template&id=7d0bcfcb&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/atoms/SfBullets/SfBullets.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var SfBulletsvue_type_script_lang_js_ = ({
  name: "SfBullets",
  components: {
    SfButton: SfButton["a" /* default */]
  },
  props: {
    /**
     * Number of bullets in total (active + inactive)
     */
    total: {
      type: Number,
      default: 0
    },

    /**
     * Index of the currently active bullet (0-indexed)
     */
    current: {
      type: Number,
      default: 0
    }
  },
  computed: {
    inactiveRight() {
      return this.total - 1 - this.current;
    },

    inactiveLeft() {
      return this.total - this.inactiveRight - 1;
    }

  },
  methods: {
    go(index) {
      this.$emit("click", index);
    }

  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfBullets/SfBullets.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfBullets_SfBulletsvue_type_script_lang_js_ = (SfBulletsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfBullets/SfBullets.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(413)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var SfBullets_component = Object(componentNormalizer["a" /* default */])(
  SfBullets_SfBulletsvue_type_script_lang_js_,
  SfBulletsvue_type_template_id_7d0bcfcb_render,
  SfBulletsvue_type_template_id_7d0bcfcb_staticRenderFns,
  false,
  injectStyles,
  null,
  "3597326a"
  
)

/* harmony default export */ var SfBullets = (SfBullets_component.exports);
// EXTERNAL MODULE: external "@glidejs/glide"
var glide_ = __webpack_require__(233);
var glide_default = /*#__PURE__*/__webpack_require__.n(glide_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfHero/SfHero.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





external_vue_default.a.component("SfHeroItem", SfHeroItem);
/* harmony default export */ var SfHerovue_type_script_lang_js_ = ({
  name: "SfHero",
  components: {
    SfArrow: SfArrow["a" /* default */],
    SfBullets: SfBullets
  },
  props: {
    /**
     * Slider options like glide.js (https://glidejs.com/docs/)
     */
    sliderOptions: {
      type: Object,
      default: () => ({})
    }
  },

  data() {
    return {
      glide: null,
      defaultOptions: {
        type: "slider",
        rewind: true,
        autoplay: 5000,
        perView: 1,
        gap: 0
      }
    };
  },

  computed: {
    mergedOptions() {
      return { ...this.defaultOptions,
        ...this.sliderOptions
      };
    },

    numberOfPages() {
      return this.$slots.default ? this.$slots.default.filter(slot => slot.tag).length : 0;
    },

    page() {
      if (this.glide) {
        return this.glide.index + 1;
      }

      return 1;
    }

  },

  mounted() {
    if (this.numberOfPages) {
      this.$nextTick(() => {
        if (!this.$slots.default) return;
        const glide = new glide_default.a(this.$refs.glide, this.mergedOptions);
        glide.mount();
        this.glide = glide;
      });
    }
  },

  methods: {
    go(direct) {
      if (!this.glide) return;

      switch (direct) {
        case "prev":
          this.glide.go("<");
          break;

        case "next":
          this.glide.go(">");
          break;

        default:
          this.glide.go(`=${direct}`);
          break;
      }
    }

  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfHero/SfHero.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfHero_SfHerovue_type_script_lang_js_ = (SfHerovue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfHero/SfHero.vue



function SfHero_injectStyles (context) {
  
  var style0 = __webpack_require__(415)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var SfHero_component = Object(componentNormalizer["a" /* default */])(
  SfHero_SfHerovue_type_script_lang_js_,
  SfHerovue_type_template_id_707fc288_render,
  SfHerovue_type_template_id_707fc288_staticRenderFns,
  false,
  SfHero_injectStyles,
  null,
  "2bf27df4"
  
)

/* harmony default export */ var SfHero = (SfHero_component.exports);
// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfBanner/SfBanner.vue + 4 modules
var SfBanner = __webpack_require__(444);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfCallToAction/SfCallToAction.vue + 4 modules
var SfCallToAction = __webpack_require__(442);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfSection/SfSection.vue + 4 modules
var SfSection = __webpack_require__(443);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfCarousel/SfCarousel.vue + 9 modules
var SfCarousel = __webpack_require__(441);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfProductCard/SfProductCard.vue + 4 modules
var SfProductCard = __webpack_require__(380);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfImage/SfImage.vue + 4 modules
var SfImage = __webpack_require__(25);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfBannerGrid/SfBannerGrid.vue?vue&type=template&id=71b3afb1&
var SfBannerGridvue_type_template_id_71b3afb1_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-banner-grid"},[(_vm.bannerGrid === 1)?[_vm._ssrNode("<div class=\"sf-banner-grid__row\">","</div>",[_vm._ssrNode("<div class=\"sf-banner-grid__col\">","</div>",[_vm._t("banner-A")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"sf-banner-grid__col sf-banner-grid__col--medium\">","</div>",[_vm._t("banner-B")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"sf-banner-grid__col\">","</div>",[_vm._ssrNode("<div class=\"sf-banner-grid__row\">","</div>",[_vm._ssrNode("<div class=\"sf-banner-grid__col\">","</div>",[_vm._t("banner-C")],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"sf-banner-grid__row\">","</div>",[_vm._ssrNode("<div class=\"sf-banner-grid__col\">","</div>",[_vm._t("banner-D")],2)])],2)],2)]:_vm._e(),_vm._ssrNode(" "),(_vm.bannerGrid === 2)?[_vm._ssrNode("<div class=\"sf-banner-grid__row\">","</div>",[_vm._ssrNode("<div class=\"sf-banner-grid__col sf-banner-grid__col--small\">","</div>",[_vm._t("banner-A")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"sf-banner-grid__col\">","</div>",[_vm._ssrNode("<div class=\"sf-banner-grid__row\">","</div>",[_vm._ssrNode("<div class=\"sf-banner-grid__col sf-banner-grid__col--higher\">","</div>",[_vm._t("banner-B")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"sf-banner-grid__col sf-banner-grid__col--higher\">","</div>",[_vm._t("banner-C")],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"sf-banner-grid__row\">","</div>",[_vm._ssrNode("<div class=\"sf-banner-grid__col\">","</div>",[_vm._t("banner-D")],2)])],2)],2)]:_vm._e()],2)}
var SfBannerGridvue_type_template_id_71b3afb1_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfBannerGrid/SfBannerGrid.vue?vue&type=template&id=71b3afb1&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfBannerGrid/SfBannerGrid.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var SfBannerGridvue_type_script_lang_js_ = ({
  name: "SfBannerGrid",
  props: {
    bannerGrid: {
      type: Number,
      default: 1
    }
  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfBannerGrid/SfBannerGrid.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfBannerGrid_SfBannerGridvue_type_script_lang_js_ = (SfBannerGridvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfBannerGrid/SfBannerGrid.vue



function SfBannerGrid_injectStyles (context) {
  
  var style0 = __webpack_require__(417)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var SfBannerGrid_component = Object(componentNormalizer["a" /* default */])(
  SfBannerGrid_SfBannerGridvue_type_script_lang_js_,
  SfBannerGridvue_type_template_id_71b3afb1_render,
  SfBannerGridvue_type_template_id_71b3afb1_staticRenderFns,
  false,
  SfBannerGrid_injectStyles,
  null,
  "302a9474"
  
)

/* harmony default export */ var SfBannerGrid = (SfBannerGrid_component.exports);
// EXTERNAL MODULE: ./components/InstagramFeed.vue + 4 modules
var InstagramFeed = __webpack_require__(345);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Home.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var Homevue_type_script_lang_js_ = ({
  name: 'Home',
  components: {
    InstagramFeed: InstagramFeed["a" /* default */],
    SfHero: SfHero,
    SfBanner: SfBanner["a" /* default */],
    SfCallToAction: SfCallToAction["a" /* default */],
    SfSection: SfSection["a" /* default */],
    SfCarousel: SfCarousel["a" /* default */],
    SfProductCard: SfProductCard["a" /* default */],
    SfImage: SfImage["a" /* default */],
    SfBannerGrid: SfBannerGrid
  },

  data() {
    return {
      heroes: [{
        title: 'Colorful summer dresses are already in store',
        subtitle: 'SUMMER COLLECTION 2019',
        buttonText: 'Learn more',
        background: '#eceff1',
        image: '/homepage/bannerH.webp'
      }, {
        title: 'Colorful summer dresses are already in store',
        subtitle: 'SUMMER COLLECTION 2019',
        buttonText: 'Learn more',
        background: '#efebe9',
        image: '/homepage/bannerA.webp',
        className: 'sf-hero-item--position-bg-top-left sf-hero-item--align-right'
      }, {
        title: 'Colorful summer dresses are already in store',
        subtitle: 'SUMMER COLLECTION 2019',
        buttonText: 'Learn more',
        background: '#fce4ec',
        image: '/homepage/bannerB.webp'
      }],
      banners: [{
        slot: 'banner-A',
        subtitle: 'Dresses',
        title: 'Cocktail & Party',
        description: 'Find stunning women\'s cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses from all your favorite brands.',
        buttonText: 'Shop now',
        image: {
          mobile: '/homepage/bannerB.webp',
          desktop: '/homepage/bannerF.webp'
        },
        class: 'sf-banner--slim'
      }, {
        slot: 'banner-B',
        subtitle: 'Dresses',
        title: 'Linen Dresses',
        description: 'Find stunning women\'s cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses from all your favorite brands.',
        buttonText: 'Shop now',
        image: '/homepage/bannerE.webp',
        class: 'sf-banner--slim banner-central'
      }, {
        slot: 'banner-C',
        subtitle: 'T-Shirts',
        title: 'The Office Life',
        image: '/homepage/bannerC.webp',
        class: 'sf-banner--slim banner__tshirt'
      }, {
        slot: 'banner-D',
        subtitle: 'Summer Sandals',
        title: 'Eco Sandals',
        image: '/homepage/bannerG.webp',
        class: 'sf-banner--slim'
      }],
      products: [{
        title: 'Cream Beach Bag',
        image: '/homepage/productA.webp',
        price: {
          regular: '50.00 $'
        },
        rating: {
          max: 5,
          score: 4
        },
        isOnWishlist: true
      }, {
        title: 'Cream Beach Bag',
        image: '/homepage/productB.webp',
        price: {
          regular: '50.00 $'
        },
        rating: {
          max: 5,
          score: 4
        },
        isOnWishlist: false
      }, {
        title: 'Cream Beach Bag',
        image: '/homepage/productC.webp',
        price: {
          regular: '50.00 $'
        },
        rating: {
          max: 5,
          score: 4
        },
        isOnWishlist: false
      }, {
        title: 'Cream Beach Bag',
        image: '/homepage/productA.webp',
        price: {
          regular: '50.00 $'
        },
        rating: {
          max: 5,
          score: 4
        },
        isOnWishlist: false
      }, {
        title: 'Cream Beach Bag',
        image: '/homepage/productB.webp',
        price: {
          regular: '50.00 $'
        },
        rating: {
          max: 5,
          score: 4
        },
        isOnWishlist: false
      }, {
        title: 'Cream Beach Bag',
        image: '/homepage/productC.webp',
        price: {
          regular: '50.00 $'
        },
        rating: {
          max: 5,
          score: 4
        },
        isOnWishlist: false
      }, {
        title: 'Cream Beach Bag',
        image: '/homepage/productA.webp',
        price: {
          regular: '50.00 $'
        },
        rating: {
          max: 5,
          score: 4
        },
        isOnWishlist: false
      }, {
        title: 'Cream Beach Bag',
        image: '/homepage/productB.webp',
        price: {
          regular: '50.00 $'
        },
        rating: {
          max: 5,
          score: 4
        },
        isOnWishlist: false
      }]
    };
  },

  methods: {
    toggleWishlist(index) {
      this.products[index].isOnWishlist = !this.products[index].isOnWishlist;
    }

  }
});
// CONCATENATED MODULE: ./pages/Home.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_Homevue_type_script_lang_js_ = (Homevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/Home.vue



function Home_injectStyles (context) {
  
  var style0 = __webpack_require__(419)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Home_component = Object(componentNormalizer["a" /* default */])(
  pages_Homevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  Home_injectStyles,
  "7e9c6a24",
  "5137f503"
  
)

/* harmony default export */ var Home = __webpack_exports__["default"] = (Home_component.exports);

/***/ })

};;
//# sourceMappingURL=Home.js.map