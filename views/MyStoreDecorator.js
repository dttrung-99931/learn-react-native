import {observable, computed, action, makeObservable} from 'mobx';

class MyStoreDecorator {
  constructor() {
    makeObservable(this);
  }

  @observable
  count = 1;

  @action insCount() {
    this.count++;
  }

  @computed
  get countMsg() {
    return `Count = ${this.count}`;
  }
}
export default MyStoreDecorator;
