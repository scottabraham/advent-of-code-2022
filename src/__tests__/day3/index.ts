import exp = require("constants");
import { rucksackReorganizer, badgeFinder } from "../../day3";
describe("day 3 - Rucksack re-organization", () => {
  it("should be defined", () => {
    expect(rucksackReorganizer).toBeDefined();
  });

  it("split into 2 compartments", () => {
    const items = "vJrwpWtwJgWrhcsFMMfFFhFp";
    const res = rucksackReorganizer(items);

    expect(res.compartments[0]).toStrictEqual("vJrwpWtwJgWr");
    expect(res.compartments[1]).toStrictEqual("hcsFMMfFFhFp");
  });

  it("identify duplicates", () => {
    const items = "vJrwpWtwJgWrhcsFMMfFFhFp";
    const res = rucksackReorganizer(items);
    expect(res.duplicate)?.toStrictEqual("p");
  });

  it("identify no duplicates", () => {
    const items = "acbdef";
    const res = rucksackReorganizer(items);
    expect(res.duplicate)?.toStrictEqual("");
  });

  it("find priority for lower case letter", () => {
    const items = "vJrwpWtwJgWrhcsFMMfFFhFp";
    const res = rucksackReorganizer(items);
    expect(res.duplicate)?.toStrictEqual("p");
    expect(res.priority)?.toStrictEqual(16);
  });

  it("find priority for upper case letter", () => {
    const items = "ffAcvA";
    const res = rucksackReorganizer(items);
    expect(res.duplicate)?.toStrictEqual("A");
    expect(res.priority)?.toStrictEqual(27);
  });

  it("find total priority for part1", () => {
    const fs = require("fs");
    const array: string[] = fs
      .readFileSync("./data/day3/input.txt")
      .toString()
      .split("\n");

    let total = 0;
    array.forEach((element) => {
      const res = rucksackReorganizer(element);
      total = total + res.priority;
    });
    expect(total).toBe(7990);
  });
});

describe("day 3 - badge finder", () => {
  it("should be defined", () => {
    expect(badgeFinder).toBeDefined();
  });

  it("r is the badge from the test data", () => {
    const bags = [
      "vJrwpWtwJgWrhcsFMMfFFhFp",
      "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL",
      "PmmdzqPrVvPwwTWBwg",
    ];
    const res = badgeFinder(bags);

    expect(res.badge).toBe("r");
    expect(res.priority).toBe(18);
  });

  it("badge for the real data - total = 2602", () => {
    const fs = require("fs");
    const array: string[] = fs
      .readFileSync("./data/day3/input.txt")
      .toString()
      .split("\n");

    let temp: string[] = [];
    let total = 0;
    array.forEach((element) => {
      temp.push(element);
      if (temp.length === 3) {
        const res = badgeFinder(temp);
        total = total + res.priority;
        temp = [];
      }
    });

    expect(total).toBe(2602);
  });
});
