// ========================
// ARRAYS
// ========================

/*Arrays is not a primitive type in js, but it is a object that help us save multiple values in just one variables*/

// Creating a array using literal notation
const fruits = ['Banana', 'Maça', 'Goiaba'];

// When we want to see how many items we have in our array
console.log(fruits.length);

// Accessing the first item
console.log(fruits[0]);

// We can write a expression to access items, but never write a statment, because it does not produce a value
console.log(fruits[fruits.length - 1]);

// This replace the existing item in position 2 with the new one, cuz arrays are mutables 
fruits[2] = 'Pumpkin';

fruits[10] = 'Tomato';

// If we try to access a item that does not exist it returns undefined 
console.log(fruits[106])

// Let's combining arrays with function
const calcAge = (birthYear) => {
    return 2026 - birthYear;
}

const years = [2000, 2001, 2002, 2003];
const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1]), calcAge(years[years.length - 2])]
// console.log(ages);

// Adding elements to the array
const addLastElement = (fruits.push('Emerson can eat'));
const addFirstElement = (fruits.unshift('pt: Emerson gosta de banana'));
console.log(fruits);

// Deleting elements
const delFirst = fruits.shift();
const delLast = fruits.pop();
console.log(fruits);

// See the position of an element 
console.log(fruits.indexOf('Banana'));

// See if the item belongs the the array 
console.log(fruits.includes('Orange'));

// Using if statment 
if (fruits.includes('Banana')) {
    console.log('Banana pode ser uma opção');
}

