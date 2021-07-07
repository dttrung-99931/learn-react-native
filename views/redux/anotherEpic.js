import {pipe, mapTo, delay} from 'rxjs';
import {tap} from 'rxjs/operators';
import {des} from './actionCreaters';
import {ofType} from 'redux-observable';
import {ACTION_TYPES} from './actionTypes';

export const anotherEpic = action$ => {
  return action$.pipe(
    tap(action => console.log('another epic')),
    ofType(ACTION_TYPES.COUNTER_INS),
    delay(1000),
    mapTo(des()),
  );
};
