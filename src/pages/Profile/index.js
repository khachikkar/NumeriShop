import React, { useEffect , useState} from "react";

// now i create my profile page in my way untill REDUX learning !!

import { useContext } from "react";
import { CiEdit } from "react-icons/ci";


import "./index.css";
import { Context } from "../../Context/context";
import { Button , Form, Input, Radio} from "antd";

const Profile = () => {
  const { userProfileData } = useContext(Context);
  const {name, lastname} = userProfileData
  const [form] = Form.useForm()


  const [value, setValue] = useState("");
  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };





  useEffect(()=>{
    const {uid, password, ...restData} = userProfileData
    form.setFieldsValue(restData)
    }, [form, userProfileData])




  return (
    <div className="ProfileCont">

      <div className="VisualPart">
        <div>
          <img
            src="https://static.vecteezy.com/system/resources/previews/001/840/612/non_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg"
            alt="sts"
          />
        </div>

        <div className="profPart">
          <div>
            <h1>{name}</h1>
            <h1>{lastname}</h1>
          </div>

          <div className="EditProfile">
            <Button type="text">
              Edit Profile <CiEdit size={20} />
            </Button>
          </div>
        </div>
      </div>

      


<Form layout='vertical' form={form}>

<Form.Item
label="Firstname"
name="name"

>
<Input placeholder='Firstname' />
</Form.Item>

<Form.Item
label="LastName"
name="lastname"
>
<Input placeholder='LastName' />
</Form.Item>

<Form.Item
label="Email"
name="email"
>
<Input readOnly placeholder='Email' />
</Form.Item>

<Form.Item
label="Phone Number"
name="phonenumber"
>
<Input placeholder='Phone Number' />
</Form.Item>

<Form.Item
label="Position"
name="position"
>
<Radio.Group onChange={onChange} value={value}>
      <Radio value={1}>Customer</Radio>
      <Radio value={2}>Seller</Radio>
      
    </Radio.Group>
</Form.Item>


<Button type='primary' htmlType='submit'>Submit</Button>

      </Form>

      
    </div>
  );
};

export default Profile;
