//-Activity 1: Arithmetic Operations
//Task 1: WAP to add 2 no's 

let a = 3;
let b = 34;
const sum = (a + b);
console.log(sum);

//Task 2: WAP to substract 2 no's 

// let a = 3;
// let b = 34;
const sub = (a - b);
console.log(sub);

//Task 3: WAP to multiply 2 no's 

// let a = 3;
// let b = 34;
const mul = (a * b);
console.log(mul);

//Task 4: WAP to divide 2 no's 

// let a = 68;
// let b = 34;
const div = (a / b);
console.log(div);

//Task 5: WAP to divide 2 no's and find the remainder

// let a = 70;
// let b = 34;
const modulo = (a % b);
console.log(modulo);

//-Activity 2: Assignment Operators
//Task 6: Using += operator to add a number to a variable

let num1 = 70;
num1 += 35;  //variable = variable + value
console.log(num1);

//Task 7: Using -= operator to add a number to a variable

let num2 = 70;
num2 -= 45;  //variable = variable + value
console.log(num2);

//-Activity 3: Comparision Operators
//Task 8: WAP to compare 2 no's using > & < 

let num3 = 70;
let num4 = 34;
const bo1 = a < b;
const bol2 = a > b;
console.log(bo1);
console.log(bol2);

//Task 9: WAP to compare 2 no's using >= & <= 

let num5 = 70;
let num6 = 34;
const boolean1 = num5 <= num6;
const boolean2 = num5 >= num6;
console.log(boolean1);
console.log(boolean2);

//Task 10: WAP to compare 2 no's using == & === 


let e = true;
const result1 = num5 == num6;
const result2 = num5 === e;  // return true if both the value and type are the same.
console.log(result1);
console.log(result2);

//console.log(5 === '5'); // false, because 5 is a number and '5' is a string

//-Activity 4: Logical Operators
//Task 11: WAP combine 2 condition using && operator.

let v = true;
let w = false;
let x = true;

console.log(v && w); // false, because b is false
console.log(v && x); // true, because both a and c are true

//Task 12: WAP combine 2 condition using || operator.


let y = false;

console.log(v || w); // true, because 1 is true
console.log(v || x); // true, both are true
console.log(w || y); // false, both are false

//Task 13: WAP tht negate a condition using ! operator.

let z = true;
console.log(!(z)); // false will be the o/p

//-Activity 5: Ternary Operator
//Task 14: WAP using ternary operator to check no is +ve or -ve
let score = 85;
let grade = (score >= 90) ? 'A' :
            (score >= 80) ? 'B' :
            (score >= 70) ? 'C' :
            (score >= 60) ? 'D' : 'F';

console.log(grade); // Output: B


