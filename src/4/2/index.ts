import siteInput from "../input";

function pairOverlaps(pairA: [number, number], pairB: [number, number]) {
  return pairA[0] <= pairB[1] && pairB[0] <= pairA[1];
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
    pairOverlaps(pairA, pairB)
  );
  return pairIsContained.length;
}
