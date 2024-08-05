// Day-7: Objects

//Activity 1: Object Creation and Access
//Task 1: Create an object representing a book with properties [title, author, year] and log the result to the console

const Book = {
    title: "xyz",
    author: "pqr",
    year: 2021
}
console.log(Book);

//Task 2: Access and log the title and author properties of the book object.

console.log("Title: " + Book.title + " Author: " + Book.author);

//Activity 2: Object Method
//Task 3: Add a method to the book object that returns a string with the book's title and author,
// and log the result of calling this method.

const Book1 = {
    title: "xyz",
    author: "pqr",
    year: 2021,
    info: function(){
        return `${this.title} by ${this.author}`;
    }
}
console.log(Book1.info());