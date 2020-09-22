import moment from 'moment';
import React, {useEffect} from "react";
import { Form, Button, Row, Col, Select, DatePicker, InputNumber, message} from "antd";

import { createLog } from '../../ajax/log';

import './Log.scss'

const LogComponent = (props) => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    const { projectId, employeeId, logTimeH, logTimeM} = values;
    const logDate = moment(values.logDate).format('YYYY-MM-DD');
    const logTime = (parseInt(logTimeH)  * 60) + parseInt(logTimeM);
    const params = {
      projectId,
      employeeId,
      logDate,
      logTime
    }

    try{
      const response = await createLog({data: params});
      message.success('Log has been added!');
      form.resetFields();
    }catch (e){
      message.error('Something went wrong. Please try again!');
    }
  };

  useEffect(() => {
    const { employeeList, projectList} = props.filters;
    projectList.length === 0 && props.fetchProjectOptions();
    employeeList.length === 0 && props.fetchEmployeeOptions();
  }, []);

  const { employeeList, projectList} = props.filters;

  const employeeOptions = employeeList.map(({id, name}, index) => {
    return <Select.Option key={id} value={id} >{name}</Select.Option>
  })

  const projectOptions = projectList.map(({id, name}, index) => {
    return <Select.Option key={id} value={id} >{name}</Select.Option>
  })

  return (
    <>
      <h1>Add Log</h1>
      <div className="log-form-container">
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
          >
            <Form.Item
              label="Log Date"
              name="logDate"
              colon={false}
              rules= {[{
                required: true,
                message: 'Please select Log Date!'
              }]}
            >
              <DatePicker size="large"/>
            </Form.Item>
            <Form.Item
              label="Employee"
              name="employeeId"
              colon={false}
              rules = {[{
                required: true,
                message: 'Please select Employee!'
              }]}
            >
              <Select size={'large'} placeholder={'Select Employee'}>
                {employeeOptions}
              </Select>
            </Form.Item>
            <Form.Item
              label="Project"
              name="projectId"
              colon={false}
              rules = {[{
                required: true,
                message: 'Please select Project!'
              }]}
            >
              <Select size={'large'} placeholder={'Select Project'}>
                {projectOptions}
              </Select>
            </Form.Item>
            <Row>
              <Col span={12}>
                <Form.Item
                  label="Log Time (Hours)"
                  name="logTimeH" colon={false}
                  initialValue={1}
                  rules={ [{
                    required: true,
                    message: 'Please select Hours!'
                  }]}
                >
                  <InputNumber size="large" min={0} max={100}/>
                </Form.Item>
              </Col>
               <Col span={12}>
                 <Form.Item
                   label="Log Time (Minutes)"
                   name="logTimeM" colon={false}
                   initialValue={0}
                   rules={ [{
                     required: true,
                     message: 'Please select Minutes!'
                   }]}
                 >
                   <InputNumber size="large" min={0} max={59}/>
                 </Form.Item>
               </Col>
            </Row>
            <Form.Item>
              <Button htmlType="submit" block size="large" type="primary">Submit</Button>
            </Form.Item>
          </Form>
      </div>
    </>
  )
}

export default LogComponent;