import React from "react";
import AuthWraper from "../../../AuthWraper";

import { Form, Button, Input, Flex, notification } from "antd";
import { Link } from "react-router-dom";
import { ROUTE_CONSTANTS } from "../../../core/constants/constants";


import { auth } from "../../../services/firebase";
import { signInWithEmailAndPassword , sendPasswordResetEmail} from "firebase/auth";
import {useDispatch} from "react-redux";
import {setIsAuth} from "../../../state-management/slices/userProfile";

const Login = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();




  const handleLogin = async(values) => {

    try {
        const { email, password } = values;
        await signInWithEmailAndPassword(auth, email, password);
        console.log(values)
        form.resetFields();
        dispatch(setIsAuth(true))
      } catch (error) {
        notification.error({
          message: "Invalid Login Credentials", // Fixed message typo
        });
      }
    };
  


// reset password functionality
const handleResetPassword = async () => {
  const email = form.getFieldValue('email'); // Get the entered email

  if (!email) {
    notification.error({
      message: "Please enter your email address to reset password.",
    });
    return;
  }

  try {
    await sendPasswordResetEmail(auth, email);
    notification.success({
      message: "Password reset email sent!",
    });
  } catch (error) {
    notification.error({
      message: "Failed to send reset email. Please try again.",
    });
  }
};




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
              message: "Please Enter Your Email",
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
              message: "Please Enter Your Password",
            },
          ]}
        >
          <Input.Password placeholder="Password" style={{ fontSize: '16px' }} />
        </Form.Item>
         
        <Flex wrap justify="flex-end" align="center" gap="10px">

        <Button 
        onClick={handleResetPassword}
        type="text"
        >Reset Password
        </Button>

          <Button
            className="primaryButton"
            style={{ width: "100%" }}
            type="primary"
            htmlType="submit"
            // loading={loading}
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

          <Link style={{ width: "100%" }}  to={ROUTE_CONSTANTS.REGISTER}>
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
