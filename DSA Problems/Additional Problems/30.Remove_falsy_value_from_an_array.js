let arr = ["hi", "hello", null, "Bye",0];
let falsyArray = [0, null, undefined];
console.log(arr.filter((ele) => {
  if (!falsyArray.includes(ele)) {
    return ele;
  }
}));
