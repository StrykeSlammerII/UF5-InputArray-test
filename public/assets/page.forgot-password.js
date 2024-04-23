(self["webpackChunk"] = self["webpackChunk"] || []).push([["page.forgot-password"],{

/***/ "./node_modules/@userfrosting/theme-adminlte/app/assets/forgot-password.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@userfrosting/theme-adminlte/app/assets/forgot-password.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./userfrosting/js/pages/forgot-password */ "./node_modules/@userfrosting/theme-adminlte/app/assets/userfrosting/js/pages/forgot-password.js");

/***/ }),

/***/ "./node_modules/@userfrosting/theme-adminlte/app/assets/userfrosting/js/pages/forgot-password.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@userfrosting/theme-adminlte/app/assets/userfrosting/js/pages/forgot-password.js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/**
 * Page-specific Javascript file.  Should generally be included as a separate asset bundle in your page template.
 * example: {{ assets.js('js/pages/sign-in-or-register') | raw }}
 *
 * This script depends on validation rules specified in pages/partials/page.js.twig.
 *
 * Target page: account/forgot-password
 */
$(document).ready(function() {

    // TODO: Process form
    $("#request-password-reset").ufForm({
        validator: page.validators.forgot_password,
        msgTarget: $("#alerts-page")
    }).on("submitSuccess.ufForm", function() {
        // Forward to login page on success
        window.location.replace(site.uri.public + "/account/sign-in");
    });
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js"], () => (__webpack_exec__("./node_modules/@userfrosting/theme-adminlte/app/assets/forgot-password.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5mb3Jnb3QtcGFzc3dvcmQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxtQkFBTyxDQUFDLGdKQUF5Qzs7Ozs7Ozs7Ozs7QUNBakQ7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLElBQUksQ0FBQztBQUNMO0FBQ0EsbUJBQW1CLENBQUM7QUFDcEIsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdXNlcmZyb3N0aW5nL3RoZW1lLWFkbWlubHRlL2FwcC9hc3NldHMvZm9yZ290LXBhc3N3b3JkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdXNlcmZyb3N0aW5nL3RoZW1lLWFkbWlubHRlL2FwcC9hc3NldHMvdXNlcmZyb3N0aW5nL2pzL3BhZ2VzL2ZvcmdvdC1wYXNzd29yZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJyZXF1aXJlKCcuL3VzZXJmcm9zdGluZy9qcy9wYWdlcy9mb3Jnb3QtcGFzc3dvcmQnKTsiLCIvKipcbiAqIFBhZ2Utc3BlY2lmaWMgSmF2YXNjcmlwdCBmaWxlLiAgU2hvdWxkIGdlbmVyYWxseSBiZSBpbmNsdWRlZCBhcyBhIHNlcGFyYXRlIGFzc2V0IGJ1bmRsZSBpbiB5b3VyIHBhZ2UgdGVtcGxhdGUuXG4gKiBleGFtcGxlOiB7eyBhc3NldHMuanMoJ2pzL3BhZ2VzL3NpZ24taW4tb3ItcmVnaXN0ZXInKSB8IHJhdyB9fVxuICpcbiAqIFRoaXMgc2NyaXB0IGRlcGVuZHMgb24gdmFsaWRhdGlvbiBydWxlcyBzcGVjaWZpZWQgaW4gcGFnZXMvcGFydGlhbHMvcGFnZS5qcy50d2lnLlxuICpcbiAqIFRhcmdldCBwYWdlOiBhY2NvdW50L2ZvcmdvdC1wYXNzd29yZFxuICovXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcblxuICAgIC8vIFRPRE86IFByb2Nlc3MgZm9ybVxuICAgICQoXCIjcmVxdWVzdC1wYXNzd29yZC1yZXNldFwiKS51ZkZvcm0oe1xuICAgICAgICB2YWxpZGF0b3I6IHBhZ2UudmFsaWRhdG9ycy5mb3Jnb3RfcGFzc3dvcmQsXG4gICAgICAgIG1zZ1RhcmdldDogJChcIiNhbGVydHMtcGFnZVwiKVxuICAgIH0pLm9uKFwic3VibWl0U3VjY2Vzcy51ZkZvcm1cIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIEZvcndhcmQgdG8gbG9naW4gcGFnZSBvbiBzdWNjZXNzXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKHNpdGUudXJpLnB1YmxpYyArIFwiL2FjY291bnQvc2lnbi1pblwiKTtcbiAgICB9KTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9