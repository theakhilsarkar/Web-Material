// Loops - line of code

// wap to print hello world 100 times every word in new line

// LOOP : it execute block of code multiple times.

// types of loops
// 1. entry controlled loop - while loop, for loop
// 2. exit controlled loop - do..while loop

// start
// end
// ++,--

// car
//start

// let i = 1; //i=1 // start
// while (i <= 10) {// 1<=10 // end
//     document.writeln(i);
//     i++; // i=i+1, i+=1 // ++,--
//     // ++,--
// }

// 1 1 1 1 1 1 1 1 1 1 1 1

// wap to print 10 to 1 using while loop

// 10,9,8....1
// let i = 10;
// while (i >= 1) {
//     document.writeln(i);
//     i--;
// }

// conditions
// ++ --> < less than
// -- --> > greater than

// wap to print 10 to 1 using while loop
// wap to print only even numbers from 10 to 1.
// wap to print number from n1 to n2.
// wap to print leap years from startyear to endyear.


// let n1 = parseInt(prompt("Enter n1 : ")); // 1
// let n2 = parseInt(prompt("Enter n2 : ")); // 5

// while (n1 <= n2) { // 4<=2
//     document.writeln(n1 + n2); // 3+3 = 6 6 6
//     n1++; // 4
//     n2--; // 2
// }

// let start = parseInt(prompt("Enter starting year"));
// let end = parseInt(prompt("Enter ending year"));

// while (start <= end) {
//     if (start % 4 == 0) {
//         document.writeln(start);
//     }
//     start++;
// }

// while, for
// start, end, ++,--

// loop - to execute block of code multiple times.

// for loop
// for(start; end; ++,--)
// for(initialization; condition; inc,dec.)

// 10...1

// 1, 11, 111, 1111, 11111.
// 2, 22, 222, 2222, 22222.

// let a = 7;
// let b = 10;
// for (let i = 1; i <= 3; i++) {
//     document.writeln(a + " " + b);
//     a++;
//     b++;
// }


// q1. 1,2,3,4,4
// for (let i = 1; i <= 7; i++) {
//     document.writeln(a);
//     if (i % 2 == 1) {
//         a += 3;
//     } else {
//         a -= 2;
//     }
// }

// let x = 53;
// for (let i = 1; i <= 4; i++) {
//     document.writeln(x + " " + x);
//     x -= 13;
// }

// 8, 6, 9, 23, 87 , 429

// 8 x 1 - 2 = 6
// 6 x 2 - 3 = 9
// 9 x 3 - 4 = 23
// 23 x 4 - 5 = 87
// 87 x 5 - 6 = 429 ..

// let x = 8;
// for (let i = 1; i <= 6; i++) {
//     document.writeln(x);
//     x = (x * i) - (i + 1);
// }

// 5.2, 4.8, 4.4, 4,

// let x = 5.2;
// for (let i = 1; i <= 5; i++) {
//     document.writeln(x.toFixed(1)); //
//     x -= 0.4;
// }

// 0 1 1 2 3 5 8 13 21....

// let first = 0, second = 1;
// for (let i = 1; i <= 10; i++) {
//     let third = first + second;
//     document.writeln(third);
//     first = second;
//     second = third;
// }

// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5

// nested loop




// for (let j = 1; j <= 5; j++) {
//     for (let i = 1; i <= 5; i++) {
//         document.writeln(i);
//     }
//     document.writeln("<br>");
// }

// * * * * *
// * * * * *
// * * * * *
// * * * * *

// row - 4 - outer loop - value constant till one row end
// col - 5 - inner loop - content - value will change in every turn


// for (let i = 1; i <= 4; i++) {// outer loop
//     for (let j = 1; j <= 5; j++) {// inner loop
//         document.writeln(i);
//     }
//     document.writeln("<br>");
// }

// for (let j = 1; j <= 4; j++) {
//     for (let i = 1; i <= 5; i++) {
//         document.writeln("*");
//     }
//     document.writeln("<br>");
// }

// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5

// * * * * *
// * * * * *
// * * * * *
// * * * * *

// 1 1 1 1 1
// 2 2 2 2 2
// 3 3 3 3 3
// 4 4 4 4 4

// 1 - 3 - 5
// 1 - 3 - 5
// 1 - 3 - 5
// 1 - 3 - 5

// 1 0 1 0 1
// 1 0 1 0 1 (2,4)
// 1 0 1 0 1
// 1 0 1 0 1

//
// 1 to n
// do..while - minimum 1 execution
// let n = 10; // end
// let i = 1; // start
// do {
//     document.writeln(i); // print - 1
//     i++; // increment , 2
// } while (i >= n);// condition 2>=10

// document.writeln("<br>");

// let a = 1;
// let b = 10;
// while (a >= b) {
//     document.writeln(a);
//     a++;
// }

// sat-sun
// row(h)-col(v)
// pattern - nested loop
// outer - row - count
// inner - col - count
// space - logic


// 1
// 1 0
// 1 0 1 0
// 1 0 1 0 1
// for (let i = 1; i <= 4; i++) {
//     for (let j = 1; j <= i; j++) {
//         if (j % 2 == 0) {
//             document.writeln("0");
//         } else {
//             document.writeln("1");
//         }
//     }
//     document.writeln("<br>");
// }

// 1 2 3 4 5
//   2 3 4 5
//     3 4 5
//       4 5
//         5
// start - change --> variable
// for (let i = 1; i <= 5; i++) {
//     for (let k = 1; k < i; k++) { // 1<5
//         document.writeln("-");
//     }
//     for (let j = i; j <= 5; j++) {
//         document.writeln(j);
//     }
//     document.writeln("<br>")
// }

//      1
//     12
//    123
//   1234
//  12345
// for (let i = 1; i <= 5; i++) {
//     for (let k = i; k < 5; k++) { // 1<=4
//         console.log("-");
//     }
//     for (let j = 1; j <= i; j++) {
//         console.log(j);
//     }
//     console.log("\n");
// }

// * * * * *
// *       *
// *       *
// *       *
// *       *
// *       *
// *       *
// *       *
// *       *
// * * * * *

// A to Z
// for (let i = 1; i <= 10; i++) {
//     for (let j = 1; j <= 5; j++) {
//         if (j == 1 || i == 5 || j == 5) {// row-1
//             document.writeln("*");
//         } else {
//             document.writeln("&nbsp&nbsp");
//         }
//     }
//     document.writeln("<br>");
// }


// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= i; j++) {
//         document.writeln(j);
//     }
//     for (let l = i; l < 5; l++) {
//         document.writeln("&nbsp");// 8 - 2/ 4
//         document.writeln("&nbsp");// 8 - 2/ 4
//         document.writeln("&nbsp");// 8 - 2/ 4
//     }
//     for (let k = i; k >= 1; k--) {
//         document.writeln(k);
//     }
//     document.writeln("<br>");
// }

// * * * * *
// *       *
// *       *
// *       *
// * * * * *
// *       *
// *       *
// *       *
// *       *
// *       *
// for (let i = 1; i <= 10; i++) {
//     for (let j = 1; j <= 5; j++) {
//         if (i == 1 || j == 1 || i == 5 || j == 5) {
//             document.writeln("*");
//         }
//         else if (i == 3 && j == 3) {
//             document.writeln("*");
//         }
//         else {
//             document.writeln("&nbsp&nbsp");
//         }
//     }
//     document.writeln("<br>");
// }


