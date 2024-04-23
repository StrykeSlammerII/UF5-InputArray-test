(self["webpackChunk"] = self["webpackChunk"] || []).push([["page.permissions"],{

/***/ "./node_modules/@userfrosting/sprinkle-admin/app/assets/page.permissions.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@userfrosting/sprinkle-admin/app/assets/page.permissions.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./userfrosting/js/pages/permissions */ "./node_modules/@userfrosting/sprinkle-admin/app/assets/userfrosting/js/pages/permissions.js");

/***/ }),

/***/ "./node_modules/@userfrosting/sprinkle-admin/app/assets/userfrosting/js/pages/permissions.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@userfrosting/sprinkle-admin/app/assets/userfrosting/js/pages/permissions.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/**
 * Page-specific Javascript file.  Should generally be included as a separate asset bundle in your page template.
 * example: {{ assets.js('js/pages/sign-in-or-register') | raw }}
 *
 * This script depends on widgets/permissions.js, uf-table.js, moment.js, handlebars-helpers.js
 *
 * Target page: /permissions
 */

$(document).ready(function() {
    // Set up table of permissions
    $("#widget-permissions").ufTable({
        dataUrl: site.uri.public + "/api/permissions",
        useLoadingTransition: site.uf_table.use_loading_transition
    });
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js"], () => (__webpack_exec__("./node_modules/@userfrosting/sprinkle-admin/app/assets/page.permissions.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5wZXJtaXNzaW9ucy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLG1CQUFPLENBQUMsd0lBQXFDOzs7Ozs7Ozs7OztBQ0E3QztBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNEO0FBQ0EsSUFBSSxDQUFDO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B1c2VyZnJvc3Rpbmcvc3ByaW5rbGUtYWRtaW4vYXBwL2Fzc2V0cy9wYWdlLnBlcm1pc3Npb25zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdXNlcmZyb3N0aW5nL3Nwcmlua2xlLWFkbWluL2FwcC9hc3NldHMvdXNlcmZyb3N0aW5nL2pzL3BhZ2VzL3Blcm1pc3Npb25zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInJlcXVpcmUoJy4vdXNlcmZyb3N0aW5nL2pzL3BhZ2VzL3Blcm1pc3Npb25zJyk7IiwiLyoqXG4gKiBQYWdlLXNwZWNpZmljIEphdmFzY3JpcHQgZmlsZS4gIFNob3VsZCBnZW5lcmFsbHkgYmUgaW5jbHVkZWQgYXMgYSBzZXBhcmF0ZSBhc3NldCBidW5kbGUgaW4geW91ciBwYWdlIHRlbXBsYXRlLlxuICogZXhhbXBsZToge3sgYXNzZXRzLmpzKCdqcy9wYWdlcy9zaWduLWluLW9yLXJlZ2lzdGVyJykgfCByYXcgfX1cbiAqXG4gKiBUaGlzIHNjcmlwdCBkZXBlbmRzIG9uIHdpZGdldHMvcGVybWlzc2lvbnMuanMsIHVmLXRhYmxlLmpzLCBtb21lbnQuanMsIGhhbmRsZWJhcnMtaGVscGVycy5qc1xuICpcbiAqIFRhcmdldCBwYWdlOiAvcGVybWlzc2lvbnNcbiAqL1xuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICAvLyBTZXQgdXAgdGFibGUgb2YgcGVybWlzc2lvbnNcbiAgICAkKFwiI3dpZGdldC1wZXJtaXNzaW9uc1wiKS51ZlRhYmxlKHtcbiAgICAgICAgZGF0YVVybDogc2l0ZS51cmkucHVibGljICsgXCIvYXBpL3Blcm1pc3Npb25zXCIsXG4gICAgICAgIHVzZUxvYWRpbmdUcmFuc2l0aW9uOiBzaXRlLnVmX3RhYmxlLnVzZV9sb2FkaW5nX3RyYW5zaXRpb25cbiAgICB9KTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9