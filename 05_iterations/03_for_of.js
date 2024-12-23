// for-of loops generally used of array 

const arr = [1,2,4,5,"rk",67,7,4]
for (const val of arr) {
    // console.log(val);
}

const greetings = "Hello Everyone";
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);  
}

// Maps => A Map holds key-value pairs where the keys can be any datatype.
// A Map remembers the original insertion order of the keys.
// Map doesnt print the duplicate key value pair.

const map = new Map()
map.set ('In', "India")
map.set ('USA', "America")
map.set ('Pak', "Pakistan")
map.set ('In', "India")
// console.log(map);

for (const [key , value] of map) {
    console.log(key,"and" , value);
}

// For of loop generally doesnt work with object there is a diff method to use that with object 
// object is not iterable.

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

 for (const [key, value] of myObject) {
   //   console.log(key, ':-', value);    // it gaves error bcz object is not iterable.
    
}