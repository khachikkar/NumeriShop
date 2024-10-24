import React from 'react'


// now i create my profile page in my way untill REDUX learning !!

import { useContext } from 'react'
import { CiEdit } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlinePayment } from "react-icons/md";

import "./index.css"
import { Context } from '../../Context/context'
import { Button } from 'antd'



const Profile = () => {


const {userProfileData} = useContext(Context)

const {name, lastname, email} = userProfileData





  return (
    <div className='ProfileCont'>
        <h3>My Profile</h3>

         <div className='VisualPart'>

            <div>
                <img src="https://static.vecteezy.com/system/resources/previews/001/840/612/non_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg" alt='sts'/>

            </div>

    <div className='profPart'>

    <div>
        <h1>{name}</h1>
        <h1>{lastname}</h1>
        <p>{email}</p>
    </div>


    <div className='EditProfile'>
    <Button type="text">Edit Profile <CiEdit size={20} /></Button>
    </div>
    </div>

        </div>


      <div className='InfoPart'>

<div className='profblock'>
    <h2>My Adresses</h2>
    <p> <IoLocationOutline size={20}/> No mentioned adress</p>
    <p> <IoLocationOutline size={20}/> No mentioned adress</p>
    <Button type="text">Add Adresses <CiEdit size={20} /></Button>

</div>

<div className='profblock'>
    <h2>Payment Method</h2>
    <p> <MdOutlinePayment size={20}/> No such Patment Method</p>
    <Button type="text">Add Payment <CiEdit size={20} /></Button>

</div>


      </div>
    </div>
  )
}

export default Profile
