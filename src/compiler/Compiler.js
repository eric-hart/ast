import ReduceDegreeOfTree from '~/src/common/algorithm/ReduceDegreeOfTree';
import CanGenerateSentence from '~/src/compiler/interface/CanGenerateSentence';

class Compiler extends ReduceDegreeOfTree implements CanGenerateSentence {
  translate({ tree }) {
    this.tree = tree;
    while (Array.isArray(this.tree.units)) {
      this.findTipsOfTree({ point: tree });
      this.generateSentences();
      this.reduceDeepOfTree();
    }
  }
}

export default Compiler;
