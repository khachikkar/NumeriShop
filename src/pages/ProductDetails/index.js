import React from "react"
import {useLocation} from "react-router-dom";
import {Button, Flex, Image, Rate, Space, Typography} from "antd";
import "./index.css"
import {addToCart} from "../../state-management/slices/CartSlice";
import {useDispatch} from "react-redux";


const { Text } = Typography;





const ProductDetails = () => {

const location = useLocation()

const data = location.state.product
// const {userId} = data

    //
    // const [user, setUser] = useState(null);
    //
    // useEffect(() => {
    //     const fetchUser = async () => {
    //         try {
    //             const userDoc = doc(db, FIRESTORE_PATH_NAMES.REGISTRED_USERS, userId);
    //             const userSnapshot = await getDoc(userDoc);
    //             if (userSnapshot.exists()) {
    //                 setUser(userSnapshot.data());
    //             } else {
    //                 console.warn("User not found for userId:", userId);
    //             }
    //         } catch (error) {
    //             console.error("Error fetching user data:", error);
    //         }
    //     };
    //
    //     if (userId) {
    //         fetchUser();
    //     }
    // }, [userId]);


// console.log(user, "OOO{")

    const dispatch = useDispatch();
    const handleProductinCart = (product)=>{
        console.log("hello", product)
        dispatch(addToCart(product))
    }

    return (
        <Flex vertical className="productDetailCont">
            <Text style={{ fontSize: "3rem" }}>Product Details</Text>

          <Flex horizontal gap="10px">
              <Image
                  width={400}
                  height={400}
                  src={data.productImageUrl}
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

              {/*<Flex horizontal  align="center" gap="10px">*/}
              {/*    <Text type="secondary" style={{fontSize:"0.9rem"}}>Product By:</Text>*/}
              {/*    <Space>*/}
              {/*        <Avatar src={user.image || null}/>*/}
              {/*        <Text>{user.name} {user.lastname}</Text>*/}
              {/*    </Space>*/}
              {/*</Flex>*/}



          </Flex>

        </Flex>
    )
}

export default ProductDetails;