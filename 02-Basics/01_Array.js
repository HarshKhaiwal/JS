//Array

//Array makes shallow copy of the array and not deep copy of the array 
//Array is a reference type
//Array is a collection of elements
//Array is a object
//Array is a global object
//Array is a constructor function
//Array is a prototype object
//Array is a iterable object


const myArray = [1,2,3,4,5,6,7,8,9,10];
const myArray2  = new Array(4,6,7,8,9,10);

myArray.push(11);
console.log(myArray);//Output: [1,2,3,4,5,6,7,8,9,10,11]

myArray.pop();
console.log(myArray);//Output: [1,2,3,4,5,6,7,8,9,10]

myArray.unshift(0);
console.log(myArray);//Output: [0,1,2,3,4,5,6,7,8,9,10]

myArray.shift();
console.log(myArray);//Output: [1,2,3,4,5,6,7,8,9,10]

console.log(myArray.includes(8 ))  //Output: true
console.log(myArray.includes(11 ))  //Output: false
console.log(myArray.indexOf(8 ))  //Output: 7   

const newArray = myArray.join()


// Slice and Splice

console.log(myArray.slice(2,5));//Output: [3,4,5]
console.log("A", myArray); 

console.log(myArray.splice(2,5));//Output: [3,4,5,6,7]
