import React, {useState} from 'react';
import { HashRouter, Route , Switch} from "react-router-dom";
import {ArrowLeftOutlined, ArrowRightOutlined} from "@ant-design/icons";

import './App.scss';

import Header from './common/Header';
import Sidebar from './common/Sidebar';

import Dashboard from './pages/Dashboard';
import Employee from './pages/Employee';
import Project from './pages/Project';
import Log from './pages/Log';

const App = () => {
  const [fold, setFold] = useState(false);

  const toggleSidebar = () => {
    setFold(!fold);
  }

  return (
    <main className={fold ? 'no-sidebar' : ''}>
      <HashRouter>
        <Header/>
        <Sidebar/>

        <button className="sidebar-ctrl" onClick={toggleSidebar}>
          <svg id="sidebar-ctrl-bg" height="50" width="50">
            <polygon points="0,0 0,50 50,0" className="triangle"/>
          </svg>
          {fold ? <ArrowRightOutlined /> : <ArrowLeftOutlined />}
        </button>

        <div className="main">
          <Switch>
            <Route exact path={'/'}  component={Dashboard}/>
            <Route exact path={'/employees'} component={Employee}/>
            <Route exact path={'/projects'} component={Project}/>
            <Route exact path={'/add-log'} component={Log}/>
          </Switch>
        </div>
      </HashRouter>
    </main>
  );
}

export default App;