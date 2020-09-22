
const initialState = {
  projectList: [],
  employeeList: []
}

export default (state = initialState, action) => {
  switch (action.type){
    case 'GET_PROJECT_OPTIONS':
      return {...state, projectList: action.payload.data,};
    case 'GET_EMPLOYEE_OPTIONS':
      return {...state, employeeList: action.payload.data,};
    default:
      return state;
  }
}