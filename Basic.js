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



