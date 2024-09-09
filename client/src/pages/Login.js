import React, {useEffect} from 'react'
import {Form, Input, Space, Typography, Button, Flex, message, ConfigProvider} from 'antd'
import {MailOutlined} from '@ant-design/icons'
import FormItem from 'antd/es/form/FormItem'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const {Text, Link} = Typography

const Login = () => {
  const navigate = useNavigate()

  const submitHandler = async(values) => {
    try {
      const {data} = await axios.post('/api/v1/users/login', values);
      message.success('Login Successful');
      localStorage.setItem('user', JSON.stringify({...data.user, password: ''}));
      navigate('/');
    }
    catch(error) {
      message.error('Invalid Email or Password');
    }
  }

  useEffect(() => {
    if(localStorage.getItem('user')){
      navigate('/')
    }
  }, [navigate]);

  return (
    <>    
        <div className='login'>
        <ConfigProvider
            theme={{
              components: {
                Form: {
                  /* here is your component tokens */
                  labelFontSize: 16,
                },
              },
            }}
          >
            <Form layout='vertical' onFinish={submitHandler}>
              <h1 style={{fontWeight: "bold"}}>Login</h1>
              <Form.Item label="Email" name="email" rules={[{required: true, message: "Please enter your email"}]}>
                <Space.Compact block>
                  <Input size='large' type='email'/>
                  <Button icon={<MailOutlined />} size='large'/>
                </Space.Compact>
              </Form.Item>
              <Form.Item label="Password" name="password" rules={[{required: true, message: "Please enter your password"}]}>
                <Input.Password size='large'/>
              </Form.Item>
              <FormItem >
                <Flex justify='center' className='mt-3'>
                  <Button type='primary' htmlType='submit' block style={{fontWeight: "bold", borderRadius: "25px"}}>Login</Button>
                </Flex>
              </FormItem>
              <Form.Item>
                <Flex justify='center'>
                  <Text type='secondary'>First time user?<Link href='/register'> Click here to Sign up</Link></Text>
                </Flex>
              </Form.Item>
            </Form>
          </ConfigProvider>
        </div>
    </>
  )
}

export default Login