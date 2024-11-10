console.log("2">1);
console.log("">=null);
console.log(null >0)   // false
console.log(null<0);   // false 
console.log(null == 0); // false
console.log(null>=0);  // true , it is bcz equality check (==) and comparision (< , > , <= , >=) work diff , in comparision check null converted into number and treated as number (0).


/*  It is better to compare same data type so that we can get predictable result.   */

// === strict check , in this it check value and datatypes both

console.log("2" == 2);   // true
console.log("2"===2);    // false 


