"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Lexer = _interopRequireDefault(require("./Lexer"));

var _Operator = _interopRequireDefault(require("./token/arithmetic/Operator"));

var _Number = _interopRequireDefault(require("./token/arithmetic/Number"));

class ArithmeticLexer extends _Lexer.default {
  constructor() {
    super();
  }
  /**
   * @method
   *
   * <Number>        <Operator>         <Else>
   *  [0-9]<-        [\+\-\*\/]          else
   * || 0 ||  ----->  || 1 ||   ----->  || 2 ||
   */


  readChar({
    char
  }) {
    this.char = char;

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
      status: previousStatus
    } = this;
    /**
     *    -------
     * || 0 || <-|
     */

    if (status == 0) {
      this.addBuffer({
        char: this.char
      });
    }
    /**
     * || 0 || ->
     */


    if (previousStatus == 0 && status != 0) {
      let lexeme = this.getBuffer();
      let token = new _Number.default({
        lexeme
      });
      this.tokens.push(token);
    }
    /**
     * -> || 1 ||
     */


    if (status == 1) {
      let lexeme = this.char;
      let token = new _Operator.default({
        lexeme
      });
      this.tokens.push(token);
    } // update status value


    this.status = status;
  }

}

var _default = ArithmeticLexer;
exports.default = _default;