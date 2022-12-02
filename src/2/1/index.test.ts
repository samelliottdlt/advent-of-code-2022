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

xtest("site input", () => {
  const pairs = siteInput.split("\n").map((line) => line.split(" "));
  for (const pair of pairs) {
    assert.ok(pair[0] === "A" || pair[0] === "B" || pair[0] === "C");
    assert.ok(pair[1] === "X" || pair[1] === "Y" || pair[1] === "Z");
  }
});

test("test input", () => {
  const result = fun(input);
  assert.equal(result, 15);
});
