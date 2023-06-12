import { CursorProps } from "./types/cursor";
const DEFAULT_SIZE = 72;
const DEFAULT_Z_INDEX = "2147483647";

/**
 * The function creates a cursor with a blurred or non-blurred mode based on the provided props.
 * @param {CursorProps} props - An object containing optional properties for the cursor.
 * @returns The function `createBlurCursor` returns a DOM element that represents a cursor with a
 * blurred effect or no effect, depending on the `mode` parameter passed to the function. The cursor
 * element is wrapped in another DOM element with some styling properties, such as `position`,
 * `zIndex`, and `pointerEvents`.
 */
function createBlurCursor(props:CursorProps = {
  size: DEFAULT_SIZE,
  zIndex: DEFAULT_Z_INDEX,
  blurSize: 5,
  feather: '60%',
  spread: '25%',
}) {
  const {
    size = DEFAULT_SIZE,
    zIndex = DEFAULT_Z_INDEX,
    blurSize = 5,
    feather = '60%',
    spread = '25%',
  } = props;

  const cursorDom = document.createElement("div");
  cursorDom.id = "cursor";
  cursorDom.style.left = '0px';
  cursorDom.style.top = '0px';
  cursorDom.style.width = `${size}px`;
  cursorDom.style.height = `${size}px`;
  cursorDom.style.border = "none";
  // @ts-ignore-next-line This is a valid CSS property in some browsers.
  cursorDom.style.maskImage = `radial-gradient(circle, rgba(0,0,0,1) ${spread}, transparent ${feather})`;
  cursorDom.style.webkitMaskImage = `radial-gradient(circle, rgba(0,0,0,1) ${spread}, transparent ${feather})`;
  cursorDom.style.borderRadius = "50%";
  cursorDom.style.cssText += `backdrop-filter: blur(${blurSize}px);-webkit-backdrop-filter: blur(${blurSize}px);` 

  const cursorWrapper = document.createElement("div");
  cursorWrapper.style.position = "absolute";
  cursorWrapper.style.zIndex = zIndex;
  cursorWrapper.style.pointerEvents = "none";
  cursorWrapper.appendChild(cursorDom);

  return cursorWrapper;
}


/**
 * Updates the position of a cursor element based on the position of a mouse event and a
 * specified size.
 * @param {MouseEvent} e - The event object that contains information about the mouse event that
 * triggered the function (e.g. mousemove, click, etc.).
 * @param {HTMLElement} cursor - HTMLElement is a type of variable that represents an HTML element in
 * the Document Object Model (DOM). In this case, it is the element that represents the cursor that
 * will be updated based on the mouse position.
 * @param {number} size - The size parameter is a number that represents the size of the cursor
 * element. It is used to calculate the position of the cursor based on the mouse coordinates received
 * in the MouseEvent parameter.
 */
function updateCursor(e: MouseEvent, cursor: HTMLElement, size: number) {
  cursor.style.left = e.clientX - size / 2 + "px";
  cursor.style.top = e.clientY - size / 2 + "px";
}


/**
 * This function creates a blur cursor and attaches it to a specified DOM element, and updates its
 * position based on mouse movement.
 * @param {HTMLElement} DOMElement - The DOM element to which the cursor blur will be attached. If no
 * element is provided, the cursor blur will be attached to the document body by default.
 * @param {CursorProps} props - The `props` parameter is an object that contains properties for
 * configuring the cursor, such as `size`, `color`, and `blurAmount`. These properties are used to
 * create a custom cursor blur using the `createBlurCursor` function.
 * @returns An object with a `destroy` method.
 */
function useCursorBlur(DOMElement: HTMLElement = document.body, props:CursorProps) {
  const cursor = createBlurCursor(props);
  DOMElement.appendChild(cursor);
  const update = (e) => updateCursor(e, cursor, props.size);
  window.addEventListener("mousemove", update);

  return {
    destroy: () => {
      window.removeEventListener("mousemove", update);
      DOMElement.removeChild(cursor);
    },
  };
}

// TODO: Might create a vue composable or wrapper for this in the future.
// TODO: useCursorBlur and unblur maybe?
export { useCursorBlur };
