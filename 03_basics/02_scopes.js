/* Global scope and local scope 
Global Scope => A variable or function is in the global scope if it is declared outside of any function, block, or module.
Global variables can be accessed from anywhere in your JavaScript code, as long as they are not shadowed by local variables.

Local Scope => A variable or function is in the local scope if it is declared inside a function, block, or module.
 It can only be accessed from within that scope.
Local variables are not accessible outside of their scope. */ 


var globalVar = "I am global";

function showGlobal() {
  //  console.log(globalVar); // Accessible here
}

showGlobal();
// console.log(globalVar); // Accessible here too

if (true) {
    let blockScoped = "I am block-scoped";
    // console.log(blockScoped); // Accessible here
  }
  
//    console.log(blockScoped); // Error: blockScoped is not defined
  

function one (){
  const username = "Ritik"
    function two(){
      const website ="Leetcode"
  
      console.log(website) 
   
    }
    // console.log(website)
    // console.log(username);
    // two()

}

//  one()



// +++++++++++++++Intersting one ++++++++++++++++++++++++++
//  Diff way to declare variable and method to solve error



console.log (addone (5))    // here we can access it before intialization
function addone (num){
  return num +1 
}
// console.log (addone (5))



// console.log (addtwo (4))  // it gaves error , if we declare function in this way then we cant access it before intialization 

const addtwo = function addtwo (num){
  return num +2 
}
console.log (addtwo (14))