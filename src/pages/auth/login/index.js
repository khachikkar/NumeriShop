import React, { useContext } from "react";
import AuthWraper from "../../../AuthWraper";

import { Form, Button, Input, Flex } from "antd";
import { Link } from "react-router-dom";
import { ROUTE_CONSTANTS } from "../../../core/constants/constants";
import { Context } from "../../../Context/context";

const Login = () => {
  const [form] = Form.useForm();
  const {setIsAuth} = useContext(Context)
  const handleLogin = () => {
    console.log("login");
    setIsAuth(true)
  };

  return (
    <AuthWraper tittle="Log In" banner="https://images.unsplash.com/photo-1574015974293-817f0ebebb74?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
      <Form layout="vertical" form={form} onFinish={handleLogin}>
        <Form.Item
          label="Email"
          name="email"
          tooltip="This field is for your Email"
          rules={[
            {
              required: true,
              message: "Pls enter your Eamil",
            },
          ]}
        >
          <Input
            type="email"
            placeholder="email"
            style={{ fontSize: "16px" }}
          />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Pls enter your Password",
            },
          ]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>

        <Flex wrap justify="center" align="center" gap="10px">
          <Button
            className="primaryButton"
            style={{ width: "100%" }}
            type="primary"
            htmlType="submit"
            //   loading={loading}
          >
            Login
          </Button>

          <Button
            // onClick={handleWithGoogle}
            style={{ width: "100%" }}
            type="default"
          >
            Log In with Google
          </Button>

          <Link to={ROUTE_CONSTANTS.REGISTER}>
            <Button style={{ width: "100%" }} type="Link">
              Create Acount
            </Button>
          </Link>
        </Flex>
      </Form>
    </AuthWraper>
  );
};

export default Login;
