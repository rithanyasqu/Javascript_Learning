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