"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ReduceDegreeOfTree = _interopRequireDefault(require("../common/algorithm/ReduceDegreeOfTree"));

var _CanEvaluateTip = _interopRequireDefault(require("./interface/CanEvaluateTip"));

class Interpreter extends _ReduceDegreeOfTree.default {
  interpret({
    tree
  }) {
    this.tree = tree;

    while (Array.isArray(this.tree.units)) {
      this.findTipsOfTree({
        point: tree
      });
      this.evaluateTip();
      this.reduceDeepOfTree();
    }

    this.value = this.tree.value;
  }

}

var _default = Interpreter;
exports.default = _default;