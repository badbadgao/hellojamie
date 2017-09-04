import { ADD_TO_ACOUNT_LINKS } from '../actions';

const getAccountLinks = (state, action) => {
  switch (action) {
    case 'GET_ALL_LINKS':
      return Object.assign({}, state, {
        links: [
          ...state.links,
          {
            link: action.link
          }
        ]
      });
    default:
      return state;
  }
};

export default getAccountLinks;
