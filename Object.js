let obj=new Object()  //traditional way 

let obj1={}//new way
let n="amu"
let obj2={
    name:n,
    age:12
}

let key="name"

console.log(obj2[key])

console.log(key in obj2)

let num={
    64:"one",
    12:"two",
    70:"three"
}
for(let key in num){
    console.log(key) //ouput will be order
}
// Write the code, one line for each action:

// Create an empty object user.
// Add the property name with the value John.
// Add the property surname with the value Smith.
// Change the value of the name to Pete.
// Remove the property name from the object.

let emptyobj={}

// emptyobj.name="riya"// another way to add values


console.log(emptyobj)

for(let key in emptyobj){
console.log("hey")
}