import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import ProductCardDashboard from "../ProductCardDashboard";
import {Flex} from "antd";
import {getProducts} from "../../state-management/slices/ProductSlice";

const MyProducts = () => {


//get data
//     const [productList, setProductList] = useState([])
    const {authUserProfile: {userData:{uid}}} = useSelector(store=>store.userProfile)

    const dispatch = useDispatch();
    const {items: products, status} = useSelector((store)=> store.products)


    useEffect(() => {

        dispatch(getProducts());

    }, []);

    //
    // useEffect(() => {
    //     const fetchProds =async()=>{
    //         const prodList = await getProductList()
    //         setProductList(prodList)
    //     }
    //
    //     fetchProds()
    //
    // }, []);



   const myproducts = products.filter(prod=> prod.userId === uid )

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