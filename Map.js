// Task 1: Doubling Numbers

let arr=[1,2,3,4,5]

let arr2=arr.map((v)=>{
   c= v*2;
    return c
})
console.log(arr2)

// Task 2: Extracting Names

const people = [
    { id: 1, name: 'Alice', age: 30 },
    { id: 2, name: 'Bob', age: 25 },
    { id: 3, name: 'Charlie', age: 35 }
  ];

  let arr3=people.map((v)=>{
    c=v.name
    return c
  })
  console.log(arr3)

//   Task 3: Formatting Prices
let arrf=[1,2,3,4,5]
let arr4=arrf.map((v)=>{
 c=`$ ${v}`
 return c
})
//
console.log(arr4)


