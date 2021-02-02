exports.ids = [7];
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

/***/ 358:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(410);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("49702f46", content, true, context)
};

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Shipping_vue_vue_type_style_index_0_id_b1ddaa20_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(358);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Shipping_vue_vue_type_style_index_0_id_b1ddaa20_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Shipping_vue_vue_type_style_index_0_id_b1ddaa20_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Shipping_vue_vue_type_style_index_0_id_b1ddaa20_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Shipping_vue_vue_type_style_index_0_id_b1ddaa20_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 410:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media (min-width:1024px){.smartphone-only[data-v-b1ddaa20]{display:none!important}}@media (max-width:1023px){.desktop-only[data-v-b1ddaa20]{display:none!important}}.title[data-v-b1ddaa20]{margin:var(--spacer-xl) 0 var(--spacer-base) 0}.form[data-v-b1ddaa20]{--button-width:100%}.form__select[data-v-b1ddaa20]{display:flex;align-items:center;--select-option-font-size:var(--font-size--lg)}.form__select[data-v-b1ddaa20]  .sf-select__dropdown{font-size:var(--font-size--lg);margin:0;color:var(--c-text);font-family:var(--font-family--secondary);font-weight:var(--font-weight--normal)}@media (min-width:1024px){.form[data-v-b1ddaa20]{display:flex;flex-wrap:wrap;align-items:center;--button-width:auto}}.form__element[data-v-b1ddaa20]{margin:0 0 var(--spacer-xl) 0}@media (min-width:1024px){.form__element[data-v-b1ddaa20]{flex:0 0 100%}}@media (min-width:1024px){.form__element--half[data-v-b1ddaa20]{flex:1 1 50%}}@media (min-width:1024px){.form__element--half-even[data-v-b1ddaa20]{padding:0 0 0 var(--spacer-xl)}}.form__group[data-v-b1ddaa20]{display:flex;align-items:center}@media (min-width:1024px){.form__action[data-v-b1ddaa20]{flex:0 0 100%;display:flex}}@media (min-width:1024px){.form__action-button--secondary[data-v-b1ddaa20]{order:-1;text-align:left}}.form__action-button--add-address[data-v-b1ddaa20]{width:100%;margin:0}@media (min-width:1024px){.form__action-button--add-address[data-v-b1ddaa20]{margin:0 0 var(--spacer-lg) 0;width:auto}}.form__back-button[data-v-b1ddaa20]{margin:var(--spacer-xl) 0 var(--spacer-sm)}.form__back-button[data-v-b1ddaa20]:hover{color:var(--c-white)}@media (min-width:1024px){.form__back-button[data-v-b1ddaa20]{margin:0 var(--spacer-xl) 0 0}}.form__radio-group[data-v-b1ddaa20]{flex:0 0 100%;margin:0 0 var(--spacer-xl) 0}@media (min-width:1024px){.form__radio-group[data-v-b1ddaa20]{margin:0 0 var(--spacer-2xl) 0}}.shipping__label[data-v-b1ddaa20]{display:flex;justify-content:space-between}.shipping__description[data-v-b1ddaa20]{--radio-description-margin:0;--radio-description-font-size:var(--font-xs)}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/Checkout/Shipping.vue?vue&type=template&id=b1ddaa20&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('SfHeading',{staticClass:"sf-heading--left sf-heading--no-underline title",attrs:{"level":3,"title":"Shipping"}}),_vm._ssrNode(" "),_c('ValidationObserver',{scopedSlots:_vm._u([{key:"default",fn:function(ref){
var handleSubmit = ref.handleSubmit;
var dirty = ref.dirty;
var reset = ref.reset;
return [_c('form',{on:{"submit":function($event){$event.preventDefault();handleSubmit(_vm.canContinueToPayment(dirty) ? _vm.handleShippingMethodSubmit(reset) : _vm.handleShippingAddressSubmit(reset))}}},[(_vm.isAuthenticated && _vm.shippingAddresses && _vm.shippingAddresses.length)?_c('UserShippingAddresses',{attrs:{"setAsDefault":_vm.setAsDefault,"shippingAddresses":_vm.shippingAddresses,"currentAddressId":_vm.currentAddressId},on:{"setCurrentAddress":function($event){return _vm.setCurrentAddress($event)},"changeSetAsDefault":function($event){_vm.setAsDefault = $event}}}):_vm._e(),_vm._v(" "),(_vm.canAddNewAddress)?_c('div',{staticClass:"form"},[_c('ValidationProvider',{attrs:{"name":"firstName","rules":"required|min:2","slim":""},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
return [_c('SfInput',{staticClass:"form__element form__element--half",attrs:{"value":_vm.shippingDetails.firstName,"label":"First name","name":"firstName","required":"","valid":!errors[0],"errorMessage":errors[0]},on:{"input":function (firstName) { return _vm.setShippingDetailsAndUnpickAddress({ firstName: firstName }); }}})]}}],null,true)}),_vm._v(" "),_c('ValidationProvider',{attrs:{"name":"lastName","rules":"required|min:2","slim":""},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
return [_c('SfInput',{staticClass:"form__element form__element--half form__element--half-even",attrs:{"value":_vm.shippingDetails.lastName,"label":"Last name","name":"lastName","required":"","valid":!errors[0],"errorMessage":errors[0]},on:{"input":function (lastName) { return _vm.setShippingDetailsAndUnpickAddress({ lastName: lastName }); }}})]}}],null,true)}),_vm._v(" "),_c('ValidationProvider',{attrs:{"name":"streetName","rules":"required|min:2","slim":""},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
return [_c('SfInput',{staticClass:"form__element form__element--half",attrs:{"value":_vm.shippingDetails.streetName,"label":"Street name","name":"streetName","required":"","valid":!errors[0],"errorMessage":errors[0]},on:{"input":function (streetName) { return _vm.setShippingDetailsAndUnpickAddress({ streetName: streetName }); }}})]}}],null,true)}),_vm._v(" "),_c('ValidationProvider',{attrs:{"name":"apartment","rules":"required|min:2","slim":""},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
return [_c('SfInput',{staticClass:"form__element form__element--half form__element--half-even",attrs:{"value":_vm.shippingDetails.streetNumber,"label":"House/Apartment number","name":"apartment","required":"","valid":!errors[0],"errorMessage":errors[0]},on:{"input":function (streetNumber) { return _vm.setShippingDetailsAndUnpickAddress({ streetNumber: streetNumber }); }}})]}}],null,true)}),_vm._v(" "),_c('ValidationProvider',{attrs:{"name":"city","rules":"required|min:2","slim":""},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
return [_c('SfInput',{staticClass:"form__element form__element--half",attrs:{"value":_vm.shippingDetails.city,"label":"City","name":"city","required":"","valid":!errors[0],"errorMessage":errors[0]},on:{"input":function (city) { return _vm.setShippingDetailsAndUnpickAddress({ city: city }); }}})]}}],null,true)}),_vm._v(" "),_c('ValidationProvider',{attrs:{"name":"zipCode","rules":"required|min:2","slim":""},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
return [_c('SfInput',{staticClass:"form__element form__element--half form__element--half-even",attrs:{"value":_vm.shippingDetails.postalCode,"label":"Zip-code","name":"zipCode","required":"","valid":!errors[0],"errorMessage":errors[0]},on:{"input":function (postalCode) { return _vm.setShippingDetailsAndUnpickAddress({ postalCode: postalCode }); }}})]}}],null,true)}),_vm._v(" "),_c('ValidationProvider',{attrs:{"name":"country","rules":"required|min:2","slim":""},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
return [_c('SfSelect',{staticClass:"form__element form__element--half form__select sf-select--underlined",attrs:{"selected":_vm.shippingDetails.country,"label":"Country","name":"country","required":"","valid":!errors[0],"errorMessage":errors[0]},on:{"change":function (country) { return _vm.setShippingDetailsAndUnpickAddress({ country: country }); }}},_vm._l((_vm.countries),function(countryOption){return _c('SfSelectOption',{key:countryOption.name,attrs:{"value":countryOption.name}},[_vm._v("\n            "+_vm._s(countryOption.label)+"\n          ")])}),1)]}}],null,true)}),_vm._v(" "),_c('ValidationProvider',{attrs:{"name":"phone","rules":"required|digits:9","slim":""},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
return [_c('SfInput',{staticClass:"form__element form__element--half form__element--half-even",attrs:{"value":_vm.shippingDetails.contactInfo.phone,"label":"Phone number","name":"phone","required":"","valid":!errors[0],"errorMessage":errors[0]},on:{"input":function (phone) { return _vm.setShippingDetailsAndUnpickAddress({ contactInfo: { phone: phone } }); }}})]}}],null,true)})],1):_vm._e(),_vm._v(" "),(!_vm.canAddNewAddress)?_c('SfButton',{staticClass:"color-light form__action-button form__action-button--add-address",attrs:{"type":"submit"},nativeOn:{"click":function($event){_vm.canAddNewAddress = true}}},[_vm._v("\n        Add new address\n      ")]):_vm._e(),_vm._v(" "),(_vm.canContinueToPayment(dirty))?_c('SfHeading',{staticClass:"sf-heading--left sf-heading--no-underline title",attrs:{"level":3,"title":"Shipping method"}}):_vm._e(),_vm._v(" "),_c('div',{staticClass:"form"},[(_vm.canContinueToPayment(dirty))?_c('div',{staticClass:"form__radio-group"},_vm._l((_vm.shippingMethods),function(item){return _c('SfRadio',{key:_vm.checkoutGetters.getShippingMethodName(item),staticClass:"form__radio shipping",attrs:{"label":_vm.checkoutGetters.getShippingMethodName(item),"value":_vm.checkoutGetters.getShippingMethodId(item),"selected":_vm.checkoutGetters.getShippingMethodId(_vm.chosenShippingMethod),"name":"shippingMethod","description":_vm.checkoutGetters.getShippingMethodDescription(item)},on:{"input":function($event){return _vm.setShippingMethod(item, { save: true })}},scopedSlots:_vm._u([{key:"label",fn:function(ref){
var label = ref.label;
return [_c('div',{staticClass:"sf-radio__label shipping__label"},[_c('div',[_vm._v(_vm._s(label))]),_vm._v(" "),_c('div',[_vm._v("$"+_vm._s(_vm.checkoutGetters.getShippingMethodPrice(item)))])])]}},{key:"description",fn:function(ref){
var description = ref.description;
return [_c('div',{staticClass:"sf-radio__description shipping__description"},[_c('div',{staticClass:"shipping__info"},[_vm._v("\n                  "+_vm._s(description)+"\n                ")])])]}}],null,true)})}),1):_vm._e(),_vm._v(" "),_c('div',{staticClass:"form__action"},[_c('nuxt-link',{staticClass:"sf-button color-secondary form__back-button",attrs:{"to":"/checkout/personal-details"}},[_vm._v("Go back")]),_vm._v(" "),(_vm.canContinueToPayment(dirty))?_c('SfButton',{staticClass:"form__action-button",attrs:{"type":"submit","disabled":!_vm.isShippingMethodCompleted || _vm.loading.shippingAddress}},[_vm._v("\n            Continue to payment\n          ")]):_c('SfButton',{staticClass:"form__action-button",attrs:{"type":"submit","disabled":_vm.loading.shippingMethods}},[_vm._v("\n            Select shipping method\n          ")])],1)])],1)]}}])})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/Checkout/Shipping.vue?vue&type=template&id=b1ddaa20&scoped=true&

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

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfCheckbox/SfCheckbox.vue + 4 modules
var SfCheckbox = __webpack_require__(235);

// EXTERNAL MODULE: ./node_modules/@vue-storefront/commercetools-api/lib/index.cjs.js
var index_cjs = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/@vue-storefront/commercetools/lib/index.es.js
var index_es = __webpack_require__(8);

// EXTERNAL MODULE: external "vee-validate"
var external_vee_validate_ = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/vee-validate/dist/rules.js
var rules = __webpack_require__(29);

// EXTERNAL MODULE: ./node_modules/@vue-storefront/core/lib/index.es.js
var lib_index_es = __webpack_require__(7);

// EXTERNAL MODULE: external "@vue/composition-api"
var composition_api_ = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Checkout/Shipping.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







Object(external_vee_validate_["extend"])('required', { ...rules["f" /* required */],
  message: 'This field is required'
});
Object(external_vee_validate_["extend"])('min', { ...rules["d" /* min */],
  message: 'The field should have at least {length} characters'
});
Object(external_vee_validate_["extend"])('digits', { ...rules["b" /* digits */],
  message: 'Please provide a valid phone number'
});
/* harmony default export */ var Shippingvue_type_script_lang_js_ = ({
  name: 'Shipping',
  components: {
    SfHeading: SfHeading["a" /* default */],
    SfInput: SfInput["a" /* default */],
    SfButton: SfButton["a" /* default */],
    SfSelect: SfSelect["a" /* default */],
    SfRadio: SfRadio["a" /* default */],
    SfCheckbox: SfCheckbox["a" /* default */],
    UserShippingAddresses: () => __webpack_require__.e(/* import() */ 20).then(__webpack_require__.bind(null, 456)),
    ValidationProvider: external_vee_validate_["ValidationProvider"],
    ValidationObserver: external_vee_validate_["ValidationObserver"]
  },

  setup(props, context) {
    const {
      shippingDetails,
      chosenShippingMethod,
      setShippingDetails,
      setShippingMethod,
      shippingMethods,
      loadShippingMethods,
      isShippingAddressCompleted,
      isShippingMethodCompleted,
      loadDetails,
      loading
    } = Object(index_es["h" /* useCheckout */])();
    const {
      shipping,
      load: loadShipping,
      setDefault
    } = Object(index_es["o" /* useUserShipping */])();
    const {
      isAuthenticated
    } = Object(index_es["l" /* useUser */])();
    const canAddNewAddress = Object(composition_api_["ref"])(true);
    const addressIsModified = Object(composition_api_["ref"])(false);
    const currentAddressId = Object(composition_api_["ref"])(-1);
    const setAsDefault = Object(composition_api_["ref"])(false);

    const mapAbstractAddressToIntegrationAddress = address => ({ ...shippingDetails.value,
      contactInfo: { ...shippingDetails.value.contactInfo,
        phone: address.phoneNumber
      },
      streetNumber: address.apartment,
      city: address.city,
      country: address.country,
      state: address.state,
      firstName: address.firstName,
      lastName: address.lastName,
      streetName: address.streetName,
      postalCode: address.zipCode
    });

    const setCurrentAddress = async addressId => {
      const chosenAddress = index_es["s" /* userShippingGetters */].getAddresses(shipping.value, {
        id: addressId
      });

      if (!chosenAddress || !chosenAddress.length) {
        return;
      }

      currentAddressId.value = addressId;
      setShippingDetails(mapAbstractAddressToIntegrationAddress(chosenAddress[0]));
      addressIsModified.value = true;
    };

    Object(lib_index_es["onSSR"])(async () => {
      await loadDetails();
      await loadShippingMethods();
    });
    Object(composition_api_["onMounted"])(async () => {
      if (isAuthenticated.value) {
        await loadShipping();
        const shippingAddresses = index_es["s" /* userShippingGetters */].getAddresses(shipping.value);

        if (!shippingAddresses || !shippingAddresses.length) {
          return;
        }

        canAddNewAddress.value = false;

        if (shippingAddresses[0].isDefault) {
          setCurrentAddress(shippingAddresses[0].id);
        }
      }
    });

    const handleShippingAddressSubmit = reset => async () => {
      await setShippingDetails(shippingDetails.value, {
        save: true
      });
      await loadShippingMethods();
      reset();

      if (currentAddressId.value > -1 && setAsDefault.value) {
        const chosenAddress = index_es["s" /* userShippingGetters */].getAddresses(shipping.value, {
          id: currentAddressId.value
        });

        if (!chosenAddress || !chosenAddress.length) {
          return;
        }

        await setDefault(chosenAddress[0]);
      }

      addressIsModified.value = false;
    };

    const handleShippingMethodSubmit = reset => async () => {
      await setShippingMethod(chosenShippingMethod.value, {
        save: true
      });
      reset();
      context.root.$router.push('/checkout/payment');
    };

    const setShippingDetailsAndUnpickAddress = value => {
      setShippingDetails(value);
      currentAddressId.value = -1;
      addressIsModified.value = true;
    };

    const canContinueToPayment = dirty => isShippingAddressCompleted.value && !dirty && !addressIsModified.value;

    return {
      loading,
      handleShippingAddressSubmit,
      handleShippingMethodSubmit,
      isShippingAddressCompleted,
      isShippingMethodCompleted,
      setShippingDetailsAndUnpickAddress,
      setShippingMethod,
      shippingDetails,
      chosenShippingMethod,
      shippingMethods,
      checkoutGetters: index_es["b" /* checkoutGetters */],
      countries: Object(index_cjs["getSettings"])().countries,
      shippingAddresses: Object(composition_api_["computed"])(() => index_es["s" /* userShippingGetters */].getAddresses(shipping.value)),
      canAddNewAddress,
      addressIsModified,
      isAuthenticated,
      currentAddressId: Object(composition_api_["computed"])(() => currentAddressId.value),
      setAsDefault,
      setCurrentAddress,
      canContinueToPayment
    };
  }

});
// CONCATENATED MODULE: ./pages/Checkout/Shipping.vue?vue&type=script&lang=js&
 /* harmony default export */ var Checkout_Shippingvue_type_script_lang_js_ = (Shippingvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/Checkout/Shipping.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(409)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Checkout_Shippingvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "b1ddaa20",
  "213932a0"
  
)

/* harmony default export */ var Shipping = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=Shipping.js.map