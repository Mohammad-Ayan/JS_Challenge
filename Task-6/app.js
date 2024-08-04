// Day-6: Arrays

//Activity 1: Array Creation and Access
//Task1: Create an Array from 1 to 5 and log the array to the console

let arr = [1, 2, 3, 4, 5];
console.log(arr);

//Task2: Access first and the last element of the array and them to the console

let FirstElement = arr[0];
let LastElement = arr[arr.length-1];

console.log(FirstElement);
console.log(LastElement);

//Activity 2: Array Methods(Basic)
//Task3: Use the push  method to add a new number to the end of the array and log the updated array

arr.push(6);
let element = arr[arr.length-1];
console.log(element);

//Task4: Use the pop method to remove the last element from the array and log the updated array

