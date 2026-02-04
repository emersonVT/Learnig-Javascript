// Storing Mark's and John's mass and height in variables
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;
// Calculating BMI for Mark and John
BMImark = massMark / (heightMark * heightMark);
BMIjohn = massJohn / (heightJohn * heightJohn);
// Showing the BMI to the console
console.log('The BMI of Mark is: ' + BMImark + ', and John has: ' + BMIjohn);

const markHigherBMI = BMImark > BMIjohn;
console.log(markHigherBMI);