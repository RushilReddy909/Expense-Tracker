import React, {useEffect} from 'react'
import {Form, Input, Space, Typography, Button, Flex, message} from 'antd'
import FormItem from 'antd/es/form/FormItem'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const {Text, Link} = Typography

const Login = () => {
  const navigate = useNavigate()

  const submitHandler = async(values) => {
    try {
      const {data} = await axios.post('/users/login', values);
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
          <Form layout='vertical' onFinish={submitHandler}>
            <h1>Login to Account</h1>
            <Form.Item label="Email" name="email">
              <Input type='email'/>
            </Form.Item>
            <Form.Item label="Password" name="password">
              <Input type='password'/>
            </Form.Item>
            <Form.Item>
                <Flex justify='center'>
                  <Text type='secondary'>First time user?<Link href='/register'> Click here to Sign up</Link></Text>
                </Flex>
            </Form.Item>
            <FormItem className='mt-3'>
              <Flex justify='center'>
                <Button type='primary' htmlType='submit'>Login</Button>
              </Flex>
            </FormItem>
          </Form>
        </div>
    </>
  )
}

export default Login