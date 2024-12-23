// For in loop , generally it will use for object 

const myObject = {
    js : "javascript",
    cpp : "c++",
    java : "java"
}
for (const key in myObject) {
// console.log(key);
// console.log(`${key} shortcut is for ${myObject[key]}.`);
}

const programming = ["JS", "C++", "Python "]
for (const key in programming) {
    console.log(key);
    console.log(programming[key]);  
}


// Diff bet for in and for of loop is that 
// What it iterates	Keys (property names)	Values of an iterable
// Best suited for	Objects (but not limited to them)	Iterables (like arrays, strings, Maps)