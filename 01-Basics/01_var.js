const accountId="1234567890";
let accountEmail="hujhj@gmail.com";
var accountPassword="123234";  //use of var is not recommended because it is global scope
accountCity="Bangalore";
let accountState="Karnataka";

// accountId="4244";  //not allowed
accountEmail="harshkhaiwal@gmail.com";
accountPassword="123456";
accountCity="Mumbai";

console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);   

console.table({accountId,accountEmail,accountPassword,accountCity,accountState}); //table view