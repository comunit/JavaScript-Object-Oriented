// constructor
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.getSummary = function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
}

// instantiate object
const book1 = new Book('Book One', 'Imran Rafique', '2010');
const book2 = new Book('Book two', 'Imran Rafique 2', '2018');

console.log(book2);