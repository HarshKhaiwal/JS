const score =400

const balance = new Number(1000)
console.log(balance);//Output: [Number: 1000]
console.log(score);//Output: 400

console.log(balance.toString());//Output: 1000
console.log(balance.toFixed(2));//Output: 1000.00

const otherNumber = 32.5546

console.log(otherNumber.toPrecision(3));//Output: 32.6

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));//Output: 10,00,000


// +++++++++++ Maths +++++++++++++

console.log(Math.PI);//Output: 3.141592653589793
console.log(Math.abs(-5));//Output: 5
console.log(Math.ceil(5.1));//Output: 6
console.log(Math.floor(5.9));//Output: 5
console.log(Math.round(5.1));//Output: 5
console.log(Math.sqrt(625));//Output: 25
console.log(Math.max(1,2,3,4,5));//Output: 5
console.log(Math.min(1,2,3,4,5));//Output: 1
console.log(Math.random());//Output : Random number between 0 and 1
console.log(Math.floor(Math.random()*10) +1);//Output: Random number between 1 and 9

const min =10 
const max = 20
console.log(Math.floor(Math.random()*(max-min+1)+min));//Output: Random number between 10 and 20