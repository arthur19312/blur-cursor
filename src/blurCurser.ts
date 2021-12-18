const DEFAULT_SIZE = 32;
const DEFAULT_ZINDEX = 2147483647;

interface Position {
    x: number;
    y: number;
}

class BlurCurser {
    private position: Position;
    private size: number;
    private zIndex: number;
    constructor(size: number = DEFAULT_SIZE, zIndex: number = DEFAULT_ZINDEX) {
        this.size = size;
        this.zIndex = zIndex;
    }
    update(x: number, y: number) {
        this.position.x = x;
        this.position.y = y;
    }
}

export default BlurCurser;