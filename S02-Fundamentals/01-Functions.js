// ========================
// FUNCTIONS
// ========================
/* Functions can be understood as a piece of code that can be reused as many time as we want*/
/* It help us to don't repeat yoursef('DRY'), all functions also return data */

// Declaring a function (fruitProcessor) with two parametres (banana, apple)
// Function declarations can be used before it is declared
function fruitProcessor(banana, apple) {
    const juice = `This is a juice with ${banana} and ${apple} apples`;
    return juice;
    // we need to use return so that our function can 'give back' the result, according to the parametrs 
}

// We save the result of our function in a variable
// const Bananajuice = fruitProcessor(5, 0);
// console.log(Bananajuice)

// Functions can be declared as expressions:
// const calcAge = function (bornYear) {
//     return `A person that was born in ${bornYear}, make ${2026 - bornYear} years in 2026`
// }
// console.log(calcAge(2001));

// Arrow functions
// It's a quick way to write a function, and it has many limitations, one is that: can not be used to create objects
// const calcAge1 = bornYear => 2026 - bornYear
// const age2026 = calcAge1(2001)
// console.log(calcAge1(2));

// Creating an arrow function called square that receives a number and returns it multiplied by itself.
// const calcSquare = square =>  square * square;
// console.log(calcSquare(4))

// Creating an arrow function called greetUser that receives a name and a language,
// and returns a greeting. If language is 'pt' return "Olá, [name]!", if 'es' return "Hola, [name]!", otherwise return "Hello, [name]!".

// const greetUser = (userName, Language) => {
//     if (Language === 'pt'){
//         return  `Olá ${userName} 😁`;
//     } else if(Language == 'es'){
//         return `Hola, ${userName} 🤙`;
//     } else{
//         return `Hello ${userName} 🖐`
//     }
// }
// console.log(greetUser('Emerson', 'pt'));


// Create an arrow function called bmi that receives weight (kg) and height (meters), 
// calculates the BMI (weight / height ** 2), and returns a string saying whether the person is "Underweight", "Normal", "Overweight" or "Obese".
// Underweight (<18.5), Normal/Healthy (18.5–24.9), Overweight (25.0–29.9), and Obese (30.0 or higher)

const bmi = (weight, height) => {
  const result = weight / height ** 2;
  if (result < 18.5) {
    return `Your BMI is ${result} and you are Underweight`;
  } else if (result <= 24.9) {
    return `Your BMI is ${result} and it is Normal/Healthy`;
  } else if (result <= 29.9) {
    return `Your BMI is ${result} and it is Overweight`;
  } else {
    return `Your BMI is ${result} and you are Obese`;
  }
};

console.log(bmi(55, 1.65))
