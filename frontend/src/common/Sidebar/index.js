import React, {useEffect} from "react";
import { NavLink, withRouter } from "react-router-dom";
import { Avatar } from "antd";
import { DashboardFilled, UserOutlined, ProjectFilled } from '@ant-design/icons';
import './Sidebar.scss'

const Sidebar = (props) => {

  useEffect(() => {
    const unListen = props.history.listen(() => {
      if(props.isMobile) props.hideSidebar(false);
    })
    return () => unListen();
  })

  return (
    <div className="sidebar">

      <div className="app-name">
        <div className="avatar-container">
          <Avatar size="large">ST</Avatar>
        </div>
        <div className="admin-info">
          <h4>Sonesh Tandel</h4>
          <p>log manager</p>
        </div>
      </div>
      <ul>
        <NavLink exact to={'/'}>
          <li><DashboardFilled /> Dashboard</li>
        </NavLink>
        <NavLink exact to={'/employees'}>
          <li><UserOutlined /> Employees</li>
        </NavLink>
        <NavLink exact to={'/projects'}>
          <li><ProjectFilled /> Projects</li>
        </NavLink>
      </ul>
    </div>
  );
}

export default withRouter(Sidebar);