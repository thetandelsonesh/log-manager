import React, {useEffect} from "react";
import { Table} from "antd";
import timeConverter from '../../utils/timeConverter';

const columns = [
  {
    title: 'Project Name',
    dataIndex: 'name',
    key: 'name',
    fixed: 'left',
    width: 160,
  },
  {
    title: 'Client',
    dataIndex: 'client',
    key: 'client',
  },
  {
    title: 'Client Email ID',
    dataIndex: 'clientEmailId',
    key: 'clientEmailId',
  },
  {
    title: 'Estimate',
    dataIndex: 'estimate',
    key: 'estimate',
    render: (text) => timeConverter(text)
  },
];

const ProjectComponent = (props) => {

  useEffect(() => {
    props.fetchProjects();
  }, []);

  return (
    <>
      <h1>Projects</h1>
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

export default ProjectComponent;