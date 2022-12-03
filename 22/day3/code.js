const fs = require("fs");

const lines = fs.readFileSync("./input.txt").toString().split("\n");
const priorities = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

let running_total = 0;
let running_total_2 = 0;
let badge_lines = [];
for (const line of lines) {
  // Part 1
  const first_half = line.substring(0, line.length / 2).split("");
  const second_half = line.substring(line.length / 2).split("");
  const intersection = first_half
    .filter((value) => second_half.includes(value))
    .filter((value, index, self) => self.indexOf(value) === index)
    .reduce((total, value) => total + priorities.indexOf(value) + 1, 0);
  running_total += intersection;

  // Part 2
  badge_lines.push(line.split(""));
  if (badge_lines.length === 3) {
    running_total_2 +=
      priorities.indexOf(
        badge_lines[0].filter(
          (v) => badge_lines[1].includes(v) && badge_lines[2].includes(v)
        )[0]
      ) + 1;
    badge_lines = [];
  }
}
console.log(running_total, running_total_2);
