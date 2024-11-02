import React from 'react'
import "./index.css"

import {Button, Flex} from "antd"
import logo from "../../../core/images/logo.png"
import {Link} from "react-router-dom"
import { ROUTE_CONSTANTS } from '../../../core/constants/constants'


import { useContext } from 'react'
import { Context } from '../../../Context/context'

import { IoBagHandleOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import AuthProfileDropDown from '../../shared/AuthProfileDropDown'

// import enq anum useSelectory storic state vercnelu hamar
import {useSelector} from "react-redux";


const MyHeader = () => {

const {isAuth, userProfileData} = useContext(Context)


    // vercrecinq count y drinq nav um
const {count} = useSelector(store=>store.userProfile)


  return (
<div>
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
            <IoBagHandleOutline size={24}/>
            {count > 0 && <span className="badge">{count}</span>}
        </div>
        <IoMdHeartEmpty size={24}/>
        {
            isAuth ? <AuthProfileDropDown userProfileInfo={userProfileData}/> : <Link to={ROUTE_CONSTANTS.LOGIN}>
                <Button className='primaryButton' type='primary'>Sign In</Button>
            </Link>
        }

    </div>


</Flex>
</div>
  )
}

export default MyHeader
