// Additional assignments for Day 8

/* EXTRA 1
 Write a piece of code for reverting an array.
 es:
 [1, 3, 5] ==> [5, 3, 1]
*/

console.log("------------------exercise_1-------------------------");
let normalArray = [1, 2, 3, 4, 5];
let reversedArray = [];
for (let i = normalArray.length - 1; i >= 0; i--) {
  reversedArray.push(normalArray[i]);
}

console.log("Normal array:", normalArray);
console.log("Reversed array:", reversedArray);

console.log("-----------------------------------------------------\n");

/* EXTRA 2
 Write a piece of code for getting the maximum numerical value from an array.
*/

console.log("------------------exercise_2-------------------------");
let maxValueArray = [1, 2, 128, 6, 9, 4];
let maxValue = null;
for (let i = 0; i <= maxValueArray.length - 1; i++) {
  if (maxValue < maxValueArray[i]) {
    maxValue = maxValueArray[i];
  }
}

console.log("Array:", maxValueArray);
console.log("The maximum value of array is:", maxValue);
console.log("-----------------------------------------------------\n");

/* EXTRA 3
 Write a piece of code for getting the minimum numerical value from an array.
*/

console.log("------------------exercise_3-------------------------");
let minValueArray = [1, 2, 128, 4, 0, 25];
let minValue = minValueArray[0];
for (let i = 0; i <= minValueArray.length - 1; i++) {
  if (minValue > minValueArray[i]) {
    minValue = minValueArray[i];
  }
}

console.log("Array:", minValueArray);
console.log("The minimum value of array is:", minValue);
console.log("-----------------------------------------------------\n");

/* EXTRA 4
 Write a piece of code for getting only even numerical values from an array.
*/

console.log("------------------exercise_4-------------------------");
let mixedNumArray = [12, 85, 66, 96, 547, 3, 253];
let evenNumArray = [];
for (let i = 0; i <= mixedNumArray.length - 1; i++) {
  if (mixedNumArray[i] % 2 === 0) {
    evenNumArray.push(mixedNumArray[i]);
  }
}

console.log("Mixed array:", mixedNumArray);
console.log("Array with only even numbers:", evenNumArray);
console.log("-----------------------------------------------------\n");

/* EXTRA 5
 Write a piece of code for deleting only even entries from an array.
*/

console.log("------------------exercise_5-------------------------");
let mixedNumArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("Normal mixed array:", mixedNumArray2);
for (let i = 0; i <= mixedNumArray2.length - 1; i++) {
  if (mixedNumArray2[i] % 2 === 0) {
    mixedNumArray2.splice(i, 1);
  }
}
console.log("Array without even numbers:", mixedNumArray2);
console.log("-----------------------------------------------------\n");

/* EXTRA 6
 Write a piece of code for removing all the vowels from a string.
*/

console.log("------------------exercise_6-------------------------");
let strWithVowels = "Helo, my name is Gaz";
let strWithNoVowels = strWithVowels.replace(/[aeiouy]/gi, "");

console.log("Usual phrase:", strWithVowels);
console.log("Pharse without vowels:", strWithNoVowels);
console.log("-----------------------------------------------------\n");

/* EXTRA 7
 Write a piece of code for increasing all the numerical values in a array by 1.
*/

console.log("------------------exercise_7-------------------------");
let increaseArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("Normal array:", increaseArr);
for (let i = 0; i <= increaseArr.length - 1; i++) {
  increaseArr[i]++;
}

console.log("Increased array:", increaseArr);
console.log("-----------------------------------------------------\n");

/* EXTRA 8 
 Replace all the strings contained in an array with their length.
 es.: ["strive", "is", "great"] => [6, 2, 5]
*/

console.log("------------------exercise_8-------------------------");
let strArray = ["Hello", "Kiril", "I", "love", "coding"];
let lengthArr = [];
for (let i = 0; i <= strArray.length - 1; i++) {
  lengthArr.push(strArray[i].length);
}

console.log("String array:", strArray);
console.log("Lenght array:", lengthArr);
console.log("-----------------------------------------------------\n");
