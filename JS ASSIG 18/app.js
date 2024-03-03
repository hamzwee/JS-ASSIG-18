// ASSIGMENT #09 TO #10 USER INPUT & CONDITIONAL STATEMENT

// // Q1
// var city = prompt("Enter City Name");
// if (city=="karachi") {
//     alert("WELCOME TO THE CITY OF LIGHT");
// }else {
//     alert("YOUR WELCOME");
// }


// // Q2
// var gender = prompt("Enter your gender (male/female):");

// gender = gender.toLowerCase();

// if (gender === "male") {
//     alert("Good Morning Sir.");
// } else if (gender === "female") {
//     alert("Good Morning Ma'am.");
// } else {
//     alert("Invalid input. Please enter 'male' or 'female'.");
// }


// // Q3
// var color = prompt("Enter the color of the traffic signal (red/yellow/green):");
// color = color.toLowerCase();
// switch (color) {
//     case "red":
//         alert("Must Stop");
//         break;
//     case "yellow":
//         alert("Ready to move");
//         break;
//     case "green":
//         alert("Move now");
//         break;
//     default:
//         alert("Invalid color. Please enter 'red', 'yellow', or 'green'.");
// }


// // Q4
// var remainingFuel = parseFloat(prompt("Enter the remaining fuel in your car (in litres):"));
// if (remainingFuel < 0.25) {
//     alert("Please refill the fuel in your car");
// } else {
//     alert("You have sufficient fuel in your car");
// }


// // Q5
// var a = 4;
// if (++a === 5){
//     alert("given condition for variable a is true");
// }
// var b = 82;
// if (b++ === 83){
//     alert("given condition for variable b is true");
// }
// var c = 12;
// if (c++ === 13){
//     alert("condition 1 is true");
// }
// if (c === 13){
//     alert("condition 2 is true");
// }
// if (++c < 14){
//     alert("condition 3 is true");
// }
// if(c === 14){
//     alert("condition 4 is true");
// }
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
//     alert("The cost equals");
// }
// if (true){
//     alert("True");
// }
// if (false){
//     alert("False");
// }
// if("car" < "cat"){
//     alert("car is smaller than cat");
// }



// // Q6
// var subject1 = +(prompt("Enter marks obtained in Subject 1:"));
// var subject2 = +(prompt("Enter marks obtained in Subject 2:"));
// var subject3 = +(prompt("Enter marks obtained in Subject 3:"));
// var totalMarks = +(prompt("Enter total marks:"));

// var totalObtainedMarks = subject1 + subject2 + subject3;

// var percentage = (totalObtainedMarks / totalMarks) * 100;

// var grade;
// if (percentage >= 90) {
//     grade = "A+";
// } else if (percentage >= 80) {
//     grade = "A";
// } else if (percentage >= 70) {
//     grade = "B";
// } else if (percentage >= 60) {
//     grade = "C";
// } else if (percentage >= 50) {
//     grade = "D";
// } else {
//     grade = "Fail";
// }

// document.write("<h2>Result:</h2>");
// document.write("<p>Total Marks: " + totalMarks + "</p>");
// document.write("<p>Marks Obtained: " + totalObtainedMarks + "</p>");
// document.write("<p>Percentage: " + percentage.toFixed(2) + "%</p>");
// document.write("<p>Grade: " + grade + "</p>");
// document.write("<p>Remarks: ");
// if (grade === "Fail") {
//     document.write("Sorry, you have failed.");
// } else {
//     document.write("Congratulations, you have passed.");
// }
// document.write("</p>");



// // Q7
// var secretNumber = 7;
// var guess = parseInt(prompt("Guess the secret number (between 1 and 10):"));
// if (guess === secretNumber) {
//     alert("Bingo! Correct answer");
// } else if (guess === secretNumber + 1 || guess === secretNumber - 1) {
//     alert("Close enough to the correct answer");
// } else {
//     alert("Sorry, incorrect guess. The secret number was " + secretNumber);
// }


// // Q8
// var number = parseInt(prompt("Enter a number:"));
// if (number % 3 === 0) {
//     alert(number + " is divisible by 3");
// } else {
//     alert(number + " is not divisible by 3");
// }



// // Q9
// var number = +(prompt("Enter a number:"));
// if (number % 2 === 0) {
//     alert(number + " is an even number");
// } else {
//     alert(number + " is an odd number");
// }



// // Q10
// var temperature = parseFloat(prompt("Enter the temperature:"));

// if (temperature > 40) {
//     alert("It is too hot outside.");
// } else if (temperature > 30) {
//     alert("The Weather today is Normal.");
// } else if (temperature > 20) {
//     alert("Today’s Weather is cool.");
// } else if (temperature > 10) {
//     alert("OMG! Today’s weather is so Cool.");
// } else {
//     alert("It's freezing outside!");
// }


// // Q11
// var firstNumber = +(prompt("Enter the first number:"));
// var secondNumber = +(prompt("Enter the second number:"));
// var operation = prompt("Enter the operation (+, -, *, /, %):");
// var result;
// if (operation === "+") {
//     result = firstNumber + secondNumber;
// } else if (operation === "-") {
//     result = firstNumber - secondNumber;
// } else if (operation === "*") {
//     result = firstNumber * secondNumber;
// } else if (operation === "/") {
//     if (secondNumber !== 0) {
//         result = firstNumber / secondNumber;
//     } else {
//         result = "Error: Division by zero";
//     }
// } else if (operation === "%") {
//     result = firstNumber % secondNumber;
// } else {
//     result = "Error: Invalid operation";
// }
// alert("Result: " + result);


// ................................................................................................................




// CHAPTER 12 & 13  IF...ELSE & ELSE IF STATEMENT,TESTING SET OF CONDITIONS


// // Q1

// let character = prompt("Enter a character (number or string):");

// let charCode = character.charCodeAt(0);

// if (charCode >= 48 && charCode <= 57) {
//     document.write(character + " is a Number");
// }

// else if (charCode >= 65 && charCode <= 90) {
//     document.write(character + " is an Uppercase Letter");
// }

// else if (charCode >= 97 && charCode <= 122) {
//     document.write(character + " is a Lowercase Letter");
// }

// else {
//     document.write(character + " is not a Number or Letter");
// }




// Q2

// let num1 = +(prompt("Enter the first integer:"));
// let num2 = +(prompt("Enter the second integer:"));
// if (num1 === num2) {
//     document.write("The two integers are equal.");
// } else {
//     let largerNumber = (num1 > num2) ? num1 : num2;
//     document.write("The larger integer is: " + largerNumber);
// }



// Q3

// let number = +(prompt("Enter a number:"));
// if (number > 0) {
//     document.write("The number entered is positive.");
// } else if (number < 0) {
//     document.write("The number entered is negative.");
// } else {
//     document.write("The number entered is zero.");
// }




// Q4

// let character = prompt("Enter a character (string of length 1):");
// character = character.toLowerCase();
// let isVowel = character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u';
// document.write("Is the character a vowel? " + isVowel);


// Q5

// let correctPassword = "password123";
// let userPassword = prompt("Enter your password:");
// if (userPassword === "") {
//     document.write("Please enter your password");
// } else if (userPassword === correctPassword) {
//     document.write("Correct! The password you entered matches the original password");
// } else {
//     document.write("Incorrect password");
// }



// Q6

// var greeting;
// var hour = 13;
// if (hour < 18) {
//     greeting = "Good day";
// } else {
//     greeting = "Good evening";
// }



// Q7

// var time24 = parseInt(prompt("Enter time in 24-hour clock format (e.g., 1900 for 7pm):"));
// var hours;
// var minutes;
// if (time24 >= 0 && time24 <= 2359) {
//     hours = Math.floor(time24 / 100);
//     minutes = time24 % 100;

//     var amPm;
//     if (hours >= 12) {
//         amPm = "pm";
//         if (hours > 12) {
//             hours -= 12;
//         }
//     } else {
//         amPm = "am";
//         if (hours === 0) {
//             hours = 12;
//         }
//     }
//     alert("The time in 12-hour clock format is: " + hours + ":" + (minutes < 10 ? "0" + minutes : minutes) + " " + amPm);
// } else {
//     alert("Invalid input. Please enter a time in the range of 0000 to 2359.");
// }


















