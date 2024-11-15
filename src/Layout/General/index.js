import React, {useEffect, useState} from "react";
import TestPage from "../../pages/TestPage";
import "./index.css"
import ProductCard from "../../Components/TestCard"



import {collection, getDocs} from "firebase/firestore";
import {db} from "../../services/firebase";
import {FIRESTORE_PATH_NAMES} from "../../core/constants/constants";



const getProductList = async()=>{
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
           <TestPage />
           <div>
               <h1 style={{marginBottom:"30px"}}>Products by Users</h1>
              <div className="products">
                  {
                      productList.map((prod)=>{
                          return (
                              <ProductCard key={prod.productId} product={prod} />
                          )
                      })
                  }
              </div>
           </div>
        </div>
    )
}

export default General