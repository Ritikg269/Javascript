const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 //const newNums = myNumers.map( (num) => { return num + 10})
 //console.log(newNums);
 
// Chaining => in this we can use multiple method together like can use map and filter altogether.

const myNums = myNumers
               .map ( (num)=> num *10)
               .map( (num)=> num + 2)
               .filter((num) => num > 35)    // This is known as chainig method 
console.log(myNums);
