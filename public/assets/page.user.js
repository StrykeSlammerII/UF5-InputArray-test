(self["webpackChunk"] = self["webpackChunk"] || []).push([["page.user"],{

/***/ "./node_modules/@userfrosting/sprinkle-admin/app/assets/page.user.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@userfrosting/sprinkle-admin/app/assets/page.user.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./userfrosting/js/pages/user */ "./node_modules/@userfrosting/sprinkle-admin/app/assets/userfrosting/js/pages/user.js");
__webpack_require__(/*! @userfrosting/theme-adminlte/app/assets/userfrosting/js/uf-collection */ "./node_modules/@userfrosting/theme-adminlte/app/assets/userfrosting/js/uf-collection.js");
__webpack_require__(/*! @userfrosting/theme-adminlte/app/assets/userfrosting/css/uf-collection.css */ "./node_modules/@userfrosting/theme-adminlte/app/assets/userfrosting/css/uf-collection.css");


/***/ }),

/***/ "./node_modules/@userfrosting/sprinkle-admin/app/assets/userfrosting/js/pages/user.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@userfrosting/sprinkle-admin/app/assets/userfrosting/js/pages/user.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _widgets_users__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../widgets/users */ "./node_modules/@userfrosting/sprinkle-admin/app/assets/userfrosting/js/widgets/users.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/**
 * Page-specific Javascript file.  Should generally be included as a separate asset bundle in your page template.
 * example: {{ assets.js('js/pages/sign-in-or-register') | raw }}
 *
 * This script depends on uf-table.js, moment.js, handlebars-helpers.js
 *
 * Target page: /users/u/{user_name}
 */


$(document).ready(function() {
    // Control buttons
    (0,_widgets_users__WEBPACK_IMPORTED_MODULE_0__.bindUserButtons)($("#view-user"), { delete_redirect: page.delete_redirect });

    // Table of activities
    $("#widget-user-activities").ufTable({
        dataUrl: site.uri.public + '/api/users/u/' + page.user_name + '/activities',
        useLoadingTransition: site.uf_table.use_loading_transition
    });

    // Table of permissions
    $("#widget-permissions").ufTable({
        dataUrl: site.uri.public + '/api/users/u/' + page.user_name + '/permissions',
        useLoadingTransition: site.uf_table.use_loading_transition
    });
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_userfrosting_sprinkle-admin_app_assets_userfrosting_js_widgets_users_js","vendors-node_modules_userfrosting_theme-adminlte_app_assets_userfrosting_js_uf-collection_js--ca7787"], () => (__webpack_exec__("./node_modules/@userfrosting/sprinkle-admin/app/assets/page.user.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS51c2VyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsbUJBQU8sQ0FBQywwSEFBOEI7QUFDdEMsbUJBQU8sQ0FBQyxzS0FBdUU7QUFDL0UsbUJBQU8sQ0FBQyw2S0FBNEU7Ozs7Ozs7Ozs7Ozs7OztBQ0ZwRjtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNtRDs7QUFFbkQsQ0FBQztBQUNEO0FBQ0EsSUFBSSwrREFBZSxDQUFDLENBQUMsa0JBQWtCLHVDQUF1Qzs7QUFFOUU7QUFDQSxJQUFJLENBQUM7QUFDTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLElBQUksQ0FBQztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdXNlcmZyb3N0aW5nL3Nwcmlua2xlLWFkbWluL2FwcC9hc3NldHMvcGFnZS51c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdXNlcmZyb3N0aW5nL3Nwcmlua2xlLWFkbWluL2FwcC9hc3NldHMvdXNlcmZyb3N0aW5nL2pzL3BhZ2VzL3VzZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsicmVxdWlyZSgnLi91c2VyZnJvc3RpbmcvanMvcGFnZXMvdXNlcicpO1xucmVxdWlyZSgnQHVzZXJmcm9zdGluZy90aGVtZS1hZG1pbmx0ZS9hcHAvYXNzZXRzL3VzZXJmcm9zdGluZy9qcy91Zi1jb2xsZWN0aW9uJyk7XG5yZXF1aXJlKCdAdXNlcmZyb3N0aW5nL3RoZW1lLWFkbWlubHRlL2FwcC9hc3NldHMvdXNlcmZyb3N0aW5nL2Nzcy91Zi1jb2xsZWN0aW9uLmNzcycpO1xuIiwiLyoqXG4gKiBQYWdlLXNwZWNpZmljIEphdmFzY3JpcHQgZmlsZS4gIFNob3VsZCBnZW5lcmFsbHkgYmUgaW5jbHVkZWQgYXMgYSBzZXBhcmF0ZSBhc3NldCBidW5kbGUgaW4geW91ciBwYWdlIHRlbXBsYXRlLlxuICogZXhhbXBsZToge3sgYXNzZXRzLmpzKCdqcy9wYWdlcy9zaWduLWluLW9yLXJlZ2lzdGVyJykgfCByYXcgfX1cbiAqXG4gKiBUaGlzIHNjcmlwdCBkZXBlbmRzIG9uIHVmLXRhYmxlLmpzLCBtb21lbnQuanMsIGhhbmRsZWJhcnMtaGVscGVycy5qc1xuICpcbiAqIFRhcmdldCBwYWdlOiAvdXNlcnMvdS97dXNlcl9uYW1lfVxuICovXG5pbXBvcnQgeyBiaW5kVXNlckJ1dHRvbnMgfSBmcm9tIFwiLi4vd2lkZ2V0cy91c2Vyc1wiO1xuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICAvLyBDb250cm9sIGJ1dHRvbnNcbiAgICBiaW5kVXNlckJ1dHRvbnMoJChcIiN2aWV3LXVzZXJcIiksIHsgZGVsZXRlX3JlZGlyZWN0OiBwYWdlLmRlbGV0ZV9yZWRpcmVjdCB9KTtcblxuICAgIC8vIFRhYmxlIG9mIGFjdGl2aXRpZXNcbiAgICAkKFwiI3dpZGdldC11c2VyLWFjdGl2aXRpZXNcIikudWZUYWJsZSh7XG4gICAgICAgIGRhdGFVcmw6IHNpdGUudXJpLnB1YmxpYyArICcvYXBpL3VzZXJzL3UvJyArIHBhZ2UudXNlcl9uYW1lICsgJy9hY3Rpdml0aWVzJyxcbiAgICAgICAgdXNlTG9hZGluZ1RyYW5zaXRpb246IHNpdGUudWZfdGFibGUudXNlX2xvYWRpbmdfdHJhbnNpdGlvblxuICAgIH0pO1xuXG4gICAgLy8gVGFibGUgb2YgcGVybWlzc2lvbnNcbiAgICAkKFwiI3dpZGdldC1wZXJtaXNzaW9uc1wiKS51ZlRhYmxlKHtcbiAgICAgICAgZGF0YVVybDogc2l0ZS51cmkucHVibGljICsgJy9hcGkvdXNlcnMvdS8nICsgcGFnZS51c2VyX25hbWUgKyAnL3Blcm1pc3Npb25zJyxcbiAgICAgICAgdXNlTG9hZGluZ1RyYW5zaXRpb246IHNpdGUudWZfdGFibGUudXNlX2xvYWRpbmdfdHJhbnNpdGlvblxuICAgIH0pO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=