let fullName = prompt("Enter your full name without spaces");

let username = "@" + fullName + fullName.length;
console.log(username);


/*
let str= "apna college";
str.toUpperCase();
console.log(str);




let obj = {
  item: "pen",
  price: 10,
};

let output = `the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);

console.log("the cost of", obj.item, "is", obj.price, "rupees");



//Template literals


let specialString = `this is a template literals`;
console.log(typeof specialString);
console.log(specialString);


//Strings

let str = "RahulKumarBareth";
//let str2 = 'KhushbuBareth';

console.log(str[10]);



//practice Qs2

let gameNum = 25;

let userNum = prompt("guess the game number :");
 while (userNum != gameNum){
  userNum = prompt("you entered wrong number. guess again :");
  console.log("congratulations, you entered the right number")
}




 
 //Practice Qs1

for(let num = 0; num <= 100; num++){
  //console.log("num=", num);
  //if (num % 2 === 0){
  if (num % 2 !== 0){
    console.log("num =", num);
  }
}

 //for-i-loop 

let student = {
  name: "Rahul Kumar",
  age:  25,
  cgpa: 7.4,
  Ispass: true,
}

for (let key in student) {
  console.log("key =",key, "value=", student[key]);
}




//for-of-loop

let str = "apnacollege";

for (let i of str){
  console.log("i =", i);
}




let i = 1;
do {
  console.log("i =", i)
  i++;
} while(i <=5);


let i = 20;
do {
  console.log("Apna College")
  i++;
} while (i <= 10);



 let i = 1;while (i <= 5){
  console.log("Apna College")
  i++;
 } */