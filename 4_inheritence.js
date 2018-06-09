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

// inherit
Magazine.prototype = Object.create(Book.prototype);

function Magazine(title, author, year, month) {
  Book.call(this, title, author, year);
  this.month = month;
}

// instantiate magazine obect
const mag1 = new Magazine('Mag One', 'auhthor doe', '2018', 'jan');

// use mag constructor
Magazine.prototype.constructor = Magazine;


console.log(mag1);
