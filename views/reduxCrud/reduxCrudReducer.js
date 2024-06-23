import {ActionTypes} from './reduxActionTypes';

export const crudReducer = (state = [{key: 1, note: 'abc'}], action) => {
  switch (action.type) {
    case ActionTypes.CREATE:
      return [...state, action.payload];

    case ActionTypes.DELETE:
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
      return [...state];

    default:
      return state;
  }
};
