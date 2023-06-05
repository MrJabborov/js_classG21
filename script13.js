 
// HOMEWORK 13-1
// 1-getting sum of nested obj age

let family = {

  father: {
  name: 'Ali',
  age: 38,

  mother: {
    name: 'Sophia',
    age: 31,

    children: [
      { name: 'Muhammad', age: 5 },
      { name: 'Zinnura', age: 8 }
    ],
  },
  },

};

function calculateAgeSum (obj) {
  let sum = 0;

  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      sum += obj[key];

    } else if (typeof obj[key] === 'object') {
      sum += calculateAgeSum(obj[key]);
    }
  }

  return sum;
}

let ageSum = calculateAgeSum(family);
console.log(ageSum);


// HOMEWORK 13-2
//Finding sum of n,   n = 5.

function calculateSum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

let n = 5;
let sum = calculateSum(n);
console.log(sum);

// HOMEWORK 13-3.
// Removing duplicates without using new Set().

// 1st METHOD
let array = [3, 1, 1, 2, 2, 4, 3, 4];

function removeDuplicates(array) {
  return array.sort().filter((value, index) => array.indexOf(value) === index);
}

let newArray = removeDuplicates(array);
console.log(newArray);


// 2nd METHOD
let arr = [1, 1, 2, 2, 4, 3, 2, 4];

function removeDuplicates(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (newArr.sort().indexOf(arr[i]) === -1) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

let newArr = removeDuplicates(arr);
console.log(newArr);

