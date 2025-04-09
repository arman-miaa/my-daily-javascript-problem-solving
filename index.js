/**
 * 📌 Problem: You are given a string as input.
 * Your task is to return the reverse of that string.
 *
 * 🔍 Examples:
 * reverseString("arman") ➞ "namra"
 * reverseString("hello") ➞ "olleh"
 * reverseString("JavaScript") ➞ "tpircSavaJ"
 */

/** ✅ Method 1: Using split(), reverse(), and join() - One-liner */
const reverseString1 = (str) => str.split("").reverse().join("");
console.log("Method 1:", reverseString1("Arman Mia"));

/** ✅ Method 2: Using split(), reverse(), and join() - Expanded */
const reverseString2 = (str) => {
  return str.split("").reverse().join("");
};
console.log("Method 2:", reverseString2("Arman Mia"));

/** ✅ Method 3: Using for loop (manual way) */
const reverseString3 = (str) => {
  let reverseStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }
  return reverseStr;
};
console.log("Method 3:", reverseString3("Arman Mia"));

/** ✅ Method 4: Using for...of loop (adds from front) */
const reverseString4 = (str) => {
  let reversed = "";
  for (let char of str) {
    reversed = char + reversed;
  }
  return reversed;
};
console.log("Method 4:", reverseString4("Arman Mia"));

/** ✅ Method 5: Using reduce() */
const reverseString5 = (str) => {
  return str.split("").reduce((rev, char) => char + rev, "");
};
console.log("Method 5:", reverseString5("Arman Mia"));

/** ✅ Method 6: Using recursion */
const reverseString6 = (str) => {
  if (str === "") return "";
  return reverseString6(str.slice(1)) + str[0];
};
console.log("Method 6:", reverseString6("Arman Mia"));

/** ✅ Method 7: Using while loop */
const reverseString7 = (str) => {
  let reversed = "";
  let i = str.length - 1;
  while (i >= 0) {
    reversed += str[i];
    i--;
  }
  return reversed;
};
console.log("Method 7:", reverseString7("Arman Mia"));
