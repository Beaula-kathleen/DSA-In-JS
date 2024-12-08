let word = "Hello world!";
let longestWord = "";
let WordsInArray = word.split(" ");

WordsInArray.filter((ele) => {
  if (ele.length > longestWord?.length) longestWord = ele;
});
console.log(longestWord);
