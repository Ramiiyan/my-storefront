import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _01282b16 = () => interopDefault(import('../pages/Category.vue' /* webpackChunkName: "pages/Category" */))
const _3eef575e = () => interopDefault(import('../pages/Checkout.vue' /* webpackChunkName: "" */))
const _65737775 = () => interopDefault(import('../pages/Checkout/OrderReview.vue' /* webpackChunkName: "" */))
const _47f01696 = () => interopDefault(import('../pages/Checkout/Payment.vue' /* webpackChunkName: "" */))
const _2b4b6cde = () => interopDefault(import('../pages/Checkout/PersonalDetails.vue' /* webpackChunkName: "" */))
const _a5142de2 = () => interopDefault(import('../pages/Checkout/Shipping.vue' /* webpackChunkName: "" */))
const _d1f89694 = () => interopDefault(import('../pages/Checkout/ThankYou.vue' /* webpackChunkName: "" */))
const _e5c26b12 = () => interopDefault(import('../pages/Home.vue' /* webpackChunkName: "" */))
const _4bd44b0e = () => interopDefault(import('../pages/MyAccount.vue' /* webpackChunkName: "pages/MyAccount" */))
const _3cbd16ed = () => interopDefault(import('../pages/MyAccount/BillingDetails.vue' /* webpackChunkName: "pages/MyAccount/BillingDetails" */))
const _9f410b80 = () => interopDefault(import('../pages/MyAccount/LoyaltyCard.vue' /* webpackChunkName: "pages/MyAccount/LoyaltyCard" */))
const _9124b8aa = () => interopDefault(import('../pages/MyAccount/MyNewsletter.vue' /* webpackChunkName: "pages/MyAccount/MyNewsletter" */))
const _bcf8e5b2 = () => interopDefault(import('../pages/MyAccount/MyProfile.vue' /* webpackChunkName: "pages/MyAccount/MyProfile" */))
const _2df322ce = () => interopDefault(import('../pages/MyAccount/MyReviews.vue' /* webpackChunkName: "pages/MyAccount/MyReviews" */))
const _da9a75e8 = () => interopDefault(import('../pages/MyAccount/OrderHistory.vue' /* webpackChunkName: "pages/MyAccount/OrderHistory" */))
const _0ac12e7e = () => interopDefault(import('../pages/MyAccount/ShippingDetails.vue' /* webpackChunkName: "pages/MyAccount/ShippingDetails" */))
const _221db587 = () => interopDefault(import('../pages/Product.vue' /* webpackChunkName: "pages/Product" */))

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
    component: _01282b16,
    name: "Category___en"
  }, {
    path: "/checkout",
    component: _3eef575e,
    name: "checkout___en",
    children: [{
      path: "order-review",
      component: _65737775,
      name: "order-review___en"
    }, {
      path: "payment",
      component: _47f01696,
      name: "payment___en"
    }, {
      path: "personal-details",
      component: _2b4b6cde,
      name: "personal-details___en"
    }, {
      path: "shipping",
      component: _a5142de2,
      name: "shipping___en"
    }, {
      path: "thank-you",
      component: _d1f89694,
      name: "thank-you___en"
    }]
  }, {
    path: "/Checkout",
    component: _3eef575e,
    name: "Checkout___en",
    children: [{
      path: "OrderReview",
      component: _65737775,
      name: "Checkout-OrderReview___en"
    }, {
      path: "Payment",
      component: _47f01696,
      name: "Checkout-Payment___en"
    }, {
      path: "PersonalDetails",
      component: _2b4b6cde,
      name: "Checkout-PersonalDetails___en"
    }, {
      path: "Shipping",
      component: _a5142de2,
      name: "Checkout-Shipping___en"
    }, {
      path: "ThankYou",
      component: _d1f89694,
      name: "Checkout-ThankYou___en"
    }]
  }, {
    path: "/de",
    component: _e5c26b12,
    name: "home___de"
  }, {
    path: "/Home",
    component: _e5c26b12,
    name: "Home___en"
  }, {
    path: "/MyAccount",
    component: _4bd44b0e,
    name: "MyAccount___en",
    children: [{
      path: "BillingDetails",
      component: _3cbd16ed,
      name: "MyAccount-BillingDetails___en"
    }, {
      path: "LoyaltyCard",
      component: _9f410b80,
      name: "MyAccount-LoyaltyCard___en"
    }, {
      path: "MyNewsletter",
      component: _9124b8aa,
      name: "MyAccount-MyNewsletter___en"
    }, {
      path: "MyProfile",
      component: _bcf8e5b2,
      name: "MyAccount-MyProfile___en"
    }, {
      path: "MyReviews",
      component: _2df322ce,
      name: "MyAccount-MyReviews___en"
    }, {
      path: "OrderHistory",
      component: _da9a75e8,
      name: "MyAccount-OrderHistory___en"
    }, {
      path: "ShippingDetails",
      component: _0ac12e7e,
      name: "MyAccount-ShippingDetails___en"
    }]
  }, {
    path: "/Product",
    component: _221db587,
    name: "Product___en"
  }, {
    path: "/de/Category",
    component: _01282b16,
    name: "Category___de"
  }, {
    path: "/de/checkout",
    component: _3eef575e,
    name: "checkout___de",
    children: [{
      path: "order-review",
      component: _65737775,
      name: "order-review___de"
    }, {
      path: "payment",
      component: _47f01696,
      name: "payment___de"
    }, {
      path: "personal-details",
      component: _2b4b6cde,
      name: "personal-details___de"
    }, {
      path: "shipping",
      component: _a5142de2,
      name: "shipping___de"
    }, {
      path: "thank-you",
      component: _d1f89694,
      name: "thank-you___de"
    }]
  }, {
    path: "/de/Checkout",
    component: _3eef575e,
    name: "Checkout___de",
    children: [{
      path: "OrderReview",
      component: _65737775,
      name: "Checkout-OrderReview___de"
    }, {
      path: "Payment",
      component: _47f01696,
      name: "Checkout-Payment___de"
    }, {
      path: "PersonalDetails",
      component: _2b4b6cde,
      name: "Checkout-PersonalDetails___de"
    }, {
      path: "Shipping",
      component: _a5142de2,
      name: "Checkout-Shipping___de"
    }, {
      path: "ThankYou",
      component: _d1f89694,
      name: "Checkout-ThankYou___de"
    }]
  }, {
    path: "/de/Home",
    component: _e5c26b12,
    name: "Home___de"
  }, {
    path: "/de/MyAccount",
    component: _4bd44b0e,
    name: "MyAccount___de",
    children: [{
      path: "BillingDetails",
      component: _3cbd16ed,
      name: "MyAccount-BillingDetails___de"
    }, {
      path: "LoyaltyCard",
      component: _9f410b80,
      name: "MyAccount-LoyaltyCard___de"
    }, {
      path: "MyNewsletter",
      component: _9124b8aa,
      name: "MyAccount-MyNewsletter___de"
    }, {
      path: "MyProfile",
      component: _bcf8e5b2,
      name: "MyAccount-MyProfile___de"
    }, {
      path: "MyReviews",
      component: _2df322ce,
      name: "MyAccount-MyReviews___de"
    }, {
      path: "OrderHistory",
      component: _da9a75e8,
      name: "MyAccount-OrderHistory___de"
    }, {
      path: "ShippingDetails",
      component: _0ac12e7e,
      name: "MyAccount-ShippingDetails___de"
    }]
  }, {
    path: "/de/Product",
    component: _221db587,
    name: "Product___de"
  }, {
    path: "/de/my-account/:pageName?",
    component: _4bd44b0e,
    name: "my-account___de"
  }, {
    path: "/de/p/:id/:slug",
    component: _221db587,
    name: "product___de"
  }, {
    path: "/de/c/:slug_1/:slug_2?/:slug_3?/:slug_4?/:slug_5?",
    component: _01282b16,
    name: "category___de"
  }, {
    path: "/my-account/:pageName?",
    component: _4bd44b0e,
    name: "my-account___en"
  }, {
    path: "/p/:id/:slug",
    component: _221db587,
    name: "product___en"
  }, {
    path: "/c/:slug_1/:slug_2?/:slug_3?/:slug_4?/:slug_5?",
    component: _01282b16,
    name: "category___en"
  }, {
    path: "/",
    component: _e5c26b12,
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
