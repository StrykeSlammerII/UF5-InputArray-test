(self["webpackChunk"] = self["webpackChunk"] || []).push([["page.set-or-reset-password"],{

/***/ "./node_modules/@userfrosting/theme-adminlte/app/assets/set-or-reset-password.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@userfrosting/theme-adminlte/app/assets/set-or-reset-password.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./userfrosting/js/pages/set-or-reset-password */ "./node_modules/@userfrosting/theme-adminlte/app/assets/userfrosting/js/pages/set-or-reset-password.js");

/***/ }),

/***/ "./node_modules/@userfrosting/theme-adminlte/app/assets/userfrosting/js/pages/set-or-reset-password.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@userfrosting/theme-adminlte/app/assets/userfrosting/js/pages/set-or-reset-password.js ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/**
 * Page-specific Javascript file.  Should generally be included as a separate asset bundle in your page template.
 * example: {{ assets.js('js/pages/sign-in-or-register') | raw }}
 *
 * This script depends on validation rules specified in pages/partials/page.js.twig.
 *
 * Target pages: account/set-password, account/reset-password
 */
$(document).ready(function() {

    $("#set-or-reset-password").ufForm({
        validator: page.validators.set_password,
        msgTarget: $("#alerts-page")
    }).on("submitSuccess.ufForm", function() {
        // Forward to home page on success
        // TODO: forward to landing/last page
        window.location.replace(site.uri.public + "/account/sign-in");
    });
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js"], () => (__webpack_exec__("./node_modules/@userfrosting/theme-adminlte/app/assets/set-or-reset-password.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5zZXQtb3ItcmVzZXQtcGFzc3dvcmQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxtQkFBTyxDQUFDLDRKQUErQzs7Ozs7Ozs7Ozs7QUNBdkQ7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxJQUFJLENBQUM7QUFDTDtBQUNBLG1CQUFtQixDQUFDO0FBQ3BCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdXNlcmZyb3N0aW5nL3RoZW1lLWFkbWlubHRlL2FwcC9hc3NldHMvc2V0LW9yLXJlc2V0LXBhc3N3b3JkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdXNlcmZyb3N0aW5nL3RoZW1lLWFkbWlubHRlL2FwcC9hc3NldHMvdXNlcmZyb3N0aW5nL2pzL3BhZ2VzL3NldC1vci1yZXNldC1wYXNzd29yZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJyZXF1aXJlKCcuL3VzZXJmcm9zdGluZy9qcy9wYWdlcy9zZXQtb3ItcmVzZXQtcGFzc3dvcmQnKTsiLCIvKipcbiAqIFBhZ2Utc3BlY2lmaWMgSmF2YXNjcmlwdCBmaWxlLiAgU2hvdWxkIGdlbmVyYWxseSBiZSBpbmNsdWRlZCBhcyBhIHNlcGFyYXRlIGFzc2V0IGJ1bmRsZSBpbiB5b3VyIHBhZ2UgdGVtcGxhdGUuXG4gKiBleGFtcGxlOiB7eyBhc3NldHMuanMoJ2pzL3BhZ2VzL3NpZ24taW4tb3ItcmVnaXN0ZXInKSB8IHJhdyB9fVxuICpcbiAqIFRoaXMgc2NyaXB0IGRlcGVuZHMgb24gdmFsaWRhdGlvbiBydWxlcyBzcGVjaWZpZWQgaW4gcGFnZXMvcGFydGlhbHMvcGFnZS5qcy50d2lnLlxuICpcbiAqIFRhcmdldCBwYWdlczogYWNjb3VudC9zZXQtcGFzc3dvcmQsIGFjY291bnQvcmVzZXQtcGFzc3dvcmRcbiAqL1xuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG5cbiAgICAkKFwiI3NldC1vci1yZXNldC1wYXNzd29yZFwiKS51ZkZvcm0oe1xuICAgICAgICB2YWxpZGF0b3I6IHBhZ2UudmFsaWRhdG9ycy5zZXRfcGFzc3dvcmQsXG4gICAgICAgIG1zZ1RhcmdldDogJChcIiNhbGVydHMtcGFnZVwiKVxuICAgIH0pLm9uKFwic3VibWl0U3VjY2Vzcy51ZkZvcm1cIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIEZvcndhcmQgdG8gaG9tZSBwYWdlIG9uIHN1Y2Nlc3NcbiAgICAgICAgLy8gVE9ETzogZm9yd2FyZCB0byBsYW5kaW5nL2xhc3QgcGFnZVxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShzaXRlLnVyaS5wdWJsaWMgKyBcIi9hY2NvdW50L3NpZ24taW5cIik7XG4gICAgfSk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==