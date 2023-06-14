✨ A cursor with backdrop-filter-blur just like https://metajive.com

## Installation

```shell
$ npm i blur-cursor
```

## Usage

```javascript
import { useCursorBlur } from "blur-cursor";
const [destroy] = useCursorBlur(domNode, { ...config });

/** detroy it when you need */
destroy();
```

## Cursor Properties

properties are default as:

```javascript
export const INITIAL_CURSOR_CONFIG = {
  size: 72, // the round cursor scale in px
  zIndex: 2147483647, // max zIndex value, could be more appropriate when you need
  blurSize: 5, // how blurry this cursor is
  spread: "", // completely blurry area scale in percent suffix, like "40%"
  feather: "", // the transparent edge scale in percent suffix, like "60%"
};
```

if you need feather effect, you should use `spread` and `feather` attributes that work as

```javascript
`radial-gradient(circle, rgba(0,0,0,1}) ${spread}, transparent ${feather})`;
```
