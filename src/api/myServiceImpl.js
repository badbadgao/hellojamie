/**
 * Mocking client-server processing
 */
import _links from './data/links.json';
import _locations from './data/locations.json';

const TIMEOUT = 100;

export default {
  getLinks: (cb, timeout) => setTimeout(() => cb(_links), timeout || TIMEOUT),
  getLocations: callback => callback(_locations)
};
