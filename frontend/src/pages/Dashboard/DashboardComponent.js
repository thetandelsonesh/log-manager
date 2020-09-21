import React, { useState, useEffect} from "react";
import { Table, Row, Col, Select} from "antd";

import './Dashboard.scss';

const columns = [
  {
    title: 'Project',
    dataIndex: 'project',
    key: 'project',
    render: (text, record) => record.project.name
  },
  {
    title: 'Employee',
    dataIndex: 'employee',
    key: 'employee',
    render: (text, record) => record.employee.name
  },
  {
    title: 'Date',
    dataIndex: 'logDate',
    key: 'logDate',
  },
  {
    title: 'Logged Time',
    dataIndex: 'logTime',
    key: 'logTime',
    render: (text) => (parseInt(text) / 1440).toFixed(2)
  },
];

const DashboardComponent = (props) => {

  const [project, setProject] = useState(null);
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    props.fetchLogs();
    props.fetchLogStats();
  }, []);

  useEffect(() => {
    console.log(props);
  })

  const { stats } = props.logStats
  return (
    <>
      <div className="dashboard-header">
        <Row>
          <Col xs={24} sm={12}>
            <h1>Dashboard</h1>
          </Col>
          <Col xs={24} sm={12}>
            <div className="dashboard-filters">
              <Select size={'large'} placeholder={'Select Project'}>
                <Select.Option value={'a'}>A</Select.Option>
                <Select.Option value={'b'}>B</Select.Option>
                <Select.Option value={'c'}>C</Select.Option>
              </Select>
              <Select size={'large'} placeholder={'Select Employee'}>
                <Select.Option value={'a'}>A</Select.Option>
                <Select.Option value={'b'}>B</Select.Option>
                <Select.Option value={'c'}>C</Select.Option>
              </Select>
            </div>
          </Col>
        </Row>
      </div>

      <div className="dashboard-stats">
        <Row gutter={40}>
          <Col xs={24} sm={8}>
            <div className="stat-cell">
              <p>Time log: {}</p>
              <h3>{stats.projectLogStat}</h3>
            </div>
          </Col>
          <Col xs={24} sm={8}>
            <div className="stat-cell">
              <p>Estimated Project Time: {}</p>
              <h3>{stats.projectStat}</h3>
            </div>
          </Col>
          <Col xs={24} sm={8}>
            <div className="stat-cell">
              <p>Employee Time log: {}</p>
              <h3>{stats.employeeLogStat}</h3>
            </div>
          </Col>
        </Row>
      </div>
      <Table
        rowKey={'id'}
        columns={columns}
        loading={props.logs.loading}
        pagination={false}
        dataSource={props.logs.list}
      />
    </>
  )
}

export default DashboardComponent;