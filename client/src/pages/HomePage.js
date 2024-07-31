import React, { useEffect, useState } from "react";
import Layout from "../components/layouts/Layout";
import axios from "axios";
import dayjs from "dayjs";
import {
  Form,
  Input,
  Select,
  DatePicker,
  Button,
  Row,
  Col,
  Flex,
  InputNumber,
  ConfigProvider,
  message,
  Modal,
  Space,
  Typography,
  Table,
} from "antd";

const { Text, Link, Title } = Typography;

const Home = () => {
  const [allTransactions, setAllTransactions] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const columns = [
    {
      title: "Amount",
      dataIndex: 'amount',
    },
    {
      title: "Type",
      dataIndex: 'type',
    },
    {
      title: "Category",
      dataIndex: 'category',
    },
    {
      title: "Description",
      dataIndex: 'description',
    },
    {
      title: "Date",
      dataIndex: 'date',
    },
  ];

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const retrieveAll = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const res = await axios.post("/transactions/get-transaction", {
        userID: user._id,
      });
      setAllTransactions(res.data);
    } catch (error) {
      console.log(error);
      message.error("Issue retrieving transactions");
    }
  };

  useEffect(() => {
    retrieveAll();
  }, []);

  const handleSubmit = async (values) => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));

      const formattedVals = {
        ...values,
        date: dayjs(values.date).format("DD-MMM-YYYY"),
        userID: user._id,
      };

      await axios.post("/transactions/add-transaction", formattedVals)
      message.success("Transaction Added");
      setIsModalOpen(false);
    } catch (error) {
      message.error("Failed to add Transaction");
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="filters"></div>
      <div className="base">
        <Row>
          <Col span={8} offset={8}>
          <div style={{border: "2px solid gray", boxShadow: "0px 0px 5px 0 #0F110C", padding: "15px", borderRadius: "10px", backgroundColor: "white"}}>
              <Title
                level={2}
                style={{ textAlign: "center", textDecoration: "underline", color: "#4B7F52" }}
              >
                Your Transactions
              </Title>
              <Flex justify="space-between">
                <Text strong>Apply Filters</Text>
                <Button type="primary" ghost shape="round" onClick={showModal}>
                  Add Transaction
                </Button>
              </Flex>
            </div>
            <Modal
              centered
              title="Add Transaction"
              open={isModalOpen}
              onCancel={handleCancel}
              footer={null}
            >
              <Form layout="vertical" onFinish={handleSubmit}>
                <ConfigProvider
                  theme={{
                    components: {
                      InputNumber: {
                        controlWidth: { xs: 50, sm: 70, md: 90, lg: 120 },
                      },
                    },
                  }}
                >
                  <Form.Item
                    label="Amount"
                    name={"amount"}
                    rules={[{ required: true, message: "Enter Amount" }]}
                  >
                    <InputNumber
                      min={0}
                      autoFocus
                      allowClear="true"
                      autoComplete="off"
                      size="large"
                      changeOnWheel
                    />
                  </Form.Item>
                </ConfigProvider>
                <Form.Item
                  label="Type"
                  name={"type"}
                  rules={[
                    { required: true, message: "Select type of expense" },
                  ]}
                >
                  <Select
                    defaultValue={"Select"}
                    options={[
                      {
                        value: "Expense",
                        label: "Expense",
                      },
                      {
                        value: "Income",
                        label: "Income",
                      },
                    ]}
                  />
                </Form.Item>
                <Form.Item
                  label="Category"
                  name={"category"}
                  rules={[{ required: true, message: "Select category" }]}
                >
                  <Select
                    defaultValue={"Select"}
                    options={[
                      {
                        value: "Food",
                        label: "Food",
                      },
                      {
                        value: "Rent",
                        label: "Rent",
                      },
                      {
                        value: "Friend",
                        label: "Friend",
                      },
                      {
                        value: "Bills",
                        label: "Bills",
                      },
                      {
                        value: "College",
                        label: "College",
                      },
                      {
                        value: "Medical",
                        label: "Medical",
                      },
                      {
                        value: "Misc",
                        label: "Misc",
                      },
                    ]}
                  />
                </Form.Item>
                <Form.Item
                  label="Description"
                  name={"description"}
                  rules={[{ required: true, message: "Specify description" }]}
                >
                  <Input type="text" autoComplete="off" allowClear="true" />
                </Form.Item>
                <Form.Item
                  label="Date"
                  name={"date"}
                  rules={[{ required: true, message: "Date is not mentioned" }]}
                >
                  <DatePicker format={"DD-MMM-YYYY"} />
                </Form.Item>
                <Flex justify="end">
                  <Button
                    type="primary"
                    ghost
                    shape="round"
                    htmlType="submit"
                    size="large"
                  >
                    Add
                  </Button>
                </Flex>
              </Form>
            </Modal>
          </Col>
        </Row>
        <br/> <br/>
        <Row>
          <Col span={16} offset={4}>
            <Table columns={columns} dataSource={allTransactions} bordered />
          </Col>
        </Row>
      </div>
    </Layout>
  );
};

export default Home;
