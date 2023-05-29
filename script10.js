// HOMEWORK 10-1
let cars = [
    {id: 1, year: 1998, engine: 1, name: 'Tico'},
    {id: 2, year: 2005, engine: 1.2, name: 'Matiz'},    
    {id: 3, year: 2010, engine: 1.6, name: 'Gentra'},
    {id: 4, year: 2010, engine: 1.5, name: 'Cobalt'},
    {id: 5, year: 2012, engine: 2, name: 'Malibu'},
    {id: 6, year: 2000, engine: 1.2, name: 'Damas'},
    {id: 7, year: 2018, engine: 2.4, name: 'Tracker'},
];

// List the cars manufactured before 2000
let filteredValue1 = cars.filter( (value) => value.year < 2000);
console.log(filteredValue1);

// List the cars manufactured after 2010
let filteredValue2 = cars.filter( (value) => value.year > 2010);
console.log(filteredValue2);

// Sort the cars according to their engine power
let sortedValue = cars.sort( (a,b) => a.engine - b.engine );
console.log(sortedValue);

// Sort the cars according to their manufactured years
let sortedValue2 = cars.sort( (a,b) => a.year - b.year );
console.log(sortedValue2);

// Sort the cars' names in an alphabetical order
let sortedValue3 = cars.sort( (a,b) => a.name.localeCompare(b.name) );
console.log(sortedValue3);

// Add a new status "Old" to those cars manufactured before 2000.
let filteredValue3 = cars.filter( (value) => value.year < 2000).map( (value) => {
    return {...value, status: 'Old'}
});   
console.log(filteredValue3);

// Alternatives
let filteredValue4 = cars.map( (value) => {
    if(value.year < 2000){
        console.log({...value, status: 'Old'});
    }
})


// Add a new status "Medium" to those cars manufactured between 2000 and 2010.
let filteredValue5 = cars.filter( (value) => value.year >= 2000 && value.year <= 2010).map( (value) => {
    return {...value, status: 'Medium1'}
})
console.log(filteredValue5);

// Alternatives)
let filteredValue6 = cars.map( (value) => {
    if(value.year >= 2000 && value.year <= 2010){
        console.log({...value, status: 'Medium2'});
    }
})


// Add a new status "New" to those cars manufactured between 2010 and 2022.
let filteredValue7 = cars.map( (value) => {
    if(value.year > 2010 && value.year <= 2022){
        console.log({...value, status: 'New'});
    }
})


// // HOMEWORK 10-2
// // Delete the id5's data using function.

let users = [
    {id: 1, year: 1998, engine: 1, name: 'Tico'},
    {id: 2, year: 2005, engine: 1.2, name: 'Matiz'},    
    {id: 3, year: 2010, engine: 1.6, name: 'Gentra'},
    {id: 4, year: 2010, engine: 1.5, name: 'Cobalt'},
    {id: 5, year: 2012, engine: 2, name: 'Malibu'},
    {id: 6, year: 2000, engine: 1.2, name: 'Damas'},
    {id: 7, year: 2018, engine: 2.4, name: 'Tracker'},
];

const onDelete = (ids) => {
    return users.filter((value) => value.id !== ids);
}
console.log(onDelete(5));


// HOMEWORK 10-3
// Find Min-4, Max-888.

let arr = [4, 10, 888, 99, 100];

console.log(arr.sort( (a,b) => a-b).slice(-1));
console.log(arr.sort( (a,b) => b-a)[0]);

console.log(arr.sort( (a,b) => b-a).slice(-1)); 
console.log(arr.sort( (a,b) => a-b)[0]); 


// HOMEWORK 10-4
// Delete the input from the array by using function.

let array = ['apple', 'banana', 'peach', 'watermelon', 'orange'];

function deleteFruit (name){
    return array.filter( (value) => value !== name)
}
console.log(deleteFruit('peach'));



// HOMEWORK 10-5
// Find the sum of the nested array's value.

let arr1 = [1, [3, [5, [10]]]];
console.log(arr1.flat(Infinity).reduce( (initial, total) => initial + total, 0));

