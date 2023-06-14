(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.index = {}));
})(this, (function (exports) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    var DEFAULT_SIZE = 72;
    var DEFAULT_Z_INDEX = 2147483647;
    var INITIAL_CURSOR_CONFIG = {
        size: DEFAULT_SIZE,
        zIndex: DEFAULT_Z_INDEX,
        blurSize: 5,
        spread: "",
        feather: "", // the transparent edge scale in percent suffix, like "60%"
    };

    /**
     * The function creates a cursor with a blurred or non-blurred mode based on the provided props.
     * @param {CursorProps} props - An object containing optional properties for the cursor.
     * @returns The function `createBlurCursor` returns a DOM element that represents a cursor with a blurred effect.
     */
    function createBlurCursor(_a) {
        var size = _a.size, zIndex = _a.zIndex, blurSize = _a.blurSize, spread = _a.spread, feather = _a.feather;
        var cursorDom = document.createElement("div");
        cursorDom.id = "cursor";
        cursorDom.style.left = "0px";
        cursorDom.style.top = "0px";
        cursorDom.style.width = "".concat(size, "px");
        cursorDom.style.height = "".concat(size, "px");
        cursorDom.style.border = "none";
        cursorDom.style.borderRadius = "50%";
        cursorDom.style.cssText += "backdrop-filter: blur(".concat(blurSize, "px);-webkit-backdrop-filter: blur(").concat(blurSize, "px);");
        if (spread || feather) {
            // @ts-ignore-next-line This is a valid CSS property in some browsers.
            cursorDom.style.maskImage = "radial-gradient(circle, rgba(0,0,0,1}) ".concat(spread, ", transparent ").concat(feather, ")");
            cursorDom.style.webkitMaskImage = "radial-gradient(circle, rgba(0,0,0,1) ".concat(spread, ", transparent ").concat(feather, ")");
        }
        var cursorWrapper = document.createElement("div");
        cursorWrapper.style.position = "absolute";
        cursorWrapper.style.zIndex = "".concat(zIndex);
        cursorWrapper.style.pointerEvents = "none";
        cursorWrapper.appendChild(cursorDom);
        return cursorWrapper;
    }
    /**
     * Updates the position of a cursor element based on the position of a mouse event and a
     * specified size.
     * @param {MouseEvent} e - The event object that contains information about the mouse event that
     * triggered the function (e.g. mousemove, click, etc.).
     * @param {HTMLElement} cursor - HTMLElement, In this case, it is the element that represents the cursor that
     * will be updated based on the mouse position.
     * @param {number} size - The size parameter is a number that represents the size of the cursor
     * element. It is used to calculate the position of the cursor based on the mouse coordinates received
     * in the MouseEvent parameter.
     */
    function updateCursor(e, cursor, size) {
        cursor.style.left = e.clientX - size / 2 + "px";
        cursor.style.top = e.clientY - size / 2 + "px";
    }
    /**
     * This function creates a blur cursor and attaches it to a specified DOM element, and updates its
     * position based on mouse movement.
     * @param {HTMLElement} DOMElement - The DOM element to which the cursor blur will be attached. If no
     * element is provided, the cursor blur will be attached to the document body by default.
     * @param {CursorProps} configProps - The `configProps` parameter is an object that contains properties for
     * configuring the cursor, such as `size`, `zIndex` and `blurSize`.
     * @returns An object with a `destroy` method.
     */
    function useCursorBlur(DOMElement, configProps) {
        if (DOMElement === void 0) { DOMElement = document.body; }
        if (configProps === void 0) { configProps = {}; }
        /** init */
        var config = __assign(__assign({}, INITIAL_CURSOR_CONFIG), configProps);
        var cursor = createBlurCursor(config);
        DOMElement.appendChild(cursor);
        /** update */
        var update = function (e) { return updateCursor(e, cursor, config.size); };
        window.addEventListener("mousemove", update);
        /** destroy */
        var destroy = function () {
            window.removeEventListener("mousemove", update);
            DOMElement.removeChild(cursor);
        };
        return [destroy];
    }

    exports.useCursorBlur = useCursorBlur;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
