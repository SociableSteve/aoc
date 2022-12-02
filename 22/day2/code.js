const fs = require("fs");

const options = {
  "A X": { part1: 1 + 3, part2: 0 + 3 },
  "A Y": { part1: 2 + 6, part2: 3 + 1 },
  "A Z": { part1: 3 + 0, part2: 6 + 2 },
  "B X": { part1: 1 + 0, part2: 0 + 1 },
  "B Y": { part1: 2 + 3, part2: 3 + 2 },
  "B Z": { part1: 3 + 6, part2: 6 + 3 },
  "C X": { part1: 1 + 6, part2: 0 + 2 },
  "C Y": { part1: 2 + 0, part2: 3 + 3 },
  "C Z": { part1: 3 + 3, part2: 6 + 1 },
};

let overall_score = { part1: 0, part2: 0 };

const lines = fs.readFileSync("./input.txt").toString().split("\n");
for (const line of lines) {
  overall_score.part1 += options[line].part1;
  overall_score.part2 += options[line].part2;
}

console.log(overall_score);
