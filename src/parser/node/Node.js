class Node {
  constructor() {
    this.label = 'Node';
    this.backtrack = null;
  }

  toString() {
    return '<' + this.label + '>';
  }
}

export default Node;
