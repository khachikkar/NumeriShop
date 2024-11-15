import React from 'react'
import "./index.css"

import {Badge, Button, Flex} from "antd"
import logo from "../../../core/images/logo.png"
import {Link} from "react-router-dom"
import { ROUTE_CONSTANTS } from '../../../core/constants/constants'


import { IoBagHandleOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import AuthProfileDropDown from '../../shared/AuthProfileDropDown'

// import enq anum useSelectory storic state vercnelu hamar
import {useSelector} from "react-redux";



const MyHeader = () => {


const {authUserProfile: {isAuth, userData}} = useSelector(store=>store.userProfile)


  return (
<div className="headerCont">
<Flex justify="space-between" align='center' className='myheader'>

<div className='logoPart'>
    <Link to="/">
    <img src={logo} alt='logo' />
    </Link>
   
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

        {/*<IoBagHandleOutline size={24} />*/}
        <div className="icon-container">
            <Badge count={3}>
                <IoBagHandleOutline size={24}/>
            </Badge>

        </div>
       <div className="icon-container"> <IoMdHeartEmpty size={24}/></div>

        {
            isAuth ? <div className="icon-container"><AuthProfileDropDown userProfileInfo={userData} /></div> :
            <Link to={ROUTE_CONSTANTS.LOGIN}>
                <Button className='primaryButton' type='primary'>Sign In</Button>
            </Link>
        }

</div>



</Flex>
</div>
  )
}

export default MyHeader
