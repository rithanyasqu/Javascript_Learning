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

let emptyobj={}
// emptyobj.name="riya"// another way to add values
console.log(emptyobj)

//task
for(let key in emptyobj){
console.log("hey")
}

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }
let sum=0
  for( let key in salaries){
    sum+=salaries[key]
  }
  console.log(sum)

//task 
  let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  multiplyNumeric(menu);

  function multiplyNumeric(m){
     for( let key in m){
        if(typeof m[key]=="number"){
            m[key]=m[key]*2
        }
     }
  }
  console.log(menu)
 
// Reference 
  let a="je"
  let b=a
  b="he"
  console.log(a)// here it doesn't not sharing same reference 

  let or={name:"rithu"}
  let ar=or
  ar.name="nithu"
  console.log(or)// here both the object sharing same reference 

   //TO Avoid this we need to clone it
   let clone={}

   for(let key in or){
     clone[key]=or[key]
   }
clone.name="rithu"
console.log(or)//here the value doesn't change

//spread operator
let clone1={...or,age:20}
console.log(clone1)//have separate reference


   const user = {
    name: "John"
  };
  user.name = "Pete"; // (*)
  console.log(user.name)//it will not cause error because user is only const the objcet literals inside it is free to use 

 let nested={
    name:"riya",
    age:20,
    hobby:{
      Tech:"coding",
      non:"drawing"
    }
 }
 let nested1={...nested}
 console.log(nested1)

 //garbage collector
 let users = {
    name: "John"
  };

let admin = users;
users = null;
console.log(admin.name)

//nested object 

let nestobj={
  name:"riya",
  age:21,
  hobby:{
    tech:"coding",
    non_tech:"dancing"
  }
}
console.log(nestobj.hobby.tech)

// obj destructuring

let obj3={name:"etho",
  age:"ennovo"
}
let {name , age}=obj3;

console.log(name)

//Inside function

function objdef({name,age}){
console.log(name)
}
objdef(obj3)