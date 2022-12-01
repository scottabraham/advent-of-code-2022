import fs = require("fs");

import { Day1 } from "../../day1/day1";

const readFileIntoArray = (filename: string): string[] => {
  return fs.readFileSync(filename).toString().split("\n");
};

describe("day 1 - calorie counting", () => {
  it("should be defined", () => {
    const d1 = new Day1([]);
    expect(d1).toBeDefined();
  });

  it("should create an array with 5 elements", () => {
    const data = readFileIntoArray("./data/day1/test.txt");
    const d1 = new Day1(data);
    expect(d1.getElves().length).toStrictEqual(5);
  });

  it("largest elf in test data should be 24000 cals", () => {
    const data = readFileIntoArray("./data/day1/test.txt");
    const d1 = new Day1(data);
    expect(d1.getLargestCalorieElf().calories).toStrictEqual(24000);
  });

  it("top 3 elves in test data should be 45000 cals", () => {
    const data = readFileIntoArray("./data/day1/test.txt");
    const d1 = new Day1(data);
    expect(d1.getTop3CalorieElves()).toStrictEqual(45000);
  });

  it("largest elf in real data should be 65912 cals", () => {
    const data = readFileIntoArray("./data/day1/real.txt");
    const d1 = new Day1(data);
    expect(d1.getLargestCalorieElf().calories).toStrictEqual(65912);
  });

  it("top 3 elves in real data should be 195625 cals", () => {
    const data = readFileIntoArray("./data/day1/real.txt");
    const d1 = new Day1(data);
    expect(d1.getTop3CalorieElves()).toStrictEqual(195625);
  });
});
