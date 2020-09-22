import { connect } from 'react-redux';
import EmployeeComponent from "./EmployeeComponent";
import { fetchEmployees } from './EmployeeActions';


const mapStateToProps = (state) => {
  return {...state.employee}
}

const mapDispatchToProps = {
  fetchEmployees
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeComponent);