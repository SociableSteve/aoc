const fs = require("fs");
const lines = fs.readFileSync("./input.txt").toString().split("\n");
let buckets = [];
let buckets2 = [];
const bucket_count = Math.round(lines[0].length / 4);

// Let's create some buckets
for (let i = 0; i < bucket_count; i++) {
  buckets[i] = [];
  buckets2[i] = [];
}

// Fill in the buckets
while ((line = lines.shift()) !== "") {
  let bucket = 0;
  for (i = 0; i < line.length; i += 4) {
    const entry = line.substring(i + 1, i + 2).trim();
    if (entry.length) {
      buckets[bucket].unshift(entry);
      buckets2[bucket].unshift(entry);
    }
    bucket++;
  }
}

const match = new RegExp(/move (.*) from (.*) to (.*)/);
for (line of lines) {
  let interim = [];
  let interim2 = [];
  const [_, amount, from, to] = match.exec(line);
  for (i = 0; i < amount; i++) {
    interim.push(buckets[from - 1].pop());
    interim2.push(buckets2[from - 1].pop());
  }
  buckets[to - 1] = buckets[to - 1].concat(interim);
  interim2.reverse();
  buckets2[to - 1] = buckets2[to - 1].concat(interim2);
}

const part_1 = buckets.reduce((v, f) => v + f[f.length - 1], "");
const part_2 = buckets2.reduce((v, f) => v + f[f.length - 1], "");

console.log("Part 1:", part_1);
console.log("Part 2:", part_2);
