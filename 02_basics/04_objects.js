// const  tinderUser = new Object();  // declartion of object , it gaves singleton no other differences 
const tinderUser = {}    // second way to declare an object 
//console.log(tinderUser);

tinderUser.id = "abc12";
tinderUser.name = "Rits";
tinderUser.isLoggedIn = false;
// console.log(tinderUser);

const newuser = {
    email : "user@google.com ",
    fullname : {
        userfullname :{
            firstname :"Ritik" ,
            lastname : "Gupta",
        }
    }
}

// console.log(newuser.fullname.userfullname.firstname);

const obj1 = { 1 : "a" , 2 :"b"}
const obj2 = {3:"c" , 4:"d "}

// const obj3 = {obj1 , obj2}
// const obj3 =    Object.assign({}, obj1, obj2 )
const obj3 = {...obj1, ...obj2};  // these are the diff method to assign the objects but the third one is most common used and latest one 
// console.log(obj3);

// console.log(typeof(obj3));

const users = [{
    id : "1",
    email : "rits@rits.com"
},
{
    id : "2",
    email : "rits@rits.com"
},

{
    id : "3",
    email : "rits@rits.com"
}];
// users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLOggedin'));

  

/// **************DE-structuring of object****************/////

const course = {
    coursename : "World of Javascript",
    coursePrice : 99999,
    courseInstructor : "Rits"
}

// course.courseInstructor  ... this is a method to retrive course instructor name but a better version is below side

// const {courseInstructor} = course
const {courseInstructor: instructor} = course
console.log(instructor);








