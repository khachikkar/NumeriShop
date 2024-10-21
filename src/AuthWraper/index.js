import React from 'react'
import "./index.css"

import { Flex } from 'antd'

const AuthWraper = ({title, children , banner}) => {


  return (
    <Flex gap="middle"  wrap className='AuthWraper'>
      <div className='bannerPart' style={{backgroundImage:`url(${banner})`}}>
        {/* <img src={banner} alt='pp'/> */}
      </div>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
    </Flex>
  )
}

export default AuthWraper
