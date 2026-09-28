/* eslint-disable no-unused-vars */
class VM {
  constructor(inventory) {
    this.inventory = inventory;
  }
  sale(id) {
    this.inventory[id]["stock"]--;
    return `1 ${this.inventory[id]["name"]} - Thank you and come again!`;
  }

  stockTotal() {
    let tempArr = Object.values(this.inventory);
    let total = tempArr.reduce((acc, curr) => {
      acc += curr["stock"];
      return acc;
    }, 0);
    if (total === 0) {
      return "Out of Stock";
    }
    return `${total} item(s)`;
  }
}
