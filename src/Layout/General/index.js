import React, {useEffect} from "react";
import "./index.css"
import ProductCard from "../../Components/TestCard"
import myvid from "../../core/images/myvid.mp4"

import {CATEGORIES_IMAGES_OPTIONS} from "../../core/constants/constants";
import ImageCarousel from "../../Components/ImageCarousel";
import {Button, Flex, Typography} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "../../state-management/slices/ProductSlice";
import {useNavigate} from "react-router-dom";





const General = ()=>{



const dispatch = useDispatch();
const {items: products, status} = useSelector((store)=> store.products)


    useEffect(() => {

            dispatch(getProducts());

    }, [dispatch]);




console.log(products, status, "OOOO")

//get data
// const [productList, setProductList] = useState([])
//
// useEffect(() => {
//         const fetchProds =async()=>{
//             const prodList = await getProductList()
//             setProductList(prodList)
//         }
//
//         fetchProds()
//
//     }, []);

const {Text} = Typography
const style = {backgroundColor:"black", color:"white" }

const navigate = useNavigate()

const handleClickedCategory = (text) =>{

    const data = text.toLowerCase()

    console.log("clicked")
    navigate(`/${data}`, {state:{data}})
}





// Products with filter
//
// const [collectedData, setCollectedData] = useState({
//     price: [],
//     rate: ""
// })
// const [dispProds, setDispProds] = useState([])
// const [showdisplayed, setShowDisplayed] = useState([])
//
// const handlePrice = (values)=>{
//     console.log(values, "price selected");   // [10, 41]
//     setCollectedData((prev) => ({...prev, price: values}));
//
// }
//
// const handleRating = (value)=>{
//         console.log(value, "rating selected");  //// 3
//         setCollectedData((prev) => ({...prev, rate: value}));
//     }
//
// useEffect(() => {
//      setDispProds(products)
//     }, [products]);
//
// console.log(dispProds, "YTRETWE")
// console.log( collectedData)
//
// const filterProductsOnDiv = () =>{
//
//     console.log(dispProds, "infunction")
//
//
//      const a =    dispProds.filter(prod=> {
//
//          return Number(prod.productSaledPrice) >= collectedData.price[0] && Number(prod.productSaledPrice) <= collectedData.price[1] && Number(prod.productRate) <= collectedData.rate
//      })
//
//    setShowDisplayed(a)
// }

////

return (
        <div className="GenContainer">

            {/*Image Carousel*/}
            <ImageCarousel/>

            {/*Add a Categories*/}
            <Flex>
                {
                    Object.values(CATEGORIES_IMAGES_OPTIONS).map(({text, imageUrl})=>{
                        return(
                            <div onClick={() => handleClickedCategory(text)} key={text} className="categoryImageContainer">
                              <img src={imageUrl} alt={text} />
                               <h2>{text}</h2>
                            </div>
                        )
                    })
                }
            </Flex>

            {/* Product List*/}
            {/*Make Product List as a separate Component*/}
            <div>
                <h1 className="prodbuser">Products by Users</h1>


                {/*<Filter />*/}
                {/*<div className="filterCont">*/}
                {/*    <Text style={{fontSize: "1rem"}}> Filter</Text>*/}
                {/*    <div style={{width: '200px'}}>*/}
                {/*        <Text style={{fontSize: "0.8rem"}}> By Price</Text>*/}
                {/*        <Slider onChange={handlePrice} range defaultValue={[20, 50]}/>*/}
                {/*    </div>*/}
                {/*    <div style={{width: '200px'}}>*/}
                {/*        <Text style={{fontSize: "0.8rem"}}> By Rating</Text>*/}
                {/*        <Slider onChange={handleRating} min={1} max={5}/>*/}
                {/*    </div>*/}
                {/*    <Button onClick={filterProductsOnDiv}>Apply</Button>*/}

                {/*</div>*/}


                {/*Products*/}

                <div className="products">
                    {
                        products.map((prod) => {
                            return (
                                <ProductCard key={prod.productId} product={prod}/>
                            )
                        })
                    }
                </div>


            </div>


            {/*Description of Website like nice*/}
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
                    <video src={myvid} type="video/mp4" className="vido" height="360" autoPlay loop muted>
                        {/*<source src={myvid} type="video/mp4"/>*/}
                    </video>
                </div>

       </div>
)
}
export default General