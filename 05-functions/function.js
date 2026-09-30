let n = prompt("enter a number :")
let arr = [];
for (let i = 1; i <=n; i++){
  arr[i-1] = i;
}

console.log(arr);

let sum = arr.reduce((res, curr) => {
  return res + curr;
})

console.log("sum= ", sum);

let factorial = arr.reduce((res, curr) => {
  return res * curr;
})

console.log("factorial=", factorial);






// let marks = [97, 64, 32, 49, 99, 96, 86];
//  let toppers = marks.filter((val) =>{
//   return val > 90;
//  });

//  console.log(toppers);



// let nums = [67, 52, 39];

// let calcSquare = (num) => {
//   console.log(num * num);
// }

// nums.forEach(calcSquare);


// let arr = ["pune", "delhi", "mumbai"];

// arr.forEach((val) => {
//   console.log(val.toUpperCase());
// });




// const countVow = (str) => {
//    let count = 0;
//   for (const char of str){
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }
//   return count;
// }





// function countVowels(str){
//   let count = 0;
//   for (const char of str){
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }

//   return count;
// }




// const printHello = () => console.log("Hello");


// let  arrowMul =(a, b) => {
//   return a * b;
// }

// arrowMul = (5, 7)


// //Arrow Sum 
// const arrowSum =(a, b) => {
//   console.log(a + b);
// }

//Arrow Multiplication 
// const arrowMul =(a, b) => {
//   return a * b;
//   //console.log(a*b);
// }


//Arrow Substraction
const  ArrowSub =(a, b) => {
  console.log(a / b);
}


// //function -> 2 numbers, sum

// function sum(x, y) {
//   s = x + y; console.log("after return")
//   return s;
//   console.log("before return")
// }

// let val = sum(245, 465);
// console.log(val);


// function sum (x, y) {
//    console.log(x + y);
// }




// function myFunction (msg){
//   console.log(msg);
// }

// myFunction("We love JS");


// function myFunction (){
//   console.log("welcome to the world of programming");
//   console.log("We are learning JS");
// }

// myFunction();