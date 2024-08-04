// Day-6: Arrays

//Activity 1: Array Creation and Access
//Task 1: Create an Array from 1 to 5 and log the array to the console

let arr = [1, 2, 3, 4, 5];
console.log(arr);

//Task 2: Access first and the last element of the array and them to the console

let FirstElement = arr[0];
let LastElement = arr[arr.length-1];

console.log(FirstElement);
console.log(LastElement);

//Activity 2: Array Methods(Basic)
//Task 3: Use the push  method to add a new number to the end of the array and log the updated array

arr.push(6);
let element = arr[arr.length-1];
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

let numbers = [2, 4, 6, 8];
let doublenumbers = numbers.map(function(number){
    return number*2;
});

// OR
// let doubledNumbers = numbers.map(number => number * 2);

console.log(doublenumbers);  // [4, 8, 12, 16]
console.log(numbers);        // [2, 4, 6, 8]

//Task 7: Use the filter method to create a new array with only even numbers and log the new array.




