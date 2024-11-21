import React from 'react';
import "./index.css"
import {Typography} from "antd";
import {useSelector} from "react-redux";

const {Text} = Typography;



const Cart = ()=>{

const {cart} = useSelector(store => store.cart)
const {items} = useSelector(store => store.products)


const CartItems = items.filter(product=> cart.includes(product.productId))

console.log(cart, "UUU")
console.log(CartItems,"PPPPP")


return (
        <div className="CartContainer">
            <Text style={{fontWeight:"600", fontSize:"3rem"}}>Cart</Text>
        </div>
    )
}

export default Cart;