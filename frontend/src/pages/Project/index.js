import { connect } from 'react-redux';
import ProjectComponent from "./ProjectComponent";
import { fetchProjects } from './ProjectActions';


const mapStateToProps = (state) => {
  return {...state.project}
}

const mapDispatchToProps = {
  fetchProjects
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectComponent);