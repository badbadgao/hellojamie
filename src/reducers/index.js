import { ADD_ACCOUNT_LINK } from '../constant/actionTypes';
import { combineReducers } from 'redux';

const links = (state = {}, action) => {
  console.log('test actions:' + action);
  switch (action) {
    case 'ADD_TO_ACOUNT_LINKS1':
      return {
        ...state,
        ...action.links
      };
    default:
      return state;
  }
};

const byId = (state = {}, action) => {
  console.log('byid:' + action);
  switch (action.type) {
    case ADD_ACCOUNT_LINK:
      return {
        ...state,
        ...action.links.reduce((obj, link) => {
          obj[link.id] = link;
          return obj;
        }, {})
      };
    default:
      return state;
  }
};

const visibleIds = (state = [], action) => {
  console.log('visibleIds ' + action);
  switch (action.type) {
    case ADD_ACCOUNT_LINK:
      return action.links.map(link => link.id);
    default:
      return state;
  }
};

const getLink = (state, id) => state.byId[id];

export const getProduct = (state, id) => state.byId[id];

export const getVisibleLinks = state =>
  state.visibleIds.map(id => getLink(state, id));

export default combineReducers({
  byId,
  visibleIds
});
