import { test } from "@jest/globals";
import assert from "assert";
import fun, { isContained } from "./";

const input = `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`;

test("test", () => {
  assert.equal(fun(input), 2);
});

test("is contained", () => {
  assert.ok(isContained([2, 2], [2, 2]));
  assert.ok(isContained([2, 8], [3, 6]));
  assert.ok(!isContained([2, 3], [4, 5]));
  assert.ok(!isContained([2, 8], [9, 10]));
  assert.ok(isContained([2, 8], [2, 8]));
  assert.ok(!isContained([3, 97], [98, 99]));
  assert.ok(isContained([8, 87], [53, 62]));
});
