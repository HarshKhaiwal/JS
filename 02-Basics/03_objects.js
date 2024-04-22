// Singleton

// object literals

const mySym = Symbol('key1')


const JsUser = {
    name: 'Harsh', "full-name": "Harsh Khaiwal",
    [mySym]: 'key1',
    age: 24,
    email: 'harshkhaiwal@gmail.com',
    location: 'India',
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday"]
}

console.log(JsUser)
console.log(JsUser.name)
console.log(JsUser.age) 
console.log(JsUser.email)
console.log(JsUser[mySym])

JsUser.email = 'chintukhaiwal@gmail.com'
// Object.freeze(JsUser) // It will make the object immutable
console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello, I am Harsh")
}


