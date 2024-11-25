import React from 'react';
import {Layout} from 'antd';


const {Footer} = Layout;

const MyFooter = () => {
    return (
        <Footer style={{
            borderTop: '1px solid #e8e8e8',
            // position: 'fixed',
            left: 0,
            bottom: 0,
            width: '100%',
            backgroundColor: 'black',
            color: 'white',
            textAlign: 'center',
            display: 'flex',}}
        >
            NumeriShop.am  ©2024 Created by Khach :)
        </Footer>
    )
}

export default MyFooter