// HOMEWORK 7-1

let user = {
    name: 'John',
    surname: 'Smith',
}
console.log(user);

user.name = 'Pete';
console.log(user);

delete user.name;
console.log(user);



// HOMEWORK 7-2
let schedule = {
    8.30: 'Get up'
};                                            

function isEmpty(object) {
    for(let key in object){
        return false 
    }
    return true 
}
console.log(isEmpty(schedule));



// HOMEWORK 7-3
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = 0;

for(let key in salaries){
    sum += salaries[key]
}
console.log(sum);



// HOMEWORK 7-4
let menu = {
    width: 200,
    height: 300,
    title: 'My menu'
}

function multiplyNumeric (obj) {
    for (let key in obj){
        if (typeof obj[key] === 'number'){
            obj[key] *= 2
        }
    }
}

multiplyNumeric(menu);
console.log(menu);

