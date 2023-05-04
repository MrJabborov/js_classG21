                                 //HOMEWORK
                               // with IF/ELSE
let num = 5; 

if (num % 2 === 0){
    console.log('Juft son');
}else{
    console.log('Toq son');
}

                                // with TERNARY
let num = 11;
num % 2 === 0 ? console.log('Juft son') : console.log('Toq son');



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
let ball = 48;

let student = ball <= 100 && ball >= 86 ? 'A' : 'FAILED' && ball <= 85 && ball >= 61 ? 'B' : 'FAILED' && ball <= 60 && ball >= 50 ? 'C' : 'FAILED';
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
let meva = 'nok'

switch (meva){
    case 'olma': console.log('10.000'); break
    case 'nok': console.log('12.000'); break
    case 'tarvuz': console.log('20.000'); break
    default: console.log('Bunday meva yoq'); break
}

                                 // with TERNARY
let meva = 'tarvuz';

let fruit = meva === 'olma' ? '10.000' : 'Bunday meva yoq' && meva === 'nok' ? '12.000' : 'Bunday meva yoq' && meva === 'tarvuz' ? '20.000' : 'Bunday meva yoq';
console.log(fruit);



                                     // HOMEWORK 2-4
                                     // with IF/ELSE
let num = 30;
if(num % 3 === 0 && num % 5 === 0){
    console.log('3ga va 5ga bulinadi');
}else if(num % 5 === 0){
    console.log('5ga bulinadi');
}else if(num % 3 === 0){
    console.log('3ga bulinadi');
}else{
    console.log('Wrong Logic');
}

                                    // with TERNARY
let num = 6;

let number = num % 3 === 0 && num % 5 === 0 ? '3ga va 5ga bulinadi' : 'Wrong Logic' && num % 5 === 0 ? '5ga bulinadi' : 'Wrong Logic' && num % 3 === 0 ? '3ga bulinadi' : 'Wrong Logic';
console.log(number);



                                // HOMEWORK 2-5
                               // SWITCH/CASE
let browser = 'Edge';

switch (browser){
    case 'Edge': console.log('You have got the Edge'); break
    case 'Chrome' || 'Firefox' || 'Safari' || 'Opera': console.log('Okey We support these browsers too'); break
    default: console.log('We hope that this page looks OK!');
}

                                   // Rewrite "SWITCH" with "IF"
let browser = 'Chrome';

if(browser === 'Edge'){
    console.log('You have got the Edge');
}else if(browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera'){
    console.log('Okey we support these browsers too');
}else {
    console.log('We hope that this page looks OK!');
}

                                        //Rewrite SWITCH with TERNARY
let browser = 'Edge';

let SearchEngine = browser === 'Edge' ? 'You have got the Edge' : 'We hope that this page looks OK!' && browser === 'Chrome' && 'Firefox' && 'Safari' && 'Opera' ? 'Okey we support these browsers too' : 'We hope that this page looks OK!';
console.log(SearchEngine);


                                       // HOMEWORK 2-6
                               // Rewrite IF/ELSE with TERNARY
let login = 'Director';

let message = login === 'Employee' ? 'Hello' : '""' && 
login === 'Director' ? 'Greetings' : '""' && 
login === '' ? 'No login' : '""';

console.log(message);

                               // Rewrite IF/ELSE with SWITCH/CASE

let message = 'Director'

switch(message){
    case 'Employee': console.log('Hello'); break
    case 'Director': console.log('Greetings'); break
    case '" "': console.log('No login'); break
    default: console.log('" "'); break
}