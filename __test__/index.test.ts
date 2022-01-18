const cursorAgent = require("../dist/index.js");
const blurCursor = new cursorAgent({ size: 64, zIndex: 10, blurSize: 4 });

test("actions provide", () => {
  expect(typeof blurCursor.init).toBe("function");
  expect(typeof blurCursor.destroy).toBe("function");
});

const wrapper = window.document.createElement("div");
wrapper.id = "cursor";
document.body.appendChild(wrapper);

blurCursor.init(wrapper);

test("test init params", () => {
  const cursor = document.querySelector("#cursor");
  // how to test css?
});
