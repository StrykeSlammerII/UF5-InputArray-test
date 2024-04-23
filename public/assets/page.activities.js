(self["webpackChunk"] = self["webpackChunk"] || []).push([["page.activities"],{

/***/ "./node_modules/@userfrosting/sprinkle-admin/app/assets/page.activities.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@userfrosting/sprinkle-admin/app/assets/page.activities.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./userfrosting/js/pages/activities */ "./node_modules/@userfrosting/sprinkle-admin/app/assets/userfrosting/js/pages/activities.js");

/***/ }),

/***/ "./node_modules/@userfrosting/sprinkle-admin/app/assets/userfrosting/js/pages/activities.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@userfrosting/sprinkle-admin/app/assets/userfrosting/js/pages/activities.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/**
 * Page-specific Javascript file.  Should generally be included as a separate asset bundle in your page template.
 * example: {{ assets.js('js/pages/sign-in-or-register') | raw }}
 *
 * This script depends on uf-table.js, moment.js, handlebars-helpers.js
 *
 * Target page: /activities
 */

$(document).ready(function() {
    // Set up table of activities
    $("#widget-activities").ufTable({
        dataUrl: site.uri.public + "/api/activities",
        useLoadingTransition: site.uf_table.use_loading_transition
    });
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js"], () => (__webpack_exec__("./node_modules/@userfrosting/sprinkle-admin/app/assets/page.activities.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5hY3Rpdml0aWVzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsbUJBQU8sQ0FBQyxzSUFBb0M7Ozs7Ozs7Ozs7O0FDQTVDO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDO0FBQ0Q7QUFDQSxJQUFJLENBQUM7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHVzZXJmcm9zdGluZy9zcHJpbmtsZS1hZG1pbi9hcHAvYXNzZXRzL3BhZ2UuYWN0aXZpdGllcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHVzZXJmcm9zdGluZy9zcHJpbmtsZS1hZG1pbi9hcHAvYXNzZXRzL3VzZXJmcm9zdGluZy9qcy9wYWdlcy9hY3Rpdml0aWVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInJlcXVpcmUoJy4vdXNlcmZyb3N0aW5nL2pzL3BhZ2VzL2FjdGl2aXRpZXMnKTsiLCIvKipcbiAqIFBhZ2Utc3BlY2lmaWMgSmF2YXNjcmlwdCBmaWxlLiAgU2hvdWxkIGdlbmVyYWxseSBiZSBpbmNsdWRlZCBhcyBhIHNlcGFyYXRlIGFzc2V0IGJ1bmRsZSBpbiB5b3VyIHBhZ2UgdGVtcGxhdGUuXG4gKiBleGFtcGxlOiB7eyBhc3NldHMuanMoJ2pzL3BhZ2VzL3NpZ24taW4tb3ItcmVnaXN0ZXInKSB8IHJhdyB9fVxuICpcbiAqIFRoaXMgc2NyaXB0IGRlcGVuZHMgb24gdWYtdGFibGUuanMsIG1vbWVudC5qcywgaGFuZGxlYmFycy1oZWxwZXJzLmpzXG4gKlxuICogVGFyZ2V0IHBhZ2U6IC9hY3Rpdml0aWVzXG4gKi9cblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgLy8gU2V0IHVwIHRhYmxlIG9mIGFjdGl2aXRpZXNcbiAgICAkKFwiI3dpZGdldC1hY3Rpdml0aWVzXCIpLnVmVGFibGUoe1xuICAgICAgICBkYXRhVXJsOiBzaXRlLnVyaS5wdWJsaWMgKyBcIi9hcGkvYWN0aXZpdGllc1wiLFxuICAgICAgICB1c2VMb2FkaW5nVHJhbnNpdGlvbjogc2l0ZS51Zl90YWJsZS51c2VfbG9hZGluZ190cmFuc2l0aW9uXG4gICAgfSk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==