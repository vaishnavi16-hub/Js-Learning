//immedialtely invoked function (IIFE)

// function vaishnavi(){
//     console.log('this is vaishnavi')
// }
// vaishnavi()
// OUTPUT:- this is vaishnavi

// (function student (){
//     console.log('sakshi desai');
// })()

// output:- sakshi desai


// two IIFE function
// (function vaishnavi (){
//     //named IIFE
//     console.log('this is our js file');
// })()

// ((name)=> {
//     console.log('this is my portfolio $ {name}');
// })('vaishnavi')

// const score = 200
//  if (score > 100){
//     let power = "fly"
//     console.log('user power:${power}');
    
//  }
//  console.log('user power: ${power}');
 
 
// 


// SWITCH CASE

// const month = 3

// switch (month){
//     case 1:
//         console.log("january");
//         break;
//         case 2: 
//         console.log("Feb");
//         break;
//         case 3: 
//         console.log("march");
//         // break;
//         case 4:
//         console.log("april");
//         break;
//         default:
//             console.log("default case match");
//             break;

// }


// const month = march

// switch (month){
//     case jan:
//         console.log("january");
//         break;
//         case feb: 
//         console.log("Feb");
//         break;
//         case march: 
//         console.log("march");
//         // break;
//         case april:
//         console.log("april");
//         break;
//         default:
//             console.log("default case match");
//             break;
// }




// switch stetement

const expr ="papayes";
switch (expr){
    case "oranges":
        console.log("oranges are $ 0.58 a pound");
        break;
        case" mangoes":
        case "oranges":
            console.log("mangos and papayes are $ 2.47 a pound");
            break;
            default:
                console.log('sorry, we are out of $ {expr}.');
}