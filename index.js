import input from "./input.js";

// const input = `1000
// 2000
// 3000

// 4000

// 5000
// 6000

// 7000
// 8000
// 9000

// 10000`;

let sorted = input.split("\n\n");

let groupedCals = [];

for (let i = 0; i < sorted.length; i++) {
  groupedCals[i] = sorted[i].split("\n");
}

let numsArr = [];

let totals = [];

for (let j = 0; j < groupedCals.length; j++) {
  numsArr[j] = groupedCals[j].map((str) => {
    return parseInt(str);
  });

  totals[j] = numsArr[j].reduce((total, num) => {
    return total + num;
  });
}

totals.sort((a, b) => {
  return b - a;
});

console.log(totals[0]);

console.log(totals[0] + totals[1] + totals[2]);

// console.log(numsArr);
// console.log(groupedCals);
