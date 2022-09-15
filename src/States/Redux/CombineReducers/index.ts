import { combineReducers } from 'redux';

import { userReducer } from '../Users/user.reducer';

export const rootReducer = combineReducers({
  user: userReducer,
});