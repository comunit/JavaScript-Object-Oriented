class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
}

// magazine subclass
class Magazine extends Book {
  constructor(title ,author, year, month) {
    super(title, author, year, month);
    this.month = month;
  }
}

// instantite magzine
const mag1 = new Magazine('Mag one', 'john doe', '2018', 'jan');

console.log(mag1.getSummary());

