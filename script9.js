// HOMEWORK 9-1
// 1ST WAY
let str1 = 'ABBACC';
let arr = [];

for (let i = 0; i < str1.length; i++){
    if (arr.includes(str1[i])){
        console.log(str1[i]); break
    }
    arr.push(str1[i]);
}

// 2ND WAY
let str = 'ABBACC'

for(let i = 0; i < str.length; i++){

    if (str[i] === str[i + 1]){
        console.log(str[i]); break
    }else{
        continue
    }
}



// HOMEWORK 9-2
// 1ST WAY
let employees = [
    {id: 1, name: 'Fozil'},
    {id: 2, name: 'Odil'},
    {id: 3, name: 'Alisher'},
    {id: 4, name: 'Elyor'},
];

const onSearch = (input) => {
    let newArray = [];
    for (let i = 0; i < employees.length; i++){
        if(employees[i].name.includes(input.toLowerCase()) || employees[i].name.includes(input.toUpperCase())){
            newArray.push(employees[i])
        }
    } 
    console.log(newArray);
}

onSearch('o')


// 2ND WAY
let students = [
    {id: 1, name: 'Fozil'},
    {id: 2, name: 'Odil'},
    {id: 3, name: 'Alisher'},
    {id: 4, name: 'Elyor'},
];

let newArr = [];

function onSearch(students, letters) {
    
   for(let i = 0; i < students.length; i++){

    const arr = students[i];
    const name = arr.name.toLowerCase();

    if (name.includes(letters.toLowerCase())){
        newArr.push(arr);
    }
   }
   return newArr;
}

onSearch(students,'o')
console.log(newArr);
