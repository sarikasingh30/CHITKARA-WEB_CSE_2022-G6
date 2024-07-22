// var x="Sam"
// var y=34

// number
// String
// Boolean
// null 
// undefined

// // Non Primitive
// Object
// Array
let obj={
    name:"Sam",
    age:22
}

var a=4
a="Sam"
console.log(a)
//  b="5"
// a+b

// HOISTING
sayHello()


// console.log(x)
function sayHello(){
    console.log(x)
    var x=34
    console.log(x)
    console.log("Hello")
}
// higher order function


function abc(a,b){
    return a+b
}
abc(2,3)