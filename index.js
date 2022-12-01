// import input from "./input.js";

const input = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000
`;

let sorted = input.split("\n\n");

let totals = [];

for (let i = 0; i < sorted.length; i++) {
    totals[i] = sorted[i].split('\n')
}


console.log(totals);
