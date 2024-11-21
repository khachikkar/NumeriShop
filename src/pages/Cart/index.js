import React from 'react';
import "./index.css"
import {Typography, Table, Button, Flex} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {removeFromCart} from "../../state-management/slices/CartSlice";

const {Text} = Typography;



const Cart = ()=>{

const {cart} = useSelector(store => store.cart)
const dispatch = useDispatch();






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
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
        render : (text)=> <span>$ {text}</span>
    },
    {
        title: 'Count',
        dataIndex: 'count',
        key: 'count',
    },
    {
        title: 'Last Price',
        dataIndex: 'lastprice',
        key: 'lastprice',
        render : (text)=> <span>$ {text}</span>
    },
    {
        title: 'Actions',
        dataIndex: 'actions',
        key: 'actions',
    }
]

const data = cart.map(item=>{
    return {
        key: item.id,
        image: item.productImageUrl,
        name: item.productName,
        count: item.count ,
        description: item.productDescription,
        price: item.productSaledPrice,
        lastprice: (item.productSaledPrice * item.count),
        actions: [<Button onClick={()=>dispatch(removeFromCart(item.id)) }>X</Button>]
    }
})





const price = cart.reduce((acc, curr)=> acc + (Number( curr.productSaledPrice) * curr.count) , 0)
const shippingFee = 3
const TOTAL_PRICE = price + shippingFee
    console.log(price, "OOOO")

return (
        <div className="CartContainer">
            <Text style={{fontWeight:"600", fontSize:"3rem"}}>Cart</Text>
            <Table columns={columns} dataSource={data} />


            <Flex align="center" horizontal="true" justify="space-around">
                <div>
                    <h1>Price :${price}</h1>
                    <h2>Shiping Fee: ${shippingFee}</h2>
                    <h1>Total Price: ${TOTAL_PRICE}</h1>
                </div>
                <Button>Go to CheckOut</Button>
            </Flex>

        </div>
)
}


export default Cart