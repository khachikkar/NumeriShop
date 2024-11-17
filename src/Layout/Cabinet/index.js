import React from 'react'
import {Outlet, useLocation, useNavigate} from 'react-router-dom'
import "./index.css"


import { ROUTE_CONSTANTS } from '../../core/constants/constants'

import {Breadcrumb, Menu, theme, Layout} from "antd"

const {Sider, Content} = Layout

const MenuItems = [
    {
        label: "Dashboard",
        key: ROUTE_CONSTANTS.DASHBOARD
      },
  {
    label: "Personal Information",
    key: ROUTE_CONSTANTS.PROFILE
  },
  {
    label: "My Products",
      key: ROUTE_CONSTANTS.MYPRODUCTS
  },
  {
    label: "Settings",
    key: "2"
  }
]




const CabinetLayout = () => {

const {pathname} = useLocation()
const navigate = useNavigate()


    const {
        token: { colorBgContainer, borderRadiusLG },
      } = theme.useToken();

    const handleNavigate = ({key}) =>{
        console.log(key)
        navigate(key)
    }


  return (
    <div className='Cabinetlayout'>

<Sider collapsible width={200} style={{ background:colorBgContainer}}>

<Menu 
mode='inline'
items={MenuItems}
onSelect ={handleNavigate}
selectedKeys={[pathname]}
/>

</Sider>

<Layout style={{padding: "0 24px 24px"}}>

<Breadcrumb
items={[{title:"Cabinet"}, {title:"Personal Information"}]}
style={{margin: "8px 0"}}
/>

<Content
style={
  {
    padding: 10,
    margin: 2,
    minHeight:300,
    backgroundColor: colorBgContainer,
    borderRadius: borderRadiusLG,
  }
}
>

<Outlet />

</Content>

</Layout>

    </div>
  )
}

export default CabinetLayout
