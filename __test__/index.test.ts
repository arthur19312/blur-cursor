const { useCursorBlur } = require("../dist/index.js");

const wrapper = window.document.createElement("div");
wrapper.id = "cursor";
document.body.appendChild(wrapper);

const [destroyCursor] = useCursorBlur(document.body, {
  size: 64,
  zIndex: 10,
  blurSize: 4,
  feather: "60%",
});

test("actions provide", () => {
  expect(typeof destroyCursor).toBe("function");
});
