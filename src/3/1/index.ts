import siteInput from "../input";

export function calculatePriority(input: string) {
  let priority = 0;
  for (const char of input) {
    if (char === char.toLowerCase()) {
      priority += char.charCodeAt(0) - 96;
    }
    if (char === char.toUpperCase()) {
      priority += char.charCodeAt(0) - 38;
    }
  }
  return priority;
}

function setFromStringChars(input: string) {
  const set = new Set<string>();
  for (const char of input) {
    set.add(char);
  }
  return set;
}

export default function (input = siteInput) {
  const pairs = input
    .split("\n")
    .map((line) => [
      line.substring(0, line.length / 2),
      line.substring(line.length / 2),
    ]);

  let sum = 0;
  for (const pair of pairs) {
    const [first, second] = pair;
    const firstSet = setFromStringChars(first);
    const secondSet = setFromStringChars(second);
    const intersection = [...firstSet].filter((x) => secondSet.has(x));
    const priority = calculatePriority(intersection.join(""));
    sum += priority;
  }
  return sum;
}
