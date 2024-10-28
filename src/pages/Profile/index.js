import React, { useEffect , useState} from "react";

// now i create my profile page in my way untill REDUX learning !!

import { useContext } from "react";
// import { CiEdit } from "react-icons/ci";


import "./index.css";
import { Context } from "../../Context/context";
import { Button , Form, Input, notification, Radio} from "antd";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../services/firebase";
import { FIRESTORE_PATH_NAMES } from "../../core/constants/constants";

const Profile = () => {
  const { userProfileData , handleGetUserData} = useContext(Context);
  const {name, lastname} = userProfileData
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)

  const [value, setValue] = useState("");
  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };


  const {uid, password, ...restData} = userProfileData



  useEffect(()=>{
    form.setFieldsValue(restData)
    }, [form,restData, userProfileData])



const handleEditUserProfile = async (values)=>{
setLoading(true)
try{
  const userDocRef = doc(db, FIRESTORE_PATH_NAMES.REGISTRED_USERS, uid)
  await updateDoc(userDocRef, values)
  handleGetUserData(uid)
  notification.success({
    message: "User Information Updated !"
  })
}catch(e){
  console.log(e)
  notification.error({
    message: "Error updating user information !"
  })
}finally{
  setLoading(false)
}
}




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
            {/* <Button type="text">
              Edit Profile <CiEdit size={20} />
            </Button> */}
          </div>
        </div>
      </div>

      


<Form layout='vertical' form={form} onFinish={handleEditUserProfile}>

<Form.Item
label="Firstname"
name="name"
rules={[
  {
    required: true,
    message: "Please input your Firstname!",
  },
]}

>
<Input placeholder='Firstname' />
</Form.Item>

<Form.Item
label="LastName"
name="lastname"
rules={[
  {
    required: true,
    message: "Please input your LastName!",
  },
]}
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
rules={[
  {
    required: true,
    message: "Please input your Phone Number!",
  },
]}
>
<Input placeholder='Phone Number' />
</Form.Item>

<Form.Item
label="Position"
name="position"
rules={[
  {
    required: true,
    message: "Please choose your Position!",
  },
]}
>
<Radio.Group onChange={onChange} value={value}>
      <Radio value={"Customer"}>Customer</Radio>
      <Radio value={"Seller"}>Seller</Radio>
      
    </Radio.Group>
</Form.Item>


<Button loading={loading} type='primary' htmlType='submit'>Submit</Button>

      </Form>

      
    </div>
  );
};

export default Profile;
