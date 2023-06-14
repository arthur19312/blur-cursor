import { useCursorBlur } from "./cursorAgent";

useCursorBlur(
  document.body,
  {
    size: 200,
    zIndex: '10',
    blurSize: 4,
    feather: '60%',
    spread: '40%'
  }
)
