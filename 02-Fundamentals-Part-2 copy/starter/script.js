"use strict";
/*
LESSON 1 - STRICT MODE
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;

if (hasDriversLicense) console.log("I can drive.");
*/

/*
LECTURE 2 - FUNCTIONS - A piece of code we can reuse over and over again.


function logger() {
    console.log("My name is Jesse.");
}

logger(); // Invoking, running, or calling the function.

// Usually pass data and return data in a function
function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleAndOrangeJuice = fruitProcessor(2, 4);
console.log(appleAndOrangeJuice);
*/

/*
LECTURE 3 - FUNCTION DECLARATIONS & EXPRESSIONS


// Function Declaration | Can call before defined because of Hoisting
function calculateAge(fromBirthYear) {
    return 2037 - fromBirthYear;
}
console.log(calculateAge(1989));

// Function Expression | Cannot call before you define it because the const is not initialized
const calculatingAge = function (fromBirthYear) {
    return 2037 - fromBirthYear;
}

console.log(calculatingAge(1989));
*/

/*
LECTURE 4 - ARROW FUNCTIONS
Added in ES6


// Special form of function expression, but shorter

// Arrow Function
const calculatedAge = fromBirthYear => 2037 - fromBirthYear;

const yearsUntilRetirement = (fromBirthYear, firstName) => {
    const age = 2037 - fromBirthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years.`;
}

console.log(yearsUntilRetirement(1989, "Jesse"));
*/

/*
LECTURE 5 - FUNCTIONS CALLING OTHER FUNCTIONS


function cutFruitIntoPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitIntoPieces(apples);
    const orangePieces = cutFruitIntoPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
    return juice;
}

console.log(fruitProcessor(2, 3));
*/

/*
LECTURE 6 - REVIEWING FUNCTIONS


const calculateAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calculateAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years.`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired 🎉`);
        return -1;
    }
    return retirement;
}

console.log(yearsUntilRetirement(1989, "Jesse"));
*/

/*
CODING CHALLENGE


const calculateAverage = (score1, score2, score3) => {
    return (score1 + score2 + score3) / 3;
}

// const calcAverage = (number1, number2, number3) => (number1 + number2 + number3) / 3;

const averageDolphins = calculateAverage(44, 23, 71);
const averageKoalas = calculateAverage(65, 54, 49);

const averageDolphins2 = calculateAverage(85, 54, 41);
const averageKoalas2 = calculateAverage(23, 34, 27);

function checkWinner(averageScore1, averageScore2) {
    if (averageScore1 > (averageScore2 * 2)) {
        console.log(`Dolphins win (${averageScore1} vs. ${averageScore2}).`);
    } else if (averageScore2 > (averageScore1 * 2)) {
        console.log(`Koalas win (${averageScore2} vs. ${averageScore1}).`);
    } else {
        console.log(`No one wins (${averageScore1} vs. ${averageScore2}).`);
    }
}

checkWinner(averageDolphins, averageKoalas);
checkWinner(averageDolphins2, averageKoalas2);
*/

/*
 LECTURE 8 - ARRAYS


const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

// Literal Syntax
const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);
console.log(years[0]);

console.log(`Number of elements in friends array: ${friends.length}`);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);

const firstName = "Jesse";
const jesse = [firstName, "Ruiz", 31, friends];
console.log(jesse);

// Exercise

const calculateAge = function (birthYear) {
    return 2037 - birthYear;
}

const newYears = [1990, 1967, 2002, 2010, 2018];

const age1 = calculateAge(newYears[0]);

console.log(age1);
*/

/*
 LECTURE 9 - BASIC ARRAY OPERATIONS (METHODS)


const friends = ["Michael", "Steven", "Peter"];

// Add Elements
const newLength = friends.push("Jay"); // Returns the new length. So you can put that in a var and use it.
console.log(friends);
console.log(newLength);

friends.unshift("John"); // Adds to the front.
console.log(friends);

// Remove Elements
friends.pop(); // Removes the last element in the array (This return the popped element).
console.log(friends);

friends.shift(); // Removes the first element in the array
console.log(friends);

console.log(friends.indexOf("Steven")); // Return the index where that element is. Returns -1 if it is not in the array

console.log(friends.includes("Steven")); // Returns a Boolean if the element is in the array or not.
// Above method uses strict equality

if (friends.includes("Steven")) {
    console.log("You have a friend named Steven.");
}
*/

/*
CODING CHALLNEGE 2
*/
