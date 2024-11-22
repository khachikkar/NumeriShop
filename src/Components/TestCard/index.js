import React, { useState, useEffect } from 'react';
import {Typography, Avatar, Flex, Button, Space} from 'antd';
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../services/firebase";
import { FIRESTORE_PATH_NAMES } from "../../core/constants/constants";

import "./index.css"
import {useDispatch, useSelector} from "react-redux";
import {addToCart} from "../../state-management/slices/CartSlice";
import {useNavigate} from "react-router-dom";
import {AiFillHeart, AiFillStar} from "react-icons/ai";
import {toggleLovedProduct} from "../../state-management/slices/LovedProdsSlice";


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
        userId,
        // productId
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


//     add product in cart

const dispatch = useDispatch();


const handleProductinCart = (product)=>{
    console.log("hello", product)
    dispatch(addToCart(product))
}

const navigate= useNavigate()

//     Added functionality to navigate Product Detail page and pass a product as a props
const handleProductDetails = ()=>{
    console.log("hello")
    navigate(`/product/${product.productId}`, {state:{product}})
}



    const lovedProducts = useSelector((state) => state.loved.loved);

    const isLoved = lovedProducts.some((item) => item.id === product.id);

    const handleToggleLoved = () => {
        dispatch(toggleLovedProduct(product));
    };




    return (
        <div>
            {user && (

                <Flex  vertical className="productContainer">
                    <div className="prodimgCont">
                        <img className="prodimg" src={productImageUrl} alt={productImageUrl}/>
                        <div className="hearticon"><AiFillHeart onClick={handleToggleLoved} style={{color: isLoved ? "red" : "lightgray"}} size={24} /></div>
                    </div>
                    <Flex horizontal justify="space-between" align="center" >
                        <Text style={{fontSize:"1.4rem"}}>{productName}</Text>
                        {/*<Rate disabled defaultValue={productRate} />*/}
                        <Text style={{fontSize:"1rem"}}><Space style={{alignItems:"center"}}><AiFillStar />{productRate}</Space></Text>
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
                        <Button onClick={()=>handleProductinCart(product)} style={{marginBottom:"20px", width:"180px", backgroundColor:"black"}} type="primary">Add to Cart</Button>
                        <Button onClick={handleProductDetails}>View more</Button>
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
