import Store from '~/src/compiler/store/Store';

class Memory extends Store {
  constructor() {
    super();
    this.type = 'Memory';
  }
}

export default Memory;
