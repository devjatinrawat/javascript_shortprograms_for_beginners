

let count = 0;


const plusBtn = document.querySelector('.plus_btn');
const minusBtn = document.querySelector('.minus_btn');
const numberUpdate = document.querySelector('.number');
const resetBtn = document.querySelector('.reset');

function increment(){
    count++;
    numberUpdate.textContent= count;

}

function decrement(){
    count--;
    numberUpdate.textContent= count;
}

function reset(){
    count = 0;
    numberUpdate.textContent = count;
}

plusBtn.addEventListener('click',increment);
minusBtn.addEventListener('click', decrement);
resetBtn.addEventListener('click',reset);

/*
Desc : This script manages a counter with increment, decrement, and reset functionalities using button event listeners to update the displayed count.

querySelector->
The querySelector() method returns the first element that matches a CSS selector.

To return all matches (not only the first), use the querySelectorAll() instead.

Both querySelector() and querySelectorAll() throw a SYNTAX_ERR exception if the selector(s) is invalid.

The textContent property in web development retrieves or sets the text content of an HTML element and all its descendants, excluding any HTML tags or attributes.

The addEventListener() method attaches an event handler to an element.

element.addEventListener(event, function, capture)
Above, the parameters include −

event: The name of the event. Required.
function: The function to run when the event occurs. Required.
capture: Whether the event should be executed in the capturing phase. This check and displays a boolean value; true or false.

In JavaScript, functions can be passed as arguments, allowing methods like addEventListener to accept either a function reference or a function definition directly.'

Functions :
In JavaScript, a function reference and function definition are related but distinct concepts:
Function Definition
A function definition is the complete declaration of a function, including:
The function keyword
The function name (optional for anonymous functions)
Parameters enclosed in parentheses ()
The function body enclosed in curly braces {}
For example:
javascript
function greet(name) {
  console.log(`Hello, ${name}!`);
}

Here, function greet(name) { ... } is the complete function definition.
Function Reference
A function reference is a way to refer to a function without actually executing it. It can be assigned to variables, passed as arguments to other functions, or returned from functions.
To get a function reference, you can use the function name without the parentheses:
javascript
let greetRef = greet;

Now, greetRef holds a reference to the greet function. You can call the function using either the original name or the reference:
javascript
greet('Alice'); // Calls the function directly
greetRef('Bob'); // Calls the function using the reference

Both lines will output the same result:
text
Hello, Alice!
Hello, Bob!

The key differences are:
A function definition is the complete declaration of a function, while a function reference is a way to refer to an existing function.
When you use a function name without parentheses, you get a function reference. When you use it with parentheses, you execute the function.
Function references can be assigned to variables, passed as arguments, or returned from functions, allowing for higher-order programming techniques.
In summary, a function definition creates a function, while a function reference is a way to point to an existing function without executing it, enabling more flexible and powerful programming patterns in JavaScript.

*/


