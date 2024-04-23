(self["webpackChunk"] = self["webpackChunk"] || []).push([["page.group"],{

/***/ "./node_modules/@userfrosting/sprinkle-admin/app/assets/page.group.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@userfrosting/sprinkle-admin/app/assets/page.group.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__.g.getSlug = __webpack_require__(/*! speakingurl */ "./node_modules/speakingurl/index.js");
__webpack_require__(/*! fontawesome-iconpicker/dist/js/fontawesome-iconpicker.js */ "./node_modules/fontawesome-iconpicker/dist/js/fontawesome-iconpicker.js");
__webpack_require__(/*! fontawesome-iconpicker/dist/css/fontawesome-iconpicker.css */ "./node_modules/fontawesome-iconpicker/dist/css/fontawesome-iconpicker.css");
__webpack_require__(/*! ./userfrosting/js/pages/group */ "./node_modules/@userfrosting/sprinkle-admin/app/assets/userfrosting/js/pages/group.js");
__webpack_require__(/*! @userfrosting/theme-adminlte/app/assets/userfrosting/js/uf-collection */ "./node_modules/@userfrosting/theme-adminlte/app/assets/userfrosting/js/uf-collection.js");
__webpack_require__(/*! @userfrosting/theme-adminlte/app/assets/userfrosting/css/uf-collection.css */ "./node_modules/@userfrosting/theme-adminlte/app/assets/userfrosting/css/uf-collection.css");

/***/ }),

/***/ "./node_modules/@userfrosting/sprinkle-admin/app/assets/userfrosting/js/pages/group.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@userfrosting/sprinkle-admin/app/assets/userfrosting/js/pages/group.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _widgets_users__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../widgets/users */ "./node_modules/@userfrosting/sprinkle-admin/app/assets/userfrosting/js/widgets/users.js");
/* harmony import */ var _widgets_groups__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../widgets/groups */ "./node_modules/@userfrosting/sprinkle-admin/app/assets/userfrosting/js/widgets/groups.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/**
 * Page-specific Javascript file.  Should generally be included as a separate asset bundle in your page template.
 * example: {{ assets.js('js/pages/sign-in-or-register') | raw }}
 *
 * This script depends on uf-table.js, moment.js, handlebars-helpers.js
 *
 * Target page: /groups/g/{slug}
 */




$(document).ready(function() {
    // Control buttons
    (0,_widgets_groups__WEBPACK_IMPORTED_MODULE_1__.bindGroupButtons)($("#view-group"), { delete_redirect: page.delete_redirect });

    // Table of users in this group
    $("#widget-group-users").ufTable({
        dataUrl: site.uri.public + '/api/groups/g/' + page.group_slug + '/users',
        useLoadingTransition: site.uf_table.use_loading_transition
    });

    // Bind user table buttons
    $("#widget-group-users").on("pagerComplete.ufTable", function () {
        (0,_widgets_users__WEBPACK_IMPORTED_MODULE_0__.bindUserButtons)($(this));
    });

    $('.icp').iconpicker();
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_userfrosting_sprinkle-admin_app_assets_userfrosting_js_widgets_users_js","vendors-node_modules_userfrosting_theme-adminlte_app_assets_userfrosting_js_uf-collection_js--ca7787","vendors-node_modules_speakingurl_index_js","vendors-node_modules_userfrosting_sprinkle-admin_app_assets_userfrosting_js_widgets_groups_js-786dee"], () => (__webpack_exec__("./node_modules/@userfrosting/sprinkle-admin/app/assets/page.group.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5ncm91cC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHFCQUFNLFdBQVcsbUJBQU8sQ0FBQyx3REFBYTtBQUN0QyxtQkFBTyxDQUFDLHlJQUEwRDtBQUNsRSxtQkFBTyxDQUFDLDZJQUE0RDtBQUNwRSxtQkFBTyxDQUFDLDRIQUErQjtBQUN2QyxtQkFBTyxDQUFDLHNLQUF1RTtBQUMvRSxtQkFBTyxDQUFDLDZLQUE0RTs7Ozs7Ozs7Ozs7Ozs7O0FDTHBGO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCOztBQUVtRDtBQUNFOztBQUVyRCxDQUFDO0FBQ0Q7QUFDQSxJQUFJLGlFQUFnQixDQUFDLENBQUMsbUJBQW1CLHVDQUF1Qzs7QUFFaEY7QUFDQSxJQUFJLENBQUM7QUFDTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLElBQUksQ0FBQztBQUNMLFFBQVEsK0RBQWUsQ0FBQyxDQUFDO0FBQ3pCLEtBQUs7O0FBRUwsSUFBSSxDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdXNlcmZyb3N0aW5nL3Nwcmlua2xlLWFkbWluL2FwcC9hc3NldHMvcGFnZS5ncm91cC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHVzZXJmcm9zdGluZy9zcHJpbmtsZS1hZG1pbi9hcHAvYXNzZXRzL3VzZXJmcm9zdGluZy9qcy9wYWdlcy9ncm91cC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJnbG9iYWwuZ2V0U2x1ZyA9IHJlcXVpcmUoJ3NwZWFraW5ndXJsJyk7XG5yZXF1aXJlKCdmb250YXdlc29tZS1pY29ucGlja2VyL2Rpc3QvanMvZm9udGF3ZXNvbWUtaWNvbnBpY2tlci5qcycpO1xucmVxdWlyZSgnZm9udGF3ZXNvbWUtaWNvbnBpY2tlci9kaXN0L2Nzcy9mb250YXdlc29tZS1pY29ucGlja2VyLmNzcycpO1xucmVxdWlyZSgnLi91c2VyZnJvc3RpbmcvanMvcGFnZXMvZ3JvdXAnKTtcbnJlcXVpcmUoJ0B1c2VyZnJvc3RpbmcvdGhlbWUtYWRtaW5sdGUvYXBwL2Fzc2V0cy91c2VyZnJvc3RpbmcvanMvdWYtY29sbGVjdGlvbicpO1xucmVxdWlyZSgnQHVzZXJmcm9zdGluZy90aGVtZS1hZG1pbmx0ZS9hcHAvYXNzZXRzL3VzZXJmcm9zdGluZy9jc3MvdWYtY29sbGVjdGlvbi5jc3MnKTsiLCIvKipcbiAqIFBhZ2Utc3BlY2lmaWMgSmF2YXNjcmlwdCBmaWxlLiAgU2hvdWxkIGdlbmVyYWxseSBiZSBpbmNsdWRlZCBhcyBhIHNlcGFyYXRlIGFzc2V0IGJ1bmRsZSBpbiB5b3VyIHBhZ2UgdGVtcGxhdGUuXG4gKiBleGFtcGxlOiB7eyBhc3NldHMuanMoJ2pzL3BhZ2VzL3NpZ24taW4tb3ItcmVnaXN0ZXInKSB8IHJhdyB9fVxuICpcbiAqIFRoaXMgc2NyaXB0IGRlcGVuZHMgb24gdWYtdGFibGUuanMsIG1vbWVudC5qcywgaGFuZGxlYmFycy1oZWxwZXJzLmpzXG4gKlxuICogVGFyZ2V0IHBhZ2U6IC9ncm91cHMvZy97c2x1Z31cbiAqL1xuXG5pbXBvcnQgeyBiaW5kVXNlckJ1dHRvbnMgfSBmcm9tIFwiLi4vd2lkZ2V0cy91c2Vyc1wiO1xuaW1wb3J0IHsgYmluZEdyb3VwQnV0dG9ucyB9IGZyb20gXCIuLi93aWRnZXRzL2dyb3Vwc1wiO1xuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICAvLyBDb250cm9sIGJ1dHRvbnNcbiAgICBiaW5kR3JvdXBCdXR0b25zKCQoXCIjdmlldy1ncm91cFwiKSwgeyBkZWxldGVfcmVkaXJlY3Q6IHBhZ2UuZGVsZXRlX3JlZGlyZWN0IH0pO1xuXG4gICAgLy8gVGFibGUgb2YgdXNlcnMgaW4gdGhpcyBncm91cFxuICAgICQoXCIjd2lkZ2V0LWdyb3VwLXVzZXJzXCIpLnVmVGFibGUoe1xuICAgICAgICBkYXRhVXJsOiBzaXRlLnVyaS5wdWJsaWMgKyAnL2FwaS9ncm91cHMvZy8nICsgcGFnZS5ncm91cF9zbHVnICsgJy91c2VycycsXG4gICAgICAgIHVzZUxvYWRpbmdUcmFuc2l0aW9uOiBzaXRlLnVmX3RhYmxlLnVzZV9sb2FkaW5nX3RyYW5zaXRpb25cbiAgICB9KTtcblxuICAgIC8vIEJpbmQgdXNlciB0YWJsZSBidXR0b25zXG4gICAgJChcIiN3aWRnZXQtZ3JvdXAtdXNlcnNcIikub24oXCJwYWdlckNvbXBsZXRlLnVmVGFibGVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBiaW5kVXNlckJ1dHRvbnMoJCh0aGlzKSk7XG4gICAgfSk7XG5cbiAgICAkKCcuaWNwJykuaWNvbnBpY2tlcigpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=