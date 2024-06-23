import {pipe, delay, switchMap, mapTo} from 'rxjs';
import {ofType} from 'redux-observable';
import {ActionTypes} from './../actions/actionTypes';
import {
  toSuccessAction,
  apiError,
  handleError,
  handleApiError,
} from './../actions/commonActionCreators';
import {loginSuccessfully} from './../actions/loginActionCreators';
import {API_URL} from './../configs/server';
import ApiUtils from './../utils/apiUtils';

export const loginEpic = action$ => {
  return action$.pipe(
    ofType(ActionTypes.LOGIN),
    switchMap(action =>
      fetch(API_URL + 'users/login', {
        headers: ApiUtils.getHeader(),
        method: 'POST',
        body: JSON.stringify(action.payload),
      })
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return handleApiError(response);
        })
        .then(responseJsonOrApiError => {
          if (responseJsonOrApiError.success) {
            return loginSuccessfully(responseJsonOrApiError);
          }
          return responseJsonOrApiError;
        })
        .catch(error => {
          return handleError(error);
        }),
    ),
  );
};
