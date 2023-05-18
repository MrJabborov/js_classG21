// HOMEWORK 6-1
let name = '   FoziL    '
console.log(name.includes('l') || name.includes('L'));
console.log(name.trim().endsWith('l') || name.trim().endsWith('L'));
console.log(name.trim().toLowerCase().endsWith('l'));
console.log(name.trim().toLowerCase()[name.trim().length -1] === 'l');

let newStr = name.trim().toLowerCase();
console.log(newStr[newStr.length -1] === 'l');  // optimal version



// HOMEWORK 6-2
let str1 = 'Web'
let str2 = 'Brain'
let extraStr = str1

str1 = str2;
str2 = extraStr;

console.log(str2);

// HOMEWORK 6-3
let year = 2021;

if(year % 4 === 0){
    console.log('Kabisa yili');
}else{
    console.log('Kabisa yili emas');
}


// HOMEWORK 6-4



// HOMEWORK 6-5
let string = '#fozil#web#brain#'
console.log(string.replace('#fozil#web#brain#' , '(fozil)web(brain)' ));

// HOMEWORK 6-6
let str = 'WeBbraIN'
let i = 0
let emptyStr = '';

while(i < str.length){
    if (str[i] === str[i].toUpperCase())
    emptyStr += str[i]
    i++
}
console.log(emptyStr);

// HOMEWORK 6-7
let string1 = 'Webbrain  '
console.log(string1.replace('Web', 'IT').repeat (10))