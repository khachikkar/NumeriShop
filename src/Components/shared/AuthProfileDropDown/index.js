import React from 'react'

import {Avatar, Dropdown,  Typography, Flex, theme} from "antd"
import { signOut } from 'firebase/auth'
import { auth } from '../../../services/firebase'
import { useNavigate } from 'react-router-dom'
import { ROUTE_CONSTANTS } from '../../../core/constants/constants'

import "./index.css"
import {setIsAuth} from "../../../state-management/slices/userProfile";
import {useDispatch} from "react-redux";

const {Text } = Typography
const {useToken} = theme



const AuthProfileDropDown = ({userProfileInfo}) => {

    // console.table(userProfileInfo) // nice to view obj in table


const navigate = useNavigate()
const dispatch = useDispatch()



  const handleSignOut = async()=>{
    // console.log("signout")
    try{
      await signOut(auth) // poxancum enq authy vor kaskana uma sign out anum
        dispatch(setIsAuth(false)) // poxancum enq vor sign out lini
    }catch(e){
      console.log(e, "sign out message")
    }
  }


const handlefirstLetters =  ({name, lastname})=>{

if(name && lastname){
  return `${name[0]} ${lastname[0]}`
}
return "..."
}


  const items =[
      {
          label: "Profile",
          key: "0",
         onClick: ()=> navigate(ROUTE_CONSTANTS.PROFILE)
      },
      {
          label: "Cabinet",
          key:"1",
          onClick: ()=> navigate(ROUTE_CONSTANTS.DASHBOARD)

      },
      {
          label: "Log Out",
          key: "logout",
          onClick: handleSignOut

      }
  ]






const {token} = useToken() // dizayni hamar e
const {name, lastname, email, position, image} = userProfileInfo


  return  (
    <Dropdown
     menu={{items}}
    trigger={["click"]}
    dropdownRender={(menu)=>{
        return(
            <div
            style={{
                borderRadius: token.borderRadiusLG,
                backgroundColor: token.colorBgElevated,
                boxShadow: token.boxShadowSecondary,
              }}
            >
                <Flex
                style={{
                    padding:token.sizeMS
                }}
                vertical align='center' justify='center'>
                    <Avatar src={image || "https://png.pngtree.com/png-vector/20220807/ourmid/pngtree-man-avatar-wearing-gray-suit-png-image_6102786.png"} />
                    <Text>{name}{lastname}</Text>
                    <Text type='secondary'>{email}</Text>
                    <Text type='secondary'>{position}</Text>
                </Flex>
                {menu}
            </div>
        )
    }}
    >
      <Avatar className='userProfileAvatar' size="default" >



      {image ? <img src={image} alt="Profile" style={{ width: '100px', height: '100px', borderRadius: '50%' }} /> : handlefirstLetters(userProfileInfo)}


       {/* {
 handlefirstLetters(userProfileInfo)
       } */}
      </Avatar>
    </Dropdown>
  )
}

export default AuthProfileDropDown