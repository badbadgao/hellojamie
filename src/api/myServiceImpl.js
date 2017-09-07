/**
 * Mocking client-server processing
 */
import _links from './links.json';

const TIMEOUT = 100;

export default {
  getLinks: (cb, timeout) => setTimeout(() => cb(_links), timeout || TIMEOUT)
};
