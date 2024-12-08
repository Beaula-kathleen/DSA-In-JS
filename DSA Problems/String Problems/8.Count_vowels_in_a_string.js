let word = "Hello";
let count = 0;
let wordInArray = word.split("");
let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
wordInArray.map((ele) => {
  if (vowels.includes(ele)) count++;
});
console.log(count);

