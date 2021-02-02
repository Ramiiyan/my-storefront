exports.ids = [8];
exports.modules = {

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

/***/ 359:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(412);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("6777b262", content, true, context)
};

/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ThankYou_vue_vue_type_style_index_0_id_21aa9da6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(359);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ThankYou_vue_vue_type_style_index_0_id_21aa9da6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ThankYou_vue_vue_type_style_index_0_id_21aa9da6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ThankYou_vue_vue_type_style_index_0_id_21aa9da6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ThankYou_vue_vue_type_style_index_0_id_21aa9da6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 412:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media (min-width:1024px){.smartphone-only[data-v-21aa9da6]{display:none!important}}@media (max-width:1023px){.desktop-only[data-v-21aa9da6]{display:none!important}}#thank-you[data-v-21aa9da6]{box-sizing:border-box}@media (min-width:1024px){#thank-you[data-v-21aa9da6]{max-width:1240px;padding:0 var(--spacer-sm);margin:0 auto}}.heading[data-v-21aa9da6]{--heading-padding:var(--spacer-base) 0}@media (min-width:1024px){.heading[data-v-21aa9da6]{--heading-padding:var(--spacer-sm) 0 var(--spacer-xs) 0}}.paragraph[data-v-21aa9da6]{margin:0;color:var(--c-link);font:var(--font-weight--normal) var(--font-size--base)/1.6 var(--font-family--primary)}@media (min-width:1024px){.paragraph[data-v-21aa9da6]{font-weight:var(--font-weight--light);font-size:var(--font-size--sm);margin-bottom:var(--spacer-lg)}}.banner[data-v-21aa9da6]{--call-to-action-color:var(--c-text);--call-to-action-title-font-size:var(--h2-font-size);--call-to-action-title-font-weight:var(--font-weight--semibold);--call-to-action-text-container-width:50%}@media (min-width:1024px){.banner[data-v-21aa9da6]{margin:0 0 var(--spacer-2xl) 0}}.banner__order-number[data-v-21aa9da6]{display:flex;flex-direction:column;font:var(--font-weight--light) var(--font-size--sm)/1.4 var(--font-family--primary)}@media (min-width:1024px){.banner__order-number[data-v-21aa9da6]{flex-direction:row;font-size:var(--font-size--normal)}}.section[data-v-21aa9da6]{display:flex;flex-direction:column;margin:0 auto}@media (min-width:1024px){.section[data-v-21aa9da6]{flex-direction:row;padding:0;background:var(--c-light)}}.order[data-v-21aa9da6]{background:var(--c-light);padding-bottom:var(--spacer-sm)}@media (min-width:1024px){.order[data-v-21aa9da6]{width:100%;padding:var(--spacer-xl) var(--spacer-xl) var(--spacer-2xl) var(--spacer-2xl)}}.order__heading[data-v-21aa9da6]{--heading-title-font-weight:var(--font-weight--bold)}@media (min-width:1024px){.order__heading[data-v-21aa9da6]{--heading-title-color:var(--c-link);--heading-title-font-weight:var(--font-weight--swemibold)}}@media (max-width:1023px){.order__contact[data-v-21aa9da6],.order__heading[data-v-21aa9da6],.order__paragraph[data-v-21aa9da6]{margin:0;padding-left:var(--spacer-sm);padding-right:var(--spacer-sm)}}.order__contact[data-v-21aa9da6]{padding-bottom:var(--spacer-base);--heading-title-font-size:var(--font-size--lg);--heading-title-font-weight:var(--font-weight--medium)}@media (min-width:1024px){.order__contact[data-v-21aa9da6]{--heading-title-font-size:var(--font-size--base);--heading-title-font-weight:var(--font-weight--normal);padding:0 var(--spacer-sm);border:2px solid var(--c-white);border-width:2px 0}}.order__notifications-button[data-v-21aa9da6]{--button-width:calc(100% - var(--spacer-lg));margin:0 auto}@media (min-width:1024px){.order__notifications-button[data-v-21aa9da6]{margin:var(--spacer-xl) 0 0 0}}.contact[data-v-21aa9da6]{color:var(--c-dark-variant);font:var(--font-weight--light) var(--font-size--base)/1.6 var(--font-family--secondary)}@media (min-width:1024px){.contact[data-v-21aa9da6]{font-weight:var(--font-weight--normal);font-size:var(--font-size--sm)}}.contact__city[data-v-21aa9da6],.contact__name[data-v-21aa9da6],.contact__street[data-v-21aa9da6]{margin:0}.contact__email[data-v-21aa9da6]{margin:var(--spacer-sm) 0 0 0}@media (min-width:1024px){.contact__email[data-v-21aa9da6]{margin-bottom:var(--spacer-sm)}}.contact__city[data-v-21aa9da6],.contact__email[data-v-21aa9da6],.contact__name[data-v-21aa9da6],.contact__street[data-v-21aa9da6]{font-size:var(--font-size--sm)}.additional-info[data-v-21aa9da6]{--heading-title-font-weight:var(--font-weight--bold);padding:0 var(--spacer-sm)}@media (min-width:1024px){.additional-info[data-v-21aa9da6]{--heading-title-color:var(--c-link);--heading-title-font-weight:var(--font-weight--semibold);width:100%;display:flex;flex-direction:column;justify-content:space-between;padding:var(--spacer-xl) var(--spacer-xl) var(--spacer-2xl) var(--spacer-2xl)}}.feedback-button[data-v-21aa9da6]{margin:var(--spacer-xl) 0 var(--spacer-sm) 0}@media (min-width:1024px){.feedback-button[data-v-21aa9da6]{margin:var(--spacer-base) 0 0 0}}.back-button[data-v-21aa9da6]{--button-width:calc(100% - var(--spacer-lg));margin:0 auto var(--spacer-sm) auto}@media (min-width:1024px){.back-button[data-v-21aa9da6]{margin:var(--spacer-xl) auto}.back-button[data-v-21aa9da6]:hover{color:var(--c-white)}}@media (min-width:1024px){.button-size[data-v-21aa9da6]{--button-width:25rem}}", ""]);
// Exports
module.exports = exports;


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

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/Checkout/ThankYou.vue?vue&type=template&id=21aa9da6&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"thank-you"}},[_c('SfCallToAction',{staticClass:"banner",attrs:{"title":"Thank you for your order!","image":{
      mobile: '/thank-you/bannerM.png',
      desktop: '/thank-you/bannerD.png',
    }},scopedSlots:_vm._u([{key:"description",fn:function(){return [_c('div',{staticClass:"banner__order-number"},[_c('span',[_vm._v("Order No.")]),_vm._v(" "),_c('strong',[_vm._v(_vm._s(_vm.order.number))])])]},proxy:true}])}),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"section\" data-v-21aa9da6>","</section>",[_vm._ssrNode("<div class=\"order\" data-v-21aa9da6>","</div>",[_c('SfHeading',{staticClass:"order__heading heading sf-heading--left",attrs:{"title":"Your Purchase","level":3}}),_vm._ssrNode(" <p class=\"order__paragraph paragraph\" data-v-21aa9da6>\n        You have successfully placed the order. You can check status of your\n        order by using our delivery status feature. You will receive an order\n        confirmation e-mail with details of your order and a link to track its\n        progress.\n      </p> "),_vm._ssrNode("<div class=\"order__contact\" data-v-21aa9da6>","</div>",[_c('SfHeading',{staticClass:"heading sf-heading--left sf-heading--no-underline",attrs:{"level":6,"title":"Primary contacts for any questions"}}),_vm._ssrNode(" <div class=\"contact\" data-v-21aa9da6><p class=\"contact__name\" data-v-21aa9da6>"+_vm._ssrEscape(_vm._s(_vm.address.name))+"</p> <p class=\"contact__street\" data-v-21aa9da6>"+_vm._ssrEscape(_vm._s(_vm.address.street))+"</p> <p class=\"contact__city\" data-v-21aa9da6>"+_vm._ssrEscape(_vm._s(_vm.address.city))+"</p> <p class=\"contact__email\" data-v-21aa9da6>"+_vm._ssrEscape(_vm._s(_vm.address.email))+"</p></div>")],2),_vm._ssrNode(" "),_c('SfButton',{staticClass:"order__notifications-button button-size"},[_vm._v("Allow order notifications")])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"additional-info\" data-v-21aa9da6>","</div>",[_vm._ssrNode("<div data-v-21aa9da6>","</div>",[_c('SfHeading',{staticClass:"heading sf-heading--left",attrs:{"title":"Your Account","level":3}}),_vm._ssrNode(" <p class=\"paragraph\" data-v-21aa9da6>\n          You can log to your account using e-mail and password defined\n          earlier. On your account you can edit your profile data, check\n          history of transactions, edit subscription to newsletter.\n        </p>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div data-v-21aa9da6>","</div>",[_c('SfHeading',{staticClass:"heading sf-heading--left",attrs:{"title":"What can we improve","level":3}}),_vm._ssrNode(" <p class=\"paragraph\" data-v-21aa9da6>\n          Your feedback is important to us. Let us know what we could improve.\n        </p> "),_c('SfButton',{staticClass:"feedback-button color-secondary sf-button--full-width button-size"},[_vm._v("Send my feedback")])],2)],2)],2),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"sf-button back-button color-primary button-size",attrs:{"to":"/"}},[_vm._v("Go back to shop")])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/Checkout/ThankYou.vue?vue&type=template&id=21aa9da6&scoped=true&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfHeading/SfHeading.vue + 4 modules
var SfHeading = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfButton/SfButton.vue + 4 modules
var SfButton = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfCallToAction/SfCallToAction.vue + 4 modules
var SfCallToAction = __webpack_require__(442);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Checkout/ThankYou.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var ThankYouvue_type_script_lang_js_ = ({
  components: {
    SfHeading: SfHeading["a" /* default */],
    SfButton: SfButton["a" /* default */],
    SfCallToAction: SfCallToAction["a" /* default */]
  },

  setup(props, context) {
    return {
      address: {
        name: 'Company Headquarter',
        street: 'St. Main 17, 53-534',
        city: 'Wroclaw, Poland',
        email: 'demo@vuestorefront.io'
      },
      order: {
        number: `#${context.root.$route.query.order}`
      }
    };
  }

});
// CONCATENATED MODULE: ./pages/Checkout/ThankYou.vue?vue&type=script&lang=js&
 /* harmony default export */ var Checkout_ThankYouvue_type_script_lang_js_ = (ThankYouvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/Checkout/ThankYou.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(411)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Checkout_ThankYouvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "21aa9da6",
  "4e1d9b52"
  
)

/* harmony default export */ var ThankYou = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=ThankYou.js.map