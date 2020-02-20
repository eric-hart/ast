import Grammar from '~/src/parser/grammar/Grammar';
import Expression from '~/src/parser/node/Expression';

/**
 * @class
 * <Expression> <Operator, [+-]> <Factor> --> <Expression>
 */
class AddRecurseGrammar extends Grammar {
  constructor() {
    super();
    this.name = 'AddRecurseGrammar';
    this.rules = ['^<Expression>$', '^<Operator, [\\+\\-]>$', '^<Factor>$'];
  }

  generateNode() {
    const [expression, operator, factor] = this.stack;
    const units = [expression, factor];
    const node = new Expression({ operator, units });
    return node;
  }
}

export default AddRecurseGrammar;
