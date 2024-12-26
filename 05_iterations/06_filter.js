const coding = ["java","cpp","JS","Python"]

const values = coding.forEach( (item)=>{
// console.log(item);
return item;
})
// console.log(values);

// for each loop doesnt return anything it will gave undefined.


const mynums = [ 1,2,3,4,5,,6,7,8,9,10]
// const newnums = mynums.filter( (nums) => nums >=4 )
// console.log(newnums);

// const newnums = mynums.filter((nums) => {     // if we use scope then we have to use return keyword to return the value
//     return nums>7;  
// })
// console.log(newnums);



 const newNums = []            // if we want to return element using for each loop then 

 mynums.forEach(num => {
    if (num >4) {
        newNums.push(num)
    } 
 });
console.log(newNums);
