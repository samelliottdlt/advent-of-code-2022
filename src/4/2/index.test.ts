import { test } from "@jest/globals";
import assert from "assert";
import fun from "./";

const input = `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`;

test("test", () => {
  assert.equal(fun(input), 4);
});
