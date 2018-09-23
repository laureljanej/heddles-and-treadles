import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import thePattern from './thePatternReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  fuelSavings,
  thePattern,
  routing: routerReducer
});

export default rootReducer;
