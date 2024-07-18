// -Activity 1: If-Else Statements 

//Task 1: WAP to check if a no is +ve, -ve or zero 
let i = prompt("Enter the Number")
if (i < 0) {
    console.log('negative');

} else if
    (i > 0) {
    console.log('positive');
}
else {
    console.log('zero');

}

//Task 2: WAP to check if a person is eligible to vote (age >= 18)

let age = prompt("Enter Age:")

if (age < 18) {
    console.log('Not eligible to vote');

} else {
    console.log('Eligible to vote');
}

//-Activity 2: Nested If-Else Statements
//Task 3: WAP to find the largest of 3 no's using nested if-else statements

let a = 34;
let b = 54;
let c = 65;

if (a > b) {
    if (a > c) {
        console.log("a is largest");
    } else {
        console.log("c is largest");
    }
} else {

    if (b > c) {
        console.log('b is largest');
    } else {
        console.log('c is largest');

    }
}

//-Activity 3: Switch Case
//Task 4: WAP that uses switch case to determine the day of the week
// based on a no(1-7) with day name

function getDayName(dayNumber) {
    let dayName;
    switch (dayNumber) {
        case 1:
            dayName = "Monday";
            break;
        case 2:
            dayName = "Tuesday";
            break;
        case 3:
            dayName = "Wednesday";
            break;
        case 4:
            dayName = "Thursday";
            break;
        case 5:
            dayName = "Friday";
            break;
        case 6:
            dayName = "Saturday";
            break;
        case 7:
            dayName = "Sunday";
            break;
        default:
            dayName = "Invalid day number";
    }
    return dayName;
}


let dayNumber = Number(prompt("Enter the day number (1-7):"));
let dayName = getDayName(dayNumber);
console.log("The day is: " + dayName);

// 2nd aproch
let weekNum = 3;
switch (weekNum) {
    case 1: console.log("Sunday");

        break;
    case 2: console.log("Monday");

        break;
    case 3: console.log("Tuesday");

        break;
    case 4: console.log("Wednesday");

        break;
    case 5: console.log("Thursday");

        break;
    case 6: console.log("friday");

        break;
    case 7: console.log("Saturday");

        break;
    default: console.log("wrong day");
        break;
}

//Task 5: WAP that uses a switch case to assign a grade ('A' to 'F') based on score

let marks = 67;
let gradeCategory;

if (marks >= 85 && marks <= 100) {
    gradeCategory = 1;
} else if (marks >= 75 && marks <= 85) {

    gradeCategory = 2;
} else if (marks >= 60 && marks <= 75) {

    gradeCategory = 3;
} else if (marks >= 40 && marks <= 65) {

    gradeCategory = 4;
} else if (marks >= 75 && marks <= 85) {

    gradeCategory = 5;
} else {
    gradeCategory = -1;
}
switch (gradeCategory) {

    case 1: console.log("A");

        break;
    case 2: console.log("B");;

        break;
    case 3: console.log("C");

        break;
    case 4: console.log("D");
        break;
    case 5: console.log("F");

        break;

    default: console.log("incorrect input");
        break;
}

//-Activity 4: Conditional(Ternary) Operator
//Task 6: WAP that uses ternary operator to check if a no is even or odd 

let num = prompt("Enter the Number");
let check = (num % 2 == 0) ? "Even" : "Odd";
console.log(check);

//-Activity 5: Combining Conditons
//Task 7: WAP to check if a yr is a leap yr using multiple conditions
// (divide by 4, but not 100 unless also divide by 400) 

let year = prompt("Enter the year which you have to check");
if (year % 4 == 0 && (year % 100 != year % 400 == 0)) {
    console.log(year + 'is leap year');
} else {
    console.log(year + 'is not leap year');
}