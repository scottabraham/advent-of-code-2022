import { encodedRpsChoice } from "../../day2/types";

import { calculateRockPaperScissorsScore } from "../../day2/day2";

describe("day 2 - Rock, Paper, Scissors Strategy", () => {
  it("should be defined", () => {
    expect(calculateRockPaperScissorsScore).toBeDefined();
  });

  it("opponnent rock, me paper  points 8", () => {
    expect(calculateRockPaperScissorsScore("A", "Y").points).toBe(8);
  });

  it("opponnent paper, me rock points 1", () => {
    expect(calculateRockPaperScissorsScore("B", "X").points).toBe(1);
  });

  it("opponnent scissors, me scissors points 6", () => {
    expect(calculateRockPaperScissorsScore("C", "Z").points).toBe(6);
  });

  it("follow assumed strategy - expect score to be 11475", () => {
    const fs = require("fs");
    const array: string[] = fs
      .readFileSync("./data/day2/real.txt")
      .toString()
      .split("\n");

    let score = 0;
    array.forEach((element) => {
      const opponent = element.split(" ")[0];
      const me = element.split(" ")[1];
      const res = calculateRockPaperScissorsScore(
        opponent as encodedRpsChoice,
        me as encodedRpsChoice
      );

      score = score + res.points;
    });

    expect(score).toBe(11475);
  });

  it("follow real strategy - oppononent: rock, you: draw. Score: 4", () => {
    expect(calculateRockPaperScissorsScore("A", "Y", true).points).toBe(4);
  });

  it("follow real strategy - oppononent: paper, you: lose. Score: 1", () => {
    expect(calculateRockPaperScissorsScore("B", "X", true).points).toBe(1);
  });

  it("follow real strategy - oppononent: scissors, you: win. Score: 7", () => {
    expect(calculateRockPaperScissorsScore("C", "Z", true).points).toBe(7);
  });


  it("follow real strategy - expect score to be 16862", () => {
    const fs = require("fs");
    const array: string[] = fs
      .readFileSync("./data/day2/real.txt")
      .toString()
      .split("\n");

    let score = 0;
    array.forEach((element) => {
      const opponent = element.split(" ")[0];
      const me = element.split(" ")[1];
      const res = calculateRockPaperScissorsScore(
        opponent as encodedRpsChoice,
        me as encodedRpsChoice,
        true
      );

      score = score + res.points;
    });

    expect(score).toBe(16862);
  });


});
