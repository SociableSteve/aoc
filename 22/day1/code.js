const fs = require("fs");
const readline = require("readline");

let top_3_counts = [0, 0, 0];
let running_total = 0;

/***
 * This code uses streams to do the work, reading a line at a time rather than everything at once. Better memory management and less overall looping.
 */
const reader = readline.createInterface({
  input: fs.createReadStream("./input.txt"),
});

reader.on("line", (line) => {
  if (!line.length) {
    top_3_counts.push(running_total);
    top_3_counts.sort();
    top_3_counts.shift();
    running_total = 0;
  } else {
    running_total += parseInt(line);
  }
});

reader.once("close", () => {
  console.log("Maximum:", top_3_counts[top_3_counts.length - 1]);
  console.log(
    "Top three:",
    top_3_counts[0] + top_3_counts[1] + top_3_counts[2]
  );
});

/***
 * This code is easier to understand, but will use more memory and will need to loop over the entries twice, once for file load and once to process the content.
 */
const lines = fs.readFileSync("./input.txt").toString().split("\n");
let counts = [];
running_total = 0;

for (const line of lines) {
  if (!line.length) {
    counts.push(running_total);
    running_total = 0;
  } else {
    running_total += parseInt(line);
  }
}
counts.sort().reverse();
console.log("Maximum:", counts[0]);
console.log("Top three:", counts[0] + counts[1] + counts[2]);
