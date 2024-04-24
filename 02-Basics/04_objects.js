const instaUser = new Object();

instaUser.id ="zoro";
instaUser.name = "Roronoa Zoro";
instaUser.age = 21;
instaUser.isLoggedin = false;

console.log(instaUser);   

const regUser = {
    email: "dushfl@gmail.com",
    fullName: {
        UserFullName:{
            firstName: "Dushyant",
            lastName: "Khaiwal"
        }
    }
}

console.log(regUser.fullName.UserFullName.firstName);

const obj1 = { 1:"one", 2:"two", 3:"three" };
const obj2 = { 4:"four", 5:"five", 6:"six" };

const obj3 = Object.assign({},obj1, obj2); // {} is the target object, obj1 and obj2 are source objects 
console.log(obj3);

const obj4 = {...obj1, ...obj2}; // Spread operator
console.log(obj4);

const users = [{
    id: 1,
    email: "fejn@gmail.com"
},
{
    id: 2,
    email: "fje@gmail.com"
}];

console.log(Object.keys(instaUser));
console.log(Object.values(instaUser));
console.log(users[0]);
console.log(instaUser.hasOwnProperty("isLoggedin"));