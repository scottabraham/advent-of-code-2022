import exp = require("constants");

export type rucksackReorganizerResult = {
  compartments: string[];
  duplicate: string;
  priority: number;
};

const getAsciiValue = (char: string): number => {
  return char.charCodeAt(0);
}

const assignPriority = (char: string): number => { 
  if (char === "") return 0;
  const asciiVal =  getAsciiValue(char);
  return asciiVal >= 97 ? asciiVal - 96 : asciiVal - 38;
}

const findDuplicate = (compartments: string[]): string => {

    const comp1 = compartments[0].split("");
    const comp2 = compartments[1].split('');
    
    for (let i = 0; i < comp1.length; i++) {
        if(comp2.findIndex((c) => c === comp1[i]) > -1) {
            return comp1[i];
        }
    }
    return '';
};

const compartmentsSorter = (items: string): string[] => {
  return [
    items.substring(0, items.length / 2),
    items.substring(items.length / 2),
  ];
};

export const rucksackReorganizer = (
  items: string
): rucksackReorganizerResult => {
  const compartments = compartmentsSorter(items);
  const duplicate = findDuplicate(compartments);
  const priority = assignPriority(duplicate);

  return {
    compartments,
    duplicate,
    priority
  };
};

export const badgeFinder = (bags: string[]) => {
  const res = findCommonValues(bags);
  return {
    badge: res[0],
    priority: assignPriority(res[0])
  }
};

const findCommonValues = (bags: string[]): string => {
  let res = "";
  for (let i = 0; i < bags[0].length; i++) {
    const char = bags[0].charAt(i);
    if (bags.every((bag) => bag.indexOf(char) > -1)) {
      res = char;
      break;
    }
  }
  return res;
};






