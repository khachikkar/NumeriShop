import React from 'react'
import MyHeader from '../../Components/Global/Header'
import { Flex } from 'antd'
import { Outlet } from 'react-router-dom'
import "./index.css"
const MainLayout = () => {
  return (
    <div className='Main_Layout_Container'>
      <MyHeader />
      <Flex className='main' wrap align="center" justify="center">
        <Outlet />
      </Flex>
    </div>
  )
}

export default MainLayout
