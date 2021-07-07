import {ActionTypes} from './reduxActionTypes';

export const create = item => ({
  type: ActionTypes.CREATE,
  payload: item,
});

export const delete_ = item => ({
  type: ActionTypes.DELETE,
  payload: item,
});
