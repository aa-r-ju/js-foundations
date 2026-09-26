/* eslint-disable no-unused-vars */
class Media {
  constructor(title, yearOfRelease) {
    this.title = title;
    this.yearOfRelease = yearOfRelease;
    this.ratings = [];
  }
  getTitle() {
    return this.title;
  }
  getYearOfRelease() {
    return this.yearOfRelease;
  }
  addRating(val) {
    if (val < 1 || val > 100) {
      return `${val} is not a valid rating, ratings must be 1-100`;
    }
    this.ratings.push(val);
  }
  getAverageRating() {
    if (this.ratings.length === 0) {
      return "this is not rated";
    }
    let add = this.ratings.reduce((acc, curr) => {
      acc += curr;
      return acc;
    }, 0);
    return add / this.ratings.length;
  }
}
