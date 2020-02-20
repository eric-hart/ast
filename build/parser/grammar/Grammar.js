"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _CanGenerateNode = _interopRequireDefault(require("../interface/CanGenerateNode"));

var _GrammarUseEnum = _interopRequireDefault(require("../enum/GrammarUseEnum"));

var _GrammarEnum = _interopRequireDefault(require("../enum/GrammarEnum"));

var _UndoneException = _interopRequireDefault(require("../error/UndoneException"));

class Grammar {
  constructor() {
    this.use = _GrammarUseEnum.default.using;
    this.name = 'Grammar';
    this.index = 0;
    this.node = null;
    this.unit = null;
    this.rules = [''];
    this.stack = [];
    this.status = _GrammarEnum.default.unknown;
  }

  reset() {
    this.index = 0;
    this.unit = null;
    this.stack = [];
    this.status = _GrammarEnum.default.unknown;
  }

  shift({
    unit
  }) {
    const {
      rules,
      index
    } = this;
    const rule = rules[index];
    this.unit = unit;

    if (index > 0) {
      const lastRule = rules[index - 1];

      if (new RegExp(lastRule).test(unit.toString())) {
        this.setStatus({
          status: _GrammarEnum.default.update
        });
        return;
      }
    }

    if (new RegExp(rule).test(unit.toString())) {
      if (index === rules.length - 1) {
        this.setStatus({
          status: _GrammarEnum.default.fulfil
        });
      } else {
        this.setStatus({
          status: _GrammarEnum.default.receive
        });
      }

      this.index += 1;
    }
  }

  setStatus({
    status
  }) {
    const {
      unit
    } = this;

    switch (status) {
      case _GrammarEnum.default.update:
        this.stack.pop();
        this.stack.push(unit);
        break;

      case _GrammarEnum.default.receive:
        this.stack.push(unit);
        break;

      case _GrammarEnum.default.fulfil:
        this.stack.push(unit);
        this.node = this.generateNode();
        break;

      default:
        break;
    }

    this.status = status;
  }

  generate() {
    switch (this.status) {
      case _GrammarEnum.default.fulfil:
        this.reset();
        return this.node;

      default:
        throw new _UndoneException.default();
    }
  }

}

var _default = Grammar;
exports.default = _default;