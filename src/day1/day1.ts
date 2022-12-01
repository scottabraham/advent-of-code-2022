export type elf = {
  name: string;
  calories: number;
};

export class Day1 {
  private elves: elf[];
  private data: string[];
  constructor(dataArray: string[]) {
    console.log("Day 1 constructor");
    this.data = dataArray;
    this.elves = this.constructElves(this.data);
  }

  constructElves(data: string[]): elf[] {
    const elves: elf[] = [];

    let calories = 0;
    data.forEach((line) => {
      if (line === "") {
        elves.push({ name: `elf ${elves.length} `, calories: calories });
        calories = 0;
      } else {
        calories = calories + parseInt(line);
      }
    });
    if (calories > 0) {
      elves.push({ name: `elf ${elves.length} `, calories: calories });
    }
    return elves;
  }

  getElves(): elf[] {
    return this.elves;
  }

  getLargestCalorieElf(): elf {
    return this.elves.sort((a, b) => b.calories - a.calories)[0];
  }

  getTop3CalorieElves(): number {
    const sortedElves = this.elves.sort((a, b) => b.calories - a.calories);
    return sortedElves
      .slice(0, 3)
      .map((elf) => elf.calories)
      .reduce((a, b) => a + b, 0);
  }
}
