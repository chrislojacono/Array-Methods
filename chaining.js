const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

const descending = integers.sort((a, b) => b - a)

console.log(descending)

const nineteen = integers.filter((int) => int > 19)

console.log(nineteen)

const addSubtract = nineteen.forEach((int) => (int * 1.5 - 1))
console.log(addSubtract)