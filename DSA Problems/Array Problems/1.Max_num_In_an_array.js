let arr = [99, 78, 32, 104, 3];
arr.sort((a, b) => {
  return a - b;
});
console.log(arr[arr.length - 1]);
