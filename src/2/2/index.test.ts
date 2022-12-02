import { test, xtest } from "@jest/globals";
import assert from "assert";
import fun from ".";

import siteInput from "../input";

const input = `A Y
B X
C Z`;

xtest("site input", () => {
  fun(siteInput);
});

test("test input", () => {
  const result = fun(input);
  assert.equal(result, 12);
});
