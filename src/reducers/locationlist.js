import { combineReducers } from 'redux';

import {
  GET_CURRENT_LOCATION,
  GET_LOCATIONS,
  ADD_TO_LOCATIONS
} from '../constant/actionTypes';
import MyServiceImpl from '../api/myServiceImpl';

export const allLocations = (state = [], action) => {
  switch (action.type) {
    case GET_LOCATIONS:
      return state;
    case ADD_TO_LOCATIONS:
      return [...state, action.locations];
    default:
      return state;
  }
};

export const currentLocation = (state = {}, action) => {
  switch (action.type) {
    case GET_CURRENT_LOCATION:
      return state;
    default:
      return state;
  }
};

export default combineReducers({
  allLocations,
  currentLocation
});
