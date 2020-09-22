import { connect } from 'react-redux';
import LogComponent from "./LogComponent";
import { fetchEmployeeOptions, fetchProjectOptions } from '../../actions/FilterActions';


const mapStateToProps = (state) => {
  return {filters: state.filters}
}

const mapDispatchToProps = {
  fetchEmployeeOptions,
  fetchProjectOptions
}

export default connect(mapStateToProps, mapDispatchToProps)(LogComponent);