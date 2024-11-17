import React, {useEffect, useState} from "react";
import "./index.css"
import ProductCard from "../../Components/TestCard"
import myvid from "../../core/images/myvid.mp4"


import {collection, getDocs} from "firebase/firestore";
import {db} from "../../services/firebase";
import {FIRESTORE_PATH_NAMES} from "../../core/constants/constants";
import ImageCarousel from "../../Components/ImageCarousel";



export const getProductList = async()=>{
    try{
        //// what to write?
        const product_list = collection(db, FIRESTORE_PATH_NAMES.PRODUCTS)
        const list = await getDocs(product_list);
        const products = list.docs.map(doc=>({
            ...doc.data()
        }))

        console.log(products)
        return products;

    }catch(e){
        console.log(e)
    }
}



const General = ()=>{

//get data
const [productList, setProductList] = useState([])




    useEffect(() => {
        const fetchProds =async()=>{
            const prodList = await getProductList()
            setProductList(prodList)
        }

        fetchProds()

    }, []);








    return (
        <div className="GenContainer">
            {/*<TestPage />*/}
            {/* //to add a carouser*/}
            <ImageCarousel/>


            {/* Product List*/}
            <div>
                <h1 style={{marginBottom: "30px"}}>Products by Users</h1>
                <div className="products">
                    {
                        productList.map((prod) => {
                            return (
                                <ProductCard key={prod.productId} product={prod}/>
                            )
                        })
                    }
                </div>
            </div>


            {/*Add a Description of Website like nice*/}


            {/*//     Product Vieod show*/}
            <div className="vvi">
                <video className="vido" height="360" autoPlay loop muted>
                    <source src={myvid} type="video/mp4"/>
                </video>
            </div>

        </div>



    )
}

export default General