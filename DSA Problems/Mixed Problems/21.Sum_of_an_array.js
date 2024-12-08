let arr = [1, 2, 3, 4, 5];
let sum =arr.reduce((acc, cur) => {
 return acc += cur;
}, 0);
console.log(sum);