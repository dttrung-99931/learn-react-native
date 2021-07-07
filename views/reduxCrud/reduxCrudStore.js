import {createStore, combineReducers} from 'redux';
// import {combineEpics} from 'redux-observable';
import {crudEpic} from './reduxCrudEpic';
import {crudReducer} from './reduxCrudReducer';

// const epics = combineEpics(crudEpic);
// const reducers = combineReducers(crudReducer);
export const crudStore = createStore(crudReducer);
