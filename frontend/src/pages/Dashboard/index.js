import { connect } from 'react-redux';
import DashboardComponent from "./DashboardComponent";
import { fetchLogs, fetchLogStats } from './DashboardActions';


const mapStateToProps = (state) => {
  return {
    logs: {...state.logs},
    logStats: {...state.logStats},
  }
}

const mapDispatchToProps = {
  fetchLogs,
  fetchLogStats
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardComponent);