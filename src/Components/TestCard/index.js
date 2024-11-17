import React, { useState, useEffect } from 'react';
import {Typography, Avatar, Flex, Rate, Button, Space} from 'antd';
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../services/firebase";
import { FIRESTORE_PATH_NAMES } from "../../core/constants/constants";

import "./index.css"


const { Text } = Typography;
const ProductCard = ({ product }) => {
    const {
        // productCategory, todo
        productDescription,
        productImageUrl,
        productName,
        productPrice,
        productRate,
        productSaledPrice,
        productSizes,
        userId
    } = product;

    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const userDoc = doc(db, FIRESTORE_PATH_NAMES.REGISTRED_USERS, userId);
                const userSnapshot = await getDoc(userDoc);
                if (userSnapshot.exists()) {
                    setUser(userSnapshot.data());
                } else {
                    console.warn("User not found for userId:", userId);
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        if (userId) {
            fetchUser();
        }
    }, [userId]);

    return (
        <div>
            {user && (

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
                        <Button style={{marginBottom:"20px", width:"180px", backgroundColor:"black"}} type="primary">Add to Cart</Button>
                        <Button>View more</Button>
                    </Flex>


                    <Flex horizontal  align="center" gap="10px">
                        <Text type="secondary" style={{fontSize:"0.9rem"}}>Product By:</Text>
                        <Space>
                            <Avatar src={user.image || null}/>
                            <Text>{user.name} {user.lastname}</Text>
                        </Space>
                    </Flex>
                </Flex>


            )}
        </div>
    )

};

export default ProductCard;
