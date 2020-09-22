import React, {useEffect} from "react";
import {Col, Row, Input, Table} from "antd";

import timeConverter from '../../utils/timeConverter';
import debounce from '../../utils/debounce';

const debounceSearch = debounce();

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

  const onSearchChange = (e) => {
    const {value} = e.target;
    debounceSearch(() => props.fetchProjects(value), 300);
  }

  return (
    <>
      <div className="page-header">
        <Row>
          <Col xs={24} sm={24} lg={12}>
            <h1>Projects</h1>
          </Col>
          <Col xs={24} sm={24} lg={12}>
            <div className="page-filters">
              <Input.Search
                allowClear
                placeholder="Search Projects..."
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

export default ProjectComponent;