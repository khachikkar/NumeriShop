import React from 'react'
import "./index.css"

import {Button, Flex} from "antd"
import logo from "../../../core/images/logo.png"
import {Link} from "react-router-dom"
import { ROUTE_CONSTANTS } from '../../../core/constants/constants'


import { useContext } from 'react'
import { Context } from '../../../Context/context'



const MyHeader = () => {

const {isAuth} = useContext(Context)



  return (
    <div>
<Flex justify="space-between" align='center' className='myheader'>
   <div className='logoPart'>
    <img src={logo} alt='logo' />
   </div>
   <div className='menuPart'>
{/* Jamanakavor menu */}
<Flex gap="middle" justify="space-between" align='center' >
    <span>Outlet</span>
    <span>T-shirts</span>
    <span>About</span>
    <span>Designs</span>
    {/* Jamanakavor navpart */}
</Flex>
   </div>
    <div className='navPart'>
        {/* <span>NavPart</span> */}
{
isAuth ? <span>My Profile</span> : <Link  to={ROUTE_CONSTANTS.LOGIN}>
<Button className='primaryButton' type='primary'>Sign In</Button>
</Link> 
}
   
</div>
</Flex>
    </div>
  )
}

export default MyHeader
