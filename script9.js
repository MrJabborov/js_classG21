// HOMEWORK 9-1
let str = 'ABBACC'

for(let i = 0; i < str.length; i++){

    if (str[i] === str[i + 1]){
        console.log(str[i]); break
    }else{
        continue
    }
}


// // HOMEWORK 9-2
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

