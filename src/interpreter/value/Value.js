class Value {
  constructor() {
    this.type = 'Value';
    this.value = undefined;
  }

  toString() {
    const { type } = this;
    return '(' + type + ')';
  }
}

export default Value;
