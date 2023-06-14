import { useCursorBlur } from "./cursor";

useCursorBlur(document.body, {
  size: 200,
  zIndex: 10,
  blurSize: 4,
  spread: "40%",
  feather: "60%",
});
