// Maps

// const map = new Map()
// map.set('IN',"India")
// map.set('USA',"United states of america")
// map.set('Fr',"France")
// map.set('IN',"India")
// console.log(map);


const myObject ={
    js: 'java script',
    cpp: 'C++',
    python: 'python',
    rb : 'ruby'
}
for (const key in myObject){
    console.log(myObject[key]);
}