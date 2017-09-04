import { ADD_TO_ACOUNT_LINKS } from '../actions';

const getAccountLinks = (state = [], action) => {
  switch (action) {
    case 'ADD_LINK':
      return [
        ...state,
        {
          link: action.link
        }
      ];
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

export default getAccountLinks;
