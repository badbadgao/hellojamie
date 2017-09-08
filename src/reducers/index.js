import { combineReducers } from 'redux';

import accountlinks from './accountlinks';
import locations from './locationlist';

export default combineReducers({
  accountlinks,
  locations
});
