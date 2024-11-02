import React, { useEffect , useState} from "react";

// now i create my profile page in my way untill REDUX learning !!

import { useContext } from "react";
// import { CiEdit } from "react-icons/ci";


import "./index.css";
import { Context } from "../../Context/context";
import { Button , Form, Input, message, notification, Radio, Upload} from "antd";
import { PlusOutlined } from '@ant-design/icons';
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../services/firebase";
import { FIRESTORE_PATH_NAMES } from "../../core/constants/constants";

import { getStorage, ref, uploadBytesResumable, getDownloadURL  } from "firebase/storage";


// redux imports
import {useDispatch} from "react-redux";
import {increment, decrement} from "../../state-management/slices/userProfile";

const Profile = () => {
  const { userProfileData , handleGetUserData} = useContext(Context);
  const {name, lastname} = userProfileData
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)

  // usage of dispatch
  const dispatch = useDispatch()


  const [value, setValue] = useState("");
  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };


//Image uploading

const {uid, password, image, ...restData} = userProfileData


const storage = getStorage()
const [imageUrl, setImageUrl] = useState(image || null)





const handleUpload = (options)=>{

  const { file, onSuccess, onError } = options;

  const storigeref = ref(storage, `images/${uid}/${file.name}`)
  const uploadTask = uploadBytesResumable(storigeref, file)

uploadTask.on(
  "state_changed",
  null,
  (error)=> {
    message.error(`Upload failed: ${error.message}`)
    onError(error)
  },
  
  async ()=>{
    const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref)
    setImageUrl(downloadUrl)

    console.log(downloadUrl, ">>>>>>>>>>>>>>>>>>>>>>>")

    onSuccess(null, file)
    message.success("Upload Successfull")
    
  }

)

}




  useEffect(()=>{
    form.setFieldsValue(restData)
    }, [form,restData, userProfileData])


const handleEditUserProfile = async (values)=>{
setLoading(true)
try{
  const userDocRef = doc(db, FIRESTORE_PATH_NAMES.REGISTRED_USERS, uid)
  const updatedValues = {...values, image: imageUrl || userProfileData.image}
  await updateDoc(userDocRef, updatedValues)
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

// redux dispatch actions part




  return (
    <div className="ProfileCont">

      <div className="VisualPart">
        <div>
          <img
            src={image || "https://static.vecteezy.com/system/resources/previews/001/840/612/non_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg" }
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

{/*      kporcenq dnel estex actionner*/}
{/*      add enq anum inccremnet u decrementy*/}

      <button onClick={()=>dispatch(decrement())}>-</button>
      <p>Add items in bag</p>
      <button onClick={()=>dispatch(increment())}>+</button>


<Form layout='vertical' form={form} onFinish={handleEditUserProfile}>

<Form.Item
label="Profile Image"
name="image"
>

<Upload
listType="picture-card"
showUploadList={false}
customRequest={handleUpload}
>

{imageUrl ? <img src={imageUrl} alt="Uploaded" style={{ width: '100px', height:"100px" }} /> : <PlusOutlined />}

</Upload>

</Form.Item>




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
