import {createStore, combineReducers, applyMiddleware} from 'redux';
import {combineEpics, createEpicMiddleware} from 'redux-observable';
import {counterReducer} from './reduxCountReducer';
import {counterEpic} from './counterEpic';
import {anotherEpic} from './anotherEpic';

const epics = combineEpics(anotherEpic, counterEpic);
// const reducers = combineReducers(reducre1, reducer2, ..);
const middleware = createEpicMiddleware();

const store = createStore(counterReducer, applyMiddleware(middleware));

middleware.run(epics);

export default store;
