(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var style_1 = require("./modules/style");
window.onscroll = function () {
    style_1.HandleHeaderTitle();
};

},{"./modules/style":2}],2:[function(require,module,exports){
"use strict";
exports.__esModule = true;
function HandleHeaderTitle() {
    var title = document.getElementById('headerTitle');
    var navbar = document.getElementsByTagName('nav');
    if (title != null) {
        var headerHeight = navbar != null ? navbar[0].scrollHeight + title.scrollHeight : title.scrollHeight;
        var scrollTop = (document.body.scrollTop + document.documentElement.scrollTop);
        var scrollPercent = scrollTop / headerHeight;
        title.style.opacity = (String)(scrollPercent < 1 ? 1 - scrollPercent : 0);
    }
}
exports.HandleHeaderTitle = HandleHeaderTitle;
function DarkMode() {
    document.body.setAttribute("dark", "1");
}
exports.DarkMode = DarkMode;
function LightMode() {
    document.body.setAttribute("dark", "0");
}
exports.LightMode = LightMode;

},{}]},{},[1]);
