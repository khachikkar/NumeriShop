import React from 'react';
import {Button, Typography, Rate,  Flex, } from 'antd';




const { Text } = Typography;

const ProductCardDashboard = ({ product }) => {
    const {
        // productCategory, toadd
        productDescription,
        productImageUrl,
        productName,
        productPrice,
        productRate,
        productSaledPrice,
        productSizes,
      //  userId
    } = product;



    return (
        <Flex vertical className="productContainer">
            <div className="prodimgCont">
                <img className="prodimg" src={productImageUrl} alt={productImageUrl}/>
            </div>
            <Flex horizontal justify="space-between" align="center" >
                <Text style={{fontSize:"1.4rem"}}>{productName}</Text>
                <Rate disabled defaultValue={productRate} />
            </Flex>

            <Flex horizontal justify="space-between" align="center" style={{marginBottom:"10px"}}>
                <Text type="secondary" style={{fontSize:"0.9rem"}}>{productDescription}</Text>
                <Text type="secondary" style={{fontSize:"0.7rem"}}>{productSizes}</Text>

            </Flex>

            <Flex gap="10px" horizontal  align="center" style={{marginBottom:"10px"}}>
                <Text style={{fontSize:"1.8rem"}}>${productSaledPrice}</Text>
                <Text type="danger" className="lined" style={{fontSize:"1.2rem"}}>${productPrice}</Text>
            </Flex>

            <Flex horizontal justify="space-between">
                <Button style={{marginBottom:"20px", width:"150px", backgroundColor:"black"}} type="primary">Edit</Button>
                <Button  style={{marginBottom:"20px", color:"white", backgroundColor:"red"}} >Delete from shop</Button>
            </Flex>


        </Flex>
    );
};

export default ProductCardDashboard;
