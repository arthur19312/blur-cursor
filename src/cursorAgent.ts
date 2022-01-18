interface CursorProps {
  size?: number;
  zIndex?: string;
  blurSize?: number;
}

const DEFAULT_SIZE = 72;
const DEFAULT_Z_INDEX = "2147483647";
class cursorAgent {
  cursor: HTMLDivElement;
  size: number;
  zIndex: string;
  blurSize: number;
  domElement: HTMLElement;
  constructor(props: CursorProps = {}) {
    const {
      size = DEFAULT_SIZE,
      zIndex = DEFAULT_Z_INDEX,
      blurSize = 5,
    } = props;
    this.size = size;
    this.zIndex = zIndex;
    this.blurSize = blurSize;
    this.cursor = this.createBlurcursor();
  }

  createBlurcursor() {
    const cursorDom = this.doCursorConfig();
    const cursorWrapper = this.doWrapperConfig();
    cursorWrapper.appendChild(cursorDom);
    return cursorWrapper;
  }

  doCursorConfig = () => {
    const cursorDom = window.document.createElement("div");
    cursorDom.id = "cursor";
    cursorDom.style.width = `${this.size}px`;
    cursorDom.style.height = `${this.size}px`;
    cursorDom.style.border = "none";
    cursorDom.style.borderRadius = "50%";
    cursorDom.style.cssText += `backdrop-filter: blur(${this.blurSize}px);-webkit-backdrop-filter: blur(${this.blurSize}px);`;
    return cursorDom;
  };

  doWrapperConfig = () => {
    const cursorWrapper = window.document.createElement("div");
    cursorWrapper.style.position = "absolute";
    cursorWrapper.style.zIndex = this.zIndex;
    cursorWrapper.style.pointerEvents = "none";
    return cursorWrapper;
  };

  update = (e: MouseEvent) => {
    this.cursor.style.left = e.clientX - this.size / 2 + "px";
    this.cursor.style.top = e.clientY - this.size / 2 + "px";
  };

  init = (domElement = null) => {
    this.domElement = domElement ? domElement : document.body;
    this.domElement.appendChild(this.cursor);
    window.addEventListener("mousemove", this.update);
  };

  destroy = () => {
    window.removeEventListener("mousemove", this.update);
    this.domElement.removeChild(this.cursor);
  };
}

export default cursorAgent;
