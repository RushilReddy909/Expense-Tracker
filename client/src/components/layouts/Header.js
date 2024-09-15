import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Avatar, Flex, message, Typography, Button } from "antd";
import { UserOutlined, HomeFilled, LogoutOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const Header = () => {
  const [loginUser, setLoginUser] = useState("");
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) {
      setLoginUser(userData);
    }
  }, []);

  const navigate = useNavigate();
  const logOutHandler = () => {
    localStorage.removeItem("user");
    message.success("Logout Successful");
    navigate("/login");
  };

  return (
    <div className="header">
      <Flex justify="center" vertical>
        <Flex vertical align="center">
          <Avatar size={128} icon={<UserOutlined />} className="mb-3" />
          <Title style={{ margin: 0 }} level={3}>
            {loginUser.name}
          </Title>
          <Text style={{ fontSize: "1rem" }}>{loginUser.email}</Text>
          <hr />
        </Flex>
        <Flex vertical style={{ margin: "10px 30px", flexGrow: 1 }}>
          <ul>
            <li>
              <HomeFilled />
              <Link href="/" className="mx-2 link">Dashboard</Link>
            </li>
          </ul>
        </Flex>
        <Flex vertical align="center">
          <hr />
          <Button
            type="primary"
            shape="round"
            danger
            size="large"
            onClick={logOutHandler}
            style={{fontSize: "1rem"}}
          >
            <LogoutOutlined />
            <b>Log Out</b>
          </Button>
        </Flex>
      </Flex>
    </div>
  );
};

export default Header;
