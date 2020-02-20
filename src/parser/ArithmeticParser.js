import MultiplyRecurseGrammar from '~/src/parser/grammar/MultiplyRecurseGrammar';
import AddRecurseGrammar from '~/src/parser/grammar/AddRecurseGrammar';
import ArithmeticGrammar from '~/src/parser/grammar/ArithmeticGrammar';
import FactorGrammar from '~/src/parser/grammar/FactorGrammar';
import Parser from '~/src/parser/Parser';

class ArithmeticParser extends Parser {
  constructor() {
    super();
    this.name = 'ArithmeticParser';

    this.grammars.push(new FactorGrammar());
    this.grammars.push(new ArithmeticGrammar());
    this.grammars.push(new AddRecurseGrammar());
    this.grammars.push(new MultiplyRecurseGrammar());
  }
}

export default ArithmeticParser;
