import { getProjectsOptions } from '../ajax/project';
import { getEmployeesOptions } from '../ajax/employee';

export const getProjectOptionsAction = (payload) => {
  return {
    type: 'GET_PROJECT_OPTIONS',
    payload
  }
}

export const getEmployeeOptionsAction = (payload) => {
  return {
    type: 'GET_EMPLOYEE_OPTIONS',
    payload
  }
}

export const fetchProjectOptions = () => {
  return async (dispatch) => {
    try{
      const response = await getProjectsOptions();
      dispatch(getProjectOptionsAction(response));
    }catch (e){
      console.log('get project options failed')
    }
  }
}

export const fetchEmployeeOptions = () => {
  return async (dispatch) => {
    try{
      const response = await getEmployeesOptions();
      dispatch(getEmployeeOptionsAction(response));
    }catch (e){
      console.log('get employee options failed')
    }
  }
}