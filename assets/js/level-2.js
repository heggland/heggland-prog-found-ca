/*

Course Assignment
Instructions
The Level 1 questions are required.

The Level 2 questions are optional.

Some of the questions don't provide variable names, and you must come up with them yourself. Choosing appropriate variable names will form part of your assessment, as will proper and consistent formatting of your code.
Level 1

*/
// Level 2

/* Question 1
Using the loop from question 5 above, only log the counter variable if it is an even number.
Hint:
You can use the modulus % operator for this.
*/


for (var count = 15; count <= 25; count++) {
    console.log(count + count % 2);
}

/* Question 2
Create a function that logs the sentence "I am a function"
Assign this function to a variable called innerFunction.
Create another function called outerFunction that accepts one argument.
Inside outerFunction, call the argument like you would a function - with parenthesis ().
Call outerFunction and pass in the innerFunction variable.
*/

function sky() {
    console.log ('I am a function');
}

var innerFunction = sky;

function outerFunction(text) {
    console.log(text);
}

outerFunction(innerFunction);
