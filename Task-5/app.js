// Day-5: Functions

//Activity 1: Function Declaration 
//Task1: WAP to check if a number  is even or odd and log the result to the console 

function isEvenorOdd(number) {
    if (number % 2 === 0) {
        console.log(number + " is even");
    } else {
        console.log(number + " is odd");
    }
}

isEvenorOdd(7);
isEvenorOdd(2);

//Task2: WAP to calculate the square of a number and return the result

function square(number) {
    let square =  number * number;
        console.log(" the square is"+ square);
    }

square(3);

//Activity 2: Function Expression 
//Task3: Function expression to find the maximum of two numbers and log the result 

const Max = function(a, b) {
    return (a > b) ? a : b;

};

console.log(Max(4, 5));

//Task4: Function expression to concatenate two strings and return the result

const ConcStr =  function(str1, str2){
    return str1 + " " + str2;
};

console.log(ConcStr("Hii", "Assalamualium"));

//Activity 3: Arrow Function
//Task5: Arrow function to calculate the sum of two numbers and return the result.

const sum = (a, b) => {
    const result = a + b;
    return result;
}

console.log(sum(34, 12));

//Task6: Arrow function to check if a string contains a specific character and return a boolean value 

let str = "Hamdard";

let check = str => {
    if (str.includes('a')) {
        return true;
    } else {
        return false;
    }
}
console.log(check(str));

//Activity 4: Function Parameter
//Task7: Function that take 2 parameter and return their product. Provide the default value for the 2nsd parameter 

const prod = (a, b=2) => a*b;

console.log(prod(2,4));   // Output:8  (2*4)
console.log(prod(2));     //Output:4   (2*2)

//Task8: Function that takes the person name and age, returns a greeting message. Provide the default for the age.

const Greet = (name, age=12) => {
    return `Hello, ${name}! and you are ${age} years old.`;
};

console.log(Greet("Ayan", 18));
console.log(Greet("Habiba"));

//Activity 5: Higher Order Function
//Task 9: Higher Order Function that takes a function and a number, and calls the function that many times

let greet = () => {
    console.log("Assalamualikum");
}

function multipleGreet(func, number) {
    for (let i = 1; i <= number; i++) {
        func();
    }
}

multipleGreet(greet, 5);

//Task 10: Higher Order Function that takes 2 functions and value, apply the 1st function to the value,
// and then applies 2nd function to the result

let func1 = num => (num + 1);               
let func2 = num => (num * num);               

function abc(func1, func2, num) {
    const result1 = func1(num);              // 6+1 = 7
    const result2 = func2(result1);          // 7*7 = 49
    return result2;
}

const finalResult = abc(func1, func2, 6);
console.log(finalResult);                   // Output: 49
