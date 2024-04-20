let score=true;

console.log(typeof score); //string
console.log(typeof (score));

let valueInNumber=Number(score);
console.log(typeof valueInNumber); //number
console.log(valueInNumber);

//"33" => 33
//"33abc" => NaN
//true => 1 and false => 0
//null => 0
//undefined => NaN

let isLoggednIn=1;
console.log(Boolean(isLoggednIn)); //true

let someNumber=33
let stringNumber=String(someNumber);
console.log(typeof stringNumber); //string

// **********  Conversion Operation **********

let value=33;
let negValue=-value;
console.log(negValue);

let str1="Hello";
let str2="World";

let str3=str1+str2;
console.log(str3);

console.log("1" + 2 + 3); //123
console.log(1 + 2 + "3"); //33
console.log(1 + "2" + 3); //123
console.log((1 + 2) * 3%3); //0

console.log(+true); //1
console.log(+""); //0

let num1, num2, num3;

num1 = num2 = num3 = 5+6; //not recommended

let gameCounter=100;
++gameCounter;
console.log(gameCounter);
gameCounter++;
console.log(gameCounter);