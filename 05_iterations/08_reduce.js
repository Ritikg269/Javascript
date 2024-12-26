/*
Reduce method = The reduce() method in JavaScript is an array method that executes a callback function on each element of the array,
 resulting in a single output value. It is often used to aggregate array elements into a single value,
  such as summing numbers, concatenating strings. */


const nums = [1,2,3]
// const myTotal = nums.reduce (function(acc, currval) {
//     console.log(`acc is ${acc} and currval is ${currval}`);
    
//     return acc +currval
// },0) 

const myTotal = nums.reduce ( (acc,currval) => acc+currval ,0)
console.log(myTotal);
