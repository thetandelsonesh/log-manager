
const initialState = {
  list: [],
  loading: true,
  error: {}
}

export default (state = initialState, action) => {
  switch (action.type){
    case 'GET_EMPLOYEES_SUCCESS':
      return {...state, list: action.payload.data, loading: false};
    case 'GET_EMPLOYEES_PROGRESS':
      return {...state, loading: true};
    case 'GET_EMPLOYEES_FAILED':
      return {...state, error: action.err, loading: false};
    default:
      return state;
  }
}