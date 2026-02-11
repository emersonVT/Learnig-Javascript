// switch, if stament, ternary operator
const day = '0';

// SWITCH STATEMENT - Best for multiple exact matches
switch (day) {
    case 'sunday':
    case '1':
        console.log(`Day 1: Light separated from darkness (Day/Night).`);
        break;
    case 'monday':
    case '2':
        console.log(`Day 2: Creation of the firmament (Sky) to divide the waters.`);
        break;
    case 'tuesday':
    case '3':
        console.log(`Day 3: Dry land appears, vegetation and trees created.`);
        break;
    case 'wednesday':
    case '4':
        console.log(`Day 4: Sun, moon, and stars created to mark seasons, days, and years.`);
        break;
    case 'thursday':
    case '5':
        console.log(`Day 5: Sea creatures and birds created.`);
        break;
    case 'friday':
    case '6':
        console.log(`Day 6: Land animals and humanity (male and female) created in God's image.`);
        break;
    case 'saturday':
    case '7':
        console.log(`Day 7: God rests, blessing the seventh day as holy. `);
        break;
    default:
        console.log(`Choose a valid day to know what God created in each day`);
}

// IF/ELSE STATEMENT - Better for ranges or complex conditions
if (day === 'sunday' || day === '1') {
    console.log(`Day 1: Light separated from darkness (Day/Night).`);
} else if (day === 'monday' || day === '2') {
    console.log(`Day 2: Creation of the firmament (Sky) to divide the waters.`);
} else if (day === 'tuesday' || day === '3') {
    console.log(`Day 3: Dry land appears, vegetation and trees created.`);
} else if (day === 'wednesday' || day === '4') {
    console.log(`Day 4: Sun, moon, and stars created to mark seasons, days, and years.`);
} else if (day === 'thursday' || day === '5') {
    console.log(`Day 5: Sea creatures and birds created.`);
} else if (day === 'friday' || day === '6') {
    console.log(`Day 6: Land animals and humanity (male and female) created in God's image.`);
} else if (day === 'saturday' || day === '7') {
    console.log(`Day 7: God rests, blessing the seventh day as holy. `);
} else {
    console.log(`Choose a valid day to know what God created in that day`);
}

// Expression and Statements
// All expressions produce a value, but statements does not! Here we can see one exemple of an expression:
const age = 18;
// Ternary Operator
// It helps us to write condition in one line
age >= 18 ? console.log('You can drive') : console.log('You are not allowed to drive');
// Instead of write this if stament bellow
if (age >= 18) {
    console.log('You have more responsibilities')
} else {
    console.log('Do not wate your time, build good habits');
}
// Using ternary operator inside of template literals

console.log(`If ${age >= 18 ? 'you have a car license, you can drive' : 'you do not have a car license, you are not allowed to drive'}.`);

