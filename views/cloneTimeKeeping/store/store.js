import {createStore, applyMiddleware} from 'redux';
import {loginReducer} from './../reducers/loginReducer';
import {createEpicMiddleware} from 'redux-observable';
import {loginEpic} from './../epics/loginEpic';

const middleware = createEpicMiddleware();
const store = createStore(loginReducer, applyMiddleware(middleware));
middleware.run(loginEpic);
export {store};
