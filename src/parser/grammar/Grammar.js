import CanGenerateNode from '~/src/parser/interface/CanGenerateNode';
import GrammarUseEnum from '~/src/parser/enum/GrammarUseEnum';
import GrammarEnum from '~/src/parser/enum/GrammarEnum';
import UndoneException from '~/src/parser/error/UndoneException';

class Grammar implements CanGenerateNode {
  constructor() {
    this.use = GrammarUseEnum.using;
    this.name = 'Grammar';

    this.index = 0;
    this.node = null;
    this.unit = null;

    this.rules = [''];
    this.stack = [];

    this.status = GrammarEnum.unknown;
  }

  reset() {
    this.index = 0;
    this.unit = null;

    this.stack = [];
    this.status = GrammarEnum.unknown;
  }

  shift({ unit }) {
    const { rules, index } = this;
    const rule = rules[index];
    this.unit = unit;

    if (index > 0) {
      const lastRule = rules[index - 1];
      if (new RegExp(lastRule).test(unit.toString())) {
        this.setStatus({ status: GrammarEnum.update });
        return;
      }
    }

    if (new RegExp(rule).test(unit.toString())) {
      if (index === rules.length - 1) {
        this.setStatus({ status: GrammarEnum.fulfil });
      } else {
        this.setStatus({ status: GrammarEnum.receive });
      }
      this.index += 1;
    }
  }

  setStatus({ status }) {
    const { unit } = this;
    switch (status) {
      case GrammarEnum.update:
        this.stack.pop();
        this.stack.push(unit);
        break;
      case GrammarEnum.receive:
        this.stack.push(unit);
        break;
      case GrammarEnum.fulfil:
        this.stack.push(unit);
        this.node = this.generateNode();
        break;
      default:
        break;
    }
    this.status = status;
  }

  generate() {
    switch (this.status) {
      case GrammarEnum.fulfil:
        this.reset();
        return this.node;
      default:
        throw new UndoneException();
    }
  }
}

export default Grammar;
