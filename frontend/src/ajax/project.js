import ajax from './index';

export const getProjects = (search = '') => {
  return ajax('get', '/project', {search});
}

export const getProjectsOptions = () => {
  return ajax('get', '/project', {minimal: true});
}