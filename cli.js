import { SHA1 } from "./SHA1.js";

const fn = Deno.args[0];
const bin = await Deno.readFile(fn);
console.log(await SHA1.digest(bin));
