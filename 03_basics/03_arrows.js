const user = {
    username :"Rits",
    price : 999 ,
     
    welcomemessage : function (){
        console.log(`${this.username}, welcome to the Ritikk World` );
        
    }
}
user.welcomemessage();
user.username = "Ritik"
user.welcomemessage();

// this function indicates the context of current path and it will not work with function it will only work with objects.

// function chai (){
//     let username = "Ritik"
//     console.log(this.username)
// }
// chai()    // it will gave undefined so "this" is not work with function


const chai = () =>  {           // way to declare arrow function
    let username = "Ritik"
    console.log(this)  
}
chai ();

// const sum = (num1 , num2 ) => {    //explicit return bcz we use return keyword
//     return num1 + num2
// }
// console.log(sum (3,6));


const sum = (num1 , num2) => (num1 + num2);   //this is know as implicit return 
console.log(sum (4,5));


