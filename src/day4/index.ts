interface findDuplicateAssignmentsRes {
  sections: section[];
  comparison?: string;
  sectionDuplicate: boolean;
  sectionOverlap: boolean;
}

type section = {
  sectionMap: string;
  numSections: number;
};

const fillString = (length: number, sectionArray: number[]): string => {
  let str = "";
  for (let i = 1; i < length + 1; i++) {
    str = str.concat(sectionArray.includes(i) ? "*" : ".");
  }
  return str;
};

const findLargestSectionNumber = (input: string[]): number => {
  const largestSection = input.reduce((acc, curr) => {
    const currSection = curr.split("-"); // ["2", "4"]
    const currSectionLength = parseInt(currSection[1]);
    if (currSectionLength > acc) {
      return currSectionLength;
    }
    return acc;
  }, 0);
  return largestSection;
};

const findAllNumbersInBetween = (start: number, end: number): number[] => {
  const numbers = [];
  for (let i = start; i <= end; i++) {
    numbers.push(i);
  }
  return numbers;
};

/* AND the values of two arrays together. If there is a match the value is * else it is . */
const andValues = (arr1: string[], arr2: string[]): string[] => {
  return arr1.map((char, index) => {
    return char === "*" && arr2[index] === "*" ? "*" : ".";
  });
};

/* funtion to count number of instances of a character in a string */
const countChars = (str: string, char: string): number => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
};

export const findDuplicateAssignments = (
  input: string
): findDuplicateAssignmentsRes => {
  const inputArray = input.split(","); // ["2-4", "6-8"]
  const largestSection = findLargestSectionNumber(inputArray); // 8

  const sections = inputArray.map((section) => {
    const sectionArray = section.split("-"); // ["2", "4"]
    const start = parseInt(sectionArray[0]); // 2
    const end = parseInt(sectionArray[1]); // 4
    const sectionNumbers = findAllNumbersInBetween(start, end); // [2, 3, 4]
    return fillString(largestSection, sectionNumbers); //
  });

  const res = sections.map((section) => {
    return {
      sectionMap: section,
      numSections: section.split("*").length - 1,
    };
  });

  const section1 = res[0];
  const section2 = res[1];

  const comparison = andValues(
    section1.sectionMap.split(""),
    section2.sectionMap.split("")
  ).join("");

  let sectionDuplicate = false;
  if (
    countChars(comparison, "*") === countChars(section1.sectionMap, "*") ||
    countChars(comparison, "*") === countChars(section2.sectionMap, "*")
  ) {
    sectionDuplicate = true;
  }

  return {
    sections: res,
    comparison,
    sectionDuplicate,
    sectionOverlap: comparison.includes("*"),
  };
};
