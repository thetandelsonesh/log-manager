import ajax from './index';

export const getEmployees = (search = '') => {
  return ajax('get', '/employee', {search});
}

export const getEmployeesOptions = () => {
  return ajax('get', '/employee', {minimal: true});
}

