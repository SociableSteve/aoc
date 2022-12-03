const fs = require("fs");

const lines = fs.readFileSync("./input.txt").toString().split("\n");

let counter_part_1 = 0;
let counter_part_2 = 0;
let previous = 0;

let previous_window = [];
let current_window = [];

for (const line of lines) {
  // Part 1
  if (previous > 0 && parseInt(line) > previous) {
    counter_part_1++;
  }
  previous = parseInt(line);

  // Part 2
  current_window.push(parseInt(line));
  if (current_window.length < 3) {
    continue;
  }

  if (
    previous_window.length &&
    previous_window.reduce((p, v) => p + v) <
      current_window.reduce((p, v) => p + v)
  )
    counter_part_2++;
  previous_window = [...current_window];
  current_window.shift();
}

console.log("Part 1:", counter_part_1);
console.log("Part 2:", counter_part_2);
