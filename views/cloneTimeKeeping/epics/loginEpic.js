import {pipe, delay, switchMap, mapTo} from 'rxjs';
import {ofType} from 'redux-observable';
import {ActionTypes} from './../actions/actionTypes';
import {toSuccessAction} from './../actions/commonActionCreators';

export const loginEpic = action$ => {
  return action$.pipe(
    ofType(ActionTypes.LOGIN),
    delay(2000),
    mapTo(toSuccessAction(ActionTypes.LOGIN)),
  );
};
