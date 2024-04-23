(self["webpackChunk"] = self["webpackChunk"] || []).push([["page.users"],{

/***/ "./node_modules/@userfrosting/sprinkle-admin/app/assets/page.users.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@userfrosting/sprinkle-admin/app/assets/page.users.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./userfrosting/js/pages/users */ "./node_modules/@userfrosting/sprinkle-admin/app/assets/userfrosting/js/pages/users.js");
__webpack_require__(/*! @userfrosting/theme-adminlte/app/assets/userfrosting/js/uf-collection */ "./node_modules/@userfrosting/theme-adminlte/app/assets/userfrosting/js/uf-collection.js");
__webpack_require__(/*! @userfrosting/theme-adminlte/app/assets/userfrosting/css/uf-collection.css */ "./node_modules/@userfrosting/theme-adminlte/app/assets/userfrosting/css/uf-collection.css");

/***/ }),

/***/ "./node_modules/@userfrosting/sprinkle-admin/app/assets/userfrosting/js/pages/users.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@userfrosting/sprinkle-admin/app/assets/userfrosting/js/pages/users.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _widgets_users__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../widgets/users */ "./node_modules/@userfrosting/sprinkle-admin/app/assets/userfrosting/js/widgets/users.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/**
 * Page-specific Javascript file.  Should generally be included as a separate asset bundle in your page template.
 * example: {{ assets.js('js/pages/sign-in-or-register') | raw }}
 *
 * This script depends on widgets/users.js, uf-table.js, moment.js, handlebars-helpers.js
 *
 * Target page: /users
 */


$(document).ready(function () {
    // Set up table of users
    $("#widget-users").ufTable({
        dataUrl: site.uri.public + "/api/users",
        useLoadingTransition: site.uf_table.use_loading_transition,
    });

    // Bind creation button
    (0,_widgets_users__WEBPACK_IMPORTED_MODULE_0__.bindUserCreationButton)($("#widget-users"));

    // Bind table buttons
    $("#widget-users").on("pagerComplete.ufTable", function () {
        (0,_widgets_users__WEBPACK_IMPORTED_MODULE_0__.bindUserButtons)($(this));
    });
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_userfrosting_sprinkle-admin_app_assets_userfrosting_js_widgets_users_js","vendors-node_modules_userfrosting_theme-adminlte_app_assets_userfrosting_js_uf-collection_js--ca7787"], () => (__webpack_exec__("./node_modules/@userfrosting/sprinkle-admin/app/assets/page.users.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS51c2Vycy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLG1CQUFPLENBQUMsNEhBQStCO0FBQ3ZDLG1CQUFPLENBQUMsc0tBQXVFO0FBQy9FLG1CQUFPLENBQUMsNktBQTRFOzs7Ozs7Ozs7Ozs7OztBQ0ZwRjtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDMkU7O0FBRTNFLENBQUM7QUFDRDtBQUNBLElBQUksQ0FBQztBQUNMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsSUFBSSxzRUFBc0IsQ0FBQyxDQUFDOztBQUU1QjtBQUNBLElBQUksQ0FBQztBQUNMLFFBQVEsK0RBQWUsQ0FBQyxDQUFDO0FBQ3pCLEtBQUs7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B1c2VyZnJvc3Rpbmcvc3ByaW5rbGUtYWRtaW4vYXBwL2Fzc2V0cy9wYWdlLnVzZXJzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdXNlcmZyb3N0aW5nL3Nwcmlua2xlLWFkbWluL2FwcC9hc3NldHMvdXNlcmZyb3N0aW5nL2pzL3BhZ2VzL3VzZXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInJlcXVpcmUoJy4vdXNlcmZyb3N0aW5nL2pzL3BhZ2VzL3VzZXJzJyk7XG5yZXF1aXJlKCdAdXNlcmZyb3N0aW5nL3RoZW1lLWFkbWlubHRlL2FwcC9hc3NldHMvdXNlcmZyb3N0aW5nL2pzL3VmLWNvbGxlY3Rpb24nKTtcbnJlcXVpcmUoJ0B1c2VyZnJvc3RpbmcvdGhlbWUtYWRtaW5sdGUvYXBwL2Fzc2V0cy91c2VyZnJvc3RpbmcvY3NzL3VmLWNvbGxlY3Rpb24uY3NzJyk7IiwiLyoqXG4gKiBQYWdlLXNwZWNpZmljIEphdmFzY3JpcHQgZmlsZS4gIFNob3VsZCBnZW5lcmFsbHkgYmUgaW5jbHVkZWQgYXMgYSBzZXBhcmF0ZSBhc3NldCBidW5kbGUgaW4geW91ciBwYWdlIHRlbXBsYXRlLlxuICogZXhhbXBsZToge3sgYXNzZXRzLmpzKCdqcy9wYWdlcy9zaWduLWluLW9yLXJlZ2lzdGVyJykgfCByYXcgfX1cbiAqXG4gKiBUaGlzIHNjcmlwdCBkZXBlbmRzIG9uIHdpZGdldHMvdXNlcnMuanMsIHVmLXRhYmxlLmpzLCBtb21lbnQuanMsIGhhbmRsZWJhcnMtaGVscGVycy5qc1xuICpcbiAqIFRhcmdldCBwYWdlOiAvdXNlcnNcbiAqL1xuaW1wb3J0IHsgYmluZFVzZXJDcmVhdGlvbkJ1dHRvbiwgYmluZFVzZXJCdXR0b25zIH0gZnJvbSBcIi4uL3dpZGdldHMvdXNlcnNcIjtcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgIC8vIFNldCB1cCB0YWJsZSBvZiB1c2Vyc1xuICAgICQoXCIjd2lkZ2V0LXVzZXJzXCIpLnVmVGFibGUoe1xuICAgICAgICBkYXRhVXJsOiBzaXRlLnVyaS5wdWJsaWMgKyBcIi9hcGkvdXNlcnNcIixcbiAgICAgICAgdXNlTG9hZGluZ1RyYW5zaXRpb246IHNpdGUudWZfdGFibGUudXNlX2xvYWRpbmdfdHJhbnNpdGlvbixcbiAgICB9KTtcblxuICAgIC8vIEJpbmQgY3JlYXRpb24gYnV0dG9uXG4gICAgYmluZFVzZXJDcmVhdGlvbkJ1dHRvbigkKFwiI3dpZGdldC11c2Vyc1wiKSk7XG5cbiAgICAvLyBCaW5kIHRhYmxlIGJ1dHRvbnNcbiAgICAkKFwiI3dpZGdldC11c2Vyc1wiKS5vbihcInBhZ2VyQ29tcGxldGUudWZUYWJsZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGJpbmRVc2VyQnV0dG9ucygkKHRoaXMpKTtcbiAgICB9KTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9