import siteInput from "../input";

// [2, 2] [2, 2]
export function isContained(pairA: [number, number], pairB: [number, number]) {
  return (
    (pairA[0] <= pairB[0] && pairA[1] >= pairB[1]) ||
    (pairA[0] >= +pairB[0] && pairA[1] <= pairB[1])
  );
}

export default function (input = siteInput) {
  const pairs = input
    .split("\n")
    .map((line) =>
      line
        .split(",")
        .map((pair) => pair.split("-").map(Number) as [number, number])
    );
  const pairIsContained = pairs.filter(([pairA, pairB]) =>
    isContained(pairA, pairB)
  );
  return pairIsContained.length;
}
