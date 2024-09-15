import React from "react";
import Header from "./Header";
import { Flex } from "antd";

const Layout = ({ children }) => {
  return (
    <>
      <Flex>
        <Header />
        <div className="main p-4">{children}</div>
      </Flex>
    </>
  );
};

export default Layout;
