import {ActionTypes} from './actionTypes';
import {toSuccessAction} from './commonActionCreators';

export const login = (email, password) => {
  return {
    type: ActionTypes.LOGIN,
    payload: {
      email: email,
      password: password,
    },
  };
};

export const loginSuccessfully = payload => {
  return toSuccessAction(ActionTypes.LOGIN, payload);
};
