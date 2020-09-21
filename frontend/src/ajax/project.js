import ajax from './index';

export const getProjects = (search = '') => {
  return ajax('get', '/project', {search});
}

