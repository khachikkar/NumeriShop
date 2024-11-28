import React from 'react'
import "./index.css"

import {Badge, Button, Flex, Dropdown, Space, } from "antd"

import { DownOutlined } from '@ant-design/icons';

import logo from "../../../core/images/logo.png"
import {Link, useNavigate} from "react-router-dom"
import { ROUTE_CONSTANTS } from '../../../core/constants/constants'


import {IoBagHandleOutline} from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import AuthProfileDropDown from '../../shared/AuthProfileDropDown'

// import enq anum useSelectory storic state vercnelu hamar
import {useSelector} from "react-redux";




const MyHeader = () => {


const {authUserProfile: {isAuth, userData}} = useSelector(store=>store.userProfile)


//   get data for badge
const {cart} = useSelector(store => store.cart)


const navigate = useNavigate()

const handleClickedCategory = (text) =>{
const data = text.toLowerCase()

    if(data === "outlet"){
        navigate(`/all`, {state:{data}})
    }


        console.log("clicked")
        navigate(`/${data}`, {state:{data}})
}

const menuitems = ["Outlet", "Man", "Woman", "Kid", "brand T-shirts"] //move to constants



    ///////  menu show on mobile  version  ////
const items = menuitems.map((item, i)=>{
    return (
        {
                label: <span onClick={() => handleClickedCategory(item)} key={i}>{item}</span>,
                key: i,
        }
    )
})


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

    <Flex gap="middle" justify="space-between" align='center'>
        {
            menuitems.map((menuItem, i) => {
                return (
                    <span onClick={()=>handleClickedCategory(menuItem)} key={i}>{menuItem}</span>
                )
            })
        }
        {/* Jamanakavor navpart */}
    </Flex>
</div>

<div className='navPart'>

        {/*<IoBagHandleOutline size={24} />*/}
        <div className="icon-container">
           <Link to={ROUTE_CONSTANTS.CART}>
               <Badge count={cart.length}>
                   <IoBagHandleOutline size={24}/>
               </Badge>
           </Link>

        </div>
       <div className="icon-container">
           <Link to={ROUTE_CONSTANTS.LOVED}>
               <IoMdHeartEmpty size={24}/>
           </Link>
       </div>



        <div className="men">
        {/*   menu*/}
            <Dropdown
                menu={{
                    items,
                }}
                trigger={['click']}
            >
                <button
                    style={{
                        all: 'unset', // removes default button styles
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                    onClick={(e) => e.preventDefault()}
                >
                    <Space>
                        Menu
                        <DownOutlined/>
                    </Space>
                </button>
            </Dropdown>

        </div>


    {
        isAuth ? <div className="icon-container"><AuthProfileDropDown userProfileInfo={userData}/></div> :
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
