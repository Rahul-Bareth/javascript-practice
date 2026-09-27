//Practice Question 

let score = 51;
//let score = prompt("enter your score (0-100) :");
let grade;

if (score >= 90 && score <= 100){
   grade = "A";
}
else if (score >= 70 && score <= 89){
   grade = "B";
}
else if (score >= 60 && score <= 69){
   grade = "C";
}
else if (score >= 50 && score <= 59){
   grade = "D";
}

else  if (score >= 0 && score <= 49){
   grade = "F";
}

console.log("according to your scores, your grade was :", grade);





// Arithmatic oparators

// let a = 5;
// let b = 2;
//let c = a+b;
//console.log("a + b =", c);
// console.log("a = ", a, "b = ", b);
// console.log("a + b =", a + b);
// console.log("a - b =", a - b);
// console.log("a * b =", a * b);
// console.log("a / b =", a / b);
// console.log("a % b =", a % b);
// console.log("a ** b =", a ** b);

//Unary Operators


//let a = 5;
//let b = 2;

// console.log("a = ", a, "b = ", b);
//a = a + 1;
//a++;
//a = a - 1;
//console.log(a);
//console.log("a = ", a);
//console.log("++a = ", ++a);


//Assignment Operators

//let a = 5;
//let b = 2;

//a += 4;
//a -= 4;
//a *= 4;
//a /= 4;
//console.log("a = ", a);



//comparison Operators

//let a = 5;
//let b = 3;

//console.log("a != b", a != b);
//console.log("5 > 3", a > b);
//console.log("5 < 3", a < b);

//Logical Operators

/*let a = 6;
let b = 5;

let cond1 = a > b;
let cond2 = a === 5;

console.log("cond1 && cond2", cond1 && cond2); */

//Conditional Statements

// let age = 19;

// if (age >= 18) {
//    console.log("you can vote");
// }

//  if (age < 18) {
//   console.log("you cannot vote");
// }

// let mode = "dark";
// let color;

// if (mode === "dark") {
//   color = "black";
// }
// else {
//    color = "white";
// }

// if (mode === "light") {
//    color = "white";
//  }

// console.log(color);

// let num = 24;
// if (num % 2 === 0) {
//   console.log(num, "is even");
// }
// else {
//   console.log(num, "is odd");
// }

// console.log()


// let mode = "blue";
// let color;

// if (mode === "dark") {
//   color = "black";
// } else if (mode === "blue") {
//   color = "blue";
// } else if (mode === "pink") {
//   color = "pink";
// } else {
//   color = "white";
// }

// console.log(color);

//let age = 19;

// let result = age >= 18 ? "adult" : "not adult";
// console.log(result);

//age >= 18 ? console.log("adult") : console.log("not adult");

/* let name = "tony stark"
let age  = 26;
let totalPrice = 1900;
console.log(totalPrice);


fullName = "Rahul Bareth"
age = 25
price = 99.98
x = null;
y = undefined;
console.log(y); 

isfollow = false;
isfollow = true;

//fullName = 26;
console.log(typeof fullName);





fullname = "Rahul Bareth"
FULLNAME = "Ankit Bareth"

console.log(fullname);
console.log(FULLNAME);

//console = "JAVA"

//console.log(console);

Console = "JAVA";

console.log(Console); */