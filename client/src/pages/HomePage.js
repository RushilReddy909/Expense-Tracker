import React from 'react';
import Layout from '../components/layouts/Layout';
import { Form, Input, Select, DatePicker, Button, Row, Col, Flex, InputNumber, ConfigProvider } from 'antd';

const home = () => {
  const handleSubmit = (values) => {
    console.log(values);
  }

  return (
    <Layout>
        <div className='filters'>
          
        </div>
        <div className='base'>
            <Row>
              <Col span={8} offset={8}>
                <Form layout="vertical" onFinish={handleSubmit}>
                    <ConfigProvider
                      theme={{
                        components: {
                          InputNumber: {
                            controlWidth: {xs: 50, sm: 70, md: 90, lg: 120}
                          },
                        },
                      }}
                    >
                      <Form.Item label="Amount" name={"amount"} rules={[{required: true, message: "Enter Amount"}]}>
                        <InputNumber min={0} autoFocus allowClear="true" autoComplete='off' size='large' changeOnWheel/>
                      </Form.Item>
                    </ConfigProvider>
                  <Form.Item label="Type" name={"type"} rules={[{required: true, message: "Select type of expense"}]}>
                    <Select 
                      defaultValue={"Select"}
                      options={[
                        {
                          value: "expense",
                          label: "Expense",
                        },
                        {
                          value: "income",
                          label: "Income",
                        }
                      ]}
                    />
                  </Form.Item>
                  <Form.Item label="Category" name={"category"} rules={[{required: true, message: "Select category"}]}>
                    <Select
                      defaultValue={"Select"}
                      options={[
                        {
                          value: "food",
                          label: "Food"
                        },
                        {
                          value: "rent",
                          label: "Rent"
                        },
                        {
                          value: "friend",
                          label: "Friend"
                        },
                        {
                          value: "bills",
                          label: "Bills"
                        },
                        {
                          value: "college",
                          label: "College"
                        },
                        {
                          value: "medical",
                          label: "Medical"
                        },
                        {
                          value: "misc",
                          label: "Misc"
                        }
                      ]}
                    />
                  </Form.Item>
                  <Form.Item label="Description" name={"description"} rules={[{required: true, message: "Specify description"}]}>
                    <Input type='text' autoComplete='off' allowClear='true'/>
                  </Form.Item>
                  <Form.Item label='Date' name={"date"} rules={[{required: true, message: "Date is not mentioned"}]}>
                    <DatePicker/>
                  </Form.Item>
                  <Flex justify='end'>
                    <Button type='primary' ghost shape='round' htmlType='submit' size='large'>Add</Button>
                  </Flex>
                </Form>
              </Col>
            </Row>
        </div>
    </Layout>
  )
}

export default home