import ajax from './index';

export const getEmployees = (search = '') => {
  return ajax('get', '/employee', {search});
}

