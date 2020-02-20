import Node from '~/src/parser/node/Node';

class Expression extends Node {
  constructor({ operator, units }) {
    super();
    this.label = 'Expression';
    this.operator = operator;
    this.units = units;
    this.bindBacktrack();
  }

  bindBacktrack() {
    for (const unit of this.units) {
      unit.backtrack = this;
    }
  }
}

export default Expression;
