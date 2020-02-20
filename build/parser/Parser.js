"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _GrammarUseEnum = _interopRequireDefault(require("./enum/GrammarUseEnum"));

var _GrammarEnum = _interopRequireDefault(require("./enum/GrammarEnum"));

var _ParserEnum = _interopRequireDefault(require("./enum/ParserEnum"));

class Parser {
  constructor() {
    this.name = 'Parser';
    this.grammars = [];
    this.grammar = null;
    this.top = null;
    this.status = _ParserEnum.default.shift;
  }

  iterateGrammars({
    unit
  }) {
    for (const grammar of this.grammars) {
      if (grammar.use === _GrammarUseEnum.default.using) {
        this.grammar = grammar;
        grammar.shift({
          unit
        });

        switch (grammar.status) {
          case _GrammarEnum.default.fulfil:
            this.setStatus({
              status: _ParserEnum.default.fulfil
            });
            return;

          default:
            break;
        }
      }
    }
  }

  setStatus({
    status
  }) {
    switch (status) {
      case _ParserEnum.default.fulfil:
        this.top = this.grammar.generate();
        this.iterateGrammars({
          unit: this.top
        });
        break;

      case _ParserEnum.default.shift:
        this.iterateGrammars({
          unit: this.token
        });
        break;

      default:
        break;
    }

    this.status = status;
  }

  analyze({
    tokens
  }) {
    this.tokens = tokens;

    for (const token of tokens) {
      this.token = token;
      this.index += 1;
      this.setStatus({
        status: _ParserEnum.default.shift
      });
    }

    return this.top;
  }

}

var _default = Parser;
exports.default = _default;