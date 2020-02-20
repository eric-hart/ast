import GrammarUseEnum from '~/src/parser/enum/GrammarUseEnum';
import GrammarEnum from '~/src/parser/enum/GrammarEnum';
import ParserEnum from '~/src/parser/enum/ParserEnum';

class Parser {
  constructor() {
    this.name = 'Parser';
    this.grammars = [];

    this.grammar = null;
    this.top = null;

    this.status = ParserEnum.shift;
  }

  iterateGrammars({ unit }) {
    for (const grammar of this.grammars) {
      if (grammar.use === GrammarUseEnum.using) {
        this.grammar = grammar;
        grammar.shift({ unit });

        switch (grammar.status) {
          case GrammarEnum.fulfil:
            this.setStatus({ status: ParserEnum.fulfil });
            return;
          default:
            break;
        }
      }
    }
  }

  setStatus({ status }) {
    switch (status) {
      case ParserEnum.fulfil:
        this.top = this.grammar.generate();
        this.iterateGrammars({ unit: this.top });
        break;
      case ParserEnum.shift:
        this.iterateGrammars({ unit: this.token });
        break;
      default:
        break;
    }
    this.status = status;
  }

  analyze({ tokens }) {
    this.tokens = tokens;
    for (const token of tokens) {
      this.token = token;
      this.index += 1;
      this.setStatus({ status: ParserEnum.shift });
    }
    return this.top;
  }
}

export default Parser;
