import React, {useEffect, useState} from "react";
import "./index.css"
import ProductCard from "../../Components/TestCard"
import myvid from "../../core/images/myvid.mp4"


import {collection, getDocs} from "firebase/firestore";
import {db} from "../../services/firebase";
import {FIRESTORE_PATH_NAMES} from "../../core/constants/constants";
import ImageCarousel from "../../Components/ImageCarousel";
import {Button, Flex, Typography} from "antd";
import Filter from "../../Components/Filter";



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





const {Text} = Typography
const style = {backgroundColor:"black", color:"white" }

    return (
        <div className="GenContainer">
            {/*<TestPage />*/}
            {/* //to add a carouser*/}
            <ImageCarousel/>


            {/* Product List*/}
            {/*Make Product List as a separate Component*/}

                <h1 className="prodbuser">Products by Users</h1>
                <Filter />
                <div className="products">
                    {
                        productList.map((prod) => {
                            return (
                                <ProductCard key={prod.productId} product={prod}/>
                            )
                        })
                    }
                </div>



            {/*Add a Description of Website like nice*/}

                <Flex className="midl">
                    <Text style={{fontWeight: "600", fontSize: "16px"}}>Just in</Text>
                    <Text style={{fontWeight: "900", fontSize: "76px"}}>YERE XS</Text>
                    <Text style={{
                        marginBottom: "15px",
                        width: "416px",
                        textAlign: "center",
                        fontWeight: "400",
                        fontSize: "18px"
                    }}>Ahead of its time and disruptive by design, the iconic YERE XS pushes the boundaries of style
                        with its silhouette and future-forward form.</Text>
                    <Button size="large" type="primary" style={style}>Shop now</Button>
                </Flex>


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