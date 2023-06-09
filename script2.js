                                 //HOMEWORK
                               // with IF/ELSE
let number1 = 5; 

if (number1 % 2 === 0){
    console.log('Juft son');
}else{
    console.log('Toq son');
}

                                // with TERNARY
let number2 = 11;
number2 % 2 === 0 ? console.log('Juft son') : console.log('Toq son');



                        // HOMEWORK 2-1
                        // Bu yerda 'first' and 'Second' execute qiladi (true)
if(-1 || 0) console.log('first');
if(-1 && 0) console.log('Second');
if(null || -1 && 1) console.log('third');



                             // HOMEWORK 2-2
                              // with IF/ELSE
let ball = 15;

if (ball <= 100 && ball >= 86){
    console.log('A');
}else if(ball <= 85 && ball >= 61){
    console.log('B');
} else if(ball <= 60 && ball >= 50){
    console.log('C');
}else{
    console.log('FAILED :)')
}

                                // with TERNARY
let result = 48;

let student = result <= 100 && result >= 86 ? 'A' : 'FAILED' && result <= 85 && result >= 61 ? 'B' : 'FAILED' && result <= 60 && result >= 50 ? 'C' : 'FAILED';
console.log(student); 



                                // HOMEWORK 2-3
                                // with IF/ELSE
let meva = 'qovun';

if (meva === 'olma'){
    console.log('10.000');
}else if(meva === 'nok'){
    console.log('12.000');
}else if(meva === 'tarvuz'){
    console.log('20.000');
}else{
    console.log('Bunday meva yoq');
}

                                 // with SWITCH/CASE
let fruits = 'nok'

switch (fruits){
    case 'olma': console.log('10.000'); break
    case 'nok': console.log('12.000'); break
    case 'tarvuz': console.log('20.000'); break
    default: console.log('Bunday meva yoq'); break
}

                                 // with TERNARY
let meva1 = 'tarvuz';

let fruit = meva1 === 'olma' ? '10.000' : 'Bunday meva yoq' && meva1 === 'nok' ? '12.000' : 'Bunday meva yoq' && meva1 === 'tarvuz' ? '20.000' : 'Bunday meva yoq';
console.log(fruit);



                                     // HOMEWORK 2-4
                                     // with IF/ELSE
let num1 = 30;
if(num1 % 3 === 0 && num1 % 5 === 0){
    console.log('3ga va 5ga bulinadi');
}else if(num1 % 5 === 0){
    console.log('5ga bulinadi');
}else if(num1 % 3 === 0){
    console.log('3ga bulinadi');
}else{
    console.log('Wrong Logic');
}

                                    // with TERNARY
let num2 = 6;

let number = num2 % 3 === 0 && num2 % 5 === 0 ? '3ga va 5ga bulinadi' : 'Wrong Logic' && num2 % 5 === 0 ? '5ga bulinadi' : 'Wrong Logic' && num2 % 3 === 0 ? '3ga bulinadi' : 'Wrong Logic';
console.log(number);



                                // HOMEWORK 2-5
                               // SWITCH/CASE
let browser1 = 'Edge';

switch (browser1){
    case 'Edge': console.log('You have got the Edge'); break
    case 'Chrome' || 'Firefox' || 'Safari' || 'Opera': console.log('Okey We support these browsers too'); break
    default: console.log('We hope that this page looks OK!');
}

                                   // Rewrite "SWITCH" with "IF"
let browser2 = 'Chrome';

if(browser2 === 'Edge'){
    console.log('You have got the Edge');
}else if(browser2 === 'Chrome' || browser2 === 'Firefox' || browser2 === 'Safari' || browser2 === 'Opera'){
    console.log('Okey we support these browsers too');
}else {
    console.log('We hope that this page looks OK!');
}

                                        //Rewrite SWITCH with TERNARY
let browser3 = 'Edge';

let SearchEngine = browser3 === 'Edge' ? 'You have got the Edge' : 'We hope that this page looks OK!' && browser3 === 'Chrome' && 'Firefox' && 'Safari' && 'Opera' ? 'Okey we support these browsers too' : 'We hope that this page looks OK!';
console.log(SearchEngine);


// HOMEWORK 2-6
                               // Rewrite IF/ELSE with TERNARY
let login = 'Director';

let message1 = login === 'Employee' ? 'Hello' : '""' && 
login === 'Director' ? 'Greetings' : '""' && 
login === '' ? 'No login' : '""';

console.log(message1);

                               // Rewrite IF/ELSE with SWITCH/CASE

let message2 = 'Director'

switch(message2){
    case 'Employee': console.log('Hello'); break
    case 'Director': console.log('Greetings'); break
    case '" "': console.log('No login'); break
    default: console.log('" "'); break
}