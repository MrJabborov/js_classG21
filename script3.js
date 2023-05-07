// HOMEWORK 3-1
// Find the Odd/even number with ForLoop + If/else

for (let i = 1; i <= 5; i++) {
    if(i % 2 === 0){
        console.log(i, 'Odd Number');
    }else{
        console.log(i, 'Even Number');
    }
}


// HOMEWORK 3-2
// seperate the capital letters from the string

let str = 'WeBbraIN'
let emptyString = "";

for(let i = 0; i < str.length; i++){
    if(str[i] === str[i].toUpperCase()){
        emptyString += str[i];
    }
}
console.log(emptyString);


// HOMEWORK 3-3
// Find how many a/A does the string have?

let string = 'WebBrainAcadAmy';
let emptyStr = "";

for(let i = 0; i <= string.length; i++){
    if(string[i] === 'a' || string[i] === 'A'){
        emptyStr += string[i]  
    }
}
console.log('a,A -', emptyStr.length);


// HOMEWORK 3-4
// See the result backside-forward

let name = 'fozil';
let backwardName = "";

for(let i = name.length-1; i >= 0; i--){
    backwardName += name[i]
}
console.log(backwardName);