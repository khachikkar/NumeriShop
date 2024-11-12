import React from "react";
import TestPage from "../../pages/TestPage";
import "./index.css"
import ProductCard from "../../Components/TestCard"


const sampleProduct = {
    title: 'Stylish T-Shirt',
    image: 'https://i.pinimg.com/474x/ae/51/7c/ae517c273b8c5382adc191a81efdedf1.jpg',
    price: 29.99,
    description: 'A comfortable and stylish t-shirt available in various sizes.',
    rating: 4.5,
};


const General = ()=>{
    return (
        <div className="GenContainer">
           <TestPage />
            <ProductCard product={sampleProduct} />
        </div>
    )
}

export default General