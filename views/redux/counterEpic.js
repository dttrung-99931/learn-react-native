import {mapTo, pipe, delay} from 'rxjs';
// import {tap} from 'rxjs/operators';
import {ofType} from 'redux-observable';
import {ACTION_TYPES} from './actionTypes';
import {des} from './actionCreaters';
import {tap} from 'rxjs/operators';

export const counterEpic = action$ => {
  return action$.pipe(
    tap(action => console.log('counter epic')),
    ofType(ACTION_TYPES.COUNTER_INS),
    delay(1000),
    mapTo(des()),
  );
};
