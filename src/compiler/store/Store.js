class Store {
  constructor({ index }) {
    this.index = index;
    this.type = 'Store';
  }

  toString() {
    const { index, type } = this;
    return type + '[' + index + ']';
  }
}

export default Store;
