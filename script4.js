// HOMEWORK 4-1
                       //with WHILE LOOP
let i = 1;
while (i <= 5){
    if(i % 2 === 0){
        console.log(i,'Odd Number');
    }else {
        console.log(i,'Even Number');
    }
    i++
}

                        //with DO/WHILE LOOP

let i = 1;
do{
    if(i % 2 === 0){
        console.log(i, 'Odd Number');
    }else{
        console.log(i, 'Even Number');
    }
    i++
}while(i <= 5);


// HOMEWORK 4-2
                               // with WHILE LOOP
let str = 'WeBbraIN'
let i = 0
let emptyStr = '';

while(i < str.length){
    if (str[i] === str[i].toUpperCase())
    emptyStr += str[i]
    i++
}
console.log(emptyStr);

                               // with Do/While LOOP

let str = 'WeBbraIN'
let i = 0
let emptyStr = '';

do {
    if (str[i] === str[i].toUpperCase())
    emptyStr += str[i]
    i++
}while(i < str.length)
console.log(emptyStr);

// HOMEWORK 4-3
                                  // with WHILE LOOP
let str = 'WebBrainAcadAmy';
let emptyStr = "";
let i = 0

while(i <= str.length){
    if(str[i] === 'a' || str[i] === 'A')
    emptyStr += str[i]
    i++
}
console.log('a,A-', emptyStr.length);

                                  // with DO/WHILE LOOP
let str = 'WebBrainAcadAmy';
let emptyStr = "";
let i = 0

do {
    if(str[i] === 'a' || str[i] === 'A')
    emptyStr += str[i]
    i++
}while(i <= str.length)
console.log('a,A-', emptyStr.length);


// HOMEWORK 4-4
                              // with WHILE LOOP
let firstName = 'Abdulloh';
let emptyStr = "";
let i = firstName.length-1

while(i >= 0){
    emptyStr += firstName[i]
    i--
}
console.log(emptyStr);

                               // with DO/WHILE LOOP

let firstName = 'Abdulloh';
let emptyStr = "";
let i = firstName.length-1

do {
    emptyStr += firstName[i]
    i--
}while(i >= 0)
console.log(emptyStr);
