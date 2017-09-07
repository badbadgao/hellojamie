import { ADD_TO_ACOUNT_LINKS } from '../actions';

const getAccountLinks = (state = {}, action) => {
  console.log('test actions:' + action);
  switch (action) {
    case 'ADD_TO_ACOUNT_LINKS':
      return {
        ...state,
        ...action.links
      };
    case 'GET_ALL_LINKS':
      return [
        ...state,
        { id: 0, content: 'SIGNIN' },
        { id: 1, content: 'SINGUP' },
        { id: 2, conent: 'CONTACT' }
      ];
    default:
      return state;
  }
};

const byId = (state = {}, action) => {
  console.log('byid:' + action);
  switch (action.type) {
    case 'ADD_TO_ACOUNT_LINKS':
      return {
        ...state,
        ...action.links.reduce((obj, link) => {
          obj[link.id] = link;
          return obj;
        }, {})
      };
    default:
      const { productId } = action;
      if (productId) {
        return {
          ...state,
          [productId]: products(state[productId], action)
        };
      }
      return state;
  }
};

export default getAccountLinks;
