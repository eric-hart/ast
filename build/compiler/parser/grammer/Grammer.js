"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _GrammerInterface = _interopRequireDefault(require("../interface/GrammerInterface"));

var _GrammerEnum = _interopRequireDefault(require("../enum/GrammerEnum"));

var _UndoneException = _interopRequireDefault(require("../error/UndoneException"));

class Grammer {
  constructor() {
    this.name = 'Grammer';
    this.index = 0;
    this.node = null;
    this.unit = null;
    this.rules = [''];
    this.stack = [];
    this.status = _GrammerEnum.default.reject;
  }

  reset() {
    this.index = 0;
    this.node = null;
    this.unit = null;
    this.stack = [];
    this.status = _GrammerEnum.default.reject;
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

    if (new RegExp(rule).test(unit.toString())) {
      if (index == rules.length - 1) {
        this.setStatus({
          status: _GrammerEnum.default.fulfil
        });
      } else {
        this.setStatus({
          status: _GrammerEnum.default.receive
        });
      }

      this.index += 1;
    } else {
      if (index == rules.length - 1) {
        this.setStatus({
          status: _GrammerEnum.default.reject
        });
      } else {
        this.setStatus({
          status: _GrammerEnum.default.pending
        });
      }
    }
  }

  setStatus({
    status
  }) {
    const {
      unit
    } = this;

    switch (status) {
      case _GrammerEnum.default.pending:
        break;

      case _GrammerEnum.default.reject:
        this.reset();
        break;

      case _GrammerEnum.default.receive:
        this.stack.push(unit);
        break;

      case _GrammerEnum.default.fulfil:
        this.stack.push(unit);
        this.node = this.generateNode();
        break;
    }

    this.status = status;
  }

  generate() {
    switch (this.status) {
      case _GrammerEnum.default.fulfil:
        const {
          node
        } = this;
        this.reset();
        return node;

      default:
        throw new _UndoneException.default();
    }
  }

}

var _default = Grammer;
exports.default = _default;