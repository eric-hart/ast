"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Operator = _interopRequireDefault(require("./token/arithmetic/Operator"));

var _Number = _interopRequireDefault(require("./token/arithmetic/Number"));

require("./interface/LexerInterface");

var _NoScanException = _interopRequireDefault(require("./error/NoScanException"));

/**
 * @class Lexer base class.
 *
 *  <Text>                <tokens>
 * |      |   scan
 * | text | -------> [token, token, ...]
 * |      |
 */
class Lexer {
  /**
   * @constructor
   *
   *   begin            forward
   *    |                 |
   *    v                 v
   * | char | | char | | char| | char | ...
   *                      ^
   *                      |
   *                     char
   */
  constructor() {
    this.begin = 0;
    this.forward = 0;
    this.char = '';
    this.status = 0;
    this.tokens = [];
    this.isScaned = false;
    this.buffer = [];
  }
  /**
   * @method
   *          char
   *           |
   *           v
   * [scan] | --->
   *        | char | | char | | char | ... | EOF |
   *           ^
   *           |
   *       [readChar]
   */


  scan({
    text
  }) {
    for (let index = 0; index < text.length; index += 1) {
      let char = text[index];

      if (new RegExp('[\\s\\n]').test(char)) {
        continue;
      }

      this.readChar({
        char
      });
      this.begin += 1;
      this.forward += 1;
    } // scan finished


    this.readChar({
      char: 'EOF'
    });
    this.isScaned = true;
  }
  /**
   * @method
   */


  addBuffer({
    char
  }) {
    this.buffer.push(char);
  }
  /**
   * @method
   */


  getBuffer() {
    const string = this.buffer.join('');
    this.buffer = [];
    return string;
  }
  /**
   * @method
   */


  getTokens() {
    if (this.isScaned) {
      return this.tokens;
    } else {
      throw new _NoScanException.default();
    }
  }

}

var _default = Lexer;
exports.default = _default;