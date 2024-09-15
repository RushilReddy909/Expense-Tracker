import React, { useEffect } from "react";
import {
  Form,
  Input,
  Space,
  Typography,
  Button,
  Flex,
  message,
  ConfigProvider,
} from "antd";
import FormItem from "antd/es/form/FormItem";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { MailOutlined, UserOutlined } from "@ant-design/icons";

const { Text, Link } = Typography;

const Register = () => {
  const navigate = useNavigate();

  const submitHandler = async (values) => {
    try {
      const response = await axios.post("/users/register", values);

      if (response.data.success) {
        message.success("Registration Successful");
        navigate("/login");
      } else {
        message.error(response.data.message || "Registration Failed");
      }
    } catch (error) {
      message.error(error.response?.data?.message || "Registration Failed");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/");
    }
  }, [navigate]);
  return (
    <>
      <div className="register">
        <Flex justify="center" className="registerFlex">
          <div style={{ width: "50%" }}>
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
              <Flex style={{height: "100%"}} justify="center" align="center">
              <Form layout="vertical" onFinish={submitHandler} className="p-3">
                <h1>
                  <b>Registration</b>
                </h1>
                <Form.Item
                  label="Username"
                  name="name"
                  rules={[{ required: true, message: "Enter your Username" }]}
                >
                  <Space.Compact block>
                    <Input type="text" size="large" />
                    <Button icon={<UserOutlined />} size="large" />
                  </Space.Compact>
                </Form.Item>
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    { required: true, message: "Please enter your email" },
                  ]}
                >
                  <Space.Compact block>
                    <Input type="email" size="large" />
                    <Button icon={<MailOutlined />} size="large" />
                  </Space.Compact>
                </Form.Item>
                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    { required: true, message: "Please enter your Password" },
                  ]}
                >
                  <Input.Password size="large" />
                </Form.Item>
                <FormItem className="mt-3">
                  <Flex justify="center">
                    <Button
                      type="primary"
                      htmlType="submit"
                      shape="round"
                      block
                      style={{ fontWeight: "bold" }}
                    >
                      Register
                    </Button>
                  </Flex>
                </FormItem>
                <Flex justify="center">
                  <Text type="secondary">
                    Already have an account?
                    <Link href="/login"> Click here to Login</Link>
                  </Text>
                </Flex>
              </Form>
              </Flex>
            </ConfigProvider>
          </div>
          <div style={{ width: "50%" }}>
            <img
              src="https://a.storyblok.com/f/188325/1460x820/af7cf054d5/managing-business-travel-expenses.png"
              width={"100%"}
              height={"100%"}
              alt="template-image"
            />
          </div>
        </Flex>
      </div>
    </>
  );
};

export default Register;
