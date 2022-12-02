import input from "../input";

export default function () {
  const inputArray = input.split("\n");
  const calories: number[] = [];
  for (const entry of inputArray) {
    if (entry !== "") {
      calories[calories.length - 1] =
        parseInt(entry, 10) + calories[calories.length - 1];
    } else {
      calories.push(0);
    }
  }

  const largest = [0, 0, 0];
  for (const entry of calories) {
    const smallest = Math.min(...largest);
    if (entry > smallest) {
      largest[largest.indexOf(smallest)] = entry;
    }
  }

  return largest.reduce((a, b) => a + b, 0);
}
