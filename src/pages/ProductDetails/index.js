import React from "react"
import {useLocation} from "react-router-dom";
import {Button, Flex, Image, Rate, Space, Typography} from "antd";
import "./index.css"
import {addToCart} from "../../state-management/slices/CartSlice";
import {useDispatch, useSelector} from "react-redux";
import ProductCard from "../../Components/TestCard";


const { Text } = Typography;


const ProductDetails = () => {

const location = useLocation()

const data = location.state.product



    // Get a data for add a cart

    const dispatch = useDispatch();
    const handleProductinCart = (product)=>{
        console.log("hello", product)
        dispatch(addToCart(product))
    }


    // Add a similar products, get froduct list from store
    const {items: products} = useSelector((store)=> store.products)

    return (
        <Flex vertical className="productDetailCont">
            <Text style={{ fontSize: "3rem" }}>Product Details</Text>

          <Flex horizontal gap="10px">
              <Image
                  width={400}
                  height={400}
                  src={data.productImageUrl}
                  style={{objectFit:"cover"}}
              ></Image>

              <Flex vertical gap="middle">
                  <Text style={{ fontSize: "2rem" }}>{data.productName}</Text>
                  <Rate disabled defaultValue={data.productRate} />
                  <Text style={{ color:"gray", fontSize: "1rem" }}>Product Description</Text>
                  <Text style={{ fontSize: "1rem" }}>{data.productDescription}</Text>

                  <Text style={{ color:"gray", fontSize: "1rem" }}>Product Size</Text>
                  <Text style={{ fontSize: "1rem" }}>{data.productSizes}</Text>

                  <Space> <Text style={{ fontSize: "2rem" }}>${data.productSaledPrice}</Text><Text>${data.productPrice}-old price</Text></Space>
                  <Button onClick={()=>handleProductinCart(data)} style={{marginBottom:"20px", width:"180px", backgroundColor:"black"}} type="primary">Add to Cart</Button>
              </Flex>

          </Flex>

            <Text style={{ marginTop:"32px", fontSize: "3rem" }}>Similar Products</Text>

            <Flex gap="small">
                {
                    products.slice(0, 4).map((prod) => {
                        return (
                            <ProductCard key={prod.productId} product={prod}/>
                        )
                    })
                }
            </Flex>

        </Flex>
    )
}

export default ProductDetails;