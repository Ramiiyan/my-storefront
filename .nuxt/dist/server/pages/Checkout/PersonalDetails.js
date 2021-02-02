exports.ids = [6];
exports.modules = {

/***/ 357:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(408);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("11bd867c", content, true, context)
};

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonalDetails_vue_vue_type_style_index_0_id_5ce84808_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(357);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonalDetails_vue_vue_type_style_index_0_id_5ce84808_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonalDetails_vue_vue_type_style_index_0_id_5ce84808_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonalDetails_vue_vue_type_style_index_0_id_5ce84808_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonalDetails_vue_vue_type_style_index_0_id_5ce84808_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 408:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media (min-width:1024px){.smartphone-only[data-v-5ce84808]{display:none!important}}@media (max-width:1023px){.desktop-only[data-v-5ce84808]{display:none!important}}.title[data-v-5ce84808]{margin:var(--spacer-xl) 0 var(--spacer-base) 0}.log-in__info[data-v-5ce84808]{margin:var(--spacer-lg) 0;color:var(--c-link);font:var(--font-weight--light) var(--font-size--base)/1.6 var(--font-family--secondary)}@media (min-width:1024px){.log-in__info[data-v-5ce84808]{font-weight:var(--font-weight--normal)}}.log-in__button[data-v-5ce84808]{margin:var(--spacer-2xl) 0 var(--spacer-xl) 0}.info[data-v-5ce84808]{margin:0 0 var(--spacer-xl) 0}.info__heading[data-v-5ce84808]{font-family:var(--font-family--secondary);font-weight:var(--font-weight--normal);margin-bottom:var(--spacer-base)}.info__characteristic[data-v-5ce84808]{--characteristic-description-font-size:var(--font-size--base);margin:0 0 var(--spacer-sm) var(--spacer-2xs)}@media (min-width:1024px){.info[data-v-5ce84808]{display:flex;flex-wrap:wrap;margin:0}.info__heading[data-v-5ce84808]{flex:100%;margin:0 0 var(--spacer-sm) 0;font-size:var(--font-size--xs)}.info__characteristic[data-v-5ce84808]{margin:0 0 var(--spacer-base) 0;flex:0 50%}}@media (min-width:1024px){.form[data-v-5ce84808]{display:flex;flex-wrap:wrap;align-items:center}}.form__element[data-v-5ce84808]{margin:0 0 var(--spacer-xl) 0}@media (min-width:1024px){.form__element[data-v-5ce84808]{flex:0 0 100%}}@media (min-width:1024px){.form__element--half[data-v-5ce84808]{flex:1 1 50%}}@media (min-width:1024px){.form__element--half-even[data-v-5ce84808]{padding:0 0 0 var(--spacer-xl)}}.form__group[data-v-5ce84808]{display:flex;align-items:center;margin:var(--spacer-xl) 0 var(--spacer-lg) 0}.form__action[data-v-5ce84808]{display:flex;flex-direction:column-reverse;margin:0 0 var(--spacer-sm) 0}@media (min-width:1024px){.form__action[data-v-5ce84808]{flex:0 0 100%;flex-direction:row;margin:0}}.form__action-button[data-v-5ce84808]{margin:0 0 var(--spacer-sm) 0}@media (min-width:1024px){.form__action-button[data-v-5ce84808]{margin:0}}@media (min-width:1024px){.form__back-button[data-v-5ce84808]{margin:0 var(--spacer-xl) 0 0}.form__back-button[data-v-5ce84808]:hover{color:var(--c-white)}}.form__button[data-v-5ce84808]{--button-width:100%}@media (min-width:1024px){.form__button[data-v-5ce84808]{--button-width:auto}}.info[data-v-5ce84808]{--button-padding:0 var(--spacer);--button-color:var(--c-text-muted);--button-text-decoration:none}.characteristic[data-v-5ce84808]{margin:0 0 var(--spacer-xl) 0}.characteristic[data-v-5ce84808]:last-child{margin:0}.modal__heading[data-v-5ce84808]{margin:0 0 var(--spacer-2xl) 0}.modal__button[data-v-5ce84808]{margin:var(--spacer-2xl) 0 0 0}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/Checkout/PersonalDetails.vue?vue&type=template&id=5ce84808&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"log-in desktop-only\" data-v-5ce84808>","</div>",[_c('SfButton',{staticClass:"log-in__button color-secondary",on:{"click":_vm.toggleLoginModal}},[_vm._v("\n      Log in to your account\n    ")]),_vm._ssrNode(" <p class=\"log-in__info\" data-v-5ce84808>or fill the details below:</p>")],2),_vm._ssrNode(" "),_c('SfHeading',{staticClass:"sf-heading--left sf-heading--no-underline title",attrs:{"level":3,"title":"Personal details"}}),_vm._ssrNode(" "),_c('ValidationObserver',{scopedSlots:_vm._u([{key:"default",fn:function(ref){
var handleSubmit = ref.handleSubmit;
return [_c('form',{staticClass:"form",on:{"submit":function($event){$event.preventDefault();return handleSubmit(_vm.handleFormSubmit)}}},[_c('ValidationProvider',{attrs:{"name":"firstName","rules":"required|min:2","slim":""},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
return [_c('SfInput',{staticClass:"form__element form__element--half",attrs:{"value":_vm.personalDetails.firstName,"label":"First name","name":"firstName","required":"","valid":!errors[0],"errorMessage":errors[0]},on:{"input":function (firstName) { return _vm.setPersonalDetails({ firstName: firstName }); }}})]}}],null,true)}),_vm._v(" "),_c('ValidationProvider',{attrs:{"name":"lastName","rules":"required|min:2","slim":""},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
return [_c('SfInput',{staticClass:"form__element form__element--half form__element--half-even",attrs:{"value":_vm.personalDetails.lastName,"label":"Last name","name":"lastName","required":"","valid":!errors[0],"errorMessage":errors[0]},on:{"input":function (lastName) { return _vm.setPersonalDetails({ lastName: lastName }); }}})]}}],null,true)}),_vm._v(" "),_c('ValidationProvider',{attrs:{"name":"email","rules":"required|email","slim":""},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
return [_c('SfInput',{staticClass:"form__element",attrs:{"value":_vm.personalDetails.email,"label":"Your email","name":"email","required":"","valid":!errors[0],"errorMessage":errors[0]},on:{"input":function (email) { return _vm.setPersonalDetails({ email: email }); }}})]}}],null,true)}),_vm._v(" "),_c('div',{staticClass:"info"},[_c('p',{staticClass:"info__heading"},[_vm._v("\n          Enjoy these perks with your free account!\n        ")]),_vm._v(" "),_vm._l((_vm.characteristics),function(characteristic,key){return _c('SfCharacteristic',{key:key,staticClass:"info__characteristic",attrs:{"description":characteristic.description,"icon":characteristic.icon,"size-icon":"1rem"}})})],2),_vm._v(" "),_c('div',{staticClass:"form__element form__group"},[_c('SfCheckbox',{attrs:{"name":"createAccount","label":"I want to create an account"},model:{value:(_vm.createAccount),callback:function ($$v) {_vm.createAccount=$$v},expression:"createAccount"}})],1),_vm._v(" "),_c('transition',{attrs:{"name":"fade"}},[(_vm.createAccount)?_c('ValidationProvider',{attrs:{"name":"email","rules":"required","slim":""},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
return [_c('SfInput',{staticClass:"form__element",attrs:{"value":_vm.personalDetails.password,"type":"password","label":"Create Password","required":"","valid":!errors[0],"errorMessage":errors[0]},on:{"input":function (password) { return _vm.setPersonalDetails({ password: password }); }}})]}}],null,true)}):_vm._e()],1),_vm._v(" "),_c('div',{staticClass:"form__action"},[_c('nuxt-link',{staticClass:"sf-button color-secondary form__back-button",attrs:{"to":"/"}},[_vm._v("Go back")]),_vm._v(" "),_c('SfButton',{staticClass:"form__action-button",attrs:{"type":"submit","disabled":_vm.loading.personalDetails}},[_vm._v("\n          Continue to shipping\n        ")])],1)],1)]}}])})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/Checkout/PersonalDetails.vue?vue&type=template&id=5ce84808&scoped=true&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfInput/SfInput.vue + 4 modules
var SfInput = __webpack_require__(98);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfCheckbox/SfCheckbox.vue + 4 modules
var SfCheckbox = __webpack_require__(235);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfButton/SfButton.vue + 4 modules
var SfButton = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfHeading/SfHeading.vue + 4 modules
var SfHeading = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfModal/SfModal.vue + 4 modules
var SfModal = __webpack_require__(243);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfCharacteristic/SfCharacteristic.vue + 4 modules
var SfCharacteristic = __webpack_require__(241);

// EXTERNAL MODULE: external "@vue/composition-api"
var composition_api_ = __webpack_require__(0);

// EXTERNAL MODULE: external "vee-validate"
var external_vee_validate_ = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/vee-validate/dist/rules.js
var rules = __webpack_require__(29);

// EXTERNAL MODULE: ./composables/index.ts + 2 modules
var composables = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/@vue-storefront/commercetools/lib/index.es.js
var index_es = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/@vue-storefront/core/lib/index.es.js
var lib_index_es = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Checkout/PersonalDetails.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
Object(external_vee_validate_["extend"])('email', { ...rules["c" /* email */],
  message: 'Invalid email'
});
/* harmony default export */ var PersonalDetailsvue_type_script_lang_js_ = ({
  name: 'PersonalDetails',
  components: {
    SfInput: SfInput["a" /* default */],
    SfCheckbox: SfCheckbox["a" /* default */],
    SfButton: SfButton["a" /* default */],
    SfHeading: SfHeading["a" /* default */],
    SfModal: SfModal["a" /* default */],
    SfCharacteristic: SfCharacteristic["a" /* default */],
    ValidationObserver: external_vee_validate_["ValidationObserver"],
    ValidationProvider: external_vee_validate_["ValidationProvider"]
  },

  setup(props, context) {
    const {
      toggleLoginModal
    } = Object(composables["b" /* useUiState */])();
    const {
      register,
      isAuthenticated
    } = Object(index_es["l" /* useUser */])();
    const {
      loadDetails,
      personalDetails,
      setPersonalDetails,
      loading
    } = Object(index_es["h" /* useCheckout */])();
    const accountBenefits = Object(composition_api_["ref"])(false);
    const createAccount = Object(composition_api_["ref"])(false);
    Object(lib_index_es["onSSR"])(async () => {
      await loadDetails();
    });

    const handleFormSubmit = async () => {
      if (createAccount.value) {
        await register(personalDetails.value);
        context.root.$router.push('/checkout/shipping');
        return;
      }

      await setPersonalDetails(personalDetails.value, {
        save: true
      });
      context.root.$router.push('/checkout/shipping');
    };

    Object(composition_api_["watch"])(isAuthenticated, () => {
      if (isAuthenticated.value) {
        context.root.$router.push('/checkout/shipping');
      }
    });
    return {
      loading,
      personalDetails,
      accountBenefits,
      createAccount,
      setPersonalDetails,
      handleFormSubmit,
      toggleLoginModal,
      characteristics: [{
        description: 'Faster checkout',
        icon: 'clock'
      }, {
        description: 'Full rewards program benefits',
        icon: 'rewards'
      }, {
        description: 'Earn credits with every purchase',
        icon: 'credits'
      }, {
        description: 'Manage your wishliste',
        icon: 'heart'
      }]
    };
  }

});
// CONCATENATED MODULE: ./pages/Checkout/PersonalDetails.vue?vue&type=script&lang=js&
 /* harmony default export */ var Checkout_PersonalDetailsvue_type_script_lang_js_ = (PersonalDetailsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/Checkout/PersonalDetails.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(407)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Checkout_PersonalDetailsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5ce84808",
  "5b5364d0"
  
)

/* harmony default export */ var PersonalDetails = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=PersonalDetails.js.map