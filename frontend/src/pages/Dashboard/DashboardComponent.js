import React, { useState, useEffect} from "react";
import { Table, Row, Col, Select} from "antd";

import timeConverter from '../../utils/timeConverter';

import './Dashboard.scss';

const columns = [
  {
    title: 'Project',
    dataIndex: 'project',
    key: 'project',
    fixed: 'left',
    width: 160,
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
    render: (text) => timeConverter(text)
  },
];

const DashboardComponent = (props) => {

  const [employee, setEmployee] = useState({});
  const [project, setProject] = useState({});
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: 1,
  });

  useEffect(() => {
    const { employeeList, projectList} = props.filters;
    projectList.length === 0 && props.fetchProjectOptions();
    employeeList.length === 0 && props.fetchEmployeeOptions();
    props.fetchLogs();
    props.fetchLogStats();
  }, []);

  useEffect(() => {
    const params = { page: 1 };
    if(employee && employee.value) params.employee = employee.value;
    if(project && project.value) params.project = project.value;
    props.fetchLogs(params);
    props.fetchLogStats(params);
  }, [employee, project]);

  useEffect(() => {
    setPagination({
      ...pagination,
      total: props.logs.total
    });
  },[props.logs]);

  const onEmployeeChange = (val) => {
    setEmployee(val);
  }
  const onProjectChange = (val) => {
    setProject(val);
  }

  const handleTableChange = (pagination) => {
    const params = { page: pagination.current }
    if(employee && employee.value) params.employee = employee.value;
    if(project && project.value) params.project = project.value;
    setPagination(pagination);
    props.fetchLogs(params)
  }

  const { stats } = props.logStats

  const { employeeList, projectList} = props.filters;

  const employeeOptions = employeeList.map(({id, name}, index) => {
    return <Select.Option key={id} value={id} >{name}</Select.Option>
  })

  const projectOptions = projectList.map(({id, name}, index) => {
    return <Select.Option key={id} value={id} >{name}</Select.Option>
  })

  return (
    <>
      <div className="dashboard-header">
        <Row>
          <Col xs={24} sm={24} lg={12}>
            <h1>Dashboard</h1>
          </Col>
          <Col xs={24} sm={24} lg={12}>
            <div className="dashboard-filters">
              <Select labelInValue allowClear={true} size={'large'} placeholder={'Select Project'} onChange={onProjectChange}>
                {projectOptions}
              </Select>
              <Select labelInValue allowClear={true} size={'large'} placeholder={'Select Employee'} onChange={onEmployeeChange}>
                {employeeOptions}
              </Select>
            </div>
          </Col>
        </Row>
      </div>

      <div className="dashboard-stats">
        <Row gutter={40}>
          <Col xs={24} md={12} lg={8}>
            <div className="stat-cell">
              <p>Project Time log: { project?.label?? 'All'}</p>
              <h3>{timeConverter(stats.projectLogStat)}</h3>
            </div>
          </Col>
          <Col xs={24} md={12} lg={8}>
            <div className="stat-cell">
              <p>Estimated Project Time: { project?.label?? 'All'}</p>
              <h3>{timeConverter(stats.projectStat)}</h3>
            </div>
          </Col>
          <Col xs={24} md={12} lg={8}>
            <div className="stat-cell">
              <p>Employee Time log: { employee?.label?? 'All'}</p>
              <h3>{timeConverter(stats.employeeLogStat)}</h3>
            </div>
          </Col>
        </Row>
      </div>
      <Table
        rowKey={'id'}
        columns={columns}
        loading={props.logs.loading}
        dataSource={props.logs.list}
        pagination={pagination}
        onChange={handleTableChange}
        scroll={{ x: 1200 }}
      />
    </>
  )
}

export default DashboardComponent;