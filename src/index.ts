// Ex: npm start 1
// will run the index.ts file in the 1 folder

import path from "path";

const args = process.argv.slice(2);
const day = args[0];
const part = args[1];
const file = `dist/${day}/${part}/index.js`;
// eslint-disable-next-line @typescript-eslint/no-var-requires
const func = require(path.resolve(file));

const result = func.default();

console.log(`The result is: ${result}`);
