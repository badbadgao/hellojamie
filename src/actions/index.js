import MyServiceImpl from '../api/myServiceImpl';
import { ADD_ACCOUNT_LINK, ADD_TO_LOCATIONS } from '../constant/actionTypes';

export const getAccoutLinks = () => dispatch => {
  MyServiceImpl.getLinks(links => dispatch(addToLink(links)));
};

const addToLink = links => ({
  type: ADD_ACCOUNT_LINK,
  links
});

const addToLocations = locations => ({
  type: ADD_TO_LOCATIONS,
  locations
});

export const getAllLocations = () => dispatch => {
  MyServiceImpl.getLocations(locations => dispatch(addToLocations(locations)));
};
