import UnexpectTypeException from '~/src/common/error/UnexpectTypeException';
import Interpreter from '~/src/interpreter/Interpreter';
import Digit from '~/src/interpreter/value/Digit';

/**
 * @class
 *
 * (Value) = Number(<Factor>.valuej) <Operator> Number(<Factor>.value)
 *
 */
class ArithmeticInterpreter extends Interpreter {
  constructor() {
    super();
    this.operator = '';
    this.values = [];
  }

  cleanUpContext() {
    this.operator = '';
    this.values = [];
  }

  fillContextFromLeaf({ leaf }) {
    const serialize = leaf.toString();
    switch (true) {
      case (new RegExp('^<Factor>$').test(serialize)):
        this.values.push(leaf.token.lexeme);
        break;
      case (new RegExp('^\\(Digit\\)$').test(serialize)):
        this.values.push(leaf.value);
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

  appendAlternates() {
    const digit = new Digit();
    digit.value = this.value;
    this.alternates.push(digit);
  }

  evaluateFromExpression() {
    this.fillContextFromExpression();
    const [operand1, operand2] = this.values;
    switch (this.operator.toString()) {
      case '+':
        this.value = Number(operand1) + Number(operand2);
        break;
      case '-':
        this.value = Number(operand1) - Number(operand2);
        break;
      case '*':
        this.value = Number(operand1) * Number(operand2);
        break;
      case '/':
        this.value = Number(operand1) / Number(operand2);
        break;
      default:
        break;
    }
    this.appendAlternates();
  }

  evaluateFromTip() {
    const serialize = this.tip.toString();
    switch (serialize) {
      case '<Expression>':
        this.evaluateFromExpression();
        break;
      default:
        throw new UnexpectTypeException();
    }
  }

  evaluateTip() {
    this.tips.forEach((tip) => {
      this.tip = tip;
      this.evaluateFromTip();
      this.cleanUpContext();
    });
  }
}

export default ArithmeticInterpreter;
