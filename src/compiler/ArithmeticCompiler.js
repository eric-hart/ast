import UnexpectTypeException from '~/src/common/error/UnexpectTypeException';
import Store from '~/src/compiler/store/Store';
import Compiler from '~/src/compiler/Compiler';
import PlaceEnum from '~/src/compiler/enum/PlaceEnum';

/**
 * @class
 * <Factor1> <Operator> <Factor> ->
 *
 * 1. Store\\[[0-9]\\] = <Factor1>.value
 * 2. Store\\[[0-9]\\] = Store\\[[0-9]\\] <Operator> <Factor2>.value
 */
class ArithmeticCompiler extends Compiler {
  constructor() {
    super();
    this.index = 0;
    this.tip = null;

    this.operator = '';
    this.stores = [];
    this.lexemes = [];
    this.place = PlaceEnum.left;
  }

  cleanUpContext() {
    this.operator = '';
    this.stores = [];
    this.lexemes = [];
    this.place = PlaceEnum.left;
  }

  fillContextFromLeaf({ leaf }) {
    const serialize = leaf.toString();
    switch (true) {
      case (new RegExp('^<Factor>$').test(serialize)):
        this.lexemes.push(leaf.token.lexeme);
        break;
      case (new RegExp('^Store\\[[0-9]+\\]$').test(serialize)):
        if (this.lexemes.length > 0) {
          this.place = PlaceEnum.right;
        }
        this.stores.push(leaf);
        break;
      default:
        throw new UnexpectTypeException();
    }
  }

  fillContextFromExpression() {
    const { operator, units } = this.tip;
    this.operator = operator.lexeme;
    units.forEach((unit) => {
      this.fillContextFromLeaf({ leaf: unit });
    });
  }

  fillContext() {
    const serialize = this.tip.toString();
    switch (serialize) {
      case '<Expression>':
        this.fillContextFromExpression();
        break;
      default:
        throw new UnexpectTypeException();
    }
  }

  generateStore() {
    const { index } = this;
    const store = new Store({ index });
    this.index += 1;
    return store;
  }

  generateSentencesStoreZero() {
    const { operator } = this;
    const [operand1, operand2] = this.lexemes;
    const store = this.generateStore();
    this.sentences.push(store + ' = ' + operand1);
    this.sentences.push(store + ' = ' + store + ' ' + operator + ' ' + operand2);
    this.alternates.push(store);
  }

  generateSentencesStoreOne() {
    const { operator } = this;
    const [operand] = this.lexemes;
    const [store] = this.stores;
    switch (this.place) {
      case PlaceEnum.left:
        this.sentences.push(store + ' = ' + store + ' ' + operator + ' ' + operand);
        break;
      case PlaceEnum.right:
        this.sentences.push(store + ' = ' + operand + ' ' + operator + ' ' + store);
        break;
      default:
        break;
    }
    this.alternates.push(store);
  }

  generateSentencesStoreTwo() {
    const { operator } = this;
    const [store1, store2] = this.stores;
    this.sentences.push(store2 + ' = ' + store1 + ' ' + operator + ' ' + store2);
    this.alternates.push(store2);
  }

  generateSentences() {
    this.tips.forEach((tip) => {
      this.tip = tip;
      this.fillContext();
      switch (this.stores.length) {
        case 0:
          this.generateSentencesStoreZero();
          break;
        case 1:
          this.generateSentencesStoreOne();
          break;
        case 2:
          this.generateSentencesStoreTwo();
          break;
        default:
          break;
      }
      this.cleanUpContext();
    });
  }
}

export default ArithmeticCompiler;
