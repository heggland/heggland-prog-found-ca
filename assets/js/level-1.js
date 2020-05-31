/*

Course Assignment
Instructions
The Level 1 questions are required.

The Level 2 questions are optional.

Some of the questions don't provide variable names, and you must come up with them yourself. Choosing appropriate variable names will form part of your assessment, as will proper and consistent formatting of your code.
Level 1

*/
// Level 1

/* Question 1
Declare and initialise a variable with a string value.
*/

var hello = ('Hello world')

/* Question 2
Create an object variable called person and give it two properties (a key and a value) of your choice.
*/

var person = {
    sex: 'male',
    age: '100',
};

/* Question 3
Create a variable called outOfStock and assign it a boolean value.
Create an if else statement that checks the value of outOfStock.
If it is true, console log "Out of stock". Otherwise log "In stock".
*/

var outOfStock = true;
if (outOfStock === true) {
    console.log("Out of stock");
} else {
    console.log("In stock");
}

/* Question 4
Create an array of five numbers.
Loop through the array and console log each value.
*/

var numArray = ['11', '22', '33', '44', '55'];
for (i in numArray) {
    console.log(numArray[i])
}

/* Question 5
Create a for loop that counts from 15 to 25. Console log the value of the counter variable inside the loop.
*/

for (var count = 15; count <= 25; count++) {
    console.log(count);
}

/* Question 6
Using the same loop from the above question, only log the value of the counter variable if it is equal to 20.
*/

var number=20;

for (var count1 = 15; count1 <=25; count1++) {
    if (count1 === 20) {
        console.log(number)
    }
}


/* Question 7
Create an array of two objects. Each object must have the same three properties (with different values):
one property with a string value
one property with a number value
one property with a boolean value
Loop through the array and console log the number value and the boolean value.
*/

var bike = [
    {
        manufacture: 'Scott',
        weight: '7',
        carbon: true,
    },
    {
        manufacture: 'Cube',
        weight: '9',
        carbon: false,
    }
];

for (i in bike) {
    console.log('Weight: ' + bike[i].weight + ' Carbon: ' + bike[i].carbon)
}

/* Question 8
Create a function called whatIDontLike that accepts one argument. Choose a good name for the argument.
Inside the function, log the string "I don't like " together with the argument.
Call the function and pass in a value of your choice.
Example:
If you pass in the value "giraffes", the function should log: "I don't like giraffes".
*/

function logToConsole1(mushroom) {
    console.log('I dont like: ' + mushroom);
}

logToConsole1('Amanita');


/* Question 9
Create a function that accepts two arguments.
Inside the function, subtract the second argument from the first and console log the result.
*/

function subtractNumbers(num1, num2) {
    var sum = num2 - num1;
    console.log(sum);
}

subtractNumbers(7, 4);


/* Question 10
Create an empty array.
Create a function that accepts one argument.
Inside the function, add the argument to the array.
Call the function and pass in a value of any type.
*/

var emptyArray = [];

function skate(argument) {
    emptyArray.push(argument);
}

skate('penny');

console.log(emptyArray);