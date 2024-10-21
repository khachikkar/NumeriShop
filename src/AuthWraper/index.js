import React from 'react'
import "./index.css"

import { Flex } from 'antd'

const AuthWraper = ({title, children , banner}) => {


  return (
    <Flex gap="middle"   className='AuthWraper'>
      <div className='bannerPart' style={{backgroundImage:`url(${banner})`}}>
      </div>
      <Flex align='center' gap="large" vertical>
        <h2>{title}</h2>
        {children}
      </Flex>
    </Flex>
  )
}

export default AuthWraper
