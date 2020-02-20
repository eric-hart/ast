import Grammar from '~/src/parser/grammar/Grammar';
import Factor from '~/src/parser/node/Factor';

/**
 * @class
 * <Integer, [0-9]+> --> <Factor>
 */
class FactorGrammar extends Grammar {
  constructor() {
    super();
    this.name = 'FactorGrammar';
    this.rules = ['^<Integer, \\w+>$'];
  }

  generateNode() {
    const [number] = this.stack;
    const factor = new Factor({ token: number });
    return factor;
  }
}

export default FactorGrammar;
