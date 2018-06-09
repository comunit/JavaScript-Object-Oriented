const book1 = {
  title: 'Book One',
  author: 'Imran Rafique',
  year: '2013',
  getSummary: function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
}

console.log(book1.getSummary());
