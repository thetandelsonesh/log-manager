import { getProjects } from '../../ajax/project';

export const getProjectsSuccess = (payload) => {
  return {
    type: 'GET_PROJECTS_SUCCESS',
    payload
  }
}

export const getProjectsInProgress = () => {
  return {
    type: 'GET_PROJECTS_PROGRESS',
  }
}

export const getProjectsFailed = (err) => {
  return {
    type: 'GET_PROJECTS_FAILED',
    err
  }
}

export const fetchProjects = (search) => {
  return async (dispatch) => {
    dispatch(getProjectsInProgress);
    try{
      const response = await getProjects(search);
      dispatch(getProjectsSuccess(response));
    }catch (e){
      dispatch(getProjectsFailed(e))
    }
  }
}