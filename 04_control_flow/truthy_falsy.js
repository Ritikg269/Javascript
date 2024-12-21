// truthy and flasy value are those values which are assumed as true or false.

// Falsy values

// false , 0 , -0 , BigInt , 0n , "" , Null , Undefinded , NaN 

// Truthy values

// except all falsy value all the rest values cosider as true values.
// for e.g - "0", 'false', " ", [], {}, function(){}


// nullish coalescing operator
//The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand 
// when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand. 
// It’s commonly used to provide default values for variables.

let var1
//  var1 = 5 ?? 10;
// var1 = null ?? 15;
var1 = null ?? undefined ;
 var1 = null ?? false;

console.log(var1);

// Note :- nullish coalescing operator it is different from ternary operator => condition ? true : flase;
