interface CursorConfiguration {
  size?: number;
  zIndex?: string;
}
interface CursorProps {
  domElement?: HTMLElement;
  configuration?: CursorConfiguration;
}

const DEFAULT_SIZE = 72;
const DEFAULT_Z_INDEX = "2147483647";
class cursorAgent {
  cursor: HTMLDivElement;
  private domElement: HTMLElement;
  private size: number;
  private zIndex: string;
  constructor(props: CursorProps) {
    const { domElement = null, configuration = {} } = props;
    const { size = DEFAULT_SIZE, zIndex = DEFAULT_Z_INDEX } = configuration;
    this.domElement = domElement;
    this.size = size;
    this.zIndex = zIndex;
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
    //cursorDom.style.backdropFilter = "blur(5px)";
    return cursorDom;
  };

  doWrapperConfig = () => {
    const cursorWrapper = window.document.createElement("div");
    cursorWrapper.style.position = "absolute";
    cursorWrapper.style.zIndex = this.zIndex;
    return cursorWrapper;
  };

  update = (e: MouseEvent) => {
    this.cursor.style.left = e.clientX - this.size / 2 + "px";
    this.cursor.style.top = e.clientY - this.size / 2 + "px";
  };

  init = () => {
    if (this.domElement) {
      this.domElement.appendChild(this.cursor);
    } else {
      document.body.appendChild(this.cursor);
    }
    window.addEventListener("mousemove", this.update);
  };

  destroy = () => {
    window.removeEventListener("mousemove", this.update);
  };
}

export default cursorAgent;
