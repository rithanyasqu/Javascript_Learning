// 'use strict'
x=5
console.log(x) //cause error because when we have "use strict" we need to give variable


// variable hoisting
console.log(c)
c="hey"  //cause error not defining

console.log(c)
var c="hey" //output undefined this happen because of hoisting

console.log(c)
let d="hey" //cause error "like not defined" due to the it is in Temporal Dead Zone common for let and const

// function hoisting

hey(); //it will got execute
// function declaration
function hey(){
    console.log("hiiiiiii")
}

hey(); //cause error
// function Experssion
let hey=()=>{
    console.log(vanakam)
}
