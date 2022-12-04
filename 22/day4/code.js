const fs = require("fs");

const lines = fs.readFileSync("./input.txt").toString().split("\n");

let part1_count = 0;
let part2_count = 0;
for (const line of lines) {
  const [first_range, second_range] = line
    .split(",")
    .map((entry) => entry.split("-"))
    .map((entry) => [parseInt(entry[0]), parseInt(entry[1])]);

  // Part 1
  if (
    (first_range[0] <= second_range[0] && first_range[1] >= second_range[1]) || // Range 2 is contained entierly within Range 1
    (first_range[0] >= second_range[0] && first_range[1] <= second_range[1]) // Range 2 is contained entierly within Range 2
  ) {
    part1_count++;
  }

  // Part 2
  if (
    (first_range[0] >= second_range[0] && first_range[0] <= second_range[1]) || // Range 1 starts within Range 2
    (first_range[1] >= second_range[0] && first_range[1] <= second_range[1]) || // Range 1 ends within Range 2
    (second_range[0] >= first_range[0] && second_range[0] <= first_range[1]) || // Range 2 starts within Range 1
    (second_range[1] >= first_range[0] && second_range[1] <= first_range[1]) // Range 2 ends withing Range 1
  ) {
    part2_count++;
  }
}

console.log("Part 1:", part1_count);
console.log("Part 2:", part2_count);
