const fs = require("fs");

let chars = fs.readFileSync("./input.txt").toString().split("");

let packet_chars = [];
let message_chars = [];
let first_part_answer = 0;
let second_part_answer = 0;
for (i = 0; i < chars.length; i++) {
  if (!first_part_answer) {
    packet_chars.push(chars[i]);
    if (new Set(packet_chars).size === 4) {
      first_part_answer = i + 1;
    }
    if (packet_chars.length > 3) packet_chars.shift();
  }

  if (!second_part_answer) {
    message_chars.push(chars[i]);
    if (new Set(message_chars).size === 14) {
      second_part_answer = i + 1;
    }
    if (message_chars.length > 13) message_chars.shift();
  }

  if (first_part_answer && second_part_answer) break; // We've got both answers, let's stop
}

console.log("First part:", first_part_answer);
console.log("Second part:", second_part_answer);
