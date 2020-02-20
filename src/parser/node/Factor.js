import Node from '~/src/parser/node/Node';

class Factor extends Node {
  constructor({ token }) {
    super();
    this.label = 'Factor';
    this.token = token;
  }
}

export default Factor;
