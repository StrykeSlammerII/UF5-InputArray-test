(self["webpackChunk"] = self["webpackChunk"] || []).push([["page.groups"],{

/***/ "./node_modules/@userfrosting/sprinkle-admin/app/assets/page.groups.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@userfrosting/sprinkle-admin/app/assets/page.groups.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__.g.getSlug = __webpack_require__(/*! speakingurl */ "./node_modules/speakingurl/index.js");
__webpack_require__(/*! fontawesome-iconpicker/dist/js/fontawesome-iconpicker.js */ "./node_modules/fontawesome-iconpicker/dist/js/fontawesome-iconpicker.js");
__webpack_require__(/*! fontawesome-iconpicker/dist/css/fontawesome-iconpicker.css */ "./node_modules/fontawesome-iconpicker/dist/css/fontawesome-iconpicker.css");
__webpack_require__(/*! ./userfrosting/js/pages/groups */ "./node_modules/@userfrosting/sprinkle-admin/app/assets/userfrosting/js/pages/groups.js");

/***/ }),

/***/ "./node_modules/@userfrosting/sprinkle-admin/app/assets/userfrosting/js/pages/groups.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@userfrosting/sprinkle-admin/app/assets/userfrosting/js/pages/groups.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _widgets_groups__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../widgets/groups */ "./node_modules/@userfrosting/sprinkle-admin/app/assets/userfrosting/js/widgets/groups.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/**
 * Page-specific Javascript file.  Should generally be included as a separate asset bundle in your page template.
 * example: {{ assets.js('js/pages/sign-in-or-register') | raw }}
 *
 * This script depends on widgets/groups.js, uf-table.js, moment.js, handlebars-helpers.js
 *
 * Target page: /groups
 */


$(document).ready(function() {

    $("#widget-groups").ufTable({
        dataUrl: site.uri.public + "/api/groups",
        useLoadingTransition: site.uf_table.use_loading_transition
    });

    // Bind creation button
    (0,_widgets_groups__WEBPACK_IMPORTED_MODULE_0__.bindGroupCreationButton)($("#widget-groups"));

    // Bind table buttons
    $("#widget-groups").on("pagerComplete.ufTable", function () {
        (0,_widgets_groups__WEBPACK_IMPORTED_MODULE_0__.bindGroupButtons)($(this));
    });
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_speakingurl_index_js","vendors-node_modules_userfrosting_sprinkle-admin_app_assets_userfrosting_js_widgets_groups_js-786dee"], () => (__webpack_exec__("./node_modules/@userfrosting/sprinkle-admin/app/assets/page.groups.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5ncm91cHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxxQkFBTSxXQUFXLG1CQUFPLENBQUMsd0RBQWE7QUFDdEMsbUJBQU8sQ0FBQyx5SUFBMEQ7QUFDbEUsbUJBQU8sQ0FBQyw2SUFBNEQ7QUFDcEUsbUJBQU8sQ0FBQyw4SEFBZ0M7Ozs7Ozs7Ozs7Ozs7O0FDSHhDO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUM4RTs7QUFFOUUsQ0FBQzs7QUFFRCxJQUFJLENBQUM7QUFDTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLElBQUksd0VBQXVCLENBQUMsQ0FBQzs7QUFFN0I7QUFDQSxJQUFJLENBQUM7QUFDTCxRQUFRLGlFQUFnQixDQUFDLENBQUM7QUFDMUIsS0FBSztBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHVzZXJmcm9zdGluZy9zcHJpbmtsZS1hZG1pbi9hcHAvYXNzZXRzL3BhZ2UuZ3JvdXBzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdXNlcmZyb3N0aW5nL3Nwcmlua2xlLWFkbWluL2FwcC9hc3NldHMvdXNlcmZyb3N0aW5nL2pzL3BhZ2VzL2dyb3Vwcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJnbG9iYWwuZ2V0U2x1ZyA9IHJlcXVpcmUoJ3NwZWFraW5ndXJsJyk7XG5yZXF1aXJlKCdmb250YXdlc29tZS1pY29ucGlja2VyL2Rpc3QvanMvZm9udGF3ZXNvbWUtaWNvbnBpY2tlci5qcycpO1xucmVxdWlyZSgnZm9udGF3ZXNvbWUtaWNvbnBpY2tlci9kaXN0L2Nzcy9mb250YXdlc29tZS1pY29ucGlja2VyLmNzcycpO1xucmVxdWlyZSgnLi91c2VyZnJvc3RpbmcvanMvcGFnZXMvZ3JvdXBzJyk7IiwiLyoqXG4gKiBQYWdlLXNwZWNpZmljIEphdmFzY3JpcHQgZmlsZS4gIFNob3VsZCBnZW5lcmFsbHkgYmUgaW5jbHVkZWQgYXMgYSBzZXBhcmF0ZSBhc3NldCBidW5kbGUgaW4geW91ciBwYWdlIHRlbXBsYXRlLlxuICogZXhhbXBsZToge3sgYXNzZXRzLmpzKCdqcy9wYWdlcy9zaWduLWluLW9yLXJlZ2lzdGVyJykgfCByYXcgfX1cbiAqXG4gKiBUaGlzIHNjcmlwdCBkZXBlbmRzIG9uIHdpZGdldHMvZ3JvdXBzLmpzLCB1Zi10YWJsZS5qcywgbW9tZW50LmpzLCBoYW5kbGViYXJzLWhlbHBlcnMuanNcbiAqXG4gKiBUYXJnZXQgcGFnZTogL2dyb3Vwc1xuICovXG5pbXBvcnQgeyBiaW5kR3JvdXBDcmVhdGlvbkJ1dHRvbiwgYmluZEdyb3VwQnV0dG9ucyB9IGZyb20gXCIuLi93aWRnZXRzL2dyb3Vwc1wiO1xuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcblxuICAgICQoXCIjd2lkZ2V0LWdyb3Vwc1wiKS51ZlRhYmxlKHtcbiAgICAgICAgZGF0YVVybDogc2l0ZS51cmkucHVibGljICsgXCIvYXBpL2dyb3Vwc1wiLFxuICAgICAgICB1c2VMb2FkaW5nVHJhbnNpdGlvbjogc2l0ZS51Zl90YWJsZS51c2VfbG9hZGluZ190cmFuc2l0aW9uXG4gICAgfSk7XG5cbiAgICAvLyBCaW5kIGNyZWF0aW9uIGJ1dHRvblxuICAgIGJpbmRHcm91cENyZWF0aW9uQnV0dG9uKCQoXCIjd2lkZ2V0LWdyb3Vwc1wiKSk7XG5cbiAgICAvLyBCaW5kIHRhYmxlIGJ1dHRvbnNcbiAgICAkKFwiI3dpZGdldC1ncm91cHNcIikub24oXCJwYWdlckNvbXBsZXRlLnVmVGFibGVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBiaW5kR3JvdXBCdXR0b25zKCQodGhpcykpO1xuICAgIH0pO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=