(self["webpackChunk"] = self["webpackChunk"] || []).push([["page.register"],{

/***/ "./node_modules/@userfrosting/theme-adminlte/app/assets/register.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@userfrosting/theme-adminlte/app/assets/register.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__.g.getSlug = __webpack_require__(/*! speakingurl */ "./node_modules/speakingurl/index.js");
__webpack_require__(/*! ./userfrosting/js/uf-captcha */ "./node_modules/@userfrosting/theme-adminlte/app/assets/userfrosting/js/uf-captcha.js");
__webpack_require__(/*! ./userfrosting/js/pages/register */ "./node_modules/@userfrosting/theme-adminlte/app/assets/userfrosting/js/pages/register.js");

/***/ }),

/***/ "./node_modules/@userfrosting/theme-adminlte/app/assets/userfrosting/js/pages/register.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@userfrosting/theme-adminlte/app/assets/userfrosting/js/pages/register.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/**
 * Page-specific Javascript file.  Should generally be included as a separate asset bundle in your page template.
 * example: {{ assets.js('js/pages/sign-in-or-register') | raw }}
 *
 * This script depends on validation rules specified in pages/partials/page.js.twig.
 *
 * Target page: account/register
 */
$(document).ready(function() {
    // TOS modal
    $(this).find('.js-show-tos').click(function(e) {
        e.preventDefault();

        $("body").ufModal({
            sourceUrl: site.uri.public + "/modals/account/tos",
            msgTarget: $("#alerts-page")
        });
    });

    // Auto-generate username when name is filled in
    var autoGenerate = true;
    $("#register").find('input[name=first_name], input[name=last_name]').on('input change', function() {
        if (!autoGenerate) {
            return;
        }

        var form = $("#register");

        var firstName = form.find('input[name=first_name]').val().trim();
        var lastName = form.find('input[name=last_name]').val().trim();

        if (!firstName && !lastName) {
            return;
        }

        var userName = getSlug(firstName + ' ' + lastName, {
            separator: '.'
        });
        // Set slug
        form.find('input[name=user_name]').val(userName);
    });

    // Autovalidate username field on a delay
    var timer;
    $("#register").find('input[name=first_name], input[name=last_name], input[name=user_name]').on('input change', function() {
        clearTimeout(timer); // Clear the timer so we don't end up with dupes.
        timer = setTimeout(function() { // assign timer a new timeout 
            $("#register").find('input[name=user_name]').valid();
        }, 500);
    });

    // Enable/disable username suggestions in registration page
    $("#register").find('#form-register-username-suggest').on('click', function(e) {
        e.preventDefault();
        var form = $("#register");
        $.getJSON(site.uri.public + '/account/suggest-username')
        .done(function (data) {
            // Set suggestion
            form.find('input[name=user_name]').val(data.user_name);
        });
    });

    // Turn off autogenerate when someone enters stuff manually in user_name
    $("#register").find('input[name=user_name]').on('input', function() {
        autoGenerate = false;
    });

    // Add remote rule for checking usernames on the fly
    var registrationValidators = $.extend(
        true,               // deep extend
        page.validators.register,
        {
            rules: {
                user_name: {
                    remote: {
                        url: site.uri.public + '/account/check-username',
                        dataType: 'text'
                    }
                }
            }
        }
    );

    // Handles form submission
    $("#register").ufForm({
        validator: registrationValidators,
        msgTarget: $("#alerts-page"),
        keyupDelay: 500
    }).on("submitSuccess.ufForm", function() {
        // Reload to clear form and show alerts
        window.location.reload();
    }).on("submitError.ufForm", function() {
        // Reload captcha
        $("#captcha").captcha();
    });
});


/***/ }),

/***/ "./node_modules/@userfrosting/theme-adminlte/app/assets/userfrosting/js/uf-captcha.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@userfrosting/theme-adminlte/app/assets/userfrosting/js/uf-captcha.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/**
 * This plugin reloads the captcha in the specified element.
 */
(function( $ ) {
    $.fn.captcha = function() {
        // Set the new captcha image
        $(this).attr('src', site.uri.public + "/account/captcha?" + new Date().getTime());

        // Clear whatever the user entered for the captcha value last time
        var target = $(this).data('target');
        $(target).val("");
    };
}( jQuery ));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_speakingurl_index_js"], () => (__webpack_exec__("./node_modules/@userfrosting/theme-adminlte/app/assets/register.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5yZWdpc3Rlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHFCQUFNLFdBQVcsbUJBQU8sQ0FBQyx3REFBYTtBQUN0QyxtQkFBTyxDQUFDLDBIQUE4QjtBQUN0QyxtQkFBTyxDQUFDLGtJQUFrQzs7Ozs7Ozs7Ozs7QUNGMUM7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsSUFBSSxDQUFDO0FBQ0w7O0FBRUEsUUFBUSxDQUFDO0FBQ1Q7QUFDQSx1QkFBdUIsQ0FBQztBQUN4QixTQUFTO0FBQ1QsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsSUFBSSxDQUFDO0FBQ0w7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixDQUFDOztBQUVwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxJQUFJLENBQUM7QUFDTCw2QkFBNkI7QUFDN0Isd0NBQXdDO0FBQ3hDLFlBQVksQ0FBQztBQUNiLFNBQVM7QUFDVCxLQUFLOztBQUVMO0FBQ0EsSUFBSSxDQUFDO0FBQ0w7QUFDQSxtQkFBbUIsQ0FBQztBQUNwQixRQUFRLENBQUM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSzs7QUFFTDtBQUNBLElBQUksQ0FBQztBQUNMO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLGlDQUFpQyxDQUFDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxDQUFDO0FBQ0w7QUFDQSxtQkFBbUIsQ0FBQztBQUNwQjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsUUFBUSxDQUFDO0FBQ1QsS0FBSztBQUNMLENBQUM7Ozs7Ozs7Ozs7OztBQy9GRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBRSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B1c2VyZnJvc3RpbmcvdGhlbWUtYWRtaW5sdGUvYXBwL2Fzc2V0cy9yZWdpc3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHVzZXJmcm9zdGluZy90aGVtZS1hZG1pbmx0ZS9hcHAvYXNzZXRzL3VzZXJmcm9zdGluZy9qcy9wYWdlcy9yZWdpc3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHVzZXJmcm9zdGluZy90aGVtZS1hZG1pbmx0ZS9hcHAvYXNzZXRzL3VzZXJmcm9zdGluZy9qcy91Zi1jYXB0Y2hhLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImdsb2JhbC5nZXRTbHVnID0gcmVxdWlyZSgnc3BlYWtpbmd1cmwnKTtcbnJlcXVpcmUoJy4vdXNlcmZyb3N0aW5nL2pzL3VmLWNhcHRjaGEnKTtcbnJlcXVpcmUoJy4vdXNlcmZyb3N0aW5nL2pzL3BhZ2VzL3JlZ2lzdGVyJyk7IiwiLyoqXG4gKiBQYWdlLXNwZWNpZmljIEphdmFzY3JpcHQgZmlsZS4gIFNob3VsZCBnZW5lcmFsbHkgYmUgaW5jbHVkZWQgYXMgYSBzZXBhcmF0ZSBhc3NldCBidW5kbGUgaW4geW91ciBwYWdlIHRlbXBsYXRlLlxuICogZXhhbXBsZToge3sgYXNzZXRzLmpzKCdqcy9wYWdlcy9zaWduLWluLW9yLXJlZ2lzdGVyJykgfCByYXcgfX1cbiAqXG4gKiBUaGlzIHNjcmlwdCBkZXBlbmRzIG9uIHZhbGlkYXRpb24gcnVsZXMgc3BlY2lmaWVkIGluIHBhZ2VzL3BhcnRpYWxzL3BhZ2UuanMudHdpZy5cbiAqXG4gKiBUYXJnZXQgcGFnZTogYWNjb3VudC9yZWdpc3RlclxuICovXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICAvLyBUT1MgbW9kYWxcbiAgICAkKHRoaXMpLmZpbmQoJy5qcy1zaG93LXRvcycpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICQoXCJib2R5XCIpLnVmTW9kYWwoe1xuICAgICAgICAgICAgc291cmNlVXJsOiBzaXRlLnVyaS5wdWJsaWMgKyBcIi9tb2RhbHMvYWNjb3VudC90b3NcIixcbiAgICAgICAgICAgIG1zZ1RhcmdldDogJChcIiNhbGVydHMtcGFnZVwiKVxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIEF1dG8tZ2VuZXJhdGUgdXNlcm5hbWUgd2hlbiBuYW1lIGlzIGZpbGxlZCBpblxuICAgIHZhciBhdXRvR2VuZXJhdGUgPSB0cnVlO1xuICAgICQoXCIjcmVnaXN0ZXJcIikuZmluZCgnaW5wdXRbbmFtZT1maXJzdF9uYW1lXSwgaW5wdXRbbmFtZT1sYXN0X25hbWVdJykub24oJ2lucHV0IGNoYW5nZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoIWF1dG9HZW5lcmF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGZvcm0gPSAkKFwiI3JlZ2lzdGVyXCIpO1xuXG4gICAgICAgIHZhciBmaXJzdE5hbWUgPSBmb3JtLmZpbmQoJ2lucHV0W25hbWU9Zmlyc3RfbmFtZV0nKS52YWwoKS50cmltKCk7XG4gICAgICAgIHZhciBsYXN0TmFtZSA9IGZvcm0uZmluZCgnaW5wdXRbbmFtZT1sYXN0X25hbWVdJykudmFsKCkudHJpbSgpO1xuXG4gICAgICAgIGlmICghZmlyc3ROYW1lICYmICFsYXN0TmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHVzZXJOYW1lID0gZ2V0U2x1ZyhmaXJzdE5hbWUgKyAnICcgKyBsYXN0TmFtZSwge1xuICAgICAgICAgICAgc2VwYXJhdG9yOiAnLidcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFNldCBzbHVnXG4gICAgICAgIGZvcm0uZmluZCgnaW5wdXRbbmFtZT11c2VyX25hbWVdJykudmFsKHVzZXJOYW1lKTtcbiAgICB9KTtcblxuICAgIC8vIEF1dG92YWxpZGF0ZSB1c2VybmFtZSBmaWVsZCBvbiBhIGRlbGF5XG4gICAgdmFyIHRpbWVyO1xuICAgICQoXCIjcmVnaXN0ZXJcIikuZmluZCgnaW5wdXRbbmFtZT1maXJzdF9uYW1lXSwgaW5wdXRbbmFtZT1sYXN0X25hbWVdLCBpbnB1dFtuYW1lPXVzZXJfbmFtZV0nKS5vbignaW5wdXQgY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7IC8vIENsZWFyIHRoZSB0aW1lciBzbyB3ZSBkb24ndCBlbmQgdXAgd2l0aCBkdXBlcy5cbiAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyAvLyBhc3NpZ24gdGltZXIgYSBuZXcgdGltZW91dCBcbiAgICAgICAgICAgICQoXCIjcmVnaXN0ZXJcIikuZmluZCgnaW5wdXRbbmFtZT11c2VyX25hbWVdJykudmFsaWQoKTtcbiAgICAgICAgfSwgNTAwKTtcbiAgICB9KTtcblxuICAgIC8vIEVuYWJsZS9kaXNhYmxlIHVzZXJuYW1lIHN1Z2dlc3Rpb25zIGluIHJlZ2lzdHJhdGlvbiBwYWdlXG4gICAgJChcIiNyZWdpc3RlclwiKS5maW5kKCcjZm9ybS1yZWdpc3Rlci11c2VybmFtZS1zdWdnZXN0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHZhciBmb3JtID0gJChcIiNyZWdpc3RlclwiKTtcbiAgICAgICAgJC5nZXRKU09OKHNpdGUudXJpLnB1YmxpYyArICcvYWNjb3VudC9zdWdnZXN0LXVzZXJuYW1lJylcbiAgICAgICAgLmRvbmUoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIC8vIFNldCBzdWdnZXN0aW9uXG4gICAgICAgICAgICBmb3JtLmZpbmQoJ2lucHV0W25hbWU9dXNlcl9uYW1lXScpLnZhbChkYXRhLnVzZXJfbmFtZSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gVHVybiBvZmYgYXV0b2dlbmVyYXRlIHdoZW4gc29tZW9uZSBlbnRlcnMgc3R1ZmYgbWFudWFsbHkgaW4gdXNlcl9uYW1lXG4gICAgJChcIiNyZWdpc3RlclwiKS5maW5kKCdpbnB1dFtuYW1lPXVzZXJfbmFtZV0nKS5vbignaW5wdXQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgYXV0b0dlbmVyYXRlID0gZmFsc2U7XG4gICAgfSk7XG5cbiAgICAvLyBBZGQgcmVtb3RlIHJ1bGUgZm9yIGNoZWNraW5nIHVzZXJuYW1lcyBvbiB0aGUgZmx5XG4gICAgdmFyIHJlZ2lzdHJhdGlvblZhbGlkYXRvcnMgPSAkLmV4dGVuZChcbiAgICAgICAgdHJ1ZSwgICAgICAgICAgICAgICAvLyBkZWVwIGV4dGVuZFxuICAgICAgICBwYWdlLnZhbGlkYXRvcnMucmVnaXN0ZXIsXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJ1bGVzOiB7XG4gICAgICAgICAgICAgICAgdXNlcl9uYW1lOiB7XG4gICAgICAgICAgICAgICAgICAgIHJlbW90ZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBzaXRlLnVyaS5wdWJsaWMgKyAnL2FjY291bnQvY2hlY2stdXNlcm5hbWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVR5cGU6ICd0ZXh0J1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgKTtcblxuICAgIC8vIEhhbmRsZXMgZm9ybSBzdWJtaXNzaW9uXG4gICAgJChcIiNyZWdpc3RlclwiKS51ZkZvcm0oe1xuICAgICAgICB2YWxpZGF0b3I6IHJlZ2lzdHJhdGlvblZhbGlkYXRvcnMsXG4gICAgICAgIG1zZ1RhcmdldDogJChcIiNhbGVydHMtcGFnZVwiKSxcbiAgICAgICAga2V5dXBEZWxheTogNTAwXG4gICAgfSkub24oXCJzdWJtaXRTdWNjZXNzLnVmRm9ybVwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gUmVsb2FkIHRvIGNsZWFyIGZvcm0gYW5kIHNob3cgYWxlcnRzXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9KS5vbihcInN1Ym1pdEVycm9yLnVmRm9ybVwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gUmVsb2FkIGNhcHRjaGFcbiAgICAgICAgJChcIiNjYXB0Y2hhXCIpLmNhcHRjaGEoKTtcbiAgICB9KTtcbn0pO1xuIiwiLyoqXG4gKiBUaGlzIHBsdWdpbiByZWxvYWRzIHRoZSBjYXB0Y2hhIGluIHRoZSBzcGVjaWZpZWQgZWxlbWVudC5cbiAqL1xuKGZ1bmN0aW9uKCAkICkge1xuICAgICQuZm4uY2FwdGNoYSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBTZXQgdGhlIG5ldyBjYXB0Y2hhIGltYWdlXG4gICAgICAgICQodGhpcykuYXR0cignc3JjJywgc2l0ZS51cmkucHVibGljICsgXCIvYWNjb3VudC9jYXB0Y2hhP1wiICsgbmV3IERhdGUoKS5nZXRUaW1lKCkpO1xuXG4gICAgICAgIC8vIENsZWFyIHdoYXRldmVyIHRoZSB1c2VyIGVudGVyZWQgZm9yIHRoZSBjYXB0Y2hhIHZhbHVlIGxhc3QgdGltZVxuICAgICAgICB2YXIgdGFyZ2V0ID0gJCh0aGlzKS5kYXRhKCd0YXJnZXQnKTtcbiAgICAgICAgJCh0YXJnZXQpLnZhbChcIlwiKTtcbiAgICB9O1xufSggalF1ZXJ5ICkpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9