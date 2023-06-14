import { INITIAL_CURSOR_CONFIG } from "./constant";
import { CursorConfig, CursorProps } from "./type";

/**
 * The function creates a cursor with a blurred or non-blurred mode based on the provided props.
 * @param {CursorProps} props - An object containing optional properties for the cursor.
 * @returns The function `createBlurCursor` returns a DOM element that represents a cursor with a blurred effect.
 */
function createBlurCursor({
  size,
  zIndex,
  blurSize,
  spread,
  feather,
}: CursorConfig) {
  const cursorDom = document.createElement("div");
  cursorDom.id = "cursor";
  cursorDom.style.left = "0px";
  cursorDom.style.top = "0px";
  cursorDom.style.width = `${size}px`;
  cursorDom.style.height = `${size}px`;
  cursorDom.style.border = "none";
  cursorDom.style.borderRadius = "50%";
  cursorDom.style.cssText += `backdrop-filter: blur(${blurSize}px);-webkit-backdrop-filter: blur(${blurSize}px);`;
  if (spread || feather) {
    // @ts-ignore-next-line This is a valid CSS property in some browsers.
    cursorDom.style.maskImage = `radial-gradient(circle, rgba(0,0,0,1}) ${spread}, transparent ${feather})`;
    cursorDom.style.webkitMaskImage = `radial-gradient(circle, rgba(0,0,0,1) ${spread}, transparent ${feather})`;
  }

  const cursorWrapper = document.createElement("div");
  cursorWrapper.style.position = "absolute";
  cursorWrapper.style.zIndex = `${zIndex}`;
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
function updateCursor(e: MouseEvent, cursor: HTMLElement, size: number) {
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
function useCursorBlur(
  DOMElement: HTMLElement = document.body,
  configProps: CursorProps = {}
) {
  /** init */
  const config: CursorConfig = { ...INITIAL_CURSOR_CONFIG, ...configProps };
  const cursor = createBlurCursor(config);
  DOMElement.appendChild(cursor);
  /** update */
  const update = (e) => updateCursor(e, cursor, config.size);
  window.addEventListener("mousemove", update);
  /** destroy */
  const destroy = () => {
    window.removeEventListener("mousemove", update);
    DOMElement.removeChild(cursor);
  };
  return [destroy];
}

// TODO: Might create a vue composable or wrapper for this in the future.
// TODO: useCursorBlur and unblur maybe?
// TODO: easing effects
export { useCursorBlur };
