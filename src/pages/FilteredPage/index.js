import React from 'react'
import {useLocation} from "react-router-dom";
import ProductCard from "../../Components/TestCard";
import {Typography, Empty, Flex} from "antd";
import Filter from "../../Components/Filter";

const {Text} = Typography;





const FilteredPage = () => {




const location = useLocation()

const category = location.state.data

console.log(category, "FFF")



    // const pathname = window.location.pathname;
    // console.log(pathname);
    //
    // console.log(pathname, "FFiuF") // /man

const products = JSON.parse(localStorage.getItem("products"))

const filtered = products.filter(item=> item.productCategory === category)

console.log(filtered, "ERER") // why after refresh products array is become empty?

if(category === "outlet"){
   return (
       <div>
           <Text style={{fontSize: "3rem"}}>Products</Text>
           <div className="products">

               {
                   products.map((prod) => {
                       return (  <ProductCard key={prod.productId} product={prod}/>  )
                   })
               }
           </div>
       </div>
   )
}

if( filtered.length === 0){
    return <div>
        <Text style={{fontSize: "3rem"}}>{category.toUpperCase()} Products</Text>
        <Empty />
    </div>
}

    return (
        <div>
            <Text style={{fontSize: "3rem"}}>{category.toUpperCase()} Products</Text>


            <Flex style={{width:"100%"}}  horizontal gap="10px">
               <div style={{width:'200px'}}>
                   <Filter  />
               </div>
                <div style={{width:"100%"}} className="products">

                    {
                        filtered.map((prod) => {
                            return (<ProductCard key={prod.productId} product={prod}/>)
                        })
                    }
                </div>
            </Flex>
        </div>
    )
}

export default FilteredPage