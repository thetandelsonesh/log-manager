import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { FieldTimeOutlined } from '@ant-design/icons';
import './Header.scss';
import logo from '../../assets/images/logo.png';

const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <img src={logo} alt="Log Manager"/>
      </div>
      <div className="button-container">
        <Link to={'/add-log'}><Button icon={<FieldTimeOutlined />} size="large" type="primary">Log Time</Button></Link>
      </div>
    </header>
  );
}

export default Header;