const initialState = {
  list: [],
  total: 0,
  loading: true,
  error: {}
}

export const logsReducer = (state = initialState, action) => {
  switch (action.type){
    case 'GET_LOGS_SUCCESS':
      const { list, total } = action.payload.data;
      return {...state, list: list, total: total, loading: false};
    case 'GET_LOGS_PROGRESS':
      return {...state, loading: true};
    case 'GET_LOGS_FAILED':
      return {...state, error: action.err, loading: false};
    default:
      return state;
  }
}


const initialLogStatsState = {
  stats: {},
  loading: true,
  error: {}
}

export const logStatsReducer = (state = initialLogStatsState, action) => {
  switch (action.type){
    case 'GET_LOG_STATS_SUCCESS':
      return {...state, stats: action.payload.data, loading: false};
    case 'GET_LOG_STATS_PROGRESS':
      return {...state, loading: true};
    case 'GET_LOG_STATS_FAILED':
      return {...state, error: action.err, loading: false};
    default:
      return state;
  }
}