// Singleton 
// Object.create     // this is constructor method to create object in which singleton from which will be study later


// Ojects literals


const mySym = Symbol("key1")     // declartion of symbol 
const JSuser = {
    name : "Ritik",
    "Full name " : "Ritik Gupta",
    [mySym] : "mykey1",
    age :19,
    location : "Delhi",
    email : "ritik@google.com",
    isloggedin :false,
    LastLoginDays : ["Monday", "Friday"] 
}

// console.log(JSuser.email);     // this is method to access the objects generally used but not recommeded 
// console.log(JSuser["email"]);   // second way to access the objects.

// console.log(JSuser[mySym]);
// console.log(typeof JSuser.mySym);


// to modify the values in ojects

// JSuser.email = "ritik@amazon.com";
// JSuser.name = "Rits";
// Object.freeze(JSuser);  // if we use freeze then we are not able to chnge the value of objects
// JSuser.email = "ritik@microsoft.com";
// JSuser.name = "Virat";
// console.log(JSuser);


JSuser.greeting = function(){
    console.log("Welcome to Ritik World");
    }
    JSuser.greetingTwo = function(){
        console.log(`Welcome to Ritik World,${this.name}`);
        }
console.log(JSuser.greeting());
console.log(JSuser.greetingTwo());
    