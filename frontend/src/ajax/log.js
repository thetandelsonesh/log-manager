import ajax from './index';

export const getLogs = (params) => {
  return ajax('get', '/log', params);
}

export const createLog = (params) => {
  return ajax('post', '/log', params);
}

export const getLogStats = (params) => {
  return ajax('get', '/log/stats', params);
}

