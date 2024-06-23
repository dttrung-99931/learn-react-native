import {ActionTypes} from './actionTypes';
import {ApiErrorCode} from './../configs/server';

export const toSuccessAction = (actionType, payload) => {
  return {
    type: toSuccessActionType(actionType),
    payload: payload,
  };
};

export const action = (actionType, payload) => {
  return {
    type: actionType,
    payload: payload,
  };
};

export const apiError = (errorCode, msg) => {
  return action(ActionTypes.API_ERROR, {
    success: false,
    errorCode: errorCode,
    msg: msg,
  });
};

export const error = error => {
  return action(ActionTypes.ERROR, {
    success: false,
  });
};

export const handleError = error_ => {
  console.log(`Error ${error_}`);
  return error(error_);
};

export const handleApiError = errorResponse => {
  console.log(`API error ${JSON.stringify(errorResponse)}`);
  return apiError(ApiErrorCode.UNAUTHORIZED);
};

export const toSuccessActionType = actionType => 'SUCCESS_' + actionType;
