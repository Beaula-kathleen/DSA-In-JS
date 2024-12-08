let arr1 = [1, 2, 3, 4, 5, 6];
let arr2 = [1, 2, 3, 4, 5, 5];
let arr = arr1 > arr2 ? arr1 : arr2;
let subArr = arr1 < arr2 ? arr1 : arr2;
let intersectionArray = arr.filter((ele) => {
  if (subArr.includes(ele)) return ele;
});

console.log([...new Set(intersectionArray)]);

