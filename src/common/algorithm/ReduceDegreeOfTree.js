class ReduceDegreeOfTree {
  constructor() {
    this.tree = null;
    this.sentences = [];

    this.tips = [];
    this.alternates = [];
  }

  findTipsOfTree({ point }) {
    if (Array.isArray(point.units)) {
      const result = point.units.every((unit) => {
        const check = !Array.isArray(unit.units);
        return check;
      });
      if (result) {
        this.tips.push(point);
      } else {
        for (const unit of point.units) {
          this.findTipsOfTree({ point: unit });
        }
      }
    }
  }

  reduceDeepOfTree() {
    this.tips.forEach((tip, idx) => {
      if (tip.backtrack instanceof Object) {
        if (Array.isArray(tip.backtrack.units)) {
          tip.backtrack.units.forEach((unit, num) => {
            if (unit === tip) {
              const { backtrack } = tip;
              backtrack.units[num] = this.alternates[idx];
            }
          });
        }
      } else {
        const [alternate] = this.alternates;
        this.tree = alternate;
      }
    });
    this.tips = [];
    this.alternates = [];
  }
}

export default ReduceDegreeOfTree;
