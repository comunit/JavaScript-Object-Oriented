// constructor
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

// get summary
Book.prototype.getSummary = function() {
  return `${this.title} was written by ${this.author} in ${this.year}`;
};

// get age
Book.prototype.getAge = function() {
  const years = new Date().getFullYear() - this.year;
  return `${this.title} is ${years} years old`;
}

// revise
Book.prototype.revise = function(newYear) {
  this.year = newYear;
  this.revised = true;
}

// instantiate object
const book1 = new Book('Book One', 'Imran Rafique', '2010');
const book2 = new Book('Book two', 'Imran Rafique 2', '2018');

console.log(book1);
book1.revise('2018');
console.log(book1);
