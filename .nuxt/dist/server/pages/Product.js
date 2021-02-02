exports.ids = [11];
exports.modules = {

/***/ 247:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(250);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("614069fe", content, true, context)
};

/***/ }),

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(252);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("3fb0c45e", content, true, context)
};

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfScrollable_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(247);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfScrollable_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfScrollable_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfScrollable_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfScrollable_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "[data-simplebar]{position:relative;flex-direction:column;flex-wrap:wrap;justify-content:flex-start;align-content:flex-start;align-items:flex-start}.simplebar-wrapper{overflow:hidden;width:inherit;height:inherit;max-width:inherit;max-height:inherit}.simplebar-mask{direction:inherit;overflow:hidden;width:auto!important;height:auto!important;z-index:0}.simplebar-mask,.simplebar-offset{position:absolute;padding:0;margin:0;left:0;top:0;bottom:0;right:0}.simplebar-offset{direction:inherit!important;box-sizing:inherit!important;resize:none!important;-webkit-overflow-scrolling:touch}.simplebar-content-wrapper{direction:inherit;box-sizing:border-box!important;position:relative;display:block;height:100%;width:auto;max-width:100%;max-height:100%;scrollbar-width:none;-ms-overflow-style:none}.simplebar-content-wrapper::-webkit-scrollbar,.simplebar-hide-scrollbar::-webkit-scrollbar{width:0;height:0}.simplebar-content:after,.simplebar-content:before{content:\" \";display:table}.simplebar-placeholder{max-height:100%;max-width:100%;width:100%;pointer-events:none}.simplebar-height-auto-observer-wrapper{box-sizing:inherit!important;height:100%;width:100%;max-width:1px;position:relative;float:left;max-height:1px;overflow:hidden;z-index:-1;padding:0;margin:0;pointer-events:none;flex-grow:inherit;flex-shrink:0;flex-basis:0}.simplebar-height-auto-observer{box-sizing:inherit;display:block;opacity:0;top:0;left:0;height:1000%;width:1000%;min-height:1px;min-width:1px;z-index:-1}.simplebar-height-auto-observer,.simplebar-track{position:absolute;overflow:hidden;pointer-events:none}.simplebar-track{z-index:1;right:0;bottom:0}[data-simplebar].simplebar-dragging .simplebar-content{pointer-events:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-select:none}[data-simplebar].simplebar-dragging .simplebar-track{pointer-events:all}.simplebar-scrollbar{position:absolute;left:0;right:0;min-height:10px}.simplebar-scrollbar:before{position:absolute;content:\"\";background:#000;border-radius:7px;left:2px;right:2px;opacity:0;transition:opacity .2s linear}.simplebar-scrollbar.simplebar-visible:before{opacity:.5;transition:opacity 0s linear}.simplebar-track.simplebar-vertical{top:0;width:11px}.simplebar-track.simplebar-vertical .simplebar-scrollbar:before{top:2px;bottom:2px}.simplebar-track.simplebar-horizontal{left:0;height:11px}.simplebar-track.simplebar-horizontal .simplebar-scrollbar:before{height:100%;left:2px;right:2px}.simplebar-track.simplebar-horizontal .simplebar-scrollbar{right:auto;left:0;top:2px;height:7px;min-height:0;min-width:10px;width:auto}[data-simplebar-direction=rtl] .simplebar-track.simplebar-vertical{right:auto;left:0}.hs-dummy-scrollbar-size{direction:rtl;position:fixed;opacity:0;visibility:hidden;height:500px;width:500px;overflow-y:hidden;overflow-x:scroll}.simplebar-hide-scrollbar{position:fixed;left:0;visibility:hidden;overflow-y:scroll;scrollbar-width:none;-ms-overflow-style:none}@media (min-width:1024px){.smartphone-only{display:none!important}}@media (max-width:1023px){.desktop-only{display:none!important}}.sf-scrollable__content{max-height:5rem;max-height:var(--scrollable-max-height,var(--_scrollable-max-height,5rem))}.sf-scrollable__content .simplebar-scrollbar:before{width:4px;background:var(--c-gray-variant);border-radius:10px}.sf-scrollable.is-open{--scrollable-max-height:auto}.sf-scrollable__view-all{margin:var(--scrollable-button-margin,var(--spacer-sm) 0 0 0)}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfTabs_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(248);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfTabs_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfTabs_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfTabs_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfTabs_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media (min-width:1024px){.smartphone-only{display:none!important}}@media (max-width:1023px){.desktop-only{display:none!important}}.sf-tabs{display:flex;flex-wrap:wrap}.sf-tabs__title{z-index:var(--tabs-title-z-index);display:flex;display:var(--tabs-title-display,flex);box-sizing:border-box;flex:0 0 100%;flex:var(--tabs-title-flex,0 0 100%);justify-content:space-between;margin:var(--tabs-title-margin);padding:var(--tabs-title-padding,var(--spacer-sm));background:var(--tabs-title-background);border:var(--tabs-title-border,var(--tabs-title-border-style,solid) var(--tabs-title-border-color,var(--c-light)));border-width:0 0 1px;border-width:var(--tabs-title-border-width,0 0 1px 0);color:var(--tabs-title-color);transition:color .15s ease-in-out;font:var(--font-weight--normal) var(--font-size--base)/1.4 var(--font-family--secondary);font:var(--tabs-title-font,var(--tabs-title-font-weight,var(--font-weight--normal)) var(--tabs-title-font-size,var(--font-size--base))/var(--tabs-title-font-line-height,1.4) var(--tabs-title-font-family,var(--font-family--secondary)))}.sf-tabs__title.is-active{--tabs-title-border-width:0;--tabs-title-color:var(--c-primary);--chevron-color:var(--c-primary)}.sf-tabs__title.is-active+.sf-tabs__content{--tabs-content-border-width:var(--tabs-content-border-width,1px 0 0 0)}.sf-tabs__content{flex:0 0 100%;order:var(--tabs-content-order);border:var(--tabs-content-border,var(--tabs-content-border-style,solid) var(--tabs-content-border-color,var(--c-light)));border-width:0;border-width:var(--tabs-content-border-width,0);color:var(--c-text);color:var(--tabs-content-color,var(--c-text));font:var(--font-weight--light) var(--font-size--base)/1.6 var(--font-family--primary);font:var(--tabs-content-font,var(--tabs-content-font-weight,var(--font-weight--light)) var(--tabs-content-font-size,var(--font-size--base))/var(--tabs-content-font-line-height,1.6) var(--tabs-content-font-family,var(--font-family--primary)))}.sf-tabs__content__tab{padding:var(--tabs-content-tab-padding,var(--spacer-base) var(--spacer-sm))}.sf-tabs__chevron{display:var(--tabs-chevron-display)}@media (min-width:1024px){.sf-tabs{--tabs-title-z-index:1;--tabs-content-order:1;--tabs-title-flex:0 0 auto;--tabs-title-margin:0 var(--spacer-lg) -2px 0;--tabs-title-padding:var(--spacer-xs) 0;--tabs-title-color:var(--c-text-muted);--tabs-title-font-size:var(--h4-font-size);--tabs-content-tab-padding:var(--spacer-xl) 0;--tabs-chevron-display:none}.sf-tabs__title.is-active{--tabs-title-border-width:0 0 2px 0;--tabs-title-border-color:var(--c-text);--tabs-title-color:var(--c-text)}.sf-tabs__title.is-active+.sf-tabs__content{--tabs-content-border-width:2px 0 0 0}.sf-tabs__title:hover{--tabs-title-color:var(--c-text)}}", ""]);
// Exports
module.exports = exports;


/***/ }),

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

/***/ 255:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(269);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("7532bb99", content, true, context)
};

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfTabs/SfTabs.vue?vue&type=template&id=5a2cd795&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-tabs"},[_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfTabs/SfTabs.vue?vue&type=template&id=5a2cd795&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(3);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfTabs/_internal/SfTab.vue?vue&type=template&id=c8b86136&
var SfTabvue_type_template_id_c8b86136_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('Fragment',{staticClass:"sf-tabs__tab"},[_vm._t("title",[_c('SfButton',{staticClass:"sf-button--pure sf-tabs__title",class:{ 'is-active': _vm.isActive },attrs:{"aria-pressed":_vm.isActive.toString()},on:{"click":_vm.tabClick}},[_vm._v("\n      "+_vm._s(_vm.title)+"\n      "),_c('SfChevron',{staticClass:"sf-tabs__chevron",class:{ 'sf-chevron--right': !_vm.isActive }})],1)],null,{ tabClick: _vm.tabClick, isActive: _vm.isActive, title: _vm.title }),_vm._v(" "),_c('div',{staticClass:"sf-tabs__content"},[(_vm.isActive)?_c('div',{staticClass:"sf-tabs__content__tab"},[(_vm.tabMaxContentHeight)?_c('SfScrollable',{attrs:{"max-content-height":_vm.tabMaxContentHeight,"show-text":_vm.tabShowText,"hide-text":_vm.tabHideText}},[_vm._t("default")],2):_vm._t("default")],2):_vm._e()])],2)}
var SfTabvue_type_template_id_c8b86136_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfTabs/_internal/SfTab.vue?vue&type=template&id=c8b86136&

// EXTERNAL MODULE: external "vue-fragment"
var external_vue_fragment_ = __webpack_require__(231);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/utilities/helpers/check-environment.js
var check_environment = __webpack_require__(238);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfChevron/SfChevron.vue + 4 modules
var SfChevron = __webpack_require__(37);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfButton/SfButton.vue + 4 modules
var SfButton = __webpack_require__(10);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/molecules/SfScrollable/SfScrollable.vue?vue&type=template&id=6f6a7224&
var SfScrollablevue_type_template_id_6f6a7224_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-scrollable",class:{ 'is-open': !_vm.isHidden }},[_c('Simplebar',{ref:"content",staticClass:"sf-scrollable__content",style:(_vm.style)},[_vm._t("default")],2),_vm._ssrNode(" "),_vm._t("view-all",[_c('SfButton',{directives:[{name:"show",rawName:"v-show",value:(_vm.hasScroll),expression:"hasScroll"}],staticClass:"sf-button--text sf-scrollable__view-all",on:{"click":function($event){_vm.isHidden = !_vm.isHidden}}},[(_vm.isHidden)?_c('span',[_vm._v(_vm._s(_vm.showText))]):_c('span',[_vm._v(_vm._s(_vm.hideText))])])],null,{ hasScroll: _vm.hasScroll, showText: _vm.showText, hideText: _vm.hideText })],2)}
var SfScrollablevue_type_template_id_6f6a7224_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfScrollable/SfScrollable.vue?vue&type=template&id=6f6a7224&

// EXTERNAL MODULE: external "simplebar-vue"
var external_simplebar_vue_ = __webpack_require__(232);
var external_simplebar_vue_default = /*#__PURE__*/__webpack_require__.n(external_simplebar_vue_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/molecules/SfScrollable/SfScrollable.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var SfScrollablevue_type_script_lang_js_ = ({
  name: "SfScrollable",
  components: {
    Simplebar: external_simplebar_vue_default.a,
    SfButton: SfButton["a" /* default */]
  },
  props: {
    /*
     * Maximum height of visible content
     */
    maxContentHeight: {
      type: String,
      default: ""
    },

    /*
     * Text for button showing content
     */
    showText: {
      type: String,
      default: "Show"
    },

    /*
     * Text for button hiding content
     */
    hideText: {
      type: String,
      default: "Hide"
    }
  },

  data() {
    return {
      isHidden: true,
      hasScroll: false,
      contentEl: undefined
    };
  },

  computed: {
    style() {
      return {
        "--_scrollable-max-height": this.maxContentHeight.trim() ? this.maxContentHeight : undefined
      };
    }

  },

  mounted() {
    this.$nextTick(() => {
      this.contentEl = this.$refs.content.$el.querySelector(".simplebar-content");
      if (typeof MutationObserver === "undefined" || !this.contentEl) return;
      const observer = new MutationObserver(this.sizeCalc);
      this.sizeCalc();
      observer.observe(this.contentEl, {
        childList: true
      });
    });
  },

  methods: {
    sizeCalc() {
      const containerHeight = this.$refs.content.$el.offsetHeight;
      const contentHeight = this.contentEl.offsetHeight;
      this.hasScroll = contentHeight > containerHeight;
    }

  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfScrollable/SfScrollable.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfScrollable_SfScrollablevue_type_script_lang_js_ = (SfScrollablevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfScrollable/SfScrollable.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(249)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SfScrollable_SfScrollablevue_type_script_lang_js_,
  SfScrollablevue_type_template_id_6f6a7224_render,
  SfScrollablevue_type_template_id_6f6a7224_staticRenderFns,
  false,
  injectStyles,
  null,
  "30fd409c"
  
)

/* harmony default export */ var SfScrollable = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfTabs/_internal/SfTab.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var SfTabvue_type_script_lang_js_ = ({
  name: "SfTab",
  components: {
    Fragment: external_vue_fragment_["Fragment"],
    SfChevron: SfChevron["a" /* default */],
    SfScrollable: SfScrollable,
    SfButton: SfButton["a" /* default */]
  },
  inject: ["tabConfig"],
  props: {
    /**
     * Tab title.
     */
    title: {
      type: String,
      default: ""
    }
  },

  data() {
    return {
      isActive: false,
      desktopMin: 1024
    };
  },

  computed: {
    tabMaxContentHeight() {
      return this.tabConfig.tabMaxContentHeight;
    },

    tabShowText() {
      return this.tabConfig.tabShowText;
    },

    tabHideText() {
      return this.tabConfig.tabHideText;
    }

  },
  methods: {
    tabClick() {
      if (!check_environment["a" /* isClient */]) return;
      const width = Math.max(document.documentElement.clientWidth, window.innerWidth);
      if (this.isActive && width > this.desktopMin) return;
      this.$parent.$emit("toggle", this._uid);
    }

  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfTabs/_internal/SfTab.vue?vue&type=script&lang=js&
 /* harmony default export */ var _internal_SfTabvue_type_script_lang_js_ = (SfTabvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfTabs/_internal/SfTab.vue





/* normalize component */

var SfTab_component = Object(componentNormalizer["a" /* default */])(
  _internal_SfTabvue_type_script_lang_js_,
  SfTabvue_type_template_id_c8b86136_render,
  SfTabvue_type_template_id_c8b86136_staticRenderFns,
  false,
  null,
  null,
  "66fe88bd"
  
)

/* harmony default export */ var SfTab = (SfTab_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfTabs/SfTabs.vue?vue&type=script&lang=js&
//
//
//
//
//
//


external_vue_default.a.component("SfTab", SfTab);
/* harmony default export */ var SfTabsvue_type_script_lang_js_ = ({
  name: "SfTabs",
  props: {
    /** Which tab should be open at the beginning  */
    openTab: {
      type: Number,
      default: 1
    },

    /** Max height of visible content  */
    tabMaxContentHeight: {
      type: String,
      default: ""
    },

    /** Text for button showing content  */
    tabShowText: {
      type: String,
      default: "show"
    },

    /** Text for button hiding content  */
    tabHideText: {
      type: String,
      default: "hide"
    }
  },

  mounted() {
    this.$on("toggle", this.toggle);
    if (this.openTab) this.openChild();
  },

  methods: {
    toggle(id) {
      this.$children.forEach(child => {
        child._uid === id ? child.isActive = !child.isActive : child.isActive = false;
      });
    },

    openChild() {
      if (this.openTab < this.$children.length + 1) {
        this.$children[this.openTab - 1].isActive = true;
      }
    }

  },
  provide: function () {
    const tabConfig = {};
    Object.defineProperty(tabConfig, "tabMaxContentHeight", {
      get: () => this.tabMaxContentHeight
    });
    Object.defineProperty(tabConfig, "tabShowText", {
      get: () => this.tabShowText
    });
    Object.defineProperty(tabConfig, "tabHideText", {
      get: () => this.tabHideText
    });
    return {
      tabConfig
    };
  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfTabs/SfTabs.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfTabs_SfTabsvue_type_script_lang_js_ = (SfTabsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfTabs/SfTabs.vue



function SfTabs_injectStyles (context) {
  
  var style0 = __webpack_require__(251)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var SfTabs_component = Object(componentNormalizer["a" /* default */])(
  SfTabs_SfTabsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  SfTabs_injectStyles,
  null,
  "816276f4"
  
)

/* harmony default export */ var SfTabs = __webpack_exports__["a"] = (SfTabs_component.exports);

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

/***/ 260:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(297);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("2db9990c", content, true, context)
};

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

/***/ 265:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(299);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("2b915ef0", content, true, context)
};

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfBreadcrumbs_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(255);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfBreadcrumbs_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfBreadcrumbs_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfBreadcrumbs_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfBreadcrumbs_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 269:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media (min-width:1024px){.smartphone-only{display:none!important}}@media (max-width:1023px){.desktop-only{display:none!important}}.sf-breadcrumbs__list{display:flex;flex-wrap:wrap;padding:0;margin:0;list-style:none}.sf-breadcrumbs__list-item:not(:last-child):after{padding:var(--breadcrumbs-list-item-before-padding,0 var(--spacer-sm));content:\"|\";content:var(--breadcrumbs-list-item-seperator,\"|\");color:var(--c-text-muted);color:var(--breadcrumbs-list-item-before-color,var(--c-text-muted))}.sf-breadcrumbs__breadcrumb{font:var(--font-weight--normal) var(--font-size--xs)/1.6 var(--font-family--secondary);font:var(--breadcrumbs-font,var(--breadcrumbs-font-weight,var(--font-weight--normal)) var(--breadcrumbs-font-size,var(--font-size--xs))/var(--breadcrumbs-font-line-height,1.6) var(--breadcrumbs-font-family,var(--font-family--secondary)));--link-color:var(--c-text-muted);--link-text-decoration:none}.sf-breadcrumbs__breadcrumb:hover{--link-color:var(--c-text)}.sf-breadcrumbs__breadcrumb.current{--link-color:var(--c-text);cursor:default}@media (min-width:1024px){.sf-breadcrumbs{--breadcrumbs-font-size:var(--font-size--sm)}}", ""]);
// Exports
module.exports = exports;


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

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfColor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(260);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfColor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfColor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfColor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfColor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 297:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media (min-width:1024px){.smartphone-only{display:none!important}}@media (max-width:1023px){.desktop-only{display:none!important}}.sf-color{box-sizing:border-box;position:relative;width:2.5rem;width:var(--color-width,var(--color-size,2.5rem));height:2.5rem;height:var(--color-height,var(--color-size,2.5rem));background:var(--color-background);border-radius:var(--color-border-radius);--color-box-shadow-opacity:0;--color-box-shadow-transition-duration:150ms;transition:transform .15s linear}.sf-color:before{content:\"\";position:absolute;z-index:-1;top:0;left:0;width:100%;height:100%;border-radius:inherit;transition:opacity .2s ease-in-out,box-shadow .2s ease-in-out;transition:var(--color-box-shadow-transition,opacity var(--color-box-shadow-transition-opacity-duration,.2s) var(--color-box-shadow-transition-opacity-timing-function,ease-in-out),box-shadow var(--color-box-shadow-transition-box-shadow-duration,.2s) var(--color-box-shadow-transition-box-shadow-timing-function,ease-in-out));opacity:var(--color-box-shadow-opacity);box-shadow:0 4px 4px 0 var(--c-black);box-shadow:var(--color-box-shadow,var(--color-box-shadow-h-offset,0) var(--color-box-shadow-v-offset,4px) var(--color-box-shadow-blur,4px) var(--color-box-shadow-spread,0) var(--color-box-shadow-color,var(--c-black)));will-change:opacity,box-shadow}.sf-color__badge{--badge-padding:var(--spacer-2xs);--badge-border-radius:100%;position:absolute}@media (min-width:1024px){.sf-color{--color-size:0.75rem}.sf-color.is-active,.sf-color:hover{transform:scale(1.667);--color-box-shadow-opacity:0.25}.sf-color:active{--color-box-shadow:none}}.sf-color--rounded{--color-border-radius:100%}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfAddToCart_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(265);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfAddToCart_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfAddToCart_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfAddToCart_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfAddToCart_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 299:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media (min-width:1024px){.smartphone-only{display:none!important}}@media (max-width:1023px){.desktop-only{display:none!important}}.sf-add-to-cart{display:flex}.sf-add-to-cart__button{--button-font-weight:var(--font-weight--semibold);--button-width:100%;align-items:center}.sf-add-to-cart__button:disabled{color:var(--c-text-disabled)}.sf-add-to-cart__select-quantity{--add-to-cart-select-quantity-margin:0 var(--spacer-base) 0 0;flex:none;margin:var(--add-to-cart-select-quantity-margin,0 0 0 var(--spacer-xs))}@media (min-width:1024px){.sf-add-to-cart{--add-to-cart-select-quantity-display:flex}}", ""]);
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

/***/ 366:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(426);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("29cd610f", content, true, context)
};

/***/ }),

/***/ 367:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(428);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("b198ec74", content, true, context)
};

/***/ }),

/***/ 368:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(430);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("4823b782", content, true, context)
};

/***/ }),

/***/ 369:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(432);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("e049b760", content, true, context)
};

/***/ }),

/***/ 370:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(434);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("1323df27", content, true, context)
};

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/atoms/SfColor/SfColor.vue?vue&type=template&id=4502038d&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('SfButton',_vm._g({staticClass:"sf-button--pure sf-color",class:{ 'is-active': _vm.selected },style:(_vm.style),attrs:{"aria-pressed":_vm.selected.toString(),"data-testid":_vm.color}},_vm.$listeners),[_c('transition',{attrs:{"name":"sf-bounce"}},[_vm._t("badge",[(_vm.selected && _vm.hasBadge)?_c('SfBadge',{staticClass:"sf-color__badge smartphone-only"},[_c('SfIcon',{attrs:{"aria-hidden":"true","icon":"check","size":"16px","color":"white"}})],1):_vm._e()],null,{ selected: _vm.selected, hasBadge: _vm.hasBadge })],2)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfColor/SfColor.vue?vue&type=template&id=4502038d&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfBadge/SfBadge.vue + 4 modules
var SfBadge = __webpack_require__(38);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfIcon/SfIcon.vue + 6 modules
var SfIcon = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfButton/SfButton.vue + 4 modules
var SfButton = __webpack_require__(10);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/atoms/SfColor/SfColor.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var SfColorvue_type_script_lang_js_ = ({
  name: "SfColor",
  components: {
    SfBadge: SfBadge["a" /* default */],
    SfIcon: SfIcon["a" /* default */],
    SfButton: SfButton["a" /* default */]
  },
  props: {
    color: {
      type: String,
      default: ""
    },
    selected: {
      type: Boolean,
      default: false
    },
    hasBadge: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    style() {
      return {
        "--color-background": this.color
      };
    }

  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfColor/SfColor.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfColor_SfColorvue_type_script_lang_js_ = (SfColorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfColor/SfColor.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(296)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SfColor_SfColorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "b19acaa2"
  
)

/* harmony default export */ var SfColor = __webpack_exports__["a"] = (component.exports);

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

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/molecules/SfAddToCart/SfAddToCart.vue?vue&type=template&id=1e13d9b3&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-add-to-cart"},[_vm._t("quantity-select-input",[_c('SfQuantitySelector',{staticClass:"sf-add-to-cart__select-quantity",attrs:{"qty":_vm.qty,"aria-label":"Quantity","disabled":_vm.disabled},on:{"input":function($event){return _vm.$emit('input', $event)}}})],null,{ qty: _vm.qty }),_vm._ssrNode(" "),_vm._t("add-to-cart-btn",[_c('SfButton',_vm._g({staticClass:"sf-add-to-cart__button",attrs:{"disabled":_vm.disabled}},_vm.$listeners),[_vm._v("\n      Add to cart\n    ")])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfAddToCart/SfAddToCart.vue?vue&type=template&id=1e13d9b3&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfButton/SfButton.vue + 4 modules
var SfButton = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfQuantitySelector/SfQuantitySelector.vue + 4 modules
var SfQuantitySelector = __webpack_require__(41);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/molecules/SfAddToCart/SfAddToCart.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var SfAddToCartvue_type_script_lang_js_ = ({
  name: "SfAddToCart",
  components: {
    SfButton: SfButton["a" /* default */],
    SfQuantitySelector: SfQuantitySelector["a" /* default */]
  },
  model: {
    prop: "qty"
  },
  props: {
    /**
     * Boolean to indicate whether product
     * can be added to cart
     */
    disabled: {
      type: Boolean,
      default: false
    },

    /**
     * Selected quantity
     */
    qty: {
      type: [Number, String],
      default: 1
    }
  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfAddToCart/SfAddToCart.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfAddToCart_SfAddToCartvue_type_script_lang_js_ = (SfAddToCartvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfAddToCart/SfAddToCart.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(298)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SfAddToCart_SfAddToCartvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "1952344c"
  
)

/* harmony default export */ var SfAddToCart = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/atoms/SfBreadcrumbs/SfBreadcrumbs.vue?vue&type=template&id=19c09c96&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{staticClass:"sf-breadcrumbs",attrs:{"aria-label":"breadcrumb"}},[_vm._ssrNode("<ol class=\"sf-breadcrumbs__list\">","</ol>",_vm._l((_vm.breadcrumbs),function(breadcrumb,i){return _vm._ssrNode("<li"+(_vm._ssrAttr("aria-current",_vm.last === i && 'page'))+" class=\"sf-breadcrumbs__list-item\">","</li>",[(_vm.last !== i)?[_vm._t("link",[_c('SfLink',{staticClass:"sf-breadcrumbs__breadcrumb",attrs:{"link":breadcrumb.link,"data-testid":breadcrumb.text}},[_vm._v(_vm._s(breadcrumb.text)+"\n          ")])],null,{ breadcrumb: breadcrumb })]:[_vm._t("current",[_c('SfLink',{staticClass:"sf-breadcrumbs__breadcrumb current",attrs:{"link":breadcrumb.link}},[_vm._v(_vm._s(breadcrumb.text))])],null,{ breadcrumb: breadcrumb })]],2)}),0)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfBreadcrumbs/SfBreadcrumbs.vue?vue&type=template&id=19c09c96&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfLink/SfLink.vue + 4 modules
var SfLink = __webpack_require__(13);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/atoms/SfBreadcrumbs/SfBreadcrumbs.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var SfBreadcrumbsvue_type_script_lang_js_ = ({
  name: "SfBreadcrumbs",
  components: {
    SfLink: SfLink["a" /* default */]
  },
  props: {
    /**
     * List of breadcrumbs (array of nested objects: `[ { text, route } ]`)
     */
    breadcrumbs: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    last() {
      return this.breadcrumbs.length - 1;
    }

  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfBreadcrumbs/SfBreadcrumbs.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfBreadcrumbs_SfBreadcrumbsvue_type_script_lang_js_ = (SfBreadcrumbsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfBreadcrumbs/SfBreadcrumbs.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(268)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SfBreadcrumbs_SfBreadcrumbsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "12f1fec9"
  
)

/* harmony default export */ var SfBreadcrumbs = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_RelatedProducts_vue_vue_type_style_index_0_id_675c7c3a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(366);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_RelatedProducts_vue_vue_type_style_index_0_id_675c7c3a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_RelatedProducts_vue_vue_type_style_index_0_id_675c7c3a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_RelatedProducts_vue_vue_type_style_index_0_id_675c7c3a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_RelatedProducts_vue_vue_type_style_index_0_id_675c7c3a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 426:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media (min-width:1024px){.smartphone-only[data-v-675c7c3a]{display:none!important}}@media (max-width:1023px){.desktop-only[data-v-675c7c3a]{display:none!important}}.section[data-v-675c7c3a]{margin-top:var(--spacer-base)}.carousel[data-v-675c7c3a]{margin:0 calc(var(--spacer-sm)*-1) 0 0}@media (min-width:1024px){.carousel[data-v-675c7c3a]{margin:0}}.carousel__item[data-v-675c7c3a]{margin:1.9375rem 0 2.4375rem}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfGallery_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(367);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfGallery_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfGallery_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfGallery_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfGallery_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 428:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media (min-width:1024px){.smartphone-only{display:none!important}}@media (max-width:1023px){.desktop-only{display:none!important}}.sf-gallery{display:flex;flex-direction:column;flex-direction:var(--gallery-flex-direction,column)}.sf-gallery__thumbs{display:flex;display:var(--gallery-thumbs-display,flex);flex:var(--gallery-thumbs-flex);flex-direction:var(--gallery-thumbs-flex-direction);margin:var(--gallery-thumbs-margin,var(--spacer-xs) 0 0 0);order:var(--gallery-thumbs-order);overflow:auto}.sf-gallery__thumbs::-webkit-scrollbar{width:0}.sf-gallery__item{display:flex;flex:0 0 10rem;flex:0 0 var(--gallery-thumb-width,10rem);margin:var(--gallery-item-margin,0 var(--spacer-xs) 0 0);opacity:.5;opacity:var(--gallery-item-opacity,.5);transition:opacity .15s ease-in-out;transition:var(--gallery-item-transition,opacity .15s ease-in-out);cursor:pointer;cursor:var(--gallery-item-cursor,pointer)}.sf-gallery__item:last-child{--gallery-item-margin:0}.sf-gallery__item--selected{--gallery-item-opacity:1;--gallery-item-cursor:default}.sf-gallery__thumb{width:calc(10rem*1px);width:var(--gallery-thumb-width,calc(var(--_image-width, 10rem)*1px));height:calc(10rem*1px);height:var(--gallery-thumb-height,calc(var(--_image-height, 10rem)*1px))}.sf-gallery__stage{flex:1;max-width:26.375rem;max-width:var(--gallery-stage-width,26.375rem)}.sf-gallery__zoom{position:absolute;left:50%;top:0}.sf-gallery .glide__slide{flex:1;display:flex}.sf-gallery .glide__slides{margin:0}@media (min-width:1024px){.sf-gallery{--gallery-flex-direction:row;--gallery-thumbs-flex:0 0 var(--gallery-thumb-width,10rem);--gallery-thumbs-flex-direction:column;--gallery-thumbs-order:-1;--gallery-thumbs-margin:0 var(--spacer-xs) 0 0;--gallery-item-margin:0 0 var(--spacer-xs) 0}.sf-gallery__item:last-child{--gallery-item-margin:0}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfSticky_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(368);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfSticky_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfSticky_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfSticky_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfSticky_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 430:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media (min-width:1024px){.smartphone-only{display:none!important}}@media (max-width:1023px){.desktop-only{display:none!important}}@media (min-width:1024px){.sf-sticky{position:-webkit-sticky;position:sticky;position:var(--sticky-position,sticky);top:0;top:var(--sticky-top,0);bottom:auto;bottom:var(--sticky-bottom,auto)}.sf-sticky--sticky{--sticky-position:fixed;--sticky-top:0}.sf-sticky--bound{--sticky-position:absolute;--sticky-top:auto;--sticky-bottom:0}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfReview_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(369);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfReview_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfReview_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfReview_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfReview_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 432:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media (min-width:1024px){.smartphone-only{display:none!important}}@media (max-width:1023px){.desktop-only{display:none!important}}.sf-review{position:relative;display:block;display:var(--review-display,block);max-width:343px;max-width:var(--review-max-width,343px);padding:0 0 8px;padding:var(--review-padding,0 0 8px);border:var(--review-border,var(--review-border-style,solid) var(--review-border-color,var(--c-light)));border-width:0 0 1px;border-width:var(--review-border-width,0 0 1px 0)}.sf-review__icon{--icon-size:1.5rem;--icon-color:var(--c-primary);margin:var(--review-icon-margin,0 var(--spacer-2xs) 0 0)}.sf-review__author{display:flex;align-items:center;color:var(--c-text);color:var(--review-author-color,var(--c-text));font:var(--font-weight--normal) var(--font-size--base)/1.6 var(--font-family--secondary);font:var(--review-author-font,var(--review-author-font-weight,var(--font-weight--normal)) var(--review-author-font-size,var(--font-size--base))/var(--review-author-font-line-height,1.6) var(--review-author-font-family,var(--font-family--secondary)));text-transform:capitalize;text-transform:var(--review-author-text-transform,capitalize)}.sf-review__rating{display:inline-block;display:var(--review-rating-display,inline-block);--icon-size:16px}.sf-review__info{margin:var(--review-info-margin,var(--spacer-xs) 0 0 0)}.sf-review__date{display:block;display:var(--review-date-display,block);margin:var(--review-date-margin,var(--spacer-xs) 0 var(--spacer-sm) 0);text-transform:capitalize;text-transform:var(--review-date-text-transform,capitalize);color:var(--c-text-muted);color:var(--review-date-color,var(--c-text-muted));font:var(--font-weight--normal) var(--font-size--base)/1.6 var(--font-family--primary);font:var(--review-date-font,var(--review-date-font-weight,var(--font-weight--normal)) var(--review-date-font-size,var(--font-size--base))/var(--review-date-font-line-height,1.6) var(--review-date-font-family,var(--font-family--primary)))}.sf-review__message{display:var(--review-message-display);margin:var(--review-message-margin,var(--spacer-sm) 0);color:var(--c-text);color:var(--review-message-color,var(--c-text));vertical-align:middle;font:var(--font-weight--normal) var(--font-size--base)/1.6 var(--font-family--primary);font:var(--review-message-font,var(--review-message-font-weight,var(--font-weight--normal)) var(--review-message-font-size,var(--font-size--base))/var(--review-message-font-line-height,1.6) var(--review-message-font-family,var(--font-family--primary)))}.sf-review__read-more{margin:var(--review-read-more-margin,0 0 0 var(--spacer-xs));--button-padding:0;--button-font-weight:var(--font-weight--medium);--button-font-size:var(--font-size--sm)}@media (min-width:1024px){.sf-review{--review-max-width:33.1875rem;--review-message-display:inline}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_style_index_0_id_6d495708_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(370);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_style_index_0_id_6d495708_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_style_index_0_id_6d495708_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_style_index_0_id_6d495708_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_style_index_0_id_6d495708_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 434:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media (min-width:1024px){.smartphone-only[data-v-6d495708]{display:none!important}}@media (max-width:1023px){.desktop-only[data-v-6d495708]{display:none!important}}#product[data-v-6d495708]{box-sizing:border-box;padding:0 var(--spacer-sm)}@media (min-width:1024px){#product[data-v-6d495708]{max-width:1272px;padding:0;margin:0 auto}}@media (min-width:1024px){.product[data-v-6d495708]{display:flex}}.product__info[data-v-6d495708]{margin:var(--spacer-sm) auto var(--spacer-xs)}@media (min-width:1024px){.product__info[data-v-6d495708]{max-width:32.625rem;margin:0 0 0 7.5rem}}.product__header[data-v-6d495708]{--heading-title-color:var(--c-link);margin:0 var(--spacer-sm);display:flex;justify-content:space-between}@media (min-width:1024px){.product__header[data-v-6d495708]{margin:0 auto}}.product__drag-icon[data-v-6d495708]{-webkit-animation:moveicon-data-v-6d495708 1s ease-in-out infinite;animation:moveicon-data-v-6d495708 1s ease-in-out infinite}.product__price-and-rating[data-v-6d495708]{margin:var(--spacer-xs) var(--spacer-sm) var(--spacer-base);align-items:center}@media (min-width:1024px){.product__price-and-rating[data-v-6d495708]{display:flex;justify-content:space-between;margin:var(--spacer-sm) 0 var(--spacer-lg) 0}}.product__rating[data-v-6d495708]{display:flex;align-items:center;margin:var(--spacer-xs) 0}@media (min-width:1024px){.product__rating[data-v-6d495708]{justify-content:flex-end}}.product__count[data-v-6d495708]{font:var(--weight--normal) var(--font-size--sm)/1.4 var(--font-family--secondary);font:var(--count-font,var(--count-font-weight,var(--weight--normal)) var(--count-font-size,var(--font-size--sm))/var(--count-font-line-height,1.4) var(--count-font-family,var(--font-family--secondary)));color:var(--c-text);text-decoration:none;margin:0 0 0 var(--spacer-xs)}.product__description[data-v-6d495708]{color:var(--c-link);margin-top:var(--spacer-xl);font:var(--font-weight--normal) var(--font-size--base)/1.6 var(--font-family--primary);font:var(--product-description-font,var(--product-description-font-weight,var(--font-weight--normal)) var(--product-description-font-size,var(--font-size--base))/var(--product-description-font-line-height,1.6) var(--product-description-font-family,var(--font-family--primary)))}.product__select-size[data-v-6d495708]{margin:0 var(--spacer-sm)}@media (min-width:1024px){.product__select-size[data-v-6d495708]{margin:0}}.product__colors[data-v-6d495708]{font:var(--font-weight--normal) var(--font-size--lg)/1.6 var(--font-family--secondary);font:var(--product-color-font,var(--product-color-font-weight,var(--font-weight--normal)) var(--product-color-font-size,var(--font-size--lg))/var(--product-color-font-line-height,1.6) var(--product-color-font-family,var(--font-family--secondary)));display:flex;align-items:center;margin-top:var(--spacer-xl)}.product__color-label[data-v-6d495708]{margin:0 var(--spacer-lg) 0 0}.product__color[data-v-6d495708]{margin:0 var(--spacer-2xs)}.product__add-to-cart[data-v-6d495708]{margin:var(--spacer-base) var(--spacer-sm) 0}@media (min-width:1024px){.product__add-to-cart[data-v-6d495708]{margin:var(--spacer-2xl) 0 0 0}}.product__compare[data-v-6d495708],.product__guide[data-v-6d495708],.product__save[data-v-6d495708]{display:block;margin:var(--spacer-xl) 0 var(--spacer-base) auto}.product__compare[data-v-6d495708]{margin-top:0}.product__tabs[data-v-6d495708]{margin:var(--spacer-lg) auto var(--spacer-2xl)}@media (min-width:1024px){.product__tabs[data-v-6d495708]{margin-top:var(--spacer-2xl) 0 0 0;--tabs-content-tab-padding:3.5rem 0 0 0}}.product__property[data-v-6d495708]{margin:var(--spacer-base) 0}.product__property__button[data-v-6d495708]{--button-font-size:var(--font-size--base)}.product__review[data-v-6d495708]{padding-bottom:24px;border-bottom:1px solid var(--c-light);margin-bottom:var(--spacer-base)}.product__review[data-v-6d495708]:last-of-type{border:none;padding-bottom:0;margin-bottom:0}@media (min-width:1024px){.product__review[data-v-6d495708]{padding-bottom:0}}.product__additional-info[data-v-6d495708]{font:var(--font-weight--light) var(--font-size--base)/1.6 var(--font-family--primary);font:var(--additional-info-font,var(--additional-info-font-weight,var(--font-weight--light)) var(--additional-info-font-size,var(--font-size--base))/var(--additional-info-font-line-height,1.6) var(--additional-info-font-family,var(--font-family--primary)))}.product__additional-info__title[data-v-6d495708]{color:var(--c-link);font-weight:var(--font-weight--bold);margin:0 0 var(--spacer-sm)}.product__additional-info__title[data-v-6d495708]:not(:first-child){margin-top:3.5rem}.product__additional-info__paragraph[data-v-6d495708]{margin:0}.product__gallery[data-v-6d495708]{flex:1}.breadcrumbs[data-v-6d495708]{margin:var(--spacer-base) auto var(--spacer-lg)}@-webkit-keyframes moveicon-data-v-6d495708{0%{transform:translateZ(0)}50%{transform:translate3d(0,30%,0)}to{transform:translateZ(0)}}@keyframes moveicon-data-v-6d495708{0%{transform:translateZ(0)}50%{transform:translate3d(0,30%,0)}to{transform:translateZ(0)}}", ""]);
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

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/Product.vue?vue&type=template&id=6d495708&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"product"}},[_c('SfBreadcrumbs',{staticClass:"breadcrumbs desktop-only",attrs:{"breadcrumbs":_vm.breadcrumbs}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"product\" data-v-6d495708>","</div>",[_c('SfGallery',{staticClass:"product__gallery",attrs:{"images":_vm.productGallery}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"product__info\" data-v-6d495708>","</div>",[_vm._ssrNode("<div class=\"product__header\" data-v-6d495708>","</div>",[_c('SfHeading',{staticClass:"sf-heading--no-underline sf-heading--left",attrs:{"title":_vm.productGetters.getName(_vm.product),"level":3}}),_vm._ssrNode(" "),_c('SfIcon',{staticClass:"product__drag-icon smartphone-only",attrs:{"icon":"drag","size":"xl","color":"gray-secondary"}})],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"product__price-and-rating\" data-v-6d495708>","</div>",[_c('SfPrice',{attrs:{"regular":_vm.productGetters.getFormattedPrice(_vm.productGetters.getPrice(_vm.product).regular),"special":_vm.productGetters.getFormattedPrice(_vm.productGetters.getPrice(_vm.product).special)}}),_vm._ssrNode(" "),_vm._ssrNode("<div data-v-6d495708>","</div>",[_vm._ssrNode("<div class=\"product__rating\" data-v-6d495708>","</div>",[_c('SfRating',{attrs:{"score":_vm.averageRating,"max":5}}),_vm._ssrNode(" "+((!!_vm.totalReviews)?("<a href=\"#\" class=\"product__count\" data-v-6d495708>"+_vm._ssrEscape("\n              ("+_vm._s(_vm.totalReviews)+")\n            ")+"</a>"):"<!---->"))],2),_vm._ssrNode(" "),_c('SfButton',{staticClass:"sf-button--text desktop-only",attrs:{"data-cy":"product-btn_read-all"}},[_vm._v("\n            Read all reviews\n          ")])],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div data-v-6d495708>","</div>",[_vm._ssrNode("<p class=\"product__description desktop-only\" data-v-6d495708>"+_vm._ssrEscape("\n          "+_vm._s(_vm.description)+"\n        ")+"</p> "),_c('SfButton',{staticClass:"sf-button--text desktop-only product__guide",attrs:{"data-cy":"product-btn_size-guide"}},[_vm._v("\n          Size guide\n        ")]),_vm._ssrNode(" "),(_vm.options.size)?_c('SfSelect',{staticClass:"sf-select--underlined product__select-size",attrs:{"data-cy":"product-select_size","selected":_vm.configuration.size,"label":"Size","required":true},on:{"change":function (size) { return _vm.updateFilter({ size: size }); }}},_vm._l((_vm.options.size),function(size){return _c('SfSelectOption',{key:size.value,attrs:{"value":size.value}},[_vm._v("\n            "+_vm._s(size.label)+"\n          ")])}),1):_vm._e(),_vm._ssrNode(" "),(_vm.options.color)?_vm._ssrNode("<div class=\"product__colors desktop-only\" data-v-6d495708>","</div>",[_vm._ssrNode("<p class=\"product__color-label\" data-v-6d495708>Color:</p> "),_vm._ssrNode("<div data-v-6d495708>","</div>",_vm._l((_vm.options.color),function(color,i){return _c('SfColor',{key:i,staticClass:"product__color",attrs:{"data-cy":"product-color_update","color":color.value},on:{"click":function($event){return _vm.updateFilter({color: color})}}})}),1)],2):_vm._e(),_vm._ssrNode(" "),_c('SfAddToCart',{staticClass:"product__add-to-cart",attrs:{"data-cy":"product-cart_add","stock":_vm.stock,"disabled":_vm.loading,"canAddToCart":_vm.stock > 0},on:{"click":function($event){_vm.addToCart(_vm.product, parseInt(_vm.qty))}},model:{value:(_vm.qty),callback:function ($$v) {_vm.qty=$$v},expression:"qty"}}),_vm._ssrNode(" "),_c('SfButton',{staticClass:"sf-button--text desktop-only product__save",attrs:{"data-cy":"product-btn_save-later"}},[_vm._v("\n          Save for later\n        ")]),_vm._ssrNode(" "),_c('SfButton',{staticClass:"sf-button--text desktop-only product__compare",attrs:{"data-cy":"product-btn_add-to-compare"}},[_vm._v("\n          Add to compare\n        ")])],2),_vm._ssrNode(" "),_c('SfTabs',{staticClass:"product__tabs",attrs:{"openTab":1}},[_c('SfTab',{attrs:{"data-cy":"product-tab_description","title":"Description"}},[_c('div',[_c('p',[_vm._v("\n              The Karissa V-Neck Tee features a semi-fitted shape that's\n              flattering for every figure. You can hit the gym with\n              confidence while it hugs curves and hides common \"problem\"\n              areas. Find stunning women's cocktail dresses and party\n              dresses.\n            ")])]),_vm._v(" "),_vm._l((_vm.properties),function(property,i){return _c('SfProperty',{key:i,staticClass:"product__property",attrs:{"name":property.name,"value":property.value},scopedSlots:_vm._u([(property.name === 'Category')?{key:"value",fn:function(){return [_c('SfButton',{staticClass:"product__property__button sf-button--text"},[_vm._v("\n                "+_vm._s(property.value)+"\n              ")])]},proxy:true}:null],null,true)})})],2),_vm._v(" "),_c('SfTab',{attrs:{"title":"Read review","data-cy":"product-tab_reviews"}},_vm._l((_vm.reviews),function(review){return _c('SfReview',{key:_vm.reviewGetters.getReviewId(review),staticClass:"product__review",attrs:{"author":_vm.reviewGetters.getReviewAuthor(review),"date":_vm.reviewGetters.getReviewDate(review),"message":_vm.reviewGetters.getReviewMessage(review),"max-rating":5,"rating":_vm.reviewGetters.getReviewRating(review),"char-limit":250,"read-more-text":"Read more","hide-full-text":"Read less"}})}),1),_vm._v(" "),_c('SfTab',{staticClass:"product__additional-info",attrs:{"title":"Additional Information","data-cy":"product-tab_additional"}},[_c('p',{staticClass:"product__additional-info__title"},[_vm._v("Brand")]),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.brand))]),_vm._v(" "),_c('p',{staticClass:"product__additional-info__title"},[_vm._v("Take care of me")]),_vm._v(" "),_c('p',{staticClass:"product__additional-info__paragraph"},[_vm._v("\n            Just here for the care instructions?\n          ")]),_vm._v(" "),_c('p',{staticClass:"product__additional-info__paragraph"},[_vm._v("\n            Yeah, we thought so\n          ")]),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.careInstructions))])])],1)],2)],2),_vm._ssrNode(" "),_c('RelatedProducts',{attrs:{"products":_vm.relatedProducts,"loading":_vm.relatedLoading,"title":"Match it with"}}),_vm._ssrNode(" "),_c('InstagramFeed'),_vm._ssrNode(" "),_c('SfBanner',{staticClass:"sf-banner--left desktop-only banner-app",attrs:{"image":"/homepage/bannerD.png","subtitle":"Fashion to Take Away","title":"Download our application to your mobile"},scopedSlots:_vm._u([{key:"call-to-action",fn:function(){return [_c('div',{staticClass:"banner-app__call-to-action"},[_c('SfImage',{staticClass:"banner-app__image",attrs:{"src":"/homepage/google.png","width":191,"height":51,"alt":"Google Play"}}),_vm._v(" "),_c('SfImage',{staticClass:"banner-app__image",attrs:{"src":"/homepage/apple.png","width":174,"height":57,"alt":"App Store"}})],1)]},proxy:true}])})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/Product.vue?vue&type=template&id=6d495708&scoped=true&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfAlert/SfAlert.vue + 4 modules
var SfAlert = __webpack_require__(245);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfColor/SfColor.vue + 4 modules
var SfColor = __webpack_require__(379);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfProperty/SfProperty.vue + 4 modules
var SfProperty = __webpack_require__(99);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfHeading/SfHeading.vue + 4 modules
var SfHeading = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfPrice/SfPrice.vue + 4 modules
var SfPrice = __webpack_require__(39);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfRating/SfRating.vue + 4 modules
var SfRating = __webpack_require__(259);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfSelect/SfSelect.vue + 9 modules
var SfSelect = __webpack_require__(240);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfAddToCart/SfAddToCart.vue + 4 modules
var SfAddToCart = __webpack_require__(381);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfTabs/SfTabs.vue + 14 modules
var SfTabs = __webpack_require__(258);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/molecules/SfGallery/SfGallery.vue?vue&type=template&id=8b7a2b9e&
var SfGalleryvue_type_template_id_8b7a2b9e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-gallery"},[_vm._ssrNode("<div class=\"sf-gallery__stage\">","</div>",[_vm._ssrNode("<div class=\"glide\">","</div>",[_vm._ssrNode("<div data-glide-el=\"track\" class=\"glide__track\">","</div>",[_vm._ssrNode("<ul class=\"glide__slides\">","</ul>",_vm._l((_vm.images),function(picture,index){return _vm._ssrNode("<li class=\"glide__slide\">","</li>",[_c('SfImage',{ref:"sfGalleryBigImage",refInFor:true,staticClass:"sf-gallery__big-image",class:{ 'sf-gallery__big-image--has-zoom': _vm.enableZoom },attrs:{"src":picture.desktop.url,"alt":picture.alt,"width":_vm.imageWidth,"height":_vm.imageHeight},on:{"click":function($event){return _vm.$emit('click:stage', { picture: picture, index: index })}}})],1)}),0)])]),_vm._ssrNode(" "),_c('transition',{attrs:{"name":"sf-fade"}},[(_vm.outsideZoom && _vm.pictureSelected)?_c('div',{ref:"outSide",style:({ width: (_vm.imageWidth + "px"), height: (_vm.imageHeight + "px") })},[_c('SfImage',{ref:"imgZoom",staticClass:"sf-gallery__zoom",attrs:{"src":_vm.pictureSelected,"width":_vm.imageWidth,"height":_vm.imageHeight,"lazy":false}})],1):_vm._e()])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"sf-gallery__thumbs\">","</div>",[_vm._t("thumbs",_vm._l((_vm.images),function(image,index){return _c('SfButton',{key:'img-' + index,staticClass:"sf-button--pure sf-gallery__item",class:{ 'sf-gallery__item--selected': index === _vm.activeIndex },on:{"click":function($event){return _vm.go(index)}}},[_c('SfImage',{staticClass:"sf-gallery__thumb",attrs:{"src":image.mobile.url,"alt":image.alt,"width":_vm.thumbWidth,"height":_vm.thumbHeight}})],1)}),null,{ images: _vm.images, active: _vm.activeIndex, go: _vm.go })],2)],2)}
var SfGalleryvue_type_template_id_8b7a2b9e_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfGallery/SfGallery.vue?vue&type=template&id=8b7a2b9e&

// EXTERNAL MODULE: external "@glidejs/glide"
var glide_ = __webpack_require__(233);
var glide_default = /*#__PURE__*/__webpack_require__.n(glide_);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfImage/SfImage.vue + 4 modules
var SfImage = __webpack_require__(25);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfButton/SfButton.vue + 4 modules
var SfButton = __webpack_require__(10);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/molecules/SfGallery/SfGallery.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var SfGalleryvue_type_script_lang_js_ = ({
  name: "SfGallery",
  components: {
    SfImage: SfImage["a" /* default */],
    SfButton: SfButton["a" /* default */]
  },
  props: {
    /**
     * Images list
     */
    images: {
      type: Array,
      default: () => []
    },

    /**
     * Images width, without unit
     */
    imageWidth: {
      type: [Number, String],
      default: 422
    },

    /**
     * Images height, without unit
     */
    imageHeight: {
      type: [Number, String],
      default: 664
    },

    /**
     * Thumb width, without unit
     */
    thumbWidth: {
      type: [Number, String],
      default: 160
    },

    /**
     * Thumb height, without unit
     */
    thumbHeight: {
      type: [Number, String],
      default: 160
    },

    /**
     * Initial image number (starting from 1)
     */
    current: {
      type: Number,
      default: 1
    },

    /**
     * Glide slider options (https://glidejs.com/docs/options/)
     */
    sliderOptions: {
      type: Object,

      default() {
        return {
          type: "slider",
          autoplay: false,
          rewind: false,
          gap: 0
        };
      }

    },

    /**
     * Image zoom inside or overlap the stage
     */
    outsideZoom: {
      type: Boolean,
      default: false
    },

    /**
     * Toogle for image zoom or overlap the stage
     */
    enableZoom: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      positionStatic: {},
      eventHover: {},
      pictureSelected: "",
      glide: null,
      activeIndex: this.current - 1,
      style: ""
    };
  },

  computed: {
    mapPictures() {
      // map images to handle picture tags with SfImage
      return this.images.map(({
        desktop,
        big
      }) => ({
        mobile: desktop,
        desktop: big
      }));
    },

    updatedSliderOptions() {
      return { ...this.sliderOptions,
        startAt: this.activeIndex
      };
    }

  },

  mounted() {
    this.$nextTick(() => {
      // handle slider with swipe and transitions with Glide.js
      // https://glidejs.com/docs/
      if (this.images.length < 1) return;
      const glide = new glide_default.a(this.$refs.glide, this.updatedSliderOptions);
      glide.on("run", () => {
        this.go(glide.index);
      });
      glide.mount();
      this.glide = glide;
    });
  },

  beforeDestroy() {
    if (this.glide) {
      this.glide.destroy();
    }
  },

  methods: {
    positionObject(index) {
      if (this.$refs.sfGalleryBigImage) {
        if (this.outsideZoom) {
          return this.$refs.glide.getBoundingClientRect();
        } else {
          return this.$refs.sfGalleryBigImage[index].$el.getBoundingClientRect();
        }
      }

      return "";
    },

    go(index) {
      if (!this.glide) return;
      this.activeIndex = index;
      /**
       * Event for current image change (`v-model`)
       * @type {Event}
       */

      this.$emit("click", index + 1);

      if (this.glide) {
        this.glide.go(`=${index}`);
      }
    },

    startZoom(picture) {
      if (this.enableZoom) {
        const {
          zoom,
          big,
          desktop
        } = picture;
        this.pictureSelected = (zoom || big || desktop).url;
      }
    },

    moveZoom($event, index) {
      if (this.enableZoom) {
        this.eventHover = $event;

        if (this.outsideZoom) {
          this.positionStatic = this.positionObject(index);
          this.$refs.imgZoom.$el.children[0].style.cssText = "top: 0; transform: scale(2);";
          this.$refs.imgZoom.$el.children[0].style.transformOrigin = `${$event.clientX - this.positionStatic.x}px ${$event.clientY - this.positionStatic.y}px`;
        } else {
          this.positionStatic = this.positionObject(index);
          this.$refs.sfGalleryBigImage[index].$el.children[0].style.cssText = "top: 0; transform: scale(2);";
          this.$refs.sfGalleryBigImage[index].$el.children[0].style.transformOrigin = `${$event.clientX - this.positionStatic.x}px ${$event.clientY - this.positionStatic.y}px`;
        }
      }
    },

    removeZoom(index) {
      if (this.enableZoom) {
        this.pictureSelected = "";
        if (this.outsideZoom) return;
        this.$refs.sfGalleryBigImage[index].$el.children[0].style.transform = "scale(1)";
      }
    }

  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfGallery/SfGallery.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfGallery_SfGalleryvue_type_script_lang_js_ = (SfGalleryvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfGallery/SfGallery.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(427)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SfGallery_SfGalleryvue_type_script_lang_js_,
  SfGalleryvue_type_template_id_8b7a2b9e_render,
  SfGalleryvue_type_template_id_8b7a2b9e_staticRenderFns,
  false,
  injectStyles,
  null,
  "bd2de490"
  
)

/* harmony default export */ var SfGallery = (component.exports);
// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfIcon/SfIcon.vue + 6 modules
var SfIcon = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfBanner/SfBanner.vue + 4 modules
var SfBanner = __webpack_require__(444);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/molecules/SfSticky/SfSticky.vue?vue&type=template&id=5fc2e093&
var SfStickyvue_type_template_id_5fc2e093_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-sticky",class:{
    'sf-sticky--sticky': _vm.isSticky,
    'sf-sticky--bound': _vm.isBound,
  }},[_vm._t("default")],2)}
var SfStickyvue_type_template_id_5fc2e093_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfSticky/SfSticky.vue?vue&type=template&id=5fc2e093&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/molecules/SfSticky/SfSticky.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var SfStickyvue_type_script_lang_js_ = ({
  name: "SfSticky",

  data() {
    return {
      top: 0,
      height: 0,
      width: 0,
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      },
      parentTop: 0,
      parentHeight: 0,
      scrollY: 0,
      isSticky: false,
      isBound: false
    };
  },

  computed: {
    isIE() {
      if (typeof window === "undefined") return;
      const ua = window.navigator.userAgent;
      return ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/ ") > -1;
    },

    maxWidth() {
      return this.width - (this.padding.right + this.padding.left);
    },

    scrollBegin() {
      return this.parentTop + this.top;
    },

    scrollEnd() {
      return this.parentHeight + this.parentTop - this.height - this.padding.bottom;
    }

  },
  watch: {
    scrollY() {
      this.toggleSticky();
      this.toggleBound();
    },

    parentTop() {
      this.$el.style.bottom = "";
      this.$el.parentElement.style.paddingTop = "";
      this.isSticky = false;
      this.isBound = false;
      this.computedPadding();
      this.parentHeight = this.$el.parentElement.offsetHeight;
    },

    width(value) {
      this.$el.style.maxWidth = `${value}px`;
    },

    isSticky(state) {
      if (state) {
        if (this.$el.nextSibling) {
          this.$el.parentElement.style.paddingTop = `${this.height + this.padding.top}px`;
        }
      } else {
        if (this.$el.nextSibling && this.scrollY <= this.parentTop + this.top) {
          this.$el.parentElement.style.paddingTop = "";
        }
      }
    },

    isBound(state) {
      if (state) {
        this.$el.style.bottom = `${this.padding.bottom}px`; //if parent have padding
      } else {
        this.$el.style.bottom = "";
      }
    }

  },
  mounted: function () {
    if (!this.isIE) return;
    this.$el.parentElement.style.position = "relative";
    this.padding = this.computedPadding();
    this.parentTop = this.$el.parentElement.offsetTop;
    this.top = this.$el.offsetTop;
    this.parentHeight = this.$el.parentElement.offsetHeight;
    this.height = this.$el.offsetHeight;
    this.width = this.$el.parentElement.offsetWidth;
    window.addEventListener("scroll", this.scrollHandler, {
      passive: true
    });
    window.addEventListener("resize", this.resizeHandler, {
      passive: true
    });
  },
  beforeDestroy: function () {
    window.removeEventListener("scroll", this.scrollHandler);
    window.removeEventListener("resize", this.resizeHandler);
  },
  methods: {
    scrollHandler() {
      this.scrollY = Math.ceil(window.pageYOffset);
    },

    resizeHandler() {
      this.width = this.$el.parentElement.offsetWidth;
      this.parentTop = this.$el.parentElement.offsetTop;
    },

    toggleSticky() {
      if (this.scrollY >= this.parentTop + this.top && this.scrollY < this.scrollEnd) {
        this.isSticky = true;
      } else {
        this.isSticky = false;
      }
    },

    toggleBound() {
      if (this.scrollY >= this.scrollEnd && this.scrollBegin < this.scrollEnd) {
        this.isBound = true;
      } else {
        this.isBound = false;
      }
    },

    computedPadding() {
      const computed = window.getComputedStyle(this.$el.parentElement);
      return {
        top: parseInt(computed["padding-top"], 10),
        right: parseInt(computed["padding-right"], 10),
        bottom: parseInt(computed["padding-bottom"], 10),
        left: parseInt(computed["padding-left"], 10)
      };
    }

  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfSticky/SfSticky.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfSticky_SfStickyvue_type_script_lang_js_ = (SfStickyvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfSticky/SfSticky.vue



function SfSticky_injectStyles (context) {
  
  var style0 = __webpack_require__(429)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var SfSticky_component = Object(componentNormalizer["a" /* default */])(
  SfSticky_SfStickyvue_type_script_lang_js_,
  SfStickyvue_type_template_id_5fc2e093_render,
  SfStickyvue_type_template_id_5fc2e093_staticRenderFns,
  false,
  SfSticky_injectStyles,
  null,
  "3903d8f2"
  
)

/* harmony default export */ var SfSticky = (SfSticky_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/molecules/SfReview/SfReview.vue?vue&type=template&id=cd006bfa&
var SfReviewvue_type_template_id_cd006bfa_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"sf-review"},[_vm._t("author",[_c('div',{staticClass:"sf-review__author"},[_vm._t("icon",[_c('SfIcon',{staticClass:"sf-review__icon"},[_c('svg',{attrs:{"viewbox":"0 0 20 20","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M11.4544 1.14319L12.7481 2.62068L14.6831 1.79943C14.9962 1.66724 15.3581 1.83786 15.4575 2.1613L16.0481 4.06536L18.1472 4.10286C18.4866 4.10849 18.7518 4.40941 18.7097 4.74693L18.4762 6.7288L20.3794 7.61661C20.6672 7.75161 20.7919 8.09474 20.6569 8.38254C20.3972 8.91974 19.9275 9.61254 19.6097 10.146L20.9878 11.7332C21.21 11.9901 21.1603 12.3876 20.8837 12.5826L19.2553 13.7329L19.8684 15.742C19.9678 16.0701 19.7615 16.4085 19.4278 16.4741L17.475 16.8632L17.2191 18.9473C17.175 19.3045 16.8178 19.5351 16.4765 19.4301L14.5725 18.9979L13.4906 20.797C13.3153 21.0895 12.9234 21.1673 12.6506 20.9629L11.0512 19.7694L9.3309 20.9732C9.04871 21.1701 8.66528 21.0782 8.49745 20.781L7.52432 19.0429L5.45994 19.4441C5.10932 19.5107 4.78681 19.2482 4.77462 18.8947L4.59649 16.9447L2.55088 16.4722C2.2162 16.3954 2.02494 16.0476 2.13275 15.7241L2.77401 13.836L1.09681 12.5713C0.80807 12.3529 0.789326 11.9282 1.05369 11.6854L2.37556 10.2557L1.35743 8.41819C1.19056 8.11819 1.32181 7.74225 1.63588 7.60725L3.46494 6.82164L3.28307 4.72819C3.25213 4.36725 3.56056 4.06819 3.91681 4.10287L5.85933 4.12912L6.54371 2.14257C6.65996 1.80508 7.04809 1.65508 7.3612 1.81912L9.14245 2.64131L10.575 1.10663C10.8178 0.846016 11.2322 0.866632 11.4515 1.14319H11.4544ZM6.27084 11.2194C5.5049 10.4534 6.66929 9.2881 7.43616 10.054L10.0162 12.634L14.5339 7.62596C15.2567 6.82251 16.4792 7.92315 15.7564 8.72657L10.6845 14.3479C10.377 14.7257 9.8089 14.7566 9.46296 14.4107L6.26976 11.2184L6.27084 11.2194Z"}})])])]),_vm._v("\n      "+_vm._s(_vm.author)+"\n    ")],2)],null,{ author: _vm.author }),_vm._ssrNode(" "),_vm._t("info",[_c('div',{staticClass:"sf-review__info"},[_c('div',{class:{ 'sf-review__rating': _vm.rating > 0 && _vm.maxRating > 0 }},[(_vm.rating)?_c('SfRating',{attrs:{"max":_vm.maxRating,"score":_vm.rating}}):_vm._e()],1),_vm._v(" "),_c('div',{staticClass:"sf-review__date"},[_vm._v("\n        "+_vm._s(_vm.date)+"\n      ")])])],null,{ rating: _vm.rating, maxRating: _vm.maxRating, date: _vm.date }),_vm._ssrNode(" "),_vm._t("message",[(_vm.message)?_c('div',[_c('p',{staticClass:"sf-review__message"},[_vm._v(_vm._s(_vm.finalMessage))]),_vm._v(" "),(_vm.showButton)?_c('SfButton',{staticClass:"sf-button--text sf-review__read-more",on:{"click":_vm.toggleMessage}},[_vm._v("\n        "+_vm._s(_vm.buttonText)+"\n      ")]):_vm._e()],1):_vm._e()],null,{ finalMessage: _vm.finalMessage, buttonText: _vm.buttonText })],2)}
var SfReviewvue_type_template_id_cd006bfa_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfReview/SfReview.vue?vue&type=template&id=cd006bfa&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/molecules/SfReview/SfReview.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var SfReviewvue_type_script_lang_js_ = ({
  name: "SfReview",
  components: {
    SfRating: SfRating["a" /* default */],
    SfIcon: SfIcon["a" /* default */],
    SfButton: SfButton["a" /* default */]
  },
  props: {
    /**
     * Author of the review
     */
    author: {
      type: String,
      default: ""
    },

    /**
     * Date of the review
     */
    date: {
      type: String,
      default: ""
    },

    /**
     * Message from the reviewer
     */
    message: {
      type: String,
      default: ""
    },

    /**
     * Rating from the reviewer
     */
    rating: {
      type: [Number, String, Boolean],
      default: false
    },

    /**
     * Max rating for the review
     */
    maxRating: {
      type: [Number, String],
      default: 5
    },

    /**
     * Char limit for the review
     */
    charLimit: {
      type: [Number, String],
      default: 250
    },

    /**
     * Read more text for the review
     */
    readMoreText: {
      type: String,
      default: "Read more"
    },

    /**
     * Hide full text message for the review
     */
    hideFullText: {
      type: String,
      default: "Read less"
    }
  },

  data() {
    return {
      isOpen: false
    };
  },

  computed: {
    showButton() {
      return this.message.length > this.charLimit;
    },

    buttonText() {
      let buttonText = this.readMoreText;

      if (this.isOpen) {
        buttonText = this.hideFullText;
      }

      return buttonText;
    },

    finalMessage() {
      return this.message.length > this.charLimit && !this.isOpen ? this.message.slice(0, this.charLimit) + "..." : this.message;
    }

  },
  methods: {
    toggleMessage() {
      this.isOpen = !this.isOpen;
    }

  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfReview/SfReview.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfReview_SfReviewvue_type_script_lang_js_ = (SfReviewvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfReview/SfReview.vue



function SfReview_injectStyles (context) {
  
  var style0 = __webpack_require__(431)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var SfReview_component = Object(componentNormalizer["a" /* default */])(
  SfReview_SfReviewvue_type_script_lang_js_,
  SfReviewvue_type_template_id_cd006bfa_render,
  SfReviewvue_type_template_id_cd006bfa_staticRenderFns,
  false,
  SfReview_injectStyles,
  null,
  "3f2815d2"
  
)

/* harmony default export */ var SfReview = (SfReview_component.exports);
// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfBreadcrumbs/SfBreadcrumbs.vue + 4 modules
var SfBreadcrumbs = __webpack_require__(383);

// EXTERNAL MODULE: ./components/InstagramFeed.vue + 4 modules
var InstagramFeed = __webpack_require__(345);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/RelatedProducts.vue?vue&type=template&id=675c7c3a&scoped=true&
var RelatedProductsvue_type_template_id_675c7c3a_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('SfSection',{staticClass:"section",attrs:{"title-heading":_vm.title}},[_c('SfLoader',{class:{ loading: _vm.loading },attrs:{"loading":_vm.loading}},[_c('SfCarousel',{staticClass:"carousel",attrs:{"data-cy":"related-products-carousel","settings":{ peek: 16, breakpoints: { 1023: { peek: 0, perView: 2 } } }}},_vm._l((_vm.products),function(product,i){return _c('SfCarouselItem',{key:i,staticClass:"carousel__item"},[_c('SfProductCard',{attrs:{"title":_vm.productGetters.getName(product),"image":_vm.productGetters.getCoverImage(product),"regular-price":_vm.productGetters.getFormattedPrice(_vm.productGetters.getPrice(product).regular),"special-price":_vm.productGetters.getFormattedPrice(_vm.productGetters.getPrice(product).special),"link":_vm.localePath(("/p/" + (_vm.productGetters.getId(product)) + "/" + (_vm.productGetters.getSlug(product))))}})],1)}),1)],1)],1)}
var RelatedProductsvue_type_template_id_675c7c3a_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/RelatedProducts.vue?vue&type=template&id=675c7c3a&scoped=true&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfCarousel/SfCarousel.vue + 9 modules
var SfCarousel = __webpack_require__(441);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfProductCard/SfProductCard.vue + 4 modules
var SfProductCard = __webpack_require__(380);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfSection/SfSection.vue + 4 modules
var SfSection = __webpack_require__(443);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfLoader/SfLoader.vue + 4 modules
var SfLoader = __webpack_require__(244);

// EXTERNAL MODULE: ./node_modules/@vue-storefront/commercetools/lib/index.es.js
var index_es = __webpack_require__(8);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/vue-loader/lib??vue-loader-options!./components/RelatedProducts.vue?vue&type=script&lang=ts&


/* harmony default export */ var RelatedProductsvue_type_script_lang_ts_ = ({
  name: 'RelatedProducts',

  setup() {
    return {
      productGetters: index_es["e" /* productGetters */]
    };
  },

  components: {
    SfCarousel: SfCarousel["a" /* default */],
    SfProductCard: SfProductCard["a" /* default */],
    SfSection: SfSection["a" /* default */],
    SfLoader: SfLoader["a" /* default */]
  },
  props: {
    title: String,
    products: Array,
    loading: Boolean
  }
});
// CONCATENATED MODULE: ./components/RelatedProducts.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_RelatedProductsvue_type_script_lang_ts_ = (RelatedProductsvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./components/RelatedProducts.vue



function RelatedProducts_injectStyles (context) {
  
  var style0 = __webpack_require__(425)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var RelatedProducts_component = Object(componentNormalizer["a" /* default */])(
  components_RelatedProductsvue_type_script_lang_ts_,
  RelatedProductsvue_type_template_id_675c7c3a_scoped_true_render,
  RelatedProductsvue_type_template_id_675c7c3a_scoped_true_staticRenderFns,
  false,
  RelatedProducts_injectStyles,
  "675c7c3a",
  "1cecffb5"
  
)

/* harmony default export */ var RelatedProducts = (RelatedProducts_component.exports);
// EXTERNAL MODULE: external "@vue/composition-api"
var composition_api_ = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/@vue-storefront/core/lib/index.es.js
var lib_index_es = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Product.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var Productvue_type_script_lang_js_ = ({
  name: 'Product',
  transition: 'fade',

  setup(props, context) {
    const qty = Object(composition_api_["ref"])(1);
    const {
      id
    } = context.root.$route.params;
    const {
      products,
      search
    } = Object(index_es["j" /* useProduct */])('products');
    const {
      products: relatedProducts,
      search: searchRelatedProducts,
      loading: relatedLoading
    } = Object(index_es["j" /* useProduct */])('relatedProducts');
    const {
      addToCart,
      loading
    } = Object(index_es["g" /* useCart */])();
    const {
      reviews: productReviews,
      search: searchReviews
    } = Object(index_es["k" /* useReview */])('productReviews');
    const product = Object(composition_api_["computed"])(() => index_es["e" /* productGetters */].getFiltered(products.value, {
      master: true,
      attributes: context.root.$route.query
    })[0]);
    const options = Object(composition_api_["computed"])(() => index_es["e" /* productGetters */].getAttributes(products.value, ['color', 'size']));
    const configuration = Object(composition_api_["computed"])(() => index_es["e" /* productGetters */].getAttributes(product.value, ['color', 'size']));
    const categories = Object(composition_api_["computed"])(() => index_es["e" /* productGetters */].getCategoryIds(product.value));
    const reviews = Object(composition_api_["computed"])(() => index_es["f" /* reviewGetters */].getItems(productReviews.value)); // TODO: Breadcrumbs are temporary disabled because productGetters return undefined. We have a mocks in data
    // const breadcrumbs = computed(() => productGetters.getBreadcrumbs ? productGetters.getBreadcrumbs(product.value) : props.fallbackBreadcrumbs);

    const productGallery = Object(composition_api_["computed"])(() => index_es["e" /* productGetters */].getGallery(product.value).map(img => ({
      mobile: {
        url: img.small
      },
      desktop: {
        url: img.normal
      },
      big: {
        url: img.big
      }
    })));
    Object(lib_index_es["onSSR"])(async () => {
      await search({
        id
      });
      await searchRelatedProducts({
        catId: [categories.value[0]],
        limit: 8
      });
      await searchReviews({
        productId: id
      });
    });

    const updateFilter = filter => {
      context.root.$router.push({
        path: context.root.$route.path,
        query: { ...configuration.value,
          ...filter
        }
      });
    };

    return {
      updateFilter,
      configuration,
      product,
      reviews,
      reviewGetters: index_es["f" /* reviewGetters */],
      averageRating: Object(composition_api_["computed"])(() => index_es["e" /* productGetters */].getAverageRating(product.value)),
      totalReviews: Object(composition_api_["computed"])(() => index_es["e" /* productGetters */].getTotalReviews(product.value)),
      relatedProducts: Object(composition_api_["computed"])(() => index_es["e" /* productGetters */].getFiltered(relatedProducts.value, {
        master: true
      })),
      relatedLoading,
      options,
      qty,
      addToCart,
      loading,
      productGetters: index_es["e" /* productGetters */],
      productGallery
    };
  },

  components: {
    SfAlert: SfAlert["a" /* default */],
    SfColor: SfColor["a" /* default */],
    SfProperty: SfProperty["a" /* default */],
    SfHeading: SfHeading["a" /* default */],
    SfPrice: SfPrice["a" /* default */],
    SfRating: SfRating["a" /* default */],
    SfSelect: SfSelect["a" /* default */],
    SfAddToCart: SfAddToCart["a" /* default */],
    SfTabs: SfTabs["a" /* default */],
    SfGallery: SfGallery,
    SfIcon: SfIcon["a" /* default */],
    SfImage: SfImage["a" /* default */],
    SfBanner: SfBanner["a" /* default */],
    SfSticky: SfSticky,
    SfReview: SfReview,
    SfBreadcrumbs: SfBreadcrumbs["a" /* default */],
    SfButton: SfButton["a" /* default */],
    InstagramFeed: InstagramFeed["a" /* default */],
    RelatedProducts: RelatedProducts
  },

  data() {
    return {
      stock: 5,
      properties: [{
        name: 'Product Code',
        value: '578902-00'
      }, {
        name: 'Category',
        value: 'Pants'
      }, {
        name: 'Material',
        value: 'Cotton'
      }, {
        name: 'Country',
        value: 'Germany'
      }],
      description: 'Find stunning women cocktail and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.',
      detailsIsActive: false,
      brand: 'Brand name is the perfect pairing of quality and design. This label creates major everyday vibes with its collection of modern brooches, silver and gold jewellery, or clips it back with hair accessories in geo styles.',
      careInstructions: 'Do not wash!',
      breadcrumbs: [{
        text: 'Home',
        route: {
          link: '#'
        }
      }, {
        text: 'Category',
        route: {
          link: '#'
        }
      }, {
        text: 'Pants',
        route: {
          link: '#'
        }
      }]
    };
  }

});
// CONCATENATED MODULE: ./pages/Product.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_Productvue_type_script_lang_js_ = (Productvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/Product.vue



function Product_injectStyles (context) {
  
  var style0 = __webpack_require__(433)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Product_component = Object(componentNormalizer["a" /* default */])(
  pages_Productvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  Product_injectStyles,
  "6d495708",
  "4ebbef7b"
  
)

/* harmony default export */ var Product = __webpack_exports__["default"] = (Product_component.exports);

/***/ })

};;
//# sourceMappingURL=Product.js.map