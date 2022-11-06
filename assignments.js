// // Operator Challenge
// let title = "ElZero",
// desc = "ElZero Web School",
// date = "14/08";
// let card = `
//   <div>
//   <h3>Hello ${title}</h3>
//   <p>ElZero Web School</p>
//   <span>${date}</span>
//   </div
// `
// document.write(card.repeat(4))
///////////////////////////////////////////////////////////////////////////

// let a = 10;
// let b = "20";
// let c = 80;

// console.log(++a + +b++ + +c++ - +a++);
// //           11  + 20  +  80  -  11  =  100
// // Pre Increment
// // Unary Plus & Post Increment
// // Unary Plus & Post Increment
// // Unary Plus & Post Increment

// // console.log(a) // 12
// // console.log(b) // 21
// // console.log(c) // 81

// console.log(++a + -b + +c++ - -a++ + +a); 
// //          13  + -21 + 81  -  -14 + +14  = 100

// // console.log(a) // 14
// // console.log(b) // 21
// // console.log(c) // 82

// console.log(--c + +b + --a * +b++ - +b * a + --a - +true);
// //           81 + 21 + [(13*21) -   (22*13)] + 12 - 1 = 81 + 21 + -13 + 12 - 1 = 100

//////////////////////////////////////////////////////////////////////////
// let d = "-100";
// let e = "20";
// let f = 30;
// let g = true;

// console.log(-d * +e ) // 2000
// console.log(-d + +e * 2 + f + +g * 3) // 173

//////////////////////////////////////////////////////////////////////////

// #(1-9) Introduction

// console.log("%cElzero %cWeb %cSchool", "color :red", "color: green", "background-color:blue")


// console.table(["Elzero", "Ahmed", "Sameh", "Gamal", "Aya"])

/////////////////////////////////////////////////////////////////////////////

// #(10-17) Data Types And Variables

//{1}
// let numberOne = 10;
// let numberTwo = 20;

// console.log("" + numberOne + numberTwo)
// console.log(typeof("" + numberOne + numberTwo))
// console.log(`${numberOne}${numberTwo}`)
// console.log(typeof(`${numberOne}${numberTwo}`))
// console.log("" + numberOne + "\n" + numberTwo)
// console.log(`${numberOne}
// ${numberTwo}`)

// {2}
// console.log(elzero.innerHTML); // object
// console.log(typeof elzero); // object

// {3}
// console.log(`\`I'm In
// \\\\
// Love \\\\ \"\"\" \'\'\'
// \+\+ With \+\+
// \\\"\"\"\\\"\"\"
// \"\"JavaScript\"\"\`\``)

// {4}
// let a = 21;
// let b = 20;

// console.log(`_${a}_${b}${a}_${b}${a}_${b}_`) // _21_2021_2021_2021_20_
// console.log(`_${`${a}_${b}`.repeat(4)}_`) // _21_2021_2021_2021_20_

/////////////////////////////////////////////////////////////////////////////

// #(18-22) Operators

// {1}
// Replace ? With Arithmetic Operators
// console.log(10 * 20 * 15 % 3 * 190 * 10 * 400); // 0

// {2}
// let num = 3;

// // Solution One
// console.log((true + true) * num); // 6

// // // Solution Two
// console.log(num + num); // 6

// // // Soultion Three
// console.log(++num + true + true); // 6
// console.log(num) // 4

// // // Soultion Four
// console.log(--num * --num ); // 6    // 3 * 2
// console.log(num) // 2

// // // Solution Five
// console.log(num * ++num); // 6   // 2 * 3
// console.log(num) // 3

// // // Solution Six
// console.log(num + ++num - true); // 6  // 3 + 4 - 1

// {3}
// let num = "10";

// // Solution One
// console.log(+num * num.length); // 20

// // Solution Two
// console.log(+num * (true + true)); // 20

// // Solution Three
// console.log(+num + +num); // 20

// // Solution Four
// console.log(+num + --num + --num - --num); // 20
// console.log(num) // 7

// // Solution Five
// console.log(num + num + --num ); // 20
// console.log(num)  // 6

// // Solution Six
// console.log(--num * num - num) // 20

// {4}
// let points = 10;

// points += 3;

// console.log(points); // 13

// points -= 5;

// console.log(points); // 8;

/////////////////////////////////////////////////////////////////////////////

// #(23-26) Numbers

// {1}
// Examples
// console.log(100_000); // 100000
// console.log(100000); // 100000
// console.log(5e4 + 5e4); // 100000

// Your Solutions
// console.log(Math.round(100000.2)); // 100000
// console.log(Math.ceil(99999.2)); // 100000
// console.log(Math.floor(100000.2)); // 100000
// console.log(Math.trunc(100000.2)); // 100000
// console.log(Math.min(100000, 999999, 100000)); // 100000
// console.log(Math.max(100000, 99999, 88888)); // 100000
// console.log(Math.pow(100, 2.5)); // 100000
// console.log(Math.pow(10000000000, .5)); // 100000 
// console.log(+100000.1.toFixed()); // 100000
// console.log(Number(100000.1.toFixed())); // 100000
// console.log(parseInt(100000.1.toFixed())); // 100000
// console.log(100 ** 2.5); // 100000

// {2}
// console.log(Math.abs(Number.MIN_SAFE_INTEGER)) // 9007199254740991

// {3}
// console.log((parseInt(Number.MAX_SAFE_INTEGER / Number.MAX_VALUE) + Number.MAX_SAFE_INTEGER / Number.MIN_SAFE_INTEGER) ** 2) // 16

// {4}
// let myVar = "100.56789 Views";

// console.log(parseInt(myVar)); // 100
// console.log(+(parseFloat(myVar)).toFixed(2)); // 100.57

// {5}
// let num = 10;

// console.log(Number.isInteger(num) + Number.isInteger(num)); // 2

// {6}
// let flt = 10.4;

// console.log(Math.floor(flt)); // 10
// console.log(parseInt(flt)); // 10
// console.log(+flt.toFixed(0)); // 10
// console.log(Math.trunc(flt)); // 10
// console.log(Math.round(flt)); // 10

// {7}
// console.log(Math.random()); // 0 || 1 || 2 || 3 || 4

/////////////////////////////////////////////////////////////////////////////

// #(27-30) Strings And Methods

// {1}
// let userName = "Elzero";
// console.log(userName.slice(0, 1).toLowerCase()); // e
// console.log(userName.substring(0, 1).toLowerCase()); // e
// console.log(userName.substr(0, 1).toLowerCase()); // e
// console.log(userName[0].toLowerCase()); // e
// console.log(userName.charAt(0).toLowerCase()); // e
// console.log(userName.slice(-6, -5).toLowerCase()); // eee

// {2}
// let word = "Elzero";
// let letterZ = "z";
// let letterE = "e";
// let letterO = "O";

// console.log(word.includes("z")); // True
// console.log(word.startsWith("E")); // True
// console.log(letterO.endsWith("O")); // True

/////////////////////////////////////////////////////////////////////////////

// #(31-32) Comparison & Logical Operators

// {1}
// console.log(100 == "100"); // true
// console.log(100 !== 1000); // true
// console.log(110 > 100 > 10 < 20); // true
// console.log(-10 == "-10"); // true
// console.log(typeof -50 == typeof +"-40"); // true
// console.log(typeof 10 == typeof -"-40"); // true
// console.log("10" == 10); // true
// console.log(!(20 < false)); // true

// {2}
// let num1 = 10;
// let num2 = 20;

// console.log(num1 < num2); // true
// console.log(typeof num1 == typeof num2); // true
// console.log(num1 !== num2); // true
// console.log(num1 > true); // true
// console.log(-num1 < true); // true
// console.log(!(num1 === num2)); // true

// {3}
// let a = 20;
// let b = 30;
// let c = 10;

// console.log(a < b && a > c || a == b); // true
// console.log(a < b && a > c); // true
// console.log(!(a == b) && !(a > b) && !(a < c) && !(a == c)); // true

/////////////////////////////////////////////////////////////////////////////

// #(33-37) If Condition

// {1}
// Test Case 1
// let num = 9; // "009"

// Test Case 2
// let num = 20; // "020"

// Test Case 3
// let num = 110; // "110"

// if (num < 10) {
//   console.log(`00${num}`)
// } 
// else if (num > 10 && num < 100) {
//   console.log(`0${num}`)
// } 
// else if (num > 100) {
//   console.log(`${num}`)
// }


// {2}
// let num1 = 9;
// let str = "9";
// let str2 = "20";

// // Output
// "{num1} Is The Same Value As {str}"
// "{num1} Is The Same Value As {str} But Not The Same Type"
// "{num1} Is Not The Same Value Or The Same Type As {str2}"
// "{str} Is The Same Type As {str2} But Not The Same Value"

// if (num1 == str) {
//   console.log(`"{num1} Is The Same Value As {str}"`)} 
// if (num1 == str && typeof num1 !== typeof str) {
//   console.log(`"{num1} Is The Same Value As {str} But Not The Same Type"`)}
// if (num1 !== str2) {
//   console.log(`"{num1} Is Not The Same Value Or The Same Type As {str2}"`)}
// if (typeof str == typeof str2) {
//   console.log(`"{str} Is The Same Type As {str2} But Not The Same Value"`)}


// {3}
// let num1 = 10;
// let num2 = 30;
// let num3 = "30";

// // Needed Output
// "30 Is Larger Than 10 And Type string Not The Same Type As number"
// "30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
// "{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"

// if (num3 > num1 && typeof num3 !== typeof num2 && num3 == num2 && num3 !== num1) {
//   console.log(`"30 Is Larger Than 10 And Type string Not The Same Type As number"
// "30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
// "{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"`)
// }


// {4}
// Edit What You Want Here

// let num1 = 8;
// let num2 = 3;
// let num3 = 8;
// let num4 = 34;

// /*
//   Do Not Edit Below This Line
//   Needed Output
//   True 7 Times
// */

// // Condition 1

// if (num1 > num2) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 2

// if (num1 > num2 && num1 < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 3

// if (num1 > num2 && num1 === num3) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 4

// if ((num1 + num2) < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 5

// if ((num1 + num3) < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 6

// if ((num1 + num2 + num3) < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 7
// //          -  16  + 3 === 21
// if (num4 - (num1 + num3) + num2 === 21) {
//   console.log("True");
// } else {
//   console.log("False");
// }

/////////////////////////////////////////////////////////////////////////////

// #(38-39) Switch Statement

// {1}
// let day = "   friday  ";
// You Need To Remove Spaces And Make First Letter Capital => Friday

// let day = "Friday";
// let day = "Saturday";
// let day = "Sunday";
// // Output => "No Appointments Available"

// let day = "Monday";
// let day = "Thursday";
// // Output => "From 10:00 AM To 5:00 PM"

// let day = "Tuesday";
// // Output => "From 10:00 AM To 6:00 PM"

// let day = "Wednesday";
// // Output => "From 10:00 AM To 7:00 PM"

// let day = "World";
// // Output => "Its Not A Valid Day"

// day = day.trim().charAt(0).toUpperCase() + day.trim().slice(1);

// switch (day) {
//   case "Friday":
//   case "Saturday":
//   case "Sunday":
//     console.log("No Appointments Available")
//       break;
//   case "Monday":
//   case "Thursday":
//     console.log("From 10:00 AM To 5:00 PM")
//       break;
//   case "Tuesday":
//     console.log("From 10:00 AM To 6:00 PM")
//       break;
//   case "Wednesday":
//     console.log("From 10:00 AM To 7:00 PM")
//       break;
//   default:
//   console.log("Its Not A Valid Day")
// }


// Video 39 - Switch And If Condition Challenge
// let job = "it";
// let salary = 0;
// job = job.trim().charAt(0).toUpperCase() + job.trim().slice(1);

// switch (job) {
//   case "Manager":
//     salary = 8000;
//     console.log(salary)
//       break;
//   case "IT":
//   case "Support":
//     salary = 6000;
//     console.log(salary)
//       break;
//   case "Developer":
//   case "Designer":
//     salary = 7000;
//     console.log(salary)
//       break;
//   default:
//     salary = 4000;
//     console.log(salary)
// }



// let holidays = 0;
// let money = 0;

// switch (holidays) {
//   case 0:
//     money = 5000;
//     console.log(`My Money Is ${money}`)
//       break;
//   case 1:
//   case 2:
//     money = 3000;
//     console.log(`My Money Is ${money}`)
//       break;
//   case 3:
//     money = 2000;
//     console.log(`My Money Is ${money}`)
//       break;
//   case 4:
//     money = 1000;
//     console.log(`My Money Is ${money}`)
//       break;
//   case 5:
//     money = 0;
//     console.log(`My Money Is ${money}`)
//       break;
//   default:
//     money = 0;
//     console.log(`My Money Is ${money}`)
// }


// if (holidays === 0) {
//   money = 5000;
//   console.log(`My Money Is ${money}`)}

// else if (holidays === 1 || holidays === 2) {
//   money = 3000;
//   console.log(`My Money Is ${money}`)}

// else if (holidays === 3) {
//   money = 2000;
//   console.log(`My Money Is ${money}`)

// } else if (holidays === 4) {
//   money = 1000;
//   console.log(`My Money Is ${money}`)
// } else if (holidays === 5) {
//   money = 0;
//   console.log(`My Money Is ${money}`)
// } else {
//   money === 0;
//   console.log(`My Money Is ${money}`)
// }

/////////////////////////////////////////////////////////////////////////////

// #(40-47) Arrays And Methods

// {1}
// let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
// let num = 3;

// // Method 1
// console.log(myFriends.slice(myFriends.indexOf("Ahmed"), myFriends.indexOf("Gamal"))); // ["Ahmed", "Elham", "Osama"];

// // Method 2
// myFriends.length = num
// console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// {2}
// let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// // Write Your Code Here
// friends.shift(); //  ['Eman', 'Osama', 'Gamal']
// friends.length = friends.indexOf("Gamal")
// console.log(friends); // ["Eman", "Osama"]

// {3}
// let arrOne = ["C", "D", "X"];
// let arrTwo = ["A", "B", "Z"];
// let finalArr = [];

// // Write One Single Line Of Code
// finalArr = arrTwo.concat(arrOne).sort().reverse()
// console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

// {4}
// let website = "Go";
// let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

// console.log(words[2][0].slice(2).toUpperCase()); // ZERO

// {5}
// let needle = "JS";
// let haystack = ["PHP", "JS", "Python"];

// // Write 3 Solutions
// if (haystack.includes(needle)) {
//   console.log("Found")
// }

// if (haystack.indexOf(needle) == (haystack.length - needle.length)) {
//   console.log("Found")
// }

// if (haystack.lastIndexOf(needle) == (haystack.length - needle.length)){
//   console.log("Found")
// } else {
//   console.log("No")
// }


// {6}
// let arr1 = ["A", "C", "X"];
// let arr2 = ["D", "E", "F", "Y"];
// let allArrs = [];

// // Your Code Here
// let x = arr1[arr1.length - arr1.indexOf("C")].toLowerCase()
// let y = arr2[arr1.length].toLowerCase()
// let f = arr2[arr1.length - arr1.indexOf("C")].toLowerCase()
// allArrs = f.concat(x, y)
// console.log(allArrs); // fxy

/////////////////////////////////////////////////////////////////////////////

// // {Video 49} - Looping 
// let myFriends = [1, 2, "Osama", "Sameh", "Sayed", "Ali"];
// let onlyNames = [];
// for (i = 0; i < myFriends.length; i++) {
//   if (typeof(myFriends[i]) === "string") {
//     onlyNames.push(myFriends[i])
//   }
// }
// console.log(onlyNames)

// // {Video 50} - Nested Looping
// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];
// let colors = ["Red", "Green", "Black"];
// let models = [2020, 2021];

// for (let i=0; i < products.length; i++) {
//   console.log(`# ${products[i]}`)
//   console.log(`   Colors:`)
//   for (j=0; j < colors.length; j++) {
//     console.log(`     - ${colors[j]}`)
//   }
//   console.log(`   Model:`)
//   for(k=0; k < models.length; k++) {
//     console.log(`     - ${models[k]}`)
//   }
//   console.log(`=`.repeat(20))
// }


// // {Video 53} Add Products To Page
// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "Iphone"];
// let colors = ["Red", "Green", "Blue"];

// let showCount = 3;

// document.write(`<h1>Show ${showCount} Products</h1>`)

// for (i = 0; i < showCount; i++) {
//   document.write(`<div>`)
//   document.write(`<h3>${i + 1} - ${products[i]}</h3>`)
//   for(j = 0; j < colors.length; j++) {
//     document.write(`<p>- ${colors[j]}</p>`)
//   }
//   document.write(`<p>= ${colors.join(" - ")}</p>`)
//   document.write(`</div>`)
// }


// // {Video 56} Loop Challenge
// let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Khaled"];
// let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Khadeja", "Amany", "Samia"];

// let showAdmins = 5
// let counter = 1
// document.write(`<div>We Have ${showAdmins} Admins</div><hr>`)

// for (i=0; i < showAdmins; i++) {
//   // if (myAdmins[i] === "Stop") break
//   document.write(`<div>`)
//   document.write(`<div>The admin for team ${i + 1} is ${myAdmins[i]}</div>`)
//   document.write(`<h3>Team Member:</h3>`)

//   for (j=0; j < myEmployees.length; j++) {
//     if (myAdmins[i].charAt(0) === myEmployees[j].charAt(0)) {
//       document.write(`<p>- ${counter++} ${myEmployees[j]}</p>`)
//     }
//   }

//   document.write(`<hr>`)
//   document.write(`</div>`)
// }


// // #(48-53) Loop for

// {1}
// let start = 10;
// let end = 100;
// let exclude = 40;

// for (i=start; i < end; i += start) {
//   if (i === exclude) continue;
//   console.log(i);
// }
// // Output
// // 10
// // 20
// // 30
// // 50
// // 60
// // 70
// // 80
// // 90
// // 100

// {2}
// let start = 10;
// let end = 0;
// let stop = 3;

// for (i = start; i > end; i--) {
//   if (i < start) {
//     console.log(+`0${i}`)
//   }else {
//     console.log(i)
//   }
//   if (i == stop) break;
// }

// // Output
// 10
// 09
// 08
// 07
// 06
// 05
// 04
// 03


// {3}
// let start = 1;
// let end = 6;
// let breaker = 2;

// for (i = start; i <= end; i++) {
//   console.log(i)
//   for (j = breaker; j < end; j += breaker) {
//     console.log(`-- ${j}`)
//   }
// }
// Output
// 1
// -- 2
// -- 4
// 2
// -- 2
// -- 4
// 3
// -- 2
// -- 4
// 4
// -- 2
// -- 4
// 5
// -- 2
// -- 4
// 6
// -- 2
// -- 4


// {4}
// let index = 10;
// let jump = 2;
// let end = 0;

// for (;;) {
//   // Write Your Code Here
//   if (index === jump) break;
//   console.log(index);
//   index -= jump;
// }
// // Output
// 10
// 8
// 6
// 4


// {5}
// let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
// let letter = "a";
// let counter = 1;
// for (i=0; i < friends.length; i++) {
//   if (!(friends[i].startsWith(letter.toUpperCase()))) {
//     console.log(`"${counter++} => ${friends[i]}"`)
//   }
// }

// Output
// "1 => Sayed"
// "2 => Eman"
// "3 => Mahmoud"
// "4 => Osama"
// "5 => Sameh"


// {6}
// let start = 0;
// let swappedName = "elZerO";
// let result = "";

// for (i = start; i < swappedName.length; i++) {
//   if (swappedName[i] === swappedName[i].toLowerCase()) {
//     result += swappedName[i].toUpperCase()
//   } else if (swappedName[i] === swappedName[i].toUpperCase()) {
//     result += swappedName[i].toLowerCase()
//   }
// }
// console.log(result)
// // Output
// "ELzERo"


// {7}
// let start = 0;
// let mix = [1, 2, 3, "A", "B", "C", 4];

// for (i = start + 1; i < mix.length; i++) {
//   if (typeof(mix[i]) === "number") {
//     console.log(mix[i])
//   }
// }
// // Output
// 2
// 3


// // #(54-56) Loop While
// {1}
// let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
// let index = 0;
// let counter = 0;

// while (index < friends.length) {
//   if (!(typeof(friends[index]) === "number" || friends[index][0] === "A")) {
//     console.log(`${++counter} => ${friends[index]}`)
//   }
//   index++
// }

// // Output
// "1 => Sayed"
// "2 => Mahmoud"

/////////////////////////////////////////////////////////////////////////////

// // >> #(Video 63) Random Arguments Challenge

// function showDetails (...infos) {
//   let usName = "";
//   let usAge = Number();
//   let avail = Boolean();

// for (j=0; j<infos.length; j++)  {
//     if (typeof(infos[j]) === "string"){
//     usName = infos[j]
//   } 
  
//   else if (typeof(infos[j]) === "number") {
//     usAge = infos[j]
//   } 
  
//   else if (infos[j] === true || infos[j] === false)
//     if (infos[j] === true) {
//       avail = "Available"
//     } else if (infos[j] === false) {
//       avail = "Not Available"
//     }
// }
// console.log(`Hello ${usName}, your age is ${usAge}, you are ${avail}`)
// }

// showDetails("Osama", 38, true); // Hello Osama, your age is 38, you are available.
// showDetails(38, "Osama", true); // Hello Osama, your age is 38, you are available.
// showDetails(true, 38, "Osama"); // Hello Osama, your age is 38, you are available.
// showDetails(false, "Osama", 38); // Hello Osama, your age is 38, you are not available.
// showDetails(true, "Sameh", 27)
// showDetails("Sameh", false, 27)
// showDetails(27, false, "Sameh")


// // >> (57-63) Functions and Parameters

// >> {1}
// function sayHello(theName, theGender) {
  // Your Code Here

  // {First Solution}
  // theGender === "Male" ? console.log(`Hello Mr ${theName}`) : theGender === "Female" ? console.log(`Hello Miss ${theName}`) : console.log(`Hello ${theName}`);

  // {Second Solution}
  // if (theGender === "Male") {
  //   console.log(`Hello Mr ${theName}`)
  // } else if (theGender === "Female") {
  //   console.log(`Hello Miss ${theName}`)
  // } else {
  //   console.log(`Hello ${theName}`)
  // }
// }

// // Needed Output
// sayHello("Osama", "Male"); // "Hello Mr Osama"
// sayHello("Eman", "Female"); // "Hello Miss Eman"
// sayHello("Sameh"); // "Hello Sameh"


// >> {2}
// function calculate(firstNum, secondNum, operation) {
//   // Your Code Here
//   if (typeof(secondNum) === "undefined") {
//     console.log("Second Number Not Found")
//   } else if (operation === "add" || typeof(operation) === "undefined") {
//     console.log(firstNum + secondNum)
//   } else if (operation === "subtract") {
//     console.log(firstNum - secondNum)
//   } else if (operation === "multiply") {
//     console.log(firstNum * secondNum)
//   } 
// }

// // Needed Output
// calculate(20); // Second Number Not Found
// calculate(20, 30); // 50
// calculate(20, 30, 'add'); // 50
// calculate(20, 30, 'subtract'); // -10
// calculate(20, 30, 'multiply'); // 600


// >> {3}
// function ageInTime(theAge) {
//   // Your Code Here
//   if (theAge > 10 && theAge < 100) {
//     console.log(`${theAge * 12} Months`)
//     console.log(`${theAge * 12 * 4} Weeks`)
//     console.log(`${theAge * 12 * 4 * 7} Days`)
//     console.log(`${theAge * 12 * 4 * 7 * 24} Hours`)
//     console.log(`${theAge * 12 * 4 * 7 * 24 * 60} Minutes`)
//     console.log(`${theAge * 12 * 4 * 7 * 24 * 60 * 60} Seconds`)
//   } else {
//     console.log(`Age Out Of Range`)
//   }
// }
// // Needed Output
// ageInTime(110); // Age Out Of Range
// ageInTime(38); // Months Example => 456 Months


// >> {4}
// function checkStatus(a, b, c) {
//   // Your Code Here
//   let usName;
//   let usAge;
//   let avail;

//   if (typeof(a) === "string") {
//     usName = a
//   } else if (typeof(a) === "number") {
//     usAge = a
//   } else if (typeof(a) === "boolean") {
//     if (a === true) {
//       avail = "Available For Hire"
//     } else if (a === false) {
//       avail = "Not Available For Hire"
//     }
//   }

//   if (typeof(b) === "string") {
//     usName = b
//   } else if (typeof(b) === "number") {
//     usAge = b
//   } else if (typeof(b) === "boolean") {
//     if (b === true) {
//       avail = "Available For Hire"
//     } else if (b === false) {
//       avail = "Not Available For Hire"
//     }
//   }

//   if (typeof(c) === "string") {
//     usName = c
//   } else if (typeof(c) === "number") {
//     usAge = c
//   } else if (typeof(c) === "boolean") {
//     if (c === true) {
//       avail = "Available For Hire"
//     } else if (c === false) {
//       avail = "Not Available For Hire"
//     }
//   }

//   console.log(`Hello ${usName}, your age is ${usAge}, you are ${avail}`)

// }

// // Needed Output
// checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"


// >> {5}
// function createSelectBox(startYear, endYear) {
//   // Your Code Here
//   document.write(`<select>`)
//   for (i = startYear; i <= endYear; i++) {
//     document.write(`<option value="${i}">${i}</option>`)
//   }
//   document.write(`</select>`)
// }
// createSelectBox(2000, 2021);


// >> {6}
// function multiply(...nums) {
//   let result = 1;
//   for (i=0; i<nums.length; i++) {
//     if (typeof(nums[i]) === "number") {
//       nums[i] = Math.trunc(nums[i])
//       result *= nums[i]
//     }
//   }
//     return console.log(result)
// }
// multiply(10, 20); // 200
// multiply("A", 10, 30); // 300
// multiply(100.5, 10, "B"); // 1000


// // >> (64-70) Functions and Scopes

// >> {1}
// function getDetails(zName, zAge, zCountry) {
  
//   function namePattern() {
//     return `${zName.slice(0, zName.indexOf(" "))}${zName.substr(zName.indexOf(" "), 2).toUpperCase()}`;
//   }
//   namePattern()

//   function ageWithMessage() {
//     return `Your age is ${parseInt(zAge)}`;
//   }
//   ageWithMessage()

//   function countryTwoLetters() {
//     return `You live in ${zCountry.slice(0, 2).toUpperCase()}`;
//   }
//   countryTwoLetters()

//   function fullDetails() {
//     return `${namePattern()}, ${ageWithMessage()}, ${countryTwoLetters()}`
//   }

//   return fullDetails(); // Do Not Edit This
// }

// console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// // Hello Osama M., Your Age Is 38, You Live In EG
// console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// // Hello Ahmed A., Your Age Is 32, You Live In SY


// >> {2}
// // function itsMe() {
// //   return `Iam A Normal Function`;
// // }

// let itsMe = () => `Iam A Normal Function`;

// console.log(itsMe()); // Iam A Normal Function



// // function urlCreate(protocol, web, tld) {
// //   return `${protocol}://www.${web}.${tld}`;
// // }

// let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;

// console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org


// >> {3}
// function checker(zName) {
//   return function (status) {
//     return function (salary) {
//       return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
//     };
//   };
// }

// let checker = (zName) => {
//   return (status) => {
//     return (salary) => {
//       return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
//     }
//   }
// }

// console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
// console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble


// >> {4}
// function specialMix(...data) {
//   // Your Code Here
//   let result = 0;
//   for (i=0; i<data.length; i++) {
//     if (isNaN(parseInt(data[i])) === false) {
//       result += parseInt(data[i])
//     }
//   }
//   if (result === 0) {
//     return `All Is Strings`
//   }
//   return result;
// }

// console.log(specialMix(10, 20, 30)); // 60
// console.log(specialMix("10Test", "Testing", "20Cool")); // 30
// console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
// console.log(specialMix("Test", "Cool", "Test")); // All Is Strings


/////////////////////////////////////////////////////////////////////////////


// >> {Video 72} Map Pracitce 

// Problem One
// let swappingCases = "elZERo";

// Normal Function
// let solutionOne = swappingCases.split("").map(function(ele) {
//   return ele === ele.toLowerCase() ? ele.toUpperCase() : ele.toLowerCase()
// },).join("");

// >> Arrow Function
// let solutionOne = swappingCases.split("").map(
//   (ele) => ele === ele.toLowerCase() ? ele.toUpperCase() : ele.toLowerCase() )
//   .join("");

// console.log(solutionOne)


// >> Problem Two

// Normal Function
// let invertedNumbers = [1, -10, -20, 15, 100, -30];
// Normal Function
// let solutionTwo = invertedNumbers.map(function (ele) {
//   return -ele
// },)

//Arrow Function
// let solutionTwo = invertedNumbers.map((ele) => -ele)

// console.log(solutionTwo)


// >> Problem Three
// let ignoreBooleans = "Elz123er4o";

// Normal Function
// let solutionThree = ignoreBooleans.split("").map(function(ele) {
//   return isNaN(parseInt(ele)) ? ele : "" ;
// },).join("")

// Arrow Function
// let solutionThree = ignoreBooleans.split("").map(
//   (ele) => isNaN(parseInt(ele)) ? ele : "").join("")

// console.log(solutionThree)


// >> {Video 74} Filter Practice

// Problem One
// let sentence = "I Love Foood Code Too Playing Much";
// let smallWords = sentence.split(" ").filter(function (ele) {
//   return ele.length <= 4 
// }).join(" ")
// console.log(smallWords)

// Problem Two
// let mix = "A13BS2ZX";
// let multiplyNums = mix.split("").filter(function(ele) {
//   return !isNaN(parseInt(ele))
// }).map(function(ele) {
//   return ele * ele
// }).join("")
// console.log(multiplyNums)


// >> Reduce Practice 

// // Problem One
// let theBiggest = ["Bla", "Propaganda", "Other", "AAA", "Battery", "Propagandaaaa", "Test"];

// let check = theBiggest.reduce(function (acc, current) {
//   return acc.length > current.length ? acc : current;
// })
// console.log(check)


// // Problem Two
// let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];

// let elzero = removeChars.filter(function (ele) {
//   return !ele.startsWith("@")
// }).reduce(function (acc, current) {
//   return acc + current
// }).toLowerCase()

// console.log(elzero)


// {Video 78} >> Higher Order Function Practice
// let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

// let solution = myString.split(",").filter(function (ele) {
//   return isNaN(parseInt(ele))
// }).map(function(el) {
//   return el === "_" ?  " " : el
// }).reduce(function(acc, current) {
//   return acc + current
// }).slice(+true, -true);

// console.log(solution) // Elzero Web School


// // >> {71-78} Higher Order Function

// {1}
// let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

// let Elzero = mix.map(function (ele) {
//   return isNaN(parseInt(ele)) ? ele : ""
// }).reduce(function(acc, current) {
//   return acc + current
// })
// console.log(Elzero)
// // Elzero


// {2}
// let myString = "EElllzzzzzzzeroo";
// let Elzero2 = myString.split("").map(function(ele, index, arr) {
//   return console.log(arr.indexOf(ele), index)
// })

// let Elzero = myString.split("").filter(function(ele, index, arr) {
//   return arr.indexOf(ele) === index
// }).join("")

// console.log(Elzero2)
// console.log(Elzero) // Elzero


// {3}
// let myArray = ["E", "l", "z", ["e", "r"], "o"];
// let Elzero = myArray.reduce(function(acc, current) {
//   return acc.concat(current)
// }, []).join("")
// console.log(Elzero) // Elzero


// {4}
// let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

// let nums = numsAndStrings.filter(function(ele) {
//   return !isNaN(parseInt(ele))
// }).map(function(ele) {
//   return -ele
// })
// console.log(nums)

// [-1, -10, 10, 20, -5, -3]


// {5}
// let nums = [2, 12, 11, 5, 10, 1, 99];

// let result = nums.reduce(function(acc, current) {
//   return current % 2 == 0 ? acc * current : acc + current
// },1)

// console.log(result) // 500


/////////////////////////////////////////////////////////////////////////////


// >> {79-85} Object

// {1}
// Create Your Object Here

// let member = {
//   name : "Elzero",
//   age : 38,
//   country : "Egypt",
//   fullDetails : function() {
//     return `My name is ${this.name}, My age is ${this.age}, I live in ${this.country}`
//   }
// }
// console.log(member.name); // Elzero
// console.log(member.age); // 38
// console.log(member.country); // Egypt
// console.log(member.fullDetails()); // My Name Is Elzero, My Age Is 38, I Live in Egypt

// {2}
// // Method One
// // Create Your Object Here

// let objMethodOne = {
//   property : "Method One"
// }

// console.log(objMethodOne.property); // "Method One"

// // Method Two
// // Create Your Object Here

// let objMethodTwo = new Object();
// objMethodTwo.property = "Method Two"

// console.log(objMethodTwo.property); // "Method Two"

// // Method Three
// // Create Your Object Here

// let objMethodThree = Object.create(objMethodOne)
// objMethodThree.property = "Method Three"

// console.log(objMethodThree.property); // "Method Three"

// // Method Four
// // Create Your Object Here

// let objMethodFour = Object.assign({}, objMethodOne)
// objMethodFour.property = "Method Four"

// console.log(objMethodFour.property); // "Method Four"


// {3} 
// let a = 1;

// let threeNums = {
//   b: 2,
//   c: 3,
//   d: 4,
// };

// let twoNums = {
//   e: 5,
//   f: 6,
// };

// // Create Your Object Here in One Line

// let finalObject = Object.assign({}, {a}, threeNums, twoNums)
// console.log(finalObject);

// /*
//   a: 1
//   b: 2
//   c: 3
//   d: 4
//   e: 5
//   f: 6
// */


// {4}
// // The Object To Work With
// let myFavGames = {
//   "Trinity Universe": {
//     publisher: "NIS America",
//     price: 40,
//   },

//   "Titan Quest": {
//     publisher: "THQ",
//     bestThree: {
//       one: "Immortal Throne",
//       two: "Ragnarök",
//       three: "Atlantis",
//     },
//     price: 50,
//   },

//   YS: {
//     publisher: "Falcom",
//     bestThree: {
//       one: "Oath in Felghana",
//       two: "Ark Of Napishtim",
//       three: "origin",
//     },
//     price: 40,
//   },
// };

// // Code One => How To Get Object Length ?
// let objectLength = Object.keys(myFavGames).length
// console.log(objectLength)

// for (let i = 0; i < objectLength; i++) {
//   console.log(`The Game Name Is ${Object.keys(myFavGames)[i]}`)
//   console.log(`The Publisher Is ${Object.values(myFavGames)[i]["publisher"]}`);
//   console.log(`The Price Is ${Object.values(myFavGames)[i]["price"]}`);

// //   // Check If Nested Object Has Property (bestThree)
//   if (Object.values(myFavGames)[i]["bestThree"]) {
//     console.log("- Game Has Releases");
//     console.log(`First => ${Object.values(myFavGames)[i]["bestThree"]["one"]}`);
//     console.log(`Second => ${Object.values(myFavGames)[i]["bestThree"]["two"]}`);
//     console.log(`Third => ${Object.values(myFavGames)[i]["bestThree"]["three"]}`);
//   }
//   console.log("#".repeat(20));
// }

// // Ouput

// "The Game Name Is Trinity Universe"
// "The Publisher Is NIS America"
// "The Price Is 40"
// "####################"
// "The Game Name Is Titan Quest"
// "The Publisher Is THQ"
// "The Price Is 50"
// "- Game Has Releases"
// "First => Immortal Throne"
// "Second => Ragnarök"
// "Third => Atlantis"
// "####################"
// "The Game Name Is YS"
// "The Publisher Is Falcom"
// "The Price Is 40"
// "- Game Has Releases"
// "First => Oath in Felghana"
// "Second => Ark Of Napishtim"
// "Third => origin"
// "####################"


/////////////////////////////////////////////////////////////////////////////


// >> {Video 101} DOM - THE BEAAAAAST

// {101} DOM Challenge

// // Header HTML
// // Creating Elements, Classes & Texts
// let myHeader = document.createElement("header")
// myHeader.className = "website-head"

// let myLogoDiv = document.createElement("div")
// myLogoDiv.className = "logo"
// myLogoDiv.title = "website-logo"
// let logoName = document.createTextNode("ElZero")
// myLogoDiv.append(logoName)

// let myUl = document.createElement("ul")
// myUl.className = "menu"

// let myList1 = document.createElement("li")
// let listText1 = document.createTextNode("Home")
// myList1.append(listText1)

// let myList2 = document.createElement("li")
// let listText2 = document.createTextNode("About")
// myList2.append(listText2)

// let myList3 = document.createElement("li")
// let listText3 = document.createTextNode("Services")
// myList3.append(listText3)

// let myList4 = document.createElement("li")
// let listText4 = document.createTextNode("Contact")
// myList4.append(listText4)

// // Appending Header Elements
// myUl.appendChild(myList1)
// myUl.appendChild(myList2)
// myUl.appendChild(myList3)
// myUl.appendChild(myList4)

// myHeader.appendChild(myLogoDiv)
// myHeader.appendChild(myUl)

// document.body.appendChild(myHeader)

// // Header Styling
// document.body.style.cssText =  " margin: 0 ; padding: 0 ; background-color: rgb(236, 236, 236) ; font-family: tahoma, Arial "

// myHeader.style.display = "flex"
// myHeader.style.justifyContent = "space-between"
// myHeader.style.alignItems = "center"
// myHeader.style.padding = "20px"
// myHeader.style.backgroundColor = "rgb(255, 255, 255)"

// myLogoDiv.style.setProperty("font-weight", "bold")
// myLogoDiv.style.setProperty("color", "rgb(35, 169, 110)")
// myLogoDiv.style.setProperty("font-size", "26px")

// myUl.style.setProperty("display", "flex")
// myUl.style.setProperty("gap", "30px")
// myUl.style.setProperty("margin", "0")
// myUl.style.setProperty("padding", "0")
// myUl.style.setProperty("list-style", "none")


// // Body Content HTML
// let contentDiv = document.createElement("div")
// contentDiv.className = "content"

// // Body Content Styling
// contentDiv.style.cssText = " display: flex ; justify-content: center ; gap: 20px ; flex-wrap: wrap ; padding: 20px; ; min-height: calc(100vh - 144px) ; box-sizing: border-box; "

// for (i = 0; i <= 15; i++) {
//   // Products HTMl
//   let productDiv = document.createElement("div")
//   productDiv.className = "product"
//   let productText = document.createTextNode("Product")

//   let productSpan = document.createElement("span")
//   let spanText = document.createTextNode(i)

//   // Appending
//   productSpan.appendChild(spanText)

//   productDiv.appendChild(productSpan)
//   productDiv.appendChild(productText)

//   contentDiv.appendChild(productDiv)

//   document.body.appendChild(contentDiv)

//   // Products Styling
//   productDiv.style.textAlign = "center"
//   productDiv.style.padding = "20px"
//   productDiv.style.backgroundColor = "rgb(255, 255, 255)"
//   productDiv.style.color = "rgb(136, 136, 136)"
//   productDiv.style.borderRadius = "6px"
//   productDiv.style.border = "1px solid rgb(221, 221, 221)"
//   productDiv.style.boxSizing = "border-box"

//   productSpan.style.display = "block"
//   productSpan.style.color = "black"
//   productSpan.style.fontSize = "40px"
//   productSpan.style.fontWeight = "normal"
//   productSpan.style.marginTop = "10px"
//   productSpan.style.marginBottom = "10px"
// }

// // Footer HTML
// let myFooter = document.createElement("footer")
// myFooter.className = "footer"
// let footerText = document.createTextNode("Copyright 2022")

// myFooter.appendChild(footerText)
// document.body.appendChild(myFooter)

// // Footer Styling
// myFooter.style.textAlign = "center"
// myFooter.style.color = "rgb(255, 255, 255)"
// myFooter.style.backgroundColor = "rgb(35, 169, 110)"
// myFooter.style.padding = "20px"
// myFooter.style.fontSize = "26px"


// // {86 - 93} DOM

// {1}
// console.log(document.getElementById("elzero"))
// console.log(document.getElementsByClassName("element"))
// console.log(document.getElementsByName("js"))
// console.log(document.getElementsByTagName("div"))
// console.log(document.querySelector("#elzero"))
// console.log(document.querySelector(".element"))
// console.log(document.querySelector("div"))
// console.log(document.querySelector("[name = js]"))
// console.log(document.querySelectorAll("#elzero"))
// console.log(document.querySelectorAll(".element"))
// console.log(document.querySelectorAll("div"))
// console.log(document.querySelectorAll("[name = js]"))
// console.log(document.body.children[0])
// console.log(document.body.childNodes[1])
// console.log(document.body.firstElementChild)

// {2}
// document.querySelectorAll("div img").forEach(function (ele) {
//   ele.src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png"
//   ele.alt = "ElZero Logo"
//   return console.log(ele)
// })

// {3}
// let dollar = document.querySelector("[name=dollar]")
// let result = document.querySelector(".result")

// dollar.addEventListener("keypress", function(event) {
//   if (event.key === "Enter") {
//     event.preventDefault()
//     let pounds = dollar.value * 15
//     result.innerHTML = `${dollar.value} USD Dollars = ${pounds.toFixed(2)} Egyptian Pounds`
//   }
// })

// {4}
// let one = document.querySelector(".one")
// let two = document.querySelector(".two")

// one.title = one.className
// two.title = two.className

// one.innerHTML = two.innerHTML
// two.innerHTML = `${two.getAttribute("title").charAt(0).toUpperCase() + two.getAttribute("title").slice(1)} ${(two.attributes.length)}`

// console.log(one)
// console.log(two)

// {5}
// let imgs = document.querySelectorAll("img")

// imgs.forEach(function(ele) {
//   if (ele.hasAttribute("alt") === true) {
//     ele.setAttribute("alt", "Old")
//   } else {
//     ele.setAttribute("alt", "ElZero New")
//   }
// })
// console.log(imgs)


// {6} 
// let form = document.forms
// let elesNums = document.querySelector("[name=elements]")
// let elesVals = document.querySelector("[name=texts]")
// let elesType = document.querySelector("[name=type]")
// let result = document.querySelector(".results")

// form[0].onsubmit = function (event) {
//   event.preventDefault()

//   document.querySelectorAll(".box").forEach(el => el.remove())

//   for (i=0; i<elesNums.value; i++) {

//     let myEle = document.createElement(elesType.value)
//     let myEleText = document.createTextNode(elesVals.value)

//     myEle.appendChild(myEleText)
//     result.appendChild(myEle)

//     myEle.className = "box"
//     myEle.setAttribute("title", "Element")
//     myEle.setAttribute("id", `id-${i+1}`)
//   }
// }
// Styling With CSS

/////////////////////////////////////////////////////////////////////////////

// // {94 - 101} DOM
// {1}
// let links = document.links
// window.onload = function() {
//   for (i=0; i<links.length; i++) {
//     if (links[i].classList.contains("open") && links[i].innerHTML === "Elzero") {
//       links[i].click()
//     }
//   }
// }


// {2}
// let adds = document.querySelector(".classes-to-add")
// let removes = document.querySelector(".classes-to-remove")
// let current = document.querySelector(".current")
// let parentDiv = document.querySelector(".classes-list")
// let addToDiv = document.querySelector(".classes-list div")

// function addOrRemove() {
//   // remove current spans first
//   document.querySelectorAll("span").forEach(el => el.remove())

//   // add or remove to the classList
//   for (i=0; i<this.value.trim().split(" ").length; i++) {
//     if (adds.value) {
//       current.classList.add(adds.value.toLowerCase().trim().split(" ")[i])
//     }
//     if (removes.value) {
//       current.classList.remove(removes.value.toLowerCase().trim().split(" ")[i])
//     }
//   }
//   this.value = ""

//   // add or remove to spans
//   if (current.classList.length) {
//     let myClassesArr = [...current.classList].sort()

//     // skipping "element" & "current"
//     for (i=0; i<myClassesArr.length; i++) {
//       if (myClassesArr[i] === "element" || myClassesArr[i] === "current") {
//         continue;
//       }

//       let addToSpan = document.createElement("span")
//       addToSpan.textContent = myClassesArr[i]
//       addToDiv.append(addToSpan)
//     }
//   } else {
//     addToDiv.textContent = "Nothing to show"
//   }
// }
// adds.onblur = addOrRemove
// removes.onblur = addOrRemove

// {3}
/* <div class="start" title="Start Element" data-value="Start">Start</div>
<div class="our-element">Our Element</div>
<div class="end" title="End Element" data-value="End">End</div> */

// document.querySelector("p").remove()

// let ourEle = document.querySelector(".our-element")

// let eleBefore = document.createElement("div")
// eleBefore.className = "start"
// eleBefore.setAttribute("title", "Start Element")
// eleBefore.setAttribute("data-value", "Start")
// eleBefore.textContent = "Start"
// ourEle.before(eleBefore)

// let eleAfter = document.createElement("div")
// eleAfter.className = "end"
// eleAfter.setAttribute("title", "End Element")
// eleAfter.setAttribute("data-value", "End")
// eleAfter.textContent = "End"
// ourEle.after(eleAfter)


// {4}
// let lastChild = document.querySelector("div").childNodes[4] // " Elzero "
// console.log(lastChild.nodeValue.trim()) // Elzero

// {5}
// let eles = document.querySelector("body").children
// for (i=0; i<eles.length; i++) {
//   eles[i].onclick = function () {
//     console.log(`This Is ${this.nodeName}`)
//   }
// }

///////////////////////////////////////////////////////////////////////////

// {102 - 110} BOM
// {1}
// let nums = window.prompt("Print Number From - To", "Example: 5-20")

// let numsArr = nums.split("-").sort()

// for (i=+numsArr[0]; i<=+numsArr[1]; i++) {
//     console.log(i)
//   }

// {2}
// setTimeout(function myAlert() {
//   let myDiv = document.createElement("div")

//   let myH2 = document.createElement("h2")
//   myH2.textContent = "Welcome"

//   let myP = document.createElement("p")
//   myP.textContent = "Welcome to Elzero Web School"

//   let closeBtn = document.createElement("div")
//   closeBtn.textContent = "X"

//   document.body.appendChild(myDiv)
//   myDiv.appendChild(myH2)
//   myDiv.appendChild(myP)
//   myDiv.appendChild(closeBtn)

//   // Styling
//   myDiv.style.backgroundColor = "white"
//   myDiv.style.padding = "20px"
//   myDiv.style.margin = "50px auto"
//   myDiv.style.width = "400px"
//   myDiv.style.borderRadius = "6px"
//   myDiv.style.textAlign = "center"
//   myDiv.style.position = "relative"

//   closeBtn.style.position = "absolute"
//   closeBtn.style.right = "-20px"
//   closeBtn.style.top = "-20px"
//   closeBtn.style.backgroundColor = "red"
//   closeBtn.style.borderRadius = "50%"
//   closeBtn.style.width = "20px"
//   closeBtn.style.height = "20px"
//   closeBtn.style.padding = "10px"
//   closeBtn.style.fontFamily = "sans-Serif"
//   closeBtn.style.fontWeight = "bold"
//   closeBtn.style.cursor = "pointer"

//   closeBtn.onclick = function() {
//   myDiv.style.display = "none"
// }
// }, 3000)


// {3} {4} {5}

// let myDiv = document.createElement("div")
// myDiv.textContent = "3"
// document.body.appendChild(myDiv)

// function countDown() {
//   myDiv.innerHTML -= 1
//   if (myDiv.innerHTML === "0") {

//     // {3}
//     // clearInterval(counter)

//     // {4}
//     // location.href= "https://elzero.org"

//     // {5}
//     // clearInterval(counter)
//     // window.open("https://elzero.org", "_blank", "width=400, height=400")
//   }
// }
// let counter = setInterval(countDown, 1000)


// {111 - 114} BOM
// {1}

// let color = document.querySelector("#colors")
// let font = document.querySelector("#fonts")
// let size = document.querySelector("#sizes")
// let exp = document.querySelector(".exp")

// let colors = ["red", "green", "blue", "black"]
// let fonts = ["Cairo", "cursive", "fantasy"]


// colors.forEach(function(e) {
//   let option = document.createElement("option")
//   option.textContent = e
//   option.value = e
//   color.appendChild(option)
// })

// color.onchange = function () {
//   exp.style.color = this.value
  
//   localStorage.setItem("color", this.value)
// }

// if (localStorage.getItem("color")) {
//   exp.style.color = localStorage.getItem("color")
// }


// fonts.forEach(function(el) {
//   let option = document.createElement("option")
//   option.textContent = el
//   option.value = el
//   font.appendChild(option)
// })

// font.onchange = function () {
//   exp.style.fontFamily = this.value
  
//   localStorage.setItem("fontWeight", this.value)
// }

// if (localStorage.getItem("fontWeight")) {
//   exp.style.fontFamily = localStorage.getItem("fontWeight")
// }


// for (i=16; i<=32; i+=2){
//   let option = document.createElement("option")
//   option.textContent = `${i} px`
//   option.value = `${i}px`
//   size.appendChild(option)

//   size.onchange = function () {
//     exp.style.fontSize = this.value
//     localStorage.setItem("fontSize", this.value)
//   }
// }

// if (localStorage.getItem("fontSize")) {
//   exp.style.fontSize = localStorage.getItem("fontSize")
// }


// {2}
// let myName = document.querySelector("#name")
// let email = document.querySelector("#email")
// let password = document.querySelector("#password")
// let select = document.querySelector("select")
// let btn = document.querySelector("[type=submit")
// myName.onblur = function() {
//   sessionStorage.setItem("name", myName.value)
// }

// email.onblur = function() {
//   sessionStorage.setItem("email", email.value)
// }

// password.onblur = function() {
//   sessionStorage.setItem("password", password.value)
// }

// let options = ["Egypt", "Palestine", "Syria", "KSA", "Tunisia"]
// options.forEach(ele => {
//   let option = document.createElement("option")
//   option.textContent = ele
//   option.value = ele
//   select.appendChild(option)
// })

// select.onchange = function () {
//     sessionStorage.setItem("country", this.value)
// }

// addEventListener("load", function() {
//   if (window.sessionStorage.getItem("name")) {
//     myName.value = window.sessionStorage.getItem("name")
//   } 

//   if (window.sessionStorage.getItem("email")) {
//     email.value = window.sessionStorage.getItem("email")
//   } 

//   if (window.sessionStorage.getItem("password")) {
//     password.value = window.sessionStorage.getItem("password")
//   } 

//   if (window.sessionStorage.getItem("country")) {
//     select.value = window.sessionStorage.getItem("country")
//   } 
// })

// btn.onclick = function () {
//   window.sessionStorage.clear()
// }


// {Video 114}
// let taskInput = document.querySelector(".form .input")
// let addBtn = document.querySelector(".form .add")
// let myTasks = document.querySelector(".tasks")

// addBtn.addEventListener("click", function() {
//   if (taskInput.value !== "") {

//   let myAllSpans = document.createElement("span")
//   myAllSpans.className = "task"
//   myAllSpans.textContent = taskInput.value

//   let myTaskDelete = document.createElement("input")
//   myTaskDelete.value = "Delete"
//   myTaskDelete.type = "submit"
//   myTaskDelete.className = "delete"
//   myTaskDelete.style.padding = "5px"

//   myAllSpans.appendChild(myTaskDelete)
//   myTasks.appendChild(myAllSpans)
//   taskInput.value = ""

//   window.localStorage.setItem("last-task", myAllSpans.textContent)
// }
// })


///////////////////////////////////////////////////////////////////////////
// {115 - 122} Destructuring
// {1}
// let myNumbers = [1, 2, 3, 4, 5];

// // Write Your Destructuring Assignment Here
// [a, , , ,e] = myNumbers

// console.log(a * e); // 5


// {2} 
// let mySkills = ["HTML", "CSS", "JavaScript", ["PHP", "Python", ["Django", "Laravel"]]];

// // Write Your Destructuring Assignment Here

// let [a, b, c, [d, e, [f, g]]] = mySkills
// console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);

// // My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel


// {3}
// let arr1 = ["Ahmed", "Sameh", "Sayed"];
// let arr2 = ["Mohamed", "Gamal", "Amir"];
// let arr3 = ["Haytham", "Shady", "Mahmoud"];

// // Play With Arrays To Prepare For Destructuring
// // Write Your Destructuring Assignment Here

// [c, , , , a, b] = arr1.concat(arr3)

// console.log(arr1.concat(arr3)) // ['Ahmed', 'Sameh', 'Sayed', 'Haytham', 'Shady', 'Mahmoud']

// console.log(`My Best Friends: ${a}, ${b}, ${c}`);

// // My Best Friends: Shady, Mahmoud, Ahmed


// {4} 
// const member = {
//   age: 30,
//   working: false,
//   country: "Egypt",
//   hobbies: ["Reading", "Swimming", "Programming"],
// };

// // Write Your Destructuring Assignment Here

// // age >> a || working >> w ||  country >> c || reading >> h1 || swimming >> h2 || pwogramming >> h3
// const {
//   age: a,
//   working: w,
//   country: c,
//   hobbies: [h1, h2, h3]
// } = member


// console.log(`My Age Is ${a} And Iam ${w ? "" : "Not"} Working`);
// // My Age Is 30 And Iam Not Working

// console.log(`I Live in ${c}`);
// // I Live in Egypt

// console.log(`My Hobbies: ${h1} And ${h3}`);
// // My Hobbies: Reading And Programming


// {5}
// const game = {
//   title: "YS",
//   developer: "Falcom",
//   releases: {
//     "Oath In Felghana": ["USA", "Japan"],
//     "Ark Of Napishtim": {
//       US: "20 USD",
//       JAP: "10 USD",
//     },
//     Origin: "30 USD",
//   },
// };

// // Write Your Destructuring Assignment/s Here
// const {
//   title: t,
//   developer: d,
//   releases
// } = game;

// const [o, a] = Object.keys(releases);

// const [[u, j], {US: u_price, JAP: j_price}, or] = Object.values(releases)


// // to explain the solution 

// // title >> t || developer >> d || Oath In Felghana >> o || 
// // USA >> u || Japan >> j || Ark Of Napishtim >> a || US >> u_price
// // JAP >> j_price || "30 USD" >> or

// // console.log(Object.keys(releases)) //  ['Oath In Felghana', 'Ark Of Napishtim', 'Origin']
// // console.log(Object.values(releases))
// // // [ ["USA", "Japan"], {US: "20 USD", JAP: "10 USD"}, "30 USD" ]


// console.log(`My Favourite Games Style Is ${t} Style`);
// // My Favourite Games Style Is YS Style

// console.log(`And I Love ${d} Games`);
// // And I Love Falcom Games

// console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);
// // My Best Release Is Oath In Felghana It Released in USA & Japan

// console.log(`Although I Love ${a}`);
// // Although I Love Ark Of Napishtim

// console.log(`${a} Price in USA Is ${u_price}`);
// // Ark Of Napishtim Price in USA Is 20 USD

// console.log(`${a} Price in Japan Is ${j_price}`);
// // Ark Of Napishtim Price in Japan Is 10 USD

// console.log(`Origin Price Is ${or}`);
// // Origin Price Is 30 USD


///////////////////////////////////////////////////////////////////////////


// {123 - 133} Set - Map - Array
// {1}

// let setOfNumbers = new Set([10]);
// setOfNumbers.add(20).add(setOfNumbers.size)
// let NumbersArr = [...setOfNumbers][2]

// console.log(setOfNumbers)
// console.log(NumbersArr)

// // Needed Output
// Set(3) {10, 20, 2}
// 2


// {2}
// let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];
// console.log(new Set(myFriends.sort()))
// Needed Output
// (4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']


// {3}
// let myInfo = {
//   username: "Osama",
//   role: "Admin",
//   country: "Egypt",
// };

// let myMap = new Map(Object.entries(myInfo))

// console.log(myMap)
// console.log(myMap.size)
// console.log(myMap.has("role"))

// // // Needed Output
// // Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
// // 3
// // true

// {4} 
// let theNumber = 100020003000;
// let myNum = new Set(theNumber.toString())
// myNum.delete("0")
// console.log(Number([...myNum].join("")))

// Needed Output
// 123


// {5}
// let theName = "Elzero";
// console.log([...theName])
// console.log(theName.split(""))
// console.log(Array.from(theName))
// console.log(Object.assign([], theName))
// console.log(Array.prototype.slice.call(theName))
// // Needed Output
// // ['E', 'l', 'z', 'e', 'r', 'o']


// {6}
// function convertNumsToStrings(arr) {

// let myNumbers = []
// let myLetters = []
// arr.map(function(e) {
//   if (typeof(e) == "number") {
//     myNumbers.push(e)
//   } else if (typeof(e) == "string") {
//     myLetters.push(e)
//   }
// })
// myNumbers.sort((a,b) => (a - b))
// let myNewArr = myNumbers.concat(myLetters)

// let target = myNewArr.indexOf(myNewArr.find((e) => typeof(e) == "number")) // Always 0
// let start = myNewArr.indexOf(myNewArr.find((e) => typeof(e) == "string"))
// let end = start + start

// return myNewArr.copyWithin(target, start, end)
// }


// let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
// console.log(convertNumsToStrings(chars))

// // Needed Output
// // ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']

// // ------------------------------------
// let chars2 = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
// console.log(convertNumsToStrings(chars2))

// // Needed Output
// // ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E']

// // // ------------------------------------
// let chars3 = ["Z", "Y", "A", "D", "E", 10, 1];
// console.log(convertNumsToStrings(chars3))

// // Needed Output
// // ["Z", "Y", "Z", "Y", "A", "D", "E"]


// {7}
// let numsOne = [1, 2, 3];
// let numsTwo = [4, 5, 6];

// let newArr = []
// for (i=0; i<numsOne.length; i++) {
//   newArr.push(numsOne[i])
// }
// for (j=0; j<numsTwo.length; j++) {
//   newArr.push(numsTwo[j])
// }

// console.log(newArr)
// console.log([...numsOne, ...numsTwo])
// console.log(numsOne.concat(numsTwo))

// // Needed Output
// // [1, 2, 3, 4, 5, 6]


// {8}
// let n1 = [10, 30, 10, 20];
// let n2 = [30, 20, 10];

// console.log([...n1, ...n2].length * Math.max(...n2)) // 210

// // Needed Output
// // 210


///////////////////////////////////////////////////////////////////////////

// >> {159 - 168} Date - Generators - Modules

// {1}

// let dateNow = new Date()
// let birth = new Date("june 01, 95")
// let diff = dateNow - birth
// console.log(diff / 1000 / 60 / 60 / 24 / 365) // 27.348171215594878

// Needed Output
// "1247939400 Seconds"
// "20798990 Minutes"
// "346650 Hours"
// "14444 Days"
// "481 Months"
// "40 Years"


// {2}
// Needed Output
// let myDate = new Date("1980-01-01T00:00:01")
// console.log(myDate)
// "Tue Jan 01 1980 00:00:01 GMT+0200 (Eastern European Standard Time)"


// {3}
// let first = new Date()
// first.setDate(0)
// console.log(first)
// // Wed Aug 31 2022 01:55:24 GMT+0200 (Eastern European Standard Time)


// let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// let prevIndex = new Date().getMonth()-1 // 7
// let prevMonthName = months[prevIndex]

// let today = new Date()
// today.setDate(0)
// prevDate = today.getDate()

// console.log(`Previous Month Is ${prevMonthName} and Last Day Is ${prevDate} `)
// // Previous Month Is August and Last Day Is 31 


// // Needed Output
// // "Sat Apr 30 2022 18:13:20 GMT+0200 (Eastern European Standard Time)"
// // "Previous Month Is April And Last Day Is 30"


// {4}
// Needed Output
// console.log(new Date("June, 01, 1995"))
// console.log(new Date(1995, 5, 1, 0,0,0))
// console.log(new Date(Date.parse("June, 1, 1995")))

// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"


// {5}
// Needed Output
// let start = performance.now()
// for (i=0; i<=9999; i++) {
//   console.log(i)
// }
// let end = performance.now()
// let diff = end - start
// console.log(`Loop Took ${Math.trunc(diff)} MS`)

// "Loop Took 1921 Milliseconds."


// {6} Not Finished
// Write Your Generator Function Here
// function* gen() {
//   let indx = 14
//   let x = 0;

//   while (true) [
//     yield indx,
//     indx = indx + 140 + (200 * x++)
//   ] 
// }
// let generator = gen();

// console.log(generator.next()); // {value: 14, done: false}
// console.log(generator.next()); // {value: 154, done: false}
// console.log(generator.next()); // {value: 494, done: false}
// console.log(generator.next()); // {value: 1034, done: false}
// console.log(generator.next()); // {value: 1774, done: false}
// console.log(generator.next()); // {value: 2714, done: false}
// console.log(generator.next()); // {value: 3854, done: false}
// console.log(generator.next()); // {value: 5194, done: false}
// console.log(generator.next()); // {value: 6734, done: false}


// {7}
// function* genNumbers() {
//   yield* [1, 2, 2, 2, 3, 4, 5];
// }
// function* genLetters() {
//   yield* ["A", "B", "B", "B", "C", "D"];
// }

// // Write Your Generator Function Here
// function* genAll() {
//   yield* new Set(genNumbers());
//   yield* new Set(genLetters())
// }
// let generator = genAll();

// console.log(generator.next()); // {value: 1, done: false}
// console.log(generator.next()); // {value: 2, done: false}
// console.log(generator.next()); // {value: 3, done: false}
// console.log(generator.next()); // {value: 4, done: false}
// console.log(generator.next()); // {value: 5, done: false}
// console.log(generator.next()); // {value: "A", done: false}
// console.log(generator.next()); // {value: "B", done: false}
// console.log(generator.next()); // {value: "C", done: false}
// console.log(generator.next()); // {value: "D", done: false}


// {8}
// import calc, {} from "./mod-one.js"

// import * as modOne from "./mod-two.js"

// // main.js File
// console.log(calc(modOne.numOne, modOne.numTwo, modOne.numThree)); // 60


// ==============================================================================

// >> {169 - 178} JSON, API, Asynch
// {1}
/*
// 
// Create articles.json
[
  {
    "id":"1",
    "title":"Title 1",
    "body":"Number one body",
    "category":"lorem lorem",
    "author":"ElGazar"
  },
  {
    "id":"2",
    "title":"Title 2",
    "body":"Number two body",
    "category":"lorem lorem",
    "author":"ElGazar"
  },
  {
    "id":"3",
    "title":"Title 3",
    "body":"Number three body",
    "category":"lorem lorem",
    "author":"ElGazar"
  },
  {
    "id":"4",
    "title":"Title 4",
    "body":"Number four body",
    "category":"lorem lorem",
    "author":"ElGazar"
  },
  {
    "id":"5",
    "title":"Title 5",
    "body":"Number five body",
    "category":"lorem lorem",
    "author":"ElGazar"
  }
]
*/

// // {2}
// let articlesReq = new XMLHttpRequest()
// articlesReq.open("GET", "./articles.json")
// articlesReq.send()
// console.log(articlesReq)

// articlesReq.onreadystatechange = function() {
//   if (this.readyState == 4 && this.status == 200) {
//     console.log(this.responseText)
//     console.log("Data Loaded")

// // {3}
//   // let mainData = JSON.parse(this.responseText)
//   // console.log(mainData)
  
//   // for (let i=0; i<mainData.length; i++) {
//   //   mainData[i]["category"] = "All"        
//   //   }

//   // console.log(mainData)

//   // let updatedJson = JSON.stringify(mainData)
//   // console.log(updatedJson)
//   // let updatedJsonObject = JSON.parse(updatedJson)

// // {4}
//     let pureObjectData = JSON.parse(this.responseText)
//     for (let j=0; j<pureObjectData.length; j++) {
//       console.log(pureObjectData[j])

//       // console.log(pureObjectData[j]["title"]) // >> title values
//       // console.log(pureObjectData[j]["body"]) // >> body values
//       // console.log(pureObjectData[j]["author"]) // >> author values
//       // console.log(pureObjectData[j]["category"]) // category values

            
//       let mainDiv = document.createElement("div")
//       mainDiv.id = "data"
      
//       let secDiv = document.createElement("div")

//       let header = document.createElement("h2")
//       let headerContent = document.createTextNode(pureObjectData[j]["title"])
//       header.appendChild(headerContent)

//       let para1 = document.createElement("p")
//       let para1Content = document.createTextNode(pureObjectData[j]["body"])
//       para1.appendChild(para1Content)

//       let para2 = document.createElement("p")
//       let para2Content = document.createTextNode(pureObjectData[j]["author"])
//       para2.appendChild(para2Content)

//       let para3 = document.createElement("p")
//       let para3Content = document.createTextNode(pureObjectData[j]["category"])
//       para3.appendChild(para3Content)

//       document.body.appendChild(mainDiv)
//       mainDiv.appendChild(secDiv)
//       secDiv.appendChild(header)
//       secDiv.appendChild(para1)
//       secDiv.appendChild(para2)
//       secDiv.appendChild(para3)
//     }
//   }
// }

// ==============================================================================

