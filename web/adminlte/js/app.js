/**
 * Created by Louis on 5/6/2016.
 */
/// <reference path="jquery.d.ts" />
"use strict";
var LouisAdminLTE = (function () {
    function LouisAdminLTE() {
    }
    LouisAdminLTE.prototype.initUI = function () {
        var body = $("body");
        var wrapper;
        body.addClass("skin-blue sidebar-mini");
        // Wrap All Content first
        body.wrapInner('<div class="content-wrapper" />');
        body.wrapInner('<div class="wrapper" />');
        wrapper = $(".wrapper");
        $.get("/adminlte/view/header.php", function (html) {
            wrapper.prepend(html);
        });
    };
    return LouisAdminLTE;
}());
$.ajaxSetup({
    // Disable caching of AJAX responses
    cache: false
});
var louisAdminLTE = null;
$(document).ready(function () {
    louisAdminLTE = new LouisAdminLTE();
    louisAdminLTE.initUI();
});
//# sourceMappingURL=app.js.map