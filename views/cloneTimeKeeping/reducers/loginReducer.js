import {ActionTypes} from './../actions/actionTypes';
import {toSuccessActionType} from './../actions/commonActionCreators';
import {initialState} from './../store/initalState';

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN:
      console.log(`login ${JSON.stringify(action.payload)}`);
      return state;
    case ActionTypes.API_ERROR:
      console.log('API error');
      return {
        ...state,
        success: action.payload.success,
        errorCode: action.payload.errorCode,
        // Make field to make the returned state be always freshed
        // so that view always update even newState === oldState
        refresh: new Date().getTime(),
      };
    case ActionTypes.ERROR:
      return {
        ...action.payload,
        success: action.payload.success,
        errorCode: action.payload.errorCode,
      };
    case toSuccessActionType(ActionTypes.LOGIN):
      console.log('LOGIN successfully');
      return {
        ...state,
        success: true,
      };
    default:
      return state;
  }
};
