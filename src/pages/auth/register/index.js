import React, { useContext } from 'react'
import AuthWraper from '../../../AuthWraper'

import { Form, Button, Input, Flex } from "antd";
import { ROUTE_CONSTANTS, passWalidation } from '../../../core/constants/constants';

import { Link,  useNavigate } from 'react-router-dom';
import { auth } from '../../../services/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { Context } from '../../../Context/context';

const Register = () => {

const [form] = Form.useForm()
const navigate = useNavigate()
// const {setIsAuth} = useContext(Context)


const handleRegister = async (values) => {
    // setLoading(true);
    const { email, password } = values;
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log(values )
    //   setIsAuth(true)
    //   setNameD(values.name +" "+values.lastname) // set arecin name ev surname y
    //   setGmail(values.email)
      navigate(ROUTE_CONSTANTS.LOGIN);
    } catch (e) {
      console.log(e);
    } finally {
      console.log("registered")
    }
  };

  return (
    <AuthWraper title="Sign Up" banner="https://images.unsplash.com/photo-1601597565151-70c4020dc0e1?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">

<Form layout="vertical" form={form} onFinish={handleRegister}>
        <Form.Item
          label="First Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your first name!",
            },
          ]}
        >
          <Input type="text" placeholder="enter your name" />
        </Form.Item>

        <Form.Item
          label="Last Name"
          name="lastname"
          rules={[
            {
              required: true,
              message: "Please input your Last name!",
            },
          ]}
        >
          <Input type="text" placeholder="enter your surname" />
        </Form.Item>

        <Form.Item
          label="Eamil"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your Last email!",
            },
          ]}
        >
          <Input type="text" placeholder="enter your name" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          tooltip="Password must be 6-16 characters, including at least one number and one..."
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
            {
              pattern: passWalidation,
              message:
                "Password must be 6-16 characters, including at least one number and one...",
            },
          ]}
        >
          <Input.Password type="text" placeholder="Enter your password" />
        </Form.Item>

        <Form.Item
          label="Confirm Password"
          name="confirm"
          tooltip="Password must be 6-16 characters, including at least one number and one..."
          dependencies={["password"]} // sa nayum e password i popoxutyany talis enq label i name vor nayi dran
          rules={
            [
              {
                required: true,
                message: "Please input your Password!",
              },

              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }

                  return Promise.reject(
                    new Error("The Password doesn't match")
                  );
                },
              }),
            ]
            // ays funkcian ant i funkcia e vory confirm e anum pass0y getfieldvalue- confirmi miji gracn e , value dependencieic ekac value
          }
        >
          <Input.Password type="text" placeholder="Confirm Password" />
        </Form.Item>

        <Flex wrap justify="center" align="center" gap="10px">
          <Button
          className='primaryButton'
            style={{ width: "100%" }}
            type="primary"
            htmlType="submit"
            // loading={loading}
          >
            Register
          </Button>

          <Button
            // onClick={handleWithGoogle}
            style={{ width: "100%" }}
            type="default"
          >
          Register with Google
          </Button>


          <Link to={ROUTE_CONSTANTS.LOGIN}>
            <Button style={{ width: "100%" }} type="Link">
              Log In
            </Button>
          </Link>

         
        </Flex>
      </Form>

    </AuthWraper>
  )
}

export default Register
