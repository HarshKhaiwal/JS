const name = "Harsh Khaiwal"
const repoCount = 20

console.log(name + " has " + repoCount + " repositories on GitHub"); //Old way of writing strings
console.log(`${name} has ${repoCount} repositories on GitHub`); //Template literals Modern way of writing strings

const gamename= new String("Pubg");//String Object
console.log(gamename); //Output: [String: 'Pubg']
console.log(gamename[0]); //Output: P
console.log(gamename.__proto__);//Output: [String: 'Pubg']
console.log(gamename.length);//Output: 4
console.log(gamename.toUpperCase());//Output: PUBG
console.log(gamename.charAt(2));//Output: b
console.log(gamename.indexOf('u'));//Output: 1
console.log(gamename.includes('u'));//Output: true
console.log(gamename.split('b'));//Output: [ 'Pu', 'g' ]
console.log(gamename.slice(1,3));//Output: ub
console.log(gamename.substring(1,3));//Output: ub
console.log(gamename.substr(1,3));//Output: ubg
console.log(gamename.replace('P','p'));//Output: pubg
console.log(gamename.concat(' Mobile'));//Output: Pubg Mobile

const anotherString = "HelloWorld"
console.log(anotherString.slice(-8,5));//Output: llo

const newStringOne = "     Harsh      "
console.log(newStringOne.trim());//Output: Harsh

const url = "https://www.google.com/search?q=javascript"
url.replace('javascript','python')
console.log(url.replace('javascript','python'));//Output: https://www.google.com/search?q=python
console.log(url.includes('google'));//Output: true

const newStringTwo = "Hello-world-how-are-you"
console.log(newStringTwo.split('-'));//Output: [ 'Hello', 'world', 'how', 'are', 'you' ]
