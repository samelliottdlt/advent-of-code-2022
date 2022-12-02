import siteInput from "../input";

enum InputMap {
  "A" = "rock",
  "B" = "paper",
  "C" = "scissors",
  "X" = "rock",
  "Y" = "paper",
  "Z" = "scissors",
}

enum ShapeScore {
  "rock" = 1,
  "paper" = 2,
  "scissors" = 3,
}

enum OutcomeScore {
  "WIN" = 6,
  "DRAW" = 3,
  "LOSE" = 0,
}

const toInputMap = (input: keyof typeof InputMap): InputMap => {
  return InputMap[input];
};

const evaluateContest = (a: InputMap, b: InputMap): number => {
  if (a === b) {
    return OutcomeScore["DRAW"];
  }
  if (a === "rock") {
    return b === "paper" ? OutcomeScore["WIN"] : OutcomeScore["LOSE"];
  }
  if (a === "paper") {
    return b === "scissors" ? OutcomeScore["WIN"] : OutcomeScore["LOSE"];
  }
  if (a === "scissors") {
    return b === "rock" ? OutcomeScore["WIN"] : OutcomeScore["LOSE"];
  }
  throw new Error("Invalid input");
};

export default function (input = siteInput) {
  const result = input
    .split("\n")
    .map((line) => line.split(" "))
    .map(([a, b]) => [
      toInputMap(a as keyof typeof InputMap),
      toInputMap(b as keyof typeof InputMap),
    ])
    .map(([a, b]) => evaluateContest(a, b) + ShapeScore[b])
    .reduce((acc, cur) => acc + cur, 0);
  return result;
}
