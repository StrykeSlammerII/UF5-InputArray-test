(self["webpackChunk"] = self["webpackChunk"] || []).push([["page.resend-verification"],{

/***/ "./node_modules/@userfrosting/theme-adminlte/app/assets/resend-verification.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@userfrosting/theme-adminlte/app/assets/resend-verification.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./userfrosting/js/pages/resend-verification */ "./node_modules/@userfrosting/theme-adminlte/app/assets/userfrosting/js/pages/resend-verification.js");

/***/ }),

/***/ "./node_modules/@userfrosting/theme-adminlte/app/assets/userfrosting/js/pages/resend-verification.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@userfrosting/theme-adminlte/app/assets/userfrosting/js/pages/resend-verification.js ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/**
 * Page-specific Javascript file.  Should generally be included as a separate asset bundle in your page template.
 * example: {{ assets.js('js/pages/sign-in-or-register') | raw }}
 *
 * This script depends on validation rules specified in pages/partials/page.js.twig.
 *
 * Target page: account/resend-verification
 */
$(document).ready(function() {

    // TODO: Process form
    $("#request-verification-email").ufForm({
        validator: page.validators.resend_verification,
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js"], () => (__webpack_exec__("./node_modules/@userfrosting/theme-adminlte/app/assets/resend-verification.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5yZXNlbmQtdmVyaWZpY2F0aW9uLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsbUJBQU8sQ0FBQyx3SkFBNkM7Ozs7Ozs7Ozs7O0FDQXJEO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQSxJQUFJLENBQUM7QUFDTDtBQUNBLG1CQUFtQixDQUFDO0FBQ3BCLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHVzZXJmcm9zdGluZy90aGVtZS1hZG1pbmx0ZS9hcHAvYXNzZXRzL3Jlc2VuZC12ZXJpZmljYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B1c2VyZnJvc3RpbmcvdGhlbWUtYWRtaW5sdGUvYXBwL2Fzc2V0cy91c2VyZnJvc3RpbmcvanMvcGFnZXMvcmVzZW5kLXZlcmlmaWNhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJyZXF1aXJlKCcuL3VzZXJmcm9zdGluZy9qcy9wYWdlcy9yZXNlbmQtdmVyaWZpY2F0aW9uJyk7IiwiLyoqXG4gKiBQYWdlLXNwZWNpZmljIEphdmFzY3JpcHQgZmlsZS4gIFNob3VsZCBnZW5lcmFsbHkgYmUgaW5jbHVkZWQgYXMgYSBzZXBhcmF0ZSBhc3NldCBidW5kbGUgaW4geW91ciBwYWdlIHRlbXBsYXRlLlxuICogZXhhbXBsZToge3sgYXNzZXRzLmpzKCdqcy9wYWdlcy9zaWduLWluLW9yLXJlZ2lzdGVyJykgfCByYXcgfX1cbiAqXG4gKiBUaGlzIHNjcmlwdCBkZXBlbmRzIG9uIHZhbGlkYXRpb24gcnVsZXMgc3BlY2lmaWVkIGluIHBhZ2VzL3BhcnRpYWxzL3BhZ2UuanMudHdpZy5cbiAqXG4gKiBUYXJnZXQgcGFnZTogYWNjb3VudC9yZXNlbmQtdmVyaWZpY2F0aW9uXG4gKi9cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuXG4gICAgLy8gVE9ETzogUHJvY2VzcyBmb3JtXG4gICAgJChcIiNyZXF1ZXN0LXZlcmlmaWNhdGlvbi1lbWFpbFwiKS51ZkZvcm0oe1xuICAgICAgICB2YWxpZGF0b3I6IHBhZ2UudmFsaWRhdG9ycy5yZXNlbmRfdmVyaWZpY2F0aW9uLFxuICAgICAgICBtc2dUYXJnZXQ6ICQoXCIjYWxlcnRzLXBhZ2VcIilcbiAgICB9KS5vbihcInN1Ym1pdFN1Y2Nlc3MudWZGb3JtXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBGb3J3YXJkIHRvIGxvZ2luIHBhZ2Ugb24gc3VjY2Vzc1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShzaXRlLnVyaS5wdWJsaWMgKyBcIi9hY2NvdW50L3NpZ24taW5cIik7XG4gICAgfSk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==