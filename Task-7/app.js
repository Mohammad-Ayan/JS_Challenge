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
    info: function () {
        return `${this.title} by ${this.author}`;
    }
}
console.log(Book1.info());

//Task 4: Add a method to the book object that takes a paremeter (year) and updates the book's year properly,
// then log the updated object.

const Book2 = {
    title: "xyz",
    author: "pqr",
    year: 2021,
    info: function (year) {
        return this.year = 2024;
    }
}


console.log(Book2.info());
console.log(Book2);

//OR
const Book3 = {
    title: "xyz",
    author: "pqr",
    year: 2021,
    updateYear(newYear) {
        this.year = newYear;
    }
};

Book3.updateYear(2024);
console.log(Book3);

//Activity 3: Nested Objects
//Task 5: Create a nested object representing a library with properties like name and books(an array of book objects),
//and log the library object to the console.

const library = {
    name: "36 Creasent Library",
    books: [
        {
            title: "yxyz",
            author: "Harper Lee",
            year: 1960

        },
        {
            title: "pqrz",
            author: "Harper Lee",
            year: 1960
        },
        {
            title: "abcz",
            author: "Harper Lee",
            year: 1960
        }
    ]
};

console.log(library);

//Task 6: Access and log the name of the library and the titles of all the books in the library.

library.books.forEach(book => {
    console.log(library.name + " " + book.title);
});

//Activity 4: The this Keyword
//Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title 
// and year and log the result of calling this method.

const book3 = {
    title: " keep it concise",
    author: "William Shakespeare ",
    year: 1962,
    getInfo: function () {
        return `${this.title} and ${this.year}`;
    }
}
console.log(book3.getInfo());

//Activity 5: Object Iteration
// //Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.

for (const key in book3) {
    const element = book3[key];
    console.log(key + ":" + element);
}

//Tssk 9: Use [Object.keys] and [Object.values] methods to log all the keys and values of the book object.

const BookHub = {
    name: "36 Creasent Library",
    books: [
        {
            title: "yxyz",
            author: "Harper Lee",
            year: 1960

        },
        {
            title: "pqrz",
            author: "Harper Lee",
            year: 1960
        },
        {
            title: "abcz",
            author: "Harper Lee",
            year: 1960
        }
    ]
};

const keys = Object.keys(BookHub);
console.log(keys);

const values = Object.values(BookHub);
console.log(values);