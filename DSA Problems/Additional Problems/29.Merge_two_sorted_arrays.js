let arr1 = [1, 2, 3, 4];
let arr2 = [4, 5, 6];
let arr = [...arr1.sort((a, b) => a - b), ...arr2.sort((a, b) => a - b)];
console.log(...new Set([arr]));
