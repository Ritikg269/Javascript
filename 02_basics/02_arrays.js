const marvel_heros = ["Ironman" , "thor","captain america"];
const dc_heros = ["Flash","Batman","Spiderman"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);    // it will apply on the existing array output


// const all_heros = marvel_heros.concat(dc_heros);   // it will apply on new array 
// console.log(all_heros);

const all_new_heros =  [...marvel_heros , ...dc_heros]  
console.log(all_new_heros);
/*/ this method is known as "Spread method" , it is similar like concate 
but it is better than that bcz it can use for more than 2 array 
 */



const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)  // using "Flat method" it will separate all the subarray into the single array 
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))    // it will chnge string into array 
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));   // using this multiple variable will chnge into the single array .






