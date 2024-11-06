const account_ID = 23
let account_name = "Ritik"
var account_pass = "1234"
account_city = "varanasi"
let account_state;

 console.table([account_ID , account_name , account_pass , account_city]);

account_name = "Virat"
 account_pass = "321"
account_city = "Delhi"
console.table([account_ID , account_name , account_pass , account_city,account_state]);

/*  const are not able to chnge 
    var are not preferred to use due to block scope and functional scope issue 
    we can define any variable without using let and var keyword but it is not prefer to use 
    if we doesnt assign any value to defined var then bydefault its value will be undefined.
*/