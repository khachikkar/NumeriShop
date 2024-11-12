import React from 'react'
import MyHeader from '../../Components/Global/Header'
// import { Flex } from 'antd'
import { Outlet } from 'react-router-dom'
import "./index.css"
import MobileHeader from "../../Components/Global/Mobileheader";
const MainLayout = () => {
  return (
      <div className='MainLayout'>
          <MyHeader/>
          <main className='main'>
              <Outlet/>
          </main>
          <div className="mobileH">
              <MobileHeader/>
          </div>
      </div>
  )
}

export default MainLayout
