exports.ids = [4];
exports.modules = {

/***/ 256:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(271);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("637d86f6", content, true, context)
};

/***/ }),

/***/ 266:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(301);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("6ebc8337", content, true, context)
};

/***/ }),

/***/ 267:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(303);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("4ddf6cb0", content, true, context)
};

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfTable_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(256);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfTable_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfTable_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfTable_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfTable_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media (min-width:1024px){.smartphone-only{display:none!important}}@media (max-width:1023px){.desktop-only{display:none!important}}.sf-table{box-sizing:border-box;width:100%;width:var(--table-width,100%);border:none;border-spacing:0;border-spacing:var(--table-border-spacing,0)}.sf-table__heading,.sf-table__row{box-sizing:border-box;display:flex;flex-wrap:wrap}.sf-table__heading{align-items:center;padding:var(--table-heading-padding,var(--spacer-sm) 0);background-color:transparent;background-color:var(--table-heading-background,transparent);border:var(--table-border-heading,var(--table-border-heading-style,solid) var(--table-border-heading-color,var(--c-primary)));border-width:0 0 2px;border-width:var(--table-border-heading-width,0 0 2px 0)}.sf-table__header{font:var(--font-weight--normal) var(--font-size--base)/1.4 var(--font-family--secondary);font:var(--table-header-font,var(--table-header-font-weight,var(--font-weight--normal)) var(--table-header-font-size,var(--font-size--base))/var(--table-header-font-line-height,1.4) var(--table-header-font-family,var(--font-family--secondary)));color:var(--c-text);color:var(--table-header-color,var(--c-text))}.sf-table__row{padding:var(--table-row-padding,var(--spacer-xs) 0);background-color:var(--table-row-background);box-shadow:var(--table-row-box-shadow);border:var(--table-row-border,var(--table-row-border-style,solid) var(--table-row-border-color,var(--c-light)));border-width:0 0 2px;border-width:var(--table-row-border-width,0 0 2px 0)}.sf-table__data{color:var(--c-dark-variant);color:var(--table-data-color,var(--c-dark-variant));font:var(--font-weight--normal) var(--font-size--base)/1.6 var(--font-family--secondary);font:var(--table-data-font,var(--table-data-font-weight,var(--font-weight--normal)) var(--table-data-font-size,var(--font-size--base))/var(--table-data-font-line-height,1.6) var(--table-data-font-family,var(--font-family--secondary)))}.sf-table__data,.sf-table__header{box-sizing:border-box;flex:0 0 calc(100%/var(--_table-column-width));flex:var(--table-column-flex,0 0 calc(100%/var(--_table-column-width)));padding:0;padding:var(--table-column-padding,0);text-align:left;text-align:var(--table-column-text-align,left)}.sf-table__data:nth-child(2n),.sf-table__header:nth-child(2n){order:1;order:var(--_table-column-order,1)}.sf-table--no-border{--table-row-border-width:0}@media (min-width:1024px){.sf-table{--table-row-padding:var(--spacer-sm) var(--spacer-sm);--table-heading-padding:var(--spacer-sm) var(--spacer-sm);--table-heading-background:transparent;--table-column-flex:1;--_table-column-order:0;--table-header-font-weight:var(--font-weight--normal)}.sf-table--no-border{--table-row-border-width:0}.sf-table__row:hover{--table-row-box-shadow:0px 4px 11px rgba(29,31,34,0.1)}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfAccordionItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(266);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfAccordionItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfAccordionItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfAccordionItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfAccordionItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 301:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media (min-width:1024px){.smartphone-only{display:none!important}}@media (max-width:1023px){.desktop-only{display:none!important}}.sf-accordion-item{will-change:height;transform:translateZ(0);-webkit-backface-visibility:hidden;backface-visibility:hidden}.sf-accordion-item__header{display:flex;justify-content:space-between;justify-content:var(--accordion-item-header-justify,space-between);padding:var(--accordion-item-header-padding,var(--spacer-sm));color:var(--accordion-item-header-color);transition:color .15s ease-in-out;width:100%;border:var(--accordion-item-header-border,var(--accordion-item-header-border-style,solid) var(--accordion-item-header-border-color,var(--c-light)));border-width:0 0 1px;border-width:var(--accordion-item-header-border-width,0 0 1px 0);font:var(--font-weight--medium) var(--font-size--base)/1.4 var(--font-family--secondary);font:var(--accordion-item-header-font,var(--accordion-item-header-font-weight,var(--font-weight--medium)) var(--accordion-item-header-font-size,var(--font-size--base))/var(--accordion-item-header-font-line-height,1.4) var(--accordion-item-header-font-family,var(--font-family--secondary)))}.sf-accordion-item__header.is-open{--accordion-item-header-border-width:0;--accordion-item-header-color:var(--c-primary);--chevron-color:var(--c-primary)}.sf-accordion-item__content{padding:var(--accordion-item-content-padding,var(--spacer-base) var(--spacer-sm));color:var(--c-text);color:var(--accordion-item-content-color,var(--c-text));border:var(--accordion-item-content-border,var(--accordion-item-content-border-style,solid) var(--accordion-item-content-border-color,var(--c-light)));border-width:1px 0;border-width:var(--accordion-item-content-border-width,1px 0);font:var(--font-weight--light) var(--font-size--base)/1.6 var(--font-family--primary);font:var(--accordion-item-content-font,var(--accordion-item-content-font-weight,var(--font-weight--light)) var(--accordion-item-content-font-size,var(--font-size--base))/var(--accordion-item-content-font-line-height,1.6) var(--accordion-item-content-font-family,var(--font-family--primary)))}.sf-accordion-item__chevron{display:none;display:var(--accordion-item-chevron-display,none);flex:0 0 auto}@media (min-width:1024px){.sf-accordion-item{--accordion-item-header-padding:var(--spacer-xs) 0;--accordion-item-header-font-size:var(--h4-font-size);--accordion-item-header-font-weight:var(--font-weight--normal);--accordion-item-header-border-width:0;--accordion-item-content-border-width:0;--accordion-item-content-padding:var(--spacer-base) 0}}.sf-accordion.has-chevron{--accordion-item-chevron-display:flex}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfAccordion_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(267);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfAccordion_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfAccordion_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfAccordion_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfAccordion_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 303:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media (min-width:1024px){.smartphone-only{display:none!important}}@media (max-width:1023px){.desktop-only{display:none!important}}.sf-accordion-item{will-change:height;transform:translateZ(0);-webkit-backface-visibility:hidden;backface-visibility:hidden}.sf-accordion-item__header{display:flex;justify-content:space-between;justify-content:var(--accordion-item-header-justify,space-between);padding:var(--accordion-item-header-padding,var(--spacer-sm));color:var(--accordion-item-header-color);transition:color .15s ease-in-out;width:100%;border:var(--accordion-item-header-border,var(--accordion-item-header-border-style,solid) var(--accordion-item-header-border-color,var(--c-light)));border-width:0 0 1px;border-width:var(--accordion-item-header-border-width,0 0 1px 0);font:var(--font-weight--medium) var(--font-size--base)/1.4 var(--font-family--secondary);font:var(--accordion-item-header-font,var(--accordion-item-header-font-weight,var(--font-weight--medium)) var(--accordion-item-header-font-size,var(--font-size--base))/var(--accordion-item-header-font-line-height,1.4) var(--accordion-item-header-font-family,var(--font-family--secondary)))}.sf-accordion-item__header.is-open{--accordion-item-header-border-width:0;--accordion-item-header-color:var(--c-primary);--chevron-color:var(--c-primary)}.sf-accordion-item__content{padding:var(--accordion-item-content-padding,var(--spacer-base) var(--spacer-sm));color:var(--c-text);color:var(--accordion-item-content-color,var(--c-text));border:var(--accordion-item-content-border,var(--accordion-item-content-border-style,solid) var(--accordion-item-content-border-color,var(--c-light)));border-width:1px 0;border-width:var(--accordion-item-content-border-width,1px 0);font:var(--font-weight--light) var(--font-size--base)/1.6 var(--font-family--primary);font:var(--accordion-item-content-font,var(--accordion-item-content-font-weight,var(--font-weight--light)) var(--accordion-item-content-font-size,var(--font-size--base))/var(--accordion-item-content-font-line-height,1.6) var(--accordion-item-content-font-family,var(--font-family--primary)))}.sf-accordion-item__chevron{display:none;display:var(--accordion-item-chevron-display,none);flex:0 0 auto}@media (min-width:1024px){.sf-accordion-item{--accordion-item-header-padding:var(--spacer-xs) 0;--accordion-item-header-font-size:var(--h4-font-size);--accordion-item-header-font-weight:var(--font-weight--normal);--accordion-item-header-border-width:0;--accordion-item-content-border-width:0;--accordion-item-content-padding:var(--spacer-base) 0}}.sf-accordion.has-chevron{--accordion-item-chevron-display:flex}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 354:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(402);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("a4c2ec7c", content, true, context)
};

/***/ }),

/***/ 355:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(404);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("2d2ce16e", content, true, context)
};

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfTable/SfTable.vue?vue&type=template&id=11b2df3a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('table',{staticClass:"sf-table"},[_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfTable/SfTable.vue?vue&type=template&id=11b2df3a&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(3);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfTable/_internal/SfTableRow.vue?vue&type=template&id=119eeadc&
var SfTableRowvue_type_template_id_119eeadc_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('tbody',[_vm._ssrNode("<tr class=\"sf-table__row\">","</tr>",[_vm._t("default")],2)])}
var SfTableRowvue_type_template_id_119eeadc_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfTable/_internal/SfTableRow.vue?vue&type=template&id=119eeadc&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfTable/_internal/SfTableRow.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
/* harmony default export */ var SfTableRowvue_type_script_lang_js_ = ({
  name: "SfTableRow",
  inject: ["table"],

  mounted() {
    if (!this.$slots.default) return;
    this.table.updateColumnsCount(this.$slots.default.filter(node => node.tag).length);
  }

});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfTable/_internal/SfTableRow.vue?vue&type=script&lang=js&
 /* harmony default export */ var _internal_SfTableRowvue_type_script_lang_js_ = (SfTableRowvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfTable/_internal/SfTableRow.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _internal_SfTableRowvue_type_script_lang_js_,
  SfTableRowvue_type_template_id_119eeadc_render,
  SfTableRowvue_type_template_id_119eeadc_staticRenderFns,
  false,
  null,
  null,
  "8a144d74"
  
)

/* harmony default export */ var SfTableRow = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfTable/_internal/SfTableData.vue?vue&type=template&id=3121b6c5&
var SfTableDatavue_type_template_id_3121b6c5_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',{staticClass:"sf-table__data"},[_vm._t("default")],2)}
var SfTableDatavue_type_template_id_3121b6c5_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfTable/_internal/SfTableData.vue?vue&type=template&id=3121b6c5&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfTable/_internal/SfTableData.vue?vue&type=script&lang=js&
//
//
//
//
//
/* harmony default export */ var SfTableDatavue_type_script_lang_js_ = ({
  name: "SfTableData"
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfTable/_internal/SfTableData.vue?vue&type=script&lang=js&
 /* harmony default export */ var _internal_SfTableDatavue_type_script_lang_js_ = (SfTableDatavue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfTable/_internal/SfTableData.vue





/* normalize component */

var SfTableData_component = Object(componentNormalizer["a" /* default */])(
  _internal_SfTableDatavue_type_script_lang_js_,
  SfTableDatavue_type_template_id_3121b6c5_render,
  SfTableDatavue_type_template_id_3121b6c5_staticRenderFns,
  false,
  null,
  null,
  "0e6d0dee"
  
)

/* harmony default export */ var SfTableData = (SfTableData_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfTable/_internal/SfTableHeader.vue?vue&type=template&id=62c92d90&
var SfTableHeadervue_type_template_id_62c92d90_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('th',{staticClass:"sf-table__header"},[_vm._t("default")],2)}
var SfTableHeadervue_type_template_id_62c92d90_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfTable/_internal/SfTableHeader.vue?vue&type=template&id=62c92d90&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfTable/_internal/SfTableHeader.vue?vue&type=script&lang=js&
//
//
//
//
//
/* harmony default export */ var SfTableHeadervue_type_script_lang_js_ = ({
  name: "SfTableHeader"
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfTable/_internal/SfTableHeader.vue?vue&type=script&lang=js&
 /* harmony default export */ var _internal_SfTableHeadervue_type_script_lang_js_ = (SfTableHeadervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfTable/_internal/SfTableHeader.vue





/* normalize component */

var SfTableHeader_component = Object(componentNormalizer["a" /* default */])(
  _internal_SfTableHeadervue_type_script_lang_js_,
  SfTableHeadervue_type_template_id_62c92d90_render,
  SfTableHeadervue_type_template_id_62c92d90_staticRenderFns,
  false,
  null,
  null,
  "dfd1475e"
  
)

/* harmony default export */ var SfTableHeader = (SfTableHeader_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfTable/_internal/SfTableHeading.vue?vue&type=template&id=38ab574a&
var SfTableHeadingvue_type_template_id_38ab574a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('thead',[_vm._ssrNode("<tr class=\"sf-table__heading\">","</tr>",[_vm._t("default")],2)])}
var SfTableHeadingvue_type_template_id_38ab574a_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfTable/_internal/SfTableHeading.vue?vue&type=template&id=38ab574a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfTable/_internal/SfTableHeading.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
/* harmony default export */ var SfTableHeadingvue_type_script_lang_js_ = ({
  name: "SfTableHeading",
  inject: ["table"],

  mounted() {
    if (!this.$slots.default) return;
    this.table.updateColumnsCount(this.$slots.default.filter(node => node.tag).length);
  }

});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfTable/_internal/SfTableHeading.vue?vue&type=script&lang=js&
 /* harmony default export */ var _internal_SfTableHeadingvue_type_script_lang_js_ = (SfTableHeadingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfTable/_internal/SfTableHeading.vue





/* normalize component */

var SfTableHeading_component = Object(componentNormalizer["a" /* default */])(
  _internal_SfTableHeadingvue_type_script_lang_js_,
  SfTableHeadingvue_type_template_id_38ab574a_render,
  SfTableHeadingvue_type_template_id_38ab574a_staticRenderFns,
  false,
  null,
  null,
  "429c3f6e"
  
)

/* harmony default export */ var SfTableHeading = (SfTableHeading_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfTable/SfTable.vue?vue&type=script&lang=js&
//
//
//
//
//





external_vue_default.a.component("SfTableRow", SfTableRow);
external_vue_default.a.component("SfTableData", SfTableData);
external_vue_default.a.component("SfTableHeader", SfTableHeader);
external_vue_default.a.component("SfTableHeading", SfTableHeading);
/* harmony default export */ var SfTablevue_type_script_lang_js_ = ({
  name: "SfTable",

  provide() {
    const table = {};
    Object.defineProperty(table, "updateColumnsCount", {
      value: this.updateColumnsCount
    });
    return {
      table
    };
  },

  methods: {
    updateColumnsCount(columnsCount) {
      this.$el.style.setProperty("--_table-column-width", Math.ceil(columnsCount / 2));
    }

  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfTable/SfTable.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfTable_SfTablevue_type_script_lang_js_ = (SfTablevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfTable/SfTable.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(270)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var SfTable_component = Object(componentNormalizer["a" /* default */])(
  SfTable_SfTablevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "907bbbb8"
  
)

/* harmony default export */ var SfTable = __webpack_exports__["a"] = (SfTable_component.exports);

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfDivider_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(354);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfDivider_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfDivider_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfDivider_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfDivider_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 402:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media (min-width:1024px){.smartphone-only{display:none!important}}@media (max-width:1023px){.desktop-only{display:none!important}}.sf-divider{display:block;display:var(--divider-display,block);margin:var(--divider-margin);max-width:var(--divider-max-width);width:var(--divider-width);border:var(--divider-border,var(--divider-border-style,solid) var(--divider-border-color,var(--c-light)));border-width:1px;border-width:var(--divider-border-width,1px)}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderReview_vue_vue_type_style_index_0_id_75dee96b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(355);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderReview_vue_vue_type_style_index_0_id_75dee96b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderReview_vue_vue_type_style_index_0_id_75dee96b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderReview_vue_vue_type_style_index_0_id_75dee96b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderReview_vue_vue_type_style_index_0_id_75dee96b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 404:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media (min-width:1024px){.smartphone-only[data-v-75dee96b]{display:none!important}}@media (max-width:1023px){.desktop-only[data-v-75dee96b]{display:none!important}}.title[data-v-75dee96b]{margin:var(--spacer-xl) 0 var(--spacer-base) 0}.table[data-v-75dee96b]{margin:0 0 var(--spacer-base) 0}.table__row[data-v-75dee96b]{justify-content:space-between}@media (min-width:1024px){.table__header[data-v-75dee96b]{text-align:center}.table__header[data-v-75dee96b]:last-child{text-align:right}.table__data[data-v-75dee96b]{text-align:center}.table__description[data-v-75dee96b]{text-align:left;flex:0 0 12rem}.table__image[data-v-75dee96b]{--image-width:5.125rem;text-align:left;margin:0 var(--spacer-xl) 0 0}}.product-sku[data-v-75dee96b]{color:var(--c-text-muted);font-size:var(--font-size--sm)}.price[data-v-75dee96b]{display:flex;align-items:flex-start;justify-content:flex-end}.product-price[data-v-75dee96b]{--price-font-size:var(--font-size--base)}@media (min-width:1024px){.summary__group[data-v-75dee96b]{margin:0 0 var(--spacer-2xl) 0}}.summary__terms[data-v-75dee96b]{margin:var(--spacer-base) 0 0 0}.summary__total[data-v-75dee96b]{margin:0 0 var(--spacer-sm) 0;flex:0 0 16.875rem}@media (min-width:1024px){.summary__action[data-v-75dee96b]{display:flex;margin:var(--spacer-xl) 0 0 0}}.summary__action-button[data-v-75dee96b]{margin:0;width:100%;margin:var(--spacer-sm) 0 0 0}@media (min-width:1024px){.summary__action-button[data-v-75dee96b]{margin:0 var(--spacer-xl) 0 0;width:auto}}@media (min-width:1024px){.summary__action-button--secondary[data-v-75dee96b]{text-align:right}}.summary__back-button[data-v-75dee96b]{margin:var(--spacer-xl) 0 0 0;width:100%;color:var(--c-white)}@media (min-width:1024px){.summary__back-button[data-v-75dee96b]{margin:0 var(--spacer-xl) 0 0;width:auto}}.summary__back-button[data-v-75dee96b]:hover{color:var(--c-white)}.summary__property-total[data-v-75dee96b]{margin:var(--spacer-xl) 0 0 0}.property[data-v-75dee96b]{margin:0 0 var(--spacer-sm) 0}.property__name[data-v-75dee96b]{color:var(--c-text-muted)}.accordion[data-v-75dee96b]{margin:0 0 var(--spacer-xl) 0}.accordion__item[data-v-75dee96b]{display:flex;align-items:flex-start}.accordion__content[data-v-75dee96b]{flex:1}.accordion__edit[data-v-75dee96b]{flex:unset}.content[data-v-75dee96b]{margin:0 0 var(--spacer-xl) 0;color:var(--c-text)}.content[data-v-75dee96b]:last-child{margin:0}.content__label[data-v-75dee96b]{font-weight:var(--font-weight--normal)}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfAccordion/SfAccordion.vue?vue&type=template&id=5aa4d7be&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-accordion",class:{ 'has-chevron': _vm.showChevron }},[_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfAccordion/SfAccordion.vue?vue&type=template&id=5aa4d7be&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(3);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/utilities/helpers/deprecation-warning.js
var deprecation_warning = __webpack_require__(237);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfAccordion/_internal/SfAccordionItem.vue?vue&type=template&id=cf38a9fe&
var SfAccordionItemvue_type_template_id_cf38a9fe_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-accordion-item"},[_vm._t("header",[_c('SfButton',{staticClass:"sf-button--pure sf-accordion-item__header",class:{ 'is-open': _vm.isOpen },attrs:{"aria-pressed":_vm.isOpen.toString(),"aria-expanded":_vm.isOpen.toString()},on:{"click":_vm.accordionClick}},[_vm._v("\n      "+_vm._s(_vm.header)+"\n      "),_vm._v(" "),_vm._t("additional-info"),_vm._v(" "),_c('SfChevron',{staticClass:"sf-accordion-item__chevron",class:{ 'sf-chevron--right': !_vm.isOpen },attrs:{"tabindex":"0"}})],2)],null,{
      header: _vm.header,
      isOpen: _vm.isOpen,
      accordionClick: _vm.accordionClick,
      showChevron: _vm.$parent.showChevron,
    }),_vm._ssrNode(" "),_c('SfExpand',{attrs:{"transition":_vm.$parent.transition}},[(_vm.isOpen)?_c('div',[_c('div',{staticClass:"sf-accordion-item__content"},[_vm._t("default")],2)]):_vm._e()])],2)}
var SfAccordionItemvue_type_template_id_cf38a9fe_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfAccordion/_internal/SfAccordionItem.vue?vue&type=template&id=cf38a9fe&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/utilities/directives/focus/focus-directive.js
var focus_directive = __webpack_require__(236);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/utilities/transitions/component/SfExpand.js
/* harmony default export */ var SfExpand = ({
  functional: true,
  props: {
    transition: {
      type: [String, Boolean],
      default: "sf-expand"
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
    const listeners = {
      beforeEnter: function (el) {
        el.style.setProperty("height", "auto");
      },
      enter: function (el) {
        el.style.setProperty("height", "auto");
        const height = getComputedStyle(el).height;
        el.style.setProperty("height", "0");
        requestAnimationFrame(() => {
          el.style.setProperty("height", height);
        });
      },
      leave: function (el) {
        const height = getComputedStyle(el).height;
        el.style.setProperty("height", height);
        requestAnimationFrame(() => {
          el.style.setProperty("height", "0");
        });
      }
    };
    return createElement("transition", { ...data,
      attrs: {
        name: isOff ? "" : props.transition
      },
      on: props.transition === "sf-expand" && listeners
    }, children);
  }

});
// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfChevron/SfChevron.vue + 4 modules
var SfChevron = __webpack_require__(37);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfButton/SfButton.vue + 4 modules
var SfButton = __webpack_require__(10);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfAccordion/_internal/SfAccordionItem.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var SfAccordionItemvue_type_script_lang_js_ = ({
  name: "SfAccordionItem",
  directives: {
    focus: focus_directive["a" /* focus */]
  },
  components: {
    SfChevron: SfChevron["a" /* default */],
    SfButton: SfButton["a" /* default */],
    SfExpand: SfExpand
  },
  props: {
    header: {
      type: String,
      default: ""
    }
  },

  data() {
    return {
      isOpen: false
    };
  },

  methods: {
    accordionClick() {
      this.$parent.$emit("toggle", this._uid);
    }

  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfAccordion/_internal/SfAccordionItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var _internal_SfAccordionItemvue_type_script_lang_js_ = (SfAccordionItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfAccordion/_internal/SfAccordionItem.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(300)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _internal_SfAccordionItemvue_type_script_lang_js_,
  SfAccordionItemvue_type_template_id_cf38a9fe_render,
  SfAccordionItemvue_type_template_id_cf38a9fe_staticRenderFns,
  false,
  injectStyles,
  null,
  "0cf7c46a"
  
)

/* harmony default export */ var SfAccordionItem = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfAccordion/SfAccordion.vue?vue&type=script&lang=js&
//
//
//
//
//
//



external_vue_default.a.component("SfAccordionItem", SfAccordionItem);
/* harmony default export */ var SfAccordionvue_type_script_lang_js_ = ({
  name: "SfAccordion",
  props: {
    /**
     * Opens an accordion item based on title. If 'all' string is passed then all items will be open by default.
     */
    open: {
      type: [String, Array],
      default: ""
    },

    /**
     * Opens the first accordion item if set to "true"
     * @deprecated will be removed in 1.0.0 use open prop instead
     */
    firstOpen: {
      type: Boolean,
      default: false
    },

    /**
     * Allows to open multiple accordion items if set to "true"
     */
    multiple: {
      type: Boolean,
      default: false
    },

    /**
     * Overlay transition effect
     */
    transition: {
      type: String,
      default: "sf-expand"
    },
    showChevron: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      openHeader: this.open
    };
  },

  mounted() {
    this.$on("toggle", this.toggleHandler);
    this.setAsOpen();
  },

  updated() {
    this.setAsOpen();
  },

  methods: {
    setAsOpen() {
      if (this.$children && this.$children.length) {
        // TODO remove in 1.0.0 ->
        if (this.firstOpen) {
          this.$children[0].isOpen = this.firstOpen;
          Object(deprecation_warning["a" /* deprecationWarning */])(this.$options.name, "Prop 'firstOpen' has been deprecated and will be removed in v1.0.0. Use 'open' instead.");
          return;
        } // <- TODO remove in 1.0.0


        if (this.open === "all") {
          this.multiple = true;
          this.openHeader = this.$children.map(child => child.header);
        }

        this.$children.forEach(child => {
          child.isOpen = Array.isArray(this.openHeader) ? this.openHeader.includes(child.header) : this.openHeader === child.header;
        });
      }
    },

    toggleHandler(slotId) {
      if (!this.multiple && !Array.isArray(this.openHeader)) {
        this.$children.forEach(child => {
          if (child._uid === slotId) {
            child.isOpen = !child.isOpen;
            this.openHeader = child.header;
          } else {
            child.isOpen = false;
          }
        });
      } else {
        const clickedHeader = this.$children.find(child => {
          return child._uid === slotId;
        });
        clickedHeader.isOpen = !clickedHeader.isOpen;
      }
    }

  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfAccordion/SfAccordion.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfAccordion_SfAccordionvue_type_script_lang_js_ = (SfAccordionvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfAccordion/SfAccordion.vue



function SfAccordion_injectStyles (context) {
  
  var style0 = __webpack_require__(302)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var SfAccordion_component = Object(componentNormalizer["a" /* default */])(
  SfAccordion_SfAccordionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  SfAccordion_injectStyles,
  null,
  "55564d98"
  
)

/* harmony default export */ var SfAccordion = __webpack_exports__["a"] = (SfAccordion_component.exports);

/***/ }),

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/Checkout/OrderReview.vue?vue&type=template&id=75dee96b&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('SfHeading',{staticClass:"sf-heading--left sf-heading--no-underline title",attrs:{"level":3,"title":"Order details"}}),_vm._ssrNode(" "),_c('SfAccordion',{staticClass:"accordion smartphone-only",attrs:{"first-open":""}},[_c('SfAccordionItem',{attrs:{"header":"Personal Details"}},[_c('div',{staticClass:"accordion__item"},[_c('div',{staticClass:"accordion__content"},[_c('p',{staticClass:"content"},[_vm._v("\n            "+_vm._s(_vm.personalDetails.firstName)+" "+_vm._s(_vm.personalDetails.lastName)),_c('br')]),_vm._v(" "),_c('p',{staticClass:"content"},[_vm._v("\n            "+_vm._s(_vm.personalDetails.email)+"\n          ")])]),_vm._v(" "),_c('SfButton',{staticClass:"sf-button--text color-secondary accordion__edit",on:{"click":function($event){return _vm.$emit('click:edit', 0)}}},[_vm._v("Edit")])],1)]),_vm._v(" "),_c('SfAccordionItem',{attrs:{"header":"Shipping address"}},[_c('div',{staticClass:"accordion__item"},[_c('div',{staticClass:"accordion__content"},[_c('p',{staticClass:"content"},[_c('span',{staticClass:"content__label"},[_vm._v(_vm._s(_vm.checkoutGetters.getShippingMethodName(_vm.chosenShippingMethod)))]),_c('br'),_vm._v("\n            "+_vm._s(_vm.shippingDetails.streetName)+" "+_vm._s(_vm.shippingDetails.apartment)+",\n            "+_vm._s(_vm.shippingDetails.zipCode)),_c('br'),_vm._v("\n            "+_vm._s(_vm.shippingDetails.city)+", "+_vm._s(_vm.shippingDetails.country)+"\n          ")]),_vm._v(" "),_c('p',{staticClass:"content"},[_vm._v(_vm._s(_vm.shippingDetails.phoneNumber))])]),_vm._v(" "),_c('SfButton',{staticClass:"sf-button--text color-secondary accordion__edit",on:{"click":function($event){return _vm.$emit('click:edit', 1)}}},[_vm._v("Edit")])],1)]),_vm._v(" "),_c('SfAccordionItem',{attrs:{"header":"Billing address"}},[_c('div',{staticClass:"accordion__item"},[_c('div',{staticClass:"accordion__content"},[(_vm.billingSameAsShipping)?_c('p',{staticClass:"content"},[_vm._v("\n            Same as shipping address\n          ")]):[_c('p',{staticClass:"content"},[_c('span',{staticClass:"content__label"},[_vm._v(_vm._s(_vm.chosenPaymentMethod.label))]),_c('br'),_vm._v("\n              "+_vm._s(_vm.billingDetails.streetName)+" "+_vm._s(_vm.billingDetails.apartment)+",\n              "+_vm._s(_vm.billingDetails.zipCode)),_c('br'),_vm._v("\n              "+_vm._s(_vm.billingDetails.city)+", "+_vm._s(_vm.billingDetails.country)+"\n            ")]),_vm._v(" "),_c('p',{staticClass:"content"},[_vm._v(_vm._s(_vm.billingDetails.phoneNumber))])]],2),_vm._v(" "),_c('SfButton',{staticClass:"sf-button--text color-secondary accordion__edit",on:{"click":function($event){return _vm.$emit('click:edit', 2)}}},[_vm._v("Edit")])],1)]),_vm._v(" "),_c('SfAccordionItem',{attrs:{"header":"Payment method"}},[_c('div',{staticClass:"accordion__item"},[_c('div',{staticClass:"accordion__content"},[_c('p',{staticClass:"content"},[_vm._v(_vm._s(_vm.chosenPaymentMethod.label))])]),_vm._v(" "),_c('SfButton',{staticClass:"sf-button--text color-secondary accordion__edit",on:{"click":function($event){return _vm.$emit('click:edit', 2)}}},[_vm._v("Edit")])],1)])],1),_vm._ssrNode(" "),_c('SfTable',{staticClass:"sf-table--bordered table desktop-only"},[_c('SfTableHeading',{staticClass:"table__row"},[_c('SfTableHeader',{staticClass:"table__header table__image"},[_vm._v("Item")]),_vm._v(" "),_vm._l((_vm.tableHeaders),function(tableHeader){return _c('SfTableHeader',{key:tableHeader,staticClass:"table__header",class:{ table__description: tableHeader === 'Description' }},[_vm._v("\n        "+_vm._s(tableHeader)+"\n      ")])})],2),_vm._v(" "),_vm._l((_vm.products),function(product,index){return _c('SfTableRow',{key:index,staticClass:"table__row"},[_c('SfTableData',{staticClass:"table__image"},[_c('SfImage',{attrs:{"src":_vm.cartGetters.getItemImage(product)}})],1),_vm._v(" "),_c('SfTableData',{staticClass:"table__data table__description table__data"},[_c('div',{staticClass:"product-title"},[_vm._v(_vm._s(_vm.cartGetters.getItemName(product)))]),_vm._v(" "),_c('div',{staticClass:"product-sku"},[_vm._v(_vm._s(_vm.cartGetters.getItemSku(product)))])]),_vm._v(" "),_vm._l((_vm.cartGetters.getItemAttributes(product, ['size', 'color'])),function(value,key){return _c('SfTableData',{key:key,staticClass:"table__data"},[_vm._v("\n        "+_vm._s(value)+"\n      ")])}),_vm._v(" "),_c('SfTableData',{staticClass:"table__data"},[_vm._v(_vm._s(_vm.cartGetters.getItemQty(product)))]),_vm._v(" "),_c('SfTableData',{staticClass:"table__data price"},[_c('SfPrice',{staticClass:"product-price",attrs:{"regular":_vm.cartGetters.getFormattedPrice(_vm.cartGetters.getItemPrice(product).regular),"special":_vm.cartGetters.getFormattedPrice(_vm.cartGetters.getItemPrice(product).special)}})],1)],2)})],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"summary\" data-v-75dee96b>","</div>",[_vm._ssrNode("<div class=\"summary__group\" data-v-75dee96b>","</div>",[_vm._ssrNode("<div class=\"summary__total\" data-v-75dee96b>","</div>",[_c('SfProperty',{staticClass:"sf-property--full-width property",attrs:{"name":"Subtotal","value":_vm.totals.subtotal}}),_vm._ssrNode(" "),_c('SfProperty',{staticClass:"sf-property--full-width property",attrs:{"name":"Shipping","value":_vm.checkoutGetters.getFormattedPrice(_vm.checkoutGetters.getShippingMethodPrice(_vm.chosenShippingMethod))}})],2),_vm._ssrNode(" "),_c('SfDivider'),_vm._ssrNode(" "),_c('SfProperty',{staticClass:"sf-property--full-width sf-property--large summary__property-total",attrs:{"name":"Total price","value":_vm.totals.total}}),_vm._ssrNode(" "),_c('SfCheckbox',{staticClass:"summary__terms",attrs:{"name":"terms"},scopedSlots:_vm._u([{key:"label",fn:function(){return [_c('div',{staticClass:"sf-checkbox__label"},[_vm._v("\n            I agree to "),_c('SfLink',{attrs:{"href":"#"}},[_vm._v("Terms and conditions")])],1)]},proxy:true}]),model:{value:(_vm.terms),callback:function ($$v) {_vm.terms=$$v},expression:"terms"}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"summary__action\" data-v-75dee96b>","</div>",[_c('nuxt-link',{staticClass:"sf-button color-secondary summary__back-button",attrs:{"to":"/checkout/payment"}},[_vm._v("Go back")]),_vm._ssrNode(" "),_c('SfButton',{staticClass:"summary__action-button",attrs:{"disabled":_vm.loading.order},on:{"click":_vm.processOrder}},[_vm._v("\n          Make an order\n        ")])],2)],2)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/Checkout/OrderReview.vue?vue&type=template&id=75dee96b&scoped=true&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfHeading/SfHeading.vue + 4 modules
var SfHeading = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfTable/SfTable.vue + 24 modules
var SfTable = __webpack_require__(373);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfCheckbox/SfCheckbox.vue + 4 modules
var SfCheckbox = __webpack_require__(235);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfButton/SfButton.vue + 4 modules
var SfButton = __webpack_require__(10);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/atoms/SfDivider/SfDivider.vue?vue&type=template&id=074d52dd&
var SfDividervue_type_template_id_074d52dd_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('hr',{staticClass:"sf-divider"},[])}
var SfDividervue_type_template_id_074d52dd_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfDivider/SfDivider.vue?vue&type=template&id=074d52dd&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/atoms/SfDivider/SfDivider.vue?vue&type=script&lang=js&
//
//
//
/* harmony default export */ var SfDividervue_type_script_lang_js_ = ({
  name: "SfDivider"
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfDivider/SfDivider.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfDivider_SfDividervue_type_script_lang_js_ = (SfDividervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfDivider/SfDivider.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(401)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SfDivider_SfDividervue_type_script_lang_js_,
  SfDividervue_type_template_id_074d52dd_render,
  SfDividervue_type_template_id_074d52dd_staticRenderFns,
  false,
  injectStyles,
  null,
  "12f5e8ca"
  
)

/* harmony default export */ var SfDivider = (component.exports);
// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfImage/SfImage.vue + 4 modules
var SfImage = __webpack_require__(25);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfIcon/SfIcon.vue + 6 modules
var SfIcon = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfPrice/SfPrice.vue + 4 modules
var SfPrice = __webpack_require__(39);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfProperty/SfProperty.vue + 4 modules
var SfProperty = __webpack_require__(99);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfAccordion/SfAccordion.vue + 10 modules
var SfAccordion = __webpack_require__(439);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfLink/SfLink.vue + 4 modules
var SfLink = __webpack_require__(13);

// EXTERNAL MODULE: external "@vue/composition-api"
var composition_api_ = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/@vue-storefront/commercetools/lib/index.es.js
var index_es = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/@vue-storefront/core/lib/index.es.js
var lib_index_es = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Checkout/OrderReview.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var OrderReviewvue_type_script_lang_js_ = ({
  name: 'ReviewOrder',
  components: {
    SfHeading: SfHeading["a" /* default */],
    SfTable: SfTable["a" /* default */],
    SfCheckbox: SfCheckbox["a" /* default */],
    SfButton: SfButton["a" /* default */],
    SfDivider: SfDivider,
    SfImage: SfImage["a" /* default */],
    SfIcon: SfIcon["a" /* default */],
    SfPrice: SfPrice["a" /* default */],
    SfProperty: SfProperty["a" /* default */],
    SfAccordion: SfAccordion["a" /* default */],
    SfLink: SfLink["a" /* default */]
  },

  setup(props, context) {
    const billingSameAsShipping = Object(composition_api_["ref"])(false);
    const terms = Object(composition_api_["ref"])(false);
    const {
      cart,
      removeFromCart
    } = Object(index_es["g" /* useCart */])();
    const products = Object(composition_api_["computed"])(() => index_es["a" /* cartGetters */].getItems(cart.value));
    const totals = Object(composition_api_["computed"])(() => index_es["a" /* cartGetters */].getTotals(cart.value));
    const {
      personalDetails,
      shippingDetails,
      billingDetails,
      chosenShippingMethod,
      chosenPaymentMethod,
      loadShippingMethods,
      placeOrder,
      loading,
      loadDetails,
      clean
    } = Object(index_es["h" /* useCheckout */])();
    Object(lib_index_es["onSSR"])(async () => {
      await loadDetails();
      await loadShippingMethods();
    });

    const processOrder = async () => {
      const order = await placeOrder();
      context.root.$router.push(`/checkout/thank-you?order=${order.id}`);
      clean();
    };

    return {
      loading,
      products,
      personalDetails,
      shippingDetails,
      billingDetails,
      chosenShippingMethod,
      chosenPaymentMethod,
      billingSameAsShipping,
      terms,
      totals,
      removeFromCart,
      processOrder,
      tableHeaders: ['Description', 'Colour', 'Size', 'Quantity', 'Amount'],
      cartGetters: index_es["a" /* cartGetters */],
      checkoutGetters: index_es["b" /* checkoutGetters */]
    };
  }

});
// CONCATENATED MODULE: ./pages/Checkout/OrderReview.vue?vue&type=script&lang=js&
 /* harmony default export */ var Checkout_OrderReviewvue_type_script_lang_js_ = (OrderReviewvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/Checkout/OrderReview.vue



function OrderReview_injectStyles (context) {
  
  var style0 = __webpack_require__(403)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var OrderReview_component = Object(componentNormalizer["a" /* default */])(
  Checkout_OrderReviewvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  OrderReview_injectStyles,
  "75dee96b",
  "79820a34"
  
)

/* harmony default export */ var OrderReview = __webpack_exports__["default"] = (OrderReview_component.exports);

/***/ })

};;
//# sourceMappingURL=OrderReview.js.map