import {collection, getDocs} from "firebase/firestore";
import {db} from "../../services/firebase";
import {FIRESTORE_PATH_NAMES} from "../constants/constants";

export const getProductList = async()=>{
    try{
        //// what to write?
        const product_list = collection(db, FIRESTORE_PATH_NAMES.PRODUCTS)
        const list = await getDocs(product_list);
        const products = list.docs.map(doc=>({
            id: doc.id,
            ...doc.data()
        }))

        // console.log(products)
        return products;

    }catch(e){
        console.log(e)
    }
}