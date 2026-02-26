'use strict';
// ========================
// Objects
// ========================
/* Objects 'work' like arrays, but on a more organized way. Instead of accessing the valeu by order, we access it with a key value/property */

const Emerson = {
    first_name: 'Emerson',
    last_name: 'Tomo',
    job: 'Web Developer',
    birth_year: 2001,
    brothers: ['Josue', 'Erick', 'Gabriela'],
    has_driver_license: true,

    // We can also have a function expression inside of a object, and we call it a method
    /*
     calcAge: function () {
         return 2026 - this.birth_year
     } */

    calcAge: function () {
        this.age = 2026 - this.birth_year;
        return this.age
    }

};

// Retrieving data from the object using dot AND bracket notation.
console.log(Emerson.first_name + ' ' + Emerson['last_name']);

// Bracket notation can be dinamic, we can give it a expression to produce a value
const nameKey = '_name'
console.log(Emerson['first' + nameKey] + ' ' + Emerson['last' + nameKey]);

// const interstedIn = prompt('What do you want to know about Emerson? Choose between first_name, last_name, job, age, brothers');
// Lets creat a condition that controls if the choise exist, if not the user should right option
if (Emerson[interstedIn]) {
console.log(Emerson[interstedIn]);
} else {
console.log('Wrong request! Choose between first_name, last_name, job, age, brothers');
}
// Adding elements to the objects 
Emerson.Location = 'Mozambique - Nampula';
Emerson['email'] = 'emersongabrieltomo@gmail.com'
console.log(`${Emerson.first_name} has ${Emerson.brothers.length} brother and the youngest one is ${Emerson.brothers[2]}`);
console.log(Emerson.age)

// Challenge
"Emerson is a 25-year old teacher, and he has a driver's license"
console.log(`${Emerson.first_name} is a ${Emerson.age}-years old,
    and ${Emerson.has_driver_license ? 'he has' : "he doesn't have"} a car licensse.`)