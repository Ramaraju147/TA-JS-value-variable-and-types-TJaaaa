// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/

let num=Number(prompt("Please Enter the number?"));

if(num1%2==0){
  console.log("number is even");
}else{
  console.log("number is odd");
}


// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.

let number1 = Number(prompt("Enter the Number1?"));
let number2 = Number(prompt("Enter the Number2?"));

if(number1>number2){
  alert(number1);
}else{
  alert(number2);
}

// 3. Convert the above code using`?` terniary operator

console.log(number1>number2?number1:number2);

/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/

let houseName=prompt("Enter the house name?");
if(houseName==="stark"){
  console.log("Winter is coming");
}else if(houseName==="lannister"){
  console.log("A lannister always pays his debt");
}else{
  console.log("All men must die");
}

// 5. Convert the above code using`?` terniary operator

console.log((houseName==="stark")?"Winter is coming":(houseName==="lannister")?"A lannister always pays his debt":"All men must die")

// Switch

switch (true) {
  case houseName==="stark":
    console.log("Winter is coming");
    break;
  case houseName==="lannister":
    console.log("A lannister always pays his debt");
    break;
  default:
    console.log("All men must die");
    break;
}

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.

let month=Number(prompt("Please enter the month"));

switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    alert("31 Days");
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    alert("30 Days")
    break;

  default:
    alert("28 Days")
    break;
}

/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/

//  if..else vs switch

let salary=Number(prompt("Enter the Salary?"));

if(salary<=20000){
  alert(`In Hand amount is ${salary*(90/100)}`);
}else if(salary <= 40000){
  alert(`In Hand amount is ${salary*(80/100)}`);
}else if(salary > 50000){
  alert(`In Hand amount is ${salary*(70/100)}`);
}

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/

let marks=Number(prompt("Enter the marks"));

if(marks>100){
  alert("Marks can't be greater than 100");
}else if(marks > 80 && marks < 100){
  alert("Grade A");
}else if(marks > 50 && marks < 80){
  alert("Grade B");
}else if(marks > 30 && marks < 50){
  alert("Grade C");
}else if(marks > 0){
  alert("Grade D");
}

switch (true) {
  case marks>100:
    alert("Marks can't be greater than 100");
    break;
  case marks > 80 && marks < 100:
    alert("Grade A");
    break;
  case marks > 50 && marks < 80:
    alert("Grade B");
  case marks > 30 && marks < 50:
    alert("Grade C");
    break;
  case marks > 0:
    alert("Grade D");
    break;
}

/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/

let weatherCondition = prompt("What is the weather like outside?");

weatherCondition=="sunny"?alert("Wear a T-shirt"):weatherCondition=="rainy"?alert("Don't forget to take your raincoat"):weatherCondition=="hot"?alert("Get a hanky"):weatherCondition=="freezing"?alert("Get your sweeter on"):alert("Not a valid input")


