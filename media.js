// var num=Number(prompt("Enter a number"))
// console.log(num);

//

// var num=Number(prompt("Enter a number"))
// if(num/3){
//     console.log('yes');
// }
// if(num/4){
//     console.log('no');}

//
// var num1=Number(prompt("Enter a number1"))
// var num2=Number(prompt("Enter a number2"))
// var max=Math.max(num1,num2);
// console.log(max);

//

// var num=Number(prompt("Enter a number"))
// var sign=Math.sign(num);
// if(num<0){
//     console.log('negative');
// }
// else{
//     console.log('positive');
// }

//

// var num1=Number(prompt("Enter a number1"))
// var num2=Number(prompt("Enter a number2"))
// var num3=Number(prompt("Enter a number3"))
// var min=Math.min (num1,num2,num3);
// var max=Math.max(num1,num2,num3);
// console.log(max , min);

//

// var number = Number(prompt("Enter an integer number:"));

// if (number % 2 === 0) {
//   console.log("even");
// } else {
//   console.log("odd");
// }

//

// var vowel = prompt("Enter a vowel");
// if (
//   ((vowel =="a")|| (vowel == "e")|| (vowel == "i")|| (vowel == "o")|| (vowel == "u"))
// ) {
//   console.log("vowel");
// }
// else {
//   console.log("consonant");
// }

//

// var userNumber = prompt("Enter a number");
// var number = Number(userNumber);
// if (!isNaN(number) && number > 0) {
//   for (var i = 1; i <= number; i++) {
//     console.log(i);
//   }
// } else {
//   console.log("please enter a valid number");
// }

//

// var userNumber = prompt("Enter a number");
// var validatedNumber = Number(userNumber, 12);
// if (!isNaN(validatedNumber)) {
//     console.log(`multiplication table for ${validatedNumber}`);
//     for (var i=1;i<=12;i++){
//         console.log(`${validatedNumber}*${i}=${validatedNumber*i}`);
//     }
// }
// else{
//     console.log("please enter a valid number");
// }

//

// var userNumber = prompt("Enter a number");
// var number = Number(userNumber);

// if (!isNaN(number)) {
//   for (var i = 2; i<=number; i+=2) {
//     console.log(i);
//   }
// } else {
//   console.log("please enter a valid number");
// }

//

// var userNumber1 = prompt("Enter a number");
// var userNumber2 = prompt("Enter a number");
// var number = Number(userNumber1, userNumber2);

// if (!isNaN(number)) {
//   console.log(Math.pow(userNumber1, userNumber2));
// } else {
//   console.log("please enter a valid number");
// }

//

// function calculateResults() {
//   var chem = Number(prompt("Enter Mark of chem subjects:"));

//   var phy = Number(prompt("Enter Mark of phy subjects:"));

//   var eng = Number(prompt("Enter Mark of eng subjects:"));

//   var math = Number(prompt("Enter Mark of math subjects:"));

//   var inf = Number(prompt("Enter Mark of inf subjects:"));

//   var totalMarks = chem + phy + eng + math + inf;

//   var avg = totalMarks / 5;

//   var percentage = (totalMarks / 500) * 100;

//   console.log("total marks=" + totalMarks);

//   console.log("avg marks=" + avg);

//   console.log("percentage=" + percentage + "%");
// }
// calculateResults();

//

// var monthNUm= Number (prompt("Enter a monthNumber"));
// var monthName
// if (monthNUm==1|| monthNUm==3|| monthNUm==5||  monthNUm==7||  monthNUm==8||  monthNUm==10||  monthNUm==12){
//     console.log( "days in month="+"31 days");
// }
// else if (monthNUm==4||  monthNUm==6||  monthNUm==9||  monthNUm==11){
//     console.log("days in month="+"30 days");
// }
// else if (monthNUm==2){
//     console.log("days in month="+"28 days");
// }
// else{
//     console.log("please enter a valid month number");
// }

//

// function calculateResults() {
//   var chem = Number(prompt("Enter Mark of chem subjects:"));

//   var phy = Number(prompt("Enter Mark of phy subjects:"));

//   var eng = Number(prompt("Enter Mark of eng subjects:"));

//   var math = Number(prompt("Enter Mark of math subjects:"));

//   var inf = Number(prompt("Enter Mark of inf subjects:"));

//   var totalMarks = chem + phy + eng + math + inf;
//   var percentage = (totalMarks / 500) * 100;

//   var grade;
//   if (percentage >= 90) {
//     grade = "A+";
//   } else if (percentage >= 80) {
//     grade = "B";
//   } else if (percentage >= 70) {
//     grade = "C";
//   } else if (percentage >= 60) {
//     grade = "D";
//   } else if (percentage >= 40) {
//     grade = "E";
//   } else {
//     grade = "F";
//   }

//   console.log("Percentage: " + percentage.toFixed(2) + "%");
//   console.log("Grade: " + grade);
// }

// calculateResults();

//

// switch statement

// var monthNUm = Number(prompt("Enter a monthNumber"));
// var monthName;
// switch (monthNUm) {
//   case 1: //1
//   case 3: //3
//   case 5: //5
//   case 7: //7
//   case 8: //8
//   case 10: //8
//   case 12: //8
//     console.log("days in month=" + "31 days");
//     break;

//   case 4: //4
//   case 6: //6
//   case 9: //9
//   case 11: //11
//     console.log("days in month=" + "30 days");
//     break;

//   case 2: //2
//     console.log("days in month=" + "28 days");
//     break;
//   default:
//     console.log("days in month=" + "29 days");
// }

//

// var vowel = prompt("Enter a vowel");
// switch (vowel){
//   case "a":
//   case "e":
//   case "i":
//   case "o":
//   case "u":
//     console.log("vowel");
//     break;

//     default:
//       console.log("consonant");
// }

//

// var num1 = Number(prompt("Enter a number1"));
// var num2 = Number(prompt("Enter a number2"));
// switch (true) {
//   case num1 > num2:
//     console.log("num1 is greater");
//     break;
//   case num2 > num1:
//     console.log("num2 is greater");
//     break;
//   default:
//     console.log("both are equal");
// }

//

// var number = Number(prompt("Enter an integer number:"));
// switch (true) {
//   case number %2===0:
//     console.log("even");
//     break;
//   default:
//     console.log("odd");
// }

//

// var num = Number(prompt("Enter a number"));
// var sign = Math.sign(num);
// switch (sign) {
//   case -1:
//     console.log("negative");
//     break;
//   case 1:
//     console.log("positive");
//     break;
//   default:
//     console.log("zero");
// }

//

// function calculateResults() {
//   var chem = Number(prompt("Enter Mark of chem subjects:"));

//   var phy = Number(prompt("Enter Mark of phy subjects:"));

//   var eng = Number(prompt("Enter Mark of eng subjects:"));

//   var math = Number(prompt("Enter Mark of math subjects:"));

//   var inf = Number(prompt("Enter Mark of inf subjects:"));
//   switch (true) { 
//     case chem < 0 || chem > 100:
//       console.log("invalid chem marks");
//       break;
//     case phy < 0 || phy > 100:
//       console.log("invalid phy marks");
//       break;
//     case eng < 0 || eng > 100:
//       console.log("invalid eng marks");
//       break;
//     case math < 0 || math > 100:
//       console.log("invalid math marks");
//       break;
//     case inf < 0 || inf > 100:
//       console.log("invalid inf marks");
//       break;
//     default:
//       break;
//   }

//   var totalMarks = chem + phy + eng + math + inf;

//   var avg = totalMarks / 5;

//   var percentage = (totalMarks / 500) * 100;

//   console.log("total marks=" + totalMarks);

//   console.log("avg marks=" + avg);

//   console.log("percentage=" + percentage + "%");
// }
// calculateResults();

//
