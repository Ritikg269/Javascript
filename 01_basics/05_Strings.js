const name = "Ritik";   // Declaration of string 
const score = 100;

console.log(name + score + " best");  // This is string concatenation method but we dont use this nowdays
 // bcz this is little older version.

console.log(`Hello my name is ${name} and my score is ${score} and I'm the best`); //This method is known as String Interpolation 
//in which we create the placeholder and we can assign value in them.

const gameName = new String ('ritikgoogle')   // 2nd way to declare the string 

/*In JavaScript, methods for strings are built-in functions
 that are used to manipulate or retrieve information from string objects.
  String methods are applied directly on string instances and are incredibly useful for operations like 
  formatting, searching, or modifying text.
  
 ********** Key Characteristics of String Methods in JavaScript ********

Strings are immutable: Methods do not modify the original string. Instead, they return a new string or value.
Access: String methods are accessed using dot notation: string.method(arguments).


***********Common String Methods in JavaScript*************


1. Case Manipulation
=> toUpperCase() - Converts all characters to uppercase.
=> toLowerCase() - Converts all characters to lowercase.


2. Searching

=> indexOf(substring)- Returns the index of the first occurrence of a substring. Returns -1 if not found.

and many other methods are there is string .

*/

let str = "hello world world";
console.log(str.replaceAll("world", "JavaScript")); // Output: "hello JavaScript"

