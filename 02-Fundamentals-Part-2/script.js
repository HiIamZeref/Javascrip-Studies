'use strict'; // strict mode: catch common coding mistakes and "unsafe" actions

/* Functions */
function logger() {
    console.log('My name is Felipe');
}

logger(); // calling / running / invoking function

function fruitProcessor(apples, oranges) { // parameters, like variables
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

console.log(fruitProcessor(5, 2));  // arguments, like values


/* Function Declarations vs. Expressions */
// Function declaration

function calcAge1(birthYear) { // named function
    return 2024 - birthYear;
}

console.log(calcAge1(2001));

// Function expression
const calcAge2 = function (birthYear) { // anonymous function, lambda function
    return 2024 - birthYear;
}

console.log(calcAge2(2001));


/* Arrow Function */
const calcAge3 = birthYear => 2024 - birthYear; // one parameter, one line of code
console.log(calcAge3(2001));

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2024 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years.`;
}
console.log(yearsUntilRetirement(2001, 'Felipe'));


/* Functions Calling Other Functions */
const newYearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge2(birthYear); // calling function inside another function
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years.`;
}
console.log(newYearsUntilRetirement(2001, 'Felipe'));


/* Challenge #1 */
const calcAverage = (one, two, three) => (one + two + three) / 3;
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= (2 * avgKoalas)) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= (2 * avgDolphins)) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log(`No team wins...`);
    }
}
checkWinner(scoreDolphins, scoreKoalas);


/* Introduction to Arrays */
const friends = ['Felipe', 'Rafael', 'Pedro', 'Rodrigo']; // array literal
console.log(friends);

const years = new Array(2001, 2002, 2003, 2004);// array constructor
console.log(years);

console.log(friends[0]); // access element based on position
console.log(friends.length); // length of array
console.log(friends[friends.length - 1]); // last element of array

friends[2] = 'Lucas'; // mutate array
console.log(friends);

const felipeData = ['Felipe', 'Coimbra', 2024 - 2001, 'student', friends]; // array can have different types
console.log(felipeData);


/* Basic Array Operations */
const newFriends = ['Felipe', 'Rafael', 'Pedro', 'Rodrigo'];
newFriends.push('Mello'); // add element to end of array, also returns length of array
console.log(newFriends);

newFriends.unshift('Lucas'); // add element to start of array, also returns length of array
console.log(newFriends);

newFriends.pop(); // remove last element of array, also returns removed element
console.log(newFriends);

newFriends.shift(); // remove first element of array, also returns removed element
console.log(newFriends);

let getPos = newFriends.indexOf('Felipe'); // get position of element in array
console.log(getPos);

let hasElement = newFriends.includes('Rafael'); // check if element is in array
console.log(hasElement);


/* Challenge #2 */
const calcTip = (bill) => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];


/* Introduction to Objects */
const felipe = {
    firstName: 'Felipe',
    lastName: 'Coimbra',
    age: 2024 - 2001,
    job: 'student',
    friends: ['Rafael', 'Pedro', 'Rodrigo']
}; // object literal
console.log(felipe);

/* dot vs bracket notation (ways we can acess data from object) */
console.log(felipe.firstName); // dot notation
console.log(felipe['lastName']); // bracket notation

/* assigning values to a object */
felipe.location = 'Brazil'; // dot notation
felipe['twitter'] = '@felipe'; // bracket notation


/* Object Methods */
const felipe = {
    firstName: 'Felipe',
    lastName: 'Coimbra',
    birthYear: 2001,
    job: 'student',
    friends: ['Rafael', 'Pedro', 'Rodrigo'],
    hasDriversLicense: true,

    calcAge: function () {
        this.age = 2024 - this.birthYear; // this keyword
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
    }
};
console.log(felipe.calcAge());
console.log(felipe.age);
console.log(felipe.getSummary());


/* Challenge #3 */
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

if (mark.calcBMI() > john.calcBMI()) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`);
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`);
}

/* iteration: the for loop */
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}

/* Looping Arrays, Breaking and Continuing */
const felipeArray = [
    'Felipe',
    'Coimbra',
    2024 - 2001,
    'student',
    ['Rafael', 'Pedro', 'Rodrigo'],
    true
];
const types = [];

for (let i = 0; i < felipeArray.length; i++) {
    console.log(felipeArray[i], typeof felipeArray[i]);
    types.push(typeof felipeArray[i]);
}
console.log(types)


const yearsLoop = [1991, 2007, 1969, 2024];
const ages = [];
for (let i = 0; i < yearsLoop.length; i++) {
    ages.push(2024 - yearsLoop[i]);
}
console.log(ages);

/* break and continue */
const searchArray = ['Pedro', 'Rafael', 'Felipe', 'Rodrigo', 'Lucas', 'Mello'];
for (let i = 0; i < searchArray.length; i++) {
    if (searchArray[i] === 'Felipe') {
        console.log(`Felipe is at position ${i + 1}`);
        break; // stops the loop
    }
}

for (let i = 0; i < searchArray.length; i++) {
    if (typeof searchArray[i] !== 'string') continue; // skips the current iteration
    console.log(searchArray[i], typeof searchArray[i]);
}

/* Looping Backwards and Loops in Loops */
const loopBackwards = ['Felipe', 'Coimbra', 2024 - 2001, 'student', ['Rafael', 'Pedro', 'Rodrigo']];
for (let i = loopBackwards.length - 1; i >= 0; i--) { // loop backwards
    console.log(loopBackwards[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`Starting exercise ${exercise}`);
    for (let rep = 1; rep < 6; rep++) { // nested loop
        console.log(`Exercise ${exercise}: Lifting weights repetition ${rep}`);
    }
}


/* The while Loop */
let counter = 1;
while (counter <= 10) { // while loop
    console.log(`Starting exercise ${counter}`);
    counter++;
}


/* Challenge #4 */
const newCalcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const billsArray = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tipsArray = [];
const totalsArray = [];

for (let i = 0; i < billsArray.length; i++) {
    tipsArray.push(newCalcTip(bills[i]));
    totalsArray.push(billsArray[i] + tipsArray[i]);
}