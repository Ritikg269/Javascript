// Array world will start now

const Arr = [2,4,5,6,7]   // recommeded method to declare an array 

const myArr =new Array (0,1,2,3,5)  // declartion of array in Javascript

const myArr2  = ["Ritik", "Virat"] // other way to declare an array

// console.log(myArr[3])


     // Array methods


// Arr.push(10);   // it will push an element in the last position
// Arr.push(11);  
// Arr.pop();     // It will remove the last element from the array 
// console.log(Arr);

// Arr.unshift (15);  // It will add the given element in the first place of array
//Arr.shift();    // It will remove the first element from the array 
//console.log(Arr);
 
  
// console.log(Arr.includes(5));   // It will gave a boolean value if the element is present return true otherwise false 
// console.log(Arr.indexOf(41));   // It will return the index of asked element from the array and if the element is not present then it will return -1.


// const newArr = Arr.join();  // Using join it will convert the array into the strings.
// console.log(Arr)
// console.log(newArr);
// console.log(typeof (newArr));  // return String



// Interview Question diff b/w slice and splice 

console.log("A",Arr);
const myn1 = Arr.slice(1,3)  // In slice it will gave the given index value but exclude the last index and it doesnt may any chnge in the existing array.

console.log(myn1);
console.log("B",Arr);


const myn2 = Arr.splice(1,3);   // In splice it will gave the simialr result as slice but it will include the last value and also make chnges in the existing array(remove the element from the array )
console.log(myn2);        // A [ 2, 4, 5, 6, 7 ]
                          // [ 4, 5 ]
                          // B [ 2, 4, 5, 6, 7 ]   // slice array 
                          // [ 4, 5, 6 ]
                          // c [ 2, 7 ]            // splice array 
console.log("c",Arr);












