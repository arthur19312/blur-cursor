# Usage Changelog

# 1.0.3

## Usage

```javascript
import cursorAgent from "./cursorAgent";
const blurCursor = new cursorAgent();

/* init when you need */
blurCursor.init();

/* destroy when you need */
blurCursor.destroy();
```

## Properties

every property is default as:

```javascript
const defaultProps = {
  /* diameter of the round cursor, the default size cursor looks like a thumb */
  size: 72,
  /* heard as the maximum z-index, replace it with an appropriate value */
  zIndex: 2147483647,
  /* degree of blur */
  blurSize: 5,
};
```

when you init, input the dom to mount the cursor:

```javascript
blurCursor.init(someDomNode);
```

well, input nothing will mount the cursor on document.body
