/*
 * JavaScript Fundamentals - Operators and Template Literals
 * Date: 6th of Frebruary
 */

// ============================================================================
// 1. ARITHMETIC OPERATORS
// ============================================================================
console.log('===== ARITHMETIC OPERATORS =====');

// Basic arithmetic operations
const currentYear = 2026;
const birthYear = 2001;
const age = currentYear - birthYear;
console.log(`In ${currentYear}, I will be ${age} years old.`);

// All arithmetic operators
console.log('\n--- All Arithmetic Operators ---');
console.log(`Addition: 10 + 5 = ${10 + 5}`);
console.log(`Subtraction: 10 - 5 = ${10 - 5}`);
console.log(`Multiplication: 10 * 5 = ${10 * 5}`);
console.log(`Division: 10 / 5 = ${10 / 5}`);
console.log(`Remainder (Modulus): 10 % 3 = ${10 % 3}`);  // Remainder of division
console.log(`Exponent (Power): 5 ** 2 = ${5 ** 2}`);     // 5² = 25

// Real-world example: Calculating area
const length = 10;
const width = 5;
const area = length * width;
console.log(`\nArea calculation: ${length} × ${width} = ${area}`);

// ============================================================================
// 2. ASSIGNMENT OPERATORS
// ============================================================================
console.log('\n===== ASSIGNMENT OPERATORS =====');

let score = 0;
console.log(`Initial score: ${score}`);

// Different assignment operators
score += 10;  // score = score + 10
console.log(`After score += 10: ${score}`);

score -= 3;   // score = score - 3
console.log(`After score -= 3: ${score}`);

score *= 2;   // score = score * 2
console.log(`After score *= 2: ${score}`);

score /= 4;   // score = score / 4
console.log(`After score /= 4: ${score}`);

score %= 3;   // score = score % 3
console.log(`After score %= 3: ${score}`);

// Increment and Decrement operators
let counter = 5;
console.log(`\nCounter starts at: ${counter}`);
counter++;  
console.log(`After counter++: ${counter}`);
counter--;  
console.log(`After counter--: ${counter}`);

// Pre-increment vs Post-increment
let a = 5;
let b = a++;  // b gets 5, then a becomes 6
console.log(`\nPost-increment: let b = a++ → a=${a}, b=${b}`);

let c = 5;
let d = ++c;  // c becomes 6, then d gets 6
console.log(`Pre-increment: let d = ++c → c=${c}, d=${d}`);

// ============================================================================
// 3. TEMPLATE LITERALS (ES6 FEATURE)
// ============================================================================
console.log('\n===== TEMPLATE LITERALS =====');

// Multi-line strings without escape characters
console.log(`Learning JavaScript is an investment for myself.
    It opens doors to:
    1. Web development
    2. Mobile apps (React Native)
    3. Backend development (Node.js)
    4. And much more!`);

// String interpolation with expressions
const year = 2026;
const nextYear = year + 1;
console.log(`\nWithout template literals (concatenation):`);
console.log("New choices need to be made in " + year + " because " + nextYear + " will be here soon.");

console.log(`\nWith template literals (cleaner):`);
console.log(`New choices need to be made in ${year} because ${nextYear} will be here soon.`);


// ============================================================================
// 4. LOGICAL OPERATORS (ADDED FOR COMPLETENESS)
// ============================================================================
console.log('\n===== LOGICAL OPERATORS =====');

// Real-world scenario: Login system
const hasUsername = true;
const hasPassword = true;
const isAbove18 = true;
const rememberMe = false;

// AND operator (&&) - All conditions must be true
const canLogin = hasUsername && hasPassword;
console.log(`Can login? ${canLogin}`);  // true

// OR operator (||) - At least one condition must be true
const canAccessContent = isAbove18 || hasParentalConsent;
console.log(`Can access content? ${canAccessContent}`);  // true

// NOT operator (!) - Inverts boolean value
const shouldShowCookieBanner = !rememberMe;
console.log(`Show cookie banner? ${shouldShowCookieBanner}`);  // true

// Complex condition
const isPremiumUser = true;
const hasTrialDaysLeft = false;
const canAccessPremium = (isPremiumUser || hasTrialDaysLeft) && canLogin;
console.log(`Can access premium? ${canAccessPremium}`); // True

// ============================================================================
// 5. COMPARISON OPERATORS (USEFUL ADDITION)
// ============================================================================
console.log('\n===== COMPARISON OPERATORS =====');
// Falsy values: 0, '', undefined, null, NaN

console.log(`Equality: 5 == '5' → ${5 == '5'}`);    // true (type coercion)
console.log(`Strict equality: 5 === '5' → ${5 === '5'}`);  // false (no coercion)
console.log(`Inequality: 5 != '5' → ${5 != '5'}`);    // false
console.log(`Strict inequality: 5 !== '5' → ${5 !== '5'}`);  // true
console.log(`Greater than: 10 > 5 → ${10 > 5}`);
console.log(`Less than: 10 < 5 → ${10 < 5}`);
console.log(`Greater or equal: 10 >= 10 → ${10 >= 10}`);
console.log(`Less or equal: 5 <= 10 → ${5 <= 10}`);

// ============================================================================
// 6. PRACTICAL EXAMPLES
// ============================================================================
console.log('\n===== PRACTICAL EXAMPLES =====');

// Example 1: Shopping cart calculation
console.log('\n--- Shopping Cart ---');
const itemPrice = 29.99;
const quantity = 3;
const discount = 5;
const subtotal = itemPrice * quantity;
const finalPrice = subtotal - discount;
console.log(`Item: $${itemPrice} × ${quantity} = $${subtotal}`);
console.log(`Discount: -$${discount}`);
console.log(`Final price: $${finalPrice}`);

// Example 2: Age verification system
console.log('\n--- Age Verification ---');
const userAge = 21;
const legalDrinkingAge = 21;
const isLegalAge = userAge >= legalDrinkingAge;
console.log(`User age: ${userAge}`);
console.log(`Legal drinking age: ${legalDrinkingAge}`);
console.log(`Can drink legally? ${isLegalAge ? 'Yes' : 'No'}`);

// Example 3: Temperature conversion
console.log('\n--- Temperature Conversion ---');
const celsius = 25;
const fahrenheit = (celsius * 9/5) + 32;
console.log(`${celsius}°C = ${fahrenheit}°F`);

// ============================================================================
// KEY TAKEAWAYS
// ============================================================================
console.log('\n===== KEY TAKEAWAYS =====');
console.log('1. Use template literals (`) for cleaner string concatenation');
console.log('2. === and !== are safer than == and != (no type coercion)');
console.log('3. a++ vs ++a: post-increment vs pre-increment matters');
console.log('4. Always consider operator precedence in complex expressions');
console.log('5. Template literals can contain any valid JavaScript expression');