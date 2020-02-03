// Object and array syntax

// Object literal
const point = {x: 1, y:2};
console.log(point);

console.log(point.x);

point.x = 3;

const circle = {
  center: point,
  radius: 4
};

console.log(circle.center)
console.log(circle.radius)

// Array
const languages = ['HTML', 'CSS', 'JS']
console.log(languages)

// Accessing length and elements
for(let i=0; i < languages.length; i++){
  console.log(languages[i]);
}

// Changing elements
languages[2] = 'JavaScript'

languages.push('MongoDB')

for (const lang of languages){
  console.log(lang)
}

const avg = function(a,b) {
  return (a + b) / 2;
};

const print = function(a,b) {
  console.log(`a=${a}, b=${b}`);
};

// Undefined values
const result = print(7,8);
console.log(result); // Logs undefined
print(9,10); // 9, undefined
print() // undefined, undefined

// Object literal with a method
const rectangle = {
  width: 10,
  height: 20,
  area: function(){
    return this.width * this.height
  }
};

// Method call
console.log(rectangle.area())

const Rectangle = function(width, height) {
  this.width = width;
  this.height = height;
};

// Shared Method
Rectangle.prototype.area = function(){
  return this.width * this.height;
}

const small = new Rectangle(1,2);
const large = new Rectangle(10,20);

console.log(small.area());
console.log(large.area());

// Create an array of objects representing the courses you are taking this semester.
// Each course should have a subject (e.g. 'CS') and a number (e.g. 332).
// Iterate through this array to find the largest course number in your schedule.
const Course = function(subject, number){
  this.subject = subject;
  this.number = number;
}

const course1 = new Course("CS", 332);
const course2 = new Course("CS", 364);
const course3 = new Course("CS", 498);
const course4 = new Course("Math", 498);
const classes = [course1, course2, course3, course4];
console.log(classes)


// Define a constructor function for Book objects. Each book should have a title and an array of authors.
// Define a shared method for books that lets you check whether a given author was one of the authors in this book.

const Book = function(title, authors){
  this.title = title;
  this.authors = authors;
}

Book.prototype.is_author = function(author){
  return this.authors.includes(author);
}

const book1 = new Book("It", ["Steven King"]);
const book2 = new Book("The Great Gatsby", ["F. Scott Fitzgerald"]);
const book3 = new Book("Test", ["Kira","Tim"])

console.log(book1.is_author("Steven King"));
console.log(book2.is_author("Steven King"));
console.log(book3.is_author("Jonas"));


// Define a function that works like the range function in Python.
// For example, range(5) returns [0,1,2,3,4] and range(3,8) returns [3,4,5,6,7].
const range = function(a,b){
  array = [];
  if(b === undefined){
    for(let i=0; i<a; i++){
      array[i]=i;
    }
  } else{
    for(let i=a i<b; i++){
      array[i] = i;
    }
  }
  return array;
};

console.log(range(5));
console.log(range(3,8));
