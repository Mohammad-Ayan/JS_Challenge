// Day-4: Loops

//Activity 1: For Loop
//Task1: WAP to print no's from 1 to 10 using for loop.

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//Task2: WAP to print table of 5 using for loop.

let number = 5;
for (let i = 1; i <= 10; i++) {
    console.log(number * i);
    // console.log(`${number} x ${i} = ${number * i}`);       Output: 5 x 1 = 5
}

//Activity 2: While Loop
//Task3: WAP to cal the sum of no's from 1- 10 using while loop

let i = 1;
let sum = 0;

while (i <= 10) {
    sum += i;
    i++;
}

// console.log("The sum of numbers from 1 to 10 is: " + sum);

//Task3: WAP to print no's from 10 to 1 using while loop

let i = 10;
while (i >= 1) {

  console.log(i);

  i--;
  }

//Activity 3:Do While Loop
//Task5: WAP to print numbers from 1 to 5 a do..while loop

let i = 1;
do{
  console.log(i);
  i++;

}while (i<=5);

//Task6: WAP to print to cal the factorial of a number  using a do...while loop

let i = 5;
let fact = 1
do{
  console.log(fact);
  fact *= i;
  i--;
}while(fact>0);

//Activity 4: Nested Loops
//Task7: WAP to print pattern using nested for loops


for(let i = 1; i<=5; i++){
  let stars = "";
  for (let j = 1; j<=i; j++){
stars += "*";
  }
  console.log(stars);
}

//Activity 5: Loop control Statements
//Task7: WAP to print numbers from 1 to 10, but skip the number 5 using the continue statement 

let i = 1;
for (let i = 1; i <= 10; i++) {

  if (i == 5) {
    continue;
  }
  console.log(i);
}

//Task8: WAP to print numbers from 1 to 10, but stop when number is 7 using the break statement 

let i = 1;
for (let i = 1; i <= 10; i++) {

  if (i == 7) {
    break;
  }
  console.log(i);
}