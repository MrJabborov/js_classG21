// HOMEWORK 8-1
let obj1 = {
    id: 1,
    name: 'WebBrain',
}

console.log(Object.keys(obj1));


// HOMEWORK 8-2
let obj2 = {
    id: 1995,
    name: 'WebBrain',
}

for(let key in obj2){
    if (typeof obj2[key] === 'number'){
        console.log(key); 
    }else{
        break
    }
}


// HOMEWORK 8-3
let obj3 = {
    id:1,
    name: "WebBrain",
    offline: true,
    online: true,
    individual: false,
}

let result = {}

for(let key in obj3){
    if(typeof obj3[key] === 'boolean'){
        result[key] = obj3[key]
    }else{
        continue
    }
}
console.log(result);


// HOMEWORK 8-4
let person = {
    id: 1,
    name: 'Odil',
    age:78,
    child: {
        id: 1,
        name: 'Ali',
        age:48,
        child: {
            id: 1,
            name: 'Umar',
            age:20
        }
    }
}

sum = 0;

while(true){

    if(person){
        sum += person.age
    }
    else {
        break
    }
    person = person.child
}

console.log(sum);


// HOMEWORK 8-5
let employee = {
    id: 1995,
    name: 'Zuhriddin',
    surname: 'Jabborov',
    ielts: 7.5,
    student: false,
    password: 950608,
}

const Login = (name, password) => {
    if(name === employee.name && password === employee.password){
        console.log('Welcome to My page');
    }else{
        console.log('Wrong name and/or password');
    }
}
Login('Zuhriddin', 950608)
