// Adding +1 by using push() method

let numbers = [10, 20, 30];
let array = [];

numbers.map ( (value) => {
    array.push(value + 1);
}) 

console.log(array);