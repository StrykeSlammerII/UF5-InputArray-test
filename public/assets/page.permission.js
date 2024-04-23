(self["webpackChunk"] = self["webpackChunk"] || []).push([["page.permission"],{

/***/ "./node_modules/@userfrosting/sprinkle-admin/app/assets/page.permission.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@userfrosting/sprinkle-admin/app/assets/page.permission.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./userfrosting/js/pages/permission */ "./node_modules/@userfrosting/sprinkle-admin/app/assets/userfrosting/js/pages/permission.js");

/***/ }),

/***/ "./node_modules/@userfrosting/sprinkle-admin/app/assets/userfrosting/js/pages/permission.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@userfrosting/sprinkle-admin/app/assets/userfrosting/js/pages/permission.js ***!
  \**************************************************************************************************/
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
 * Target page: /permissions/p/{id}
 */


$(document).ready(function() {
    $("#widget-permission-users").ufTable({
        dataUrl: site.uri.public + '/api/permissions/p/' + page.permission_id + '/users',
        useLoadingTransition: site.uf_table.use_loading_transition
    });

    // Bind table buttons
    $("#widget-permission-users").on("pagerComplete.ufTable", function () {
        (0,_widgets_users__WEBPACK_IMPORTED_MODULE_0__.bindUserButtons)($(this));
    });
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_userfrosting_sprinkle-admin_app_assets_userfrosting_js_widgets_users_js"], () => (__webpack_exec__("./node_modules/@userfrosting/sprinkle-admin/app/assets/page.permission.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5wZXJtaXNzaW9uLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsbUJBQU8sQ0FBQyxzSUFBb0M7Ozs7Ozs7Ozs7Ozs7O0FDQTVDO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ21EOztBQUVuRCxDQUFDO0FBQ0QsSUFBSSxDQUFDO0FBQ0w7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxJQUFJLENBQUM7QUFDTCxRQUFRLCtEQUFlLENBQUMsQ0FBQztBQUN6QixLQUFLO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdXNlcmZyb3N0aW5nL3Nwcmlua2xlLWFkbWluL2FwcC9hc3NldHMvcGFnZS5wZXJtaXNzaW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdXNlcmZyb3N0aW5nL3Nwcmlua2xlLWFkbWluL2FwcC9hc3NldHMvdXNlcmZyb3N0aW5nL2pzL3BhZ2VzL3Blcm1pc3Npb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsicmVxdWlyZSgnLi91c2VyZnJvc3RpbmcvanMvcGFnZXMvcGVybWlzc2lvbicpOyIsIi8qKlxuICogUGFnZS1zcGVjaWZpYyBKYXZhc2NyaXB0IGZpbGUuICBTaG91bGQgZ2VuZXJhbGx5IGJlIGluY2x1ZGVkIGFzIGEgc2VwYXJhdGUgYXNzZXQgYnVuZGxlIGluIHlvdXIgcGFnZSB0ZW1wbGF0ZS5cbiAqIGV4YW1wbGU6IHt7IGFzc2V0cy5qcygnanMvcGFnZXMvc2lnbi1pbi1vci1yZWdpc3RlcicpIHwgcmF3IH19XG4gKlxuICogVGhpcyBzY3JpcHQgZGVwZW5kcyBvbiB1Zi10YWJsZS5qcywgbW9tZW50LmpzLCBoYW5kbGViYXJzLWhlbHBlcnMuanNcbiAqXG4gKiBUYXJnZXQgcGFnZTogL3Blcm1pc3Npb25zL3Ave2lkfVxuICovXG5pbXBvcnQgeyBiaW5kVXNlckJ1dHRvbnMgfSBmcm9tIFwiLi4vd2lkZ2V0cy91c2Vyc1wiO1xuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICAkKFwiI3dpZGdldC1wZXJtaXNzaW9uLXVzZXJzXCIpLnVmVGFibGUoe1xuICAgICAgICBkYXRhVXJsOiBzaXRlLnVyaS5wdWJsaWMgKyAnL2FwaS9wZXJtaXNzaW9ucy9wLycgKyBwYWdlLnBlcm1pc3Npb25faWQgKyAnL3VzZXJzJyxcbiAgICAgICAgdXNlTG9hZGluZ1RyYW5zaXRpb246IHNpdGUudWZfdGFibGUudXNlX2xvYWRpbmdfdHJhbnNpdGlvblxuICAgIH0pO1xuXG4gICAgLy8gQmluZCB0YWJsZSBidXR0b25zXG4gICAgJChcIiN3aWRnZXQtcGVybWlzc2lvbi11c2Vyc1wiKS5vbihcInBhZ2VyQ29tcGxldGUudWZUYWJsZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGJpbmRVc2VyQnV0dG9ucygkKHRoaXMpKTtcbiAgICB9KTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9