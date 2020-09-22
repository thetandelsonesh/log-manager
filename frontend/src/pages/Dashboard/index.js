import { connect } from 'react-redux';
import DashboardComponent from "./DashboardComponent";
import { fetchLogs, fetchLogStats } from './DashboardActions';
import { fetchEmployeeOptions, fetchProjectOptions } from '../../actions/FilterActions';

const mapStateToProps = (state) => {
  return {
    logs: {...state.logs},
    logStats: {...state.logStats},
    filters: state.filters
  }
}

const mapDispatchToProps = {
  fetchLogs,
  fetchLogStats,
  fetchEmployeeOptions,
  fetchProjectOptions
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardComponent);