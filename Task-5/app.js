// Day-5: Function

//Activity 1: Function Declaration 
//Task1: WAP to check if a number  is even or odd and log the result to the console 

// function isEvenorOdd(number) {
//     if (number % 2 === 0) {
//         console.log(number + " is even");
//     } else {
//         console.log(number + " is odd");
//     }
// }

// isEvenorOdd(7);
// isEvenorOdd(2);

//Task2: WAP to calculate the square of a number and return the result

// function square(number) {
//     let square =  number * number;
//         console.log(" the square is"+ square);
//     }

// square(3);

//Activity 2: Function Expression 
//Task3: Function expression to find the maximum of two numbers and log the result 

// const Max = function(a, b) {
//     return (a > b) ? a : b;
   
// };

// console.log(Max(4, 5));
 
// //Task4: Function expression to concatenate two strings and return the result

// const ConcStr =  function(str1, str2){
//     return str1 + " " + str2;
// };

// console.log(ConcStr("Hii", "Assalamualium"));

// //Activity 3: Arrow Function
// //Task5: Arrow function to calculate the sum of two numbers and return the result.

// const sum = (a, b) => {
//     const result = a + b;
//     return result;
// }

// console.log(sum(34, 12));

// //Task6: Arrow function to check if a string contains a specific character and return a boolean value 

// let str = "Hamdard";

// let check = str => {
//     if (str.includes('a')) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(check(str));

//Activity 4: Function Parameter
//Task7: Function that take 2 parameter and return their product. Provide the default value for the 2nsd parameter 

// const prod = (a, b=2) => a*b;

// console.log(prod(2,4));   // Output:8  (2*4)
// console.log(prod(2));     //Output:4   (2*2)

//Task