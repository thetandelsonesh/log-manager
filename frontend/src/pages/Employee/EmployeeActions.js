import { getEmployees } from '../../ajax/employee';

export const getEmployeesSuccess = (payload) => {
  return {
    type: 'GET_EMPLOYEES_SUCCESS',
    payload
  }
}

export const getEmployeesInProgress = () => {
  return {
    type: 'GET_EMPLOYEES_PROGRESS',
  }
}

export const getEmployeesFailed = (err) => {
  return {
    type: 'GET_EMPLOYEES_FAILED',
    err
  }
}

export const fetchEmployees = (search) => {
  return async (dispatch) => {
    dispatch(getEmployeesInProgress);
    try{
      const response = await getEmployees(search);
      dispatch(getEmployeesSuccess(response));
    }catch (e){
      dispatch(getEmployeesFailed(e))
    }
  }
}