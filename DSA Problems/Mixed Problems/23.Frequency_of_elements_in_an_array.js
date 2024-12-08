let arr = [2, 3, 4, 4, 5, 4, 0, 6, 4];
let count = 0;
let frequency = 4;
arr.filter((ele) => {
  if (ele === frequency) count++;
});
console.log("Frequency of the number" + frequency + " = " + count);
