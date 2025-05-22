let a="riya"

console.log(a[0])
a[0]='k'
console.log(a[0])
console.log(a.indexOf('i'))
// let n=a.reverse();
// console.log(n)

let b="ma riya us god hehe ma"
console.log(b.trim())
console.log(b)

console.log(b.indexOf('a'))
console.log(b.lastIndexOf('a'))
console.log(b.includes("g"))
console.log(b.startsWith('m'))
console.log(b.endsWith('a'))
console.log(a.slice(2))
console.log(b.split(''))

var names="riya"
console.log(names[0].toUpperCase()+names.substring(1))



var sen="this bis tiya varr welcome"
console.log(sen.includes("XXX")||sen.includes("varr"))

// truncate

var se="What I'd like to tell on this topic is:";
(se.length>21)?console.log(se.substring(0,21)+"..."):console.log(se)

var coin="$120"

