import { calculatePriority } from "../1";
import siteInput from "../input";

function calculateIntersectionNSets(...sets: Set<string>[]) {
  return sets.reduce(calculateIntersection);
}

function calculateIntersection(a: Set<string>, b: Set<string>) {
  const intersection = new Set<string>();
  for (const char of a) {
    if (b.has(char)) {
      intersection.add(char);
    }
  }
  return intersection;
}

export default function (input = siteInput) {
  const lines = input.split("\n");

  const groups: Array<Array<string>> = [[]];
  for (const line of lines) {
    const last = groups[groups.length - 1];
    if (last.length < 3) {
      last.push(line);
    } else {
      groups.push([line]);
    }
  }

  let sum = 0;
  for (const group of groups) {
    const sets = group.map((g) => new Set(g));
    const intersection = calculateIntersectionNSets(...sets);
    const priority = calculatePriority([...intersection].join(""));
    sum += priority;
  }
  return sum;
}
