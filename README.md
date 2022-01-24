✨ A cursor with backdrop-filter-blur just like https://metajive.com

## Installation

```shell
$ npm i blur-cursor
```

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

properties are default as:

```javascript
const defaultProps = {
  /* diameter of the round cursor */
  size: 72,
  /* heard as the maximum z-index, replace it with an appropriate value */
  zIndex: 2147483647,
  /* degree of blur */
  blurSize: 5,
};
```

when you do init, input the dom to mount the cursor:

```javascript
blurCursor.init(someDomNode);
```

well, input nothing will mount the cursor on document.body
