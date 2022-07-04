# Straight Javascript

## Convert any image to straight image

### Example

```js
const straight = require("straight.js").default;
const fs = require("fs");

const converted = await straight.hetero("https://example.com/image.png");
fs.writeFileSync("./test.png", converted);
```

#### Result

<img src="https://github.com/AngeloCore/straightjs/blob/main/examples/test.png?raw=true" width="300"/>

<hr />

### Installation

```sh
npm i straight.js --save
```

### Importing

```js
const straight = require("straight.js").default;
```

#### TypeScript/ES

```ts
import straight from "straight.js";
```

### Methods

**hetero(image, ?opacity)**

> Image: `string` or `Buffer`
>
> Opacity (not required): `number`

##### **Returns:** `Promise<Buffer>`

<hr />

## Happy straight month (July)! ❤️

- [Discord](https://discord.gg/KUS5pjyA4J)
- [Bugs](https://github.com/AngeloCore/straightjs/issues)
