// function SayMyName (){
//     console.log("R");
//     console.log("I");
//     console.log("T");
//     console.log("I");
//     console.log("K");    
// }

// SayMyName()



// function addTwoNumber (num1 , num2 ){
//     console.log(num1 + num2);   
// }


function addTwoNumber (num1 , num2 ){  
    let result = num1 + num2
    return result 
    }

// const result = addTwoNumber ( 5,4);
// console.log(result);


// function loginUserMessage(username = "sam"){
//     if(!username){
//         console.log("PLease enter a username");
//         return
//     }
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("rits"))


function CalculateMyCart (val1 , val2,...num1){             /// here "..." is referred as Rest it gaves all the argument in the form of array 
    return num1 
}
console.log(CalculateMyCart(122,145,200,450,4100));


function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));