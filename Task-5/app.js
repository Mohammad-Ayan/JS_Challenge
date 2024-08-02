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

//Activity 2 Function Expression 
//Task2: Function expression to find the maximum of two numbers and log the result 

const Max = function(a, b) {
    return (a > b) ? a : b;
   
};

console.log(Max(4, 5));
 
//Task3: Function expression to concatenate two strings and return the result

const ConcStr =  function(str1, str2){
    return str1 + " " + str2;
};

console.log(ConcStr("Hii", "Assalamualium"));
