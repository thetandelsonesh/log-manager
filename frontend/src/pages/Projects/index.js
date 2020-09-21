import { connect } from 'react-redux';
import Projects from "./ProjectComponent";
import { fetchProjects } from './ProjectActions';


const mapStateToProps = (state) => {
  return {...state.project}
}

const mapDispatchToProps = {
  fetchProjects
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects);