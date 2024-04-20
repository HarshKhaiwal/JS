
// Dates

let mydate = new Date();
console.log(mydate.toString());//Output: Mon Aug 02 2021 15:45:00 GMT+0530 (India Standard Time)    
console.log(mydate.toLocaleString());//Output: 8/2/2021, 3:45:00 PM
console.log(typeof mydate);//Output: object

let mydate1 = new Date(2001, 9,28);
console.log(mydate1.toString());//Output: Thu Oct 28 2001 00:00:00 GMT+0530 (India Standard Time)   
console.log(mydate1.toLocaleString());//Output: 10/28/2001, 12:00:00 AM

let mydate2 = new Date('12-08-2023');
console.log(mydate2.toLocaleString());//Output: 12/8/2023, 12:00:00 AM

let myTimeStamp = Date.now();

console.log(myTimeStamp);//Output: 1627895700000
console.log(mydate2.getTime());//Output: 1670505600000

let newDate = new Date()
console.log(newDate.getFullYear());
console.log(newDate.getMonth());
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getHours());

newDate.toLocaleDateString('default', { weekday: 'long', timeZone: 'UTC'});
