import {makeAutoObservable, makeObservable} from 'mobx';
import {computed, action, observable} from 'mobx-react';

class MyStore {
  constructor() {
    makeAutoObservable(this);
    // makeObservable(this, {
    //   countMsg: computed,
    //   insCount: action,
    //   count: observable,
    // });
  }

  // @oversable
  count = 1;

  // @action
  insCount() {
    this.count++;
  }

  // @computed
  get countMsg() {
    return `Count = ${this.count}`;
  }
}
export default MyStore;
