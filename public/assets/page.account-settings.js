(self["webpackChunk"] = self["webpackChunk"] || []).push([["page.account-settings"],{

/***/ "./node_modules/@userfrosting/theme-adminlte/app/assets/account-settings.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@userfrosting/theme-adminlte/app/assets/account-settings.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./userfrosting/js/pages/account-settings */ "./node_modules/@userfrosting/theme-adminlte/app/assets/userfrosting/js/pages/account-settings.js");

/***/ }),

/***/ "./node_modules/@userfrosting/theme-adminlte/app/assets/userfrosting/js/pages/account-settings.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@userfrosting/theme-adminlte/app/assets/userfrosting/js/pages/account-settings.js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/**
 * Page-specific Javascript file.  Should generally be included as a separate asset bundle in your page template.
 * example: {{ assets.js('js/pages/sign-in-or-register') | raw }}
 *
 * This script depends on validation rules specified in pages/partials/page.js.twig.
 *
 * Target page: account/settings
 */
$(document).ready(function() {

    // Apply select2 to locale field
    $('.js-select2').select2();

    $("#account-settings").ufForm({
        validator: page.validators.account_settings,
        msgTarget: $("#alerts-page")
    }).on("submitSuccess.ufForm", function() {
        // Reload the page on success
        window.location.reload();
    });

    $("#profile-settings").ufForm({
        validator: page.validators.profile_settings,
        msgTarget: $("#alerts-page")
    }).on("submitSuccess.ufForm", function() {
        // Reload the page on success
        window.location.reload();
    });
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js"], () => (__webpack_exec__("./node_modules/@userfrosting/theme-adminlte/app/assets/account-settings.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5hY2NvdW50LXNldHRpbmdzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsbUJBQU8sQ0FBQyxrSkFBMEM7Ozs7Ozs7Ozs7O0FDQWxEO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQSxJQUFJLENBQUM7O0FBRUwsSUFBSSxDQUFDO0FBQ0w7QUFDQSxtQkFBbUIsQ0FBQztBQUNwQixLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7O0FBRUwsSUFBSSxDQUFDO0FBQ0w7QUFDQSxtQkFBbUIsQ0FBQztBQUNwQixLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B1c2VyZnJvc3RpbmcvdGhlbWUtYWRtaW5sdGUvYXBwL2Fzc2V0cy9hY2NvdW50LXNldHRpbmdzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdXNlcmZyb3N0aW5nL3RoZW1lLWFkbWlubHRlL2FwcC9hc3NldHMvdXNlcmZyb3N0aW5nL2pzL3BhZ2VzL2FjY291bnQtc2V0dGluZ3MuanMiXSwic291cmNlc0NvbnRlbnQiOlsicmVxdWlyZSgnLi91c2VyZnJvc3RpbmcvanMvcGFnZXMvYWNjb3VudC1zZXR0aW5ncycpOyIsIi8qKlxuICogUGFnZS1zcGVjaWZpYyBKYXZhc2NyaXB0IGZpbGUuICBTaG91bGQgZ2VuZXJhbGx5IGJlIGluY2x1ZGVkIGFzIGEgc2VwYXJhdGUgYXNzZXQgYnVuZGxlIGluIHlvdXIgcGFnZSB0ZW1wbGF0ZS5cbiAqIGV4YW1wbGU6IHt7IGFzc2V0cy5qcygnanMvcGFnZXMvc2lnbi1pbi1vci1yZWdpc3RlcicpIHwgcmF3IH19XG4gKlxuICogVGhpcyBzY3JpcHQgZGVwZW5kcyBvbiB2YWxpZGF0aW9uIHJ1bGVzIHNwZWNpZmllZCBpbiBwYWdlcy9wYXJ0aWFscy9wYWdlLmpzLnR3aWcuXG4gKlxuICogVGFyZ2V0IHBhZ2U6IGFjY291bnQvc2V0dGluZ3NcbiAqL1xuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG5cbiAgICAvLyBBcHBseSBzZWxlY3QyIHRvIGxvY2FsZSBmaWVsZFxuICAgICQoJy5qcy1zZWxlY3QyJykuc2VsZWN0MigpO1xuXG4gICAgJChcIiNhY2NvdW50LXNldHRpbmdzXCIpLnVmRm9ybSh7XG4gICAgICAgIHZhbGlkYXRvcjogcGFnZS52YWxpZGF0b3JzLmFjY291bnRfc2V0dGluZ3MsXG4gICAgICAgIG1zZ1RhcmdldDogJChcIiNhbGVydHMtcGFnZVwiKVxuICAgIH0pLm9uKFwic3VibWl0U3VjY2Vzcy51ZkZvcm1cIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIFJlbG9hZCB0aGUgcGFnZSBvbiBzdWNjZXNzXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9KTtcblxuICAgICQoXCIjcHJvZmlsZS1zZXR0aW5nc1wiKS51ZkZvcm0oe1xuICAgICAgICB2YWxpZGF0b3I6IHBhZ2UudmFsaWRhdG9ycy5wcm9maWxlX3NldHRpbmdzLFxuICAgICAgICBtc2dUYXJnZXQ6ICQoXCIjYWxlcnRzLXBhZ2VcIilcbiAgICB9KS5vbihcInN1Ym1pdFN1Y2Nlc3MudWZGb3JtXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBSZWxvYWQgdGhlIHBhZ2Ugb24gc3VjY2Vzc1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfSk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==