import React from 'react'
import { Outlet } from 'react-router-dom'
import "./index.css"


import { ROUTE_CONSTANTS } from '../../core/constants/constants'

import {Breadcrumb, Menu, theme, Layout} from "antd"

const {Sider, Content} = Layout

const MenuItems = [
    {
        label: "My Data Analitics",
        key: "0"
      },
  {
    label: "Personal Information",
    key: ROUTE_CONSTANTS.PROFILE
  },
  {
    label: "Payment Information",
    key: "1"
  },
  {
    label: "Settings",
    key: "2"
  }
]




const CabinetLayout = () => {

    const {
        token: { colorBgContainer, borderRadiusLG },
      } = theme.useToken();



  return (
    <div className='Cabinetlayout'>

<Sider collapsible width={200} style={{background:colorBgContainer}}>

<Menu 
mode='inline'
items={MenuItems}
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
