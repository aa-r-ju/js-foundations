/* eslint-disable no-unused-vars, no-prototype-builtins */

const bookPrototype = {
  getPrice: function () {
    return this.price;
  },

  getInfo: function () {
    return `${this.title} by ${this.author}`;
  },

  addRating: function (rate) {
    this.rating.push(rate);
  },

  getRating: function () {
    let sum = 0;

    for (let i = 0; i < this.rating.length; i++) {
      sum += this.rating[i].length;
    }

    return sum / this.rating.length;
  },
};

function createBook(id, title, author, price) {
  const book = Object.create(bookPrototype);

  book.id = id;
  book.title = title;
  book.author = author;
  book.price = price;
  book.rating = [];

  return book;
}

const book = createBook(1, "Catch 22", "Joseph Heller", 19.99);
console.log(book.hasOwnProperty("id"));
console.log(book.hasOwnProperty("title"));
console.log(book.hasOwnProperty("author"));
console.log(book.hasOwnProperty("price"));
console.log(book.hasOwnProperty("rating"));
console.log(book.hasOwnProperty("getInfo"));
