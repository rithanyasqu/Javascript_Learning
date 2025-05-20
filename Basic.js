//variables


//Re-declaration & Reassignment
var x = 10;
var x = 20;      // Re-declaration
x = 30;          // Reassignment
console.log(x);  // 30

let y = 10;
// let y = 20;   //  SyntaxError: Identifier 'y' has already been declared
y = 25;          //  Reassignment
console.log(y);  // 25

const z = 50;
// const z = 60; // SyntaxError: Identifier 'z' has already been declared
// z = 70;       // TypeError: Assignment to constant variable
console.log(z);  // 50



//scope
function test1(){
    if(true){
        var a1=2;
        let a2=8
    }
    console.log(a1)//function scope 
    console.log(a2)// block scope--cause error
}
 test1()



//inside the function
 var a=10
 function test(){
     var a=2;
     console.log(a)
 }
 test(); //2

let b=10
function test3(){
    let b=2;
    console.log(b)
}
test3();//2

const c=10
function test4(){
    c=2; //its not allowed
    console.log(c)
}
test4();// cause error


//Data Types

// Primitive DT
let age = 25;
let price = 99.99;
let name = "Alice";
let isActive = true;
let x;//undefined
let big = 12345678901234567890n;

//Primitive datatypes Conversion

//String to Int
let str1 = "123";
let num1 = parseInt(str1);  // Converts string to integer
console.log(num1);         // 123

let str2 = "abc";
let num2 = parseInt(str2);
console.log(num2);  // NaN

let str3 = "1010";
let num3 = parseInt(str3, 2);  // Converts binary "1010" to decimal
console.log(num3);            // 10
// "1010" is the binary number.
// The position of each digit represents a power of 2 (starting from the right):
// 1 * 2^3 = 8
// 0 * 2^2 = 0
// 1 * 2^1 = 2
// 0 * 2^0 = 0
// Adding them together: 8 + 0 + 2 + 0 = 10.

//Int to String

let num = 456;
console.log(String(num));         // "456"
console.log(num + "");            // "456" 

//Non Primitive 

//Array

const arr=[1,2,3];
console.log(arr[1])


//Objects

let person={
    name: "riya",
    age: 20,
    hobby:["dancing","reading","playing"],//array
    parents:{
           name:"Amutha",
           age:"23",
    }//object
}
console.log(person.name)
console.log(person.hobby[2])
console.log(person.parents.name)



//condition

if(4>5){
    console.log(hey)
}
else if(8>3){
    console.log(hello)
}
else{
    console.log(bye)
}
 //ternary Operator 
 sum=9
 sum>2?console.log("hey"):  console.log("bye")

//  switch
  let fruits ="apple"
  switch(fruits){
    case "apple" :
        console.log("this is apple")
    break;
    default:
        console.log("not a fruit")
  }
//Loops

for(var i=0;i<5;i++){
     if(i==3){
        continue;
     }
     console.log(i)
}
// for...of----only for

var colors=["red","blue","green"]

for(var color of colors){
    console.log(color)
}
var n="Riya"
for(var letter of n){
    console.log(letter)
}

// var colobj={
//     name:"yellow",
//     feel:"light"
// }
// for(var objs of colobj ){
//     console.log(objs)
// }----- cause error becasue it doesn't support objects 

for(index in colors){
    console.log(index)
} //---gives the index value of array 

for(index in n){
    console.log(index)
} //-- gives the index value of string
var ob={
    name:"riya",
    age:20
}
for(let key in ob){
    console.log(`${key}:${ob[key]}`)
}//---object key will get  display
var s=[1,2,3];
s.forEach(myfunction)

function myfunction(v,i){
    console.log(v+i);
}


//Type conversion

var a="123"
var b1=Number(a)
 console.log(typeof(b1))