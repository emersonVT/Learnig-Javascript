const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;
BMImark = massMark / (heightMark ** 2);
BMIjohn = massJohn / (heightJohn ** 2);

if (BMImark > BMIjohn) {
    console.log(`Mark's BMI ${BMImark} is higher than John's ${BMIjohn}!`)
} else {
    console.log(`John's BMI ${BMIjohn} is higher than Mark's ${BMImark}!`);
}