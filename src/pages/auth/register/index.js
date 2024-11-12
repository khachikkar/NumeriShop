import React, { useState } from 'react'
import AuthWraper from '../../../AuthWraper'

import { Form, Button, Input, Flex } from "antd";
import { FIRESTORE_PATH_NAMES, ROUTE_CONSTANTS, passWalidation } from '../../../core/constants/constants';

import { Link,  useNavigate } from 'react-router-dom';
import { auth, db } from '../../../services/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

import {doc, setDoc} from "firebase/firestore"
import "./index.css"

const Register = () => {

const [form] = Form.useForm()
const navigate = useNavigate()
const [loading, setLoading] = useState(false)



const handleRegister = async (values) => {
    setLoading(true);
    const {name, lastname,  email, password } = values;
    try {
     const response =  await createUserWithEmailAndPassword(auth, email, password);
     const {uid} = response.user
     const createddoc = doc(db, FIRESTORE_PATH_NAMES.REGISTRED_USERS, uid)
     await setDoc(createddoc, {
        uid, name, lastname, email, password
     })



      console.log(values )
    //   setIsAuth(true)
    //   setNameD(values.name +" "+values.lastname) // set arecin name ev surname y
    //   setGmail(values.email)
      navigate(ROUTE_CONSTANTS.LOGIN);
    } catch (e) {
      console.log(e);
    } finally{
      setLoading(false)
    }
  };

  return (
    <AuthWraper title="Sign Up" banner="https://images.unsplash.com/photo-1601597565151-70c4020dc0e1?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">

<div className="register-container">
    <Form layout="vertical" form={form} onFinish={handleRegister}>
        <Form.Item
            label="First Name"
            name="name"
            rules={[
                {
                    required: true,
                    message: "Please input your Firstname!",
                },
            ]}
        >
            <Input type="text" placeholder="Enter Your Name" style={{ fontSize: '16px' }} />
        </Form.Item>

        <Form.Item
            label="Last Name"
            name="lastname"
            rules={[
                {
                    required: true,
                    message: "Please input your Lastname!",
                },
            ]}
        >
            <Input type="text" placeholder="Enter Your Surname" style={{ fontSize: '16px' }} />
        </Form.Item>

        <Form.Item
            label="Eamil"
            name="email"
            rules={[
                {
                    required: true,
                    message: "Please input your Email!",
                },
            ]}
        >
            <Input type="text" placeholder="Enter Your Email" style={{ fontSize: '16px' }} />
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
                        "Password must be 6-16 characters, including at least one number , one symbol, a minimum one uppercase and one lowercase letter",
                },
            ]}
        >
            <Input.Password type="text" placeholder="Enter Your Password" style={{ fontSize: '16px' }} />
        </Form.Item>

        <Form.Item
            label="Confirm Password"
            name="confirm"
            tooltip="Password must be 6-16 characters, including at least one number , one symbol, a minimum one uppercase and one lowercase letter"
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
            <Input.Password type="text" placeholder="Confirm Password" style={{ fontSize: '16px' }} />
        </Form.Item>

        <Flex wrap justify="center" align="center" gap="10px">
            <Button
                className='primaryButton'
                style={{ width: "100%" }}
                type="primary"
                htmlType="submit"
                loading={loading}
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
</div>

    </AuthWraper>
  )
}

export default Register
