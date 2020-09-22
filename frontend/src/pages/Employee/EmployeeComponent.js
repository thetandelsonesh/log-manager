import React, {useEffect} from "react";
import { Table} from "antd";

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    fixed: 'left',
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

  return (
    <>
      <h1>Employees</h1>
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