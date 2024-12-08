let string1 = "listen";
let string2 = "Silent";

if (string1.length != string2.length) {
  console.log("Not an anagram");
}
string1 = string1.toLocaleLowerCase().split("").sort().join("");
string2 = string2.toLocaleLowerCase().split("").sort().join("");

console.log(string1 === string2 ? "It's an anagram" : "It's not an anagram");
