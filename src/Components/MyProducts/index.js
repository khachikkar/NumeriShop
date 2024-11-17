import React, {useState, useEffect} from 'react';
import {getProductList} from "../../Layout/General";
import {useSelector} from "react-redux";
import ProductCardDashboard from "../ProductCardDashboard";
import {Flex} from "antd";

const MyProducts = () => {


//get data
    const [productList, setProductList] = useState([])
    const {authUserProfile: {userData:{uid}}} = useSelector(store=>store.userProfile)



    useEffect(() => {
        const fetchProds =async()=>{
            const prodList = await getProductList()
            setProductList(prodList)
        }

        fetchProds()

    }, []);



   const myproducts = productList.filter(prod=> prod.userId === uid )

    console.log(myproducts, "KK")



    return (
        <div>
            <h1>My Products</h1>
            <Flex gap="20px">
                {
                    myproducts.map((prod)=>{
                        return (
                            <ProductCardDashboard key={prod.productId} product={prod} />
                        )
                    })
                }
            </Flex>

        </div>
    )
}

export default MyProducts;