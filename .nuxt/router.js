import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _c103eef2 = () => interopDefault(import('..\\pages\\Category.vue' /* webpackChunkName: "pages/Category" */))
const _f19cbdda = () => interopDefault(import('..\\pages\\Checkout.vue' /* webpackChunkName: "" */))
const _00d7d9dd = () => interopDefault(import('..\\pages\\Checkout\\OrderReview.vue' /* webpackChunkName: "" */))
const _748dcb1d = () => interopDefault(import('..\\pages\\Checkout\\Payment.vue' /* webpackChunkName: "" */))
const _c311900e = () => interopDefault(import('..\\pages\\Checkout\\PersonalDetails.vue' /* webpackChunkName: "" */))
const _25aadfa7 = () => interopDefault(import('..\\pages\\Checkout\\Shipping.vue' /* webpackChunkName: "" */))
const _0f38ab4e = () => interopDefault(import('..\\pages\\Checkout\\ThankYou.vue' /* webpackChunkName: "" */))
const _45759662 = () => interopDefault(import('..\\pages\\Checkout.vue' /* webpackChunkName: "pages/Checkout" */))
const _ed36b932 = () => interopDefault(import('..\\pages\\Checkout\\OrderReview.vue' /* webpackChunkName: "pages/Checkout/OrderReview" */))
const _6040e9a7 = () => interopDefault(import('..\\pages\\Checkout\\Payment.vue' /* webpackChunkName: "pages/Checkout/Payment" */))
const _19102c83 = () => interopDefault(import('..\\pages\\Checkout\\PersonalDetails.vue' /* webpackChunkName: "pages/Checkout/PersonalDetails" */))
const _9f48db46 = () => interopDefault(import('..\\pages\\Checkout\\Shipping.vue' /* webpackChunkName: "pages/Checkout/Shipping" */))
const _cc2d43f8 = () => interopDefault(import('..\\pages\\Checkout\\ThankYou.vue' /* webpackChunkName: "pages/Checkout/ThankYou" */))
const _c1e792a8 = () => interopDefault(import('..\\pages\\Home.vue' /* webpackChunkName: "" */))
const _3e970868 = () => interopDefault(import('..\\pages\\Home.vue' /* webpackChunkName: "pages/Home" */))
const _067bab28 = () => interopDefault(import('..\\pages\\MyAccount.vue' /* webpackChunkName: "pages/MyAccount" */))
const _668da2e2 = () => interopDefault(import('..\\pages\\MyAccount\\BillingDetails.vue' /* webpackChunkName: "pages/MyAccount/BillingDetails" */))
const _4d9955de = () => interopDefault(import('..\\pages\\MyAccount\\LoyaltyCard.vue' /* webpackChunkName: "pages/MyAccount/LoyaltyCard" */))
const _7d218866 = () => interopDefault(import('..\\pages\\MyAccount\\MyNewsletter.vue' /* webpackChunkName: "pages/MyAccount/MyNewsletter" */))
const _f7c88f76 = () => interopDefault(import('..\\pages\\MyAccount\\MyProfile.vue' /* webpackChunkName: "pages/MyAccount/MyProfile" */))
const _68c2cc92 = () => interopDefault(import('..\\pages\\MyAccount\\MyReviews.vue' /* webpackChunkName: "pages/MyAccount/MyReviews" */))
const _c69745a4 = () => interopDefault(import('..\\pages\\MyAccount\\OrderHistory.vue' /* webpackChunkName: "pages/MyAccount/OrderHistory" */))
const _7a480b1c = () => interopDefault(import('..\\pages\\MyAccount\\ShippingDetails.vue' /* webpackChunkName: "pages/MyAccount/ShippingDetails" */))
const _79cde5f6 = () => interopDefault(import('..\\pages\\Product.vue' /* webpackChunkName: "pages/Product" */))
const _cbc67138 = () => interopDefault(import('..\\pages\\MyAccount.vue' /* webpackChunkName: "" */))
const _5e40e132 = () => interopDefault(import('..\\pages\\Product.vue' /* webpackChunkName: "" */))
const _496a74cb = () => interopDefault(import('..\\pages\\Category.vue' /* webpackChunkName: "" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

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
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
