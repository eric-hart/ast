"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _GrammerEnum = _interopRequireDefault(require("./enum/GrammerEnum"));

var _ParserEnum = _interopRequireDefault(require("./enum/ParserEnum"));

class Parser {
  constructor() {
    this.grammers = [];
    this.grammer = null;
    this.top = null;
    this.status = _ParserEnum.default.shift;
  }

  traverseGrammers({
    unit
  }) {
    traverse: {
      for (const grammer of this.grammers) {
        this.grammer = grammer;
        grammer.shift({
          unit
        });

        switch (grammer.status) {
          case _GrammerEnum.default.fulfil:
            this.setStatus({
              status: _ParserEnum.default.fulfil
            });
            break traverse;

          case _GrammerEnum.default.fulfil:
            this.setStatus({
              status: _ParserEnum.default.shift
            });
            break traverse;
        }
      }
    }
  }

  setStatus({
    status
  }) {
    switch (status) {
      case _ParserEnum.default.fulfil:
        const node = this.grammer.generate();
        this.top = node;
        this.traverseGrammers({
          unit: node
        });
        break;

      case _ParserEnum.default.shift:
        const {
          token
        } = this;

        if (this.index != this.tokens.length - 1) {
          this.traverseGrammers({
            unit: token
          });
        }

        break;
    }

    this.status = status;
  }

  analyze({
    tokens
  }) {
    this.tokens = tokens;

    for (let index = 0; index < tokens.length; index += 1) {
      this.index = index;
      const token = tokens[index];
      this.traverseGrammers({
        unit: token
      });
    }
  }

}

var _default = Parser;
exports.default = _default;