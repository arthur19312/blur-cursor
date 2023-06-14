const DEFAULT_SIZE = 72;
const DEFAULT_Z_INDEX = 2147483647;

export const INITIAL_CURSOR_CONFIG = {
  size: DEFAULT_SIZE, // the round cursor scale in px
  zIndex: DEFAULT_Z_INDEX, // max zIndex value, could be more appropriate if you need
  blurSize: 5, // how blurry this cursor is
  spread: "", // completely blurry area scale in percent suffix, like "40%"
  feather: "", // the transparent edge scale in percent suffix, like "60%"
};
