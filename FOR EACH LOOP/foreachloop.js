// const coding = ["java","python","ruby","html"]
// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)
// Output:- java, python, ruby, html

// const myname = ["apple","banana"," cherry","mango"];
// function fruits(item){
//     console.log(item);
// }
// coding.forEach(myname);


// Array of Object

const myCoding = [
{
 languageName: "javascript",
 languageFileName:"js"
},

{
    languageName:"py",
    languageFileName:"python"
},

{
languageName:"ry",
languageFileName:"ruby"
}
]
myCoding.forEach ((item) => {
    console.log(item.languageName);
})