import { test } from "@jest/globals";
import assert from "assert";
import fun, { calculatePriority } from "./";

const input = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`;

test("test input", () => {
  const result = fun(input);
  assert.equal(result, 157);
});

test("priority calculation", () => {
  assert.equal(calculatePriority('p'), 16);
  assert.equal(calculatePriority('L'), 38);
  assert.equal(calculatePriority('P'), 42);
  assert.equal(calculatePriority('v'), 22);
  assert.equal(calculatePriority('t'), 20);
  assert.equal(calculatePriority('s'), 19);
});