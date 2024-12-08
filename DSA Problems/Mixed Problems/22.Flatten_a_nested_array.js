let arr = [1, 2, 3, [4, 5, [6, 5]]];

let newArr = [];

function flatten(array) {
  for (let index = 0; index < array.length; index++) {
    if (!Array.isArray(array[index])) newArr.push(array[index]);
    else flatten(array[index]);
  }
}
flatten(arr)

console.log(newArr);
