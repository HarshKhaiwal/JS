// Primitive 

// 7 types of primitive data types in JavaScript
// 1. Number 2. String 3. Boolean 4. Undefined 5. Null 6. Symbol 7. BigInt

//Reference (non-primitive) data types
// 1. Array 2. Object 3. Function 4. Date 5. RegExp

// JavaScript is a dynamically typed language

const score = 100;
const scoreValue = 100.5;

const isLoggednIn = false ;
const outsideTemp = null;
let userEmail;

const id = Symbol('1234');
const anotherId = Symbol('1234');

console.log(id === anotherId); //false  //Symbol is unique value

const bigNumber = 583457823587325782587325n //BigInt

const heroes =["Superman","Batman","Spiderman"];

let myObject = {name:"Harsh",age:21};

function greet(){
    console.log("Hello");
}

console.log(typeof outsideTemp);//object
console.log(typeof greet);//function
console.log(typeof myObject);//object
console.log(typeof heroes);//object
greet(); //Hello


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive Data Types), Heap (Non-Primitive Data Types)

let myYoutubeName = "Harsh Khaiwal";

let anotherName = myYoutubeName
anotherName = "Harry"

console.log(myYoutubeName); //Harsh Khaiwal
console.log(anotherName); //Harry

let userOne ={
    email: "harshkhaiwal@gmail.com",
    upi: "harshkhai@upi"
}

let userTwo = userOne;

userTwo.email = "ashdk@gmail.com";

console.log(userOne.email); //ashdk@gmail.com