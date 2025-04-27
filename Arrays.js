//normal array
let a1=[2,3,8]

for(a=0;a<a1.length;a++){
    a1[a]=a1[a]+1
}
console.log(a1)
 //array of object

 let ao=[{names:"riya",
    age:20

 },{
    names:"Mano",
    age:52
 }]
 console.log(ao[1].names)

//for...of 

for(ob of ao){
    console.log(ob)
}
for(ob in ao){
    console.log(ao[ob].names)
}///gives the names of obj inside the array

// array methods 

let arr1=["hello","riya"];

// console.log(arr.join("-"))

arr1.reduce((prev,curren,index)=>{
    console.log(prev,curren,index)
    return curren
},0)
//without initial value ou:2,3
let num=[1,2,3]

num.reduce((prev,cur)=>{
console.log(cur)

})
//with initial value ou:1,2,3
let num1=[1,2,3]
num1.reduce((prev,cur)=>{
console.log(cur)

},0)

//methods
// Method	Use Case	Example
// .push()	Add to end	arr.push(10)
// .pop()	Remove from end	arr.pop()
// .shift()	Remove from start	arr.shift()
// .unshift()	Add to start	arr.unshift(1)
// .map()	Transform elements	arr.map(x => x * 2)
// .filter()	Filter elements	arr.filter(x => x > 5)
// .reduce()	Accumulate values	arr.reduce((a, b) => a + b)
// .forEach()	Loop through array	arr.forEach(x => console.log(x))
// .find()	Find first match	arr.find(x => x > 10)
// .includes()	Check if value exists	arr.includes(5)
// .some()	Check if any item matches	arr.some(x => x > 10)
// .every()	Check if all items match	arr.every(x => x > 0)
// .flat()	Flatten nested arrays	[1, [2, 3]].flat()
// .sort()	Sort elements	arr.sort((a, b) => a - b)
// .splice()	Add/remove items at index	arr.splice(1, 2)
// .slice()	Get portion of array	arr.slice(0, 2)
// .join()	Join array to string	arr.join(', ')


//removing with splice
let s=[1,2,3]
s.splice(0,4)
console.log(s)

//adding elements 
 let s1=['a','b']
 s1.splice(1,1,'c','d','e')
console.log(s1);

//displaying with slice 
let s3=[1,2,3]
let s2=s3.slice(1,2)
console.log(s2)
console.log(s2.includes(2))

//find() 

let answer=s3.find((n)=>{
    return n==3
})
console.log(`${answer} this is inside the s3 array`)

// task

// sum of value

let arr2=[1,2,3,4]

let sum=arr2.reduce((p,c)=>{
     return p+c
},0)

console.log(sum);

//Concatenating Strings:

let str=["hey","hello","welcome"]

let con=str.reduce((prev,cur)=>{
  return prev+" "+cur
})
console.log(con)

// Max number 

let arr=[3,7,1,3,8];
let ans=arr.reduce((prev,curr,index,arr)=>{
    for(let i=index;i<arr.length;i++){
        if(arr[i]>prev){
        prev=arr[i]
        }
    }
    return prev
},0)
console.log(ans) //not a good way

let ans2=arr.reduce((prev,cur)=>{
    return Math.max(prev,cur)
})
console.log(ans2)//good way

let arob=[{name:"riya",age:20},{
    name:"amu",age:40
}]
console.log(arob[0])

let ans3=arob.reduce((prev,cur,index)=>{
    return prev+arob[index].age
},0)
console.log(ans3)
let keyValuePairs = [['name', 'Alice'], ['age', 30], ['city', 'New York']];

let personObject = keyValuePairs.reduce((accumulator, currentValue) => {
  accumulator[currentValue[0]] = currentValue[1];
  return accumulator;
}, {}); // Initialize accumulator as an empty object

console.log(personObject); 


//map

const arrm=[1,2,3]

const newarr=arrm.map(add)

function add(x){
    return x+1;
}
console.log(newarr)

//finding perimeter

const arrp=[1,2,3,4]

const pre=arrp.map(function c(v){
   return Math.PI*v*v
})
console.log(pre)

const summ=arrp.map((x)=>{
    return x+1;
})
console.log(summ)


//odd even
// const oe=arrp.map((x)=>{
//     if(x%2!=0){
//         return x
//     }
// })
const oe=arrp.map(x=>x%2!=0)
console.log(oe)

//object 

const obb=[{name:"riya",age:12},{age:12}]

const oo=obb.map((x)=>{
 console.log(x.name)
})


//filter

//odd even

const off=arrp.filter(n=> n%2==0)
// const off=arrp.filter((x)=>{
//     if(x%2!=0){
//         return x
//     }
// })
console.log(off)

const oFI=obb.filter((x)=>{
    return x.name //---checks whether every obj have name keyword
})
   console.log(oFI)

   const users = [
    { name: "riya", age: 12 },
    { name: "john", age: 18 },
    { name: "emma", age: 17 }
  ];
  
  const user = users.filter(x => x.age > 15);
  console.log(users.some(x => x.age > 15))  // return true or false 
  console.log(users.find(x => x.age > 15))   //return first correct value 
  console.log(user);  // happy

// array destructure

let ad =[1,2,3]

let [aa1,b,c]=ad

let bb=[aa1,b,c]

console.log(bb)

//spread

let cs=[...ad]

console.log(cs)