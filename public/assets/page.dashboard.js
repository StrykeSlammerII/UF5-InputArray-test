(self["webpackChunk"] = self["webpackChunk"] || []).push([["page.dashboard"],{

/***/ "./node_modules/@userfrosting/sprinkle-admin/app/assets/page.dashboard.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@userfrosting/sprinkle-admin/app/assets/page.dashboard.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./userfrosting/js/pages/dashboard */ "./node_modules/@userfrosting/sprinkle-admin/app/assets/userfrosting/js/pages/dashboard.js");

/***/ }),

/***/ "./node_modules/@userfrosting/sprinkle-admin/app/assets/userfrosting/js/pages/dashboard.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@userfrosting/sprinkle-admin/app/assets/userfrosting/js/pages/dashboard.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _widgets_users__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../widgets/users */ "./node_modules/@userfrosting/sprinkle-admin/app/assets/userfrosting/js/widgets/users.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/**
 * Page-specific Javascript file.  Should generally be included as a separate asset bundle in your page template.
 * example: {{ assets.js('js/pages/sign-in-or-register') | raw }}
 *
 * Target page: /dashboard
 */


$(document).ready(function () {
    $(".js-clear-cache").click(function (e) {
        e.preventDefault();

        $("body").ufModal({
            sourceUrl: site.uri.public + "/modals/dashboard/clear-cache",
            ajaxParams: {
                slug: $(this).data("slug"),
            },
            msgTarget: $("#alerts-page"),
        });

        $("body").on("renderSuccess.ufModal", function (data) {
            var modal = $(this).ufModal("getModal");
            var form = modal.find(".js-form");

            form.ufForm().on("submitSuccess.ufForm", function () {
                // Reload page on success
                window.location.reload();
            });
        });
    });

    // Table of site activities
    var activities = $("#widget-activities");
    if (activities.length) {
        activities.ufTable({
            dataUrl: site.uri.public + "/api/activities",
            useLoadingTransition: site.uf_table.use_loading_transition,
        });
    }

    // Table of users in current user's group
    var groupUsers = $("#widget-group-users");
    if (groupUsers.length) {
        groupUsers.ufTable({
            dataUrl: site.uri.public + "/api/groups/g/" + page.group_slug + "/users",
            useLoadingTransition: site.uf_table.use_loading_transition,
        });

        // Bind user creation button
        (0,_widgets_users__WEBPACK_IMPORTED_MODULE_0__.bindUserCreationButton)(groupUsers);

        // Bind user table buttons
        groupUsers.on("pagerComplete.ufTable", function () {
            (0,_widgets_users__WEBPACK_IMPORTED_MODULE_0__.bindUserButtons)($(this));
        });
    }
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_userfrosting_sprinkle-admin_app_assets_userfrosting_js_widgets_users_js"], () => (__webpack_exec__("./node_modules/@userfrosting/sprinkle-admin/app/assets/page.dashboard.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5kYXNoYm9hcmQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxtQkFBTyxDQUFDLG9JQUFtQzs7Ozs7Ozs7Ozs7Ozs7QUNBM0M7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDMkU7O0FBRTNFLENBQUM7QUFDRCxJQUFJLENBQUM7QUFDTDs7QUFFQSxRQUFRLENBQUM7QUFDVDtBQUNBO0FBQ0Esc0JBQXNCLENBQUM7QUFDdkIsYUFBYTtBQUNiLHVCQUF1QixDQUFDO0FBQ3hCLFNBQVM7O0FBRVQsUUFBUSxDQUFDO0FBQ1Qsd0JBQXdCLENBQUM7QUFDekI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVCxLQUFLOztBQUVMO0FBQ0EscUJBQXFCLENBQUM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQSxxQkFBcUIsQ0FBQztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQSxRQUFRLHNFQUFzQjs7QUFFOUI7QUFDQTtBQUNBLFlBQVksK0RBQWUsQ0FBQyxDQUFDO0FBQzdCLFNBQVM7QUFDVDtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHVzZXJmcm9zdGluZy9zcHJpbmtsZS1hZG1pbi9hcHAvYXNzZXRzL3BhZ2UuZGFzaGJvYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdXNlcmZyb3N0aW5nL3Nwcmlua2xlLWFkbWluL2FwcC9hc3NldHMvdXNlcmZyb3N0aW5nL2pzL3BhZ2VzL2Rhc2hib2FyZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJyZXF1aXJlKCcuL3VzZXJmcm9zdGluZy9qcy9wYWdlcy9kYXNoYm9hcmQnKTsiLCIvKipcbiAqIFBhZ2Utc3BlY2lmaWMgSmF2YXNjcmlwdCBmaWxlLiAgU2hvdWxkIGdlbmVyYWxseSBiZSBpbmNsdWRlZCBhcyBhIHNlcGFyYXRlIGFzc2V0IGJ1bmRsZSBpbiB5b3VyIHBhZ2UgdGVtcGxhdGUuXG4gKiBleGFtcGxlOiB7eyBhc3NldHMuanMoJ2pzL3BhZ2VzL3NpZ24taW4tb3ItcmVnaXN0ZXInKSB8IHJhdyB9fVxuICpcbiAqIFRhcmdldCBwYWdlOiAvZGFzaGJvYXJkXG4gKi9cbmltcG9ydCB7IGJpbmRVc2VyQ3JlYXRpb25CdXR0b24sIGJpbmRVc2VyQnV0dG9ucyB9IGZyb20gXCIuLi93aWRnZXRzL3VzZXJzXCI7XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAkKFwiLmpzLWNsZWFyLWNhY2hlXCIpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAkKFwiYm9keVwiKS51Zk1vZGFsKHtcbiAgICAgICAgICAgIHNvdXJjZVVybDogc2l0ZS51cmkucHVibGljICsgXCIvbW9kYWxzL2Rhc2hib2FyZC9jbGVhci1jYWNoZVwiLFxuICAgICAgICAgICAgYWpheFBhcmFtczoge1xuICAgICAgICAgICAgICAgIHNsdWc6ICQodGhpcykuZGF0YShcInNsdWdcIiksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbXNnVGFyZ2V0OiAkKFwiI2FsZXJ0cy1wYWdlXCIpLFxuICAgICAgICB9KTtcblxuICAgICAgICAkKFwiYm9keVwiKS5vbihcInJlbmRlclN1Y2Nlc3MudWZNb2RhbFwiLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgdmFyIG1vZGFsID0gJCh0aGlzKS51Zk1vZGFsKFwiZ2V0TW9kYWxcIik7XG4gICAgICAgICAgICB2YXIgZm9ybSA9IG1vZGFsLmZpbmQoXCIuanMtZm9ybVwiKTtcblxuICAgICAgICAgICAgZm9ybS51ZkZvcm0oKS5vbihcInN1Ym1pdFN1Y2Nlc3MudWZGb3JtXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAvLyBSZWxvYWQgcGFnZSBvbiBzdWNjZXNzXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gVGFibGUgb2Ygc2l0ZSBhY3Rpdml0aWVzXG4gICAgdmFyIGFjdGl2aXRpZXMgPSAkKFwiI3dpZGdldC1hY3Rpdml0aWVzXCIpO1xuICAgIGlmIChhY3Rpdml0aWVzLmxlbmd0aCkge1xuICAgICAgICBhY3Rpdml0aWVzLnVmVGFibGUoe1xuICAgICAgICAgICAgZGF0YVVybDogc2l0ZS51cmkucHVibGljICsgXCIvYXBpL2FjdGl2aXRpZXNcIixcbiAgICAgICAgICAgIHVzZUxvYWRpbmdUcmFuc2l0aW9uOiBzaXRlLnVmX3RhYmxlLnVzZV9sb2FkaW5nX3RyYW5zaXRpb24sXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFRhYmxlIG9mIHVzZXJzIGluIGN1cnJlbnQgdXNlcidzIGdyb3VwXG4gICAgdmFyIGdyb3VwVXNlcnMgPSAkKFwiI3dpZGdldC1ncm91cC11c2Vyc1wiKTtcbiAgICBpZiAoZ3JvdXBVc2Vycy5sZW5ndGgpIHtcbiAgICAgICAgZ3JvdXBVc2Vycy51ZlRhYmxlKHtcbiAgICAgICAgICAgIGRhdGFVcmw6IHNpdGUudXJpLnB1YmxpYyArIFwiL2FwaS9ncm91cHMvZy9cIiArIHBhZ2UuZ3JvdXBfc2x1ZyArIFwiL3VzZXJzXCIsXG4gICAgICAgICAgICB1c2VMb2FkaW5nVHJhbnNpdGlvbjogc2l0ZS51Zl90YWJsZS51c2VfbG9hZGluZ190cmFuc2l0aW9uLFxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBCaW5kIHVzZXIgY3JlYXRpb24gYnV0dG9uXG4gICAgICAgIGJpbmRVc2VyQ3JlYXRpb25CdXR0b24oZ3JvdXBVc2Vycyk7XG5cbiAgICAgICAgLy8gQmluZCB1c2VyIHRhYmxlIGJ1dHRvbnNcbiAgICAgICAgZ3JvdXBVc2Vycy5vbihcInBhZ2VyQ29tcGxldGUudWZUYWJsZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBiaW5kVXNlckJ1dHRvbnMoJCh0aGlzKSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9