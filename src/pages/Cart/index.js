import React, {useEffect, useState} from 'react';
import "./index.css"
import {Typography} from "antd";
import {useSelector} from "react-redux";

import {Table} from "antd";
const {Text} = Typography;



const Cart = ()=>{

const {cart} = useSelector(store => store.cart)
const {items} = useSelector(store => store.products)


//     Add CartItems in Local storage that dont losse a data after refresh

const [CartItems, setCartItems] = useState([])

    useEffect(() => {
        const SavedCartItems = JSON.parse(localStorage.getItem("CartItems")) || []
        if(SavedCartItems.length > 0){
            setCartItems(SavedCartItems)
        }else{
            const filteredItems = items.filter(product=> cart.includes(product.productId))
            setCartItems(filteredItems)
        }
    }, []);

    useEffect(() => {
        // Save CartItems to localStorage whenever it changes
        if (CartItems.length > 0) {
            localStorage.setItem("CartItems", JSON.stringify(CartItems));
        }
    }, [CartItems]);

// const CartItems = items.filter(product=> cart.includes(product.productId))

console.log(cart, "UUU")
console.log(CartItems,"PPPPP")





const imageStyle = {
    width: 100,
    height: 100,
    objectFit: "cover",
    borderRadius: "4px"
}

const columns = [
    {
        title: 'Image',
        dataIndex: 'image',
        key: 'image',
        render: (img) => <img src={img} alt="productImg" style={imageStyle}/>
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
    },
    {
        title: 'Count',
        dataIndex: 'count',
        key: 'count',
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
    },
    {
        title: 'Actions',
        dataIndex: 'actions',
        key: 'actions',
    }
]

const data = CartItems.map(item=>{
    return {
        key: item.id,
        image: item.productImageUrl,
        name: item.productName,
        count: "1",
        description: item.productDescription,
        price: item.productSaledPrice,
        actions: []
    }
})




return (
        <div className="CartContainer">
            <Text style={{fontWeight:"600", fontSize:"3rem"}}>Cart</Text>
            <Table columns={columns} dataSource={data} />
        </div>
    )
}

export default Cart;