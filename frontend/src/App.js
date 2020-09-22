import React, {useEffect, useState} from 'react';
import { HashRouter, Route , Switch} from "react-router-dom";
import {ArrowLeftOutlined, ArrowRightOutlined} from "@ant-design/icons";

import './App.scss';

import Header from './common/Header';
import Sidebar from './common/Sidebar';

import Dashboard from './pages/Dashboard';
import Employee from './pages/Employee';
import Project from './pages/Project';
import Log from './pages/Log';

const App = (props) => {
  const [fold, setFold] = useState(false);
  const [mobile, setMobile] = useState(false);
  const toggleSidebar = (override) => {
    setFold(!fold);
  }
  const hideSidebar = () => {
    setFold(true);
  }

  const checkSidebar = () => {
    if(window.innerWidth > 991){
      setFold(false);
      setMobile(false);
    }else{
      setFold(true);
      setMobile(true);
    }
  }

  useEffect(() => {
    window.addEventListener('resize', checkSidebar);
    checkSidebar(window.innerWidth);
    console.log(props);
    return () => {
      window.removeEventListener('resize', checkSidebar);
    }
  }, [])

  const mainClasses = [];
  fold ? mainClasses.push('no-sidebar') : mainClasses.push('has-sidebar');
  if(mobile) mainClasses.push('is-mobile');

  return (
    <main className={mainClasses.join(' ')}>
      <HashRouter>
        <Header/>
        <Sidebar isMobile={mobile} hideSidebar={hideSidebar}/>
        <div id="mobile-overlay" onClick={toggleSidebar}/>

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