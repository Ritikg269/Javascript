const score = 300;
// console.log(score);

const balance = new Number (200)  // In this case the return type must be a number so if we want that return type should be confirm then we use NEW keyword.
// console.log(balance);

// Different methods of numbers

// console.log(balance.toString().length);  // using toString method we can chnge number into strings.

// console.log(balance.toFixed(1));   // we use tofixed method for precision value upto 2,3 place we use generally this method in ecommerce site.

const newNumber = 1110.456
// console.log(newNumber.toPrecision(3));



// *****************Maths*********************

// console.log(Math);
// console.log(Math.abs(-5));
// console.log(Math.min(-5,3,4,2,2.-5));
// // console.log(Math.max(-5,3,4,2,2.-5));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)

