import ReduceDegreeOfTree from '~/src/common/algorithm/ReduceDegreeOfTree';
import CanEvaluateTip from '~/src/interpreter/interface/CanEvaluateTip';

class Interpreter extends ReduceDegreeOfTree implements CanEvaluateTip {
  interpret({ tree }) {
    this.tree = tree;
    while (Array.isArray(this.tree.units)) {
      this.findTipsOfTree({ point: tree });
      this.evaluateTip();
      this.reduceDeepOfTree();
    }
    this.value = this.tree.value;
  }
}

export default Interpreter;
