import exp = require("constants");
import { findDuplicateAssignments } from "../../day4";
describe("day 4 - camp cleanup assignments", () => {
  it("should be defined", () => {
    expect(findDuplicateAssignments).toBeDefined();
  });

  it("2 strings should be created, each with correct length", () => {
    const input = "2-4,6-8";
    const res = findDuplicateAssignments(input);
    expect(res.sections[0].sectionMap.length).toBe(8);
    expect(res.sections[1].sectionMap.length).toBe(8);
  });

  it("2 strings created with correct values", () => {
    const input = "2-4,6-8";
    const res = findDuplicateAssignments(input);
    expect(res.sections[0].sectionMap).toBe(".***....");
    expect(res.sections[1].sectionMap).toBe(".....***");
  });

  it("num sections should be 3 and 3", () => {
    const input = "2-4,6-8";
    const res = findDuplicateAssignments(input);
    expect(res.sections[0].numSections).toBe(3);
    expect(res.sections[1].numSections).toBe(3);
  });

  it("combined sections for comparison - no match", () => {
    const input = "2-4,6-8";
    const res = findDuplicateAssignments(input);
    expect(res.comparison).toBe("........");
  });

  it("2-8, 3-7 is a duplicate", () => {
    const input = "2-8,3-7";
    const res = findDuplicateAssignments(input);
    expect(res.sectionDuplicate).toBe(true);
  });

  it("combined sections for comparison - match", () => {
    const input = "6-6,4-6";
    const res = findDuplicateAssignments(input);
    expect(res.comparison).toBe(".....*");
    expect(res.sectionDuplicate).toBe(true);
  });

  it("duplicates in sample date equals 2", () => {
    const fs = require("fs");
    const array: string[] = fs
      .readFileSync("./data/day4/sample.txt")
      .toString()
      .split("\n");

    let total = 0;
    array.forEach((element) => {
      const res = findDuplicateAssignments(element);
      if (res.sectionDuplicate) {
        total = total + 1;
      }
    });

    expect(total).toBe(2);
  });

  it("duplicates in real data equals 462", () => {
    const fs = require("fs");
    const array: string[] = fs
      .readFileSync("./data/day4/real.txt")
      .toString()
      .split("\n");

    let total = 0;
    array.forEach((element) => {
      const res = findDuplicateAssignments(element);
      if (res.sectionDuplicate) {
        total = total + 1;
      }
    });

    expect(total).toBe(462);
  });

  it("overlaps in sample date equals 4", () => {
    const fs = require("fs");
    const array: string[] = fs
      .readFileSync("./data/day4/sample.txt")
      .toString()
      .split("\n");

    let total = 0;
    array.forEach((element) => {
      const res = findDuplicateAssignments(element);
      if (res.sectionOverlap) {
        total = total + 1;
      }
    });

    expect(total).toBe(4);
  });

  it("overlaps in real date equals 835", () => {
    const fs = require("fs");
    const array: string[] = fs
      .readFileSync("./data/day4/real.txt")
      .toString()
      .split("\n");

    let total = 0;
    array.forEach((element) => {
      const res = findDuplicateAssignments(element);
      if (res.sectionOverlap) {
        total = total + 1;
      }
    });

    expect(total).toBe(835);
  });
});
