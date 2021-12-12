// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/

let num = prompt( "Enter the num" );
if ( num % 2 === 0 ) {
  console.log( "nnumber is even" )
}else{
  console.log( "number is odd" )
}


// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.

let num1 = prompt( "number1" );
let num2 = prompt( "number2" );

if ( num1 > num2 ) {
  alert( num1 )
}else{
  alert( num2 )
}


// 3. Convert the above code using`?` terniary operator

num1 > num2 ? alert( num1 ) : alert( num2 )


/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/

let houseName = prompt( "Enter the house name" );
if ( houseName === "stark" ) {
  console.log( "Winter is coming" );
} else if ( houseName === "lannister" ) {
  console.log( "A lannister always pays his debt" )
}else{
  console.log( "All men must die" )
}


// 5. Convert the above code using`?` terniary operator

houseName === "stark" ? console.log( "Winter is coming" ) : houseName === "lannister" ? console.log( "A lannister always pays his debt" ) : console.log( "All men must die" )


// Switch

switch ( true ) {
  case houseName === "stark":
  console.log("Winter is coming");
    break;
  case houseName === "lannister":
    console.log( "A lannister always pays his debt" );
    break;
  default:
    console.log( "All men must die" )
}


// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.

let month = prompt( "Enter the month" );

switch ( true ) {
  case month == 1:
  case month == 3:
  case month == 5:
  case month == 7:
  case month == 8:
  case month == 10:
  case month == 12:
    alert( "31 days" );
    break;
  case month == 4:
  case month == 6:
  case month == 9:
  case month == 11:
    alert( "30 days" );
    break;
  case month == 2:
    alert( "28 days" );
    break;
  default:
    alert( " Please enter a number between 1-12" )
}


/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/

//  if..else vs switch
let salary = prompt( "Enter the Salary" );
let inHandSalary;
if ( salary <= 20000 ) {
  inHandSalary = salary * ( ( 100 - 10 ) / 100 );
  alert( inHandSalary );
} else if ( Salary <= 40000 ) {
  inHandSalary = salary * ( ( 100 - 20 ) / 100 );
  alert( inHandSalary );
} else if ( Salary > 50000 ) {
  inHandSalary = salary * ( ( 100 - 30 ) / 100 );
  alert( inHandSalary );
}



/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/

let marks = prompt( "Please enter the marks" );

if ( marks > 100 ) {
  alert( "Marks can't be greater than 100" )
}else if(marks > 80 && marks < 100){
  alert( "Grade A" )
}else if(marks > 50 && marks < 80){
  alert( "Grade B" )
}else if(marks > 30 && marks < 50){
  alert( "Grade C" );
} else if ( marks > 0 ) {
  alert( "Grade D" )
}

switch ( true ) {
  case marks > 100:
    alert( "Marks can't be greater than 100" )
    break;
  case marks > 80 && marks < 100:
    alert( "Grade A" );
  break;
  case marks > 50 && marks < 80:
    alert( "Grade B" );
    break;
  case marks > 30 && marks < 50:
    alert( "Grade C" );
    break;
  case marks > 0:
    alert( "Grade D" );
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

let weather = prompt( "What is the weather like outside?" )

switch ( true ) {
  case weather === "sunny":
    alert( "Wear a T-shirt" );
    break;
  case weather === "rainy":
    alert( "Don't forget to take your raincoat" );
    break;
  case weather === "hot":
    alert( "Get a hanky" );
    break;
  case weather === "freezing":
    alert( "Get your sweeter on" );
    break;
  default:
    alert( "Not a valid input" );
}
