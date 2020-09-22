
const initialState = {
  list: [],
  loading: true,
  error: {}
}

export default (state = initialState, action) => {
  switch (action.type){
    case 'GET_PROJECTS_SUCCESS':
      return {...state, list: action.payload.data, loading: false};
    case 'GET_PROJECTS_PROGRESS':
      return {...state, loading: true};
    case 'GET_PROJECTS_FAILED':
      return {...state, error: action.err, loading: false};
    default:
      return state;
  }
}