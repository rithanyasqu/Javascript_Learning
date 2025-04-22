// Normal Function

function nf(){
    console.log("nf")
}
nf();

//parameter Passing function 

var x=9
call(x)

function call(p){
    console.log(`I'm happy to see you here ${p}`)
}

//return

function r(){
    return 10
}
const rv=r()+1
console.log(rv);
//Function Experission

const fun=function(x){
    return x+1;
}
console.log(fun(x))

//arrow function

const c=()=>{
console.log("arrow function")
}
c();