"use strict";

function evenOddNumberOnly(arr) {
  let numArr = arr.filter((ele) => {
    if (!isNaN(ele)) {
      return ele;
    }
  });
  return numArr.map((ele) => {
    if (ele % 2 === 0) {
      return "even";
    } else {
      return "odd";
    }
  });
}

console.log(evenOddNumberOnly(["Sherry", 2, "Razan", 4, 1]));

//////////////////////
//////////////////////

function isAnagram(word1, word2) {
  let result = false;

  let word1Arr = word1.split("");
  let word2Arr = word2.split("");

  let newWord1Arr = [];
  let newWord2Arr = [];

  // let word1ArrLength =  word1Arr.length;

  for (let idx = 0; idx < word1Arr.length; idx++) {
    for (let idx2 = 0; idx2 < word1Arr.length; idx2++) {
      if (word1Arr[idx] === word2Arr[idx2]) {
        // console.log(`word1Arr[idx] = ${word1Arr[idx]} AND word2Arr[idx2]${word2Arr[idx2]}`);
        // console.log(word1Arr[idx] === word2Arr[idx2]);

        newWord1Arr.push(word1Arr[idx]);
        newWord2Arr.push(word2Arr[idx2]);

        word1Arr.splice(idx, 1);
        word2Arr.splice(idx2, 1);

        idx2 = idx2 - 1;
        idx = idx - 1;

        

        // console.log(`word1Arr = ${word1Arr} AND word2Arr = ${word2Arr}`);

        break;
      }
    }
  }

  // console.log(`newWord1Arr.length = ${newWord1Arr.length} AND word1Arr.length${word1.split("").length}`);
  if (newWord1Arr.length === word1.split("").length && newWord1Arr.length === word2.split("").length) {
    result = true;
  }
  return result;
}

console.log(isAnagram("mary", "army"));
console.log(isAnagram("razan", "arnzy"));
console.log(isAnagram("suhaib", "suhaibz"));
