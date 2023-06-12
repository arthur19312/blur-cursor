(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.index = {}));
})(this, (function (exports) { 'use strict';

    var DEFAULT_SIZE = 72;
    var DEFAULT_Z_INDEX = "2147483647";
    /**
     * The function creates a cursor with a blurred or non-blurred mode based on the provided props.
     * @param {CursorProps} props - An object containing optional properties for the cursor.
     * @returns The function `createBlurCursor` returns a DOM element that represents a cursor with a
     * blurred effect or no effect, depending on the `mode` parameter passed to the function. The cursor
     * element is wrapped in another DOM element with some styling properties, such as `position`,
     * `zIndex`, and `pointerEvents`.
     */
    function createBlurCursor(props) {
        if (props === void 0) { props = {
            size: DEFAULT_SIZE,
            zIndex: DEFAULT_Z_INDEX,
            blurSize: 5,
            feather: '60%',
            spread: '25%',
        }; }
        var _a = props.size, size = _a === void 0 ? DEFAULT_SIZE : _a, _b = props.zIndex, zIndex = _b === void 0 ? DEFAULT_Z_INDEX : _b, _c = props.blurSize, blurSize = _c === void 0 ? 5 : _c, _d = props.feather, feather = _d === void 0 ? '60%' : _d, _e = props.spread, spread = _e === void 0 ? '25%' : _e;
        var cursorDom = document.createElement("div");
        cursorDom.id = "cursor";
        cursorDom.style.left = '0px';
        cursorDom.style.top = '0px';
        cursorDom.style.width = "".concat(size, "px");
        cursorDom.style.height = "".concat(size, "px");
        cursorDom.style.border = "none";
        // @ts-ignore-next-line This is a valid CSS property in some browsers.
        cursorDom.style.maskImage = "radial-gradient(circle, rgba(0,0,0,1) ".concat(spread, ", transparent ").concat(feather, ")");
        cursorDom.style.webkitMaskImage = "radial-gradient(circle, rgba(0,0,0,1) ".concat(spread, ", transparent ").concat(feather, ")");
        cursorDom.style.borderRadius = "50%";
        cursorDom.style.cssText += "backdrop-filter: blur(".concat(blurSize, "px);-webkit-backdrop-filter: blur(").concat(blurSize, "px);");
        var cursorWrapper = document.createElement("div");
        cursorWrapper.style.position = "absolute";
        cursorWrapper.style.zIndex = zIndex;
        cursorWrapper.style.pointerEvents = "none";
        cursorWrapper.appendChild(cursorDom);
        return cursorWrapper;
    }
    /**
     * Updates the position of a cursor element based on the position of the mouse event and a
     * given size.
     * @param e - The "e" parameter is an event object that contains information about the event that
     * triggered the function. In this case, it is likely a mouse event such as "mousemove".
     * @param cursor - The cursor parameter is likely a reference to an HTML element that represents the
     * cursor on the screen. This element can be styled and positioned using the left and top properties to
     * update its position based on the user's mouse movements.
     * @param size - The size parameter is the size of the cursor in pixels. It is used to calculate the
     * position of the cursor based on the mouse coordinates.
     */
    function updateCursor(e, cursor, size) {
        cursor.style.left = e.clientX - size / 2 + "px";
        cursor.style.top = e.clientY - size / 2 + "px";
    }
    /**
     * Creates a blur area around the cursor and attaches it to a DOM element, and updates its position based
     * on mouse movement.
     * @param domElement - The DOM element to which the cursor will be appended. If no element is provided,
     * the cursor will be appended to the document body by default.
     * @param {CursorProps} props - The `props` parameter is an object that contains properties for
     * configuring the cursor, such as `size`, `color`, `blur`, and `opacity`. These properties are used to
     * create a custom cursor with a blurred effect.
     * @returns An object with a `destroy` method.
     */
    function useCursorBlur(DOMElement, props) {
        if (DOMElement === void 0) { DOMElement = document.body; }
        var cursor = createBlurCursor(props);
        DOMElement.appendChild(cursor);
        var update = function (e) { return updateCursor(e, cursor, props.size); };
        window.addEventListener("mousemove", update);
        return {
            destroy: function () {
                window.removeEventListener("mousemove", update);
                DOMElement.removeChild(cursor);
            },
        };
    }

    exports.useCursorBlur = useCursorBlur;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
