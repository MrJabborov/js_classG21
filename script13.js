// HOMEWORK 13-1
// Getting sum of nested obj.age in Recursive function

let user = {
    name: 'Alisher',
    age: 30,
    CHILD: {
      name: 'Sophia',
      age: 20,
      CHILD: {
        name: 'Muhammad',
        age: 10,
        CHILD: {
          name: 'Sumayya',
          age: 3,
        }
      }
    } 
};

sum = 0;

let getAge = (obj) => {
  sum += obj.age

  if(obj.CHILD){
    getAge(obj.CHILD)
  }
}

getAge(user)
console.log(sum);


// HOMEWORK 13-2

//Finding sum of n,   n = 5.  with for-loop
function calculateSum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  console.log(sum);
}
calculateSum(5);


//Finding sum of n,   n = 5.  with Recursive function
const findSum = (n) =>{

  if(n > 0){
    return n + findSum(n - 1);
  } else {
    return n
  }

}
console.log(findSum(5));



// HOMEWORK 13-3.
// Removing duplicates without using new Set().

// 1st METHOD
let array1 = [3, 1, 1, 2, 2, 4, 3, 4];

let uniqueValue = array1.sort().filter( (value, index) => {
  return array1.indexOf(value) === index
});

console.log(uniqueValue);


// 2nd METHOD
let array = [3, 1, 1, 2, 2, 4, 3, 4];

function removeDuplicates(array) {
  return array.sort().filter((value, index) => array.indexOf(value) === index);
}

let newArray = removeDuplicates(array);
console.log(newArray);


// 3rd METHOD
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

