(self["webpackChunk"] = self["webpackChunk"] || []).push([["page.role"],{

/***/ "./node_modules/@userfrosting/sprinkle-admin/app/assets/page.role.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@userfrosting/sprinkle-admin/app/assets/page.role.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./userfrosting/js/pages/role */ "./node_modules/@userfrosting/sprinkle-admin/app/assets/userfrosting/js/pages/role.js");
__webpack_require__(/*! @userfrosting/theme-adminlte/app/assets/userfrosting/js/uf-collection */ "./node_modules/@userfrosting/theme-adminlte/app/assets/userfrosting/js/uf-collection.js");
__webpack_require__(/*! @userfrosting/theme-adminlte/app/assets/userfrosting/css/uf-collection.css */ "./node_modules/@userfrosting/theme-adminlte/app/assets/userfrosting/css/uf-collection.css");


/***/ }),

/***/ "./node_modules/@userfrosting/sprinkle-admin/app/assets/userfrosting/js/pages/role.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@userfrosting/sprinkle-admin/app/assets/userfrosting/js/pages/role.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _widgets_roles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../widgets/roles */ "./node_modules/@userfrosting/sprinkle-admin/app/assets/userfrosting/js/widgets/roles.js");
/* harmony import */ var _widgets_users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../widgets/users */ "./node_modules/@userfrosting/sprinkle-admin/app/assets/userfrosting/js/widgets/users.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/**
 * Page-specific Javascript file.  Should generally be included as a separate asset bundle in your page template.
 * example: {{ assets.js('js/pages/sign-in-or-register') | raw }}
 *
 * This script depends on uf-table.js, moment.js, handlebars-helpers.js
 *
 * Target page: /roles/r/{slug}
 */



$(document).ready(function() {
    // Control buttons
    (0,_widgets_roles__WEBPACK_IMPORTED_MODULE_0__.bindRoleButtons)($("#view-role"), { delete_redirect: page.delete_redirect });

    $("#widget-role-permissions").ufTable({
        dataUrl: site.uri.public + '/api/roles/r/' + page.role_slug + '/permissions',
        useLoadingTransition: site.uf_table.use_loading_transition
    });

    $("#widget-role-users").ufTable({
        dataUrl: site.uri.public + '/api/roles/r/' + page.role_slug + '/users',
        useLoadingTransition: site.uf_table.use_loading_transition
    });

    // Bind table buttons
    $("#widget-role-users").on("pagerComplete.ufTable", function () {
        (0,_widgets_users__WEBPACK_IMPORTED_MODULE_1__.bindUserButtons)($(this));
    });
});


/***/ }),

/***/ "./node_modules/@userfrosting/sprinkle-admin/app/assets/userfrosting/js/widgets/roles.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@userfrosting/sprinkle-admin/app/assets/userfrosting/js/widgets/roles.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   attachRoleForm: () => (/* binding */ attachRoleForm),
/* harmony export */   bindRoleButtons: () => (/* binding */ bindRoleButtons),
/* harmony export */   bindRoleCreationButton: () => (/* binding */ bindRoleCreationButton)
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/**
 * Roles widget.  Sets up dropdowns, modals, etc for a table of roles.
 */

/**
 * Set up the form in a modal after being successfully attached to the body.
 */
function attachRoleForm() {
    $("body").on('renderSuccess.ufModal', function (data) {
        var modal = $(this).ufModal('getModal');
        var form = modal.find('.js-form');

        /**
         * Set up modal widgets
         */

        // Auto-generate slug
        form.find('input[name=name]').on('input change', function() {
            var manualSlug = form.find('#form-role-slug-override').prop('checked');
            if (!manualSlug) {
                var slug = getSlug($(this).val());
                form.find('input[name=slug]').val(slug);
            }
        });

        form.find('#form-role-slug-override').on('change', function() {
            if ($(this).prop('checked')) {
                form.find('input[name=slug]').prop('readonly', false);
            } else {
                form.find('input[name=slug]').prop('readonly', true);
                form.find('input[name=name]').trigger('change');
            }
        });

        // Set up the form for submission
        form.ufForm({
            validator: page.validators
        }).on("submitSuccess.ufForm", function() {
            // Reload page on success
            window.location.reload();
        });
    });
}

/**
 * Link role action buttons, for example in a table or on a specific role's page.
 * @param {module:jQuery} el jQuery wrapped element to target.
 * @param {{delete_redirect: string}} options Options used to modify behaviour of button actions.
 */
function bindRoleButtons(el, options) {
    if (!options) options = {};

    /**
     * Link row buttons after table is loaded.
     */

    // Manage permissions button
    el.find('.js-role-permissions').click(function(e) {
        e.preventDefault();

        var slug = $(this).data('slug');
        $("body").ufModal({
            sourceUrl: site.uri.public + "/modals/roles/permissions",
            ajaxParams: {
                slug: slug
            },
            msgTarget: $("#alerts-page")
        });

        $("body").on('renderSuccess.ufModal', function (data) {
            var modal = $(this).ufModal('getModal');
            var form = modal.find('.js-form');

            // Set up collection widget
            var permissionWidget = modal.find('.js-form-permissions');
            permissionWidget.ufCollection({
                dropdown: {
                    ajax: {
                        url     : site.uri.public + '/api/permissions'
                    },
                    placeholder : "Select a permission"
                },
                dropdownTemplate: modal.find('#role-permissions-select-option').html(),
                rowTemplate     : modal.find('#role-permissions-row').html()
            });

            // Get current roles and add to widget
            $.getJSON(site.uri.public + '/api/roles/r/' + slug + '/permissions')
            .done(function (data) {
                $.each(data.rows, function (idx, permission) {
                    permission.text = permission.name;
                    permissionWidget.ufCollection('addRow', permission);
                });
            });

            // Set up form for submission
            form.ufForm()
            .on("submitSuccess.ufForm", function() {
                // Reload page on success
                window.location.reload();
            });
        });
    });

    /**
     * Buttons that launch a modal dialog
     */
    // Edit role details button
    el.find('.js-role-edit').click(function(e) {
        e.preventDefault();

        $("body").ufModal({
            sourceUrl: site.uri.public + "/modals/roles/edit",
            ajaxParams: {
                slug: $(this).data('slug')
            },
            msgTarget: $("#alerts-page")
        });

        attachRoleForm();
    });

    // Delete role button
    el.find('.js-role-delete').click(function(e) {
        e.preventDefault();

        $("body").ufModal({
            sourceUrl: site.uri.public + "/modals/roles/confirm-delete",
            ajaxParams: {
                slug: $(this).data('slug')
            },
            msgTarget: $("#alerts-page")
        });

        $("body").on('renderSuccess.ufModal', function (data) {
            var modal = $(this).ufModal('getModal');
            var form = modal.find('.js-form');

            form.ufForm()
            .on("submitSuccess.ufForm", function() {
                // Navigate or reload page on success
                if (options.delete_redirect) window.location.href = options.delete_redirect;
                else window.location.reload();
            });
        });
    });
}

function bindRoleCreationButton(el) {
    // Link create button
    el.find('.js-role-create').click(function(e) {
        e.preventDefault();

        $("body").ufModal({
            sourceUrl: site.uri.public + "/modals/roles/create",
            msgTarget: $("#alerts-page")
        });

        attachRoleForm();
    });
};




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_userfrosting_sprinkle-admin_app_assets_userfrosting_js_widgets_users_js","vendors-node_modules_userfrosting_theme-adminlte_app_assets_userfrosting_js_uf-collection_js--ca7787"], () => (__webpack_exec__("./node_modules/@userfrosting/sprinkle-admin/app/assets/page.role.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5yb2xlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsbUJBQU8sQ0FBQywwSEFBOEI7QUFDdEMsbUJBQU8sQ0FBQyxzS0FBdUU7QUFDL0UsbUJBQU8sQ0FBQyw2S0FBNEU7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGcEY7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDbUQ7QUFDQTs7QUFFbkQsQ0FBQztBQUNEO0FBQ0EsSUFBSSwrREFBZSxDQUFDLENBQUMsa0JBQWtCLHVDQUF1Qzs7QUFFOUUsSUFBSSxDQUFDO0FBQ0w7QUFDQTtBQUNBLEtBQUs7O0FBRUwsSUFBSSxDQUFDO0FBQ0w7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxJQUFJLENBQUM7QUFDTCxRQUFRLCtEQUFlLENBQUMsQ0FBQztBQUN6QixLQUFLO0FBQ0wsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLENBQUM7QUFDTCxvQkFBb0IsQ0FBQztBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsQ0FBQztBQUNwQztBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBLGdCQUFnQixDQUFDO0FBQ2pCO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQSxXQUFXLGVBQWU7QUFDMUIsWUFBWSwwQkFBMEI7QUFDdEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLENBQUM7QUFDcEIsUUFBUSxDQUFDO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLHVCQUF1QixDQUFDO0FBQ3hCLFNBQVM7O0FBRVQsUUFBUSxDQUFDO0FBQ1Qsd0JBQXdCLENBQUM7QUFDekI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0EsWUFBWSxDQUFDO0FBQ2I7QUFDQSxnQkFBZ0IsQ0FBQztBQUNqQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUSxDQUFDO0FBQ1Q7QUFDQTtBQUNBLHNCQUFzQixDQUFDO0FBQ3ZCLGFBQWE7QUFDYix1QkFBdUIsQ0FBQztBQUN4QixTQUFTOztBQUVUO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUEsUUFBUSxDQUFDO0FBQ1Q7QUFDQTtBQUNBLHNCQUFzQixDQUFDO0FBQ3ZCLGFBQWE7QUFDYix1QkFBdUIsQ0FBQztBQUN4QixTQUFTOztBQUVULFFBQVEsQ0FBQztBQUNULHdCQUF3QixDQUFDO0FBQ3pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNULEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxRQUFRLENBQUM7QUFDVDtBQUNBLHVCQUF1QixDQUFDO0FBQ3hCLFNBQVM7O0FBRVQ7QUFDQSxLQUFLO0FBQ0w7O0FBRW1FIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B1c2VyZnJvc3Rpbmcvc3ByaW5rbGUtYWRtaW4vYXBwL2Fzc2V0cy9wYWdlLnJvbGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B1c2VyZnJvc3Rpbmcvc3ByaW5rbGUtYWRtaW4vYXBwL2Fzc2V0cy91c2VyZnJvc3RpbmcvanMvcGFnZXMvcm9sZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHVzZXJmcm9zdGluZy9zcHJpbmtsZS1hZG1pbi9hcHAvYXNzZXRzL3VzZXJmcm9zdGluZy9qcy93aWRnZXRzL3JvbGVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInJlcXVpcmUoXCIuL3VzZXJmcm9zdGluZy9qcy9wYWdlcy9yb2xlXCIpO1xucmVxdWlyZSgnQHVzZXJmcm9zdGluZy90aGVtZS1hZG1pbmx0ZS9hcHAvYXNzZXRzL3VzZXJmcm9zdGluZy9qcy91Zi1jb2xsZWN0aW9uJyk7XG5yZXF1aXJlKCdAdXNlcmZyb3N0aW5nL3RoZW1lLWFkbWlubHRlL2FwcC9hc3NldHMvdXNlcmZyb3N0aW5nL2Nzcy91Zi1jb2xsZWN0aW9uLmNzcycpO1xuIiwiLyoqXG4gKiBQYWdlLXNwZWNpZmljIEphdmFzY3JpcHQgZmlsZS4gIFNob3VsZCBnZW5lcmFsbHkgYmUgaW5jbHVkZWQgYXMgYSBzZXBhcmF0ZSBhc3NldCBidW5kbGUgaW4geW91ciBwYWdlIHRlbXBsYXRlLlxuICogZXhhbXBsZToge3sgYXNzZXRzLmpzKCdqcy9wYWdlcy9zaWduLWluLW9yLXJlZ2lzdGVyJykgfCByYXcgfX1cbiAqXG4gKiBUaGlzIHNjcmlwdCBkZXBlbmRzIG9uIHVmLXRhYmxlLmpzLCBtb21lbnQuanMsIGhhbmRsZWJhcnMtaGVscGVycy5qc1xuICpcbiAqIFRhcmdldCBwYWdlOiAvcm9sZXMvci97c2x1Z31cbiAqL1xuaW1wb3J0IHsgYmluZFJvbGVCdXR0b25zIH0gZnJvbSBcIi4uL3dpZGdldHMvcm9sZXNcIjtcbmltcG9ydCB7IGJpbmRVc2VyQnV0dG9ucyB9IGZyb20gXCIuLi93aWRnZXRzL3VzZXJzXCI7XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgIC8vIENvbnRyb2wgYnV0dG9uc1xuICAgIGJpbmRSb2xlQnV0dG9ucygkKFwiI3ZpZXctcm9sZVwiKSwgeyBkZWxldGVfcmVkaXJlY3Q6IHBhZ2UuZGVsZXRlX3JlZGlyZWN0IH0pO1xuXG4gICAgJChcIiN3aWRnZXQtcm9sZS1wZXJtaXNzaW9uc1wiKS51ZlRhYmxlKHtcbiAgICAgICAgZGF0YVVybDogc2l0ZS51cmkucHVibGljICsgJy9hcGkvcm9sZXMvci8nICsgcGFnZS5yb2xlX3NsdWcgKyAnL3Blcm1pc3Npb25zJyxcbiAgICAgICAgdXNlTG9hZGluZ1RyYW5zaXRpb246IHNpdGUudWZfdGFibGUudXNlX2xvYWRpbmdfdHJhbnNpdGlvblxuICAgIH0pO1xuXG4gICAgJChcIiN3aWRnZXQtcm9sZS11c2Vyc1wiKS51ZlRhYmxlKHtcbiAgICAgICAgZGF0YVVybDogc2l0ZS51cmkucHVibGljICsgJy9hcGkvcm9sZXMvci8nICsgcGFnZS5yb2xlX3NsdWcgKyAnL3VzZXJzJyxcbiAgICAgICAgdXNlTG9hZGluZ1RyYW5zaXRpb246IHNpdGUudWZfdGFibGUudXNlX2xvYWRpbmdfdHJhbnNpdGlvblxuICAgIH0pO1xuXG4gICAgLy8gQmluZCB0YWJsZSBidXR0b25zXG4gICAgJChcIiN3aWRnZXQtcm9sZS11c2Vyc1wiKS5vbihcInBhZ2VyQ29tcGxldGUudWZUYWJsZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGJpbmRVc2VyQnV0dG9ucygkKHRoaXMpKTtcbiAgICB9KTtcbn0pO1xuIiwiLyoqXG4gKiBSb2xlcyB3aWRnZXQuICBTZXRzIHVwIGRyb3Bkb3ducywgbW9kYWxzLCBldGMgZm9yIGEgdGFibGUgb2Ygcm9sZXMuXG4gKi9cblxuLyoqXG4gKiBTZXQgdXAgdGhlIGZvcm0gaW4gYSBtb2RhbCBhZnRlciBiZWluZyBzdWNjZXNzZnVsbHkgYXR0YWNoZWQgdG8gdGhlIGJvZHkuXG4gKi9cbmZ1bmN0aW9uIGF0dGFjaFJvbGVGb3JtKCkge1xuICAgICQoXCJib2R5XCIpLm9uKCdyZW5kZXJTdWNjZXNzLnVmTW9kYWwnLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICB2YXIgbW9kYWwgPSAkKHRoaXMpLnVmTW9kYWwoJ2dldE1vZGFsJyk7XG4gICAgICAgIHZhciBmb3JtID0gbW9kYWwuZmluZCgnLmpzLWZvcm0nKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogU2V0IHVwIG1vZGFsIHdpZGdldHNcbiAgICAgICAgICovXG5cbiAgICAgICAgLy8gQXV0by1nZW5lcmF0ZSBzbHVnXG4gICAgICAgIGZvcm0uZmluZCgnaW5wdXRbbmFtZT1uYW1lXScpLm9uKCdpbnB1dCBjaGFuZ2UnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBtYW51YWxTbHVnID0gZm9ybS5maW5kKCcjZm9ybS1yb2xlLXNsdWctb3ZlcnJpZGUnKS5wcm9wKCdjaGVja2VkJyk7XG4gICAgICAgICAgICBpZiAoIW1hbnVhbFNsdWcpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2x1ZyA9IGdldFNsdWcoJCh0aGlzKS52YWwoKSk7XG4gICAgICAgICAgICAgICAgZm9ybS5maW5kKCdpbnB1dFtuYW1lPXNsdWddJykudmFsKHNsdWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBmb3JtLmZpbmQoJyNmb3JtLXJvbGUtc2x1Zy1vdmVycmlkZScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICgkKHRoaXMpLnByb3AoJ2NoZWNrZWQnKSkge1xuICAgICAgICAgICAgICAgIGZvcm0uZmluZCgnaW5wdXRbbmFtZT1zbHVnXScpLnByb3AoJ3JlYWRvbmx5JywgZmFsc2UpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3JtLmZpbmQoJ2lucHV0W25hbWU9c2x1Z10nKS5wcm9wKCdyZWFkb25seScsIHRydWUpO1xuICAgICAgICAgICAgICAgIGZvcm0uZmluZCgnaW5wdXRbbmFtZT1uYW1lXScpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBTZXQgdXAgdGhlIGZvcm0gZm9yIHN1Ym1pc3Npb25cbiAgICAgICAgZm9ybS51ZkZvcm0oe1xuICAgICAgICAgICAgdmFsaWRhdG9yOiBwYWdlLnZhbGlkYXRvcnNcbiAgICAgICAgfSkub24oXCJzdWJtaXRTdWNjZXNzLnVmRm9ybVwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vIFJlbG9hZCBwYWdlIG9uIHN1Y2Nlc3NcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5cbi8qKlxuICogTGluayByb2xlIGFjdGlvbiBidXR0b25zLCBmb3IgZXhhbXBsZSBpbiBhIHRhYmxlIG9yIG9uIGEgc3BlY2lmaWMgcm9sZSdzIHBhZ2UuXG4gKiBAcGFyYW0ge21vZHVsZTpqUXVlcnl9IGVsIGpRdWVyeSB3cmFwcGVkIGVsZW1lbnQgdG8gdGFyZ2V0LlxuICogQHBhcmFtIHt7ZGVsZXRlX3JlZGlyZWN0OiBzdHJpbmd9fSBvcHRpb25zIE9wdGlvbnMgdXNlZCB0byBtb2RpZnkgYmVoYXZpb3VyIG9mIGJ1dHRvbiBhY3Rpb25zLlxuICovXG5mdW5jdGlvbiBiaW5kUm9sZUJ1dHRvbnMoZWwsIG9wdGlvbnMpIHtcbiAgICBpZiAoIW9wdGlvbnMpIG9wdGlvbnMgPSB7fTtcblxuICAgIC8qKlxuICAgICAqIExpbmsgcm93IGJ1dHRvbnMgYWZ0ZXIgdGFibGUgaXMgbG9hZGVkLlxuICAgICAqL1xuXG4gICAgLy8gTWFuYWdlIHBlcm1pc3Npb25zIGJ1dHRvblxuICAgIGVsLmZpbmQoJy5qcy1yb2xlLXBlcm1pc3Npb25zJykuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgdmFyIHNsdWcgPSAkKHRoaXMpLmRhdGEoJ3NsdWcnKTtcbiAgICAgICAgJChcImJvZHlcIikudWZNb2RhbCh7XG4gICAgICAgICAgICBzb3VyY2VVcmw6IHNpdGUudXJpLnB1YmxpYyArIFwiL21vZGFscy9yb2xlcy9wZXJtaXNzaW9uc1wiLFxuICAgICAgICAgICAgYWpheFBhcmFtczoge1xuICAgICAgICAgICAgICAgIHNsdWc6IHNsdWdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtc2dUYXJnZXQ6ICQoXCIjYWxlcnRzLXBhZ2VcIilcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJChcImJvZHlcIikub24oJ3JlbmRlclN1Y2Nlc3MudWZNb2RhbCcsIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICB2YXIgbW9kYWwgPSAkKHRoaXMpLnVmTW9kYWwoJ2dldE1vZGFsJyk7XG4gICAgICAgICAgICB2YXIgZm9ybSA9IG1vZGFsLmZpbmQoJy5qcy1mb3JtJyk7XG5cbiAgICAgICAgICAgIC8vIFNldCB1cCBjb2xsZWN0aW9uIHdpZGdldFxuICAgICAgICAgICAgdmFyIHBlcm1pc3Npb25XaWRnZXQgPSBtb2RhbC5maW5kKCcuanMtZm9ybS1wZXJtaXNzaW9ucycpO1xuICAgICAgICAgICAgcGVybWlzc2lvbldpZGdldC51ZkNvbGxlY3Rpb24oe1xuICAgICAgICAgICAgICAgIGRyb3Bkb3duOiB7XG4gICAgICAgICAgICAgICAgICAgIGFqYXg6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybCAgICAgOiBzaXRlLnVyaS5wdWJsaWMgKyAnL2FwaS9wZXJtaXNzaW9ucydcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXIgOiBcIlNlbGVjdCBhIHBlcm1pc3Npb25cIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZHJvcGRvd25UZW1wbGF0ZTogbW9kYWwuZmluZCgnI3JvbGUtcGVybWlzc2lvbnMtc2VsZWN0LW9wdGlvbicpLmh0bWwoKSxcbiAgICAgICAgICAgICAgICByb3dUZW1wbGF0ZSAgICAgOiBtb2RhbC5maW5kKCcjcm9sZS1wZXJtaXNzaW9ucy1yb3cnKS5odG1sKClcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBHZXQgY3VycmVudCByb2xlcyBhbmQgYWRkIHRvIHdpZGdldFxuICAgICAgICAgICAgJC5nZXRKU09OKHNpdGUudXJpLnB1YmxpYyArICcvYXBpL3JvbGVzL3IvJyArIHNsdWcgKyAnL3Blcm1pc3Npb25zJylcbiAgICAgICAgICAgIC5kb25lKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgJC5lYWNoKGRhdGEucm93cywgZnVuY3Rpb24gKGlkeCwgcGVybWlzc2lvbikge1xuICAgICAgICAgICAgICAgICAgICBwZXJtaXNzaW9uLnRleHQgPSBwZXJtaXNzaW9uLm5hbWU7XG4gICAgICAgICAgICAgICAgICAgIHBlcm1pc3Npb25XaWRnZXQudWZDb2xsZWN0aW9uKCdhZGRSb3cnLCBwZXJtaXNzaW9uKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBTZXQgdXAgZm9ybSBmb3Igc3VibWlzc2lvblxuICAgICAgICAgICAgZm9ybS51ZkZvcm0oKVxuICAgICAgICAgICAgLm9uKFwic3VibWl0U3VjY2Vzcy51ZkZvcm1cIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgLy8gUmVsb2FkIHBhZ2Ugb24gc3VjY2Vzc1xuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIEJ1dHRvbnMgdGhhdCBsYXVuY2ggYSBtb2RhbCBkaWFsb2dcbiAgICAgKi9cbiAgICAvLyBFZGl0IHJvbGUgZGV0YWlscyBidXR0b25cbiAgICBlbC5maW5kKCcuanMtcm9sZS1lZGl0JykuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgJChcImJvZHlcIikudWZNb2RhbCh7XG4gICAgICAgICAgICBzb3VyY2VVcmw6IHNpdGUudXJpLnB1YmxpYyArIFwiL21vZGFscy9yb2xlcy9lZGl0XCIsXG4gICAgICAgICAgICBhamF4UGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgc2x1ZzogJCh0aGlzKS5kYXRhKCdzbHVnJylcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtc2dUYXJnZXQ6ICQoXCIjYWxlcnRzLXBhZ2VcIilcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYXR0YWNoUm9sZUZvcm0oKTtcbiAgICB9KTtcblxuICAgIC8vIERlbGV0ZSByb2xlIGJ1dHRvblxuICAgIGVsLmZpbmQoJy5qcy1yb2xlLWRlbGV0ZScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICQoXCJib2R5XCIpLnVmTW9kYWwoe1xuICAgICAgICAgICAgc291cmNlVXJsOiBzaXRlLnVyaS5wdWJsaWMgKyBcIi9tb2RhbHMvcm9sZXMvY29uZmlybS1kZWxldGVcIixcbiAgICAgICAgICAgIGFqYXhQYXJhbXM6IHtcbiAgICAgICAgICAgICAgICBzbHVnOiAkKHRoaXMpLmRhdGEoJ3NsdWcnKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1zZ1RhcmdldDogJChcIiNhbGVydHMtcGFnZVwiKVxuICAgICAgICB9KTtcblxuICAgICAgICAkKFwiYm9keVwiKS5vbigncmVuZGVyU3VjY2Vzcy51Zk1vZGFsJywgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIHZhciBtb2RhbCA9ICQodGhpcykudWZNb2RhbCgnZ2V0TW9kYWwnKTtcbiAgICAgICAgICAgIHZhciBmb3JtID0gbW9kYWwuZmluZCgnLmpzLWZvcm0nKTtcblxuICAgICAgICAgICAgZm9ybS51ZkZvcm0oKVxuICAgICAgICAgICAgLm9uKFwic3VibWl0U3VjY2Vzcy51ZkZvcm1cIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgLy8gTmF2aWdhdGUgb3IgcmVsb2FkIHBhZ2Ugb24gc3VjY2Vzc1xuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLmRlbGV0ZV9yZWRpcmVjdCkgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBvcHRpb25zLmRlbGV0ZV9yZWRpcmVjdDtcbiAgICAgICAgICAgICAgICBlbHNlIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gYmluZFJvbGVDcmVhdGlvbkJ1dHRvbihlbCkge1xuICAgIC8vIExpbmsgY3JlYXRlIGJ1dHRvblxuICAgIGVsLmZpbmQoJy5qcy1yb2xlLWNyZWF0ZScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICQoXCJib2R5XCIpLnVmTW9kYWwoe1xuICAgICAgICAgICAgc291cmNlVXJsOiBzaXRlLnVyaS5wdWJsaWMgKyBcIi9tb2RhbHMvcm9sZXMvY3JlYXRlXCIsXG4gICAgICAgICAgICBtc2dUYXJnZXQ6ICQoXCIjYWxlcnRzLXBhZ2VcIilcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYXR0YWNoUm9sZUZvcm0oKTtcbiAgICB9KTtcbn07XG5cbmV4cG9ydCB7IGF0dGFjaFJvbGVGb3JtLCBiaW5kUm9sZUJ1dHRvbnMsIGJpbmRSb2xlQ3JlYXRpb25CdXR0b24gfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==