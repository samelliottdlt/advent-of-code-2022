import siteInput from "../input";

enum InputMap {
  "A" = "rock",
  "B" = "paper",
  "C" = "scissors",
}

enum CheatMap {
  "X" = "LOSE",
  "Y" = "DRAW",
  "Z" = "WIN",
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

const toCheatMap = (input: keyof typeof CheatMap): CheatMap => {
  return CheatMap[input];
};

const evaluateContest = (a: InputMap, b: CheatMap): number => {
  if (a === "rock") {
    if (b === "WIN") {
      return OutcomeScore["WIN"] + ShapeScore["paper"];
    }
    if (b === "DRAW") {
      return OutcomeScore["DRAW"] + ShapeScore["rock"];
    }
    if (b === "LOSE") {
      return OutcomeScore["LOSE"] + ShapeScore["scissors"];
    }
  }
  if (a === "paper") {
    if (b === "WIN") {
      return OutcomeScore["WIN"] + ShapeScore["scissors"];
    }
    if (b === "DRAW") {
      return OutcomeScore["DRAW"] + ShapeScore["paper"];
    }
    if (b === "LOSE") {
      return OutcomeScore["LOSE"] + ShapeScore["rock"];
    }
  }
  if (a === "scissors") {
    if (b === "WIN") {
      return OutcomeScore["WIN"] + ShapeScore["rock"];
    }
    if (b === "DRAW") {
      return OutcomeScore["DRAW"] + ShapeScore["scissors"];
    }
    if (b === "LOSE") {
      return OutcomeScore["LOSE"] + ShapeScore["paper"];
    }
  }
  throw new Error("Invalid input");
};

export default function (input = siteInput) {
  const result = input
    .split("\n")
    .map((line) => line.split(" "))
    .map(
      ([a, b]) =>
        [
          toInputMap(a as keyof typeof InputMap),
          toCheatMap(b as keyof typeof CheatMap),
        ] as [InputMap, CheatMap]
    )
    .map(([a, b]) => evaluateContest(a, b))
    .reduce((acc, cur) => acc + cur, 0);
  return result;
}
