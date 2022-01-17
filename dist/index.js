(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.index = factory());
})(this, (function () { 'use strict';

    var DEFAULT_SIZE = 72;
    var DEFAULT_Z_INDEX = "2147483647";
    var cursorAgent = /** @class */ (function () {
        function cursorAgent(props) {
            var _this = this;
            if (props === void 0) { props = {}; }
            this.doCursorConfig = function () {
                var cursorDom = window.document.createElement("div");
                cursorDom.id = "cursor";
                cursorDom.style.width = "".concat(_this.size, "px");
                cursorDom.style.height = "".concat(_this.size, "px");
                cursorDom.style.border = "none";
                cursorDom.style.borderRadius = "50%";
                cursorDom.style.cssText += "backdrop-filter: blur(".concat(_this.blurSize, "px);-webkit-backdrop-filter: blur(").concat(_this.blurSize, "px);");
                return cursorDom;
            };
            this.doWrapperConfig = function () {
                var cursorWrapper = window.document.createElement("div");
                cursorWrapper.style.position = "absolute";
                cursorWrapper.style.zIndex = _this.zIndex;
                return cursorWrapper;
            };
            this.update = function (e) {
                _this.cursor.style.left = e.clientX - _this.size / 2 + "px";
                _this.cursor.style.top = e.clientY - _this.size / 2 + "px";
            };
            this.init = function (domElement) {
                if (domElement === void 0) { domElement = null; }
                _this.domElement = domElement ? domElement : document.body;
                _this.domElement.appendChild(_this.cursor);
                window.addEventListener("mousemove", _this.update);
            };
            this.destroy = function () {
                window.removeEventListener("mousemove", _this.update);
                _this.domElement.removeChild(_this.cursor);
            };
            var _a = props.size, size = _a === void 0 ? DEFAULT_SIZE : _a, _b = props.zIndex, zIndex = _b === void 0 ? DEFAULT_Z_INDEX : _b, _c = props.blurSize, blurSize = _c === void 0 ? 5 : _c;
            this.size = size;
            this.zIndex = zIndex;
            this.blurSize = blurSize;
            this.cursor = this.createBlurcursor();
        }
        cursorAgent.prototype.createBlurcursor = function () {
            var cursorDom = this.doCursorConfig();
            var cursorWrapper = this.doWrapperConfig();
            cursorWrapper.appendChild(cursorDom);
            return cursorWrapper;
        };
        return cursorAgent;
    }());

    return cursorAgent;

}));
