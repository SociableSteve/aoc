const fs = require("fs");

let chars = fs.readFileSync("./input.txt").toString().split("");
const packet_width = 4;
const message_width = 14;

let first_part_answer = 0;
let second_part_answer = 0;

for (i = 0; i < chars.length; i++) {
  if (!first_part_answer) {
    if (new Set(chars.slice(i - packet_width, i)).size === packet_width) {
      first_part_answer = i;
    }
  }

  if (new Set(chars.slice(i - message_width, i)).size === message_width) {
    second_part_answer = i;
    break;
  }
}

console.log("First part:", first_part_answer);
console.log("Second part:", second_part_answer);
