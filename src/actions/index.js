import MyServiceImpl from '../api/myServiceImpl';
import { ADD_ACCOUNT_LINK } from '../constant/actionTypes';

const getAccoutLinks = () => dispatch => {
  MyServiceImpl.getLinks(links => dispatch(addToLink(links)));
};

const addToLink = links => ({
  type: ADD_ACCOUNT_LINK,
  links
});

export default getAccoutLinks;
