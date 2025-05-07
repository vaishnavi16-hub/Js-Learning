//Objects

// const jsUser ={
//     name:"vaishnavi",
//     age: 16,
//     Email:"vaishnavi@gmail.com",
//     location: "pune",
//     isLoggedIn:false,
//     lastLoginDays: ["monday","tuesday"]

// }

// console.log(jsUser.Email);


// jsUser.Email = "vaishnavi@gmail.com"
// Objects.freeze(jsUser)
// jsUser.Email = "vaishnavi200316@gmail.com"
// console.log(jsUser.Email);



// JSUser.greeting = function(){
//     console.log("Hello js user");

// }
// console.log(JSUser.greeting());




// company user
// const companyUser ={}
// companyUser.id = "1234vd"
// companyUser.name ="wipro"
// companyUser.isLogged = "false"
// console.log(companyUser);


// const obj1 = {1:"a", 2: "b"}
// const obj2 = {3: "a",4: "b"}
// // const obj3 = {obj1, obj2}
// const obj3 = object.assign({}, obj1,obj2)
// console.log(obj3);





// OBJECTS
// const JsUsers ={
//     name: "vaishnavi",
//     age: 20,
//     location: "pune",
//     email:"vaishnavi@gmail.com"
// }
// console.log(JsUsers.email);
// console.log(JsUsers[email]);
// console.log(JsUsers.name);

// JsUsers.email = "vaishnavi16@gmail.com"
// console.log(JsUsers);

// how to access object
// console.log(JsUsers);



// const shopName = {
//     Name: "Ascii Computers",
//     productId : "33546",
//     emial: "ascii@gmail.com"
// }

// console.log(shopName);




// FUNCTION WITH OBJECTS


// JsUser.greeting = function(){
//     console.log("hello js user");
// }
// console.log(JsUser.greeting);
// console.log(JsUser.greeting());




// car example
const car =  {type:"Fiat", model:"300",color:"red"};
console.log(car);


// FOR SHOPE
// const shop = {type:"Institute",  name:"Ascii Computers", email:"ascii@gmail.com",address:"Tapkir chowk" };
// console.log(shop);





// OBJECT LITERAL
// const PersonDetails ={
//     FistName: "vaishnavi",
//     LastNAme: "Gaikwad",
//     Age: "21",
//     Address: "Adrash Nager Kalewadi Pune 17",
//     Eduction: "B.E"
// }
// console.log(PersonDetails);


// const person ={
//      firstName: "vaishnavi",
//      lastName :"shinde",
//      id: "34578",
//      fullName: function (){
//         return this. firstName + "" + this.lastName;
//      }
// };
// console.log(person);


// const regularUser = {
//     email:"vaishnavi@gmail.com",
//     fullname: {
//         userfullname:{
//             firstname:"vaishnavi",
//             lastname :"gaikwad"
//         }
//     }
// }
// how to access object under the object
// console.log(regularUser.fullname.userfullname);



// how to merge two object

// const object1= {1: "a",2:"b"}
// const object2={3: "c", 4: "d"}
// const obj3 ={ obj1,obj2}
// console.log(obj3);


const target = {a:1, b:2};
const source = {c:3, d: 4};
const returnedTarget = Object.assign(target,source);
console.log(target);

