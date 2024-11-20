import React from 'react'
import MyHeader from '../../Components/Global/Header'
// import { Flex } from 'antd'
import { Outlet } from 'react-router-dom'
import "./index.css"
import MobileHeader from "../../Components/Global/Mobileheader";
import MyFooter from "../../Components/Footer";
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
          <MyFooter />
      </div>
  )
}

export default MainLayout
