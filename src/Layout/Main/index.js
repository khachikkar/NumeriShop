import React from 'react'
import MyHeader from '../../Components/Global/Header'
// import { Flex } from 'antd'
import { Outlet } from 'react-router-dom'
import "./index.css"
const MainLayout = () => {
  return (
    <div className='MainLayout'>
      <MyHeader />
      <main className='main'>
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout
