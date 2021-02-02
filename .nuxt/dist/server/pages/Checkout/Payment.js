exports.ids = [5];
exports.modules = {

/***/ 272:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(305);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("56bbfae2", content, true, context)
};

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfRadio_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(272);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfRadio_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfRadio_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfRadio_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfRadio_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 305:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media (min-width:1024px){.smartphone-only{display:none!important}}@media (max-width:1023px){.desktop-only{display:none!important}}.sf-radio{display:flex;display:var(--radio-display,flex);transition:background-color .25s cubic-bezier(1,.5,.8,1);transition:var(--radio-transition,background-color .25s cubic-bezier(1,.5,.8,1))}.sf-radio__label{display:flex;display:var(--radio-label-display,flex);font:var(--font-weight--normal) var(--font-size--base)/normal var(--font-family--primary);font:var(--radio-label-font,var(--radio-label-font-weight,var(--font-weight--normal)) var(--radio-label-font-size,var(--font-size--base))/var(--radio-label-font-line-height,normal) var(--radio-label-font-family,var(--font-family--primary)));color:var(--radio-label-color)}.sf-radio__checkmark{box-sizing:border-box;width:1.5rem;width:var(--radio-checkmark-size,1.5rem);height:1.5rem;height:var(--radio-checkmark-size,1.5rem);border:var(--radio-checkmark-border,var(--radio-checkmark-border-style,solid) var(--radio-checkmark-border-color,var(--c-gray-variant)));border-width:1px;border-width:var(--radio-checkmark-border-width,1px);border-radius:100%;border-radius:var(--radio-checkmark-border-radius,100%);transition:border .25s cubic-bezier(1,.5,.8,1);transition:var(--radio-checkmark-transition,border .25s cubic-bezier(1,.5,.8,1))}.sf-radio__checkmark.is-active{--radio-checkmark-border-width:9px;--radio-checkmark-border-color:var(--c-primary)}.sf-radio input{position:absolute;opacity:0;left:-1000%;width:1px;height:1px}.sf-radio input[style*=\"outline: none\"]:focus+.sf-radio__checkmark{outline:none}.sf-radio input:focus+.sf-radio__checkmark{outline-color:-webkit-focus-ring-color;outline-style:auto}.sf-radio__container{position:relative;display:flex;display:var(--radio-container-display,flex);align-items:var(--radio-container-align-items);flex:1;padding:var(--radio-container-padding,var(--spacer-sm) var(--spacer-lg) var(--spacer-sm) var(--spacer-sm));cursor:pointer;cursor:var(--radio-container-cursor,pointer)}.sf-radio:hover{--radio-checkmark-border-color:var(--c-black)}.sf-radio__content{flex:1;margin:var(--radio-content-margin,0 0 0 var(--spacer-sm))}.sf-radio__details{margin:var(--radio-details-margin,var(--spacer-xs) 0 0 0);color:var(--c-text-muted);color:var(--radio-details-color,var(--c-text-muted));font:var(--font-weight--light) var(--font-size--sm)/1.2 var(--font-family--primary);font:var(--radio-details-font,var(--radio-details-font-weight,var(--font-weight--light)) var(--radio-details-font-size,var(--font-size--sm))/var(--radio-details-font-line-height,1.2) var(--radio-details-font-family,var(--font-family--primary)))}.sf-radio__description{margin:var(--radio-description-margin,var(--spacer-xs) 0 0 0);font:var(--font-weight--light) var(--font-size--sm)/1.6 var(--font-family--primary);font:var(--radio-description-font,var(--radio-description-font-weight,var(--font-weight--light)) var(--radio-description-font-size,var(--font-size--sm))/var(--radio-description-font-line-height,1.6) var(--radio-description-font-family,var(--font-family--primary)));color:var(--radio-description-margin)}.sf-radio.is-active{background:var(--c-light);background:var(--radio-background,var(--c-light))}.sf-radio.is-disabled{--radio-checkmark-border-color:var(--c-text-disabled);--radio-details-color:var(--c-text-disabled);--radio-description-margin:var(--c-text-disabled);--radio-label-color:var(--c-text-disabled);--radio-container-cursor:default}.sf-radio.is-disabled:hover{--radio-checkmark-border-color:var(--c-text-disabled)}.sf-radio--transparent.is-active{--radio-background:transparent}@media (min-width:1024px){.sf-radio{--radio-container-padding:var(--spacer-sm)}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/molecules/SfRadio/SfRadio.vue?vue&type=template&id=74e97305&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-radio",class:{
    'is-active': _vm.isChecked,
    'is-disabled': _vm.disabled,
  }},[_vm._ssrNode("<label class=\"sf-radio__container\">","</label>",[_c('input',{directives:[{name:"focus",rawName:"v-focus"}],attrs:{"type":"radio","name":_vm.name,"disabled":_vm.disabled},domProps:{"value":_vm.value,"checked":_vm.isChecked},on:{"input":_vm.inputHandler}},[]),_vm._ssrNode(" "),_vm._t("checkmark",[_c('div',{staticClass:"sf-radio__checkmark",class:{ 'sf-radio__checkmark is-active': _vm.isChecked }})],null,{ isChecked: _vm.isChecked, disabled: _vm.disabled }),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"sf-radio__content\">","</div>",[_vm._t("label",[(_vm.label)?_c('div',{staticClass:"sf-radio__label"},[_vm._v(_vm._s(_vm.label))]):_vm._e()],null,{ label: _vm.label, isChecked: _vm.isChecked, disabled: _vm.disabled }),_vm._ssrNode(" "),_vm._t("details",[(_vm.details)?_c('p',{staticClass:"sf-radio__details"},[_vm._v("\n          "+_vm._s(_vm.details)+"\n        ")]):_vm._e()],null,{ details: _vm.details }),_vm._ssrNode(" "),_vm._t("description",[(_vm.description)?_c('p',{staticClass:"sf-radio__description"},[_vm._v("\n          "+_vm._s(_vm.description)+"\n        ")]):_vm._e()],null,{ description: _vm.description })],2)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfRadio/SfRadio.vue?vue&type=template&id=74e97305&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/utilities/directives/focus/focus-directive.js
var focus_directive = __webpack_require__(236);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/molecules/SfRadio/SfRadio.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var SfRadiovue_type_script_lang_js_ = ({
  name: "SfRadio",
  directives: {
    focus: focus_directive["a" /* focus */]
  },
  model: {
    prop: "selected",
    event: "input"
  },
  props: {
    name: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: ""
    },
    details: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    required: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    selected: {
      type: String,
      default: ""
    }
  },
  computed: {
    isChecked() {
      return this.value === this.selected;
    }

  },
  methods: {
    inputHandler() {
      this.$emit("input", this.value);
    }

  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfRadio/SfRadio.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfRadio_SfRadiovue_type_script_lang_js_ = (SfRadiovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfRadio/SfRadio.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(304)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SfRadio_SfRadiovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "cc8b916c"
  
)

/* harmony default export */ var SfRadio = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 356:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(406);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("fbe6aa2e", content, true, context)
};

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Payment_vue_vue_type_style_index_0_id_7234cd96_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(356);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Payment_vue_vue_type_style_index_0_id_7234cd96_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Payment_vue_vue_type_style_index_0_id_7234cd96_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Payment_vue_vue_type_style_index_0_id_7234cd96_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Payment_vue_vue_type_style_index_0_id_7234cd96_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 406:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media (min-width:1024px){.smartphone-only[data-v-7234cd96]{display:none!important}}@media (max-width:1023px){.desktop-only[data-v-7234cd96]{display:none!important}}.title[data-v-7234cd96]{margin:var(--spacer-xl) 0 var(--spacer-base) 0}.form__select[data-v-7234cd96]{display:flex;align-items:center;--select-option-font-size:var(--font-size--lg)}.form__select[data-v-7234cd96]  .sf-select__dropdown{font-size:var(--font-size--lg);margin:0;color:var(--c-text);font-family:var(--font-family--secondary);font-weight:var(--font-weight--normal)}@media (min-width:1024px){.form[data-v-7234cd96]{display:flex;flex-wrap:wrap;align-items:center}}.form__element[data-v-7234cd96]{margin:0 0 var(--spacer-xl) 0}@media (min-width:1024px){.form__element[data-v-7234cd96]{flex:0 0 100%}}@media (min-width:1024px){.form__element--half[data-v-7234cd96]{flex:1 1 50%}}@media (min-width:1024px){.form__element--half-even[data-v-7234cd96]{padding:0 0 0 var(--spacer-xl)}}.form__group[data-v-7234cd96]{display:flex;align-items:center}@media (min-width:1024px){.form__action[data-v-7234cd96]{flex:0 0 100%;display:flex}}.form__action-button[data-v-7234cd96],.form__back-button[data-v-7234cd96]{--button-width:100%}@media (min-width:1024px){.form__action-button[data-v-7234cd96],.form__back-button[data-v-7234cd96]{--button-width:auto}}@media (min-width:1024px){.form__action-button--secondary[data-v-7234cd96]{order:-1;--button-margin:0;text-align:left}}.form__back-button[data-v-7234cd96]{margin:var(--spacer-xl) 0 var(--spacer-sm)}.form__back-button[data-v-7234cd96]:hover{color:#fff}.form__back-button[data-v-7234cd96]{margin:0 0 var(--spacer-sm) 0}@media (min-width:1024px){.form__back-button[data-v-7234cd96]{margin:0 var(--spacer-xl) 0 0}}@media (min-width:1024px){.payment-methods[data-v-7234cd96]{display:flex;padding:var(--spacer-lg) 0;border:1px solid var(--c-light);border-width:1px 0}}.payment-method[data-v-7234cd96]{--radio-container-align-items:center;--ratio-content-margin:0 0 0 var(--spacer-base);--radio-label-font-size:var(--font-base);white-space:nowrap;border:solid var(--c-light);border-width:1px 0 0;--radio-background:transparent}.payment-method[data-v-7234cd96]:last-child{border-width:1px 0}@media (min-width:1024px){.payment-method[data-v-7234cd96]{border:0;--radio-border-radius:4px}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/Checkout/Payment.vue?vue&type=template&id=7234cd96&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ValidationObserver',{scopedSlots:_vm._u([{key:"default",fn:function(ref){
var handleSubmit = ref.handleSubmit;
return [_c('form',{on:{"submit":function($event){$event.preventDefault();return handleSubmit(_vm.addressIsModified ? _vm.handleBillingAddressSubmit : _vm.handleFormSubmit)}}},[_c('SfHeading',{staticClass:"sf-heading--left sf-heading--no-underline title",attrs:{"level":3,"title":"Billing address"}}),_vm._v(" "),(_vm.isAuthenticated && _vm.billingAddresses && _vm.billingAddresses.length)?_c('UserBillingAddresses',{attrs:{"setAsDefault":_vm.setAsDefault,"billingAddresses":_vm.billingAddresses,"currentAddressId":_vm.currentAddressId},on:{"setCurrentAddress":function($event){return _vm.setCurrentAddress($event)},"changeSetAsDefault":function($event){_vm.setAsDefault = $event}}}):_vm._e(),_vm._v(" "),_c('SfCheckbox',{staticClass:"form__element",attrs:{"selected":_vm.sameAsShipping,"label":"Copy address data from shipping","name":"copyShippingAddress"},on:{"change":_vm.handleCheckSameAddress}}),_vm._v(" "),(_vm.canAddNewAddress)?_c('div',{staticClass:"form"},[_c('ValidationProvider',{attrs:{"name":"firstName","rules":"required|min:2","slim":""},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
return [_c('SfInput',{staticClass:"form__element form__element--half",attrs:{"value":_vm.billingDetails.firstName,"label":"First name","name":"firstName","required":"","valid":!errors[0],"errorMessage":errors[0]},on:{"input":function (firstName) { return _vm.setBillingDetailsAndUnpickAddress({ firstName: firstName }); }}})]}}],null,true)}),_vm._v(" "),_c('ValidationProvider',{attrs:{"name":"lastName","rules":"required|min:2","slim":""},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
return [_c('SfInput',{staticClass:"form__element form__element--half form__element--half-even",attrs:{"value":_vm.billingDetails.lastName,"label":"Last name","name":"lastName","required":"","valid":!errors[0],"errorMessage":errors[0]},on:{"input":function (lastName) { return _vm.setBillingDetailsAndUnpickAddress({ lastName: lastName }); }}})]}}],null,true)}),_vm._v(" "),_c('ValidationProvider',{attrs:{"name":"streetName","rules":"required|min:2","slim":""},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
return [_c('SfInput',{staticClass:"form__element form__element--half",attrs:{"value":_vm.billingDetails.streetName,"label":"Street name","name":"streetName","required":"","valid":!errors[0],"errorMessage":errors[0]},on:{"input":function (streetName) { return _vm.setBillingDetailsAndUnpickAddress({ streetName: streetName }); }}})]}}],null,true)}),_vm._v(" "),_c('ValidationProvider',{attrs:{"name":"apartment","rules":"required|min:2","slim":""},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
return [_c('SfInput',{staticClass:"form__element form__element--half form__element--half-even",attrs:{"value":_vm.billingDetails.streetNumber,"label":"House/Apartment number","name":"apartment","required":"","valid":!errors[0],"errorMessage":errors[0]},on:{"input":function (streetNumber) { return _vm.setBillingDetailsAndUnpickAddress({ streetNumber: streetNumber }); }}})]}}],null,true)}),_vm._v(" "),_c('ValidationProvider',{attrs:{"name":"city","rules":"required|min:2","slim":""},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
return [_c('SfInput',{staticClass:"form__element form__element--half",attrs:{"value":_vm.billingDetails.city,"label":"City","name":"city","required":"","valid":!errors[0],"errorMessage":errors[0]},on:{"input":function (city) { return _vm.setBillingDetailsAndUnpickAddress({ city: city }); }}})]}}],null,true)}),_vm._v(" "),_c('ValidationProvider',{attrs:{"name":"zipCode","rules":"required|min:2","slim":""},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
return [_c('SfInput',{staticClass:"form__element form__element--half form__element--half-even",attrs:{"value":_vm.billingDetails.postalCode,"label":"Zip-code","name":"zipCode","required":"","valid":!errors[0],"errorMessage":errors[0]},on:{"input":function (postalCode) { return _vm.setBillingDetailsAndUnpickAddress({ postalCode: postalCode }); }}})]}}],null,true)}),_vm._v(" "),_c('ValidationProvider',{attrs:{"name":"country","rules":"required|min:2","slim":""},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
return [_c('SfSelect',{staticClass:"form__element form__element--half form__select sf-select--underlined",attrs:{"selected":_vm.billingDetails.country,"label":"Country","required":"","valid":!errors[0],"errorMessage":errors[0]},on:{"change":function (country) { return _vm.setBillingDetailsAndUnpickAddress({ country: country }); }}},_vm._l((_vm.COUNTRIES),function(countryOption){return _c('SfSelectOption',{key:countryOption.key,attrs:{"value":countryOption.key}},[_vm._v("\n            "+_vm._s(countryOption.label)+"\n          ")])}),1)]}}],null,true)}),_vm._v(" "),_c('ValidationProvider',{attrs:{"name":"phone","rules":"required|min:2","slim":""},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
return [_c('SfInput',{staticClass:"form__element form__element--half form__element--half-even",attrs:{"value":_vm.billingDetails.contactInfo.phone,"label":"Phone number","name":"phone","required":"","valid":!errors[0],"errorMessage":errors[0]},on:{"input":function (phone) { return _vm.setBillingDetailsAndUnpickAddress({ contactInfo: { phone: phone } }); }}})]}}],null,true)})],1):_vm._e(),_vm._v(" "),(!_vm.canAddNewAddress)?_c('SfButton',{staticClass:"form__action-button form__action-button--margin-bottom",attrs:{"type":"submit"},nativeOn:{"click":function($event){_vm.canAddNewAddress = true}}},[_vm._v("\n      Add new address\n    ")]):_vm._e(),_vm._v(" "),(_vm.canContinueToReview)?_c('SfHeading',{staticClass:"sf-heading--left sf-heading--no-underline title",attrs:{"level":3,"title":"Payment methods"}}):_vm._e(),_vm._v(" "),_c('div',{staticClass:"form"},[(_vm.canContinueToReview)?_c('div',{staticClass:"form__element payment-methods"},_vm._l((_vm.paymentMethods),function(item){return _c('SfRadio',{key:item.value,staticClass:"form__radio payment-method",attrs:{"selected":_vm.chosenPaymentMethod.value,"label":item.label,"value":item.value,"name":"paymentMethod","description":item.description},on:{"input":function($event){return _vm.setPaymentMethod(item, { save: true })}},scopedSlots:_vm._u([{key:"label",fn:function(){return [_c('div',{staticClass:"sf-radio__label"},[_vm._v("\n            "+_vm._s(item.label)+"\n          ")])]},proxy:true}],null,true)})}),1):_vm._e(),_vm._v(" "),_c('div',{staticClass:"form__action"},[_c('nuxt-link',{staticClass:"sf-button color-secondary form__back-button",attrs:{"to":"/checkout/shipping"}},[_vm._v("Go back")]),_vm._v(" "),(_vm.canContinueToReview)?_c('SfButton',{staticClass:"form__action-button",attrs:{"type":"submit","disabled":_vm.loading.billingAddress}},[_vm._v("\n        Review my order\n      ")]):_c('SfButton',{staticClass:"form__action-button",attrs:{"type":"submit","disabled":_vm.loading.billingAddress}},[_vm._v("\n        Select payment method\n      ")])],1)])],1)]}}])})}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/Checkout/Payment.vue?vue&type=template&id=7234cd96&scoped=true&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfHeading/SfHeading.vue + 4 modules
var SfHeading = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfInput/SfInput.vue + 4 modules
var SfInput = __webpack_require__(98);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfButton/SfButton.vue + 4 modules
var SfButton = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfSelect/SfSelect.vue + 9 modules
var SfSelect = __webpack_require__(240);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfRadio/SfRadio.vue + 4 modules
var SfRadio = __webpack_require__(344);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfImage/SfImage.vue + 4 modules
var SfImage = __webpack_require__(25);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfCheckbox/SfCheckbox.vue + 4 modules
var SfCheckbox = __webpack_require__(235);

// EXTERNAL MODULE: external "@vue/composition-api"
var composition_api_ = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/@vue-storefront/commercetools/lib/index.es.js
var index_es = __webpack_require__(8);

// EXTERNAL MODULE: external "vee-validate"
var external_vee_validate_ = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/vee-validate/dist/rules.js
var rules = __webpack_require__(29);

// EXTERNAL MODULE: ./node_modules/@vue-storefront/core/lib/index.es.js
var lib_index_es = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Checkout/Payment.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






const COUNTRIES = [{
  key: 'US',
  label: 'United States'
}, {
  key: 'UK',
  label: 'United Kingdom'
}, {
  key: 'IT',
  label: 'Italy'
}, {
  key: 'PL',
  label: 'Poland'
}];
Object(external_vee_validate_["extend"])('required', { ...rules["f" /* required */],
  message: 'This field is required'
});
Object(external_vee_validate_["extend"])('min', { ...rules["d" /* min */],
  message: 'The field should have at least {length} characters'
});
/* harmony default export */ var Paymentvue_type_script_lang_js_ = ({
  name: 'Payment',
  components: {
    SfHeading: SfHeading["a" /* default */],
    SfInput: SfInput["a" /* default */],
    SfButton: SfButton["a" /* default */],
    SfSelect: SfSelect["a" /* default */],
    SfRadio: SfRadio["a" /* default */],
    SfImage: SfImage["a" /* default */],
    SfCheckbox: SfCheckbox["a" /* default */],
    UserBillingAddresses: () => __webpack_require__.e(/* import() */ 21).then(__webpack_require__.bind(null, 453)),
    ValidationProvider: external_vee_validate_["ValidationProvider"],
    ValidationObserver: external_vee_validate_["ValidationObserver"]
  },

  setup(props, context) {
    const {
      billingDetails,
      shippingDetails,
      paymentMethods,
      chosenPaymentMethod,
      loadPaymentMethods,
      isBillingAddressCompleted,
      setBillingDetails,
      setPaymentMethod,
      loadDetails,
      loading
    } = Object(index_es["h" /* useCheckout */])();
    const {
      billing,
      load: loadBilling,
      setDefault
    } = Object(index_es["m" /* useUserBilling */])();
    const {
      isAuthenticated
    } = Object(index_es["l" /* useUser */])();
    const canAddNewAddress = Object(composition_api_["ref"])(true);
    const addressIsModified = Object(composition_api_["ref"])(false);
    const currentAddressId = Object(composition_api_["ref"])(-1);
    const setAsDefault = Object(composition_api_["ref"])(false);
    const sameAsShipping = Object(composition_api_["ref"])(false);
    let oldBilling = null;

    const mapAbstractAddressToIntegrationAddress = address => ({ ...billingDetails.value,
      contactInfo: { ...billingDetails.value.contactInfo,
        phone: index_es["q" /* userBillingGetters */].getPhone(address)
      },
      streetNumber: index_es["q" /* userBillingGetters */].getApartmentNumber(address),
      city: index_es["q" /* userBillingGetters */].getCity(address),
      country: index_es["q" /* userBillingGetters */].getCountry(address),
      state: index_es["q" /* userBillingGetters */].getProvince(address),
      firstName: index_es["q" /* userBillingGetters */].getFirstName(address),
      lastName: index_es["q" /* userBillingGetters */].getLastName(address),
      streetName: index_es["q" /* userBillingGetters */].getStreetName(address),
      postalCode: index_es["q" /* userBillingGetters */].getPostCode(address)
    });

    const setCurrentAddress = async addressId => {
      const chosenAddress = index_es["q" /* userBillingGetters */].getAddresses(billing.value, {
        id: addressId
      });

      if (!chosenAddress || !chosenAddress.length) {
        return;
      }

      currentAddressId.value = addressId;
      setBillingDetails(mapAbstractAddressToIntegrationAddress(chosenAddress[0]));
      addressIsModified.value = true;
      sameAsShipping.value = false;
    };

    Object(lib_index_es["onSSR"])(async () => {
      await loadDetails();
      await loadPaymentMethods();
    });
    Object(composition_api_["onMounted"])(async () => {
      if (isAuthenticated.value) {
        await loadBilling();
        const billingAddresses = index_es["q" /* userBillingGetters */].getAddresses(billing.value);

        if (!billingAddresses || !billingAddresses.length) {
          return;
        }

        canAddNewAddress.value = false;

        if (index_es["q" /* userBillingGetters */].isDefault(billingAddresses[0])) {
          setCurrentAddress(index_es["q" /* userBillingGetters */].getId(billingAddresses[0]));
        }
      }
    });

    const handleFormSubmit = async () => {
      await setBillingDetails(billingDetails.value, {
        save: true
      });
      context.root.$router.push('/checkout/order-review');
    };

    const handleBillingAddressSubmit = async () => {
      await setBillingDetails(billingDetails.value, {
        save: true
      }); // here we should have something like loadPaymentMethods which depends on billing address imo

      if (currentAddressId.value > -1 && setAsDefault.value) {
        const chosenAddress = index_es["q" /* userBillingGetters */].getAddresses(billing.value, {
          id: currentAddressId.value
        });

        if (!chosenAddress || !chosenAddress.length) {
          return;
        }

        await setDefault(chosenAddress[0]);
      }

      addressIsModified.value = false;
    };

    const handleCheckSameAddress = () => {
      sameAsShipping.value = !sameAsShipping.value;

      if (sameAsShipping.value) {
        oldBilling = billingDetails.value;
        setBillingDetails(shippingDetails.value);
        currentAddressId.value = -1;
        setAsDefault.value = false;
        addressIsModified.value = true;
        return;
      }

      setBillingDetails(oldBilling);
    };

    const setBillingDetailsAndUnpickAddress = value => {
      setBillingDetails(value);
      currentAddressId.value = -1;
      addressIsModified.value = true;
      sameAsShipping.value = false;
    };

    return {
      loading,
      billingDetails,
      paymentMethods,
      chosenPaymentMethod,
      sameAsShipping,
      COUNTRIES,
      setPaymentMethod,
      handleFormSubmit,
      handleBillingAddressSubmit,
      handleCheckSameAddress,
      isAuthenticated,
      billingAddresses: Object(composition_api_["computed"])(() => index_es["q" /* userBillingGetters */].getAddresses(billing.value)),
      setAsDefault,
      canContinueToReview: Object(composition_api_["computed"])(() => isBillingAddressCompleted.value && !addressIsModified.value),
      currentAddressId: Object(composition_api_["computed"])(() => currentAddressId.value),
      setCurrentAddress,
      addressIsModified,
      setBillingDetailsAndUnpickAddress,
      canAddNewAddress,
      userBillingGetters: index_es["q" /* userBillingGetters */]
    };
  }

});
// CONCATENATED MODULE: ./pages/Checkout/Payment.vue?vue&type=script&lang=js&
 /* harmony default export */ var Checkout_Paymentvue_type_script_lang_js_ = (Paymentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/Checkout/Payment.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(405)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Checkout_Paymentvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7234cd96",
  "e8d88218"
  
)

/* harmony default export */ var Payment = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=Payment.js.map