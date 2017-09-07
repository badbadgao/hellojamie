import MyServiceImpl from '../api/myServiceImpl';

const ADD_TO_ACOUNT_LINKS = 'ADD_TO_ACOUNT_LINKS';

const getAccoutLinks = () => dispatch => {
  console.log('getAccoutLinks 0000');
  MyServiceImpl.getAccountLinks(accountLinks => {
    console.log('getAccoutLinks 1111');
    dispatch(addToLinks(accountLinks));
  });
};

const addToLinks = links => ({
  type: 'ADD_TO_ACOUNT_LINKS',
  links
});
export default getAccoutLinks;
