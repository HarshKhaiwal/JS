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