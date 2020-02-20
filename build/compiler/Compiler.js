"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ReduceDegreeOfTree = _interopRequireDefault(require("../common/algorithm/ReduceDegreeOfTree"));

var _CanGenerateSentence = _interopRequireDefault(require("./interface/CanGenerateSentence"));

class Compiler extends _ReduceDegreeOfTree.default {
  translate({
    tree
  }) {
    this.tree = tree;

    while (Array.isArray(this.tree.units)) {
      this.findTipsOfTree({
        point: tree
      });
      this.generateSentences();
      this.reduceDeepOfTree();
    }
  }

}

var _default = Compiler;
exports.default = _default;