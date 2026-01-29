
// ========================
// VALUES vs VARIABLES
// ========================

console.log('===== VALUES vs VARIABLES =====');

// Direct values (literals)
console.log('String value:', 'I am a Value');
console.log('Number value:', 48);
console.log('Boolean value:', true);

// Storing values in variables
let myVariable = 'Hello world';
console.log('Variable value:', myVariable);

// Variable naming conventions
let myFirstName = 'Emerson';  // camelCase (recommended)
let my_last_name = 'Tomo';    // snake_case (less common in JS)
let MyLastName = 'Tomo';      // PascalCase (used for classes)

console.log('Full name:', myFirstName, my_last_name);

// ========================
// DATA TYPES
// ========================

console.log('\n===== DATA TYPES =====');

// 1. String
let myString = "JavaScript is fun!";
console.log('String:', myString, '| Type:', typeof myString);

// 2. Number (both integer and float)
let myNumber = 42;
let myFloat = 3.14;
console.log('Number:', myNumber, '| Type:', typeof myNumber);
console.log('Float:', myFloat, '| Type:', typeof myFloat);

// 3. Boolean
let isLearning = true;
let hasFinished = false;
console.log('Boolean true:', isLearning, '| Type:', typeof isLearning);
console.log('Boolean false:', hasFinished, '| Type:', typeof hasFinished);

// 4. Undefined
let notAssigned;  // Declared but not initialized
console.log('Undefined:', notAssigned, '| Type:', typeof notAssigned);

// 5. Null (intentional absence of value)
let emptyValue = null;
console.log('Null:', emptyValue, '| Type:', typeof emptyValue);  // Note: typeof null returns 'object' (JS quirk)

// ========================
// VARIABLE DECLARATIONS
// ========================

console.log('\n===== LET, CONST, and VAR =====');

// LET: Block-scoped, mutable
let age = 24;
console.log('Original age (let):', age);
age = 25;  // Reassignment allowed
console.log('Updated age (let):', age);

// VAR: Function-scoped, mutable (older way)
var skillLevel = 'Beginner';
console.log('Original level (var):', skillLevel);
skillLevel = 'Intermediate';  // Reassignment allowed
console.log('Updated level (var):', skillLevel);

// CONST: Block-scoped, immutable (value cannot be reassigned)
const birthYear = 2001;
console.log('Birth year (const):', birthYear);
// birthYear = 2002;  // This would cause an error: TypeError: Assignment to constant variable

// CONST with objects and arrays (reference is constant, content can change)
const person = {
  name: 'Emerson',
  age: 24
};
console.log('Original person object:', person);
person.age = 25;  // This is allowed! (modifying property)
// person = { name: 'John' };  // This would cause an error (reassigning reference)
console.log('Modified person object:', person);
