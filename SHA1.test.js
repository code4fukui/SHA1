import * as t from "https://deno.land/std/testing/asserts.ts";
import { SHA1 } from "./SHA1.js";

Deno.test("simple", async () => {
  t.assertEquals(await SHA1.digest("hello world"), "2aae6c35c94fcfb415dbe95f408b9ce91ee846ed");
});
Deno.test("bin", async () => {
  t.assertEquals(await SHA1.digest(new TextEncoder().encode("hello world")), "2aae6c35c94fcfb415dbe95f408b9ce91ee846ed");
});

