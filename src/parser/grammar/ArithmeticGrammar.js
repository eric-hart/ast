import GrammarUseEnum from '~/src/parser/enum/GrammarUseEnum';
import Grammar from '~/src/parser/grammar/Grammar';
import Expression from '~/src/parser/node/Expression';

/**
 * @class
 * <Factor> <Operator, [+-]> <Factor> --> <Expression>
 */
class ArithmeticGrammar extends Grammar {
  constructor() {
    super();
    this.name = 'ArithmeticGrammar';
    this.rules = ['^<Factor>$', '^<Operator, [\\+\\-\\*\\/]>$', '^<Factor>$'];
  }

  generateNode() {
    const [factor1, operator, factor2] = this.stack;
    const units = [factor1, factor2];
    const node = new Expression({ operator, units });
    this.use = GrammarUseEnum.disabled;
    return node;
  }
}

export default ArithmeticGrammar;
