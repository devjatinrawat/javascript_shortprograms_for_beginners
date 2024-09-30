

// Practice Promblems

console.log(myVar); // What will be logged?
var myVar = 10;


console.log('start');


// setTimeout(function(){
// console.log('hey i am settimeout');
// },5000);



console.log('end1');
console.log('end2');

// Easy Explanation  : In simple words, setTimeout is a function in JavaScript that waits for a specific amount of time (in milliseconds) and then runs some code. It doesn’t stop the rest of your program from running, it just schedules something to happen later.Think of setTimeout as setting an alarm that goes off after some time, and when it does, it runs the code you gave it.

// for (var i = 0; i < 3; i++) {
//     setTimeout(function() {
//         console.log(i);
//     }, 1000);
// }


// for (let i = 0; i < 3; i++) {
//     setTimeout(function() {
//         console.log(i);
//     }, 1000);
// }
// i is blocked scoped 👆


// Ex let in react component


// import './App.css';

// function App() {
//     let name = 'React';
//     return (
//         <div className="App">
//             <h1>{name}</h1>
//         </div>
//     );
// }

// export default App;
// // This is app component 👆 and regular function 

// import './App.css';

// function App(){

//     let myName = 'Jatin';
//     return (
//         <div className="app">
//             <h1>{myName}</h1>
//         </div>
//     )
// }


// export default App;

// import './App.css';

// let App = () =>{

// }

// const App = () =>{

// }

// const App = () =>{
    
//     let greeting = 'hello world';
// return(
//         <div>
//             <h1>{greeting}</h1>
//         </div>
//     )
// }

// export default App;

// const API_URL = 'https://jsonplaceholder.typicode.com/todos/1'; 


// setTimeout(callback , delay);

// function greeting(){
//     console.log('hello world');
// }

// setTimeout(greeting, 3000);

// setTimeout( () => {
//     console.log('hello world');
// }, 3000);

// setTimeout(function(){
//  console.log('hello world');
// }, 3000);


// let timeoutId;

// function startTimer(){
//     timeoutId = setTimeout( () =>{
//         window.alert('hello')
//     },3000);
//     console.log('STATER');
// }

// function clearTimer(){
// clearTimeout(timeoutId);
// console.log('CLEARED');
// }

// const person = {
//     firstName : 'Jatin Rawat',
//     age : 25,
// }

// person = {
//     firstName : 'Jatin Rawat',
//     age : 26,
// }

// 🙅‍♂️Not Possible

// const person = {
//     firstName : 'Jatin Rawat',
//     age : 25,
// }

// person.firstName = 'Harish';
// person.age = 26;

// console.log(person);



// const person = { name: "Alice", age: 25 };

// // Modify properties individually
// person.name = "Bob";
// person.age = 30;

// console.log(person); 


// Output: { name: "Bob", age: 30 }
// In this fixed version, the object person remains the same reference, but its properties (name and age) are updated. This is allowed with const.

// Key Points:
// Reassignment (not allowed): You cannot reassign the entire object when using const.
// Property modification (allowed): You can modify or update individual properties of the object without issues.

// console.log(myLet); // Will this work?
// let myLet = 5;

// It could be fixed 

// let myLet = 5;
// console.log(myLet);


let arr = [1, 2, 3];
arr = [4, 5, 6];  // Will this work?
arr.push(4);      // Will this work?
console.log(arr);