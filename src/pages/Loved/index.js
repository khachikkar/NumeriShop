import React from 'react';
import {useSelector} from "react-redux";
import {Typography} from "antd";
import "./index.css"
import ProductCard from "../../Components/TestCard";



const {Text} = Typography;



const Loved = () => {


    const {loved} = useSelector(store => store.loved)


console.log(loved, "KKKKKI")


    return (
        <div className="LovedCont">
            <Text style={{fontWeight: "600", fontSize: "3rem"}}>Loved Items: {loved.length}</Text>

            <div className="products">
                {
                    loved.map((prod) => {
                        return (
                            <ProductCard key={prod.productId} product={prod}/>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Loved;