import React, {useEffect} from 'react'
import {Form, Input, Space, Typography, Button, Flex, message} from 'antd'
import FormItem from 'antd/es/form/FormItem'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const {Text, Link} = Typography

const Register = () => {
  const navigate = useNavigate()

  const submitHandler = async (values) => {
    try {
      await axios.post('/users/register', values);
      message.success('Registration Successfull');
      navigate('/login')
    }
    catch(error) {
      message.error('Invalid Username or Password');
    }

    console.log(values);
  }

  useEffect(() => {
    if(localStorage.getItem('user')){
      navigate('/')
    }
  }, [navigate]);
  return (
    <>    
        <div className='register'>
          <Form layout='vertical' onFinish={submitHandler}>
            <h1>Registration Form</h1>
            <Form.Item label="Name" name="name">
              <Input/>
            </Form.Item>
            <Form.Item label="Email" name="email">
              <Input type='email'/>
            </Form.Item>
            <Form.Item label="Password" name="password">
              <Input type='password'/>
            </Form.Item>
            <Text type='secondary'>Already have an account?<Link href='/login'> Click here to Login</Link></Text>
            <FormItem className='mt-3'>
              <Flex justify='center'>
                <Button type='primary' htmlType='submit'>Register</Button>
              </Flex>
            </FormItem>
          </Form>
        </div>
    </>
  )
}

export default Register