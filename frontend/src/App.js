import React, {useState} from 'react';
import { BrowserRouter, Route , Switch} from "react-router-dom";
import {ArrowLeftOutlined, ArrowRightOutlined} from "@ant-design/icons";

import './App.scss';

import Header from './common/Header';
import Sidebar from './common/Sidebar';

import Dashboard from './pages/Dashboard';
import Employees from './pages/Employees';
import Projects from './pages/Projects';

const App = () => {
  const [fold, setFold] = useState(false);

  const toggleSidebar = () => {
    setFold(!fold);
  }

  return (
    <main className={fold ? 'no-sidebar' : ''}>
      <BrowserRouter>
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
            <Route exact path={'/employees'} component={Employees}/>
            <Route exact path={'/projects'} component={Projects}/>
          </Switch>
        </div>
      </BrowserRouter>
    </main>
  );
}

export default App;