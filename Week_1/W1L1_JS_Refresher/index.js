// const arr = [1, 2, 3, 4, 5];
// const isArray = Array.isArray(arr);
// console.log(isArray)


// .......................................
// let x = 5;
// {
//   let x = 10;
//   console.log(x);
// }
// console.log(x);
// ...............................................

// function calSum() {
//     console.log(result);
//     var a = 5;
//     let b = 10;
//     const c = 15;
//     var result = a + b + c;
//   }
// calSum();  // Hoisting 


// ...........................................

// function foo() {
//   console.log(x);
//   const x=20
// }
// foo();
//.......................................
// function foo() {
//     let x = 1;
//     function bar() {
//       let y = 2;
//       console.log(x + y);
//     }
//     bar();
//   }
//   foo();
// ......................................
// function numF() {
//     var num = 1;
//     function checkNumber() { 
//       console.log(num);
//     }
//     num++;
//     return checkNumber;
//   }
//   var number = numF();
//   number();
// .....................................

// let num = 0;

// function test() {
//   var num = 1;
//   return num;
// }

// console.log(test());
// console.log(num);
// .........................................

// const nameS = "John";
// const age = 25;

// const user = { nameS, age };
// console.log(user);

// .................................................................................

const nums = [5, 3, 1, 4, 2];
nums.sort((a, b) => a - b);

console.log(nums)

// ..................................................................................


let obj1 = { key: "value" };
let obj2 = obj1;
let obj3 = obj2;

obj1.key = "new value";
obj2 = { key: "another value" };

console.log(obj1.key, obj2.key, obj3.key);

// ..................................................................................

// let x = [1, 2, 3];
// let y = [1, 2, 3];
// let z = y;

// console.log(x == y);
// console.log(x === y);
// console.log(z == y);
// console.log(z == x);


// ...................................................................................
// const user = {
//     id: 459,
//     name: 'JS snippets',
//     age:29,
//     education:{
//      degree: 'Masters'
//     }
//    }
   
//    const { education : { degree } } = user;
//    console.log(degree)
