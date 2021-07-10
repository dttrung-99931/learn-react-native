import {ActionTypes} from './../actions/actionTypes';
import {toSuccessActionType} from './../actions/commonActionCreators';
import {initialState} from './../store/initalState';

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN:
      console.log('LOGIN action');
      return state;
    case toSuccessActionType(ActionTypes.LOGIN):
      console.log('LOGIN successfully');
      return {...state, success: !state.success};
    default:
      return state;
  }
};
