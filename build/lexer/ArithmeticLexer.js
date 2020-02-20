"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Lexer = _interopRequireDefault(require("./Lexer"));

var _Operator = _interopRequireDefault(require("./token/arithmetic/Operator"));

var _Integer = _interopRequireDefault(require("./token/arithmetic/Integer"));

/**
 * @class
 *
 *  <Integer>       <Operator>      <Unexpect>
 *    [0-9]         [\+\-\*\/]
 *   || 0 ||         || 1 ||         || -1 ||
 *
 */
class ArithmeticLexer extends _Lexer.default {
  constructor() {
    super();
    this.name = 'ArithmeticLexer';
  }

  readChar() {
    const {
      char
    } = this;

    switch (true) {
      case new RegExp('[0-9]').test(char):
        this.setStatus({
          status: 0
        });
        break;

      case new RegExp('[\\+\\-\\*\\/]').test(char):
        this.setStatus({
          status: 1
        });
        break;

      default:
        this.setStatus({
          status: 2
        });
        break;
    }
  }

  setStatus({
    status
  }) {
    const {
      status: prevStatus
    } = this;

    switch (prevStatus) {
      case 0:
        switch (status) {
          case 0:
            this.addBuffer();
            break;

          case 1:
            this.generateInteger();
            this.generateOperator();
            break;

          default:
            this.generateInteger();
            break;
        }

        break;

      default:
        switch (status) {
          case 0:
            this.addBuffer();
            break;

          case 1:
            this.generateOperator();
            break;

          default:
            break;
        }

        break;
    }

    this.status = status;
  }

  generateOperator() {
    this.token = new _Operator.default({
      lexeme: this.char
    });
    this.tokens.push(this.token);
  }

  generateInteger() {
    this.token = new _Integer.default({
      lexeme: this.getLexeme()
    });
    this.tokens.push(this.token);
  }

}

var _default = ArithmeticLexer;
exports.default = _default;