import React from 'react'
import {useLocation} from "react-router-dom";
import ProductCard from "../../Components/TestCard";
import {Typography} from "antd";

const {Text} = Typography;

const FilteredPage = () => {

    const location = useLocation()

    const category = location.state.data

console.log(category, "FFF")

const products = JSON.parse(localStorage.getItem("products"))

    const filtered = products.filter(item=> item.productCategory === category)

console.log(filtered, "ERER") // why after refresh products array is become empty?

    return (
        <div>
            <Text style={{fontSize: "3rem"}}>{category.toUpperCase()} Products</Text>

            <div className="products">
                {
                    filtered.map((prod) => {
                        return (
                            <ProductCard key={prod.productId} product={prod}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default FilteredPage