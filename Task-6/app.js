// Day-6: Arrays

//Activity 1: Array Creation and Access
//Task 1: Create an Array from 1 to 5 and log the array to the console

let arr = [1, 2, 3, 4, 5];
console.log(arr);

//Task 2: Access first and the last element of the array and them to the console

let FirstElement = arr[0];
let LastElement = arr[arr.length - 1];

console.log(FirstElement);
console.log(LastElement);

//Activity 2: Array Methods(Basic)
//Task 3: Use the push  method to add a new number to the end of the array and log the updated array

arr.push(6);
let element = arr[arr.length - 1];
console.log(element);

//Task 4: Use the pop method to remove the last element from the array and log the updated array

let elem = arr.pop();
console.log(elem);       // Output: 6
console.log(arr);        // Output:1, 2, 3, 4, 5

//Task 5: Use the shift method to remove the first element from the array and log the updated array

let eleme = arr.shift();
console.log(eleme);       // Output: 1
console.log(arr);         // Output: 2, 3, 4, 5

//Task 6: Use the unshift method to add a new number to the beggining of the array and log the updated array

// arr = 2, 3, 4, 5
let elemen = arr.unshift(1);
console.log(elemen);       // Output: 5
console.log(arr);         // Output: 1, 2, 3, 4, 5

//Activity 3: Array Methods(Intermediate)
//Task 7: Use the map method to create a new array where each number is doubled and log the new array.

let numbers = [5, 6, 7, 8, 9];
let doublenumbers = numbers.map(function (number) {
    return number * 2;
});

// OR
// let doubledNumbers = numbers.map(number => number * 2);

console.log(doublenumbers);  // [4, 8, 12, 16]
console.log(numbers);        // [2, 4, 6, 8]

//Task 7: Use the filter method to create a new array with only even numbers and log the new array.

let newNumbers = numbers.filter(function (number) {
    return number % 2 == 0;
});

//OR
// let newNumbers = numbers.filter(number => number % 2 == 0);

console.log(newNumbers);

//Task 9: Use the reduce method to calculate sum of all the numbers in an Array and log the result.

let sum = numbers.reduce(function (initialValue, currentValue) {
    return initialValue + currentValue

})
console.log(sum);

//OR
//let sum = numbers.reduce((initialValue + currentValue) => {
//    return initialValue + currentValue
//})

//Activity 4: Array Iteration
//Task 10: Use for loop to iterate over the array log each element to the console.

let array = [2, 4, 5, 7, 9];

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

//Task 11: Use forEach loop to iterate over the array log each element to the console.

array.forEach((element) => {
    console.log(element);
});

//Activity 5: Multi-dimensional Arrays 
//Task 12: Create a 2-D Array(matrix) and log the entire array to the console.

let matrix = [
    [12, 22, 32],
    [13, 23, 33],
    [14, 24, 44]
];
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j]);
    }
}

//OR
const arr2D = [[1, 2, 3], [4, 5, 6], [8, 9, 0]];

console.log(arr2D);

//Task 13: Acces and log a specific element from the 2-D Array

let MatrixElement = matrix[2][1];
console.log(MatrixElement);
