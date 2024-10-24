import React, { useContext, useState } from "react";
import AuthWraper from "../../../AuthWraper";

import { Form, Button, Input, Flex, notification } from "antd";
import { Link } from "react-router-dom";
import { ROUTE_CONSTANTS } from "../../../core/constants/constants";
import { Context } from "../../../Context/context";

import { auth } from "../../../services/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [form] = Form.useForm();
  const {setIsAuth} = useContext(Context)
  const [loading, setLoading] = useState(false)


  const handleLogin = async(values) => {
    setLoading(true)
    try {
        const { email, password } = values;
        await signInWithEmailAndPassword(auth, email, password);
        console.log(values)
        form.resetFields();
        setIsAuth(true)
      } catch (error) {
        notification.error({
          message: "Invalid Login Credentials", // Fixed message typo
        });
      } finally{
        setLoading(false)
      }
    };
  


// organization of data sotre in fireStore




  return (
    <AuthWraper title="Log In" banner="https://images.unsplash.com/photo-1574015974293-817f0ebebb74?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
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
            placeholder="Email"
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
          <Input.Password placeholder="Password" style={{ fontSize: '16px' }} />
        </Form.Item>

        <Flex wrap justify="center" align="center" gap="10px">
          <Button
            className="primaryButton"
            style={{ width: "100%" }}
            type="primary"
            htmlType="submit"
            loading={loading}
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
