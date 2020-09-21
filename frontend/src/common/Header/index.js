import React from "react";
import { Button } from "antd";
import './Header.scss';
import logo from '../../assets/images/logo.png';

const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <img src={logo} alt="Log Manager"/>
      </div>
      <div className="button-container">
        <Button size="large" type="primary">Log Time</Button>
      </div>
    </header>
  );
}

export default Header;