exports.ids = [20];
exports.modules = {

/***/ 257:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(283);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("07c22ef2", content, true, context)
};

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_UserShippingAddress_vue_vue_type_style_index_0_id_1e3d83bc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(257);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_UserShippingAddress_vue_vue_type_style_index_0_id_1e3d83bc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_UserShippingAddress_vue_vue_type_style_index_0_id_1e3d83bc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_UserShippingAddress_vue_vue_type_style_index_0_id_1e3d83bc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_UserShippingAddress_vue_vue_type_style_index_0_id_1e3d83bc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 283:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media (min-width:1024px){.smartphone-only[data-v-1e3d83bc]{display:none!important}}@media (max-width:1023px){.desktop-only[data-v-1e3d83bc]{display:none!important}}p[data-v-1e3d83bc]{margin:0}.name[data-v-1e3d83bc]{font-weight:var(--font-weight--semibold)}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 293:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(343);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("54b6ca16", content, true, context)
};

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/UserShippingAddress.vue?vue&type=template&id=1e3d83bc&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<p class=\"name\" data-v-1e3d83bc>"+_vm._ssrEscape(_vm._s(_vm.address.firstName)+" "+_vm._s(_vm.address.lastName))+"</p> <p data-v-1e3d83bc>"+_vm._ssrEscape(_vm._s(_vm.street))+"</p> <p data-v-1e3d83bc>"+_vm._ssrEscape("\n    "+_vm._s(_vm.address.city)+"\n    "+_vm._s(_vm.address.state)+"\n    "+_vm._s(_vm.address.postalCode)+"\n  ")+"</p> <p data-v-1e3d83bc>"+_vm._ssrEscape(_vm._s(_vm.country))+"</p> "+((_vm.address.phone)?("<p data-v-1e3d83bc>"+_vm._ssrEscape("T: "+_vm._s(_vm.address.phone))+"</p>"):"<!---->"))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/UserShippingAddress.vue?vue&type=template&id=1e3d83bc&scoped=true&

// EXTERNAL MODULE: external "@vue/composition-api"
var composition_api_ = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/@vue-storefront/commercetools-api/lib/index.cjs.js
var index_cjs = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/UserShippingAddress.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var UserShippingAddressvue_type_script_lang_js_ = ({
  props: {
    address: {
      type: Object,
      required: true
    }
  },

  setup(props) {
    const address = Object(composition_api_["toRef"])(props, 'address');
    const street = Object(composition_api_["computed"])(() => {
      const parts = [address.streetName, address.streetNumber && ` ${address.streetNumber}`, address.apartment && `, Apartment ${address.apartment}`];
      return parts.filter(Boolean).join('');
    });
    const country = Object(composition_api_["computed"])(() => {
      var _getSettings$countrie;

      const country = address.country;
      return ((_getSettings$countrie = Object(index_cjs["getSettings"])().countries.find(c => c.name === country)) === null || _getSettings$countrie === void 0 ? void 0 : _getSettings$countrie.label) || country;
    });
    return {
      street,
      country
    };
  }

});
// CONCATENATED MODULE: ./components/UserShippingAddress.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_UserShippingAddressvue_type_script_lang_js_ = (UserShippingAddressvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/UserShippingAddress.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(282)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_UserShippingAddressvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1e3d83bc",
  "28eb41be"
  
)

/* harmony default export */ var UserShippingAddress = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfAddressPicker_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(293);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfAddressPicker_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfAddressPicker_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfAddressPicker_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfAddressPicker_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 343:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media (min-width:1024px){.smartphone-only{display:none!important}}@media (max-width:1023px){.desktop-only{display:none!important}}.sf-address{box-sizing:border-box;width:100%;border:1px solid var(--c-light);transition:border .15s linear;font:var(--font-weight--normal) var(--font-size--base)/1.6 var(--font-family--primary);font:var(--address-font,var(--address-font-weight,var(--font-weight--normal)) var(--address-font-size,var(--font-size--base))/var(--address-font-line-height,1.6) var(--address-font-family,var(--font-family--primary)));color:var(--c-link)}.sf-address span{display:block}.sf-address__icon-container{width:1.5rem;height:1.5rem;background:transparent;position:absolute;right:var(--spacer-sm);border-radius:100%;display:flex;justify-content:center;align-items:center;transition:background .15s linear}.sf-address__icon{--icon-color:var(--c-white);--icon-size:0.875rem}.sf-address.sf-radio{--radio-content-margin:0}.sf-address.sf-radio--is-active{--radio-background:transparent}.sf-address.sf-radio input[style*=\"outline: none\"]:focus+.sf-address__icon-container{outline:none}.sf-address.sf-radio input:focus+.sf-address__icon-container{outline-color:-webkit-focus-ring-color;outline-style:auto}.sf-address.is-active{border:1px solid var(--c-primary);--icon-color:var(--c-white);--radio-background:var(--c-white)}.sf-address.is-active .sf-address__icon-container{background:var(--c-primary)}@media (min-width:1024px){.sf-address{width:23.375rem}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 372:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(438);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("1a650736", content, true, context)
};

/***/ }),

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_UserShippingAddresses_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(372);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_UserShippingAddresses_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_UserShippingAddresses_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_UserShippingAddresses_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_UserShippingAddresses_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 438:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media (min-width:1024px){.smartphone-only{display:none!important}}@media (max-width:1023px){.desktop-only{display:none!important}}.shipping-addresses{margin-bottom:var(--spacer-xl)}@media (min-width:1024px){.shipping-addresses{display:grid;grid-template-columns:1fr 1fr;grid-column-gap:10px}}.shipping-addresses__address{margin-bottom:var(--spacer-sm)}.form__action-button--margin-bottom,.shipping-address-setAsDefault{margin-bottom:var(--spacer-xl)}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/molecules/SfAddressPicker/SfAddressPicker.vue?vue&type=template&id=ad99dd90&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-address-picker"},[_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfAddressPicker/SfAddressPicker.vue?vue&type=template&id=ad99dd90&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/molecules/SfAddressPicker/_internal/SfAddress.vue?vue&type=template&id=b22ada96&
var SfAddressvue_type_template_id_b22ada96_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('SfRadio',{staticClass:"sf-address",attrs:{"value":_vm.name,"name":"groupName"},scopedSlots:_vm._u([{key:"label",fn:function(){return [_vm._t("default")]},proxy:true},{key:"checkmark",fn:function(){return [_vm._t("icon",[_c('div',{staticClass:"sf-address__icon-container"},[_c('SfIcon',{staticClass:"sf-address__icon",attrs:{"icon":"check"}})],1)])]},proxy:true}],null,true),model:{value:(_vm.selected),callback:function ($$v) {_vm.selected=$$v},expression:"selected"}})}
var SfAddressvue_type_template_id_b22ada96_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfAddressPicker/_internal/SfAddress.vue?vue&type=template&id=b22ada96&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfRadio/SfRadio.vue + 4 modules
var SfRadio = __webpack_require__(344);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfIcon/SfIcon.vue + 6 modules
var SfIcon = __webpack_require__(9);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/molecules/SfAddressPicker/_internal/SfAddress.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var SfAddressvue_type_script_lang_js_ = ({
  name: "SfAddressPicker",
  components: {
    SfRadio: SfRadio["a" /* default */],
    SfIcon: SfIcon["a" /* default */]
  },
  props: {
    /**
     * Name for address.
     * Each address should have different name.
     * For example "first", "second", "default".
     */
    name: {
      type: String,
      default: ""
    }
  },
  inject: ["getSelectedValue", "setSelectedValue"],
  computed: {
    selected: {
      get() {
        return this.getSelectedValue();
      },

      set(newValue) {
        this.setSelectedValue(newValue);
      }

    }
  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfAddressPicker/_internal/SfAddress.vue?vue&type=script&lang=js&
 /* harmony default export */ var _internal_SfAddressvue_type_script_lang_js_ = (SfAddressvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfAddressPicker/_internal/SfAddress.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _internal_SfAddressvue_type_script_lang_js_,
  SfAddressvue_type_template_id_b22ada96_render,
  SfAddressvue_type_template_id_b22ada96_staticRenderFns,
  false,
  null,
  null,
  "677b632c"
  
)

/* harmony default export */ var SfAddress = (component.exports);
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(3);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/molecules/SfAddressPicker/SfAddressPicker.vue?vue&type=script&lang=js&
//
//
//
//
//
//


external_vue_default.a.component("SfAddress", SfAddress);
/* harmony default export */ var SfAddressPickervue_type_script_lang_js_ = ({
  name: "SfAddressPicker",
  model: {
    prop: "selected",
    event: "change"
  },
  props: {
    selected: {
      type: String,
      default: ""
    }
  },

  data() {
    return {
      selectedValue: this.selected
    };
  },

  provide() {
    return {
      getSelectedValue: this.getSelectedValue,
      setSelectedValue: this.setSelectedValue
    };
  },

  watch: {
    selected(newVal) {
      this.selectedValue = newVal;
    }

  },
  methods: {
    getSelectedValue() {
      return this.selectedValue;
    },

    setSelectedValue(newVal) {
      const newValue = newVal;
      this.selectedValue = newValue;
      this.$emit("change", newValue);
    }

  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfAddressPicker/SfAddressPicker.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfAddressPicker_SfAddressPickervue_type_script_lang_js_ = (SfAddressPickervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfAddressPicker/SfAddressPicker.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(342)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var SfAddressPicker_component = Object(componentNormalizer["a" /* default */])(
  SfAddressPicker_SfAddressPickervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "232008d0"
  
)

/* harmony default export */ var SfAddressPicker = __webpack_exports__["a"] = (SfAddressPicker_component.exports);

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Checkout/UserShippingAddresses.vue?vue&type=template&id=0395e67a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('SfAddressPicker',{staticClass:"shipping-addresses",attrs:{"selected":String(_vm.currentAddressId)},on:{"input":function($event){return _vm.setCurrentAddress($event)}}},_vm._l((_vm.shippingAddresses),function(shippingAddress){return _c('SfAddress',{key:_vm.userShippingGetters.getId(shippingAddress),staticClass:"shipping-addresses__address",attrs:{"name":String(_vm.userShippingGetters.getId(shippingAddress))}},[_c('UserShippingAddress',{attrs:{"address":shippingAddress}})],1)}),1),_vm._ssrNode(" "),_c('SfCheckbox',{staticClass:"shipping-address-setAsDefault",attrs:{"data-cy":"shipping-details-checkbox_isDefault","selected":_vm.setAsDefault,"name":"setAsDefault","label":"Use this address as my default one."},on:{"change":function($event){return _vm.$emit('changeSetAsDefault', $event)}}})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Checkout/UserShippingAddresses.vue?vue&type=template&id=0395e67a&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfCheckbox/SfCheckbox.vue + 4 modules
var SfCheckbox = __webpack_require__(235);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfAddressPicker/SfAddressPicker.vue + 9 modules
var SfAddressPicker = __webpack_require__(440);

// EXTERNAL MODULE: ./components/UserShippingAddress.vue + 4 modules
var UserShippingAddress = __webpack_require__(294);

// EXTERNAL MODULE: ./node_modules/@vue-storefront/commercetools/lib/index.es.js
var index_es = __webpack_require__(8);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Checkout/UserShippingAddresses.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var UserShippingAddressesvue_type_script_lang_js_ = ({
  name: 'UserShippingAddresses',
  props: {
    currentAddressId: {
      type: Number,
      required: true
    },
    setAsDefault: {
      type: Boolean,
      required: true
    },
    shippingAddresses: {
      type: Array,
      required: true
    }
  },
  components: {
    SfCheckbox: SfCheckbox["a" /* default */],
    SfAddressPicker: SfAddressPicker["a" /* default */],
    UserShippingAddress: UserShippingAddress["a" /* default */]
  },

  setup(_, {
    emit
  }) {
    const setCurrentAddress = $event => emit('setCurrentAddress', $event);

    return {
      setCurrentAddress,
      userShippingGetters: index_es["s" /* userShippingGetters */]
    };
  }

});
// CONCATENATED MODULE: ./components/Checkout/UserShippingAddresses.vue?vue&type=script&lang=js&
 /* harmony default export */ var Checkout_UserShippingAddressesvue_type_script_lang_js_ = (UserShippingAddressesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Checkout/UserShippingAddresses.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(437)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Checkout_UserShippingAddressesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "35afe786"
  
)

/* harmony default export */ var UserShippingAddresses = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=20.js.map