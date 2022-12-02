const fs = require("fs");

/**
 * Configure the game rules
 */
const selections = {
  ROCK: { points: 1, beats: null, loses: null },
  PAPER: { points: 2, beats: null, loses: null },
  SCISSORS: { points: 3, beats: null, loses: null },
};

selections.ROCK.beats = selections.SCISSORS;
selections.ROCK.loses = selections.PAPER;

selections.PAPER.beats = selections.ROCK;
selections.PAPER.loses = selections.SCISSORS;

selections.SCISSORS.beats = selections.PAPER;
selections.SCISSORS.loses = selections.ROCK;

/**
 * Define game points
 */
const WIN_SCORE = 6;
const DRAW_SCORE = 3;
const LOSE_SCORE = 0;

/**
 * Define common conversions
 */
const their_options = {
  A: selections.ROCK,
  B: selections.PAPER,
  C: selections.SCISSORS,
};

/**
 * Do the calculations!
 */
let part1_score = 0;
let part2_score = 0;

const lines = fs.readFileSync("./input.txt").toString().split("\n");
for (const line of lines) {
  const [theirs, ours] = line.split(" ");
  part1_score += calculatePart1(theirs, ours);
  part2_score += calculatePart2(theirs, ours);
}
console.log("Part 1:", part1_score);
console.log("Part 2:", part2_score);

function calculatePart1(theirs, ours) {
  const our_options = {
    X: selections.ROCK,
    Y: selections.PAPER,
    Z: selections.SCISSORS,
  };

  const their_selection = their_options[theirs];
  const our_selection = our_options[ours];

  let outcome_points =
    our_selection.beats == their_selection
      ? WIN_SCORE
      : their_selection.beats == our_selection
      ? LOSE_SCORE
      : DRAW_SCORE;

  return our_selection.points + outcome_points;
}

function calculatePart2(theirs, ours) {
  const their_selection = their_options[theirs];
  switch (ours) {
    case "X": // Lose
      return LOSE_SCORE + their_selection.beats.points;
    case "Y": // Draw
      return DRAW_SCORE + their_selection.points;
    case "Z": // Win
      return WIN_SCORE + their_selection.loses.points;
  }
}
