import { getLogs, getLogStats } from '../../ajax/log';

export const getLogsSuccess = (payload) => {
  return {
    type: 'GET_LOGS_SUCCESS',
    payload
  }
}

export const getLogsInProgress = () => {
  return {
    type: 'GET_LOGS_PROGRESS',
  }
}

export const getLogsFailed = (err) => {
  return {
    type: 'GET_LOGS_FAILED',
    err
  }
}

export const getLogStatsSuccess = (payload) => {
  return {
    type: 'GET_LOG_STATS_SUCCESS',
    payload
  }
}

export const getLogStatsInProgress = () => {
  return {
    type: 'GET_LOG_STATS_PROGRESS',
  }
}

export const getLogStatsFailed = (err) => {
  return {
    type: 'GET_LOG_STATS_FAILED',
    err
  }
}

export const fetchLogs = (params) => {
  return async (dispatch) => {
    dispatch(getLogsInProgress);
    try{
      const response = await getLogs(params);
      dispatch(getLogsSuccess(response));
    }catch (e){
      dispatch(getLogsFailed(e))
    }
  }
}
export const fetchLogStats = (params) => {
  return async (dispatch) => {
    dispatch(getLogStatsInProgress);
    try{
      const response = await getLogStats(params);
      dispatch(getLogStatsSuccess(response));
    }catch (e){
      dispatch(getLogStatsFailed(e))
    }
  }
}