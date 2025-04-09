/**
 * 📌 Problem: You are given a string as input.
 * Your task is to return the reverse of that string.
 *
 * 🔍 Examples:
 * reverseString("arman") ➞ "namra"
 * reverseString("hello") ➞ "olleh"
 * reverseString("JavaScript") ➞ "tpircSavaJ"
 */


// const reverseString = (str) => str.split("").reverse().join("");
// console.log(reverseString("Arman Mia"));



// const reverseString = (str) => {
//     return str.split('').reverse().join('');
// }

// console.log(reverseString("Arman Mia"));


const reverseString = (str) => {
    let reverseStr = '';
    for (let i = str.length - 1; i >= 0; i--){

        reverseStr += str[i];
    }
    return reverseStr;
}

console.log(reverseString("Arman Mia"));
