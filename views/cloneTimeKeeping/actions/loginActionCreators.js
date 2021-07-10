import {ActionTypes} from './actionTypes';

export const login = (usernameOrEmail, password) => {
  return {
    type: ActionTypes.LOGIN,
    payload: {
      usernameOrEmail: usernameOrEmail,
      password: password,
    },
  };
};
