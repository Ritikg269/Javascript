/*Javascript => JavaScript is dynamically typed, meaning that type checking is done at runtime, rather than during compilation.
Some other languages that use dynamic typing include Python and Ruby. 


Basically JS divided 2 category of datatypes.
1 - Primitive data 
2- Non-primitive data

=> Primitive datatypes (call by value)- 7 datatypes are primitive
String, Number, Boolean , Null , Undefined, Symbol, BigINt



=> Reference or Non-primitive datatypes (call by reference 
Array, Object and Functions)

Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  => function object
       Object  =>  object
*/


/*+++++++++++++++++++ Memory ++++++++++++++++++++++++++++++
   2 Types of memory in JS
   1- Stack (Primitive)
   2- Heap (Non Primitive) */


   // Example of Stack memory 

   let myname = "Ritik";
   let anothername = myname;
   anothername = "Virat" 
   console.log(anothername);
   console.log(myname);

   

   // Example of Heap memory 

   let userOne ={
       email : "user@google.com",
       upi : "upi@apx",
   }

   let userTwo = userOne;
   userTwo.email = "ritik@google.com";

   console.log(userOne.email);
   console.log(userTwo.email);

   /* In sort in Stack memory if we chnge the refered value then the original value will not be chnged bcz it provide the copied 
   value (reference value) while in Heap memory if chnged the refered value then the it will chged the original value also. */
   

   