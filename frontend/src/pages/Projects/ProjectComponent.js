import React, {useEffect} from "react";
import { Table} from "antd";

const columns = [
  {
    title: 'Project Name',
    dataIndex: 'name',
    key: 'name',
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
    render: (text) => (parseInt(text) / 1440).toFixed(2)
  },
];

const Projects = (props) => {

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
      />
    </>
  )
}

export default Projects;