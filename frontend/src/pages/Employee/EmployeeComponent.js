import React, {useEffect} from "react";
import {Col, Input, Row, Table} from "antd";

import debounce from '../../utils/debounce';

const debounceSearch = debounce();

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    fixed: 'left',
    width: 160,
  },
  {
    title: 'Employee ID',
    dataIndex: 'employeeId',
    key: 'employeeId',
  },
  {
    title: 'Designation',
    dataIndex: 'designation',
    key: 'designation',
  },
  {
    title: 'Email ID',
    dataIndex: 'emailId',
    key: 'emailId',
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    key: 'gender',
  },
  {
    title: 'DOB',
    dataIndex: 'dob',
    key: 'dob',
  },
];

const EmployeeComponent = (props) => {

  useEffect(() => {
    props.fetchEmployees();
  }, []);

  const onSearchChange = (e) => {
    const {value} = e.target;
    debounceSearch(() => props.fetchEmployees(value), 300);
  }


  return (
    <>
      <div className="page-header">
        <Row>
          <Col xs={24} sm={24} lg={12}>
            <h1>Employees</h1>
          </Col>
          <Col xs={24} sm={24} lg={12}>
            <div className="page-filters">
              <Input.Search
                allowClear
                placeholder="Search Employees..."
                size="large"
                onChange={onSearchChange}
              />
            </div>
          </Col>
        </Row>
      </div>
      <Table
        rowKey={'id'}
        columns={columns}
        loading={props.loading}
        pagination={false}
        dataSource={props.list}
        scroll={{ x: 1200 }}
      />
    </>
  )
}

export default EmployeeComponent;